const {
    Ensambladora } = require('../checkpoint/01.js');

describe('Ensambladora()', function() {
    it('Debería devolver el constructor un coche creado correctamente', function() {
      let Unidad = Ensambladora();
      let coche1=new Unidad('Ford','Mustang','Rojo');  
      expect(coche1.marca).toBe('Ford');
      expect(coche1.modelo).toBe('Mustang');
      expect(coche1.color).toBe('Rojo');
    });

    it('Debería mostrar el mensaje Primero enciende el coche', function() {
        let Unidad = Ensambladora();
        let coche1=new Unidad('Toyota','RAV','Blanco');
        coche1.Acelerar();  
        expect(coche1.estado).toBe('Primero enciende el coche.');
    });

    it('Debería de haber realizado Cambios de velocidad del coche', function() {
        let Unidad = Ensambladora();
        let coche1=new Unidad('Chevrolet','Camaro','Amarillo');
        coche1.Encender();
        coche1.Acelerar(); 
        coche1.CambiarVelocidad(); 
        expect(coche1.velocidad).toBe(1);
    });
  
  it('Debería de haberse Frenado el coche', function() {
        let Unidad = Ensambladora();
        let coche1=new Unidad('MG','ZS','Azul');
        coche1.Encender();
        coche1.Frenar(); 
        expect(coche1.estado).toBe("El coche ZS esta frenando.");
  });

  it('Debería de haberse Apagado el coche', function() {
        let Unidad = Ensambladora();
        let coche1=new Unidad('Hyundai','i10','Plata');
        coche1.Encender();
        coche1.Apagar();
        expect(coche1.estado).toBe("El coche i10 se ha apagado.");
  });
  
});