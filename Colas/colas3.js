
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
  

    this.ejercicio3 = function(){
      let suma = 0;         

      for(let i=0; i<=this.elementos.length; i++){
          if(typeof(this.elementos[i]) == 'number'){
              suma += this.elementos[i];
          }
          
      }
      console.log(suma);
      
    }
  }


  const pila = new PilaStack();


  //CASO DE PRUEBA 1
  pila1.enpilar(2)
  pila1.enpilar('MIKE')
  pila1.enpilar(4)
  pila1.enpilar('ROST')
  pila1.enpilar(6)
  pila1.enpilar('LILA')
  pila1.enpilar(8)
  pila1.enpilar('JUAN')
  pila1.enpilar('PIPE')
  pila1.enpilar(10)
  
  pila1.ejercicio3()




  //CASO DE PRUEBA 2
    pila2.enpilar(2)
    pila2.enpilar('MIKE')
    pila2.enpilar(1)
    pila2.enpilar('ROST')
    pila2.enpilar(2)
    pila2.enpilar('LILA')
    pila2.enpilar(3)
    pila2.enpilar('JUAN')
    pila2.enpilar('PIPE')
    pila2.enpilar(10)