const {
    ObtenerCentro } = require('../checkpoint/02.js');

    describe('ObtenerCentro()', function() {
        it('Devuelve el centro de la serie numerica correctamente', function() {
          let lista = ObtenerCentro();
          let serie1=new lista(8);  
          let serie2=new lista(49);
          serie1.Encontrar()
          serie2.Encontrar();
          expect(serie1.centro).toBe(6);
          expect(serie2.centro).toBe(35);
        });
        
        it('Devuelve la suma de ambos bloques del centro correctamente', function() {
            let lista = ObtenerCentro();
            let serie1=new lista(8);
            let serie2=new lista(49);            
            serie1.Encontrar()
            serie2.Encontrar()
            expect(serie1.sumaNa).toBe(15);
            expect(serie1.sumaNd).toBe(15);
            expect(serie2.sumaNa).toBe(595);
            expect(serie2.sumaNd).toBe(595); 
          });

        it('Devuelve la serie de numeros antes del centro correctamente', function() {
            let lista = ObtenerCentro();
            let serie1=new lista(8);  
            let serie2=new lista(49);
            serie1.Encontrar();
            serie2.Encontrar();
            expect(serie1.serieA).toEqual([1,2,3,4,5]);
            expect(serie2.serieA).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]);
          });

          it('Devuelve la serie de numeros despues del centro correctamente', function() {
            let lista = ObtenerCentro();
            let serie1=new lista(8);  
            let serie2=new lista(49); 
            serie1.Encontrar();
            serie2.Encontrar();
            expect(serie1.serieD).toEqual([7,8]);
            expect(serie2.serieD).toEqual([36,37,38,39,40,41,42,43,44,45,46,47,48,49]);
          });

    });  
