import React from 'react'

const MakeJournalEntries = () => {
  return (
    <>
    <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Make a Journal Entries</h3>
            </div>
          </div>
          <div className="mt-2 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-3" required>
                      <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                        Customer Name:
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        id="customerName"
                        autoComplete="customerName"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3" required>
                      <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                        Phone No:
                      </label>
                      <input
                        type="text"
                        name="phoneNo"
                        id="phoneNo"
                        autoComplete="phoneNo"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>



                    <div className="col-span-6 sm:col-span-3" required>
                      <label htmlFor="paymentType" className="block text-sm font-medium text-gray-700">
                        Payment Type:
                      </label>
                      <select
                        id="paymentType"
                        name="paymentType"
                        autoComplete="paymentType"
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Cash Payment</option>
                        <option>Credit</option>
                      </select>
                    </div>


                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date:
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        autoComplete="date"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
 

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="invoiceNo" className="block text-sm font-medium text-gray-700">
                        Invoice Number:
                      </label>
                      <input
                        type="text"
                        name="invoiceNo"
                        id="invoiceNo"
                        autoComplete="invoiceNo"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>





                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="itemInformation" className="block text-sm font-medium text-gray-700">
                        Item Information:
                      </label>
                      <input
                        type="text"
                        name="itemInformation"
                        id="itemInformation"
                        autoComplete="itemInformation"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-1">
                      <label htmlFor="sn" className="block text-sm font-medium text-gray-700">
                        Sn:
                      </label>
                      <input
                        type="number"
                        name="sn"
                        id="sn"
                        autoComplete="sn"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label htmlFor="availableQty" className="block text-sm font-medium text-gray-700">
                        Available Quantity:
                      </label>
                      <input
                        type="number"
                        name="availableQty"
                        id="availableQty"
                        autoComplete="availableQty"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                        Unit:
                      </label>
                      <input
                        type="number"
                        name="unit"
                        id="unit"
                        autoComplete="unit"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                        Quantity:
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
                        Rate:
                      </label>
                      <input
                        type="number"
                        name="rate"
                        id="rate"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                        Discount:
                      </label>
                      <input
                        type="number"
                        name="discount"
                        id="discount"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label htmlFor="total" className="block text-sm font-medium text-gray-700">
                        Total:
                      </label>
                      <input
                        type="number"
                        name="total"
                        id="total"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                      <label htmlFor="saleDetails" className="block text-sm font-medium text-gray-700">
                        Sale Details:
                      </label>
                      <textarea cols="30" rows="5" type="text"
                        name="saleDetails"
                        id="saleDetails"
                        autoComplete="saleDetails"
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

export default MakeJournalEntries