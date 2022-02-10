import React, { useState } from "react";

const Tour = (props) => {
  const [fullTextIsShown, setFullTextIsShown] = useState(false);

  const price = `$${props.price}`;

  // const allText = Array.from(props.info);

  // const partText = allText.slice(0, 250);

  const linkName = fullTextIsShown ? "less" : "more";

  const textDisplayHandler = () => {
    setFullTextIsShown((prev) => !prev);
  };

  const deleteTourHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="single-tour">
      <img src={props.image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {/* {fullTextIsShown ? props.info : partText}
          {!fullTextIsShown && "..."}  */}
          {/*or use substring*/}
          {fullTextIsShown ? props.info : `${props.info.substring(0, 250)}...`}
          <button onClick={textDisplayHandler} style={{textTransform: 'lowercase', color: 'aquamarine'}}>{linkName}</button>
        </p>

        <button className="delete-btn" onClick={deleteTourHandler}>
          Not Interested
        </button>
      </footer>
    </li>
  );
};

export default Tour;
