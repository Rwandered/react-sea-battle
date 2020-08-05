export const gameOptions = {
  shipCount: [1, 1, 1, 0],
  // shipCount: [1, 1, 2, 3],
  shipSize:[4, 3, 2, 1],
  privateLocation: [],
  generateShips() {
    const ships = []
    this.shipCount.forEach(( count, index) => {
      for(let i = 0; i < count; i++) {
        const size = this.shipSize[index]
        const ship = this.generateShipOptions(size)
        ships.push(ship)
      }
    })
    // console.log('ships: ', ships)
    return ships
  },
  generateShipOptions(shipSize) {
    const ship = {
      hit: [],
      location: [],
    }

    const direction = Math.random() < .5
    let x, y

    if( direction ) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * (10 - shipSize) )

    } else {
      x = Math.floor(Math.random() * (10 - shipSize))
      y = Math.floor(Math.random() * 10 )
    }

    for (let i = 0; i < shipSize; i ++) {
      if( direction ) {
        ship.location.push(x + '' + (y + i))
      } else {
        ship.location.push((x + i) + '' + y)
      }
      ship.hit.push('')
    }

    if(this.checkPrivateLocation(ship.location)) {
      return this.generateShipOptions(shipSize)
    }

    this.addPrivateLocation(ship.location)

    return ship
  },
  checkPrivateLocation(location) {
    for(const coordinate of location) {
      if (this.privateLocation.includes(coordinate)) {
        return true
      }
    }
  },

  addPrivateLocation(location) {
    for(let i = 0; i < location.length; i++) {
    const startCoordinateX = location[i][0] - 1
    const startCoordinateY = location[i][1] - 1
    for(let j = startCoordinateX; j < startCoordinateX + 3; j++) {
      for(let r = startCoordinateY; r < startCoordinateY + 3; r++) {
        if( j >= 0 && j < 10 && r >= 0 && r < 10 ) {
          const coordinate = j + '' + r
          if(!this.privateLocation.includes(coordinate)){
            this.privateLocation.push(coordinate)
          }
        }
      }
    }
    }
  },
}


// export const generateShips = ({shipCount, shipSize, privateLocation, ships}) => {
//
//
//   shipCount.forEach((count, index) => {
//     for (let i = 0; i < count; i++) {
//       ships.push({
//         location: generateShipOptions(shipSize[index], privateLocation),
//         hit: new Array(shipSize[index]).fill(''),
//         dead: false
//       })
//     }
//   })
//   return ships
// }
//
// const generateShipOptions = (size, privateLocation) => new Array( ...[...genRandomLocation(size, privateLocation)])
//
//
// const genRandomLocation = (size, privateLocation) => {
//   const locationArray = []
//   let x, y
//
//   const shipDirection = Math.random() < .5
//
//   if( shipDirection ) {
//     x = Math.floor(Math.random() * 10)
//     y = Math.floor(Math.random() * (10 - size) )
//
//   } else {
//     x = Math.floor(Math.random() * (10 - size))
//     y = Math.floor(Math.random() * 10 )
//   }
//
//   for (let i = 0; i < size; i ++) {
//     if( shipDirection ) {
//       locationArray.push(x + '' + (y + i))
//     } else {
//       locationArray.push((x + i) + '' + y)
//     }
//   }
//
//   if(checkPrivateLocation(locationArray, privateLocation)) {
//     return genRandomLocation(size, privateLocation)
//   }
//
//   addPrivateLocation(locationArray, privateLocation)
//
//
//   console.log('privateLocation: ', privateLocation)
//
//   return locationArray
// }
//
//
// const checkPrivateLocation = (location, privateLocation) => {
//   for(const coordinate of location) {
//     if(privateLocation.includes(coordinate)) {
//       return true
//     }
//   }
// }
//
// const addPrivateLocation = (location, privateLocation) => {
//   for(let i = 0; i < location.length; i++) {
//     const startCoordinateX = location[i][0] - 1
//     const startCoordinateY = location[i][1] - 1
//     for(let j = startCoordinateX; j < startCoordinateX + 3; j++) {
//         for(let r = startCoordinateY; r < startCoordinateY + 3; r++) {
//           if( j >= 0 && j < 10 && r >= 0 && r < 10 ) {
//             const coordinate = j + '' + r
//             if(!privateLocation.includes(coordinate)){
//               privateLocation.push(coordinate)
//             }
//           }
//         }
//     }
//   }
// }

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