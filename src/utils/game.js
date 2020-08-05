import {privateComputerLocation, privateUserLocation} from "../constants/constants";

export const gameOptions = {
  shipCount: [1, 2, 3, 4],
  shipSize:[4, 3, 2, 1],

  generateShips(type) {
    let privateLocation
    if(type === 'user') {
      privateLocation = privateUserLocation
    } else {
      privateLocation = privateComputerLocation
    }
    const ships = []

    this.shipCount.forEach(( count, index) => {
      const size = this.shipSize[index]
      for(let i = 0; i < count; i++) {
        const ship = this.generateShipOptions(size, privateLocation)
        ships.push(ship)
      }
    })

    return ships
  },
  generateShipOptions(shipSize, privateLocation) {
    const ship = {
      hit: new Array(shipSize).fill(''),
      location: [],
    }

    const direction = Math.random() < .5 // генерируем направление корабля
    let x, y

    if( direction ) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * (10 - shipSize) )
    } else {
      x = Math.floor(Math.random() * (10 - shipSize))
      y = Math.floor(Math.random() * 10 )
    }

    for (let i = 0; i < shipSize; i ++) {
      if( direction ) { //горизонталльное
        ship.location.push(x + '' + (y + i))
      } else { //вертикальное
        ship.location.push((x + i) + '' + y)
      }
    }


    if(this.checkPrivateLocation(ship.location, privateLocation)) {
      return this.generateShipOptions(shipSize, privateLocation)
    }

    this.addPrivateLocation(ship.location, privateLocation)

    return ship
  },
  checkPrivateLocation(location, privateLocation) {
    for(const coordinate of location) {
      if (privateLocation.includes(coordinate)) {
        return true
      }
    }
  },

  addPrivateLocation(location, privateLocation) {
    for(let i = 0; i < location.length; i++) {
    const startCoordinateX = location[i][0] - 1
    const startCoordinateY = location[i][1] - 1
    for(let j = startCoordinateX; j < startCoordinateX + 3; j++) {
      for(let r = startCoordinateY; r < startCoordinateY + 3; r++) {
        if( j >= 0 && j < 10 && r >= 0 && r < 10 ) {
          const coordinate = j + '' + r
          if(!privateLocation.includes(coordinate)){
            privateLocation.push(coordinate)
          }
        }
      }
    }
    }
  },
}