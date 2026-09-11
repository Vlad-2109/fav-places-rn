import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = () => {
	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
			<Stack.Screen options={{ title: 'Map' }} />
			<MapView initialRegion={region} style={styles.map}></MapView>
		</SafeAreaView>
	);
};

export default MapScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		flex: 1,
	},
});
