import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../../components/Comment';
import AddCommentForm from '../AddCommentForm';

import data from '../../data.json';

const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const comments = data.comments[activeTab === 1 ? 'new' : 'popular'];

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 Коментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          //   indicatorColor="secondary"
          //   textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20 mt-15">
          {comments.map((obj, index) => (
            <Comment key={index} user={obj.user} text={obj.text} createdAt={obj.createdAt} />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default PostComments;
