import React from 'react'

export default function Dashboard() {
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-bold'>Tableau de bord</h1>
        <h3 className='mb-4'>Vue d'ensemble de votre exploitation agricole</h3>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2'>
            <div className='p-4 border border-l-3 w-[400px] shadow-sm border-green-200 rounded-md'>
                <h4>Plantations actives</h4>
                <p className='text-3xl font-bold'>12</p>
            </div>
            <div className='p-4 border border-l-3 w-[400px] shadow-sm border-yellow-200 rounded-md'>
                <h4>Cultures en cours</h4>
                <p className='text-3xl font-bold'>8</p>
            </div>
            <div className='p-4 border border-l-3 w-[400px] shadow-sm border-blue-200 rounded-md'>
                <h4>Lots en stocks</h4>
                <p className='text-3xl font-bold'>156</p>
            </div>
             <div className='p-4 border border-l-3 w-[400px] shadow-sm border-purple-200 rounded-md'>
                <h4>Reservations</h4>
                <p className='text-3xl font-bold'>23</p>
            </div>
            <div className='p-4 border border-l-3 w-[400px] shadow-sm border-indigo-200 rounded-md'>
                <h4>Clients actifs</h4>
                <p className='text-3xl font-bold'>45</p>
            </div>
            <div className='p-4 border border-l-3 w-[400px] shadow-sm border-green-300 rounded-md'>
                <h4>CA ce mois</h4>
                <p className='text-3xl font-bold'>125 000 FCFA</p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-2'>
            <div className='border  rounded-md m-6 p-4'>
                <h2 className='p-4'>Activites recentes</h2>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
            </div>
            
            <div className='border rounded-md m-6 p-4'>
                <h2 className='p-4'>Prochaines recoltes</h2>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
                <div className='bg-gray-200 py-1 rounded-md mb-4 px-8 flex justify-between'>
                   <div>
                     <h3 className='text-lg font-bold'>Semis de tomates</h3>
                    <p>Champ Nord</p>
                   </div>
                    <span className='self-center p-4 text-xs'><h5 className='self-end'>Il y a 2h</h5></span>
                </div>
            </div>
        </div>
    </div>
  )
}
