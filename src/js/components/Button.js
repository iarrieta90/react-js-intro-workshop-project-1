const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      "button",
      { className: `${this.props.className}__btn` },
      "Read More"
    );
  }
}

export default Button;