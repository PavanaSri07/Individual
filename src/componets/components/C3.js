import "./C3.css";
function C3(props) {
  return (
    <div className="card">
      <div className="img">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default C3;
