export const buildings = [
  {
    name: "John Everett Millais",
    code: "JM",
  },
  {
    name: "Michael Andrews",
    code: "A",
  },
  {
    name: "Reginald Mitchell",
    code: "RM",
  },
  {
    name: "Sir Christopher Cockerell",
    code: "CC",
  },
];

export const roomTypes = [
  {
    name: "PC Lab",
    code: "pc",
  },
  {
    name: "Mac Lab",
    code: "mac",
  },
  {
    name: "Lecture Theatre",
    code: "lt",
  },
];

export const rooms = [
  {
    id: 1,
    number: "208",
    building: "HC",
    capacity: 10,
    type: {code: "pc", name: "PC Lab"},
  },
  {
    id: 2,
    number: "204",
    building: "HC",
    capacity: 25,
    type: {code: "pc", name: "Mac Lab"},
  },
  {
    id: 3,
    number: "203",
    building: "HC",
    capacity: 15,
    type: {code: "pc", name: "PC Lab"},
  },
  {
    id: 4,
    number: "206",
    building: "HC",
    capacity: 25,
    type: {code: "pc", name: "Mac Lab"},
  },
  {
    id: 5,
    number: "202",
    building: "HC",
    capacity: 13,
    type: {code: "pc", name: "PC Lab"},
  },
  {
    id: 6,
    number: "201",
    building: "HC",
    capacity: 25,
    type: {code: "pc", name: "Mac Lab"},
  },
];

export const lotsOfRooms = [
  ...rooms,
  ...rooms.map((r) => ({...r, ...{building: "RM"}})),
  ...rooms.map((r) => ({...r, ...{building: "JM"}})),
];
