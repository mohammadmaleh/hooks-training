import { useState } from 'react';
import { Button } from './button';

const UseStateComponent = () => {
  const [count, setCount] = useState<number>(0);

  const changeCount = (changeType: 'incr' | 'dec'): void => {
    changeType === 'incr'
      ? setCount(prevState => prevState + 1)
      : setCount(prevState => prevState + 1);
  };
  return (
    <div>
      <Button onClick={() => changeCount('dec')}>decrement</Button>
      <div>{count}</div>
      <Button onClick={() => changeCount('incr')}>increment</Button>
    </div>
  );
};

export default UseStateComponent;
