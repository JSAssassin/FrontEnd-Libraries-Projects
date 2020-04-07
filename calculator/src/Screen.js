import React from 'react';

export default function Screen(props) {
  console.log(props)
  return (
    <div id={props.id}>
      {props.currentNum}
    </div>
  );
}
