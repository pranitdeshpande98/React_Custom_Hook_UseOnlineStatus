import React from 'react';
import useOnlineStatus from './useOnlineStatus';
import ReactDom from 'react-dom';
const App = () => {
  const isOnline = useOnlineStatus(3000); // Pass 30000 milliseconds (30 seconds) as the timeout duration
  return (
    <div>
      <h1>{isOnline ? 'You are online' : 'You are offline'}</h1>
    </div>
  );
}
//Config Driven UI - 
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
