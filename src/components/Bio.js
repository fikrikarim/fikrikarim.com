import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: this.props.noMargin ? 0 : rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Fikri Karim`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          My Indonesian blog. <br />
          Tulisan baru setiap ada tulisan baru.
        </p>
      </div>
    );
  }
}

export default Bio;
