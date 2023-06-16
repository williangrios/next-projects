
interface ButtonSearchProps{
    children: any;
    disabled: boolean;
    onClick?: (e: { preventDefault: () => void; }) => void;
}

export default function ButtonSearch(props: ButtonSearchProps){
    return(
        <button className={`btn ${props.disabled ? 'disabled:cursor-wait' : ''}`} disabled={props.disabled} onClick={props.onClick}>
            <div className={`flex w-full justify-center`}> 
            {props.children}
            </div>
            
        </button>
    )
}