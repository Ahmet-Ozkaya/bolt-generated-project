import { initializeDatabase } from './src/db/database.js';

(async () => {
  try {
    await initializeDatabase();
    console.log('Database initialized successfully!');
    process.exit(0); // Exit the script after successful initialization
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1); // Exit with an error code
  }
})();
