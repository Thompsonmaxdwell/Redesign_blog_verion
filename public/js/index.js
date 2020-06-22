import selectElement from './navSection/navToggle';
import{clickRightBtn} from  './carouselSelection/RightBtnSlide';
import{clicklefttBtn} from './carouselSelection/LeftBtnSlide';
import{Arrange_Carousel_image} from './carouselSelection/ArrangementCarousel';

   
import
   {
    btn_right,
    btn_left, 
    carousel_ul , 
    carousel_width,
    carousel_track,

    health_sl_rg,
    health_sl_lf,
    health_carousel_ul, 
    health_carousel_width ,
    health_carousel
   }
   from './carouselSelection/carouselElement'

Arrange_Carousel_image(carousel_ul, carousel_width);
Arrange_Carousel_image(health_carousel_ul, health_carousel_width);

clickRightBtn(carousel_track, btn_right);
clickRightBtn(health_carousel, health_sl_rg)

clicklefttBtn(carousel_track, btn_left);
clicklefttBtn(health_carousel, health_sl_lf)
