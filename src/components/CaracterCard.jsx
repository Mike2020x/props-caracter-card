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
          <span className={`status__icon status__alive`}></span>
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
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
  lastlocationname: PropTypes.string,
  lastlocationurl: PropTypes.string,
  firstseenname: PropTypes.string,
  firstseenurl: PropTypes.string,
};
export default CharacterCard;
