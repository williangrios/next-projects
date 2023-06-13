
'use client'
import React from 'react';

interface ErrorProps {
    error: any; // Altere o tipo 'any' para o tipo correto do 'error' se possível
    reset: () => void;
  };

export default function Error({error, reset} : ErrorProps){
    return(
        <div className='flex flex-col items-center justify-center mt-20'>
            <h1>Something went wrong</h1>
            <button className='hover:bg-amber-600 bg-slate-400 rounded-lg px-6 py-4' onClick={() => reset()}>Try again</button>
        </div>
    )
}