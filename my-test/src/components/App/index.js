import './App.scss';

import sky from '../../assets/images/sky.png';
import mountain from '../../assets/images/mountain.png';
import hill from '../../assets/images/hill.png';
import filter1 from '../../assets/images/filter1.png';
import filter2 from '../../assets/images/filter2.png';

import Header from '../Header';
import Footer from '../Footer';
import Title from '../Title';

function App() {
  return (
    <div className="app">
      <img className="app_image1" src={sky} alt="sky picture" />
      <img className="app_image2" src={mountain} alt="mountain picture" />
      <img className="app_image3" src={hill} alt="hill picture" />
      <img className="app_filter1" src={filter1} alt="filter on pictures" />
      <img className="app_filter2" src={filter2} alt="an other filter on pictures" />
      <Header />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
