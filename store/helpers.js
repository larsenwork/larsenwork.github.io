export function sv2sl (s, v) {
  var l = (2 - s) * v / 2
  if (l !== 0) {
    if (l === 1) {
      s = 0
    } else if (l < 0.5) {
      s = s * v / (l * 2)
    } else {
      s = s * v / (2 - l * 2)
    }
  }
  return [s, l]
}

export function xy2deg (x, y) {
  const deltaX = 0.5 - x
  const deltaY = y - 0.5
  const rad = Math.atan2(deltaY, deltaX)
  const deg = rad * (180 / Math.PI)
  const correctedDeg = (270 + deg) % 360
  const errorMargin = 5
  const errorMarginFrom45 = correctedDeg % 45
  const errorCorrectedDeg = errorMarginFrom45 > (45 - errorMargin)
    ? correctedDeg + 45 - errorMarginFrom45
    : errorMarginFrom45 < errorMargin
      ? correctedDeg - errorMarginFrom45
      : correctedDeg
  return errorCorrectedDeg
}
