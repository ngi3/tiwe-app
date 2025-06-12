"use client"

import AddFormAcheteurs from "@/app/components/AddFormAcheteurs"
import useModal from "@/app/hooks/useModal"

export default function page() {

    const {onOpen, openModal, onClose} = useModal()
  return (
    <div className='mt-10 px-4'>
        <div className="flex justify-between">

          <h1 className="text-xl font-bold">Gestion des clients</h1>
        <button onClick={onOpen} className="bg-orange-300 text-white rounded-md mb-4 px-2 h-8"> + Nouveau client</button>
      </div>

      <div className=' flex gap-3 flex-wrap'>
            <div className='p-4 border-l-3 w-[400px] shadow-sm border-blue-500 rounded-md'>
                <h4>Plantations actives</h4>
                <p className='text-3xl font-bold'>12</p>
            </div>
            <div className='p-4 border-l-3 w-[400px] shadow-sm border-green-500 rounded-md'>
                <h4>Cultures en cours</h4>
                <p className='text-3xl font-bold'>8</p>
            </div>
            <div className='p-4 border-l-3 w-[400px] shadow-sm border-purple-500 rounded-md'>
                <h4>Lots en stocks</h4>
                <p className='text-3xl font-bold'>156</p>
            </div> 
        </div>

       <div className='grid grid-cols-2  gap-3 mt-8  '>
            <div className='shadow-md p-4 rounded-md '>
                <div className='flex justify-between mb-4'>
                    <h3 className='text-lg font-bold'>Restaurant Abou</h3>
                    <div>
                      <span  className="bg-purple-100 px-4 py-1 text-sm rounded-2xl text-purple-800 font-bold">Restaurant</span>
                      <span  className="bg-green-100 px-4 py-1 text-sm rounded-2xl text-green-800 font-bold">Actif</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4 className='text-sm'>Telephone</h4>
                        <h3 className='text-md font-bold'>77 123 45 67</h3>
                    </div>
                    <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4 className='text-sm'>Adresse</h4>
                        <h3 className='text-md font-bold'>Yopougon</h3>
                    </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1 p-2 border border-green-400 bg-green-100 rounded-md'>
                        <h4  className='text-sm'>Total achats</h4>
                        <h3 className='text-md font-bold text-green-800'>45,000 FCFA</h3>
                    </div>
                    <div className='flex flex-col gap-1 p-2 border border-blue-400 bg-blue-100 rounded-md'>
                        <h4  className='text-sm'>Dernier achat</h4>
                        <h3 className='text-md font-bold text-blue-800'>3/25/2024</h3>
                    </div>
                    </div>
                </div>
            </div>

             <div className='shadow-md p-4 rounded-md '>
                <div className='flex justify-between mb-4'>
                    <h3 className='text-lg font-bold'>Restaurant Abou</h3>
                    <div>
                      <span  className="bg-purple-100 px-4 py-1 text-sm rounded-2xl text-purple-800 font-bold">Restaurant</span>
                      <span  className="bg-green-100 px-4 py-1 text-sm rounded-2xl text-green-800 font-bold">Actif</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4 className='text-sm'>Telephone</h4>
                        <h3 className='text-md font-bold'>77 123 45 67</h3>
                    </div>
                    <div className='flex flex-col gap-1 p-2 bg-gray-200 rounded-md'>
                        <h4 className='text-sm'>Adresse</h4>
                        <h3 className='text-md font-bold'>Plateau</h3>
                    </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1 p-2 border border-green-400 bg-green-100 rounded-md'>
                        <h4  className='text-sm'>Total achats</h4>
                        <h3 className='text-md font-bold text-green-800'>45,000 FCFA</h3>
                    </div>
                    <div className='flex flex-col gap-1 p-2 border border-blue-400 bg-blue-100 rounded-md'>
                        <h4  className='text-sm'>Dernier achat</h4>
                        <h3 className='text-md font-bold text-blue-800'>3/25/2024</h3>
                    </div>
                    </div>
                </div>
                <AddFormAcheteurs onOpen={onOpen} onClose={onClose} openModal={openModal}/>
            </div>
        </div>
    </div>
  )
}
