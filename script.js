var section = document.createElement('section');
section.classList.add('calculator');

var form = document.createElement('form');
section.appendChild(form);

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.classList.add('screen');
form.appendChild(input);

var div = document.createElement('div');
div.classList.add('buttons');
section.appendChild(div);

var buttonLabels = ['*', '/', '-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
for (const label of buttonLabels) {
  var button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('btn');
  if (label.match(/[0-9,.]/)) {
    button.classList.add('btn-grey');
  } else {
    button.classList.add('btn-yellow');
  }
  button.textContent = label;
  button.dataset.num = label;
  button.addEventListener('click', function() {
    input.value += label;
  });
  div.appendChild(button);
}

var equal = document.createElement('button');
equal.setAttribute('type', 'button');
equal.classList.add('btn-greya');
equal.textContent = '=';
equal.addEventListener('click', calculateResult);
function calculateResult() {
  if (input.value === "") {
    input.value = "";
  } else {
    var answer = eval(input.value);
    input.value = answer;
  }
}
div.appendChild(equal);

var clear = document.createElement('button');
clear.setAttribute('type', 'button');
clear.classList.add('btn-greyb');
clear.textContent = 'C';
clear.addEventListener('click', clearInput);
function clearInput() {
    input.value = "";
  }
div.appendChild(clear);

document.body.appendChild(section);
