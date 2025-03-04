import RandomColor from "./components/random-color-generator/RandomColor"
import ImageSlider from "./components/image-slider/ImageSlider"
import LoadMoreData from "./components/load-more-data/index"
import QrCodeGenerator from "./components/qr-code-generator"


function App() {


  return (
    <>
      {/* Random Color generator */}
          {/* <RandomColor/> */}

      {/* Image slider */}
          {/* <ImageSlider url= {"https://picsum.photos/v2/list"} /> */}

      {/* {Load more data} */}
        {/* < LoadMoreData/> */}
      {/* QR-CODE_GENERTOR */}
          <QrCodeGenerator />
      
    </>
  )
}

export default App
