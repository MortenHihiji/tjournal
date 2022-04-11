import { Button, Input } from '@material-ui/core';
import React from 'react';

import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {}

const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const onAddComment = () => {
    setClicked(false);
    setInputValue('');
  };

  return (
    <div className={styles.form}>
      <Input
        onFocus={() => setClicked(true)}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {inputValue ? (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default AddCommentForm;
