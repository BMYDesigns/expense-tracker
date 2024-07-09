import React from 'react';
import logo from '../assets/IMG/Kadict.svg';
import { User, Bell } from 'lucide-react'

export default function Dashboard() {
    const user = [
        { icon: '' }
    ]
    return (
        <>
            <div className='flex justify-around items-center w-full shadow p-5'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='h-20 sm-h-10' />
                    <span className='text-3xl text-[#0D9347] font-semibold'>KADICT</span>
                </div>
                <p className='text-2xl text-[#0D9347] font-semibold'>Dashboard</p>
                <div className='flex items-center gap-10 '>
                    <User color='#0D9347' />
                    <div className='relative flex'>
                        <Bell color='#0D9347' />
                        <div className='min-w-[10px] min-h-[10px] bg-[#0D9347] absolute rounded-full top-[-6px] right-[-6px]'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

