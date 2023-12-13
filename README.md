# Legionary

Legionary - website designed to create personalized workout routines using AI.

## Description

### Motivation:

The inspiration behind Legionary stems from a personal quest for an ideal workout routine. I found myself immersed in the challenge of discovering a fitness routine that precisely aligned with my individual needs and goals. Frustrated with the generic workout plans available online, I wondered if there was a more personalized and efficient way to curate exercise routines tailored to the unique requirements of each individual.

### Project Purpose:

Legionary was conceived to address the common struggle of finding a suitable workout routine that caters to specific fitness objectives and preferences. Leveraging the power of the OpenAI API, this project seeks to revolutionize the way people approach fitness by offering a dynamic and personalized solution to the age-old question: "What workout routine is right for me?"

By utilizing OpenAI's gpt-3.5-turbo-1106 API, it generates customized workout routines based on user choices such as fitness goals, age category, body type, fitness level, place for workouts, etc. This project caters to the diverse needs of individuals, ensuring that everyone can access a workout plan uniquely suited to their lifestyle and aspirations. Moreover, by hosting PostgreSQL database users can create their own accounts and save workouts so that they access them at any time.

## Technologies

### Frontend - Next.js and Styled Components:

Next.js was chosen over Create React App (CRA) for its advanced features and benefits. Next.js offers automatic code splitting, and a robust plugin system, contributing to improved performance and SEO optimization. The framework's simplicity and scalability make it an ideal choice for my project, which is why I made time to learn and get used to this framework before I proceeded with development.

Styled Components, a CSS-in-JS library, was employed for styling to enhance the developer experience. The decision was motivated by several factors: dynamic styling, avoiding global namespace pollution, clean and readable code.

### Backend - Node.js and Express.js:

Node.js was selected for the backend due to its event-driven, non-blocking I/O architecture. Node.js also ensures a consistent JavaScript codebase across the entire stack, simplifying development and maintenance. Express.js, a minimal and flexible Node.js web application framework, was chosen for its simplicity and ease of use.

### Database - PostgreSQL:

PostgreSQL was opted since I thought that relational database management system would suit the best for this website.

## Challenges

### API Response Formatting:

One significant challenge encountered during the development process was handling the OpenAI API responses, which were returned as string-type data without a predictable structure. This posed difficulties in dividing the responses into different sections for presentation on the frontend. After thorough research, it was discovered that, starting from the summer of 2023, OpenAI allowed the provision of a schema to tailor the response structure. Consequently, a schema, designed as an object consisting of arrays and objects, was declared. This approach enabled targeted extraction of information, allowing for a more user-friendly display of the generated workout routines on the frontend.

### Dynamic User Interaction:

Implementing a dynamic user interface that efficiently displayed questions and adjusted styling based on user choices posed another challenge. Particularly, recording and modifying user answers while enabling the flexibility for users to revisit and alter their selections required careful consideration. After investing time and effort, an effective solution was devised. By leveraging Redux Toolkit, the application seamlessly managed state changes, facilitating dynamic updates to the website pages based on user interactions. This not only enhanced the user experience but also streamlined the handling of user responses.

### Enhancing User-Friendliness:

To ensure the website's intuitiveness and user-friendliness while waiting for OpenAI responses, additional effort was dedicated to refining the frontend. This involved thoughtful design choices and the implementation of Redux Toolkit to smoothly transition between different pages based on the application's state. Moreover, I implemented [UIBall's](https://uiball.com/ldrs/) loaders to create a seamless and responsive experience, making it easy for users to navigate and interact with the workout routine generation process.

## Conclusion

Overcoming these challenges involved a combination of research, experimentation, and testing. The solutions not only addressed the technical issues but also contributed to an improved overall user experience, aligning with the project's goal of providing a user-friendly and personalized workout routine generation platform.