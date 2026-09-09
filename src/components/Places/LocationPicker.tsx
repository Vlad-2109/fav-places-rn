import {
	getCurrentPositionAsync,
	PermissionStatus,
	useForegroundPermissions,
} from 'expo-location';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import { getMapPreview } from '@/utils/location';
import OutlineButton from '../UI/OutlineButton';

const LocationPicker = () => {
	const [pickedLocation, setPickedLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);
	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	const verifyPermissions = async () => {
		if (
			locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission();

			return permissionResponse.granted;
		}

		if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insufficient Permissions!',
				'You need to grant location permissions to use this app.',
			);
			return false;
		}

		return true;
	};

	const handleGetLocation = async () => {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			return;
		}

		const location = await getCurrentPositionAsync();
		setPickedLocation({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});
	};

	const handlePickOnMap = () => {
		console.log('Pick on Map');
	};

	let locationPreview = <Text>No location picked yet.</Text>;
	if (pickedLocation) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview(pickedLocation.latitude, pickedLocation.longitude),
				}}
			/>
		);
	}

	return (
		<View>
			<View style={styles.mapPreview}>{locationPreview}</View>
			<View style={styles.actions}>
				<OutlineButton icon="location" onPress={handleGetLocation}>
					Locate User
				</OutlineButton>
				<OutlineButton icon="map" onPress={handlePickOnMap}>
					Pick on Map
				</OutlineButton>
			</View>
		</View>
	);
};

export default LocationPicker;

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4,
		overflow: 'hidden',
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	image: {
		width: '100%',
        height: '100%',
	},
});
