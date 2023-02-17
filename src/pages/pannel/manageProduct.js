import React, {useState, Fragment} from 'react'
import Product from '../../../models/Product';
import mongoose from "mongoose";
import AddProduct from './addProduct';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Menu, Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ManageProduct = ({product}) => {

    const [open, setOpen] = useState(false)

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
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-1 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0 flex">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Manage Product</h3>
            <button onClick={()=>{setOpen(true)}} className='ml-auto bg-blue-800 text-white px-14 py-2 rounded-lg'>
             New
            </button>
          </div>
        </div>
        <div className="mt-2 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
            
            <div className="overflow-x-auto shadow-sm">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                SL
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Model
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      
                      {product.map((item, index)=>{
                      return <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
                        <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                            {index + 1}
                        </th>
                        <td className="px-6 py-3">
                            {item.productName}
                        </td>
                        <td className="px-6 py-3">
                            {item.model}
                        </td>
                        <td className="px-6 py-3">
                            {item.supplier}
                        </td>
                        <td className="px-6 py-3">
                            ${item.salePrice}
                        </td>
                        <td className="px-6 py-3">
                            ${item.supplierPrice}
                        </td>
                        <td className="px-6 py-3">
                            {item.action}
                        </td>
                        <td className="px-6 py-3">
                          <Menu as="div" className=" inline-block text-left">
                            <div>
                              <Menu.Button className="z-0">
                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                              </Menu.Button>
                            </div>
                            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                              <Menu.Items className="absolute right-16 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1 z-20">
                                  <Menu.Item>{({ active }) => (
                                      <Link href="#" className={classNames(   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 no-underline', 'block px-4 py-2 text-sm hover:no-underline' )}>Edit</Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>{({ active }) => (
                                      <Link href="#" className={classNames(   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 no-underline', 'block px-4 py-2 text-sm hover:no-underline' )}>Delete</Link>
                                    )}
                                  </Menu.Item>
                                  
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </td>
                      </tr>})}
                    </tbody>
                </table>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{setOpen(false)}}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95" enterTo="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 md:scale-100" leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-5xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-6 lg:right-8" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>


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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    </>
  )
}




export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState){
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.find()

   
  // Pass data to the page via props
  return {
     props: { product: JSON.parse(JSON.stringify(product)) } 
    }
}

export default ManageProduct