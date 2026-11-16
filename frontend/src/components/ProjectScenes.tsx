import { useEffect, useRef, useState } from "react";
import plumber from "../assets/scenes/plumber.svg";
import golferAnimation from "../assets/scenes/golfer.mp4";
import golferPoster from "../assets/scenes/golfer-poster.png";
import { getPlumberAngle, getSceneProgress, getSceneTime } from "./sceneMotion";

export function useSceneProgress<T extends Element = SVGSVGElement>(extended = false) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      setReducedMotion(motion.matches);
      if (motion.matches) {
        setProgress(0);
      } else if (ref.current) {
        setProgress(getSceneProgress(ref.current.getBoundingClientRect().top, window.innerHeight, extended));
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      cancelAnimationFrame(frame);
    };
  }, [extended]);

  return { ref, progress, reducedMotion };
}

export function PlumbingScene() {
  const { ref, progress } = useSceneProgress();
  return (
    <svg ref={ref} className="project-scene" viewBox="260 240 1510 1000" role="img" aria-labelledby="plumb-title plumb-desc">
      <title id="plumb-title">A plumber turns a wrench beneath a sink</title>
      <desc id="plumb-desc">A plumber lies under an open sink cabinet, tightening a pipe fitting with a wrench as you scroll.</desc>
      <use href={`${plumber}#plumber-body`} />
      <path d="M711 791H530" fill="none" stroke="#aaa" strokeWidth="28" strokeLinejoin="round" />
      <path d="m515 800 15-9 15 9v20l-15 9-15-9z" fill="#ddd" />
      <g className="plumber-tool" transform={`rotate(${getPlumberAngle(progress)} 530 810)`}>
        <use href={`${plumber}#plumber-tool`} />
      </g>
    </svg>
  );
}

export function GolfScene() {
  const { ref, progress, reducedMotion } = useSceneProgress<HTMLVideoElement>(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (reducedMotion) ref.current?.load();
  }, [reducedMotion]);

  const seek = () => {
    const video = ref.current;
    if (video && video.readyState >= 2 && Number.isFinite(video.duration)) {
      video.currentTime = getSceneTime(progress, video.duration);
    }
  };
  useEffect(() => {
    seek();
  }, [progress, reducedMotion]);

  return (
    <>
      <video
        ref={ref}
        className="project-scene golf-animation"
        src={reducedMotion ? undefined : golferAnimation}
        poster={golferPoster}
        aria-label="A golfer lines up a tee shot, swings overhead, and follows through as the ball takes off. Scroll down to advance and up to reverse."
        width={640}
        height={480}
        muted
        playsInline
        preload="auto"
        onLoadedData={seek}
        onError={() => setFailed(true)}
      />
      {failed && <p role="alert">The golf animation could not load. Please refresh to try again.</p>}
    </>
  );
}
