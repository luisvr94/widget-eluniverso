import React from "react";
// import InlineAlert from './display/InlineAlert'

export default class DisplayMessage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      type: "inline"
    };
  }
  componentWillMount() {
    if (this.props.type) this.state.type = this.props.type;
  }

  handleDismiss() {
    this.props.dismissed();
  }

  render() {
    return (
      <div>
        {this.state.type === "inline" && (
          <div></div>
          // <InlineAlert message={this.props.message} bsStyle={this.props.bsStyle} dismissed={()=>this.handleDismiss()}/>
        )}
      </div>
    );
  }
}
