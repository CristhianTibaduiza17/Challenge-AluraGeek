function agregarImagen(){

    var nombre = document.getElementById( "#nombres" ).value;
    var precio = document.getElementById( "#precio" ).value;
    var url =document.getElementById("#imagen").value;

    var nuevaImagen =document.createElement( "img");
    nuevaImagen.src = url;
    nuevaImagen.alt=nombre;

    var nuevoParrafo=document.createElement( "h3");
    nuevoh3.textContent="nombres" +nombre + ", precio:" + precio;

    var nuevoDiv = document.createElement( "div");
    nuevoDiv.appendChild(nuevaImagen);
    nuevoDiv.appendChild(nuevoParrafo);

    
    document.body.appendChild(nuevoDiv) ;
    

}