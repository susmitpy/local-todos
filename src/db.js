const { openDB } = require("idb");
const dbPromise = openDB("todos", 1, {
  upgrade(db) {
    db.createObjectStore("keyval", {autoIncrement: true});
  },
});

async function get(key) {
  return (await dbPromise).get("keyval", key);
}

async function add(val) {
  return (await dbPromise).add("keyval", val);
}

async function set(key, val) {
  return (await dbPromise).put("keyval", val, key);
}

async function keys() {
  return (await dbPromise).getAllKeys("keyval");
}

async function getAll() {
  return (await dbPromise).getAll("keyval");
}

async function del(key){
  
  return (await dbPromise).delete("keyval", key);
}

module.exports = { get, set, keys, getAll, add, del };
