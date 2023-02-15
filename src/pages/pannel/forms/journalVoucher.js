import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JournalVoucher = () => {

  const [journalDate, setJournalDate] = useState('')
  const [journalNo, setJournalNo] = useState('')
  const [account, setAccount] = useState('')
  const [debit, setDebit] = useState('')
  const [credit, setCredit] = useState('')
  const [desc, setDesc] = useState('')
  const [name, setName] = useState('')
  const [memo, setMemo] = useState('')
  const [attachment, setAttachment] = useState('')


  const handleChange = (e) => {
    
    if(e.target.name === 'account'){
      setAccount(e.target.value)
    }
    else if(e.target.name === 'name'){
      setName(e.target.value)
    }
    else if(e.target.name === 'debit'){
      setDebit(e.target.value)
    }
    else if(e.target.name === 'credit'){
      setCredit(e.target.value)
    }
    else if(e.target.name === 'journalDate'){
      setJournalDate(e.target.value)
    }
    else if(e.target.name === 'journalNo'){
      setJournalNo(e.target.value)
    }
    else if(e.target.name === 'memo'){
      setMemo(e.target.value)
    }
    else if(e.target.name === 'desc'){
      setDesc(e.target.value)
    }
    else if(e.target.name === 'attachment'){
      setAttachment(e.target.value)
    }
  }

  const submit = async(e)=>{
    e.preventDefault()

    
    // fetch the data from form to makes a file in local system
    const data = { account, name, debit, credit, memo, journalDate, journalNo, desc, attachment };

    if( debit != credit ){
      toast.error("Debit Credit values must be equal" , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
    }
    else{
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addVouchers`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        let response = await res.json()
  
          setJournalDate('')
          setJournalNo('')
          setAccount('')
          setDebit('')
          setCredit('')
          setDesc('')
          setName('')
          setMemo('')
          setAttachment('')
  
          if (response.success === true) {
              toast.success(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
          }
  
          else {
              toast.error(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
          }

    }
      
  }


  return (
    <>
    {/* React tostify */}
    <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>


    <div className="mt-10 sm:mt-0 w-full">
      <div className="md:grid md:grid-cols-1 md:gap-6">
        <div className="md:col-span-1 mt-10">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Journal Voucher</h3>
          </div>
        </div>
        <div className="mt-2 md:col-span-2 md:mt-0">
          <form method="POST" onSubmit={submit}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="journalDate" className="block text-sm font-medium text-gray-700">
                      Journal Date:
                    </label>
                    <input
                      type="date"
                      onChange={handleChange}
                      name="journalDate"
                      id="journalDate"
                      value={journalDate}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="journalNo" className="block text-sm font-medium text-gray-700">
                       Journal No:
                    </label>
                    <input
                      type="number"
                      onChange={handleChange}
                      name="journalNo"
                      value={journalNo}
                      id="journalNo"
                      autoComplete="journalNo"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-1">
                    <label htmlFor="account" className="block text-sm font-medium text-gray-700">
                      Account:
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="account"
                      value={account}
                      id="account"
                      autoComplete="account"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div className="col-span-6 sm:col-span-1">
                    <label htmlFor="debit" className="block text-sm font-medium text-gray-700">
                      Debit:
                    </label>
                    <input
                      type="number"
                      onChange={handleChange}
                      name="debit"
                      id="debit"
                      value={debit}
                      autoComplete="debit"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label htmlFor="credit" className="block text-sm font-medium text-gray-700">
                      Credit:
                    </label>
                    <input
                      type="number"
                      onChange={handleChange}
                      name="credit"
                      id="credit"
                      value={credit}
                      autoComplete="credit"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                      Description:
                    </label>
                    <textarea cols="30" rows="1" type="text"
                      name="desc"
                      id="desc"
                      onChange={handleChange}
                      value={desc}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    </textarea>
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={name}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                    <label htmlFor="memo" className="block text-sm font-medium text-gray-700">
                      Memo:
                    </label>
                    <textarea cols="30" rows="4" type="text"
                      name="memo"
                      onChange={handleChange}
                      id="memo"
                      value={memo}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    </textarea>
                  </div>
                  
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">
                      Attachment:
                    </label>
                    <input
                      type="file"
                      onChange={handleChange}
                      name="attachment"
                      value={attachment}
                      id="attachment"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      multiple
                    />
                  </div>

                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default JournalVoucher