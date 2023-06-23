import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Greeting from '../components/Greeting';
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Home = () => {
  const {
    isLoading,
  } = useSelector((state) => state.greetings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h3>Is loading .....</h3>
      </div>
    );
  }
  return (
    <div className="root_container">
      <Greeting />
    </div>
  );
};

export default Home;
