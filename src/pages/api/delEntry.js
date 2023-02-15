// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import JournalEntries from 'models/JournalEntries';
import Charts from 'models/Charts';


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const { delPath } = req.body;

        if(delPath === 'chartsOfAccounts'){
            const { id } = req.body;

            await Charts.findByIdAndDelete( id )
            res.status(200).json({ success: true, message: "Deleted Successfully !" }) 

        }
        else if (delPath === 'manageVouchers'){

            await JournalEntries.findByIdAndDelete( id )
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