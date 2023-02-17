// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from 'models/Contact';
import FinancialYear from 'models/FinancialYear';
import JournalEntries from 'models/JournalEntries';
import Charts from '../../../models/Charts'
import moment from 'moment';
import Product from 'models/Product';


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

        else if (editPath === 'contactList'){

            const { id, name, type,  email, phoneNo, country, streetAddress, city, state, zip,
                 taxRigNo, paymentMethod, terms , openingBalance, date  } = req.body;

            let dbContact = await Contact.findById(id)

            if(dbContact){
                if( name === dbContact.name && type === dbContact.type && email === dbContact.email &&  phoneNo === dbContact.phoneNo &&  country === dbContact.country &&  streetAddress === dbContact.streetAddress && city === dbContact.city && state === dbContact.state && zip === dbContact.zip && taxRigNo === dbContact.taxRigNo && paymentMethod === dbContact.paymentMethod && terms === dbContact.terms && openingBalance === dbContact.openingBalance){
                    res.status(400).json({ success: false, message: "Already In Charts of accounts!" }) 
                }
                else{
                    let editContact =  await Contact.findByIdAndUpdate(id, {name : name , type : type , email : email ,phoneNo : phoneNo , country : country , streetAddress : streetAddress, city : city , state : state , zip : zip, taxRigNo : taxRigNo , paymentMethod : paymentMethod , terms : terms, openingBalance : openingBalance, date: date })
                    res.status(200).json({ success: true, message: "Update Successfully!", editContact }) 
                }
            }
            else{
                res.status(400).json({ success: false, message: "Internal server error!" }) 
            }
        }

        else if (editPath === 'financialYear'){
            const { id, yearName, status, startDate, endDate } = req.body;
            let dbFinancialYear = await FinancialYear.findById(id)

            const sDate = moment(dbFinancialYear.startDate).utc().format('YYYY-MM-DD')
            const eDate = moment(dbFinancialYear.endDate).utc().format('YYYY-MM-DD')

            if(dbFinancialYear){
                if( yearName === dbFinancialYear.yearName && status === dbFinancialYear.status && startDate === sDate &&  endDate === eDate){
                    res.status(400).json({ success: false, message: "Already In Charts of accounts!" }) 
                }
                else{
                    let editFinancialYear =  await FinancialYear.findByIdAndUpdate(id, {yearName : yearName , status : status , startDate : startDate ,endDate : endDate })
                    res.status(200).json({ success: true, message: "Update Successfully!", editFinancialYear }) 
                }
            }
            else{
                res.status(400).json({ success: false, message: "Internal server error!" }) 
            }
        }
        else if (editPath === 'productAndServices'){
            const { id, code, name, purchaseStatus, costPrice, purchaseAccount, purchaseTaxRate, purchaseDesc , salesStatus,  salesPrice, salesAccount, salesTaxRate, salesDesc } = req.body;
            let dbProduct = await Product.findById(id)

            if(dbProduct){
                if( code === dbProduct.code && name === dbProduct.name && name === dbProduct.name && purchaseStatus === dbProduct.purchaseStatus && costPrice === dbProduct.costPrice && purchaseAccount === dbProduct.purchaseAccount && purchaseTaxRate === dbProduct.purchaseTaxRate && purchaseDesc === dbProduct.purchaseDesc && salesStatus === dbProduct.salesStatus && salesPrice === dbProduct.salesPrice && salesAccount === dbProduct.salesAccount && salesTaxRate === dbProduct.salesTaxRate && salesDesc === dbProduct.salesDesc  ){
                    res.status(400).json({ success: false, message: "Already found!" }) 
                }
                else{
                    let editProduct =  await Product.findByIdAndUpdate(id, { code: code, name: name, purchaseStatus: purchaseStatus, costPrice:costPrice, purchaseAccount: purchaseAccount, purchaseTaxRate: purchaseTaxRate, purchaseDesc:purchaseDesc , salesStatus: salesStatus,  salesPrice: salesPrice, salesAccount:salesAccount, salesTaxRate:salesTaxRate, salesDesc:salesDesc })
                    res.status(200).json({ success: true, message: "Update Successfully!", editProduct }) 
                }
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