# Installation

Run the following commands

- Clone the application from https://github.com/carlosmarinho/react-auto-zone

  ```
  git clone https://github.com/carlosmarinho/react-auto-zone
  ```

- Get into the cloned application folder

  ```
  cd react-auto-zone
  ```

- Run npm install to install the package dependancy

  ```
  npm install
  ```

  ```
  npm run start
  ```

The last command (npm run servers) will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Website

Our website currently features a single, user-friendly page: the HomePage. Here, users can specify the details of a particular vehicle by selecting its year, make, model, and engine. This selection process is facilitated through a series of interconnected dropdown menus, where each choice influences the options available in the subsequent menu.

Here's a brief overview of the selection process:

1. **Select Year**: Users start by choosing the vehicle's year from the first dropdown menu. The available options are fetched dynamically from an API.

2. **Select Make**: Based on the selected year, the second dropdown menu is populated with the corresponding vehicle makes.

3. **Select Model**: Once a make is chosen, the third dropdown menu presents the user with a list of models specific to the selected year and make.

4. **Select Engine**: After selecting a model, the fourth dropdown menu allows users to select the engine type for the chosen vehicle.

### URL to run Local

- Open [http://localhost:3000](http://localhost:3000)

# Tecnologies used

While I have substantial experience with Redux and GraphQL client, I've also spent over 2 years gaining proficiency in Tanstack React Query, which I've effectively utilized in this project.

- Create React APP: https://create-react-app.dev/docs/getting-started/
- tanstack/react-query
- Jest: https://jestjs.io
- HTML / CSS / Javascript ES6+;
- Typescript: https://www.typescriptlang.org;
- React: https://reactjs.org
- React Hooks: https://react.dev;
- React Router: https://reactrouter.com/en/main;
- React Query: https://tanstack.com/query/v5;
- Styled Components: https://styled-components.com;
- React Testing Library / Jest: https://testing-library.com;

# About the application

## Development

- I started developing the application using React, Tanstack React Query, and Styled Components. Instead of using a traditional backend or a mock service, I utilized the [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/) to fetch vehicle data. The application is primarily focused on vehicle selection, allowing users to list and select vehicles based on year, make, and model. Despite the time constraints, I managed to implement the most interest tests, but the main purpuse is to let you know how can I implement testing with Jest and RTL.
- I decided to use all these technologies as they were prerequisites of the test, and to demonstrate how I can develop a real-world application using them.

### layouts

- The application features a simple yet effective layout structure, designed for ease of use and adaptability. The layout consists of a top menu for navigation and a middle container for content display. This structure is designed to easily accommodate changes and additions. It provides the flexibility to implement multiple layouts, catering to different needs and functionalities within the application.

### Hooks

- `useVehicleMakes`: This custom hook is responsible for fetching and managing the vehicle makes data. It interacts with the NHTSA Vehicle API to retrieve the available makes based on the selected year and provides functions to access and manipulate this data.

- `useVehicleModels`: This custom hook handles the fetching and state management of vehicle models. It communicates with the NHTSA Vehicle API to fetch the models corresponding to the selected year and make, and provides functions for accessing and manipulating this data.

### Tanstack

- The current setup of the Tanstack React Query store serves the basic needs of this small-scale application quite well. It provides a straightforward and efficient way to manage data fetching and state management. However, for larger or more complex applications, it would be beneficial to refine this setup. This could include optimizing caching strategies and query configurations to ensure more efficient data fetching and state management. By doing so, we can improve the reusability of queries across the application, leading to cleaner code and better performance.

### CSS styled components

- My usual strategy is to encapsulate CSS within the component itself, enhancing cohesion and readability. However, when dealing with extensive CSS, I find it beneficial to segregate it into a separate styled file. Even though this project does not involve extensive CSS, I opted for this approach to demonstrate its effectiveness in maintaining clean and manageable code.

### Test

- A significant amount of unit tests have been implemented using React Testing Library and Jest. Due to time constraints, it was not possible to achieve 100% test coverage, but efforts were made to cover the main functionality as possible.

- The following scripts are available for running the tests:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

### Future Improvements

#### @Todo

- A search for '@todo' in the codebase will reveal areas that require further refinement. These markers indicate potential enhancements or necessary adjustments that were identified during development.

- While significant effort has been made to adhere to clean code principles such as DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid), and SOLID, there is always room for improvement. Due to time constraints, some aspects of the code were developed more hastily than ideal. Future iterations of this project will focus on further refactoring and optimization.

#### Others

- Enhance the existing layout for improved user experience.
- Introduce different layout options to cater to various user preferences.
- Implement a user registration and login system for personalized experiences.
- Next, we will implement the engine select functionality. This feature will allow users to select an engine from a dropdown menu, which will be populated based on the selected year, make, and model.
