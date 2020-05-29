!function(e){"use strict";function t(e,t){if(this.createTextRange){var a=this.createTextRange();a.collapse(!0),a.moveStart("character",e),a.moveEnd("character",t-e),a.select()}else this.setSelectionRange&&(this.focus(),this.setSelectionRange(e,t))}function a(e){var t=this.value.length;if(e="start"==e.toLowerCase()?"Start":"End",document.selection){var a,i,n,l=document.selection.createRange();return a=l.duplicate(),a.expand("textedit"),a.setEndPoint("EndToEnd",l),i=a.text.length-l.text.length,n=i+l.text.length,"Start"==e?i:n}return"undefined"!=typeof this["selection"+e]&&(t=this["selection"+e]),t}var i={codes:{46:127,188:44,109:45,190:46,191:47,192:96,220:92,222:39,221:93,219:91,173:45,187:61,186:59,189:45,110:46},shifts:{96:"~",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",48:")",45:"_",61:"+",91:"{",93:"}",92:"|",59:":",39:'"',44:"<",46:">",47:"?"}};e.fn.number=function(n,l,s,r){r="undefined"==typeof r?",":r,s="undefined"==typeof s?".":s,l="undefined"==typeof l?0:l;var u="\\u"+("0000"+s.charCodeAt(0).toString(16)).slice(-4),h=new RegExp("[^"+u+"0-9]","g"),o=new RegExp(u,"g");return n===!0?this.is("input:text")?this.on({"keydown.format":function(n){var u=e(this),h=u.data("numFormat"),o=n.keyCode?n.keyCode:n.which,c="",v=a.apply(this,["start"]),d=a.apply(this,["end"]),p="",f=!1;if(i.codes.hasOwnProperty(o)&&(o=i.codes[o]),!n.shiftKey&&o>=65&&90>=o?o+=32:!n.shiftKey&&o>=69&&105>=o?o-=48:n.shiftKey&&i.shifts.hasOwnProperty(o)&&(c=i.shifts[o]),""==c&&(c=String.fromCharCode(o)),8!=o&&45!=o&&127!=o&&c!=s&&!c.match(/[0-9]/)){var g=n.keyCode?n.keyCode:n.which;if(46==g||8==g||127==g||9==g||27==g||13==g||(65==g||82==g||80==g||83==g||70==g||72==g||66==g||74==g||84==g||90==g||61==g||173==g||48==g)&&(n.ctrlKey||n.metaKey)===!0||(86==g||67==g||88==g)&&(n.ctrlKey||n.metaKey)===!0||g>=35&&39>=g||g>=112&&123>=g)return;return n.preventDefault(),!1}if(0==v&&d==this.value.length?8==o?(v=d=1,this.value="",h.init=l>0?-1:0,h.c=l>0?-(l+1):0,t.apply(this,[0,0])):c==s?(v=d=1,this.value="0"+s+new Array(l+1).join("0"),h.init=l>0?1:0,h.c=l>0?-(l+1):0):45==o?(v=d=2,this.value="-0"+s+new Array(l+1).join("0"),h.init=l>0?1:0,h.c=l>0?-(l+1):0,t.apply(this,[2,2])):(h.init=l>0?-1:0,h.c=l>0?-l:0):h.c=d-this.value.length,h.isPartialSelection=v==d?!1:!0,l>0&&c==s&&v==this.value.length-l-1)h.c++,h.init=Math.max(0,h.init),n.preventDefault(),f=this.value.length+h.c;else if(45!=o||0==v&&0!=this.value.indexOf("-"))if(c==s)h.init=Math.max(0,h.init),n.preventDefault();else if(l>0&&127==o&&v==this.value.length-l-1)n.preventDefault();else if(l>0&&8==o&&v==this.value.length-l)n.preventDefault(),h.c--,f=this.value.length+h.c;else if(l>0&&127==o&&v>this.value.length-l-1){if(""===this.value)return;"0"!=this.value.slice(v,v+1)&&(p=this.value.slice(0,v)+"0"+this.value.slice(v+1),u.val(p)),n.preventDefault(),f=this.value.length+h.c}else if(l>0&&8==o&&v>this.value.length-l){if(""===this.value)return;"0"!=this.value.slice(v-1,v)&&(p=this.value.slice(0,v-1)+"0"+this.value.slice(v),u.val(p)),n.preventDefault(),h.c--,f=this.value.length+h.c}else 127==o&&this.value.slice(v,v+1)==r?n.preventDefault():8==o&&this.value.slice(v-1,v)==r?(n.preventDefault(),h.c--,f=this.value.length+h.c):l>0&&v==d&&this.value.length>l+1&&v>this.value.length-l-1&&isFinite(+c)&&!n.metaKey&&!n.ctrlKey&&!n.altKey&&1===c.length&&(p=d===this.value.length?this.value.slice(0,v-1):this.value.slice(0,v)+this.value.slice(v+1),this.value=p,f=v);else n.preventDefault();f!==!1&&t.apply(this,[f,f]),u.data("numFormat",h)},"keyup.format":function(i){var n,s=e(this),r=s.data("numFormat"),u=i.keyCode?i.keyCode:i.which,h=a.apply(this,["start"]),o=a.apply(this,["end"]);0!==h||0!==o||189!==u&&109!==u||(s.val("-"+s.val()),h=1,r.c=1-this.value.length,r.init=1,s.data("numFormat",r),n=this.value.length+r.c,t.apply(this,[n,n])),""===this.value||(48>u||u>57)&&(96>u||u>105)&&8!==u&&46!==u&&110!==u||(s.val(s.val()),l>0&&(r.init<1?(h=this.value.length-l-(r.init<0?1:0),r.c=h-this.value.length,r.init=1,s.data("numFormat",r)):h>this.value.length-l&&8!=u&&(r.c++,s.data("numFormat",r))),46!=u||r.isPartialSelection||(r.c++,s.data("numFormat",r)),n=this.value.length+r.c,t.apply(this,[n,n]))},"paste.format":function(t){var a=e(this),i=t.originalEvent,n=null;return window.clipboardData&&window.clipboardData.getData?n=window.clipboardData.getData("Text"):i.clipboardData&&i.clipboardData.getData&&(n=i.clipboardData.getData("text/plain")),a.val(n),t.preventDefault(),!1}}).each(function(){var t=e(this).data("numFormat",{c:-(l+1),decimals:l,thousands_sep:r,dec_point:s,regex_dec_num:h,regex_dec:o,init:this.value.indexOf(".")?!0:!1});""!==this.value&&t.val(t.val())}):this.each(function(){var t=e(this),a=+t.text().replace(h,"").replace(o,".");t.number(isFinite(a)?+a:0,l,s,r)}):this.text(e.number.apply(window,arguments))};var n=null,l=null;e.isPlainObject(e.valHooks.text)?(e.isFunction(e.valHooks.text.get)&&(n=e.valHooks.text.get),e.isFunction(e.valHooks.text.set)&&(l=e.valHooks.text.set)):e.valHooks.text={},e.valHooks.text.get=function(t){var a,i=e(t),l=i.data("numFormat");return l?""===t.value?"":(a=+t.value.replace(l.regex_dec_num,"").replace(l.regex_dec,"."),(0===t.value.indexOf("-")?"-":"")+(isFinite(a)?a:0)):e.isFunction(n)?n(t):void 0},e.valHooks.text.set=function(t,a){var i=e(t),n=i.data("numFormat");if(n){var s=e.number(a,n.decimals,n.dec_point,n.thousands_sep);return e.isFunction(l)?l(t,s):t.value=s}return e.isFunction(l)?l(t,a):void 0},e.number=function(e,t,a,i){i="undefined"==typeof i?"1000"!==new Number(1e3).toLocaleString()?new Number(1e3).toLocaleString().charAt(1):"":i,a="undefined"==typeof a?new Number(.1).toLocaleString().charAt(1):a,t=isFinite(+t)?Math.abs(t):0;var n="\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4),l="\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4);e=(e+"").replace(".",a).replace(new RegExp(l,"g"),"").replace(new RegExp(n,"g"),".").replace(new RegExp("[^0-9+-Ee.]","g"),"");var s=isFinite(+e)?+e:0,r="",u=function(e,t){return""+ +(Math.round((""+e).indexOf("e")>0?e:e+"e+"+t)+"e-"+t)};return r=(t?u(s,t):""+Math.round(s)).split("."),r[0].length>3&&(r[0]=r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(r[1]||"").length<t&&(r[1]=r[1]||"",r[1]+=new Array(t-r[1].length+1).join("0")),r.join(a)}}(jQuery);



jQuery(document).ready(function($){

	$.date = function(dateObject) {
		var d = new Date(dateObject);
		var day = d.getDate();
		var month = d.getMonth() + 1;
		var year = d.getFullYear();
		if (day < 10) {
			day = "0" + day;
		}

		if (month < 10) {
			month = "0" + month;
		}

		var date = day + "/" + month + "/" + year;

		return date;
	};

	var cache_url = $('.cache_url').attr('data-cache-url');

	setTimeout(function () {
		$('.wpspxbasket').addClass('shown');
	}, 2000);

	$('.wpspxbasket').on('click', function(e){
		$('.wpspxbasket-side-panel').addClass('show');
	});
	$('.wpspx-basket-close').on('click', function(e){
		e.preventDefault();
		$('.wpspxbasket-side-panel').removeClass('show');
	});

	var memberships;
	$.getJSON( cache_url + "memberships.json", function(json) {
		memberships = json;
	});

	var events;
	$.getJSON( cache_url + "events.json", function(json) {
		events = json;
	});

	$('.wpspxbasket').on('click', function(){
		var itemList = new Array();
		var basketContentsObject = jQuery.parseJSON(localStorage.getItem('spektrixBasket'));
		var spektrixClientConstantsObject = jQuery.parseJSON(localStorage.getItem('spektrixClientConstants'));

		var apiEndpoint = spektrixClientConstantsObject.data.apiEndpoint;
		var clientName = spektrixClientConstantsObject.data.clientName;
		var currencyChar = spektrixClientConstantsObject.data.currencyChar;
		var currencyDecimalPlaces = spektrixClientConstantsObject.data.currencyDecimalPlaces;
		var enabled = spektrixClientConstantsObject.data.enabled;
		var loginUrl = spektrixClientConstantsObject.data.loginUrl;
		var spektrixHost = spektrixClientConstantsObject.data.spektrixHost;
		var timeoutMinutes = spektrixClientConstantsObject.data.timeoutMinutes;
		var timestamp = spektrixClientConstantsObject.timestamp.timeoutMinutes;
		var transactionCommission = spektrixClientConstantsObject.timestamp.transactionCommission;

		console.log(basketContentsObject);

		var basketTotal = basketContentsObject.data.total;
		var totalDiscount = basketContentsObject.data.totalDiscount;
		var basketId = basketContentsObject.data.id;
		var customer = basketContentsObject.data.customer;
		var commissionAmount = basketContentsObject.data.transactionCommission.amount;
		var commissionWaived = basketContentsObject.data.transactionCommission.waived;

		var donations =  basketContentsObject.data.donations;
		$.each(donations, function(i, dn) {
			// .amount
			// .fund
			// 	// .id
			// .id
			// .isAnonymous
			// .recognitionName
			// .tributeName
			// .tributeTypeId
			itemList.push('<div class="wpspx-basket-item" data-basket-id="'+basketId+'"><div class="wpspx-remove" data-id="'+dn.id+'" data-type="donations"><a href="#" class="wpspx-remove-from-basket" aria-label="Remove this item" data-product_id="139"><i class="far fa-times"></i></a></div><div class="wpspx-item-info"><div class="wpspx-title"><span>Donation</span></div><div class="amount"><span class="wpspx-price-symbol">'+ currencyChar + $.number( dn.amount, currencyDecimalPlaces) +'</span></div></div></div>');
		});


		var giftVouchers = basketContentsObject.data.giftVouchers;
		var giftVouchershtml = new Array();
		$.each(giftVouchers, function(i, gv) {
			// .amount
			// .deliveryType
			// .fromName
			// .id
			// .message
			// .sendDate
			// .toName
			var sendDate = $.date(gv.sendDate);
			itemList.push('<div class="wpspx-basket-item" data-basket-id="'+basketId+'"><div class="wpspx-remove" data-id="'+gv.id+'" data-type="gift-vouchers"><a href="#" class="wpspx-remove-from-basket" aria-label="Remove this item" data-product_id="139"><i class="far fa-times"></i></a></div><div class="wpspx-item-info"><div class="wpspx-title"><span>Gift Voucher</span></div><div class="amount"><span class="wpspx-price-symbol">'+ currencyChar + $.number( gv.amount, currencyDecimalPlaces) +'</span></div><div class="view-additional-details"><i class="far fa-info-circle"></i></div><div class="additional-details"><dl><dt>From:</dt><dd>'+gv.fromName+'</dd><dt>To:</dt><dd>'+gv.toName+'</dd><dt>Message:</dt><dd>'+gv.message+'</dd><dt>Date to send:</dt><dd>'+sendDate+'</dd></dl></div></div></div>');
		});


		var membershipSubscriptions =  basketContentsObject.data.membershipSubscriptions;
		var membershipSubscriptionsMatches = membershipSubscriptions.map((obj) => ({basketID: obj.id, ...obj,
			...memberships.find(({
				id
			}) => id === obj.membership.id)
		}));
		// console.log(membershipSubscriptionsMatches);

		var donationsMatches = membershipSubscriptionsMatches.map(function(v, i) {
			return {
				membership: v,
				donation: donations[i]
			};
		})

		$.each(donationsMatches, function(i, ms) {
			// memberships
				// autoRenew
				// basketID
				// description
				// discount
				// expiryDate
				// htmlDescription
				// id
				// imageUrl
				// isRenewal
				// membership
					// id
				// name
				// price
				// startDate
				// thumbnailUrl
				// total
			// donation
				// amount
				// fund
					// id
				// id
				// isAnonymous
				// recognitionName
				// tributeName
				// tributeTypeId

			var total = ms.membership.total
			var price = ms.membership.price
			var discount = ms.membership.discount
			if (ms.donation) {
				var donationamount = ms.donation.amount
			} else {
				var donationamount = 0
		 	}
			var orginalprice = total + discount;
			var totalprice = orginalprice + donationamount;

			var startDate = $.date(ms.membership.startDate);
			var expiryDate = $.date(ms.membership.expiryDate);
			itemList.push('<div class="wpspx-basket-item" data-basket-id="'+basketId+'"><div class="wpspx-remove" data-id="'+ms.membership.basketID+'" data-type="membership-subscriptions"><a href="#" class="wpspx-remove-from-basket" aria-label="Remove this item" data-product_id="139"><i class="far fa-times"></i></a></div><div class="wpspx-item-info"><div class="wpspx-title"><span>'+ms.membership.name+'</span></div><div class="amount"><span class="wpspx-price-symbol">'+ currencyChar + $.number( totalprice, currencyDecimalPlaces)+'</span></div><div class="view-additional-details"><i class="far fa-info-circle"></i></div><div class="additional-details"><dl><dt>Starting:</dt><dd>'+startDate+'</dd><dt>Ending:</dt><dd>'+expiryDate+'</dd><dt>Auto renew?:</dt><dd>'+ms.membership.autoRenew+'</dd></dl></div></div></div>');
		});

		var merchandiseItems =  basketContentsObject.data.merchandiseItems;

		var tickets =  basketContentsObject.data.tickets;
		var eventMatches = tickets.map((obj) => ({eventID: obj.id, ...obj,
			...events.find(({
				id
			}) => id === obj.event.id)
		}));
		$.each(eventMatches, function(i, ti) {
			// band
				// id
			// barcode
			// delivered
			// discount
			// event
				// id
			// instance
				// id
			// id
			// offer
			 // id
			// planId
			// planName
			// price
			// total
			// seat // id
			// seatName
			// type // id

			var total = ti.total
			var price = ti.price
			var discount = ti.discount

			var orginalprice = total + discount;

			itemList.push('<div class="wpspx-basket-item data-basket-id="'+basketId+'""><div class="wpspx-remove" data-id="'+ti.id+'" data-type="tickets"><a href="#" class="wpspx-remove-from-basket" aria-label="Remove this item" data-product_id="139"><i class="far fa-times"></i></a></div><div class="wpspx-item-info"><div class="wpspx-title"><span>'+ti.name+'</span></div><div class="amount"><span class="wpspx-price-symbol">'+currencyChar+$.number( orginalprice, currencyDecimalPlaces)+'</span></div><div class="view-additional-details"><i class="far fa-info-circle"></i></div><div class="additional-details"><dl><dt>Seat:</dt><dd>'+ti.seatName+'('+ti.planName+')</dd></div></div></div>');
		});

		var itemCount =  giftVouchers.length + membershipSubscriptions.length + merchandiseItems.length + tickets.length + donations.length;

		$('.wpspx-total-items').html('<span>'+itemCount+' items in your basket</span>');
		$('.wpspx-basket-items').html(itemList);
		$('#wpspx-basket-total').html('<div class="wpspx-discount" data-waived="'+commissionWaived+'"><span>Booking Fee</span> <strong>'+currencyChar+$.number( commissionAmount, currencyDecimalPlaces)+'</strong></div><div class="wpspx-discount"><span>Discount</span> <strong>'+currencyChar+$.number( totalDiscount, currencyDecimalPlaces)+'</strong></div><div><strong>Subtotal</strong> <strong>'+currencyChar+$.number( basketTotal, currencyDecimalPlaces)+'</strong></div>');
		$('.view-additional-details').on('click', function(e){
			e.preventDefault();
			$(this).next().slideToggle();
		});
		$('.wpspx-remove').on('click', function(e){
			e.preventDefault();
			var removeID = $(this).attr('data-id');
			var type = $(this).attr('data-type');

			console.log("Basket ID:" + basketId);
			console.log("Item ID:" + removeID);
			console.log("Item Type:" + type);

			var settings = {
				// "async": true,
				// "crossDomain": true,
				"url": apiEndpoint + "basket/" +type+ "/" +removeID,
				"method": "DELETE",
				"xhrFields": {
					withCredentials: true
				}
				// "data": null,
				// "processData": false,
			}
			$.ajax(settings).done(function (response) {
				$(this).parent().remove();
				itemCount--;
				$('.wpspx-total-items').html('<span>'+ itemCount +' items in your basket</span>');
			}).fail(function(xhr, status, error) {
				console.log(xhr);

				// switch(xhr.status) {
				// 	case 404:
				// 		jQuery('.message').addClass('is-danger');
				// 		jQuery('.message .message-body').text('Invalid username or password');
				// 		setTimeout(function() {
				// 			jQuery('.message').show();
				// 			jQuery('#loginbutton span').removeClass('show');
				// 		},1000);
				// 		break;
				// 	case 401:
				// 		jQuery('.message').addClass('is-danger');
				// 		jQuery('.message .message-body').text('There was an error trying to log you in.');
				// 		setTimeout(function() {
				// 			jQuery('.message').show();
				// 			jQuery('#loginbutton span').removeClass('show');
				// 		},1000);
				// 		break;
				// 	default:
				// 		jQuery('.message').addClass('is-danger');
				// 		jQuery('.message .message-body').text('There was an error trying to log you in.');
				// 		setTimeout(function() {
				// 			jQuery('#loginbutton span').removeClass('show');
				// 			jQuery('.message').show();
				// 		},1000);
				// 		break;

			});

		});

	});

});
