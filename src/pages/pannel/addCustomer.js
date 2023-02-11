import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddCustomer = () => {

  const [customerName, setCustomerName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [country, setCountry] = useState('United State')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [taxRigNo, setTaxRigNo] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Cash')
  const [terms, setTerms] = useState('Due on receipt')
  const [openingBalance, setOpeningBalance] = useState('')
  const [date, setDate] = useState('')

  
  const handleChange = (e) => {
    if(e.target.name === 'customerName'){
      setCustomerName(e.target.value)
    }
    else if(e.target.name === 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name === 'phoneNo'){
      setPhoneNo(e.target.value)
    }
    else if(e.target.name === 'country'){
      setCountry(e.target.value)
    }
    else if(e.target.name === 'streetAddress'){
      setStreetAddress(e.target.value)
    }
    else if(e.target.name === 'city'){
      setCity(e.target.value)
    }
    else if(e.target.name === 'state'){
      setState(e.target.value)
    }
    else if(e.target.name === 'zip'){
      setZip(e.target.value)
    }
    else if(e.target.name === 'taxRigNo'){
      setTaxRigNo(e.target.value)
    }
    else if(e.target.name === 'paymentMethod'){
      setPaymentMethod(e.target.value)
    }
    else if(e.target.name === 'terms'){
      setTerms(e.target.value)
    }
    else if(e.target.name === 'openingBalance'){
      setOpeningBalance(e.target.value)
    }
    else if(e.target.name === 'date'){
      setDate(e.target.value)
    }

  }

  const submit = async(e)=>{
    e.preventDefault()

    
    // fetch the data from form to makes a file in local system
    const data = { customerName, email, phoneNo, country, streetAddress, city, state, zip, taxRigNo, paymentMethod, terms , openingBalance, date };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addCustomer`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()

        setCustomerName('')
        setEmail('')
        setPhoneNo('')
        setCountry('')
        setStreetAddress('')
        setCity('')
        setState('')
        setZip('')
        setTaxRigNo('')
        setTerms('')
        setOpeningBalance('')
        setPaymentMethod('')
        setDate('')


        if (response.success === true) {
            toast.success(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

        else {
            toast.error(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
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
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add Customer</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>

          <div className="mt-2 md:col-span-2 md:mt-0">

            <form method="POST" onSubmit={submit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                        Customer Name
                      </label>
                      <input
                        onChange={handleChange}
                        value={customerName}
                        type="text"
                        name="customerName"
                        id="customerName"
                        autoComplete="given-name"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
 
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        onChange={handleChange}
                        value={email}
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        onChange={handleChange}
                        value={phoneNo}
                        type="number"
                        name="phoneNo"
                        id="phoneNo"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        onChange={handleChange}
                        value={country}
                        autoComplete="country"
                        className="mt-1 py-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={'United State'}>United States</option>
                        <option value={'Canada'}>Canada</option>
                        <option value={'Mexico'}>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                        Street Address
                      </label>
                      <input
                        onChange={handleChange}
                        value={streetAddress}
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        autoComplete="streetAddress"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        onChange={handleChange}
                        value={city}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        onChange={handleChange}
                        value={state}
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="address-level1"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        onChange={handleChange}
                        value={zip}
                        type="number"
                        name="zip"
                        id="zip"
                        autoComplete="zip"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="taxRigNo" className="block text-sm font-medium text-gray-700">
                          Tax Reg.No
                      </label>
                      <input
                        onChange={handleChange}
                        value={taxRigNo}
                        type="number"
                        name="taxRigNo"
                        id="taxRigNo"
                        autoComplete="taxRigNo"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                        Prefered Payment Method
                      </label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        onChange={handleChange}
                        value={paymentMethod}
                        className="mt-1 py-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={'Cash'}>Cash</option>
                        <option value={'Cheque'}>Cheque</option>
                        <option value={'Credit Card'}>Credit Card</option>
                        <option value={'Direct Debit'}>Direct Debit</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="terms" className="block text-sm font-medium text-gray-700">
                        Terms
                      </label>
                      <select id="terms" name="terms" onChange={handleChange} value={terms} className="mt-1 py-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option value={'Due on receipt'}>Due on receipt</option>
                        <option value={'Net 15'}>Net 15</option>
                        <option value={'Net 30'}>Net 30</option>
                        <option value={'Net 60'}>Net 60</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="openingBalance" className="block text-sm font-medium text-gray-700">
                        Opening Balance
                      </label>
                      <input
                        onChange={handleChange}
                        value={openingBalance}
                        type="number"
                        name="openingBalance"
                        id="openingBalance"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        as of
                      </label>
                      <input
                        onChange={handleChange}
                        value={date}
                        type="date"
                        name="date"
                        id="date"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                </div>

              </div>
            </form>

          </div>

        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      
    </>
  )
}

export default AddCustomer