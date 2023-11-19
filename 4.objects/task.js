function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function addMarks(...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  let avrge = this.marks.reduce((sum, value, index, marks) => {
    sum += value;
        if (index === marks.length - 1) {
      return sum / marks.length;
    }

    return sum;
  },0);
  return avrge;
};

Student.prototype.exclude = function (reason) {
delete this.marks;
delete this.subject;
this.excluded = reason ;
};

new Student("Максим", "мужской", 26);
new Student("София", "женский", 21);

