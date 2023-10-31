
function PilaStack() {
     
    this.elementos = [];
   

    this.enpilar = function(elemento){
      this.elementos.push(elemento);
    }


    this.desenpilar = () => {
      
      const ultimo = this.elementos[0];
      
      this.elementos.shift();
      
      return ultimo;
    };


    this.longitud = function(){
      
      return this.elementos.length;
    }
   

    this.verProximo = () => {
      
      return this.elementos[0];
    }
    
    this.verElementos = function(){
      
      return this.elementos;
    }
  

    this.ejercicio2 = function(){
      let valor1 
      let valor2 

      for(let i=0; i<=this.elementos.length; i++){
          
      
          if(this.elementos[i] % 2 == 0){
              valor1 = "par";    
          }else{
              valor1 = "impar";
          }

          if(this.elementos[i+1] % 2 == 0){
              valor2 = "par";    
          }else{
              valor2 = "impar";
          }

          if(valor1 == valor2){
              console.log(false);
              return false;
          }


      }
      console.log(true);
    }
  }
  