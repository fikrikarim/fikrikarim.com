import Link from "next/link";

export function Header() {
  return (
    <div>
      <Link href="/" className="text-2xl font-bold no-underline">
        Fikri Karim
      </Link>
    </div>
  );
}
