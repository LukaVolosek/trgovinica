import { useState } from 'react';
import { Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Gumb from '../components/gumb';
import { skupniSlogi } from '../theme';
import { najdiIzdelek } from '../utils/izdelki';
import { formatirajCeno } from '../utils/formatiraj-ceno';

export default function ZaslonIzdelka() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const izdelek = najdiIzdelek(id);

  // Stanje: izbrana količina
  const [kolicina, setKolicina] = useState(1);

  if (!izdelek) {
    return (
      <View style={skupniSlogi.zaslon}>
        <Text style={skupniSlogi.besedilo}>Izdelek ne obstaja.</Text>
      </View>
    );
  }

  return (
    <View style={skupniSlogi.zaslon}>
      <Text style={skupniSlogi.naslov}>{izdelek.ime}</Text>
      <Text style={skupniSlogi.besedilo}>{izdelek.opis}</Text>
      <Text style={skupniSlogi.besedilo}>Cena: {formatirajCeno(izdelek.cena)}</Text>

      <Text style={[skupniSlogi.besedilo, { marginTop: 16 }]}>Količina: {kolicina}</Text>
      <Gumb naslov="+ Dodaj" onPritisk={() => setKolicina(kolicina + 1)} />
      <Gumb naslov="- Odvzemi" onPritisk={() => setKolicina(Math.max(1, kolicina - 1))} />

      <Text style={[skupniSlogi.besedilo, { marginTop: 16 }]}>
        Skupaj: {formatirajCeno(izdelek.cena * kolicina)}
      </Text>
      <Gumb naslov="Nazaj" onPritisk={() => router.back()} />
    </View>
  );
}