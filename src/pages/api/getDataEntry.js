// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from 'models/Contact';
import FinancialYear from 'models/FinancialYear';
import Charts from '../../../models/Charts'


export default async function handler(req, res) {

    if (req.method == 'POST'){

        const { getDataPath } = req.body;


        if( getDataPath === 'chartsOfAccounts'){
            const { id } = req.body;
            let charts = await Charts.findById(id)
            if(charts){
                res.status(200).json({ success: true, charts}) 
            }
            else{
                res.status(400).json({ success: false, message: "Internal server error!" }) 
            }
        }

        else if( getDataPath === 'contactList' ){
            const { id } = req.body;
            let contact = await Contact.findById(id)
            if(contact){
                res.status(200).json({ success: true, contact}) 
            }
            else{
                res.status(400).json({ success: false, message: "Internal server error!" }) 
            }

        }

        else if( getDataPath === 'financialYear' ){
            const { id } = req.body;
            let financialYear = await FinancialYear.findById(id)
            if(financialYear){
                res.status(200).json({ success: true, financialYear}) 
            }
            else{
                res.status(400).json({ success: false, message: "Internal server error!" }) 
            }

        }


        
        
    }

    else{
        res.status(400).json({ success: false, message: "Some Error Occured !" }) 
    }

}
