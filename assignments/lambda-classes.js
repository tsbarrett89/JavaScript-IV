// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this. location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning ${subject}`
    }
    grade(Student, subject){
        return `${Student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects.join(' and ')}`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor{
    constructor(projectManagerAttr){
        super(projectManagerAttr);
        this.gradClassName = projectManagerAttr.gradClassName;
        this.favInstructor = projectManagerAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(Student, subject){
        return `${this.name} debugs {Student.name}'s code on ${subject}`
    }
}


