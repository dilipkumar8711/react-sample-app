import User from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <h2>This is about us page.</h2>
      <User name={"Dileep"} location={"Hassan"} contact={"7411380718"} />
    </div>
  );
};
export default About;
