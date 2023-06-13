

interface CardProps{
    key: any;
    result: any;
}

export default function Card(props: CardProps){
    console.log();
   
    return (
        <div key={props.result.id}>
            testex - {props.result.id}
        </div>
    )
}