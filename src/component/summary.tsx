import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

function Summary() {

    const BoxWrap = ({ children }) => {
        return <div className="flex-1 bg-white rounded-sm border border-gray-300 flex items-center p-3 gap-3">{ children }</div>
    }
  return (
    <div className='flex gap-4'>
        <BoxWrap>
            <div className='rounded-full bg-sky-500 p-2'>
                <IoBagHandle className='text-2xl text-white'/>
            </div>
            <div>
                <span className='text-sm text-gray-500'>Total Sales</span>
                <div className='flex items-center'>
                    <h3 className='text-xl text-gray-700 font-semibold'>$10034.60</h3>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
        </BoxWrap>
        <BoxWrap>
        <div className='rounded-full bg-purple-500 p-2'>
                <IoBagHandle className='text-2xl text-white'/>
            </div>
            <div>
                <span className='text-sm text-gray-500'>Total Sales</span>
                <div className='flex items-center'>
                    <h3 className='text-xl text-gray-700 font-semibold'>$10034.60</h3>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
        </BoxWrap>
        <BoxWrap>
        <div className='rounded-full bg-orange-500 p-2'>
                <IoBagHandle className='text-2xl text-white'/>
            </div>
            <div>
                <span className='text-sm text-gray-500'>Total Sales</span>
                <div className='flex items-center'>
                    <h3 className='text-xl text-gray-700 font-semibold'>$10034.60</h3>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
        </BoxWrap>
        <BoxWrap>
        <div className='rounded-full bg-green-500 p-2'>
                <IoBagHandle className='text-2xl text-white'/>
            </div>
            <div>
                <span className='text-sm text-gray-500'>Total Sales</span>
                <div className='flex items-center'>
                    <h3 className='text-xl text-gray-700 font-semibold'>$10034.60</h3>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
        </BoxWrap>
    </div>
  )
}

export default Summary