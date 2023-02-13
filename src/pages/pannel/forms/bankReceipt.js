import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BankReceipt = () => {

  const [date, setDate] = useState('')
  const [refNo, setRefNo] = useState('')
  const [receivedIn, setReceivedIn] = useState('')
  const [cashInHand, setCashInHand] = useState('')
  const [receivedFrom, setReceivedFrom] = useState('')
  const [details, setDetails] = useState('')
  
  const [name, setName] = useState('')
  const [memo, setMemo] = useState('')
  const [attachment, setAttachment] = useState('')


  const handleChange = (e) => {
    
    if(e.target.name === 'receivedIn'){
      setReceivedIn(e.target.value)
    }
    else if(e.target.name === 'name'){
      setName(e.target.value)
    }
    else if(e.target.name === 'cashInHand'){
      setCashInHand(e.target.value)
    }
    else if(e.target.name === 'receivedFrom'){
      setReceivedFrom(e.target.value)
    }
    else if(e.target.name === 'date'){
      setDate(e.target.value)
    }
    else if(e.target.name === 'refNo'){
      setRefNo(e.target.value)
    }
    else if(e.target.name === 'memo'){
      setMemo(e.target.value)
    }
    else if(e.target.name === 'details'){
      setDetails(e.target.value)
    }
    else if(e.target.name === 'attachment'){
      setAttachment(e.target.value)
    }
  }

  const submit = async(e)=>{
    e.preventDefault()

    
    // fetch the data from form to makes a file in local system
    const data = { receivedIn, name, cashInHand, receivedFrom, memo, date, refNo, details, attachment };

    if( cashInHand != receivedFrom ){
      toast.error("cashInHand receivedFrom values must be equal" , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
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
  
          setDate('')
          setRefNo('')
          setReceivedIn('')
          setCashInHand('')
          setReceivedFrom('')
          setDetails('')
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


    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-1 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Bank Receipt</h3>
          </div>
        </div>
        <div className="mt-2 md:col-span-2 md:mt-0">
          <form method="POST" onSubmit={submit}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="refNo" className="block text-sm font-medium text-gray-700">
                       Reference No:
                    </label>
                    <input
                      type="number"
                      onChange={handleChange}
                      name="refNo"
                      value={refNo}
                      id="refNo"
                      autoComplete="refNo"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Journal Date:
                    </label>
                    <input
                      type="date"
                      onChange={handleChange}
                      name="date"
                      id="date"
                      value={date}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="receivedIn" className="block text-sm font-medium text-gray-700">
                      Received In:
                    </label>
                    <select id="receivedIn" name="receivedIn" onChange={handleChange} value={receivedIn} className="mt-1 py-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option value={'Due on receipt'}>Due on receipt</option>
                      <option value={'Net 15'}>Net 15</option>
                      <option value={'Net 30'}>Net 30</option>
                      <option value={'Net 60'}>Net 60</option>
                    </select>
                  </div>

                  
                  <div className="col-span-6 sm:col-span-1">
                    <label htmlFor="cashInHand" className="block text-sm font-medium text-gray-700">
                      Cash In Hand:
                    </label>
                    <input
                      type="number"
                      onChange={handleChange}
                      name="cashInHand"
                      id="cashInHand"
                      value={cashInHand}
                      autoComplete="cashInHand"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>



                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="receivedFrom" className="block text-sm font-medium text-gray-700">
                      Received From:
                    </label>
                    <select id="receivedFrom" name="receivedFrom" onChange={handleChange} value={receivedFrom} className="mt-1 py-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option value={'Due on receipt'}>Due on receipt</option>
                      <option value={'Net 15'}>Net 15</option>
                      <option value={'Net 30'}>Net 30</option>
                      <option value={'Net 60'}>Net 60</option>
                    </select>
                  </div>

                  

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                      Details:
                    </label>
                    <textarea cols="30" rows="1" type="text"
                      name="details"
                      id="details"
                      onChange={handleChange}
                      value={details}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    </textarea>
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label htmlFor="balance" className="block text-sm font-medium text-gray-700">
                      Balance:
                    </label>
                    <input
                      type="number"
                      onChange={handleChange}
                      name="balance"
                      id="balance"
                      value={balance}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
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

export default BankReceipt