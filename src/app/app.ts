import { Component, signal } from '@angular/core';
import { Observador, Sujeto } from './patrones/observer';
import { Pizza, PizzaBuilder } from './patrones/builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Observer
  private canal = new Sujeto<string>();
  registroA = signal<string[]>([]);
  registroB = signal<string[]>([]);
  suscritoA = signal(false);
  suscritoB = signal(false);

  private obsA: Observador<string> = {
    actualizar: (d) => this.registroA.update((r) => [...r, d]),
  };
  private obsB: Observador<string> = {
    actualizar: (d) => this.registroB.update((r) => [...r, d]),
  };

  alternarA() {
    if (this.suscritoA()) this.canal.desuscribir(this.obsA);
    else this.canal.suscribir(this.obsA);
    this.suscritoA.update((v) => !v);
  }

  alternarB() {
    if (this.suscritoB()) this.canal.desuscribir(this.obsB);
    else this.canal.suscribir(this.obsB);
    this.suscritoB.update((v) => !v);
  }

  emitir(input: HTMLInputElement) {
    const texto = input.value.trim();
    if (!texto) return;
    this.canal.notificar(texto);
    input.value = '';
  }

  // Builder
  pizza = signal<Pizza | null>(null);

  armar(tipo: 'hawaiana' | 'vegetariana') {
    const b = new PizzaBuilder();
    if (tipo === 'hawaiana') {
      b.conTamano('grande').agregarIngrediente('jamón').agregarIngrediente('piña').conExtraQueso();
    } else {
      b.conTamano('mediana').agregarIngrediente('champiñones').agregarIngrediente('pimentón');
    }
    this.pizza.set(b.construir());
  }
}