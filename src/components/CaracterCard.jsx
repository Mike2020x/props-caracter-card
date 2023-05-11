import "./styles.css";
import PropTypes from "prop-types";

const CharacterCard = (props) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img src={props.image} alt={props.name} />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{props.name}</h2>
        <span className="status">
          <span className={`status__icon status__${props.status}`}></span>
          {props.status} - {props.specie}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={props.lastlocationurl}>{props.lastlocationname}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={props.firstseenurl}>{props.firstseenname}</a>
      </div>
    </div>
  </article>
);

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  lastlocationname: PropTypes.string.isRequired,
  lastlocationurl: PropTypes.string.isRequired,
  firstseenname: PropTypes.string.isRequired,
  firstseenurl: PropTypes.string.isRequired,
};
export default CharacterCard;
