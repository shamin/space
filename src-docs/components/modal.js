import React, { useState } from 'react';
import PropsInfo from '../propsInfo';
import { Modal, Button } from '../../src';

const ModalInfo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button text="Show Modal" onClick={() => setShowModal(!showModal)} />
      <Modal
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        showClose
      >
        Modal contents here
      </Modal>
      <PropsInfo component={Modal} />
    </div>
  );
};

export default ModalInfo;
