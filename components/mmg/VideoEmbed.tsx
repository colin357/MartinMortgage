"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Video slot for the eight studio videos being shot.
 *
 * Until a video is available the component renders a branded placeholder
 * showing the script title, so the page layout is final and dropping the
 * video in later is a one-line change:
 *
 *   <VideoEmbed title="..." />                     → placeholder
 *   <VideoEmbed title="..." youtubeId="abc123" />  → YouTube, click-to-load
 *   <VideoEmbed title="..." src="/video/x.mp4" />  → self-hosted
 *
 * YouTube uses youtube-nocookie.com and only loads the iframe after a click,
 * so an unplayed video costs nothing and sets no cookies.
 */
export default function VideoEmbed({
  title,
  youtubeId,
  src,
  poster,
  caption,
  onDark = false,
}: {
  title: string;
  youtubeId?: string;
  src?: string;
  poster?: string;
  caption?: string;
  onDark?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  function play() {
    setPlaying(true);
    trackEvent("video_play", { video_title: title });
  }

  return (
    <div className={`video-block${onDark ? " on-dark" : ""}`}>
      <div className="video-frame">
        {src ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video controls poster={poster} preload="metadata" onPlay={play}>
            <source src={src} type="video/mp4" />
          </video>
        ) : youtubeId && playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-placeholder"
            onClick={youtubeId ? play : undefined}
            disabled={!youtubeId}
            style={{
              background: poster ? `url(${poster}) center/cover` : undefined,
              border: 0,
              cursor: youtubeId ? "pointer" : "default",
              font: "inherit",
            }}
            aria-label={youtubeId ? `Play: ${title}` : undefined}
          >
            <span className="play" aria-hidden="true">
              ▶
            </span>
            <span className="vp-title">{title}</span>
            {!youtubeId && (
              <span className="vp-note">Video coming soon</span>
            )}
          </button>
        )}
      </div>
      {caption && <p className="video-caption">{caption}</p>}
    </div>
  );
}
