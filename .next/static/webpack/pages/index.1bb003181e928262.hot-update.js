"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/api/weatherAPI.js":
/*!*************************************!*\
  !*** ./src/pages/api/weatherAPI.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchSunsetSunrise: function() { return /* binding */ fetchSunsetSunrise; },\n/* harmony export */   fetchWeatherData: function() { return /* binding */ fetchWeatherData; },\n/* harmony export */   getWeatherByCoordinates: function() { return /* binding */ getWeatherByCoordinates; },\n/* harmony export */   getWeatherById: function() { return /* binding */ getWeatherById; },\n/* harmony export */   getWeatherByName: function() { return /* binding */ getWeatherByName; },\n/* harmony export */   getWeatherIcon: function() { return /* binding */ getWeatherIcon; }\n/* harmony export */ });\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)();\nconst API_KEY = process.env.MY_API_KEY;\nconst BASE_URL = \"https://api.openweathermap.org/data/2.5\";\nconsole.log(API_KEY);\nconsole.log(\"API_KEY: \".concat(API_KEY));\nasync function fetchWeatherData(searchValue, searchType) {\n    let language = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : \"en\";\n    try {\n        let weatherData = null;\n        if (searchType === \"id\") {\n            weatherData = await getWeatherById(searchValue, language);\n        } else if (searchType === \"name\") {\n            weatherData = await getWeatherByName(searchValue, language);\n        }\n        return weatherData;\n    } catch (error) {\n        throw error;\n    }\n}\nasync function fetchSunsetSunrise(searchValue, searchType) {\n    let language = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : \"en\";\n    try {\n        let weatherData = null;\n        if (searchType === \"name\") {\n            weatherData = await getWeatherByName(searchValue, language);\n        }\n        return weatherData;\n    } catch (error) {\n        throw error;\n    }\n}\nasync function getWeatherByCoordinates(latitude, longitude, language) {\n    try {\n        const url = \"\".concat(BASE_URL, \"/weather?lat=\").concat(latitude, \"&lon=\").concat(longitude, \"&appid=\").concat(API_KEY, \"&units=metric&lang=\").concat(language);\n        const res = await fetch(url);\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch current weather\");\n        }\n        return await res.json();\n    } catch (error) {\n        throw error;\n    }\n}\nasync function getWeatherById(cityId, language) {\n    try {\n        const url = \"\".concat(BASE_URL, \"/weather?id=\").concat(cityId, \"&appid=\").concat(API_KEY, \"&units=metric&lang=\").concat(language);\n        const res = await fetch(url);\n        if (!res.ok) {\n            throw new Error(\"Please enter a valid city ID\");\n        }\n        return await res.json();\n    } catch (error) {\n        console.error(\"Error in getWeatherById:\", error);\n        throw error;\n    }\n}\nasync function getWeatherByName(name, language) {\n    try {\n        const cities = name.split(\",\").map((city)=>city.trim()).join(\",\");\n        const url = \"\".concat(BASE_URL, \"/find?q=\").concat(cities, \"&appid=\").concat(API_KEY, \"&units=metric&cnt=50&lang=\").concat(language);\n        const res = await fetch(url);\n        if (!res.ok) {\n            throw new Error(\"Please enter a valid City Name\");\n        }\n        return await res.json();\n    } catch (error) {\n        console.error(\"Error in getWeatherByName:\", error);\n        throw error;\n    }\n}\nfunction getWeatherIcon(weatherInfo) {\n    return \"http://openweathermap.org/img/wn/\".concat(weatherInfo.weather[0].icon, \"@4x.png\");\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcGkvd2VhdGhlckFQSS5qcz9kZjUyIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5cbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5NWV9BUElfS0VZO1xuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41JztcblxuY29uc29sZS5sb2coQVBJX0tFWSlcbmNvbnNvbGUubG9nKGBBUElfS0VZOiAke0FQSV9LRVl9YCk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShzZWFyY2hWYWx1ZSwgc2VhcmNoVHlwZSwgbGFuZ3VhZ2UgPSAnZW4nKSB7XG4gIHRyeSB7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gbnVsbDtcbiAgICBpZiAoc2VhcmNoVHlwZSA9PT0gJ2lkJykge1xuICAgICAgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyQnlJZChzZWFyY2hWYWx1ZSwgbGFuZ3VhZ2UpO1xuICAgIH0gZWxzZSBpZiAoc2VhcmNoVHlwZSA9PT0gJ25hbWUnKSB7XG4gICAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJCeU5hbWUoc2VhcmNoVmFsdWUsIGxhbmd1YWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU3Vuc2V0U3VucmlzZShzZWFyY2hWYWx1ZSwgc2VhcmNoVHlwZSwgbGFuZ3VhZ2UgPSAnZW4nKSB7XG4gIHRyeSB7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gbnVsbDtcbiAgaWYgKHNlYXJjaFR5cGUgPT09ICduYW1lJykge1xuICAgICAgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyQnlOYW1lKHNlYXJjaFZhbHVlLCBsYW5ndWFnZSk7XG4gICAgfVxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckJ5Q29vcmRpbmF0ZXMobGF0aXR1ZGUsIGxvbmdpdHVkZSwgbGFuZ3VhZ2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1VSTH0vd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpYyZsYW5nPSR7bGFuZ3VhZ2V9YDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjdXJyZW50IHdlYXRoZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJCeUlkKGNpdHlJZCwgbGFuZ3VhZ2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1VSTH0vd2VhdGhlcj9pZD0ke2NpdHlJZH0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWMmbGFuZz0ke2xhbmd1YWdlfWA7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBjaXR5IElEJyk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFdlYXRoZXJCeUlkOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckJ5TmFtZShuYW1lLCBsYW5ndWFnZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNpdGllcyA9IG5hbWUuc3BsaXQoJywnKS5tYXAoY2l0eSA9PiBjaXR5LnRyaW0oKSkuam9pbignLCcpO1xuICAgIGNvbnN0IHVybCA9IGAke0JBU0VfVVJMfS9maW5kP3E9JHtjaXRpZXN9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljJmNudD01MCZsYW5nPSR7bGFuZ3VhZ2V9YDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIENpdHkgTmFtZScpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRXZWF0aGVyQnlOYW1lOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlckljb24od2VhdGhlckluZm8pIHtcbiAgcmV0dXJuIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJJbmZvLndlYXRoZXJbMF0uaWNvbn1ANHgucG5nYDtcbn1cbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJNWV9BUElfS0VZIiwiQkFTRV9VUkwiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hXZWF0aGVyRGF0YSIsInNlYXJjaFZhbHVlIiwic2VhcmNoVHlwZSIsImxhbmd1YWdlIiwid2VhdGhlckRhdGEiLCJnZXRXZWF0aGVyQnlJZCIsImdldFdlYXRoZXJCeU5hbWUiLCJlcnJvciIsImZldGNoU3Vuc2V0U3VucmlzZSIsImdldFdlYXRoZXJCeUNvb3JkaW5hdGVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uIiwiY2l0eUlkIiwibmFtZSIsImNpdGllcyIsInNwbGl0IiwibWFwIiwiY2l0eSIsInRyaW0iLCJqb2luIiwiZ2V0V2VhdGhlckljb24iLCJ3ZWF0aGVySW5mbyIsIndlYXRoZXIiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/weatherAPI.js\n"));

/***/ })

});