// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Supplier from '../../../models/Supplier'


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const {supplierName,  email, phoneNo, country, streetAddress, city, state, zip } = req.body;
        let newSupplier = new Supplier( {supplierName,  email, phoneNo, country, streetAddress, city, state, zip } );
        await newSupplier.save();
        
        res.status(200).json({ success: true, message: "New supplier Added !" }) 
        }

    }