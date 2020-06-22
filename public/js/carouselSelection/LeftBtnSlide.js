import{btn_left, carousel_track,  carousel_ul , carousel_width} from './carouselElement';
import{slideToMove} from './carouselfunctions'

// export const clicklefttBtn =  btn_left.addEventListener('click', function(e){
//     const current_slide = carousel_track.querySelector('.current_slid')
//     const nextSlide = current_slide.previousElementSibling;
//       slideToMove(carousel_track, current_slide, nextSlide)
// }) 



export const clicklefttBtn = (health_carousel_track, left_btn)=>{

  left_btn.addEventListener('click', function(e){
     const current_slide = health_carousel_track.querySelector('.current_slid')
     const nextSlide = current_slide.previousElementSibling;
   
      slideToMove(health_carousel_track, current_slide, nextSlide);
 }) 
}
