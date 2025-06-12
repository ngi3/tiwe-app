export default function page() {

  
  return (
    <div className='mt-10 px-4'>

      <div className="flex justify-between">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Stock & Previsions</h1>
          <p className="text-gray-600">Gerez votre stock actuel et previsionnel</p>
        </div>
        <button className="bg-orange-300 text-white rounded-md px-2 h-8"> + Ajouter un lot</button>
      </div>

      <div className="bg-orange-100 mb-8 rounded-lg border border-orange-200 p-4">
        <h1 className="mb-4 text-xl font-bold">Stock Previsionnel</h1>
        <div className="flex justify-between  gap-3">
          <div className="bg-white border w-[400px] border-orange-200 rounded-lg flex justify-between p-2">
          <div>
            <h2 className="font-bold mb-2">Tomates</h2>
            <h3 className="text-gray-600 mb-2">Quantite prevue: </h3>
            <h3 className="text-gray-600 mb-2">Deja reservee: </h3>
            <h3 className="text-gray-600">Disponible a reserver: </h3>
          </div>
          <div className="flex flex-col px-2">
            <span className="border border-orange-400 self-end rounded-2xl font-bold text-orange-700 px-2 mb-2">Prevu 3/12/2024</span>
            <h3 className="self-end font-bold mb-2">50kg </h3>
            <h3 className="self-end font-bold text-red-600 mb-2">15kg </h3>
            <h3 className="self-end font-bold text-green-600">35kg</h3>
          </div>
        </div>

        <div className="bg-white border w-[400px] border-orange-200 rounded-lg flex justify-between p-4">
          <div>
            <h2 className="font-bold mb-2">Oignons</h2>
            <h3 className="text-gray-600 mb-2">Quantite prevue: </h3>
            <h3 className="text-gray-600 mb-2">Deja reservee: </h3>
            <h3 className="text-gray-600">Disponible a reserver: </h3>
          </div>
          <div className="flex flex-col px-2">
            <span className=" border border-orange-400 self-end rounded-2xl font-bold text-orange-700 px-2 mb-2">Prevu 3/12/2024</span>
            <h3 className="self-end font-bold mb-2">30kg </h3>
            <h3 className="self-end font-bold text-red-600 mb-2">8kg </h3>
            <h3 className="self-end font-bold text-green-600">22kg</h3>
          </div>
        </div>

        <div className="bg-white border w-[400px] border-orange-200 rounded-lg flex justify-between p-2">
          <div>
            <h2 className="font-bold mb-2">Carottes</h2>
            <h3 className="text-gray-600 mb-2">Quantite prevue: </h3>
            <h3 className="text-gray-600 mb-2">Deja reservee: </h3>
            <h3 className="text-gray-600">Disponible a reserver: </h3>
          </div>
          <div className="flex flex-col px-2">
            <span className=" border border-orange-400 self-end rounded-2xl font-bold text-orange-700 px-2 mb-2">Prevu 3/12/2024</span>
            <h3 className="self-end font-bold mb-2 ">25kg </h3>
            <h3 className="self-end font-bold text-red-600 mb-2">12kg </h3>
            <h3 className="self-end font-bold text-green-600">13kg</h3>
          </div>
        </div>
        </div>
      </div>

      <div>
        <h1 className="mb-4 text-xl font-bold">Stock actuel</h1>
        <div className="flex gap-4">
         <div className="flex w-[500px]  flex-col  shadow-md">
          <div className="flex justify-between">
            <div>
            <h2>Tomates</h2>
            <h3>Total: </h3>
            <h3>Disponible:</h3>
            <h3>Reserve: </h3>
          </div>
          <div>
            <h5>2 lots</h5>
            <h3 className="self-end">2kg </h3>
            <h3 className="self-end">1kg </h3>
            <h3 className="self-end">1kg</h3>
          </div>
          </div>
          <div className="flex flex-col px-5 border-l-4 py-3 bg-gray-100 m-4 rounded-md border-orange-200  justify-between">
            <div className="flex justify-between">
             <h3 className="mb-4"> TOM-001</h3>
             <div className="flex mb-4 gap-3">
                <span className="bg-purple-100 px-4 py-1 text-md rounded-2xl text-purple-800 font-bold">Premium</span>
                <span className="bg-green-100 px-4 py-1 text-md rounded-2xl text-green-800 font-bold">Disponible</span>
              </div>
             
            </div>
            <div className="flex justify-between">
              <h5>1kg</h5>
              <h5 >1/20/2024</h5>
            </div>
           </div>
        </div>
        
        
        </div>
      </div>
    </div>
  )
}
