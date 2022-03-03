import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Mobile Operating System</h1>
      <div className="os">
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </div>

      <h1>Mobile Manufacturers</h1>
      <div className="manufact">
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li className='nobullet'>Apple</li>
      </div>

    </div>
  );
}

export default App;
