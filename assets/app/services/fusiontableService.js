app.service(
    'FusiontableService',
    [
        "$http",
        "$q",
        "FUSION_TABLE_ID",
        "GOOGLE_API_KEY",
        "FUSION_TABLE_URL",
        function ($http, $q, FUSION_TABLE_ID, GOOGLE_API_KEY, FUSION_TABLE_URL) {
            'use strict';
            var url = FUSION_TABLE_URL + FUSION_TABLE_ID + '/?key' + GOOGLE_API_KEY
            return {
                listFusiontables: function () {
                    var defer = $q.defer();
                    $http({
                        method: "GET",
                        url: "url"
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
                        url: "url" + id + "/"
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
                        url: "url",
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
                        url: "url" + id + "/",
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
                        url: "url" + id + "/"
                    }).success(function (data, status, headers, config) {
                        defer.resolve(data);
                    }).error(function (data, status, headers, config) {
                        defer.reject(status);
                    });
                    return defer.promise;
                }

            };
}]);