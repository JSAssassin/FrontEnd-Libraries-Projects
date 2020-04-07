import React from 'react';

export default function Screen(props) {
  return (
    <div id={props.id}>
      {props.currentNum}
    </div>
  );
}
