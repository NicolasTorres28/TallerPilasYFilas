
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
  

    this.ejercicio4 = function(){
     
      let salida = [];

      for(let i=0; i<=this.elementos.length; i++){
          
          if(this.elementos[i] % 2 == 0){
            salida.push(this.elementos[i]);  
          }

      }
 
      console.log(salida);
  }
}
