import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, type MapPressEvent } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

type Location = {
	lat: number;
	lng: number;
};

const MapScreen = () => {
	const [selectedLocation, setSelectedLocation] = useState<Location>({
		lat: 0,
		lng: 0,
	});

	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	const handleSelectLocation = (event: MapPressEvent) => {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setSelectedLocation({ lat, lng });
	};

	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
			<Stack.Screen options={{ title: 'Map' }} />
			<MapView
				initialRegion={region}
				style={styles.map}
				onPress={handleSelectLocation}
			>
				<Marker
					title="Picked Location"
					coordinate={{
						latitude: selectedLocation.lat,
						longitude: selectedLocation.lng,
					}}
				/>
			</MapView>
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
