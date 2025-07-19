import React from 'react';
import HelloWorld from './components/HelloWorld';
import { APP_CONFIG } from './constants';

const App: React.FC = () => {
  return (
    <div className="App">
      <HelloWorld name={APP_CONFIG.appName} />
    </div>
  );
};

export default App;
