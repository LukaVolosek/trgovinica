import { Stack } from 'expo-router';
import { barve } from '../theme';

export default function Postavitev() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: barve.primarna },
        headerTintColor: barve.bela,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Trgovinica' }} />
      <Stack.Screen name="izdelek" options={{ title: 'Podrobnosti' }} />
    </Stack>
  );
}