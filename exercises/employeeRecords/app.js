// const employees = []

// function Employee(name, jobTitle, salary){
//     this.name = name
//     this.jobTitle = jobTitle
//     this.salary = salary
//     this.status = 'Full Time'
//     this.printEmployee = () => `Name ${this.name} Job Title: ${this.jobTitle} Salary: ${this.salary} Status: ${this.status}`
        
// }

// const employeeOne = new Employee('Jeremy', 'Janitor', '3k per year')
// const employeeTwo = new Employee('Sam', 'barber', '50k per day')
// const employeeThree = new Employee("Evan", "CEO", "A modest 45k per year")
// employeeOne.status = "Contract"

// // console.log(employeeOne.printEmployee())
// // console.log(employeeTwo.printEmployee())
// // console.log(employeeThree.printEmployee())
// employees.push(employeeOne.printEmployee(), employeeTwo.printEmployee(), employeeThree.printEmployee())
// console.log(employees)

// const employees = []

// function Employee(name, jobTitle, salary){
//     this.name = name
//     this.jobTitle = jobTitle
//     this.salary = salary
//     this.status = "Full Time"
// }

// Employee.prototype.printEmployeeForm = function(){ 
//     console.log(`Employee Name: ${this.name} Employee Job Title: ${this.jobTitle} Salary: ${this.salary} Status: ${this.status}`)
// }

// const newEmployee1 = new Employee('Jeremy', 'plumber', '49058452058203957 dollaz an hour')
// newEmployee1.status = 'part time'
// newEmployee1.printEmployeeForm()
// employees.push(newEmployee1)
// console.log(employees)

const employees = []

function Employee(name, jobTitle, salary,){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full-time"
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name} Job Title: ${this.jobTitle} Salary: ${this.salary} Status: ${this.status}`)
}


const jeremy = new Employee('Jeremy', 'Barber', '$32k per year')

jeremy.printEmployeeForm()