app.controller("HomeController", [
    "$location",
    "$log",
    "uiGmapGoogleMapApi",
    function ($location, $log, uiGmapGoogleMapApi) {
        'use strict';
        this.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 10,
            pan: true,
            options: {
                disableDefaultUI: true
            },
            events: {
                click: get_place
            }
        };

        // analyze the map click event
        function get_place (map, e, args) {
            // body...
            $log.debug(map, e, args);
        }
        $log.debug("Home Controller Initialized");
    }]);