const choice = (items) => {
  const num = Math.floor(Math.random() * items.length);
  return items[num];
};

const remove = (items, item) => {
  let index = items.indexOf(item);

  if (index !== -1) {
    items.splice(index, 1);
    return items;
  } else {
    return undefined;
  }
};

export { choice, remove };
