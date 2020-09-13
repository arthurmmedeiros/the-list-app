import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AlbumCard.scss";

export interface IAlbumCard {
  title: string;
}

const AlbumCard: React.FC<IAlbumCard> = ({ title }) => {
  return (
    <div className="album-card-container">
      <div className="album-card-icon">
        <FontAwesomeIcon icon={["fas", "record-vinyl"]} />
      </div>
      <div className="album-card-title">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default AlbumCard;
