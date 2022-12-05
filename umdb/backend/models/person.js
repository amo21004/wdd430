module.exports = (mongoose) => {
    const person = new mongoose.Schema({
        first_name: String,
        middle_name: String,
        last_name: String,
        image_url: URL | null
    });

    mongoose.model('Person', person);
};