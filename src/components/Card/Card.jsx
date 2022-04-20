import React from "react";
import { Link } from "react-router-dom";
import   './style.css';

export default function Card({hero}) {
  return (
    <div>
      <Link to={`/detail/${hero.id}`} style={{textDecoration:'none'}}>
      <div className="portrait">
        <div className="line"></div>
        <img src={hero.thumbnail.path+'/portrait_uncanny.jpg'} alt="hero" className="hero" />
        <div className="heroName">{hero.name}</div>
      </div>
      </Link>
    </div>
  );
}
