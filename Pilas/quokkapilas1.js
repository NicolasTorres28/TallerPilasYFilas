

function PilaStack() {
     
    this.elementos = [];
   

    this.enpilar = function(elemento){
      this.elementos.push(elemento);
    }


    this.desenpilar = () => {
      
      const ultimo = this.elementos[this.elementos.length - 1];
      
      this.elementos.pop();
      
      return ultimo;
    };


    this.longitud = function(){
      
      return this.elementos.length;
    }
   

    this.verProximo = () => {
      
      return this.elementos[this.elementos.length - 1];
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
  
  const pila = new PilaStack();
  

  
  const pila1 = new PilaStack();
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
  console.log('respuesta ejercicio1 CASO 1: '+pila1.ejercicio1(5))
  // [2,'MIKE',4,'ROST',6,'LILA',8,'JUAN','PIPE',10,1,2,3,4,5]


  const pila2 = new PilaStack();
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
  console.log('respuesta ejercicio1 CASO 2: '+pila2.ejercicio1(10)) 
  
  //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 'PIPE', 'JUAN', 3, 'LILA', 2, 'ROST', 1, 'MIKE', 2]