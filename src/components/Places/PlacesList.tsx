import { FlatList, StyleSheet, Text, View } from 'react-native';

import PlaceItem from './PlaceItem';

import type { Place } from '@/types';

type PlacesListProps = {
	places: (Place & { id: string })[];
};

const PlacesList = ({ places }: PlacesListProps) => {
	if (!places || !places.length) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
			</View>
		);
	}
	return (
		<FlatList
			keyExtractor={(item) => item.id}
			data={places}
			renderItem={({ item }) => <PlaceItem place={item} onSelect={() => {}} />}
		/>
	);
};

export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
    }
});
