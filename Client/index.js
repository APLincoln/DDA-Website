

window.addEventListener('load', () => {
  document.getElementById("dropbtnID").addEventListener('click', () => {setDrop()});
});

function setDrop(){
  document.getElementById("dropMenu").classList.toggle("show");
}

window.onclick = function(event) {
  if(!event.target.matches(".dropbtn") && !event.target.matches('.droplink') && !event.target.matches('.dropdown-content')){
    if(document.getElementById('dropMenu').classList.contains('show')){
      document.getElementById('dropMenu').classList.remove('show')
    }
  }
}
