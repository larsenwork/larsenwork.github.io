const createStop = (x, y, coordinates) => {
  coordinates.push({
    mix: x,
    position: `${+y.toFixed(3)}`
  })
}

export default function (number, skip) {
  let n = 0
  let coordinates = []
  if (skip === 'skip-end') {
    while ((n + 1) < number) {
      createStop(n / number, (n + 1) / number, coordinates)
      createStop((n + 1) / number, (n + 1) / number, coordinates)
      ++n
    }
    createStop(n / number, (n + 1) / number, coordinates)
  } else if (skip === 'skip-start') {
    while ((n + 1) < number) {
      createStop((n + 1) / number, n / number, coordinates)
      createStop((n + 1) / number, (n + 1) / number, coordinates)
      ++n
    }
    createStop((n + 1) / number, n / number, coordinates)
  } else if (skip === 'skip-none') {
    while ((n + 1) < number) {
      createStop(n / (number - 1), (n + 1) / number, coordinates)
      createStop((n + 1) / (number - 1), (n + 1) / number, coordinates)
      ++n
    }
  } else if (skip === 'skip-both') {
    while ((n + 1) < number) {
      createStop((n + 1) / (number + 1), (n + 1) / number, coordinates)
      createStop((n + 2) / (number + 1), (n + 1) / number, coordinates)
      ++n
    }
  }
  return coordinates
}
