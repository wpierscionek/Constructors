var Student = require('./student.js');
var fs = require('fs');

var Bus = function(studentsOnTheBus, driverName, color, gas) {
    this.studentsOnTheBus = [];
    this.driverName = driverName;
    this.color = color;
    this.gas = gas;

    this.studentEntersBus = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {
        this.studentsOnTheBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase));
        console.log(name + " enters the bus!");
        fs.appendFile("schoolbus.txt", JSON.stringify(this.studentsOnTheBus), function(error) {
            console.log("your input has been saved");
            if (error)
                throw error;
        });

    };

};
module.exports = Bus;
