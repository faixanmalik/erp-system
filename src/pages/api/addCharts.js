// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Charts from '../../../models/Charts'


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const { account, accountCode, balance , asof, desc, subAccount } = req.body;
        let newCharts = new Charts( { account, accountCode, balance , asof, desc, subAccount } );
        await newCharts.save();
        
        res.status(200).json({ success: true, message: "New Charts of Account Added !" }) 
        }

    }