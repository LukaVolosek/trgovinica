export type Izdelek = {
  id: string;
  ime: string;
  cena: number;
  opis: string;
};

export const izdelki: Izdelek[] = [
  { id: '1', ime: 'Slušalke', cena: 29.99, opis: 'Brezžične slušalke z dolgo baterijo.' },
  { id: '2', ime: 'Miška', cena: 14.5, opis: 'Ergonomska računalniška miška.' },
  { id: '3', ime: 'Tipkovnica', cena: 39.9, opis: 'Mehanska tipkovnica z osvetlitvijo.' },
];

// Poišče izdelek po id-ju
export function najdiIzdelek(id: string): Izdelek | undefined {
  return izdelki.find((izdelek) => izdelek.id === id);
}