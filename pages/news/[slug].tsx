import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../../components/Comment';
import { FullPost } from '../../components/FullPost';
import { MainLayout } from '../../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant="h6" className="mb-20">
          42 Коментария
        </Typography>
        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-20 mt-15">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </Paper>
    </MainLayout>
  );
}
