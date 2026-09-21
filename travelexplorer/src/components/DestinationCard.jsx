
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite } from "../features/favoriteSlice";

function DestinationCard({ destination, onDelete }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites
  );

  const isFavorite = favorites.some(
    (item) => item.id === destination.id
  );

  function handleFavorite() {
    if (!isFavorite) {
      dispatch(addFavorite(destination));
    }
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      onDelete(destination.id);
    }
  }

  return (
    <div className="card">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <div className="card-content">
        <h2>{destination.name}</h2>
        <p>{destination.country}</p>

        <div className="card-buttons">
          {/* View Button */}
          <Link
            to={`/destinations/${destination.id}`}
            className="view-btn"
          >
            View
          </Link>

          {/* Edit Button */}
          <Link
            to={`/edit-destination/${destination.id}`}
            className="edit-btn"
          >
            Edit
          </Link>

          {/* Delete Button */}
          <button
            type="button"
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>

          {/* Favorites Button */}
          <button
            type="button"
            className="favorite-btn"
            onClick={handleFavorite}
            disabled={isFavorite}
          >
            {isFavorite
              ? "❤️ Added"
              : "♡ Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;