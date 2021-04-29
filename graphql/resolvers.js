const lkb = {
  name: "LLKKBB",
  age: 222,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => lkb,
  },
};

export default resolvers;
