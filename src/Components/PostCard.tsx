import React from "react";
import "./PostCard.scss";

export interface IPostCard {
  title: string;
  body: string;
}

const AlbumCard: React.FC<IPostCard> = ({ title, body }) => {
  return (
    <div className="post-card-container">
      <div className="post-card-title">
        <span>
          <strong>{title}</strong>
        </span>
      </div>
      <div>
        <span>{body}</span>
      </div>
    </div>
  );
};

export default AlbumCard;
