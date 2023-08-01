import { Client } from "./Hooks/Client";
import { Private } from "./Private";
import { Public } from "./Public";



function App() {  
  const {client} = Client()

  console.log(client?.signed);

  if (client?.signed === !true) {
    return <Public/>
  }

  return <Private/>

}

export default App;
