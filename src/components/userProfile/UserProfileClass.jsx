import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.firstname,
      surname: props.lastname,
      age: null,
      points: null,
    };
  }

  render() {
    const { name, surname, age, points } = this.state;

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

        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        ></input>
        <br></br>
        <input
          value={surname}
          onChange={(e) => this.setState({ surname: e.target.value })}
        ></input>
        <br></br>
        <input
          type="number"
          min={0}
          value={age}
          onChange={(e) => this.setState({ age: e.target.value })}
        ></input>
        <br></br>
        <input
          type="number"
          min={0}
          value={points}
          onChange={(e) => this.setState({ points: e.target.value })}
        ></input>
      </>
    );
  }
}

export default UserProfile;
