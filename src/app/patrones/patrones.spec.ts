import { PizzaBuilder } from './builder';
import { Sujeto } from './observer';

describe('PizzaBuilder', () => {
  it('construye una pizza con los datos encadenados', () => {
    const pizza = new PizzaBuilder()
      .conTamano('grande')
      .agregarIngrediente('jamón')
      .conExtraQueso()
      .construir();
    expect(pizza.tamano).toBe('grande');
    expect(pizza.ingredientes).toEqual(['jamón']);
    expect(pizza.extraQueso).toBe(true);
  });
});

describe('Sujeto (Observer)', () => {
  it('notifica solo a los observadores suscritos', () => {
    const recibidos: string[] = [];
    const obs = { actualizar: (d: string) => recibidos.push(d) };
    const sujeto = new Sujeto<string>();

    sujeto.suscribir(obs);
    sujeto.notificar('hola');
    sujeto.desuscribir(obs);
    sujeto.notificar('ignorado');

    expect(recibidos).toEqual(['hola']);
  });
});