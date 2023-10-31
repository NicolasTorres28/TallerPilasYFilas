

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
    

      this.ejercicio1 = function(numero){
        for(let i=1; i<=numero; i++){
          this.enpilar(i);
        }
        console.log(this.elementos) ;
      }
    }
    
    