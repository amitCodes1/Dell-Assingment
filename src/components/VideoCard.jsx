import { useState } from "react";

function getYouTubeId(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0];
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/shorts/")[1].split("/")[0];
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/embed/")[1].split("/")[0];
      }
    }

    return null;
  } catch {
    return null;
  }
}

function VideoCard({ src, className = "" }) {
  const [error, setError] = useState(false);

  const youtubeId = getYouTubeId(src);

  if (youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&playsinline=1&rel=0`;

    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title="Background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          className="absolute left-1/2 top-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 border-0"
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {!error ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setError(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-black text-white">
          <p>Video could not be loaded.</p>
        </div>
      )}
    </div>
  );
}

export default VideoCard;