import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CssBaseline, Grid, useMediaQuery } from '@material-ui/core';
import { Spinner } from '../../components/molecules/Spinner';
import { Notice } from '../../components/molecules/Notice';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { SettingList } from '../organisms/SettingList';
import { Account } from '../organisms/Account';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { ApiAccountContext } from '../../contexts/childContexts/ApiAccountContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const SettingAccountPage: React.FC = () => {
  /**
   * { スピナー, api通信の結果通知の状態管理 }
   * cssの定義
   * アカウント情報の読み込み
   * react-router-dom URLルーティングに使う
   * apiと通信する処理を読み込み { ユーザー名変更, メールアドレス変更, パスワード変更 }
   * スマホ( > 600px)を基準にレスポンシブ対応
   */
  const { progress, status, setStatus } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { authUserState } = useContext<any>(AuthContext);
  const history = useHistory();
  const { changeName, changeEmail, changePassword } = useContext<any>(ApiAccountContext);
  const matches = useMediaQuery('(min-width: 601px)');

  /**
   * Account componentを共通化
   */
  const CommonAccount = () => {
    return (
      <Account
        name={authUserState.name}
        email={authUserState.email}
        nameChangeOnClick={(name) => {
          changeName(name, authUserState.id);
        }}
        emailChangeOnClick={(newEmail, password) => {
          changeEmail(newEmail, authUserState.email, password, authUserState.id);
        }}
        passwordChangeOnClick={(password, newPassword) => {
          changePassword(password, newPassword, authUserState.email, authUserState.id);
        }}
        accountRelease={() => {
          history.push(`/${authUserState.name}/settings/account/release`);
        }}
        // ゲストログインなら非表示にする
        disabled={authUserState.id === 1}
      />
    );
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='md' className={classes.main_container}>
        {matches ? (
          // PC・タブレットレイアウト width >= 601px
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <SettingList />
            </Grid>
            <Grid item xs={8}>
              <CommonAccount />
            </Grid>
          </Grid>
        ) : (
          // スマホレイアウト width <= 600px
          // <SettingList />を表示するハンバーガーメニューを実装したい
          <CommonAccount />
        )}
      </Container>
      <Footer />

      <Spinner open={progress} />
      <Notice
        open={status.open}
        type={status.type}
        message={status.message}
        onClose={() => {
          setStatus({ ...status, open: false });
        }}
      />
    </>
  );
};
