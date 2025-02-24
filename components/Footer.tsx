import Link from "next/link";

export function Footer(): JSX.Element {
  return (
    <div className="flex gap-1.5">
      <a href="mailto:hello@fikrikarim.com" target="_blank" rel="noreferrer">
        Email
      </a>
      &bull;
      <a href="https://github.com/fikrikarim" rel="noopener noreferrer">
        Github
      </a>
      &bull;
      <a
        href="https://www.linkedin.com/in/fikrikarim/"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      &bull;
      <Link href="uses">
        <a>Uses</a>
      </Link>
      &bull;
      <Link href="portfolio">
        <a>Portfolio</a>
      </Link>
      &bull;
      <Link href="tulisan">
        <a>Tulisan</a>
      </Link>
    </div>
  );
}
