module.exports = (mongoose) => {
    const movie = new mongoose.Schema({
        title: String,
        summary: String,
        release_date: Date,
        image_url: URL | null,
        actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }] | null,
        directors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }] | null
    });

    mongoose.model('Movie', movie);
};