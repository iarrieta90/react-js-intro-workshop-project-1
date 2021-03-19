const e = React.createElement;

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      "p",
      { className: `${this.props.className}__text` },
      this.props.text
    );
  }
}

export default Text;