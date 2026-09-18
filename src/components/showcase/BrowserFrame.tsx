interface BrowserFrameProps {
  /** Shown as the address-bar text — omit to leave the chrome bar's URL slot blank. */
  url?: string;
  src: string;
  alt: string;
  className?: string;
  /** Chamfers the bottom-right corner instead of rounding it — a deliberate,
   * asymmetric "notch" for hero-style showcase treatments. */
  notch?: boolean;
}

// A screenshot dressed as a browser window — gives real product imagery a
// consistent, deliberate frame instead of a raw cropped image floating on
// the page.
const BrowserFrame = ({ url, src, alt, className = "", notch = false }: BrowserFrameProps) => (
  <div
    className={`rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b0d12] ${className}`}
    style={
      notch
        ? { clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%)" }
        : undefined
    }
  >
    <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/10">
      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      {url && <span className="ml-3 text-[11px] text-white/40 font-mono truncate">{url}</span>}
    </div>
    <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
  </div>
);

export default BrowserFrame;
