import items from "./components/allData";
import React from "react";
import Menu from "./components/Menu";
import ButtonFilter from "./components/ButtonFilter";
const allCategories = ["All", ...new Set(items.map((item) => item.category))];
export default function App() {
  const [menuItem, setMenuItem] = React.useState(items);
  const [buttons, setButtons] = React.useState(allCategories);

  const filter = (button) => {
    if (button == "All") {
      setMenuItem(items);
      return;
    }
    const filterData = items.filter((item) => item.category === button);
    setMenuItem(filterData);
  };
  return (
    <div className="App">
      <ButtonFilter button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  );
}
