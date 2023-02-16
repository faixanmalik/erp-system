import React, { useState } from 'react'
import CashReceipt from './cashReceipt'
import CashPayment from './cashPayment'
import BankPayment from './bankPayment'
import BankReceipt from './bankReceipt'
import JournalVoucher from './journalVoucher'


const AddVouchers = () => {

  const [creditNoteDate, setCreditNoteDate] = useState('')
  const [type, setType] = useState('')


  const handleChange = (e) => {
  
    if(e.target.name === 'creditNoteDate'){
      setCreditNoteDate(e.target.value)
    }
    else if(e.target.name === 'type'){
      setType(e.target.value)
    }
  }


  return (
    <>

    <div className="mt-10 sm:mt-0 w-full">
    <div className="md:grid md:grid-cols-1 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Add Vouchers</h3>
        </div>
      </div>
      <div className="mt-2 md:col-span-2 md:mt-0 w-full">
        <form method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">

            
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="creditNoteDate" className="block text-sm font-medium text-gray-700">
                    Credit Note Date:
                  </label>
                  <input
                    type="date"
                    onChange={handleChange}
                    name="creditNoteDate"
                    id="creditNoteDate"
                    value={creditNoteDate}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
          
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                      Type:
                    </label>
                    <select id="type" name="type" onChange={handleChange} value={type} className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option>Select Voucher Type</option>
                      <option value={'CPV'}>Cash Payment Voucher (CPV)</option>
                      <option value={'CRV'}>Cash Receipt Voucher (CRV)</option>
                      <option value={'BPV'}>Bank Payment Voucher (BPV)</option>
                      <option value={'BRV'}>Bank Receipt Voucher (BRV)</option>
                      <option value={'JV'}>Journal Voucher (JV)</option>
                    </select>
                  </div>


                
                
              </div>
            </div>
          
          </div>
        </form>
      </div>
    </div>
    </div>

    <div>
      {type === 'CPV' ? <CashPayment/> : ''}
      {type === 'CRV' ? <CashReceipt/> : ''}
      {type === 'BPV' ? <BankPayment/> : ''}
      {type === 'BRV' ? <BankReceipt/> : ''}
      {type === 'JV' ? <JournalVoucher/> : ''}
      
    </div>

    
    </>
  )
}

export default AddVouchers