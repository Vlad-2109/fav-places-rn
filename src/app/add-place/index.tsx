import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddPlaceScreen = () => {
	return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default AddPlaceScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
