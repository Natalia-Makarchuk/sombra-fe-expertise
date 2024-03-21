import React, { useEffect, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import { Action as NavigationTypeEnum } from '@remix-run/router';
import { PopUpsKey } from '@constants/commons';
import { PopUpsService } from './pop-up-constructor';

// Defines a React component for managing and displaying popovers.
const AppPopover = () => {
  // Utilizes router's navigation and location to handle popover visibility on route changes.
  const history = useNavigationType();
  const { pathname, search } = useLocation();

  // Subscribes to popover open/close events on component mount and cleans up on unmount.
  useEffect(() => {
    PopUpsService.subscribe(PopUpsKey.popover, onUpdatePopover);

    return () => {
      PopUpsService.unsubscribe(PopUpsKey.popover);
    };
  }, []);

  // State for controlling popover visibility and storing its properties.
  const [open, onToggle] = useState(false);
  const [popover, setPopover] = useState({
    component: null,
    onClose: null,
    className: '',
    rootClassName: '',
    anchorOrigin: null,
    anchorEl: null
  });

  // Hides the popover when navigating back in history.
  useEffect(() => {
    if (history === NavigationTypeEnum.Pop) {
      onToggle(false);
    }
  }, [history, pathname, search]);

  // Updates popover state based on events published to `PopUpsService`.
  const onUpdatePopover = (data) => {
    if (!data || !data.component) {
      onToggle(false);
      return;
    }
    setPopover(data);
    onToggle(true);
  };

  // Renders the Popover component with dynamic content and properties based on current state.
  return (
    <Popover
      open={open}
      onClose={popover.onClose}
      anchorEl={popover.anchorEl}
      classes={{
        paper: popover.className,
        root: popover.rootClassName
      }}
      anchorOrigin={
        popover.anchorOrigin || {
          vertical: 'bottom',
          horizontal: 'left'
        }
      }
    >
      {popover.component}
    </Popover>
  );
};

export default AppPopover;