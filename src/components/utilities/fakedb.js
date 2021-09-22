//use local storage as your db for now

const addToDb = (id) => {
  const exists = localStorage.getItem("shopping_cart");
  // console.log(exists);
  let shopping_cart = {};

  if (!exists) {
    shopping_cart[id] = 1;
    // localStorage.setItem(id, 1);
  } else {
    // const newCount = parseInt(exists) + 1;
    // localStorage.setItem(id, newCount);

    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
};

export { addToDb };
