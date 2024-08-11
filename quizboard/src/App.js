import './App.css';
import Quiz from './Component/Main';

const questionsData = {
  "questions": [
    {
      "question": "What is the output of 2 + 2 in JavaScript?",
      "options": ["3", "4", "5", "6"],
      "correct": ["4"],
      "type": "single"
    },
    {
      "question": "Which of the following are JavaScript frameworks for building user interfaces?",
      "options": ["React", "Vue.js", "Angular", "Svelte"],
      "correct": ["React", "Vue.js", "Angular", "Svelte"],
      "type": "multiple"
    },
    {
      "question": "Which of the following are HTTP methods?",
      "options": ["GET", "POST", "PUT", "DELETE"],
      "correct": ["GET", "POST"],
      "type": "multiple",
      "tags": ["HTTP", "Methods", "GET", "POST", "PUT", "DELETE", "REST", "API", "Web Development", "Protocols", "Backend"]
    },
    {
      "question": "Which of the following is a state management library for React?",
      "options": ["Redux", "MobX", "Recoil", "Context API"],
      "correct": ["Redux"],
      "type": "single",
      "tags": ["JavaScript", "React", "State Management", "Redux", "MobX", "Recoil", "Context API", "Frontend", "Web Development", "Libraries"]
    },
    {
      "question": "Which of the following are continuous integration tools?",
      "options": ["Jenkins", "Travis CI", "CircleCI", "GitHub Actions"],
      "correct": ["Jenkins", "Travis CI", "GitHub Actions"],
      "type": "multiple",
      "tags": ["CI/CD", "DevOps", "Jenkins", "Travis CI", "CircleCI", "GitHub Actions", "Automation", "Build", "Deployment", "Integration"]
    },
    {
      "question": "Which of the following is a NoSQL database?",
      "options": ["MongoDB", "Firebase", "Cassandra", "DynamoDB"],
      "correct": ["MongoDB"],
      "type": "single",
      "tags": ["NoSQL", "Database", "MongoDB", "Firebase", "Cassandra", "DynamoDB", "Data Storage", "Scalability", "Backend", "Schema-less"]
    },
    {
      "question": "Which of the following are frontend build tools?",
      "options": ["Webpack", "Parcel", "Rollup", "Gulp"],
      "correct": ["Webpack", "Parcel"],
      "type": "multiple",
      "tags": ["JavaScript", "Build Tools", "Webpack", "Parcel", "Rollup", "Gulp", "Frontend", "Tooling", "Module Bundler", "Transpiler"]
    },
    {
      "question": "Which of the following are web performance metrics?",
      "options": ["LCP", "FID", "CLS", "TTFB"],
      "correct": ["LCP", "FID", "CLS"],
      "type": "multiple",
      "tags": ["Web Performance", "Metrics", "LCP", "FID", "CLS", "TTFB", "Optimization", "SEO", "Frontend", "User Experience"]
    },
    {
      "question": "Which of the following is a cloud provider?",
      "options": ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      "correct": ["AWS"],
      "type": "single",
      "tags": ["Cloud", "AWS", "Azure", "Google Cloud", "DigitalOcean", "Infrastructure", "Scalability", "Hosting", "Services", "Cloud Computing"]
    },
    {
      "question": "Which of the following are methods for securing web applications?",
      "options": ["XSS", "CSRF", "CORS", "Encryption"],
      "correct": ["CSRF", "Encryption"],
      "type": "multiple",
      "tags": ["Web Security", "XSS", "CSRF", "CORS", "Encryption", "Authentication", "Authorization", "Web Development", "Protocols", "Backend"]
    },
    {
      "question": "Which of the following is a JavaScript library for building user interfaces?",
      "options": ["React", "Vue.js", "Angular", "Svelte"],
      "correct": ["React"],
      "type": "single",
      "tags": ["JavaScript", "Frontend", "React", "Vue.js", "Angular", "Svelte", "UI", "Libraries", "Web Development", "SPA"]
    },
    {
      "question": "Which of the following are testing libraries for React?",
      "options": ["Jest", "Enzyme", "Testing Library", "Cypress"],
      "correct": ["Jest", "Enzyme", "Cypress"],
      "type": "multiple",
      "tags": ["JavaScript", "React", "Testing", "Jest", "Enzyme", "Testing Library", "Cypress", "Frontend", "Web Development", "Libraries"]
    },
    {
      "question": "Which of the following is a state management library for JavaScript?",
      "options": ["Redux", "MobX", "Recoil", "Vuex"],
      "correct": ["Redux"],
      "type": "single",
      "tags": ["JavaScript", "State Management", "Redux", "MobX", "Recoil", "Vuex", "Frontend", "Web Development", "Libraries", "UI"]
    },
    {
      "question": "Which of the following are programming paradigms?",
      "options": ["OOP", "Functional", "Procedural", "Declarative"],
      "correct": ["OOP", "Functional"],
      "type": "multiple",
      "tags": ["Programming", "Paradigms", "OOP", "Functional", "Procedural", "Declarative", "Concepts", "Development", "Software Engineering", "Languages"]
    },
    {
      "question": "Which of the following is a method for securing APIs?",
      "options": ["OAuth", "JWT", "API Keys", "HMAC"],
      "correct": ["OAuth"],
      "type": "single",
      "tags": ["API", "Security", "OAuth", "JWT", "API Keys", "HMAC", "Web Development", "Authentication", "Authorization", "Protocols"]
    },
    {
      "question": "Which of the following are methods for optimizing website performance?",
      "options": ["Caching", "Compression", "Minification", "Lazy Loading"],
      "correct": ["Caching", "Minification"],
      "type": "multiple",
      "tags": ["Web Performance", "Optimization", "Caching", "Compression", "Minification", "Lazy Loading", "Frontend", "Web Development", "SEO", "User Experience"]
    },
    {
      "question": "Which of the following are methods for improving website accessibility?",
      "options": ["ARIA", "Semantic HTML", "Keyboard Navigation", "Alt Text"],
      "correct": ["ARIA", "Alt Text"],
      "type": "multiple",
      "tags": ["Web Accessibility", "ARIA", "Semantic HTML", "Keyboard Navigation", "Alt Text", "Frontend", "Web Development", "SEO", "User Experience", "Design"]
    },
    {
      "question": "Which of the following is a design pattern for structuring code?",
      "options": ["MVC", "MVVM", "Singleton", "Observer"],
      "correct": ["MVC"],
      "type": "single",
      "tags": ["Design Patterns", "MVC", "MVVM", "Singleton", "Observer", "Software Engineering", "Development", "Architecture", "Code Structure", "Best Practices"]
    },
    {
      "question": "Which of the following are backend frameworks for Node.js?",
      "options": ["Express", "Koa", "NestJS", "Sails.js"],
      "correct": ["Express", "Koa", "NestJS"],
      "type": "multiple",
      "tags": ["Node.js", "Backend", "Frameworks", "Express", "Koa", "NestJS", "Sails.js", "Web Development", "Server", "JavaScript"]
    },
    {
      "question": "Which of the following are programming languages used for web development?",
      "options": ["JavaScript", "Python", "Ruby", "PHP"],
      "correct": ["JavaScript", "Python"],
      "type": "multiple",
      "tags": ["Programming", "Languages", "JavaScript", "Python", "Ruby", "PHP", "Web Development", "Frontend", "Backend", "Development"]
    },
    {
      "question": "Which of the following is a library for data visualization?",
      "options": ["D3.js", "Chart.js", "Highcharts", "Three.js"],
      "correct": ["D3.js"],
      "type": "single",
      "tags": ["JavaScript", "Data Visualization", "Libraries", "D3.js", "Chart.js", "Highcharts", "Three.js", "Frontend", "Web Development", "UI"]
    },
    {
      "question": "Which of the following are types of machine learning?",
      "options": ["Supervised", "Unsupervised", "Reinforcement", "Transfer"],
      "correct": ["Supervised", "Unsupervised", "Reinforcement"],
      "type": "multiple",
      "tags": ["Machine Learning", "Types", "Supervised", "Unsupervised", "Reinforcement", "Transfer", "AI", "Data Science", "Python", "Algorithms"]
    },
    {
      "question": "Which of the following is a CSS preprocessor?",
      "options": ["SASS", "LESS", "Stylus", "PostCSS"],
      "correct": ["SASS"],
      "type": "single",
      "tags": ["CSS", "Preprocessors", "SASS", "LESS", "Stylus", "PostCSS", "Frontend", "Web Development", "Styling", "Design"]
    },
    {
      "question": "Which of the following are tools for containerization?",
      "options": ["Docker", "Kubernetes", "Podman", "LXC"],
      "correct": ["Docker", "Kubernetes"],
      "type": "multiple",
      "tags": ["Containerization", "Tools", "Docker", "Kubernetes", "Podman", "LXC", "DevOps", "Cloud", "Infrastructure", "Deployment"]
    },
    {
      "question": "Which of the following is a framework for building Progressive Web Apps (PWAs)?",
      "options": ["Angular", "React", "Vue.js", "Svelte"],
      "correct": ["Angular"],
      "type": "single",
      "tags": ["JavaScript", "Frameworks", "PWAs", "Angular", "React", "Vue.js", "Svelte", "Frontend", "Web Development", "UI"]
    }
    // Add more questions here
  ]
};

function App() {
  return (
    <Quiz questions={questionsData.questions}/>
  );
}

export default App;
