import React, { useState } from 'react';
import 'antd/dist/antd.css';

import { Modal, Button } from 'antd';


const Showmodal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal 
      </Button>
      <Modal
      className='update-panel'
        title="Modal Title"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
      >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      </Modal>
    </>
  );
};

 export default () =><Showmodal />;