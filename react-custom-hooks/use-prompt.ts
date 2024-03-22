/**
 * Custom hook to block navigation based on certain conditions.
 * It listens for changes in the location and uses a provided callback to determine
 * whether to block the navigation, prompting the user for confirmation if necessary.
 * 
 * @param {Function} onLocationChange Callback function that decides if navigation should be blocked.
 * @param {Function} confirmModal Function to show confirmation modal.
 */

import { useEffect } from 'react';
import { unstable_useBlocker as useBlocker } from 'react-router-dom';
import { Action as HistoryAction, Location } from '@remix-run/router/history';

export interface IOnLocationChangeArgs {
  currentLocation: Location;
  nextLocation: Location;
  historyAction: HistoryAction;
}

export const usePrompt = (
  onLocationChange: (args: IOnLocationChangeArgs) => boolean,
  confirmModal: () => Promise<boolean>
) => {
  const blocker = useBlocker(onLocationChange);

  useEffect(() => {
    (async () => {
      if (blocker.state === 'blocked' && (await confirmModal())) {
        blocker.proceed();
      }
    })();
  }, [blocker]);
};
