"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem(props: NavbarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre')
  return (
    <div className="flex flex-row">
      <Link
        className={`m-4 p-2 hover:text-amber-700 font-semibold ${genre && genre === props.param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" }`}
        href={`/?genre=${props.param}`}
      >
        {props.title}
      </Link>
    </div>
  );
}
