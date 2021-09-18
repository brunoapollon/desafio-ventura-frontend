import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';

import { Container } from './styles';

function feturedVideo(props) {
  const { desc, title } = props;
  return (
    <Container {...props}>
      <div className="thumb" {...props}>
        <button type="button">
          <IoPlayOutline size={25} />
        </button>
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </Container>
  );
}

export default feturedVideo;
