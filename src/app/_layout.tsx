import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';
import { init } from '@/utils/database';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [appIsReady, setAppIsReady] = useState<boolean>(false);

	useEffect(() => {
		async function initializeDatabase() {
			try {
				await init();
			} catch (error) {
				console.error('App failed to prepare:', error);
			} finally {
				setAppIsReady(true);
			}
		}

		initializeDatabase();
	}, []);

	useEffect(() => {
		if (appIsReady) {
			SplashScreen.hide();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

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
