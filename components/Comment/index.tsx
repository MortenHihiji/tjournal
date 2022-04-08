import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

export const Comment: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
          alt="avatar"
        />
        <b>Master Oogway</b>
        <span>5 часов</span>
      </div>
      <Typography className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quis fuga tempore atque quae
        laboriosam, at quo ducimus reprehenderit ipsam rem sint nihil facilis.
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={3}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
