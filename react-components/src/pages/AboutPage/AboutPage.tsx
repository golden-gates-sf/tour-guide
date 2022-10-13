import React from 'react';
import Header from 'components/Header/Header';
import './about.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2 className="header-about">About Us</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec orci orci.
          Pellentesque luctus at diam ut rhoncus. Curabitur interdum, dolor ut dignissim lacinia,
          metus nisl faucibus lorem, nec efficitur felis ante eget leo. Duis placerat scelerisque
          risus in pretium. Suspendisse fringilla lobortis finibus. Morbi interdum nunc nec purus
          tincidunt molestie. Proin posuere lacus ut euismod efficitur. Nunc sit amet cursus libero.
          Aliquam in maximus erat, eu consectetur massa. Mauris venenatis euismod lacus at finibus.
          Sed imperdiet velit id magna tincidunt, eu ultrices arcu laoreet. Proin ligula lorem,
          rhoncus et magna at, suscipit tincidunt tellus. Vestibulum facilisis quam non neque
          consectetur convallis. Nam eget luctus nunc. Etiam congue, libero at feugiat semper, magna
          purus bibendum est, ac sodales purus justo in nisi. Quisque semper urna urna, sit amet
          ornare magna faucibus vel. Fusce mattis blandit odio, non sodales sem malesuada eu. Donec
          consectetur eget enim non suscipit. Mauris ac lorem sit amet mi molestie tempor vel a
          arcu. Praesent egestas eros at velit vulputate, vel cursus neque tincidunt. Ut nec orci
          aliquet, dictum erat at, semper dolor. Praesent eu tortor nisl. Duis quis rhoncus nibh, a
          porttitor felis. Suspendisse porttitor mi elit, non sagittis libero porta non. Integer in
          pharetra nisi.
        </p>
      </div>
    );
  }
}

export default AboutPage;
