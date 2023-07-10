function sortear(){
  var validador = localStorage.getItem('desconto')

  if(validador.length == 0 || validador == null){
    document.getElementById('box1').style.display = 'block'
    document.getElementById('box2').style.display = 'block'
    document.getElementById('slot3').style.display = 'block'

    var aleatoryNum1 = Math.floor(Math.random() * 2);

    setTimeout(function() { 
        document.getElementById('slot1').innerText = aleatoryNum1
        document.getElementById('box1').style.display = 'none'
    
    }, 3000);

    var aleatoryNum2 = Math.floor(Math.random() * 9);

    setTimeout(function() {
        document.getElementById('box2').style.display = 'none'
        document.getElementById('slot2').innerText = aleatoryNum2
    }, 4000);

    var numero = aleatoryNum1.toString() + aleatoryNum2.toString()
    localStorage.setItem("desconto", numero)
  }
  else{
    swal({
      title: "ERRO!",
      text: "Você ja resgatou um cupom!",
      icon: "warning",
      button: "ok",
    });
  }
  
}

function callAlert(){
  
  var validador = localStorage.getItem('atividade')

  if(validador == 1){
    swal({
      title: "ERRO!",
      text: "Voce ja resgatou um cupom!",
      icon: "warning",
      button: "ok",
    });
  }
  else{
    swal("Olá! Aqui você consegue um cupom de desconto na loja OthekBooks", "Para isso é necessário nos informar seu nome:", "imagens/logo.png",{
    content: "input",
    })
    .then((value) => {
      if(value.length == 0 || value == null){
        swal({
          title: "ERRO!",
          text: "É necessário informar seu nome!",
          icon: "warning",
          button: "ok",
        });
        window.onload()
      }
      else{
        localStorage.setItem("nome", value)
        localStorage.setItem("desconto", "")
        localStorage.setItem("atividade", 1)
        swal({
          title: "Muito bem!",
          text: "Tente sua sorte! Você poderá ter um desconto de 1 a 20%",
          icon: "success",
          button: "Continuar",
        })
      }
    })
  }
}

function callInfor(){
  swal({
    title: "Cupom Gerado!",
    text: "Valide seu cupom e entre em contato com @othek_books para usar o cupom. Tire print e e nos mande pelo Instagram ou WhatsApp.",
    icon: "success",
    buttons: "Ver cupom",
  })
  document.getElementById("nome").value = localStorage.getItem("nome")
  document.getElementById("desconto").value = localStorage.getItem("desconto") + "%"
}

function validar(){
  var n = localStorage.getItem("nome")
  var d = localStorage.getItem("desconto")
  if(n.length == 0 || d.length == 0){
    swal({
      title: "ERRO!",
      text: "Você ainda não gerou o desconto",
      icon: "warning",
      button: "ok",
    });
  }
  else{
    window.location = "cupom.html"
  }
}