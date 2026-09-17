import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { PlaceModel } from '@/models/place';
import { insertPlace } from '@/utils/database';

import PlaceForm from '@/components/Places/PlaceForm';

const AddPlaceScreen = () => {
	const router = useRouter();

	const handleCreatePlace = async (place: PlaceModel) => {
		await insertPlace(place);
		router.back();
	};

	return (
		<SafeAreaView edges={['left', 'right']} style={styles.container}>
			<Stack.Screen options={{ title: 'Add a new Place' }} />
			<PlaceForm onCreatePlace={handleCreatePlace} />
		</SafeAreaView>
	);
};

export default AddPlaceScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
