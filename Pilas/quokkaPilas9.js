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
  

    this.ejercicio9 = function(elemento){
        let salida = [];      

        for(let i=0; i<=this.elementos.length; i++){
            if(this.elementos[i] == elemento){
                this.elementos.pop(i);
            }else{
                console.log("Este elemento no se encuentra en el array") ;
            }
            
            salida.shift(this.elementos[i]);
        }
        
        console.log(this.elementos.reverse());
    }
}


//CASO DE PRUEBA 1
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

pila1.ejercicio9('LILA')
// para este caso el ejercicio 9 debe retornar:
//[10, 'PIPE', 'JUAN', 8, 6, 'ROST', 4, 'MIKE', 2]



//CASO DE PRUEBA 2
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

pila2.ejercicio9('MIKE')
// para este caso el ejercicio 9 debe dar:
//[10, 'PIPE', 3, 'LILA', 2, 'ROST', 1, 'MIKE', 2]