import { Stack, useIsFocused, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { PlaceModel } from '@/models/place';
import { fetchPlaces } from '@/utils/database';

import PlacesList from '@/components/Places/PlacesList';
import IconButton from '@/components/UI/IconButton';

const AllPlacesScreen = () => {
	const [loadedPlaces, setLoadedPlaces] = useState<PlaceModel[]>([]);

	const router = useRouter();
	const isFocused = useIsFocused();

	useEffect(() => {
		async function loadPlaces() {
			const places = await fetchPlaces();
			setLoadedPlaces(places);
		}

		if (isFocused) {
			loadPlaces();
		}
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
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
	},
});
