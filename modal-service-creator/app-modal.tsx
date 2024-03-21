// The AppModal component uses the PopUpsService to manage modal dialogs based on published events.
// It subscribes to modal keys to control the visibility and content of primary and sub-modals.

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import { Action as NavigationTypeEnum } from '@remix-run/router';

import { PopUpsKey } from '@constants/commons';
import { PopUpsService } from './pop-up-constructor';

// Defines the structure for modal data.
export interface ModalData {
  component: React.ReactNode;
  onClose?: () => void;
  className?: string;
  rootClassName?: string;
}

// Initial state for modal data.
const initialModalData: ModalData = {
  component: null,
  onClose: null,
  className: '',
  rootClassName: ''
};

const AppModal = () => {
  // Component state and hooks for managing modal visibility and content.
  // Utilizes router's navigation and location to handle popover visibility on route changes.
  const history = useNavigationType();
  const { pathname, search } = useLocation();

  const [open, onToggle] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalData>(initialModalData);
  const [openSubModal, onToggleSubModal] = useState<boolean>(false);
  const [subModal, setSubModal] = useState<ModalData>(initialModalData);

  // Subscribes and unsubscribes to pop-up keys for modal and sub-modal management.
  useEffect(() => {
    PopUpsService.subscribe(PopUpsKey.modal, onUpdateModal);
    PopUpsService.subscribe(PopUpsKey.subModal, onUpdateSubModal);

    return () => {
      PopUpsService.unsubscribe(PopUpsKey.modal);
      PopUpsService.unsubscribe(PopUpsKey.subModal);
    };
  }, []);

  // Uses effects to listen for navigation changes and updates modal state accordingly.
  useEffect(() => {
    if (history === NavigationTypeEnum.Pop) {
      onToggle(false);
    }
  }, [history, pathname, search]);


  const onUpdateModal = (data: ModalData) => {
    if (!data || !data.component) {
      onToggle(false);
      return;
    }
    setModal(data);
    onToggle(true);
  };

  const onUpdateSubModal = (data: ModalData) => {
    if (!data || !data.component) {
      onToggleSubModal(false);
      return;
    }
    setSubModal(data);
    onToggleSubModal(true);
  };

  // Renders Dialog components for the modal and sub-modal based on state.
  return (
    <>
      <Dialog
        open={open}
        onClose={modal.onClose}
        classes={{
          paper: modal.className,
          root: modal.rootClassName
        }}
      >
        {modal.component}
      </Dialog>
      <Dialog
        open={openSubModal}
        onClose={subModal.onClose}
        classes={{
          paper: subModal.className,
          root: subModal.rootClassName
        }}
      >
        {subModal.component}
      </Dialog>
    </>
  );
};

export default AppModal;