import mongoose from 'mongoose';

mongoose.connect(
    process.env.MONGO_CONNECTION_STRING as string,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);