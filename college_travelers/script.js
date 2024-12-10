// Login
var login = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == login) {
        modal.style.display = 'none';
    }
}

function hideModal(modalID) {
    document.getElementById('id01').style.display = "none";
}

function on() {
  document.getElementById("id01").style.display = "block";
}

function off() {
  document.getElementById("id01").style.display = "none";
}