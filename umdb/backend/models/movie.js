module.exports = (mongoose) => {
    const ObjectId = mongoose.Schema.ObjectId;

    const movie = new mongoose.Schema({
        title: String,
        summary: String,
        release_date: Date,
        actors: [ObjectId]
    });

    mongoose.model('Movie', movie);
};