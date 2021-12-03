describe('Pruebas en el archivo demo.test.js', () => {
  test('debe ser iguales los strings', () => {
    //  Initialization
      const message = 'Hello world!';
    
    // 2. Initializacion
      const message2 = `Hello world!`;
    
      //3. Observar el comeportamiento
      expect(message).toBe(message2);
    
    });
    
})
