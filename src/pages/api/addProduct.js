// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from '../../../models/Product'


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const { barcode, productName, sn, model, category, salePrice, unit, image, supplier, supplierPrice, action, productDetails } = req.body;
        let newProduct = new Product( { barcode, productName, sn, model, category, salePrice, unit, image, supplier, supplierPrice, action, productDetails } );
        await newProduct.save();
        
        res.status(200).json({ success: true, message: "New Product Added !"}) 
        }

    }