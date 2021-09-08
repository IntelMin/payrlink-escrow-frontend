import { useContext } from 'react';
import { ConfirmDialogContext } from '../contexts/ConfirmDialogProvider';

const useConfirmDialog = () => {
  const confirmDialog = useContext(ConfirmDialogContext);
  return confirmDialog;
}

export default useConfirmDialog;