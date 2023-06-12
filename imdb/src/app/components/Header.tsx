import Link from "next/link";
import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';

export default function Header(){
    return(
        <div className="flex justify-between mx-2 max-w-6xl  sm:mx-auto items-center py-6">
            <div className="flex flex-row">
                <MenuItem title="Home" address="/" icon={AiFillHome} />
                <MenuItem title="About" address="/about" icon={BsFillInfoCircleFill} />
            </div>
            <div className="">
                <Link href='/'>
                    <h2 className="2-xl"><span className="font-bold bg-amber-600 py-1 px-2 rounded-lg">IMDB</span><span className="text-xl hidden sm:inline ml-1">Clone</span></h2>
                </Link>
            </div>
        </div>
    )
}