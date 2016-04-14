var prompt = require('prompt');
var fs = require('fs');
var Student = require('./student.js');
var Bus = require('./bus.js');

var yellowBus = new Bus();
prompt.start();
prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
    if (result.name) {
        var newStudent = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
        newStudent.canStudentHaveFun();
        yellowBus.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
    };
});
