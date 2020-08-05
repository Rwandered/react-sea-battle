export const field = new Array(10).fill(
  new Array(10).fill('')
)

export const game = {
  ships: [],
  shipCount: 0,
  following: 'User',
  isBlock: false,
  isLost: false,
}

export const computer = {
  ships: [],
  shipCount: 0,
  isShip: [],
  isMiss: {},
  isHit: {},
  isDead: {},
}

export const isUsedId = []

export const privateUserLocation = []
export const privateComputerLocation = []

//
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