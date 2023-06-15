import Link from "next/link";
import {TbGridDots} from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className="flex space-x-3 items-center">
            <Link href='https://mail.google.com' className="hover:underline">
                Gmail
            </Link>
            <Link href='https://image.google.com' className="hover:underline">
                Images
            </Link>
            <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 rounded-full text-black text-4xl" />
            <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Entrar</button>
        </div>
    </header>
  )
}