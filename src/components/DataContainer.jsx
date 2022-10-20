import earth from "../assets/earth.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import marker from "../assets/marker.png";

function DataContainer(props) {
  let imagePath;

  switch (props.obj.id) {
    case 1:
      imagePath = image1;
      break;
    case 2:
      imagePath = image2;
      break;
    case 3:
      imagePath = image3;
      break;
  }

  return (
    <section>
      <img src={imagePath}></img>
      <div>
        <div className="location--div">
          <img src={marker}></img>
          <h2>
            {props.obj.location.toUpperCase()}
            <span className="location--span">View on Google Maps</span>
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
