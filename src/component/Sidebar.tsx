import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'

function Sidebar() {
  const sideLinks = [
    {
      key: 'dashboard',
      label: "Dashboard",
      path: "/"
    },
    {
      key: 'product',
      label: "Product",
      path: "/product"
    },
    {
      key: 'orders',
      label: "Orders",
      path: "/orders"
    },
  ]
   const { pathname } = useLocation() 
  
  return (
    <div className='flex flex-col w-60 p-3 bg-neutral-900 text-white'>
        <div className='flex item-center gap-2 px-1 py-3'>
            <FcBullish fontSize={24} /> <span className='font-bold text-lg'>Admin</span>
        </div>
        <div className="flex-1 py-8 flex-col gap-1 w-50">
          {sideLinks.map((item) => (
            <div className='w-50 px-3 py-1 hover:bg-neutral-700' key={item.key}>
              <Link to={item.path} className={ pathname == item.path ? ' text-green-500' : 'text-white' }>{item.label}</Link>
            </div>
          ))}
        </div>
        <div className='pt-2 border-t border-neutral-700'>
          <Link to=''>Logout</Link>
        </div>
    </div>
  )
}

export default Sidebar