# Milk Project

Milk is a playful and creative project designed to invite friends to hang out during my visit to New York City. Instead of sending multiple text messages, I built a website featuring a slow-motion, looping video of milk being poured on my head, complete with customizable subtitles. By using query parameters like `?name=Dan`, the subtitles dynamically update to personalize the invitation for each friend.

## Features

- **Dynamic Subtitles**: Personalize the invitation using query parameters (e.g., `?name=Dan`).
- **Responsive Design**: Styled with Tachyons for a clean and responsive layout.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ddouangkesone/milk.git
   cd milk
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Deployment

This project is deployed using **GitHub Pages**. To deploy updates:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The live site is available at: [https://ddouangkesone.github.io/milk/](https://ddouangkesone.github.io/milk?name=insertYourNameHere)

## Using Query Parameters

You can customize the subtitles by appending a query parameter to the URL. For example:

- `https://ddouangkesone.github.io/milk/?name=Dan`  
  This will display a personalized invitation for "Dan."

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tachyons**: A functional CSS framework for rapid UI development.
- **gh-pages**: For deploying the app to GitHub Pages.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.
