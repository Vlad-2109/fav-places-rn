import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';

import OutlineButton from '@/components/UI/OutlineButton';

const PlaceDetailsScreen = () => {
	const placeId = useLocalSearchParams<{ placeId: string }>();

	const handleShowOnMap = () => {};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Image style={styles.image} />
				<View style={styles.locationContainer}>
					<View style={styles.addressContainer}>
						<Text style={styles.address}>ADDRESS</Text>
					</View>
					<OutlineButton icon="map" onPress={handleShowOnMap}>
						View on Map
					</OutlineButton>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default PlaceDetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	image: {
		height: '35%',
		minHeight: 300,
		width: '100%',
	},
	locationContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	addressContainer: {
		padding: 20,
	},
	address: {
		color: Colors.primary500,
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
