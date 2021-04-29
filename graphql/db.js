export const people = [
  {
    id: "0",
    name: "LKB",
    age: 22,
    gender: "male",
  },
  {
    id: "1",
    name: "Jisu",
    age: 22,
    gender: "male",
  },
  {
    id: "2",
    name: "JuNan",
    age: 22,
    gender: "male",
  },
  {
    id: "3",
    name: "Bimsan",
    age: 22,
    gender: "male",
  },
  {
    id: "4",
    name: "Honiyang",
    age: 22,
    gender: "male",
  },
  {
    id: "5",
    name: "CAT",
    age: 222,
    gender: "female",
  },
  {
    id: "6",
    name: "DOG",
    age: 111,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = movies.filter((person) => id === people.id);
  return filteredPeople[0];
};
