/**
 * Created by rerades on 6/4/16.
 */

// READ CSS AND GRABB STYLES
// -------------------------
!(function ($) {
    $.fn.classes = function (callback) {
        var classes = [];
        $.each(this, function (i, v) {
            var splitClassName = v.className.split(/\s+/);
            for (var j in splitClassName) {
                var className = splitClassName[j];
                if (-1 === classes.indexOf(className)) {
                    classes.push(className);
                }
            }
        });
        if ('function' === typeof callback) {
            for (var i in classes) {
                callback(classes[i]);
            }
        }
        return classes;
    };
})(jQuery);


// TODO: make it dynamic
cssFileName = "/assets/css/style.css";
// some classes that we whant to include
includedClasses = [];
includedClasses.push('[');
includedClasses.push(']');

$(function () {
    console.log('init');
    // gets array of classes defined in CSS
    // ------------------------------------
    allClasses = [];
    $.get(cssFileName, function (data) {
        // console.log(data);
        var patt1 = /\.([^.,}{ \r\n ]+)/g;
        var result = data.match(patt1);
        
        // console.log(result);
        
        result.forEach(function (value) {
            // we take of "."
            strippedValue = value.substring(1,value.length);
            // get read of "\"
            strippedValue = strippedValue.replace(/\\/g, '');
            // get only element not selector "clearfix:after" --> "clearfix"
            strippedValue = strippedValue.replace(/:([^:]*)$/, '');
            strippedValue = strippedValue.replace(':', '');

            // console.log(strippedValue);

            (allClasses.indexOf(strippedValue) === -1 && strippedValue !== '') ? allClasses.push(strippedValue) : null;
        });

        allClasses = allClasses.concat(includedClasses);
        //console.log(allClasses);

        // find and mark classes not defined in CSS but present in HTML
        // ------------------------------------------------------
        $('*').filter(function () {
            $(this).children().each(function(data){
                // console.log($(this).attr("class"));
                obj = $(this);
                tempClass = obj.classes();
                tempClass.forEach(function (value) {
                    if (allClasses.indexOf(value) == -1 && value.length > 0 )  {
                        obj.addClass('no-css');
                        console.warn('class not found: ' , value);
                    }
                });
            });
        });
    });
});
    