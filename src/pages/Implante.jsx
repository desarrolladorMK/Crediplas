import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Implante.css";

const Implante = () => {
  return (
    <div>
      <Header />
      <div className="media-layout">
        {/* Dos imágenes en fila */}
        <div className="row two-images">
          <img src="/implantes5.png" alt="Imagen 1" className="img-1" />
          <img src="/implantes6.png" alt="Imagen 2" className="img-2" />
        </div>

        {/* Imagen debajo */}
        <div className="row">
          <img src="/implantes1.png" alt="Imagen 3" className="img-3" />
        </div>

        {/* Video y otra imagen al lado */}
        <div className="row video-image-row">
  <div className="video-img-pair">
    <video 
      src="/video-implante1.mp4"
      controls
      autoPlay
      muted
      loop
      className="video-same-size"
    />
    <img src="/implantes2.png" alt="Imagen 4" className="img-same-size" />
  </div>
</div>


        {/* Imagen final debajo del video */}
        <div className="row">
          <img src="/implantes 4.png" alt="Imagen 5" className="img-5" />
        </div>
        <div className="row">
          <img src="/implantes3.png" alt="Imagen 6" className="img-6" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Implante;
