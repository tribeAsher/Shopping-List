let button = document.getElementById('addBtn');
let field = document.getElementById('blankField');

button.addEventListener('click', function(){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(field.value));

  let delBtn = document.createElement('button');
  delBtn.appendChild(document.createTextNode('delete'));
  delBtn.onclick = function(){
    ul.removeChild(li);
  };
  li.appendChild(delBtn);

  ul.appendChild(li);
  field.value = '';
})