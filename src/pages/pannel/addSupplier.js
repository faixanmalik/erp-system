import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddSupplier = () => {


  const [supplierName, setSupplierName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [country, setCountry] = useState('United States')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')



  const handleChange = (e) => {
    if(e.target.name === 'supplierName'){
      setSupplierName(e.target.value)
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

  }



  const submit = async(e)=>{
    e.preventDefault()

    
    // fetch the data from form to makes a file in local system
    const data = { supplierName, email, phoneNo, country, streetAddress, city, state, zip };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addSupplier`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()

        setSupplierName('')
        setEmail('')
        setPhoneNo('')
        setCountry('')
        setStreetAddress('')
        setCity('')
        setState('')
        setZip('')

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

      <div className="mt-10 sm:mt-0 w-full">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add Supplier</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-2 md:col-span-2 md:mt-0">



            <form method="POST" onSubmit={submit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700">
                        Supplier Name
                      </label>
                      <input
                        onChange={handleChange}
                        value={supplierName}
                        type="text"
                        name="supplierName"
                        id="supplierName"
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
                        autoComplete="phoneNo"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        onChange={handleChange}
                        value={country}
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={'United States'}>United States</option>
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

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

    </>
  )
}

export default AddSupplier