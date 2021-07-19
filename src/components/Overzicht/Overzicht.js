import React, { useState } from "react";
import Collega from "../Collega/Collega";
import AddColleague from "../AddColleague";
import "./Overzicht.scss";

const compareDays = (colleagueA, colleagueB) => {
  return colleagueB.days - colleagueA.days;
};

const compareName = (colleagueA, colleagueB) => {
  return colleagueA.name.localeCompare(colleagueB.name);
};

export default function Overzicht() {
  const [colleagues, setColleagues] = useState([
    { id: 1, name: "Ruben", days: 16 },
    { id: 2, name: "Sjim", days: 0 },
    { id: 3, name: "Dave", days: 18 },
    { id: 4, name: "Merel", days: 12 },
    { id: 5, name: "Lotte", days: 10 },
    { id: 6, name: "Merel", days: 8 },
  ]);

  const [sortBy, setSortBy] = useState("days"); // "days" or on "name"

  const colleaguesSorted =
    sortBy === "days"
      ? [...colleagues].sort(compareDays)
      : [...colleagues].sort(compareName);

  const changeSorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };

  const decrementDays = (id) => {
    const newColleaguesArray = colleagues.map((colleague) => {
      if (id === colleague.id) {
        return {
          ...colleague, //{ id: 1, name: "Violeta", days: 11 }
          days:
            colleague.days <= 0
              ? alert(`${colleague.name} heeft geen vrije dagen meer`) &&
                colleague.days
              : parseInt(colleague.days) - 1, //{ id: 1, name: "Violeta", days: 10 }
        };
      } else {
        return colleague;
      }
    });
    setColleagues(newColleaguesArray);
  };

  const incrementDays = (id) => {
    const newColleaguesArray = colleagues.map((colleague) => {
      if (id === colleague.id) {
        return {
          ...colleague, //{ id: 1, name: "Violeta", days: 11 }
          days:
            colleague.days >= 45
              ? alert(`${colleague.name} moet op wereldreis en snel.`) &&
                colleague.days
              : parseInt(colleague.days) + 1, //{ id: 1, name: "Violeta", days: 12 }
        };
      } else {
        return colleague;
      }
    });
    setColleagues(newColleaguesArray);
  };

  const onCreateNewColleague = (newColleagueName, newColleagueDays) => {
    const newColleague = {
      id: colleagues.length + 1,
      name: newColleagueName,
      days: newColleagueDays,
    };

    console.log("new Colleague days left:", newColleagueDays);

    console.log("new Colleague", newColleague);

    const updatedColleagues = [...colleagues, newColleague];
    setColleagues(updatedColleagues);
  };

  const resetDays = () => {
    const reset = colleagues.map((colleague) => {
      return { ...colleague, days: 25 };
    });
    setColleagues(reset);
  };

  return (
    <div className="Overzicht">
      <p>
        Sort order:{" "}
        <select
          onChange={changeSorting}
          value={sortBy}
          style={{
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            marginBottom: "3px",
            marginTop: "3px",
            fontFamily: "inherit",
            backgroundColor: "#006d80",
          }}
        >
          <option value="days">Sorteer op dagen</option>
          <option value="name">Sorteer op namen</option>
        </select>
        {" -- "}
        <button onClick={resetDays}>reset dagen</button>
      </p>
      <h3>Dagen resterend</h3>
      {colleaguesSorted.map((colleague) => (
        <Collega
          key={colleague.id}
          id={colleague.id}
          name={colleague.name}
          days={colleague.days}
          decrementDays={decrementDays}
          incrementDays={incrementDays}
        />
      ))}
      <AddColleague onCreateNewColleague={onCreateNewColleague} />
    </div>
  );
}
