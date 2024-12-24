/**
 * SizeGuide Component
 * 
 * This component displays a size guide modal with measurements
 * and fitting recommendations.
 */

'use client'

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Ruler, X } from 'lucide-react'

interface SizeGuideProps {
  isOpen: boolean
  onClose: () => void
  category: string
}

interface SizeInfo {
  size: string
  chest: string
  waist: string
  hips: string
  [key: string]: string
}

const CLOTHING_SIZES: SizeInfo[] = [
  { size: 'XS', chest: '32-34"', waist: '26-28"', hips: '34-36"' },
  { size: 'S', chest: '34-36"', waist: '28-30"', hips: '36-38"' },
  { size: 'M', chest: '36-38"', waist: '30-32"', hips: '38-40"' },
  { size: 'L', chest: '38-40"', waist: '32-34"', hips: '40-42"' },
  { size: 'XL', chest: '40-42"', waist: '34-36"', hips: '42-44"' },
]

const SHOE_SIZES = [
  { size: 'US', '6': '37', '7': '38', '8': '39', '9': '40', '10': '41', '11': '42' },
  { size: 'UK', '6': '4', '7': '5', '8': '6', '9': '7', '10': '8', '11': '9' },
  { size: 'EU', '6': '37', '7': '38', '8': '39', '9': '40', '10': '41', '11': '42' },
  { size: 'CM', '6': '23.5', '7': '24', '8': '24.5', '9': '25', '10': '25.5', '11': '26' },
]

export default function SizeGuide({ isOpen, onClose, category }: SizeGuideProps) {
  const isClothing = category.toLowerCase().includes('clothing')

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Size Guide
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Title>

                <div className="mt-4">
                  {isClothing ? (
                    <>
                      <p className="mb-4 text-sm text-gray-500">
                        Measurements are provided in inches. For the best fit, measure yourself and compare to the size chart below.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              {Object.keys(CLOTHING_SIZES[0]).map((header) => (
                                <th
                                  key={header}
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {CLOTHING_SIZES.map((size) => (
                              <tr key={size.size}>
                                {Object.values(size).map((value, index) => (
                                  <td
                                    key={index}
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                  >
                                    {value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="mb-4 text-sm text-gray-500">
                        Find your perfect shoe size using the conversion chart below.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              {Object.keys(SHOE_SIZES[0]).map((header) => (
                                <th
                                  key={header}
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {SHOE_SIZES.map((row) => (
                              <tr key={row.size}>
                                {Object.values(row).map((value, index) => (
                                  <td
                                    key={index}
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                  >
                                    {value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}

                  <div className="mt-6 space-y-4">
                    <h4 className="font-medium text-gray-900">Measuring Tips</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>Use a soft measuring tape</li>
                      <li>Keep the tape level and not too tight</li>
                      <li>Measure yourself in your underwear for accuracy</li>
                      <li>When in doubt, size up</li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 