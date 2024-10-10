import { useEffect, useState } from 'react';
import { Button } from './button';

const UseEffectComponent = () => {
  const [randomVariable, setRandomVariable] = useState<string | undefined>(
    undefined,
  );

  const MockedAPICall = new Promise((resolve, reject) => {
    let isResolved = false;

    setTimeout(() => {
      if (isResolved) {
        isResolved = false;
        resolve({ message: 'success' });
      } else reject({ message: 'error' });
    }, 2000);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(` hello world `);
    }, 1000);
    return () => clearInterval(interval);
  }, [randomVariable]);

  useEffect(() => {
    const fetchData = async () => {
      const result1 = await MockedAPICall;
      console.log({ result1 });
      const result2 = await MockedAPICall;
      console.log({ result1, result2 });
    };
    fetchData();
  }, [randomVariable]);
  const changeVariable = (): void => {
    setRandomVariable(`string ${Math.random()}`);
  };
  return (
    <div>
      {randomVariable}
      <Button onClick={changeVariable}>change string</Button>
    </div>
  );
};
export default UseEffectComponent;
