import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PlacesList from '@/components/Places/PlacesList';

const AllPlacesScreen = () => {
	const router = useRouter();

	// router.push(`/add-place`);

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'All Places' }} />
			<PlacesList places={[]} />
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
