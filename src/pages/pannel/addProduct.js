import React from 'react'

const AddProduct = () => {
  return (
    <> 

  <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add Product</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-2 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
                        Barcode/QR-code
                      </label>
                      <input
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
                        id="category"
                        name="category"
                        autoComplete="category"
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Shirts</option>
                        <option>Sneakers</option>
                        <option>Mugs</option>
                      </select>
                    </div>





                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
                        Sale Price
                      </label>
                      <input
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
                        id="supplier"
                        name="supplier"
                        autoComplete="supplier"
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Ahmad Trader</option>
                        <option>Lahore Travel Agency</option>
                        <option>Garden Town Agency</option>
                      </select>
                    </div>




                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="supplierPrice" className="block text-sm font-medium text-gray-700">
                        Supplier Price
                      </label>
                      <input
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
                        name="productDetails"
                        id="productDetails"
                        autoComplete="productDetails"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      </textarea>
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

export default AddProduct