
function getFirstSelector(selector){
  return document.querySelector(selector)
};

function nestedTarget(){
   return (document.getElementById("nested")).getElementsByClassName("target")[0]
};

function deepestChild(){
    return (document.getElementById("grand-node")).querySelectorAll('div div div div div')[0]
};



function increaseRankBy(n){
  let i;
  let b = document.querySelectorAll('li');
 for (i = 0; i < document.querySelectorAll('li').length; i++){
   b[i].innerHTML = n + parseInt(b[i].innerHTML)

 };
return b;
};

// let d = document.getElementsByClassName("ranked-list")[0]
// let e = document.getElementsByClassName("ranked-list")[1]
// n + parseInt((d.getElementsByTagName('li'))[0].innerText)
// n +
