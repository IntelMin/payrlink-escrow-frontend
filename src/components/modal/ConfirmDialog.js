import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmDialog = (props) => {
  
  const {
    open,
    title,
    message,
    variant,
    onSubmit,
    onClose
  } = props;
  
  const handleClose = () => {
    if (onClose) onClose();
  }

  const handleSubmit = () => {
    if (onSubmit) onSubmit();
    else handleClose();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="confirm-dlg"
    >
      <DialogTitle className="dlg-title" id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className="dlg-text" id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {
          (variant == null || variant === "confirm") &&
            <>
              <Button onClick={handleClose} className="dlg-button-close">
                No
              </Button>
              <Button onClick={handleSubmit} className="dlg-button-submit">
                Yes, I'm sure
              </Button>
            </>
        }
        {
          (variant === "info") &&
            <>
              <Button onClick={handleSubmit} className="dlg-button-submit" autoFocus>
                OK
              </Button>
            </>
        }
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;