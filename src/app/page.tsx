'use client';

import { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import cutivateur from "../../public/assets/images/WhatsApp Image 2025-05-20 at 6.01.01 PM.jpeg"
import probleme from "../../public/assets/images/20250520_1616_Défis Agricoles_simple_compose_01jvq7kpncf9qrtgq94q5sta6a.png"
import graphique from "../../public/assets/images/20250520_1621_Revenus Agriculteurs Augmentés_simple_compose_01jvq7ybjxedys1c0ze3s4vh82.png"
import bonheur from "../../public/assets/images/20250520_1629_Agriculteurs Heureux et Récolte_simple_compose_01jvq8bdf3f3as41q6xdwehgn5.png"
import evolution from "../../public/assets/images/20250520_1818_Croissance Agricole Africaine_simple_compose_01jvqej9hpe1vtwmzkmprxm287.png"
import { GiReceiveMoney, GiPlantRoots} from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../public/assets/images/WhatsApp Image 2025-05-15 at 11.44.11 PM.jpeg"
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex flex-col">

      <div className='flex w-full justify-between items-center px-40 border-b border-b-gray-300'>
        <Image
          src={logo}
          width={50}
          height={50}
          alt=''
        />

        <button className='border border-green-600 text-green-600 py-2 px-3 rounded-md '>Connexion</button>
      </div>

      <section className="flex px-45 mt-16 py-8 justify-center" >
        <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-6xl sm:text-4xl font-bold text-[#924532] mb-2">Tiwe : Donner du pouvoir <br /> aux agriculteurs africains</h1>
        <p className="text-2xl sm:text-xl mb-4 text-gray-600">Une application web/mobile pour suivre vos recoltes,<br /> trouver des acheteurs et acceder au credit</p>
        <div className="flex gap-4 text-white mt-4 mb-4">
          <a href='#footer' className="bg-green-700 p-2 rounded-sm">Tester l'appication</a>
        </div>
        </div>
        <div className="">
          
        </div>
      </section>


      
 
      <section className="bg-yellow-50 px-45 py-8">
        <h1 className="text-xl font-bold mb-4 mt-4">Les Problemes</h1>
        <div className="flex flex-wrap xs:flex-col justify-between mb-15">
          <p className="text-3xl mb-4">
          En Côte d’Ivoire,<br /> les petits agriculteurs qui,<br /> produisent 70 % des récoltes,<br /> opèrent dans le 
          secteur informel et <br />font  face à des obstacles majeurs : 
        </p>
        <Image
        src={probleme}
        height={400}
        width={400}
        alt=""
        className="object-cover"
        />
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2">
            <div className="border border-gray-300 p-6">
              <h3 className="font-bold  text-lg sm:text-md mb-2">Manque d’organisation </h3> 
              <p>
                Sans outils simples, ils peinent à suivre leurs récoltes, 
                ventes, et finances, ce qui entraîne des pertes (20–30 %) et une mauvaise 
                planification. 
              </p>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="font-bold text-lg sm:text-md mb-2"> Revenus incertains </h3>
              <p>
                Les intermédiaires captent jusqu’à 40 % de leurs gains, et 
                beaucoup ignorent leurs revenus réels faute de registres. 
              </p>
            </div>
            <div className="border border-gray-300 p-6">
              <h3 className="font-bold text-lg sm:text-md mb-2">Exclusion bancaire </h3> 
              <p>
                Dans le secteur informel, sans données fiables, les 
                agriculteurs n’accèdent pas aux prêts pour investir dans leurs exploitations.
              </p>
            </div>
          </div>
        
      </section>


       <section className="px-45 py-8">
        <h1 className="text-xl font-bold mb-4 mt-4"> La solution </h1>
        <p className="mb-8 text-3xl">Tiwé est une application  <br /> web et mobile <br /> conçue pour les agriculteurs,<br /> avec des 
          fonctionnalités simples et puissantes : 
        </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2">
            <div className="border border-gray-300 p-6">
              <GiPlantRoots className='text-4xl mb-3 text-green-800'/>
              <h3 className="font-bold text-lg sm:text-md mb-2">Suivez vos récoltes</h3>
              <p className='sm:text-sm'>
                Enregistrez vos données (quantité, qualité, calendrier) pour 
                réduire les pertes et planifier vos ventes. 
              </p>
              <p className='sm:text-sm'>
                Suivez vos cultures en temps réel pour réduire les pertes 
                (20–30 %) dues au mauvais timing ou au stockage. 
               </p>
            </div>
            <div className="border border-gray-300 p-6">
               <GiReceiveMoney className='text-4xl mb-3 text-green-800'/>
              <h3 className="font-bold  text-lg sm:text-md mb-2">Trouvez des acheteurs</h3>
              <p  className='sm:text-sm'>
                Connectez-vous directement à des grossistes, 
                supermarchés, ou exportateurs via notre place de marché. 
              </p>
              <p className='sm:text-sm'>
                Trouvez des acheteurs fiables, négociez vos 
              prix, et évitez les intermédiaires qui prennent jusqu’à 30 % de vos revenus. 
              </p>
            </div>
            <div className="border border-gray-300 p-6">
              <FcMoneyTransfer className='text-4xl mb-3 text-green-800'/>
              <h3 className="font-bold  text-lg sm:text-md mb-2">Accédez au crédit</h3>
              <p className='sm:text-sm'>
                Créez un profil de crédit basé sur vos données pour obtenir des 
                prêts abordables auprès de nos partenaires financiers.
              </p>
              <p className='sm:text-sm'>
                 Transformez vos données de production en un profil 
                  de crédit pour décrocher des financements auprès de microfinances ou de banques 
                  agricoles.
              </p>
            </div>
          </div>
      </section> 

      <section className="bg-yellow-50 px-45 py-8">
        <h1 className="text-xl font-bold mb-4 mt-4 ">Impact</h1>
        <p className="mb-8 text-3xl"> Transformer l’agriculture,<br /> une récolte à la fois <br /> Tiwé va au-delà d’une simple application.<br/> Nous créons un avenir où : </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2">
          <div className="border border-gray-300 p-6">
            <Image
            src={graphique}
            height={250}
            width={250}
            alt=""
            className="w-full object-cover object-center mb-4"
            />
              <h3 className="font-bold  text-lg sm:text-xl mb-2">Les agriculteurs gagnent plus</h3>
              <p>
                +20–30 % de revenus en supprimant les intermédiaires. 
              </p>
            </div>
            <div className="border border-gray-300 p-6">
              <Image
            src={bonheur}
            height={250}
            width={250}
            alt=""
            className="w-full object-cover object-center mb-4"
            />
              <h3 className="font-bold  text-lg sm:text-xl mb-2">Les pertes diminuent</h3>
              <p>
                Réduction de 20–30 % des pertes post-récolte grâce au suivi. 
              </p>
            </div>
            <div className="border border-gray-300 p-6">
               <Image
            src={evolution}
            height={250}
            width={250}
            alt=""
            className="w-full object-cover object-center mb-4"
            />
              <h3 className="font-bold  text-lg sm:text-xl mb-2">L’Afrique grandit </h3>
              <p>
               Objectif de connecter 1 million d’agriculteurs d’ici 2030. 
              </p>
            </div>
        </div>
      </section>
      

      <footer >
        <div className="px-45 py-8">
        <h1 className="font-bold text-lg sm:text-xl mb-4"> Rejoignez la révolution agricole </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2">
          <div className="border-r border-gray-300 p-2">
            <h3  className=" mb-2">Prêt à transformer votre agriculture ou devenir partenaire ? </h3>
            <p className="text-gray-400 text-[14px]">● Email : ...</p> 
            <p className="text-gray-400 text-[14px]">● Téléphone : +225 07 47 98 92 49 </p> 
            <p className="text-gray-400 text-[14px]">● Siège : Abidjan, Côte d’Ivoire.</p>
          </div>
          <div id='footer' className="mt-2 scroll-smooth">
            <h3  className="mb-2">Tester notre MVP </h3>
            <form action="" className="flex flex-col mt-7">
              <label htmlFor="" className="text-gray-400 text-[14px]">Nom</label>
              <input type="text" className="border border-gray-300"/>

              <label htmlFor="" className="text-gray-400 text-[14px]">Contact</label>
              <input type="text" name="" id="" className="border border-gray-300"/>

              <button className="bg-[#924532] text-white w-[50%] self-center mt-4">Soumettre</button>
             
            </form>
          </div>

          <div className="border-l border-gray-300 p-2 mt-2">
            <h3>Suivez-nous</h3>
            <div className='flex text-3xl gap-4 mt-6'>
              <FaLinkedin/>
              <FaFacebookSquare/>
              <FaInstagramSquare/>
              <FaSquareXTwitter/>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col w-full border-t border-gray-400 justify-center items-center p-2'>
            <p>© 2025 Tiwé. Tous droits réservés. Construit pour les agriculteurs, par des Ivoiriens.</p>
        </div>
      </footer>
    </div>
  );
}
