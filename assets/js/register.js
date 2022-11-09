
var formulario = document.getElementById('form');


formulario.addEventListener('submit',function(e){
   e.preventDefault()
   console.log("me has dado click");

   var datos = new FormData(formulario);

   console.log(datos);
   console.log(datos.get('email'));
   console.log(datos.get('pass'));

fetch('',{
    method:'POST',
    body:datos
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})
 

