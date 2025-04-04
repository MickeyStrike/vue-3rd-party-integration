# Greeter Component

A standalone Vue.js component designed for seamless integration into third-party applications. The component renders a button with customizable text and logs a message to the console when clicked.

---

## Features
- **Self-contained**: Can be embedded in any application using a simple `<script>` tag.
- **Customizable**: Accepts props like `message` and `buttonText` for flexibility.
- **Scoped Styles**: Prevents style conflicts with the host application.
- **Virtual DOM**: Efficient rendering and updates.
- **Tested**: Includes unit tests to ensure expected behavior.

---

## Getting Started

### 1. Installation
Clone the repository and install dependencies:

```
git clone https://github.com/MickeyStrike/vue-3rd-party-integration.git
cd <project-directory>
npm install
```

### 2. Build the Component
To create the compiled JavaScript file for embedding:

```
npm run build
```

The compiled file will be available in the `dist/` folder as `compiled-greeter-component.js`.

---

## Integration

To use the component in a third-party application, follow these steps:

1. Include Vue.js and the compiled component script in your HTML file:
```
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="dist/compiled-greeter-component.js"></script>
```

2. Add a target element where the component will be mounted:
```
<div id="app"></div>
```

3. Initialize the component using JavaScript:
```
<script>
  Greeter.init('#app', {
    message: 'Hello from the host app!',
    buttonText: 'Click Me'
  });
</script>
```

## Testing
This project uses Vitest for testing. To run all test cases:
```
npm test
```

### Test Cases
1. Renders button with default text.
2. Logs message on button click.
3. Accepts custom button text.

## Why Virtual DOM?
The Virtual DOM is used in this project because:
1. It ensures efficient updates by minimizing direct DOM manipulations.
2. It provides consistent rendering behavior across environments.
3. It improves performance by batching updates and reducing reflows.


## Example Usage
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Greeter Component</title>
</head>
<body>
  <!-- Target element -->
  <div id="app"></div>

  <!-- Include Vue and Greeter -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  <script src="dist/compiled-greeter-component.js"></script>

  <!-- Initialize Greeter -->
  <script>
    Greeter.init('#app', {
      message: 'Hello from host!',
      buttonText: 'Greet Me'
    });
  </script>
</body>
</html>

```