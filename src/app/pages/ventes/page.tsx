"use client"

import useModal from "../../hooks/useModal"
import AddFormVente from "@/app/components/AddFormVente"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export default function page() {

  const {onOpen, openModal, onClose} = useModal()

  return (
     <div className='w-full p-6'>
      <div className="w-full flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Ventes</h1>
        <button onClick={onOpen} className="bg-orange-300 text-white rounded-md px-2 h-8"> + Nouvelle vente</button>
      </div>

      <div className="flex justify-between mb-6 gap-4">
        <div className="rounded-md shadow-md py-8 px-6 w-[400px]">
          <h1>Total des ventes</h1>
          <p className="text-3xl font-bold">2</p>
        </div>

        <div className="rounded-md shadow-md py-8 px-6 w-[400px]">
          <h1>Chiffres d'affaires</h1>
          <p className="text-3xl font-bold">3,500 FCFA</p>
        </div>
        <div className="rounded-md shadow-md py-8 px-6 w-[400px]">
          <h1>Lots disponibles</h1>
          <p className="text-3xl font-bold">4</p>
        </div>
      </div> 

      <div>
        <div className="p-4 rounded-md shadow-md">
          <div className="flex justify-between mb-4">
            <h1 className="text-xl font-bold">Abou Traore</h1>
            <span  className="bg-blue-100 px-4 py-1 text-xs rounded-2xl text-blue-800 font-bold">Confirmee</span>
          </div>
          <div className="flex justify-between">
            <h3>Tomates</h3>
            <p className="font-medium">TOM-001, TOM-002</p>
            <p>2 lots</p>
            <p className="text-green-700">2,000 FCFA</p>
          </div>
        </div>
      </div>
      <AddFormVente onOpen={onOpen} onClose={onClose} openModal={openModal}/>   
 </div>
  )
}

