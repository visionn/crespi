import React, {Component} from 'react';
class Info extends Component {
  constructor(props) {
    super(props);
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum viverra leo, at elementum metus blandit at. Morbi augue augue, aliquam non magna ac, posuere malesuada turpis. Curabitur lacinia sem non suscipit gravida. In imperdiet eros quam, at elementum ipsum volutpat vitae. Fusce mollis consequat ligula et convallis. Praesent tempor enim non enim tempor, ut aliquet tellus tempor. Aenean laoreet cursus dui id consequat. Donec pellentesque mollis diam, sed  gravida mi convallis a. Quisque et viverra ipsum, vitae gravida velit.';
  }
  render() {
    return(
      <div>
        <h1>Lorem ipsum</h1>
        <div ref={(el) => this.elementContainer = el} />
        <div>{this.description}</div>
      </div>
    );
  }
}
export default Info;
