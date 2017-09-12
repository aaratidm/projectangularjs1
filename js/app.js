var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.devices = ['Windows', 'MacOS'];
    $scope.request = ['Check Out', 'Check In', 'Maintainance']
    $scope.setMake = function() {
    if ($scope.selectedDevice == 'Windows' )
        $scope.make = ['Lenovo','HP','DELL']
    else
       if ($scope.selectedDevice == 'MacOS' ) 
          $scope.make = ['MacBookPro 15 inch', 'MacBookPro 13 inch']
    };
    /*
    $scope.setRequest = function() {
    if ($scope.selectedRequest == 'Check In' )
        //Display Checked Out and Maintenance devices
        $scope.listAvailableCheckIn()
        //display in tablular form with checkboxes and allow multiple selections to be updated with an action "CheckIn"
        //display in tablular form with checkboxes and allow multiple selections to be updated with an action "CheckOut"
        //table device asset tag, status, checkedout by, shelf location, comments, description
    else
        //Display only CheckedIn device 
        $scope.listAvailableCheckOut()
        //display in tablular form with checkboxes and allow multiple selections to be updated with an action "CheckOut"
        //table device asset tag, status, checkedout by, For Class, comments, description
    }
    //list all devices that match the selections
    //display in a table with checkboxes for selection
    //will need authorization to list sheets
    //$scope.listDevices(d,m,s,a){
       
   // return arrayAssetTags
    //}
    */
    $scope.Numbers ={};
$scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
    $scope.setMake();
    //$scope.setRequest();
});