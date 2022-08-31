import NewComponent from "./components/NewComponent";
import AnotherComponent from "./components/AnotherComponent";

function App() {

  const title="thistitle"

  //important array
  const items = [1,2,3,4,5]; 
  return (

      <NewComponent title={title}>  
        <AnotherComponent items={items} />
      </NewComponent>
    
  );
}

export default App;
