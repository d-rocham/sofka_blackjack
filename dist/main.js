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
		const hitCard = sessionDeck.selectRandomCard();
		cards.push(hitCard);

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
	(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_0__.toggleComponentVisibility)(gameButtons);

	// Since the disabled buttons are just hidden, but not removed from the DOM,
	// there's no need to call element.removeEventListener();
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

	const playerHitButton = document.querySelector("#hit-button");
	const playerStayButton = document.querySelector("#stay-button");

	playerHitButton.addEventListener("click", () =>
		sessionPlayer.hit(sessionDeck, sessionDealer.cards)
	);
	playerStayButton.addEventListener("click", () =>
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
/* harmony import */ var _renderGame_renderGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderGame/renderGame */ "./src/renderGame/renderGame.js");
/* eslint import/no-cycle: [0] */





const startGame = () => {
	// Prior to start a game, make sure that .game-results is hidden

	(0,_renderGame_renderGame__WEBPACK_IMPORTED_MODULE_2__.toggleComponentVisibility)(document.querySelector(".game-results"));

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
/* harmony export */   "renderParticipantInfo": () => (/* reexport safe */ _renderParticipantInfo__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "toggleComponentVisibility": () => (/* reexport safe */ _toggleComponentVisibility__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard */ "./src/renderGame/renderBoard.js");
/* harmony import */ var _renderCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCards */ "./src/renderGame/renderCards.js");
/* harmony import */ var _renderHandSum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHandSum */ "./src/renderGame/renderHandSum.js");
/* harmony import */ var _renderParticipantInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderParticipantInfo */ "./src/renderGame/renderParticipantInfo.js");
/* harmony import */ var _renderGameResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderGameResults */ "./src/renderGame/renderGameResults.js");
/* harmony import */ var _toggleComponentVisibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggleComponentVisibility */ "./src/renderGame/toggleComponentVisibility.js");
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
/* harmony import */ var _toggleComponentVisibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleComponentVisibility */ "./src/renderGame/toggleComponentVisibility.js");


const renderGameResults = (gameResults) => {
	const resultsDisplay = document.querySelector(".game-results");

	(0,_toggleComponentVisibility__WEBPACK_IMPORTED_MODULE_0__["default"])(resultsDisplay);

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

/***/ "./src/renderGame/toggleComponentVisibility.js":
/*!*****************************************************!*\
  !*** ./src/renderGame/toggleComponentVisibility.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleComponentVisibility = (component) => {
	component.classList.toggle("hidden");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleComponentVisibility);


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
		console.log("called dealer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsbURBQW1ELG9CQUFvQixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsbUNBQW1DLG9CQUFvQixHQUFHLG1CQUFtQjtBQUN4UDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QixTQUFTLEdBQUcsU0FBUzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q007O0FBRWxDO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGlEQUFZO0FBQ2hEOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3hCOztBQUVrQztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMbEM7QUFDa0Q7QUFDZTtBQUNSOztBQUV6RDtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCLG9EQUFZOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG9EQUFZO0FBQ2xDLEdBQUcsNkVBQXFCLEdBQUcsOEJBQThCO0FBQ3pEOztBQUVBOztBQUVBLHFCQUFxQix1REFBZTs7QUFFcEMsRUFBRSw4REFBVTtBQUNaOztBQUVBLFVBQVU7QUFDVjs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CdEI7O0FBRThCO0FBQ0E7O0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wxQjs7QUFFa0Q7QUFDZTtBQUN0Qjs7QUFFM0M7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw2RUFBcUIsR0FBRyw4QkFBOEI7O0FBRXhELHFCQUFxQix1REFBZTs7QUFFcEM7QUFDQSxHQUFHLDhEQUFVO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJZOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyx5RUFBaUI7O0FBRWxCO0FBQ0E7QUFDQSxDQUFDLGlGQUF5Qjs7QUFFMUI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0J5QjtBQUMyQjtBQUNuQzs7QUFFM0M7QUFDQTs7QUFFQSxTQUFTLDRDQUE0QyxFQUFFLG9EQUFTOztBQUVoRTtBQUNBLENBQUMsbUVBQVc7O0FBRVosQ0FBQyw2RUFBcUI7QUFDdEIsQ0FBQyw2RUFBcUI7O0FBRXRCLDRCQUE0Qix1REFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUscURBQVU7O0FBRVo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEM5Qjs7QUFFb0M7QUFDRTs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGpDOztBQUVzRTtBQUNkO0FBQ2E7O0FBRXJFO0FBQ0E7O0FBRUEsQ0FBQyxpRkFBeUI7O0FBRTFCLHFCQUFxQixvRUFBUTs7QUFFN0IsdUJBQXVCLDBFQUFNO0FBQzdCLHVCQUF1QiwwRUFBTTs7QUFFN0I7QUFDQSw2QkFBNkIsbUJBQW1CO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZTs7QUFFMUM7QUFDQSxvREFBb0QsU0FBUzs7QUFFN0QsNkJBQTZCLHNEQUFjO0FBQzNDOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSM0I7O0FBRXdDO0FBQ0E7QUFDSTtBQUNnQjtBQUNSO0FBQ2dCOztBQVNsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCa0U7O0FBRXBFO0FBQ0E7O0FBRUEsQ0FBQyxzRUFBeUI7O0FBRTFCO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZqQztBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0w3Qjs7QUFFMEQ7QUFDbEI7O0FBRXhDO0FBQ0EsQ0FBQyx3REFBVzs7QUFFWix3QkFBd0Isb0RBQVk7QUFDcEMsQ0FBQywwREFBYTtBQUNkOztBQUVBLGlFQUFlLHFCQUFxQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNackM7QUFDQTtBQUNBOztBQUVBLGlFQUFlLHlCQUF5QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0p6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUV5RDs7Ozs7OztVQzFEekQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUQ7QUFDbEM7O0FBRXJCOztBQUVBLGdEQUFnRCxvRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsYWNramFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JsYWNramFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZUVsZW1lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVFbGVtZW50cy9jYXJkQmFuay5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZUVsZW1lbnRzL2dhbWVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZVBhcnRpY2lwYW50cy9kZWFsZXIuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVQYXJ0aWNpcGFudHMvZ2FtZVBhcnRpY2lwYW50cy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZVBhcnRpY2lwYW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVwbGF5L2ZpbmlzaEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVwbGF5L2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9nYW1lcGxheS9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZXBsYXkvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckNhcmRzLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckdhbWUuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL3JlbmRlckdhbWUvcmVuZGVyR2FtZVJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL3JlbmRlckdhbWUvcmVuZGVySGFuZFN1bS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvcmVuZGVyR2FtZS9yZW5kZXJQYXJ0aWNpcGFudEluZm8uanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL3JlbmRlckdhbWUvdG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JsYWNramFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ibGFja2phY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYWNramFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JsYWNramFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYWNramFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludCBuby1jb25zdGFudC1jb25kaXRpb246IDAgKi9cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGJ1aWxkIGEgY2FyZCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FyZE5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYXJkU3VpdFxuICogQHJldHVybnMge29iamVjdH0gYSBjYXJkIG9iamVjdC5cbiAqL1xuY29uc3QgZ2VuZXJhdGVDYXJkID0gKGNhcmROYW1lLCBjYXJkU3VpdCkgPT4ge1xuXHRjb25zdCBnZXRDYXJkVmFsdWUgPSAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBjYXJkTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGNhcmROYW1lID09PSBcIkFcIikge1xuXHRcdFx0XHRyZXR1cm4gMTE7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAxMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FyZE5hbWU7XG5cdH07XG5cblx0Y29uc3QgZ2V0TW9uZXRhcnlWYWx1ZSA9ICgpID0+IHtcblx0XHRpZiAodHlwZW9mIGNhcmROYW1lID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gNTAwO1xuXHRcdH1cblxuXHRcdHJldHVybiAxMDA7XG5cdH07XG5cblx0Y29uc3QgcHJpbnRDYXJkID0gKCkgPT4gYCgke2NhcmRTdWl0fToke2NhcmROYW1lfSlgO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FyZE5hbWUsXG5cdFx0Y2FyZFN1aXQsXG5cdFx0Y2FyZFZhbHVlOiBnZXRDYXJkVmFsdWUoKSxcblx0XHRjYXJkTW9uZXRhcnlWYWx1ZTogZ2V0TW9uZXRhcnlWYWx1ZSxcblx0XHRwcmludENhcmQsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNhcmQ7XG4iLCJpbXBvcnQgZ2VuZXJhdGVDYXJkIGZyb20gXCIuL2NhcmRcIjtcblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGJ1aWxkIGEgY2FyZEJhbmsgb2JqZWN0XG4gKiBAcmV0dXJucyB7b2JqZWN0fSBjYXJkQmFuayBvYmplY3QuXG4gKi9cbmNvbnN0IGNhcmRCYW5rID0gKCkgPT4ge1xuXHRjb25zdCBDQVJEUyA9IFtcIkFcIiwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIFwiS1wiLCBcIlFcIiwgXCJKXCJdO1xuXHRjb25zdCBTVUlUUyA9IFtcIuKZo1wiLCBcIuKZplwiLCBcIuKZpVwiLCBcIuKZoFwiXTtcblxuXHQvLyBJSUZFIHRvIGdlbmVyYXRlIGEgY2FyRGVjay4gT25seSBvbmUgaXMgcmVxdWlyZWQuXG5cdGNvbnN0IGNhcmRzRGVjayA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgZGVjayA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCBzdWl0IG9mIFNVSVRTKSB7XG5cdFx0XHRkZWNrLnB1c2goLi4uQ0FSRFMubWFwKChjYXJkKSA9PiBnZW5lcmF0ZUNhcmQoY2FyZCwgc3VpdCkpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVjaztcblx0fSkoKTtcblxuXHRjb25zdCBzZWxlY3RSYW5kb21DYXJkID0gKCkgPT4ge1xuXHRcdGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FyZHNEZWNrLmxlbmd0aCk7XG5cdFx0bGV0IHJhbmRvbUNhcmQgPSBjYXJkc0RlY2tbcmFuZG9tSW5kZXhdO1xuXG5cdFx0Ly8gU2VsZWN0IGEgcmFuZG9tIGNhcmQgJiByZW1vdmUgaXQgZnJvbSB0aGUgZGVjay5cblx0XHRbcmFuZG9tQ2FyZF0gPSBjYXJkc0RlY2suc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcblxuXHRcdHJldHVybiByYW5kb21DYXJkO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y2FyZHNEZWNrLFxuXHRcdHNlbGVjdFJhbmRvbUNhcmQsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkQmFuaztcbiIsIi8qIGdhbWVFbGVtZW50cyBtb2R1bGUgKi9cblxuaW1wb3J0IGdlbmVyYXRlQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgY2FyZEJhbmsgZnJvbSBcIi4vY2FyZEJhbmtcIjtcblxuZXhwb3J0IHsgY2FyZEJhbmssIGdlbmVyYXRlQ2FyZCB9O1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5pbXBvcnQgeyBmaW5pc2hHYW1lIH0gZnJvbSBcIi4uL2dhbWVwbGF5L2dhbWVwbGF5XCI7XG5pbXBvcnQgeyByZW5kZXJQYXJ0aWNpcGFudEluZm8gfSBmcm9tIFwiLi4vcmVuZGVyR2FtZS9yZW5kZXJHYW1lXCI7XG5pbXBvcnQgeyBjaGVja0dhbWVTdGF0dXMsIGdldEhhbmRWYWx1ZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCBkZWFsZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGNhcmRzID0gW107XG5cblx0Y29uc3QgcGFydGljaXBhbnRJZGVudGlmaWVyID0gXCJkZWFsZXJcIjtcblxuXHRjb25zdCBkZWFsZXJUdXJuID0gKHNlc3Npb25EZWNrLCBwbGF5ZXJIYW5kKSA9PiB7XG5cdFx0bGV0IGN1cnJlbnRIYW5kVmFsdWUgPSBnZXRIYW5kVmFsdWUoY2FyZHMpO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnRIYW5kVmFsdWUgPCAxNykge1xuXHRcdFx0Y29uc3QgbmV3Q2FyZCA9IHNlc3Npb25EZWNrLnNlbGVjdFJhbmRvbUNhcmQoKTtcblx0XHRcdGNhcmRzLnB1c2gobmV3Q2FyZCk7XG5cblx0XHRcdGN1cnJlbnRIYW5kVmFsdWUgPSBnZXRIYW5kVmFsdWUoY2FyZHMpO1xuXHRcdFx0cmVuZGVyUGFydGljaXBhbnRJbmZvKHsgY2FyZHMsIHBhcnRpY2lwYW50SWRlbnRpZmllciB9KTtcblx0XHR9XG5cblx0XHQvLyBPbmNlIGRlYWxlciBoaXRzIDE3IG9yIG1vcmUsIGdhbWUgaXMgZmluaXNoZWQgYW5kIGhhbmRzIG11c3QgYmUgcmV2aWV3ZWRcblxuXHRcdGNvbnN0IGdhbWVTdGF0dXMgPSBjaGVja0dhbWVTdGF0dXMocGxheWVySGFuZCwgY2FyZHMsIHRydWUpO1xuXG5cdFx0ZmluaXNoR2FtZShnYW1lU3RhdHVzLndpbm5lcik7XG5cdH07XG5cblx0cmV0dXJuIHsgY2FyZHMsIGRlYWxlclR1cm4sIHBhcnRpY2lwYW50SWRlbnRpZmllciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyO1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgZGVhbGVyIGZyb20gXCIuL2RlYWxlclwiO1xuXG5leHBvcnQgeyBwbGF5ZXIsIGRlYWxlciB9O1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCB7IGZpbmlzaEdhbWUgfSBmcm9tIFwiLi4vZ2FtZXBsYXkvZ2FtZXBsYXlcIjtcbmltcG9ydCB7IHJlbmRlclBhcnRpY2lwYW50SW5mbyB9IGZyb20gXCIuLi9yZW5kZXJHYW1lL3JlbmRlckdhbWVcIjtcbmltcG9ydCB7IGNoZWNrR2FtZVN0YXR1cyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGNhcmRzID0gW107XG5cblx0Y29uc3QgcGFydGljaXBhbnRJZGVudGlmaWVyID0gXCJwbGF5ZXJcIjtcblxuXHQvLyBUT0RPOiByZW1lbWJlciB0byBhZGQgYmV0XG5cblx0Y29uc3QgaGl0ID0gKHNlc3Npb25EZWNrLCBkZWFsZXJIYW5kKSA9PiB7XG5cdFx0Y29uc3QgaGl0Q2FyZCA9IHNlc3Npb25EZWNrLnNlbGVjdFJhbmRvbUNhcmQoKTtcblx0XHRjYXJkcy5wdXNoKGhpdENhcmQpO1xuXG5cdFx0cmVuZGVyUGFydGljaXBhbnRJbmZvKHsgY2FyZHMsIHBhcnRpY2lwYW50SWRlbnRpZmllciB9KTtcblxuXHRcdGNvbnN0IGdhbWVTdGF0dXMgPSBjaGVja0dhbWVTdGF0dXMoY2FyZHMsIGRlYWxlckhhbmQsIGZhbHNlKTtcblxuXHRcdGlmIChnYW1lU3RhdHVzLmlzRmluaXNoZWQpIHtcblx0XHRcdGZpbmlzaEdhbWUoZ2FtZVN0YXR1cy53aW5uZXIpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhcmRzLFxuXHRcdGhpdCxcblx0XHRwYXJ0aWNpcGFudElkZW50aWZpZXIsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7XG4iLCJpbXBvcnQge1xuXHRyZW5kZXJHYW1lUmVzdWx0cyxcblx0dG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eSxcbn0gZnJvbSBcIi4uL3JlbmRlckdhbWUvcmVuZGVyR2FtZVwiO1xuXG4vKipcbiAqIEZpbmlzaGVzIHRoZSBnYW1lIGJ5IHNob3dpbmcgYSBzdW1tYXJ5XG4gKiBhbmQgaGlkaW5nIGdhbWUgYnV0dG9uc1xuICogQHBhcmFtIHtzdHJpbmd9IHdpbm5lclxuICovXG5jb25zdCBmaW5pc2hHYW1lID0gKHdpbm5lcikgPT4ge1xuXHQvLyBTaG93IGdhbWUgc3VtbWFyeVxuXHRjb25zdCBlbmRNZXNzYWdlID1cblx0XHR3aW5uZXIgPT09IFwicGxheWVyXCJcblx0XHRcdD8gXCJDb25ncmF0dWxhdGlvbnM6IFlPVSBXT04hXCJcblx0XHRcdDogXCJUb28gYmFkLiBZT1UgTE9TVCA6KFwiO1xuXG5cdHJlbmRlckdhbWVSZXN1bHRzKGVuZE1lc3NhZ2UpO1xuXG5cdC8vIERpc2FibGUgYnV0dG9uc1xuXHRjb25zdCBnYW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJ1dHRvbnMtY29udGFpbmVyXCIpO1xuXHR0b2dnbGVDb21wb25lbnRWaXNpYmlsaXR5KGdhbWVCdXR0b25zKTtcblxuXHQvLyBTaW5jZSB0aGUgZGlzYWJsZWQgYnV0dG9ucyBhcmUganVzdCBoaWRkZW4sIGJ1dCBub3QgcmVtb3ZlZCBmcm9tIHRoZSBET00sXG5cdC8vIHRoZXJlJ3Mgbm8gbmVlZCB0byBjYWxsIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluaXNoR2FtZTtcbiIsImltcG9ydCB7IHN0YXJ0R2FtZSwgZmluaXNoR2FtZSB9IGZyb20gXCIuL2dhbWVwbGF5XCI7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyUGFydGljaXBhbnRJbmZvIH0gZnJvbSBcIi4uL3JlbmRlckdhbWUvcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHsgY2hlY2tHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuXHQvLyBJbml0aWFsaXplIGdhbWUgZGF0YSBzdHJ1Y3R1cmVzXG5cblx0Y29uc3QgeyBzZXNzaW9uUGxheWVyLCBzZXNzaW9uRGVhbGVyLCBzZXNzaW9uRGVjayB9ID0gc3RhcnRHYW1lKCk7XG5cblx0Ly8gUmVuZGVyIGdhbWUgYm9hcmRcblx0cmVuZGVyQm9hcmQoKTtcblxuXHRyZW5kZXJQYXJ0aWNpcGFudEluZm8oc2Vzc2lvblBsYXllcik7XG5cdHJlbmRlclBhcnRpY2lwYW50SW5mbyhzZXNzaW9uRGVhbGVyKTtcblxuXHRjb25zdCBnYW1lQWZ0ZXJGaXJzdERlYWwgPSBjaGVja0dhbWVTdGF0dXMoXG5cdFx0c2Vzc2lvblBsYXllci5jYXJkcyxcblx0XHRzZXNzaW9uRGVhbGVyLmNhcmRzLFxuXHRcdGZhbHNlXG5cdCk7XG5cblx0aWYgKGdhbWVBZnRlckZpcnN0RGVhbC5pc0ZpbmlzaGVkKSB7XG5cdFx0ZmluaXNoR2FtZShnYW1lQWZ0ZXJGaXJzdERlYWwud2lubmVyKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBsYXllckhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGl0LWJ1dHRvblwiKTtcblx0Y29uc3QgcGxheWVyU3RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RheS1idXR0b25cIik7XG5cblx0cGxheWVySGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuXHRcdHNlc3Npb25QbGF5ZXIuaGl0KHNlc3Npb25EZWNrLCBzZXNzaW9uRGVhbGVyLmNhcmRzKVxuXHQpO1xuXHRwbGF5ZXJTdGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuXHRcdHNlc3Npb25EZWFsZXIuZGVhbGVyVHVybihzZXNzaW9uRGVjaywgc2Vzc2lvblBsYXllci5jYXJkcylcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVDb250cm9sbGVyO1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vc3RhcnRHYW1lXCI7XG5pbXBvcnQgZmluaXNoR2FtZSBmcm9tIFwiLi9maW5pc2hHYW1lXCI7XG5cbmV4cG9ydCB7IHN0YXJ0R2FtZSwgZmluaXNoR2FtZSB9O1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCB7IHBsYXllciwgZGVhbGVyIH0gZnJvbSBcIi4uL2dhbWVQYXJ0aWNpcGFudHMvZ2FtZVBhcnRpY2lwYW50c1wiO1xuaW1wb3J0IHsgY2FyZEJhbmsgfSBmcm9tIFwiLi4vZ2FtZUVsZW1lbnRzL2dhbWVFbGVtZW50c1wiO1xuaW1wb3J0IHsgdG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eSB9IGZyb20gXCIuLi9yZW5kZXJHYW1lL3JlbmRlckdhbWVcIjtcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXHQvLyBQcmlvciB0byBzdGFydCBhIGdhbWUsIG1ha2Ugc3VyZSB0aGF0IC5nYW1lLXJlc3VsdHMgaXMgaGlkZGVuXG5cblx0dG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtcmVzdWx0c1wiKSk7XG5cblx0Y29uc3Qgc2Vzc2lvbkRlY2sgPSBjYXJkQmFuaygpO1xuXG5cdGNvbnN0IHNlc3Npb25QbGF5ZXIgPSBwbGF5ZXIoKTtcblx0Y29uc3Qgc2Vzc2lvbkRlYWxlciA9IGRlYWxlcigpO1xuXG5cdC8vIEFzc2lnbiB0aGUgZmlyc3QgMiByYW5kb20gZm9yIGVhY2ggcGFydGljaXBhbnRcblx0Zm9yIChsZXQgcmVxdWlyZWRDYXJkcyA9IDA7IHJlcXVpcmVkQ2FyZHMgPCAyOyByZXF1aXJlZENhcmRzICs9IDEpIHtcblx0XHRjb25zdCBuZXdQbGF5ZXJDYXJkID0gc2Vzc2lvbkRlY2suc2VsZWN0UmFuZG9tQ2FyZCgpO1xuXHRcdGNvbnN0IG5ld0RlYWxlckNhcmQgPSBzZXNzaW9uRGVjay5zZWxlY3RSYW5kb21DYXJkKCk7XG5cblx0XHRzZXNzaW9uUGxheWVyLmNhcmRzLnB1c2gobmV3UGxheWVyQ2FyZCk7XG5cdFx0c2Vzc2lvbkRlYWxlci5jYXJkcy5wdXNoKG5ld0RlYWxlckNhcmQpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzZXNzaW9uUGxheWVyLFxuXHRcdHNlc3Npb25EZWFsZXIsXG5cdFx0c2Vzc2lvbkRlY2ssXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWU7XG4iLCJjb25zdCByZW5kZXJCb2FyZCA9ICgpID0+IHtcblx0Y29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIik7XG5cdGdhbWVCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cdGNvbnN0IGdhbWVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYnV0dG9ucy1jb250YWluZXJcIik7XG5cdGdhbWVCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJCb2FyZDtcbiIsImltcG9ydCB7IGZvcm1hdENhcmRIYW5kIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IHJlbmRlckNhcmRzID0gKHRhcmdldElELCBjYXJkc1RvUmVuZGVyKSA9PiB7XG5cdGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldElEfS1jYXJkc2ApO1xuXG5cdHRhcmdldENvbnRhaW5lci5pbm5lckhUTUwgPSBmb3JtYXRDYXJkSGFuZChjYXJkc1RvUmVuZGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhcmRzO1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCByZW5kZXJCb2FyZCBmcm9tIFwiLi9yZW5kZXJCb2FyZFwiO1xuaW1wb3J0IHJlbmRlckNhcmRzIGZyb20gXCIuL3JlbmRlckNhcmRzXCI7XG5pbXBvcnQgcmVuZGVySGFuZFN1bSBmcm9tIFwiLi9yZW5kZXJIYW5kU3VtXCI7XG5pbXBvcnQgcmVuZGVyUGFydGljaXBhbnRJbmZvIGZyb20gXCIuL3JlbmRlclBhcnRpY2lwYW50SW5mb1wiO1xuaW1wb3J0IHJlbmRlckdhbWVSZXN1bHRzIGZyb20gXCIuL3JlbmRlckdhbWVSZXN1bHRzXCI7XG5pbXBvcnQgdG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eSBmcm9tIFwiLi90b2dnbGVDb21wb25lbnRWaXNpYmlsaXR5XCI7XG5cbmV4cG9ydCB7XG5cdHJlbmRlckJvYXJkLFxuXHRyZW5kZXJDYXJkcyxcblx0cmVuZGVySGFuZFN1bSxcblx0cmVuZGVyUGFydGljaXBhbnRJbmZvLFxuXHRyZW5kZXJHYW1lUmVzdWx0cyxcblx0dG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eSxcbn07XG4iLCJpbXBvcnQgdG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eSBmcm9tIFwiLi90b2dnbGVDb21wb25lbnRWaXNpYmlsaXR5XCI7XG5cbmNvbnN0IHJlbmRlckdhbWVSZXN1bHRzID0gKGdhbWVSZXN1bHRzKSA9PiB7XG5cdGNvbnN0IHJlc3VsdHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXJlc3VsdHNcIik7XG5cblx0dG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eShyZXN1bHRzRGlzcGxheSk7XG5cblx0cmVzdWx0c0Rpc3BsYXkuaW5uZXJIVE1MID0gZ2FtZVJlc3VsdHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lUmVzdWx0cztcbiIsImNvbnN0IHJlbmRlckhhbmRTdW0gPSAodGFyZ2V0LCBzdW0pID0+IHtcblx0Y29uc3Qgc3VtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0fS1zdW1gKTtcblx0c3VtQ29udGFpbmVyLmlubmVySFRNTCA9IHN1bTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhhbmRTdW07XG4iLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMF0gKi9cblxuaW1wb3J0IHsgcmVuZGVySGFuZFN1bSwgcmVuZGVyQ2FyZHMgfSBmcm9tIFwiLi9yZW5kZXJHYW1lXCI7XG5pbXBvcnQgeyBnZXRIYW5kVmFsdWUgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuY29uc3QgcmVuZGVyUGFydGljaXBhbnRJbmZvID0gKHBhcnRpY2lwYW50KSA9PiB7XG5cdHJlbmRlckNhcmRzKHBhcnRpY2lwYW50LnBhcnRpY2lwYW50SWRlbnRpZmllciwgcGFydGljaXBhbnQuY2FyZHMpO1xuXG5cdGNvbnN0IHBhcnRpY2lwYW50U3VtID0gZ2V0SGFuZFZhbHVlKHBhcnRpY2lwYW50LmNhcmRzKTtcblx0cmVuZGVySGFuZFN1bShwYXJ0aWNpcGFudC5wYXJ0aWNpcGFudElkZW50aWZpZXIsIHBhcnRpY2lwYW50U3VtKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBhcnRpY2lwYW50SW5mbztcbiIsImNvbnN0IHRvZ2dsZUNvbXBvbmVudFZpc2liaWxpdHkgPSAoY29tcG9uZW50KSA9PiB7XG5cdGNvbXBvbmVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQ29tcG9uZW50VmlzaWJpbGl0eTtcbiIsImNvbnN0IGdldEhhbmRWYWx1ZSA9IChjYXJkcykgPT4ge1xuXHRsZXQgaGFuZFZhbHVlID0gMDtcblxuXHRmb3IgKGNvbnN0IGNhcmQgb2YgY2FyZHMpIHtcblx0XHRoYW5kVmFsdWUgKz0gY2FyZC5jYXJkVmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gaGFuZFZhbHVlO1xufTtcblxuY29uc3QgZm9ybWF0Q2FyZEhhbmQgPSAoY2FyZHMpID0+XG5cdFwiXCIuY29uY2F0KC4uLmNhcmRzLm1hcCgoY2FyZCkgPT4gY2FyZC5wcmludENhcmQoKSkpO1xuXG5jb25zdCBjaGVja0dhbWVTdGF0dXMgPSAocGxheWVySGFuZCwgZGVhbGVySGFuZCwgaXNGaW5pc2hlZCkgPT4ge1xuXHRjb25zdCBjaGVja1Jlc3VsdCA9IHtcblx0XHRpc0ZpbmlzaGVkLFxuXHRcdHdpbm5lcjogbnVsbCxcblx0fTtcblxuXHRjb25zdCBwbGF5ZXJIYW5kVmFsdWUgPSBnZXRIYW5kVmFsdWUocGxheWVySGFuZCk7XG5cdGNvbnN0IGRlYWxlckhhbmRWYWx1ZSA9IGdldEhhbmRWYWx1ZShkZWFsZXJIYW5kKTtcblxuXHQvLyBUaGlzIGNvbmRpdGlvbiBpcyBjYWxsZWQgb25seSB3aGVuIHRoZSBkZWFsZXIncyB0dXJuIGlzIG92ZXJcblx0aWYgKGNoZWNrUmVzdWx0LmlzRmluaXNoZWQpIHtcblx0XHRpZiAocGxheWVySGFuZFZhbHVlID4gMjEpIHtcblx0XHRcdGNoZWNrUmVzdWx0Lndpbm5lciA9IFwiZGVhbGVyXCI7XG5cdFx0XHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG5cdFx0fVxuXG5cdFx0aWYgKGRlYWxlckhhbmRWYWx1ZSA+IDIxKSB7XG5cdFx0XHRjaGVja1Jlc3VsdC53aW5uZXIgPSBcInBsYXllclwiO1xuXHRcdFx0cmV0dXJuIGNoZWNrUmVzdWx0O1xuXHRcdH1cblxuXHRcdGNoZWNrUmVzdWx0Lndpbm5lciA9XG5cdFx0XHRwbGF5ZXJIYW5kVmFsdWUgPiBkZWFsZXJIYW5kVmFsdWUgPyBcInBsYXllclwiIDogXCJkZWFsZXJcIjtcblxuXHRcdHJldHVybiBjaGVja1Jlc3VsdDtcblx0fVxuXG5cdGlmIChwbGF5ZXJIYW5kVmFsdWUgPT09IDIxIHx8IGRlYWxlckhhbmRWYWx1ZSA+IDIxKSB7XG5cdFx0Y2hlY2tSZXN1bHQuaXNGaW5pc2hlZCA9IHRydWU7XG5cdFx0Y2hlY2tSZXN1bHQud2lubmVyID0gXCJwbGF5ZXJcIjtcblxuXHRcdHJldHVybiBjaGVja1Jlc3VsdDtcblx0fVxuXG5cdGlmIChkZWFsZXJIYW5kVmFsdWUgPT09IDIxIHx8IHBsYXllckhhbmRWYWx1ZSA+IDIxKSB7XG5cdFx0Y29uc29sZS5sb2coXCJjYWxsZWQgZGVhbGVyXCIpO1xuXHRcdGNoZWNrUmVzdWx0LmlzRmluaXNoZWQgPSB0cnVlO1xuXHRcdGNoZWNrUmVzdWx0Lndpbm5lciA9IFwiZGVhbGVyXCI7XG5cblx0XHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG59O1xuXG5leHBvcnQgeyBnZXRIYW5kVmFsdWUsIGZvcm1hdENhcmRIYW5kLCBjaGVja0dhbWVTdGF0dXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnYW1lQ29udHJvbGxlciBmcm9tIFwiLi9nYW1lcGxheS9nYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctZ2FtZS1idXR0b25cIik7XG5cbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZ2FtZUNvbnRyb2xsZXIoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=