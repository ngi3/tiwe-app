import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='text-[#924532] gap-4 flex flex-col items-center pt-4'>
      <h1 className='font-bold'>Menu</h1>

       <Link className='hover:font-bold focus:font-bold' href="/">Tableau de bord</Link>
       <Link className='hover:font-bold focus:font-bold' href="/prevision">Prevision</Link>
       <Link className='hover:font-bold focus:font-bold' href="/plantation">Plantation</Link>
       <Link className='hover:font-bold focus:font-bold' href="/culture">Culture</Link>
       <Link className='hover:font-bold focus:font-bold' href="/recolte">Recolte</Link>
       <Link className='hover:font-bold focus:font-bold' href="/ventes">Ventes</Link>
       <button className='bg-[#924532] hover:scale-105 text-white p-2 rounded-md mt-6'>Generer un rapport</button>
    </nav>
  )
}