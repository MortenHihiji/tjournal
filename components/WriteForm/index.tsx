import React from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor').then((Editor) => Editor), { ssr: false });

interface WriteFormProps {
  title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};

export default WriteForm;
