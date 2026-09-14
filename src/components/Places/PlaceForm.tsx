import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '@/constants/colors';

import Button from '../UI/Button';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

const PlaceForm = () => {
	const [enteredTitle, setEnteredTitle] = useState<string>('');
	const [pickedLocation, setPickedLocation] = useState<{
		lat: number;
		lng: number;
	} | null>(null);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleTitleChange = (text: string) => {
		setEnteredTitle(text);
	};

	const handlePickImage = (imageUri: string) => {
		setSelectedImage(imageUri);
	};

	const handlePickLocation = useCallback(
		(location: { latitude: number; longitude: number }) => {
			setPickedLocation({ lat: location.latitude, lng: location.longitude });
		},
		[],
	);

	const handleSavePlace = () => {
		console.log('Saving place...');
		console.log('enteredTitle:', enteredTitle);
		console.log('selectedImage:', selectedImage);
		console.log('pickedLocation:', pickedLocation);
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
