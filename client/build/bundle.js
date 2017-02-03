/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function() {
	  new UI();
	};
	
	window.onload = app;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Launches = __webpack_require__(2)
	var MapWrapper = __webpack_require__(3)
	
	var UI = function(){
	
	}
	
	
	
	
	module.exports = UI;

/***/ },
/* 2 */
/***/ function(module, exports) {



/***/ },
/* 3 */
/***/ function(module, exports) {

	var MapWrapper = function (container, coords, zoom) {
	  this.googleMap = new google.maps.Map(container, {
	    center: coords,
	    zoom: zoom
	  })
	}
	
	MapWrapper.prototype ={
	  addMarker: function(coords, contentInfo){
	    var infoWindow = new google.maps.infoWindow({
	      content: contentInfo
	    });
	    var maker = new google.maps.Marker({
	      position: coords,
	      map: this.googleMap,
	      animation: google.maps.Animation.DROP
	    });
	    marker.addListener('click', function (){
	      infoWindow.open(this.googleMap, marker);
	    });
	  },
	  centreMap: function (button, coords, zoom){
	    button.onclick = function () {
	      this.googleMap.setCenter(coords);
	      this.googleMap.setZoom(zoom);
	    }.bind(this);
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map