"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function Student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', { value: function () { return config.course; } });
        // Object.defineProperty(target.prototype, 'course', {value: () => "Angular 2"})
        Object.defineProperty(target.prototype, 'follower', { value: 'pratyush' });
    };
}
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person = __decorate([
        Student({ 'course': 'hello' })
    ], Person);
    return Person;
}());
var asim = new Person('Shivam', 'Kumar');
console.log(asim.follower);
console.log(asim.course());
