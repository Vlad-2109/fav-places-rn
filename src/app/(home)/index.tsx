import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PlacesList from '@/components/Places/PlacesList';
import IconButton from '@/components/UI/IconButton';

const AllPlacesScreen = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen
				options={{
					title: 'All Places',
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
