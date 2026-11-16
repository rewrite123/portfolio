import { useEffect, useRef, useState } from "react";
import plumber from "../assets/scenes/plumber.svg";
import golfer from "../assets/scenes/golfer.svg";
import { getGolfRig, getPlumberAngle, getSceneProgress, golfShoulders } from "./sceneMotion";

function useSceneProgress() {
  const ref = useRef<SVGSVGElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) {
        setProgress(0);
      } else if (ref.current) {
        setProgress(getSceneProgress(ref.current.getBoundingClientRect().top, window.innerHeight));
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
  }, []);

  return { ref, progress };
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
  const { ref, progress } = useSceneProgress();
  const pose = getGolfRig(progress);
  const arms = [
    { name: "far", shoulder: golfShoulders.far, elbow: pose.farElbow, skin: "#909090", sleeve: "#777" },
    { name: "near", shoulder: golfShoulders.near, elbow: pose.nearElbow, skin: "#aaa", sleeve: "#888" },
  ];
  return (
    <svg ref={ref} className="project-scene" viewBox="0 0 2048 1536" role="img" aria-labelledby="golf-title golf-desc">
      <title id="golf-title">A golfer lines up, swings, and drives the ball</title>
      <desc id="golf-desc">As you scroll, the golfer addresses the tee, raises the club into a backswing, strikes the ball, and follows through over their head and behind their back while the ball flies away.</desc>
      <g transform="translate(350 150) scale(.8)">
        <path d="M220 1325H1730" fill="none" stroke="#555" strokeWidth="8" strokeLinecap="round" />
        <use href={`${golfer}#golfer-legs`} />
        <g className="golfer-torso" transform={`rotate(${pose.torso} 420 680)`}>
          <use href={`${golfer}#golfer-torso`} />
          <g className="golfer-arms">
            {arms.map(({ name, shoulder, elbow, skin, sleeve }) => (
              <g key={name} data-arm={name} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d={`M${shoulder.x} ${shoulder.y}L${elbow.x} ${elbow.y}L${pose.hand.x} ${pose.hand.y}`}
                  stroke={skin}
                  strokeWidth="48"
                />
                <path
                  d={`M${shoulder.x} ${shoulder.y}L${shoulder.x + (elbow.x - shoulder.x) * .55} ${shoulder.y + (elbow.y - shoulder.y) * .55}`}
                  stroke={sleeve}
                  strokeWidth="70"
                />
              </g>
            ))}
            <g className="golfer-wrist" transform={`translate(${pose.hand.x} ${pose.hand.y}) rotate(${pose.swing + pose.wrist}) translate(-645 -885)`}>
              <use href={`${golfer}#golfer-club`} />
            </g>
            <circle cx={pose.hand.x} cy={pose.hand.y} r="23" fill="#aaa" />
          </g>
        </g>
        <use href={`${golfer}#golfer-tee`} />
        <path
          className="golf-trail"
          d="M1012 1282Q1482 582 1952 382"
          fill="none"
          stroke="#777"
          strokeWidth="5"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - pose.flight}
          opacity={pose.flight > 0 ? 1 : 0}
        />
        <g className="golf-flight" transform={`translate(${pose.ballX} ${pose.ballY})`}>
          <use href={`${golfer}#golfer-ball`} />
        </g>
      </g>
    </svg>
  );
}
