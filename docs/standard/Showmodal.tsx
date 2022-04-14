import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../appstyle.less';
import { Modal, Button } from 'antd';

const Showmodal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        className='update-panel'
        wrapClassName='update-panel'
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div >
  );
};

export default () => <Showmodal />;