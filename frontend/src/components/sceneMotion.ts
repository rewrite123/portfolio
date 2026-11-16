const clamp = (value: number) => Math.min(1, Math.max(0, value));

type Point = { x: number; y: number };

export const golfShoulders = {
  far: { x: 525, y: 470 },
  near: { x: 555, y: 490 },
};

function getElbow(shoulder: Point, hand: Point, bend: number): Point {
  const upper = 230;
  const dx = hand.x - shoulder.x;
  const dy = hand.y - shoulder.y;
  const distance = Math.hypot(dx, dy);
  const along = distance / 2;
  const height = Math.sqrt(Math.max(0, upper ** 2 - along ** 2));
  return {
    x: shoulder.x + dx / 2 - bend * dy / distance * height,
    y: shoulder.y + dy / 2 + bend * dx / distance * height,
  };
}

export function getGolfRig(progress: number) {
  const pose = getGolfPose(progress);
  const angle = pose.swing * Math.PI / 180;
  const hand = {
    x: 550 + 95 * Math.cos(angle) - 415 * Math.sin(angle),
    y: 470 + 95 * Math.sin(angle) + 415 * Math.cos(angle),
  };
  return {
    ...pose,
    hand,
    farElbow: getElbow(golfShoulders.far, hand, -1),
    nearElbow: getElbow(golfShoulders.near, hand, 1),
  };
}

export function getSceneProgress(top: number, viewportHeight: number) {
  return clamp((viewportHeight * 0.85 - top) / (viewportHeight * 0.65));
}

export function getPlumberAngle(progress: number) {
  return Math.sin(clamp(progress) * Math.PI * 6) * 12;
}

export function getGolfPose(progress: number) {
  const phase = clamp(progress);
  const followThrough = clamp((phase - 0.65) / 0.23);
  let swing = 0;
  if (phase >= 0.12 && phase < 0.4) {
    swing = ((phase - 0.12) / 0.28) * 150;
  } else if (phase >= 0.4 && phase < 0.56) {
    swing = 150;
  } else if (phase >= 0.56 && phase < 0.65) {
    swing = (1 - (phase - 0.56) / 0.09) * 150;
  } else if (phase > 0.65) {
    swing = -followThrough * 155;
  }
  const flight = clamp((phase - 0.65) / 0.35);
  return {
    swing,
    wrist: followThrough === 0 ? 0 : -105 * followThrough ** 2,
    torso: followThrough === 0 ? 0 : -24 * followThrough,
    flight,
    ballX: 940 * flight,
    ballY: -1400 * flight + 500 * flight ** 2,
  };
}
