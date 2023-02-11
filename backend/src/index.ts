const { PORT = '5000' } = process.env;
import mongoose from 'mongoose';
import { App } from './App';
import { DatabaseConfig } from './Config';

const app = new App();
app.config();

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}

mongoose
  .connect(DatabaseConfig.getDatabaseUri())
  .then((ans) => {
    console.log('DB connection is successful 🚀');
    app.listen(PORT, listener);
  })
  .catch((error: any) => {
    console.log('💣😑 What Happened');
    console.error(error);
  });
