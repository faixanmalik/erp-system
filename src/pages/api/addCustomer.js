// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Customer from '../../../models/Customer'


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const {customerName,  email, phoneNo, country, streetAddress, city, state, zip, provisionForDoubtfulDebt} = req.body;
        let newCustomer = new Customer( {customerName,  email, phoneNo, country, streetAddress, city, state, zip, provisionForDoubtfulDebt} );
        await newCustomer.save();
        
        res.status(200).json({ success: true, message: "New Customer Added !" }) 
        }

    }