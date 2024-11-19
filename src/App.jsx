import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const Bulbcontext = createContext();

function App() {
  return <div>
  <Bulbprovider>
  <Light />
  </Bulbprovider>
   </div>
}


function Bulbprovider({children}){
  const[bulbon, setbulbon] =  useState(true);
  return <Bulbcontext.Provider value={{
     bulbon: bulbon,
     setbulbon: setbulbon
    }}>
    {children}
    </Bulbcontext.Provider>
}


function Light (){
  return <div>
  <Bulb />
  <Toggle  />
  </div>
}


function Bulb(){
  const { bulbon } = useContext(Bulbcontext);
  return <div>
    {bulbon ? "Bulb On" : "Bulb off"}
  </div>
}


function Toggle(){
  const { setbulbon} = useContext(Bulbcontext)
  function bulbstate(){
    setbulbon (currentstate => !currentstate)
  }

  return <div>
    <button onClick={bulbstate}>Toggle the bulb</button>
  </div>
}

export default App