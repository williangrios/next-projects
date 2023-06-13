import Card from "./Card";

interface ResultsProps {
  results: any[];
}

export default function Results(props: ResultsProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {props.results.map((res) => (
        <>
          <Card key={res.id} result={res} />
        </>
        
      ))}
    </div>
  );
}