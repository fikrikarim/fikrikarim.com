import Link from "next/link";

export function Header() {
  return (
    <div>
      <Link href="/">
        <a className="text-2xl font-bold no-underline">Fikri Karim</a>
      </Link>
    </div>
  );
}
