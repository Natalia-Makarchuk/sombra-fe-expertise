### Here you can find a clear, modular approach to theme customization and UI component styling, leveraging Ant Design and styled-components.

**Main features overview**
`index.tsx`: The entry point for the React application. This file sets up the global providers, including React's context and Ant Design's ConfigProvider for theme customization. It also mounts the root component of the app to the DOM.

`theme.ts`: Contains the custom theme settings for Ant Design components. This theme configuration is passed to the ConfigProvider to ensure that the custom styles are applied globally across all Ant Design components used within the application.

`color-palette.ts`: Defines a centralized color palette that is used throughout the application, including within the theme.ts for theming Ant Design components and the ui-kit for consistent styling.

`UI-Kit Folder`: A collection of styled component examples that demonstrate how to extend and customize standard UI components (e.g., buttons, inputs) using styled-components and the Ant Design library.