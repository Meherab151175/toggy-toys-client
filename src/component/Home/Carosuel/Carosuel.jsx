const Carosuel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-screen">
        <img
          src="https://ae01.alicdn.com/kf/Hab7dd65e19844cf19f2d3917683adc8fJ/Fayee-FY004A-1-16-2-4G-6WD-RC-Car-Proportional-Control-US-Army-Military-Truck-RTR.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://static.uksportimports.com/media/wysiwyg/kci/all-ride-on-kids-cars.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-slate-300">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-slate-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ytimg.com/vi/cI7ayxASB8g/maxresdefault.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carosuel;
