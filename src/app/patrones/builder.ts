export interface Pizza {
  tamano: string;
  ingredientes: string[];
  extraQueso: boolean;
}

export class PizzaBuilder {
  private pizza: Pizza = { tamano: 'mediana', ingredientes: [], extraQueso: false };

  conTamano(tamano: string): this {
    this.pizza.tamano = tamano;
    return this;
  }

  agregarIngrediente(ingrediente: string): this {
    this.pizza.ingredientes.push(ingrediente);
    return this;
  }

  conExtraQueso(): this {
    this.pizza.extraQueso = true;
    return this;
  }

  construir(): Pizza {
    return { ...this.pizza, ingredientes: [...this.pizza.ingredientes] };
  }
}