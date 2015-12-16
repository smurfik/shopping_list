window.onload = function () {

  var addBtn = document.getElementById("add"),
      input = document.getElementById("input"),
      sep = document.getElementById("sep"),
      list = document.createElement('ul'),
      li, content;

  var addElement = function (value) {
    li = document.createElement('li');
    content = document.createTextNode(value);
    li.appendChild(content);
    list.appendChild(li);
    document.body.insertBefore(list, sep);
  };

  addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (input.value !== "") {
      addElement(input.value);
      input.value = "";
    }
  });
};

