const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function getSceneProgress(top: number, viewportHeight: number, extended = false) {
  const start = extended ? 0.95 : 0.85;
  const distance = extended ? 0.9 : 0.65;
  return clamp((viewportHeight * start - top) / (viewportHeight * distance));
}

export function getPlumberAngle(progress: number) {
  return Math.sin(clamp(progress) * Math.PI * 6) * 12;
}

export function getSceneTime(progress: number, duration: number) {
  return clamp(progress) * Math.max(0, duration - 1 / 24);
}
