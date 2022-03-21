/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/constants/index.js":
/*!***********************************!*\
  !*** ./src/js/constants/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INTERSECTION_RATIO": function() { return /* binding */ INTERSECTION_RATIO; },
/* harmony export */   "MAX_SAVE_COUNT": function() { return /* binding */ MAX_SAVE_COUNT; },
/* harmony export */   "MESSAGE": function() { return /* binding */ MESSAGE; },
/* harmony export */   "SNACK_BAR_SHOWING_TIME_IN_MS": function() { return /* binding */ SNACK_BAR_SHOWING_TIME_IN_MS; },
/* harmony export */   "STORAGE_KEY": function() { return /* binding */ STORAGE_KEY; }
/* harmony export */ });
var MAX_SAVE_COUNT = 100;
var MESSAGE = {
  ERROR_BLANK_SEARCH_INPUT: '검색어를 입력해주세요.',
  ERROR_GET_REQUEST: '서버와의 통신에 문제가 발생했습니다.',
  ERROR_EXCESS_SAVE_COUNT: "\uB3D9\uC601\uC0C1\uC740 \uCD5C\uB300 ".concat(MAX_SAVE_COUNT, "\uAC1C\uAE4C\uC9C0\uB9CC \uC800\uC7A5\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),
  NOT_FOUND: '검색 결과가 없습니다.',
  OTHER_KEYWORD: '다른 키워드로 검색해보세요.',
  SAVE_SUCCESS: '저장되었습니다.',
  SAVE_FAILURE: '저장에 실패하였습니다.',
  CHECK_SUCCESS: '본 영상에 추가되었습니다.',
  CHECK_FAILURE: '본 영상 추가에 실패하였습니다.',
  REMOVE_SUCCESS: '삭제되었습니다.',
  REMOVE_FAILURE: '삭제에 실패하였습니다.',
  EMPTY_SAVED_VIDEO: '저장된 동영상이 없습니다',
  REMOVE_CONFIRM: '정말 삭제하시겠습니까?',
  NOT_RESPONSE_OK: "\uC815\uC0C1\uC801\uC778 \uC751\uB2F5\uC744 \uBC1B\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. status code: "
};
var STORAGE_KEY = 'savedVideoList';
var SNACK_BAR_SHOWING_TIME_IN_MS = 2000;
var INTERSECTION_RATIO = 0.5;


/***/ }),

/***/ "./src/js/domain/requestVideoSearchApi.js":
/*!************************************************!*\
  !*** ./src/js/domain/requestVideoSearchApi.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestVideoSearchApi": function() { return /* binding */ requestVideoSearchApi; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var BASE_URL = 'https://mincho-youtube.netlify.app/youtube/v3/search';
var parameters = {
  part: 'snippet',
  maxResults: 10,
  type: 'video',
  q: null,
  pageToken: ''
};

var requestVideoSearchApi = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(searchText) {
    var nextPageToken,
        url,
        searchParams,
        response,
        videoData,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nextPageToken = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
            url = new URL(BASE_URL);
            searchParams = new URLSearchParams(_objectSpread(_objectSpread({}, parameters), {}, {
              q: searchText,
              pageToken: nextPageToken
            }));
            url.search = searchParams.toString();
            _context.prev = 4;
            _context.next = 7;
            return fetch(url);

          case 7:
            response = _context.sent;

            if (response.ok) {
              _context.next = 10;
              break;
            }

            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_4__.MESSAGE.NOT_RESPONSE_OK + response.status);

          case 10:
            _context.next = 12;
            return response.json();

          case 12:
            videoData = _context.sent;
            return _context.abrupt("return", videoData);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            console.error(_context.t0);
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_4__.MESSAGE.ERROR_GET_REQUEST);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 16]]);
  }));

  return function requestVideoSearchApi(_x) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/js/domain/video.js":
/*!********************************!*\
  !*** ./src/js/domain/video.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "video": function() { return /* binding */ video; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var video = {
  save: function save(datasetElementsArray) {
    try {
      var savedVideoList = this.getVideoList();

      if (savedVideoList.length >= _constants__WEBPACK_IMPORTED_MODULE_1__.MAX_SAVE_COUNT) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE.ERROR_EXCESS_SAVE_COUNT);
      }

      var videoData = this.formatter(datasetElementsArray);
      savedVideoList.push(videoData);
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE_KEY, JSON.stringify(savedVideoList));
    } catch (error) {
      throw new Error(error);
    }
  },
  check: function check(videoId) {
    var savedVideoList = this.getVideoList();
    var updatedVideoList = savedVideoList.map(function (savedVideo) {
      if (savedVideo.videoId === videoId) {
        savedVideo.watched = 'watched';
      }

      return savedVideo;
    });
    localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE_KEY);
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE_KEY, JSON.stringify(updatedVideoList));
  },
  remove: function remove(videoId) {
    var savedVideoList = this.getVideoList();
    var updatedVideoList = savedVideoList.filter(function (savedVideo) {
      return savedVideo.videoId !== videoId;
    });
    localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE_KEY);
    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE_KEY, JSON.stringify(updatedVideoList));
  },
  getVideoList: function getVideoList() {
    var _JSON$parse;

    return (_JSON$parse = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE_KEY))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
  },
  formatter: function formatter(datasetElementsArray) {
    var datasetObject = datasetElementsArray.reduce(function (acc, val) {
      return _objectSpread(_objectSpread({}, acc), val);
    }, {});

    var formattedObject = _objectSpread(_objectSpread({}, datasetObject), {}, {
      watched: 'notWatched'
    });

    return formattedObject;
  },
  getFilteredVideoList: function getFilteredVideoList(isWatched) {
    var savedVideoList = this.getVideoList();
    var filteredVideoList = savedVideoList.filter(function (savedVideo) {
      return savedVideo.watched === isWatched;
    });
    return filteredVideoList;
  }
};

/***/ }),

/***/ "./src/js/ui/ClassRoom.js":
/*!********************************!*\
  !*** ./src/js/ui/ClassRoom.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ClassRoom; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _domain_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/video */ "./src/js/domain/video.js");
/* harmony import */ var _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classRoomVideo */ "./src/js/ui/classRoomVideo.js");









var ClassRoom = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClassRoom() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClassRoom);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleNavTabButtonClick", function (e) {
    _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.resetVideoList();
    e.target.classList.add('highlight');

    if (e.target === _this.$willWatchVideoButton) {
      _this.$watchedVideoButton.classList.remove('highlight');

      _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.resetVideoList();
      _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.renderVideoList('notWatched');
      return;
    }

    _this.$willWatchVideoButton.classList.remove('highlight');

    _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.resetVideoList();
    _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.renderVideoList('watched');
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleVideoCheckButtonClick", function (e) {
    if (e.target.classList.contains('video-item__check-button')) {
      try {
        var videoId = e.target.dataset.videoId;
        _domain_video__WEBPACK_IMPORTED_MODULE_5__.video.check(videoId);
        _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.resetVideoList();
        _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.renderVideoList('notWatched');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE.CHECK_SUCCESS);
      } catch (_unused) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE.CHECK_FAILURE);
      }
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleVideoRemoveButtonClick", function (e) {
    if (e.target.classList.contains('video-item__remove-button') && confirm(_constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE.REMOVE_CONFIRM)) {
      try {
        var videoId = e.target.dataset.videoId;
        _domain_video__WEBPACK_IMPORTED_MODULE_5__.video.remove(videoId);
        _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.resetVideoList();
        _this.$watchedVideoButton.classList.contains('highlight') ? _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.renderVideoList('watched') : _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.renderVideoList('notWatched');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE.REMOVE_SUCCESS);
      } catch (_unused2) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_3__.MESSAGE.REMOVE_FAILURE);
      }
    }
  });

  this.$navTab = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('.nav__tab');
  this.$willWatchVideoButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#will-watch-video-button');
  this.$watchedVideoButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#watched-video-button');
  this.$classroomVideoList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('.classroom-video__list');
  this.$willWatchVideoButton.classList.add('highlight');
  _classRoomVideo__WEBPACK_IMPORTED_MODULE_6__.classRoomVideo.renderVideoList('notWatched');
  this.$navTab.addEventListener('click', this.handleNavTabButtonClick);
  this.$classroomVideoList.addEventListener('click', this.handleVideoCheckButtonClick);
  this.$classroomVideoList.addEventListener('click', this.handleVideoRemoveButtonClick);
});



/***/ }),

/***/ "./src/js/ui/classRoomVideo.js":
/*!*************************************!*\
  !*** ./src/js/ui/classRoomVideo.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classRoomVideo": function() { return /* binding */ classRoomVideo; }
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _domain_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/video */ "./src/js/domain/video.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.js");
/* harmony import */ var _assets_images_empty_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/empty.png */ "./src/assets/images/empty.png");




var classRoomVideo = {
  $classroomVideoList: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.classroom-video__list'),
  resetVideoList: function resetVideoList() {
    this.$classroomVideoList.replaceChildren();
  },
  videoListTemplate: function videoListTemplate(videoList) {
    var template = videoList.map(function (videoData) {
      var videoId = videoData.videoId,
          title = videoData.title,
          channelTitle = videoData.channelTitle,
          publishedDate = videoData.publishedDate,
          thumbnailUrl = videoData.thumbnailUrl,
          watched = videoData.watched;
      return "\n          <li class=\"video-item\">\n            <a href=\"https://www.youtube.com/watch?v=".concat(videoId, "\" target=\"_blank\" \n            data-thumbnail-url=").concat(thumbnailUrl, ">\n              <img\n                src=").concat(thumbnailUrl, "\n                alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\"\n                >\n            </a>\n            <a href=\"https://www.youtube.com/watch?v=").concat(videoId, "\" target=\"_blank\" data-title=").concat(encodeURIComponent(title), ">\n              <h4 class=\"video-item__title\">").concat(decodeURIComponent(title), "</h4>\n            </a>\n            <p class=\"video-item__channel-name\" data-channel-title=").concat(channelTitle, ">\n            ").concat(decodeURIComponent(channelTitle), "\n            </p>\n            <p class=\"video-item__published-date\" data-published-date=").concat(publishedDate, ">\n              ").concat((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.convertToKoreaLocaleDate)(publishedDate), "\n            </p>\n            <button class=\"video-item__check-button button ").concat(watched === 'watched' ? 'highlight' : '', "\" data-video-id=\"").concat(videoId, "\" ").concat(watched === 'watched' ? 'disabled' : '', ">\u2705</button>\n            <button class=\"video-item__remove-button button\" data-video-id=\"").concat(videoId, "\">\uD83D\uDDD1\uFE0F</button>\n          </li>");
    }).join('');
    return template;
  },
  emptyVideoListTemplate: function emptyVideoListTemplate() {
    return "\n      <div class=\"empty-result\">\n        <div class=\"empty-result__description\">\n          <img src=".concat(_assets_images_empty_png__WEBPACK_IMPORTED_MODULE_3__["default"], ">\n        </div>\n      </div>\n    ");
  },
  renderVideoList: function renderVideoList(isWatched) {
    var filteredVideoList = _domain_video__WEBPACK_IMPORTED_MODULE_1__.video.getFilteredVideoList(isWatched);
    this.$classroomVideoList.insertAdjacentHTML('afterbegin', filteredVideoList.length > 0 ? this.videoListTemplate(filteredVideoList) : this.emptyVideoListTemplate());
  }
};

/***/ }),

/***/ "./src/js/ui/skeletonUI.js":
/*!*********************************!*\
  !*** ./src/js/ui/skeletonUI.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skeletonUI": function() { return /* binding */ skeletonUI; }
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");

var skeletonUI = {
  $videoList: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list'),
  template: function template() {
    return "\n      <div class=\"skeleton\">\n        <div class=\"skeleton__image\"></div>\n        <p class=\"skeleton__line\"></p>\n        <pfs class=\"skeleton__line\"></p>\n        <p class=\"skeleton__line\"></p>\n      </div>\n    ";
  },
  render: function render() {
    this.$videoList.insertAdjacentHTML('beforeend', this.template().repeat(10));
  },
  remove: function remove() {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$$)('.skeleton').forEach(function (skeleton) {
      return skeleton.remove();
    });
  }
};

/***/ }),

/***/ "./src/js/ui/videoSearchForm.js":
/*!**************************************!*\
  !*** ./src/js/ui/videoSearchForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videoSearchForm": function() { return /* binding */ videoSearchForm; }
/* harmony export */ });
/* harmony import */ var _domain_requestVideoSearchApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/requestVideoSearchApi */ "./src/js/domain/requestVideoSearchApi.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _skeletonUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeletonUI */ "./src/js/ui/skeletonUI.js");
/* harmony import */ var _videoSearchResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videoSearchResult */ "./src/js/ui/videoSearchResult.js");





var videoSearchForm = {
  $searchForm: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('#search-form'),
  $searchInputKeyword: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('#search-input-keyword'),
  preventFormDeafultEvent: function preventFormDeafultEvent() {
    this.$searchForm.addEventListener('submit', this.handleFormDefaultEvent);
  },
  addSearchEvent: function addSearchEvent() {
    this.$searchForm.addEventListener('submit', (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.debounce)(this.handleSubmit.bind(this), 300));
  },
  handleFormDefaultEvent: function handleFormDefaultEvent(e) {
    e.preventDefault();
  },
  handleSubmit: function handleSubmit() {
    _videoSearchResult__WEBPACK_IMPORTED_MODULE_4__.videoSearchResult.resetVideoList();
    _skeletonUI__WEBPACK_IMPORTED_MODULE_3__.skeletonUI.render();
    (0,_domain_requestVideoSearchApi__WEBPACK_IMPORTED_MODULE_0__.requestVideoSearchApi)(this.$searchInputKeyword.value).then(function (videoData) {
      _videoSearchResult__WEBPACK_IMPORTED_MODULE_4__.videoSearchResult.renderInitialVideoList(videoData);
    }).catch(function (_ref) {
      var message = _ref.message;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(message);
      _skeletonUI__WEBPACK_IMPORTED_MODULE_3__.skeletonUI.remove();
    });
  }
};

/***/ }),

/***/ "./src/js/ui/videoSearchModal.js":
/*!***************************************!*\
  !*** ./src/js/ui/videoSearchModal.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoSearchModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _videoSearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videoSearchForm */ "./src/js/ui/videoSearchForm.js");
/* harmony import */ var _videoSearchResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videoSearchResult */ "./src/js/ui/videoSearchResult.js");







var VideoSearchModal = /*#__PURE__*/function () {
  function VideoSearchModal() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoSearchModal);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleSearchModalButtonClick", function () {
      _this.toggleShowSearchModal();

      _this.$searchInputKeyword.focus();
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "reset", function () {
      _this.toggleShowSearchModal();

      _videoSearchResult__WEBPACK_IMPORTED_MODULE_5__.videoSearchResult.resetVideoList();
      _this.$searchInputKeyword.value = '';
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleESCKeyDown", function (e) {
      if (e.key === 'Escape') _this.reset(e);
    });

    this.$searchInputKeyword = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#search-input-keyword');
    this.$modalContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.modal-container');
    this.$searchModalButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#search-modal-button');
    this.$dimmer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.dimmer');
    this.$searchModalButton.addEventListener('click', this.handleSearchModalButtonClick);
    this.$dimmer.addEventListener('click', this.reset);
    this.$modalContainer.addEventListener('keydown', this.handleESCKeyDown);
    _videoSearchForm__WEBPACK_IMPORTED_MODULE_4__.videoSearchForm.preventFormDeafultEvent();
    _videoSearchForm__WEBPACK_IMPORTED_MODULE_4__.videoSearchForm.addSearchEvent();
    _videoSearchResult__WEBPACK_IMPORTED_MODULE_5__.videoSearchResult.addSaveButtonClickEvent();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoSearchModal, [{
    key: "toggleShowSearchModal",
    value: function toggleShowSearchModal() {
      this.$modalContainer.classList.toggle('hide');
    }
  }]);

  return VideoSearchModal;
}();



/***/ }),

/***/ "./src/js/ui/videoSearchResult.js":
/*!****************************************!*\
  !*** ./src/js/ui/videoSearchResult.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videoSearchResult": function() { return /* binding */ videoSearchResult; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _domain_requestVideoSearchApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/requestVideoSearchApi */ "./src/js/domain/requestVideoSearchApi.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.js");
/* harmony import */ var _skeletonUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skeletonUI */ "./src/js/ui/skeletonUI.js");
/* harmony import */ var _domain_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../domain/video */ "./src/js/domain/video.js");
/* harmony import */ var _classRoomVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classRoomVideo */ "./src/js/ui/classRoomVideo.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var videoSearchResult = {
  $videoList: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.video-list'),
  $searchInputKeyword: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#search-input-keyword'),
  $willWatchVideoButton: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#will-watch-video-button'),
  $watchedVideoButton: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#watched-video-button'),
  searchResultTemplate: function searchResultTemplate(items) {
    var savedVideoList = _domain_video__WEBPACK_IMPORTED_MODULE_8__.video.getVideoList();
    var template = items.map(function (item) {
      var _item$snippet = item.snippet,
          publishedAt = _item$snippet.publishedAt,
          title = _item$snippet.title,
          thumbnails = _item$snippet.thumbnails,
          channelTitle = _item$snippet.channelTitle;
      return "\n          <li class=\"video-item modal-video-item\">\n            <a href=\"https://www.youtube.com/watch?v=".concat(item.id.videoId, "\" target=\"_blank\" \n            data-thumbnail-url=").concat(thumbnails.medium.url, ">\n              <img\n                src=").concat(thumbnails.medium.url, "\n                alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\"\n                >\n            </a>\n            <a href=\"https://www.youtube.com/watch?v=").concat(item.id.videoId, "\" target=\"_blank\" data-title=").concat(encodeURIComponent(title), ">\n              <h4 class=\"video-item__title\">").concat(title, "</h4>\n            </a>\n            <p class=\"video-item__channel-name\" data-channel-title=").concat(encodeURIComponent(channelTitle), " >").concat(channelTitle, "\n            </p>\n            <p class=\"video-item__published-date\" data-published-date=").concat(publishedAt, ">\n              ").concat((0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.convertToKoreaLocaleDate)(publishedAt), "\n            </p>\n            <button class=\"video-item__save-button button\" data-video-id=").concat(item.id.videoId, " ").concat(savedVideoList.includes(item.id.videoId) ? 'hidden' : '', ">\u2B07 \uC800\uC7A5</button>\n          </li>");
    }).join('');
    return template;
  },
  noSearchResultTemplate: function noSearchResultTemplate() {
    return "\n      <div class=\"no-result\">\n        <img class=\"no-result__image\"\n          src=".concat(_assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_4__["default"], "\n          alt=\"no-result-image\"\n        >\n        <div class=\"no-result__description\">\n          <p>").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE.NOT_FOUND, "</p>\n          <p>").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE.OTHER_KEYWORD, "</p>\n        </div>\n      </div>\n    ");
  },
  renderInitialVideoList: function renderInitialVideoList(videoData) {
    this.$videoList.replaceChildren();
    this.$videoList.insertAdjacentHTML('beforeend', videoData.items.length ? this.searchResultTemplate(videoData.items) : this.noSearchResultTemplate());

    if (videoData && videoData.nextPageToken) {
      this.scrollObserver(videoData.nextPageToken);
    }
  },
  renderNextVideoList: function renderNextVideoList(nextPageToken) {
    var _this = this;

    _skeletonUI__WEBPACK_IMPORTED_MODULE_7__.skeletonUI.render();
    (0,_domain_requestVideoSearchApi__WEBPACK_IMPORTED_MODULE_5__.requestVideoSearchApi)(this.$searchInputKeyword.value, nextPageToken).then(function (videoData) {
      _skeletonUI__WEBPACK_IMPORTED_MODULE_7__.skeletonUI.remove();

      _this.$videoList.insertAdjacentHTML('beforeend', _this.searchResultTemplate(videoData.items));

      if (videoData && videoData.nextPageToken) {
        _this.scrollObserver(videoData.nextPageToken);
      }
    }).catch(function (_ref) {
      var message = _ref.message;
      _skeletonUI__WEBPACK_IMPORTED_MODULE_7__.skeletonUI.remove();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(message);
    });
  },
  addSaveButtonClickEvent: function addSaveButtonClickEvent() {
    this.$videoList.addEventListener('click', this.handleSaveButtonClick.bind(this));
  },
  handleSaveButtonClick: function handleSaveButtonClick(e) {
    if (e.target.classList.contains('video-item__save-button')) {
      try {
        var datasetElementsArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.closest('.video-item').children).map(function (element) {
          return _objectSpread({}, element.dataset);
        });

        _domain_video__WEBPACK_IMPORTED_MODULE_8__.video.save(datasetElementsArray);
        e.target.setAttribute('hidden', true);
        _classRoomVideo__WEBPACK_IMPORTED_MODULE_9__.classRoomVideo.resetVideoList();
        _classRoomVideo__WEBPACK_IMPORTED_MODULE_9__.classRoomVideo.renderVideoList('notWatched');
        this.$willWatchVideoButton.classList.add('highlight');
        this.$watchedVideoButton.classList.remove('highlight');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE.SAVE_SUCCESS);
      } catch (_ref2) {
        var message = _ref2.message;
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(message);
      }
    }
  },
  scrollObserver: function scrollObserver(nextPageToken) {
    var _this2 = this;

    var $currentLastChildLiElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.modal-video-item:last-child');
    var intersectionObserver = new IntersectionObserver(function (entry) {
      if (entry[0].isIntersecting) {
        intersectionObserver.unobserve($currentLastChildLiElement);

        _this2.renderNextVideoList(nextPageToken);
      }
    }, {
      threshold: _constants__WEBPACK_IMPORTED_MODULE_2__.INTERSECTION_RATIO
    });
    intersectionObserver.observe($currentLastChildLiElement);
  },
  resetVideoList: function resetVideoList() {
    this.$videoList.replaceChildren();
  }
};

/***/ }),

/***/ "./src/js/utils/common.js":
/*!********************************!*\
  !*** ./src/js/utils/common.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToKoreaLocaleDate": function() { return /* binding */ convertToKoreaLocaleDate; },
/* harmony export */   "debounce": function() { return /* binding */ debounce; }
/* harmony export */ });
var convertToKoreaLocaleDate = function convertToKoreaLocaleDate(date) {
  return new Date(date).toLocaleString('ko-KR');
};

var debounce = function debounce(callback, wait) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timerId);
    timerId = setTimeout(function () {
      callback.apply(void 0, args);
    }, wait);
  };
};



/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "$$": function() { return /* binding */ $$; },
/* harmony export */   "showSnackBar": function() { return /* binding */ showSnackBar; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");


var $ = function $(selector) {
  var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return baseElement.querySelector(selector);
};

var $$ = function $$(selector) {
  var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return baseElement.querySelectorAll(selector);
};

var showSnackBar = function showSnackBar(message) {
  var $snackBar = $('#snack-bar');
  $snackBar.classList.add('show');
  $snackBar.textContent = message;
  setTimeout(function () {
    $snackBar.classList.remove('show');
  }, _constants__WEBPACK_IMPORTED_MODULE_0__.SNACK_BAR_SHOWING_TIME_IN_MS);
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/index.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/index.css ***!
  \***********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./snackbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_classroom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./classroom.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/classroom.css");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_classroom_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --a-color: #000000;\n  --a-hover-color: #00bcd4;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n  color: var(--a-color);\n}\na:visited {\n  text-decoration: none;\n}\na:hover {\n  color: var(--a-hover-color);\n}\na:focus {\n  text-decoration: none;\n}\na:active {\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAMA;EACE,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB","sourcesContent":["@import './app.css';\n@import './modal.css';\n@import './snackbar.css';\n@import './skeleton.css';\n@import './classroom.css';\n\n:root {\n  --a-color: #000000;\n  --a-hover-color: #00bcd4;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n  color: var(--a-color);\n}\na:visited {\n  text-decoration: none;\n}\na:hover {\n  color: var(--a-hover-color);\n}\na:focus {\n  text-decoration: none;\n}\na:active {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --nav__button-background-color: #f5f5f5;\n  --nav__button-hover-background-color: #ebebeb;\n}\n\nbody {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: var(--nav__button-background-color);\n}\n\n.nav__button:hover {\n  background: var(--nav__button-hover-background-color);\n}\n\n.nav__tab .nav__button {\n  width: 100px;\n}\n\n@media (max-width: 599px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(1, 240px);\n    justify-content: center;\n  }\n\n  .search-input__keyword {\n    max-width: 300px;\n  }\n\n  .nav {\n    justify-content: space-around;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 959px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(2, 240px);\n    justify-content: center;\n  }\n\n  #app {\n    width: 550px;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1279px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(3, 240px);\n    justify-content: center;\n  }\n\n  #app {\n    width: 800px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(4, 240px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,6CAA6C;AAC/C;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+CAA+C;AACjD;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;;IAEE,uCAAuC;IACvC,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,6BAA6B;EAC/B;AACF;;AAEA;EACE;;IAEE,uCAAuC;IACvC,uBAAuB;EACzB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;;IAEE,uCAAuC;IACvC,uBAAuB;EACzB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;;IAEE,uCAAuC;EACzC;AACF","sourcesContent":[":root {\n  --nav__button-background-color: #f5f5f5;\n  --nav__button-hover-background-color: #ebebeb;\n}\n\nbody {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: var(--nav__button-background-color);\n}\n\n.nav__button:hover {\n  background: var(--nav__button-hover-background-color);\n}\n\n.nav__tab .nav__button {\n  width: 100px;\n}\n\n@media (max-width: 599px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(1, 240px);\n    justify-content: center;\n  }\n\n  .search-input__keyword {\n    max-width: 300px;\n  }\n\n  .nav {\n    justify-content: space-around;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 959px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(2, 240px);\n    justify-content: center;\n  }\n\n  #app {\n    width: 550px;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1279px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(3, 240px);\n    justify-content: center;\n  }\n\n  #app {\n    width: 800px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .video-list,\n  .classroom-video__list {\n    grid-template-columns: repeat(4, 240px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/classroom.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/classroom.css ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --video-item__check-button-background-color: #f9f9f9;\n  --video-item__check-button-hover-color: #efefef;\n  --video-item__remove-button-background-color: #f9f9f9;\n  --video-item__remove-button-hover-color: #efefef;\n  --button__highlighted-color: rgba(0, 188, 212, 0.12);\n}\n\n.video-item__check-button {\n  position: absolute;\n  right: 40px;\n  width: 36px;\n  height: 36px;\n  background: var(--video-item__check-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__check-button:hover {\n  background: var(--video-item__check-button-hover-color);\n}\n\n.video-item__remove-button {\n  position: absolute;\n  right: 0;\n  width: 36px;\n  height: 36px;\n  background: var(--video-item__remove-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__remove-button:hover {\n  background: var(--video-item__remove-button-hover-color);\n}\n\n.empty-result {\n  position: relative;\n  width: 100%;\n  height: 600px;\n}\n\n.empty-result__description {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  font-size: 20px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.highlight {\n  background: var(--button__highlighted-color);\n}\n\n#will-watch-video-button:hover,\n#watched-video-button:hover {\n  background: var(--button__highlighted-color);\n}\n\n.classroom-video {\n  margin-top: 40px;\n}\n\n.classroom-video__list {\n  display: grid;\n  gap: 32px 14px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.empty-result {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.empty-result__description {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  font-size: 30px;\n  width: 400px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.empty-result img {\n  transform: scale(0.7);\n}\n", "",{"version":3,"sources":["webpack://./src/css/classroom.css"],"names":[],"mappings":"AAAA;EACE,oDAAoD;EACpD,+CAA+C;EAC/C,qDAAqD;EACrD,gDAAgD;EAChD,oDAAoD;AACtD;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,4DAA4D;EAC5D,eAAe;AACjB;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,6DAA6D;EAC7D,eAAe;AACjB;;AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;;EAEE,4CAA4C;AAC9C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[":root {\n  --video-item__check-button-background-color: #f9f9f9;\n  --video-item__check-button-hover-color: #efefef;\n  --video-item__remove-button-background-color: #f9f9f9;\n  --video-item__remove-button-hover-color: #efefef;\n  --button__highlighted-color: rgba(0, 188, 212, 0.12);\n}\n\n.video-item__check-button {\n  position: absolute;\n  right: 40px;\n  width: 36px;\n  height: 36px;\n  background: var(--video-item__check-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__check-button:hover {\n  background: var(--video-item__check-button-hover-color);\n}\n\n.video-item__remove-button {\n  position: absolute;\n  right: 0;\n  width: 36px;\n  height: 36px;\n  background: var(--video-item__remove-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__remove-button:hover {\n  background: var(--video-item__remove-button-hover-color);\n}\n\n.empty-result {\n  position: relative;\n  width: 100%;\n  height: 600px;\n}\n\n.empty-result__description {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  font-size: 20px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.highlight {\n  background: var(--button__highlighted-color);\n}\n\n#will-watch-video-button:hover,\n#watched-video-button:hover {\n  background: var(--button__highlighted-color);\n}\n\n.classroom-video {\n  margin-top: 40px;\n}\n\n.classroom-video__list {\n  display: grid;\n  gap: 32px 14px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.empty-result {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.empty-result__description {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  font-size: 30px;\n  width: 400px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.empty-result img {\n  transform: scale(0.7);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dimmer-background-color: rgba(0, 0, 0, 0.5);\n  --search-modal-border-color: rgba(0, 0, 0, 0.12);\n  --search-input__keyword-border-color: #b4b4b4;\n  --search-input__keyword-placeholder-color: #8b8b8b;\n  --search-input__search-button-background-color: #00bcd4;\n  --search-input__search-button-font-color: #ffffff;\n  --video-item__save-button-background-color: #f9f9f9;\n  --video-item__save-button-hover-color: #efefef;\n}\n\n.modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.no-result__image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 190px;\n  height: 156px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  position: absolute;\n  top: 62%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  height: 493px;\n  display: grid;\n  gap: 32px 14px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: var(--video-item__save-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: var(--video-item__save-button-hover-color);\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,6CAA6C;EAC7C,gDAAgD;EAChD,6CAA6C;EAC7C,kDAAkD;EAClD,uDAAuD;EACvD,iDAAiD;EACjD,mDAAmD;EACnD,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,cAAc;EACd,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,2DAA2D;EAC3D,eAAe;AACjB;;AAEA;EACE,sDAAsD;AACxD","sourcesContent":[":root {\n  --dimmer-background-color: rgba(0, 0, 0, 0.5);\n  --search-modal-border-color: rgba(0, 0, 0, 0.12);\n  --search-input__keyword-border-color: #b4b4b4;\n  --search-input__keyword-placeholder-color: #8b8b8b;\n  --search-input__search-button-background-color: #00bcd4;\n  --search-input__search-button-font-color: #ffffff;\n  --video-item__save-button-background-color: #f9f9f9;\n  --video-item__save-button-hover-color: #efefef;\n}\n\n.modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.no-result__image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 190px;\n  height: 156px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  position: absolute;\n  top: 62%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  height: 493px;\n  display: grid;\n  gap: 32px 14px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: var(--video-item__save-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: var(--video-item__save-button-hover-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton {\n  width: 240px;\n}\n\n.skeleton__image,\n.skeleton__line {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n  margin-bottom: 11px;\n}\n\n.skeleton__image {\n  height: 135px;\n  margin-bottom: 11px;\n}\n\n.skeleton__line {\n  height: 16px;\n}\n\n.skeleton__line:first-child {\n  width: 50%;\n}\n\n.skeleton__line:nth-child(3) {\n  width: 70%;\n}\n\n.skeleton__line:last-child {\n  width: 45%;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;;EAEE,iFAAiF;EACjF,uCAAuC;EACvC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":[".skeleton {\n  width: 240px;\n}\n\n.skeleton__image,\n.skeleton__line {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n  margin-bottom: 11px;\n}\n\n.skeleton__image {\n  height: 135px;\n  margin-bottom: 11px;\n}\n\n.skeleton__line {\n  height: 16px;\n}\n\n.skeleton__line:first-child {\n  width: 50%;\n}\n\n.skeleton__line:nth-child(3) {\n  width: 70%;\n}\n\n.skeleton__line:last-child {\n  width: 45%;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --snack-bar-font-color: #fff;\n  --snack-bar-background-color: #333;\n}\n\n#snack-bar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: var(--snack-bar-background-color);\n  color: var(--snack-bar-font-color);\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n}\n\n#snack-bar.show {\n  visibility: visible;\n  animation: fadein 0.5s, fadeout 0.5s 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/snackbar.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,mDAAmD;EACnD,kCAAkC;EAClC,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,yCAAyC;EACzC,6BAA6B;AAC/B;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF","sourcesContent":[":root {\n  --snack-bar-font-color: #fff;\n  --snack-bar-background-color: #333;\n}\n\n#snack-bar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: var(--snack-bar-background-color);\n  color: var(--snack-bar-font-color);\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n}\n\n#snack-bar.show {\n  visibility: visible;\n  animation: fadein 0.5s, fadeout 0.5s 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


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
/***/ (function(module) {

"use strict";


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

/***/ "./src/assets/images/empty.png":
/*!*************************************!*\
  !*** ./src/assets/images/empty.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./src/assets/images/empty.png");

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./src/assets/images/not_found.png");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


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
/***/ (function(module) {

"use strict";


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
/***/ (function(module) {

"use strict";


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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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
/***/ (function(module) {

"use strict";


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
/***/ (function(module) {

"use strict";


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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _ui_ClassRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ClassRoom */ "./src/js/ui/ClassRoom.js");
/* harmony import */ var _ui_videoSearchModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/videoSearchModal */ "./src/js/ui/videoSearchModal.js");



new _ui_videoSearchModal__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _ui_ClassRoom__WEBPACK_IMPORTED_MODULE_1__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map