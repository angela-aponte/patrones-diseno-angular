export interface Observador<T> {
  actualizar(dato: T): void;
}

export class Sujeto<T> {
  private observadores: Observador<T>[] = [];

  suscribir(o: Observador<T>) {
    this.observadores.push(o);
  }

  desuscribir(o: Observador<T>) {
    this.observadores = this.observadores.filter((x) => x !== o);
  }

  notificar(dato: T) {
    this.observadores.forEach((o) => o.actualizar(dato));
  }
}