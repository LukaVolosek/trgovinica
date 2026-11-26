import { StyleSheet } from 'react-native';

// Skupne barve aplikacije
export const barve = {
  primarna: '#2563eb',
  primarnaTemna: '#1e40af',
  ozadje: '#f1f5f9',
  kartica: '#ffffff',
  besedilo: '#0f172a',
  siva: '#64748b',
  bela: '#ffffff',
};

// Skupni razmiki
export const razmiki = {
  s: 8,
  m: 16,
  l: 24,
};

// Skupni slogi, ki jih uporabljajo vsi zasloni
export const skupniSlogi = StyleSheet.create({
  zaslon: {
    flex: 1,
    backgroundColor: barve.ozadje,
    padding: razmiki.m,
  },
  naslov: {
    fontSize: 24,
    fontWeight: 'bold',
    color: barve.besedilo,
    marginBottom: razmiki.m,
  },
  besedilo: {
    fontSize: 16,
    color: barve.besedilo,
  },
});