// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function () {

  let employees = [];
  let addEmployees = true;

  while (addEmployees) {
    alert ("Input employee Firstname, Lastname, and Salary");

    //Define alerts
    let employeeFirstName = prompt("Input Firstname");
    let employeeLastName = prompt("Input Lastname");
    let employeeSalary = prompt("Input Salary");

    //Define object
    if (isNaN(employeeFirstName) && isNaN(employeeLastName) && !isNaN(employeeSalary)) {
      let employee = {
        firstName: employeeFirstName,
        lastName: employeeLastName,
        salary: parseFloat(employeeSalary),
      };

      //Add object to array
      employees.push(employee);

    } else {
      alert("Invalid input, use alphanumerics for names and a number for salary");
      continue;
    }

    //Confirm for continued input 
    addEmployees = confirm("Do you want to add more employees?");
  }
  return employees;

};


// Display the average salary
// TODO: Calculate and display the average salary
const displayAverageSalary = function (employeesArray) {
  let sumSalary = 0;
  
  //Use .forEach method to target and execute for each array element
  employeesArray.forEach(employee => {
    sumSalary += employee.salary;
  });
  //Calculate average by dividing sumSalary by the total employees number
  let averageSalary = sumSalary / employeesArray.length;
  //Display average salary
  //Use Fixed() to format the Salary notation 
  console.log("Average Salary:", averageSalary.toFixed(2));
};


// Select a random employee
// TODO: Select and display a random employee
const getRandomEmployee = function (employeesArray) {
  //If loop if no info is inputed
  if (employeesArray.length === 0) {
    alert("No employee to draw. Enter employees");
    return;
  }
  //Generate random number for Array using Math 
  const randomDraw = Math.floor(Math.random()*employeesArray.length);
  const randomEmployee = employeesArray[randomDraw];

  console.log(`Congratulations to ${randomEmployee.firstName}${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
