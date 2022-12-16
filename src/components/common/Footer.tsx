import React from 'react';
import testImg from '../../../public/imgaes/test.jpg'

export default function Footer() {
  return (
    <div className="bottom_menu">
      <ul>
        <li>
          <img src={testImg} alt="" />
        </li>
        <li>
          <img src={testImg} alt="" />
        </li>
        <li>
          <img src={testImg} alt="" />
        </li>
      </ul>
    </div>
  );
}
