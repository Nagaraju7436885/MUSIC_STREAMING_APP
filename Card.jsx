import React, { useEffect, useState } from "react";

function Card({ element }) {

  return (
    <div style={{ width:'22%',padding:'5px'}}>
      <div key={element.id} className="col-lg-3 col-md-6 py-2" >
      <div className="card" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',  textAlign: 'left'}}>
        <div className="ratio ratio-1x1 bg-secondary bg-opacity-25" >
          <img style={{height:'250px',width:'100%'}}
            src={element.album.images[0].url}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card-body" style={{ width:'400px',padding:'10px'}}>
          <h5 className="card-title d-flex justify-content-between">
            {element.name}
          </h5>
          <p className="card-text">Artist: {element.album.artists[0].name}</p>
          <p className="card-text">
            Release date: {element.album.release_date}
          </p>
          <audio src={element.preview_url} controls className="w-100"></audio>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;