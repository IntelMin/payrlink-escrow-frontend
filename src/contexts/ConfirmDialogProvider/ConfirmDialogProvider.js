import React, { createContext, useRef, useState } from 'react';
import ConfirmDialog from '../../components/modal/ConfirmDialog';

export const ConfirmDialogContext = createContext(Promise.reject);

const ConfirmDialogProvider= ({ children }) => {
  const [open, setOpen] = useState(false);
  const [confirmationState, setConfirmationState] = useState(null);
  const awaitingPromiseRef = useRef();

  const openConfirmation = (options) => {
    setConfirmationState(options);
    setOpen(true);
    return new Promise((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (confirmationState.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }
    setOpen(false);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }
    setOpen(false);
  };

  return (
    <>
      <ConfirmDialogContext.Provider
        value={openConfirmation}
        children={children}
      />

      <ConfirmDialog
        open={open}
        onSubmit={handleSubmit}
        onClose={handleClose}
        {...confirmationState}
      />
    </>
  );
};

export default ConfirmDialogProvider;