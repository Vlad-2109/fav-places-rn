import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<StatusBar style="dark" />
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: Colors.primary500,
					},
					headerTintColor: Colors.gray700,
					contentStyle: {
						backgroundColor: Colors.gray700,
					},
				}}
			/>
		</SafeAreaProvider>
	);
}
