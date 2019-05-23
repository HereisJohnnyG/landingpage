window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("formul").style.visibility = "visible";

    } else {
        document.getElementById("formul").style.visibility = "hidden";
//        document.getElementById("nome1").value = document.getElementById("nome").value;
//        document.getElementById("email1").value = document.getElementById("email").value;
    }
}

function escrever() {
    document.getElementById("nome").value = document.getElementById("nome1").value;
    document.getElementById("email").value = document.getElementById("email1").value;
}
function escrever_nav() {
        document.getElementById("nome1").value = document.getElementById("nome").value;
        document.getElementById("email1").value = document.getElementById("email").value;
}