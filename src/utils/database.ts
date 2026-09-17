import * as SQLite from 'expo-sqlite';

import type { PlaceModel } from '@/models/place';

type PlaceRow = {
	id: number;
	title: string;
	imageUri: string;
	address: string;
	lat: number;
	lng: number;
};

let database: SQLite.SQLiteDatabase | null = null;

export async function init() {
	if (database) {
		return database;
	}

	try {
		database = await SQLite.openDatabaseAsync('places.db');

		await database.execAsync(`
            CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            );
        `);

		return database;
	} catch (error) {
		database = null;
		console.error('Database init failed:', error);
		throw error;
	}
}

export async function getDatabase() {
	if (!database) {
		await init();
	}
	return database!;
}

export async function insertPlace(place: Omit<PlaceModel, 'id'>) {
	const db = await getDatabase();

	try {
		const result = await db.runAsync(
			`INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
			[
				place.title,
				place.imageUri,
				place.address,
				place.location.lat,
				place.location.lng,
			],
		);

		return result.lastInsertRowId;
	} catch (error) {
		console.error('Failed to insert place:', error);
		throw error;
	}
}

export async function fetchPlaces(): Promise<PlaceModel[]> {
	const db = await getDatabase();

	try {
		const rows = await db.getAllAsync<PlaceRow>('SELECT * FROM places');

		const places = rows.map((row) => ({
			id: row.id.toString(),
			title: row.title,
			imageUri: row.imageUri,
			address: row.address,
			location: {
				lat: row.lat,
				lng: row.lng,
			},
		}));
		return places;
	} catch (error) {
		console.error('Failed to fetch places:', error);
		throw error;
	}
}
