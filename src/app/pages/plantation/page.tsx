"use client"

import useModal from "../../hooks/useModal"
import AddFormPlant from "../../components/AddFormPlant"
import BtnAddCult from "@/app/components/BtnAddCult"

export default function page() {

    const {onOpen, openModal, onClose} = useModal()

    return (
      <div className='w-full flex flex-col p-2'>
  
         <div className="flex justify-between mb-4">
            <div>
                <h1 className="text-2xl font-bold">Mes Plantations</h1>
                <p className="text-gray-600">Gerez vos parcelles et cultures</p>
            </div>
            <button onClick={onOpen} className='bg-orange-300 text-white rounded-md px-2 h-8'>+ Nouvelle plantation</button>
         </div>

         <div className="flex gap-8">
          <div className="flex flex-col p-4 border-l-4 rounded-md shadow-sm border-orange-400 w-[40%]">
           <div className="flex justify-between">
             <h2 className="text-xl font-bold">Champ Nord</h2>
             <span className="bg-orange-100 text-orange-400 px-4 py-1 rounded-3xl">200m</span>
           </div>
           <p className="text-gray-600 mb-4">Zone A - Nord</p>
           <h2 className="font-bold">Cultures actuelles:</h2>

           <div className="flex flex-col gap-3">
            <div className=" bg-gray-100 p-4 rounded-md border border-gray-200">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold ">Tomates</h3>
              <div className=" flex gap-2">
                <span className=" bg-green-100 rounded-2xl px-2 self-center  text-green-800 border border-green-400">Pret a recolter</span>
                <button className="bg-green-700 text-white rounded-md px-2 py-1">Recolter</button>
              </div>
              </div>
              <div className="rounded-md grid gap-2 grid-cols-2">
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Surface: 800m</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Quantite prevue: 50kg</p> 
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Plante: 1/15/2024</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Recolte prevue: 3/15/2024 </p>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-gray-100 p-4 rounded-md border border-gray-200">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold ">Oignons</h3>
              <div className=" flex gap-2">
                <span className=" bg-orange-100 rounded-2xl px-2 self-center  text-orange-800 border border-orange-400">En croissance</span>
              </div>
              </div>
              <div className="rounded-md grid gap-2 grid-cols-2">
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Surface: 800m</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Quantite prevue: 50kg</p> 
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Plante: 1/15/2024</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Recolte prevue: 3/15/2024 </p>
                </span>
              </div>
            </div>
            <BtnAddCult/>
           </div>
         </div>
         <div className="flex flex-col p-4 border-l-4 rounded-md shadow-sm border-orange-400 w-[40%]">
           <div className="flex justify-between">
             <h2 className="text-xl font-bold">Champ Sud</h2>
             <span className="bg-orange-100 text-orange-400 px-4 py-1 rounded-3xl">200m</span>
           </div>
           <p className="text-gray-600 mb-4">Zone B - Sud</p>
           <h2 className="font-bold">Cultures actuelles:</h2>

           <div className="flex flex-col gap-3">
            <div className=" bg-gray-100 p-4 rounded-md border border-gray-200">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold ">Tomates</h3>
              <div className=" flex gap-2">
                <span className=" bg-green-100 rounded-2xl px-2 self-center  text-green-800 border border-green-400">Pret a recolter</span>
                <button className="bg-green-700 text-white rounded-md px-2 py-1">Recolter</button>
              </div>
              </div>
              <div className="rounded-md grid gap-2 grid-cols-2">
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Surface: 800m</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Quantite prevue: 50kg</p> 
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Plante: 1/15/2024</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Recolte prevue: 3/15/2024 </p>
                </span>
              </div>

              
            </div>

            <div className="flex flex-col gap-3 bg-gray-100 p-4 rounded-md border border-gray-200">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold ">Oignons</h3>
              <div className=" flex gap-2">
                <span className=" bg-orange-100 rounded-2xl px-2 self-center  text-orange-800 border border-orange-400">En croissance</span>
              </div>
              </div>
              <div className="rounded-md grid gap-2 grid-cols-2">
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Surface: 800m</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Quantite prevue: 50kg</p> 
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Plante: 1/15/2024</p>
                </span>
                <span className="rounded-md py-1 pl-2 bg-gray-50">
                  <p>Recolte prevue: 3/15/2024 </p>
                </span>
              </div>
            </div>
            <BtnAddCult/>
           </div>
         </div>
         </div>
         <AddFormPlant onOpen={onOpen} onClose={onClose} openModal={openModal}/>
      </div>
    )
  }