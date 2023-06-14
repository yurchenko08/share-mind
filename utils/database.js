import mongoose from 'mongoose';
let isConnected = false;
export const connectToDb = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('MongoDb is already connected');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB.URI, {
      dbName: 'shareMinds',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('mongoDB connected');
  } catch (error) {
    console.error(error);
  }
};
