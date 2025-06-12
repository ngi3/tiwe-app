import { ModalType } from '../Types/useTypes'

export default function AddFormRecolte({onClose, openModal, onOpen} : ModalType) {
  return (
    <> 
        {openModal && (
            <div className='absolute top-0 left-0 z-40 grid h-screen w-full place-items-center backdrop-blur'>
                <div className='max-x-[700px] relative z-50 m-auto min-h-[200px] bg-white p-4 border border-gray-800 rounded-md shadow-lg'>
                    <div className='flex justify-end cursor-pointer' onClick={onClose}>Fermer</div>

                    <form className='flex flex-col gap-1'>
                      <label htmlFor="">Nom de la culture</label>
                      <input type="text" className='border border-gray-300 p-2 rounded-md'/>

                      <label htmlFor="">Quantite recoltee</label>
                      <input type="text" className='border border-gray-300 p-2 rounded-md'/>

                      <label htmlFor="">Nombre de lots</label>
                      <input type="text" className='border border-gray-300 p-2 rounded-md'/>

                      <label htmlFor="">Date de recolte</label>
                      <input type="date" className='border border-gray-300 p-2 rounded-md'/>

                      <label htmlFor="">Plantation concernee</label>
                      <select name="" id="" className='border border-gray-300 p-2 rounded-md'>
                        <option value=""> </option>
                      </select>
                      
                      <button className=' bg-[#924532] text-white rounded-md p-3 my-2 hover:bg-[#97371f]'>Enregistrer</button>
                    </form>
                </div>
            </div>
        )}
    </>
  )
}
