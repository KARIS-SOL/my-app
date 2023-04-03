import React from 'react';
import catImg from '../cat.jpg';

export default function ImgComponent2() {
  return (
    <>
      <h1>Public Folder</h1>
      <img src="/images/cat.jpeg" alt="퍼블릭고양이" />
      <h1>SRC Folder</h1>
      <img src={catImg} alt="소스고양이" />
    </>
  );
}
