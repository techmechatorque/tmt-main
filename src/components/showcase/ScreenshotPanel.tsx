import { Camera } from "lucide-react";
import { screenshotFor } from "@/data/screenshots";

interface ScreenshotPanelProps {
  slug: string;
  liveUrl?: string;
}

// Shows a real captured screenshot when one exists in data/screenshots.ts,
// otherwise an honest "pending" state. Never composites or fabricates imagery.
const ScreenshotPanel = ({ slug, liveUrl }: ScreenshotPanelProps) => {
  const shot = screenshotFor(slug);

  if (shot) {
    return (
      <figure className="mb-16">
        <div className="rounded-2xl overflow-hidden border border-border shadow-professional-xl">
          <img src={shot.path} alt={shot.alt} className="w-full h-auto" loading="lazy" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">
          Captured {shot.capturedAt}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="card-professional flex flex-col items-center justify-center text-center py-16 mb-16 border-dashed">
      <Camera className="w-8 h-8 text-muted-foreground mb-3" />
      <p className="text-muted-foreground max-w-md">
        Screenshot capture pending.
        {liveUrl && (
          <>
            {" "}In the meantime,{" "}
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              open it directly
            </a>
            .
          </>
        )}
      </p>
    </div>
  );
};

export default ScreenshotPanel;
