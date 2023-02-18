var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName2 = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2('javid ashwaq here');
console.log(person2.getName2());
