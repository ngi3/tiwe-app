"use client"

import useModal from "../../hooks/useModal"
import AddFormRecolte from "../../components/AddFormRecolte"

export default function () {

  const {onOpen, openModal, onClose} = useModal()

  return (
    <div className='flex items-center justify-center'>
    
            <div className="flex flex-col items-end bg-white p-6">
                <button onClick={onOpen} className='bg-black text-white px-2 py-1 mb-8'>Creer une nouvelle recolte +</button>
      
                <table className='border '>
                    <thead className=''>
                        <tr className='bg-gray-600 text-white '>
                        <th className='border-r border-black p-1'>Nom de la culture</th>
                        <th>Quantite recoltee</th>
                        <th>Nombre de lots</th>
                        <th>Date de recolte</th>
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
             <AddFormRecolte onOpen={onOpen} onClose={onClose} openModal={openModal}/>
        </div>
  )
}
