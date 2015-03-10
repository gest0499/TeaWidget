var win1 = Titanium.UI.currentWindow;

var masterVw = Ti.UI.createView ({layout: 'vertical'});

var rawSlider = Ti.UI.createSlider({max: 2
									,min:-2});
//creates a blank label
var rawLabel = Titanium.UI.createLabel ({});

masterVw.add(rawSlider);	//layout not defined?
masterVw.add(rawLabel);

win1.add(masterVw);

updateSliders = function(e) {
	var raw = Math.atan(e.z/e.y);
	
	rawLabel.text = 'raw '+parseFloat(raw).toFixed(4);
	rawSlider.value = raw;
	
};

win1.addEventListener('focus', function() {Ti.Accelerometer.addEventListener("update", updateSliders);});

win1.addEventListener('blur', function() {Ti.Accelerometer.removeEventListener ("update", updateSliders);});

win1.open();
