// ConfirmDialog.js

import { useToaster } from 'react-hot-toast';

const ConfirmDialog = ({ onConfirm, onCancel }) => {
  const toaster = useToaster();

  const handleConfirm = () => {
    onConfirm();
    toaster.success('Operation successful!');
  };

  const handleCancel = () => {
    onCancel();
    toaster.error('Operation canceled.');
  };

  return (
    <div>
      <p>Are you sure you want to proceed?</p>
      <button onClick={handleConfirm}>OK</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default ConfirmDialog;
