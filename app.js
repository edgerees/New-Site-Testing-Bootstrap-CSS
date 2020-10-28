function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Personal-Fitness");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
  }
