import React from "react";

import "../css/main.css";

export const FavoriteList = props => {
  const Favorites = props.favorites.map(favorite => {
    console.log(favorite);
    return (
      <li className="favorite__list--item">
        <i class="far fa-times-circle" />
        <p>{favorite}</p>
      </li>
    );
  });

  return (
    <div>
      <ul className="favorite__list">{Favorites}</ul>
    </div>
  );
};
