import {
  Paper,
  Button,
  Typography,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { FollowButton } from '../components/FollowButton';

export default function Home() {
  return (
    <MainLayout hideComments>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
          рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц
        </Typography>
        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>
      <Paper elevation={0}>
        <Table aria-label="dsa">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователь</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell scope="row">
                <span className="mr-15">1.</span> Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
}
