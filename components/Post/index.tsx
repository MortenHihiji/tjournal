import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Post.module.scss';
import { PostActions } from '../PostActions';

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test-123">
          Кот прилёг отдохнуть в английском парке миниатюр - и стал героем шуток и фотожаб о
          гиганстком пушистом захватчике
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        Пока одни не могли соотнести размеры животного окружения, другие начали создавать
        апокалиптические сюжеты с котом в главной роли
      </Typography>
      <Image
        src="https://m.media-amazon.com/images/I/61kayCaZqhL._AC_SL1024_.jpg"
        alt="img"
        height={500}
        width={600}
      />
      <PostActions />
    </Paper>
  );
};
