import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaProvider>
	);
}
