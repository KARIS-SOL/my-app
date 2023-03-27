import React, {useState} from 'react';

export default function Feel() {
  const [feel, setFeel] = useState(0);

  return(
    <>
    <h1 onClick={( ) => setFeel(feel + 1)}>
      {feel >= 10 ? "😎" : "👍"}</h1>
    <div>{feel} </div>
    </>
  ) 
}