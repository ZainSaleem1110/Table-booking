import React from 'react'
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

function FilterbarModal({ show, onClose,FoodCategories }: any) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => onClose()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div ref={cancelButtonRef} className="flex justify-center items-center sm:px-0 px-10">
                <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 realtive">
                  <div className="bg-white lg:px-10 px-5 sm:pt-14 pt-5 pb-10 rounded-xl ">
                    <div className="w-full flex flex-col gap-4 items-center">
                      <input className='h-[55px] pl-3 outline-none border border-[lightgray] rounded-md sm:w-[400px] w-[300px]' placeholder=' Search Restaurants' />
                      <div className='h-[55px] w-full border border-[lightgray] rounded-lg'>
                        <select className="h-full w-full px-3 outline-none border-none rounded-md bg-white">
                          <option value="" disabled>Select Cuisine</option>
                          {FoodCategories && FoodCategories?.length > 0 && FoodCategories.map((items: any, index: number) => {
                            return (
                              <option key={index} value={items.name}>{items.name ?? ""}</option>
                            )
                          })}
                        </select>
                      </div>
                      <input type='date' className='h-[55px] px-3 outline-none border border-[lightgray] rounded-md w-full' placeholder='Date' />
                      <input className='h-[55px] pl-3 outline-none border border-[lightgray] rounded-md w-full' placeholder='Persons' />
                    </div>
                  </div>
                  <div className="px-4 sm:pb-14 pb-7 sm:flex sm:flex-row-reverse justify-start sm:px-6 gap-x-5">
                  <button
                      type="button"
                      className="mt-3 w-[80px] h-[46px] justify-center rounded-md text-[#009DE2] text-sm font-semibold sm:mt-0"
                      ref={cancelButtonRef}
                    >
                      Apply
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-[80px] h-[46px] justify-center rounded-md text-[#009DE2] text-sm font-semibold sm:mt-0"
                      ref={cancelButtonRef}
                      onClick={()=>{onClose()}}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="absolute z-10 top-[-30px] right-[-20px] w-[53px] h-[53px] rounded-full bg-white flex justify-center items-center" onClick={() => {
                    onClose()
                  }}>
                    <AiOutlineClose />
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default FilterbarModal