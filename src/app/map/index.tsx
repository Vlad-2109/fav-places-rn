import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = () => {
	return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default MapScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
