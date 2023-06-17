

const Gallery = () => {
//   const images = [
//     { src: 'image1.jpg', alt: 'Image 1' },
//     { src: 'image2.jpg', alt: 'Image 2' },
//     { src: 'image3.jpg', alt: 'Image 3' },
//     { src: 'image4.jpg', alt: 'Image 4' },
//     { src: 'image5.jpg', alt: 'Image 5' },
//     { src: 'image6.jpg', alt: 'Image 6' },
  //   ]; {images.map((image, index) => ())}

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
       
          <div
           
            className="border rounded overflow-hidden flex items-center justify-center"
          >
            <img
              src='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Metal_Toy_Alloy_Car_Diecasts_Toy_Vehicle-Not_Applicable-0f1d6-284232.jpg'
              className="w-full h-full object-contain"
            />
          </div>
          <div
           
            className="border rounded overflow-hidden flex items-center justify-center"
          >
            <img
              src='https://m.media-amazon.com/images/I/91aVOFkXTBL._AC_UF894,1000_QL80_.jpg'
              className="w-full h-full object-contain"
            />
          </div>
          <div
           
            className="border rounded overflow-hidden flex items-center justify-center"
          >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2r5e0cvL9a5w_21GMENKhTz2cCF5TYGOMUw&usqp=CAU'
              className="w-full h-full object-contain"
            />
          </div>
          <div
           
            className="border rounded overflow-hidden flex items-center justify-center"
          >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKujqnaaM6w5rk6gUN2tovRykKc_kqnpDVSA&usqp=CAU'
              className="w-full h-full object-contain"
            />
          </div>
          <div
           
            className="border rounded overflow-hidden flex items-center justify-center"
          >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDevPgDOUB7cVrVgDChn4jiDvG1N1Yq-kt4g&usqp=CAU'
              className="w-full h-full object-contain"
            />
          </div>
          <div
           
            className="border rounded overflow-hidden flex items-center justify-center"
          >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sqflKxVr9yKqHicqReW0ORQ5vFFSxaKMOQ&usqp=CAU'
              className="w-full h-full object-contain"
            />
          </div>
      </div>
    </div>
  );
};

export default Gallery;
