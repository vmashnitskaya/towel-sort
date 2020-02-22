
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let sortedMatrix = [];
    let result = [];
    
    if (!matrix) return sortedMatrix;

    matrix.map((element, index) => (index == 0 || index % 2 == 0) ? sortedMatrix.push(element) : sortedMatrix.push(element.reverse()));


    for (let i = 0; i < sortedMatrix.length; i++) {
        for (let a = 0; a < sortedMatrix[i].length; a++) {
            result.push(sortedMatrix[i][a]);
        }
    }

    return result;
}
