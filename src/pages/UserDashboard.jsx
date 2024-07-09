import React from 'react';
import logo from '../assets/IMG/Kadict.svg';
import { User, Bell } from 'lucide-react'
import UserHeader from '../components/UserHeader';

export default function UserDashboard() {

    return (
        <div className='bg-primaryColor w-full h-[100%]'>
            <UserHeader />
        </div>
    )
}

