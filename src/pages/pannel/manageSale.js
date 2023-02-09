import React from 'react'

const ManageSale = () => {
  return (
    <>
    <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Manage Sale</h3>
            </div>
          </div>
          <div className="mt-2 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
               
                <div class="relative overflow-x-auto shadow-sm">
                    <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">


                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    SL
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Invoice No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Sale By
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Customer Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Total Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr class="bg-white border-b hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    01:
                                </th>
                                <td class="px-6 py-4">
                                    128752635
                                </td>
                                <td class="px-6 py-4">
                                    Frenchise one
                                </td>
                                <td class="px-6 py-4">
                                    test
                                </td>
                                <td class="px-6 py-4">
                                    wednesday 9,2023
                                </td>
                                <td class="px-6 py-4">
                                    $100
                                </td>
                                <td class="px-6 py-4">
                                    Delivered
                                </td>
                                
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="bg-slate-100 px-4 py-3 text-right sm:px-6">
                  <h1 className='text-sm text-indigo-700 mr-48'>Total Amount: $100</h1>
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

export default ManageSale