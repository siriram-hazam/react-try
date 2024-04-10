import { useState } from "react";

// interface props {
//   items = string[],
//   heading = string
// }
// If Write in TypeScript If Function have props
// that pass in have to declare interface and
// destucture it on function

// const Props = {
//   items: [],
//   heading: "",
// };

function ListGroup(props) {
  // items = [];

  // if (items.length === 0) {
  //   return (
  //     <div>
  //       <h1>List Group</h1>
  //       <p>No item found</p>
  //     </div>
  //   );
  // }

  // const handleClick = (event) => console.log(event);

  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState('')
  // arr[0] variable(name)
  // arr[1] updater function

  return (
    <div>
      <h1>List Group of {props.heading}</h1>
      <p>Selected item {selectedIndex} </p>
      {/*       Conditional Rendering
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>} 

      Also can put in const and use it
      const message = items.length === 0 ? <p>No item found</p> : null

      and when call just write like this {message}

      Also can put in const function
      cosnt getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null
      }
      */}

      <ul className="list-group">
        {props.items.map((item, index, onSelectItem) => (
          <li
            // className="list-group-item"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) => console.log(event)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
