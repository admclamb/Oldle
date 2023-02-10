import React from 'react';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (arg0: boolean) => void;
  header: string;
  children: React.ReactNode;
};

const Modal = ({ isModalOpen, setIsModalOpen, header, children }: Props) => {
  return isModalOpen ? (
    <>
      <div
        className="modal-backdrop w-1/2 bg-slate-800 border rounded border-slate-50/[0.06]"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <article className="fixed">
        <header>
          <h3>{header}</h3>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </header>
        {children}
      </article>
    </>
  ) : null;
};

export default Modal;
