// Write your solution in this file!
const employee =  {
    name: "Priscilla", 
    streetAddress: "Tom Mboya"
}

/*function should take in three arguments ,return a new Object that has an updated value for the key passed in. */
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee, "name", "George");
console.log(updateEmployee);
console.log(employee);

//this function mutates the employee Object passed in.
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "Kimathi street");
console.log(updatedEmployee);
console.log(employee);


/* this function deletes the property with that key from the employee Object and does not mutate the original employee Object */
function deleteFromEmployeeByKey(employee, key, value) {
    return {...employee, [key]:value}
}
const noNameEmployee = deleteFromEmployeeByKey(employee, "name", "Priscilla")
delete noNameEmployee.name;
console.log(noNameEmployee);
console.log(employee);

/*this function mutates the employee Object. */
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee);