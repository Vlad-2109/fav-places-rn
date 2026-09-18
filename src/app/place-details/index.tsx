import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';

import OutlineButton from '@/components/UI/OutlineButton';
import { PlaceModel } from '@/models/place';
import { fetchPlaceDetails } from '@/utils/database';

const PlaceDetailsScreen = () => {
	const [fetchedPlace, setFetchedPlace] = useState<PlaceModel | null>(null);

	const { placeId } = useLocalSearchParams<{ placeId: string }>();

	const handleShowOnMap = () => {};

	useEffect(() => {
		const loadPlaceDetails = async () => {
			const place = await fetchPlaceDetails(placeId);
			setFetchedPlace(place);
		};
		loadPlaceDetails();
	}, [placeId]);

	if (!fetchedPlace) {
		return (
			<View style={styles.fallbackContainer}>
				<Text>Loading place data...</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen
				options={{
					title: fetchedPlace.title,
				}}
			/>
			<ScrollView>
				<Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
				<View style={styles.locationContainer}>
					<View style={styles.addressContainer}>
						<Text style={styles.address}>{fetchedPlace.address}</Text>
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
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
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
