// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Variables II', () => {
  it('Las variables name y surname existen', () => {
    expect(name).to.not.be.an('undefined');
    expect(surname).to.not.be.an('undefined');
  });

  it('La variable name debe valer "Upgrade"', () => {
    expect(name).to.equal('Upgrade');
  });

  it('La variable surname debe valer "Hub"', () => {
    expect(surname).to.equal('Hub');
  });
});
