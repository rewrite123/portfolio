import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { getPlumberAngle, getSceneProgress, getSceneTime } from "../src/components/sceneMotion.ts";

test("scene progress follows scrolling through the viewport and clamps at each end", () => {
  assert.equal(getSceneProgress(1000, 1000), 0);
  assert.equal(getSceneProgress(850, 1000), 0);
  assert.equal(getSceneProgress(525, 1000), 0.5);
  assert.equal(getSceneProgress(200, 1000), 1);
  assert.equal(getSceneProgress(-500, 1000), 1);
});

test("the wrench turns in both directions around its pipe joint", () => {
  assert.equal(getPlumberAngle(0), 0);
  assert.ok(Math.abs(getPlumberAngle(1 / 12) - 12) < 1e-8);
  assert.ok(Math.abs(getPlumberAngle(3 / 12) + 12) < 1e-8);
  assert.ok(Math.abs(getPlumberAngle(1)) < 1e-8);
});

test("the golfer takes 90% of a viewport to finish, without changing the other scenes", () => {
  for (const height of [568, 667, 844, 1000]) {
    assert.equal(getSceneProgress(height * .95, height, true), 0);
    assert.ok(Math.abs(getSceneProgress(height * .5, height, true) - .5) < 1e-8);
    assert.ok(Math.abs(getSceneProgress(height * .05, height, true) - 1) < 1e-8);
    const golfStep = getSceneProgress(height * .4, height, true) - getSceneProgress(height * .5, height, true);
    const normalStep = getSceneProgress(height * .4, height) - getSceneProgress(height * .5, height);
    assert.ok(Math.abs(golfStep / normalStep - .65 / .9) < 1e-8);
  }
});

test("the plumber artwork contains safe vector animation layers", async () => {
  const svg = await readFile(new URL("../src/assets/scenes/plumber.svg", import.meta.url), "utf8");
  for (const layer of ["plumber-body", "plumber-tool"]) assert.ok(svg.includes(`id="${layer}"`));
  assert.match(svg, /<path /);
  assert.doesNotMatch(svg, /<image|<script|<foreignObject|\bon\w+=|url\(|<linearGradient|<radialGradient/i);
});

test("the golfer uses a bounded MP4 download and a still poster", async () => {
  const video = await readFile(new URL("../src/assets/scenes/golfer.mp4", import.meta.url));
  assert.equal(video.subarray(4, 8).toString(), "ftyp");
  assert.ok(video.length < 1024 * 1024, "the video should remain below 1 MiB");
  const png = await readFile(new URL("../src/assets/scenes/golfer-poster.png", import.meta.url));
  assert.equal(png.subarray(1, 4).toString(), "PNG");
  assert.equal(png.readUInt32BE(16), 640);
  assert.equal(png.readUInt32BE(20), 480);
});

test("scroll time advances and reverses deterministically without seeking past the last frame", () => {
  const duration = 5;
  assert.equal(getSceneTime(0, duration), 0);
  assert.equal(getSceneTime(-1, duration), 0);
  assert.equal(getSceneTime(1, duration), duration - 1 / 24);
  assert.equal(getSceneTime(2, duration), duration - 1 / 24);
  const positions = [0, .25, .75, 1, .75, .25, 0].map((progress) => getSceneTime(progress, duration));
  assert.deepEqual(positions, [...positions].reverse());
  assert.ok(positions[1] > positions[0] && positions[2] > positions[1] && positions[3] > positions[2]);
  assert.equal(getSceneTime(1, 0), 0);
});
