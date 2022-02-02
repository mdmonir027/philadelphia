import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Login from './Login';
import ModalWrapper from './ModalWrapper';
import PasswordRecover from './PasswordRecover';
import RegisterOne from './Register/RegisterOne';
import RegisterSuccess from './Register/RegisterSuccess';
import RegisterTwo from './Register/RegisterTwo';

const AuthenticationContainer = () => {
  const [open, setOpen] = useState(false);
  const { type } = useParams();
  const [signUpmEmail, setSignUpmEmail] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    setSignUpmEmail('');
    setOpen(false);
    navigate('/');
  };

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div>
      <ModalWrapper open={open} onClose={handleClose}>
        {type === 'login' && <Login handleClose={handleClose} />}
        {type === 'register-1' && (
          <RegisterOne
            handleClose={handleClose}
            setSignUpmEmail={setSignUpmEmail}
            signUpmEmail={signUpmEmail}
          />
        )}
        {type === 'register-2' && (
          <RegisterTwo handleClose={handleClose} email={signUpmEmail} />
        )}
        {type === 'register-success' && (
          <RegisterSuccess handleClose={handleClose} email={signUpmEmail} />
        )}
        {type === 'password-recover' && (
          <PasswordRecover handleClose={handleClose} email={signUpmEmail} />
        )}
      </ModalWrapper>
    </div>
  );
};

export default AuthenticationContainer;
