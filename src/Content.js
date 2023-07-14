import React, { useState } from 'react';

const Content = () => {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    console.log(text); // You can replace this with any logic you want
  };

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextAreaChange}
        placeholder="Enter some text"
      ></textarea>
      <button onClick={handleButtonClick}>Display Text</button>
    </div>
  );
};

export default Content;
