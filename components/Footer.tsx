import { social, site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="container-content flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-base font-semibold text-white">
          Gui<span className="text-blue-light">TRIP</span>{" "}
          <span className="text-gold">Club</span>
        </span>

        <div className="flex items-center gap-6 text-sm text-white/60">
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            {social.instagram.handle}
          </a>
          <a
            href={social.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            {social.whatsapp.display}
          </a>
        </div>

        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} {site.brand}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
