interface ResultsProps{
    results: any[]
}

export default function Results(props: ResultsProps){
    return(
        <div>
            {
                props.results.map((res) => (
                    <div key={res.id}>
                        {res.original_title}
                    </div>
                ))
            }

        </div>
    )
}