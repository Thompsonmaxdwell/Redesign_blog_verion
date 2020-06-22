import{btn_right} from './carouselElement';
import{slideToMove} from './carouselfunctions'



export const clickRightBtn = (health_carousel_track, right_btn)=>{

  right_btn.addEventListener('click', function(e){
     const current_slide = health_carousel_track.querySelector('.current_slid')
     const nextSlide = current_slide.nextElementSibling;
   
      slideToMove(health_carousel_track, current_slide, nextSlide);
 }) 
}
