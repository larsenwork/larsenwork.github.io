import BezierEasing from 'bezier-easing'

const rounded = (number, precission = 0) => +number.toFixed(precission)

export default function easingGradientCalc (
  bezierCoordinates,
  delta = 1 / 10,
  incrementSize = 1 / 1000) {
  const bezierFunction = BezierEasing(...bezierCoordinates)
  let x = 0
  let y = 0
  let xOld = 0
  let yOld = 0
  let firstTime = true
  let coordinates = []

  // After first time test if distance from last coordinate added in inner loop (xOld, yOld) to (1, 1) is within tolerance
  while (firstTime || (Math.hypot(1 - xOld, 1 - yOld) < delta)) {
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
      if (Math.hypot(x - xOld, y - yOld) > delta) {
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
