export type PlaceParams = {
	title: string;
	imageUri: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
};

class Place {
	id: string;
	title: string;
	imageUri: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor({ title, imageUri, address, location }: PlaceParams) {
		this.id = new Date().toString() + Math.random().toString();
		this.title = title;
		this.imageUri = imageUri;
		this.address = address;
		this.location = location;
	}
}
