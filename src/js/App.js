import Card from "./components/Card.js";
import posts from "./data.js";

const e = React.createElement;
const root = document.getElementById("root");

const post = posts.map(({id, img, title, text}) => {
  return e(Card, {id, img, title, text})
})

ReactDOM.render(post, root);