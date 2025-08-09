'use client';

export default function AnimatedPenguin() {
  return (
    <div className="penguin-container">
      <div className="penguin">
        {/* Penguin body */}
        <div className="penguin-body">
          {/* Head */}
          <div className="penguin-head">
            <div className="penguin-eye penguin-eye-left"></div>
            <div className="penguin-eye penguin-eye-right"></div>
            <div className="penguin-beak"></div>
          </div>
          
          {/* Body */}
          <div className="penguin-torso">
            <div className="penguin-belly"></div>
          </div>
          
          {/* Wings */}
          <div className="penguin-wing penguin-wing-left"></div>
          <div className="penguin-wing penguin-wing-right"></div>
          
          {/* Feet */}
          <div className="penguin-foot penguin-foot-left"></div>
          <div className="penguin-foot penguin-foot-right"></div>
        </div>
      </div>
    </div>
  );
}