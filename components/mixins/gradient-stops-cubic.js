import BezierEasing from 'bezier-easing'

export default function (
  bezierCoordinates,
  delta = 0.1,
  incrementSize = 0.001) {
  const bezierFunction = BezierEasing(...bezierCoordinates)
  let x = 0
  let y = 0
  let xOld = 0
  let yOld = 0
  let firstTime = true
  let coordinates = []

  // After first time test if distance from last coordinate added in inner loop (xOld, yOld) to (1, 1) is within 80% of average distance between coordinates
  while (firstTime || (Math.hypot(1 - xOld, 1 - yOld) < delta * 0.8)) {
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
          position: `${(y * 100).toFixed(1)}%`
        })
        xOld = x
        yOld = y
      }
      y += incrementSize
    }
  }
  // Add start and stop coordinates
  coordinates = [
    {
      mix: 0,
      position: '0%'
    },
    ...coordinates,
    {
      mix: 1,
      position: '100%'
    }
  ]

  return coordinates
}
