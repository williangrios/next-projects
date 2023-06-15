import Image from "next/image";
import Link from "next/link";


interface CardProps{
    key: any;
    result: any;
}

export default function Card(props: CardProps){
    console.log();
   
    return (
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group" key={props.result.id}>
            
            <Link href={`/movie/${props.result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${
                    props.result.backdrop_path || props.result.poster_path
                }`} width={500} height={300} alt={`image movie`} style={{maxWidth: "100%", height: "auto"}} className="sm:rounded-t-lg group-hover:opacity-80">

                </Image>
                <div className="p-2">
                    <p className="line-clamp-2 text-md">{props.result.overview}</p>
                    <h2 className="truncate text-lg font-bold">{props.result.title || props.result.name}</h2>
                    <p>{props.result.release_date || props.result.first_air_date}</p>
                    <p>Likes {props.result.vote_count}</p>
                </div>
            </Link>
        </div>
    )
}