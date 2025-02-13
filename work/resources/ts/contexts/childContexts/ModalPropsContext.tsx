import React, { useState, createContext } from 'react';

export const ModalPropsContext = createContext({});

type ModalValueState = {
  id: number | null;
  boardName: string | null;
  cardContent: string | undefined;
  index: number | null;
};

export const ModalPropsContextProvider: React.FC = (props) => {
  // モーダルに表示するデータ
  const [modalValueState, setModalValueState] = useState<ModalValueState>({
    id: null,
    boardName: null,
    cardContent: '',
    index: null,
  });

  // モーダル表示のon/off切り替え
  // ユーザー名変更時のモーダルの表示状態管理
  // メールアドレス変更時のモーダルの表示状態管理
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  const [modalChangeName, setModalChangeName] = useState<boolean>(false);
  const [modalChangeEmail, setModalChangeEmail] = useState<boolean>(false);

  return (
    <ModalPropsContext.Provider
      value={{
        modalValueState,
        setModalValueState,
        modalOpenState,
        setModalOpenState,
        modalChangeName,
        setModalChangeName,
        modalChangeEmail,
        setModalChangeEmail,
      }}
    >
      {props.children}
    </ModalPropsContext.Provider>
  );
};
