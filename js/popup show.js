//Переключение видимости скрытого блока
$(
  function(){ 
	$("#link-popup").click(function(e){
		e.preventDefault();						//отменяем переход по ссылке
		$(".popup-page").toggleClass("show");	//переключаем класс
		$(".overlay").toggleClass("show");
	  }
	);
	$(document).on('click', function(e) {		//при клике вне области этого открывшегося блока его закрыть!
	  if (!$(e.target).closest(".page-interval").length) {
		$('.popup-page').removeClass("show");
		$(".overlay").removeClass("show");
	  }
	  e.stopPropagation();
	});
  }
)