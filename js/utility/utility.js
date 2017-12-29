const jUtility = {
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
    stopDefault: function(event){
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    },
    /**
     * @param [object] options
     *        - [string] url
     *        - [bool] return_json
     *        - [function] callback
     *        - [obj] passed_props
     *
     * @return [string | false(on error)]
     */
    ajax: function(options){
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

                let passed_props = (null === options.passed_props) ? null : options.passed_props;

                // function to run once data has been retrieved
                options.callback(data, passed_props);
            }
        };

        request.send();
        request = null;
    },
    getMonthsArray: function(){
        return [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
    },
    debounce : function(func, wait, immediate) {
        /** Taken from Underscore.js
            
            SUMMARY: 
            Returns a function, that, as long as it continues to be invoked, will not be triggered. 
            The function will be called after it stops being called for N milliseconds.
            If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

            EXAMPLE:
            var func_ref = function() {
                function_with_params(param1, param2);
            }

            jUtility.debounce(func_ref, 1000, true)
    
         */

        var timeout;

        return function() {
            var context     = this;
            var args    = arguments;
            
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            
            var callNow = immediate && !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            
            if (callNow) {
                func.apply(context, args);
            }
        };
    },
}

const setEnvironment = function(){
    /////////////////////////////////////////////////
    //            catch screen touches             //
    /////////////////////////////////////////////////
    window.touching_screen = false;
    
    jUtility.addEvent(document.body, 'touchstart', function(){
        touching_screen = !touching_screen;
    });

    jUtility.addEvent(document.body, 'touchend', function(){
        touching_screen = !touching_screen;
    });

    //////////////////////////////////
    //            shims             //
    //////////////////////////////////
    
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
}


export {jUtility, setEnvironment};