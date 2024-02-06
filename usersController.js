const express = require('express');
const studentData = require('./data.json');
const controller = express.Router();

// - /users/

controller.get('/', (req, res) => {
    let { limit } = req.query
    limit = Number(limit);

    if(typeof limit != 'number' || !limit){
        res.send(studentData.students);
    }
    else{
        const requestedAmountOfStudents = studentData.students.slice(0, limit);
        res.send(requestedAmountOfStudents);
    }
})

controller.get('/:id', (req, res) => {
    const { id } = req.params;
    const studentArray = studentData.students;

    const foundStudent = studentArray.find((student) => id === student.id);

    res.send(foundStudent);
})

module.exports = controller;