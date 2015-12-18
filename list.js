window.onload = function () {

  var addBtn = document.getElementById("add"),
      input = document.getElementById("input"),
      list = document.createElement('ul'),
      container = document.getElementsByClassName("container"),
      li, content, checkbox, x, remove;

  container[0].appendChild(list);

  var addLi = function (value) {
    li = document.createElement('li');
    content = document.createTextNode(value + " ");
    li.appendChild(content);
    list.insertBefore(li, list.firstChild);
  };

  var addCheckbox = function () {
    checkbox = document.createElement('button');
    content = document.createTextNode('v');
    checkbox.appendChild(content);
    li.insertBefore(checkbox, null);
    checkbox.className = "btn btn-success";

    checkbox.addEventListener("click", function(event) {
      event.preventDefault();
      this.parentNode.style.color = "#D3D3D3";
      this.parentNode.style.setProperty("text-decoration", "line-through");
      this.parentNode.parentNode.appendChild(this.parentNode);
      this.parentNode.removeChild(this);
    });
  };

  var addX = function () {
    x = document.createElement('button');
    content = document.createTextNode('X');
    x.appendChild(content);
    li.insertBefore(x, null);
    x.className = "btn";

    x.addEventListener("click", function(event) {
      event.preventDefault();
      li = this.parentNode;
      li.removeChild(this);
      remove = document.createElement('button');
      content = document.createTextNode('Remove');
      remove.appendChild(content);
      li.insertBefore(remove, null);
      remove.className = "btn btn-danger"

      remove.addEventListener("click", function(event) {
        event.preventDefault();
        li = this.parentNode;
        li.parentNode.removeChild(li);
      });
    });
  };

  addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (input.value !== "") {
      addLi(input.value);
      addCheckbox();
      addX();
      input.value = "";
    }
  });
};
