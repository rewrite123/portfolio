import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { getGolfPose, getGolfRig, getPlumberAngle, getSceneProgress, golfShoulders } from "../src/components/sceneMotion.ts";

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

test("the golfer addresses, winds up, strikes, and follows through before the ball flies", () => {
  assert.deepEqual(getGolfPose(0), { swing: 0, wrist: 0, torso: 0, flight: 0, ballX: 0, ballY: 0 });
  assert.equal(getGolfPose(0.45).swing, 150);
  assert.equal(getGolfPose(0.6).flight, 0, "the ball stays on its tee during the downswing");
  assert.equal(getGolfPose(0.65).swing, 0, "impact returns the club to its address position");
  assert.equal(getGolfPose(0.65).flight, 0);
  const airborne = getGolfPose(0.8);
  assert.ok(airborne.swing < 0 && airborne.ballX > 0 && airborne.ballY < 0);
  assert.equal(getGolfPose(1).swing, -155);
  assert.equal(getGolfPose(1).wrist, -105);
  assert.equal(getGolfPose(1).torso, -24);
  assert.equal(getGolfPose(1).ballX, 940);
  assert.equal(getGolfPose(1).ballY, -900);
  assert.deepEqual(getGolfPose(-1), getGolfPose(0));
  assert.deepEqual(getGolfPose(2), getGolfPose(1));
});

test("generated artwork contains real vector layers without raster images or executable content", async () => {
  for (const [file, layers] of [
    ["plumber", ["plumber-body", "plumber-tool"]],
    ["golfer", ["golfer-legs", "golfer-torso", "golfer-arms", "golfer-club", "golfer-ball", "golfer-tee"]],
  ]) {
    const svg = await readFile(new URL(`../src/assets/scenes/${file}.svg`, import.meta.url), "utf8");
    for (const layer of layers) assert.ok(svg.includes(`id="${layer}"`));
    assert.match(svg, /<path /);
    assert.doesNotMatch(svg, /<image|<script|<foreignObject|\bon\w+=|url\(|<linearGradient|<radialGradient/i);
  }
});

test("both arms stay attached to their shoulders and the shared grip throughout the swing", () => {
  for (let step = 0; step <= 1000; step += 1) {
    const rig = getGolfRig(step / 1000);
    for (const [shoulder, elbow] of [
      [golfShoulders.far, rig.farElbow],
      [golfShoulders.near, rig.nearElbow],
    ]) {
      assert.ok(Math.abs(Math.hypot(elbow.x - shoulder.x, elbow.y - shoulder.y) - 230) < 1e-8);
      assert.ok(Math.abs(Math.hypot(rig.hand.x - elbow.x, rig.hand.y - elbow.y) - 230) < 1e-8);
    }
    const angle = (rig.swing + rig.wrist) * Math.PI / 180;
    const grip = { x: 645, y: 885 };
    const transformedGrip = {
      x: rig.hand.x + (grip.x - 645) * Math.cos(angle) - (grip.y - 885) * Math.sin(angle),
      y: rig.hand.y + (grip.x - 645) * Math.sin(angle) + (grip.y - 885) * Math.cos(angle),
    };
    assert.deepEqual(transformedGrip, rig.hand);
  }
});
