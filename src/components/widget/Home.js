import React from "react";
import Header from "./Header";
import TitleWidget from "./TitleWidget";
import News from "./News";
const GLOBAL = require("../../helpers/globals");

///import Loader from '../loaders/Line';
const styles = {
  container: {
    width: GLOBAL.width_container,
    float: GLOBAL.float_container,
    margin: "0 auto"
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: GLOBAL.menu,
      selectedMenu: null
    };
  }
  handleChangeNews = event => {
    this.setState({
      selectedMenu: parseInt(event.target.value)
    });
  };
  render() {
    const Options = this.state.menu.map((item, index) => (
      <option key={index} value={item.codigo}>
        {item.name}
      </option>
    ));

    return (
      <div style={styles.container}>
        <Header />
        <select
          onChange={this.handleChangeNews}
          value={this.state.selectedMenu}
        >
          {Options}
        </select>
        <div className="panel-pane pane-block pane-block-823 widget pane-block widget">
          <TitleWidget />
          <div className="pane-content">
            <News categoria={this.state.selectedMenu} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
