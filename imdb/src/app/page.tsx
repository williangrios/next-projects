import Results from "../components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home(props) {
  const genre = props.searchParams.genre || "fetchTrending";
  const query = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(query, {
    next: {
      revalidate: 1,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const result = data.results;
  console.log(result);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Results results={result} />
      </div>
    </main>
  );
}
