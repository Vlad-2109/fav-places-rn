import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '@/constants/colors';
import { type PlaceModel, Place } from '@/models/place';

import Button from '../UI/Button';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

type PlaceFormProps = {
	onCreatePlace: (place: PlaceModel) => void;
};

const PlaceForm = ({ onCreatePlace }: PlaceFormProps) => {
	const [enteredTitle, setEnteredTitle] = useState<string>('');
	const [pickedLocation, setPickedLocation] = useState<{
		lat: number;
		lng: number;
		address: string;
	} | null>(null);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleTitleChange = (text: string) => {
		setEnteredTitle(text);
	};

	const handlePickImage = (imageUri: string) => {
		setSelectedImage(imageUri);
	};

	const handlePickLocation = useCallback(
		(location: { latitude: number; longitude: number; address: string }) => {
			setPickedLocation({
				lat: location.latitude,
				lng: location.longitude,
				address: location.address,
			});
		},
		[],
	);

	const handleSavePlace = () => {
		const placeData = new Place({
			title: enteredTitle,
			imageUri: selectedImage ?? '',
			location: pickedLocation ?? {
				lat: 0,
				lng: 0,
				address: '',
			},
		});
		onCreatePlace(placeData);
	};

	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					value={enteredTitle}
					onChangeText={handleTitleChange}
					style={styles.input}
				/>
			</View>
			<ImagePicker onPickImage={handlePickImage} />
			<LocationPicker onPickLocation={handlePickLocation} />
			<Button onPress={handleSavePlace}>Add Place</Button>
		</ScrollView>
	);
};

export default PlaceForm;

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 24,
		width: '100%',
	},
	label: {
		fontWeight: 'bold',
		marginBottom: 4,
		color: Colors.primary500,
	},
	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		fontSize: 16,
		borderBottomColor: Colors.primary700,
		borderBottomWidth: 2,
		backgroundColor: Colors.primary100,
	},
});
