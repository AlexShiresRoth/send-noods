(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{382:function(e,t,a){var n={"./ramen.png":143,"./ramen0.jpg":383,"./ramen1.jpg":384,"./ramen2.jpg":385};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=382},383:function(e,t,a){e.exports=a.p+"7f7c21b1d299c6354e01a25d1ea3b345.jpg"},384:function(e,t,a){e.exports=a.p+"69f00672ae74f5208fa3a0e3e0976c81.jpg"},385:function(e,t,a){e.exports=a.p+"ea86204e0637f402f4bf5a56e5137791.jpg"},409:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n);a(97);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,l(t).call(this,e))).state={isMobile:!1,showMore:!1},a}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.a.Component),n=t,(o=[{key:"handleScreenSize",value:function(){this.setState({isMobile:window.innerWidth<600})}},{key:"componentDidMount",value:function(){this.handleScreenSize(),window.addEventListener("resize",this.handleScreenSize)}},{key:"componentDidUpdate",value:function(e,t){this.state.isMobile!==t.isMobile&&window.addEventListener("resize",this.handleScreenSize)}},{key:"toggleCardDetails",value:function(){this.state.showMore?this.setState({showMore:!1}):this.setState({showMore:!0})}},{key:"render",value:function(){var e=this,t=function(e){for(var t=[],a=0;a<e;a++)t.push(r.a.createElement("i",{className:"fas fa-star"}));return t},n=function(e){var t=[];if(e)e>=0&&t.push(r.a.createElement("i",{className:"fas fa-dollar-sign"}));else if(!e){var a=r.a.createElement("p",{style:{color:"#000"}},"n/a");t.push(a)}return t},o=function(e){return e?r.a.createElement("p",{style:{color:"green"}},"Open"):r.a.createElement("p",{style:{color:"red"}},"Closed")},i=function(){var t=e.props.photos,n=e.props.photos.length,o=Math.floor(Math.random()*n);return r.a.createElement("figure",{className:"image__item"},r.a.createElement("img",{src:a(382)("./".concat(t[o])),alt:"Ramen"}))},s=function(){return e.props.spot.name},l={background:"#ff4500",borderRadius:"50%",boxShadow:"0 10px 10px #eee",color:"#fff",padding:"0.5rem"},c=function(e){e.target.style.background="#ff4500",e.target.style.borderRadius="50%",e.target.style.boxShadow="0 10px 10px #eee",e.target.style.color="#fff",e.target.style.padding="0.5rem"};return this.state.isMobile?r.a.createElement("div",{className:"list--item"},r.a.createElement("div",{className:"list--item--top"},r.a.createElement("div",{className:"img-container"},i()),r.a.createElement("div",{className:"ramen__title"},this.props.spot.name,r.a.createElement("div",{className:"ramen__title--toggle"},r.a.createElement("i",{class:"".concat(this.state.showMore?"fas fa-chevron-up animate-box-shadow":"fas fa-chevron-down "),onClick:function(){return e.toggleCardDetails()}}),r.a.createElement("p",null,this.state.showMore?"Hide Details":"Show Details")))),r.a.createElement("div",{className:"list--item--middle ".concat(this.state.showMore?" ":"hidden")},r.a.createElement("div",{className:"rating__container ".concat(this.state.showMore?" ":"hidden")},r.a.createElement("div",{className:"rating__container--stars"},"User Rating:",t(this.props.rating)),r.a.createElement("div",{className:"rating__container--total"},"(",this.props.ratingTotal,")")),r.a.createElement("div",{className:"address__container ".concat(this.state.showMore?" ":"hidden")},r.a.createElement("p",null,"Address: ",this.props.spot.formatted_address))),r.a.createElement("div",{className:"list--item--bottom ".concat(this.state.showMore?" ":"hidden")},r.a.createElement("div",{className:"price__container ".concat(this.state.showMore?" ":"hidden")},"Price:",r.a.createElement("span",null,n(this.props.price))),r.a.createElement("div",{className:"hours__container ".concat(this.state.showMore?" ":"hidden")},o(this.props.open)),r.a.createElement("div",{className:"favorite"},r.a.createElement("i",{class:"far fa-heart",onClick:function(t){e.props.addFavorite(t,s()),c(t)},style:this.props.isFavorited.includes(this.props.spot.name)?l:null})))):r.a.createElement("div",{className:"list--item"},r.a.createElement("div",{className:"img-container"},i()),r.a.createElement("div",{className:"ramen__title"},this.props.spot.name),r.a.createElement("div",{className:"rating__container"},r.a.createElement("div",{className:"rating__container--stars"},"User Rating:",t(this.props.rating)),r.a.createElement("div",{className:"rating__container--total"},"(",this.props.ratingTotal,")")),r.a.createElement("hr",null),r.a.createElement("div",{className:"price__container"},"Price:",r.a.createElement("span",null,n(this.props.price))),r.a.createElement("hr",null),r.a.createElement("div",{className:"hours__container"},o(this.props.open)),r.a.createElement("div",{className:"address__container"},r.a.createElement("p",null,"Address: ",this.props.spot.formatted_address),r.a.createElement("div",{className:"address__container--favorite"},r.a.createElement("i",{class:"far fa-heart",onClick:function(t){e.props.addFavorite(t,s()),c(t)},style:this.props.isFavorited.includes(this.props.spot.name)?l:null}),r.a.createElement("p",null,"Add to favorites"))))}}])&&i(n.prototype,o),u&&i(n,u),t}(),p=function(e){var t=["ramen0.jpg","ramen1.jpg","ramen2.jpg"],a=e.restaurants.map(function(a){return r.a.createElement(u,{key:a.id,lat:a.geometry.location.lat,lng:a.geometry.location.lng,spot:a,rating:a.rating,ratingTotal:a.user_ratings_total,price:a.price_level,photos:t,open:a.opening_hours.open_now,addFavorite:e.addFavorite,isFavorited:e.favorites})});return e.loading&&e.restaurants.length<1?r.a.createElement("div",{className:"ramen__list--container"},r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"}))):!e.loading&&e.restaurants.length>0?r.a.createElement("div",{className:"ramen__list--container"},r.a.createElement("div",{className:"ramen--list"},a)):r.a.createElement("div",{className:"ramen__list--container"})},f=function(e){var t=e.favorites.map(function(t){return r.a.createElement("li",{className:"favorite__list--item"},r.a.createElement("i",{class:"far fa-times-circle",onClick:function(a){return e.removeFavorite(a,t)}}),r.a.createElement("p",null,t))});return r.a.createElement("div",null,r.a.createElement("ul",{className:"favorite__list"},t))};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=v(t).call(this,e),a=!r||"object"!==m(r)&&"function"!=typeof r?h(n):r,b(h(a),"sortResults",function(e){a.props.sortResults(e)}),b(h(a),"getInputValue",function(e){a.props.setValue(e)}),a.state={hovered:!1,favorites:a.props.favorited,isMobile:!1},a.handleScreenSize=a.handleScreenSize.bind(h(a)),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),a=t,(n=[{key:"setHover",value:function(){this.setState({hovered:!0})}},{key:"setHoverLeave",value:function(){this.setState({hovered:!1})}},{key:"handleScreenSize",value:function(){this.setState({isMobile:window.innerWidth<600})}},{key:"componentDidMount",value:function(){this.handleScreenSize(),window.addEventListener("resize",this.handleScreenSize)}},{key:"componentDidUpdate",value:function(e,t){this.props.favorited!==e.favorited&&this.setState({favorites:this.props.favorited}),this.state.isMobile!==t.isMobile&&window.addEventListener("resize",this.handleScreenSize)}},{key:"render",value:function(){var e=this;return!this.props.loading&&this.props.restaurants.length>0?r.a.createElement("div",{className:"results__nav"},r.a.createElement("div",{className:"results__nav--left",onMouseEnter:function(){return e.setHover()},onMouseLeave:function(){return e.setHoverLeave()}},r.a.createElement("h2",null,"Favorite Spots"),r.a.createElement("i",{class:"fas fa-chevron-down"}),this.state.hovered&&this.props.favorited?r.a.createElement(f,{favorites:this.state.favorites,removeFavorite:this.props.removeFavorite}):null),this.state.isMobile?null:r.a.createElement("div",{className:"results__nav--middle"},r.a.createElement("h2",null,"Results for ",r.a.createElement("span",{style:{color:"#ff4500"}},this.props.input.toUpperCase())," ")),r.a.createElement("div",{className:"results__nav--right"},r.a.createElement("form",{onSubmit:this.sortResults},r.a.createElement("select",{onChange:this.getInputValue},r.a.createElement("option",{value:"no-filter"},"No Filter"),r.a.createElement("option",{value:"best-rated"},"Best Rated"),r.a.createElement("option",{value:"open"},"Open Now"),r.a.createElement("option",{value:"rating-amount"},"Most Rated"),r.a.createElement("option",{value:"price-low-to-high"},"Price: Low to High"),r.a.createElement("option",{value:"price-high-to-low"},"Price: High to Low")),r.a.createElement("button",{onClick:this.sortResults},"Filter")))):r.a.createElement("div",{className:"results__nav"},r.a.createElement("div",{className:"results__nav--left",onMouseEnter:function(){return e.setHover()},onMouseLeave:function(){return e.setHoverLeave()}},r.a.createElement("h2",null,"Favorite Spots"),r.a.createElement("i",{class:"fas fa-chevron-down"}),this.state.hovered&&this.props.favorited?r.a.createElement(f,{favorites:this.state.favorites,removeFavorite:this.props.removeFavorite}):null),this.state.isMobile?null:r.a.createElement("div",{className:"results__nav--middle"},r.a.createElement("h2",null,"Results Will Be Shown Below.")),r.a.createElement("div",{className:"results__nav--right"},r.a.createElement("select",{onChange:this.getInputValue},r.a.createElement("option",{value:"no-filter"},"No Filter"),r.a.createElement("option",{value:"best-rated"},"Best Rated"),r.a.createElement("option",{value:"open"},"Open Now"),r.a.createElement("option",{value:"rating-amount"},"Most Rated"),r.a.createElement("option",{value:"price-low-to-high"},"Price: Low to High"),r.a.createElement("option",{value:"price-high-to-low"},"Price: High to Low"))))}}])&&d(a.prototype,n),o&&d(a,o),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var M=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=w(t).call(this,e),a=!r||"object"!==g(r)&&"function"!=typeof r?S(n):r,O(S(a),"favorites",JSON.parse(localStorage.getItem("favorites"))||[]),O(S(a),"addFavorite",function(e,t){!a.favorites.includes(t)&&a.favorites.length<=20&&(a.favorites.push(t),localStorage.setItem("favorites",JSON.stringify(a.favorites)))}),O(S(a),"removeFavorite",function(e,t){a.favorites.includes(t)&&(a.favorites.splice(a.favorites.indexOf(t),1),a.setState({favorites:a.favorites}),localStorage.setItem("favorites",JSON.stringify(a.favorites)))}),a.state={favorites:a.favorites},a.addFavorite=a.addFavorite.bind(S(a)),a.removeFavorite=a.removeFavorite.bind(S(a)),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,r.a.Component),a=t,(n=[{key:"componentDidUpdate",value:function(e,t){this.favorites!==t.favorites&&this.setState({favorites:this.favorites})}},{key:"render",value:function(){return r.a.createElement("div",{className:"side-bar-left"},r.a.createElement(E,{input:this.props.input,loading:this.props.loading,restaurants:this.props.ramenSpots,filter:this.props.filter,sortResults:this.props.sortResults,setValue:this.props.onChange,favorited:this.state.favorites,removeFavorite:this.removeFavorite}),r.a.createElement(p,{restaurants:this.props.ramenSpots,loading:this.props.loading,input:this.props.input,addFavorite:this.addFavorite,favorites:this.favorites}))}}])&&_(a.prototype,n),o&&_(a,o),t}();t.default=M}}]);