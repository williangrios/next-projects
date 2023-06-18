'use client'

import { useEffect } from "react"

interface ErrorProps {
    error: object; 
    reset: () => void;
  };

export default function Error({error, reset}: ErrorProps){

    useEffect(() => {
        console.log(error);
        console.log(typeof error);
        
        
      
    
      
    }, [error])
    

    return(
        <div className="flex flex-col justify-center items-center pt-10 ">
            <h1 className="text-3xl mb-4">Ops... Algo deu errado</h1>
            <button onClick={() => reset()} className="text-blue-500">Tentar novamente</button>
        </div>
    )

}