import { Pressable, StyleSheet, Text } from 'react-native';
import { barve, razmiki } from '../theme';

type GumbProps = {
  naslov: string;
  onPritisk: () => void;
};

export default function Gumb({ naslov, onPritisk }: GumbProps) {
  return (
    <Pressable
      onPress={onPritisk}
      style={({ pressed }) => [slogi.gumb, pressed && slogi.pritisnjen]}
    >
      <Text style={slogi.besedilo}>{naslov}</Text>
    </Pressable>
  );
}

const slogi = StyleSheet.create({
  gumb: {
    backgroundColor: barve.primarna,
    paddingVertical: razmiki.s + 4,
    paddingHorizontal: razmiki.m,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: razmiki.s,
  },
  pritisnjen: {
    backgroundColor: barve.primarnaTemna,
  },
  besedilo: {
    color: barve.bela,
    fontSize: 16,
    fontWeight: '600',
  },
});