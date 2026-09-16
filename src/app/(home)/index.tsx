import { Stack, useLocalSearchParams, useRouter, useIsFocused } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PlacesList from '@/components/Places/PlacesList';
import IconButton from '@/components/UI/IconButton';
import type { PlaceModel } from '@/models/place';

const AllPlacesScreen = () => {
	const [loadedPlaces, setLoadedPlaces] = useState<PlaceModel[]>([]);

	const router = useRouter();
	const isFocused = useIsFocused();
	const { place } = useLocalSearchParams<{ place: string }>();
	const parsedPlace = place ? JSON.parse(place) : null;

	useEffect(() => {
		if (isFocused && place) {
			setLoadedPlaces((prevValue) => [...prevValue, parsedPlace]);
		}
	}, [isFocused, parsedPlace]);

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Your Favorite Places',
					headerRight: ({ tintColor }) => (
						<IconButton
							icon="add"
							size={24}
							color={tintColor as string}
							onPress={() => router.push(`/add-place`)}
						/>
					),
				}}
			/>
			<PlacesList places={loadedPlaces} />
		</SafeAreaView>
	);
};

export default AllPlacesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
