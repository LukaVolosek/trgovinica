import { Pressable, StyleSheet, Text } from 'react-native';
import { barve, razmiki } from '../theme';
import { formatirajCeno } from '../utils/formatiraj-ceno';

type KarticaIzdelkaProps = {
  ime: string;
  cena: number;
  onPritisk: () => void;
};

export default function KarticaIzdelka({ ime, cena, onPritisk }: KarticaIzdelkaProps) {
  return (
    <Pressable style={slogi.kartica} onPress={onPritisk}>
      <Text style={slogi.ime}>{ime}</Text>
      <Text style={slogi.cena}>{formatirajCeno(cena)}</Text>
    </Pressable>
  );
}

const slogi = StyleSheet.create({
  kartica: {
    backgroundColor: barve.kartica,
    padding: razmiki.m,
    borderRadius: 12,
    marginBottom: razmiki.s,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ime: {
    fontSize: 18,
    color: barve.besedilo,
  },
  cena: {
    fontSize: 18,
    fontWeight: 'bold',
    color: barve.primarna,
  },
});