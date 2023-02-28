$(document).ready(function() {
    $(window).on('scroll', function() {
     if($(window).scrollTop() < 1000) {
       $('.hero').css('background-size', 100 + parseInt($(window).scrollTop() / 15) + '%');
       $('.hero h1').css('top', 75 - ($(window).scrollTop() * .05) + '%');
       $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
     }
   });
 });

 let opcionMarcas;
 const seccionMarca = document.querySelector("#seleccionar-marca");


 class Descripcion {
  constructor(foto) {
      this.foto = foto;
  }
}

let marcaVehiculos = new Descripcion();


function cargarMarca(){

}