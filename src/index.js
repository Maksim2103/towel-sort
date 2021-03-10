// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }
    return matrix.reduce((acc, el, i) => {
        return acc.concat(!(i % 2) ? el : el.reverse());
    });
};
