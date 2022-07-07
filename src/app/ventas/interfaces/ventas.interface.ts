

export enum Colores {
  rojo = "rojo",
  negro = "negro",
  azul = "azul",
  verde = "verde"
}

export interface Car {
  vin: string,
  year: number,
  brand: string,
  color: Colores
}