import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

interface WebSearchPageProps {
  searchParams: {
    searchTerm: string;
    start: string;
  };
}

export default async function WebSearchPage({
  searchParams,
}: WebSearchPageProps) {

  const startIndex = searchParams.start || "1"

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_GOOGLE}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&=start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try again or back to{" "}
          <Link className="text-blue-500" href="/">
            home page
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="">{results && <WebSearchResults results={data} />}</div>
  );
}
