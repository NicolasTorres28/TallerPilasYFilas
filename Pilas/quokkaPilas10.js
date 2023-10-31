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
  

    this.ejercicio10 = function(elemento){
        let salida = this.elementos;      

        for(let i = 0; i <= this.elementos.length; i++){
            if(this.elementos[i] == elemento){
             
              for(let j = i; j <= this.elementos.length; j++){
                salida.pop()
              }

            }else{
                console.log("este elemento no se encuentra ");
            }

 
        }
        
        console.log(salida);
    }
}

//  primero en ingresar               ultimo en ingresar
// [2,MIKE,4,ROST,6,LILA,8,JUAN,PIPE,10]
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

pila1.ejercicio10(5)
// para este caso el ejercicio 10 debe retornar:
//[6, 'ROST', 4, 'MIKE', 2]


//CASO DE USO 2

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

pila2.ejercicio10(4)
// para este caso el ejercicio 9 debe retornar:
//['LILA', 2, 'ROST', 1, 'MIKE', 2]
