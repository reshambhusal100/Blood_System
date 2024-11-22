import img1 from '../images/banner1.jpg';
import img2 from '../images/banner2.jpg';
import img3 from '../images/banner3.jpg';
import img4 from '../images/banner4.jpg';


// const ImageGallery = () => { // Renamed the component to start with an uppercase letter
//   const images = [img1, img2, img3, img4]; // Array of image imports

//   return (
//     <div>
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={`Image ${index + 1}`} />
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;



// const images = [
//   {
//     imgURL:
//       "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     imgAlt: "img-1"
//   },
//   {
//     imgURL:
//       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     imgAlt: "img-2"
//   },
//   {
//     imgURL:
//       "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     imgAlt: "img-3"
//   },
//   {
//     imgURL:
//       "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     imgAlt: "img-4"
//   }
// ];

// export default images;
const images = [
  {
    imgURL: img1,
    imgAlt: "img-1"
  },
  {
    imgURL: img2,
    imgAlt: "img-2"
  },
  {
    imgURL: img3,
    imgAlt: "img-3"
  },
  {
    imgURL: img4,
    imgAlt: "img-4"
  }
];

export default images;
