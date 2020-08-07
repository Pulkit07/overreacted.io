import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Dan Abramov`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          {' '}
          <a href="https://www.twitter.com/_pulkitg">Pulkit Goyal</a> <br></br>
          Founder & CEO, <a href="">Pravegak Technologies</a>{' '}
        </p>
      </div>
    );
  }
}

export default Bio;
