import React from "react";
import UserContext from "../utils/UserContext";
class User extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //api call
  }
  componentDidMount() {
    //after every render this will be called
  }
  componentWillUnmount() {
    // called while leaving this component
  }
  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h2>
          Logged In User: 
          <UserContext.Consumer>
            {({ loggedInUser }) => <span>{loggedInUser}</span>}
          </UserContext.Consumer>
        </h2>
      </div>
    );
  }
}
export default User;
