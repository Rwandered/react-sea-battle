export const field = new Array(10).fill(
  new Array(10).fill('')
)

export const game = {
  ships: [],
  shipCount: 0,
  following: 'User',
}

export const computer = {
  ships: [],
  shipCount: 0,
  isShip: [],
  isMiss: {},
  isHit: {},
  isDead: {},
  test: 0
}

export const isUsedId = []

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