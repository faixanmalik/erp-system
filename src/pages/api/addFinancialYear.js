// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import FinancialYear from "models/FinancialYear";


export default async function handler(req, res) {

    if (req.method == 'POST'){

        const { yearName, status, startDate, endDate } = req.body;
        let newFinancialYear = new FinancialYear({yearName, status, startDate, endDate } );
        
        await newFinancialYear.save();
        
        res.status(200).json({ success: true, message: "New Financial Year Added !"}) 
        }

    }