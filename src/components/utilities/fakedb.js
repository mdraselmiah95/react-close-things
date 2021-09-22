//use local storage as your db for now

const addToDb = (id) => {
  const exists = localStorage.getItem(id);
  console.log(exists);
  localStorage.setItem(id, 1);
};

export { addToDb };
