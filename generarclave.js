var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var dni = document.querySelector("#dni");
var fecha= document.querySelector("#fecha");
var form = document.querySelector("#form")
var respuesta =  document.querySelector("#respuesta")





function generar_clave(evento) 
{

    var clave = nombre.value.substring(0,2);
    clave += apellido.value.substring(0,2);
    clave += dni.value;
    clave += fecha.value.substring(8);
    clave += fecha.value.substring(3,5);
    clave += fecha.value.substring(0,2);

    respuesta.innerHTML = "Tu clave es:" + clave.toUpperCase();
        
        evento.preventDefault();
        alert("Enviando formulario");


}


function validar_campos (evento) {

    var expRegNombre =  /^([A-Z a-zñáéíóúÁÉÍÓÚ]+[\s]*)+$/;
    var expRegapellido =  /^([A-Z a-zñáéíóúÁÉÍÓÚ]+[\s]*)+$/;
    var expRegDni =  /^([0-9]+)+$/;

    ///^([A-Z][a-zñáéíóú]+[\s]*)+$/;
 
    //value almacena el dato ingresado
    //|| es un or
    //target es el input del html 
    var quedato = evento.target;

    //||      quedato.id ==   "apellido")
    


    if(evento.target.id =="nombre")
        {
       
        
        if(!expRegNombre.exec(quedato.value))
        { 
            alert("el campo nombre, solo acepta letras y espacios en blanco");
            setTimeout(function(){

                quedato.focus();

            },100);

            // quedato.value =  "";
           
        }      
      
         
    }
    // color = (validarcampo)?"gren":"red";
    //     quedato.style.outline = "thin solid" +color;

    // 
    

    if(quedato.id =="dni")
        {
       
        
        if(!expRegDni.exec(quedato.value))
        { 
            alert("Ingrese solo numeros");
            
            

            setTimeout(function(){

                quedato.focus();

            },100);
            
        }      
    }


    if(quedato.id =="apellido")
    {
   
    
        if(!expRegapellido.exec(quedato.value))
        { 
            alert("el campo nombre, solo acepta letras y espacios en blanco");
            
            

            setTimeout(function(){

                quedato.focus();

            },100);
        }
    }   
    
    



}

// document.getElementsByTagName("input")[0].value = "";



function carga_documento () {
    nombre.addEventListener("blur", validar_campos)
    apellido.addEventListener("blur", validar_campos)
    dni.addEventListener("blur", validar_campos)
    fecha.addEventListener("blur", validar_campos)
    form.addEventListener("submit", generar_clave)
    
}


window.addEventListener("load",carga_documento);