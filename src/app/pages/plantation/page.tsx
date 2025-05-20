"use client"

import useModal from "../../hooks/useModal"
import AddFormPlant from "../../components/AddFormPlant"

export default function page() {

    const {onOpen, openModal, onClose} = useModal()

    return (
      <div className='flex items-center justify-center'>
  
         <div className="flex flex-col items-end">
            <button onClick={onOpen} className='bg-black text-white px-2 py-1 mb-8'>Creer une nouvelle plantation +</button>
  
            <table className='border '>
                <thead className=''>
                    <tr className='bg-gray-600 text-white '>
                    <th className='border-r border-black p-1'>Nom de la plantation</th>
                    <th>Superficie</th>
                    <th>Cultures</th>
                    <th>Ville</th>
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
         <AddFormPlant onOpen={onOpen} onClose={onClose} openModal={openModal}/>
      </div>
    )
  }