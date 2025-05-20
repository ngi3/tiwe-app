"use client"

import useModal from "../../hooks/useModal"
import AddFormPrev from "../../components/AddFormPrev"

export default function page() {

  const {onOpen, openModal, onClose} = useModal()
  
  return (
    <div className='flex items-center justify-center mt-10'>

        <div className="flex flex-col items-end bg-white p-6">
            <button onClick={onOpen} className='bg-black text-white px-2 py-1 mb-8'>Creer une nouvelle prevision +</button>
  
            <table className='border '>
                <thead className=''>
                    <tr className='bg-[#7f4434] text-white divide-x-1'>
                    <th className='border-r '>Nom de la culture</th>
                    <th>Superficie occupee</th>
                    <th>Quantite a recolter</th>
                    <th>Date de recolte prevue</th>
                    <th>Plantation concernee</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    <tr className='border'>
                    <td className='border-r'>1</td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
         </div>
         <AddFormPrev onOpen={onOpen} onClose={onClose} openModal={openModal}/>
    </div>
  )
}
