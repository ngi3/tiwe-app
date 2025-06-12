"use client"
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Otp() {
    const searchParams = useSearchParams()
    const [formData, setFormData] = useState({
        otp: '',
        phone: '',
    });
    useEffect(() => {
        const phone = searchParams.get('phone') ?? '';
        setFormData(prev => ({ ...prev, phone }));
    }, [searchParams]);

    
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
        const res = await fetch('http://sc2rvtc6912.universe.wf/auth/verify-otp', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        console.log('Réponse API :', result);
        } catch (error) {
        console.error('Erreur lors de l\'appel API :', error);
        }
    };
    return (
        <div>
            <label htmlFor="">OTP</label>
            <input value={formData.otp} name="otp" type="text" onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit} className=' bg-[#924532] text-black rounded-md self-center p-3 my-2 hover:bg-[#97371f] w-[50%]'>Valider</button>
        </div>
    )
}
