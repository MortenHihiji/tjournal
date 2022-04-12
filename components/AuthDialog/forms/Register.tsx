import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';

import FormField from '../../FormField';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

import styles from '../AuthDialog.module.scss';

const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="fullname" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />

        <div className="d-flex align-center justify-between">
          <Button
            disabled={!form.formState.isValid}
            type="submit"
            color="primary"
            variant="contained">
            Зарегистрироваться
          </Button>
          <Button onClick={onOpenLogin} color="primary" variant="text">
            Ввойти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
