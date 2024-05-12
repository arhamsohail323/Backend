const mongoose = require('mongoose');


const connectDB = async () => {
    try {

        const MONGODB_URI_USMAN = process.env.MONGODB_URI_USMAN;
        console.log(`mongodb+srv://learnease:admin037@cluster0.l5fjz0z.mongodb.net/`)

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        };


        await mongoose.connect(MONGODB_URI_USMAN);

        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
