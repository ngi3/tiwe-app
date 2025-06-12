"use client"

import AddFormReservation from "@/app/components/AddFormReservation"
import useModal from "@/app/hooks/useModal"

export default function page() {

    const {onOpen, openModal, onClose} = useModal()

  return (
    <div className='mt-10 px-4'>
       <div className="flex justify-between">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Reservations</h1>
          <p className="text-gray-600">Gerez les reservations de vos clients</p>
        </div>
        <button onClick={onOpen} className="bg-orange-300 text-white rounded-md px-2 h-8"> + Nouvelle reservation</button>
      </div>
        <div className=' flex gap-3 '>
            <div className='p-4 border-l-3 w-[400px] shadow-sm border-blue-500 rounded-md'>
                <h4>Total reservations</h4>
                <p className="text-3xl font-bold">3</p>
            </div>
            <div className='p-4 border-l-3 w-[400px] shadow-sm border-green-500 rounded-md'>
                <h4>Confirmees</h4>
                <p className="text-3xl font-bold">2</p>
            </div>
            <div className='p-4 border-l-3 w-[400px] shadow-sm border-purple-500 rounded-md'>
                <h4>Valeur totale</h4>
                <p className="text-3xl font-bold">28,600 FCFA</p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8  '>
            <div className='shadow-md p-4 rounded-md '>
                <div className='flex justify-between'>
                    <h3>Restaurant Abou</h3>
                    <span  className="bg-green-100 px-4 py-1 text-sm rounded-2xl text-green-800 font-bold">Confirmee</span>
                </div>
                <p className='mb-4'>77 123 45 67</p>

                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4 className='text-sm'>Produit</h4>
                        <h3 className='text-md font-bold'>Tomates</h3>
                    </div>
                    <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4 className='text-sm'>Quantite</h4>
                        <h3 className='text-md font-bold'>15 lots</h3>
                    </div>
                    <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4  className='text-sm'>Reserve le</h4>
                        <h3 className='text-md font-bold'>1/25/2024</h3>
                    </div>
                    <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4  className='text-sm'>Livraison prevue</h4>
                        <h3 className='text-md font-bold'>3/25/2024</h3>
                    </div>
                </div>
                <div className='mt-4 bg-green-100 rounded-md border border-green-400 py-2 px-4'>
                    <h4 className='text-sm'>Valeur totale</h4>
                    <h3 className='text-xl font-bold text-green-700'>15,000 FCFA</h3>
                    <p className='text-sm'>1000 FCFA par lot</p>
                </div>
            </div>
        </div>
        <AddFormReservation onOpen={onOpen} onClose={onClose} openModal={openModal}/>
    </div>
  )
}
