/**
 * Custom hook for handling page change confirmations.
 * It uses Redux to check if there have been changes on the page and displays
 * a confirmation modal when attempting to navigate away from the page.
 * 
 * @param {Object} config Configuration object containing the title and optionally search params to check.
 * @returns {Function} A function that can be called to show the confirmation modal.
 */

import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IOnLocationChangeArgs, usePrompt } from '@shared/components/hooks/use-prompt';
import { Store } from '@shared/interfaces/redux-store';
import { decodeSearchParams } from '@utils/decode-search-perems';
import useConfirm from './use-confirm';

interface IUsePageChangeConfirmation {
  title: string;
  checkSearchParams?: string[];
}

const usePageChangeConfirmation = ({
  title,
  checkSearchParams = []
}: IUsePageChangeConfirmation): (() => Promise<boolean>) => {
  const { hasPageChanges } = useSelector(({ app }: Store) => ({
    hasPageChanges: app.hasPageChanges
  }));

  const [confirmModal] = useConfirm({
    title,
    message: (
      <span>
        The changes you made will <span className="bold">NOT</span> be saved.
      </span>
    ),
    confirmButtonTitle: 'Continue'
  });

  const showConfirmationModal = async () => {
    if (hasPageChanges) {
      return await confirmModal();
    }
    return true;
  };

  const checkIsSearchParamsEqual = (
    nextLocationSearch: string,
    currentLocationSearch: string
  ): boolean => {
    const nextLocationSearchParams = decodeSearchParams(nextLocationSearch);
    const currentLocationSearchParams = decodeSearchParams(currentLocationSearch);

    return checkSearchParams.every(
      (searchParam) =>
        nextLocationSearchParams[searchParam] === currentLocationSearchParams[searchParam]
    );
  };

  const onLocationChange = useCallback(
    ({ nextLocation, currentLocation }: IOnLocationChangeArgs) => {
      const shallCheckSearchParams = !!checkSearchParams?.length;
      const searchParamsChanged = !checkIsSearchParamsEqual(
        nextLocation.search,
        currentLocation.search
      );

      return !!(
        (nextLocation.pathname !== currentLocation.pathname ||
          (shallCheckSearchParams && searchParamsChanged)) &&
        hasPageChanges
      );
    },
    [hasPageChanges]
  );

  usePrompt(onLocationChange, confirmModal);

  return showConfirmationModal;
};

export default usePageChangeConfirmation;


// Usage example:
// 1. Will trigger modal show, when user want to leave the page
const checkPageChange = usePageChangeConfirmation({
  title: 'Are you sure you want to exit the page?',
  checkSearchParams: [someParams]
});

if (hasPageChanges && !(await checkPageChange())) return;


// 2. You can trigger redux from any place in the app, 
// which will be detected by hook in 'hasPageChanges'
useEffect(() => {
  updatePageChanges(Boolean(someDataUpdated));
}, [someDataUpdated]);