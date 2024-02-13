import React from "react";
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
      </div>
    );
  }
}
export default User;
