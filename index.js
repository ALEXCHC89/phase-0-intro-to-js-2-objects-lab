// Write your solution in this file!
const employee = {name: 'alex', streetAddress: '31 capri'}

function updateEmployeeWithKeyAndValue(employee, name, value = 'Sam') {
    const newGuy = {...employee};
    newGuy[name] = value;
    return newGuy
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value = '12 Broadway') {
    employee[streetAddress] = value;
    return employee 
}
function deleteFromEmployeeByKey (employee, name = 'Carl') {
    const newGuy2 = {...employee};
    delete newGuy2[name];
    //or delete newGuy2.name;
    return newGuy2
}
function destructivelyDeleteFromEmployeeByKey (employee, name) {
    let newEmployee = employee;
    delete employee[name]
     return newEmployee
}
