import React from 'react';
import Modal from '../Modal';

type Props = {
  isHelpOpen: boolean;
  setIsHelpOpen: (arg0: boolean) => void;
};

const HelpModal = ({ isHelpOpen, setIsHelpOpen }: Props) => {
  return (
    <Modal
      isModalOpen={isHelpOpen}
      setIsModalOpen={setIsHelpOpen}
      header="How To Play"
    >
      <h4>Examples</h4>
    </Modal>
  );
};

export default HelpModal;
