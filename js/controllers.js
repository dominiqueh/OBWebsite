(function() {

  angular.module('entries', [])
  .controller ("entryCtrl", entryCtrl)

  /* ************************************************************************** */
  /* Image Upload Form Control ******************************************************************* */
  /* ************************************************************************** */


  /* ************************************************************************** */
  /* Hard Coded Images ******************************************************************* */
  /* ************************************************************************** */

  function entryCtrl ($scope) {
    $scope.tempPhoto = {}

    // $scope.photos = [
    //   {
    //     title : 'Stairway to Heaven',
    //     image : '../image/blackwhite/stairwaytoheaven.jpg',
    //     category : 'travel',
    //   },
    //   {
    //     title : 'Rita',
    //     image : '../image/color/RitaLumbersexual.jpg',
    //     category : 'portrait',
    //   },
    //   {
    //     title : 'Doorception',
    //     image : '../image/blackwhite/doorway.jpg',
    //     category : 'travel',
    //   },
    // ]

    /* ************************************************************************** */
    /* Tricksty Stuff to Get Filter To Work ******************************************************************* */
    /* ************************************************************************** */

  $scope.entryIncludes = ['travel','event','portrait']

  $scope.includeEntry = function(entry) {
    var i = $.inArray(photo, $scope.photoIncludes);
    if (i > -1) {
      $scope.photoIncludes.splice(i, 1);
    } else {
      $scope.photoIncludes.push(photo);
    }
  }

  /* ************************************************************************** */
  /* Entry Filter ******************************************************************* */
  /* ************************************************************************** */

  $scope.photoFilter = function (photo) {
    if ($scope.photoIncludes.length > 0) {
      if ($.inArray(photo.category, $scope.photoIncludes) < 0){
      return;
    }
    return photo;
  }
}

  $scope.addPhoto = function (){
    console.log("addingPhoto", $scope.tempPhoto)
    $scope.photos.push($scope.tempPhoto)
    $scope.tempPhoto = {}
  }

}


}());
