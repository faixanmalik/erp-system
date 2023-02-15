// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import JournalEntries from 'models/JournalEntries';


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const { account, name, debit, credit, memo, journalDate, journalNo, desc, attachment } = req.body;

        let newEntry = new JournalEntries( { account, name, debit, credit, memo, journalDate, journalNo, desc, attachment } );
        await newEntry.save();
        
        res.status(200).json({ success: true, message: "Entry Added !" }) 
        }

    }