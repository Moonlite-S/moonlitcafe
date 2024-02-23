
import React from 'react'
import { MoonDivider } from '@/components/MiscComponents'

export default function Page(){
    return(
    <>
        <div className="container flex flex-col items-center py-5">
            <h1 className='text-5xl py-5'>Sign Up</h1>
        <MoonDivider />

        <form className='flex flex-col items-center w-[75%]'>
            <input type="text" placeholder='First Name' className='' />
            <input type="text" placeholder='Last Name' className='' />
            <input type="email" placeholder='Email' className='' />
            <input type="password" placeholder='Password' className='' />
            <input type="password" placeholder='Confirm Password' className='' />
            <button className='btn-primary w-[50%] mt-5 bg-primary-300'>Sign Up</button>
        </form>
        </div>

        <div className="container flex flex-col items-center py-5">
            <h1 className='text-5xl py-5 whitespace-pre-line'>{"Already have an account?\nLogin"}</h1>
        <MoonDivider />

        <form className='flex flex-col items-center w-[75%]'>
            <input type="text" placeholder='First Name' className='' />
            <input type="text" placeholder='Last Name' className='' />
            <input type="email" placeholder='Email' className='' />
            <input type="password" placeholder='Password' className='' />
            <input type="password" placeholder='Confirm Password' className='' />
            <button className='btn-primary w-[50%] mt-5 bg-primary-300'>Sign Up</button>
        </form>
        </div>
    </>
    )
}