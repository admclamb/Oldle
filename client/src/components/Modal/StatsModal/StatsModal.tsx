import React from 'react';
import Modal from '../Modal';
type Props = {
  isStatsOpen: boolean;
  setIsStatsOpen: (arg0: boolean) => void;
};

const StatsModal = ({ isStatsOpen, setIsStatsOpen }: Props) => {
  return (
    <Modal
      isModalOpen={isStatsOpen}
      setIsModalOpen={setIsStatsOpen}
      header="How To Play"
    >
      <h4>Examples</h4>
    </Modal>
  );
};

export default StatsModal;
