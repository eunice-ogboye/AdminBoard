import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
function Header() {
  return (
    <div className='flex h-14 bg-white px-4 justify-between items-center border-b border-gray-300 w-[65rem]'>
        <div className="first">
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
                <input type="text" placeholder='search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-2 pl-11' />
            </div>
        </div>
        <div className="flex items-center gap-4">
          <HiOutlineChatAlt fontSize={20}/>
          <HiOutlineBell fontSize={20}/>
        </div>
    </div>
  )
}

export default Header