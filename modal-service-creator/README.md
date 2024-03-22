### This codebase introduces a flexible and modular approach to managing modal dialogs in a React application. 

**It consists of four core components:**

`PopUpsPublishSubscriber`: A class that manages the subscription and publication mechanism for modal events. It allows different parts of the application to subscribe to modal open/close events and publishes data to these subscribers.

`PopUps`: A utility class that provides a simplified interface for opening and closing modals by interacting with the PopUpsPublishSubscriber.

`AppModal Component`: Responds to modal events to display or hide modals with dynamic content, and demonstrates usage within a React component. Is responsible for showing modal and submodal. Submodal can be opened on top of modal.

`AppPopover` is a React component that manages and displays dynamic content in a popover UI overlay, utilizing a subscription model to respond to global open/close events. The component displays dynamic content in a specific, non-obstructive location on the page, similar to a modal but attached to elements like buttons without dimming the background.

Together, `AppModal` and `AppPopover` showcase a cohesive pattern for handling different types of UI overlays (modals and popovers) through a centralized, event-driven architecture. 
