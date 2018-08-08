function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target");
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}

function increaseRankBy(n) {
  let x = document.querySelectorAll("ul.ranked-list");
  for (var i = 0; i < x.length; i++) {
    x[i].innerHTML = parseInt(x[i].innerHTML) + n;
  }
  return x;
}
