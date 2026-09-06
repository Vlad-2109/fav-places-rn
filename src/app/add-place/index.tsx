import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PlaceForm from '@/components/Places/PlaceForm';

const AddPlaceScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'Add a new Place' }} />
			<PlaceForm />
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
