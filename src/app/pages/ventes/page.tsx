"use client"

import useModal from "../../hooks/useModal"
import AddFormReservation from "../../components/AddFormReservation"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export default function page() {

  const {onOpen, openModal, onClose} = useModal()

  return (
     <div className='flex items-center justify-center'>
      
    
            {/* <div className="flex flex-col items-end bg-white p-6">
                <div className='flex justify-between w-full mb-8'>
                    <div className='flex'>
                         
                          <button className={`w-[110px] px-2 py-1 rounded-md mr-6  bg-[#924532] text-white 'bg-gray-400'`}>
                            Reservations
                           </button>
                    
                    
                      <button className="w-[110px] px-2 py-1 rounded-md  bg-[#924532] text-white">
                            Ventes
                       </button>
                    
                    </div>
                    <button className='bg-black  text-white px-2 py-1 '>Creer une nouvelle reservation +</button>
                </div>
      
                <table className='border w-[500px]'>
                    <thead className=''>
                        <tr className='bg-gray-600 text-white '>
                        <th className='border-r border-black p-1'>Nom de la compagnie</th>
                        <th>Nombre de la plantation</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        <tr className='border'>
                        <td className='border-r'>1</td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
             </div> */}


    <TabGroup className="bg-white p-6">
      <TabList className="mb-4 flex items-center space-x-6">
        <Tab className="w-[110px] px-2 py-1 rounded-md bg-[#924532] text-white 'bg-gray-400 data-hover:underline data-selected:bg-blue-500 data-selected:text-white">Reservations</Tab>
        <Tab className="w-[110px] px-2 py-1 rounded-md bg-[#924532] text-white 'bg-gray-400 data-hover:underline data-selected:bg-blue-500 data-selected:text-white">Ventes</Tab>
        <button onClick={onOpen} className="ml-auto  px-2 py-1 bg-black text-white 'bg-gray-400 data-hover:underline data-selected:bg-blue-500 data-selected:text-white">Enregistrer une reservation +</button>
      </TabList>
      <TabPanels>
        <TabPanel>
        <table className='border'>
                    <thead className=''>
                        <tr className='bg-gray-600 text-white'>
                        <th className='border-r border-black p-1'>Nom de la culture</th>
                        <th className="p-1">Prix unitaire</th>
                        <th>Quantite a reserver</th>
                        <th>Date de vente prevue</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        <tr className='border'>
                        <td className='border-r'>1</td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
        </TabPanel>
        <TabPanel>
          <table className='border'>
                    <thead className=''>
                        <tr className='bg-gray-600 text-white'>
                        <th className='border-r border-black p-1'>Nom de la culture</th>
                        <th className="p-1">Prix unitaire</th>
                        <th>Nombre de lots</th>
                        <th>Date de livraison</th>
                        <th>Lieu de livraison</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        <tr className='border'>
                        <td className='border-r'>1</td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
        </TabPanel>
        <AddFormReservation onOpen={onOpen} onClose={onClose} openModal={openModal}/>
      </TabPanels>
    </TabGroup>

         
 </div>
  )
}

// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import Link from 'next/link'

// 
// export default function Dashboard() {
//   const { pathname } = useRouter()
//   const isVentes = pathname === '/ventes'
//   const [showForm, setShowForm] = useState(false)

//   // Texte et action du bouton
//   const buttonText = isVentes
//     ? 'Créer une nouvelle vente +'
//     : 'Créer une nouvelle prévision +'

//   const handleClick = () => setShowForm(true)
//   const handleClose = () => setShowForm(false)

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="flex flex-col items-end bg-white p-6">
//         <div className="flex justify-between w-full mb-8">
//           <div className="flex">
//             <Link href="/reservations">
//               <a className={`w-[110px] px-2 py-1 rounded-md mr-6 text-white ${pathname === '/reservations' ? 'bg-[#924532]' : 'bg-gray-400'}`}>
//                 Reservations
//               </a>
//             </Link>
//             <Link href="/ventes">
//               <a className={`w-[110px] px-2 py-1 rounded-md text-white ${isVentes ? 'bg-[#924532]' : 'bg-gray-400'}`}>
//                 Ventes
//               </a>
//             </Link>
//           </div>
//           <button
//             className="bg-black text-white px-2 py-1 rounded-md"
//             onClick={handleClick}
//           >
//             {buttonText}
//           </button>
//         </div>

//         {/* Tableau */}
//         <table className="border w-[500px]">
//           <thead>
//             <tr className="bg-gray-600 text-white">
//               <th className="border-r border-black p-1">Nom de la compagnie</th>
//               <th>Nombre de la plantation</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             <tr className="border">
//               <td className="border-r">1</td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Affichage du formulaire */}
//         {showForm && (
//           isVentes
//             ? <VenteForm onClose={handleClose} />
//             : <ReservationForm onClose={handleClose} />
//         )}
//       </div>
//     </div>
//   )
// }
