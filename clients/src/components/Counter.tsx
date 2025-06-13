import { useCallback, useEffect, useRef, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  // in order to reduce unnecessary re-renders we are using ref
  const socketRef = useRef<WebSocket | null>(null);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('client connected');
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'request-counter') {
        socket.send(countRef.current.toString());
      }
    };
    socket.onclose = () => {
      console.log('client disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  // handlers
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '8px',
        }}
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
};
