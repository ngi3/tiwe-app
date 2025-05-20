import Head from "next/head"

export default function Header() {
  return (
    <div className='w-full bg-[#924532] p-2 flex justify-between items-center text-white border-b shadow-lg border-gray-200'>
        <h1>Logo</h1>
        <div className='flex gap-2 items-center mr-8 '>
            <div className='border-r-1 p-2 pr-[100px]'><h1 className=''>Cultivateur</h1></div>
            <button className='bg-white text-[#924532] p-2 rounded-md '>Deconnexion</button>
        </div>
    </div>
  )
}
