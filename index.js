const app = angular.module("myApp", []);
app.controller("controlador", function ($scope) {
  $scope.distancia = 0;
  $scope.PrecioKm = function () {
    if ($scope.distancia <= 0) {
      return ($scope.distancia = 0);
    }
    if ($scope.distancia <= 300) {
      return 250;
    }
    if ($scope.distancia > 300 && $scope.distancia <= 1000) {
      return 250 + 30 * ($scope.distancia - 300);
    } else {
      return 250 + 30 * (1000 - 300) + 20 * ($scope.distancia - 1000);
    }
  };
  $scope.calcularDescuento = function () {
    if ($scope.PrecioKm() >= 500) {
      return $scope.PrecioKm() * 0.1;
    }
    return 0;
  };
  $scope.Pago = function () {
    return $scope.PrecioKm() - $scope.calcularDescuento();
  };
});
