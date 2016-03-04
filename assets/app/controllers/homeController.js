app.controller("HomeController", [
    "$location",
    "$log",
    "uiGmapGoogleMapApi",
    'LocationService',
    function ($location, $log, uiGmapGoogleMapApi, LocationService) {
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
                click: getPlace
            }
        };

        this.fetchall = function () {
            LocationService.listLocations()
                .then(function (result) {
                    this.locations = result.objects
                }, function (err) {
                    $log.error(err);
                });
        }

        this.saveLocation = function (payload) {
            LocationService.createLocation(payload)
                .then(function (status, data) {

                }, function (error) {
                    $log.error(error);
                })
        }
        // analyze the map click event
        function getPlace (map, e, point) {
            // body...
            var address, place_id, payload;

            var latLng = point[0].latLng;
            var lat = latLng.lat();
            var lng = latLng.lng();
            this.map.center = {
                longitude: lng,
                latitude: lat
            };
            this.$apply();
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({location: latLng}, function (result, status) {
                 if (status == google.maps.GeocoderStatus.OK) {
                    // result type can either be a string instance or an array of strings
                    if (result.types !== 'natural_feature' || result.types.indexOf('natural_feature') >= 0)  {
                        address = result[0].formatted_address;
                        place_id = result[0].place_id;
                    }
                }
            });
        }

        function cech (argument) {
            // body...
        }
        $log.debug("Home Controller Initialized");
    }]);