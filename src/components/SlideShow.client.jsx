import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const SlideShow = ({ classes, imageList }) => {

  const settings = {
    arrows: false,
  };

  const Images = imageList.map((image, index) => {
    return (
      <div key={index} className="each-slide-effect">
        <div style={{ backgroundImage: `url(${image.url})` }}></div>
      </div>
    );
  });

  return (
    <div className={classes}>
      <Fade {...settings}>
        {Images}
      </Fade>
    </div>
  );
};
