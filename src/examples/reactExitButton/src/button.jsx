import React from 'react';
import ReactDOM from 'react-dom';

class ExitButtonParent extends React.Component {
  constructor(props) {
    super(props);
    // this.string = '(close)'
    this.state = {
      click: false
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
   this.setState({
     click: !this.state.click
   })
   if(this) {
     alert('x')
   }
  }

  render() {
    return (
      <ExitButtonChild
        className={this.state.click ? "buttonToggled" : "button"}
        toggleClassName={this.handleClick}
      >
      (close)
      </ExitButtonChild>
    );
  }
}
class ExitButtonChild extends React.Component {
  render() {
    return (
      <div
      className={this.props.className}
      onClick={this.props.toggleClassName}
      >
      {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <ExitButtonParent />,
  document.getElementById('app')
);
