// Imports an action creator for updating modal state in the redux store.
import { updateModalIsOpened } from '@store/actions/app';

// Defines a class to manage the subscription and publication of pop-up events.
class PopUpsPublishSubscriber {

  // A Map to hold pop-up callback references keyed by a unique identifier.
  private popups: Map<string, unknown>;

  constructor() {
    this.popups = new Map();
  }

  // Publishes data to subscribers by invoking the callback associated with the key.
  publish = (key, data) => {
    const subscriber = this.popups.get(key);

    if (!subscriber) {
      return;
    }
    updateModalIsOpened(!!data); // Updates the modal state in the redux store.
    subscriber(data); // Invokes the subscriber callback with the provided data.
  };

  // Subscribes a callback to a specific key for receiving published data.
  subscribe = (key, callback) => {
    const modal = this.popups.get(key);

    if (modal) {
      return;
    }
    this.popups.set(key, callback);
  };

  // Removes a subscription for a specific key.
  unsubscribe = (key) => {
    this.popups.delete(key);
  };
}

// Exports an instance of the PopUpsPublishSubscriber class for global use.
export const PopUpsService = new PopUpsPublishSubscriber();

// Utility class for opening and closing pop-ups through the PopUpsService.
class PopUps {

  // Opens a pop-up by publishing data to subscribers of a specific key.
  open = (key, data) => {
    PopUpsService.publish(key, data);
  };

  // Closes a pop-up by publishing a null value to subscribers of a specific key.
  close = (key) => {
    PopUpsService.publish(key, null);
  };
}

// Exports an instance of the PopUps class for global use.
export default new PopUps();