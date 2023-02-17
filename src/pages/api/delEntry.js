// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import JournalEntries from 'models/JournalEntries';
import Charts from 'models/Charts';
import Contact from 'models/Contact';
import FinancialYear from 'models/FinancialYear';


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const { delPath } = req.body;
        console.log(delPath)

        if(delPath === 'chartsOfAccounts'){
            const { id } = req.body;

            await Charts.findByIdAndDelete( id )
            res.status(200).json({ success: true, message: "Deleted Successfully !" }) 

        }
        else if (delPath === 'manageVouchers'){
            const { id } = req.body;

            await JournalEntries.findByIdAndDelete( id )
            res.status(200).json({ success: true, message: "Deleted Successfully !" }) 
        }
        else if (delPath === 'contactList'){
            const { id } = req.body;
            
            await Contact.findByIdAndDelete( id )
            res.status(200).json({ success: true, message: "Deleted Successfully !" }) 
        }
        else if (delPath === 'financialYear'){
            const { id } = req.body;
            
            await FinancialYear.findByIdAndDelete( id )
            res.status(200).json({ success: true, message: "Deleted Successfully !" }) 
        }




        else{
            res.status(400).json({ success: false, message: "Some Error Occured !" }) 
        }




    }
    else{
        res.status(400).json({ success: false, message: "Some Error Occured !" }) 

    }

    }