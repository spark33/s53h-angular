function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
    return false;
}

function changeScrollArrow(id) {
	var sign = '&darr;';
	if($(id).offset().top < $(window).scrollTop()) sign = '&uarr;';
	else if($(id).offset().top - $(window).scrollTop() < 1) sign = '-';
	document.getElementById("scroll-button").innerHTML = sign;
}

function validateDates (checkinStr, checkoutStr) {
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
  }