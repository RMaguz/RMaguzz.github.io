/* Slider 1*/
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
		window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
		if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
		window.revapi1 = jQuery(window.revapi1);
		if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
		revapi1.revolutionInit({
				revapi:"revapi1",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"815,750,600,500",
				perspective:600,
				perspectiveType:"global",
				editorheight:"815,750,600,500",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"",
						style:"persephone",
						h_offset:5,
						container:"layergrid"
					}
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 2*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider21"] = {once: RS_MODULES.modules["revslider21"]!==undefined ? RS_MODULES.modules["revslider21"].once : undefined, init:function() {
		window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
		if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
		window.revapi2 = jQuery(window.revapi2);
		if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
		revapi2.revolutionInit({
				revapi:"revapi2",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"835,750,600,500",
				perspective:600,
				perspectiveType:"global",
				editorheight:"835,750,600,500",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"",
						style:"custom",
						h_align:"right",
						v_align:"center",
						h_offset:50,
						v_offset:-50,
						direction:"vertical"
					}
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 3*/

var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider31"] = {once: RS_MODULES.modules["revslider31"]!==undefined ? RS_MODULES.modules["revslider31"].once : undefined, init:function() {
		window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_3_1") : window.revapi3;
		if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider31"].init()}); return;}
		window.revapi3 = jQuery(window.revapi3);
		if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_3_1"); return;}
		revapi3.revolutionInit({
				revapi:"revapi3",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"935,750,600,450",
				perspective:600,
				perspectiveType:"global",
				editorheight:"935,750,600,450",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"",
						style:"custom",
						h_align:"left",
						h_offset:50,
						v_offset:130,
						container:"layergrid"
					}
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};