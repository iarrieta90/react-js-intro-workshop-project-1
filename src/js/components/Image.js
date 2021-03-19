const e = React.createElement;

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      "img",
      { src: this.props.src, className: `${this.props.className}__img` },
      
    );
  }
}

export default Image;
