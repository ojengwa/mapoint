app.service('FusiontableService', ["$http", "$q", function ($http, $q) {
    'use strict';
    return {
        listFusiontables: function () {
            var defer = $q.defer();
            $http({
                method: "GET",
                url: "fusiontable"
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        getFusiontable: function (id) {
            var defer = $q.defer();
            $http({
                method: "GET",
                url: "fusiontable" + id + "/"
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        createFusiontable: function (data) {
            var defer = $q.defer();
            $http({
                method: "POST",
                url: "fusiontable",
                data: data
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        updateFusiontable: function (id, data) {
            var defer = $q.defer();
            $http({
                method: "PUT",
                url: "fusiontable" + id + "/",
                data: data
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        deleteFusiontable: function (id) {
            var defer = $q.defer();
            $http({
                method: "DELETE",
                url: "fusiontable" + id + "/"
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        }

    };
}]);