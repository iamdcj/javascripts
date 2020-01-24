function bouncingBall(h, bounce, window) {
  let seenCount = -1;

  if (h > 1 && bounce > 0 && bounce < 1 && window < h) {
    while (h > window) {
      seenCount += 2;

      h *= bounce;
    }
  }

  return seenCount;
}
