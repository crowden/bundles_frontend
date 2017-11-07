import {jUtility} from './utility';
import Velocity from 'velocity-animate';

export default class ToggleHiddenContainer
{
    static toggle(containers_with_triggers){
        const found_containers = [].slice.call(document.querySelectorAll(containers_with_triggers));
        
        found_containers.map(function(container, index){
            let trigger = container.querySelector('.js-trigger-show-hide');
            let hidden_container = container.querySelector('.js-toggle-show-hide');

            jUtility.addEvent(trigger, 'click', function(e){
                jUtility.stopDefault(e);
                
                let has_style = hidden_container.getAttribute("style") ? true : false;
                
                if (!has_style){
                    Velocity(hidden_container, "slideDown", { 
                        duration: 750, 
                        easing: 'easeInOut', 
                        complete: function(){
                            Velocity(trigger, {
                                rotateZ: '+=45',
                                backgroundColor: "#003f12",
                            }, {
                                duration: 200
                            })
                        }
                    });
                } else {
                    Velocity(hidden_container, "slideUp", { 
                        duration: 400, 
                        easing: 'easeIn', 
                        complete: function(){
                            hidden_container.removeAttribute('style');
                            
                            Velocity(trigger, {
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
}