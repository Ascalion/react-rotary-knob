
// @flow
import React, { Component } from "react";

type HelpersOverlayProps = {

}
/**
 * Draws the overlay and the children
 */
class HelpersOverlay extends React.Component<HelpersOverlayProps> {
    render() {
      const styles = {
        overlay: Object.assign(
          {
            width: "100%",
            height: "100vh",
            top:0,
            left: 0,
            zIndex: 2147483647,
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            position: "fixed"
          },
          this.props.overlayStyle
        )
      };
  
      return <div style={styles.overlay}>{this.props.children}</div>;
    }
  }


  export default HelpersOverlay