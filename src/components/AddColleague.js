import React, { useState } from "react";

export default function AddColleagueForm(props) {
  const [name, setName] = useState("");
  const [days, setDays] = useState(25);

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!name || !days) {
      window.alert("Naam of dagen ontbreekt.");
    } else {
      props.onCreateNewColleague(name, days);
      setName("");
      setDays(25);
    }
  };

  return (
    <div className="AddColleagueForm">
      <form onSubmit={onSubmitForm}>
        <div>
          <label>Nieuwe collega: </label>
          <input
            type="text"
            value={name}
            name="naam"
            onChange={(event) => {
              console.log("Event value", event.target);
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Dagen: </label>
          <input
            type="number"
            value={days}
            name="dagen resterend"
            onChange={(event) => setDays(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Creëer!</button>
        </div>
      </form>
    </div>
  );
}
