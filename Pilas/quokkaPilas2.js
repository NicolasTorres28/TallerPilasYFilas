
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
        return true ;
    }
  }
  
    const pila = new PilaStack();
  
   //  primero en ingresar               ultimo en ingresar
    // [2,MIKE,4,ROST,6,LILA,8,JUAN,PIPE,10]
    const pila2 = new PilaStack()
    pila2.enpilar(2)
    pila2.enpilar('MIKE')
    pila2.enpilar(4)
    pila2.enpilar('ROST')
    pila2.enpilar(6)
    pila2.enpilar('LILA')
    pila2.enpilar(8)
    pila2.enpilar('JUAN')
    pila2.enpilar('PIPE')
    pila2.enpilar(10)

    pila2.ejercicio2()
    // para este caso el ejercicio 2 debe retornar:
    //false
  

    //CASO DE PRUEBA 2

    //  primero en ingresar               ultimo en ingresar
    // [2,MIKE,1,ROST,2,LILA,3,JUAN,PIPE,10]
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

    pila2.ejercicio2()
    // para este caso el ejercicio 2 debe retornar:
    //true