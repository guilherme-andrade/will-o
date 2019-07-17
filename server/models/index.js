import mongoose from 'mongoose';

import User from './User';
import Company from './Company';

const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, options);
};

const models = { User, Company };

export { connectDb };

export default models;
