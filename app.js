(function() {

var portfolio = angular.module('portfolioApp', [])

portfolio.controller('userController', ['$scope', function($scope) {
      $scope.userMessageList = [];

      $scope.update = function(user) {
            $scope.userMessageList.push(angular.copy(user));
            console.log($scope.userMessageList);
      };

    }]);


portfolio.controller('mainController', function(){
    this.content = pageContent;
});
 
portfolio.controller('tabController', function(){
   this.tab = 1;
   this.selectTab = function(setTab) {
       this.tab= setTab;
   }
   this.isSelected = function(checkTab){
       return this.tab === checkTab;
   }
   
});


var pageContent = {
    name: "Scotty Terrier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed arcu eget quam posuere dignissim. Aliquam vulputate lorem metus, ut semper eros viverra vitae. Quisque efficitur mattis tellus a vehicula. Mauris accumsan tortor felis, non porta metus cursus sit amet. Fusce vel turpis quis risus mollis consectetur. Suspendisse varius nulla laoreet libero condimentum, ut laoreet arcu commodo. Donec lobortis nunc turpis, ut posuere diam hendrerit sed. Ut id metus dolor. Morbi luctus mollis venenatis. Quisque viverra elementum est, ac laoreet dui tincidunt a. Maecenas iaculis nulla nec massa malesuada egestas. Praesent condimentum sollicitudin sapien id cursus. Donec in velit congue, interdum enim ac, varius nisi. Nunc consequat vel mi a placerat. Donec commodo libero ligula, lobortis euismod lacus fringilla et. Sed et vestibulum sem, eget sodales magna. Phasellus dignissim dui massa, nec dapibus est mattis ut. Donec et aliquam metus. Duis fermentum, orci nec vestibulum bibendum, magna tellus consectetur libero, vel sagittis massa sem vitae nisi. Cras porta augue bibendum congue tincidunt. Maecenas cursus porta condimentum.",
    images: [
              "images/agriculture.jpg",
              "images/goat.jpg",
              "images/mushroom.jpg"
              
            ],
    aboutImage: "scotty.jpg",
    address: "5000 Forbes Ave, Pittsburgh PA",
    phone: "4122682000",
    email: "sterrierdog@andrew.cmu.edu", 
    
};

    
})();