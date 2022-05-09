import Counter  from "./Counter";
import CounterHook from "./CounterHooks";
import React, { useState } from "react";
export const ThemeContext = React.createContext();
function App() {
  console.log('Render App');
  const [theme, setTheme] = useState('red');

  return (
    // backgroundColor: theme
    <ThemeContext.Provider value={{backgroundColor: theme}}>
    <Counter initialCount= {0} />
    <CounterHook initialCount= {0}/>
    <button className="theme" onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red';
    })}>Change Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
