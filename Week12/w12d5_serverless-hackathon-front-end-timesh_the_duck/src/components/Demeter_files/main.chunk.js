(this["webpackJsonpmaterial-tailwind-dashboard-react"] = this["webpackJsonpmaterial-tailwind-dashboard-react"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/tailwind.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/assets/styles/tailwind.css ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n=========================================================\n* Material Tailwind Dashboard React - v1.1.0\n=========================================================\n* Product Page: https://www.creative-tim.com/product/material-tailwind-dashboard-react\n* Copyright 2019 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/material-tailwind-dashboard-react/blob/main/LICENSE.md)\n* Coded by Creative Tim\n=========================================================\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n*/\n/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com\n*/\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\ttab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Roboto, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n:-moz-focusring {\n\toutline: auto;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.container{\n\twidth: 100%;\n}\n@media (min-width: 640px){\n\t.container{\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px){\n\t.container{\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px){\n\t.container{\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px){\n\t.container{\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px){\n\t.container{\n\t\tmax-width: 1536px;\n\t}\n}\n.visible{\n\tvisibility: visible;\n}\n.fixed{\n\tposition: fixed;\n}\n.absolute{\n\tposition: absolute;\n}\n.relative{\n\tposition: relative;\n}\n.left-0{\n\tleft: 0px;\n}\n.top-2{\n\ttop: 0.5rem;\n}\n.left-64{\n\tleft: 16rem;\n}\n.-left-64{\n\tleft: -16rem;\n}\n.top-0{\n\ttop: 0px;\n}\n.z-50{\n\tz-index: 50;\n}\n.z-10{\n\tz-index: 10;\n}\n.col-span-full{\n\tgrid-column: 1 / -1;\n}\n.my-6{\n\tmargin-top: 1.5rem;\n\tmargin-bottom: 1.5rem;\n}\n.mx-auto{\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.my-4{\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n.mx-2{\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n.mb-6{\n\tmargin-bottom: 1.5rem;\n}\n.mr-6{\n\tmargin-right: 1.5rem;\n}\n.mt-3{\n\tmargin-top: 0.75rem;\n}\n.mt-10{\n\tmargin-top: 2.5rem;\n}\n.mb-10{\n\tmargin-bottom: 2.5rem;\n}\n.mb-0{\n\tmargin-bottom: 0px;\n}\n.mr-10{\n\tmargin-right: 2.5rem;\n}\n.-mr-4{\n\tmargin-right: -1rem;\n}\n.ml-6{\n\tmargin-left: 1.5rem;\n}\n.-mt-24{\n\tmargin-top: -6rem;\n}\n.mb-14{\n\tmargin-bottom: 3.5rem;\n}\n.mb-4{\n\tmargin-bottom: 1rem;\n}\n.mb-16{\n\tmargin-bottom: 4rem;\n}\n.mt-20{\n\tmargin-top: 5rem;\n}\n.mt-1{\n\tmargin-top: 0.25rem;\n}\n.mt-0{\n\tmargin-top: 0px;\n}\n.mb-2{\n\tmargin-bottom: 0.5rem;\n}\n.-mt-8{\n\tmargin-top: -2rem;\n}\n.mt-5{\n\tmargin-top: 1.25rem;\n}\n.mt-2{\n\tmargin-top: 0.5rem;\n}\n.mt-4{\n\tmargin-top: 1rem;\n}\n.mb-8{\n\tmargin-bottom: 2rem;\n}\n.block{\n\tdisplay: block;\n}\n.inline-block{\n\tdisplay: inline-block;\n}\n.flex{\n\tdisplay: flex;\n}\n.table{\n\tdisplay: table;\n}\n.grid{\n\tdisplay: grid;\n}\n.h-full{\n\theight: 100%;\n}\n.h-20{\n\theight: 5rem;\n}\n.h-10{\n\theight: 2.5rem;\n}\n.h-40{\n\theight: 10rem;\n}\n.h-auto{\n\theight: auto;\n}\n.h-96{\n\theight: 24rem;\n}\n.h-screen{\n\theight: 100vh;\n}\n.min-h-full{\n\tmin-height: 100%;\n}\n.w-full{\n\twidth: 100%;\n}\n.w-min{\n\twidth: min-content;\n}\n.w-10{\n\twidth: 2.5rem;\n}\n.w-6{\n\twidth: 1.5rem;\n}\n.w-56{\n\twidth: 14rem;\n}\n.w-12{\n\twidth: 3rem;\n}\n.w-max{\n\twidth: max-content;\n}\n.w-48{\n\twidth: 12rem;\n}\n.w-64{\n\twidth: 16rem;\n}\n.min-w-full{\n\tmin-width: 100%;\n}\n.max-w-full{\n\tmax-width: 100%;\n}\n.border-collapse{\n\tborder-collapse: collapse;\n}\n.list-none{\n\tlist-style-type: none;\n}\n.grid-cols-1{\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-row{\n\tflex-direction: row;\n}\n.flex-col{\n\tflex-direction: column;\n}\n.flex-wrap{\n\tflex-wrap: wrap;\n}\n.flex-nowrap{\n\tflex-wrap: nowrap;\n}\n.content-evenly{\n\talign-content: space-evenly;\n}\n.items-center{\n\talign-items: center;\n}\n.items-stretch{\n\talign-items: stretch;\n}\n.justify-center{\n\tjustify-content: center;\n}\n.justify-between{\n\tjustify-content: space-between;\n}\n.justify-evenly{\n\tjustify-content: space-evenly;\n}\n.gap-2{\n\tgrid-gap: 0.5rem;\n\tgap: 0.5rem;\n}\n.gap-4{\n\tgrid-gap: 1rem;\n\tgap: 1rem;\n}\n.overflow-hidden{\n\toverflow: hidden;\n}\n.overflow-x-auto{\n\toverflow-x: auto;\n}\n.overflow-y-auto{\n\toverflow-y: auto;\n}\n.whitespace-nowrap{\n\twhite-space: nowrap;\n}\n.rounded-xl{\n\tborder-radius: 0.75rem;\n}\n.rounded-full{\n\tborder-radius: 9999px;\n}\n.rounded{\n\tborder-radius: 0.25rem;\n}\n.rounded-lg{\n\tborder-radius: 0.5rem;\n}\n.border-2{\n\tborder-width: 2px;\n}\n.border{\n\tborder-width: 1px;\n}\n.border-t{\n\tborder-top-width: 1px;\n}\n.border-b{\n\tborder-bottom-width: 1px;\n}\n.border-solid{\n\tborder-style: solid;\n}\n.border-gray-200{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n.border-white{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(255, 255, 255, var(--tw-border-opacity));\n}\n.bg-gray-100{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-transparent{\n\tbackground-color: transparent;\n}\n.bg-green-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(16, 185, 129, var(--tw-bg-opacity));\n}\n.bg-red-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.bg-white{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gradient-to-tr{\n\tbackground-image: linear-gradient(to top right, var(--tw-gradient-stops));\n}\n.p-4{\n\tpadding: 1rem;\n}\n.py-6{\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\n.px-16{\n\tpadding-left: 4rem;\n\tpadding-right: 4rem;\n}\n.px-2{\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-3{\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\n.py-4{\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.px-4{\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n.px-1{\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\n.px-3{\n\tpadding-left: 0.75rem;\n\tpadding-right: 0.75rem;\n}\n.px-6{\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\n.px-0{\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.pr-4{\n\tpadding-right: 1rem;\n}\n.pl-4{\n\tpadding-left: 1rem;\n}\n.pl-3{\n\tpadding-left: 0.75rem;\n}\n.pt-14{\n\tpadding-top: 3.5rem;\n}\n.pb-28{\n\tpadding-bottom: 7rem;\n}\n.pl-5{\n\tpadding-left: 1.25rem;\n}\n.pt-8{\n\tpadding-top: 2rem;\n}\n.text-left{\n\ttext-align: left;\n}\n.text-center{\n\ttext-align: center;\n}\n.align-middle{\n\tvertical-align: middle;\n}\n.text-sm{\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-2xl{\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.text-xs{\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.text-xl{\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.font-light{\n\tfont-weight: 300;\n}\n.font-medium{\n\tfont-weight: 500;\n}\n.uppercase{\n\ttext-transform: uppercase;\n}\n.lowercase{\n\ttext-transform: lowercase;\n}\n.tracking-wider{\n\tletter-spacing: 0.05em;\n}\n.tracking-wide{\n\tletter-spacing: 0.025em;\n}\n.text-gray-700{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-white{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-purple-500{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(139, 92, 246, var(--tw-text-opacity));\n}\n.text-gray-200{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(229, 231, 235, var(--tw-text-opacity));\n}\n.text-gray-900{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.shadow-lg{\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl{\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md{\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter{\n\tfilter: var(--tw-filter);\n}\n.transition-all{\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.duration-300{\n\ttransition-duration: 300ms;\n}\n.tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}\n.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}\n.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}\n.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}\n.tippy-box[data-animation=scale][data-placement^=top]{transform-origin:bottom}\n.tippy-box[data-animation=scale][data-placement^=bottom]{transform-origin:top}\n.tippy-box[data-animation=scale][data-placement^=left]{transform-origin:right}\n.tippy-box[data-animation=scale][data-placement^=right]{transform-origin:left}\n.tippy-box[data-animation=scale][data-state=hidden]{transform:scale(.5);opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}\n/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\ttab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Roboto, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #eeeeee; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n*{--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(33, 150, 243, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}\n.container{width:100%}\n@media (min-width: 640px){\n.container{max-width:640px}}\n@media (min-width: 768px){\n.container{max-width:768px}}\n@media (min-width: 1024px){\n.container{max-width:1024px}}\n@media (min-width: 1280px){\n.container{max-width:1280px}}\n@media (min-width: 1536px){\n.container{max-width:1536px}}\n.pointer-events-none{pointer-events:none}\n.pointer-events-auto{pointer-events:auto}\n.relative{position:relative}\n.absolute{position:absolute}\n.sticky{position:sticky}\n.fixed{position:fixed}\n.inset-0{top:0px;right:0px;bottom:0px;left:0px}\n.right-4{right:1rem}\n.top-1\\/3{top:33.333333%}\n.left-0{left:0px}\n.right-0{right:0px}\n.top-16{top:4rem}\n.-top-1\\.5{top:-0.375rem}\n.-top-0\\.5{top:-0.125rem}\n.-top-1{top:-0.25rem}\n.-top-0{top:0px}\n.top-1\\/4{top:25%}\n.top-1\\/2{top:50%}\n.right-2{right:0.5rem}\n.right-3{right:0.75rem}\n.top-2{top:0.5rem}\n.top-0{top:0px}\n.-bottom-4{bottom:-1rem}\n.-bottom-5{bottom:-1.25rem}\n.z-30{z-index:30}\n.z-20{z-index:20}\n.z-10{z-index:10}\n.z-50{z-index:50}\n.z-40{z-index:40}\n.float-left{float:left}\n.float-right{float:right}\n.mx-auto{margin-left:auto;margin-right:auto}\n.my-16{margin-top:4rem;margin-bottom:4rem}\n.my-4{margin-top:1rem;margin-bottom:1rem}\n.my-6{margin-top:1.5rem;margin-bottom:1.5rem}\n.mx-4{margin-left:1rem;margin-right:1rem}\n.mx-1{margin-left:0.25rem;margin-right:0.25rem}\n.my-8{margin-top:2rem;margin-bottom:2rem}\n.mx-5{margin-left:1.25rem;margin-right:1.25rem}\n.mb-16{margin-bottom:4rem}\n.mt-36{margin-top:9rem}\n.mt-10{margin-top:2.5rem}\n.mt-5{margin-top:1.25rem}\n.mt-16{margin-top:4rem}\n.mt-4{margin-top:1rem}\n.mt-20{margin-top:5rem}\n.mb-10{margin-bottom:2.5rem}\n.mt-8{margin-top:2rem}\n.mt-12{margin-top:3rem}\n.mb-24{margin-bottom:6rem}\n.mt-48{margin-top:12rem}\n.mr-auto{margin-right:auto}\n.ml-auto{margin-left:auto}\n.mb-6{margin-bottom:1.5rem}\n.mr-2{margin-right:0.5rem}\n.mt-2{margin-top:0.5rem}\n.mt-32{margin-top:8rem}\n.mt-6{margin-top:1.5rem}\n.mr-3{margin-right:0.75rem}\n.-mt-64{margin-top:-16rem}\n.mb-5{margin-bottom:1.25rem}\n.mb-12{margin-bottom:3rem}\n.mb-8{margin-bottom:2rem}\n.mb-4{margin-bottom:1rem}\n.mb-2{margin-bottom:0.5rem}\n.-mt-10{margin-top:-2.5rem}\n.-mt-9{margin-top:-2.25rem}\n.mb-1{margin-bottom:0.25rem}\n.ml-1{margin-left:0.25rem}\n.mr-1{margin-right:0.25rem}\n.mt-1{margin-top:0.25rem}\n.mb-0{margin-bottom:0px}\n.mt-3{margin-top:0.75rem}\n.ml-7{margin-left:1.75rem}\n.ml-2{margin-left:0.5rem}\n.mt-0{margin-top:0px}\n.mb-3{margin-bottom:0.75rem}\n.mr-4{margin-right:1rem}\n.-mt-12{margin-top:-3rem}\n.mr-10{margin-right:2.5rem}\n.block{display:block}\n.inline-block{display:inline-block}\n.flex{display:flex}\n.inline-flex{display:inline-flex}\n.grid{display:grid}\n.hidden{display:none}\n.h-16{height:4rem}\n.h-7{height:1.75rem}\n.h-10{height:2.5rem}\n.h-32{height:8rem}\n.h-20{height:5rem}\n.h-12{height:3rem}\n.h-6{height:1.5rem}\n.h-8{height:2rem}\n.h-24{height:6rem}\n.h-28{height:7rem}\n.h-5{height:1.25rem}\n.h-screen{height:100vh}\n.h-auto{height:auto}\n.h-full{height:100%}\n.h-9{height:2.25rem}\n.h-11{height:2.75rem}\n.h-4{height:1rem}\n.h-px{height:1px}\n.h-2{height:0.5rem}\n.w-full{width:100%}\n.w-40{width:10rem}\n.w-72{width:18rem}\n.w-\\[28rem\\]{width:28rem}\n.w-64{width:16rem}\n.w-96{width:24rem}\n.w-48{width:12rem}\n.w-16{width:4rem}\n.w-7{width:1.75rem}\n.w-32{width:8rem}\n.w-12{width:3rem}\n.w-10{width:2.5rem}\n.w-6{width:1.5rem}\n.w-8{width:2rem}\n.w-20{width:5rem}\n.w-24{width:6rem}\n.w-28{width:7rem}\n.w-5{width:1.25rem}\n.w-10\\/12{width:83.333333%}\n.w-4{width:1rem}\n.w-auto{width:auto}\n.w-14{width:3.5rem}\n.min-w-0{min-width:0px}\n.max-w-7xl{max-width:80rem}\n.max-w-full{max-width:100%}\n.max-w-max{max-width:max-content}\n.max-w-sm{max-width:24rem}\n.max-w-6xl{max-width:72rem}\n.max-w-3xl{max-width:48rem}\n.max-w-xs{max-width:20rem}\n.flex-auto{flex:1 1 auto}\n.flex-1{flex:1 1}\n.flex-none{flex:none}\n.flex-grow{flex-grow:1}\n.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}\n.-translate-y-1\\/3{--tw-translate-y:-33.333333%}\n.-translate-y-1\\/2{--tw-translate-y:-50%}\n.translate-y-0{--tw-translate-y:0px}\n.-translate-y-10{--tw-translate-y:-2.5rem}\n.cursor-pointer{cursor:pointer}\n.cursor-not-allowed{cursor:not-allowed}\n.select-none{-webkit-user-select:none;user-select:none}\n.resize-none{resize:none}\n.list-none{list-style-type:none}\n.flex-col{flex-direction:column}\n.flex-wrap{flex-wrap:wrap}\n.place-items-center{place-items:center}\n.items-center{align-items:center}\n.items-end{align-items:flex-end}\n.items-start{align-items:flex-start}\n.justify-between{justify-content:space-between}\n.justify-center{justify-content:center}\n.justify-start{justify-content:flex-start}\n.justify-end{justify-content:flex-end}\n.gap-8{grid-gap:2rem;gap:2rem}\n.gap-10{grid-gap:2.5rem;gap:2.5rem}\n.gap-4{grid-gap:1rem;gap:1rem}\n.gap-2{grid-gap:0.5rem;gap:0.5rem}\n.gap-3{grid-gap:0.75rem;gap:0.75rem}\n.gap-1{grid-gap:0.25rem;gap:0.25rem}\n.gap-x-2{grid-column-gap:0.5rem;column-gap:0.5rem}\n.gap-y-8{grid-row-gap:2rem;row-gap:2rem}\n.gap-x-24{grid-column-gap:6rem;column-gap:6rem}\n.gap-y-4{grid-row-gap:1rem;row-gap:1rem}\n.gap-x-8{grid-column-gap:2rem;column-gap:2rem}\n.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}\n.overflow-hidden{overflow:hidden}\n.overflow-y-scroll{overflow-y:scroll}\n.overflow-x-hidden{overflow-x:hidden}\n.overflow-y-auto{overflow-y:auto}\n.whitespace-nowrap{white-space:nowrap}\n.break-words{overflow-wrap:break-word}\n.rounded{border-radius:0.25rem}\n.rounded-lg{border-radius:0.5rem}\n.rounded-full{border-radius:9999px}\n.rounded-xl{border-radius:0.75rem}\n.rounded-md{border-radius:0.375rem}\n.rounded-sm{border-radius:0.125rem}\n.rounded-t{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}\n.border{border-width:1px}\n.border-0{border-width:0px}\n.border-t-0{border-top-width:0px}\n.border-r-0{border-right-width:0px}\n.border-l-0{border-left-width:0px}\n.border-t{border-top-width:1px}\n.border-b{border-bottom-width:1px}\n.border-b-0{border-bottom-width:0px}\n.border-r{border-right-width:1px}\n.border-solid{border-style:solid}\n.border-none{border-style:none}\n.border-blue-gray-50{--tw-border-opacity:1;border-color:rgba(236, 239, 241, var(--tw-border-opacity))}\n.border-gray-200{--tw-border-opacity:1;border-color:rgba(238, 238, 238, var(--tw-border-opacity))}\n.border-gray-300{--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.border-blue-gray-500{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.border-gray-500{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.border-brown-500{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.border-deep-orange-500{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.border-orange-500{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.border-amber-500{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.border-yellow-600{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.border-lime-500{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.border-light-green-500{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.border-green-500{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.border-teal-500{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.border-cyan-500{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.border-light-blue-500{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.border-blue-500{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.border-indigo-500{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.border-deep-purple-500{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.border-purple-500{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.border-pink-500{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.border-red-500{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.border-transparent{border-color:transparent}\n.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.bg-orange-900{--tw-bg-opacity:1;background-color:rgba(230, 81, 0, var(--tw-bg-opacity))}\n.bg-light-blue-500{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(33, 33, 33, var(--tw-bg-opacity))}\n.bg-yellow-600{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.bg-red-700{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.bg-green-500{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.bg-blue-gray-800{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.bg-blue-gray-500{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.bg-brown-500{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.bg-deep-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.bg-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.bg-amber-500{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.bg-lime-500{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.bg-light-green-500{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.bg-teal-500{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.bg-cyan-500{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.bg-indigo-500{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.bg-deep-purple-500{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.bg-purple-500{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.bg-pink-500{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.bg-red-500{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.bg-transparent{background-color:transparent}\n.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity))}\n.bg-blue-gray-100{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.bg-brown-100{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.bg-deep-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.bg-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.bg-amber-100{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.bg-yellow-100{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.bg-lime-100{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.bg-light-green-100{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.bg-green-100{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.bg-teal-100{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.bg-cyan-100{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.bg-light-blue-100{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.bg-indigo-100{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.bg-deep-purple-100{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.bg-purple-100{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.bg-pink-100{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.bg-red-100{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.bg-blue-gray-900{--tw-bg-opacity:1;background-color:rgba(38, 50, 56, var(--tw-bg-opacity))}\n.bg-brown-900{--tw-bg-opacity:1;background-color:rgba(62, 39, 35, var(--tw-bg-opacity))}\n.bg-deep-orange-900{--tw-bg-opacity:1;background-color:rgba(191, 54, 12, var(--tw-bg-opacity))}\n.bg-amber-900{--tw-bg-opacity:1;background-color:rgba(255, 111, 0, var(--tw-bg-opacity))}\n.bg-yellow-900{--tw-bg-opacity:1;background-color:rgba(245, 127, 23, var(--tw-bg-opacity))}\n.bg-lime-900{--tw-bg-opacity:1;background-color:rgba(130, 119, 23, var(--tw-bg-opacity))}\n.bg-light-green-900{--tw-bg-opacity:1;background-color:rgba(51, 105, 30, var(--tw-bg-opacity))}\n.bg-green-900{--tw-bg-opacity:1;background-color:rgba(27, 94, 32, var(--tw-bg-opacity))}\n.bg-teal-900{--tw-bg-opacity:1;background-color:rgba(0, 77, 64, var(--tw-bg-opacity))}\n.bg-cyan-900{--tw-bg-opacity:1;background-color:rgba(0, 96, 100, var(--tw-bg-opacity))}\n.bg-light-blue-900{--tw-bg-opacity:1;background-color:rgba(1, 87, 155, var(--tw-bg-opacity))}\n.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(13, 71, 161, var(--tw-bg-opacity))}\n.bg-indigo-900{--tw-bg-opacity:1;background-color:rgba(26, 35, 126, var(--tw-bg-opacity))}\n.bg-deep-purple-900{--tw-bg-opacity:1;background-color:rgba(49, 27, 146, var(--tw-bg-opacity))}\n.bg-purple-900{--tw-bg-opacity:1;background-color:rgba(74, 20, 140, var(--tw-bg-opacity))}\n.bg-pink-900{--tw-bg-opacity:1;background-color:rgba(136, 14, 79, var(--tw-bg-opacity))}\n.bg-red-900{--tw-bg-opacity:1;background-color:rgba(183, 28, 28, var(--tw-bg-opacity))}\n.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}\n.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.bg-blue-gray-200{--tw-bg-opacity:1;background-color:rgba(176, 190, 197, var(--tw-bg-opacity))}\n.bg-brown-200{--tw-bg-opacity:1;background-color:rgba(188, 170, 164, var(--tw-bg-opacity))}\n.bg-deep-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 171, 145, var(--tw-bg-opacity))}\n.bg-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 204, 128, var(--tw-bg-opacity))}\n.bg-amber-200{--tw-bg-opacity:1;background-color:rgba(255, 224, 130, var(--tw-bg-opacity))}\n.bg-yellow-200{--tw-bg-opacity:1;background-color:rgba(255, 245, 157, var(--tw-bg-opacity))}\n.bg-lime-200{--tw-bg-opacity:1;background-color:rgba(230, 238, 156, var(--tw-bg-opacity))}\n.bg-light-green-200{--tw-bg-opacity:1;background-color:rgba(197, 225, 165, var(--tw-bg-opacity))}\n.bg-green-200{--tw-bg-opacity:1;background-color:rgba(165, 214, 167, var(--tw-bg-opacity))}\n.bg-teal-200{--tw-bg-opacity:1;background-color:rgba(128, 203, 196, var(--tw-bg-opacity))}\n.bg-cyan-200{--tw-bg-opacity:1;background-color:rgba(128, 222, 234, var(--tw-bg-opacity))}\n.bg-light-blue-200{--tw-bg-opacity:1;background-color:rgba(129, 212, 250, var(--tw-bg-opacity))}\n.bg-blue-200{--tw-bg-opacity:1;background-color:rgba(144, 202, 249, var(--tw-bg-opacity))}\n.bg-indigo-200{--tw-bg-opacity:1;background-color:rgba(159, 168, 218, var(--tw-bg-opacity))}\n.bg-deep-purple-200{--tw-bg-opacity:1;background-color:rgba(179, 157, 219, var(--tw-bg-opacity))}\n.bg-purple-200{--tw-bg-opacity:1;background-color:rgba(206, 147, 216, var(--tw-bg-opacity))}\n.bg-pink-200{--tw-bg-opacity:1;background-color:rgba(244, 143, 177, var(--tw-bg-opacity))}\n.bg-red-200{--tw-bg-opacity:1;background-color:rgba(239, 154, 154, var(--tw-bg-opacity))}\n.bg-opacity-20{--tw-bg-opacity:0.2}\n.bg-opacity-80{--tw-bg-opacity:0.8}\n.bg-gradient-to-tr{background-image:linear-gradient(to top right, var(--tw-gradient-stops))}\n.from-blue-gray-500{--tw-gradient-from:#607d8b;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 125, 139, 0))}\n.from-gray-500{--tw-gradient-from:#9e9e9e;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(158, 158, 158, 0))}\n.from-brown-500{--tw-gradient-from:#795548;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(121, 85, 72, 0))}\n.from-deep-orange-500{--tw-gradient-from:#ff5722;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 87, 34, 0))}\n.from-orange-500{--tw-gradient-from:#ff9800;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 152, 0, 0))}\n.from-amber-500{--tw-gradient-from:#ffc107;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 193, 7, 0))}\n.from-yellow-600{--tw-gradient-from:#fdd835;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 216, 53, 0))}\n.from-lime-500{--tw-gradient-from:#cddc39;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(205, 220, 57, 0))}\n.from-light-green-500{--tw-gradient-from:#8bc34a;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 195, 74, 0))}\n.from-green-500{--tw-gradient-from:#4caf50;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 175, 80, 0))}\n.from-teal-500{--tw-gradient-from:#009688;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 150, 136, 0))}\n.from-cyan-500{--tw-gradient-from:#00bcd4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 188, 212, 0))}\n.from-light-blue-500{--tw-gradient-from:#03a9f4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(3, 169, 244, 0))}\n.from-blue-500{--tw-gradient-from:#2196f3;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(33, 150, 243, 0))}\n.from-indigo-500{--tw-gradient-from:#3f51b5;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(63, 81, 181, 0))}\n.from-deep-purple-500{--tw-gradient-from:#673ab7;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(103, 58, 183, 0))}\n.from-purple-500{--tw-gradient-from:#9c27b0;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(156, 39, 176, 0))}\n.from-pink-500{--tw-gradient-from:#e91e63;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(233, 30, 99, 0))}\n.from-red-500{--tw-gradient-from:#f44336;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(244, 67, 54, 0))}\n.from-light-blue-700{--tw-gradient-from:#0288d1;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 136, 209, 0))}\n.to-blue-gray-700{--tw-gradient-to:#455a64}\n.to-gray-700{--tw-gradient-to:#616161}\n.to-brown-700{--tw-gradient-to:#5d4037}\n.to-deep-orange-700{--tw-gradient-to:#e64a19}\n.to-orange-700{--tw-gradient-to:#f57c00}\n.to-amber-700{--tw-gradient-to:#ffa000}\n.to-yellow-800{--tw-gradient-to:#f9a825}\n.to-lime-700{--tw-gradient-to:#afb42b}\n.to-light-green-700{--tw-gradient-to:#689f38}\n.to-green-700{--tw-gradient-to:#388e3c}\n.to-teal-700{--tw-gradient-to:#00796b}\n.to-cyan-700{--tw-gradient-to:#0097a7}\n.to-light-blue-700{--tw-gradient-to:#0288d1}\n.to-blue-700{--tw-gradient-to:#1976d2}\n.to-indigo-700{--tw-gradient-to:#303f9f}\n.to-deep-purple-700{--tw-gradient-to:#512da8}\n.to-purple-700{--tw-gradient-to:#7b1fa2}\n.to-pink-700{--tw-gradient-to:#c2185b}\n.to-red-700{--tw-gradient-to:#d32f2f}\n.to-light-blue-500{--tw-gradient-to:#03a9f4}\n.p-4{padding:1rem}\n.p-3{padding:0.75rem}\n.p-8{padding:2rem}\n.p-2{padding:0.5rem}\n.p-0{padding:0px}\n.p-2\\.5{padding:0.625rem}\n.p-6{padding:1.5rem}\n.p-1{padding:0.25rem}\n.p-5{padding:1.25rem}\n.p-10{padding:2.5rem}\n.px-4{padding-left:1rem;padding-right:1rem}\n.py-16{padding-top:4rem;padding-bottom:4rem}\n.py-1{padding-top:0.25rem;padding-bottom:0.25rem}\n.py-8{padding-top:2rem;padding-bottom:2rem}\n.py-28{padding-top:7rem;padding-bottom:7rem}\n.px-12{padding-left:3rem;padding-right:3rem}\n.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}\n.px-2{padding-left:0.5rem;padding-right:0.5rem}\n.py-2{padding-top:0.5rem;padding-bottom:0.5rem}\n.py-20{padding-top:5rem;padding-bottom:5rem}\n.py-24{padding-top:6rem;padding-bottom:6rem}\n.py-5{padding-top:1.25rem;padding-bottom:1.25rem}\n.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}\n.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}\n.px-6{padding-left:1.5rem;padding-right:1.5rem}\n.py-3{padding-top:0.75rem;padding-bottom:0.75rem}\n.px-7{padding-left:1.75rem;padding-right:1.75rem}\n.py-4{padding-top:1rem;padding-bottom:1rem}\n.px-8{padding-left:2rem;padding-right:2rem}\n.px-9{padding-left:2.25rem;padding-right:2.25rem}\n.px-3{padding-left:0.75rem;padding-right:0.75rem}\n.px-0{padding-left:0px;padding-right:0px}\n.px-5{padding-left:1.25rem;padding-right:1.25rem}\n.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}\n.px-1{padding-left:0.25rem;padding-right:0.25rem}\n.pt-28{padding-top:7rem}\n.pb-36{padding-bottom:9rem}\n.pt-8{padding-top:2rem}\n.pb-6{padding-bottom:1.5rem}\n.pb-2{padding-bottom:0.5rem}\n.pt-6{padding-top:1.5rem}\n.pb-4{padding-bottom:1rem}\n.pb-20{padding-bottom:5rem}\n.pt-32{padding-top:8rem}\n.pt-48{padding-top:12rem}\n.pt-24{padding-top:6rem}\n.pb-64{padding-bottom:16rem}\n.pb-16{padding-bottom:4rem}\n.pr-12{padding-right:3rem}\n.pl-4{padding-left:1rem}\n.pt-4{padding-top:1rem}\n.pt-9{padding-top:2.25rem}\n.pl-0{padding-left:0px}\n.pt-10{padding-top:2.5rem}\n.pl-5{padding-left:1.25rem}\n.pr-3{padding-right:0.75rem}\n.pl-7{padding-left:1.75rem}\n.pr-5{padding-right:1.25rem}\n.pl-8{padding-left:2rem}\n.pr-6{padding-right:1.5rem}\n.pt-1\\.5{padding-top:0.375rem}\n.pb-0\\.5{padding-bottom:0.125rem}\n.pt-1{padding-top:0.25rem}\n.pb-0{padding-bottom:0px}\n.pt-2\\.5{padding-top:0.625rem}\n.pb-1\\.5{padding-bottom:0.375rem}\n.pt-2{padding-top:0.5rem}\n.pb-1{padding-bottom:0.25rem}\n.pt-3\\.5{padding-top:0.875rem}\n.pb-2\\.5{padding-bottom:0.625rem}\n.pt-3{padding-top:0.75rem}\n.pl-2{padding-left:0.5rem}\n.pr-7{padding-right:1.75rem}\n.pl-3{padding-left:0.75rem}\n.pr-9{padding-right:2.25rem}\n.pr-1{padding-right:0.25rem}\n.pb-10{padding-bottom:2.5rem}\n.pt-16{padding-top:4rem}\n.text-center{text-align:center}\n.text-right{text-align:right}\n.text-left{text-align:left}\n.align-middle{vertical-align:middle}\n.font-serif{font-family:\"Roboto Slab\", serif}\n.text-xl{font-size:1.25rem;line-height:1.75rem}\n.text-sm{font-size:0.875rem;line-height:1.25rem}\n.text-xs{font-size:0.75rem;line-height:1rem}\n.text-6xl{font-size:3.75rem;line-height:1}\n.text-lg{font-size:1.125rem;line-height:1.75rem}\n.text-base{font-size:1rem;line-height:1.5rem}\n.text-2xl{font-size:1.5rem;line-height:2rem}\n.text-4xl{font-size:2.25rem;line-height:2.5rem}\n.text-3xl{font-size:1.875rem;line-height:2.25rem}\n.text-5xl{font-size:3rem;line-height:1}\n.text-7xl{font-size:4.5rem;line-height:1}\n.text-8xl{font-size:6rem;line-height:1}\n.text-9xl{font-size:8rem;line-height:1}\n.font-medium{font-weight:500}\n.font-semibold{font-weight:600}\n.font-bold{font-weight:700}\n.font-light{font-weight:300}\n.font-normal{font-weight:400}\n.uppercase{text-transform:uppercase}\n.capitalize{text-transform:capitalize}\n.leading-relaxed{line-height:1.625}\n.leading-none{line-height:1}\n.leading-normal{line-height:1.5}\n.leading-10{line-height:2.5rem}\n.leading-snug{line-height:1.375}\n.tracking-wider{letter-spacing:0.05em}\n.tracking-wide{letter-spacing:0.025em}\n.text-gray-700{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.text-blue-gray-700{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.text-light-blue-500{--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.text-blue-gray-800{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.text-blue-gray-900{--tw-text-opacity:1;color:rgba(38, 50, 56, var(--tw-text-opacity))}\n.text-blue-gray-200{--tw-text-opacity:1;color:rgba(176, 190, 197, var(--tw-text-opacity))}\n.text-blue-gray-50{--tw-text-opacity:1;color:rgba(236, 239, 241, var(--tw-text-opacity))}\n.text-cyan-600{--tw-text-opacity:1;color:rgba(0, 172, 193, var(--tw-text-opacity))}\n.text-gray-500{--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.text-gray-900{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.text-blue-600{--tw-text-opacity:1;color:rgba(30, 136, 229, var(--tw-text-opacity))}\n.text-blue-400{--tw-text-opacity:1;color:rgba(66, 165, 245, var(--tw-text-opacity))}\n.text-indigo-500{--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.text-pink-400{--tw-text-opacity:1;color:rgba(236, 64, 122, var(--tw-text-opacity))}\n.text-red-600{--tw-text-opacity:1;color:rgba(229, 57, 53, var(--tw-text-opacity))}\n.text-gray-600{--tw-text-opacity:1;color:rgba(117, 117, 117, var(--tw-text-opacity))}\n.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.text-blue-gray-500{--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.text-brown-500{--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.text-deep-orange-500{--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.text-orange-500{--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.text-amber-500{--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.text-yellow-600{--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.text-lime-500{--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.text-light-green-500{--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.text-green-500{--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.text-teal-500{--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.text-cyan-500{--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.text-blue-500{--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.text-deep-purple-500{--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.text-purple-500{--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.text-pink-500{--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.text-red-500{--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.text-gray-400{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity))}\n.text-gray-800{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.text-brown-700{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.text-deep-orange-700{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.text-orange-700{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.text-amber-700{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.text-yellow-700{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.text-lime-700{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.text-light-green-700{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.text-green-700{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.text-teal-700{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.text-cyan-700{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.text-light-blue-700{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.text-blue-700{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.text-indigo-700{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.text-deep-purple-700{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.text-purple-700{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.text-pink-700{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.text-red-700{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.text-gray-200{--tw-text-opacity:1;color:rgba(238, 238, 238, var(--tw-text-opacity))}\n.text-brown-800{--tw-text-opacity:1;color:rgba(78, 52, 46, var(--tw-text-opacity))}\n.text-deep-orange-800{--tw-text-opacity:1;color:rgba(216, 67, 21, var(--tw-text-opacity))}\n.text-orange-800{--tw-text-opacity:1;color:rgba(239, 108, 0, var(--tw-text-opacity))}\n.text-amber-800{--tw-text-opacity:1;color:rgba(255, 143, 0, var(--tw-text-opacity))}\n.text-yellow-800{--tw-text-opacity:1;color:rgba(249, 168, 37, var(--tw-text-opacity))}\n.text-lime-800{--tw-text-opacity:1;color:rgba(158, 157, 36, var(--tw-text-opacity))}\n.text-light-green-800{--tw-text-opacity:1;color:rgba(85, 139, 47, var(--tw-text-opacity))}\n.text-green-800{--tw-text-opacity:1;color:rgba(46, 125, 50, var(--tw-text-opacity))}\n.text-teal-800{--tw-text-opacity:1;color:rgba(0, 105, 92, var(--tw-text-opacity))}\n.text-cyan-800{--tw-text-opacity:1;color:rgba(0, 131, 143, var(--tw-text-opacity))}\n.text-light-blue-800{--tw-text-opacity:1;color:rgba(2, 119, 189, var(--tw-text-opacity))}\n.text-blue-800{--tw-text-opacity:1;color:rgba(21, 101, 192, var(--tw-text-opacity))}\n.text-indigo-800{--tw-text-opacity:1;color:rgba(40, 53, 147, var(--tw-text-opacity))}\n.text-deep-purple-800{--tw-text-opacity:1;color:rgba(69, 39, 160, var(--tw-text-opacity))}\n.text-purple-800{--tw-text-opacity:1;color:rgba(106, 27, 154, var(--tw-text-opacity))}\n.text-pink-800{--tw-text-opacity:1;color:rgba(173, 20, 87, var(--tw-text-opacity))}\n.text-red-800{--tw-text-opacity:1;color:rgba(198, 40, 40, var(--tw-text-opacity))}\n.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}\n.text-opacity-60{--tw-text-opacity:0.6}\n.no-underline{text-decoration:none}\n.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n.placeholder-white::placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-opacity-50::placeholder{--tw-placeholder-opacity:0.5}\n.opacity-50{opacity:0.5}\n.opacity-0{opacity:0}\n.opacity-100{opacity:1}\n.opacity-25{opacity:0.25}\n.opacity-5{opacity:0.05}\n.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-brown{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-amber{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-yellow{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-lime{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-teal{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-cyan{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-indigo{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-pink{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-red{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-brown{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-amber{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-yellow{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-lime{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-teal{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-cyan{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-indigo{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-pink{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-red{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.outline-none{outline:2px solid transparent;outline-offset:2px}\n.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}\n.duration-300{transition-duration:300ms}\n.duration{transition-duration:150ms}\n.duration-500{transition-duration:500ms}\n/* Material Tailwind Input */\n.mt-input + label:after {\n        content: '';\n        pointer-events:none;\n        position:absolute;\n        top:0.125rem;\n        left:0px;\n        height:100%;\n        width:100%;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-scale-x:0;\n        border-width:1px;\n        border-top-width:0px;\n        border-left-width:0px;\n        border-right-width:0px;\n        border-bottom-width:2px;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:300ms;\n    }\n.mt-input:focus + label:after{--tw-scale-x:1}\n.mt-input:focus + label span,\n    .mt-input:not(:placeholder-shown) + label span {\n        top: -14%;font-size:0.75rem;line-height:1rem;line-height:1.25;\n    }\n.texterea:focus + label span,\n    .texterea:not(:placeholder-shown) + label span {\n        top: -22px !important;\n    }\n/* Material Tailwind Input Outline */\n.mt-input-outline:focus,\n    .mt-input-outline:not(:placeholder-shown) {\n        border-top: transparent !important;\n    }\n.mt-input-outline + label {\n        line-height: 3.625 !important;\n    }\n.mt-input-outline:focus + label, .mt-input-outline:not(:placeholder-shown) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline + label:before,\n    .mt-input-outline + label:after {\n        content: '';pointer-events:none;margin-top:0.375rem;box-sizing:border-box;display:block;height:0.5rem;width:0.625rem;border-width:1px;border-top-width:2px;border-bottom-width:0px;border-left-width:0px;border-right-width:0px;border-color:transparent;\n    }\n.mt-input-outline:not(:placeholder-shown) + label:before, .mt-input-outline:not(:placeholder-shown) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:focus + label::before, .mt-input-outline:focus + label::after{border-top-width:2px}\n.mt-input-outline + label:before{margin-right:0.25rem;border-top-left-radius:0.5rem}\n.mt-input-outline + label:after{margin-left:0.25rem;flex-grow:1;border-top-right-radius:0.5rem}\n/* Material Tailwind Radio Button */\n.mt-radio:checked + label span {\n        box-shadow: 0px 0px 0px 2px white inset;\n        --tw-bg-opacity:1 !important;\n    }\n.mt-radio:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-radio + label span::before {\n        content: '';\n        top: -1.5px;\n        left: -1.5px;\n        transform: scale3d(1, 1, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1rem;\n        width:1rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-radio:checked + label span::before {\n        animation: radio-ripple 0.3s linear;\n    }\n/* Material Tailwind Checkbox */\n.mt-checkbox:checked + label span{--tw-bg-opacity:1 !important}\n.mt-checkbox:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-checkbox + label span::before {\n        content: '';\n        top: -1px;\n        left: -1.5px;\n        transform: scale3d(2, 2, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1.25rem;\n        width:1.25rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-checkbox + label span::after {\n        content: '';\n        top: 1px;\n        left: 6px;\n        position:absolute;\n        height:0.875rem;\n        width:0.375rem;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-rotate:45deg;\n        border-bottom-width:2px;\n        border-right-width:2px;\n        border-color:transparent;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:200ms;\n    }\n.mt-checkbox:checked + label span::before {\n        animation: radio-ripple 0.3s linear;\n    }\n.mt-checkbox:checked + label span::after{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity))}\n/* Material Tailwind Input Colors */\n.mt-input-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.mt-input-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.mt-input-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.mt-input-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.mt-input-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.mt-input-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.mt-input-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.mt-input-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.mt-input-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.mt-input-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.mt-input-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.mt-input-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.mt-input-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.mt-input-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.mt-input-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.mt-input-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.mt-input-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.mt-input-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n/* Material Tailwind Input Outline Colors */\n.mt-input-outline-blue-gray-500:focus, .mt-input-outline-blue-gray-500:focus + label, .mt-input-outline-blue-gray-500:focus + label:before, .mt-input-outline-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.mt-input-outline-gray-500:focus, .mt-input-outline-gray-500:focus + label, .mt-input-outline-gray-500:focus + label:before, .mt-input-outline-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.mt-input-outline-orange-500:focus, .mt-input-outline-orange-500:focus + label, .mt-input-outline-orange-500:focus + label:before, .mt-input-outline-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.mt-input-outline-deep-orange-500:focus, .mt-input-outline-deep-orange-500:focus + label, .mt-input-outline-deep-orange-500:focus + label:before, .mt-input-outline-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.mt-input-outline-brown-500:focus, .mt-input-outline-brown-500:focus + label, .mt-input-outline-brown-500:focus + label:before, .mt-input-outline-brown-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.mt-input-outline-amber-500:focus, .mt-input-outline-amber-500:focus + label, .mt-input-outline-amber-500:focus + label:before, .mt-input-outline-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.mt-input-outline-yellow-600:focus, .mt-input-outline-yellow-600:focus + label, .mt-input-outline-yellow-600:focus + label:before, .mt-input-outline-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.mt-input-outline-lime-500:focus, .mt-input-outline-lime-500:focus + label, .mt-input-outline-lime-500:focus + label:before, .mt-input-outline-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.mt-input-outline-light-green-500:focus, .mt-input-outline-light-green-500:focus + label, .mt-input-outline-light-green-500:focus + label:before, .mt-input-outline-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.mt-input-outline-green-500:focus, .mt-input-outline-green-500:focus + label, .mt-input-outline-green-500:focus + label:before, .mt-input-outline-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-teal-500:focus, .mt-input-outline-teal-500:focus + label, .mt-input-outline-teal-500:focus + label:before, .mt-input-outline-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.mt-input-outline-cyan-500:focus, .mt-input-outline-cyan-500:focus + label, .mt-input-outline-cyan-500:focus + label:before, .mt-input-outline-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.mt-input-outline-light-blue-500:focus, .mt-input-outline-light-blue-500:focus + label, .mt-input-outline-light-blue-500:focus + label:before, .mt-input-outline-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.mt-input-outline-blue-500:focus, .mt-input-outline-blue-500:focus + label, .mt-input-outline-blue-500:focus + label:before, .mt-input-outline-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.mt-input-outline-indigo-500:focus, .mt-input-outline-indigo-500:focus + label, .mt-input-outline-indigo-500:focus + label:before, .mt-input-outline-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.mt-input-outline-purple-500:focus, .mt-input-outline-purple-500:focus + label, .mt-input-outline-purple-500:focus + label:before, .mt-input-outline-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.mt-input-outline-deep-purple-500:focus, .mt-input-outline-deep-purple-500:focus + label, .mt-input-outline-deep-purple-500:focus + label:before, .mt-input-outline-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.mt-input-outline-pink-500:focus, .mt-input-outline-pink-500:focus + label, .mt-input-outline-pink-500:focus + label:before, .mt-input-outline-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.mt-input-outline-red-500:focus, .mt-input-outline-red-500:focus + label, .mt-input-outline-red-500:focus + label:before, .mt-input-outline-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:placeholder-shown) + label, .mt-input-outline-error:not(:placeholder-shown) + label:before, .mt-input-outline-error:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:placeholder-shown) + label, .mt-input-outline-success:not(:placeholder-shown) + label:before, .mt-input-outline-success:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n/* Material Tailwind Radio Button and Checkbox Colors */\n.mt-radio-blue-gray-500:checked + label span, .mt-radio-blue-gray-500 + label span::before, .mt-checkbox-blue-gray-500:checked + label span, .mt-checkbox-blue-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-gray-500:checked + label span, .mt-radio-gray-500 + label span::before, .mt-checkbox-gray-500:checked + label span, .mt-checkbox-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-orange-500:checked + label span, .mt-radio-orange-500 + label span::before, .mt-checkbox-orange-500:checked + label span, .mt-checkbox-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-orange-500:checked + label span, .mt-radio-deep-orange-500 + label span::before, .mt-checkbox-deep-orange-500:checked + label span, .mt-checkbox-deep-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-brown-500:checked + label span, .mt-radio-brown-500 + label span::before, .mt-checkbox-brown-500:checked + label span, .mt-checkbox-brown-500 + label span::before{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-amber-500:checked + label span, .mt-radio-amber-500 + label span::before, .mt-checkbox-amber-500:checked + label span, .mt-checkbox-amber-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-yellow-600:checked + label span, .mt-radio-yellow-600 + label span::before, .mt-checkbox-yellow-600:checked + label span, .mt-checkbox-yellow-600 + label span::before{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-lime-500:checked + label span, .mt-radio-lime-500 + label span::before, .mt-checkbox-lime-500:checked + label span, .mt-checkbox-lime-500 + label span::before{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-green-500:checked + label span, .mt-radio-light-green-500 + label span::before, .mt-checkbox-light-green-500:checked + label span, .mt-checkbox-light-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-green-500:checked + label span, .mt-radio-green-500 + label span::before, .mt-checkbox-green-500:checked + label span, .mt-checkbox-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-teal-500:checked + label span, .mt-radio-teal-500 + label span::before, .mt-checkbox-teal-500:checked + label span, .mt-checkbox-teal-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-cyan-500:checked + label span, .mt-radio-cyan-500 + label span::before, .mt-checkbox-cyan-500:checked + label span, .mt-checkbox-cyan-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-blue-500:checked + label span, .mt-radio-light-blue-500 + label span::before, .mt-checkbox-light-blue-500:checked + label span, .mt-checkbox-light-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-blue-500:checked + label span, .mt-radio-blue-500 + label span::before, .mt-checkbox-blue-500:checked + label span, .mt-checkbox-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-indigo-500:checked + label span, .mt-radio-indigo-500 + label span::before, .mt-checkbox-indigo-500:checked + label span, .mt-checkbox-indigo-500 + label span::before{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-purple-500:checked + label span, .mt-radio-purple-500 + label span::before, .mt-checkbox-purple-500:checked + label span, .mt-checkbox-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-purple-500:checked + label span, .mt-radio-deep-purple-500 + label span::before, .mt-checkbox-deep-purple-500:checked + label span, .mt-checkbox-deep-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-pink-500:checked + label span, .mt-radio-pink-500 + label span::before, .mt-checkbox-pink-500:checked + label span, .mt-checkbox-pink-500 + label span::before{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-red-500:checked + label span, .mt-radio-red-500 + label span::before, .mt-checkbox-red-500:checked + label span, .mt-checkbox-red-500 + label span::before{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n/* Tippy Boxx */\n.tippy-box:focus {\n    outline: none;\n}\n/* Tippy Animation */\n.tippy-box[data-animation='scale'] {\n    transform-origin: top left !important;\n}\n/* Tippy Arrow */\n.arrow-light .tippy-svg-arrow {\n    fill: #fff;\n}\n.arrow-dark .tippy-svg-arrow {\n    fill: rgba(0, 0, 0, 0.8);\n}\n/* Material Tailwind Radio Button Ripple Effect Animation */\n@keyframes radio-ripple {\n    from {\n        opacity: 0;\n        transform: scale3d(1, 1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale3d(2, 2, 1);\n    }\n    to {\n        opacity: 0;\n        transform: scale3d(3, 3, 1);\n    }\n}\n.last\\:mr-0:last-child{margin-right:0px}\n.hover\\:border-blue-gray-700:hover{--tw-border-opacity:1;border-color:rgba(69, 90, 100, var(--tw-border-opacity))}\n.hover\\:border-gray-700:hover{--tw-border-opacity:1;border-color:rgba(97, 97, 97, var(--tw-border-opacity))}\n.hover\\:border-brown-700:hover{--tw-border-opacity:1;border-color:rgba(93, 64, 55, var(--tw-border-opacity))}\n.hover\\:border-deep-orange-700:hover{--tw-border-opacity:1;border-color:rgba(230, 74, 25, var(--tw-border-opacity))}\n.hover\\:border-orange-700:hover{--tw-border-opacity:1;border-color:rgba(245, 124, 0, var(--tw-border-opacity))}\n.hover\\:border-amber-700:hover{--tw-border-opacity:1;border-color:rgba(255, 160, 0, var(--tw-border-opacity))}\n.hover\\:border-yellow-700:hover{--tw-border-opacity:1;border-color:rgba(251, 192, 45, var(--tw-border-opacity))}\n.hover\\:border-lime-700:hover{--tw-border-opacity:1;border-color:rgba(175, 180, 43, var(--tw-border-opacity))}\n.hover\\:border-light-green-700:hover{--tw-border-opacity:1;border-color:rgba(104, 159, 56, var(--tw-border-opacity))}\n.hover\\:border-green-700:hover{--tw-border-opacity:1;border-color:rgba(56, 142, 60, var(--tw-border-opacity))}\n.hover\\:border-teal-700:hover{--tw-border-opacity:1;border-color:rgba(0, 121, 107, var(--tw-border-opacity))}\n.hover\\:border-cyan-700:hover{--tw-border-opacity:1;border-color:rgba(0, 151, 167, var(--tw-border-opacity))}\n.hover\\:border-light-blue-700:hover{--tw-border-opacity:1;border-color:rgba(2, 136, 209, var(--tw-border-opacity))}\n.hover\\:border-blue-700:hover{--tw-border-opacity:1;border-color:rgba(25, 118, 210, var(--tw-border-opacity))}\n.hover\\:border-indigo-700:hover{--tw-border-opacity:1;border-color:rgba(48, 63, 159, var(--tw-border-opacity))}\n.hover\\:border-deep-purple-700:hover{--tw-border-opacity:1;border-color:rgba(81, 45, 168, var(--tw-border-opacity))}\n.hover\\:border-purple-700:hover{--tw-border-opacity:1;border-color:rgba(123, 31, 162, var(--tw-border-opacity))}\n.hover\\:border-pink-700:hover{--tw-border-opacity:1;border-color:rgba(194, 24, 91, var(--tw-border-opacity))}\n.hover\\:border-red-700:hover{--tw-border-opacity:1;border-color:rgba(211, 47, 47, var(--tw-border-opacity))}\n.hover\\:bg-blue-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(69, 90, 100, var(--tw-bg-opacity))}\n.hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.hover\\:bg-brown-700:hover{--tw-bg-opacity:1;background-color:rgba(93, 64, 55, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(230, 74, 25, var(--tw-bg-opacity))}\n.hover\\:bg-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(245, 124, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-700:hover{--tw-bg-opacity:1;background-color:rgba(255, 160, 0, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-700:hover{--tw-bg-opacity:1;background-color:rgba(251, 192, 45, var(--tw-bg-opacity))}\n.hover\\:bg-lime-700:hover{--tw-bg-opacity:1;background-color:rgba(175, 180, 43, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-700:hover{--tw-bg-opacity:1;background-color:rgba(104, 159, 56, var(--tw-bg-opacity))}\n.hover\\:bg-green-700:hover{--tw-bg-opacity:1;background-color:rgba(56, 142, 60, var(--tw-bg-opacity))}\n.hover\\:bg-teal-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 121, 107, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 151, 167, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(2, 136, 209, var(--tw-bg-opacity))}\n.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(25, 118, 210, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgba(48, 63, 159, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(81, 45, 168, var(--tw-bg-opacity))}\n.hover\\:bg-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(123, 31, 162, var(--tw-bg-opacity))}\n.hover\\:bg-pink-700:hover{--tw-bg-opacity:1;background-color:rgba(194, 24, 91, var(--tw-bg-opacity))}\n.hover\\:bg-red-700:hover{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(236, 239, 241, var(--tw-bg-opacity))}\n.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(250, 250, 250, var(--tw-bg-opacity))}\n.hover\\:bg-brown-50:hover{--tw-bg-opacity:1;background-color:rgba(239, 235, 233, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(251, 233, 231, var(--tw-bg-opacity))}\n.hover\\:bg-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 243, 224, var(--tw-bg-opacity))}\n.hover\\:bg-amber-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 248, 225, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 253, 231, var(--tw-bg-opacity))}\n.hover\\:bg-lime-50:hover{--tw-bg-opacity:1;background-color:rgba(249, 251, 231, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-50:hover{--tw-bg-opacity:1;background-color:rgba(241, 248, 233, var(--tw-bg-opacity))}\n.hover\\:bg-green-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 245, 233, var(--tw-bg-opacity))}\n.hover\\:bg-teal-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 241, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 247, 250, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(225, 245, 254, var(--tw-bg-opacity))}\n.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(227, 242, 253, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 234, 246, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(237, 231, 246, var(--tw-bg-opacity))}\n.hover\\:bg-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(243, 229, 245, var(--tw-bg-opacity))}\n.hover\\:bg-pink-50:hover{--tw-bg-opacity:1;background-color:rgba(252, 228, 236, var(--tw-bg-opacity))}\n.hover\\:bg-red-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 235, 238, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.hover\\:bg-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.hover\\:bg-brown-500:hover{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.hover\\:bg-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-600:hover{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.hover\\:bg-lime-500:hover{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-500:hover{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.hover\\:bg-green-500:hover{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.hover\\:bg-teal-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-500:hover{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.hover\\:bg-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.hover\\:bg-pink-500:hover{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.hover\\:bg-red-500:hover{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}\n.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-800:hover{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-700:hover{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.hover\\:text-gray-700:hover{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.hover\\:text-brown-700:hover{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.hover\\:text-deep-orange-700:hover{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.hover\\:text-orange-700:hover{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.hover\\:text-amber-700:hover{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.hover\\:text-yellow-700:hover{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.hover\\:text-lime-700:hover{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.hover\\:text-light-green-700:hover{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.hover\\:text-green-700:hover{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.hover\\:text-teal-700:hover{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.hover\\:text-cyan-700:hover{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.hover\\:text-light-blue-700:hover{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.hover\\:text-indigo-700:hover{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.hover\\:text-deep-purple-700:hover{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.hover\\:text-purple-700:hover{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.hover\\:text-pink-700:hover{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.hover\\:text-red-700:hover{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.hover\\:shadow-lg-blue-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-brown:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-amber:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-yellow:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-lime:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-teal:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-cyan:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-indigo:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-pink:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-red:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-brown:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-amber:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-yellow:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-lime:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-teal:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-cyan:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-indigo:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-pink:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-red:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:border-2:focus{border-width:2px}\n.focus\\:border-blue-gray-500:focus{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.focus\\:border-brown-500:focus{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.focus\\:border-deep-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.focus\\:border-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.focus\\:border-amber-500:focus{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.focus\\:border-yellow-600:focus{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.focus\\:border-lime-500:focus{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.focus\\:border-light-green-500:focus{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.focus\\:border-green-500:focus{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.focus\\:border-teal-500:focus{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.focus\\:border-cyan-500:focus{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.focus\\:border-light-blue-500:focus{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.focus\\:border-deep-purple-500:focus{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.focus\\:border-purple-500:focus{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.focus\\:border-pink-500:focus{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.focus\\:border-red-500:focus{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.focus\\:bg-blue-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(120, 144, 156, var(--tw-bg-opacity))}\n.focus\\:bg-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(189, 189, 189, var(--tw-bg-opacity))}\n.focus\\:bg-brown-400:focus{--tw-bg-opacity:1;background-color:rgba(141, 110, 99, var(--tw-bg-opacity))}\n.focus\\:bg-deep-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 112, 67, var(--tw-bg-opacity))}\n.focus\\:bg-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 167, 38, var(--tw-bg-opacity))}\n.focus\\:bg-amber-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 202, 40, var(--tw-bg-opacity))}\n.focus\\:bg-yellow-500:focus{--tw-bg-opacity:1;background-color:rgba(255, 235, 59, var(--tw-bg-opacity))}\n.focus\\:bg-lime-400:focus{--tw-bg-opacity:1;background-color:rgba(212, 225, 87, var(--tw-bg-opacity))}\n.focus\\:bg-light-green-400:focus{--tw-bg-opacity:1;background-color:rgba(156, 204, 101, var(--tw-bg-opacity))}\n.focus\\:bg-green-400:focus{--tw-bg-opacity:1;background-color:rgba(102, 187, 106, var(--tw-bg-opacity))}\n.focus\\:bg-teal-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 166, 154, var(--tw-bg-opacity))}\n.focus\\:bg-cyan-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 198, 218, var(--tw-bg-opacity))}\n.focus\\:bg-light-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(41, 182, 246, var(--tw-bg-opacity))}\n.focus\\:bg-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(66, 165, 245, var(--tw-bg-opacity))}\n.focus\\:bg-indigo-400:focus{--tw-bg-opacity:1;background-color:rgba(92, 107, 192, var(--tw-bg-opacity))}\n.focus\\:bg-deep-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(126, 87, 194, var(--tw-bg-opacity))}\n.focus\\:bg-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(171, 71, 188, var(--tw-bg-opacity))}\n.focus\\:bg-pink-400:focus{--tw-bg-opacity:1;background-color:rgba(236, 64, 122, var(--tw-bg-opacity))}\n.focus\\:bg-red-400:focus{--tw-bg-opacity:1;background-color:rgba(239, 83, 80, var(--tw-bg-opacity))}\n.focus\\:bg-gray-500:focus{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.focus\\:bg-opacity-20:focus{--tw-bg-opacity:0.2}\n.focus\\:text-gray-800:focus{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.focus\\:shadow-none:focus{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}\n.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}\n.active\\:bg-blue-gray-800:active{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.active\\:bg-gray-800:active{--tw-bg-opacity:1;background-color:rgba(66, 66, 66, var(--tw-bg-opacity))}\n.active\\:bg-brown-800:active{--tw-bg-opacity:1;background-color:rgba(78, 52, 46, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-800:active{--tw-bg-opacity:1;background-color:rgba(216, 67, 21, var(--tw-bg-opacity))}\n.active\\:bg-orange-800:active{--tw-bg-opacity:1;background-color:rgba(239, 108, 0, var(--tw-bg-opacity))}\n.active\\:bg-amber-800:active{--tw-bg-opacity:1;background-color:rgba(255, 143, 0, var(--tw-bg-opacity))}\n.active\\:bg-yellow-800:active{--tw-bg-opacity:1;background-color:rgba(249, 168, 37, var(--tw-bg-opacity))}\n.active\\:bg-lime-800:active{--tw-bg-opacity:1;background-color:rgba(158, 157, 36, var(--tw-bg-opacity))}\n.active\\:bg-light-green-800:active{--tw-bg-opacity:1;background-color:rgba(85, 139, 47, var(--tw-bg-opacity))}\n.active\\:bg-green-800:active{--tw-bg-opacity:1;background-color:rgba(46, 125, 50, var(--tw-bg-opacity))}\n.active\\:bg-teal-800:active{--tw-bg-opacity:1;background-color:rgba(0, 105, 92, var(--tw-bg-opacity))}\n.active\\:bg-cyan-800:active{--tw-bg-opacity:1;background-color:rgba(0, 131, 143, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-800:active{--tw-bg-opacity:1;background-color:rgba(2, 119, 189, var(--tw-bg-opacity))}\n.active\\:bg-blue-800:active{--tw-bg-opacity:1;background-color:rgba(21, 101, 192, var(--tw-bg-opacity))}\n.active\\:bg-indigo-800:active{--tw-bg-opacity:1;background-color:rgba(40, 53, 147, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-800:active{--tw-bg-opacity:1;background-color:rgba(69, 39, 160, var(--tw-bg-opacity))}\n.active\\:bg-purple-800:active{--tw-bg-opacity:1;background-color:rgba(106, 27, 154, var(--tw-bg-opacity))}\n.active\\:bg-pink-800:active{--tw-bg-opacity:1;background-color:rgba(173, 20, 87, var(--tw-bg-opacity))}\n.active\\:bg-red-800:active{--tw-bg-opacity:1;background-color:rgba(198, 40, 40, var(--tw-bg-opacity))}\n.active\\:bg-blue-gray-100:active{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.active\\:bg-gray-100:active{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.active\\:bg-brown-100:active{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.active\\:bg-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.active\\:bg-amber-100:active{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.active\\:bg-yellow-100:active{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.active\\:bg-lime-100:active{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.active\\:bg-light-green-100:active{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.active\\:bg-green-100:active{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.active\\:bg-teal-100:active{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.active\\:bg-cyan-100:active{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-100:active{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.active\\:bg-blue-100:active{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.active\\:bg-indigo-100:active{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-100:active{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.active\\:bg-purple-100:active{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.active\\:bg-pink-100:active{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.active\\:bg-red-100:active{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.active\\:bg-gray-500:active{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.active\\:bg-opacity-40:active{--tw-bg-opacity:0.4}\n@media (min-width: 640px){\n.sm\\:left-auto{left:auto}\n.sm\\:w-full{width:100%}}\n@media (min-width: 768px){\n.md\\:mt-40{margin-top:10rem}\n.md\\:mt-0{margin-top:0px}\n.md\\:mt-64{margin-top:16rem}\n.md\\:mb-0{margin-bottom:0px}\n.md\\:w-9\\/12{width:75%}\n.md\\:w-48{width:12rem}\n.md\\:w-6\\/12{width:50%}\n.md\\:w-4\\/12{width:33.333333%}\n.md\\:w-5\\/12{width:41.666667%}\n.md\\:w-8\\/12{width:66.666667%}\n.md\\:flex-row{flex-direction:row}\n.md\\:justify-start{justify-content:flex-start}\n.md\\:justify-between{justify-content:space-between}\n.md\\:gap-6{grid-gap:1.5rem;gap:1.5rem}\n.md\\:px-8{padding-left:2rem;padding-right:2rem}\n.md\\:px-4{padding-left:1rem;padding-right:1rem}\n.md\\:pr-12{padding-right:3rem}\n.md\\:pt-0{padding-top:0px}}\n@media (min-width: 1024px){\n.lg\\:static{position:static}\n.lg\\:mr-5{margin-right:1.25rem}\n.lg\\:ml-5{margin-left:1.25rem}\n.lg\\:mt-16{margin-top:4rem}\n.lg\\:block{display:block}\n.lg\\:flex{display:flex}\n.lg\\:hidden{display:none}\n.lg\\:w-4\\/12{width:33.333333%}\n.lg\\:w-6\\/12{width:50%}\n.lg\\:w-8\\/12{width:66.666667%}\n.lg\\:w-60{width:15rem}\n.lg\\:w-auto{width:auto}\n.lg\\:flex-row{flex-direction:row}\n.lg\\:items-center{align-items:center}\n.lg\\:justify-between{justify-content:space-between}\n.lg\\:justify-start{justify-content:flex-start}\n.lg\\:px-36{padding-left:9rem;padding-right:9rem}\n.lg\\:text-left{text-align:left}}\n.hover\\:text-gray-900:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n@media (min-width: 768px){\n\t.md\\:left-0{\n\t\tleft: 0px;\n\t}\n\t.md\\:ml-64{\n\t\tmargin-left: 16rem;\n\t}\n\t.md\\:hidden{\n\t\tdisplay: none;\n\t}\n\t.md\\:px-8{\n\t\tpadding-left: 2rem;\n\t\tpadding-right: 2rem;\n\t}\n\t.md\\:px-10{\n\t\tpadding-left: 2.5rem;\n\t\tpadding-right: 2.5rem;\n\t}\n\t.md\\:pr-8{\n\t\tpadding-right: 2rem;\n\t}\n\t.md\\:pl-10{\n\t\tpadding-left: 2.5rem;\n\t}\n}\n@media (min-width: 1024px){\n\t.lg\\:mb-0{\n\t\tmargin-bottom: 0px;\n\t}\n\t.lg\\:w-6\\/12{\n\t\twidth: 50%;\n\t}\n\t.lg\\:w-4\\/12{\n\t\twidth: 33.333333%;\n\t}\n\t.lg\\:grid-cols-2{\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n\t.lg\\:flex-row{\n\t\tflex-direction: row;\n\t}\n\t.lg\\:pt-4{\n\t\tpadding-top: 1rem;\n\t}\n}\n@media (min-width: 1280px){\n\t.xl\\:col-start-1{\n\t\tgrid-column-start: 1;\n\t}\n\t.xl\\:col-end-6{\n\t\tgrid-column-end: 6;\n\t}\n\t.xl\\:grid-cols-4{\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\n}\n", "",{"version":3,"sources":["webpack://src/assets/styles/tailwind.css"],"names":[],"mappings":"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AC3B,sBAAsB;CACtB,sCAAsC;CACtC,4CAA4C;CAC5C,0CAA0C;CAC1C,2CAA2C;CAC3C,4CAA4C;CAC5C,wCAAwC;CACxC,0CAA0C;CAC1C,uCAAuC;CACvC,6CAA6C;CAC7C,sLAAsL;AACvL;AACA;CACC,WAAW;AACZ;AACA;CACC;EACC,gBAAgB;CACjB;AACD;AACA;CACC;EACC,gBAAgB;CACjB;AACD;AACA;CACC;EACC,iBAAiB;CAClB;AACD;AACA;CACC;EACC,iBAAiB;CAClB;AACD;AACA;CACC;EACC,iBAAiB;CAClB;AACD;AACA;CACC,mBAAmB;AACpB;AACA;CACC,eAAe;AAChB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,SAAS;AACV;AACA;CACC,WAAW;AACZ;AACA;CACC,WAAW;AACZ;AACA;CACC,YAAY;AACb;AACA;CACC,QAAQ;AACT;AACA;CACC,WAAW;AACZ;AACA;CACC,WAAW;AACZ;AACA;CACC,mBAAmB;AACpB;AACA;CACC,kBAAkB;CAClB,qBAAqB;AACtB;AACA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,gBAAgB;CAChB,mBAAmB;AACpB;AACA;CACC,mBAAmB;CACnB,oBAAoB;AACrB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,oBAAoB;AACrB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,oBAAoB;AACrB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,eAAe;AAChB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,cAAc;AACf;AACA;CACC,qBAAqB;AACtB;AACA;CACC,aAAa;AACd;AACA;CACC,cAAc;AACf;AACA;CACC,aAAa;AACd;AACA;CACC,YAAY;AACb;AACA;CACC,YAAY;AACb;AACA;CACC,cAAc;AACf;AACA;CACC,aAAa;AACd;AACA;CACC,YAAY;AACb;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,gBAAgB;AACjB;AACA;CACC,WAAW;AACZ;AACA;CACC,kBAAkB;AACnB;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,YAAY;AACb;AACA;CACC,WAAW;AACZ;AACA;CACC,kBAAkB;AACnB;AACA;CACC,YAAY;AACb;AACA;CACC,YAAY;AACb;AACA;CACC,eAAe;AAChB;AACA;CACC,eAAe;AAChB;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,qBAAqB;AACtB;AACA;CACC,gDAAgD;AACjD;AACA;CACC,mBAAmB;AACpB;AACA;CACC,sBAAsB;AACvB;AACA;CACC,eAAe;AAChB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,2BAA2B;AAC5B;AACA;CACC,mBAAmB;AACpB;AACA;CACC,oBAAoB;AACrB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,8BAA8B;AAC/B;AACA;CACC,6BAA6B;AAC9B;AACA;CACC,gBAAW;CAAX,WAAW;AACZ;AACA;CACC,cAAS;CAAT,SAAS;AACV;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,sBAAsB;AACvB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,sBAAsB;AACvB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,wBAAwB;AACzB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,sBAAsB;CACtB,2DAA2D;AAC5D;AACA;CACC,sBAAsB;CACtB,2DAA2D;AAC5D;AACA;CACC,kBAAkB;CAClB,2DAA2D;AAC5D;AACA;CACC,6BAA6B;AAC9B;AACA;CACC,kBAAkB;CAClB,0DAA0D;AAC3D;AACA;CACC,kBAAkB;CAClB,yDAAyD;AAC1D;AACA;CACC,kBAAkB;CAClB,2DAA2D;AAC5D;AACA;CACC,yEAAyE;AAC1E;AACA;CACC,aAAa;AACd;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;AACA;CACC,kBAAkB;CAClB,mBAAmB;AACpB;AACA;CACC,oBAAoB;CACpB,qBAAqB;AACtB;AACA;CACC,oBAAoB;CACpB,uBAAuB;AACxB;AACA;CACC,iBAAiB;CACjB,oBAAoB;AACrB;AACA;CACC,kBAAkB;CAClB,mBAAmB;AACpB;AACA;CACC,qBAAqB;CACrB,sBAAsB;AACvB;AACA;CACC,qBAAqB;CACrB,sBAAsB;AACvB;AACA;CACC,oBAAoB;CACpB,qBAAqB;AACtB;AACA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,oBAAoB;AACrB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,sBAAsB;AACvB;AACA;CACC,mBAAmB;CACnB,oBAAoB;AACrB;AACA;CACC,iBAAiB;CACjB,iBAAiB;AAClB;AACA;CACC,kBAAkB;CAClB,iBAAiB;AAClB;AACA;CACC,kBAAkB;CAClB,oBAAoB;AACrB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,sBAAsB;AACvB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,oBAAoB;CACpB,+CAA+C;AAChD;AACA;CACC,oBAAoB;CACpB,kDAAkD;AACnD;AACA;CACC,oBAAoB;CACpB,iDAAiD;AAClD;AACA;CACC,oBAAoB;CACpB,kDAAkD;AACnD;AACA;CACC,oBAAoB;CACpB,+CAA+C;AAChD;AACA;CACC,oFAAoF;CACpF,uGAAuG;AACxG;AACA;CACC,sFAAsF;CACtF,uGAAuG;AACxG;AACA;CACC,kFAAkF;CAClF,uGAAuG;AACxG;AACA;CACC,wBAAwB;AACzB;AACA;CACC,wBAAwB;CACxB,wDAAwD;CACxD,0BAA0B;AAC3B;AACA;CACC,0BAA0B;AAC3B;AACA,iDAAiD,QAAQ;AACzD,4GAA4G,QAAQ,CAAC,wBAAwB;AAC7I,oDAAoD,KAAK;AACzD,wDAAwD,WAAW;AACnE,kDAAkD,OAAO;AACzD,8GAA8G,uBAAuB,CAAC,mBAAmB,CAAC,SAAS;AACnK,mDAAmD,MAAM;AACzD,gHAAgH,wBAAwB,CAAC,mBAAmB,CAAC,UAAU;AACvK,iBAAiB,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,kBAAkB;AACpE,sCAAsC,iBAAiB;AACvD,sDAAsD,uBAAuB;AAC7E,yDAAyD,oBAAoB;AAC7E,uDAAuD,sBAAsB;AAC7E,wDAAwD,qBAAqB;AAC7E,oDAAoD,mBAAmB,CAAC,SAAS;AACjF,yDAAyD,SAAS;AAClE,8EAA8E,0BAA0B;AACxG,iFAAiF,2BAA2B;AAC5G,+EAA+E,0BAA0B;AACzG,gFAAgF,2BAA2B;AAC3G,gEAAgE;AAChE,8FAA8F;AAC9F;;;CAGC;AACD;;CAEC;AACD;;;CAGC,sBAAsB;AACvB;AACA;;CAEC;AACD;CACC,WAAW;AACZ;AACA;;;CAGC;AACD;CACC,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;AACvC;AACA;;;CAGC;AACD;;CAEC;AACD;CACC,SAAS;AACV;AACA;;CAEC;AACD;CACC;;;;;;;;;kBASiB;AAClB;AACA;;;CAGC;AACD;;;CAGC;AACD;CACC,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AACvB;AACA;;;CAGC;AACD;;CAEC;AACD;CACC,iCAAiC;AAClC;AACA;;CAEC;AACD;;CAEC,mBAAmB;AACpB;AACA;;;CAGC;AACD;;;;CAIC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;AACA;;CAEC;AACD;CACC,cAAc;AACf;AACA;;CAEC;AACD;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;AACA;CACC,eAAe;AAChB;AACA;CACC,WAAW;AACZ;AACA;;;CAGC;AACD;;;CAGC;AACD;CACC,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;AAC9B;AACA;;;CAGC;AACD;;;CAGC;AACD;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;AACA;;;CAGC;AACD;SACS,MAAM;CACd,oBAAoB;AACrB;AACA;;CAEC;AACD;;;;CAIC,0BAA0B;AAC3B;AACA;;CAEC;AACD;CACC,kBAAkB;CAClB,UAAU;AACX;AACA;;CAEC;AACD;CACC,8BAA8B;AAC/B;AACA;;;CAGC;AACD;CACC,gBAAgB;AACjB;AACA;;CAEC;AACD;CACC,UAAU;AACX;AACA;;CAEC;AACD;CACC,wBAAwB;AACzB;AACA;;CAEC;AACD;;CAEC,YAAY;AACb;AACA;;;CAGC;AACD;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;AACA;;CAEC;AACD;CACC,wBAAwB;AACzB;AACA;;;CAGC;AACD;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;AACA;;;CAGC;AACD;;CAEC;AACD;CACC,kBAAkB;AACnB;AACA;;;;EAIE;AACF;;EAEE;AACF;;;;;;;;;;;;;EAaE,SAAS;AACX;AACA;EACE,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;;;EAGE;AACF;EACE,mBAAmB;EACnB,0CAA0C;AAC5C;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;;EAEE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;AACA;;EAEE;AACF;;;;;EAKE;AACF;EACE,+BAA+B,EAAE,MAAM;EACvC,gBAAgB,EAAE,MAAM;AAC1B;AACA;;;EAGE;AACF;EACE,oBAAoB;EACpB,oBAAoB;AACtB;AACA;;;;;;;;;;;;;;;;;;;;;;;;EAwBE;AACF;;;EAGE,sBAAsB,EAAE,MAAM;EAC9B,eAAe,EAAE,MAAM;EACvB,mBAAmB,EAAE,MAAM;EAC3B,qBAAqB,EAAE,MAAM;AAC/B;AACA;;EAEE;AACF;EACE,qBAAqB;AACvB;AACA;;;;;;;;EAQE;AACF;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,UAAU;EACV,cAAc;AAChB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;;;;;;EAME,kBAAkB;EAClB,oBAAoB;AACtB;AACA;;;EAGE;AACF;EACE,cAAc;EACd,wBAAwB;AAC1B;AACA;;;;;;EAME;AACF;;;;;EAKE,UAAU;EACV,oBAAoB;EACpB,cAAc;AAChB;AACA;;;;;EAKE;AACF;;;;EAIE,+GAA+G;AACjH;AACA;;;;;;EAME;AACF;;;;;;;;EAQE,cAAc;EACd,sBAAsB;AACxB;AACA;;;;;EAKE;AACF;;EAEE,eAAe;EACf,YAAY;AACd;AACA,EAAE,qBAAqB,CAAC,2CAA2C,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,uCAAuC,CAAC,iCAAiC,CAAC,0BAA0B;AAC/N,WAAW,UAAU;AACrB;AACA,WAAW,eAAe,CAAC;AAC3B;AACA,WAAW,eAAe,CAAC;AAC3B;AACA,WAAW,gBAAgB,CAAC;AAC5B;AACA,WAAW,gBAAgB,CAAC;AAC5B;AACA,WAAW,gBAAgB,CAAC;AAC5B,qBAAqB,mBAAmB;AACxC,qBAAqB,mBAAmB;AACxC,UAAU,iBAAiB;AAC3B,UAAU,iBAAiB;AAC3B,QAAQ,eAAe;AACvB,OAAO,cAAc;AACrB,SAAS,OAAO,CAAC,SAAS,CAAC,UAAU,CAAC,QAAQ;AAC9C,SAAS,UAAU;AACnB,UAAU,cAAc;AACxB,QAAQ,QAAQ;AAChB,SAAS,SAAS;AAClB,QAAQ,QAAQ;AAChB,WAAW,aAAa;AACxB,WAAW,aAAa;AACxB,QAAQ,YAAY;AACpB,QAAQ,OAAO;AACf,UAAU,OAAO;AACjB,UAAU,OAAO;AACjB,SAAS,YAAY;AACrB,SAAS,aAAa;AACtB,OAAO,UAAU;AACjB,OAAO,OAAO;AACd,WAAW,YAAY;AACvB,WAAW,eAAe;AAC1B,MAAM,UAAU;AAChB,MAAM,UAAU;AAChB,MAAM,UAAU;AAChB,MAAM,UAAU;AAChB,MAAM,UAAU;AAChB,YAAY,UAAU;AACtB,aAAa,WAAW;AACxB,SAAS,gBAAgB,CAAC,iBAAiB;AAC3C,OAAO,eAAe,CAAC,kBAAkB;AACzC,MAAM,eAAe,CAAC,kBAAkB;AACxC,MAAM,iBAAiB,CAAC,oBAAoB;AAC5C,MAAM,gBAAgB,CAAC,iBAAiB;AACxC,MAAM,mBAAmB,CAAC,oBAAoB;AAC9C,MAAM,eAAe,CAAC,kBAAkB;AACxC,MAAM,mBAAmB,CAAC,oBAAoB;AAC9C,OAAO,kBAAkB;AACzB,OAAO,eAAe;AACtB,OAAO,iBAAiB;AACxB,MAAM,kBAAkB;AACxB,OAAO,eAAe;AACtB,MAAM,eAAe;AACrB,OAAO,eAAe;AACtB,OAAO,oBAAoB;AAC3B,MAAM,eAAe;AACrB,OAAO,eAAe;AACtB,OAAO,kBAAkB;AACzB,OAAO,gBAAgB;AACvB,SAAS,iBAAiB;AAC1B,SAAS,gBAAgB;AACzB,MAAM,oBAAoB;AAC1B,MAAM,mBAAmB;AACzB,MAAM,iBAAiB;AACvB,OAAO,eAAe;AACtB,MAAM,iBAAiB;AACvB,MAAM,oBAAoB;AAC1B,QAAQ,iBAAiB;AACzB,MAAM,qBAAqB;AAC3B,OAAO,kBAAkB;AACzB,MAAM,kBAAkB;AACxB,MAAM,kBAAkB;AACxB,MAAM,oBAAoB;AAC1B,QAAQ,kBAAkB;AAC1B,OAAO,mBAAmB;AAC1B,MAAM,qBAAqB;AAC3B,MAAM,mBAAmB;AACzB,MAAM,oBAAoB;AAC1B,MAAM,kBAAkB;AACxB,MAAM,iBAAiB;AACvB,MAAM,kBAAkB;AACxB,MAAM,mBAAmB;AACzB,MAAM,kBAAkB;AACxB,MAAM,cAAc;AACpB,MAAM,qBAAqB;AAC3B,MAAM,iBAAiB;AACvB,QAAQ,gBAAgB;AACxB,OAAO,mBAAmB;AAC1B,OAAO,aAAa;AACpB,cAAc,oBAAoB;AAClC,MAAM,YAAY;AAClB,aAAa,mBAAmB;AAChC,MAAM,YAAY;AAClB,QAAQ,YAAY;AACpB,MAAM,WAAW;AACjB,KAAK,cAAc;AACnB,MAAM,aAAa;AACnB,MAAM,WAAW;AACjB,MAAM,WAAW;AACjB,MAAM,WAAW;AACjB,KAAK,aAAa;AAClB,KAAK,WAAW;AAChB,MAAM,WAAW;AACjB,MAAM,WAAW;AACjB,KAAK,cAAc;AACnB,UAAU,YAAY;AACtB,QAAQ,WAAW;AACnB,QAAQ,WAAW;AACnB,KAAK,cAAc;AACnB,MAAM,cAAc;AACpB,KAAK,WAAW;AAChB,MAAM,UAAU;AAChB,KAAK,aAAa;AAClB,QAAQ,UAAU;AAClB,MAAM,WAAW;AACjB,MAAM,WAAW;AACjB,aAAa,WAAW;AACxB,MAAM,WAAW;AACjB,MAAM,WAAW;AACjB,MAAM,WAAW;AACjB,MAAM,UAAU;AAChB,KAAK,aAAa;AAClB,MAAM,UAAU;AAChB,MAAM,UAAU;AAChB,MAAM,YAAY;AAClB,KAAK,YAAY;AACjB,KAAK,UAAU;AACf,MAAM,UAAU;AAChB,MAAM,UAAU;AAChB,MAAM,UAAU;AAChB,KAAK,aAAa;AAClB,UAAU,gBAAgB;AAC1B,KAAK,UAAU;AACf,QAAQ,UAAU;AAClB,MAAM,YAAY;AAClB,SAAS,aAAa;AACtB,WAAW,eAAe;AAC1B,YAAY,cAAc;AAC1B,WAAW,qBAAqB;AAChC,UAAU,eAAe;AACzB,WAAW,eAAe;AAC1B,WAAW,eAAe;AAC1B,UAAU,eAAe;AACzB,WAAW,aAAa;AACxB,QAAQ,QAAW;AACnB,WAAW,SAAS;AACpB,WAAW,WAAW;AACtB,WAAW,kBAAkB,CAAC,kBAAkB,CAAC,aAAa,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,0MAA0M;AACnU,mBAAmB,4BAA4B;AAC/C,mBAAmB,qBAAqB;AACxC,eAAe,oBAAoB;AACnC,iBAAiB,wBAAwB;AACzC,gBAAgB,cAAc;AAC9B,oBAAoB,kBAAkB;AACtC,aAAa,wBAAwB,CAAC,gBAAgB;AACtD,aAAa,WAAW;AACxB,WAAW,oBAAoB;AAC/B,UAAU,qBAAqB;AAC/B,WAAW,cAAc;AACzB,oBAAoB,kBAAkB;AACtC,cAAc,kBAAkB;AAChC,WAAW,oBAAoB;AAC/B,aAAa,sBAAsB;AACnC,iBAAiB,6BAA6B;AAC9C,gBAAgB,sBAAsB;AACtC,eAAe,0BAA0B;AACzC,aAAa,wBAAwB;AACrC,OAAO,aAAO,CAAP,QAAQ;AACf,QAAQ,eAAS,CAAT,UAAU;AAClB,OAAO,aAAO,CAAP,QAAQ;AACf,OAAO,eAAS,CAAT,UAAU;AACjB,OAAO,gBAAU,CAAV,WAAW;AAClB,OAAO,gBAAU,CAAV,WAAW;AAClB,SAAS,sBAAgB,CAAhB,iBAAiB;AAC1B,SAAS,iBAAW,CAAX,YAAY;AACrB,UAAU,oBAAc,CAAd,eAAe;AACzB,SAAS,iBAAW,CAAX,YAAY;AACrB,SAAS,oBAAc,CAAd,eAAe;AACxB,6CAA6C,sBAAsB,CAAC,2DAA2D,CAAC,oDAAoD;AACpL,iBAAiB,eAAe;AAChC,mBAAmB,iBAAiB;AACpC,mBAAmB,iBAAiB;AACpC,iBAAiB,eAAe;AAChC,mBAAmB,kBAAkB;AACrC,aAAa,wBAAwB;AACrC,SAAS,qBAAqB;AAC9B,YAAY,oBAAoB;AAChC,cAAc,oBAAoB;AAClC,YAAY,qBAAqB;AACjC,YAAY,sBAAsB;AAClC,YAAY,sBAAsB;AAClC,WAAW,8BAA8B,CAAC,+BAA+B;AACzE,QAAQ,gBAAgB;AACxB,UAAU,gBAAgB;AAC1B,YAAY,oBAAoB;AAChC,YAAY,sBAAsB;AAClC,YAAY,qBAAqB;AACjC,UAAU,oBAAoB;AAC9B,UAAU,uBAAuB;AACjC,YAAY,uBAAuB;AACnC,UAAU,sBAAsB;AAChC,cAAc,kBAAkB;AAChC,aAAa,iBAAiB;AAC9B,qBAAqB,qBAAqB,CAAC,0DAA0D;AACrG,iBAAiB,qBAAqB,CAAC,0DAA0D;AACjG,iBAAiB,qBAAqB,CAAC,0DAA0D;AACjG,sBAAsB,qBAAqB,CAAC,yDAAyD;AACrG,iBAAiB,qBAAqB,CAAC,0DAA0D;AACjG,kBAAkB,qBAAqB,CAAC,wDAAwD;AAChG,wBAAwB,qBAAqB,CAAC,wDAAwD;AACtG,mBAAmB,qBAAqB,CAAC,wDAAwD;AACjG,kBAAkB,qBAAqB,CAAC,wDAAwD;AAChG,mBAAmB,qBAAqB,CAAC,yDAAyD;AAClG,iBAAiB,qBAAqB,CAAC,yDAAyD;AAChG,wBAAwB,qBAAqB,CAAC,yDAAyD;AACvG,kBAAkB,qBAAqB,CAAC,wDAAwD;AAChG,iBAAiB,qBAAqB,CAAC,wDAAwD;AAC/F,iBAAiB,qBAAqB,CAAC,wDAAwD;AAC/F,uBAAuB,qBAAqB,CAAC,wDAAwD;AACrG,iBAAiB,qBAAqB,CAAC,yDAAyD;AAChG,mBAAmB,qBAAqB,CAAC,wDAAwD;AACjG,wBAAwB,qBAAqB,CAAC,yDAAyD;AACvG,mBAAmB,qBAAqB,CAAC,yDAAyD;AAClG,iBAAiB,qBAAqB,CAAC,wDAAwD;AAC/F,gBAAgB,qBAAqB,CAAC,wDAAwD;AAC9F,oBAAoB,wBAAwB;AAC5C,UAAU,iBAAiB,CAAC,0DAA0D;AACtF,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,eAAe,iBAAiB,CAAC,uDAAuD;AACxF,mBAAmB,iBAAiB,CAAC,wDAAwD;AAC7F,aAAa,iBAAiB,CAAC,uDAAuD;AACtF,eAAe,iBAAiB,CAAC,yDAAyD;AAC1F,YAAY,iBAAiB,CAAC,wDAAwD;AACtF,cAAc,iBAAiB,CAAC,wDAAwD;AACxF,kBAAkB,iBAAiB,CAAC,uDAAuD;AAC3F,kBAAkB,iBAAiB,CAAC,yDAAyD;AAC7F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,cAAc,iBAAiB,CAAC,wDAAwD;AACxF,oBAAoB,iBAAiB,CAAC,wDAAwD;AAC9F,eAAe,iBAAiB,CAAC,wDAAwD;AACzF,cAAc,iBAAiB,CAAC,wDAAwD;AACxF,aAAa,iBAAiB,CAAC,yDAAyD;AACxF,oBAAoB,iBAAiB,CAAC,yDAAyD;AAC/F,aAAa,iBAAiB,CAAC,wDAAwD;AACvF,aAAa,iBAAiB,CAAC,wDAAwD;AACvF,aAAa,iBAAiB,CAAC,yDAAyD;AACxF,eAAe,iBAAiB,CAAC,wDAAwD;AACzF,oBAAoB,iBAAiB,CAAC,yDAAyD;AAC/F,eAAe,iBAAiB,CAAC,yDAAyD;AAC1F,aAAa,iBAAiB,CAAC,wDAAwD;AACvF,YAAY,iBAAiB,CAAC,wDAAwD;AACtF,gBAAgB,4BAA4B;AAC5C,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,kBAAkB,iBAAiB,CAAC,0DAA0D;AAC9F,cAAc,iBAAiB,CAAC,0DAA0D;AAC1F,oBAAoB,iBAAiB,CAAC,0DAA0D;AAChG,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,cAAc,iBAAiB,CAAC,0DAA0D;AAC1F,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,oBAAoB,iBAAiB,CAAC,0DAA0D;AAChG,cAAc,iBAAiB,CAAC,0DAA0D;AAC1F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,mBAAmB,iBAAiB,CAAC,0DAA0D;AAC/F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,oBAAoB,iBAAiB,CAAC,0DAA0D;AAChG,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,YAAY,iBAAiB,CAAC,0DAA0D;AACxF,kBAAkB,iBAAiB,CAAC,uDAAuD;AAC3F,cAAc,iBAAiB,CAAC,uDAAuD;AACvF,oBAAoB,iBAAiB,CAAC,wDAAwD;AAC9F,cAAc,iBAAiB,CAAC,wDAAwD;AACxF,eAAe,iBAAiB,CAAC,yDAAyD;AAC1F,aAAa,iBAAiB,CAAC,yDAAyD;AACxF,oBAAoB,iBAAiB,CAAC,wDAAwD;AAC9F,cAAc,iBAAiB,CAAC,uDAAuD;AACvF,aAAa,iBAAiB,CAAC,sDAAsD;AACrF,aAAa,iBAAiB,CAAC,uDAAuD;AACtF,mBAAmB,iBAAiB,CAAC,uDAAuD;AAC5F,aAAa,iBAAiB,CAAC,wDAAwD;AACvF,eAAe,iBAAiB,CAAC,wDAAwD;AACzF,oBAAoB,iBAAiB,CAAC,wDAAwD;AAC9F,eAAe,iBAAiB,CAAC,wDAAwD;AACzF,aAAa,iBAAiB,CAAC,wDAAwD;AACvF,YAAY,iBAAiB,CAAC,wDAAwD;AACtF,UAAU,iBAAiB,CAAC,oDAAoD;AAChF,aAAa,iBAAiB,CAAC,uDAAuD;AACtF,kBAAkB,iBAAiB,CAAC,0DAA0D;AAC9F,cAAc,iBAAiB,CAAC,0DAA0D;AAC1F,oBAAoB,iBAAiB,CAAC,0DAA0D;AAChG,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,cAAc,iBAAiB,CAAC,0DAA0D;AAC1F,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,oBAAoB,iBAAiB,CAAC,0DAA0D;AAChG,cAAc,iBAAiB,CAAC,0DAA0D;AAC1F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,mBAAmB,iBAAiB,CAAC,0DAA0D;AAC/F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,oBAAoB,iBAAiB,CAAC,0DAA0D;AAChG,eAAe,iBAAiB,CAAC,0DAA0D;AAC3F,aAAa,iBAAiB,CAAC,0DAA0D;AACzF,YAAY,iBAAiB,CAAC,0DAA0D;AACxF,eAAe,mBAAmB;AAClC,eAAe,mBAAmB;AAClC,mBAAmB,wEAAwE;AAC3F,oBAAoB,0BAA0B,CAAC,yFAAyF;AACxI,eAAe,0BAA0B,CAAC,0FAA0F;AACpI,gBAAgB,0BAA0B,CAAC,wFAAwF;AACnI,sBAAsB,0BAA0B,CAAC,wFAAwF;AACzI,iBAAiB,0BAA0B,CAAC,wFAAwF;AACpI,gBAAgB,0BAA0B,CAAC,wFAAwF;AACnI,iBAAiB,0BAA0B,CAAC,yFAAyF;AACrI,eAAe,0BAA0B,CAAC,yFAAyF;AACnI,sBAAsB,0BAA0B,CAAC,yFAAyF;AAC1I,gBAAgB,0BAA0B,CAAC,wFAAwF;AACnI,eAAe,0BAA0B,CAAC,wFAAwF;AAClI,eAAe,0BAA0B,CAAC,wFAAwF;AAClI,qBAAqB,0BAA0B,CAAC,wFAAwF;AACxI,eAAe,0BAA0B,CAAC,yFAAyF;AACnI,iBAAiB,0BAA0B,CAAC,wFAAwF;AACpI,sBAAsB,0BAA0B,CAAC,yFAAyF;AAC1I,iBAAiB,0BAA0B,CAAC,yFAAyF;AACrI,eAAe,0BAA0B,CAAC,wFAAwF;AAClI,cAAc,0BAA0B,CAAC,wFAAwF;AACjI,qBAAqB,0BAA0B,CAAC,wFAAwF;AACxI,kBAAkB,wBAAwB;AAC1C,aAAa,wBAAwB;AACrC,cAAc,wBAAwB;AACtC,oBAAoB,wBAAwB;AAC5C,eAAe,wBAAwB;AACvC,cAAc,wBAAwB;AACtC,eAAe,wBAAwB;AACvC,aAAa,wBAAwB;AACrC,oBAAoB,wBAAwB;AAC5C,cAAc,wBAAwB;AACtC,aAAa,wBAAwB;AACrC,aAAa,wBAAwB;AACrC,mBAAmB,wBAAwB;AAC3C,aAAa,wBAAwB;AACrC,eAAe,wBAAwB;AACvC,oBAAoB,wBAAwB;AAC5C,eAAe,wBAAwB;AACvC,aAAa,wBAAwB;AACrC,YAAY,wBAAwB;AACpC,mBAAmB,wBAAwB;AAC3C,KAAK,YAAY;AACjB,KAAK,eAAe;AACpB,KAAK,YAAY;AACjB,KAAK,cAAc;AACnB,KAAK,WAAW;AAChB,QAAQ,gBAAgB;AACxB,KAAK,cAAc;AACnB,KAAK,eAAe;AACpB,KAAK,eAAe;AACpB,MAAM,cAAc;AACpB,MAAM,iBAAiB,CAAC,kBAAkB;AAC1C,OAAO,gBAAgB,CAAC,mBAAmB;AAC3C,MAAM,mBAAmB,CAAC,sBAAsB;AAChD,MAAM,gBAAgB,CAAC,mBAAmB;AAC1C,OAAO,gBAAgB,CAAC,mBAAmB;AAC3C,OAAO,iBAAiB,CAAC,kBAAkB;AAC3C,SAAS,qBAAqB,CAAC,sBAAsB;AACrD,MAAM,mBAAmB,CAAC,oBAAoB;AAC9C,MAAM,kBAAkB,CAAC,qBAAqB;AAC9C,OAAO,gBAAgB,CAAC,mBAAmB;AAC3C,OAAO,gBAAgB,CAAC,mBAAmB;AAC3C,MAAM,mBAAmB,CAAC,sBAAsB;AAChD,SAAS,oBAAoB,CAAC,uBAAuB;AACrD,SAAS,oBAAoB,CAAC,uBAAuB;AACrD,MAAM,mBAAmB,CAAC,oBAAoB;AAC9C,MAAM,mBAAmB,CAAC,sBAAsB;AAChD,MAAM,oBAAoB,CAAC,qBAAqB;AAChD,MAAM,gBAAgB,CAAC,mBAAmB;AAC1C,MAAM,iBAAiB,CAAC,kBAAkB;AAC1C,MAAM,oBAAoB,CAAC,qBAAqB;AAChD,MAAM,oBAAoB,CAAC,qBAAqB;AAChD,MAAM,gBAAgB,CAAC,iBAAiB;AACxC,MAAM,oBAAoB,CAAC,qBAAqB;AAChD,SAAS,qBAAqB,CAAC,sBAAsB;AACrD,MAAM,oBAAoB,CAAC,qBAAqB;AAChD,OAAO,gBAAgB;AACvB,OAAO,mBAAmB;AAC1B,MAAM,gBAAgB;AACtB,MAAM,qBAAqB;AAC3B,MAAM,qBAAqB;AAC3B,MAAM,kBAAkB;AACxB,MAAM,mBAAmB;AACzB,OAAO,mBAAmB;AAC1B,OAAO,gBAAgB;AACvB,OAAO,iBAAiB;AACxB,OAAO,gBAAgB;AACvB,OAAO,oBAAoB;AAC3B,OAAO,mBAAmB;AAC1B,OAAO,kBAAkB;AACzB,MAAM,iBAAiB;AACvB,MAAM,gBAAgB;AACtB,MAAM,mBAAmB;AACzB,MAAM,gBAAgB;AACtB,OAAO,kBAAkB;AACzB,MAAM,oBAAoB;AAC1B,MAAM,qBAAqB;AAC3B,MAAM,oBAAoB;AAC1B,MAAM,qBAAqB;AAC3B,MAAM,iBAAiB;AACvB,MAAM,oBAAoB;AAC1B,SAAS,oBAAoB;AAC7B,SAAS,uBAAuB;AAChC,MAAM,mBAAmB;AACzB,MAAM,kBAAkB;AACxB,SAAS,oBAAoB;AAC7B,SAAS,uBAAuB;AAChC,MAAM,kBAAkB;AACxB,MAAM,sBAAsB;AAC5B,SAAS,oBAAoB;AAC7B,SAAS,uBAAuB;AAChC,MAAM,mBAAmB;AACzB,MAAM,mBAAmB;AACzB,MAAM,qBAAqB;AAC3B,MAAM,oBAAoB;AAC1B,MAAM,qBAAqB;AAC3B,MAAM,qBAAqB;AAC3B,OAAO,qBAAqB;AAC5B,OAAO,gBAAgB;AACvB,aAAa,iBAAiB;AAC9B,YAAY,gBAAgB;AAC5B,WAAW,eAAe;AAC1B,cAAc,qBAAqB;AACnC,YAAY,gCAAgC;AAC5C,SAAS,iBAAiB,CAAC,mBAAmB;AAC9C,SAAS,kBAAkB,CAAC,mBAAmB;AAC/C,SAAS,iBAAiB,CAAC,gBAAgB;AAC3C,UAAU,iBAAiB,CAAC,aAAa;AACzC,SAAS,kBAAkB,CAAC,mBAAmB;AAC/C,WAAW,cAAc,CAAC,kBAAkB;AAC5C,UAAU,gBAAgB,CAAC,gBAAgB;AAC3C,UAAU,iBAAiB,CAAC,kBAAkB;AAC9C,UAAU,kBAAkB,CAAC,mBAAmB;AAChD,UAAU,cAAc,CAAC,aAAa;AACtC,UAAU,gBAAgB,CAAC,aAAa;AACxC,UAAU,cAAc,CAAC,aAAa;AACtC,UAAU,cAAc,CAAC,aAAa;AACtC,aAAa,eAAe;AAC5B,eAAe,eAAe;AAC9B,WAAW,eAAe;AAC1B,YAAY,eAAe;AAC3B,aAAa,eAAe;AAC5B,WAAW,wBAAwB;AACnC,YAAY,yBAAyB;AACrC,iBAAiB,iBAAiB;AAClC,cAAc,aAAa;AAC3B,gBAAgB,eAAe;AAC/B,YAAY,kBAAkB;AAC9B,cAAc,iBAAiB;AAC/B,gBAAgB,qBAAqB;AACrC,eAAe,sBAAsB;AACrC,eAAe,mBAAmB,CAAC,8CAA8C;AACjF,oBAAoB,mBAAmB,CAAC,+CAA+C;AACvF,qBAAqB,mBAAmB,CAAC,+CAA+C;AACxF,oBAAoB,mBAAmB,CAAC,8CAA8C;AACtF,oBAAoB,mBAAmB,CAAC,8CAA8C;AACtF,oBAAoB,mBAAmB,CAAC,iDAAiD;AACzF,mBAAmB,mBAAmB,CAAC,iDAAiD;AACxF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,eAAe,mBAAmB,CAAC,iDAAiD;AACpF,eAAe,mBAAmB,CAAC,8CAA8C;AACjF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,iBAAiB,mBAAmB,CAAC,+CAA+C;AACpF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,cAAc,mBAAmB,CAAC,+CAA+C;AACjF,eAAe,mBAAmB,CAAC,iDAAiD;AACpF,YAAY,mBAAmB,CAAC,iDAAiD;AACjF,oBAAoB,mBAAmB,CAAC,gDAAgD;AACxF,gBAAgB,mBAAmB,CAAC,+CAA+C;AACnF,sBAAsB,mBAAmB,CAAC,+CAA+C;AACzF,iBAAiB,mBAAmB,CAAC,+CAA+C;AACpF,gBAAgB,mBAAmB,CAAC,+CAA+C;AACnF,iBAAiB,mBAAmB,CAAC,gDAAgD;AACrF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,sBAAsB,mBAAmB,CAAC,gDAAgD;AAC1F,gBAAgB,mBAAmB,CAAC,+CAA+C;AACnF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,sBAAsB,mBAAmB,CAAC,gDAAgD;AAC1F,iBAAiB,mBAAmB,CAAC,gDAAgD;AACrF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,cAAc,mBAAmB,CAAC,+CAA+C;AACjF,eAAe,mBAAmB,CAAC,iDAAiD;AACpF,eAAe,mBAAmB,CAAC,8CAA8C;AACjF,gBAAgB,mBAAmB,CAAC,8CAA8C;AAClF,sBAAsB,mBAAmB,CAAC,+CAA+C;AACzF,iBAAiB,mBAAmB,CAAC,+CAA+C;AACpF,gBAAgB,mBAAmB,CAAC,+CAA+C;AACnF,iBAAiB,mBAAmB,CAAC,gDAAgD;AACrF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,sBAAsB,mBAAmB,CAAC,gDAAgD;AAC1F,gBAAgB,mBAAmB,CAAC,+CAA+C;AACnF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,qBAAqB,mBAAmB,CAAC,+CAA+C;AACxF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,iBAAiB,mBAAmB,CAAC,+CAA+C;AACpF,sBAAsB,mBAAmB,CAAC,+CAA+C;AACzF,iBAAiB,mBAAmB,CAAC,gDAAgD;AACrF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,cAAc,mBAAmB,CAAC,+CAA+C;AACjF,eAAe,mBAAmB,CAAC,iDAAiD;AACpF,gBAAgB,mBAAmB,CAAC,8CAA8C;AAClF,sBAAsB,mBAAmB,CAAC,+CAA+C;AACzF,iBAAiB,mBAAmB,CAAC,+CAA+C;AACpF,gBAAgB,mBAAmB,CAAC,+CAA+C;AACnF,iBAAiB,mBAAmB,CAAC,gDAAgD;AACrF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,sBAAsB,mBAAmB,CAAC,+CAA+C;AACzF,gBAAgB,mBAAmB,CAAC,+CAA+C;AACnF,eAAe,mBAAmB,CAAC,8CAA8C;AACjF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,qBAAqB,mBAAmB,CAAC,+CAA+C;AACxF,eAAe,mBAAmB,CAAC,gDAAgD;AACnF,iBAAiB,mBAAmB,CAAC,+CAA+C;AACpF,sBAAsB,mBAAmB,CAAC,+CAA+C;AACzF,iBAAiB,mBAAmB,CAAC,gDAAgD;AACrF,eAAe,mBAAmB,CAAC,+CAA+C;AAClF,cAAc,mBAAmB,CAAC,+CAA+C;AACjF,YAAY,mBAAmB,CAAC,2CAA2C;AAC3E,iBAAiB,qBAAqB;AACtC,cAAc,oBAAoB;AAClC,aAAa,kCAAkC,CAAC,iCAAiC;AACjF,gCAAgC,0BAA0B,CAAC,wDAAwD;AACnH,qCAAqC,4BAA4B;AACjE,YAAY,WAAW;AACvB,WAAW,SAAS;AACpB,aAAa,SAAS;AACtB,YAAY,YAAY;AACxB,WAAW,YAAY;AACvB,WAAW,iFAAiF,CAAC,sGAAsG;AACnM,WAAW,mFAAmF,CAAC,sGAAsG;AACrM,WAAW,qFAAqF,CAAC,sGAAsG;AACvM,qBAAqB,uHAAuH,CAAC,sGAAsG;AACnP,gBAAgB,wHAAwH,CAAC,sGAAsG;AAC/O,iBAAiB,sHAAsH,CAAC,sGAAsG;AAC9O,uBAAuB,sHAAsH,CAAC,sGAAsG;AACpP,kBAAkB,sHAAsH,CAAC,sGAAsG;AAC/O,iBAAiB,sHAAsH,CAAC,sGAAsG;AAC9O,kBAAkB,uHAAuH,CAAC,sGAAsG;AAChP,gBAAgB,uHAAuH,CAAC,sGAAsG;AAC9O,uBAAuB,uHAAuH,CAAC,sGAAsG;AACrP,iBAAiB,sHAAsH,CAAC,sGAAsG;AAC9O,gBAAgB,sHAAsH,CAAC,sGAAsG;AAC7O,gBAAgB,sHAAsH,CAAC,sGAAsG;AAC7O,sBAAsB,sHAAsH,CAAC,sGAAsG;AACnP,gBAAgB,uHAAuH,CAAC,sGAAsG;AAC9O,kBAAkB,sHAAsH,CAAC,sGAAsG;AAC/O,uBAAuB,uHAAuH,CAAC,sGAAsG;AACrP,kBAAkB,uHAAuH,CAAC,sGAAsG;AAChP,gBAAgB,sHAAsH,CAAC,sGAAsG;AAC7O,eAAe,sHAAsH,CAAC,sGAAsG;AAC5O,aAAa,qBAAqB,CAAC,sGAAsG;AACzI,qBAAqB,gIAAgI,CAAC,sGAAsG;AAC5P,gBAAgB,+HAA+H,CAAC,sGAAsG;AACtP,iBAAiB,+HAA+H,CAAC,sGAAsG;AACvP,uBAAuB,gIAAgI,CAAC,sGAAsG;AAC9P,kBAAkB,gIAAgI,CAAC,sGAAsG;AACzP,iBAAiB,gIAAgI,CAAC,sGAAsG;AACxP,kBAAkB,iIAAiI,CAAC,sGAAsG;AAC1P,gBAAgB,iIAAiI,CAAC,sGAAsG;AACxP,uBAAuB,iIAAiI,CAAC,sGAAsG;AAC/P,iBAAiB,gIAAgI,CAAC,sGAAsG;AACxP,gBAAgB,gIAAgI,CAAC,sGAAsG;AACvP,gBAAgB,gIAAgI,CAAC,sGAAsG;AACvP,sBAAsB,gIAAgI,CAAC,sGAAsG;AAC7P,gBAAgB,iIAAiI,CAAC,sGAAsG;AACxP,kBAAkB,gIAAgI,CAAC,sGAAsG;AACzP,uBAAuB,gIAAgI,CAAC,sGAAsG;AAC9P,kBAAkB,iIAAiI,CAAC,sGAAsG;AAC1P,gBAAgB,gIAAgI,CAAC,sGAAsG;AACvP,eAAe,gIAAgI,CAAC,sGAAsG;AACtP,WAAW,2CAA2C,CAAC,sGAAsG;AAC7J,cAAc,6BAA6B,CAAC,kBAAkB;AAC9D,gBAAgB,uBAAuB,CAAC,uDAAuD,CAAC,yBAAyB;AACzH,cAAc,yBAAyB;AACvC,UAAU,yBAAyB;AACnC,cAAc,yBAAyB;AACvC,4BAA4B;AAC5B;QACQ,WAAW;QACX,mBAAmB;QACnB,iBAAiB;QACjB,YAAY;QACZ,QAAQ;QACR,WAAW;QACX,UAAU;QACV,kBAAkB;QAClB,kBAAkB;QAClB,aAAa;QACb,aAAa;QACb,aAAa;QACb,cAAc;QACd,cAAc;QACd,0MAA0M;QAC1M,cAAc;QACd,gBAAgB;QAChB,oBAAoB;QACpB,qBAAqB;QACrB,sBAAsB;QACtB,uBAAuB;QACvB,uBAAuB;QACvB,uDAAuD;QACvD,yBAAyB;QACzB,yBAAyB;IAC7B;AACJ,8BAA8B,cAAc;AAC5C;;QAEQ,SAAS,CAE4D,iBAAiB,CAAC,gBAAgB,CAAC,gBAAe;IAD3H;AAEJ;;QAEQ,qBAAqB;IACzB;AACJ,oCAAoC;AACpC;;QAEQ,kCAAkC;IACtC;AACJ;QACQ,6BAA6B;IACjC;AACJ,mFAAmF,4BAA4B,CAAC,2BAA2B,CAAC,2BAA2B;AACvK;;QAEQ,WAAW,CAAC,mBAAmB,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,gBAAgB,CAAC,oBAAoB,CAAC,uBAAuB,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,wBAAwB;IAC5P;AACJ,kHAAkH,oBAAoB,CAAC,qBAAqB,CAAC,0DAA0D;AACvN,gFAAgF,oBAAoB;AACpG,iCAAiC,oBAAoB,CAAC,6BAA6B;AACnF,gCAAgC,mBAAmB,CAAC,WAAW,CAAC,8BAA8B;AAC9F,mCAAmC;AACnC;QACQ,uCAAuC;QACvC,4BAA4B;IAChC;AACJ,0BAA0B,mBAAmB,CAAC,8CAA8C;AAC5F;QACQ,WAAW;QACX,WAAW;QACX,YAAY;QACZ,2BAA2B;QAC3B,iBAAiB;QACjB,UAAU;QACV,UAAU;QACV,aAAa;QACb,WAAW;QACX,UAAU;QACV,oBAAoB;QACpB,SAAS;IACb;AACJ;QACQ,mCAAmC;IACvC;AACJ,+BAA+B;AAC/B,kCAAkC,4BAA4B;AAC9D,6BAA6B,mBAAmB,CAAC,8CAA8C;AAC/F;QACQ,WAAW;QACX,SAAS;QACT,YAAY;QACZ,2BAA2B;QAC3B,iBAAiB;QACjB,UAAU;QACV,UAAU;QACV,aAAa;QACb,cAAc;QACd,aAAa;QACb,oBAAoB;QACpB,SAAS;IACb;AACJ;QACQ,WAAW;QACX,QAAQ;QACR,SAAS;QACT,iBAAiB;QACjB,eAAe;QACf,cAAc;QACd,kBAAkB;QAClB,kBAAkB;QAClB,aAAa;QACb,aAAa;QACb,aAAa;QACb,cAAc;QACd,cAAc;QACd,0MAA0M;QAC1M,iBAAiB;QACjB,uBAAuB;QACvB,sBAAsB;QACtB,wBAAwB;QACxB,uBAAuB;QACvB,uDAAuD;QACvD,yBAAyB;QACzB,yBAAyB;IAC7B;AACJ;QACQ,mCAAmC;IACvC;AACJ,yCAAyC,qBAAqB,CAAC,0DAA0D;AACzH,mCAAmC;AACnC,4CAA4C,qBAAqB,CAAC,yDAAyD;AAC3H,uCAAuC,qBAAqB,CAAC,0DAA0D;AACvH,yCAAyC,qBAAqB,CAAC,wDAAwD;AACvH,8CAA8C,qBAAqB,CAAC,wDAAwD;AAC5H,wCAAwC,qBAAqB,CAAC,wDAAwD;AACtH,yCAAyC,qBAAqB,CAAC,yDAAyD;AACxH,uCAAuC,qBAAqB,CAAC,yDAAyD;AACtH,8CAA8C,qBAAqB,CAAC,yDAAyD;AAC7H,wCAAwC,qBAAqB,CAAC,wDAAwD;AACtH,uCAAuC,qBAAqB,CAAC,wDAAwD;AACrH,uCAAuC,qBAAqB,CAAC,wDAAwD;AACrH,6CAA6C,qBAAqB,CAAC,wDAAwD;AAC3H,uCAAuC,qBAAqB,CAAC,yDAAyD;AACtH,yCAAyC,qBAAqB,CAAC,wDAAwD;AACvH,yCAAyC,qBAAqB,CAAC,yDAAyD;AACxH,8CAA8C,qBAAqB,CAAC,yDAAyD;AAC7H,uCAAuC,qBAAqB,CAAC,wDAAwD;AACrH,sCAAsC,qBAAqB,CAAC,wDAAwD;AACpH,2CAA2C;AAC3C,gMAAgM,qBAAqB,CAAC,yDAAyD,CAAC,mBAAmB,CAAC,gDAAgD;AACpV,4KAA4K,qBAAqB,CAAC,0DAA0D,CAAC,mBAAmB,CAAC,iDAAiD;AAClU,oLAAoL,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AACtU,wMAAwM,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAC1V,gLAAgL,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAClU,gLAAgL,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAClU,oLAAoL,qBAAqB,CAAC,yDAAyD,CAAC,mBAAmB,CAAC,gDAAgD;AACxU,4KAA4K,qBAAqB,CAAC,yDAAyD,CAAC,mBAAmB,CAAC,gDAAgD;AAChU,wMAAwM,qBAAqB,CAAC,yDAAyD,CAAC,mBAAmB,CAAC,gDAAgD;AAC5V,gLAAgL,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAClU,4KAA4K,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAC9T,4KAA4K,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAC9T,oMAAoM,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AACtV,4KAA4K,qBAAqB,CAAC,yDAAyD,CAAC,mBAAmB,CAAC,gDAAgD;AAChU,oLAAoL,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AACtU,oLAAoL,qBAAqB,CAAC,yDAAyD,CAAC,mBAAmB,CAAC,gDAAgD;AACxU,wMAAwM,qBAAqB,CAAC,yDAAyD,CAAC,mBAAmB,CAAC,gDAAgD;AAC5V,4KAA4K,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAC9T,wKAAwK,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAC1T,uLAAuL,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AACzU,6LAA6L,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C;AAC/U,uDAAuD;AACvD,6LAA6L,qBAAqB,CAAC,yDAAyD,CAAC,iBAAiB,CAAC,yDAAyD,CAAC,mBAAmB;AAC5W,yKAAyK,qBAAqB,CAAC,0DAA0D,CAAC,iBAAiB,CAAC,0DAA0D,CAAC,mBAAmB;AAC1V,iLAAiL,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAC9V,qMAAqM,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAClX,6KAA6K,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAC1V,6KAA6K,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAC1V,iLAAiL,qBAAqB,CAAC,yDAAyD,CAAC,iBAAiB,CAAC,yDAAyD,CAAC,mBAAmB;AAChW,yKAAyK,qBAAqB,CAAC,yDAAyD,CAAC,iBAAiB,CAAC,yDAAyD,CAAC,mBAAmB;AACxV,qMAAqM,qBAAqB,CAAC,yDAAyD,CAAC,iBAAiB,CAAC,yDAAyD,CAAC,mBAAmB;AACpX,6KAA6K,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAC1V,yKAAyK,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AACtV,yKAAyK,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AACtV,iMAAiM,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAC9W,yKAAyK,qBAAqB,CAAC,yDAAyD,CAAC,iBAAiB,CAAC,yDAAyD,CAAC,mBAAmB;AACxV,iLAAiL,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAC9V,iLAAiL,qBAAqB,CAAC,yDAAyD,CAAC,iBAAiB,CAAC,yDAAyD,CAAC,mBAAmB;AAChW,qMAAqM,qBAAqB,CAAC,yDAAyD,CAAC,iBAAiB,CAAC,yDAAyD,CAAC,mBAAmB;AACpX,yKAAyK,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AACtV,qKAAqK,qBAAqB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB;AAClV,eAAe;AACf;IACI,aAAa;AACjB;AACA,oBAAoB;AACpB;IACI,qCAAqC;AACzC;AACA,gBAAgB;AAChB;IACI,UAAU;AACd;AACA;IACI,wBAAwB;AAC5B;AACA,2DAA2D;AAC3D;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,2BAA2B;IAC/B;AACJ;AACA,uBAAuB,gBAAgB;AACvC,mCAAmC,qBAAqB,CAAC,wDAAwD;AACjH,8BAA8B,qBAAqB,CAAC,uDAAuD;AAC3G,+BAA+B,qBAAqB,CAAC,uDAAuD;AAC5G,qCAAqC,qBAAqB,CAAC,wDAAwD;AACnH,gCAAgC,qBAAqB,CAAC,wDAAwD;AAC9G,+BAA+B,qBAAqB,CAAC,wDAAwD;AAC7G,gCAAgC,qBAAqB,CAAC,yDAAyD;AAC/G,8BAA8B,qBAAqB,CAAC,yDAAyD;AAC7G,qCAAqC,qBAAqB,CAAC,yDAAyD;AACpH,+BAA+B,qBAAqB,CAAC,wDAAwD;AAC7G,8BAA8B,qBAAqB,CAAC,wDAAwD;AAC5G,8BAA8B,qBAAqB,CAAC,wDAAwD;AAC5G,oCAAoC,qBAAqB,CAAC,wDAAwD;AAClH,8BAA8B,qBAAqB,CAAC,yDAAyD;AAC7G,gCAAgC,qBAAqB,CAAC,wDAAwD;AAC9G,qCAAqC,qBAAqB,CAAC,wDAAwD;AACnH,gCAAgC,qBAAqB,CAAC,yDAAyD;AAC/G,8BAA8B,qBAAqB,CAAC,wDAAwD;AAC5G,6BAA6B,qBAAqB,CAAC,wDAAwD;AAC3G,+BAA+B,iBAAiB,CAAC,wDAAwD;AACzG,0BAA0B,iBAAiB,CAAC,uDAAuD;AACnG,2BAA2B,iBAAiB,CAAC,uDAAuD;AACpG,iCAAiC,iBAAiB,CAAC,wDAAwD;AAC3G,4BAA4B,iBAAiB,CAAC,wDAAwD;AACtG,2BAA2B,iBAAiB,CAAC,wDAAwD;AACrG,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,iCAAiC,iBAAiB,CAAC,yDAAyD;AAC5G,2BAA2B,iBAAiB,CAAC,wDAAwD;AACrG,0BAA0B,iBAAiB,CAAC,wDAAwD;AACpG,0BAA0B,iBAAiB,CAAC,wDAAwD;AACpG,gCAAgC,iBAAiB,CAAC,wDAAwD;AAC1G,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,4BAA4B,iBAAiB,CAAC,wDAAwD;AACtG,iCAAiC,iBAAiB,CAAC,wDAAwD;AAC3G,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,0BAA0B,iBAAiB,CAAC,wDAAwD;AACpG,yBAAyB,iBAAiB,CAAC,wDAAwD;AACnG,8BAA8B,iBAAiB,CAAC,0DAA0D;AAC1G,yBAAyB,iBAAiB,CAAC,0DAA0D;AACrG,0BAA0B,iBAAiB,CAAC,0DAA0D;AACtG,gCAAgC,iBAAiB,CAAC,0DAA0D;AAC5G,2BAA2B,iBAAiB,CAAC,0DAA0D;AACvG,0BAA0B,iBAAiB,CAAC,0DAA0D;AACtG,2BAA2B,iBAAiB,CAAC,0DAA0D;AACvG,yBAAyB,iBAAiB,CAAC,0DAA0D;AACrG,gCAAgC,iBAAiB,CAAC,0DAA0D;AAC5G,0BAA0B,iBAAiB,CAAC,0DAA0D;AACtG,yBAAyB,iBAAiB,CAAC,0DAA0D;AACrG,yBAAyB,iBAAiB,CAAC,0DAA0D;AACrG,+BAA+B,iBAAiB,CAAC,0DAA0D;AAC3G,yBAAyB,iBAAiB,CAAC,0DAA0D;AACrG,2BAA2B,iBAAiB,CAAC,0DAA0D;AACvG,gCAAgC,iBAAiB,CAAC,0DAA0D;AAC5G,2BAA2B,iBAAiB,CAAC,0DAA0D;AACvG,yBAAyB,iBAAiB,CAAC,0DAA0D;AACrG,wBAAwB,iBAAiB,CAAC,0DAA0D;AACpG,+BAA+B,iBAAiB,CAAC,yDAAyD;AAC1G,0BAA0B,iBAAiB,CAAC,0DAA0D;AACtG,2BAA2B,iBAAiB,CAAC,wDAAwD;AACrG,iCAAiC,iBAAiB,CAAC,wDAAwD;AAC3G,4BAA4B,iBAAiB,CAAC,wDAAwD;AACtG,2BAA2B,iBAAiB,CAAC,wDAAwD;AACrG,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,iCAAiC,iBAAiB,CAAC,yDAAyD;AAC5G,2BAA2B,iBAAiB,CAAC,wDAAwD;AACrG,0BAA0B,iBAAiB,CAAC,wDAAwD;AACpG,0BAA0B,iBAAiB,CAAC,wDAAwD;AACpG,gCAAgC,iBAAiB,CAAC,wDAAwD;AAC1G,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,4BAA4B,iBAAiB,CAAC,wDAAwD;AACtG,iCAAiC,iBAAiB,CAAC,yDAAyD;AAC5G,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,0BAA0B,iBAAiB,CAAC,wDAAwD;AACpG,yBAAyB,iBAAiB,CAAC,wDAAwD;AACnG,uBAAuB,iBAAiB,CAAC,0DAA0D;AACnG,4BAA4B,mBAAmB;AAC/C,4BAA4B,mBAAmB,CAAC,8CAA8C;AAC9F,iCAAiC,mBAAmB,CAAC,8CAA8C;AACnG,iCAAiC,mBAAmB,CAAC,+CAA+C;AACpG,4BAA4B,mBAAmB,CAAC,8CAA8C;AAC9F,6BAA6B,mBAAmB,CAAC,8CAA8C;AAC/F,mCAAmC,mBAAmB,CAAC,+CAA+C;AACtG,8BAA8B,mBAAmB,CAAC,+CAA+C;AACjG,6BAA6B,mBAAmB,CAAC,+CAA+C;AAChG,8BAA8B,mBAAmB,CAAC,gDAAgD;AAClG,4BAA4B,mBAAmB,CAAC,gDAAgD;AAChG,mCAAmC,mBAAmB,CAAC,gDAAgD;AACvG,6BAA6B,mBAAmB,CAAC,+CAA+C;AAChG,4BAA4B,mBAAmB,CAAC,+CAA+C;AAC/F,4BAA4B,mBAAmB,CAAC,+CAA+C;AAC/F,kCAAkC,mBAAmB,CAAC,+CAA+C;AACrG,4BAA4B,mBAAmB,CAAC,gDAAgD;AAChG,8BAA8B,mBAAmB,CAAC,+CAA+C;AACjG,mCAAmC,mBAAmB,CAAC,+CAA+C;AACtG,8BAA8B,mBAAmB,CAAC,gDAAgD;AAClG,4BAA4B,mBAAmB,CAAC,+CAA+C;AAC/F,2BAA2B,mBAAmB,CAAC,+CAA+C;AAC9F,yBAAyB,mBAAmB,CAAC,iDAAiD;AAC9F,kCAAkC,gIAAgI,CAAC,sGAAsG;AACzQ,6BAA6B,+HAA+H,CAAC,sGAAsG;AACnQ,8BAA8B,+HAA+H,CAAC,sGAAsG;AACpQ,oCAAoC,gIAAgI,CAAC,sGAAsG;AAC3Q,+BAA+B,gIAAgI,CAAC,sGAAsG;AACtQ,8BAA8B,gIAAgI,CAAC,sGAAsG;AACrQ,+BAA+B,iIAAiI,CAAC,sGAAsG;AACvQ,6BAA6B,iIAAiI,CAAC,sGAAsG;AACrQ,oCAAoC,iIAAiI,CAAC,sGAAsG;AAC5Q,8BAA8B,gIAAgI,CAAC,sGAAsG;AACrQ,6BAA6B,gIAAgI,CAAC,sGAAsG;AACpQ,6BAA6B,gIAAgI,CAAC,sGAAsG;AACpQ,mCAAmC,gIAAgI,CAAC,sGAAsG;AAC1Q,6BAA6B,iIAAiI,CAAC,sGAAsG;AACrQ,+BAA+B,gIAAgI,CAAC,sGAAsG;AACtQ,oCAAoC,gIAAgI,CAAC,sGAAsG;AAC3Q,+BAA+B,iIAAiI,CAAC,sGAAsG;AACvQ,6BAA6B,gIAAgI,CAAC,sGAAsG;AACpQ,4BAA4B,gIAAgI,CAAC,sGAAsG;AACnQ,kCAAkC,uHAAuH,CAAC,sGAAsG;AAChQ,6BAA6B,wHAAwH,CAAC,sGAAsG;AAC5P,8BAA8B,sHAAsH,CAAC,sGAAsG;AAC3P,oCAAoC,sHAAsH,CAAC,sGAAsG;AACjQ,+BAA+B,sHAAsH,CAAC,sGAAsG;AAC5P,8BAA8B,sHAAsH,CAAC,sGAAsG;AAC3P,+BAA+B,uHAAuH,CAAC,sGAAsG;AAC7P,6BAA6B,uHAAuH,CAAC,sGAAsG;AAC3P,oCAAoC,uHAAuH,CAAC,sGAAsG;AAClQ,8BAA8B,sHAAsH,CAAC,sGAAsG;AAC3P,6BAA6B,sHAAsH,CAAC,sGAAsG;AAC1P,6BAA6B,sHAAsH,CAAC,sGAAsG;AAC1P,mCAAmC,sHAAsH,CAAC,sGAAsG;AAChQ,6BAA6B,uHAAuH,CAAC,sGAAsG;AAC3P,+BAA+B,sHAAsH,CAAC,sGAAsG;AAC5P,oCAAoC,uHAAuH,CAAC,sGAAsG;AAClQ,+BAA+B,uHAAuH,CAAC,sGAAsG;AAC7P,6BAA6B,sHAAsH,CAAC,sGAAsG;AAC1P,4BAA4B,sHAAsH,CAAC,sGAAsG;AACzP,uBAAuB,gBAAgB;AACvC,mCAAmC,qBAAqB,CAAC,yDAAyD;AAClH,8BAA8B,qBAAqB,CAAC,0DAA0D;AAC9G,+BAA+B,qBAAqB,CAAC,wDAAwD;AAC7G,qCAAqC,qBAAqB,CAAC,wDAAwD;AACnH,gCAAgC,qBAAqB,CAAC,wDAAwD;AAC9G,+BAA+B,qBAAqB,CAAC,wDAAwD;AAC7G,gCAAgC,qBAAqB,CAAC,yDAAyD;AAC/G,8BAA8B,qBAAqB,CAAC,yDAAyD;AAC7G,qCAAqC,qBAAqB,CAAC,yDAAyD;AACpH,+BAA+B,qBAAqB,CAAC,wDAAwD;AAC7G,8BAA8B,qBAAqB,CAAC,wDAAwD;AAC5G,8BAA8B,qBAAqB,CAAC,wDAAwD;AAC5G,oCAAoC,qBAAqB,CAAC,wDAAwD;AAClH,8BAA8B,qBAAqB,CAAC,yDAAyD;AAC7G,gCAAgC,qBAAqB,CAAC,wDAAwD;AAC9G,qCAAqC,qBAAqB,CAAC,yDAAyD;AACpH,gCAAgC,qBAAqB,CAAC,yDAAyD;AAC/G,8BAA8B,qBAAqB,CAAC,wDAAwD;AAC5G,6BAA6B,qBAAqB,CAAC,wDAAwD;AAC3G,+BAA+B,iBAAiB,CAAC,0DAA0D;AAC3G,0BAA0B,iBAAiB,CAAC,0DAA0D;AACtG,2BAA2B,iBAAiB,CAAC,yDAAyD;AACtG,iCAAiC,iBAAiB,CAAC,yDAAyD;AAC5G,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,2BAA2B,iBAAiB,CAAC,yDAAyD;AACtG,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,iCAAiC,iBAAiB,CAAC,0DAA0D;AAC7G,2BAA2B,iBAAiB,CAAC,0DAA0D;AACvG,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,gCAAgC,iBAAiB,CAAC,yDAAyD;AAC3G,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,iCAAiC,iBAAiB,CAAC,yDAAyD;AAC5G,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,0BAA0B,iBAAiB,CAAC,yDAAyD;AACrG,yBAAyB,iBAAiB,CAAC,wDAAwD;AACnG,0BAA0B,iBAAiB,CAAC,0DAA0D;AACtG,4BAA4B,mBAAmB;AAC/C,4BAA4B,mBAAmB,CAAC,8CAA8C;AAC9F,0BAA0B,qBAAqB,CAAC,sGAAsG;AACtJ,2BAA2B,6BAA6B,CAAC,kBAAkB;AAC3E,qBAAqB,0GAA0G,CAAC,wGAAwG,CAAC,2FAA2F;AACpU,iCAAiC,iBAAiB,CAAC,uDAAuD;AAC1G,4BAA4B,iBAAiB,CAAC,uDAAuD;AACrG,6BAA6B,iBAAiB,CAAC,uDAAuD;AACtG,mCAAmC,iBAAiB,CAAC,wDAAwD;AAC7G,8BAA8B,iBAAiB,CAAC,wDAAwD;AACxG,6BAA6B,iBAAiB,CAAC,wDAAwD;AACvG,8BAA8B,iBAAiB,CAAC,yDAAyD;AACzG,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,mCAAmC,iBAAiB,CAAC,wDAAwD;AAC7G,6BAA6B,iBAAiB,CAAC,wDAAwD;AACvG,4BAA4B,iBAAiB,CAAC,uDAAuD;AACrG,4BAA4B,iBAAiB,CAAC,wDAAwD;AACtG,kCAAkC,iBAAiB,CAAC,wDAAwD;AAC5G,4BAA4B,iBAAiB,CAAC,yDAAyD;AACvG,8BAA8B,iBAAiB,CAAC,wDAAwD;AACxG,mCAAmC,iBAAiB,CAAC,wDAAwD;AAC7G,8BAA8B,iBAAiB,CAAC,yDAAyD;AACzG,4BAA4B,iBAAiB,CAAC,wDAAwD;AACtG,2BAA2B,iBAAiB,CAAC,wDAAwD;AACrG,iCAAiC,iBAAiB,CAAC,0DAA0D;AAC7G,4BAA4B,iBAAiB,CAAC,0DAA0D;AACxG,6BAA6B,iBAAiB,CAAC,0DAA0D;AACzG,mCAAmC,iBAAiB,CAAC,0DAA0D;AAC/G,8BAA8B,iBAAiB,CAAC,0DAA0D;AAC1G,6BAA6B,iBAAiB,CAAC,0DAA0D;AACzG,8BAA8B,iBAAiB,CAAC,0DAA0D;AAC1G,4BAA4B,iBAAiB,CAAC,0DAA0D;AACxG,mCAAmC,iBAAiB,CAAC,0DAA0D;AAC/G,6BAA6B,iBAAiB,CAAC,0DAA0D;AACzG,4BAA4B,iBAAiB,CAAC,0DAA0D;AACxG,4BAA4B,iBAAiB,CAAC,0DAA0D;AACxG,kCAAkC,iBAAiB,CAAC,0DAA0D;AAC9G,4BAA4B,iBAAiB,CAAC,0DAA0D;AACxG,8BAA8B,iBAAiB,CAAC,0DAA0D;AAC1G,mCAAmC,iBAAiB,CAAC,0DAA0D;AAC/G,8BAA8B,iBAAiB,CAAC,0DAA0D;AAC1G,4BAA4B,iBAAiB,CAAC,0DAA0D;AACxG,2BAA2B,iBAAiB,CAAC,0DAA0D;AACvG,4BAA4B,iBAAiB,CAAC,0DAA0D;AACxG,8BAA8B,mBAAmB;AACjD;AACA,eAAe,SAAS;AACxB,YAAY,UAAU,CAAC;AACvB;AACA,WAAW,gBAAgB;AAC3B,UAAU,cAAc;AACxB,WAAW,gBAAgB;AAC3B,UAAU,iBAAiB;AAC3B,aAAa,SAAS;AACtB,UAAU,WAAW;AACrB,aAAa,SAAS;AACtB,aAAa,gBAAgB;AAC7B,aAAa,gBAAgB;AAC7B,aAAa,gBAAgB;AAC7B,cAAc,kBAAkB;AAChC,mBAAmB,0BAA0B;AAC7C,qBAAqB,6BAA6B;AAClD,WAAW,eAAS,CAAT,UAAU;AACrB,UAAU,iBAAiB,CAAC,kBAAkB;AAC9C,UAAU,iBAAiB,CAAC,kBAAkB;AAC9C,WAAW,kBAAkB;AAC7B,UAAU,eAAe,CAAC;AAC1B;AACA,YAAY,eAAe;AAC3B,UAAU,oBAAoB;AAC9B,UAAU,mBAAmB;AAC7B,WAAW,eAAe;AAC1B,WAAW,aAAa;AACxB,UAAU,YAAY;AACtB,YAAY,YAAY;AACxB,aAAa,gBAAgB;AAC7B,aAAa,SAAS;AACtB,aAAa,gBAAgB;AAC7B,UAAU,WAAW;AACrB,YAAY,UAAU;AACtB,cAAc,kBAAkB;AAChC,kBAAkB,kBAAkB;AACpC,qBAAqB,6BAA6B;AAClD,mBAAmB,0BAA0B;AAC7C,WAAW,iBAAiB,CAAC,kBAAkB;AAC/C,eAAe,eAAe,CAAC;AAC/B;CACC,oBAAoB;CACpB,+CAA+C;AAChD;AACA;CACC;EACC,SAAS;CACV;CACA;EACC,kBAAkB;CACnB;CACA;EACC,aAAa;CACd;CACA;EACC,kBAAkB;EAClB,mBAAmB;CACpB;CACA;EACC,oBAAoB;EACpB,qBAAqB;CACtB;CACA;EACC,mBAAmB;CACpB;CACA;EACC,oBAAoB;CACrB;AACD;AACA;CACC;EACC,kBAAkB;CACnB;CACA;EACC,UAAU;CACX;CACA;EACC,iBAAiB;CAClB;CACA;EACC,gDAAgD;CACjD;CACA;EACC,mBAAmB;CACpB;CACA;EACC,iBAAiB;CAClB;AACD;AACA;CACC;EACC,oBAAoB;CACrB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,gDAAgD;CACjD;AACD","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n/*!\n=========================================================\n* Material Tailwind Dashboard React - v1.1.0\n=========================================================\n* Product Page: https://www.creative-tim.com/product/material-tailwind-dashboard-react\n* Copyright 2019 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/material-tailwind-dashboard-react/blob/main/LICENSE.md)\n* Coded by Creative Tim\n=========================================================\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n*/\n/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com\n*/\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\ttab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Roboto, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n:-moz-focusring {\n\toutline: auto;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.container{\n\twidth: 100%;\n}\n@media (min-width: 640px){\n\t.container{\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px){\n\t.container{\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px){\n\t.container{\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px){\n\t.container{\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px){\n\t.container{\n\t\tmax-width: 1536px;\n\t}\n}\n.visible{\n\tvisibility: visible;\n}\n.fixed{\n\tposition: fixed;\n}\n.absolute{\n\tposition: absolute;\n}\n.relative{\n\tposition: relative;\n}\n.left-0{\n\tleft: 0px;\n}\n.top-2{\n\ttop: 0.5rem;\n}\n.left-64{\n\tleft: 16rem;\n}\n.-left-64{\n\tleft: -16rem;\n}\n.top-0{\n\ttop: 0px;\n}\n.z-50{\n\tz-index: 50;\n}\n.z-10{\n\tz-index: 10;\n}\n.col-span-full{\n\tgrid-column: 1 / -1;\n}\n.my-6{\n\tmargin-top: 1.5rem;\n\tmargin-bottom: 1.5rem;\n}\n.mx-auto{\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.my-4{\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n.mx-2{\n\tmargin-left: 0.5rem;\n\tmargin-right: 0.5rem;\n}\n.mb-6{\n\tmargin-bottom: 1.5rem;\n}\n.mr-6{\n\tmargin-right: 1.5rem;\n}\n.mt-3{\n\tmargin-top: 0.75rem;\n}\n.mt-10{\n\tmargin-top: 2.5rem;\n}\n.mb-10{\n\tmargin-bottom: 2.5rem;\n}\n.mb-0{\n\tmargin-bottom: 0px;\n}\n.mr-10{\n\tmargin-right: 2.5rem;\n}\n.-mr-4{\n\tmargin-right: -1rem;\n}\n.ml-6{\n\tmargin-left: 1.5rem;\n}\n.-mt-24{\n\tmargin-top: -6rem;\n}\n.mb-14{\n\tmargin-bottom: 3.5rem;\n}\n.mb-4{\n\tmargin-bottom: 1rem;\n}\n.mb-16{\n\tmargin-bottom: 4rem;\n}\n.mt-20{\n\tmargin-top: 5rem;\n}\n.mt-1{\n\tmargin-top: 0.25rem;\n}\n.mt-0{\n\tmargin-top: 0px;\n}\n.mb-2{\n\tmargin-bottom: 0.5rem;\n}\n.-mt-8{\n\tmargin-top: -2rem;\n}\n.mt-5{\n\tmargin-top: 1.25rem;\n}\n.mt-2{\n\tmargin-top: 0.5rem;\n}\n.mt-4{\n\tmargin-top: 1rem;\n}\n.mb-8{\n\tmargin-bottom: 2rem;\n}\n.block{\n\tdisplay: block;\n}\n.inline-block{\n\tdisplay: inline-block;\n}\n.flex{\n\tdisplay: flex;\n}\n.table{\n\tdisplay: table;\n}\n.grid{\n\tdisplay: grid;\n}\n.h-full{\n\theight: 100%;\n}\n.h-20{\n\theight: 5rem;\n}\n.h-10{\n\theight: 2.5rem;\n}\n.h-40{\n\theight: 10rem;\n}\n.h-auto{\n\theight: auto;\n}\n.h-96{\n\theight: 24rem;\n}\n.h-screen{\n\theight: 100vh;\n}\n.min-h-full{\n\tmin-height: 100%;\n}\n.w-full{\n\twidth: 100%;\n}\n.w-min{\n\twidth: min-content;\n}\n.w-10{\n\twidth: 2.5rem;\n}\n.w-6{\n\twidth: 1.5rem;\n}\n.w-56{\n\twidth: 14rem;\n}\n.w-12{\n\twidth: 3rem;\n}\n.w-max{\n\twidth: max-content;\n}\n.w-48{\n\twidth: 12rem;\n}\n.w-64{\n\twidth: 16rem;\n}\n.min-w-full{\n\tmin-width: 100%;\n}\n.max-w-full{\n\tmax-width: 100%;\n}\n.border-collapse{\n\tborder-collapse: collapse;\n}\n.list-none{\n\tlist-style-type: none;\n}\n.grid-cols-1{\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-row{\n\tflex-direction: row;\n}\n.flex-col{\n\tflex-direction: column;\n}\n.flex-wrap{\n\tflex-wrap: wrap;\n}\n.flex-nowrap{\n\tflex-wrap: nowrap;\n}\n.content-evenly{\n\talign-content: space-evenly;\n}\n.items-center{\n\talign-items: center;\n}\n.items-stretch{\n\talign-items: stretch;\n}\n.justify-center{\n\tjustify-content: center;\n}\n.justify-between{\n\tjustify-content: space-between;\n}\n.justify-evenly{\n\tjustify-content: space-evenly;\n}\n.gap-2{\n\tgap: 0.5rem;\n}\n.gap-4{\n\tgap: 1rem;\n}\n.overflow-hidden{\n\toverflow: hidden;\n}\n.overflow-x-auto{\n\toverflow-x: auto;\n}\n.overflow-y-auto{\n\toverflow-y: auto;\n}\n.whitespace-nowrap{\n\twhite-space: nowrap;\n}\n.rounded-xl{\n\tborder-radius: 0.75rem;\n}\n.rounded-full{\n\tborder-radius: 9999px;\n}\n.rounded{\n\tborder-radius: 0.25rem;\n}\n.rounded-lg{\n\tborder-radius: 0.5rem;\n}\n.border-2{\n\tborder-width: 2px;\n}\n.border{\n\tborder-width: 1px;\n}\n.border-t{\n\tborder-top-width: 1px;\n}\n.border-b{\n\tborder-bottom-width: 1px;\n}\n.border-solid{\n\tborder-style: solid;\n}\n.border-gray-200{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n.border-white{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(255, 255, 255, var(--tw-border-opacity));\n}\n.bg-gray-100{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-transparent{\n\tbackground-color: transparent;\n}\n.bg-green-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(16, 185, 129, var(--tw-bg-opacity));\n}\n.bg-red-500{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.bg-white{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gradient-to-tr{\n\tbackground-image: linear-gradient(to top right, var(--tw-gradient-stops));\n}\n.p-4{\n\tpadding: 1rem;\n}\n.py-6{\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\n.px-16{\n\tpadding-left: 4rem;\n\tpadding-right: 4rem;\n}\n.px-2{\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-3{\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\n.py-4{\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.px-4{\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n.px-1{\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\n.px-3{\n\tpadding-left: 0.75rem;\n\tpadding-right: 0.75rem;\n}\n.px-6{\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\n.px-0{\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.pr-4{\n\tpadding-right: 1rem;\n}\n.pl-4{\n\tpadding-left: 1rem;\n}\n.pl-3{\n\tpadding-left: 0.75rem;\n}\n.pt-14{\n\tpadding-top: 3.5rem;\n}\n.pb-28{\n\tpadding-bottom: 7rem;\n}\n.pl-5{\n\tpadding-left: 1.25rem;\n}\n.pt-8{\n\tpadding-top: 2rem;\n}\n.text-left{\n\ttext-align: left;\n}\n.text-center{\n\ttext-align: center;\n}\n.align-middle{\n\tvertical-align: middle;\n}\n.text-sm{\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-2xl{\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.text-xs{\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.text-xl{\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.font-light{\n\tfont-weight: 300;\n}\n.font-medium{\n\tfont-weight: 500;\n}\n.uppercase{\n\ttext-transform: uppercase;\n}\n.lowercase{\n\ttext-transform: lowercase;\n}\n.tracking-wider{\n\tletter-spacing: 0.05em;\n}\n.tracking-wide{\n\tletter-spacing: 0.025em;\n}\n.text-gray-700{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-white{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-purple-500{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(139, 92, 246, var(--tw-text-opacity));\n}\n.text-gray-200{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(229, 231, 235, var(--tw-text-opacity));\n}\n.text-gray-900{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.shadow-lg{\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl{\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md{\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter{\n\tfilter: var(--tw-filter);\n}\n.transition-all{\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.duration-300{\n\ttransition-duration: 300ms;\n}\n.tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}\n.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}\n.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}\n.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}\n.tippy-box[data-animation=scale][data-placement^=top]{transform-origin:bottom}\n.tippy-box[data-animation=scale][data-placement^=bottom]{transform-origin:top}\n.tippy-box[data-animation=scale][data-placement^=left]{transform-origin:right}\n.tippy-box[data-animation=scale][data-placement^=right]{transform-origin:left}\n.tippy-box[data-animation=scale][data-state=hidden]{transform:scale(.5);opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}\n/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\ttab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Roboto, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #eeeeee; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n*{--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(33, 150, 243, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}\n.container{width:100%}\n@media (min-width: 640px){\n.container{max-width:640px}}\n@media (min-width: 768px){\n.container{max-width:768px}}\n@media (min-width: 1024px){\n.container{max-width:1024px}}\n@media (min-width: 1280px){\n.container{max-width:1280px}}\n@media (min-width: 1536px){\n.container{max-width:1536px}}\n.pointer-events-none{pointer-events:none}\n.pointer-events-auto{pointer-events:auto}\n.relative{position:relative}\n.absolute{position:absolute}\n.sticky{position:sticky}\n.fixed{position:fixed}\n.inset-0{top:0px;right:0px;bottom:0px;left:0px}\n.right-4{right:1rem}\n.top-1\\/3{top:33.333333%}\n.left-0{left:0px}\n.right-0{right:0px}\n.top-16{top:4rem}\n.-top-1\\.5{top:-0.375rem}\n.-top-0\\.5{top:-0.125rem}\n.-top-1{top:-0.25rem}\n.-top-0{top:0px}\n.top-1\\/4{top:25%}\n.top-1\\/2{top:50%}\n.right-2{right:0.5rem}\n.right-3{right:0.75rem}\n.top-2{top:0.5rem}\n.top-0{top:0px}\n.-bottom-4{bottom:-1rem}\n.-bottom-5{bottom:-1.25rem}\n.z-30{z-index:30}\n.z-20{z-index:20}\n.z-10{z-index:10}\n.z-50{z-index:50}\n.z-40{z-index:40}\n.float-left{float:left}\n.float-right{float:right}\n.mx-auto{margin-left:auto;margin-right:auto}\n.my-16{margin-top:4rem;margin-bottom:4rem}\n.my-4{margin-top:1rem;margin-bottom:1rem}\n.my-6{margin-top:1.5rem;margin-bottom:1.5rem}\n.mx-4{margin-left:1rem;margin-right:1rem}\n.mx-1{margin-left:0.25rem;margin-right:0.25rem}\n.my-8{margin-top:2rem;margin-bottom:2rem}\n.mx-5{margin-left:1.25rem;margin-right:1.25rem}\n.mb-16{margin-bottom:4rem}\n.mt-36{margin-top:9rem}\n.mt-10{margin-top:2.5rem}\n.mt-5{margin-top:1.25rem}\n.mt-16{margin-top:4rem}\n.mt-4{margin-top:1rem}\n.mt-20{margin-top:5rem}\n.mb-10{margin-bottom:2.5rem}\n.mt-8{margin-top:2rem}\n.mt-12{margin-top:3rem}\n.mb-24{margin-bottom:6rem}\n.mt-48{margin-top:12rem}\n.mr-auto{margin-right:auto}\n.ml-auto{margin-left:auto}\n.mb-6{margin-bottom:1.5rem}\n.mr-2{margin-right:0.5rem}\n.mt-2{margin-top:0.5rem}\n.mt-32{margin-top:8rem}\n.mt-6{margin-top:1.5rem}\n.mr-3{margin-right:0.75rem}\n.-mt-64{margin-top:-16rem}\n.mb-5{margin-bottom:1.25rem}\n.mb-12{margin-bottom:3rem}\n.mb-8{margin-bottom:2rem}\n.mb-4{margin-bottom:1rem}\n.mb-2{margin-bottom:0.5rem}\n.-mt-10{margin-top:-2.5rem}\n.-mt-9{margin-top:-2.25rem}\n.mb-1{margin-bottom:0.25rem}\n.ml-1{margin-left:0.25rem}\n.mr-1{margin-right:0.25rem}\n.mt-1{margin-top:0.25rem}\n.mb-0{margin-bottom:0px}\n.mt-3{margin-top:0.75rem}\n.ml-7{margin-left:1.75rem}\n.ml-2{margin-left:0.5rem}\n.mt-0{margin-top:0px}\n.mb-3{margin-bottom:0.75rem}\n.mr-4{margin-right:1rem}\n.-mt-12{margin-top:-3rem}\n.mr-10{margin-right:2.5rem}\n.block{display:block}\n.inline-block{display:inline-block}\n.flex{display:flex}\n.inline-flex{display:inline-flex}\n.grid{display:grid}\n.hidden{display:none}\n.h-16{height:4rem}\n.h-7{height:1.75rem}\n.h-10{height:2.5rem}\n.h-32{height:8rem}\n.h-20{height:5rem}\n.h-12{height:3rem}\n.h-6{height:1.5rem}\n.h-8{height:2rem}\n.h-24{height:6rem}\n.h-28{height:7rem}\n.h-5{height:1.25rem}\n.h-screen{height:100vh}\n.h-auto{height:auto}\n.h-full{height:100%}\n.h-9{height:2.25rem}\n.h-11{height:2.75rem}\n.h-4{height:1rem}\n.h-px{height:1px}\n.h-2{height:0.5rem}\n.w-full{width:100%}\n.w-40{width:10rem}\n.w-72{width:18rem}\n.w-\\[28rem\\]{width:28rem}\n.w-64{width:16rem}\n.w-96{width:24rem}\n.w-48{width:12rem}\n.w-16{width:4rem}\n.w-7{width:1.75rem}\n.w-32{width:8rem}\n.w-12{width:3rem}\n.w-10{width:2.5rem}\n.w-6{width:1.5rem}\n.w-8{width:2rem}\n.w-20{width:5rem}\n.w-24{width:6rem}\n.w-28{width:7rem}\n.w-5{width:1.25rem}\n.w-10\\/12{width:83.333333%}\n.w-4{width:1rem}\n.w-auto{width:auto}\n.w-14{width:3.5rem}\n.min-w-0{min-width:0px}\n.max-w-7xl{max-width:80rem}\n.max-w-full{max-width:100%}\n.max-w-max{max-width:max-content}\n.max-w-sm{max-width:24rem}\n.max-w-6xl{max-width:72rem}\n.max-w-3xl{max-width:48rem}\n.max-w-xs{max-width:20rem}\n.flex-auto{flex:1 1 auto}\n.flex-1{flex:1 1 0%}\n.flex-none{flex:none}\n.flex-grow{flex-grow:1}\n.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}\n.-translate-y-1\\/3{--tw-translate-y:-33.333333%}\n.-translate-y-1\\/2{--tw-translate-y:-50%}\n.translate-y-0{--tw-translate-y:0px}\n.-translate-y-10{--tw-translate-y:-2.5rem}\n.cursor-pointer{cursor:pointer}\n.cursor-not-allowed{cursor:not-allowed}\n.select-none{-webkit-user-select:none;user-select:none}\n.resize-none{resize:none}\n.list-none{list-style-type:none}\n.flex-col{flex-direction:column}\n.flex-wrap{flex-wrap:wrap}\n.place-items-center{place-items:center}\n.items-center{align-items:center}\n.items-end{align-items:flex-end}\n.items-start{align-items:flex-start}\n.justify-between{justify-content:space-between}\n.justify-center{justify-content:center}\n.justify-start{justify-content:flex-start}\n.justify-end{justify-content:flex-end}\n.gap-8{gap:2rem}\n.gap-10{gap:2.5rem}\n.gap-4{gap:1rem}\n.gap-2{gap:0.5rem}\n.gap-3{gap:0.75rem}\n.gap-1{gap:0.25rem}\n.gap-x-2{column-gap:0.5rem}\n.gap-y-8{row-gap:2rem}\n.gap-x-24{column-gap:6rem}\n.gap-y-4{row-gap:1rem}\n.gap-x-8{column-gap:2rem}\n.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}\n.overflow-hidden{overflow:hidden}\n.overflow-y-scroll{overflow-y:scroll}\n.overflow-x-hidden{overflow-x:hidden}\n.overflow-y-auto{overflow-y:auto}\n.whitespace-nowrap{white-space:nowrap}\n.break-words{overflow-wrap:break-word}\n.rounded{border-radius:0.25rem}\n.rounded-lg{border-radius:0.5rem}\n.rounded-full{border-radius:9999px}\n.rounded-xl{border-radius:0.75rem}\n.rounded-md{border-radius:0.375rem}\n.rounded-sm{border-radius:0.125rem}\n.rounded-t{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}\n.border{border-width:1px}\n.border-0{border-width:0px}\n.border-t-0{border-top-width:0px}\n.border-r-0{border-right-width:0px}\n.border-l-0{border-left-width:0px}\n.border-t{border-top-width:1px}\n.border-b{border-bottom-width:1px}\n.border-b-0{border-bottom-width:0px}\n.border-r{border-right-width:1px}\n.border-solid{border-style:solid}\n.border-none{border-style:none}\n.border-blue-gray-50{--tw-border-opacity:1;border-color:rgba(236, 239, 241, var(--tw-border-opacity))}\n.border-gray-200{--tw-border-opacity:1;border-color:rgba(238, 238, 238, var(--tw-border-opacity))}\n.border-gray-300{--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.border-blue-gray-500{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.border-gray-500{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.border-brown-500{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.border-deep-orange-500{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.border-orange-500{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.border-amber-500{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.border-yellow-600{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.border-lime-500{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.border-light-green-500{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.border-green-500{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.border-teal-500{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.border-cyan-500{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.border-light-blue-500{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.border-blue-500{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.border-indigo-500{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.border-deep-purple-500{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.border-purple-500{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.border-pink-500{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.border-red-500{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.border-transparent{border-color:transparent}\n.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.bg-orange-900{--tw-bg-opacity:1;background-color:rgba(230, 81, 0, var(--tw-bg-opacity))}\n.bg-light-blue-500{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(33, 33, 33, var(--tw-bg-opacity))}\n.bg-yellow-600{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.bg-red-700{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.bg-green-500{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.bg-blue-gray-800{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.bg-blue-gray-500{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.bg-brown-500{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.bg-deep-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.bg-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.bg-amber-500{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.bg-lime-500{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.bg-light-green-500{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.bg-teal-500{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.bg-cyan-500{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.bg-indigo-500{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.bg-deep-purple-500{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.bg-purple-500{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.bg-pink-500{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.bg-red-500{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.bg-transparent{background-color:transparent}\n.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity))}\n.bg-blue-gray-100{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.bg-brown-100{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.bg-deep-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.bg-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.bg-amber-100{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.bg-yellow-100{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.bg-lime-100{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.bg-light-green-100{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.bg-green-100{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.bg-teal-100{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.bg-cyan-100{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.bg-light-blue-100{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.bg-indigo-100{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.bg-deep-purple-100{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.bg-purple-100{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.bg-pink-100{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.bg-red-100{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.bg-blue-gray-900{--tw-bg-opacity:1;background-color:rgba(38, 50, 56, var(--tw-bg-opacity))}\n.bg-brown-900{--tw-bg-opacity:1;background-color:rgba(62, 39, 35, var(--tw-bg-opacity))}\n.bg-deep-orange-900{--tw-bg-opacity:1;background-color:rgba(191, 54, 12, var(--tw-bg-opacity))}\n.bg-amber-900{--tw-bg-opacity:1;background-color:rgba(255, 111, 0, var(--tw-bg-opacity))}\n.bg-yellow-900{--tw-bg-opacity:1;background-color:rgba(245, 127, 23, var(--tw-bg-opacity))}\n.bg-lime-900{--tw-bg-opacity:1;background-color:rgba(130, 119, 23, var(--tw-bg-opacity))}\n.bg-light-green-900{--tw-bg-opacity:1;background-color:rgba(51, 105, 30, var(--tw-bg-opacity))}\n.bg-green-900{--tw-bg-opacity:1;background-color:rgba(27, 94, 32, var(--tw-bg-opacity))}\n.bg-teal-900{--tw-bg-opacity:1;background-color:rgba(0, 77, 64, var(--tw-bg-opacity))}\n.bg-cyan-900{--tw-bg-opacity:1;background-color:rgba(0, 96, 100, var(--tw-bg-opacity))}\n.bg-light-blue-900{--tw-bg-opacity:1;background-color:rgba(1, 87, 155, var(--tw-bg-opacity))}\n.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(13, 71, 161, var(--tw-bg-opacity))}\n.bg-indigo-900{--tw-bg-opacity:1;background-color:rgba(26, 35, 126, var(--tw-bg-opacity))}\n.bg-deep-purple-900{--tw-bg-opacity:1;background-color:rgba(49, 27, 146, var(--tw-bg-opacity))}\n.bg-purple-900{--tw-bg-opacity:1;background-color:rgba(74, 20, 140, var(--tw-bg-opacity))}\n.bg-pink-900{--tw-bg-opacity:1;background-color:rgba(136, 14, 79, var(--tw-bg-opacity))}\n.bg-red-900{--tw-bg-opacity:1;background-color:rgba(183, 28, 28, var(--tw-bg-opacity))}\n.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}\n.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.bg-blue-gray-200{--tw-bg-opacity:1;background-color:rgba(176, 190, 197, var(--tw-bg-opacity))}\n.bg-brown-200{--tw-bg-opacity:1;background-color:rgba(188, 170, 164, var(--tw-bg-opacity))}\n.bg-deep-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 171, 145, var(--tw-bg-opacity))}\n.bg-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 204, 128, var(--tw-bg-opacity))}\n.bg-amber-200{--tw-bg-opacity:1;background-color:rgba(255, 224, 130, var(--tw-bg-opacity))}\n.bg-yellow-200{--tw-bg-opacity:1;background-color:rgba(255, 245, 157, var(--tw-bg-opacity))}\n.bg-lime-200{--tw-bg-opacity:1;background-color:rgba(230, 238, 156, var(--tw-bg-opacity))}\n.bg-light-green-200{--tw-bg-opacity:1;background-color:rgba(197, 225, 165, var(--tw-bg-opacity))}\n.bg-green-200{--tw-bg-opacity:1;background-color:rgba(165, 214, 167, var(--tw-bg-opacity))}\n.bg-teal-200{--tw-bg-opacity:1;background-color:rgba(128, 203, 196, var(--tw-bg-opacity))}\n.bg-cyan-200{--tw-bg-opacity:1;background-color:rgba(128, 222, 234, var(--tw-bg-opacity))}\n.bg-light-blue-200{--tw-bg-opacity:1;background-color:rgba(129, 212, 250, var(--tw-bg-opacity))}\n.bg-blue-200{--tw-bg-opacity:1;background-color:rgba(144, 202, 249, var(--tw-bg-opacity))}\n.bg-indigo-200{--tw-bg-opacity:1;background-color:rgba(159, 168, 218, var(--tw-bg-opacity))}\n.bg-deep-purple-200{--tw-bg-opacity:1;background-color:rgba(179, 157, 219, var(--tw-bg-opacity))}\n.bg-purple-200{--tw-bg-opacity:1;background-color:rgba(206, 147, 216, var(--tw-bg-opacity))}\n.bg-pink-200{--tw-bg-opacity:1;background-color:rgba(244, 143, 177, var(--tw-bg-opacity))}\n.bg-red-200{--tw-bg-opacity:1;background-color:rgba(239, 154, 154, var(--tw-bg-opacity))}\n.bg-opacity-20{--tw-bg-opacity:0.2}\n.bg-opacity-80{--tw-bg-opacity:0.8}\n.bg-gradient-to-tr{background-image:linear-gradient(to top right, var(--tw-gradient-stops))}\n.from-blue-gray-500{--tw-gradient-from:#607d8b;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 125, 139, 0))}\n.from-gray-500{--tw-gradient-from:#9e9e9e;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(158, 158, 158, 0))}\n.from-brown-500{--tw-gradient-from:#795548;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(121, 85, 72, 0))}\n.from-deep-orange-500{--tw-gradient-from:#ff5722;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 87, 34, 0))}\n.from-orange-500{--tw-gradient-from:#ff9800;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 152, 0, 0))}\n.from-amber-500{--tw-gradient-from:#ffc107;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 193, 7, 0))}\n.from-yellow-600{--tw-gradient-from:#fdd835;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 216, 53, 0))}\n.from-lime-500{--tw-gradient-from:#cddc39;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(205, 220, 57, 0))}\n.from-light-green-500{--tw-gradient-from:#8bc34a;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 195, 74, 0))}\n.from-green-500{--tw-gradient-from:#4caf50;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 175, 80, 0))}\n.from-teal-500{--tw-gradient-from:#009688;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 150, 136, 0))}\n.from-cyan-500{--tw-gradient-from:#00bcd4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 188, 212, 0))}\n.from-light-blue-500{--tw-gradient-from:#03a9f4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(3, 169, 244, 0))}\n.from-blue-500{--tw-gradient-from:#2196f3;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(33, 150, 243, 0))}\n.from-indigo-500{--tw-gradient-from:#3f51b5;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(63, 81, 181, 0))}\n.from-deep-purple-500{--tw-gradient-from:#673ab7;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(103, 58, 183, 0))}\n.from-purple-500{--tw-gradient-from:#9c27b0;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(156, 39, 176, 0))}\n.from-pink-500{--tw-gradient-from:#e91e63;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(233, 30, 99, 0))}\n.from-red-500{--tw-gradient-from:#f44336;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(244, 67, 54, 0))}\n.from-light-blue-700{--tw-gradient-from:#0288d1;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 136, 209, 0))}\n.to-blue-gray-700{--tw-gradient-to:#455a64}\n.to-gray-700{--tw-gradient-to:#616161}\n.to-brown-700{--tw-gradient-to:#5d4037}\n.to-deep-orange-700{--tw-gradient-to:#e64a19}\n.to-orange-700{--tw-gradient-to:#f57c00}\n.to-amber-700{--tw-gradient-to:#ffa000}\n.to-yellow-800{--tw-gradient-to:#f9a825}\n.to-lime-700{--tw-gradient-to:#afb42b}\n.to-light-green-700{--tw-gradient-to:#689f38}\n.to-green-700{--tw-gradient-to:#388e3c}\n.to-teal-700{--tw-gradient-to:#00796b}\n.to-cyan-700{--tw-gradient-to:#0097a7}\n.to-light-blue-700{--tw-gradient-to:#0288d1}\n.to-blue-700{--tw-gradient-to:#1976d2}\n.to-indigo-700{--tw-gradient-to:#303f9f}\n.to-deep-purple-700{--tw-gradient-to:#512da8}\n.to-purple-700{--tw-gradient-to:#7b1fa2}\n.to-pink-700{--tw-gradient-to:#c2185b}\n.to-red-700{--tw-gradient-to:#d32f2f}\n.to-light-blue-500{--tw-gradient-to:#03a9f4}\n.p-4{padding:1rem}\n.p-3{padding:0.75rem}\n.p-8{padding:2rem}\n.p-2{padding:0.5rem}\n.p-0{padding:0px}\n.p-2\\.5{padding:0.625rem}\n.p-6{padding:1.5rem}\n.p-1{padding:0.25rem}\n.p-5{padding:1.25rem}\n.p-10{padding:2.5rem}\n.px-4{padding-left:1rem;padding-right:1rem}\n.py-16{padding-top:4rem;padding-bottom:4rem}\n.py-1{padding-top:0.25rem;padding-bottom:0.25rem}\n.py-8{padding-top:2rem;padding-bottom:2rem}\n.py-28{padding-top:7rem;padding-bottom:7rem}\n.px-12{padding-left:3rem;padding-right:3rem}\n.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}\n.px-2{padding-left:0.5rem;padding-right:0.5rem}\n.py-2{padding-top:0.5rem;padding-bottom:0.5rem}\n.py-20{padding-top:5rem;padding-bottom:5rem}\n.py-24{padding-top:6rem;padding-bottom:6rem}\n.py-5{padding-top:1.25rem;padding-bottom:1.25rem}\n.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}\n.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}\n.px-6{padding-left:1.5rem;padding-right:1.5rem}\n.py-3{padding-top:0.75rem;padding-bottom:0.75rem}\n.px-7{padding-left:1.75rem;padding-right:1.75rem}\n.py-4{padding-top:1rem;padding-bottom:1rem}\n.px-8{padding-left:2rem;padding-right:2rem}\n.px-9{padding-left:2.25rem;padding-right:2.25rem}\n.px-3{padding-left:0.75rem;padding-right:0.75rem}\n.px-0{padding-left:0px;padding-right:0px}\n.px-5{padding-left:1.25rem;padding-right:1.25rem}\n.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}\n.px-1{padding-left:0.25rem;padding-right:0.25rem}\n.pt-28{padding-top:7rem}\n.pb-36{padding-bottom:9rem}\n.pt-8{padding-top:2rem}\n.pb-6{padding-bottom:1.5rem}\n.pb-2{padding-bottom:0.5rem}\n.pt-6{padding-top:1.5rem}\n.pb-4{padding-bottom:1rem}\n.pb-20{padding-bottom:5rem}\n.pt-32{padding-top:8rem}\n.pt-48{padding-top:12rem}\n.pt-24{padding-top:6rem}\n.pb-64{padding-bottom:16rem}\n.pb-16{padding-bottom:4rem}\n.pr-12{padding-right:3rem}\n.pl-4{padding-left:1rem}\n.pt-4{padding-top:1rem}\n.pt-9{padding-top:2.25rem}\n.pl-0{padding-left:0px}\n.pt-10{padding-top:2.5rem}\n.pl-5{padding-left:1.25rem}\n.pr-3{padding-right:0.75rem}\n.pl-7{padding-left:1.75rem}\n.pr-5{padding-right:1.25rem}\n.pl-8{padding-left:2rem}\n.pr-6{padding-right:1.5rem}\n.pt-1\\.5{padding-top:0.375rem}\n.pb-0\\.5{padding-bottom:0.125rem}\n.pt-1{padding-top:0.25rem}\n.pb-0{padding-bottom:0px}\n.pt-2\\.5{padding-top:0.625rem}\n.pb-1\\.5{padding-bottom:0.375rem}\n.pt-2{padding-top:0.5rem}\n.pb-1{padding-bottom:0.25rem}\n.pt-3\\.5{padding-top:0.875rem}\n.pb-2\\.5{padding-bottom:0.625rem}\n.pt-3{padding-top:0.75rem}\n.pl-2{padding-left:0.5rem}\n.pr-7{padding-right:1.75rem}\n.pl-3{padding-left:0.75rem}\n.pr-9{padding-right:2.25rem}\n.pr-1{padding-right:0.25rem}\n.pb-10{padding-bottom:2.5rem}\n.pt-16{padding-top:4rem}\n.text-center{text-align:center}\n.text-right{text-align:right}\n.text-left{text-align:left}\n.align-middle{vertical-align:middle}\n.font-serif{font-family:\"Roboto Slab\", serif}\n.text-xl{font-size:1.25rem;line-height:1.75rem}\n.text-sm{font-size:0.875rem;line-height:1.25rem}\n.text-xs{font-size:0.75rem;line-height:1rem}\n.text-6xl{font-size:3.75rem;line-height:1}\n.text-lg{font-size:1.125rem;line-height:1.75rem}\n.text-base{font-size:1rem;line-height:1.5rem}\n.text-2xl{font-size:1.5rem;line-height:2rem}\n.text-4xl{font-size:2.25rem;line-height:2.5rem}\n.text-3xl{font-size:1.875rem;line-height:2.25rem}\n.text-5xl{font-size:3rem;line-height:1}\n.text-7xl{font-size:4.5rem;line-height:1}\n.text-8xl{font-size:6rem;line-height:1}\n.text-9xl{font-size:8rem;line-height:1}\n.font-medium{font-weight:500}\n.font-semibold{font-weight:600}\n.font-bold{font-weight:700}\n.font-light{font-weight:300}\n.font-normal{font-weight:400}\n.uppercase{text-transform:uppercase}\n.capitalize{text-transform:capitalize}\n.leading-relaxed{line-height:1.625}\n.leading-none{line-height:1}\n.leading-normal{line-height:1.5}\n.leading-10{line-height:2.5rem}\n.leading-snug{line-height:1.375}\n.tracking-wider{letter-spacing:0.05em}\n.tracking-wide{letter-spacing:0.025em}\n.text-gray-700{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.text-blue-gray-700{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.text-light-blue-500{--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.text-blue-gray-800{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.text-blue-gray-900{--tw-text-opacity:1;color:rgba(38, 50, 56, var(--tw-text-opacity))}\n.text-blue-gray-200{--tw-text-opacity:1;color:rgba(176, 190, 197, var(--tw-text-opacity))}\n.text-blue-gray-50{--tw-text-opacity:1;color:rgba(236, 239, 241, var(--tw-text-opacity))}\n.text-cyan-600{--tw-text-opacity:1;color:rgba(0, 172, 193, var(--tw-text-opacity))}\n.text-gray-500{--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.text-gray-900{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.text-blue-600{--tw-text-opacity:1;color:rgba(30, 136, 229, var(--tw-text-opacity))}\n.text-blue-400{--tw-text-opacity:1;color:rgba(66, 165, 245, var(--tw-text-opacity))}\n.text-indigo-500{--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.text-pink-400{--tw-text-opacity:1;color:rgba(236, 64, 122, var(--tw-text-opacity))}\n.text-red-600{--tw-text-opacity:1;color:rgba(229, 57, 53, var(--tw-text-opacity))}\n.text-gray-600{--tw-text-opacity:1;color:rgba(117, 117, 117, var(--tw-text-opacity))}\n.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.text-blue-gray-500{--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.text-brown-500{--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.text-deep-orange-500{--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.text-orange-500{--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.text-amber-500{--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.text-yellow-600{--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.text-lime-500{--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.text-light-green-500{--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.text-green-500{--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.text-teal-500{--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.text-cyan-500{--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.text-blue-500{--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.text-deep-purple-500{--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.text-purple-500{--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.text-pink-500{--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.text-red-500{--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.text-gray-400{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity))}\n.text-gray-800{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.text-brown-700{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.text-deep-orange-700{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.text-orange-700{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.text-amber-700{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.text-yellow-700{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.text-lime-700{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.text-light-green-700{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.text-green-700{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.text-teal-700{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.text-cyan-700{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.text-light-blue-700{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.text-blue-700{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.text-indigo-700{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.text-deep-purple-700{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.text-purple-700{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.text-pink-700{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.text-red-700{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.text-gray-200{--tw-text-opacity:1;color:rgba(238, 238, 238, var(--tw-text-opacity))}\n.text-brown-800{--tw-text-opacity:1;color:rgba(78, 52, 46, var(--tw-text-opacity))}\n.text-deep-orange-800{--tw-text-opacity:1;color:rgba(216, 67, 21, var(--tw-text-opacity))}\n.text-orange-800{--tw-text-opacity:1;color:rgba(239, 108, 0, var(--tw-text-opacity))}\n.text-amber-800{--tw-text-opacity:1;color:rgba(255, 143, 0, var(--tw-text-opacity))}\n.text-yellow-800{--tw-text-opacity:1;color:rgba(249, 168, 37, var(--tw-text-opacity))}\n.text-lime-800{--tw-text-opacity:1;color:rgba(158, 157, 36, var(--tw-text-opacity))}\n.text-light-green-800{--tw-text-opacity:1;color:rgba(85, 139, 47, var(--tw-text-opacity))}\n.text-green-800{--tw-text-opacity:1;color:rgba(46, 125, 50, var(--tw-text-opacity))}\n.text-teal-800{--tw-text-opacity:1;color:rgba(0, 105, 92, var(--tw-text-opacity))}\n.text-cyan-800{--tw-text-opacity:1;color:rgba(0, 131, 143, var(--tw-text-opacity))}\n.text-light-blue-800{--tw-text-opacity:1;color:rgba(2, 119, 189, var(--tw-text-opacity))}\n.text-blue-800{--tw-text-opacity:1;color:rgba(21, 101, 192, var(--tw-text-opacity))}\n.text-indigo-800{--tw-text-opacity:1;color:rgba(40, 53, 147, var(--tw-text-opacity))}\n.text-deep-purple-800{--tw-text-opacity:1;color:rgba(69, 39, 160, var(--tw-text-opacity))}\n.text-purple-800{--tw-text-opacity:1;color:rgba(106, 27, 154, var(--tw-text-opacity))}\n.text-pink-800{--tw-text-opacity:1;color:rgba(173, 20, 87, var(--tw-text-opacity))}\n.text-red-800{--tw-text-opacity:1;color:rgba(198, 40, 40, var(--tw-text-opacity))}\n.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}\n.text-opacity-60{--tw-text-opacity:0.6}\n.no-underline{text-decoration:none}\n.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n.placeholder-white::placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-opacity-50::placeholder{--tw-placeholder-opacity:0.5}\n.opacity-50{opacity:0.5}\n.opacity-0{opacity:0}\n.opacity-100{opacity:1}\n.opacity-25{opacity:0.25}\n.opacity-5{opacity:0.05}\n.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-brown{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-amber{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-yellow{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-lime{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-teal{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-cyan{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-indigo{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-pink{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-red{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-brown{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-amber{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-yellow{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-lime{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-teal{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-cyan{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-indigo{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-pink{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-red{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.outline-none{outline:2px solid transparent;outline-offset:2px}\n.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}\n.duration-300{transition-duration:300ms}\n.duration{transition-duration:150ms}\n.duration-500{transition-duration:500ms}\n/* Material Tailwind Input */\n.mt-input + label:after {\n        content: '';\n        pointer-events:none;\n        position:absolute;\n        top:0.125rem;\n        left:0px;\n        height:100%;\n        width:100%;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-scale-x:0;\n        border-width:1px;\n        border-top-width:0px;\n        border-left-width:0px;\n        border-right-width:0px;\n        border-bottom-width:2px;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:300ms;\n    }\n.mt-input:focus + label:after{--tw-scale-x:1}\n.mt-input:focus + label span,\n    .mt-input:not(:placeholder-shown) + label span {\n        top: -14%;\n    }\n.mt-input:focus + label span, .mt-input:not(:placeholder-shown) + label span{font-size:0.75rem;line-height:1rem;line-height:1.25}\n.texterea:focus + label span,\n    .texterea:not(:placeholder-shown) + label span {\n        top: -22px !important;\n    }\n/* Material Tailwind Input Outline */\n.mt-input-outline:focus,\n    .mt-input-outline:not(:placeholder-shown) {\n        border-top: transparent !important;\n    }\n.mt-input-outline + label {\n        line-height: 3.625 !important;\n    }\n.mt-input-outline:focus + label, .mt-input-outline:not(:placeholder-shown) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline + label:before,\n    .mt-input-outline + label:after {\n        content: '';pointer-events:none;margin-top:0.375rem;box-sizing:border-box;display:block;height:0.5rem;width:0.625rem;border-width:1px;border-top-width:2px;border-bottom-width:0px;border-left-width:0px;border-right-width:0px;border-color:transparent;\n    }\n.mt-input-outline:not(:placeholder-shown) + label:before, .mt-input-outline:not(:placeholder-shown) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:focus + label::before, .mt-input-outline:focus + label::after{border-top-width:2px}\n.mt-input-outline + label:before{margin-right:0.25rem;border-top-left-radius:0.5rem}\n.mt-input-outline + label:after{margin-left:0.25rem;flex-grow:1;border-top-right-radius:0.5rem}\n/* Material Tailwind Radio Button */\n.mt-radio:checked + label span {\n        box-shadow: 0px 0px 0px 2px white inset;\n        --tw-bg-opacity:1 !important;\n    }\n.mt-radio:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-radio + label span::before {\n        content: '';\n        top: -1.5px;\n        left: -1.5px;\n        transform: scale3d(1, 1, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1rem;\n        width:1rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-radio:checked + label span::before {\n        animation: radio-ripple 0.3s linear;\n    }\n/* Material Tailwind Checkbox */\n.mt-checkbox:checked + label span{--tw-bg-opacity:1 !important}\n.mt-checkbox:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-checkbox + label span::before {\n        content: '';\n        top: -1px;\n        left: -1.5px;\n        transform: scale3d(2, 2, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1.25rem;\n        width:1.25rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-checkbox + label span::after {\n        content: '';\n        top: 1px;\n        left: 6px;\n        position:absolute;\n        height:0.875rem;\n        width:0.375rem;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-rotate:45deg;\n        border-bottom-width:2px;\n        border-right-width:2px;\n        border-color:transparent;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:200ms;\n    }\n.mt-checkbox:checked + label span::before {\n        animation: radio-ripple 0.3s linear;\n    }\n.mt-checkbox:checked + label span::after{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity))}\n/* Material Tailwind Input Colors */\n.mt-input-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.mt-input-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.mt-input-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.mt-input-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.mt-input-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.mt-input-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.mt-input-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.mt-input-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.mt-input-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.mt-input-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.mt-input-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.mt-input-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.mt-input-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.mt-input-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.mt-input-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.mt-input-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.mt-input-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.mt-input-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n/* Material Tailwind Input Outline Colors */\n.mt-input-outline-blue-gray-500:focus, .mt-input-outline-blue-gray-500:focus + label, .mt-input-outline-blue-gray-500:focus + label:before, .mt-input-outline-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.mt-input-outline-gray-500:focus, .mt-input-outline-gray-500:focus + label, .mt-input-outline-gray-500:focus + label:before, .mt-input-outline-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.mt-input-outline-orange-500:focus, .mt-input-outline-orange-500:focus + label, .mt-input-outline-orange-500:focus + label:before, .mt-input-outline-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.mt-input-outline-deep-orange-500:focus, .mt-input-outline-deep-orange-500:focus + label, .mt-input-outline-deep-orange-500:focus + label:before, .mt-input-outline-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.mt-input-outline-brown-500:focus, .mt-input-outline-brown-500:focus + label, .mt-input-outline-brown-500:focus + label:before, .mt-input-outline-brown-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.mt-input-outline-amber-500:focus, .mt-input-outline-amber-500:focus + label, .mt-input-outline-amber-500:focus + label:before, .mt-input-outline-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.mt-input-outline-yellow-600:focus, .mt-input-outline-yellow-600:focus + label, .mt-input-outline-yellow-600:focus + label:before, .mt-input-outline-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.mt-input-outline-lime-500:focus, .mt-input-outline-lime-500:focus + label, .mt-input-outline-lime-500:focus + label:before, .mt-input-outline-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.mt-input-outline-light-green-500:focus, .mt-input-outline-light-green-500:focus + label, .mt-input-outline-light-green-500:focus + label:before, .mt-input-outline-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.mt-input-outline-green-500:focus, .mt-input-outline-green-500:focus + label, .mt-input-outline-green-500:focus + label:before, .mt-input-outline-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-teal-500:focus, .mt-input-outline-teal-500:focus + label, .mt-input-outline-teal-500:focus + label:before, .mt-input-outline-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.mt-input-outline-cyan-500:focus, .mt-input-outline-cyan-500:focus + label, .mt-input-outline-cyan-500:focus + label:before, .mt-input-outline-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.mt-input-outline-light-blue-500:focus, .mt-input-outline-light-blue-500:focus + label, .mt-input-outline-light-blue-500:focus + label:before, .mt-input-outline-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.mt-input-outline-blue-500:focus, .mt-input-outline-blue-500:focus + label, .mt-input-outline-blue-500:focus + label:before, .mt-input-outline-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.mt-input-outline-indigo-500:focus, .mt-input-outline-indigo-500:focus + label, .mt-input-outline-indigo-500:focus + label:before, .mt-input-outline-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.mt-input-outline-purple-500:focus, .mt-input-outline-purple-500:focus + label, .mt-input-outline-purple-500:focus + label:before, .mt-input-outline-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.mt-input-outline-deep-purple-500:focus, .mt-input-outline-deep-purple-500:focus + label, .mt-input-outline-deep-purple-500:focus + label:before, .mt-input-outline-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.mt-input-outline-pink-500:focus, .mt-input-outline-pink-500:focus + label, .mt-input-outline-pink-500:focus + label:before, .mt-input-outline-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.mt-input-outline-red-500:focus, .mt-input-outline-red-500:focus + label, .mt-input-outline-red-500:focus + label:before, .mt-input-outline-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:placeholder-shown) + label, .mt-input-outline-error:not(:placeholder-shown) + label:before, .mt-input-outline-error:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:placeholder-shown) + label, .mt-input-outline-success:not(:placeholder-shown) + label:before, .mt-input-outline-success:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n/* Material Tailwind Radio Button and Checkbox Colors */\n.mt-radio-blue-gray-500:checked + label span, .mt-radio-blue-gray-500 + label span::before, .mt-checkbox-blue-gray-500:checked + label span, .mt-checkbox-blue-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-gray-500:checked + label span, .mt-radio-gray-500 + label span::before, .mt-checkbox-gray-500:checked + label span, .mt-checkbox-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-orange-500:checked + label span, .mt-radio-orange-500 + label span::before, .mt-checkbox-orange-500:checked + label span, .mt-checkbox-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-orange-500:checked + label span, .mt-radio-deep-orange-500 + label span::before, .mt-checkbox-deep-orange-500:checked + label span, .mt-checkbox-deep-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-brown-500:checked + label span, .mt-radio-brown-500 + label span::before, .mt-checkbox-brown-500:checked + label span, .mt-checkbox-brown-500 + label span::before{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-amber-500:checked + label span, .mt-radio-amber-500 + label span::before, .mt-checkbox-amber-500:checked + label span, .mt-checkbox-amber-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-yellow-600:checked + label span, .mt-radio-yellow-600 + label span::before, .mt-checkbox-yellow-600:checked + label span, .mt-checkbox-yellow-600 + label span::before{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-lime-500:checked + label span, .mt-radio-lime-500 + label span::before, .mt-checkbox-lime-500:checked + label span, .mt-checkbox-lime-500 + label span::before{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-green-500:checked + label span, .mt-radio-light-green-500 + label span::before, .mt-checkbox-light-green-500:checked + label span, .mt-checkbox-light-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-green-500:checked + label span, .mt-radio-green-500 + label span::before, .mt-checkbox-green-500:checked + label span, .mt-checkbox-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-teal-500:checked + label span, .mt-radio-teal-500 + label span::before, .mt-checkbox-teal-500:checked + label span, .mt-checkbox-teal-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-cyan-500:checked + label span, .mt-radio-cyan-500 + label span::before, .mt-checkbox-cyan-500:checked + label span, .mt-checkbox-cyan-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-blue-500:checked + label span, .mt-radio-light-blue-500 + label span::before, .mt-checkbox-light-blue-500:checked + label span, .mt-checkbox-light-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-blue-500:checked + label span, .mt-radio-blue-500 + label span::before, .mt-checkbox-blue-500:checked + label span, .mt-checkbox-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-indigo-500:checked + label span, .mt-radio-indigo-500 + label span::before, .mt-checkbox-indigo-500:checked + label span, .mt-checkbox-indigo-500 + label span::before{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-purple-500:checked + label span, .mt-radio-purple-500 + label span::before, .mt-checkbox-purple-500:checked + label span, .mt-checkbox-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-purple-500:checked + label span, .mt-radio-deep-purple-500 + label span::before, .mt-checkbox-deep-purple-500:checked + label span, .mt-checkbox-deep-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-pink-500:checked + label span, .mt-radio-pink-500 + label span::before, .mt-checkbox-pink-500:checked + label span, .mt-checkbox-pink-500 + label span::before{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-red-500:checked + label span, .mt-radio-red-500 + label span::before, .mt-checkbox-red-500:checked + label span, .mt-checkbox-red-500 + label span::before{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n/* Tippy Boxx */\n.tippy-box:focus {\n    outline: none;\n}\n/* Tippy Animation */\n.tippy-box[data-animation='scale'] {\n    transform-origin: top left !important;\n}\n/* Tippy Arrow */\n.arrow-light .tippy-svg-arrow {\n    fill: #fff;\n}\n.arrow-dark .tippy-svg-arrow {\n    fill: rgba(0, 0, 0, 0.8);\n}\n/* Material Tailwind Radio Button Ripple Effect Animation */\n@keyframes radio-ripple {\n    from {\n        opacity: 0;\n        transform: scale3d(1, 1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale3d(2, 2, 1);\n    }\n    to {\n        opacity: 0;\n        transform: scale3d(3, 3, 1);\n    }\n}\n.last\\:mr-0:last-child{margin-right:0px}\n.hover\\:border-blue-gray-700:hover{--tw-border-opacity:1;border-color:rgba(69, 90, 100, var(--tw-border-opacity))}\n.hover\\:border-gray-700:hover{--tw-border-opacity:1;border-color:rgba(97, 97, 97, var(--tw-border-opacity))}\n.hover\\:border-brown-700:hover{--tw-border-opacity:1;border-color:rgba(93, 64, 55, var(--tw-border-opacity))}\n.hover\\:border-deep-orange-700:hover{--tw-border-opacity:1;border-color:rgba(230, 74, 25, var(--tw-border-opacity))}\n.hover\\:border-orange-700:hover{--tw-border-opacity:1;border-color:rgba(245, 124, 0, var(--tw-border-opacity))}\n.hover\\:border-amber-700:hover{--tw-border-opacity:1;border-color:rgba(255, 160, 0, var(--tw-border-opacity))}\n.hover\\:border-yellow-700:hover{--tw-border-opacity:1;border-color:rgba(251, 192, 45, var(--tw-border-opacity))}\n.hover\\:border-lime-700:hover{--tw-border-opacity:1;border-color:rgba(175, 180, 43, var(--tw-border-opacity))}\n.hover\\:border-light-green-700:hover{--tw-border-opacity:1;border-color:rgba(104, 159, 56, var(--tw-border-opacity))}\n.hover\\:border-green-700:hover{--tw-border-opacity:1;border-color:rgba(56, 142, 60, var(--tw-border-opacity))}\n.hover\\:border-teal-700:hover{--tw-border-opacity:1;border-color:rgba(0, 121, 107, var(--tw-border-opacity))}\n.hover\\:border-cyan-700:hover{--tw-border-opacity:1;border-color:rgba(0, 151, 167, var(--tw-border-opacity))}\n.hover\\:border-light-blue-700:hover{--tw-border-opacity:1;border-color:rgba(2, 136, 209, var(--tw-border-opacity))}\n.hover\\:border-blue-700:hover{--tw-border-opacity:1;border-color:rgba(25, 118, 210, var(--tw-border-opacity))}\n.hover\\:border-indigo-700:hover{--tw-border-opacity:1;border-color:rgba(48, 63, 159, var(--tw-border-opacity))}\n.hover\\:border-deep-purple-700:hover{--tw-border-opacity:1;border-color:rgba(81, 45, 168, var(--tw-border-opacity))}\n.hover\\:border-purple-700:hover{--tw-border-opacity:1;border-color:rgba(123, 31, 162, var(--tw-border-opacity))}\n.hover\\:border-pink-700:hover{--tw-border-opacity:1;border-color:rgba(194, 24, 91, var(--tw-border-opacity))}\n.hover\\:border-red-700:hover{--tw-border-opacity:1;border-color:rgba(211, 47, 47, var(--tw-border-opacity))}\n.hover\\:bg-blue-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(69, 90, 100, var(--tw-bg-opacity))}\n.hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.hover\\:bg-brown-700:hover{--tw-bg-opacity:1;background-color:rgba(93, 64, 55, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(230, 74, 25, var(--tw-bg-opacity))}\n.hover\\:bg-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(245, 124, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-700:hover{--tw-bg-opacity:1;background-color:rgba(255, 160, 0, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-700:hover{--tw-bg-opacity:1;background-color:rgba(251, 192, 45, var(--tw-bg-opacity))}\n.hover\\:bg-lime-700:hover{--tw-bg-opacity:1;background-color:rgba(175, 180, 43, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-700:hover{--tw-bg-opacity:1;background-color:rgba(104, 159, 56, var(--tw-bg-opacity))}\n.hover\\:bg-green-700:hover{--tw-bg-opacity:1;background-color:rgba(56, 142, 60, var(--tw-bg-opacity))}\n.hover\\:bg-teal-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 121, 107, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 151, 167, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(2, 136, 209, var(--tw-bg-opacity))}\n.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(25, 118, 210, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgba(48, 63, 159, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(81, 45, 168, var(--tw-bg-opacity))}\n.hover\\:bg-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(123, 31, 162, var(--tw-bg-opacity))}\n.hover\\:bg-pink-700:hover{--tw-bg-opacity:1;background-color:rgba(194, 24, 91, var(--tw-bg-opacity))}\n.hover\\:bg-red-700:hover{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(236, 239, 241, var(--tw-bg-opacity))}\n.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(250, 250, 250, var(--tw-bg-opacity))}\n.hover\\:bg-brown-50:hover{--tw-bg-opacity:1;background-color:rgba(239, 235, 233, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(251, 233, 231, var(--tw-bg-opacity))}\n.hover\\:bg-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 243, 224, var(--tw-bg-opacity))}\n.hover\\:bg-amber-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 248, 225, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 253, 231, var(--tw-bg-opacity))}\n.hover\\:bg-lime-50:hover{--tw-bg-opacity:1;background-color:rgba(249, 251, 231, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-50:hover{--tw-bg-opacity:1;background-color:rgba(241, 248, 233, var(--tw-bg-opacity))}\n.hover\\:bg-green-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 245, 233, var(--tw-bg-opacity))}\n.hover\\:bg-teal-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 241, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 247, 250, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(225, 245, 254, var(--tw-bg-opacity))}\n.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(227, 242, 253, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 234, 246, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(237, 231, 246, var(--tw-bg-opacity))}\n.hover\\:bg-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(243, 229, 245, var(--tw-bg-opacity))}\n.hover\\:bg-pink-50:hover{--tw-bg-opacity:1;background-color:rgba(252, 228, 236, var(--tw-bg-opacity))}\n.hover\\:bg-red-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 235, 238, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.hover\\:bg-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.hover\\:bg-brown-500:hover{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.hover\\:bg-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-600:hover{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.hover\\:bg-lime-500:hover{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-500:hover{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.hover\\:bg-green-500:hover{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.hover\\:bg-teal-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-500:hover{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.hover\\:bg-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.hover\\:bg-pink-500:hover{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.hover\\:bg-red-500:hover{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}\n.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-800:hover{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-700:hover{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.hover\\:text-gray-700:hover{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.hover\\:text-brown-700:hover{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.hover\\:text-deep-orange-700:hover{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.hover\\:text-orange-700:hover{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.hover\\:text-amber-700:hover{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.hover\\:text-yellow-700:hover{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.hover\\:text-lime-700:hover{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.hover\\:text-light-green-700:hover{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.hover\\:text-green-700:hover{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.hover\\:text-teal-700:hover{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.hover\\:text-cyan-700:hover{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.hover\\:text-light-blue-700:hover{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.hover\\:text-indigo-700:hover{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.hover\\:text-deep-purple-700:hover{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.hover\\:text-purple-700:hover{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.hover\\:text-pink-700:hover{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.hover\\:text-red-700:hover{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.hover\\:shadow-lg-blue-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-brown:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-amber:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-yellow:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-lime:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-teal:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-cyan:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-indigo:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-pink:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-red:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-brown:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-amber:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-yellow:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-lime:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-teal:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-cyan:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-indigo:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-pink:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-red:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:border-2:focus{border-width:2px}\n.focus\\:border-blue-gray-500:focus{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.focus\\:border-brown-500:focus{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.focus\\:border-deep-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.focus\\:border-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.focus\\:border-amber-500:focus{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.focus\\:border-yellow-600:focus{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.focus\\:border-lime-500:focus{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.focus\\:border-light-green-500:focus{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.focus\\:border-green-500:focus{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.focus\\:border-teal-500:focus{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.focus\\:border-cyan-500:focus{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.focus\\:border-light-blue-500:focus{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.focus\\:border-deep-purple-500:focus{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.focus\\:border-purple-500:focus{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.focus\\:border-pink-500:focus{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.focus\\:border-red-500:focus{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.focus\\:bg-blue-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(120, 144, 156, var(--tw-bg-opacity))}\n.focus\\:bg-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(189, 189, 189, var(--tw-bg-opacity))}\n.focus\\:bg-brown-400:focus{--tw-bg-opacity:1;background-color:rgba(141, 110, 99, var(--tw-bg-opacity))}\n.focus\\:bg-deep-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 112, 67, var(--tw-bg-opacity))}\n.focus\\:bg-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 167, 38, var(--tw-bg-opacity))}\n.focus\\:bg-amber-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 202, 40, var(--tw-bg-opacity))}\n.focus\\:bg-yellow-500:focus{--tw-bg-opacity:1;background-color:rgba(255, 235, 59, var(--tw-bg-opacity))}\n.focus\\:bg-lime-400:focus{--tw-bg-opacity:1;background-color:rgba(212, 225, 87, var(--tw-bg-opacity))}\n.focus\\:bg-light-green-400:focus{--tw-bg-opacity:1;background-color:rgba(156, 204, 101, var(--tw-bg-opacity))}\n.focus\\:bg-green-400:focus{--tw-bg-opacity:1;background-color:rgba(102, 187, 106, var(--tw-bg-opacity))}\n.focus\\:bg-teal-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 166, 154, var(--tw-bg-opacity))}\n.focus\\:bg-cyan-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 198, 218, var(--tw-bg-opacity))}\n.focus\\:bg-light-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(41, 182, 246, var(--tw-bg-opacity))}\n.focus\\:bg-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(66, 165, 245, var(--tw-bg-opacity))}\n.focus\\:bg-indigo-400:focus{--tw-bg-opacity:1;background-color:rgba(92, 107, 192, var(--tw-bg-opacity))}\n.focus\\:bg-deep-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(126, 87, 194, var(--tw-bg-opacity))}\n.focus\\:bg-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(171, 71, 188, var(--tw-bg-opacity))}\n.focus\\:bg-pink-400:focus{--tw-bg-opacity:1;background-color:rgba(236, 64, 122, var(--tw-bg-opacity))}\n.focus\\:bg-red-400:focus{--tw-bg-opacity:1;background-color:rgba(239, 83, 80, var(--tw-bg-opacity))}\n.focus\\:bg-gray-500:focus{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.focus\\:bg-opacity-20:focus{--tw-bg-opacity:0.2}\n.focus\\:text-gray-800:focus{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.focus\\:shadow-none:focus{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}\n.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}\n.active\\:bg-blue-gray-800:active{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.active\\:bg-gray-800:active{--tw-bg-opacity:1;background-color:rgba(66, 66, 66, var(--tw-bg-opacity))}\n.active\\:bg-brown-800:active{--tw-bg-opacity:1;background-color:rgba(78, 52, 46, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-800:active{--tw-bg-opacity:1;background-color:rgba(216, 67, 21, var(--tw-bg-opacity))}\n.active\\:bg-orange-800:active{--tw-bg-opacity:1;background-color:rgba(239, 108, 0, var(--tw-bg-opacity))}\n.active\\:bg-amber-800:active{--tw-bg-opacity:1;background-color:rgba(255, 143, 0, var(--tw-bg-opacity))}\n.active\\:bg-yellow-800:active{--tw-bg-opacity:1;background-color:rgba(249, 168, 37, var(--tw-bg-opacity))}\n.active\\:bg-lime-800:active{--tw-bg-opacity:1;background-color:rgba(158, 157, 36, var(--tw-bg-opacity))}\n.active\\:bg-light-green-800:active{--tw-bg-opacity:1;background-color:rgba(85, 139, 47, var(--tw-bg-opacity))}\n.active\\:bg-green-800:active{--tw-bg-opacity:1;background-color:rgba(46, 125, 50, var(--tw-bg-opacity))}\n.active\\:bg-teal-800:active{--tw-bg-opacity:1;background-color:rgba(0, 105, 92, var(--tw-bg-opacity))}\n.active\\:bg-cyan-800:active{--tw-bg-opacity:1;background-color:rgba(0, 131, 143, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-800:active{--tw-bg-opacity:1;background-color:rgba(2, 119, 189, var(--tw-bg-opacity))}\n.active\\:bg-blue-800:active{--tw-bg-opacity:1;background-color:rgba(21, 101, 192, var(--tw-bg-opacity))}\n.active\\:bg-indigo-800:active{--tw-bg-opacity:1;background-color:rgba(40, 53, 147, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-800:active{--tw-bg-opacity:1;background-color:rgba(69, 39, 160, var(--tw-bg-opacity))}\n.active\\:bg-purple-800:active{--tw-bg-opacity:1;background-color:rgba(106, 27, 154, var(--tw-bg-opacity))}\n.active\\:bg-pink-800:active{--tw-bg-opacity:1;background-color:rgba(173, 20, 87, var(--tw-bg-opacity))}\n.active\\:bg-red-800:active{--tw-bg-opacity:1;background-color:rgba(198, 40, 40, var(--tw-bg-opacity))}\n.active\\:bg-blue-gray-100:active{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.active\\:bg-gray-100:active{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.active\\:bg-brown-100:active{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.active\\:bg-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.active\\:bg-amber-100:active{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.active\\:bg-yellow-100:active{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.active\\:bg-lime-100:active{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.active\\:bg-light-green-100:active{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.active\\:bg-green-100:active{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.active\\:bg-teal-100:active{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.active\\:bg-cyan-100:active{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-100:active{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.active\\:bg-blue-100:active{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.active\\:bg-indigo-100:active{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-100:active{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.active\\:bg-purple-100:active{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.active\\:bg-pink-100:active{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.active\\:bg-red-100:active{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.active\\:bg-gray-500:active{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.active\\:bg-opacity-40:active{--tw-bg-opacity:0.4}\n@media (min-width: 640px){\n.sm\\:left-auto{left:auto}\n.sm\\:w-full{width:100%}}\n@media (min-width: 768px){\n.md\\:mt-40{margin-top:10rem}\n.md\\:mt-0{margin-top:0px}\n.md\\:mt-64{margin-top:16rem}\n.md\\:mb-0{margin-bottom:0px}\n.md\\:w-9\\/12{width:75%}\n.md\\:w-48{width:12rem}\n.md\\:w-6\\/12{width:50%}\n.md\\:w-4\\/12{width:33.333333%}\n.md\\:w-5\\/12{width:41.666667%}\n.md\\:w-8\\/12{width:66.666667%}\n.md\\:flex-row{flex-direction:row}\n.md\\:justify-start{justify-content:flex-start}\n.md\\:justify-between{justify-content:space-between}\n.md\\:gap-6{gap:1.5rem}\n.md\\:px-8{padding-left:2rem;padding-right:2rem}\n.md\\:px-4{padding-left:1rem;padding-right:1rem}\n.md\\:pr-12{padding-right:3rem}\n.md\\:pt-0{padding-top:0px}}\n@media (min-width: 1024px){\n.lg\\:static{position:static}\n.lg\\:mr-5{margin-right:1.25rem}\n.lg\\:ml-5{margin-left:1.25rem}\n.lg\\:mt-16{margin-top:4rem}\n.lg\\:block{display:block}\n.lg\\:flex{display:flex}\n.lg\\:hidden{display:none}\n.lg\\:w-4\\/12{width:33.333333%}\n.lg\\:w-6\\/12{width:50%}\n.lg\\:w-8\\/12{width:66.666667%}\n.lg\\:w-60{width:15rem}\n.lg\\:w-auto{width:auto}\n.lg\\:flex-row{flex-direction:row}\n.lg\\:items-center{align-items:center}\n.lg\\:justify-between{justify-content:space-between}\n.lg\\:justify-start{justify-content:flex-start}\n.lg\\:px-36{padding-left:9rem;padding-right:9rem}\n.lg\\:text-left{text-align:left}}\n.hover\\:text-gray-900:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n@media (min-width: 768px){\n\t.md\\:left-0{\n\t\tleft: 0px;\n\t}\n\t.md\\:ml-64{\n\t\tmargin-left: 16rem;\n\t}\n\t.md\\:hidden{\n\t\tdisplay: none;\n\t}\n\t.md\\:px-8{\n\t\tpadding-left: 2rem;\n\t\tpadding-right: 2rem;\n\t}\n\t.md\\:px-10{\n\t\tpadding-left: 2.5rem;\n\t\tpadding-right: 2.5rem;\n\t}\n\t.md\\:pr-8{\n\t\tpadding-right: 2rem;\n\t}\n\t.md\\:pl-10{\n\t\tpadding-left: 2.5rem;\n\t}\n}\n@media (min-width: 1024px){\n\t.lg\\:mb-0{\n\t\tmargin-bottom: 0px;\n\t}\n\t.lg\\:w-6\\/12{\n\t\twidth: 50%;\n\t}\n\t.lg\\:w-4\\/12{\n\t\twidth: 33.333333%;\n\t}\n\t.lg\\:grid-cols-2{\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n\t.lg\\:flex-row{\n\t\tflex-direction: row;\n\t}\n\t.lg\\:pt-4{\n\t\tpadding-top: 1rem;\n\t}\n}\n@media (min-width: 1280px){\n\t.xl\\:col-start-1{\n\t\tgrid-column-start: 1;\n\t}\n\t.xl\\:col-end-6{\n\t\tgrid-column-end: 6;\n\t}\n\t.xl\\:grid-cols-4{\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Edit Profile/style.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Edit Profile/style.css ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  font-family: \"Hind Guntur\", sans-serif;\n  color: #054231;\n  display: flex;\n  justify-content: left;\n}\n\n.card {\n  width: 310px;\n  height: 627px;\n  padding: 15px;\n  margin-top: 40px;\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 15px 10px 25px 0px #3fa1a9;\n  background: #fff;\n  background-repeat: no-repeat, no-repeat;\n  background-position: 120% -5%, 200% -40%;\n  background-size: 40%, 80%;\n  animation: open 0.5s;\n}\n@keyframes open {\n  0% {\n    background-position: 166% -25%, 220% -69%;\n  }\n  100% {\n    background-position: 120% -5%, 200% -40%;\n  }\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.field {\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n}\ninput[type=\"file\"] {\n  display: none;\n}\n\n.custom-file-upload {\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  padding: 6px;\n  cursor: pointer;\n  background: linear-gradient(270deg, #3fa1a9, #79f1a4);\n  margin-bottom: 25px;\n}\n\n.img-wrap {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.img-upload:before {\n  content: \"\\f093\";\n  font-size: 90px;\n  position: absolute;\n  padding-top: 80px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #63d3a6;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #fff;\n}\n.img-upload:hover:before {\n  opacity: 1;\n}\nimg {\n  width: auto;\n  height: 100%;\n}\n\nlabel {\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #676767;\n}\n\ninput {\n  border-radius: 15px;\n  border: 1px solid #b7b7b7;\n  padding: 5px 5px 5px 10px;\n  font-size: 18px;\n  transition: 0.2s;\n}\ninput:focus {\n  outline: none;\n  border: 1px solid #64d488;\n}\ninput::placeholder {\n  color: #bebebe;\n}\n.name {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #676767;\n  max-width: 220px;\n  overflow-wrap: break-word;\n}\n.region {\n  text-align: center;\n  max-width: 220px;\n  overflow-wrap: break-word;\n}\n\n.watchlist {\n  text-align: center;\n  max-width: 220px;\n  overflow-wrap: break-word;\n}\nbutton {\n  position: relative;\n  color: #054231;\n  letter-spacing: 1px;\n  margin: 20px;\n  font-size: 18px;\n  padding: 10px;\n  text-align: center;\n  transition: 0.5s;\n  border-radius: 10px;\n  cursor: pointer;\n  border-radius: 25px;\n  border: none;\n  background: #64d488;\n}\n.save {\n  font-weight: 600;\n  left: -20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  width: 20px;\n  box-shadow: 20px 0px 40px 0px #63d3a6;\n}\n.edit {\n  color: #fff;\n  width: 180px;\n}\nbutton:hover {\n  left: 0;\n  color: #fff;\n  width: 180px;\n  box-shadow: 0px 0px 20px 0px #63d3a6;\n}\nbutton:focus {\n  outline: none;\n}\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n.fa-instagram {\n  position: absolute;\n  color: #79f1a4;\n  top: 3%;\n  right: 2%;\n  font-size: 38px;\n}\n.fa-instagram:hover {\n  font-size: 42px;\n  color: #caff81;\n  transition: all 0.1s linear;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://src/components/Edit Profile/style.css"],"names":[],"mappings":"AAAA;EACE,sCAAsC;EACtC,cAAc;EACd,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,sCAAsC;EACtC,gBAAgB;EAChB,uCAAuC;EACvC,wCAAwC;EACxC,yBAAyB;EACzB,oBAAoB;AACtB;AACA;EACE;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,qDAAqD;EACrD,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,qBAAqB;EACrB,sBAAsB;AACxB;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,qCAAqC;AACvC;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;AACtC;AACA;EACE,aAAa;AACf;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,8DAA8D;AAChE;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,OAAO;EACP,SAAS;EACT,eAAe;AACjB;AACA;EACE,eAAe;EACf,cAAc;EACd,2BAA2B;EAC3B,eAAe;AACjB","sourcesContent":["body {\n  font-family: \"Hind Guntur\", sans-serif;\n  color: #054231;\n  display: flex;\n  justify-content: left;\n}\n\n.card {\n  width: 310px;\n  height: 627px;\n  padding: 15px;\n  margin-top: 40px;\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 15px 10px 25px 0px #3fa1a9;\n  background: #fff;\n  background-repeat: no-repeat, no-repeat;\n  background-position: 120% -5%, 200% -40%;\n  background-size: 40%, 80%;\n  animation: open 0.5s;\n}\n@keyframes open {\n  0% {\n    background-position: 166% -25%, 220% -69%;\n  }\n  100% {\n    background-position: 120% -5%, 200% -40%;\n  }\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.field {\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n}\ninput[type=\"file\"] {\n  display: none;\n}\n\n.custom-file-upload {\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  padding: 6px;\n  cursor: pointer;\n  background: linear-gradient(270deg, #3fa1a9, #79f1a4);\n  margin-bottom: 25px;\n}\n\n.img-wrap {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.img-upload:before {\n  content: \"\\f093\";\n  font-size: 90px;\n  position: absolute;\n  padding-top: 80px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #63d3a6;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #fff;\n}\n.img-upload:hover:before {\n  opacity: 1;\n}\nimg {\n  width: auto;\n  height: 100%;\n}\n\nlabel {\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #676767;\n}\n\ninput {\n  border-radius: 15px;\n  border: 1px solid #b7b7b7;\n  padding: 5px 5px 5px 10px;\n  font-size: 18px;\n  transition: 0.2s;\n}\ninput:focus {\n  outline: none;\n  border: 1px solid #64d488;\n}\ninput::placeholder {\n  color: #bebebe;\n}\n.name {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #676767;\n  max-width: 220px;\n  overflow-wrap: break-word;\n}\n.region {\n  text-align: center;\n  max-width: 220px;\n  overflow-wrap: break-word;\n}\n\n.watchlist {\n  text-align: center;\n  max-width: 220px;\n  overflow-wrap: break-word;\n}\nbutton {\n  position: relative;\n  color: #054231;\n  letter-spacing: 1px;\n  margin: 20px;\n  font-size: 18px;\n  padding: 10px;\n  text-align: center;\n  transition: 0.5s;\n  border-radius: 10px;\n  cursor: pointer;\n  border-radius: 25px;\n  border: none;\n  background: #64d488;\n}\n.save {\n  font-weight: 600;\n  left: -20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  width: 20px;\n  box-shadow: 20px 0px 40px 0px #63d3a6;\n}\n.edit {\n  color: #fff;\n  width: 180px;\n}\nbutton:hover {\n  left: 0;\n  color: #fff;\n  width: 180px;\n  box-shadow: 0px 0px 20px 0px #63d3a6;\n}\nbutton:focus {\n  outline: none;\n}\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n.fa-instagram {\n  position: absolute;\n  color: #79f1a4;\n  top: 3%;\n  right: 2%;\n  font-size: 38px;\n}\n.fa-instagram:hover {\n  font-size: 42px;\n  color: #caff81;\n  transition: all 0.1s linear;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/index.modules.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Loading/index.modules.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* LOADING SPINNER */\n#loading,\n#error {\n  align-self: center;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #fff;\n  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n.lds-facebook div:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n.lds-facebook div:nth-child(3) {\n  left: 56px;\n  animation-delay: 0;\n}\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n    background-color: #ffc107;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/components/Loading/index.modules.css"],"names":[],"mappings":"AAAA,oBAAoB;AACpB;;EAEE,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,kEAAkE;AACpE;AACA;EACE,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE;IACE,QAAQ;IACR,YAAY;EACd;EACA;;IAEE,SAAS;IACT,YAAY;IACZ,yBAAyB;EAC3B;AACF","sourcesContent":["/* LOADING SPINNER */\n#loading,\n#error {\n  align-self: center;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #fff;\n  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n.lds-facebook div:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n.lds-facebook div:nth-child(3) {\n  left: 56px;\n  animation-delay: 0;\n}\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n    background-color: #ffc107;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Dashboard */ "./src/pages/Dashboard.js");
/* harmony import */ var pages_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/Settings */ "./src/pages/Settings.js");
/* harmony import */ var _pages_Tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Tables */ "./src/pages/Tables.js");
/* harmony import */ var _lib_lineData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/lineData */ "./src/lib/lineData.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-notifications-component */ "./node_modules/react-notifications-component/dist/index.js");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_notifications_component_dist_theme_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-notifications-component/dist/theme.css */ "./node_modules/react-notifications-component/dist/theme.css");
/* harmony import */ var react_notifications_component_dist_theme_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component_dist_theme_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AdminNavbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/AdminNavbar */ "./src/components/AdminNavbar/index.js");
/* harmony import */ var pages_ProfileCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pages/ProfileCard */ "./src/pages/ProfileCard.js");
/* harmony import */ var pages_ProfileCard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pages_ProfileCard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_StudentPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/StudentPage */ "./src/pages/StudentPage.js");
/* harmony import */ var _pages_Upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Upload */ "./src/pages/Upload.js");
/* harmony import */ var components_Loading_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Loading/Loading */ "./src/components/Loading/Loading.js");
/* harmony import */ var assets_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/styles/tailwind.css */ "./src/assets/styles/tailwind.css");
/* harmony import */ var assets_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-tailwind/react/tailwind.css */ "./node_modules/@material-tailwind/react/tailwind.css");
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contexts/UserContext */ "./src/contexts/UserContext.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();


















 // Tailwind CSS Style Sheet







function App() {
  _s();

  const [cohortData, setCohortData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [defaultBootcamp, setBootcamp] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// place fetch request to API for bootcamp name
  }, [defaultBootcamp]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      setIsLoading(true);
      const API_URL = "http://localhost:3000" + "/records";
      const response = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setCohortData(data.payload);
      setIsLoading(false);
    }

    getData();
  }, []); // console.log("app: ", cohortData);

  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(components_Loading_Loading__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_19__["UserProvider"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
      className: "md:ml-64",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
            data: Object(_lib_lineData__WEBPACK_IMPORTED_MODULE_6__["massage"])(cohortData)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/tables",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pages_Tables__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/student/:id",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pages_StudentPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
            backEndData: Object(_lib_lineData__WEBPACK_IMPORTED_MODULE_6__["massage"])(cohortData)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/student",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pages_StudentPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
            backEndData: Object(_lib_lineData__WEBPACK_IMPORTED_MODULE_6__["massage"])(cohortData)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/upload",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pages_Upload__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/settings",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(pages_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
            setBootcamp: setBootcamp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          from: "*",
          to: "/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(App, "nrnhG3TKgb4jLjkkqVen3j+qjo8=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/img/Demeter (1).png":
/*!****************************************!*\
  !*** ./src/assets/img/Demeter (1).png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Demeter (1).5912e5bc.png");

/***/ }),

/***/ "./src/assets/img/team-1-800x800.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/team-1-800x800.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/team-1-800x800.fa5a7ac2.jpg");

/***/ }),

/***/ "./src/assets/styles/tailwind.css":
/*!****************************************!*\
  !*** ./src/assets/styles/tailwind.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./tailwind.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/tailwind.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./tailwind.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/tailwind.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./tailwind.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/styles/tailwind.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/AdminNavbar/index.js":
/*!*********************************************!*\
  !*** ./src/components/AdminNavbar/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminNavbar; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Icon */ "./node_modules/@material-tailwind/react/Icon.js");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/NavbarInput */ "./node_modules/@material-tailwind/react/NavbarInput.js");
/* harmony import */ var _material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Image */ "./node_modules/@material-tailwind/react/Image.js");
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Dropdown */ "./node_modules/@material-tailwind/react/Dropdown.js");
/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/DropdownItem */ "./node_modules/@material-tailwind/react/DropdownItem.js");
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_img_team_1_800x800_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/img/team-1-800x800.jpg */ "./src/assets/img/team-1-800x800.jpg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/AdminNavbar/index.js",
    _s = __webpack_require__.$Refresh$.signature();










function AdminNavbar({
  showSidebar,
  setShowSidebar
}) {
  _s();

  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useLocation"])().pathname;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("nav", {
    className: "bg-light-blue-500 md:ml-64 py-6 px-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "md:hidden",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          iconOnly: true,
          rounded: true,
          ripple: "light",
          onClick: () => setShowSidebar("left-0"),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
            name: "menu",
            size: "2xl",
            color: "white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: `absolute top-2 md:hidden ${showSidebar === "left-0" ? "left-64" : "-left-64"} z-50 transition-all duration-300`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            color: "transparent",
            buttonType: "link",
            size: "lg",
            iconOnly: true,
            rounded: true,
            ripple: "light",
            onClick: () => setShowSidebar("-left-64"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
              name: "close",
              size: "2xl",
              color: "white"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "flex justify-between items-center w-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
          className: "uppercase text-white text-sm tracking-wider mt-1",
          children: location === "/" ? "DASHBOARD" : location.toUpperCase().replace("/", "")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "flex",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_3___default.a, {
            placeholder: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "-mr-4 ml-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
              color: "transparent",
              buttonText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "w-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  src: assets_img_team_1_800x800_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
                  rounded: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this),
              rounded: true,
              style: {
                padding: 0,
                color: "transparent"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
                color: "lightBlue",
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
                color: "lightBlue",
                children: "Another Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
                color: "lightBlue",
                children: "Something Else"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(AdminNavbar, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useLocation"]];
});

_c = AdminNavbar;

var _c;

__webpack_require__.$Refresh$.register(_c, "AdminNavbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ChartBar/index.js":
/*!******************************************!*\
  !*** ./src/components/ChartBar/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/ChartBar/index.js",
    _s = __webpack_require__.$Refresh$.signature();







function ChartBar() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let config = {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: new Date().getFullYear(),
          backgroundColor: '#03a9f4',
          borderColor: '#03a9f4',
          data: [30, 78, 56, 34, 100, 45, 13],
          fill: false,
          barThickness: 8
        }, {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: '#f44336',
          borderColor: '#f44336',
          data: [27, 68, 86, 74, 10, 4, 87],
          barThickness: 8
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        legend: {
          labels: {
            fontColor: 'rgba(17,17,17,.7)'
          },
          align: 'end',
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            display: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(33, 37, 41, 0.3)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value'
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.2)',
              zeroLineColor: 'rgba(33, 37, 41, 0.15)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }]
        }
      }
    };
    let ctx = document.getElementById('bar-chart').getContext('2d');
    window.myBar = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, config);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "pink",
      contentPosition: "left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
        className: "uppercase text-gray-200 text-xs font-medium",
        children: "Overview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
        className: "text-white text-2xl",
        children: "Sales value"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "relative h-96",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("canvas", {
          id: "bar-chart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, this);
}

_s(ChartBar, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ChartBar;

var _c;

__webpack_require__.$Refresh$.register(_c, "ChartBar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ChartLine/index.js":
/*!*******************************************!*\
  !*** ./src/components/ChartLine/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DropDown */ "./src/components/DropDown.js");
/* harmony import */ var lib_lineData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/lineData */ "./src/lib/lineData.js");
/* harmony import */ var dummyData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dummyData */ "./src/dummyData.js");
/* harmony import */ var dummyData__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dummyData__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/ChartLine/index.js",
    _s = __webpack_require__.$Refresh$.signature();












const chartFilters = [// used for the first dropdown filter
{
  id: 0,
  display: "Quiz Scores",
  ref: "quizScores",
  spanGaps: true,
  beginAtZero: false
}, {
  id: 1,
  display: "Experience Feedback",
  ref: "feedbackExDayAvg",
  spanGaps: true,
  beginAtZero: true
}];
const colors = ["#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#808080", "#ffffff", "#000000"];
function ChartLine({
  data,
  isGroup
}) {
  _s();

  const id = Number(Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useParams"])().id) || 1;
  const [datasetId, setDatasetId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(id);
  const [chartId, setChartId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("0");
  const [isGroupData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isGroup);
  const [dataset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.concat(lib_lineData__WEBPACK_IMPORTED_MODULE_8__["fakeData"]));
  console.log("line chart: ", dataset);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => setDatasetId(id), [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let config = {
      type: "line",
      data: {
        labels: dataset[0].quizScores.map((quiz, index) => index + 1),
        datasets: dataset.filter(dataPoint => {
          if (isGroupData) {
            return dataPoint.bootcampId === datasetId || datasetId === 0;
          } else {
            return dataPoint.id === datasetId;
          }
        }).map((student, index) => {
          return {
            label: student.name,
            backgroundColor: colors[index],
            borderColor: colors[index],
            data: student[chartFilters[chartId].ref],
            fill: false,
            spanGaps: chartFilters[chartId].spanGaps
          };
        })
      },
      options: {
        elements: {
          point: {
            pointStyle: "line"
          }
        },
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white"
        },
        legend: {
          labels: {
            fontColor: "black"
          },
          align: "end",
          position: "bottom"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "index",
          intersect: true
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: "rgba(17,17,17,.7)"
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              fontColor: "white"
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: "rgba(17,17,17,.7)",
              beginAtZero: chartFilters[chartId].beginAtZero
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
              fontColor: "white"
            },
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(17, 17, 17, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
  }, [datasetId, chartId, dataset, isGroupData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "orange",
      contentPosition: "left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h6", {
            className: "uppercase text-gray-200 text-xs font-medium",
            children: "Overview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
            className: "text-white text-2xl",
            children: chartFilters[chartId].display
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "pl-5 flex",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_DropDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
            state: chartId,
            setState: setChartId,
            label: "Chart Select",
            itemOptions: chartFilters.map(option => option.display)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this), isGroup ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_DropDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
            state: datasetId,
            setState: setDatasetId,
            label: "Bootcamp",
            itemOptions: ["All Bootcamps", ...dummyData__WEBPACK_IMPORTED_MODULE_9___default.a.map(bootcamp => {
              return bootcamp.id + ": " + bootcamp.region;
            })]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 15
          }, this) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "relative h-96",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("canvas", {
          id: "line-chart"
        }, react_uuid__WEBPACK_IMPORTED_MODULE_2___default()(), false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, this)]
  }, react_uuid__WEBPACK_IMPORTED_MODULE_2___default()(), true, {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 5
  }, this);
}

_s(ChartLine, "ZXpSIZY6FOXXoMlfZ3aJvMoIW7w=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_1__["useParams"]];
});

_c = ChartLine;

var _c;

__webpack_require__.$Refresh$.register(_c, "ChartLine");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Comments/index.js":
/*!******************************************!*\
  !*** ./src/components/Comments/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/UserContext */ "./src/contexts/UserContext.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _IndividualComment_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IndividualComment/index */ "./src/components/IndividualComment/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/Comments/index.js",
    _s = __webpack_require__.$Refresh$.signature();






function Comments({
  existingcomments = []
}) {
  _s();

  const [comments, setComments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(existingcomments);
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const user = Object(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__["useUserContext"])();

  const submitCommentLine = () => {
    const newComment = {
      comment: text,
      author: user.name,
      imageUrl: user.imageUrl,
      date: Date.now
    };
    setComments([...comments, newComment]);
    setText('');
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Comment"].Group, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      as: "h3",
      dividing: true,
      children: "Comments"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), comments.map(comment => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_IndividualComment_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      imageUrl: comment.imageUrl,
      author: comment.author,
      comment: comment.comment,
      date: comment.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      reply: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].TextArea, {
        onChange: handleChange,
        value: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: submitCommentLine,
        content: "Add Reply",
        labelPosition: "left",
        icon: "edit",
        primary: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Comments, "gXC6kialsTz4WuGvV0PPlA8c/lI=", false, function () {
  return [_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__["useUserContext"]];
});

_c = Comments;

var _c;

__webpack_require__.$Refresh$.register(_c, "Comments");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DetailedProgress/index.js":
/*!**************************************************!*\
  !*** ./src/components/DetailedProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_OutlineDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/OutlineDropdown */ "./src/components/OutlineDropdown/index.js");
/* harmony import */ var components_DropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/DropDown */ "./src/components/DropDown.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/Heading5 */ "./node_modules/@material-tailwind/react/Heading5.js");
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_tailwind_react_Paragraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/Paragraph */ "./node_modules/@material-tailwind/react/Paragraph.js");
/* harmony import */ var _material_tailwind_react_Paragraph__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Paragraph__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_tailwind_react_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-tailwind/react/Tab */ "./node_modules/@material-tailwind/react/Tab.js");
/* harmony import */ var _material_tailwind_react_Tab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Tab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_tailwind_react_TabList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-tailwind/react/TabList */ "./node_modules/@material-tailwind/react/TabList.js");
/* harmony import */ var _material_tailwind_react_TabList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_TabList__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-tailwind/react/TabItem */ "./node_modules/@material-tailwind/react/TabItem.js");
/* harmony import */ var _material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_tailwind_react_TabContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-tailwind/react/TabContent */ "./node_modules/@material-tailwind/react/TabContent.js");
/* harmony import */ var _material_tailwind_react_TabContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_TabContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-tailwind/react/TabPane */ "./node_modules/@material-tailwind/react/TabPane.js");
/* harmony import */ var _material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/DetailedProgress/index.js",
    _s = __webpack_require__.$Refresh$.signature();

/*
take in student data

Display Quizzes, Workshops, Recaps, Reflections, and Feedback separated into week view
Dropdown to switch week
*/















const viewOptions = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'];

const DetailedProgress = ({
  student
}) => {
  _s();

  const [week, setWeek] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [openTab, setOpenTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  console.log(student);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabList__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "lightBlue",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: e => {
          e.preventDefault();
          setOpenTab(1);
        },
        ripple: "light",
        active: openTab === 1 ? true : false,
        href: "tabItem",
        children: "Recap Task"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: e => {
          e.preventDefault();
          setOpenTab(2);
        },
        ripple: "light",
        active: openTab === 2 ? true : false,
        href: "tabItem",
        children: "Workshops"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: e => {
          e.preventDefault();
          setOpenTab(3);
        },
        ripple: "light",
        active: openTab === 3 ? true : false,
        href: "tabItem",
        children: "Quizzes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: e => {
          e.preventDefault();
          setOpenTab(4);
        },
        ripple: "light",
        active: openTab === 4 ? true : false,
        href: "tabItem",
        children: "Feedback"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: e => {
          e.preventDefault();
          setOpenTab(5);
        },
        ripple: "light",
        active: openTab === 5 ? true : false,
        href: "tabItem",
        children: "Reflections"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(components_OutlineDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: week,
      state: week,
      setState: setWeek,
      options: viewOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12___default.a, {
        active: openTab === 1 ? true : false,
        children: "Hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12___default.a, {
        active: openTab === 2 ? true : false,
        children: "Workshops"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12___default.a, {
        active: openTab === 3 ? true : false,
        children: "Quizzes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12___default.a, {
        active: openTab === 4 ? true : false,
        children: ["Feedback", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: "Monday"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: "Tuesday"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: "Wednesday"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: "Thursday"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: "Friday"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_material_tailwind_react_TabPane__WEBPACK_IMPORTED_MODULE_12___default.a, {
        active: openTab === 5 ? true : false,
        children: "Reflections"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

_s(DetailedProgress, "nxZP9NjSUFSlV0ZwQ3dG2rzQXcE=");

_c = DetailedProgress;
/* harmony default export */ __webpack_exports__["default"] = (DetailedProgress);

var _c;

__webpack_require__.$Refresh$.register(_c, "DetailedProgress");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Doughnut/index.js":
/*!******************************************!*\
  !*** ./src/components/Doughnut/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Doughnut; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/Doughnut/index.js",
    _s = __webpack_require__.$Refresh$.signature();








function Doughnut({
  options,
  dataset,
  width,
  height
}) {
  _s();

  console.log("dataset: ", dataset);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const config = {
      type: "doughnut",
      data: dataset,
      options: options
    };
    let ctx = document.getElementById("donut-chart").getContext("2d");
    window.myDoughnut = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, config);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "min-w-150 min-h-200",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_4___default.a, {
      color: "red",
      contentPosition: "left",
      className: "-h-10",
      style: {
        height: "10px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h6", {
            className: "uppercase text-gray-200 text-xs font-medium ",
            children: "Placeholder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
            className: "text-white text-2xl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: `${width} ${height} relative `,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("canvas", {
          className: "h-max w-max",
          id: "donut-chart"
        }, react_uuid__WEBPACK_IMPORTED_MODULE_2___default()(), false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, react_uuid__WEBPACK_IMPORTED_MODULE_2___default()(), true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Doughnut, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Doughnut;

var _c;

__webpack_require__.$Refresh$.register(_c, "Doughnut");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DropDown.js":
/*!************************************!*\
  !*** ./src/components/DropDown.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/index.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/index.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/DropDown.js";








function DropDown({
  state,
  setState,
  label,
  itemOptions,
  width
}) {
  const handleChange = event => {
    console.log(label, ": ", event.target.value);
    setState(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fullWidth: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "demo-simple-select-label",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        value: state,
        label: label,
        onChange: handleChange,
        children: itemOptions.map((data, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
            value: index,
            children: itemOptions[index]
          }, react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(), false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = DropDown;
/* harmony default export */ __webpack_exports__["default"] = (DropDown);

var _c;

__webpack_require__.$Refresh$.register(_c, "DropDown");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Edit Profile/index.js":
/*!**********************************************!*\
  !*** ./src/components/Edit Profile/index.js ***!
  \**********************************************/
/*! exports provided: CardProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProfile", function() { return CardProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/Edit Profile/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/Edit Profile/index.js",
    _s = __webpack_require__.$Refresh$.signature();






const ImgUpload = ({
  onChange,
  src
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
  htmlFor: "photo-upload",
  className: "custom-file-upload fas",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "img-wrap img-upload",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      for: "photo-upload",
      src: src
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
    id: "photo-upload",
    type: "file",
    onChange: onChange
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

_c = ImgUpload;

const Name = ({
  onChange,
  value
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "field",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
    htmlFor: "name",
    children: "name:"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
    id: "name",
    type: "text",
    onChange: onChange,
    maxlength: "25",
    value: value,
    placeholder: "Name",
    required: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 3
}, undefined);

_c2 = Name;

const Region = ({
  onChange,
  value
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "field",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
    htmlFor: "status",
    children: "region:"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
    id: "status",
    type: "text",
    onChange: onChange,
    maxLength: "35",
    value: value,
    placeholder: "Region",
    required: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 30,
  columnNumber: 3
}, undefined);

_c3 = Region;

const Watchlist = ({
  onChange,
  value
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "field",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
    htmlFor: "watchlist",
    children: "watchlist:"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
    id: "watchlist",
    type: "text",
    onChange: onChange,
    maxLength: "35",
    value: value,
    placeholder: "Watchlist",
    required: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 45,
  columnNumber: 3
}, undefined);

_c4 = Watchlist;

const Profile = ({
  onSubmit,
  src,
  name,
  region,
  watchlist
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "card",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
    onSubmit: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "Profile Card"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
      className: "custom-file-upload fas",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "img-wrap",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          for: "photo-upload",
          src: src
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "name",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "region",
      children: region
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "watchlist",
      children: watchlist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      type: "submit",
      className: "edit",
      children: ["Edit Profile", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 60,
  columnNumber: 3
}, undefined);

_c5 = Profile;

const Edit = ({
  onSubmit,
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "card",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
    onSubmit: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "User Settings"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      type: "submit",
      className: "save",
      children: ["Save", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 79,
  columnNumber: 3
}, undefined);

_c6 = Edit;

function CardProfile(props) {
  _s();

  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [files, setFiles] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [previewImage, setPreviewImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("https://thumbs.dreamstime.com/b/user-icon-human-person-symbol-avatar-login-sign-vector-illustration-isolated-modern-background-user-icon-human-person-symbol-118096858.jpg");
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); //   const [status, setStatus] = useState("");

  const [active, setActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("edit");
  const [region, setRegion] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [watchlist, setWatchlist] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setFiles({
        files: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  const editName = e => {
    const name = e.target.value;
    setName(name);
  };

  const editRegion = e => {
    const status = e.target.value;
    setRegion(status);
  };

  const editWatchlist = e => {
    const watchlist = e.target.value;
    setWatchlist(watchlist);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let activeP = state.active === "edit" ? "profile" : "edit";
    setActive({
      activeP
    });
  }; //   useEffect(() => {
  //     async function getData() {
  //       const response = await fetch("http://localhost:3000/records", {
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       const data = await response.json();
  //       return data.payload;
  //     }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: active === "edit" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Edit, {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ImgUpload, {
        onChange: photoUpload,
        src: previewImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Name, {
        onChange: editName,
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Region, {
        onChange: editRegion,
        value: region
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Watchlist, {
        onChange: editWatchlist,
        value: watchlist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Profile, {
      onSubmit: handleSubmit,
      src: previewImage,
      name: name,
      region: region,
      watchlist: watchlist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 5
  }, this);
}

_s(CardProfile, "QMFmOZcxwPZac9E0kRb0Km60V4s=");

_c7 = CardProfile;


var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "ImgUpload");
__webpack_require__.$Refresh$.register(_c2, "Name");
__webpack_require__.$Refresh$.register(_c3, "Region");
__webpack_require__.$Refresh$.register(_c4, "Watchlist");
__webpack_require__.$Refresh$.register(_c5, "Profile");
__webpack_require__.$Refresh$.register(_c6, "Edit");
__webpack_require__.$Refresh$.register(_c7, "CardProfile");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Edit Profile/style.css":
/*!***********************************************!*\
  !*** ./src/components/Edit Profile/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Edit Profile/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Edit Profile/style.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Edit Profile/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/Footer.js";

function footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-gray-700 mb-6 lg:mb-0",
      children: ["Copyright \xA9 ", new Date().getFullYear(), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://www.creative-tim.com?ref=mtdk",
        target: "_blank",
        rel: "noreferrer",
        className: "text-light-blue-500 hover:text-light-blue-700",
        children: "Creative Tim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list-unstyled flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-gray-700 hover:text-gray-900 font-medium block text-sm",
          target: "_blank",
          rel: "noreferrer",
          href: "https://www.creative-tim.com/presentation?ref=mtdk",
          children: "About Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-gray-700 hover:text-gray-900 font-medium block text-sm",
          target: "_blank",
          rel: "noreferrer",
          href: "https://www.creative-tim.com/blog/?ref=mtdk",
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-gray-700 hover:text-gray-900 font-medium block text-sm",
          target: "_blank",
          rel: "noreferrer",
          href: "https://github.com/creativetimofficial/material-tailwind-dashboard-react/blob/main/LICENSE?ref=mtdk",
          children: "MIT License"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-gray-700 hover:text-gray-900 font-medium block text-sm",
          target: "_blank",
          rel: "noreferrer",
          href: "https://creative-tim.com/contact-us?ref=mtdk",
          children: "Contact Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/IndividualComment/index.js":
/*!***************************************************!*\
  !*** ./src/components/IndividualComment/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/IndividualComment/index.js";



const IndividualComment = ({
  imageUrl,
  author,
  comment,
  date
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Comment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Comment"].Avatar, {
      src: imageUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Comment"].Content, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Comment"].Author, {
        as: "a",
        children: author
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Comment"].Metadata, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Comment"].Text, {
        children: comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = IndividualComment;
/* harmony default export */ __webpack_exports__["default"] = (IndividualComment);

var _c;

__webpack_require__.$Refresh$.register(_c, "IndividualComment");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/InputField/index.js":
/*!********************************************!*\
  !*** ./src/components/InputField/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Input */ "./node_modules/@material-tailwind/react/Input.js");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/InputField/index.js";



function InputField({
  placeholder
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "text",
    color: "lightBlue",
    size: "lg",
    outline: true,
    placeholder: placeholder
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = InputField;

var _c;

__webpack_require__.$Refresh$.register(_c, "InputField");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Loading/Loading.js":
/*!*******************************************!*\
  !*** ./src/components/Loading/Loading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_modules_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.modules.css */ "./src/components/Loading/index.modules.css");
/* harmony import */ var _index_modules_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_modules_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/Loading/Loading.js";




function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "h-screen flex justify-center items-center align-center text-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "loading",
      className: _index_modules_css__WEBPACK_IMPORTED_MODULE_1___default.a,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Fetching Data!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "lds-facebook",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

__webpack_require__.$Refresh$.register(_c, "Loading");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Loading/index.modules.css":
/*!**************************************************!*\
  !*** ./src/components/Loading/index.modules.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.modules.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/index.modules.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.modules.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/index.modules.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.modules.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/index.modules.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Logo/index.js":
/*!**************************************!*\
  !*** ./src/components/Logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var _assets_img_Demeter_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/Demeter (1).png */ "./src/assets/img/Demeter (1).png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/Logo/index.js";


function Logo() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "logo",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: _assets_img_Demeter_1_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      alt: "demeter-logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = Logo;

var _c;

__webpack_require__.$Refresh$.register(_c, "Logo");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MessageNotification/index.js":
/*!*****************************************************!*\
  !*** ./src/components/MessageNotification/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageNotification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/MessageNotification/index.js",
    _s = __webpack_require__.$Refresh$.signature();




function MessageNotification({
  content
}) {
  _s();

  const [visible, setVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (visible) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      onDismiss: handleDismiss,
      header: "Welcome back!",
      content: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, this);
} // import React, { Component } from "react";
// import { Message } from "semantic-ui-react";
// class MessageExampleDismissibleBlock extends Component {
//   state = { visible: true };
//   handleDismiss = () => {
//     this.setState({ visible: false });
//     setTimeout(() => {
//       this.setState({ visible: true });
//     }, 2000);
//   };
//   render() {
//     if (this.state.visible) {
//       return (
//         <Message
//           onDismiss={this.handleDismiss}
//           header="Welcome back!"
//           content="This is a special notification which you can dismiss."
//         />
//       );
//     }
//     return (
//       <p>
//         <br />
//         <i>The message will return in 2s</i>
//         <br />
//         <br />
//       </p>
//     );
//   }
// }
// export default MessageExampleDismissibleBlock;

_s(MessageNotification, "p/lRV+JGew4KJq1vCTMMXt6g6IM=");

_c = MessageNotification;

var _c;

__webpack_require__.$Refresh$.register(_c, "MessageNotification");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NameSelection/index.js":
/*!***********************************************!*\
  !*** ./src/components/NameSelection/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NameSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Dropdown */ "./node_modules/@material-tailwind/react/Dropdown.js");
/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/DropdownItem */ "./node_modules/@material-tailwind/react/DropdownItem.js");
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_DropdownLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/DropdownLink */ "./node_modules/@material-tailwind/react/DropdownLink.js");
/* harmony import */ var _material_tailwind_react_DropdownLink__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_DropdownLink__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/NameSelection/index.js";






function NameSelection({
  names = ["mohit", "lizard", "james", "juweyriya"],
  setBootcamp
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    color: "lightBlue",
    placement: "bottom-start",
    buttonText: "Student List",
    buttonType: "filled",
    size: "lg",
    rounded: false,
    block: true,
    ripple: "light",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_DropdownLink__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      ripple: "light",
      onClick: e => e.preventDefault()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), names.map(name => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
        ripple: "light",
        color: "lightBlue",
        value: name,
        children: name
      }, Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = NameSelection;

var _c;

__webpack_require__.$Refresh$.register(_c, "NameSelection");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/OutlineDropdown/index.js":
/*!*************************************************!*\
  !*** ./src/components/OutlineDropdown/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react/Dropdown */ "./node_modules/@material-tailwind/react/Dropdown.js");
/* harmony import */ var _material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/DropdownItem */ "./node_modules/@material-tailwind/react/DropdownItem.js");
/* harmony import */ var _material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_DropdownLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/DropdownLink */ "./node_modules/@material-tailwind/react/DropdownLink.js");
/* harmony import */ var _material_tailwind_react_DropdownLink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_DropdownLink__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/OutlineDropdown/index.js",
    _s = __webpack_require__.$Refresh$.signature();








const OutlineDropdown = ({
  state,
  setState,
  text,
  options
}) => {
  _s();

  const [label, setLabel] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(text);

  const handleChange = event => {
    setLabel(event.target.innerText);
    setState(event.target.innerText);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Dropdown__WEBPACK_IMPORTED_MODULE_0___default.a, {
    color: "lightBlue",
    placement: "bottom-start",
    buttonText: label,
    buttonType: "outline",
    size: "regular",
    rounded: false,
    block: false,
    ripple: "dark",
    children: options.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_DropdownItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "lightBlue",
      ripple: "light",
      onClick: handleChange,
      children: option
    }, react_uuid__WEBPACK_IMPORTED_MODULE_4___default()(), false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_s(OutlineDropdown, "f+DcVUpaP8i0c88dbCkU88uU6xk=");

_c = OutlineDropdown;
/* harmony default export */ __webpack_exports__["default"] = (OutlineDropdown);

var _c;

__webpack_require__.$Refresh$.register(_c, "OutlineDropdown");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/PageVisitsCard.js":
/*!******************************************!*\
  !*** ./src/components/PageVisitsCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageVisitsCard; });
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/PageVisitsCard.js";





function PageVisitsCard() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "blue",
      contentPosition: "none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "w-full flex items-center justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
          className: "text-white text-2xl",
          children: "Page Visits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          style: {
            padding: 0
          },
          children: "See More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("table", {
          className: "items-center w-full bg-transparent border-collapse",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Salary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Country"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tbody", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Dakota Rice"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "$36,738"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Niger"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Minerva Hooper"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "$23,789"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Cura\xE7ao"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Sage Rodriguez"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "$56,142"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Netherlands"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Philip Chaney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "$38,735"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Korea, South"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
_c = PageVisitsCard;

var _c;

__webpack_require__.$Refresh$.register(_c, "PageVisitsCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SearchByName/index.js":
/*!**********************************************!*\
  !*** ./src/components/SearchByName/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Input */ "./node_modules/@material-tailwind/react/Input.js");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/SearchByName/index.js",
    _s = __webpack_require__.$Refresh$.signature();






const SearchByName = ({
  handleSubmit
}) => {
  _s();

  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const submit = () => {
    handleSubmit(search);
    setSearch('');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
    className: "col-span-full",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_2___default.a, {
      placeholder: "Student Name",
      value: search,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: submit,
      children: "Search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

_s(SearchByName, "xMSft3/sbCidYXUzqinUsZIh+qY=");

_c = SearchByName;
/* harmony default export */ __webpack_exports__["default"] = (SearchByName);

var _c;

__webpack_require__.$Refresh$.register(_c, "SearchByName");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SettingsForm.js":
/*!****************************************!*\
  !*** ./src/components/SettingsForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsForm; });
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Input */ "./node_modules/@material-tailwind/react/Input.js");
/* harmony import */ var _material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Textarea */ "./node_modules/@material-tailwind/react/Textarea.js");
/* harmony import */ var _material_tailwind_react_Textarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Textarea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/SettingsForm.js";







function SettingsForm() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "purple",
      contentPosition: "none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "w-full flex items-center justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          className: "text-white text-2xl",
          children: "My Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          style: {
            padding: 0
          },
          children: "Settings"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h6", {
          className: "text-purple-500 text-sm mt-3 mb-6 font-light uppercase",
          children: "User Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "flex flex-wrap mt-10",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-6/12 pr-4 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "text",
              color: "purple",
              placeholder: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-6/12 pl-4 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "email",
              color: "purple",
              placeholder: "Email Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-6/12 pr-4 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "text",
              color: "purple",
              placeholder: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-6/12 pl-4 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "email",
              color: "purple",
              placeholder: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h6", {
          className: "text-purple-500 text-sm my-6 font-light uppercase",
          children: "Contact Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "flex flex-wrap mt-10",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-12/12 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "text",
              color: "purple",
              placeholder: "Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-4/12 pr-4 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "text",
              color: "purple",
              placeholder: "City"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-4/12 px-4 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "text",
              color: "purple",
              placeholder: "Country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "w-full lg:w-4/12 pl-4 mb-10 font-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "text",
              color: "purple",
              placeholder: "Postal Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h6", {
          className: "text-purple-500 text-sm my-6 font-light uppercase",
          children: "About Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "flex flex-wrap mt-10 font-light",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Textarea__WEBPACK_IMPORTED_MODULE_5___default.a, {
            color: "purple",
            placeholder: "About Me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
_c = SettingsForm;

var _c;

__webpack_require__.$Refresh$.register(_c, "SettingsForm");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sidebar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _AdminNavbar_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AdminNavbar/index */ "./src/components/AdminNavbar/index.js");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Icon */ "./node_modules/@material-tailwind/react/Icon.js");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Heading6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Heading6 */ "./node_modules/@material-tailwind/react/Heading6.js");
/* harmony import */ var _material_tailwind_react_Heading6__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Heading6__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/Sidebar/index.js",
    _s = __webpack_require__.$Refresh$.signature();









function Sidebar() {
  _s();

  const [showSidebar, setShowSidebar] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("-left-64");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_AdminNavbar_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      showSidebar: showSidebar,
      setShowSidebar: setShowSidebar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: `h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "flex-col items-stretch min-h-full flex-nowrap px-0 relative",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          href: "https://material-tailwind.com?ref=mtd",
          target: "_blank",
          rel: "noreferrer",
          className: "mt-2 text-center w-full inline-block",
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
            className: "my-4 min-w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
            className: "flex-col min-w-full flex list-none",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "rounded-lg mb-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                to: "/",
                exact: true,
                className: "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg",
                activeClassName: "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  name: "dashboard",
                  size: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, this), "Dashboard"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "rounded-lg mb-2 ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                to: "/tables",
                className: "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg",
                activeClassName: "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  name: "toc",
                  size: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, this), "Cohort View"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "rounded-lg mb-2 text-gray-700",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                to: "/student",
                className: "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg",
                activeClassName: "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  name: "map",
                  size: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, this), "Individual Student View"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "rounded-lg mb-2 text-gray-700",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                to: "/upload",
                className: "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg",
                activeClassName: "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  name: "upload",
                  size: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, this), "File Upload"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "rounded-lg mb-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                to: "/settings",
                className: "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg",
                activeClassName: "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  name: "settings",
                  size: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this), "Settings"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Sidebar, "jQRH9lPvI5a3WTMfmmiOYVAvhjY=");

_c = Sidebar;

var _c;

__webpack_require__.$Refresh$.register(_c, "Sidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/StatusCard.js":
/*!**************************************!*\
  !*** ./src/components/StatusCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusCard; });
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_CardRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/CardRow */ "./node_modules/@material-tailwind/react/CardRow.js");
/* harmony import */ var _material_tailwind_react_CardRow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardRow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_CardStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/CardStatus */ "./node_modules/@material-tailwind/react/CardStatus.js");
/* harmony import */ var _material_tailwind_react_CardStatus__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardStatus__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardStatusFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardStatusFooter */ "./node_modules/@material-tailwind/react/CardStatusFooter.js");
/* harmony import */ var _material_tailwind_react_CardStatusFooter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardStatusFooter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Icon */ "./node_modules/@material-tailwind/react/Icon.js");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/StatusCard.js";







function StatusCard({
  color,
  icon,
  title,
  amount,
  percentage,
  percentageColor,
  percentageIcon,
  date
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "px-4 mb-10",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardRow__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_2___default.a, {
          color: color,
          iconOnly: true,
          className: "mb-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
            name: icon,
            size: "3xl",
            color: "white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardStatus__WEBPACK_IMPORTED_MODULE_3___default.a, {
          title: title,
          amount: amount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_CardStatusFooter__WEBPACK_IMPORTED_MODULE_4___default.a, {
        amount: percentage,
        color: percentageColor,
        date: date,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          color: percentageColor,
          name: percentageIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}
_c = StatusCard;

var _c;

__webpack_require__.$Refresh$.register(_c, "StatusCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/StudentProfile/index.js":
/*!************************************************!*\
  !*** ./src/components/StudentProfile/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentProfile; });
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Image */ "./node_modules/@material-tailwind/react/Image.js");
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_LeadText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/LeadText */ "./node_modules/@material-tailwind/react/LeadText.js");
/* harmony import */ var _material_tailwind_react_LeadText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_LeadText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/StudentProfile/index.js";






function StudentProfile({
  student
}) {
  const {
    name,
    avatar,
    email,
    bootcampId
  } = student;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: avatar,
        rounded: true,
        alt: `Avatar for ${name}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_tailwind_react_LeadText__WEBPACK_IMPORTED_MODULE_3___default.a, {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("b", {
              children: "Bootcamp: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), " ", bootcampId]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("b", {
              children: "Email: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this), email]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = StudentProfile;

var _c;

__webpack_require__.$Refresh$.register(_c, "StudentProfile");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/TableCard.js":
/*!*************************************!*\
  !*** ./src/components/TableCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/Image */ "./node_modules/@material-tailwind/react/Image.js");
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/NavbarInput */ "./node_modules/@material-tailwind/react/NavbarInput.js");
/* harmony import */ var _material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropDown */ "./src/components/DropDown.js");
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducer.js */ "./src/reducer.js");
/* harmony import */ var _lib_tableData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/tableData */ "./src/lib/tableData.js");
/* harmony import */ var functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! functions */ "./src/functions/index.js");
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../dummyData */ "./src/dummyData.js");
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_dummyData__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/TableCard.js",
    _s = __webpack_require__.$Refresh$.signature();














console.log(_lib_tableData__WEBPACK_IMPORTED_MODULE_9__["dataSet"]);
function CardTable() {
  _s();

  // const [state, dispatch] = useReducer(reducer, dataSet);
  const [filter, setFilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1); // heading state, isASC state

  const [heading, setHeading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("name");
  const [isASC, setIsASC] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // searchInput value state

  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // {
  //   id: student.info.id,
  //   name: student.info.name,
  //   avatar: student.info.avatar,
  //   bootcampID: bootcamp.id,
  //   bootcampRegion: bootcamp.region,
  //   trendRating: "placeholder",
  //   recapTasks: recapTasks,
  //   workshopTasks: workshopTasks,
  //   avgQuiz: avgQuiz,
  //   avgMood: avgMood,
  // };

  const sortFunc = (heading, isASC) => (a, b) => {
    if (typeof a[heading] === "string" || a[heading] instanceof String) {
      let nameA = a[heading].toUpperCase(); // ignore upper and lowercase

      let nameB = b[heading].toUpperCase(); // ignore upper and lowercase

      return isASC ? nameA < nameB ? -1 : nameA > nameB ? 1 : 0 : nameB < nameA ? -1 : nameB > nameA ? 1 : 0;
    } else {
      return isASC ? a[heading] - b[heading] : b[heading] - a[heading];
    }
  };

  const tableHeaders = [{
    display: "Bootcamper",
    id: "name"
  }, {
    display: "Bootcamp",
    id: "bootcampID"
  }, {
    display: "Trend",
    id: "-"
  }, {
    display: "Recap Tasks",
    id: "recapTasks"
  }, {
    display: "Workshops",
    id: "workshopOverallAvgScore"
  }, {
    display: "Quiz Avg %",
    id: "avgQuiz"
  }, {
    display: "Mood Avg /5",
    id: "avgMood"
  }];
  const viewOptions = ["All Students", ..._dummyData__WEBPACK_IMPORTED_MODULE_11___default.a.map(bootcamp => "Bootcamp " + bootcamp.id), ..._dummyData__WEBPACK_IMPORTED_MODULE_11___default.a.map(bootcamp => bootcamp.region)];

  function toggleSort(e) {
    setHeading(e);
    setIsASC(!isASC);
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "purple",
      contentPosition: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "flex ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "mr-10",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
            className: "text-white text-2xl",
            children: "Cohort Table"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_DropDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "",
          state: filter,
          setState: setFilter,
          label: "Filter By",
          itemOptions: viewOptions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "-mr-4 ml-6 h-20 p-23",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_tailwind_react_NavbarInput__WEBPACK_IMPORTED_MODULE_6___default.a, {
            onChange: handleChange,
            placeholder: "Search",
            style: {
              height: "20px",
              padding: "24px",
              justifyContent: "center",
              paddingLeft: "0px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("table", {
          className: "items-center w-full bg-transparent border-collapse",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("tr", {
              children: tableHeaders.map(header => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("th", {
                  className: "w-min px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                    onClick: () => toggleSort(header.id),
                    children: [header.display, header.id === heading ? isASC ? " ⬆︎" : " ⇩" : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 23
                  }, this)
                }, react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("tbody", {
            children: _lib_tableData__WEBPACK_IMPORTED_MODULE_9__["dataSet"].filter(data => search.length > 0 ? data.name.toUpperCase().includes(search.toUpperCase()) : data[_lib_tableData__WEBPACK_IMPORTED_MODULE_9__["filterOptions"][filter]] === _lib_tableData__WEBPACK_IMPORTED_MODULE_9__["filtationMethod"][filter]).sort(sortFunc(heading, isASC)).map(student => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("tr", {
                className: "border-b border-gray-200",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("td", {
                  className: "flex align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left items-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-full border-2 border-white ",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      src: student.avatar,
                      rounded: true,
                      alt: "student avatar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                    className: "font-light text-sm whitespace-nowrap px-2 py-4 pl-3 text-left ",
                    children: [" ", student.name]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("td", {
                  className: "font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                  children: [student.bootcampID, " : ", student.bootcampRegion]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("td", {
                  className: "font-light text-sm whitespace-nowrap px-2 py-4 text-left ",
                  children: "placeholder"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("td", {
                  className: "font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "flex content-evenly space-evenly items-evenly justify-evenly",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "bg-green-500 px-1 w-6 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                        children: student.recapTasks.green || 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "bg-orange-500 px-1 w-6 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                        children: student.recapTasks.amber || 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "bg-red-500 px-1 w-6 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                        children: student.recapTasks.red || 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("td", {
                  className: "font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    className: "flex content-evenly space-evenly items-evenly justify-evenly",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "bg-green-500 px-1 w-6 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                        children: student.workshopTasks.green || 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "bg-orange-500 px-1 w-6 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                        children: student.workshopTasks.amber || 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                      className: "bg-red-500 px-1 w-6 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                        children: student.workshopTasks.red || 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("td", {
                  className: "font-light text-sm whitespace-nowrap px-2 py-4 text-left ",
                  children: student.avgQuiz
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("td", {
                  className: "font-light text-sm whitespace-nowrap px-2 py-4 text-left ",
                  children: student.avgMood
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 23
                }, this)]
              }, react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(), true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 21
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

_s(CardTable, "CktXOBm+5YRWgkbB7QApzPzYWb0=");

_c = CardTable;

var _c;

__webpack_require__.$Refresh$.register(_c, "CardTable");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/TrafficCard.js":
/*!***************************************!*\
  !*** ./src/components/TrafficCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrafficCard; });
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_Progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/Progress */ "./node_modules/@material-tailwind/react/Progress.js");
/* harmony import */ var _material_tailwind_react_Progress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Progress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/TrafficCard.js";






function TrafficCard() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "purple",
      contentPosition: "none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "w-full flex items-center justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
          className: "text-white text-2xl",
          children: "Social Media"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          style: {
            padding: 0
          },
          children: "See More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("table", {
          className: "items-center w-full bg-transparent border-collapse",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("thead", {
            className: "thead-light",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                className: "px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Referral"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                className: "px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Visitors"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                className: "px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tbody", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "1,480"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Progress__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  color: "blue",
                  value: "60"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Google"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "4,807"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Progress__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  color: "red",
                  value: "80"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "3,678"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Progress__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  color: "indigo",
                  value: "75"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "2,645"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_tailwind_react_Progress__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  color: "lightBlue",
                  value: "90"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = TrafficCard;

var _c;

__webpack_require__.$Refresh$.register(_c, "TrafficCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/UploadBox/index.js":
/*!*******************************************!*\
  !*** ./src/components/UploadBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSVReader2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-papaparse */ "./node_modules/react-papaparse/dist/react-papaparse.es.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Card */ "./node_modules/@material-tailwind/react/Card.js");
/* harmony import */ var _material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/CardHeader */ "./node_modules/@material-tailwind/react/CardHeader.js");
/* harmony import */ var _material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-tailwind/react/CardBody */ "./node_modules/@material-tailwind/react/CardBody.js");
/* harmony import */ var _material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-tailwind/react/CardFooter */ "./node_modules/@material-tailwind/react/CardFooter.js");
/* harmony import */ var _material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-tailwind/react/InputIcon */ "./node_modules/@material-tailwind/react/InputIcon.js");
/* harmony import */ var _material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_InputIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-tailwind/react/Heading5 */ "./node_modules/@material-tailwind/react/Heading5.js");
/* harmony import */ var _material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Heading5__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/components/UploadBox/index.js";










class CSVReader2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.postcsv = async data => {
      const response = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const backData = await response.json();
      console.log("POST: ", backData);
    };

    this.handleOnDrop = data => {
      console.log("---------------------------"); // This is the successful data

      console.log(data);
      console.log("---------------------------");
      this.postcsv(data);
    };

    this.handleOnError = (err, file, inputElem, reason) => {
      console.log(err);
    };

    this.handleOnRemoveFile = data => {
      console.log("---------------------------");
      console.log(data);
      console.log("---------------------------");
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      style: {
        marginLeft: this.props.ml,
        marginRight: this.props.mr
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_tailwind_react_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mx-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_tailwind_react_CardHeader__WEBPACK_IMPORTED_MODULE_3___default.a, {
          color: this.props.headerColor,
          size: "lg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
            className: "text-white text-2xl",
            children: this.props.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_tailwind_react_CardBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: "-py-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            style: {
              textAlign: "left"
            },
            className: "mt-4 mb-8 px-4 ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_papaparse__WEBPACK_IMPORTED_MODULE_1__["CSVReader"], {
              onDrop: this.handleOnDrop,
              onError: this.handleOnError,
              addRemoveButton: true,
              onRemoveFile: this.handleOnRemoveFile,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                children: "Drop CSV file here or click to upload."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_tailwind_react_CardFooter__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
              color: "lightBlue",
              buttonType: "link",
              size: "m",
              ripple: "dark",
              children: "See expected structure..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this);
  }

} // import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// const Input = styled("input")({
//   display: "none",
// });
// export default function UploadButton() {
//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <label htmlFor="contained-button-file">
//         <Input
//           accept="image/*"
//           id="contained-button-file"
//           multiple
//           type="file"
//         />
//         <Button variant="contained" component="span">
//           Upload
//         </Button>
//       </label>
//       <label htmlFor="icon-button-file">
//         <Input accept="image/*" id="icon-button-file" type="file" />
//         <IconButton
//           color="primary"
//           aria-label="upload picture"
//           component="span"
//         ></IconButton>
//       </label>
//     </Stack>
//   );
// }

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/contexts/UserContext.js":
/*!*************************************!*\
  !*** ./src/contexts/UserContext.js ***!
  \*************************************/
/*! exports provided: UserProvider, useUserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return UserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserContext", function() { return useUserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/contexts/UserContext.js",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();



const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(); // export your provider component

const UserProvider = ({
  children
}) => {
  _s();

  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    imageUrl: 'https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg',
    name: 'Test User'
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserContext.Provider, {
    value: user,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
}; // export your consumer hook

_s(UserProvider, "Yc9PsjndNLBd5CnWe3PXx6zPJfM=");

_c = UserProvider;
const useUserContext = () => {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(UserContext);
};

_s2(useUserContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

__webpack_require__.$Refresh$.register(_c, "UserProvider");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/dummyData.js":
/*!**************************!*\
  !*** ./src/dummyData.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const faker = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");

function genDate(day) {
  let date = new Date();
  date.setDate(date.getDate() + day - 154);
  return date.toISOString().split("T")[0].replace("/", "-");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
} // array of 12x5 subject list
// array of 12 recap task titles
// array of
// an incremental multplier through each bootcamp


const SoC_EXAMPLE1 = {
  cohort1: [{
    info: {
      id: 1,
      name: "bootcamp1",
      region: "West-Midlands",
      startDate: "12-05-21"
    },
    students: [{
      info: {
        name: "James Perrett",
        username: "PerrettJ4",
        avatar: "./../images/legend"
      },
      work: {
        recapTasks: [[{
          title: "basic javascript",
          score: "amber"
        }, {
          title: "array methods",
          score: "green"
        }, {
          title: "basic javascript",
          score: "amber"
        }, {
          title: "array methods",
          score: "green"
        }, {
          title: "array methods",
          score: "green"
        }], [{
          title: "basic javascript",
          score: "amber"
        }, {
          title: "array methods",
          score: "green"
        }, {
          title: "basic javascript",
          score: "amber"
        }, {
          title: "array methods",
          score: "green"
        }, {
          title: "array methods",
          score: "green"
        }]],
        workshops: [[{
          title: "objects and classes",
          score: "amber"
        }, {
          title: "objects",
          score: "green"
        }]],
        quiz: [{
          title: "array methods",
          score: "amber"
        }, {
          title: "logic",
          score: "green"
        }]
      }
    }]
  }],
  cohort2: {}
};
const SoC_EXAMPLE2 = {
  cohort1: [{
    info: {
      name: "bootcamp1",
      region: "West-Midlands",
      startDate: "12-05-21"
    },
    students: [{
      info: {
        name: "James Perrett",
        username: "PerrettJ4"
      },
      work: [[{
        week: 1,
        day: 1,
        recapTasks: {
          title: "basic javascript",
          score: "amber"
        },
        workshops: [{
          title: "objects and classes",
          score: "amber"
        }],
        quiz: {
          title: "array methods",
          score: "5/12"
        },
        didAttend: true,
        feedback: {
          morning: {
            experienceRating: 4,
            comment: "skkkkkkr"
          },
          afternoon: {
            experienceRating: 3,
            comment: "skkraaap"
          }
        }
      }, {
        recapTasks: {},
        workshops: [{}],
        quiz: {},
        didAttend: false,
        feedback: {
          morning: {
            experienceRating: null,
            comment: null
          },
          afternoon: {
            experienceRating: null,
            comment: null
          }
        }
      }, {
        recapTasks: {},
        workshops: [{
          title: "objects and classes",
          score: "amber"
        }],
        quiz: {
          title: "array methods",
          score: "5/12"
        },
        didAttend: true,
        feedback: {
          morning: {
            experienceRating: 4,
            comment: "skkkkkkkkreesh"
          },
          afternoon: {
            experienceRating: 4,
            comment: "skkkkraap"
          }
        }
      }, {
        recapTasks: {},
        workshops: [{}],
        quiz: {},
        didAttend: false,
        feedback: {
          morning: {
            experienceRating: null,
            comment: null
          },
          afternoon: {
            experienceRating: null,
            comment: null
          }
        }
      }, {
        recapTasks: {
          title: "basic javascript",
          score: "amber"
        },
        workshops: [{
          title: "objects and classes",
          score: "amber"
        }],
        quiz: {
          title: "array methods",
          score: "5/12"
        },
        didAttend: true,
        feedback: {
          morning: {
            experienceRating: 4,
            comment: "skkkkkkkkreesh"
          },
          afternoon: {
            experienceRating: 4,
            comment: "shheeesh"
          }
        }
      }], [{
        recapTasks: {
          title: "basic javascript",
          score: "amber"
        },
        workshops: {
          title: "objects and classes",
          score: "amber"
        },
        quiz: {
          title: "array methods",
          score: "5/12"
        },
        didAttend: true,
        feedback: {
          morning: {
            experienceRating: 4,
            comment: "skkkkkkr"
          },
          afternoon: {
            experienceRating: 3,
            comment: "skkraaap"
          }
        }
      }, {
        recapTasks: {},
        workshops: {},
        quiz: {},
        didAttend: false,
        feedback: {
          morning: {
            experienceRating: null,
            comment: null
          },
          afternoon: {
            experienceRating: null,
            comment: null
          }
        }
      }, {
        recapTasks: {
          title: "basic javascript",
          score: "amber"
        },
        workshops: {
          title: "objects and classes",
          score: "amber"
        },
        quiz: {
          title: "array methods",
          score: "5/12"
        },
        didAttend: true,
        feedback: {
          morning: {
            experienceRating: 4,
            comment: "skkkkkkkkreesh"
          },
          afternoon: {
            experienceRating: 4,
            comment: "skkkkraap"
          }
        }
      }, {
        recapTasks: {},
        workshops: {},
        quiz: {},
        didAttend: false,
        feedback: {
          morning: {
            experienceRating: null,
            comment: null
          },
          afternoon: {
            experienceRating: null,
            comment: null
          }
        }
      }, {
        recapTasks: {
          title: "basic javascript",
          score: "amber"
        },
        workshops: {
          title: "objects and classes",
          score: "amber"
        },
        quiz: {
          title: "array methods",
          score: "5/12"
        },
        didAttend: true,
        feedback: {
          morning: {
            experienceRating: 4,
            comment: "skkkkkkkkreesh"
          },
          afternoon: {
            experienceRating: 4,
            comment: "skkkkraap"
          }
        }
      }]]
    }]
  }],
  cohort2: {}
};

function genTaskArrays(weeks) {
  let dummyRecapTasks = [];
  let dummyWorkshops = [];
  let quizes = [];

  for (let i = 0; i < weeks; i++) {
    dummyRecapTasks.push(`Recap Task ${i + 1}`);
  }

  for (let i = 0; i < weeks * 5; i++) {
    dummyWorkshops.push(`Workshop ${i + 1}`);
  }

  for (let i = 0; i < weeks * 5; i++) {
    quizes.push(`Quiz ${i + 1}`);
  }

  return dummyRecapTasks, dummyWorkshops, quizes;
}

const recapTask = ["Introduction to JS and computational thinking", "Advanced JS", "Node and Express", "Databases and APIs", "Testing and Paradigms", "Introduction to React", "Advanced React and Design Thinking process", "Project Week", "Retros and Deployment", "Advanced computer science concepts", "Typescript and advanced tools", "Platform and cloud engineering"];
const recapTaskOriginal = ["Recap Task 1", "Recap Task 2", "Recap Task 3", "Recap Task 4", "Recap Task 5", "Recap Task 6", "Recap Task 7", "Recap Task 8", "Recap Task 9", "Recap Task 10", "Recap Task 11", "Recap Task 12"];
const workshops = ["Workshop 1", "Workshop 2", "Workshop 3", "Workshop 4", "Workshop 5", "Workshop 6", "Workshop 7", "Workshop 8", "Workshop 9", "Workshop 10", "Workshop 11", "Workshop 12", "Workshop 13", "Workshop 14", "Workshop 15", "Workshop 16", "Workshop 17", "Workshop 18", "Workshop 19", "Workshop 20", "Workshop 21", "Workshop 22", "Workshop 23", "Workshop 24", "Workshop 25", "Workshop 26", "Workshop 27", "Workshop 28", "Workshop 29", "Workshop 30", "Workshop 31", "Workshop 32", "Workshop 33", "Workshop 34", "Workshop 35", "Workshop 36", "Workshop 37", "Workshop 38", "Workshop 39", "Workshop 40", "Workshop 41", "Workshop 42", "Workshop 43", "Workshop 44", "Workshop 45", "Workshop 46", "Workshop 47", "Workshop 48", "Workshop 49", "Workshop 50", "Workshop 51", "Workshop 52", "Workshop 53", "Workshop 54", "Workshop 55", "Workshop 56", "Workshop 57", "Workshop 58", "Workshop 59", "Workshop 60"];
const quizes = ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5", "Quiz 6", "Quiz 7", "Quiz 8", "Quiz 9", "Quiz 10", "Quiz 11", "Quiz 12", "Quiz 13", "Quiz 14", "Quiz 15", "Quiz 16", "Quiz 17", "Quiz 18", "Quiz 19", "Quiz 20", "Quiz 21", "Quiz 22", "Quiz 23", "Quiz 24", "Quiz 25", "Quiz 26", "Quiz 27", "Quiz 28", "Quiz 29", "Quiz 30", "Quiz 31", "Quiz 32", "Quiz 33", "Quiz 34", "Quiz 35", "Quiz 36", "Quiz 37", "Quiz 38", "Quiz 39", "Quiz 40", "Quiz 41", "Quiz 42", "Quiz 43", "Quiz 44", "Quiz 45", "Quiz 46", "Quiz 47", "Quiz 48", "Quiz 49", "Quiz 50", "Quiz 51", "Quiz 52", "Quiz 53", "Quiz 54", "Quiz 55", "Quiz 56", "Quiz 57", "Quiz 58", "Quiz 59", "Quiz 60"];
const BOOTCAMP_SIZE = 2;
const NUM_OF_BOOTCAMPS = 4; // Generating a gaussian distrobution of students starting weights

function randn_bm() {
  let u = 0,
      v = 0;

  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)


  while (v === 0) v = Math.random();

  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1

  if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1

  return num;
}

function gaussArray(n) {
  return n.map(el => el = randn_bm());
} // engagement, happiness and craft


const engagement = gaussArray(Array(BOOTCAMP_SIZE * NUM_OF_BOOTCAMPS).fill(0));
const happiness = gaussArray(Array(BOOTCAMP_SIZE * NUM_OF_BOOTCAMPS).fill(0));
const craft = gaussArray(Array(BOOTCAMP_SIZE * NUM_OF_BOOTCAMPS).fill(0));
let startingPercentage = 0; // GENERATING SCORES FOR WORK TASKS

function genQuizScore(studentID) {
  let genQuizSize = () => getRandomInt(8, 16);

  let quizSize = genQuizSize();
  let quizResult = Math.ceil(quizSize * getRandomInt(craft[studentID] * 110, craft[studentID] * 100 + 10) / 100);
  let percentage = Math.ceil(quizResult / quizSize * 100);

  if (craft[studentID] < 0.4) {
    percentage > startingPercentage ? craft[studentID] += 0.05 : craft[studentID] -= 0.005;
  } else if (craft[studentID] < 0.6) {
    percentage > startingPercentage ? craft[studentID] += 0.03 : craft[studentID] -= 0.01;
  } else if (craft[studentID] < 0.8) {
    percentage > startingPercentage ? craft[studentID] += 0.02 : craft[studentID] -= 0.015;
  } else {
    percentage > startingPercentage ? craft[studentID] += 0.01 : craft[studentID] -= 0.005;
  } // console.log(studentID, "=>", startingPercentage, percentage, c[studentID]);


  startingPercentage = percentage;
  return {
    score: `${quizResult}/${quizSize}`,
    percentage: percentage
  };
}

const workColors = ["red", "amber", "green"];

const genColorScore = studentID => {
  let colorNum = Math.floor(getRandomInt(100, 380) * craft[studentID] / 100);

  if (colorNum >= 3) {
    colorNum = 2;
  }

  return workColors[colorNum];
};

function genRecapTask(day, studentID) {
  return {
    title: recapTask[day - 1],
    score: genColorScore(studentID),
    type: "recap"
  };
}

function genWorkshopTasks(day, studentID) {
  let workshopsCompleted = [];
  let numCompleted = getRandomInt(0, 3);

  for (let i = 0; i < numCompleted; i++) {
    workshopsCompleted.push({
      type: "workshop",
      title: workshops[+day + i - 1],
      score: genColorScore(studentID)
    });
  }

  return workshopsCompleted;
}

function genQuiz(day, studentID) {
  return {
    title: quizes[day - 1],
    ...genQuizScore(studentID),
    type: "quiz"
  };
}

let prevDay = false;

function genAttend() {
  let chance = getRandomInt(0, 15);

  if (prevDay) {
    chance = getRandomInt(0, 5);
  }

  if (chance < 1) {
    prevDay = true;
    return false;
  } else {
    return true;
  }
}

let startingFeedbackEx = 2.5;

function genFeedback(day, studentID) {
  let morning = {};
  let afternoon = {};
  let chance1 = getRandomInt(0, 2);

  let genExperienceRating = () => Math.ceil(getRandomInt(65, 80) * happiness[studentID] / 10);

  if (chance1 > 0) {
    let experienceRating = genExperienceRating();
    morning = {
      type: "feedback",
      timeOfDay: "morning",
      experienceRating: experienceRating > 5 ? 5 : experienceRating < 1 ? 1 : experienceRating,
      comment: faker.lorem.sentence()
    };
  }

  let chance2 = getRandomInt(0, 2);

  if (chance2 > 0) {
    let experienceRating = genExperienceRating();
    afternoon = {
      type: "feedback",
      timeOfDay: "afternoon",
      experienceRating: experienceRating > 5 ? 5 : experienceRating < 1 ? 1 : experienceRating,
      comment: faker.lorem.sentence()
    };
  } // return feedback if exists


  if (chance1 > 0 || chance2 > 0) {
    // modify weights
    let divisor = chance1 + chance2;
    let feedbackEx = (morning.experienceRating + afternoon.experienceRating) / divisor;

    if (happiness[studentID]) {
      feedbackEx > startingFeedbackEx ? happiness[studentID] += 0.05 : feedbackEx < startingFeedbackEx ? happiness[studentID] -= 0.05 : happiness[studentID] += getRandomInt(-10, 10) / 100;
    }

    startingFeedbackEx = feedbackEx;
    return [morning, afternoon];
  }

  return null;
}

function genDay(day, g) {
  let attendance = genAttend();
  return attendance ? {
    date: genDate(day),
    week: Math.ceil(day / 5),
    day: day,
    didAttend: true,
    recapTask: day === 1 ? null : (day - 1) % 5 === 0 ? genRecapTask(Math.ceil(day / 5), g) : null,
    workshops: genWorkshopTasks(day, g),
    quiz: genQuiz(day, g),
    feedback: genFeedback(day, g),
    reflection: {
      type: "reflection",
      content: faker.lorem.sentences(getRandomInt(2, 5))
    }
  } : {
    date: genDate(day),
    week: Math.ceil(day / 5),
    day: day,
    didAttend: attendance,
    recapTasks: null,
    workshops: null,
    quiz: null,
    feedback: null,
    reflection: faker.lorem.sentences(getRandomInt(2, 5))
  };
}

function genWeekRange(startWeek, endWeek, studentID) {
  let wk = [];

  for (let i = 5 * startWeek - 4; i <= 5 * endWeek; i++) {
    wk.push(genDay(i, studentID));
  }

  return wk;
}

function genStudent(id, startWeek, endWeek) {
  return {
    info: {
      id: id,
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatar: faker.internet.avatar()
    },
    work: genWeekRange(startWeek, endWeek, id - 1)
  };
}

const bootcampRegions = ["West Midlands", "East Midlands", "North West", "South East & London"];

function genBootcamps(numOfBootcamps, bootcampSize, startWeek, endWeek) {
  let students = [];
  let bootcampsList = [];
  let bootcampID = 0;

  for (let i = 1; i <= numOfBootcamps * bootcampSize; i++) {
    students.push(genStudent(i, startWeek, endWeek));

    if (students.length % bootcampSize === 0) {
      bootcampsList.push({
        id: ++bootcampID,
        name: `Bootcamp${bootcampID}`,
        region: bootcampRegions[bootcampID - 1],
        startDate: genDate(1),
        students: students
      });
      students = [];
    }
  }

  return bootcampsList;
}

const legends = ["Liz Kaufman", "Lizard Morrow", "Juweyriya Abdikadir", "Mohit Sharma", "James Perrett", "Arshi", "Loz Meah", "Hamza"]; // GEN BOOTCAMP/S (NumOfBootcamps, BootcampSize, StartWeek, EndWeek)

const bootcamps = genBootcamps(NUM_OF_BOOTCAMPS, BOOTCAMP_SIZE, 1, 12);
const quizScores1 = bootcamps[0].students[0].work.map(work => work.quiz === null ? 0 : work.quiz.percentage); // console.log(JSON.stringify(dummyData, null, 4));

function genUsers() {
  let users = [];
  legends.forEach((leg, index) => {
    let user = {
      name: leg,
      bootcampID: getRandomInt(1, bootcamps.length + 1),
      watchList: [],
      menteeID: null
    };
    users.push(user);
  });
  return users;
}

console.log(bootcamps[0].students[0].work.slice(5, 7));
console.log(happiness);
module.exports = bootcamps;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/functions/index.js":
/*!********************************!*\
  !*** ./src/functions/index.js ***!
  \********************************/
/*! exports provided: tallyScores, listRecapTasks, sortByFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _tallyScores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tallyScores */ "./src/functions/tallyScores.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tallyScores", function() { return _tallyScores__WEBPACK_IMPORTED_MODULE_0__["tallyScores"]; });

/* harmony import */ var _listRecapTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listRecapTasks */ "./src/functions/listRecapTasks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listRecapTasks", function() { return _listRecapTasks__WEBPACK_IMPORTED_MODULE_1__["listRecapTasks"]; });

/* harmony import */ var _sortByFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortByFunction */ "./src/functions/sortByFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortByFunction", function() { return _sortByFunction__WEBPACK_IMPORTED_MODULE_2__["sortByFunction"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/functions/listRecapTasks.js":
/*!*****************************************!*\
  !*** ./src/functions/listRecapTasks.js ***!
  \*****************************************/
/*! exports provided: listRecapTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRecapTasks", function() { return listRecapTasks; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const listRecapTasks = (acc, cur) => cur.recapTask ? [...acc, cur.recapTask.score] : [...acc, null];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/functions/sortByFunction.js":
/*!*****************************************!*\
  !*** ./src/functions/sortByFunction.js ***!
  \*****************************************/
/*! exports provided: sortByFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByFunction", function() { return sortByFunction; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const sortByFunction = (heading, isASC) => (a, b) => {
  if (typeof a[heading] === "string" || a[heading] instanceof String) {
    let nameA = a[heading].toUpperCase(); // ignore upper and lowercase

    let nameB = b[heading].toUpperCase(); // ignore upper and lowercase

    return isASC ? nameA < nameB ? -1 : nameA > nameB ? 1 : 0 : nameB < nameA ? -1 : nameB > nameA ? 1 : 0;
  } else {
    return isASC ? a[heading] - b[heading] : b[heading] - a[heading];
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/functions/tallyScores.js":
/*!**************************************!*\
  !*** ./src/functions/tallyScores.js ***!
  \**************************************/
/*! exports provided: tallyScores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tallyScores", function() { return tallyScores; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const tallyScores = (acc, curr) => {
  acc[curr] ? ++acc[curr] : acc[curr] = 1;
  return acc;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/lib/lineData.js":
/*!*****************************!*\
  !*** ./src/lib/lineData.js ***!
  \*****************************/
/*! exports provided: fakeData, massage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeData", function() { return fakeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "massage", function() { return massage; });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dummyData */ "./src/dummyData.js");
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dummyData__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const fakeData = _dummyData__WEBPACK_IMPORTED_MODULE_1___default.a.map(bootcamp => bootcamp.students.map(student => {
  // ATTENDANCE
  const attendanceArray = student.work.filter(day => day.didAttend);
  const attendanceNum = attendanceArray.reduce((acc, cur) => acc + cur, 0); // QUIZZES

  const quizScores = student.work.quiz === null ? null : student.work.map(work => work.quiz === null ? null : work.quiz.percentage);
  const quizAvg = quizScores.reduce((acc, cur) => cur ? acc + cur : acc, 0) / quizScores.filter(score => score !== null).length; // FEEDBACK EXPERIENCE SCORES

  const feedbackEx = student.work.map(day => day.feedback ? [day.feedback[0].experienceRating, day.feedback[1].experienceRating] : [null, null]);
  const feedbackExDayAvg = feedbackEx.map(day => day[0] && day[1] ? (day[0] + day[1]) / 2 : day[0] || day[1]); //   FEEDBACK COMMENTS

  const feedbackComments = student.work.map(day => day.feedback ? [day.feedback[0].comment, day.feedback[1].comment] : [null, null]);
  return {
    id: student.info.id,
    name: student.info.name,
    email: "example@gmail.com",
    avatar: student.info.avatar,
    attendanceArray,
    attendanceNum,
    bootcampId: bootcamp.id,
    bootcampRegion: bootcamp.region,
    quizScores,
    quizAvg,
    feedbackExDayAvg,
    feedbackEx,
    feedbackComments,
    hasWork: true
  };
})).flat();
function massage(backendData) {
  console.log("massage =>", backendData);
  return backendData.map(student => {
    if (student.hasWork) {
      // ATTENDANCE
      const attendanceArray = student.attendance.map(day => day.didAttend ? true : false);
      const attendanceNum = student.daysAttended; // QUIZZES

      const quizScores = student.quizzes.map(quiz => quiz ? quiz.percentage : null);
      const quizAvg = quizScores.reduce((acc, cur) => cur ? acc + cur : acc, 0) / quizScores.filter(score => score !== null).length; // FEEDBACK EXPERIENCE SCORES

      const feedbackEx = student.feedback.map(day => day ? day.map(time => time ? time.experienceRating : null) : [null, null]);
      const feedbackExDayAvg = feedbackEx.map(day => day[0] && day[1] ? (day[0] + day[1]) / 2 : day[0] || day[1]); //   FEEDBACK COMMENTS

      const feedbackComments = student.feedback.map(day => day ? day.map((time, index) => time ? time.comment : `No feedback ${index === 0 ? "morning" : "afternoon"} left`) : [null, null]); // `No ${time.timeOfDay} feedback  left` <-- an idea which would need back end implementation

      return {
        id: student.id,
        name: student.name,
        email: "example@gmail.com",
        avatar: student.avatar,
        attendanceArray,
        attendanceNum,
        bootcampId: student.bootcampId,
        bootcampRegion: student.region,
        quizScores,
        quizAvg,
        feedbackExDayAvg,
        feedbackEx,
        feedbackComments,
        hasWork: student.hasWork
      };
    } else {
      return {
        id: student.id,
        name: student.name,
        email: "example@gmail.com",
        avatar: student.avatar,
        bootcampId: student.bootcampId,
        bootcampRegion: student.region,
        hasWork: student.hasWork
      };
    }
  }).flat();
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/lib/tableData.js":
/*!******************************!*\
  !*** ./src/lib/tableData.js ***!
  \******************************/
/*! exports provided: filterOptions, filtationMethod, dataSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterOptions", function() { return filterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtationMethod", function() { return filtationMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSet", function() { return dataSet; });
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dummyData */ "./src/dummyData.js");
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dummyData__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./src/functions/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const filterOptions = {
  0: "all",
  1: "bootcampID",
  2: "bootcampID",
  3: "bootcampID",
  4: "bootcampID",
  5: "bootcampRegion",
  6: "bootcampRegion",
  7: "bootcampRegion",
  8: "bootcampRegion"
};
const filtationMethod = ["all", 1, 2, 3, 4, ..._dummyData__WEBPACK_IMPORTED_MODULE_0___default.a.map(bootcamp => bootcamp.region)];
const dataSet = _dummyData__WEBPACK_IMPORTED_MODULE_0___default.a.map(bootcamp => bootcamp.students.map(student => {
  /* creates an recapTask array ['green', 'amber', 'red', null] & then counts the occurences, output => Object */
  const recapTasks = student.work.reduce(_functions__WEBPACK_IMPORTED_MODULE_1__["listRecapTasks"], []).reduce(_functions__WEBPACK_IMPORTED_MODULE_1__["tallyScores"], {});
  /* reduce to only workshop scores ['green', 'amber', 'red', null] & then reduce into an object of occurences {green : 5, amber: 4, red:2} */

  const workshopTasks = student.work.reduce((acc, cur) => cur.workshops ? [...acc, ...cur.workshops.map(workshop => workshop.score)] : [...acc, null], []).reduce(_functions__WEBPACK_IMPORTED_MODULE_1__["tallyScores"], {});
  /* Workshop average & Recap Task score calculator (null: 0, red :0.33, amber:0.66, green:1*/

  const RAG_TasksAvgScore = tasksResultObj => tasksResultObj.green * 0.99 + tasksResultObj.amber * 0.67 + tasksResultObj.red * 0.33 + tasksResultObj.null * -0.01;

  const workshopOverallAvgScore = RAG_TasksAvgScore(workshopTasks);
  const recapOverallAvgScore = RAG_TasksAvgScore(recapTasks);
  /* filtering out null quiz scores, then calculating average */

  const notNullQuizScores = student.work.filter(work => work.quiz !== null);
  const avgQuiz = Math.round(notNullQuizScores.reduce((acc, cur) => acc + cur.quiz.percentage, 0) / notNullQuizScores.length);
  /* get array of experience ratings & average them */

  const moodArray = student.work.reduce((acc, cur) => cur.feedback ? [...acc, cur.feedback[0].experienceRating, cur.feedback[1].experienceRating] : acc, []).filter(experienceRating => experienceRating !== undefined);
  const avgMood = (moodArray.reduce((acc, cur) => acc + cur, 0) / moodArray.length).toFixed(2);
  return {
    all: "all",
    id: student.info.id,
    name: student.info.name,
    avatar: student.info.avatar,
    bootcampID: bootcamp.id,
    bootcampRegion: bootcamp.region,
    trendRating: "placeholder",
    recapTasks: recapTasks,
    recapOverallAvgScore,
    workshopTasks: workshopTasks,
    workshopOverallAvgScore,
    avgQuiz: avgQuiz,
    avgMood: avgMood
  };
})).flat();
console.log(dataSet); // module.exports = { filtationMethod, filterOptions, dataSet };

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Dashboard.js":
/*!********************************!*\
  !*** ./src/pages/Dashboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _components_StatusCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StatusCard */ "./src/components/StatusCard.js");
/* harmony import */ var _components_ChartLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ChartLine */ "./src/components/ChartLine/index.js");
/* harmony import */ var _components_ChartBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ChartBar */ "./src/components/ChartBar/index.js");
/* harmony import */ var _components_PageVisitsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageVisitsCard */ "./src/components/PageVisitsCard.js");
/* harmony import */ var _components_TrafficCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TrafficCard */ "./src/components/TrafficCard.js");
/* harmony import */ var _components_NameSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NameSelection */ "./src/components/NameSelection/index.js");
/* harmony import */ var _components_InputField_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InputField/index */ "./src/components/InputField/index.js");
/* harmony import */ var _components_MessageNotification_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MessageNotification/index */ "./src/components/MessageNotification/index.js");
/* harmony import */ var _components_Comments_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Comments/index */ "./src/components/Comments/index.js");
/* harmony import */ var _components_Doughnut_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Doughnut/index */ "./src/components/Doughnut/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/pages/Dashboard.js";












function Dashboard({
  data
}) {
  const donutDataset = {
    label: "My First Dataset",
    labels: ["Red", "Blue", "Yellow"],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "grey"],
      hoverOffset: 4
    }]
  };
  const options = {
    legend: {
      display: true,
      position: "left"
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "bg-light-blue-500 px-3 md:px-8 h-40"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "px-3 md:px-10 -mt-24",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "container mx-auto max-w-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "grid grid-cols-1 xl:grid-cols-100",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "xl:col-start-1 xl:col-end-6 px-4 mb-14",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_MessageNotification_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
              content: "hi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_ChartLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data,
      isGroup: true,
      id: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "px-3 md:px-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "container mx-auto max-w-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_MessageNotification_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "hi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Doughnut_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
            dataset: donutDataset,
            options: options,
            height: "h-70",
            width: "w-70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Dashboard;

var _c;

__webpack_require__.$Refresh$.register(_c, "Dashboard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/ProfileCard.js":
/*!**********************************!*\
  !*** ./src/pages/ProfileCard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// import Card from "@material-tailwind/react/Card";
// import CardBody from "@material-tailwind/react/CardBody";
// import CardFooter from "@material-tailwind/react/CardFooter";
// import Image from "@material-tailwind/react/Image";
// import H5 from "@material-tailwind/react/Heading5";
// import Icon from "@material-tailwind/react/Icon";
// import LeadText from "@material-tailwind/react/LeadText";
// import Button from "@material-tailwind/react/Button";
// import ProfilePicture from "../assets/img/team-1-800x800.jpg";
// import ProfiledCard from "../components/Profile Card";
// export default function ProfileCard() {
//   return (
//     <>
//       <ProfiledCard />
//     </>
//   );
// }

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Settings.js":
/*!*******************************!*\
  !*** ./src/pages/Settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsDashboard; });
/* harmony import */ var _components_StatusCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StatusCard */ "./src/components/StatusCard.js");
/* harmony import */ var _components_SettingsForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SettingsForm */ "./src/components/SettingsForm.js");
/* harmony import */ var components_NameSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/NameSelection */ "./src/components/NameSelection/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Edit_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Edit Profile */ "./src/components/Edit Profile/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/pages/Settings.js",
    _s = __webpack_require__.$Refresh$.signature();


 // import ProfileCard from "../pages/ProfileCard";







function SettingsDashboard() {
  _s();

  const [value, onChange] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_calendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onChange: onChange,
      value: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(components_Edit_Profile__WEBPACK_IMPORTED_MODULE_6__["CardProfile"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(SettingsDashboard, "DQgK+Tjy3CpWvhZj4nuXkkLAGxU=");

_c = SettingsDashboard;

var _c;

__webpack_require__.$Refresh$.register(_c, "SettingsDashboard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/StudentPage.js":
/*!**********************************!*\
  !*** ./src/pages/StudentPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentPage; });
/* harmony import */ var _components_StudentProfile_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StudentProfile/index */ "./src/components/StudentProfile/index.js");
/* harmony import */ var components_MessageNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/MessageNotification */ "./src/components/MessageNotification/index.js");
/* harmony import */ var components_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Comments */ "./src/components/Comments/index.js");
/* harmony import */ var _components_ChartLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ChartLine */ "./src/components/ChartLine/index.js");
/* harmony import */ var _components_SearchByName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchByName */ "./src/components/SearchByName/index.js");
/* harmony import */ var components_DetailedProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/DetailedProgress */ "./src/components/DetailedProgress/index.js");
/* harmony import */ var lib_lineData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/lineData */ "./src/lib/lineData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/pages/StudentPage.js",
    _s = __webpack_require__.$Refresh$.signature();












function StudentPage({
  backEndData
}) {
  _s();

  const data = [backEndData, lib_lineData__WEBPACK_IMPORTED_MODULE_6__["fakeData"]];
  console.log("studentPage: ", data);
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const [studentId, setStudentId] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(Number(Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useParams"])().id) || data[0].id);
  const studentObject = data.find(item => {
    return item.id === studentId;
  });
  const [student, setStudent] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(studentObject);

  const changeStudent = name => {
    const newStudent = data.find(studentData => studentData.name.toLowerCase().includes(name.toLowerCase()));

    if (newStudent) {
      setStudent(newStudent);
      setStudentId(newStudent.id);
      history.push(`/student/${newStudent.id}`);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "container mx-auto max-w-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_MessageNotification__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_SearchByName__WEBPACK_IMPORTED_MODULE_4__["default"], {
            handleSubmit: changeStudent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
      className: "grid",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_StudentProfile_index__WEBPACK_IMPORTED_MODULE_0__["default"], {
        student: student
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_ChartLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: [student],
        isGroup: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_DetailedProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
        student: student
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_Comments__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(StudentPage, "mFvBRvHHvoqcCs/L4LTUcrzVBIk=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"], react_router__WEBPACK_IMPORTED_MODULE_8__["useParams"]];
});

_c = StudentPage;

var _c;

__webpack_require__.$Refresh$.register(_c, "StudentPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Tables.js":
/*!*****************************!*\
  !*** ./src/pages/Tables.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _components_StatusCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StatusCard */ "./src/components/StatusCard.js");
/* harmony import */ var _components_TableCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableCard */ "./src/components/TableCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/pages/Tables.js";




function Dashboard() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container mx-auto max-w-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
            color: "pink",
            icon: "trending_up",
            title: "Workshop & Recap Performance",
            amount: "350,897",
            percentage: "3.48",
            percentageIcon: "arrow_upward",
            percentageColor: "green",
            date: "Since last month"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
            color: "orange",
            icon: "groups",
            title: "Work Completion",
            amount: "2,356",
            percentage: "3.48",
            percentageIcon: "arrow_downward",
            percentageColor: "red",
            date: "Since last week"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
            color: "orange",
            icon: "paid",
            title: "Overall Mood",
            amount: "924",
            percentage: "1.10",
            percentageIcon: "arrow_downward",
            percentageColor: "orange",
            date: "Since yesterday"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
            color: "blue",
            icon: "poll",
            title: "Attendance",
            amount: "49,65%",
            percentage: "12",
            percentageIcon: "arrow_upward",
            percentageColor: "green",
            date: "Since last month"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "px-3 md:px-8 h-auto -mt-24",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container mx-auto max-w-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "grid grid-cols-1 px-4 mb-16",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_TableCard__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Dashboard;

var _c;

__webpack_require__.$Refresh$.register(_c, "Dashboard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Upload.js":
/*!*****************************!*\
  !*** ./src/pages/Upload.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UploadBox_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UploadBox/index */ "./src/components/UploadBox/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/pages/Upload.js";




function Upload(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "flex mt-20",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_UploadBox_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "New Students",
      headerColor: "orange",
      ml: "2vw",
      mr: "1vw"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_UploadBox_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "New Work",
      headerColor: "green",
      ml: "1vw",
      mr: "1vw"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_UploadBox_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "New Bootcamps",
      headerColor: "purple",
      ml: "1vw",
      mr: "2vw"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Upload;
/* harmony default export */ __webpack_exports__["default"] = (Upload);

var _c;

__webpack_require__.$Refresh$.register(_c, "Upload");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! exports provided: FILTER_BY_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BY_ID", function() { return FILTER_BY_ID; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const FILTER_BY_ID = "FILTER_BY_ID";
const filterIDs = {
  0: "bootcampID",
  1: "bootcampID",
  2: "bootcampID",
  3: "bootcampID",
  4: "bootcampRegion",
  5: "bootcampRegion",
  6: "bootcampRegion",
  7: "bootcampRegion"
}; // const  = {
//     0: 'bootcampID',
//     1: 'bootcampID',
//     2: 'bootcampID',
//     3: 'bootcampID',
//     4: 'bootcampRegion',
//     5: 'bootcampRegion',
//     6: 'bootcampRegion',
//     7: 'bootcampRegion',
// }

const reducer = (state, {
  type,
  payload
}) => {
  switch (type) {
    case FILTER_BY_ID: //   return { ...state, ...state.filter((student) => student[filterIDs[payload]] === ) };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/index.js */"./src/index.js");


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map