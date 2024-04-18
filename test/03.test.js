const {
    Pronostica } = require('../checkpoint/03.js');

    describe('Pronostica()', function() {
        it('Devuelve la fecha valida correctamente para el numero del tarot', function() {
          let persona = Pronostica();
          let dato=new persona("17/10/1970");
          let dato1=new persona("24/05/2006")  
          dato.Validar();
          dato1.Validar();
          expect(dato.estado).toBe(true);
          expect(dato1.estado).toBe(true);
        });
        it('Devuelve el numero del tarot correctamente', function() {
            let persona = Pronostica();
            let dato=new persona("17/10/1970");
            let dato1=new persona("24/05/2006")  
            dato.Calcular();
            dato1.Calcular();
            expect(dato.numero).toBe(8);
            expect(dato1.numero).toBe(1);
          });


    });
