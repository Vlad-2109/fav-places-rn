import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import type { PlaceModel } from '@/models/place';

import PlaceItem from './PlaceItem';

type PlacesListProps = {
	places: PlaceModel[];
};

const PlacesList = ({ places }: PlacesListProps) => {
	if (!places || !places.length) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No places added yet - start adding some!
				</Text>
			</View>
		);
	}

	return (
		<FlatList
			keyExtractor={(item) => item.id}
			data={places}
			renderItem={({ item }) => <PlaceItem place={item} onSelect={() => {}} />}
			style={styles.list}
		/>
	);
};

export default PlacesList;

const styles = StyleSheet.create({
	list: {
		margin: 24,
	},
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fallbackText: {
		fontSize: 16,
		color: Colors.primary200,
	},
});
