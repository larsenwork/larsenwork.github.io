// Snap SVG Easing
//
// Extends Snap SVG easing functions with Robert Penner's easing equations
// http://www.robertpenner.com/easing/
//

// Quad
//
mina.easeInQuad = function (n) {
  return Math.pow( n, 2 );
};
mina.easeOutQuad = function(n) {
  return -1 * n * ( n - 2 );
};
mina.easeInOutQuad = function (n) {
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( n, 2 );
  return -0.5 * ( ( --n ) * ( n - 2 ) - 1 );
};


// Cubic
//
mina.easeInCubic = function (n) {
  return Math.pow( n, 3 );
};
mina.easeOutCubic = function(n) {
  return Math.pow( n - 1, 3 ) + 1;
};
mina.easeInOutCubic = function (n) {
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( n, 3 );
  return 0.5 * ( Math.pow( n - 2, 3 ) + 2 );
};


// Quart
//
mina.easeInQuart = function (n) {
  return Math.pow( n, 4 );
};
mina.easeOutQuart = function(n) {
  return -1 * ( Math.pow( n - 1, 4 ) - 1 );
};
mina.easeInOutQuart = function (n) {
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( n, 4 );
  return -0.5 * ( Math.pow( n - 2, 4 ) - 2 );
};


// Quint
//
mina.easeInQuint = function (n) {
  return Math.pow( n, 5 );
};
mina.easeOutQuint = function(n) {
  return Math.pow( n - 1, 5 ) + 1;
};
mina.easeInOutQuint = function (n) {
  if ( ( n *= 2 ) < 1) return 0.5 * Math.pow( n, 5 );
  return 0.5 * ( Math.pow( n - 2, 5 ) + 2 );
};


// Sine
//
mina.easeInSine = function (n) {
  return -1 * Math.cos( n * ( Math.PI / 2 ) ) + 1;
};
mina.easeOutSine = function(n) {
  return Math.sin( n * ( Math.PI / 2 ) );
};
mina.easeInOutSine = function (n) {
  return -0.5 * ( Math.cos( Math.PI * n ) - 1 );
};


// Circ
//
mina.easeInCirc = function (n) {
  return -1 * ( Math.sqrt( 1 - n * n ) - 1 );
};
mina.easeOutCirc = function(n) {
  return Math.sqrt( 1 - Math.pow( n - 1, 2 ) );
};
mina.easeInOutCirc = function (n) {
  if ( ( n *= 2 ) < 1 ) return -0.5 * ( Math.sqrt( 1 - n * n ) - 1 );
  return 0.5 * ( Math.sqrt( 1 - ( n -= 2 ) * n ) + 1 );
};


// Expo
//
mina.easeInExpo = function (n) {
  return ( n == 0 ) ? 0 : Math.pow( 2, 10 * ( n - 1 ) );
};
mina.easeOutExpo = function(n) {
  return ( n == 1 ) ? 1 : -Math.pow( 2, -10 * n ) + 1;
};
mina.easeInOutExpo = function (n) {
  if ( n == 0 ) return 0;
  if ( n == 1 ) return 1;
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( 2, 10 * ( n - 1 ) );
  return 0.5 * ( -Math.pow( 2, -10 * --n ) + 2 );
};


// Elastic
//
mina.easeInElastic = function (n) {
  var s = 1.70158, p = 0.3;
  if ( n == 0 ) return 0;
  if ( n == 1 ) return 1;
  s = p / ( 2 * Math.PI ) * Math.asin ( 1 );
  return -( Math.pow( 2, 10 * ( n -= 1 ) ) * Math.sin( ( n - s ) * ( 2 * Math.PI ) / p ));
};
mina.easeOutElastic = function (n) {
  var s = 1.70158, p = 0.3;
  if ( n == 0 ) return 0;
  if ( n == 1 ) return 1;
  s = p / ( 2 * Math.PI ) * Math.asin ( 1 );
  return Math.pow( 2 , -10 * n ) * Math.sin( ( n - s ) * ( 2 * Math.PI ) / p ) + 1;
};
mina.easeInOutElastic = function (n) {
  var p = 0.45, s = p / ( 2 * Math.PI ) * Math.asin( 1 );
  if ( n == 0 ) return 0;
  if ( ( n *= 2 ) == 2 ) return 1;
  if ( n < 1 ) return -0.5 * ( Math.pow( 2, 10 * ( n -= 1 ) ) * Math.sin( ( n - s ) * ( 2 * Math.PI ) / p ) );
  return Math.pow( 2, -10 * ( n -= 1 ) ) * Math.sin( ( n - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
};


// Back
//
mina.easeInBack = function (n, s) {
  if ( s == undefined ) s = 1.70158;
  return Math.pow( n, 2 ) * ( ( s + 1 ) * n - s );
};
mina.easeOutBack = function (n, s) {
  if ( s == undefined ) s = 1.70158;
  return ( Math.pow( --n, 2 ) * ( ( s + 1 ) * n + s ) + 1 );
};
mina.easeInOutBack = function (n, s) {
  if ( s == undefined ) s = 1.70158;
  if ( ( n *= 2 ) < 1 ) return 0.5 * ( Math.pow( n, 2 ) * ( ( ( s *= 1.525 ) + 1 ) * n - s ) );
  return 0.5 * ( Math.pow( ( n -= 2 ), 2 ) * ( ( ( s *= 1.525 ) + 1 ) * n + s ) + 2 );
};


// Bounce
//
mina.easeInBounce = function (n) {
  return 1 - mina.easeOutBounce( 1 - n );
};
mina.easeOutBounce = function (n) {
  if ( n < ( 1 / 2.75 ) ) {
    return 7.5625 * n * n;
  } else if ( n < ( 2 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
  } else if ( n < ( 2.5 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
  } else {
    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
  }
};
mina.easeInOutBounce = function (n) {
  if ( n < 0.5 ) return mina.easeInBounce( n * 2 ) * 0.5;
  return mina.easeOutBounce( n * 2 - 1 ) * 0.5 + 1 * 0.5;
};
