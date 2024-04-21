$(document).ready(function() {
  let expression = "";
  
  $(".number").click(function() {
    const value = $(this).text();
    expression += value;
    $("#result").val(expression);
  });

  $(".operator").click(function() {
    const operator = $(this).text();
    expression += " " + operator + " ";
    $("#result").val(expression);
  });

  $("#equals").click(function() {
    try {
      const result = eval(expression);
      $("#result").val(result);
      expression = result.toString();
    } catch (error) {
      $("#result").val("Error");
      expression = "";
    }
  });

  $("#clear").click(function() {
    expression = "";
    $("#result").val("");
  });
});
