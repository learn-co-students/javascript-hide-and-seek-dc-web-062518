function getFirstSelector(selector) {
  let a = document.querySelector(selector)
  return a
}

function nestedTarget() {
  let a = document.querySelector('.target')
  return a
}

function increaseRankBy(n) {
  var a = document.querySelectorAll('ul.ranked-list');
  for(var i = 0; i < a.length; i++) {
    a[i].innerHTML = parseInt(a[i].innerHTML) + n; // parses a[i].html to an integer
  }
  return a;
}

function deepestChild() {
  let deep = document.querySelector('#grand-node div div div div')
  return deep
}
