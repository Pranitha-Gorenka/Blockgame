import React from 'react';
import moleImg from '../../images/mole.png';
import holeImg from '../../images/hole.png';

function Mole({ active, onClick }) {
  return (
    <div className="hole" onClick={onClick} role="button" tabIndex={0} onKeyDown={() => {}}>
      <img src={active ? moleImg : holeImg} alt={active ? 'Mole' : 'Hole'} />
    </div>
  );
}

export default Mole;

