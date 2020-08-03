
export const game = {
  ships: [],
  shipCount: 0,
}


// export const game = {
//   ships: [
//     {
//       location: ['26', '36', '46', '56'],
//       hit: ['', '', '', ''],
//       dead: false
//     },
//     {
//       location: ['11', '12', '13'],
//       hit: ['', '', ''],
//       dead: false
//     },
//     {
//       location: ['69', '79'],
//       hit: ['', ''],
//       dead: false
//     },
//     {
//       location: ['99'],
//       hit: [''],
//       dead: false
//     }
//   ],
//   shipCount: 4,
// }


export const gameOptions = {
  shipCount: [1, 2, 3, 4],
  shipSize:[4, 3, 2, 1]
}


export const generateShips = ({shipCount, shipSize}) => {
  const ships = []
  console.log('ships: ', ships)
  shipCount.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      ships.push({
        location: generateShipOptions(shipSize[index]),
        hit: new Array(shipSize[index]).fill(''),
        dead: false
      })
    }
  })
  return ships
}

const generateShipOptions = (size) => new Array([...genRandomLocation(size)])


const genRandomLocation = (size) => {
  const locationArray = []
  let x
  let y
  const shipDirection = Math.random() < 0.5

  if( shipDirection ) {
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * (10 - size) )

  } else {
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * (10 - size) )
  }

  for (let i = 0; i < size; i ++) {
    if( shipDirection ) {
      locationArray.push(x + '' + (y + i))
    } else {
      locationArray.push((x + i) + '' + y)
    }
  }
  return locationArray
}


// ships: [
//   {
//     location: ['26', '36', '46', '56'],
//     hit: ['', '', '', ''],
//     dead: false
//   },
//   {
//     location: ['11', '12', '13'],
//     hit: ['', '', ''],
//     dead: false
//   },
//   {
//     location: ['69', '79'],
//     hit: ['', ''],
//     dead: false
//   },
//   {
//     location: ['99'],
//     hit: [''],
//     dead: false
//   }
// ],
//   shipCount: 4,