import Counter  from "./Counter";
import CounterHook from "./CounterHooks";
function App() {
  return (
    <>
    <Counter initialCount= {0} />
    <CounterHook initialCount= {0}/>
    </>
  )
}

export default App;
