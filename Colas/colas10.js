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
  

    this.ejercicio10 = function(elemento){
      let salida = this.elementos;      

      for(let i = 0; i <= this.elementos.length; i++){
          if(this.elementos[i] == elemento){
           
            for(let j = i; j <= this.elementos.length; j++){
              salida.shift()
            }

          }else{
              console.log("este elemento no se encuentra ");
          }


      }
      
      console.log(salida);
  }
}

const pila = new PilaStack();

