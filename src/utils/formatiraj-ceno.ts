// Pretvori število v zapis cene, npr. 3.5 -> "3,50 €"
export function formatirajCeno(cena: number): string {
  return cena.toFixed(2).replace('.', ',') + ' €';
}