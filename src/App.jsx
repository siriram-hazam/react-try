import ListGroup from "./ListGroup";
import Message from "./Message";
import Alert from "./Alert";
import Button from "./Button";
import { useState } from "react";

// const handleSelectItem = (items) => {
//   console.log(items);
// };

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [alertValue, updateAlert] = useState(true);

  return (
    // <ListGroup
    //   items={items}
    //   heading={"Cities"}
    //   onSelectItem={handleSelectItem}
    // />

    // <Alert text="Hello World!@" />
    <div>
      {alertValue && (
        <Alert onClick={() => updateAlert(!alertValue)}>
          Hello <span className="text-uppercase">World!</span>
        </Alert>
      )}

      <Button
        buttonname="Open | Close"
        // onClick={() => console.log("Clicked")}
        onClick={() => updateAlert(!alertValue)}
        color="info"
      />
    </div>
  );
}

export default App;
