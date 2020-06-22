export function slideToMove(carousel_track, current, target_slide){
    carousel_track.style.transform = 'translate(-'+ target_slide.style.left  + ')'
    current.classList.remove('current_slid');
    target_slide.classList.add('current_slid');
}
