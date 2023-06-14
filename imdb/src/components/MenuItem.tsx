import Link from "next/link";

interface MenuItemProps {
  title: string;
  address: string;
  icon: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div>
      <Link href={props.address} className="flex flex-row mx-4 lg:mx-6 hover:text-amber-600">
        <p className="hidden sm:inline my-2 text-sm">{props.title}</p>
      </Link>
    </div>
  );
}
