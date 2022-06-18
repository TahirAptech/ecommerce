import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    price: String,
    description: String,
    category: String,
    image: {
        path: String,
        cloudinaryId: String
    },
    rating: String
});

const Product = mongoose.model('product', productSchema);
export default Product;