/**
 * Custom hook for displaying a confirmation modal.
 * It encapsulates the logic for rendering a modal dialog that asks the user to confirm or cancel an action.
 * 
 * @param {Object} config Configuration object containing the modal title, message, and confirm button title.
 * @returns {Array} An array with a single function to trigger the modal.
 */

import React, { useEffect, useState } from 'react';
import { PopUpsKey } from '@constants/commons';
import { updatePageChanges } from '@store/actions/app';
import ConfirmModal from '@shared/components/modals/confirm';
import PopUps from '../modal-service-creator/pop-up-constructor';

interface UseConfirm {
  title: string;
  message: string | JSX.Element;
  confirmButtonTitle: string;
}

const useConfirm = ({ title, message, confirmButtonTitle }: UseConfirm) => {
  const [promise, setPromise] = useState(null);

  const confirm = (): Promise<boolean> =>
    new Promise((resolve, _) => {
      setPromise({ resolve });
    });

  useEffect(() => {
    if (promise) {
      ConfirmationDialog();
    }
  }, [promise]);

  const handleConfirm = () => {
    promise?.resolve(true);
    updatePageChanges(false);
  };

  const handleCancel = () => {
    promise?.resolve(false);
    PopUps.close(PopUpsKey.modal);
  };

  const ConfirmationDialog = () => {
    PopUps.open(PopUpsKey.modal, {
      component: (
        <ConfirmModal
          title={title}
          message={message}
          confirmButtonTitle={confirmButtonTitle}
          onCancel={handleCancel}
          onProceed={handleConfirm}
        />
      )
    });
  };
  return [confirm];
};

export default useConfirm;