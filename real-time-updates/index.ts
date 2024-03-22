/**
 * Manages real-time communication with a server for live updates on items using WebSocket connections.
 * This class handles establishing and maintaining a WebSocket connection using SignalR, subscribing 
 * to updates for specific items, and broadcasting these updates to relevant parts of the application.
 * 
 * It provides methods to start and stop the connection, subscribe and unsubscribe from item updates,
 * and automatically manages reconnection logic to ensure the application remains responsive and up-to-date.
 * Event handlers for item creation, updates, and errors are defined and can be easily extended.
 *
 * @param {string} authToken (optional) Authentication token for securing the WebSocket connection.
 */

import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState
} from '@microsoft/signalr';

// Import configuration constants (URLs and settings)
import { SERVER_URL } from './config';
import { WEBSOCKET_PATH, WEBSOCKET_RECONNECTION_DELAY } from './config';

// Import application-wide actions and state retrieval (e.g., for auth tokens)
import appActions, { getState } from './state/actions';

// Enum for different types of notifications the client can receive from the server
export enum NotificationTypes {
  ItemCreated = 'ItemCreated',
  ItemUpdated = 'ItemUpdated',
  ErrorOccurred = 'Error'
}

// Enum for server-side methods the client can call to subscribe or unsubscribe from updates
enum SubscriptionMethods {
  SubscribeToUpdate = 'SubscribeToUpdate',
  UnsubscribeFromUpdate = 'UnsubscribeFromUpdate'
}

// Enum to identify different sections or components that might subscribe to updates
export enum Sections {
  RecentItems = 'RecentItems',
  Dashboard = 'Dashboard',
  ItemHistory = 'ItemHistory'
}

class RealTimeUpdates {
  private connection: HubConnection = null;
  private subscriptions: Map<string, any> = new Map();
  private reconnectionTimer: NodeJS.Timeout;

  constructor() {
    this.initializeConnection();
  }

  // Initialize the WebSocket connection using SignalR
  initializeConnection = (authToken: string | null = null) => {
    this.connection = new HubConnectionBuilder()
      .withUrl(`${SERVER_URL}/${WEBSOCKET_PATH}`, {
        transport: HttpTransportType.WebSockets, // Use WebSockets for real-time connection
        skipNegotiation: true, // Skip negotiation step, required for WebSocket transport
        accessTokenFactory: () => authToken || getState().user?.authToken // Provide auth token dynamically
      })
      .build();

    // Setup event listeners for different notifications
    this.connection.on(NotificationTypes.ItemCreated, this.onItemCreated);
    this.connection.on(NotificationTypes.ItemUpdated, this.onItemUpdated);
    this.connection.on(NotificationTypes.ErrorOccurred, this.onErrorOccurred);
  };

  // Attempt to start the connection
  private startConnection = async () => {
    try {
      await this.connection.start();
    } catch (error) {
      console.error('Connection start error', error.message);
    }
  };

  // Stop the WebSocket connection
  public stopConnection = async () => {
    try {
      await this.connection.stop();
    } catch (error) {
      console.error('Connection stop error', error.message);
    }
  };

  // Subscribe to updates for a specific item
  public subscribe = async (itemId) => {
    if (this.connection.state === HubConnectionState.Disconnected) {
      await this.startConnection();
    }

    try {
      await this.connection.send(SubscriptionMethods.SubscribeToUpdate, itemId);
    } catch (error) {
      console.warn(error.message);
    }
  };

  // Unsubscribe from updates for a specific item
  private unsubscribe = async (itemId) => {
    try {
      await this.connection.send(SubscriptionMethods.UnsubscribeFromUpdate, itemId);
    } catch (error) {
      console.warn(error.message);
    }
  };

  // Handle item updated notifications
  private onItemUpdated = (itemId, data) => {
    this.subscriptions.forEach((subscriber) => {
      if (subscriber.itemId === itemId) {
        subscriber.callback(NotificationTypes.ItemUpdated, itemId, data);
      }
    });
  };

  // Handle item created notifications
  private onItemCreated = (itemId, data) => {
    this.subscriptions.forEach((subscriber) => {
      if (subscriber.itemId === itemId) {
        subscriber.callback(NotificationTypes.ItemCreated, itemId, data);
      }
    });
  };

  // Handle errors
  private onErrorOccurred = (error) => {
    console.warn(error.message || 'Real-time update internal error');
  };

  // Setup a timer to drop the connection if there are no subscriptions
  private setupReconnectionTimer = () => {
    clearTimeout(this.reconnectionTimer);

    this.reconnectionTimer = setTimeout(() => {
      if (!this.subscriptions.size) {
        this.stopConnection().finally(() => { });
      }
      clearTimeout(this.reconnectionTimer);
    }, WEBSOCKET_RECONNECTION_DELAY);
  };

  onSubscribe = async (section, itemId, callback) => {
    if (this.subscriptions.has(section)) {
      const subscriber = this.subscriptions.get(section);

      // Unsubscribe the existing subscription before creating a new one
      await this.onUnsubscribe(section, subscriber.itemId);
    }
    await this.subscribe(itemId);

    this.subscriptions.set(section, {
      itemId,
      callback
    });
  };

  onUnsubscribe = async (section, itemId) => {
    await this.unsubscribe(itemId);
    this.subscriptions.delete(section);

    // If there are no more active subscriptions, consider dropping the connection
    if (!this.subscriptions.size) {
      this.setupReconnectionTimer();
    }
  };
}

export default new RealTimeUpdates();
