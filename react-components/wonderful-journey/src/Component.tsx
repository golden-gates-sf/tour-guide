import React from 'react';

export class Component extends React.Component<{ title: string; img: string; message: string }> {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>{this.props.title}</h4>
        <img src={this.props.img} />
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Component;
