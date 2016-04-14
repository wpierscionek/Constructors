function Student (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function(){
		if(this.detentions < 10 && this.GPA > 2) {
			console.log(this.name + "can have fun");
		};
	};

};
module.exports = Student;