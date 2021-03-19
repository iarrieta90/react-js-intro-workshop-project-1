import Image from "./Image.js";
import Title from "./Title.js";
import Text from "./Text.js";
import Button from "./Button.js";

const e = React.createElement;

class Card extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
        return e(`div`, {className: "card", key: this.props.id}, [
          e(Image, {src: this.props.img, className: "card"}),
          e(Title, {title: this.props.title, className: "card"}),
          e(Text, {text: this.props.text, className: "card"}),
          e(Button, {btn: this.props.btn, className: "card"}),
        ])
    }
}

export default Card;