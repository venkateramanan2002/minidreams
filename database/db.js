import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
// const LINK = process.env.DB_LINK;

const Connection = () => {
    const MONGODB_URI ="mongodb+srv://mvrhsr:venkateatlas@cluster0.aerv5ks.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    });
};

export default Connection;
