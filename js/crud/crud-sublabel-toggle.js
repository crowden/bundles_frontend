import {jUtility} from './utility/utility';
import Velocity from 'velocity-animate';

export default function(sublabel_container){
    const sublabel_containers = [].slice.call(document.querySelectorAll(sublabel_container));

    sublabel_containers.map(function(container, index){
        let container_trigger = container.querySelector('.js-expand-sublabel');
        let container_content = container.querySelector('.sublabel');

        jUtility.addEvent(container_trigger, 'click', function(e){
            jUtility.stopDefault(e);
            
            let has_style = container_content.getAttribute("style") ? true : false;
            
            if (!has_style){
                Velocity(container_content, "slideDown", { 
                    duration: 750, 
                    easing: 'easeInOut', 
                    complete: function(){
                        Velocity(container_trigger, {
                            rotateZ: '+=45',
                            backgroundColor: "#003f12",
                        }, {
                            duration: 200
                        })
                    }
                });
            } else {
                Velocity(container_content, "slideUp", { 
                    duration: 400, 
                    easing: 'easeIn', 
                    complete: function(){
                        container_content.removeAttribute('style');
                        
                        Velocity(container_trigger, {
                            rotateZ: '-=45',
                            backgroundColor: "#007f26",
                        }, {
                            duration: 200
                        })
                    }
                });
            }
        });
    });
}

