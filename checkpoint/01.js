// Esta funcion tiene como finalidad diseñar una clase Auto,y mediante su constructor 
// se proporcionara datos por medio de paramentros para los "atributos" de la clase:
//    marca : El fabricante del auto
//    modelo: La version del auto,
//    color:  EL color del auto,
//    velocidad: Es la velocidad que toma el auto cuando cambia de velocidad (Maximo 5 velocidades),
//              Nota:- Debera iniciar con 0.   
//    enMarcha: Indica que el auto esta encendido (mediante un true) o apagado (mediante un false)
//              Nota:- Deber iniciar con false.
//    estado: Almacenara los mensajes de que se generen en cada metodo.
//             Nota:- Debera iniciar vacio.
// y los "metodos"  seran:
//     Encender() .- Este metodo pondra el atributo "enMarcha" en encendido el auto, y en el atributo "estado" el 
//                   mensaje "El coche <<nombre del modelo del auto>> se ha encendido"
//     Acelerar().- Este metodo verifica inicialmente si auto se encuentra en Marcha, si lo esta enviara un mensaje
//                  "El coche <<nombre del modelo del auto>> del esta acelerado.", en caso que no este en 
//                   Marcha se enviara un mensaje "Primero enciende el coche.".      
//                       Nota.- Lo mensaje se almacenaran en el atributo "estado". 
//     CambiarVelocidad():- Este metodo ira incrementado la velocidad gradualmente en 1, en el atributo "velocidad",
//                          tambien se debera considera lo siguiente:
//                           1.- Si el auto esta en Marcha, verificar que la velocidad no sea superior a 5. Si
//                               esta no es superior se incrementa a 1 el atributo "velocidad", en caso contrario
//                               se debera decrementar en 1 el atributo "velocidad".
//                                    Nota:- El atributo "velocidad" solo tendra un rango (1 a 5) para efectuar los
//                                           cambios.  
//                           2.- En caso que el auto no este en Marcha, se enviara un mensaje "Primero enciende el
//                               coche." se almacenara en el atributo "estado".
//     Frenar():- Este metodo tiene como finalidad detener el auto, tomando la siguiente consideracion:
//                1.- Verificar  si el auto esta en Marcha, si lo està se enviara el mensaje de "El coche << nombre
//                    del modelo del auto>> esta frenando."  mediante el atributo "estado" y al mismo tiempo se 
//                    tendra que disminuir la velocidad. En caso contrario que no este en Marcha se enviara el
//                    mensaje "El coche esta apagado, no se puede frenar" mediante el atributo "estado".
//     Apagar().- Este metodo tiene como finalidad apagar el auto, deteniedo el motor medianto el atributo "enMarcha"
//                poniendolo en falso y enviando al mismo tiempo un mensaje "El coche << nombre del modelo del
//                auto >> se ha apagado." mediante el atributo "estado".
//
// Nota:- Debera regresar la clase para su funcionamiento.
//

function Ensambladora(){
    
    // Tu codigo aqui
   
    class Auto {
        constructor(marca, modelo, color, velocidad = 0, enMarcha = false, estado = "") {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.velocidad = velocidad;
            this.enMarcha = enMarcha;
            this.estado = estado;
        }
    
        Encender() {
            if (!this.enMarcha) {
                this.enMarcha = true;
                this.estado = `El coche ${this.modelo} se ha encendido.`;
            } else {
                this.estado = `El coche ${this.modelo} ya está encendido.`;
            }
        }
    
        Acelerar() {
            if (this.enMarcha) {
                this.estado = `El coche ${this.modelo} está acelerando.`;
            } else {
                this.estado = "Primero enciende el coche.";
            }
        }
    
        CambiarVelocidad() {
            if (this.enMarcha) {
                if (this.velocidad < 5) {
                    this.velocidad++;
                    this.estado = `El coche ${this.modelo} ha cambiado de velocidad. Velocidad actual: ${this.velocidad}`;
                } else {
                    this.velocidad = 1;
                    this.estado = `El coche ${this.modelo} ha alcanzado la velocidad máxima. Velocidad actual: ${this.velocidad}`;
                }
            } else {
                this.estado = "Primero enciende el coche.";
            }
        }
    
        Frenar() {
            if (this.enMarcha) {
                this.velocidad = 0; // Detener el auto estableciendo la velocidad a 0
                this.estado = `El coche ${this.modelo} está frenando. Velocidad actual: ${this.velocidad}`;
            } else {
                this.estado = "El coche está apagado, no se puede frenar.";
            }
        }
    
        Apagar() {
            if (this.enMarcha) {
                this.enMarcha = false;
                this.estado = `El coche ${this.modelo} se ha apagado.`;
            } else {
                this.estado = `El coche ${this.modelo} ya está apagado.`;
            }
        }
    }
    
    // Devolvemos la clase Auto para que esté disponible fuera de la función Ensambladora
    return Auto;
}



module.exports = {
    Ensambladora
   };