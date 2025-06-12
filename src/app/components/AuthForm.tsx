import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const router = useRouter()

  const handleChange = (e:any) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const res = await fetch('http://sc2rvtc6912.universe.wf/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log('Réponse API :', result);
      router.push(`/otp?phone=${encodeURIComponent(formData.phone)}`)
    } catch (error) {
      console.error('Erreur lors de l\'appel API :', error);
    }
  };

  
  return (
    <div className='max-x-[700px] relative z-50 m-auto min-h-[200px] mt-30 bg-white p-4 border border-gray-800 rounded-md shadow-lg w-[50%]'>
      <form className='flex flex-col gap-1'>
         <label htmlFor="">Nom</label>
        <input type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='border border-gray-300 p-2 rounded-md'/>

        <label htmlFor="">Telephone</label>
        <input type="text"
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          className='border border-gray-300 p-2 rounded-md'/>

        <button type='submit' onClick={handleSubmit} className=' bg-[#924532] text-white rounded-md self-center p-3 my-2 hover:bg-[#97371f] w-[50%]'>Enregistrer</button>
      </form>
    </div>
  )
}
