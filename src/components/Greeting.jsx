import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const {greetings} = useSelector((state) => state.greetings);
  const message = greetings[0].message;

  return (
    <div>
      Message:
      { }
      {message}
    </div>
  );
};

export default Greeting;
