//use local storage as your db for now

const addToDb = (id) => {
  localStorage.setItem(id, 1);
};

export { addToDb };
