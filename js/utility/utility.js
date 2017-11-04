const {animation_easing} = require('../animation/easing');

///////////////////////////////////////////
// shim for window.requestAnimationFrame //
///////////////////////////////////////////
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back

var jUtility = {
    addEvent : function (el, eventName, handler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler);
        } else {
            el.attachEvent('on' + eventName, function(){
                handler.call(el);
            });
        }
    },
    documentSupportsFlexbox: function(){
        var s = document.body || document.documentElement, s = s.style;
        if( s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '' ) return true;
        return false;
    },
    scrollToTarget: function(scrollTargetY, speed, ease){
        // scrollTargetY: the target scrollY property of the window
        // speed: time in pixels per second
        // ease: easing equation to use
        // 
        // usage: // scrollToTarget(0, 1500, 'easeInOutQuint');
        
        var scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        scrollTargetY = scrollTargetY || 0;
        speed = speed || 2000;
        ease = ease || 'easeInOutQuint';
        currentTime = 0;

        // min time .1, max time .8 seconds
        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

        // add animation loop
        function tick() {
            currentTime += 1 / 60;

            var p = currentTime / time;
            var t = animation_easing[ease](p);

            if (p < 1) {
                requestAnimFrame(tick);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            } else {
                console.log('scroll done');
                window.scrollTo(0, scrollTargetY);
            }
        }

        // call it once to get started
        tick();
    }
}


function equalHeights(className) {
    var findClass = document.getElementsByClassName(className);
    var tallest = 0; 
  // Loop over matching divs
  for(i = 0; i < findClass.length; i++)
  {
    var ele = findClass[i];
    var eleHeight = ele.offsetHeight;
    tallest = (eleHeight>tallest ? eleHeight : tallest); /* look up ternary operator if you dont know what this is */
  }
  for(i = 0; i < findClass.length; i++)
  {
    findClass[i].style.height = tallest + "px";
  }
}


module.exports = jUtility;