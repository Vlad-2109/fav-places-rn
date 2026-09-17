import * as SQLite from 'expo-sqlite';

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
