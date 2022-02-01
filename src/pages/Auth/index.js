import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import Login from '../../components/Auth/Login';
import PasswordRecover from '../../components/Auth/PasswordRecover';
import RegisterOne from '../../components/Auth/Register/RegisterOne';
import RegisterSuccess from '../../components/Auth/Register/RegisterSuccess';
import RegisterTwo from '../../components/Auth/Register/RegisterTwo';

const Authentication = ({ open = true, setOpen }) => {
  const [type, setType] = useState('login');
  const [signUpmEmail, setSignUpmEmail] = useState('');
  const style = {
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
  const handleClose = () => {
    setType('login');
    setSignUpmEmail('');
    setOpen(false);
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {type === 'login' && (
            <Login setType={setType} handleClose={handleClose} />
          )}
          {type === 'register-1' && (
            <RegisterOne
              setType={setType}
              handleClose={handleClose}
              setSignUpmEmail={setSignUpmEmail}
              signUpmEmail={signUpmEmail}
            />
          )}
          {type === 'register-2' && (
            <RegisterTwo
              setType={setType}
              handleClose={handleClose}
              email={signUpmEmail}
            />
          )}
          {type === 'register-success' && (
            <RegisterSuccess
              setType={setType}
              handleClose={handleClose}
              email={signUpmEmail}
            />
          )}
          {type === 'password-recover' && (
            <PasswordRecover
              setType={setType}
              handleClose={handleClose}
              email={signUpmEmail}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Authentication;
