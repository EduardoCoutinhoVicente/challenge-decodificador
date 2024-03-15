 

var mostrarTexto= document.getElementById('mostrarTexto');//div para mostrar ou ocultar a saida de texto
mostrarTexto.style.display = 'none';

var mostrarImg= document.getElementById('mostrarImg');
mostrarImg.style.display = '';



function criptografar() {
   // Obter o valor atual do campo de entrada
var  entradaDeTexto =document.getElementById("entradaDeTexto").value;
 
// Expressão regular para verificar se há letras maiúsculas
var regex = /[A-Z]/;

  // Verificar se o valor do campo de entrada contém letras maiúsculas
  if (regex.test(entradaDeTexto)) {

      // Se houver letras maiúsculas, exibir um alerta
      alert("Por favor, digite apenas letras minúsculas.");
  } else {
       // Caso contrário, criptografar o texto
      var  resultado = entradaDeTexto
      .replaceAll("e","enter")
      .replaceAll("i","imes")
      .replaceAll("a","ai")
      .replaceAll("o","ober")
      .replaceAll("u", "ufat");
  
      // Definir o resultado no campo de saída
      document.getElementById("saidaDeTexto__mensagem").value = resultado;

      // Exibir a saída de texto e ocultar a imagem
      mostrarTexto.style.display = '';
      mostrarImg.style.display = 'none';
  }
}

function descriptografar() {
   // Obter o valor atual do campo de entrada
   var  entradaDeTexto =document.getElementById("entradaDeTexto").value;

   // Expressão regular para verificar se há letras maiúsculas
   var regex = /[A-Z]/;
   
     // Verificar se o valor do campo de entrada contém letras maiúsculas
     if (regex.test(entradaDeTexto)) {
   
         // Se houver letras maiúsculas, exibir um alerta
         alert("Por favor, digite apenas letras minúsculas.");
     } else {
          // Caso contrário, criptografar o texto
    var  resultado = entradaDeTexto
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
      // Definir o resultado no campo de saída
      document.getElementById("saidaDeTexto__mensagem").value = resultado;

      // Exibir a saída de texto e ocultar a imagem
      mostrarTexto.style.display = '';
      mostrarImg.style.display = 'none';
  }
  }


  function copiarTexto() {
    var texto=document.getElementById("saidaDeTexto__mensagem").value
     // Criar um elemento de input temporário
     var inputTemporario = document.createElement("input");

     // Definir o valor do input para o texto que queremos copiar
     inputTemporario.setAttribute("value", texto);
 
     // Anexar o input temporário ao corpo do documento
     document.body.appendChild(inputTemporario);
 
     // Selecionar o texto dentro do input
     inputTemporario.select();
 
     // Executar o comando de cópia
     document.execCommand("copy");
     // Remover o input temporário
    document.body.removeChild(inputTemporario);
  }
