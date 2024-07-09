import React from 'react';
import logo from '../assets/IMG/Kadict.svg'
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'lucide-react';


export default function Signin() {
    return (
        <>
            <div>
                <div className='flex justify-center items-center w-full shadow p-5 min-h-6 '>
                    <img src={logo} alt="" className='h-20 sm-h-10' />
                    <span className='text-3xl text-[#0D9347] font-semibold'>KADICT</span>
                </div>
            </div>
            <div className='flex justify-center items-center w-full mt-9 p-5'>
                <p className='text-3xl text-[#0D9347] font-medium'>Sign in</p>
            </div>
            <div className=' flex items-center justify-center w-[100%] '>
                <div className='min-w-[300px] min-h-[300px] shadow justify-center items-center flex  flex-col lg:w-1/3  p-5'>
                    <form className='w-full  flex flex-col gap-10 '>
                        <Input />
                        <input type="password" placeholder='Password' className=' bg-slate-200 px-4 py-2 flex-1 outline-none  w-full rounded border border-[#0D9347]' />
                        <Link className='text-white bg-[#0D9347] p-4 rounded text-center w-full' to={'/userdashboard'} >Sign in</Link>
                    </form>

                </div>
            </div>
        </>
    )
}
