//@ts-check
module.exports.classes = {}
class One {
    constructor(list) {
    }
}
const Two = function (list) {
    function X(list) {
        console.log(list)
    }
}
module.exports.classes.One = One
module.exports.classes.Two = Two
