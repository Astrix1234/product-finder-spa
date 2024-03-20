# Product Finder

<img src="/public/Screenshot.png"  />

The task involves implementing a Single Page Application (SPA) with a single
view. The application utilizes an available API endpoint to display a paginated
list of products. In the interface, users can filter products by their
identifier using a text field at the top of the view. The list of products is
presented in a table, showing the identifier, name, year, and color of each
product. Clicking on a row in the table reveals a modal displaying the full
details of the selected product. Pagination allows browsing through 5 products
per page, with users navigating between pages using "next" and "previous"
arrows. Handling API errors is crucial; in case of an erroneous response, users
are notified of the issue. Additionally, the application enables sharing links
with filters and pagination via the URL address.

## Technical Overview

The task was completed using React and TypeScript technologies along with
various libraries for state management, user interface styling, and testing. The
application communicates with an external API to fetch and display data.

The final application consists of two main parts: presentation components and
state management logic.

For the presentation layer, the Material-UI library was utilized, providing
ready-to-use UI components along with icons. Additionally, Styled Components and
Emotion libraries were used for defining component styles in a modular and
manageable way. Modern Normalize was applied to ensure consistent appearance
across different browsers.

In terms of state management, the Zustand library was used, allowing for simple
and efficient state management. Two states were implemented: a loading state for
data fetching and a filtering state for product filtering.

React Router DOM library was employed for routing between pages, enabling
navigation within the application. Each page was divided into separate modules
using lazy loading, allowing components to load dynamically only when needed,
thus enhancing the efficiency and speed of the application.

Regarding testing, Testing Library and Jest libraries were used for creating
unit and integration tests. React Testing Library enables testing user
interactions similarly to real user behavior.

Additionally, the following libraries were used:

- Formik: for form handling, facilitating easy state management and form
  validation.
- React Helmet Async: for dynamic management of page metadata, impacting SEO
  optimization.
- React Loader Spinner: for displaying loading indicators during data fetching.
- React Toastify: for displaying toast messages of various types of operations
  in the user interface.

The application communicates with an external API to fetch a paginated list of
products, filter results, and obtain detailed information about a selected
product.
