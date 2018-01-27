import BezierEasing from 'bezier-easing'
import hypot from 'math-hypot'

const rounded = (number, precission = 0) => +number.toFixed(precission)

export default function easingGradientCalc (bezierCoordinates) {
  const bezierFunction = BezierEasing(...bezierCoordinates)
  const incrementSize = 0.001
  let x = 0
  let y = 0
  let xOld = 0
  let yOld = 0
  let firstTime = true
  let delta = 1 / 10
  let coordinates = []

  // After first time test if distance last coordinate added in inner loop (xOld, yOld) to (1, 1) is within tolerance
  while (firstTime || !(hypot(1 - xOld, 1 - yOld) > delta)) {
    if (firstTime) {
      firstTime = false
    } else {
      // Reset values
      x = 0
      y = 0
      xOld = 0
      yOld = 0
      coordinates = []
      // Decrease delta by incrementSize
      delta -= incrementSize
    }
    // Loop and add coordinates every time it's far enough away from the previous one
    while (y <= 1) {
      x = bezierFunction(y)
      if (hypot(x - xOld, y - yOld) > delta) {
        coordinates.push({
          mix: x,
          position: `${rounded(y * 100, 2)}%`
        })
        xOld = x
        yOld = y
      }
      y += incrementSize
    }
  }
  // Add start and stop coordinates
  coordinates.unshift({
    mix: 0,
    position: '0%'
  })
  coordinates.push({
    mix: 1,
    position: '100%'
  })

  return coordinates
}
