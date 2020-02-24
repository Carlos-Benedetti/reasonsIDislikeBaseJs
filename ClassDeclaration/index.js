class One {
    constructor(testeOne = "") {
        this.testeOne = testeOne
    }
}
const Two = (function () {
    function Two(testTwo) {
        this.testTwo = testTwo;
    }
    return Two;
}());

const Tree = function (testTree) {
    this.testTree = testTree
};

exports.One = One
exports.Two = Two
exports.Tree = Tree