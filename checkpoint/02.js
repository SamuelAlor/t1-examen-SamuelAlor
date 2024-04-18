// Esta funcion tiene como finalidad  diseñar una clase denominada "Centro" que debera 
// encontrar el  centro numerico que separa una lista de numeros (comenzando en 1),en dos
// grupos de numeros cuyas sumas son iguales. Para tal implementacion la clase tendra los
// siguientes atributos:
//    numero:- Representara el numero total de la lista a encontrar el centro numerico,se
//             debera proporcionar en el constructor mediante un parametro. 
//    centro:- Representara el centro numerico del numero total de la lista.
//    sumaNa:- Representara la suma de todos lo numeros que estan antes del centro numerico
//           encontrado en la lista.
//    sumaNd:- Representara la suma de todos lo numeros que estan despues del centro
//           numerico encontrado en la lista.
//    serieA:- Representara un arreglo que contiene los numeros que forma parte del bloque
//             que se encuentran antes del centro numericos.
//    serieD:- Representara un arreglo que contiene los numeros que forma parte del bloque
//             que se encuentran despues del centro numericos.    
// los metodos son los siguientes:
//     Encontrar():- Este metodo tiene como objetivo integra la lista de numeros, encontrar
//                el centro numerico, la suma de los bloques que se encuentra (antes y despues),
//                integrar los arreglos que contiene la lista de los numeros (anteriores y 
//                posteriores) del centro numerico de la lista propuesta. 
//   
//             Nota: - Se debera regresar la clase para su funcionamiento.        
//  Por ejemplo:
//      numero=  8  (este representada la lista de numero que sera 1 al 8)
//      centro=  6  (este divide la lista en dos bloues ya que los numeros sumados son iguales)
//      sumaNA= 15  ( Contiene la suma de los numeros que esta antes del centro numerico) 
//      sumaND= 15  ( Contiene la suma de los numeros que esta despues del centro numerico)
//      serieA=[1,2,3,4,5] (Contiene las lista de numero que integran al bloque que esta antes
//                          del centro numerico y la suma es 15)
//      serieA=[7,8]       (Contiene las lista de numero que integran al bloque que esta antes
//                          del centro numerico y la suma es 15)

function ObtenerCentro(){
    
    // Tu codigo aqui
    class Centro{
           constructor(numero){
              this.numero=numero;
              this.centro=null;
              this.sumaNa=0;
              this.sumaNd=0;
              this.serieA=[];
              this.serieD=[];
            }
            Encontrar(){
              for (let i=1;i<this.numero;i++){
                let suma1=this.sumNum(1,i-1);
                let suma2=this.sumNum(i+1,this.numero);
          
                if (suma1===suma2) {
                  this.centro=i;
                  this.sumaNa=suma1;
                  this.sumaNd=suma2;
                  this.serieA=this.genSerie(1,i-1);
                  this.serieD=this.genSerie(i+1,this.numero);
                  break;
                }
              }
            }
            sumNum(inic,fin){
              let suma=0;
              for (let i=inic;i<=fin;i++) {
                suma+=i;
              }
              return suma;
            }
            genSerie(inic,fin){
              let serie=[];
              for (let i=inic;i<=fin;i++) {
                serie.push(i);
              }
              return serie;
            }
          }
        return Centro;
  
}



module.exports = {
    ObtenerCentro
   };



