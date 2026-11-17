import { SITE } from "@/data/site";

export default function Footer({ now = new Date() }: { now?: Date }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {now.getFullYear()} {SITE.name}. Built with Next.js, React and care.
        </p>
        <a href="#top" className="link">
          Back to top
        </a>
      </div>
    </footer>
  );
}
