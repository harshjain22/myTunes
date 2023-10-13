import ReactDOM from 'react-dom/client';
import App from './App';

// bridge b/w App.js & index.html 

const htmlDiv = document.getElementById('root');
const root = ReactDOM.createRoot(htmlDiv);
root.render(<App/>);
