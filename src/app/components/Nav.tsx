import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='text-[#924532] gap-4 flex justify-between p-4'>
      <h1 className='font-bold'>Logo</h1>

      <div className='mr-14 flex gap-6'>
       <Link className='hover:font-bold focus:font-bold' href="/pages/dashboard">Tableau de bord</Link>
       <Link className='hover:font-bold focus:font-bold' href="/pages/plantation">Plantations</Link>
       <Link className='hover:font-bold focus:font-bold' href="/pages/prevision">Stocks & Lots</Link>
       <Link className='hover:font-bold focus:font-bold' href="/pages/ventes">Ventes</Link>
       <Link className='hover:font-bold focus:font-bold' href="/pages/reservations">Reservations</Link>
       <Link className='hover:font-bold focus:font-bold' href="/pages/acheteurs">Clients</Link>
       </div>
    </nav>
  )
}