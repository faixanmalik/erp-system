// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import JournalEntries from 'models/JournalEntries';
import Charts from '../../../models/Charts'


export default async function handler(req, res) {

    if (req.method == 'POST'){

        const { editPath } = req.body;
        
        if(editPath === 'chartsOfAccounts'){

            const { accountCode, accountName, account, balance , asof, desc, subAccount } = req.body;

            let dbChart = await Charts.findOne({"accountCode": accountCode})
        

            if(dbChart){
                if( accountName == dbChart.accountName && account == dbChart.account && balance == dbChart.balance && desc == dbChart.desc &&  subAccount == dbChart.subAccount){
                        res.status(400).json({ success: false, message: "Already In Charts of accounts!" }) 
                    }
                    else{
                        let editChart =  await Charts.findOneAndUpdate({accountCode: dbChart.accountCode}, {accountName : accountName , account : account , balance : balance , asof : asof , desc : desc , subAccount : subAccount})
                        res.status(200).json({ success: true, message: "Update Successfully!", editChart }) 
                    }
                }
            else{
                res.status(400).json({ success: false, message: "Cannot change Account Code!" }) 
            }
        }



        else if(editPath === 'manageVouchers'){

            const { id } = req.body;

            let journalEntries = await JournalEntries.findById(id)
            
            if(journalEntries){
                res.status(200).json({ success: true, journalEntries}) 
            }
            else{
                res.status(400).json({ success: false, message: "Internal server error!" }) 
            }

        }


        else{
            res.status(400).json({ success: false, message: "Internal server error !" }) 
        }

        
        
    }
    else{
        res.status(400).json({ success: false, message: "Internal server error !" }) 
    }
    
}










// if (req.method == 'POST'){
        
//     const { accountCode, accountName, account, balance , asof, desc, subAccount } = req.body;
  
//     let dbChart = await Charts.findOne({accountCode})
    
//     if(dbChart){
//         if( accountName == dbChart.accountName && account == dbChart.account && balance == dbChart.balance && desc == dbChart.desc &&  subAccount == dbChart.subAccount){
//                 res.status(400).json({ success: false, message: "Already In Charts of accounts!" }) 
//             }
//         else{
//             await Charts.findOneAndUpdate({accountCode: dbChart.accountCode}, {accountName : accountName , account : account , balance : balance , asof : asof , desc : desc , subAccount : subAccount})
//             res.status(200).json({ success: true, message: "Update Successfully!",  }) 
//         }
//     }
//     else{
//         let newCharts = new Charts( { account, accountCode, accountName, balance , asof, desc, subAccount } );
//         await newCharts.save();
    
//         res.status(200).json({ success: true, message: "New Charts of Account Added!" }) 

//     }

        
// }