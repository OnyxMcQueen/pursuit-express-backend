function calculateThreePointAverage(averageArray){

    const sumOfAllAverages = averageArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

    return Number((sumOfAllAverages / averageArray.length).toFixed(1)) || 0;
}

module.exports = {
    calculateThreePointAverage
}