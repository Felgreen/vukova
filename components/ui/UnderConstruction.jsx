
import React from 'react'
import { Vukova } from "../../components/svg";

const UnderConstruction = () => {
  return (
    <>
         
    <div className="h-screen bg-gray-200 w-full flex flex-col justify-center items-center">
        
            <Vukova className="w-[80%] h-auto md:h-[80%] animate-pulse" />
            <div className=' font-antonioBold text-4xl flex justify-center'>Próximamente</div>
        
    </div>
 
    </>
  )
}

export default UnderConstruction