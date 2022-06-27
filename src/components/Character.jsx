import React from "react";

function Character(character) {
  const { name, image, origin: {originName} } = character;

  return (
    <div className="text-center p-5">
      <h2>{name}</h2>
      <img className="img-fluid rounded-pill" src={image} alt={name} />
      <p>{originName}</p>
    </div>
  );
}

export default Character;
