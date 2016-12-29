function setActive(id){
  $("#english").removeClass('active');
  $("#korean").removeClass('active');
  $("#chinese").removeClass('active');
  $("#japanese").removeClass('active');
  $("#"+id).addClass('active');
}

function goToByScroll(selector){
    $('html,body').animate({scrollTop: $(selector).offset().top - 30},'slow');
    return false;
}

function changeScrollArrow(selector) {
	var sign = '&darr;';
	if($(selector).offset().top < $(window).scrollTop()) sign = '&uarr;';
	else if($(selector).offset().top - $(window).scrollTop() < 1) sign = '-';
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