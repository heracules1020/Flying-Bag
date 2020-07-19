import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

class ColorPicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: this.props.defaultColor
        ? this.props.defaultColor
        : {
            r: "0",
            g: "0",
            b: "0",
            a: "1"
          }
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.props.onPickColor(color.rgb);
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          border: "1px solid #dfdfdf",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <>
        <div style={styles.color} onClick={this.handleClick} />
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </>
    );
  }
}

export default ColorPicker;
