const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
if (!GOOGLE_API_KEY) {
	throw new Error('Missing GOOGLE_API_KEY');
}

export const getMapPreview = (latitude: number, longitude: number) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

	return imagePreviewUrl;
};
