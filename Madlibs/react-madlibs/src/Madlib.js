import React from 'react';

const MadLib = ({noun, adjective, verb, adverb}) => {

    const restart = () => {
        window.location.reload();
    };

  return (
    <div>
      <p>Once upon a time, there was a {adjective} {noun} who loved to {verb} {adverb}.</p>
      <button onClick={restart}>Restart</button>
    </div>
  );
};

export default MadLib;