
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
  

    this.ejercicio6 = function(){
        let salida = [];      

        for(let i=1; i<=this.elementos.length; i++){
            if(typeof(this.elementos[i])== "string"){
                salida.unshift(this.elementos[i]);
            }
            
        }
        console.log(salida) ;
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

pila1.ejercicio6()
// para este caso el ejercicio 6 debe retornar:
//['PIPE', 'JUAN', 'LILA', 'ROST', 'MIKE']


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
pila2.enpilar('LUISA')
pila2.enpilar(10)

pila2.ejercicio6()

// para este caso el ejercicio 6 debe retornar:
//['LUISA', 'PIPE', 'JUAN', 'LILA', 'ROST', 'MIKE']

