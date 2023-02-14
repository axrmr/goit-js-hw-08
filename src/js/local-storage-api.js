/**
 * Add serialized data to localStorage
 * @param {'string'} key string
 * @param {{Object}} value  Object
 */
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error', error.message);
  }
};

/**
 * Get  data from  LocalStorage by key
 * @param {'string'} key string
 */
const get = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error', error.message);
  }
};

/**
 * Remove data from LocalStorage by key
 * @param {'string'} key string
 */
const remove = key => {
  try {
    if (!localStorage.getItem(key)) {
      throw new Error(`key "${key}" not found.`);
    }

    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
};

export default { save, get, remove };
