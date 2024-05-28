
import React from 'react';
import './Background3D.css'; 

const Background3D = () => {
  return (
    <div className="background-3d">
      <div className="cube">
        <div className="face front">FRONT</div>
        <div className="face back">BACK</div>
        <div className="face left">LEFT</div>
        <div className="face right">RIGHT</div>
        <div className="face top">TOP</div>
        <div className="face bottom">BOTTOM</div>
      </div>
    </div>
  );
};

export default Background3D;
