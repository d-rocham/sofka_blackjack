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
const finishGame = (winner) => {
	console.log(winner);

	// TODO: implement. finishGame should switch back the visibility on gameboard
	// remove event listeners, display appropriate message
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
/* eslint import/no-cycle: [0] */




const startGame = () => {
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
/* harmony export */   "renderHandSum": () => (/* reexport safe */ _renderHandSum__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "renderParticipantInfo": () => (/* reexport safe */ _renderParticipantInfo__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard */ "./src/renderGame/renderBoard.js");
/* harmony import */ var _renderCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCards */ "./src/renderGame/renderCards.js");
/* harmony import */ var _renderHandSum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHandSum */ "./src/renderGame/renderHandSum.js");
/* harmony import */ var _renderParticipantInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderParticipantInfo */ "./src/renderGame/renderParticipantInfo.js");
/* eslint import/no-cycle: [0] */









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

	console.log(`playerHandValue: ${playerHandValue}`);
	console.log(`dealerHandValue: ${dealerHandValue}`);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZSxxQkFBcUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNackM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pELGlDQUFpQyxnQkFBZ0I7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUV5RDs7Ozs7OztVQzdEekQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUQ7QUFDbEM7O0FBRXJCOztBQUVBLGdEQUFnRCxvRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsYWNramFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JsYWNramFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZUVsZW1lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVFbGVtZW50cy9jYXJkQmFuay5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZUVsZW1lbnRzL2dhbWVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZVBhcnRpY2lwYW50cy9kZWFsZXIuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVQYXJ0aWNpcGFudHMvZ2FtZVBhcnRpY2lwYW50cy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZVBhcnRpY2lwYW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVwbGF5L2ZpbmlzaEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL2dhbWVwbGF5L2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9nYW1lcGxheS9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvZ2FtZXBsYXkvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckNhcmRzLmpzIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9yZW5kZXJHYW1lL3JlbmRlckdhbWUuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL3JlbmRlckdhbWUvcmVuZGVySGFuZFN1bS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2svLi9zcmMvcmVuZGVyR2FtZS9yZW5kZXJQYXJ0aWNpcGFudEluZm8uanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JsYWNramFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibGFja2phY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ibGFja2phY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ibGFja2phY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ibGFja2phY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JsYWNramFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQgbm8tY29uc3RhbnQtY29uZGl0aW9uOiAwICovXG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBidWlsZCBhIGNhcmQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNhcmROYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FyZFN1aXRcbiAqIEByZXR1cm5zIHtvYmplY3R9IGEgY2FyZCBvYmplY3QuXG4gKi9cbmNvbnN0IGdlbmVyYXRlQ2FyZCA9IChjYXJkTmFtZSwgY2FyZFN1aXQpID0+IHtcblx0Y29uc3QgZ2V0Q2FyZFZhbHVlID0gKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgY2FyZE5hbWUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChjYXJkTmFtZSA9PT0gXCJBXCIpIHtcblx0XHRcdFx0cmV0dXJuIDExO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMTA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhcmROYW1lO1xuXHR9O1xuXG5cdGNvbnN0IGdldE1vbmV0YXJ5VmFsdWUgPSAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBjYXJkTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIDUwMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTAwO1xuXHR9O1xuXG5cdGNvbnN0IHByaW50Q2FyZCA9ICgpID0+IGAoJHtjYXJkU3VpdH06JHtjYXJkTmFtZX0pYDtcblxuXHRyZXR1cm4ge1xuXHRcdGNhcmROYW1lLFxuXHRcdGNhcmRTdWl0LFxuXHRcdGNhcmRWYWx1ZTogZ2V0Q2FyZFZhbHVlKCksXG5cdFx0Y2FyZE1vbmV0YXJ5VmFsdWU6IGdldE1vbmV0YXJ5VmFsdWUsXG5cdFx0cHJpbnRDYXJkLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDYXJkO1xuIiwiaW1wb3J0IGdlbmVyYXRlQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBidWlsZCBhIGNhcmRCYW5rIG9iamVjdFxuICogQHJldHVybnMge29iamVjdH0gY2FyZEJhbmsgb2JqZWN0LlxuICovXG5jb25zdCBjYXJkQmFuayA9ICgpID0+IHtcblx0Y29uc3QgQ0FSRFMgPSBbXCJBXCIsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCBcIktcIiwgXCJRXCIsIFwiSlwiXTtcblx0Y29uc3QgU1VJVFMgPSBbXCLimaNcIiwgXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIl07XG5cblx0Ly8gSUlGRSB0byBnZW5lcmF0ZSBhIGNhckRlY2suIE9ubHkgb25lIGlzIHJlcXVpcmVkLlxuXHRjb25zdCBjYXJkc0RlY2sgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IGRlY2sgPSBbXTtcblxuXHRcdGZvciAoY29uc3Qgc3VpdCBvZiBTVUlUUykge1xuXHRcdFx0ZGVjay5wdXNoKC4uLkNBUkRTLm1hcCgoY2FyZCkgPT4gZ2VuZXJhdGVDYXJkKGNhcmQsIHN1aXQpKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlY2s7XG5cdH0pKCk7XG5cblx0Y29uc3Qgc2VsZWN0UmFuZG9tQ2FyZCA9ICgpID0+IHtcblx0XHRjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhcmRzRGVjay5sZW5ndGgpO1xuXHRcdGxldCByYW5kb21DYXJkID0gY2FyZHNEZWNrW3JhbmRvbUluZGV4XTtcblxuXHRcdC8vIFNlbGVjdCBhIHJhbmRvbSBjYXJkICYgcmVtb3ZlIGl0IGZyb20gdGhlIGRlY2suXG5cdFx0W3JhbmRvbUNhcmRdID0gY2FyZHNEZWNrLnNwbGljZShyYW5kb21JbmRleCwgMSk7XG5cblx0XHRyZXR1cm4gcmFuZG9tQ2FyZDtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhcmRzRGVjayxcblx0XHRzZWxlY3RSYW5kb21DYXJkLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEJhbms7XG4iLCIvKiBnYW1lRWxlbWVudHMgbW9kdWxlICovXG5cbmltcG9ydCBnZW5lcmF0ZUNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IGNhcmRCYW5rIGZyb20gXCIuL2NhcmRCYW5rXCI7XG5cbmV4cG9ydCB7IGNhcmRCYW5rLCBnZW5lcmF0ZUNhcmQgfTtcbiIsIi8qIGVzbGludCBpbXBvcnQvbm8tY3ljbGU6IFswXSAqL1xuaW1wb3J0IHsgZmluaXNoR2FtZSB9IGZyb20gXCIuLi9nYW1lcGxheS9nYW1lcGxheVwiO1xuaW1wb3J0IHsgcmVuZGVyUGFydGljaXBhbnRJbmZvIH0gZnJvbSBcIi4uL3JlbmRlckdhbWUvcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHsgY2hlY2tHYW1lU3RhdHVzLCBnZXRIYW5kVmFsdWUgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuY29uc3QgZGVhbGVyID0gKCkgPT4ge1xuXHRjb25zdCBjYXJkcyA9IFtdO1xuXG5cdGNvbnN0IHBhcnRpY2lwYW50SWRlbnRpZmllciA9IFwiZGVhbGVyXCI7XG5cblx0Y29uc3QgZGVhbGVyVHVybiA9IChzZXNzaW9uRGVjaywgcGxheWVySGFuZCkgPT4ge1xuXHRcdGxldCBjdXJyZW50SGFuZFZhbHVlID0gZ2V0SGFuZFZhbHVlKGNhcmRzKTtcblxuXHRcdHdoaWxlIChjdXJyZW50SGFuZFZhbHVlIDwgMTcpIHtcblx0XHRcdGNvbnN0IG5ld0NhcmQgPSBzZXNzaW9uRGVjay5zZWxlY3RSYW5kb21DYXJkKCk7XG5cdFx0XHRjYXJkcy5wdXNoKG5ld0NhcmQpO1xuXG5cdFx0XHRjdXJyZW50SGFuZFZhbHVlID0gZ2V0SGFuZFZhbHVlKGNhcmRzKTtcblx0XHRcdHJlbmRlclBhcnRpY2lwYW50SW5mbyh7IGNhcmRzLCBwYXJ0aWNpcGFudElkZW50aWZpZXIgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gT25jZSBkZWFsZXIgaGl0cyAxNyBvciBtb3JlLCBnYW1lIGlzIGZpbmlzaGVkIGFuZCBoYW5kcyBtdXN0IGJlIHJldmlld2VkXG5cblx0XHRjb25zdCBnYW1lU3RhdHVzID0gY2hlY2tHYW1lU3RhdHVzKHBsYXllckhhbmQsIGNhcmRzLCB0cnVlKTtcblxuXHRcdGZpbmlzaEdhbWUoZ2FtZVN0YXR1cy53aW5uZXIpO1xuXHR9O1xuXG5cdHJldHVybiB7IGNhcmRzLCBkZWFsZXJUdXJuLCBwYXJ0aWNpcGFudElkZW50aWZpZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlcjtcbiIsImltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgZGVhbGVyIGZyb20gXCIuL2RlYWxlclwiO1xuXG5leHBvcnQgeyBwbGF5ZXIsIGRlYWxlciB9O1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCB7IGZpbmlzaEdhbWUgfSBmcm9tIFwiLi4vZ2FtZXBsYXkvZ2FtZXBsYXlcIjtcbmltcG9ydCB7IHJlbmRlclBhcnRpY2lwYW50SW5mbyB9IGZyb20gXCIuLi9yZW5kZXJHYW1lL3JlbmRlckdhbWVcIjtcbmltcG9ydCB7IGNoZWNrR2FtZVN0YXR1cyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGNhcmRzID0gW107XG5cblx0Y29uc3QgcGFydGljaXBhbnRJZGVudGlmaWVyID0gXCJwbGF5ZXJcIjtcblxuXHQvLyBUT0RPOiByZW1lbWJlciB0byBhZGQgYmV0XG5cblx0Y29uc3QgaGl0ID0gKHNlc3Npb25EZWNrLCBkZWFsZXJIYW5kKSA9PiB7XG5cdFx0Y29uc3QgaGl0Q2FyZCA9IHNlc3Npb25EZWNrLnNlbGVjdFJhbmRvbUNhcmQoKTtcblx0XHRjYXJkcy5wdXNoKGhpdENhcmQpO1xuXG5cdFx0cmVuZGVyUGFydGljaXBhbnRJbmZvKHsgY2FyZHMsIHBhcnRpY2lwYW50SWRlbnRpZmllciB9KTtcblxuXHRcdGNvbnN0IGdhbWVTdGF0dXMgPSBjaGVja0dhbWVTdGF0dXMoY2FyZHMsIGRlYWxlckhhbmQsIGZhbHNlKTtcblxuXHRcdGlmIChnYW1lU3RhdHVzLmlzRmluaXNoZWQpIHtcblx0XHRcdGZpbmlzaEdhbWUoZ2FtZVN0YXR1cy53aW5uZXIpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhcmRzLFxuXHRcdGhpdCxcblx0XHRwYXJ0aWNpcGFudElkZW50aWZpZXIsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7XG4iLCJjb25zdCBmaW5pc2hHYW1lID0gKHdpbm5lcikgPT4ge1xuXHRjb25zb2xlLmxvZyh3aW5uZXIpO1xuXG5cdC8vIFRPRE86IGltcGxlbWVudC4gZmluaXNoR2FtZSBzaG91bGQgc3dpdGNoIGJhY2sgdGhlIHZpc2liaWxpdHkgb24gZ2FtZWJvYXJkXG5cdC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMsIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluaXNoR2FtZTtcbiIsImltcG9ydCB7IHN0YXJ0R2FtZSwgZmluaXNoR2FtZSB9IGZyb20gXCIuL2dhbWVwbGF5XCI7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyUGFydGljaXBhbnRJbmZvIH0gZnJvbSBcIi4uL3JlbmRlckdhbWUvcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHsgY2hlY2tHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuXHQvLyBJbml0aWFsaXplIGdhbWUgZGF0YSBzdHJ1Y3R1cmVzXG5cblx0Y29uc3QgeyBzZXNzaW9uUGxheWVyLCBzZXNzaW9uRGVhbGVyLCBzZXNzaW9uRGVjayB9ID0gc3RhcnRHYW1lKCk7XG5cblx0Ly8gUmVuZGVyIGdhbWUgYm9hcmRcblx0cmVuZGVyQm9hcmQoKTtcblxuXHRyZW5kZXJQYXJ0aWNpcGFudEluZm8oc2Vzc2lvblBsYXllcik7XG5cdHJlbmRlclBhcnRpY2lwYW50SW5mbyhzZXNzaW9uRGVhbGVyKTtcblxuXHRjb25zdCBnYW1lQWZ0ZXJGaXJzdERlYWwgPSBjaGVja0dhbWVTdGF0dXMoXG5cdFx0c2Vzc2lvblBsYXllci5jYXJkcyxcblx0XHRzZXNzaW9uRGVhbGVyLmNhcmRzLFxuXHRcdGZhbHNlXG5cdCk7XG5cblx0aWYgKGdhbWVBZnRlckZpcnN0RGVhbC5pc0ZpbmlzaGVkKSB7XG5cdFx0ZmluaXNoR2FtZShnYW1lQWZ0ZXJGaXJzdERlYWwud2lubmVyKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBsYXllckhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGl0LWJ1dHRvblwiKTtcblx0Y29uc3QgcGxheWVyU3RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RheS1idXR0b25cIik7XG5cblx0cGxheWVySGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuXHRcdHNlc3Npb25QbGF5ZXIuaGl0KHNlc3Npb25EZWNrLCBzZXNzaW9uRGVhbGVyLmNhcmRzKVxuXHQpO1xuXHRwbGF5ZXJTdGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuXHRcdHNlc3Npb25EZWFsZXIuZGVhbGVyVHVybihzZXNzaW9uRGVjaywgc2Vzc2lvblBsYXllci5jYXJkcylcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVDb250cm9sbGVyO1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vc3RhcnRHYW1lXCI7XG5pbXBvcnQgZmluaXNoR2FtZSBmcm9tIFwiLi9maW5pc2hHYW1lXCI7XG5cbmV4cG9ydCB7IHN0YXJ0R2FtZSwgZmluaXNoR2FtZSB9O1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCB7IHBsYXllciwgZGVhbGVyIH0gZnJvbSBcIi4uL2dhbWVQYXJ0aWNpcGFudHMvZ2FtZVBhcnRpY2lwYW50c1wiO1xuaW1wb3J0IHsgY2FyZEJhbmsgfSBmcm9tIFwiLi4vZ2FtZUVsZW1lbnRzL2dhbWVFbGVtZW50c1wiO1xuXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cdGNvbnN0IHNlc3Npb25EZWNrID0gY2FyZEJhbmsoKTtcblxuXHRjb25zdCBzZXNzaW9uUGxheWVyID0gcGxheWVyKCk7XG5cdGNvbnN0IHNlc3Npb25EZWFsZXIgPSBkZWFsZXIoKTtcblxuXHQvLyBBc3NpZ24gdGhlIGZpcnN0IDIgcmFuZG9tIGZvciBlYWNoIHBhcnRpY2lwYW50XG5cdGZvciAobGV0IHJlcXVpcmVkQ2FyZHMgPSAwOyByZXF1aXJlZENhcmRzIDwgMjsgcmVxdWlyZWRDYXJkcyArPSAxKSB7XG5cdFx0Y29uc3QgbmV3UGxheWVyQ2FyZCA9IHNlc3Npb25EZWNrLnNlbGVjdFJhbmRvbUNhcmQoKTtcblx0XHRjb25zdCBuZXdEZWFsZXJDYXJkID0gc2Vzc2lvbkRlY2suc2VsZWN0UmFuZG9tQ2FyZCgpO1xuXG5cdFx0c2Vzc2lvblBsYXllci5jYXJkcy5wdXNoKG5ld1BsYXllckNhcmQpO1xuXHRcdHNlc3Npb25EZWFsZXIuY2FyZHMucHVzaChuZXdEZWFsZXJDYXJkKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c2Vzc2lvblBsYXllcixcblx0XHRzZXNzaW9uRGVhbGVyLFxuXHRcdHNlc3Npb25EZWNrLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRHYW1lO1xuIiwiY29uc3QgcmVuZGVyQm9hcmQgPSAoKSA9PiB7XG5cdGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtY29udGFpbmVyXCIpO1xuXHRnYW1lQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckJvYXJkO1xuIiwiaW1wb3J0IHsgZm9ybWF0Q2FyZEhhbmQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuY29uc3QgcmVuZGVyQ2FyZHMgPSAodGFyZ2V0SUQsIGNhcmRzVG9SZW5kZXIpID0+IHtcblx0Y29uc3QgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0SUR9LWNhcmRzYCk7XG5cblx0dGFyZ2V0Q29udGFpbmVyLmlubmVySFRNTCA9IGZvcm1hdENhcmRIYW5kKGNhcmRzVG9SZW5kZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FyZHM7XG4iLCIvKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMF0gKi9cblxuaW1wb3J0IHJlbmRlckJvYXJkIGZyb20gXCIuL3JlbmRlckJvYXJkXCI7XG5pbXBvcnQgcmVuZGVyQ2FyZHMgZnJvbSBcIi4vcmVuZGVyQ2FyZHNcIjtcbmltcG9ydCByZW5kZXJIYW5kU3VtIGZyb20gXCIuL3JlbmRlckhhbmRTdW1cIjtcbmltcG9ydCByZW5kZXJQYXJ0aWNpcGFudEluZm8gZnJvbSBcIi4vcmVuZGVyUGFydGljaXBhbnRJbmZvXCI7XG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJDYXJkcywgcmVuZGVySGFuZFN1bSwgcmVuZGVyUGFydGljaXBhbnRJbmZvIH07XG4iLCJjb25zdCByZW5kZXJIYW5kU3VtID0gKHRhcmdldCwgc3VtKSA9PiB7XG5cdGNvbnN0IHN1bUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldH0tc3VtYCk7XG5cdHN1bUNvbnRhaW5lci5pbm5lckhUTUwgPSBzdW07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIYW5kU3VtO1xuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogWzBdICovXG5cbmltcG9ydCB7IHJlbmRlckhhbmRTdW0sIHJlbmRlckNhcmRzIH0gZnJvbSBcIi4vcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHsgZ2V0SGFuZFZhbHVlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IHJlbmRlclBhcnRpY2lwYW50SW5mbyA9IChwYXJ0aWNpcGFudCkgPT4ge1xuXHRyZW5kZXJDYXJkcyhwYXJ0aWNpcGFudC5wYXJ0aWNpcGFudElkZW50aWZpZXIsIHBhcnRpY2lwYW50LmNhcmRzKTtcblxuXHRjb25zdCBwYXJ0aWNpcGFudFN1bSA9IGdldEhhbmRWYWx1ZShwYXJ0aWNpcGFudC5jYXJkcyk7XG5cdHJlbmRlckhhbmRTdW0ocGFydGljaXBhbnQucGFydGljaXBhbnRJZGVudGlmaWVyLCBwYXJ0aWNpcGFudFN1bSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQYXJ0aWNpcGFudEluZm87XG4iLCJjb25zdCBnZXRIYW5kVmFsdWUgPSAoY2FyZHMpID0+IHtcblx0bGV0IGhhbmRWYWx1ZSA9IDA7XG5cblx0Zm9yIChjb25zdCBjYXJkIG9mIGNhcmRzKSB7XG5cdFx0aGFuZFZhbHVlICs9IGNhcmQuY2FyZFZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGhhbmRWYWx1ZTtcbn07XG5cbmNvbnN0IGZvcm1hdENhcmRIYW5kID0gKGNhcmRzKSA9PlxuXHRcIlwiLmNvbmNhdCguLi5jYXJkcy5tYXAoKGNhcmQpID0+IGNhcmQucHJpbnRDYXJkKCkpKTtcblxuY29uc3QgY2hlY2tHYW1lU3RhdHVzID0gKHBsYXllckhhbmQsIGRlYWxlckhhbmQsIGlzRmluaXNoZWQpID0+IHtcblx0Y29uc3QgY2hlY2tSZXN1bHQgPSB7XG5cdFx0aXNGaW5pc2hlZCxcblx0XHR3aW5uZXI6IG51bGwsXG5cdH07XG5cblx0Y29uc3QgcGxheWVySGFuZFZhbHVlID0gZ2V0SGFuZFZhbHVlKHBsYXllckhhbmQpO1xuXHRjb25zdCBkZWFsZXJIYW5kVmFsdWUgPSBnZXRIYW5kVmFsdWUoZGVhbGVySGFuZCk7XG5cblx0Y29uc29sZS5sb2coYHBsYXllckhhbmRWYWx1ZTogJHtwbGF5ZXJIYW5kVmFsdWV9YCk7XG5cdGNvbnNvbGUubG9nKGBkZWFsZXJIYW5kVmFsdWU6ICR7ZGVhbGVySGFuZFZhbHVlfWApO1xuXG5cdC8vIFRoaXMgY29uZGl0aW9uIGlzIGNhbGxlZCBvbmx5IHdoZW4gdGhlIGRlYWxlcidzIHR1cm4gaXMgb3ZlclxuXHRpZiAoY2hlY2tSZXN1bHQuaXNGaW5pc2hlZCkge1xuXHRcdGlmIChwbGF5ZXJIYW5kVmFsdWUgPiAyMSkge1xuXHRcdFx0Y2hlY2tSZXN1bHQud2lubmVyID0gXCJkZWFsZXJcIjtcblx0XHRcdHJldHVybiBjaGVja1Jlc3VsdDtcblx0XHR9XG5cblx0XHRpZiAoZGVhbGVySGFuZFZhbHVlID4gMjEpIHtcblx0XHRcdGNoZWNrUmVzdWx0Lndpbm5lciA9IFwicGxheWVyXCI7XG5cdFx0XHRyZXR1cm4gY2hlY2tSZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y2hlY2tSZXN1bHQud2lubmVyID1cblx0XHRcdHBsYXllckhhbmRWYWx1ZSA+IGRlYWxlckhhbmRWYWx1ZSA/IFwicGxheWVyXCIgOiBcImRlYWxlclwiO1xuXG5cdFx0cmV0dXJuIGNoZWNrUmVzdWx0O1xuXHR9XG5cblx0aWYgKHBsYXllckhhbmRWYWx1ZSA9PT0gMjEgfHwgZGVhbGVySGFuZFZhbHVlID4gMjEpIHtcblx0XHRjaGVja1Jlc3VsdC5pc0ZpbmlzaGVkID0gdHJ1ZTtcblx0XHRjaGVja1Jlc3VsdC53aW5uZXIgPSBcInBsYXllclwiO1xuXG5cdFx0cmV0dXJuIGNoZWNrUmVzdWx0O1xuXHR9XG5cblx0aWYgKGRlYWxlckhhbmRWYWx1ZSA9PT0gMjEgfHwgcGxheWVySGFuZFZhbHVlID4gMjEpIHtcblx0XHRjb25zb2xlLmxvZyhcImNhbGxlZCBkZWFsZXJcIik7XG5cdFx0Y2hlY2tSZXN1bHQuaXNGaW5pc2hlZCA9IHRydWU7XG5cdFx0Y2hlY2tSZXN1bHQud2lubmVyID0gXCJkZWFsZXJcIjtcblxuXHRcdHJldHVybiBjaGVja1Jlc3VsdDtcblx0fVxuXG5cdHJldHVybiBjaGVja1Jlc3VsdDtcbn07XG5cbmV4cG9ydCB7IGdldEhhbmRWYWx1ZSwgZm9ybWF0Q2FyZEhhbmQsIGNoZWNrR2FtZVN0YXR1cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGdhbWVDb250cm9sbGVyIGZyb20gXCIuL2dhbWVwbGF5L2dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1nYW1lLWJ1dHRvblwiKTtcblxuc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBnYW1lQ29udHJvbGxlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==