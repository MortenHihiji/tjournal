import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';

import FormField from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

const Login: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              color="primary"
              variant="contained">
              Ввойти
            </Button>
            <Button onClick={onOpenRegister} color="primary" variant="text">
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Login;
