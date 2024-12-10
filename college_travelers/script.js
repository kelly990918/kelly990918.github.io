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

// Popup
var modal = document.getElementById("popup-modal");
var btn = document.getElementById("popup-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
    document.getElementById("popup-modal").style.
    display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// popup2
var modal = document.getElementById("popup-modal2");
var btn = document.getElementById("popup-btn2");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
    document.getElementById("popup-modal").style.
    display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}