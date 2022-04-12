import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import MainForm from './forms/main';
import LoginForm from './forms/Login';

import styles from './AuthDialog.module.scss';
import RegisterForm from './forms/Register';

interface AuthDialogProps {
  handleClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ handleClose, visible }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');
  return (
    <Dialog open={visible} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'login' ? (
                <p onClick={() => setFormType('main')} className={styles.backTitle}>
                  <ArrowBackIcon />
                  Ввойти через почту
                </p>
              ) : formType === 'register' ? (
                <p onClick={() => setFormType('main')} className={styles.backTitle}>
                  <ArrowBackIcon />
                  Регистрация
                </p>
              ) : (
                'Вход на RJ'
              )}
            </Typography>
            {formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')} />}
            {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
            {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
