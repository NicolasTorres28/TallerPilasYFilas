
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
  

    this.ejercicio7 = function(){
        let contador = {
            strings: 0,
            numbers: 0,
            arrays: 0,
        };
    
        for (let i = 0; i <= this.elementos.length; i++) {
            if (Array.isArray(this.elementos[i])) {
                contador.arrays++;
            } else if (typeof(this.elementos[i]) === 'string') {                    
                contador.strings++;
            } else if (typeof(this.elementos[i]) === 'number') {
                contador.numbers++;
            }
        }
       
        
        console.log(contador);
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

pila1.ejercicio7()
// para este caso el ejercicio 7 debe retornar un objecto:
//{string: 5, numbers: 5, arrays: 0}


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

pila1.ejercicio7()

// para este caso el ejercicio 7 debe retornar un objecto:
//{string: 5, numbers: 5, arrays: 0}
