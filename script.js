// complete this js code
function Person(name, age) {
    this.name=name,
	this.age=age,	
	greet(){
		console.log('Hello, my name is $(this.name), I am $(this.age) years old');
	}
}

function Employee extends Person(name, age, jobTitle) {
     super();
	 this.name=name,
	this.age=age,
	this.jobTitle=jobTitle,
	jobGreet(){
		console.log('Hello, my name is $(this.name), I am $(this.age) years old');
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
