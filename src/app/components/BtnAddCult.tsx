import useModal from "../hooks/useModal"
import AddFormCult from "./AddFormCult"

export default function BtnAddCult() {
    const {onOpen, openModal, onClose} = useModal()
  return (
    <div className="self-center">
        <button onClick={onOpen} className="text-[#924532]">+ Ajouter une culture</button>
        <AddFormCult onOpen={onOpen} onClose={onClose} openModal={openModal}/>
    </div>
  )
}
