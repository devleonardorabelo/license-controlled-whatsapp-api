var element = document.querySelector('body')

var script = document.querySelector('#gerenciazap')

const license = script.getAttribute('license-key')
const url     = window.location.href
const company = script.getAttribute('company')

element.innerHTML = `<link rel="stylesheet" href="public/css/WTSthemeclean.css"><a href="#" class="wtsIcon"><i class="notificationWTS">1</i><img src="public/img/whatsapp.svg" alt="WhatsApp"></a><div class="windowWTS"><div class="formWTS"><form action="http://192.168.25.104:21068/send?key=${license}&url=${url}" target="_blank" method="POST"><input type="text" name="name" placeholder="Nome" required><input type="tel" name="whatsapp" placeholder="DDD + Número" required><input type="email" name="mail" placeholder="E-mail" required><textarea name="message" rows="3" placeholder="Sua Mensagem" required></textarea><input type="submit" value="Enviar"></form></div><div id="chatWTS"><header><div class="profileWTS"><img src="" alt=""><i class="onlineWTS"></i></div><div class="infoWTS"><div>${company}<span>online</span></div></div></header><div class="containerWTS"><div class="msgWTS"><span class="nameWTS"><strong>${company}</strong></span><p class="messageWTS">Olá, tudo bem?<br/>Como podemos ajudar?</p><span class="timeWTS">10:36</span></div></div><div class="sendWTS"><a href="#" class="buttonWTS"><img src="public/img/send.svg" alt="Enviar"> Enviar Mensagem</a></div></div></div>`

document.querySelector(".buttonWTS").onclick = function() {
    document.querySelector("#chatWTS").classList.add("fadeOut");
    document.querySelector(".formWTS input[name='name']").focus();
}
document.querySelector(".wtsIcon").onclick = function() {
    document.querySelector(".windowWTS").classList.toggle('visibility');
    document.querySelector(".windowWTS").style.animationDelay="0s";
}

