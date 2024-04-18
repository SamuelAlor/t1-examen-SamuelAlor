// Esta funcion tiene como finalidad crear un clase denominada "Tarot", la cual tiene
// como objetivo calcular  el numero del tarot de una persona por medio de su fecha
// de nacimiento (por medio de este formato dia/mes/año). Para tal calculo la clase
// debera contener los siguientes atibutos:
//     dia: Este almacenara un valor entero para el dia correspondiente a la fecha
//          de nacimiento y debe estar entre el rango de 1 a 31.
//     mes: Este almacenara un valor entero para el mes correspondiente a la fecha
//          de nacimiento y debe estar entre el rango de 1 y 12.
//     año: Este alamcenara un valor entero para el año correspondiente a las fecha
//           de nacimiento.
//     estado: Este almacenara un valor logico para  status de la validacion de la 
//           fecha de nacimiento,es decir, si la fecha proporcionada corresponde aL
//           formato (dia/mes/año).
//     numero: Este almacenara un valor entero que represente el numero del
//            tarot calculado.
// los metodos son:
//    Validar().- Este metodo tiene la finalidad de validar la fecha 
//             proporcionada por medio del formato(dia/mes/año), el cual estara
//             representado el resultado a traves del atributo "estado".
//    Calcular():- Este metodo tiene como finalidad obtener el numero del 
//             tarot calculado por la fecha de nacimiento proporcionada.  
//  
// Recomendaciones: 
//     1.- El fecha propocionada sera a traves el constructor de la clase.
//     2.- El formato esta integrado por dos numeros enteros para el dia, 
//         dos numeros enteros para el mes, y cuatro numeros enteros para el
//         año.        
//     3.- Se debera regresar la clase para su funcionamiento.
//
// Por Ejemplo:
//    Para calcular el numero del tarot, se suma los numeros de su fecha y se va
//    reduciendo hasta alcanzar un unico numero.
//     
//   fecha de nacimiento: 17/10/1970
//       17 + 10 + 1970 => 1 + 9 + 9+ 7 = 26 => 2 + 6 = 8
//
//  Lo que quiere decir que el numero del tarot es el 8.
// 

function Pronostica(){

   // Tu codigo aqui
   class Tarot {
      constructor(fechaNacimiento) {
          // Parsear la fecha de nacimiento en formato "dia/mes/año"
          const partesFecha = fechaNacimiento.split('/');
          if (partesFecha.length !== 3) {
              console.log("Formato de fecha inválido. Debe ser 'dia/mes/año'.");
              this.estado = false;
              return;
          }
          
          this.dia = parseInt(partesFecha[0], 10);
          this.mes = parseInt(partesFecha[1], 10);
          this.año = parseInt(partesFecha[2], 10);
  
          // Validar la fecha
          if (isNaN(this.dia) || isNaN(this.mes) || isNaN(this.año)) {
              console.log("Formato de fecha inválido. Debe ser 'dia/mes/año'.");
              this.estado = false;
              return;
          }
  
          const esDiaValido = this.dia >= 1 && this.dia <= 31;
          const esMesValido = this.mes >= 1 && this.mes <= 12;
          const esAñoValido = Number.isInteger(this.año) && this.año > 0;
  
          if (!esDiaValido || !esMesValido || !esAñoValido) {
              console.log("Fecha de nacimiento inválida. Revise los valores de día, mes y año.");
              this.estado = false;
              return;
          }
  
          this.estado = true;
          this.numero = 0;
      }
  
      Validar() {
          return this.estado;
      }
  
      Calcular() {
          if (!this.estado) {
              console.log("No se puede calcular el número del tarot debido a una fecha de nacimiento inválida.");
              return;
          }
  
          // Sumar los dígitos de la fecha de nacimiento
          const sumaDigitos = this.sumarDigitos(this.dia) + this.sumarDigitos(this.mes) + this.sumarDigitos(this.año);
  
          // Reducir la suma a un solo dígito
          this.numero = this.reducirASoloDigito(sumaDigitos);
      }
  
      sumarDigitos(num) {
          return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      }
  
      reducirASoloDigito(num) {
          while (num > 9) {
              num = this.sumarDigitos(num);
          }
          return num;
      }
  }
   
 return Tarot;
}

module.exports = {
    Pronostica
   };