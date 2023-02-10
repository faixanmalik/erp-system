import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

  const [barcode, setBarcode] = useState('')
  const [productName, setProductName] = useState('')
  const [sn, setSn] = useState('')
  const [model, setModel] = useState('')
  const [category, setCategory] = useState('shirts')
  const [salePrice, setSaleprice] = useState('')
  const [unit, setUnit] = useState('')
  const [image, setImage] = useState('')
  const [supplier, setSupplier] = useState('Ahmad Trader')
  const [supplierPrice, setSupplierPrice] = useState('')
  const [action, setAction] = useState('')
  const [productDetails, setProductDetails] = useState('')

  const handleChange = (e) => {
    if(e.target.name === 'barcode'){
      setBarcode(e.target.value)
    }
    else if(e.target.name === 'productName'){
      setProductName(e.target.value)
    }
    else if(e.target.name === 'sn'){
      setSn(e.target.value)
    }
    else if(e.target.name === 'model'){
      setModel(e.target.value)
    }
    else if(e.target.name === 'category'){
      setCategory(e.target.value)
    }
    else if(e.target.name === 'salePrice'){
      setSaleprice(e.target.value)
    }
    else if(e.target.name === 'unit'){
      setUnit(e.target.value)
    }
    else if(e.target.name === 'image'){
      setImage(e.target.value)
    }
    else if(e.target.name === 'supplierPrice'){
      setSupplierPrice(e.target.value)
    }
    else if(e.target.name === 'supplier'){
      setSupplier(e.target.value)
    }
    else if(e.target.name === 'action'){
      setAction(e.target.value)
    }
    else if(e.target.name === 'productDetails'){
      setProductDetails(e.target.value)
    }
    

  }
  const submit = async(e)=>{
    e.preventDefault()

    // fetch the data from form to makes a file in local system
    const data = { barcode, productName, sn, model, category, salePrice, unit, image, supplier, supplierPrice, action, productDetails };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addProduct`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
      
        setBarcode('')
        setProductName('')
        setSn('')
        setModel('')
        setCategory('')
        setSaleprice('')
        setUnit('')
        setImage('')
        setSupplierPrice('')
        setSupplier('')
        setAction('')
        setProductDetails('')

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
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add Product</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
      </div>
      <div className="mt-2 md:col-span-2 md:mt-0">

        <form method="POST" onSubmit={submit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
                    Barcode/QR-code
                  </label>
                  <input
                    value={barcode}
                    onChange={handleChange}
                    type="text"
                    name="barcode"
                    id="barcode"
                    autoComplete="given-name"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    value={productName}
                    onChange={handleChange}
                    type="text"
                    name="productName"
                    id="productName"
                    autoComplete="given-name"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="SN" className="block text-sm font-medium text-gray-700">
                    SN
                  </label>
                  <input
                    value={sn}
                    onChange={handleChange}
                    type="text"
                    name="sn"
                    id="sn"
                    placeholder='111.abc.XYZ'
                    autoComplete="given-name"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                    Model
                  </label>
                  <input
                    value={model}
                    onChange={handleChange}
                    type="text"
                    name="model"
                    id="model"
                    autoComplete="model"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    onChange={handleChange}
                    value={category}
                    id="category"
                    name="category"
                    autoComplete="category"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value={'shirts'}>Shirts</option>
                    <option value={'sneakers'}>Sneakers</option>
                    <option value={'mugs'}>Mugs</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
                    Sale Price
                  </label>
                  <input
                    value={salePrice}
                    onChange={handleChange}
                    type="number"
                    name="salePrice"
                    id="salePrice"
                    autoComplete="salePrice"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                    Unit
                  </label>
                  <input
                    value={unit}
                    onChange={handleChange}
                    type="number"
                    name="unit"
                    id="unit"
                    autoComplete="unit"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <input
                    value={image}
                    onChange={handleChange}
                    type="file"
                    name="image"
                    id="image"
                    autoComplete="image"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
                    Supplier
                  </label>
                  <select
                    onChange={handleChange}
                    value={supplier}
                    id="supplier"
                    name="supplier"
                    autoComplete="supplier"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value={'Ahmad Trader'}>Ahmad Trader</option>
                    <option value={'lahore Travel Agency'}>Lahore Travel Agency</option>
                    <option value={'GarenTown Agency'}>Garden Town Agency</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="supplierPrice" className="block text-sm font-medium text-gray-700">
                    Supplier Price
                  </label>
                  <input
                    value={supplierPrice}
                    onChange={handleChange}
                    type="number"
                    name="supplierPrice"
                    id="supplierPrice"
                    autoComplete="supplierPrice"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                  <label htmlFor="action" className="block text-sm font-medium text-gray-700">
                    Action
                  </label>
                  <input
                    value={action}
                    onChange={handleChange}
                    type="text"
                    name="action"
                    id="action"
                    autoComplete="action"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                  <label htmlFor="productDetails" className="block text-sm font-medium text-gray-700">
                    Produt Details
                  </label>
                  <textarea cols="30" rows="5" type="text"
                    onChange={handleChange}
                    value={productDetails}
                    name="productDetails"
                    id="productDetails"
                    autoComplete="productDetails"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  </textarea>
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

export default AddProduct