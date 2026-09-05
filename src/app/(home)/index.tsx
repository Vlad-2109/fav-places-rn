import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PlacesList from '@/components/Places/PlacesList';

const AllPlacesScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
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
