import Nav from "./components/Nav";
import Image from "next/image";
import cutivateur from "../../public/assets/images/WhatsApp Image 2025-05-20 at 6.01.01 PM.jpeg"
import probleme from "../../public/assets/images/20250520_1616_Défis Agricoles_simple_compose_01jvq7kpncf9qrtgq94q5sta6a.png"
import graphique from "../../public/assets/images/20250520_1621_Revenus Agriculteurs Augmentés_simple_compose_01jvq7ybjxedys1c0ze3s4vh82.png"
import bonheur from "../../public/assets/images/20250520_1629_Agriculteurs Heureux et Récolte_simple_compose_01jvq8bdf3f3as41q6xdwehgn5.png"
import evolution from "../../public/assets/images/20250520_1818_Croissance Agricole Africaine_simple_compose_01jvqej9hpe1vtwmzkmprxm287.png"
import { IBM_Plex_Sans } from "next/font/google";

export default function Home() {
  
  return (
    <div className="flex flex-col bg-white">

      <section className="flex px-30 mt-16 py-8" >
        <div className="flex flex-col w-[40%] mb-4">
        <h1 className="text-6xl font-bol text-[#924532] mb-2">Tiwe : Donner du pouvoir aux agriculteurs africains</h1>
        <p className="text-2xl mb-4 text-gray-600">Une application web/mobile pour suivre vos recoltes, trouver des acheteurs et acceder au credit</p>
        <div className="flex gap-4 text-white mt-4 mb-4">
          <button className="bg-green-700 p-2 rounded-sm">Tester l'appication</button>
        </div>
        </div>
        <div className="">
          
        </div>
      </section>


      
 
      <section className="bg-yellow-50 px-30 py-8">
        <h1 className="text-xl font-bold mb-4 mt-4">Les Problemes</h1>
        <div className="flex justify-between mb-15">
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
              <h3 className="font-bold  text-lg sm:text-xl mb-2">Manque d’organisation </h3> 
              <p>
                Sans outils simples, ils peinent à suivre leurs récoltes, 
                ventes, et finances, ce qui entraîne des pertes (20–30 %) et une mauvaise 
                planification. 
              </p>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="font-bold  text-lg sm:text-xl mb-2"> Revenus incertains </h3>
              <p>
                Les intermédiaires captent jusqu’à 40 % de leurs gains, et 
                beaucoup ignorent leurs revenus réels faute de registres. 
              </p>
            </div>
            <div className="border border-gray-300 p-6">
              <h3 className="font-bold  text-lg sm:text-xl mb-2">Exclusion bancaire </h3> 
              <p>
                Dans le secteur informel, sans données fiables, les 
                agriculteurs n’accèdent pas aux prêts pour investir dans leurs exploitations.
              </p>
            </div>
          </div>
        
      </section>


       <section className="px-30 py-8">
        <h1 className="text-xl font-bold"> La solution </h1>
        <p className="mb-4 text-3xl">Tiwé est une application  <br /> web et mobile <br /> conçue pour les agriculteurs,<br /> avec des 
          fonctionnalités simples et puissantes : 
        </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2">
            <div className="border border-gray-300 p-2">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Suivez vos récoltes</h3>
              <p>
                Enregistrez vos données (quantité, qualité, calendrier) pour 
                réduire les pertes et planifier vos ventes. 
              </p>
               Suivez vos cultures en temps réel pour réduire les pertes 
                (20–30 %) dues au mauvais timing ou au stockage. 
            </div>
            <div className="border border-gray-300 p-2">
              <h3 className="font-bold  text-lg sm:text-xl mb-2">Trouvez des acheteurs</h3>
              <p>
                Connectez-vous directement à des grossistes, 
                supermarchés, ou exportateurs via notre place de marché. 
              </p>
              Trouvez des acheteurs fiables, négociez vos 
              prix, et évitez les intermédiaires qui prennent jusqu’à 30 % de vos revenus. 
            </div>
            <div className="border border-gray-300 p-2">
              <h3 className="font-bold  text-lg sm:text-xl mb-2">Accédez au crédit</h3>
              <p>
                Créez un profil de crédit basé sur vos données pour obtenir des 
                prêts abordables auprès de nos partenaires financiers.
              </p>
              <p>
                 Transformez vos données de production en un profil 
                  de crédit pour décrocher des financements auprès de microfinances ou de banques 
                  agricoles.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl mb-2">Utiliser une appli faite pour vous</h3>
              <p> Profitez d’une interface simple avec des icônes, 
                  des commandes vocales, même sur un smartphone basique. </p>
            </div>
          
          </div>
      </section> 

      <section className="bg-yellow-50 px-30 py-8">
        <h1 className="text-3xl font-bold"> Transformer l’agriculture,<br /> une récolte à la fois</h1>
        <p className="mb-4">Tiwé va au-delà d’une simple application. Nous créons un avenir où : </p>

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

       <section className="px-30 py-8">
        <h1 className="text-3xl font-bold"> Qui sommes-nous ? </h1>
        <p className="mb-4">Tiwé est une startup AgriTech basée à Abidjan. Notre mission est simple : 
            autonomiser les petits agriculteurs en leur donnant les outils pour prospérer. Avec une appli 
            simple et des outils puissants, nous aidons les agriculteurs à vendre plus, perdre moins, et 
            obtenir des financements. 
            Vision : Une Afrique où chaque agriculteur utilise la technologie pour réussir. 
            Mission : Connecter, simplifier, financer – pour une agriculture plus forte.
          </p>
          
      </section>
      

      <footer className="px-30 py-8 bg-yellow-50">
        <h1 className="font-bold text-lg sm:text-xl mb-4"> Rejoignez la révolution agricole </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-2">
          <div className="border-r border-gray-300 p-2">
            <h3  className=" mb-2">Prêt à transformer votre agriculture ou devenir partenaire ? </h3>
            <p className="text-gray-400 text-[14px]">● Email : contact@tiwe.app</p> 
            <p className="text-gray-400 text-[14px]">● Téléphone : +225 01 23 45 67 89 </p> 
            <p className="text-gray-400 text-[14px]">● Siège : Abidjan, Côte d’Ivoire.</p>
          </div>
          <div className="mt-2">
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
          </div>
        </div>
      </footer>
    </div>
  );
}
