import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography } from '@material-ui/core';
import { TextForm } from '../atoms/TextForm';
import { PasswordForm } from '../atoms/PasswordForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { Button } from '../atoms/Button';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  emailChangeOnClick: (newEmail: string, password: string) => void;
  modalOnClose: () => void;
};

export const ModalAccountEmail: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * API import of react-hook-form
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.rightPlacement}>
          <CloseIcon onClick={props.modalOnClose} />
        </Grid>
        <Typography variant='subtitle1'>メールアドレスの変更</Typography>
        <form
          className={classes.form_board}
          onSubmit={handleSubmit((data) => {
            props.emailChangeOnClick(data.email, data.password);
          })}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextForm
                name='email'
                label='新しいメールアドレス'
                multiline
                fullWidth
                rowsMax={1}
                inputRef={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                error={Boolean(errors.email)}
                helperText={errors.email && '新しいメールアドレスを入力してください'}
              />
              <PasswordForm
                fullWidth
                label='パスワード'
                name='password'
                inputRef={register({
                  required: ' パスワードを入力して下さい',
                  minLength: {
                    value: 8,
                    message: 'パスワードを8文字以上20文字以下で入力して下さい',
                  },
                  maxLength: {
                    value: 20,
                    message: 'パスワードを8文字以上20文字以下で入力して下さい',
                  },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message}
              />
            </Grid>
            <Grid item xs={12} className={classes.centerPlacement}>
              <Button type='submit'>SAVE</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};
