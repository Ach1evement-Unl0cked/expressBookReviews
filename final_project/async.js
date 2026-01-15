const axios = require("axios");
const base = "http://localhost:5000";

// Task 10:
async function task10_getAllBooks() {
  const res = await axios.get(`${base}/`);
  return res.data;
}

// Task 11:)
function task11_getByISBN(isbn) {
  return axios.get(`${base}/isbn/${isbn}`).then(res => res.data);
}

// Task 12:
async function task12_getByAuthor(author) {
  const res = await axios.get(`${base}/author/${author}`);
  return res.data;
}

// Task 13:
function task13_getByTitle(title) {
  return axios.get(`${base}/title/${title}`).then(res => res.data);
}