// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Component1 from './Components/Component1';
// import DataFetching from './Components/DataFetching';
// import HookMouse from './Components/HookMouse';
// import HookMouse2 from './Components/HookMouse2';
// import ConditionalRenderUseEffect from './Components/ConditionalRenderUseEffect';
// import EffectHook from './Components/EffectHook';
// import ArrUseState from './Components/ArrUseState';
// import Counter from './Components/Counter';
// import Counter1 from './Components/Counter1';
// import Counter2 from './Components/Counter2';
// import CounterDepend from './Components/CounterDepend';

export const UserContext= React.createContext()
export const ChannelContext= React.createContext()
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Counter1/> */}
      {/* <Counter2/> */}
      {/* <ArrUseState/> */}
      {/* <EffectHook/> */}
      {/* <ConditionalRenderUseEffect/> */}
      {/* <HookMouse2/> */}
      {/* <CounterDepend/> */}
      {/* <DataFetching/> */}
      <UserContext.Provider value={'krishna'}>
        <ChannelContext.Provider value={'CodeWithKrishna'}>
            <Component1/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
