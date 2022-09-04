import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import * as Fa from 'react-icons/fa'
// import { BeakerIcon } from '@heroicons/react/solid'


const Home: NextPage = () => {
  const [selects, setSelects] = useState<any | null>(null);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className='text-left font-bold'>
          <span className='text-green-500 text-left'>sLoan</span>App
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 rounded-tl-2xl rounded-bl-2xl">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                alt='Mountains'
                src='/image/1.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className='text-3xl font-bold mb-2'>Hello friend</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'>

            </div>
            <p className='mb-10'>Fill up form</p>
            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
              <Fa.FaEnvelope className='text-gray-400 m-2' />
              <input type='email' name='email' placeholder='Email' className='bg-gray-100 text-black outline-none text-sm flex-1' />
            </div>
            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
              <Fa.FaPhone className='text-gray-400 m-2' />
              <input type='phone' name='phone' placeholder='Phone' className='bg-gray-100 text-black outline-none text-sm flex-1' />
            </div>
            <p className='text-sm text-left'>Loan Request Amount</p>
            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
              <Fa.FaDollarSign className='text-gray-400 m-2' />
              <input type='number' name='amount' placeholder='Loan Amount USD' className='bg-gray-100 text-black outline-none text-sm flex-1' />
            </div>
            <p className='text-sm text-left'>Installment Plan in year</p>
            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
              <Fa.FaCalendar className='text-gray-400 m-2' />
              {/* <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' /> */}
              <select value={selects} placeholder='Installment Plan in year' className="text-black block bg-gray-100 outline-none text-sm flex-1" onChange={e => setSelects(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <p className='text-sm text-left'>Monthly Installment to be</p>
            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
              <Fa.FaDollarSign className='text-gray-400 m-2' />
              <input type='number' readOnly name='amount' placeholder='Loan Amount USD' className='bg-gray-100 text-black outline-none text-sm flex-1' />
            </div>


            <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Request Loan</a>
          </div>
        </div>
      </main >


    </div >
  )
}

export default Home
