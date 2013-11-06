/*

 UI assist functions
yo
*/

alert("in ui.js: ")
//show a loading screen when launched, until we get the user's session back

alert("in ui.js: about to call setAction")
setAction("Loading Hackbook", true);
alert("in ui.js: returned from setAction")

//Swaps the pages out when the user taps on a choice
function openPage(pageName, ignoreHistoryPush) {
 alert("1")
  window.scrollTo(0,1);
alert("2")
  var els = document.getElementsByClassName('page');
  alert("3")
  for (var i = 0 ; i < els.length ; ++i) {
    els[i].style.display = 'none';
  }
  alert("4")
  var page = document.getElementById('page-' + pageName);
  alert("5")
  page.style.display = "block";
  alert("6")
  title = (pageName == 'root') ? 'Hackbook' : pageName.replace(/-/g, ' ');
  alert("7")
  document.getElementById('title').innerHTML = title;
  alert("8")
  if (ignoreHistoryPush != true) {
   alert("9")
    window.history.pushState({page: pageName}, '', document.location.origin + document.location.pathname + "#" + pageName);
  }
alert("10")
  document.getElementById('back').style.display = (pageName == 'root') ? 'none' : 'block';
  alert("11")
}

window.onpopstate = function(e) {
  if (e.state != null) {
    console.log(e.state);
    openPage(e.state.page);
  }
  else {
    openPage('root', true);
  }
}

alert("in ui.js: about to call openPage")
openPage('root', true);
alert("in ui.js: returned from openPage")

//Shows a modal dialog when fetcing data from Facebook
function setAction(msg, hideBackground) {
  document.getElementById('action').style.display = 'block';
  
  if (hideBackground) {
    document.getElementById('action').style.opacity = '100';
  }
  else {
    document.getElementById('action').style.opacity = '.9';
  }
  
  document.getElementById('msg').innerHTML = msg;
  
  //window.scrollTo(0, 1);
}

//Clears the modal dialog
function clearAction() {
  document.getElementById('msg').innerHTML = '';
  
  document.getElementById('action').style.display = 'none';
}

//Automatically scroll away the address bar
addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);

function hideURLbar() {
  window.scrollTo(0,1);
}

function hideButton(button) {
  button.style.display = 'none';
}
