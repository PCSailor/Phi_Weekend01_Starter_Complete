$( document ).ready(function(){
  console.log("jQuery sourced correctly");
  // #=ID/single instance-&-dot.=Class/multiple instances







  $('#submitNewEmployee').on('click', function(){ // event listener on submitNewEmployee Button
    // Declaring variables and retrieving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    // adds new employee row to DOM
    $('#employeeTableBody').append(
      '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + idNumber + '</td>' +
        '<td>' + jobTitle + '</td>' +
        '<td>' + annualSalary + '</td>' +
        '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + '">Delete ' + firstName + '</button></td>' +
        // data-salary // data stores data on the DOM but not on page, salary can be any name
      '</tr>'
      );

    // Add monthly salary expenses to the DOM
    var newEmployeeMonthlyExpenses = annualSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var totalMonthlyExpenses = parseInt(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);

    // Clear out input boxes
    $('.employeeFormInput').val('');
  });

  // Adding listener for clicking delete employee buttons
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    // Removing employee salary from total
    // var deletedEmployeeSalary = $(this).parent().prev().text(); // add a column and this grabs the wrong data // points to annual salary //this is button, parent is td, prev is annual salary, asking for the text
    var deletedEmployeeSalary = $(this).data('salary'); // using data locks the value into annual salary
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text(); // gets text from monthlyExpenses
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);

    // Selecting and deleting employee row from table
    $(this).parent().parent().remove();
  });












console.log('------------------------------------------');
  // $(function() {
  //   var employeeEntryForm = $('#employeeForm'), displayData = $('#displayData');
  //   $('button[type="button"]').on('click', function(e) {
  //     e.preventDefault();
  //     formData = employeeEntryForm.serializeArray();
  //
  //     // NOTE: Display User Data
  //     $.each(formData, function(i, data) {
  //       if (displayData !== "") { // added this code
  //         $('#new-ul').append('<li>' + data.name + ": " + data.value + '</li>'); // added this code
  //
  //         var employeeSalary6 = $('#annualSalary').val();
  //         console.log('employeeSalary6'); // school code - gets value in input box
  //
  //       } // NOTE: for
  //     }); // NOTE: for
  //   }); // NOTE: for $('button[type="button"]').on('click', function(e) {
  //   }); // NOTE: for $(function() {
  console.log('------------------------------------------');
    }); // NOTE: for starting $(document).ready(function(){
// NOTE: END jQuery
//
//
//
// NOTE: Javascript Starts
      console.log(new Date().getFullYear() + " Javascript Code test");
