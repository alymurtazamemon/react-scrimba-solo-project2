import earth from "../assets/earth.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import marker from "../assets/marker.png";

function DataContainer(props) {
  console.log(props);
  return (
    <section>
      <img src={props.obj.imageUrl}></img>
      <div>
        <div>
          <img src={marker}></img>
          <h2>
            {props.obj.location} <span>View on Google Maps</span>
          </h2>
        </div>
        <h1>{props.obj.title}</h1>
        <h3>
          {props.obj.startDate} - {props.obj.endDate}
        </h3>
        <p>{props.obj.description}</p>
      </div>
    </section>
  );
}

export default DataContainer;
