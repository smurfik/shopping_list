window.onload = function () {

  var addBtn = document.getElementById("add"),
      input = document.getElementById("input"),
      list = document.createElement('ul'),
      li, content, checkbox;

  document.body.insertBefore(list, null);

  var addLi = function (value) {
    li = document.createElement('li');
    content = document.createTextNode(value);
    li.appendChild(content);
    list.insertBefore(li, list.firstChild);
  };

  var addCheckbox = function () {
    checkbox = document.createElement('button');
    content = document.createTextNode('complete');
    checkbox.appendChild(content);
    li.insertBefore(checkbox, null);

    checkbox.addEventListener("click", function(event) {
      event.preventDefault();
      this.parentNode.style.color = "#D3D3D3";
      this.parentNode.parentNode.appendChild(this.parentNode);
      this.parentNode.removeChild(this);
    });
  };

  addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (input.value !== "") {
      addLi(input.value);
      addCheckbox();
      input.value = "";
    }
  });
};
