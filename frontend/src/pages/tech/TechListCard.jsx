import React, { useState } from 'react';
import TechLists from './TechLists';
import TechOverlay from './TechOverlay';
import TechListModal from './TechListModal';

const TechListCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <TechLists data={data} open={openModal} />
      {open && (
        <TechOverlay close={closeModal}>
          <TechListModal data={data} close={closeModal} />
        </TechOverlay>
      )}
    </div>
  );
};

export default TechListCard;
