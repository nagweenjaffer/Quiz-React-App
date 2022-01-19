import React, { useRef } from "react";

const FinishedCard = ({ score }) => {
  const initial = useRef(null);
  const handleSubmit = () => {
    // localStorage.setItem('')
    // localStorage.setItem('',`${}`)
  };
  return (
    <div>
      <h2>All Done !</h2>
      <p> Your final score is {score}.</p>
      <p>
        Enter initials <input type="text" ref={initial} />
        <button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        ></button>
      </p>
    </div>
  );
};

export default FinishedCard;
