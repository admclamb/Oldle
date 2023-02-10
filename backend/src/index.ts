const { PORT = '5000' } = process.env;
import mongoose from 'mongoose';
import { App } from './App';
import { DatabaseConfig } from './db/Config';

const app = new App();
app.config();

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}

mongoose
  .connect(DatabaseConfig.getDatabaseUri())
  .then((ans) => {
    console.log('ans', ans);
    app.listen(PORT, listener);
  })
  .catch((error: any) => {
    console.error(error);
  });
