//plus operation
plusButton = document.getElementById("plusButton");
plusOperation = function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  sum = parseInt(number1.value) + parseInt(number2.value);
  result = document.getElementById("result");
  result.innerText = sum;
};
plusButton.addEventListener("click", plusOperation);

//minus peration
minusButton = document.getElementById("minusButton");
minusButton.addEventListener("click", function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  minus = parseInt(number1.value) - parseInt(number2.value);
  //console.log(minus);
  result = document.getElementById("result");
  result.innerText = minus;
});

//mult Operation
multButton = document.getElementById("multButton");
multButton.addEventListener("click", function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  mult = parseInt(number1.value) * parseInt(number2.value);
  //console.log(minus);
  result = document.getElementById("result");
  result.innerText = mult;
});

//Div Operation
divButton = document.getElementById("divButton");
divButton.addEventListener("click", function () {
  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");
  div = parseInt(number1.value) / parseInt(number2.value);
  //console.log(minus);
  result = document.getElementById("result");
  result.innerText = div;
});
