import { useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import KarticaIzdelka from '../components/kartica-izdelka';
import Gumb from '../components/gumb';
import { skupniSlogi } from '../theme';
import { izdelki } from '../utils/izdelki';

export default function ZacetniZaslon() {
  // Stanje: kolikokrat je uporabnik odprl podrobnosti
  const [stOgledov, setStOgledov] = useState(0);

  function odpriIzdelek(id: string) {
    setStOgledov(stOgledov + 1);
    router.push({ pathname: '/izdelek', params: { id } });
  }

  return (
    <View style={skupniSlogi.zaslon}>
      <Text style={skupniSlogi.naslov}>Izdelki</Text>

      {izdelki.map((izdelek) => (
        <KarticaIzdelka
          key={izdelek.id}
          ime={izdelek.ime}
          cena={izdelek.cena}
          onPritisk={() => odpriIzdelek(izdelek.id)}
        />
      ))}

      <Text style={skupniSlogi.besedilo}>Število ogledov: {stOgledov}</Text>
      <Gumb naslov="Ponastavi" onPritisk={() => setStOgledov(0)} />
    </View>
  );
}