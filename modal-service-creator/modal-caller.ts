import PopUps from './pop-up-constructor';

// Example usage of the PopUps utility for showing a modal dialog.
const showAddItemManuallyModal = () => {
  PopUps.open(PopUpsKey.subModal, {
    className: 'component-class',
    component: (
      <ModalContentComponent
        // Closing the modal dialog buy a unique identifier.
        onCancel={() => PopUps.close(PopUpsKey.subModal)}
        {...otherProps}
      />
    )
  });
};