const e = React.createElement;

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      "h2",
      { className: `${this.props.className}__title` },
      this.props.title
    );
  }
}

export default Title;
