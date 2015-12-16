window.onload = function () {

  var addBtn = document.getElementById("add"),
      input = document.getElementById("input"),
      list = document.createElement('ul'),
      li, content;

  document.body.insertBefore(list, null);

  var addElement = function (value) {
    li = document.createElement('li');
    content = document.createTextNode(value);
    li.appendChild(content);
    list.appendChild(li);
  };

  addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (input.value !== "") {
      addElement(input.value);
      input.value = "";
    }
  });
};

