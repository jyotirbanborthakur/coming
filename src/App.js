import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import video from "../src/images/back.mp4"
function App() {
  // let imageArr = ["back.jpg", "front.jpg", "right.jpg"];
  // let randomNum = Math.floor(Math.random() * imageArr.length);
  // let randomImage = imageArr[randomNum];
  return (
    // <div className="App" style={{backgroundImage: `url(${randomImage})`}}>

    
      <div className='overlay'>
      <video src={video} autoplay="autoplay" loop controls muted></video>
        <div className='container'>
          <Header/>
          <Footer/>
        </div>
        </div>
   
    // </div>

  );
}

export default App;
