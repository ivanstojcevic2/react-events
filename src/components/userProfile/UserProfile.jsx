import { useState } from "react";

export default function UserProfile({ firstname, lastname }) {
  const [name, setName] = useState(firstname);
  const [surname, setSurname] = useState(lastname);
  const [age, setAge] = useState(null);
  const [points, setPoints] = useState(null);

  return (
    <>
      <p>
        Firstname: <b>{name}</b>
      </p>

      <p>
        Lastname: <b>{surname}</b>
      </p>

      <p>
        Age: <b>{age}</b>
      </p>

      <p>
        Points: <b>{points}</b>
      </p>

      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br></br>
      <input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      ></input>
      <br></br>
      <input
        type="number"
        min={0}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <br></br>
      <input
        type="number"
        min={0}
        onChange={(e) => setPoints(e.target.value)}
      ></input>
    </>
  );
}
