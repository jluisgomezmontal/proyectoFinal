(function(){
    "use strict";
    var regalo = document.getElementById('regalo');
    
    document.addEventListener('DOMContentLoaded', function(){
        
        
        
        //datos usuarios
        var nombre =document.getElementById('nombre');
        var apellido =document.getElementById('apellido');
        var email =document.getElementById('email');

        //campos pases
        var paseDia = document.getElementById('paseDia');
        var paseCompleto = document.getElementById('paseCompleto');
        var paseDosDias = document.getElementById('paseDosDias');

        //botones divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var totalProductos = document.getElementById('lista-productos');

        //Extras
        var etiquetas = document.getElementById('etiquetas');
        var camisa= document.getElementById('camisaEvento');
        var sumaTotal = document.getElementById('sumaTotal');

        calcular.addEventListener('click', calcularMonto);
        paseDia.addEventListener('blur', montrarDias);
        paseDosDias.addEventListener('blur', montrarDias);
        paseCompleto.addEventListener('blur', montrarDias);


        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

        


        function validarCampos(){
            if(this.value==''){
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio"; 
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }else{
                errorDiv.style.display = "none"
                this.style.border = '1px solid #cccccc';
            }
                
        }
        function validarMail(){
            if(this.value.indexOf("@") > -1 ){
                errorDiv.style.display = "none"
                this.style.border = '1px solid #cccccc';
            }else{
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es para un correo electronico"; 
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }


        function calcularMonto(event){
        event.preventDefault();
        if(regalo.value ===''){
            alert("Debes elegir un regalo");
            regalo.focus();
        }else{
            var boletosDia = parseInt(paseDia.value, 10)|| 0,
                boletosDosDias = parseInt(paseDosDias.value, 10)|| 0,
                boletosCompleto = parseInt(paseCompleto.value, 10)|| 0,
                cantCamisas = parseInt(camisa.value, 10)|| 0,
                cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

            var totalPagar = (boletosDia*30) + (boletosDosDias*45) + (boletosCompleto*50) + ((cantCamisas*10)*.93) + (cantEtiquetas*2);
            
            var listaProductos = [];

            if(boletosDia > 0){
                listaProductos.push(boletosDia + ' Pases por dia');
            }
            if(boletosCompleto >0){
                listaProductos.push(boletosCompleto + ' Pases Completos');
            }
            if(boletosDosDias >0){
                listaProductos.push(boletosDosDias + ' Pases por dos dias');
            }
            if(cantCamisas >0){
                listaProductos.push(cantCamisas + ' Camisas');
            }
            if(cantEtiquetas >0){
                listaProductos.push(cantEtiquetas + ' Etiquetas');
            }
            
            
            listaProductos.innerHTML = '';
            for (var i =0; i <listaProductos.length; i++){
                totalProductos.innerHTML += listaProductos[i] +'<br/>';
            }
            sumaTotal.innerHTML = " $" + totalPagar.toFixed(2);
                          
            }
            
        }

            function montrarDias(){
                var boletosDia = parseInt(paseDia.value, 10)|| 0,
                boletosDosDias = parseInt(paseDosDias.value, 10)|| 0,
                boletosCompleto = parseInt(paseCompleto.value, 10)|| 0;

                var diasElegidos = [];

                if(boletosDia > 0){
                    diasElegidos.push('viernes');
                }
                if(boletosDosDias>0){
                    diasElegidos.push('viernes', 'sabado');
                }
                if(boletosCompleto>0){
                    diasElegidos.push('viernes', 'sabado', 'domingo')
                }
                for(var i=0;i<diasElegidos.length;i++){
                    document.getElementById(diasElegidos[i]).style.display='block';
                }
            }
        
    });
})();
