import cloudinary from '../config/cloudinary';
import Product from '../models/product';

export const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product.reverse());
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Product.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        // const newProduct = new Product(req.body);
        // const aa = await newProduct.save();
        const data = JSON.parse(req.body.data);
        // const data = req.body.data;
       
        console.log(req);
        console.log(req.files);
        if (req.files.length > 0) {
            const { secure_url, public_id } = await cloudinary.uploader.upload(req.files[0].path);
            const obj = {
                ...data,
                image: {
                    path: secure_url,
                    cloudinaryId: public_id
                }
            }
            const productCreated = await Product.create(obj);
            res.status(201).json(productCreated);
        }
        else {
            const productCreated = await Product.create(data);
            res.status(201).json(productCreated);
        }
    } catch (error) {
        console.log(error);
        res.json({ message: error });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updatedProduct = JSON.parse(req.body.data);
    try {
        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
        const product = await Product.findById(id);
        if (product) {
            console.log(req.files.length);
            if (req.files.length > 0) {
                await cloudinary.uploader.destroy(product.image.cloudinaryId); // delete previous
                const { secure_url, public_id } = await cloudinary.uploader.upload(req.files[0].path); // add new image

                updatedProduct.image = {
                    path: secure_url,
                    cloudinaryId: public_id
                };
            }
            else {
                updatedProduct.image = product.image;
            }
            const reObj = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
            res.json(reObj);
        }
        else
            res.status(404).send(`No product with id: ${id}`);
    }
    catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        // const isExist = mongoose.Types.ObjectId.isValid(id);
        const resp = await Product.findByIdAndRemove(id);
        if (!resp)
            return res.status(404).send(`No product with id: ${id}`);

        await cloudinary.uploader.destroy(resp.image.cloudinaryId);
        res.json({ message: "Product deleted successfully." });
    } catch (error) {
        res.json({ messageIs: error });
    }
}