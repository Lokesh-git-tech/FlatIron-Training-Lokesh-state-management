import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import HogForm from "./HogForm";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHideHog(hogName) {
    setHiddenHogs([...hiddenHogs, hogName]);
  }

  function handleGreasedChange() {
    setShowGreasedOnly(!showGreasedOnly);
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  function handleAddHog(newHog) {
    setHogList([...hogList, newHog]);
  }

  let hogsToDisplay = hogList.filter(
    (hog) => !hiddenHogs.includes(hog.name)
  );

  if (showGreasedOnly) {
    hogsToDisplay = hogsToDisplay.filter(
      (hog) => hog.greased
    );
  }

  if (sortBy === "name") {
    hogsToDisplay = [...hogsToDisplay].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "weight") {
    hogsToDisplay = [...hogsToDisplay].sort(
      (a, b) => a.weight - b.weight
    );
  }

  return (
    <div className="App">
      <Nav />

      <div style={{ margin: "20px" }}>
        <label htmlFor="greasedFilter">
          Greased Pigs Only?
        </label>

        <input
          id="greasedFilter"
          type="checkbox"
          checked={showGreasedOnly}
          onChange={handleGreasedChange}
        />

        <br />
        <br />

        <label htmlFor="sortBy">
          Sort by:
        </label>

        <select
          id="sortBy"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <HogForm onAddHog={handleAddHog} />

      <HogList
        hogs={hogsToDisplay}
        onHideHog={handleHideHog}
      />
    </div>
  );
}

export default App;