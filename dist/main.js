/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hidden {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB","sourcesContent":[".hidden {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameElements/card.js":
/*!**********************************!*\
  !*** ./src/gameElements/card.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint no-constant-condition: 0 */

/**
 * Factory function to build a card object
 *
 * @param {string} cardName
 * @param {string} cardSuit
 * @returns {object} a card object.
 */
const generateCard = (cardName, cardSuit) => {
	const getCardValue = () => {
		if (typeof cardName === "string") {
			if (cardName === "A") {
				return 11;
			}

			return 10;
		}

		return cardName;
	};

	const getMonetaryValue = () => {
		if (typeof cardName === "string") {
			return 500;
		}

		return 100;
	};

	const printCard = () => `(${cardSuit}:${cardName})`;

	return {
		cardName,
		cardSuit,
		cardValue: getCardValue(),
		cardMonetaryValue: getMonetaryValue,
		printCard,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateCard);


/***/ }),

/***/ "./src/gameElements/cardBank.js":
/*!**************************************!*\
  !*** ./src/gameElements/cardBank.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/gameElements/card.js");


/**
 * Factory function to build a cardBank object
 * @returns {object} cardBank object.
 */
const cardBank = () => {
	const CARDS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
	const SUITS = ["♣", "♦", "♥", "♠"];

	// IIFE to generate a carDeck. Only one is required.
	const cardsDeck = (() => {
		const deck = [];

		for (const suit of SUITS) {
			deck.push(...CARDS.map((card) => (0,_card__WEBPACK_IMPORTED_MODULE_0__["default"])(card, suit)));
		}

		return deck;
	})();

	const selectRandomCard = () => {
		const randomIndex = Math.floor(Math.random() * cardsDeck.length);
		let randomCard = cardsDeck[randomIndex];

		// Select a random card & remove it from the deck.
		[randomCard] = cardsDeck.splice(randomIndex, 1);

		return randomCard;
	};

	return {
		cardsDeck,
		selectRandomCard,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardBank);


/***/ }),

/***/ "./src/gameElements/gameElements.js":
/*!******************************************!*\
  !*** ./src/gameElements/gameElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardBank": () => (/* reexport safe */ _cardBank__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "generateCard": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/gameElements/card.js");
/* harmony import */ var _cardBank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardBank */ "./src/gameElements/cardBank.js");
/* gameElements module */







/***/ }),

/***/ "./src/gameParticipants/dealer.js":
/*!****************************************!*\
  !*** ./src/gameParticipants/dealer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameplay_gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameplay/gameplay */ "./src/gameplay/gameplay.js");
/* harmony import */ var _renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderGame/renderGame */ "./src/renderGame/renderGame.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* eslint import/no-cycle: [0] */




const dealer = () => {
	const cards = [];

	const participantIdentifier = "dealer";

	const dealerTurn = (sessionDeck, playerHand) => {
		let currentHandValue = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getHandValue)(cards);

		while (currentHandValue < 17) {
			const newCard = sessionDeck.selectRandomCard();
			cards.push(newCard);

			currentHandValue = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getHandValue)(cards);
			(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__.renderParticipantInfo)({ cards, participantIdentifier });
		}

		console.log("DEALER CARDS:");
		console.log(cards);

		// Once dealer hits 17 or more, game is finished and hands must be reviewed

		const gameStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkGameStatus)(playerHand, cards, true);

		(0,_gameplay_gameplay__WEBPACK_IMPORTED_MODULE_0__.finishGame)(gameStatus.winner);
	};

	return { cards, dealerTurn, participantIdentifier };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dealer);


/***/ }),

/***/ "./src/gameParticipants/gameParticipants.js":
/*!**************************************************!*\
  !*** ./src/gameParticipants/gameParticipants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dealer": () => (/* reexport safe */ _dealer__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "player": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/gameParticipants/player.js");
/* harmony import */ var _dealer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dealer */ "./src/gameParticipants/dealer.js");
/* eslint import/no-cycle: [0] */







/***/ }),

/***/ "./src/gameParticipants/player.js":
/*!****************************************!*\
  !*** ./src/gameParticipants/player.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameplay_gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameplay/gameplay */ "./src/gameplay/gameplay.js");
/* harmony import */ var _renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderGame/renderGame */ "./src/renderGame/renderGame.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* eslint import/no-cycle: [0] */





const player = () => {
	const cards = [];

	const participantIdentifier = "player";

	// TODO: remember to add bet

	const hit = (sessionDeck, dealerHand) => {
		console.log("CLICKED");
		const hitCard = sessionDeck.selectRandomCard();
		cards.push(hitCard);

		console.log("PLAYER CARDS:");
		console.log(cards);

		(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__.renderParticipantInfo)({ cards, participantIdentifier });

		const gameStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkGameStatus)(cards, dealerHand, false);

		if (gameStatus.isFinished) {
			(0,_gameplay_gameplay__WEBPACK_IMPORTED_MODULE_0__.finishGame)(gameStatus.winner);
		}
	};

	return {
		cards,
		hit,
		participantIdentifier,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


/***/ }),

/***/ "./src/gameplay/finishGame.js":
/*!************************************!*\
  !*** ./src/gameplay/finishGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderGame_renderGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderGame/renderGame */ "./src/renderGame/renderGame.js");


/**
 * Finishes the game by showing a summary
 * and hiding game buttons
 * @param {string} winner
 */
const finishGame = (winner) => {
	// Show game summary
	const endMessage =
		winner === "player"
			? "Congratulations: YOU WON!"
			: "Too bad. YOU LOST :(";

	(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_0__.renderGameResults)(endMessage);

	// Disable buttons
	const gameButtons = document.querySelector(".player-buttons-container");
	gameButtons.classList.add("hidden");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (finishGame);


/***/ }),

/***/ "./src/gameplay/gameController.js":
/*!****************************************!*\
  !*** ./src/gameplay/gameController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay/gameplay.js");
/* harmony import */ var _renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderGame/renderGame */ "./src/renderGame/renderGame.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




const gameController = () => {
	// Replace nodes through cloning, to prevent eventListener duplicates
	const playerHitButton = document.querySelector("#hit-button");
	const playerStayButton = document.querySelector("#stay-button");

	const newHitButton = playerHitButton.cloneNode(true);
	const newStayButton = playerStayButton.cloneNode(true);

	playerHitButton.replaceWith(newHitButton);
	playerStayButton.replaceWith(newStayButton);

	// Initialize game data structures

	const { sessionPlayer, sessionDealer, sessionDeck } = (0,_gameplay__WEBPACK_IMPORTED_MODULE_0__.startGame)();

	// Render game board
	(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__.renderBoard)();

	(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__.renderParticipantInfo)(sessionPlayer);
	(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_1__.renderParticipantInfo)(sessionDealer);

	const gameAfterFirstDeal = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkGameStatus)(
		sessionPlayer.cards,
		sessionDealer.cards,
		false
	);

	if (gameAfterFirstDeal.isFinished) {
		(0,_gameplay__WEBPACK_IMPORTED_MODULE_0__.finishGame)(gameAfterFirstDeal.winner);

		return;
	}

	newHitButton.addEventListener("click", () =>
		sessionPlayer.hit(sessionDeck, sessionDealer.cards)
	);
	newStayButton.addEventListener("click", () =>
		sessionDealer.dealerTurn(sessionDeck, sessionPlayer.cards)
	);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameController);


/***/ }),

/***/ "./src/gameplay/gameplay.js":
/*!**********************************!*\
  !*** ./src/gameplay/gameplay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "finishGame": () => (/* reexport safe */ _finishGame__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "startGame": () => (/* reexport safe */ _startGame__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./src/gameplay/startGame.js");
/* harmony import */ var _finishGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finishGame */ "./src/gameplay/finishGame.js");
/* eslint import/no-cycle: [0] */







/***/ }),

/***/ "./src/gameplay/startGame.js":
/*!***********************************!*\
  !*** ./src/gameplay/startGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameParticipants_gameParticipants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameParticipants/gameParticipants */ "./src/gameParticipants/gameParticipants.js");
/* harmony import */ var _gameElements_gameElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameElements/gameElements */ "./src/gameElements/gameElements.js");
/* eslint import/no-cycle: [0] */




const startGame = () => {
	// Prior to start a game, make sure that .game-results displays nothing

	const gameResults = document.querySelector(".game-results");

	gameResults.innerHTML = "";

	// Enable player buttons
	const gameButtons = document.querySelector(".player-buttons-container");
	gameButtons.classList.remove("hidden");

	// Initialize details
	const sessionDeck = (0,_gameElements_gameElements__WEBPACK_IMPORTED_MODULE_1__.cardBank)();

	const sessionPlayer = (0,_gameParticipants_gameParticipants__WEBPACK_IMPORTED_MODULE_0__.player)();
	const sessionDealer = (0,_gameParticipants_gameParticipants__WEBPACK_IMPORTED_MODULE_0__.dealer)();

	// Assign the first 2 random for each participant
	for (let requiredCards = 0; requiredCards < 2; requiredCards += 1) {
		const newPlayerCard = sessionDeck.selectRandomCard();
		const newDealerCard = sessionDeck.selectRandomCard();

		sessionPlayer.cards.push(newPlayerCard);
		sessionDealer.cards.push(newDealerCard);
	}

	return {
		sessionPlayer,
		sessionDealer,
		sessionDeck,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);


/***/ }),

/***/ "./src/renderGame/renderBoard.js":
/*!***************************************!*\
  !*** ./src/renderGame/renderBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderBoard = () => {
	const gameBoard = document.querySelector(".board-container");
	gameBoard.classList.remove("hidden");

	const gameButtons = document.querySelector(".player-buttons-container");
	gameButtons.classList.remove("hidden");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);


/***/ }),

/***/ "./src/renderGame/renderCards.js":
/*!***************************************!*\
  !*** ./src/renderGame/renderCards.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const renderCards = (targetID, cardsToRender) => {
	const targetContainer = document.querySelector(`#${targetID}-cards`);

	targetContainer.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatCardHand)(cardsToRender);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);


/***/ }),

/***/ "./src/renderGame/renderGame.js":
/*!**************************************!*\
  !*** ./src/renderGame/renderGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoard": () => (/* reexport safe */ _renderBoard__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "renderCards": () => (/* reexport safe */ _renderCards__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "renderGameResults": () => (/* reexport safe */ _renderGameResults__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "renderHandSum": () => (/* reexport safe */ _renderHandSum__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "renderParticipantInfo": () => (/* reexport safe */ _renderParticipantInfo__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard */ "./src/renderGame/renderBoard.js");
/* harmony import */ var _renderCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCards */ "./src/renderGame/renderCards.js");
/* harmony import */ var _renderHandSum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHandSum */ "./src/renderGame/renderHandSum.js");
/* harmony import */ var _renderParticipantInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderParticipantInfo */ "./src/renderGame/renderParticipantInfo.js");
/* harmony import */ var _renderGameResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderGameResults */ "./src/renderGame/renderGameResults.js");
/* eslint import/no-cycle: [0] */










/***/ }),

/***/ "./src/renderGame/renderGameResults.js":
/*!*********************************************!*\
  !*** ./src/renderGame/renderGameResults.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderGameResults = (gameResults) => {
	const resultsDisplay = document.querySelector(".game-results");

	resultsDisplay.innerHTML = gameResults;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGameResults);


/***/ }),

/***/ "./src/renderGame/renderHandSum.js":
/*!*****************************************!*\
  !*** ./src/renderGame/renderHandSum.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderHandSum = (target, sum) => {
	const sumContainer = document.querySelector(`#${target}-sum`);
	sumContainer.innerHTML = sum;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHandSum);


/***/ }),

/***/ "./src/renderGame/renderParticipantInfo.js":
/*!*************************************************!*\
  !*** ./src/renderGame/renderParticipantInfo.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGame */ "./src/renderGame/renderGame.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* eslint import/no-cycle: [0] */




const renderParticipantInfo = (participant) => {
	(0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.renderCards)(participant.participantIdentifier, participant.cards);

	const participantSum = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getHandValue)(participant.cards);
	(0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.renderHandSum)(participant.participantIdentifier, participantSum);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderParticipantInfo);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkGameStatus": () => (/* binding */ checkGameStatus),
/* harmony export */   "formatCardHand": () => (/* binding */ formatCardHand),
/* harmony export */   "getHandValue": () => (/* binding */ getHandValue)
/* harmony export */ });
const getHandValue = (cards) => {
	let handValue = 0;

	for (const card of cards) {
		handValue += card.cardValue;
	}

	return handValue;
};

const formatCardHand = (cards) =>
	"".concat(...cards.map((card) => card.printCard()));

const checkGameStatus = (playerHand, dealerHand, isFinished) => {
	const checkResult = {
		isFinished,
		winner: null,
	};

	const playerHandValue = getHandValue(playerHand);
	const dealerHandValue = getHandValue(dealerHand);

	// This condition is called only when the dealer's turn is over

	if (checkResult.isFinished) {
		if (playerHandValue > 21) {
			checkResult.winner = "dealer";
			return checkResult;
		}

		if (dealerHandValue > 21) {
			checkResult.winner = "player";
			return checkResult;
		}

		checkResult.winner =
			playerHandValue > dealerHandValue ? "player" : "dealer";

		return checkResult;
	}

	if (playerHandValue === 21 || dealerHandValue > 21) {
		checkResult.isFinished = true;
		checkResult.winner = "player";

		return checkResult;
	}

	if (dealerHandValue === 21 || playerHandValue > 21) {
		checkResult.isFinished = true;
		checkResult.winner = "dealer";

		return checkResult;
	}

	return checkResult;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameplay_gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay/gameController */ "./src/gameplay/gameController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const startGameButton = document.querySelector("#new-game-button");

startGameButton.addEventListener("click", () => (0,_gameplay_gameController__WEBPACK_IMPORTED_MODULE_0__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JsYWNramFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JsYWNramFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVFbGVtZW50cy9jYXJkLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9nYW1lRWxlbWVudHMvY2FyZEJhbmsuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVFbGVtZW50cy9nYW1lRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVQYXJ0aWNpcGFudHMvZGVhbGVyLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9nYW1lUGFydGljaXBhbnRzL2dhbWVQYXJ0aWNpcGFudHMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVQYXJ0aWNpcGFudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9nYW1lcGxheS9maW5pc2hHYW1lLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9nYW1lcGxheS9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZXBsYXkvZ2FtZXBsYXkuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVwbGF5L3N0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvcmVuZGVyR2FtZS9yZW5kZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvcmVuZGVyR2FtZS9yZW5kZXJDYXJkcy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvcmVuZGVyR2FtZS9yZW5kZXJHYW1lLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckdhbWVSZXN1bHRzLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckhhbmRTdW0uanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL3JlbmRlckdhbWUvcmVuZGVyUGFydGljaXBhbnRJbmZvLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JsYWNramFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50IG5vLWNvbnN0YW50LWNvbmRpdGlvbjogMCAqL1xuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gYnVpbGQgYSBjYXJkIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYXJkTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGNhcmRTdWl0XG4gKiBAcmV0dXJucyB7b2JqZWN0fSBhIGNhcmQgb2JqZWN0LlxuICovXG5jb25zdCBnZW5lcmF0ZUNhcmQgPSAoY2FyZE5hbWUsIGNhcmRTdWl0KSA9PiB7XG5cdGNvbnN0IGdldENhcmRWYWx1ZSA9ICgpID0+IHtcblx0XHRpZiAodHlwZW9mIGNhcmROYW1lID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAoY2FyZE5hbWUgPT09IFwiQVwiKSB7XG5cdFx0XHRcdHJldHVybiAxMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDEwO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYXJkTmFtZTtcblx0fTtcblxuXHRjb25zdCBnZXRNb25ldGFyeVZhbHVlID0gKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgY2FyZE5hbWUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiA1MDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDEwMDtcblx0fTtcblxuXHRjb25zdCBwcmludENhcmQgPSAoKSA9PiBgKCR7Y2FyZFN1aXR9OiR7Y2FyZE5hbWV9KWA7XG5cblx0cmV0dXJuIHtcblx0XHRjYXJkTmFtZSxcblx0XHRjYXJkU3VpdCxcblx0XHRjYXJkVmFsdWU6IGdldENhcmRWYWx1ZSgpLFxuXHRcdGNhcmRNb25ldGFyeVZhbHVlOiBnZXRNb25ldGFyeVZhbHVlLFxuXHRcdHByaW50Q2FyZCxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ2FyZDtcbiIsImltcG9ydCBnZW5lcmF0ZUNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gYnVpbGQgYSBjYXJkQmFuayBvYmplY3RcbiAqIEByZXR1cm5zIHtvYmplY3R9IGNhcmRCYW5rIG9iamVjdC5cbiAqL1xuY29uc3QgY2FyZEJhbmsgPSAoKSA9PiB7XG5cdGNvbnN0IENBUkRTID0gW1wiQVwiLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgXCJLXCIsIFwiUVwiLCBcIkpcIl07XG5cdGNvbnN0IFNVSVRTID0gW1wi4pmjXCIsIFwi4pmmXCIsIFwi4pmlXCIsIFwi4pmgXCJdO1xuXG5cdC8vIElJRkUgdG8gZ2VuZXJhdGUgYSBjYXJEZWNrLiBPbmx5IG9uZSBpcyByZXF1aXJlZC5cblx0Y29uc3QgY2FyZHNEZWNrID0gKCgpID0+IHtcblx0XHRjb25zdCBkZWNrID0gW107XG5cblx0XHRmb3IgKGNvbnN0IHN1aXQgb2YgU1VJVFMpIHtcblx0XHRcdGRlY2sucHVzaCguLi5DQVJEUy5tYXAoKGNhcmQpID0+IGdlbmVyYXRlQ2FyZChjYXJkLCBzdWl0KSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWNrO1xuXHR9KSgpO1xuXG5cdGNvbnN0IHNlbGVjdFJhbmRvbUNhcmQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYXJkc0RlY2subGVuZ3RoKTtcblx0XHRsZXQgcmFuZG9tQ2FyZCA9IGNhcmRzRGVja1tyYW5kb21JbmRleF07XG5cblx0XHQvLyBTZWxlY3QgYSByYW5kb20gY2FyZCAmIHJlbW92ZSBpdCBmcm9tIHRoZSBkZWNrLlxuXHRcdFtyYW5kb21DYXJkXSA9IGNhcmRzRGVjay5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xuXG5cdFx0cmV0dXJuIHJhbmRvbUNhcmQ7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRjYXJkc0RlY2ssXG5cdFx0c2VsZWN0UmFuZG9tQ2FyZCxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRCYW5rO1xuIiwiLyogZ2FtZUVsZW1lbnRzIG1vZHVsZSAqL1xuXG5pbXBvcnQgZ2VuZXJhdGVDYXJkIGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCBjYXJkQmFuayBmcm9tIFwiLi9jYXJkQmFua1wiO1xuXG5leHBvcnQgeyBjYXJkQmFuaywgZ2VuZXJhdGVDYXJkIH07XG4iLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMF0gKi9cbmltcG9ydCB7IGZpbmlzaEdhbWUgfSBmcm9tIFwiLi4vZ2FtZXBsYXkvZ2FtZXBsYXlcIjtcbmltcG9ydCB7IHJlbmRlclBhcnRpY2lwYW50SW5mbyB9IGZyb20gXCIuLi9yZW5kZXJHYW1lL3JlbmRlckdhbWVcIjtcbmltcG9ydCB7IGNoZWNrR2FtZVN0YXR1cywgZ2V0SGFuZFZhbHVlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IGRlYWxlciA9ICgpID0+IHtcblx0Y29uc3QgY2FyZHMgPSBbXTtcblxuXHRjb25zdCBwYXJ0aWNpcGFudElkZW50aWZpZXIgPSBcImRlYWxlclwiO1xuXG5cdGNvbnN0IGRlYWxlclR1cm4gPSAoc2Vzc2lvbkRlY2ssIHBsYXllckhhbmQpID0+IHtcblx0XHRsZXQgY3VycmVudEhhbmRWYWx1ZSA9IGdldEhhbmRWYWx1ZShjYXJkcyk7XG5cblx0XHR3aGlsZSAoY3VycmVudEhhbmRWYWx1ZSA8IDE3KSB7XG5cdFx0XHRjb25zdCBuZXdDYXJkID0gc2Vzc2lvbkRlY2suc2VsZWN0UmFuZG9tQ2FyZCgpO1xuXHRcdFx0Y2FyZHMucHVzaChuZXdDYXJkKTtcblxuXHRcdFx0Y3VycmVudEhhbmRWYWx1ZSA9IGdldEhhbmRWYWx1ZShjYXJkcyk7XG5cdFx0XHRyZW5kZXJQYXJ0aWNpcGFudEluZm8oeyBjYXJkcywgcGFydGljaXBhbnRJZGVudGlmaWVyIH0pO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKFwiREVBTEVSIENBUkRTOlwiKTtcblx0XHRjb25zb2xlLmxvZyhjYXJkcyk7XG5cblx0XHQvLyBPbmNlIGRlYWxlciBoaXRzIDE3IG9yIG1vcmUsIGdhbWUgaXMgZmluaXNoZWQgYW5kIGhhbmRzIG11c3QgYmUgcmV2aWV3ZWRcblxuXHRcdGNvbnN0IGdhbWVTdGF0dXMgPSBjaGVja0dhbWVTdGF0dXMocGxheWVySGFuZCwgY2FyZHMsIHRydWUpO1xuXG5cdFx0ZmluaXNoR2FtZShnYW1lU3RhdHVzLndpbm5lcik7XG5cdH07XG5cblx0cmV0dXJuIHsgY2FyZHMsIGRlYWxlclR1cm4sIHBhcnRpY2lwYW50SWRlbnRpZmllciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyO1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgZGVhbGVyIGZyb20gXCIuL2RlYWxlclwiO1xuXG5leHBvcnQgeyBwbGF5ZXIsIGRlYWxlciB9O1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCB7IGZpbmlzaEdhbWUgfSBmcm9tIFwiLi4vZ2FtZXBsYXkvZ2FtZXBsYXlcIjtcbmltcG9ydCB7IHJlbmRlclBhcnRpY2lwYW50SW5mbyB9IGZyb20gXCIuLi9yZW5kZXJHYW1lL3JlbmRlckdhbWVcIjtcbmltcG9ydCB7IGNoZWNrR2FtZVN0YXR1cyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGNhcmRzID0gW107XG5cblx0Y29uc3QgcGFydGljaXBhbnRJZGVudGlmaWVyID0gXCJwbGF5ZXJcIjtcblxuXHQvLyBUT0RPOiByZW1lbWJlciB0byBhZGQgYmV0XG5cblx0Y29uc3QgaGl0ID0gKHNlc3Npb25EZWNrLCBkZWFsZXJIYW5kKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJDTElDS0VEXCIpO1xuXHRcdGNvbnN0IGhpdENhcmQgPSBzZXNzaW9uRGVjay5zZWxlY3RSYW5kb21DYXJkKCk7XG5cdFx0Y2FyZHMucHVzaChoaXRDYXJkKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiUExBWUVSIENBUkRTOlwiKTtcblx0XHRjb25zb2xlLmxvZyhjYXJkcyk7XG5cblx0XHRyZW5kZXJQYXJ0aWNpcGFudEluZm8oeyBjYXJkcywgcGFydGljaXBhbnRJZGVudGlmaWVyIH0pO1xuXG5cdFx0Y29uc3QgZ2FtZVN0YXR1cyA9IGNoZWNrR2FtZVN0YXR1cyhjYXJkcywgZGVhbGVySGFuZCwgZmFsc2UpO1xuXG5cdFx0aWYgKGdhbWVTdGF0dXMuaXNGaW5pc2hlZCkge1xuXHRcdFx0ZmluaXNoR2FtZShnYW1lU3RhdHVzLndpbm5lcik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y2FyZHMsXG5cdFx0aGl0LFxuXHRcdHBhcnRpY2lwYW50SWRlbnRpZmllcixcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsImltcG9ydCB7IHJlbmRlckdhbWVSZXN1bHRzIH0gZnJvbSBcIi4uL3JlbmRlckdhbWUvcmVuZGVyR2FtZVwiO1xuXG4vKipcbiAqIEZpbmlzaGVzIHRoZSBnYW1lIGJ5IHNob3dpbmcgYSBzdW1tYXJ5XG4gKiBhbmQgaGlkaW5nIGdhbWUgYnV0dG9uc1xuICogQHBhcmFtIHtzdHJpbmd9IHdpbm5lclxuICovXG5jb25zdCBmaW5pc2hHYW1lID0gKHdpbm5lcikgPT4ge1xuXHQvLyBTaG93IGdhbWUgc3VtbWFyeVxuXHRjb25zdCBlbmRNZXNzYWdlID1cblx0XHR3aW5uZXIgPT09IFwicGxheWVyXCJcblx0XHRcdD8gXCJDb25ncmF0dWxhdGlvbnM6IFlPVSBXT04hXCJcblx0XHRcdDogXCJUb28gYmFkLiBZT1UgTE9TVCA6KFwiO1xuXG5cdHJlbmRlckdhbWVSZXN1bHRzKGVuZE1lc3NhZ2UpO1xuXG5cdC8vIERpc2FibGUgYnV0dG9uc1xuXHRjb25zdCBnYW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJ1dHRvbnMtY29udGFpbmVyXCIpO1xuXHRnYW1lQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluaXNoR2FtZTtcbiIsImltcG9ydCB7IHN0YXJ0R2FtZSwgZmluaXNoR2FtZSB9IGZyb20gXCIuL2dhbWVwbGF5XCI7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyUGFydGljaXBhbnRJbmZvIH0gZnJvbSBcIi4uL3JlbmRlckdhbWUvcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHsgY2hlY2tHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuXHQvLyBSZXBsYWNlIG5vZGVzIHRocm91Z2ggY2xvbmluZywgdG8gcHJldmVudCBldmVudExpc3RlbmVyIGR1cGxpY2F0ZXNcblx0Y29uc3QgcGxheWVySGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaXQtYnV0dG9uXCIpO1xuXHRjb25zdCBwbGF5ZXJTdGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF5LWJ1dHRvblwiKTtcblxuXHRjb25zdCBuZXdIaXRCdXR0b24gPSBwbGF5ZXJIaXRCdXR0b24uY2xvbmVOb2RlKHRydWUpO1xuXHRjb25zdCBuZXdTdGF5QnV0dG9uID0gcGxheWVyU3RheUJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0cGxheWVySGl0QnV0dG9uLnJlcGxhY2VXaXRoKG5ld0hpdEJ1dHRvbik7XG5cdHBsYXllclN0YXlCdXR0b24ucmVwbGFjZVdpdGgobmV3U3RheUJ1dHRvbik7XG5cblx0Ly8gSW5pdGlhbGl6ZSBnYW1lIGRhdGEgc3RydWN0dXJlc1xuXG5cdGNvbnN0IHsgc2Vzc2lvblBsYXllciwgc2Vzc2lvbkRlYWxlciwgc2Vzc2lvbkRlY2sgfSA9IHN0YXJ0R2FtZSgpO1xuXG5cdC8vIFJlbmRlciBnYW1lIGJvYXJkXG5cdHJlbmRlckJvYXJkKCk7XG5cblx0cmVuZGVyUGFydGljaXBhbnRJbmZvKHNlc3Npb25QbGF5ZXIpO1xuXHRyZW5kZXJQYXJ0aWNpcGFudEluZm8oc2Vzc2lvbkRlYWxlcik7XG5cblx0Y29uc3QgZ2FtZUFmdGVyRmlyc3REZWFsID0gY2hlY2tHYW1lU3RhdHVzKFxuXHRcdHNlc3Npb25QbGF5ZXIuY2FyZHMsXG5cdFx0c2Vzc2lvbkRlYWxlci5jYXJkcyxcblx0XHRmYWxzZVxuXHQpO1xuXG5cdGlmIChnYW1lQWZ0ZXJGaXJzdERlYWwuaXNGaW5pc2hlZCkge1xuXHRcdGZpbmlzaEdhbWUoZ2FtZUFmdGVyRmlyc3REZWFsLndpbm5lcik7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRuZXdIaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG5cdFx0c2Vzc2lvblBsYXllci5oaXQoc2Vzc2lvbkRlY2ssIHNlc3Npb25EZWFsZXIuY2FyZHMpXG5cdCk7XG5cdG5ld1N0YXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG5cdFx0c2Vzc2lvbkRlYWxlci5kZWFsZXJUdXJuKHNlc3Npb25EZWNrLCBzZXNzaW9uUGxheWVyLmNhcmRzKVxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMF0gKi9cblxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcbmltcG9ydCBmaW5pc2hHYW1lIGZyb20gXCIuL2ZpbmlzaEdhbWVcIjtcblxuZXhwb3J0IHsgc3RhcnRHYW1lLCBmaW5pc2hHYW1lIH07XG4iLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMF0gKi9cblxuaW1wb3J0IHsgcGxheWVyLCBkZWFsZXIgfSBmcm9tIFwiLi4vZ2FtZVBhcnRpY2lwYW50cy9nYW1lUGFydGljaXBhbnRzXCI7XG5pbXBvcnQgeyBjYXJkQmFuayB9IGZyb20gXCIuLi9nYW1lRWxlbWVudHMvZ2FtZUVsZW1lbnRzXCI7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcblx0Ly8gUHJpb3IgdG8gc3RhcnQgYSBnYW1lLCBtYWtlIHN1cmUgdGhhdCAuZ2FtZS1yZXN1bHRzIGRpc3BsYXlzIG5vdGhpbmdcblxuXHRjb25zdCBnYW1lUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1yZXN1bHRzXCIpO1xuXG5cdGdhbWVSZXN1bHRzLmlubmVySFRNTCA9IFwiXCI7XG5cblx0Ly8gRW5hYmxlIHBsYXllciBidXR0b25zXG5cdGNvbnN0IGdhbWVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYnV0dG9ucy1jb250YWluZXJcIik7XG5cdGdhbWVCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cblx0Ly8gSW5pdGlhbGl6ZSBkZXRhaWxzXG5cdGNvbnN0IHNlc3Npb25EZWNrID0gY2FyZEJhbmsoKTtcblxuXHRjb25zdCBzZXNzaW9uUGxheWVyID0gcGxheWVyKCk7XG5cdGNvbnN0IHNlc3Npb25EZWFsZXIgPSBkZWFsZXIoKTtcblxuXHQvLyBBc3NpZ24gdGhlIGZpcnN0IDIgcmFuZG9tIGZvciBlYWNoIHBhcnRpY2lwYW50XG5cdGZvciAobGV0IHJlcXVpcmVkQ2FyZHMgPSAwOyByZXF1aXJlZENhcmRzIDwgMjsgcmVxdWlyZWRDYXJkcyArPSAxKSB7XG5cdFx0Y29uc3QgbmV3UGxheWVyQ2FyZCA9IHNlc3Npb25EZWNrLnNlbGVjdFJhbmRvbUNhcmQoKTtcblx0XHRjb25zdCBuZXdEZWFsZXJDYXJkID0gc2Vzc2lvbkRlY2suc2VsZWN0UmFuZG9tQ2FyZCgpO1xuXG5cdFx0c2Vzc2lvblBsYXllci5jYXJkcy5wdXNoKG5ld1BsYXllckNhcmQpO1xuXHRcdHNlc3Npb25EZWFsZXIuY2FyZHMucHVzaChuZXdEZWFsZXJDYXJkKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c2Vzc2lvblBsYXllcixcblx0XHRzZXNzaW9uRGVhbGVyLFxuXHRcdHNlc3Npb25EZWNrLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRHYW1lO1xuIiwiY29uc3QgcmVuZGVyQm9hcmQgPSAoKSA9PiB7XG5cdGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtY29udGFpbmVyXCIpO1xuXHRnYW1lQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXHRjb25zdCBnYW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJ1dHRvbnMtY29udGFpbmVyXCIpO1xuXHRnYW1lQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQm9hcmQ7XG4iLCJpbXBvcnQgeyBmb3JtYXRDYXJkSGFuZCB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCByZW5kZXJDYXJkcyA9ICh0YXJnZXRJRCwgY2FyZHNUb1JlbmRlcikgPT4ge1xuXHRjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXRJRH0tY2FyZHNgKTtcblxuXHR0YXJnZXRDb250YWluZXIuaW5uZXJIVE1MID0gZm9ybWF0Q2FyZEhhbmQoY2FyZHNUb1JlbmRlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXJkcztcbiIsIi8qIGVzbGludCBpbXBvcnQvbm8tY3ljbGU6IFswXSAqL1xuXG5pbXBvcnQgcmVuZGVyQm9hcmQgZnJvbSBcIi4vcmVuZGVyQm9hcmRcIjtcbmltcG9ydCByZW5kZXJDYXJkcyBmcm9tIFwiLi9yZW5kZXJDYXJkc1wiO1xuaW1wb3J0IHJlbmRlckhhbmRTdW0gZnJvbSBcIi4vcmVuZGVySGFuZFN1bVwiO1xuaW1wb3J0IHJlbmRlclBhcnRpY2lwYW50SW5mbyBmcm9tIFwiLi9yZW5kZXJQYXJ0aWNpcGFudEluZm9cIjtcbmltcG9ydCByZW5kZXJHYW1lUmVzdWx0cyBmcm9tIFwiLi9yZW5kZXJHYW1lUmVzdWx0c1wiO1xuXG5leHBvcnQge1xuXHRyZW5kZXJCb2FyZCxcblx0cmVuZGVyQ2FyZHMsXG5cdHJlbmRlckhhbmRTdW0sXG5cdHJlbmRlclBhcnRpY2lwYW50SW5mbyxcblx0cmVuZGVyR2FtZVJlc3VsdHMsXG59O1xuIiwiY29uc3QgcmVuZGVyR2FtZVJlc3VsdHMgPSAoZ2FtZVJlc3VsdHMpID0+IHtcblx0Y29uc3QgcmVzdWx0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtcmVzdWx0c1wiKTtcblxuXHRyZXN1bHRzRGlzcGxheS5pbm5lckhUTUwgPSBnYW1lUmVzdWx0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVSZXN1bHRzO1xuIiwiY29uc3QgcmVuZGVySGFuZFN1bSA9ICh0YXJnZXQsIHN1bSkgPT4ge1xuXHRjb25zdCBzdW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXR9LXN1bWApO1xuXHRzdW1Db250YWluZXIuaW5uZXJIVE1MID0gc3VtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGFuZFN1bTtcbiIsIi8qIGVzbGludCBpbXBvcnQvbm8tY3ljbGU6IFswXSAqL1xuXG5pbXBvcnQgeyByZW5kZXJIYW5kU3VtLCByZW5kZXJDYXJkcyB9IGZyb20gXCIuL3JlbmRlckdhbWVcIjtcbmltcG9ydCB7IGdldEhhbmRWYWx1ZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCByZW5kZXJQYXJ0aWNpcGFudEluZm8gPSAocGFydGljaXBhbnQpID0+IHtcblx0cmVuZGVyQ2FyZHMocGFydGljaXBhbnQucGFydGljaXBhbnRJZGVudGlmaWVyLCBwYXJ0aWNpcGFudC5jYXJkcyk7XG5cblx0Y29uc3QgcGFydGljaXBhbnRTdW0gPSBnZXRIYW5kVmFsdWUocGFydGljaXBhbnQuY2FyZHMpO1xuXHRyZW5kZXJIYW5kU3VtKHBhcnRpY2lwYW50LnBhcnRpY2lwYW50SWRlbnRpZmllciwgcGFydGljaXBhbnRTdW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGFydGljaXBhbnRJbmZvO1xuIiwiY29uc3QgZ2V0SGFuZFZhbHVlID0gKGNhcmRzKSA9PiB7XG5cdGxldCBoYW5kVmFsdWUgPSAwO1xuXG5cdGZvciAoY29uc3QgY2FyZCBvZiBjYXJkcykge1xuXHRcdGhhbmRWYWx1ZSArPSBjYXJkLmNhcmRWYWx1ZTtcblx0fVxuXG5cdHJldHVybiBoYW5kVmFsdWU7XG59O1xuXG5jb25zdCBmb3JtYXRDYXJkSGFuZCA9IChjYXJkcykgPT5cblx0XCJcIi5jb25jYXQoLi4uY2FyZHMubWFwKChjYXJkKSA9PiBjYXJkLnByaW50Q2FyZCgpKSk7XG5cbmNvbnN0IGNoZWNrR2FtZVN0YXR1cyA9IChwbGF5ZXJIYW5kLCBkZWFsZXJIYW5kLCBpc0ZpbmlzaGVkKSA9PiB7XG5cdGNvbnN0IGNoZWNrUmVzdWx0ID0ge1xuXHRcdGlzRmluaXNoZWQsXG5cdFx0d2lubmVyOiBudWxsLFxuXHR9O1xuXG5cdGNvbnN0IHBsYXllckhhbmRWYWx1ZSA9IGdldEhhbmRWYWx1ZShwbGF5ZXJIYW5kKTtcblx0Y29uc3QgZGVhbGVySGFuZFZhbHVlID0gZ2V0SGFuZFZhbHVlKGRlYWxlckhhbmQpO1xuXG5cdC8vIFRoaXMgY29uZGl0aW9uIGlzIGNhbGxlZCBvbmx5IHdoZW4gdGhlIGRlYWxlcidzIHR1cm4gaXMgb3ZlclxuXG5cdGlmIChjaGVja1Jlc3VsdC5pc0ZpbmlzaGVkKSB7XG5cdFx0aWYgKHBsYXllckhhbmRWYWx1ZSA+IDIxKSB7XG5cdFx0XHRjaGVja1Jlc3VsdC53aW5uZXIgPSBcImRlYWxlclwiO1xuXHRcdFx0cmV0dXJuIGNoZWNrUmVzdWx0O1xuXHRcdH1cblxuXHRcdGlmIChkZWFsZXJIYW5kVmFsdWUgPiAyMSkge1xuXHRcdFx0Y2hlY2tSZXN1bHQud2lubmVyID0gXCJwbGF5ZXJcIjtcblx0XHRcdHJldHVybiBjaGVja1Jlc3VsdDtcblx0XHR9XG5cblx0XHRjaGVja1Jlc3VsdC53aW5uZXIgPVxuXHRcdFx0cGxheWVySGFuZFZhbHVlID4gZGVhbGVySGFuZFZhbHVlID8gXCJwbGF5ZXJcIiA6IFwiZGVhbGVyXCI7XG5cblx0XHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG5cdH1cblxuXHRpZiAocGxheWVySGFuZFZhbHVlID09PSAyMSB8fCBkZWFsZXJIYW5kVmFsdWUgPiAyMSkge1xuXHRcdGNoZWNrUmVzdWx0LmlzRmluaXNoZWQgPSB0cnVlO1xuXHRcdGNoZWNrUmVzdWx0Lndpbm5lciA9IFwicGxheWVyXCI7XG5cblx0XHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG5cdH1cblxuXHRpZiAoZGVhbGVySGFuZFZhbHVlID09PSAyMSB8fCBwbGF5ZXJIYW5kVmFsdWUgPiAyMSkge1xuXHRcdGNoZWNrUmVzdWx0LmlzRmluaXNoZWQgPSB0cnVlO1xuXHRcdGNoZWNrUmVzdWx0Lndpbm5lciA9IFwiZGVhbGVyXCI7XG5cblx0XHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG59O1xuXG5leHBvcnQgeyBnZXRIYW5kVmFsdWUsIGZvcm1hdENhcmRIYW5kLCBjaGVja0dhbWVTdGF0dXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnYW1lQ29udHJvbGxlciBmcm9tIFwiLi9nYW1lcGxheS9nYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctZ2FtZS1idXR0b25cIik7XG5cbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZ2FtZUNvbnRyb2xsZXIoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=