import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/Sidebar'; 
import Header from '@/component/Header';
import Summary from '@/component/summary';
import Chart from '@/component/Chart';
import BuyerProfilePieChart from '@/component/ProfilePieChart'


function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        
        <div>
            <Header />
           <div className="m-3 flex flex-col gap-4">
              <Summary />
              <div className='flex flex-row gap-4'>
                <Chart />
                <BuyerProfilePieChart></BuyerProfilePieChart>
              </div>
           </div>
            <div>{<Outlet />}</div>
        </div>
    </div>
  )
}

export default Layout;