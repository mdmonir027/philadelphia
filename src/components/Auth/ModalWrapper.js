import { Box, Modal } from '@mui/material';
import React from 'react';
import { useInnerSize } from '../../hook/useInnerSize';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: 2,
  overflowY: 'auto',
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: 2,
  overflowY: 'auto',
};
const ModalWrapper = ({ children, open, handleClose }) => {
  const { width } = useInnerSize();
  if (width < 768) {
    return <Box sx={style}>{children}</Box>;
  }
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style2}>{children}</Box>
    </Modal>
  );
};

export default ModalWrapper;
