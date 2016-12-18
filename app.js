
var hotelsite = angular.module('hotelsiteApp', [])

var englishContent = {
  home_intro: "Thanks for checking out Seoul 53 Hotel. Located in the heart of Seoul, we offer you a prime location between three subway lines and Seoul's main attractions. Experience the fusion of modern and traditional Seoul's hippest neighborhood, surrounded by up-and-coming restaurants and cafes. ",
  find_us_intro: "English Find Us Intro"
}

var koreanContent = {
  home_intro: "서울 53 호텔 인사동을 이용해 주셔서 감사합니다. 저희 호텔은 서울 시내의 중심에 위치해서 경복궁 등 여러 문화 유산들과 인사동, 북촌, 삼청동 등 유명 관광지까지 도보 여행을 즐길 수 있고 30분 이내에 쇼핑 명소인 명동, 동대문, 광장시장, 면세점들에 갈 수 있는 편리함을 제공합니다. 아울러 익선동 주변의 많은 음식점, 카페 등은 전통과 세련됨이 함께 하는 새로운 즐거움을 드릴 것입니다. 합리적인 가격에 즐길 수 있는 서울 도심 여행, 서울 53 호텔과 함께 하시기 바랍니다.",
  find_us_intro: "Korean Find Us Intro"
};
var japaneseContent ={
  home_intro: "Japanese Intro Text",
  find_us_intro: "Japanese Find Us Intro"
};
var chineseContent = {
  home_intro: "Chinese Intro Text",
  find_us_intro: "Chinese Find Us Intro"
};

hotelsite.controller('mainController', ['$scope', function($scope) {

  //LANGUAGE SETTER
  $scope.language = "english";
  $scope.content = englishContent;
  $scope.setLanguage = function(language){
    if(language == 'english') $scope.content = englishContent;
    if(language == 'korean') $scope.content = koreanContent;
    if(language == 'japanese') $scope.content = japaneseContent;
    if(language == 'chinese') $scope.content = chineseContent;
  };

  // TAB SELECTOR
  $scope.tab = 1;
  $scope.selectTab = function(setTab) {
       $scope.tab= setTab;
    }
    $scope.isSelected = function(checkTab){
       return $scope.tab === checkTab;
    }
}]);

hotelsite.controller('tabController', ['$scope', function($scope){
}]);

hotelsite.controller('reservationController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  
  $scope.formCompletion = {
    completed: false,
    confirmed: false
  };
  $scope.reservation = {};

  $scope.resetReservation = function(){
    console.log("resetting reservation");
    $scope.formCompletion = { 
      completed: false,
      confirmed: false
    };
    $scope.reservation = {};
    $scope.selectTab(1);
  };

  $scope.confirmReservation = function(reservation){
    console.log("confirming reservation");
    $scope.formCompletion.confirmed = true;
  }

  $scope.uncompleteForm = function(){
    console.log("uncompleting form.");
    $scope.formCompletion.completed = false;
  };

  $scope.completeForm = function(user){
    if(this.validateInputs(user)){
      $scope.formCompletion.completed = true;
    }
    else return false;
  };

  $scope.validateInputs = function (user) {
    /* all elements but the room will be auto-checked by HTML. */
    if(user == undefined || !user.room)
    {
      alert("Please select a room.");
      return false;
    }
    /* come back and make this more elegant with ng-message later! */
    var checkinStr = user.checkin;
    var checkoutStr = user.checkout;
    var today = moment();
    var checkin = moment(checkinStr);
    if(!checkin.isValid())
    {
      alert("Invalid Check In Date.");
      return false;
    }
    var checkout = moment(checkoutStr);
    if(!checkout.isValid())
    {
      alert("Invalid Check Out Date.");
      return false;
    }
    if(!(checkin.isAfter(today)))
    {
      alert("Please check your check-in date!");
      return false;
    }
    if(!(checkout.isAfter(checkin)))
    {
      alert("Please check your check-out date!");
      return false;
    }

    return true;
  };

  $scope.submitForm = function (reservationData) {
    var dest = $location.path() + './reservation-confirm.php';
    $http.post(dest, $scope.reservation).success(function(response){
      console.log("successful post.");
      console.log(response);
      $scope.confirmReservation();
    }).error(function(error){
      console.log(error);
      alert("Unsuccessful reservation. Please send us your reservation information via e-mail.");
    });
  };

  $scope.processReservation = function(user) {
    if(this.validateInputs(user)){
      console.log("All data was correctly entered!");
      this.submitForm(user);
    }
    else return false;
  };
}]);