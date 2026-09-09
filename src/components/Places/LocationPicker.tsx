import { StyleSheet, View } from 'react-native';

import { Colors } from '@/constants/colors';
import OutlineButton from '../UI/OutlineButton';

const LocationPicker = () => {
	const handleGetLocation = () => {
		console.log('Get Location');
	};

	const handlePickOnMap = () => {
		console.log('Pick on Map');
	};
	return (
		<View>
			<View style={styles.mapPreview}></View>
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
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});
