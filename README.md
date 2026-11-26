# Trgovinica

**Člana skupine:** Luka Volovšek, Leon Abina

## Opis aplikacije

Trgovinica je preprosta mobilna aplikacija, narejena z React Native in Expo.
Na začetnem zaslonu prikaže seznam izdelkov s cenami. Ob pritisku na izdelek
se odpre zaslon s podrobnostmi, kjer lahko izbereš količino in vidiš skupno ceno.

## Zagon projekta

1. Namesti [Node.js](https://nodejs.org) (LTS) in [Git](https://git-scm.com).
2. Na telefon namesti aplikacijo **Expo Go**.
3. Kloniraj repozitorij:
   ```bash
   git clone https://github.com/LukaVolosek/trgovinica.git
   cd trgovinica
   ```
4. Namesti odvisnosti:
   ```bash
   npm install
   ```
5. Zaženi projekt:
   ```bash
   npx expo start
   ```
6. S telefonom skeniraj QR kodo. Telefon in računalnik morata biti v istem omrežju Wi-Fi.

## Struktura projekta

```
src/
  app/            zasloni (Expo Router)
    _layout.tsx   navigacija
    index.tsx     začetni zaslon
    izdelek.tsx   zaslon s podrobnostmi
  components/     ponovno uporabne komponente
    gumb.tsx
    kartica-izdelka.tsx
  utils/          pomožne funkcije in podatki
    formatiraj-ceno.ts
    izdelki.ts
  theme.ts        barve in skupni slogi
```