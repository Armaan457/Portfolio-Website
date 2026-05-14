export const smoothEnter = (delay = 0, duration = 0.55) => ({
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration,
  delay,
});
