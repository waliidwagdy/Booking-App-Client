import "./propertyListItem.css";
import PropTyes from "prop-types";

const PropertyListItem = ({ imgSrc, imgAlt, title, properties }) => {
  return (
    <div className="pListItem">
      <img src={imgSrc} alt={imgAlt} className="pListImg" />
      <div className="pListTitle">
        <h1>{title}</h1>
        <h2>{`${properties} properties`}</h2>
      </div>
    </div>
  );
};
PropertyListItem.propTypes = {
  imgSrc: PropTyes.string.isRequired,
  imgAlt: PropTyes.string.isRequired,
  title: PropTyes.string.isRequired,
  properties: PropTyes.string.isRequired,
};
export default PropertyListItem;
