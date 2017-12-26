const {animation_easing} = require('../animation/easing');

/////////////////////////////////
//         BEGIN: shims        //
/////////////////////////////////

// requestAnimationFrame
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

// cancelAnimationFrame
window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)}

// array.indexOf
if (!Array.prototype.indexOf) { 
    Array.prototype.indexOf = function(obj, start) {
         for (var i = (start || 0), j = this.length; i < j; i++) {
             if (this[i] === obj) { return i; }
         }
         return -1;
    }
}

/////////////////////////////////
//         END: shims          //
/////////////////////////////////

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
    domElementExists(element){
        if ((typeof(element) != 'undefined') && (element != null)) return true;
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
                requestAnimationFrame(tick);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            } else {
                console.log('scroll done');
                window.scrollTo(0, scrollTargetY);
            }
        }

        // call it once to get started
        tick();
    },
    stopDefault: function(event){
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    },
    /**
     * @param [object] options
     *        - [string] url
     *        - [bool] return_json
     *        - [function] callback
     *
     * @return [string | false(on error)]
     */
    ajax: function(options)
    {
        let request = new XMLHttpRequest();
        let data = null;

        
        request.open('GET', options.url, true);
        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    if (options.return_json) {
                        data = JSON.parse(this.responseText);
                    } else {
                        data = this.responseText ;
                    }
                } else {
                    data = false;
                }

                // function to run once data has been retrieved
                options.callbackFnc(data);
            }
        };

        request.send();
        request = null;
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


export {jUtility};