import RandomColor from "./components/random-color-generator/RandomColor"
import ImageSlider from "./components/image-slider/ImageSlider"
import './App.css'

function App() {


  return (
    <>
      {/* Random Color generator */}
          {/* <RandomColor/> */}

      {/* Image slider */}
          <ImageSlider url= {"https://picsum.photos/v2/list"} />
    </>
  )
}

export default App
