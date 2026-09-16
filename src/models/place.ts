export type PlaceParams = {
	title: string;
	imageUri: string;
	location: {
		lat: number;
		lng: number;
		address: string;
	};
};

export type PlaceModel = InstanceType<typeof Place>;

export class Place {
	id: string;
	title: string;
	imageUri: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor({ title, imageUri, location }: PlaceParams) {
		this.id = new Date().toString() + Math.random().toString();
		this.title = title;
		this.imageUri = imageUri;
		this.address = location.address;
		this.location = {
			lat: location.lat,
			lng: location.lng,
		};
	}
}
