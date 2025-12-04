function hd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _a = { exports: {} }, jl = {}, Ca = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr = Symbol.for("react.element"), yd = Symbol.for("react.portal"), md = Symbol.for("react.fragment"), vd = Symbol.for("react.strict_mode"), gd = Symbol.for("react.profiler"), wd = Symbol.for("react.provider"), xd = Symbol.for("react.context"), Sd = Symbol.for("react.forward_ref"), kd = Symbol.for("react.suspense"), Ed = Symbol.for("react.memo"), _d = Symbol.for("react.lazy"), Xu = Symbol.iterator;
function Cd(e) {
  return e === null || typeof e != "object" ? null : (e = Xu && e[Xu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Na = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pa = Object.assign, Ta = {};
function wn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ta, this.updater = n || Na;
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ra() {
}
Ra.prototype = wn.prototype;
function Hi(e, t, n) {
  this.props = e, this.context = t, this.refs = Ta, this.updater = n || Na;
}
var Qi = Hi.prototype = new Ra();
Qi.constructor = Hi;
Pa(Qi, wn.prototype);
Qi.isPureReactComponent = !0;
var Gu = Array.isArray, za = Object.prototype.hasOwnProperty, Ki = { current: null }, Ma = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ia(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) za.call(t, r) && !Ma.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: dr, type: e, key: o, ref: i, props: l, _owner: Ki.current };
}
function Nd(e, t) {
  return { $$typeof: dr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function Pd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ju = /\/+/g;
function io(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Pd("" + e.key) : t.toString(36);
}
function Qr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case dr:
        case yd:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + io(i, 0) : r, Gu(l) ? (n = "", e != null && (n = e.replace(Ju, "$&/") + "/"), Qr(l, t, n, "", function(a) {
    return a;
  })) : l != null && (Yi(l) && (l = Nd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ju, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Gu(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + io(o, u);
    i += Qr(o, t, n, s, l);
  }
  else if (s = Cd(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + io(o, u++), i += Qr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function kr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Qr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Td(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null }, Kr = { transition: null }, Rd = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Kr, ReactCurrentOwner: Ki };
function Oa() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: kr, forEach: function(e, t, n) {
  kr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return kr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return kr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = wn;
O.Fragment = md;
O.Profiler = gd;
O.PureComponent = Hi;
O.StrictMode = vd;
O.Suspense = kd;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
O.act = Oa;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Ki.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) za.call(t, s) && !Ma.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: dr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function(e) {
  return e = { $$typeof: xd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: wd, _context: e }, e.Consumer = e;
};
O.createElement = Ia;
O.createFactory = function(e) {
  var t = Ia.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Sd, render: e };
};
O.isValidElement = Yi;
O.lazy = function(e) {
  return { $$typeof: _d, _payload: { _status: -1, _result: e }, _init: Td };
};
O.memo = function(e, t) {
  return { $$typeof: Ed, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Kr.transition;
  Kr.transition = {};
  try {
    e();
  } finally {
    Kr.transition = t;
  }
};
O.unstable_act = Oa;
O.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
O.useContext = function(e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
O.useId = function() {
  return ce.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return ce.current.useRef(e);
};
O.useState = function(e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return ce.current.useTransition();
};
O.version = "18.3.1";
Ca.exports = O;
var z = Ca.exports;
const La = /* @__PURE__ */ hd(z);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zd = z, Md = Symbol.for("react.element"), Id = Symbol.for("react.fragment"), Od = Object.prototype.hasOwnProperty, Ld = zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ja(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Od.call(t, r) && !jd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Md, type: e, key: o, ref: i, props: l, _owner: Ld.current };
}
jl.Fragment = Id;
jl.jsx = ja;
jl.jsxs = ja;
_a.exports = jl;
var E = _a.exports, $o = {}, Da = { exports: {} }, Ee = {}, Fa = { exports: {} }, Ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(P, R) {
    var I = P.length;
    P.push(R);
    e: for (; 0 < I; ) {
      var Q = I - 1 >>> 1, J = P[Q];
      if (0 < l(J, R)) P[Q] = R, P[I] = J, I = Q;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var R = P[0], I = P.pop();
    if (I !== R) {
      P[0] = I;
      e: for (var Q = 0, J = P.length, xr = J >>> 1; Q < xr; ) {
        var Pt = 2 * (Q + 1) - 1, oo = P[Pt], Tt = Pt + 1, Sr = P[Tt];
        if (0 > l(oo, I)) Tt < J && 0 > l(Sr, oo) ? (P[Q] = Sr, P[Tt] = I, Q = Tt) : (P[Q] = oo, P[Pt] = I, Q = Pt);
        else if (Tt < J && 0 > l(Sr, I)) P[Q] = Sr, P[Tt] = I, Q = Tt;
        else break e;
      }
    }
    return R;
  }
  function l(P, R) {
    var I = P.sortIndex - R.sortIndex;
    return I !== 0 ? I : P.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], a = [], c = 1, y = null, h = 3, v = !1, g = !1, w = !1, T = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null) r(a);
      else if (R.startTime <= P) r(a), R.sortIndex = R.expirationTime, t(s, R);
      else break;
      R = n(a);
    }
  }
  function m(P) {
    if (w = !1, d(P), !g) if (n(s) !== null) g = !0, ro(S);
    else {
      var R = n(a);
      R !== null && lo(m, R.startTime - P);
    }
  }
  function S(P, R) {
    g = !1, w && (w = !1, p(C), C = -1), v = !0;
    var I = h;
    try {
      for (d(R), y = n(s); y !== null && (!(y.expirationTime > R) || P && !ve()); ) {
        var Q = y.callback;
        if (typeof Q == "function") {
          y.callback = null, h = y.priorityLevel;
          var J = Q(y.expirationTime <= R);
          R = e.unstable_now(), typeof J == "function" ? y.callback = J : y === n(s) && r(s), d(R);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var xr = !0;
      else {
        var Pt = n(a);
        Pt !== null && lo(m, Pt.startTime - R), xr = !1;
      }
      return xr;
    } finally {
      y = null, h = I, v = !1;
    }
  }
  var k = !1, _ = null, C = -1, L = 5, M = -1;
  function ve() {
    return !(e.unstable_now() - M < L);
  }
  function Nt() {
    if (_ !== null) {
      var P = e.unstable_now();
      M = P;
      var R = !0;
      try {
        R = _(!0, P);
      } finally {
        R ? kn() : (k = !1, _ = null);
      }
    } else k = !1;
  }
  var kn;
  if (typeof f == "function") kn = function() {
    f(Nt);
  };
  else if (typeof MessageChannel < "u") {
    var Yu = new MessageChannel(), pd = Yu.port2;
    Yu.port1.onmessage = Nt, kn = function() {
      pd.postMessage(null);
    };
  } else kn = function() {
    T(Nt, 0);
  };
  function ro(P) {
    _ = P, k || (k = !0, kn());
  }
  function lo(P, R) {
    C = T(function() {
      P(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, ro(S));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = h;
    }
    var I = h;
    h = R;
    try {
      return P();
    } finally {
      h = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, R) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var I = h;
    h = P;
    try {
      return R();
    } finally {
      h = I;
    }
  }, e.unstable_scheduleCallback = function(P, R, I) {
    var Q = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? Q + I : Q) : I = Q, P) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = I + J, P = { id: c++, callback: R, priorityLevel: P, startTime: I, expirationTime: J, sortIndex: -1 }, I > Q ? (P.sortIndex = I, t(a, P), n(s) === null && P === n(a) && (w ? (p(C), C = -1) : w = !0, lo(m, I - Q))) : (P.sortIndex = J, t(s, P), g || v || (g = !0, ro(S))), P;
  }, e.unstable_shouldYield = ve, e.unstable_wrapCallback = function(P) {
    var R = h;
    return function() {
      var I = h;
      h = R;
      try {
        return P.apply(this, arguments);
      } finally {
        h = I;
      }
    };
  };
})(Ua);
Fa.exports = Ua;
var Dd = Fa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd = z, ke = Dd;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Aa = /* @__PURE__ */ new Set(), Kn = {};
function Bt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Aa.add(t[e]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bo = Object.prototype.hasOwnProperty, Ud = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zu = {}, qu = {};
function Ad(e) {
  return Bo.call(qu, e) ? !0 : Bo.call(Zu, e) ? !1 : Ud.test(e) ? qu[e] = !0 : (Zu[e] = !0, !1);
}
function $d(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bd(e, t, n, r) {
  if (t === null || typeof t > "u" || $d(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new fe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xi = /[\-:]([a-z])/g;
function Gi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Xi,
    Gi
  );
  ne[t] = new fe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Xi, Gi);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Xi, Gi);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ji(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bd(t, n, l, r) && (n = null), r || l === null ? Ad(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Er = Symbol.for("react.element"), Qt = Symbol.for("react.portal"), Kt = Symbol.for("react.fragment"), Zi = Symbol.for("react.strict_mode"), Vo = Symbol.for("react.profiler"), $a = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), qi = Symbol.for("react.forward_ref"), Wo = Symbol.for("react.suspense"), Ho = Symbol.for("react.suspense_list"), bi = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), Va = Symbol.for("react.offscreen"), bu = Symbol.iterator;
function En(e) {
  return e === null || typeof e != "object" ? null : (e = bu && e[bu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, uo;
function In(e) {
  if (uo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    uo = t && t[1] || "";
  }
  return `
` + uo + e;
}
var so = !1;
function ao(e, t) {
  if (!e || so) return "";
  so = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    so = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? In(e) : "";
}
function Vd(e) {
  switch (e.tag) {
    case 5:
      return In(e.type);
    case 16:
      return In("Lazy");
    case 13:
      return In("Suspense");
    case 19:
      return In("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ao(e.type, !1), e;
    case 11:
      return e = ao(e.type.render, !1), e;
    case 1:
      return e = ao(e.type, !0), e;
    default:
      return "";
  }
}
function Qo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case Vo:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case Wo:
      return "Suspense";
    case Ho:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ba:
      return (e.displayName || "Context") + ".Consumer";
    case $a:
      return (e._context.displayName || "Context") + ".Provider";
    case qi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bi:
      return t = e.displayName || null, t !== null ? t : Qo(e.type) || "Memo";
    case ot:
      t = e._payload, e = e._init;
      try {
        return Qo(e(t));
      } catch {
      }
  }
  return null;
}
function Wd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qo(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Wa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Hd(e) {
  var t = Wa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = Hd(e));
}
function Ha(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Wa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ol(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ko(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function es(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Qa(e, t) {
  t = t.checked, t != null && Ji(e, "checked", t, !1);
}
function Yo(e, t) {
  Qa(e, t);
  var n = xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xo(e, t.type, xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ts(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xo(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var On = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Go(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ns(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (On(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Ka(e, t) {
  var n = xt(t.value), r = xt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function rs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ya(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ya(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cr, Xa = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Cr = Cr || document.createElement("div"), Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Qd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function(e) {
  Qd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Fn[t] = Fn[e];
  });
});
function Ga(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fn.hasOwnProperty(e) && Fn[e] ? ("" + t).trim() : t + "px";
}
function Ja(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ga(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Kd = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zo(e, t) {
  if (t) {
    if (Kd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function qo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var bo = null;
function eu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ei = null, ln = null, on = null;
function ls(e) {
  if (e = yr(e)) {
    if (typeof ei != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = $l(t), ei(e.stateNode, e.type, t));
  }
}
function Za(e) {
  ln ? on ? on.push(e) : on = [e] : ln = e;
}
function qa() {
  if (ln) {
    var e = ln, t = on;
    if (on = ln = null, ls(e), t) for (e = 0; e < t.length; e++) ls(t[e]);
  }
}
function ba(e, t) {
  return e(t);
}
function ec() {
}
var co = !1;
function tc(e, t, n) {
  if (co) return e(t, n);
  co = !0;
  try {
    return ba(e, t, n);
  } finally {
    co = !1, (ln !== null || on !== null) && (ec(), qa());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $l(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ti = !1;
if (qe) try {
  var _n = {};
  Object.defineProperty(_n, "passive", { get: function() {
    ti = !0;
  } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
} catch {
  ti = !1;
}
function Yd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Un = !1, il = null, ul = !1, ni = null, Xd = { onError: function(e) {
  Un = !0, il = e;
} };
function Gd(e, t, n, r, l, o, i, u, s) {
  Un = !1, il = null, Yd.apply(Xd, arguments);
}
function Jd(e, t, n, r, l, o, i, u, s) {
  if (Gd.apply(this, arguments), Un) {
    if (Un) {
      var a = il;
      Un = !1, il = null;
    } else throw Error(x(198));
    ul || (ul = !0, ni = a);
  }
}
function Vt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function nc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function os(e) {
  if (Vt(e) !== e) throw Error(x(188));
}
function Zd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Vt(e), t === null) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return os(l), e;
        if (o === r) return os(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function rc(e) {
  return e = Zd(e), e !== null ? lc(e) : null;
}
function lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var oc = ke.unstable_scheduleCallback, is = ke.unstable_cancelCallback, qd = ke.unstable_shouldYield, bd = ke.unstable_requestPaint, K = ke.unstable_now, ep = ke.unstable_getCurrentPriorityLevel, tu = ke.unstable_ImmediatePriority, ic = ke.unstable_UserBlockingPriority, sl = ke.unstable_NormalPriority, tp = ke.unstable_LowPriority, uc = ke.unstable_IdlePriority, Dl = null, We = null;
function np(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var De = Math.clz32 ? Math.clz32 : op, rp = Math.log, lp = Math.LN2;
function op(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rp(e) / lp | 0) | 0;
}
var Nr = 64, Pr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Ln(u) : (o &= i, o !== 0 && (r = Ln(o)));
  } else i = n & ~l, i !== 0 ? r = Ln(i) : o !== 0 && (r = Ln(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function ip(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function up(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - De(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = ip(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ri(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sc() {
  var e = Nr;
  return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
}
function fo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n;
}
function sp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function nu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var D = 0;
function ac(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var cc, ru, fc, dc, pc, li = !1, Tr = [], dt = null, pt = null, ht = null, Gn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), ut = [], ap = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function us(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dt = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && ru(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function cp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return dt = Cn(dt, e, t, n, r, l), !0;
    case "dragenter":
      return pt = Cn(pt, e, t, n, r, l), !0;
    case "mouseover":
      return ht = Cn(ht, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gn.set(o, Cn(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Jn.set(o, Cn(Jn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function hc(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = nc(n), t !== null) {
          e.blockedOn = t, pc(e.priority, function() {
            fc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      bo = r, n.target.dispatchEvent(r), bo = null;
    } else return t = yr(n), t !== null && ru(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ss(e, t, n) {
  Yr(e) && n.delete(t);
}
function fp() {
  li = !1, dt !== null && Yr(dt) && (dt = null), pt !== null && Yr(pt) && (pt = null), ht !== null && Yr(ht) && (ht = null), Gn.forEach(ss), Jn.forEach(ss);
}
function Nn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, li || (li = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, fp)));
}
function Zn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < Tr.length) {
    Nn(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (dt !== null && Nn(dt, e), pt !== null && Nn(pt, e), ht !== null && Nn(ht, e), Gn.forEach(t), Jn.forEach(t), n = 0; n < ut.length; n++) r = ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && (n = ut[0], n.blockedOn === null); ) hc(n), n.blockedOn === null && ut.shift();
}
var un = rt.ReactCurrentBatchConfig, cl = !0;
function dp(e, t, n, r) {
  var l = D, o = un.transition;
  un.transition = null;
  try {
    D = 1, lu(e, t, n, r);
  } finally {
    D = l, un.transition = o;
  }
}
function pp(e, t, n, r) {
  var l = D, o = un.transition;
  un.transition = null;
  try {
    D = 4, lu(e, t, n, r);
  } finally {
    D = l, un.transition = o;
  }
}
function lu(e, t, n, r) {
  if (cl) {
    var l = oi(e, t, n, r);
    if (l === null) ko(e, t, r, fl, n), us(e, r);
    else if (cp(l, e, t, n, r)) r.stopPropagation();
    else if (us(e, r), t & 4 && -1 < ap.indexOf(e)) {
      for (; l !== null; ) {
        var o = yr(l);
        if (o !== null && cc(o), o = oi(e, t, n, r), o === null && ko(e, t, r, fl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ko(e, t, r, null, n);
  }
}
var fl = null;
function oi(e, t, n, r) {
  if (fl = null, e = eu(r), e = Mt(e), e !== null) if (t = Vt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = nc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return fl = e, null;
}
function yc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ep()) {
        case tu:
          return 1;
        case ic:
          return 4;
        case sl:
        case tp:
          return 16;
        case uc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null, ou = null, Xr = null;
function mc() {
  if (Xr) return Xr;
  var e, t = ou, n = t.length, r, l = "value" in at ? at.value : at.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Xr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Gr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Rr() {
  return !0;
}
function as() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Rr : as, this.isPropagationStopped = as, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Rr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Rr);
  }, persist: function() {
  }, isPersistent: Rr }), t;
}
var xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, iu = _e(xn), hr = W({}, xn, { view: 0, detail: 0 }), hp = _e(hr), po, ho, Pn, Fl = W({}, hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (po = e.screenX - Pn.screenX, ho = e.screenY - Pn.screenY) : ho = po = 0, Pn = e), po);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ho;
} }), cs = _e(Fl), yp = W({}, Fl, { dataTransfer: 0 }), mp = _e(yp), vp = W({}, hr, { relatedTarget: 0 }), yo = _e(vp), gp = W({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wp = _e(gp), xp = W({}, xn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sp = _e(xp), kp = W({}, xn, { data: 0 }), fs = _e(kp), Ep = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, _p = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Cp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Np(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cp[e]) ? !!t[e] : !1;
}
function uu() {
  return Np;
}
var Pp = W({}, hr, { key: function(e) {
  if (e.key) {
    var t = Ep[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Gr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _p[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uu, charCode: function(e) {
  return e.type === "keypress" ? Gr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Gr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Tp = _e(Pp), Rp = W({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ds = _e(Rp), zp = W({}, hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uu }), Mp = _e(zp), Ip = W({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Op = _e(Ip), Lp = W({}, Fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), jp = _e(Lp), Dp = [9, 13, 27, 32], su = qe && "CompositionEvent" in window, An = null;
qe && "documentMode" in document && (An = document.documentMode);
var Fp = qe && "TextEvent" in window && !An, vc = qe && (!su || An && 8 < An && 11 >= An), ps = " ", hs = !1;
function gc(e, t) {
  switch (e) {
    case "keyup":
      return Dp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function wc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function Up(e, t) {
  switch (e) {
    case "compositionend":
      return wc(t);
    case "keypress":
      return t.which !== 32 ? null : (hs = !0, ps);
    case "textInput":
      return e = t.data, e === ps && hs ? null : e;
    default:
      return null;
  }
}
function Ap(e, t) {
  if (Yt) return e === "compositionend" || !su && gc(e, t) ? (e = mc(), Xr = ou = at = null, Yt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return vc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $p = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ys(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$p[e.type] : t === "textarea";
}
function xc(e, t, n, r) {
  Za(r), t = dl(t, "onChange"), 0 < t.length && (n = new iu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var $n = null, qn = null;
function Bp(e) {
  Mc(e, 0);
}
function Ul(e) {
  var t = Jt(e);
  if (Ha(t)) return e;
}
function Vp(e, t) {
  if (e === "change") return t;
}
var Sc = !1;
if (qe) {
  var mo;
  if (qe) {
    var vo = "oninput" in document;
    if (!vo) {
      var ms = document.createElement("div");
      ms.setAttribute("oninput", "return;"), vo = typeof ms.oninput == "function";
    }
    mo = vo;
  } else mo = !1;
  Sc = mo && (!document.documentMode || 9 < document.documentMode);
}
function vs() {
  $n && ($n.detachEvent("onpropertychange", kc), qn = $n = null);
}
function kc(e) {
  if (e.propertyName === "value" && Ul(qn)) {
    var t = [];
    xc(t, qn, e, eu(e)), tc(Bp, t);
  }
}
function Wp(e, t, n) {
  e === "focusin" ? (vs(), $n = t, qn = n, $n.attachEvent("onpropertychange", kc)) : e === "focusout" && vs();
}
function Hp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ul(qn);
}
function Qp(e, t) {
  if (e === "click") return Ul(t);
}
function Kp(e, t) {
  if (e === "input" || e === "change") return Ul(t);
}
function Yp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ue = typeof Object.is == "function" ? Object.is : Yp;
function bn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Bo.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function gs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ws(e, t) {
  var n = gs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gs(n);
  }
}
function Ec(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ec(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function _c() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Xp(e) {
  var t = _c(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ec(n.ownerDocument.documentElement, n)) {
    if (r !== null && au(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ws(n, o);
        var i = ws(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Gp = qe && "documentMode" in document && 11 >= document.documentMode, Xt = null, ii = null, Bn = null, ui = !1;
function xs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ui || Xt == null || Xt !== ol(r) || (r = Xt, "selectionStart" in r && au(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Bn && bn(Bn, r) || (Bn = r, r = dl(ii, "onSelect"), 0 < r.length && (t = new iu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xt)));
}
function zr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Gt = { animationend: zr("Animation", "AnimationEnd"), animationiteration: zr("Animation", "AnimationIteration"), animationstart: zr("Animation", "AnimationStart"), transitionend: zr("Transition", "TransitionEnd") }, go = {}, Cc = {};
qe && (Cc = document.createElement("div").style, "AnimationEvent" in window || (delete Gt.animationend.animation, delete Gt.animationiteration.animation, delete Gt.animationstart.animation), "TransitionEvent" in window || delete Gt.transitionend.transition);
function Al(e) {
  if (go[e]) return go[e];
  if (!Gt[e]) return e;
  var t = Gt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Cc) return go[e] = t[n];
  return e;
}
var Nc = Al("animationend"), Pc = Al("animationiteration"), Tc = Al("animationstart"), Rc = Al("transitionend"), zc = /* @__PURE__ */ new Map(), Ss = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Et(e, t) {
  zc.set(e, t), Bt(t, [e]);
}
for (var wo = 0; wo < Ss.length; wo++) {
  var xo = Ss[wo], Jp = xo.toLowerCase(), Zp = xo[0].toUpperCase() + xo.slice(1);
  Et(Jp, "on" + Zp);
}
Et(Nc, "onAnimationEnd");
Et(Pc, "onAnimationIteration");
Et(Tc, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Rc, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qp = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function ks(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Jd(r, t, void 0, e), e.currentTarget = null;
}
function Mc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ks(l, u, a), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ks(l, u, a), o = s;
      }
    }
  }
  if (ul) throw e = ni, ul = !1, ni = null, e;
}
function U(e, t) {
  var n = t[di];
  n === void 0 && (n = t[di] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ic(t, e, 2, !1), n.add(r));
}
function So(e, t, n) {
  var r = 0;
  t && (r |= 4), Ic(n, e, r, t);
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Mr]) {
    e[Mr] = !0, Aa.forEach(function(n) {
      n !== "selectionchange" && (qp.has(n) || So(n, !1, e), So(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mr] || (t[Mr] = !0, So("selectionchange", !1, t));
  }
}
function Ic(e, t, n, r) {
  switch (yc(t)) {
    case 1:
      var l = dp;
      break;
    case 4:
      l = pp;
      break;
    default:
      l = lu;
  }
  n = l.bind(null, t, n, e), l = void 0, !ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ko(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Mt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  tc(function() {
    var a = o, c = eu(n), y = [];
    e: {
      var h = zc.get(e);
      if (h !== void 0) {
        var v = iu, g = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Tp;
            break;
          case "focusin":
            g = "focus", v = yo;
            break;
          case "focusout":
            g = "blur", v = yo;
            break;
          case "beforeblur":
          case "afterblur":
            v = yo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = cs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = mp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Mp;
            break;
          case Nc:
          case Pc:
          case Tc:
            v = wp;
            break;
          case Rc:
            v = Op;
            break;
          case "scroll":
            v = hp;
            break;
          case "wheel":
            v = jp;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Sp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ds;
        }
        var w = (t & 4) !== 0, T = !w && e === "scroll", p = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var f = a, d; f !== null; ) {
          d = f;
          var m = d.stateNode;
          if (d.tag === 5 && m !== null && (d = m, p !== null && (m = Xn(f, p), m != null && w.push(tr(f, m, d)))), T) break;
          f = f.return;
        }
        0 < w.length && (h = new v(h, g, null, n, c), y.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== bo && (g = n.relatedTarget || n.fromElement) && (Mt(g) || g[be])) break e;
        if ((v || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Mt(g) : null, g !== null && (T = Vt(g), g !== T || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (w = cs, m = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (w = ds, m = "onPointerLeave", p = "onPointerEnter", f = "pointer"), T = v == null ? h : Jt(v), d = g == null ? h : Jt(g), h = new w(m, f + "leave", v, n, c), h.target = T, h.relatedTarget = d, m = null, Mt(c) === a && (w = new w(p, f + "enter", g, n, c), w.target = d, w.relatedTarget = T, m = w), T = m, v && g) t: {
            for (w = v, p = g, f = 0, d = w; d; d = Wt(d)) f++;
            for (d = 0, m = p; m; m = Wt(m)) d++;
            for (; 0 < f - d; ) w = Wt(w), f--;
            for (; 0 < d - f; ) p = Wt(p), d--;
            for (; f--; ) {
              if (w === p || p !== null && w === p.alternate) break t;
              w = Wt(w), p = Wt(p);
            }
            w = null;
          }
          else w = null;
          v !== null && Es(y, h, v, w, !1), g !== null && T !== null && Es(y, T, g, w, !0);
        }
      }
      e: {
        if (h = a ? Jt(a) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var S = Vp;
        else if (ys(h)) if (Sc) S = Kp;
        else {
          S = Hp;
          var k = Wp;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = Qp);
        if (S && (S = S(e, a))) {
          xc(y, S, n, c);
          break e;
        }
        k && k(e, h, a), e === "focusout" && (k = h._wrapperState) && k.controlled && h.type === "number" && Xo(h, "number", h.value);
      }
      switch (k = a ? Jt(a) : window, e) {
        case "focusin":
          (ys(k) || k.contentEditable === "true") && (Xt = k, ii = a, Bn = null);
          break;
        case "focusout":
          Bn = ii = Xt = null;
          break;
        case "mousedown":
          ui = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ui = !1, xs(y, n, c);
          break;
        case "selectionchange":
          if (Gp) break;
        case "keydown":
        case "keyup":
          xs(y, n, c);
      }
      var _;
      if (su) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else Yt ? gc(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (vc && n.locale !== "ko" && (Yt || C !== "onCompositionStart" ? C === "onCompositionEnd" && Yt && (_ = mc()) : (at = c, ou = "value" in at ? at.value : at.textContent, Yt = !0)), k = dl(a, C), 0 < k.length && (C = new fs(C, e, null, n, c), y.push({ event: C, listeners: k }), _ ? C.data = _ : (_ = wc(n), _ !== null && (C.data = _)))), (_ = Fp ? Up(e, n) : Ap(e, n)) && (a = dl(a, "onBeforeInput"), 0 < a.length && (c = new fs("onBeforeInput", "beforeinput", null, n, c), y.push({ event: c, listeners: a }), c.data = _));
    }
    Mc(y, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Xn(e, n), o != null && r.unshift(tr(e, o, l)), o = Xn(e, t), o != null && r.push(tr(e, o, l))), e = e.return;
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Es(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, l ? (s = Xn(n, o), s != null && i.unshift(tr(n, s, u))) : l || (s = Xn(n, o), s != null && i.push(tr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bp = /\r\n?/g, eh = /\u0000|\uFFFD/g;
function _s(e) {
  return (typeof e == "string" ? e : "" + e).replace(bp, `
`).replace(eh, "");
}
function Ir(e, t, n) {
  if (t = _s(t), _s(e) !== t && n) throw Error(x(425));
}
function pl() {
}
var si = null, ai = null;
function ci(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fi = typeof setTimeout == "function" ? setTimeout : void 0, th = typeof clearTimeout == "function" ? clearTimeout : void 0, Cs = typeof Promise == "function" ? Promise : void 0, nh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cs < "u" ? function(e) {
  return Cs.resolve(null).then(e).catch(rh);
} : fi;
function rh(e) {
  setTimeout(function() {
    throw e;
  });
}
function Eo(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Zn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Zn(t);
}
function yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ns(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + Sn, nr = "__reactProps$" + Sn, be = "__reactContainer$" + Sn, di = "__reactEvents$" + Sn, lh = "__reactListeners$" + Sn, oh = "__reactHandles$" + Sn;
function Mt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[be] || n[Ve]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ns(e); e !== null; ) {
        if (n = e[Ve]) return n;
        e = Ns(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[Ve] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function $l(e) {
  return e[nr] || null;
}
var pi = [], Zt = -1;
function _t(e) {
  return { current: e };
}
function A(e) {
  0 > Zt || (e.current = pi[Zt], pi[Zt] = null, Zt--);
}
function F(e, t) {
  Zt++, pi[Zt] = e.current, e.current = t;
}
var St = {}, ie = _t(St), he = _t(!1), Dt = St;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ye(e) {
  return e = e.childContextTypes, e != null;
}
function hl() {
  A(he), A(ie);
}
function Ps(e, t, n) {
  if (ie.current !== St) throw Error(x(168));
  F(ie, t), F(he, n);
}
function Oc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Wd(e) || "Unknown", l));
  return W({}, n, r);
}
function yl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, Dt = ie.current, F(ie, e), F(he, he.current), !0;
}
function Ts(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = Oc(e, t, Dt), r.__reactInternalMemoizedMergedChildContext = e, A(he), A(ie), F(ie, e)) : A(he), F(he, n);
}
var Ke = null, Bl = !1, _o = !1;
function Lc(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function ih(e) {
  Bl = !0, Lc(e);
}
function Ct() {
  if (!_o && Ke !== null) {
    _o = !0;
    var e = 0, t = D;
    try {
      var n = Ke;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, Bl = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), oc(tu, Ct), l;
    } finally {
      D = t, _o = !1;
    }
  }
  return null;
}
var qt = [], bt = 0, ml = null, vl = 0, Ce = [], Ne = 0, Ft = null, Xe = 1, Ge = "";
function Rt(e, t) {
  qt[bt++] = vl, qt[bt++] = ml, ml = e, vl = t;
}
function jc(e, t, n) {
  Ce[Ne++] = Xe, Ce[Ne++] = Ge, Ce[Ne++] = Ft, Ft = e;
  var r = Xe;
  e = Ge;
  var l = 32 - De(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - De(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Xe = 1 << 32 - De(t) + l | n << l | r, Ge = o + e;
  } else Xe = 1 << o | n << l | r, Ge = e;
}
function cu(e) {
  e.return !== null && (Rt(e, 1), jc(e, 1, 0));
}
function fu(e) {
  for (; e === ml; ) ml = qt[--bt], qt[bt] = null, vl = qt[--bt], qt[bt] = null;
  for (; e === Ft; ) Ft = Ce[--Ne], Ce[Ne] = null, Ge = Ce[--Ne], Ce[Ne] = null, Xe = Ce[--Ne], Ce[Ne] = null;
}
var Se = null, we = null, $ = !1, Le = null;
function Dc(e, t) {
  var n = Pe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Rs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Se = e, we = yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Se = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ft !== null ? { id: Xe, overflow: Ge } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Se = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yi(e) {
  if ($) {
    var t = we;
    if (t) {
      var n = t;
      if (!Rs(e, t)) {
        if (hi(e)) throw Error(x(418));
        t = yt(n.nextSibling);
        var r = Se;
        t && Rs(e, t) ? Dc(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Se = e);
      }
    } else {
      if (hi(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, $ = !1, Se = e;
    }
  }
}
function zs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Se = e;
}
function Or(e) {
  if (e !== Se) return !1;
  if (!$) return zs(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ci(e.type, e.memoizedProps)), t && (t = we)) {
    if (hi(e)) throw Fc(), Error(x(418));
    for (; t; ) Dc(e, t), t = yt(t.nextSibling);
  }
  if (zs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Fc() {
  for (var e = we; e; ) e = yt(e.nextSibling);
}
function dn() {
  we = Se = null, $ = !1;
}
function du(e) {
  Le === null ? Le = [e] : Le.push(e);
}
var uh = rt.ReactCurrentBatchConfig;
function Tn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ms(e) {
  var t = e._init;
  return t(e._payload);
}
function Uc(e) {
  function t(p, f) {
    if (e) {
      var d = p.deletions;
      d === null ? (p.deletions = [f], p.flags |= 16) : d.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function r(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function l(p, f) {
    return p = wt(p, f), p.index = 0, p.sibling = null, p;
  }
  function o(p, f, d) {
    return p.index = d, e ? (d = p.alternate, d !== null ? (d = d.index, d < f ? (p.flags |= 2, f) : d) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, d, m) {
    return f === null || f.tag !== 6 ? (f = Mo(d, p.mode, m), f.return = p, f) : (f = l(f, d), f.return = p, f);
  }
  function s(p, f, d, m) {
    var S = d.type;
    return S === Kt ? c(p, f, d.props.children, m, d.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === ot && Ms(S) === f.type) ? (m = l(f, d.props), m.ref = Tn(p, f, d), m.return = p, m) : (m = nl(d.type, d.key, d.props, null, p.mode, m), m.ref = Tn(p, f, d), m.return = p, m);
  }
  function a(p, f, d, m) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== d.containerInfo || f.stateNode.implementation !== d.implementation ? (f = Io(d, p.mode, m), f.return = p, f) : (f = l(f, d.children || []), f.return = p, f);
  }
  function c(p, f, d, m, S) {
    return f === null || f.tag !== 7 ? (f = jt(d, p.mode, m, S), f.return = p, f) : (f = l(f, d), f.return = p, f);
  }
  function y(p, f, d) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Mo("" + f, p.mode, d), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Er:
          return d = nl(f.type, f.key, f.props, null, p.mode, d), d.ref = Tn(p, null, f), d.return = p, d;
        case Qt:
          return f = Io(f, p.mode, d), f.return = p, f;
        case ot:
          var m = f._init;
          return y(p, m(f._payload), d);
      }
      if (On(f) || En(f)) return f = jt(f, p.mode, d, null), f.return = p, f;
      Lr(p, f);
    }
    return null;
  }
  function h(p, f, d, m) {
    var S = f !== null ? f.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return S !== null ? null : u(p, f, "" + d, m);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          return d.key === S ? s(p, f, d, m) : null;
        case Qt:
          return d.key === S ? a(p, f, d, m) : null;
        case ot:
          return S = d._init, h(
            p,
            f,
            S(d._payload),
            m
          );
      }
      if (On(d) || En(d)) return S !== null ? null : c(p, f, d, m, null);
      Lr(p, d);
    }
    return null;
  }
  function v(p, f, d, m, S) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return p = p.get(d) || null, u(f, p, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Er:
          return p = p.get(m.key === null ? d : m.key) || null, s(f, p, m, S);
        case Qt:
          return p = p.get(m.key === null ? d : m.key) || null, a(f, p, m, S);
        case ot:
          var k = m._init;
          return v(p, f, d, k(m._payload), S);
      }
      if (On(m) || En(m)) return p = p.get(d) || null, c(f, p, m, S, null);
      Lr(f, m);
    }
    return null;
  }
  function g(p, f, d, m) {
    for (var S = null, k = null, _ = f, C = f = 0, L = null; _ !== null && C < d.length; C++) {
      _.index > C ? (L = _, _ = null) : L = _.sibling;
      var M = h(p, _, d[C], m);
      if (M === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && M.alternate === null && t(p, _), f = o(M, f, C), k === null ? S = M : k.sibling = M, k = M, _ = L;
    }
    if (C === d.length) return n(p, _), $ && Rt(p, C), S;
    if (_ === null) {
      for (; C < d.length; C++) _ = y(p, d[C], m), _ !== null && (f = o(_, f, C), k === null ? S = _ : k.sibling = _, k = _);
      return $ && Rt(p, C), S;
    }
    for (_ = r(p, _); C < d.length; C++) L = v(_, p, C, d[C], m), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? C : L.key), f = o(L, f, C), k === null ? S = L : k.sibling = L, k = L);
    return e && _.forEach(function(ve) {
      return t(p, ve);
    }), $ && Rt(p, C), S;
  }
  function w(p, f, d, m) {
    var S = En(d);
    if (typeof S != "function") throw Error(x(150));
    if (d = S.call(d), d == null) throw Error(x(151));
    for (var k = S = null, _ = f, C = f = 0, L = null, M = d.next(); _ !== null && !M.done; C++, M = d.next()) {
      _.index > C ? (L = _, _ = null) : L = _.sibling;
      var ve = h(p, _, M.value, m);
      if (ve === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && ve.alternate === null && t(p, _), f = o(ve, f, C), k === null ? S = ve : k.sibling = ve, k = ve, _ = L;
    }
    if (M.done) return n(
      p,
      _
    ), $ && Rt(p, C), S;
    if (_ === null) {
      for (; !M.done; C++, M = d.next()) M = y(p, M.value, m), M !== null && (f = o(M, f, C), k === null ? S = M : k.sibling = M, k = M);
      return $ && Rt(p, C), S;
    }
    for (_ = r(p, _); !M.done; C++, M = d.next()) M = v(_, p, C, M.value, m), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? C : M.key), f = o(M, f, C), k === null ? S = M : k.sibling = M, k = M);
    return e && _.forEach(function(Nt) {
      return t(p, Nt);
    }), $ && Rt(p, C), S;
  }
  function T(p, f, d, m) {
    if (typeof d == "object" && d !== null && d.type === Kt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          e: {
            for (var S = d.key, k = f; k !== null; ) {
              if (k.key === S) {
                if (S = d.type, S === Kt) {
                  if (k.tag === 7) {
                    n(p, k.sibling), f = l(k, d.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (k.elementType === S || typeof S == "object" && S !== null && S.$$typeof === ot && Ms(S) === k.type) {
                  n(p, k.sibling), f = l(k, d.props), f.ref = Tn(p, k, d), f.return = p, p = f;
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            d.type === Kt ? (f = jt(d.props.children, p.mode, m, d.key), f.return = p, p = f) : (m = nl(d.type, d.key, d.props, null, p.mode, m), m.ref = Tn(p, f, d), m.return = p, p = m);
          }
          return i(p);
        case Qt:
          e: {
            for (k = d.key; f !== null; ) {
              if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === d.containerInfo && f.stateNode.implementation === d.implementation) {
                n(p, f.sibling), f = l(f, d.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = Io(d, p.mode, m), f.return = p, p = f;
          }
          return i(p);
        case ot:
          return k = d._init, T(p, f, k(d._payload), m);
      }
      if (On(d)) return g(p, f, d, m);
      if (En(d)) return w(p, f, d, m);
      Lr(p, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, f !== null && f.tag === 6 ? (n(p, f.sibling), f = l(f, d), f.return = p, p = f) : (n(p, f), f = Mo(d, p.mode, m), f.return = p, p = f), i(p)) : n(p, f);
  }
  return T;
}
var pn = Uc(!0), Ac = Uc(!1), gl = _t(null), wl = null, en = null, pu = null;
function hu() {
  pu = en = wl = null;
}
function yu(e) {
  var t = gl.current;
  A(gl), e._currentValue = t;
}
function mi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function sn(e, t) {
  wl = e, pu = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function Re(e) {
  var t = e._currentValue;
  if (pu !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (wl === null) throw Error(x(308));
    en = e, wl.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var It = null;
function mu(e) {
  It === null ? It = [e] : It.push(e);
}
function $c(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, mu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r);
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function vu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Je(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, j & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, mu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n);
}
function Jr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nu(e, n);
  }
}
function Is(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function xl(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== i && (u === null ? c.firstBaseUpdate = a : u.next = a, c.lastBaseUpdate = s));
  }
  if (o !== null) {
    var y = l.baseState;
    i = 0, c = a = s = null, u = o;
    do {
      var h = u.lane, v = u.eventTime;
      if ((r & h) === h) {
        c !== null && (c = c.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, w = u;
          switch (h = t, v = n, w.tag) {
            case 1:
              if (g = w.payload, typeof g == "function") {
                y = g.call(v, y, h);
                break e;
              }
              y = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = w.payload, h = typeof g == "function" ? g.call(v, y, h) : g, h == null) break e;
              y = W({}, y, h);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
      } else v = { eventTime: v, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (a = c = v, s = y) : c = c.next = v, i |= h;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (c === null && (s = y), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    At |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Os(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(x(191, l));
      l.call(r);
    }
  }
}
var mr = {}, He = _t(mr), rr = _t(mr), lr = _t(mr);
function Ot(e) {
  if (e === mr) throw Error(x(174));
  return e;
}
function gu(e, t) {
  switch (F(lr, t), F(rr, e), F(He, mr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jo(t, e);
  }
  A(He), F(He, t);
}
function hn() {
  A(He), A(rr), A(lr);
}
function Vc(e) {
  Ot(lr.current);
  var t = Ot(He.current), n = Jo(t, e.type);
  t !== n && (F(rr, e), F(He, n));
}
function wu(e) {
  rr.current === e && (A(He), A(rr));
}
var B = _t(0);
function Sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Co = [];
function xu() {
  for (var e = 0; e < Co.length; e++) Co[e]._workInProgressVersionPrimary = null;
  Co.length = 0;
}
var Zr = rt.ReactCurrentDispatcher, No = rt.ReactCurrentBatchConfig, Ut = 0, V = null, X = null, Z = null, kl = !1, Vn = !1, or = 0, sh = 0;
function re() {
  throw Error(x(321));
}
function Su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, l, o) {
  if (Ut = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zr.current = e === null || e.memoizedState === null ? dh : ph, e = n(r, l), Vn) {
    o = 0;
    do {
      if (Vn = !1, or = 0, 25 <= o) throw Error(x(301));
      o += 1, Z = X = null, t.updateQueue = null, Zr.current = hh, e = n(r, l);
    } while (Vn);
  }
  if (Zr.current = El, t = X !== null && X.next !== null, Ut = 0, Z = X = V = null, kl = !1, t) throw Error(x(300));
  return e;
}
function Eu() {
  var e = or !== 0;
  return or = 0, e;
}
function Be() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? V.memoizedState = Z = e : Z = Z.next = e, Z;
}
function ze() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = Z === null ? V.memoizedState : Z.next;
  if (t !== null) Z = t, X = e;
  else {
    if (e === null) throw Error(x(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, Z === null ? V.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Po(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, a = o;
    do {
      var c = a.lane;
      if ((Ut & c) === c) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var y = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = y, i = r) : s = s.next = y, V.lanes |= c, At |= c;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, Ue(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, V.lanes |= o, At |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function To(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ue(o, t.memoizedState) || (pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Wc() {
}
function Hc(e, t) {
  var n = V, r = ze(), l = t(), o = !Ue(r.memoizedState, l);
  if (o && (r.memoizedState = l, pe = !0), r = r.queue, _u(Yc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, ur(9, Kc.bind(null, n, r, l, t), void 0, null), q === null) throw Error(x(349));
    Ut & 30 || Qc(n, t, l);
  }
  return l;
}
function Qc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Kc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Xc(t) && Gc(e);
}
function Yc(e, t, n) {
  return n(function() {
    Xc(t) && Gc(e);
  });
}
function Xc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Gc(e) {
  var t = et(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Ls(e) {
  var t = Be();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = fh.bind(null, V, e), [t.memoizedState, e];
}
function ur(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Jc() {
  return ze().memoizedState;
}
function qr(e, t, n, r) {
  var l = Be();
  V.flags |= e, l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r);
}
function Vl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (o = i.destroy, r !== null && Su(r, i.deps)) {
      l.memoizedState = ur(t, n, o, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = ur(1 | t, n, o, r);
}
function js(e, t) {
  return qr(8390656, 8, e, t);
}
function _u(e, t) {
  return Vl(2048, 8, e, t);
}
function Zc(e, t) {
  return Vl(4, 2, e, t);
}
function qc(e, t) {
  return Vl(4, 4, e, t);
}
function bc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ef(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vl(4, 4, bc.bind(null, t, e), n);
}
function Cu() {
}
function tf(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function nf(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function rf(e, t, n) {
  return Ut & 21 ? (Ue(n, t) || (n = sc(), V.lanes |= n, At |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function ah(e, t) {
  var n = D;
  D = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = No.transition;
  No.transition = {};
  try {
    e(!1), t();
  } finally {
    D = n, No.transition = r;
  }
}
function lf() {
  return ze().memoizedState;
}
function ch(e, t, n) {
  var r = gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, of(e)) uf(t, n);
  else if (n = $c(e, t, n, r), n !== null) {
    var l = se();
    Fe(n, e, r, l), sf(n, t, r);
  }
}
function fh(e, t, n) {
  var r = gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (of(e)) uf(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ue(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, mu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = $c(e, t, l, r), n !== null && (l = se(), Fe(n, e, r, l), sf(n, t, r));
  }
}
function of(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function uf(e, t) {
  Vn = kl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function sf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nu(e, n);
  }
}
var El = { readContext: Re, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, dh = { readContext: Re, useCallback: function(e, t) {
  return Be().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Re, useEffect: js, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qr(
    4194308,
    4,
    bc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return qr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return qr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Be();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Be();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ch.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Be();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ls, useDebugValue: Cu, useDeferredValue: function(e) {
  return Be().memoizedState = e;
}, useTransition: function() {
  var e = Ls(!1), t = e[0];
  return e = ah.bind(null, e[1]), Be().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Be();
  if ($) {
    if (n === void 0) throw Error(x(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(x(349));
    Ut & 30 || Qc(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, js(Yc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, ur(9, Kc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Be(), t = q.identifierPrefix;
  if ($) {
    var n = Ge, r = Xe;
    n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = or++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = sh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ph = {
  readContext: Re,
  useCallback: tf,
  useContext: Re,
  useEffect: _u,
  useImperativeHandle: ef,
  useInsertionEffect: Zc,
  useLayoutEffect: qc,
  useMemo: nf,
  useReducer: Po,
  useRef: Jc,
  useState: function() {
    return Po(ir);
  },
  useDebugValue: Cu,
  useDeferredValue: function(e) {
    var t = ze();
    return rf(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Po(ir)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Wc,
  useSyncExternalStore: Hc,
  useId: lf,
  unstable_isNewReconciler: !1
}, hh = { readContext: Re, useCallback: tf, useContext: Re, useEffect: _u, useImperativeHandle: ef, useInsertionEffect: Zc, useLayoutEffect: qc, useMemo: nf, useReducer: To, useRef: Jc, useState: function() {
  return To(ir);
}, useDebugValue: Cu, useDeferredValue: function(e) {
  var t = ze();
  return X === null ? t.memoizedState = e : rf(t, X.memoizedState, e);
}, useTransition: function() {
  var e = To(ir)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: Wc, useSyncExternalStore: Hc, useId: lf, unstable_isNewReconciler: !1 };
function Ie(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Vt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = gt(e), o = Je(r, l);
  o.payload = t, n != null && (o.callback = n), t = mt(e, o, l), t !== null && (Fe(t, e, l, r), Jr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = gt(e), o = Je(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = mt(e, o, l), t !== null && (Fe(t, e, l, r), Jr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = se(), r = gt(e), l = Je(n, r);
  l.tag = 2, t != null && (l.callback = t), t = mt(e, l, r), t !== null && (Fe(t, e, r, n), Jr(t, e, r));
} };
function Ds(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !bn(n, r) || !bn(l, o) : !0;
}
function af(e, t, n) {
  var r = !1, l = St, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Re(o) : (l = ye(t) ? Dt : ie.current, r = t.contextTypes, o = (r = r != null) ? fn(e, l) : St), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Fs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wl.enqueueReplaceState(t, t.state, null);
}
function gi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, vu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Re(o) : (o = ye(t) ? Dt : ie.current, l.context = fn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (vi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Wl.enqueueReplaceState(l, l.state, null), xl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vd(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function wi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var yh = typeof WeakMap == "function" ? WeakMap : Map;
function cf(e, t, n) {
  n = Je(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Cl || (Cl = !0, Ri = r), wi(e, t);
  }, n;
}
function ff(e, t, n) {
  n = Je(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      wi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    wi(e, t), typeof r != "function" && (vt === null ? vt = /* @__PURE__ */ new Set([this]) : vt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Us(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Rh.bind(null, e, t, n), t.then(e, e));
}
function As(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $s(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Je(-1, 1), t.tag = 2, mt(n, t, 1))), n.lanes |= 1), e);
}
var mh = rt.ReactCurrentOwner, pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ac(t, null, n, r) : pn(t, e.child, n, r);
}
function Bs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return sn(t, l), r = ku(e, t, n, r, o, l), n = Eu(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && n && cu(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Vs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ou(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, df(e, t, o, r, l)) : (e = nl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : bn, n(i, r) && e.ref === t.ref) return tt(e, t, l);
  }
  return t.flags |= 1, e = wt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function df(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bn(o, r) && e.ref === t.ref) if (pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (pe = !0);
    else return t.lanes = e.lanes, tt(e, t, l);
  }
  return xi(e, t, n, r, l);
}
function pf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(nn, ge), ge |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(nn, ge), ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, F(nn, ge), ge |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, F(nn, ge), ge |= r;
  return ue(e, t, l, n), t.child;
}
function hf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function xi(e, t, n, r, l) {
  var o = ye(n) ? Dt : ie.current;
  return o = fn(t, o), sn(t, l), n = ku(e, t, n, r, o, l), r = Eu(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && r && cu(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Ws(e, t, n, r, l) {
  if (ye(n)) {
    var o = !0;
    yl(t);
  } else o = !1;
  if (sn(t, l), t.stateNode === null) br(e, t), af(t, n, r), gi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Re(a) : (a = ye(n) ? Dt : ie.current, a = fn(t, a));
    var c = n.getDerivedStateFromProps, y = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Fs(t, i, r, a), it = !1;
    var h = t.memoizedState;
    i.state = h, xl(t, r, i, l), s = t.memoizedState, u !== r || h !== s || he.current || it ? (typeof c == "function" && (vi(t, n, c, r), s = t.memoizedState), (u = it || Ds(t, n, u, r, h, s, a)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Bc(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ie(t.type, u), i.props = a, y = t.pendingProps, h = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Re(s) : (s = ye(n) ? Dt : ie.current, s = fn(t, s));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || h !== s) && Fs(t, i, r, s), it = !1, h = t.memoizedState, i.state = h, xl(t, r, i, l);
    var g = t.memoizedState;
    u !== y || h !== g || he.current || it ? (typeof v == "function" && (vi(t, n, v, r), g = t.memoizedState), (a = it || Ds(t, n, a, r, h, g, s) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Si(e, t, n, r, o, l);
}
function Si(e, t, n, r, l, o) {
  hf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ts(t, n, !1), tt(e, t, o);
  r = t.stateNode, mh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, u, o)) : ue(e, t, u, o), t.memoizedState = r.state, l && Ts(t, n, !0), t.child;
}
function yf(e) {
  var t = e.stateNode;
  t.pendingContext ? Ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ps(e, t.context, !1), gu(e, t.containerInfo);
}
function Hs(e, t, n, r, l) {
  return dn(), du(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ei(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mf(e, t, n) {
  var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(B, l & 1), e === null)
    return yi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Kl(i, r, 0, null), e = jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ei(n), t.memoizedState = ki, e) : Nu(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return vh(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = wt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = wt(u, o) : (o = jt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ei(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ki, r;
  }
  return o = e.child, e = o.sibling, r = wt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Nu(e, t) {
  return t = Kl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jr(e, t, n, r) {
  return r !== null && du(r), pn(t, e.child, null, n), e = Nu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function vh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ro(Error(x(422))), jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Kl({ mode: "visible", children: r.children }, l, 0, null), o = jt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = Ei(i), t.memoizedState = ki, o);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(x(419)), r = Ro(o, r, void 0), jr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, pe || u) {
    if (r = q, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, et(e, l), Fe(r, e, l, -1));
    }
    return Iu(), r = Ro(Error(x(421))), jr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = yt(l.nextSibling), Se = t, $ = !0, Le = null, e !== null && (Ce[Ne++] = Xe, Ce[Ne++] = Ge, Ce[Ne++] = Ft, Xe = e.id, Ge = e.overflow, Ft = t), t = Nu(t, r.children), t.flags |= 4096, t);
}
function Qs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), mi(e.return, t, n);
}
function zo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function vf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ue(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Qs(e, n, t);
      else if (e.tag === 19) Qs(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (F(B, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Sl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), zo(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Sl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      zo(t, !0, n, null, o);
      break;
    case "together":
      zo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function br(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), At |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = wt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function gh(e, t, n) {
  switch (t.tag) {
    case 3:
      yf(t), dn();
      break;
    case 5:
      Vc(t);
      break;
    case 1:
      ye(t.type) && yl(t);
      break;
    case 4:
      gu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(gl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mf(e, t, n) : (F(B, B.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return vf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(B, B.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, pf(e, t, n);
  }
  return tt(e, t, n);
}
var gf, _i, wf, xf;
gf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
_i = function() {
};
wf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Ot(He.current);
    var o = null;
    switch (n) {
      case "input":
        l = Ko(e, l), r = Ko(e, r), o = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Go(e, l), r = Go(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = pl);
    }
    Zo(n, r);
    var i;
    n = null;
    for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
      var u = l[a];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Kn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Kn.hasOwnProperty(a) ? (s != null && a === "onScroll" && U("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
xf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!$) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function wh(e, t, n) {
  var r = t.pendingProps;
  switch (fu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return ye(t.type) && hl(), le(t), null;
    case 3:
      return r = t.stateNode, hn(), A(he), A(ie), xu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Or(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Le !== null && (Ii(Le), Le = null))), _i(e, t), le(t), null;
    case 5:
      wu(t);
      var l = Ot(lr.current);
      if (n = t.type, e !== null && t.stateNode != null) wf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return le(t), null;
        }
        if (e = Ot(He.current), Or(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ve] = t, r[nr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jn.length; l++) U(jn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              es(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, U("invalid", r);
              break;
            case "textarea":
              ns(r, o), U("invalid", r);
          }
          Zo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Ir(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Ir(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Kn.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), ts(r, o, !0);
              break;
            case "textarea":
              _r(r), rs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = pl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ve] = t, e[nr] = r, gf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = qo(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < jn.length; l++) U(jn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                es(e, r), l = Ko(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                ns(e, r), l = Go(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            Zo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ja(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Xa(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Yn(e, s) : typeof s == "number" && Yn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Kn.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && Ji(e, o, s, i));
            }
            switch (n) {
              case "input":
                _r(e), ts(e, r, !1);
                break;
              case "textarea":
                _r(e), rs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? rn(e, !!r.multiple, o, !1) : r.defaultValue != null && rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = pl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) xf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (n = Ot(lr.current), Ot(He.current), Or(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, (o = r.nodeValue !== n) && (e = Se, e !== null)) switch (e.tag) {
            case 3:
              Ir(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ir(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ve] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (A(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128)) Fc(), dn(), t.flags |= 98560, o = !1;
        else if (o = Or(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[Ve] = t;
          } else dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), o = !1;
        } else Le !== null && (Ii(Le), Le = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? G === 0 && (G = 3) : Iu())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return hn(), _i(e, t), e === null && er(t.stateNode.containerInfo), le(t), null;
    case 10:
      return yu(t.type._context), le(t), null;
    case 17:
      return ye(t.type) && hl(), le(t), null;
    case 19:
      if (A(B), o = t.memoizedState, o === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Rn(o, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Sl(e), i !== null) {
            for (t.flags |= 128, Rn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F(B, B.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && K() > mn && (t.flags |= 128, r = !0, Rn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Sl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Rn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return le(t), null;
        } else 2 * K() - o.renderingStartTime > mn && n !== 1073741824 && (t.flags |= 128, r = !0, Rn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = B.current, F(B, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Mu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function xh(e, t) {
  switch (fu(t), t.tag) {
    case 1:
      return ye(t.type) && hl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return hn(), A(he), A(ie), xu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return wu(t), null;
    case 13:
      if (A(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        dn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A(B), null;
    case 4:
      return hn(), null;
    case 10:
      return yu(t.type._context), null;
    case 22:
    case 23:
      return Mu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1, oe = !1, Sh = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    H(e, t, r);
  }
  else n.current = null;
}
function Ci(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Ks = !1;
function kh(e, t) {
  if (si = cl, e = _c(), au(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, a = 0, c = 0, y = e, h = null;
        t: for (; ; ) {
          for (var v; y !== n || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (s = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (v = y.firstChild) !== null; )
            h = y, y = v;
          for (; ; ) {
            if (y === e) break t;
            if (h === n && ++a === l && (u = i), h === o && ++c === r && (s = i), (v = y.nextSibling) !== null) break;
            y = h, h = y.parentNode;
          }
          y = v;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ai = { focusedElem: e, selectionRange: n }, cl = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var w = g.memoizedProps, T = g.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ie(t.type, w), T);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(x(163));
      }
    } catch (m) {
      H(t, t.return, m);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return g = Ks, Ks = !1, g;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ci(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Hl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ni(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Sf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Sf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[nr], delete t[di], delete t[lh], delete t[oh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function kf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ys(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || kf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = pl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), e = e.sibling;
}
function Ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ti(e, t, n), e = e.sibling; e !== null; ) Ti(e, t, n), e = e.sibling;
}
var ee = null, Oe = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) Ef(e, t, n), n = n.sibling;
}
function Ef(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function") try {
    We.onCommitFiberUnmount(Dl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      oe || tn(n, t);
    case 6:
      var r = ee, l = Oe;
      ee = null, lt(e, t, n), ee = r, Oe = l, ee !== null && (Oe ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Oe ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Eo(e.parentNode, n) : e.nodeType === 1 && Eo(e, n), Zn(e)) : Eo(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Oe, ee = n.stateNode.containerInfo, Oe = !0, lt(e, t, n), ee = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ci(n, t, i), l = l.next;
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (!oe && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        H(n, t, u);
      }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, lt(e, t, n), oe = r) : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function Xs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sh()), t.forEach(function(r) {
      var l = Mh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ee = u.stateNode, Oe = !1;
            break e;
          case 3:
            ee = u.stateNode.containerInfo, Oe = !0;
            break e;
          case 4:
            ee = u.stateNode.containerInfo, Oe = !0;
            break e;
        }
        u = u.return;
      }
      if (ee === null) throw Error(x(160));
      Ef(o, i, l), ee = null, Oe = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (a) {
      H(l, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _f(t, e), t = t.sibling;
}
function _f(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Me(t, e), $e(e), r & 4) {
        try {
          Wn(3, e, e.return), Hl(3, e);
        } catch (w) {
          H(e, e.return, w);
        }
        try {
          Wn(5, e, e.return);
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 1:
      Me(t, e), $e(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Me(t, e), $e(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (w) {
          H(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Qa(l, o), qo(u, i);
          var a = qo(u, o);
          for (i = 0; i < s.length; i += 2) {
            var c = s[i], y = s[i + 1];
            c === "style" ? Ja(l, y) : c === "dangerouslySetInnerHTML" ? Xa(l, y) : c === "children" ? Yn(l, y) : Ji(l, c, y, a);
          }
          switch (u) {
            case "input":
              Yo(l, o);
              break;
            case "textarea":
              Ka(l, o);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var v = o.value;
              v != null ? rn(l, !!o.multiple, v, !1) : h !== !!o.multiple && (o.defaultValue != null ? rn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[nr] = o;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Me(t, e), $e(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Me(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Zn(t.containerInfo);
      } catch (w) {
        H(e, e.return, w);
      }
      break;
    case 4:
      Me(t, e), $e(e);
      break;
    case 13:
      Me(t, e), $e(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ru = K())), r & 4 && Xs(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (a = oe) || c, Me(t, e), oe = a) : Me(t, e), $e(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (N = e, c = e.child; c !== null; ) {
          for (y = N = c; N !== null; ) {
            switch (h = N, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wn(4, h, h.return);
                break;
              case 1:
                tn(h, h.return);
                var g = h.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (w) {
                    H(r, n, w);
                  }
                }
                break;
              case 5:
                tn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Js(y);
                  continue;
                }
            }
            v !== null ? (v.return = h, N = v) : Js(y);
          }
          c = c.sibling;
        }
        e: for (c = null, y = e; ; ) {
          if (y.tag === 5) {
            if (c === null) {
              c = y;
              try {
                l = y.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, s = y.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ga("display", i));
              } catch (w) {
                H(e, e.return, w);
              }
            }
          } else if (y.tag === 6) {
            if (c === null) try {
              y.stateNode.nodeValue = a ? "" : y.memoizedProps;
            } catch (w) {
              H(e, e.return, w);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            c === y && (c = null), y = y.return;
          }
          c === y && (c = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Me(t, e), $e(e), r & 4 && Xs(e);
      break;
    case 21:
      break;
    default:
      Me(
        t,
        e
      ), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), r.flags &= -33);
          var o = Ys(e);
          Ti(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ys(e);
          Pi(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Eh(e, t, n) {
  N = e, Cf(e);
}
function Cf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Dr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || oe;
        u = Dr;
        var a = oe;
        if (Dr = i, (oe = s) && !a) for (N = l; N !== null; ) i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? Zs(l) : s !== null ? (s.return = i, N = s) : Zs(l);
        for (; o !== null; ) N = o, Cf(o), o = o.sibling;
        N = l, Dr = u, oe = a;
      }
      Gs(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : Gs(e);
  }
}
function Gs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            oe || Hl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !oe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Os(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Os(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var a = t.alternate;
              if (a !== null) {
                var c = a.memoizedState;
                if (c !== null) {
                  var y = c.dehydrated;
                  y !== null && Zn(y);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(x(163));
        }
        oe || t.flags & 512 && Ni(t);
      } catch (h) {
        H(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Js(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Zs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ni(t);
          } catch (s) {
            H(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ni(t);
          } catch (s) {
            H(t, i, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var _h = Math.ceil, _l = rt.ReactCurrentDispatcher, Pu = rt.ReactCurrentOwner, Te = rt.ReactCurrentBatchConfig, j = 0, q = null, Y = null, te = 0, ge = 0, nn = _t(0), G = 0, sr = null, At = 0, Ql = 0, Tu = 0, Hn = null, de = null, Ru = 0, mn = 1 / 0, Qe = null, Cl = !1, Ri = null, vt = null, Fr = !1, ct = null, Nl = 0, Qn = 0, zi = null, el = -1, tl = 0;
function se() {
  return j & 6 ? K() : el !== -1 ? el : el = K();
}
function gt(e) {
  return e.mode & 1 ? j & 2 && te !== 0 ? te & -te : uh.transition !== null ? (tl === 0 && (tl = sc()), tl) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yc(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Qn) throw Qn = 0, zi = null, Error(x(185));
  pr(e, n, r), (!(j & 2) || e !== q) && (e === q && (!(j & 2) && (Ql |= n), G === 4 && st(e, te)), me(e, r), n === 1 && j === 0 && !(t.mode & 1) && (mn = K() + 500, Bl && Ct()));
}
function me(e, t) {
  var n = e.callbackNode;
  up(e, t);
  var r = al(e, e === q ? te : 0);
  if (r === 0) n !== null && is(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && is(n), t === 1) e.tag === 0 ? ih(qs.bind(null, e)) : Lc(qs.bind(null, e)), nh(function() {
      !(j & 6) && Ct();
    }), n = null;
    else {
      switch (ac(r)) {
        case 1:
          n = tu;
          break;
        case 4:
          n = ic;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = uc;
          break;
        default:
          n = sl;
      }
      n = Of(n, Nf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nf(e, t) {
  if (el = -1, tl = 0, j & 6) throw Error(x(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = al(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r);
  else {
    t = r;
    var l = j;
    j |= 2;
    var o = Tf();
    (q !== e || te !== t) && (Qe = null, mn = K() + 500, Lt(e, t));
    do
      try {
        Ph();
        break;
      } catch (u) {
        Pf(e, u);
      }
    while (!0);
    hu(), _l.current = o, j = l, Y !== null ? t = 0 : (q = null, te = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = ri(e), l !== 0 && (r = l, t = Mi(e, l))), t === 1) throw n = sr, Lt(e, 0), st(e, r), me(e, K()), n;
    if (t === 6) st(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Ch(l) && (t = Pl(e, r), t === 2 && (o = ri(e), o !== 0 && (r = o, t = Mi(e, o))), t === 1)) throw n = sr, Lt(e, 0), st(e, r), me(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          zt(e, de, Qe);
          break;
        case 3:
          if (st(e, r), (r & 130023424) === r && (t = Ru + 500 - K(), 10 < t)) {
            if (al(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = fi(zt.bind(null, e, de, Qe), t);
            break;
          }
          zt(e, de, Qe);
          break;
        case 4:
          if (st(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - De(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _h(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fi(zt.bind(null, e, de, Qe), r);
            break;
          }
          zt(e, de, Qe);
          break;
        case 5:
          zt(e, de, Qe);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Nf.bind(null, e) : null;
}
function Mi(e, t) {
  var n = Hn;
  return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = Pl(e, t), e !== 2 && (t = de, de = n, t !== null && Ii(t)), e;
}
function Ii(e) {
  de === null ? de = e : de.push.apply(de, e);
}
function Ch(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ue(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function st(e, t) {
  for (t &= ~Tu, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - De(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qs(e) {
  if (j & 6) throw Error(x(327));
  an();
  var t = al(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = Pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ri(e);
    r !== 0 && (t = r, n = Mi(e, r));
  }
  if (n === 1) throw n = sr, Lt(e, 0), st(e, t), me(e, K()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, de, Qe), me(e, K()), null;
}
function zu(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    j = n, j === 0 && (mn = K() + 500, Bl && Ct());
  }
}
function $t(e) {
  ct !== null && ct.tag === 0 && !(j & 6) && an();
  var t = j;
  j |= 1;
  var n = Te.transition, r = D;
  try {
    if (Te.transition = null, D = 1, e) return e();
  } finally {
    D = r, Te.transition = n, j = t, !(j & 6) && Ct();
  }
}
function Mu() {
  ge = nn.current, A(nn);
}
function Lt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, th(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (fu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && hl();
        break;
      case 3:
        hn(), A(he), A(ie), xu();
        break;
      case 5:
        wu(r);
        break;
      case 4:
        hn();
        break;
      case 13:
        A(B);
        break;
      case 19:
        A(B);
        break;
      case 10:
        yu(r.type._context);
        break;
      case 22:
      case 23:
        Mu();
    }
    n = n.return;
  }
  if (q = e, Y = e = wt(e.current, null), te = ge = t, G = 0, sr = null, Tu = Ql = At = 0, de = Hn = null, It !== null) {
    for (t = 0; t < It.length; t++) if (n = It[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    It = null;
  }
  return e;
}
function Pf(e, t) {
  do {
    var n = Y;
    try {
      if (hu(), Zr.current = El, kl) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        kl = !1;
      }
      if (Ut = 0, Z = X = V = null, Vn = !1, or = 0, Pu.current = null, n === null || n.return === null) {
        G = 1, sr = t, Y = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, c = u, y = c.tag;
          if (!(c.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = As(i);
          if (v !== null) {
            v.flags &= -257, $s(v, i, u, o, t), v.mode & 1 && Us(o, a, t), t = v, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Us(o, a, t), Iu();
              break e;
            }
            s = Error(x(426));
          }
        } else if ($ && u.mode & 1) {
          var T = As(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), $s(T, i, u, o, t), du(yn(s, u));
            break e;
          }
        }
        o = s = yn(s, u), G !== 4 && (G = 2), Hn === null ? Hn = [o] : Hn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = cf(o, s, t);
              Is(o, p);
              break e;
            case 1:
              u = s;
              var f = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (vt === null || !vt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var m = ff(o, u, t);
                Is(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      zf(n);
    } catch (S) {
      t = S, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tf() {
  var e = _l.current;
  return _l.current = El, e === null ? El : e;
}
function Iu() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(At & 268435455) && !(Ql & 268435455) || st(q, te);
}
function Pl(e, t) {
  var n = j;
  j |= 2;
  var r = Tf();
  (q !== e || te !== t) && (Qe = null, Lt(e, t));
  do
    try {
      Nh();
      break;
    } catch (l) {
      Pf(e, l);
    }
  while (!0);
  if (hu(), j = n, _l.current = r, Y !== null) throw Error(x(261));
  return q = null, te = 0, G;
}
function Nh() {
  for (; Y !== null; ) Rf(Y);
}
function Ph() {
  for (; Y !== null && !qd(); ) Rf(Y);
}
function Rf(e) {
  var t = If(e.alternate, e, ge);
  e.memoizedProps = e.pendingProps, t === null ? zf(e) : Y = t, Pu.current = null;
}
function zf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xh(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = wh(n, t, ge), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function zt(e, t, n) {
  var r = D, l = Te.transition;
  try {
    Te.transition = null, D = 1, Th(e, t, n, r);
  } finally {
    Te.transition = l, D = r;
  }
  return null;
}
function Th(e, t, n, r) {
  do
    an();
  while (ct !== null);
  if (j & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (sp(e, o), e === q && (Y = q = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fr || (Fr = !0, Of(sl, function() {
    return an(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = D;
    D = 1;
    var u = j;
    j |= 4, Pu.current = null, kh(e, n), _f(n, e), Xp(ai), cl = !!si, ai = si = null, e.current = n, Eh(n), bd(), j = u, D = i, Te.transition = o;
  } else e.current = n;
  if (Fr && (Fr = !1, ct = e, Nl = l), o = e.pendingLanes, o === 0 && (vt = null), np(n.stateNode), me(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Cl) throw Cl = !1, e = Ri, Ri = null, e;
  return Nl & 1 && e.tag !== 0 && an(), o = e.pendingLanes, o & 1 ? e === zi ? Qn++ : (Qn = 0, zi = e) : Qn = 0, Ct(), null;
}
function an() {
  if (ct !== null) {
    var e = ac(Nl), t = Te.transition, n = D;
    try {
      if (Te.transition = null, D = 16 > e ? 16 : e, ct === null) var r = !1;
      else {
        if (e = ct, ct = null, Nl = 0, j & 6) throw Error(x(331));
        var l = j;
        for (j |= 4, N = e.current; N !== null; ) {
          var o = N, i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, c, o);
                  }
                  var y = c.child;
                  if (y !== null) y.return = c, N = y;
                  else for (; N !== null; ) {
                    c = N;
                    var h = c.sibling, v = c.return;
                    if (Sf(c), c === a) {
                      N = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, N = h;
                      break;
                    }
                    N = v;
                  }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var T = w.sibling;
                    w.sibling = null, w = T;
                  } while (w !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, N = i;
          else e: for (; N !== null; ) {
            if (o = N, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Wn(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, N = p;
              break e;
            }
            N = o.return;
          }
        }
        var f = e.current;
        for (N = f; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, N = d;
          else e: for (i = f; N !== null; ) {
            if (u = N, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Hl(9, u);
              }
            } catch (S) {
              H(u, u.return, S);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var m = u.sibling;
            if (m !== null) {
              m.return = u.return, N = m;
              break e;
            }
            N = u.return;
          }
        }
        if (j = l, Ct(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(Dl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      D = n, Te.transition = t;
    }
  }
  return !1;
}
function bs(e, t, n) {
  t = yn(n, t), t = cf(e, t, 1), e = mt(e, t, 1), t = se(), e !== null && (pr(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) bs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      bs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vt === null || !vt.has(r))) {
        e = yn(n, e), e = ff(t, e, 1), t = mt(t, e, 1), e = se(), t !== null && (pr(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Rh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, q === e && (te & n) === n && (G === 4 || G === 3 && (te & 130023424) === te && 500 > K() - Ru ? Lt(e, 0) : Tu |= n), me(e, t);
}
function Mf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : t = 1);
  var n = se();
  e = et(e, t), e !== null && (pr(e, t, n), me(e, n));
}
function zh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Mf(e, n);
}
function Mh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Mf(e, n);
}
var If;
If = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, gh(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, $ && t.flags & 1048576 && jc(t, vl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      br(e, t), e = t.pendingProps;
      var l = fn(t, ie.current);
      sn(t, n), l = ku(null, t, r, e, l, n);
      var o = Eu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r) ? (o = !0, yl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, vu(t), l.updater = Wl, t.stateNode = l, l._reactInternals = t, gi(t, r, e, n), t = Si(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && cu(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (br(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Oh(r), e = Ie(r, e), l) {
          case 0:
            t = xi(null, t, r, e, n);
            break e;
          case 1:
            t = Ws(null, t, r, e, n);
            break e;
          case 11:
            t = Bs(null, t, r, e, n);
            break e;
          case 14:
            t = Vs(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), xi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Ws(e, t, r, l, n);
    case 3:
      e: {
        if (yf(t), e === null) throw Error(x(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Bc(e, t), xl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = yn(Error(x(423)), t), t = Hs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = yn(Error(x(424)), t), t = Hs(e, t, r, n, l);
          break e;
        } else for (we = yt(t.stateNode.containerInfo.firstChild), Se = t, $ = !0, Le = null, n = Ac(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (dn(), r === l) {
            t = tt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Vc(t), e === null && yi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ci(r, l) ? i = null : o !== null && ci(r, o) && (t.flags |= 32), hf(e, t), ue(e, t, i, n), t.child;
    case 6:
      return e === null && yi(t), null;
    case 13:
      return mf(e, t, n);
    case 4:
      return gu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Bs(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, F(gl, r._currentValue), r._currentValue = i, o !== null) if (Ue(o.value, i)) {
          if (o.children === l.children && !he.current) {
            t = tt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Je(-1, n & -n), s.tag = 2;
                  var a = o.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var c = a.pending;
                    c === null ? s.next = s : (s.next = c.next, c.next = s), a.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), mi(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(x(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), mi(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, sn(t, n), l = Re(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), Vs(e, t, r, l, n);
    case 15:
      return df(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), br(e, t), t.tag = 1, ye(r) ? (e = !0, yl(t)) : e = !1, sn(t, n), af(t, r, l), gi(t, r, l, n), Si(null, t, r, !0, e, n);
    case 19:
      return vf(e, t, n);
    case 22:
      return pf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Of(e, t) {
  return oc(e, t);
}
function Ih(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pe(e, t, n, r) {
  return new Ih(e, t, n, r);
}
function Ou(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Oh(e) {
  if (typeof e == "function") return Ou(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qi) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function nl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Ou(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Kt:
      return jt(n.children, l, o, t);
    case Zi:
      i = 8, l |= 8;
      break;
    case Vo:
      return e = Pe(12, n, t, l | 2), e.elementType = Vo, e.lanes = o, e;
    case Wo:
      return e = Pe(13, n, t, l), e.elementType = Wo, e.lanes = o, e;
    case Ho:
      return e = Pe(19, n, t, l), e.elementType = Ho, e.lanes = o, e;
    case Va:
      return Kl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case $a:
          i = 10;
          break e;
        case Ba:
          i = 9;
          break e;
        case qi:
          i = 11;
          break e;
        case bi:
          i = 14;
          break e;
        case ot:
          i = 16, r = null;
          break e;
      }
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return t = Pe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function jt(e, t, n, r) {
  return e = Pe(7, e, r, t), e.lanes = n, e;
}
function Kl(e, t, n, r) {
  return e = Pe(22, e, r, t), e.elementType = Va, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mo(e, t, n) {
  return e = Pe(6, e, null, t), e.lanes = n, e;
}
function Io(e, t, n) {
  return t = Pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Lh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fo(0), this.expirationTimes = fo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Lu(e, t, n, r, l, o, i, u, s) {
  return e = new Lh(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Pe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vu(o), e;
}
function jh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Qt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Lf(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Oc(e, n, t);
  }
  return t;
}
function jf(e, t, n, r, l, o, i, u, s) {
  return e = Lu(n, r, !0, e, l, o, i, u, s), e.context = Lf(null), n = e.current, r = se(), l = gt(n), o = Je(r, l), o.callback = t ?? null, mt(n, o, l), e.current.lanes = l, pr(e, l, r), me(e, r), e;
}
function Yl(e, t, n, r) {
  var l = t.current, o = se(), i = gt(l);
  return n = Lf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Je(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mt(l, t, i), e !== null && (Fe(e, l, i, o), Jr(e, l, i)), i;
}
function Tl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ea(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ju(e, t) {
  ea(e, t), (e = e.alternate) && ea(e, t);
}
function Dh() {
  return null;
}
var Df = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Du(e) {
  this._internalRoot = e;
}
Xl.prototype.render = Du.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Yl(e, t, null, null);
};
Xl.prototype.unmount = Du.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function() {
      Yl(null, e, null, null);
    }), t[be] = null;
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = dc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++) ;
    ut.splice(n, 0, e), n === 0 && hc(e);
  }
};
function Fu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Gl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ta() {
}
function Fh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Tl(i);
        o.call(a);
      };
    }
    var i = jf(t, r, e, 0, null, !1, !1, "", ta);
    return e._reactRootContainer = i, e[be] = i.current, er(e.nodeType === 8 ? e.parentNode : e), $t(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Tl(s);
      u.call(a);
    };
  }
  var s = Lu(e, 0, !1, null, null, !1, !1, "", ta);
  return e._reactRootContainer = s, e[be] = s.current, er(e.nodeType === 8 ? e.parentNode : e), $t(function() {
    Yl(t, s, n, r);
  }), s;
}
function Jl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Tl(i);
        u.call(s);
      };
    }
    Yl(t, i, e, l);
  } else i = Fh(n, t, e, l, r);
  return Tl(i);
}
cc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 && (nu(t, n | 1), me(t, K()), !(j & 6) && (mn = K() + 500, Ct()));
      }
      break;
    case 13:
      $t(function() {
        var r = et(e, 1);
        if (r !== null) {
          var l = se();
          Fe(r, e, 1, l);
        }
      }), ju(e, 1);
  }
};
ru = function(e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = se();
      Fe(t, e, 134217728, n);
    }
    ju(e, 134217728);
  }
};
fc = function(e) {
  if (e.tag === 13) {
    var t = gt(e), n = et(e, t);
    if (n !== null) {
      var r = se();
      Fe(n, e, t, r);
    }
    ju(e, t);
  }
};
dc = function() {
  return D;
};
pc = function(e, t) {
  var n = D;
  try {
    return D = e, t();
  } finally {
    D = n;
  }
};
ei = function(e, t, n) {
  switch (t) {
    case "input":
      if (Yo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = $l(r);
            if (!l) throw Error(x(90));
            Ha(r), Yo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ka(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
ba = zu;
ec = $t;
var Uh = { usingClientEntryPoint: !1, Events: [yr, Jt, $l, Za, qa, zu] }, zn = { findFiberByHostInstance: Mt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ah = { bundleType: zn.bundleType, version: zn.version, rendererPackageName: zn.rendererPackageName, rendererConfig: zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = rc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: zn.findFiberByHostInstance || Dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber) try {
    Dl = Ur.inject(Ah), We = Ur;
  } catch {
  }
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uh;
Ee.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fu(t)) throw Error(x(200));
  return jh(e, t, null, n);
};
Ee.createRoot = function(e, t) {
  if (!Fu(e)) throw Error(x(299));
  var n = !1, r = "", l = Df;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Lu(e, 1, !1, null, null, n, !1, r, l), e[be] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new Du(t);
};
Ee.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = rc(t), e = e === null ? null : e.stateNode, e;
};
Ee.flushSync = function(e) {
  return $t(e);
};
Ee.hydrate = function(e, t, n) {
  if (!Gl(t)) throw Error(x(200));
  return Jl(null, e, t, !0, n);
};
Ee.hydrateRoot = function(e, t, n) {
  if (!Fu(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Df;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = jf(t, null, e, 1, n ?? null, l, !1, o, i), e[be] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Xl(t);
};
Ee.render = function(e, t, n) {
  if (!Gl(t)) throw Error(x(200));
  return Jl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function(e) {
  if (!Gl(e)) throw Error(x(40));
  return e._reactRootContainer ? ($t(function() {
    Jl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[be] = null;
    });
  }), !0) : !1;
};
Ee.unstable_batchedUpdates = zu;
Ee.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Gl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Jl(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function Ff() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ff);
    } catch (e) {
      console.error(e);
    }
}
Ff(), Da.exports = Ee;
var $h = Da.exports, na = $h;
$o.createRoot = na.createRoot, $o.hydrateRoot = na.hydrateRoot;
var Uf = { exports: {} }, Af = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr = z;
function Bh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Vh = typeof Object.is == "function" ? Object.is : Bh, Wh = vr.useSyncExternalStore, Hh = vr.useRef, Qh = vr.useEffect, Kh = vr.useMemo, Yh = vr.useDebugValue;
Af.useSyncExternalStoreWithSelector = function(e, t, n, r, l) {
  var o = Hh(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = Kh(
    function() {
      function s(v) {
        if (!a) {
          if (a = !0, c = v, v = r(v), l !== void 0 && i.hasValue) {
            var g = i.value;
            if (l(g, v))
              return y = g;
          }
          return y = v;
        }
        if (g = y, Vh(c, v)) return g;
        var w = r(v);
        return l !== void 0 && l(g, w) ? (c = v, g) : (c = v, y = w);
      }
      var a = !1, c, y, h = n === void 0 ? null : n;
      return [
        function() {
          return s(t());
        },
        h === null ? void 0 : function() {
          return s(h());
        }
      ];
    },
    [t, n, r, l]
  );
  var u = Wh(e, o[0], o[1]);
  return Qh(
    function() {
      i.hasValue = !0, i.value = u;
    },
    [u]
  ), Yh(u), u;
};
Uf.exports = Af;
var Xh = Uf.exports;
function Gh(e) {
  e();
}
function Jh() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Gh(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const l = t = {
        callback: n,
        next: null,
        prev: t
      };
      return l.prev ? l.prev.next = l : e = l, function() {
        !r || e === null || (r = !1, l.next ? l.next.prev = l.prev : t = l.prev, l.prev ? l.prev.next = l.next : e = l.next);
      };
    }
  };
}
var ra = {
  notify() {
  },
  get: () => []
};
function Zh(e, t) {
  let n, r = ra, l = 0, o = !1;
  function i(w) {
    c();
    const T = r.subscribe(w);
    let p = !1;
    return () => {
      p || (p = !0, T(), y());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    g.onStateChange && g.onStateChange();
  }
  function a() {
    return o;
  }
  function c() {
    l++, n || (n = e.subscribe(s), r = Jh());
  }
  function y() {
    l--, n && l === 0 && (n(), n = void 0, r.clear(), r = ra);
  }
  function h() {
    o || (o = !0, c());
  }
  function v() {
    o && (o = !1, y());
  }
  const g = {
    addNestedSub: i,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: h,
    tryUnsubscribe: v,
    getListeners: () => r
  };
  return g;
}
var qh = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bh = /* @__PURE__ */ qh(), ey = () => typeof navigator < "u" && navigator.product === "ReactNative", ty = /* @__PURE__ */ ey(), ny = () => bh || ty ? z.useLayoutEffect : z.useEffect, ry = /* @__PURE__ */ ny(), Oo = /* @__PURE__ */ Symbol.for("react-redux-context"), Lo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ly() {
  if (!z.createContext) return {};
  const e = Lo[Oo] ?? (Lo[Oo] = /* @__PURE__ */ new Map());
  let t = e.get(z.createContext);
  return t || (t = z.createContext(
    null
  ), e.set(z.createContext, t)), t;
}
var kt = /* @__PURE__ */ ly();
function oy(e) {
  const { children: t, context: n, serverState: r, store: l } = e, o = z.useMemo(() => {
    const s = Zh(l);
    return {
      store: l,
      subscription: s,
      getServerState: r ? () => r : void 0
    };
  }, [l, r]), i = z.useMemo(() => l.getState(), [l]);
  ry(() => {
    const { subscription: s } = o;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), i !== l.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [o, i]);
  const u = n || kt;
  return /* @__PURE__ */ z.createElement(u.Provider, { value: o }, t);
}
var iy = oy;
function Uu(e = kt) {
  return function() {
    return z.useContext(e);
  };
}
var $f = /* @__PURE__ */ Uu();
function Bf(e = kt) {
  const t = e === kt ? $f : (
    // @ts-ignore
    Uu(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var uy = /* @__PURE__ */ Bf();
function sy(e = kt) {
  const t = e === kt ? uy : Bf(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Au = /* @__PURE__ */ sy(), ay = (e, t) => e === t;
function cy(e = kt) {
  const t = e === kt ? $f : Uu(e), n = (r, l = {}) => {
    const { equalityFn: o = ay } = typeof l == "function" ? { equalityFn: l } : l, i = t(), { store: u, subscription: s, getServerState: a } = i;
    z.useRef(!0);
    const c = z.useCallback(
      {
        [r.name](h) {
          return r(h);
        }
      }[r.name],
      [r]
    ), y = Xh.useSyncExternalStoreWithSelector(
      s.addNestedSub,
      u.getState,
      a || u.getState,
      c,
      o
    );
    return z.useDebugValue(y), y;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ft = /* @__PURE__ */ cy();
class fy extends La.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, errorMessage: t instanceof Error ? t.message : String(t) };
  }
  componentDidCatch(t, n) {
    console.error("Editor crashed:", t, n);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ E.jsxs("div", { style: { padding: 16 }, children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Something went wrong." }),
      /* @__PURE__ */ E.jsx("p", { style: { opacity: 0.8 }, children: this.state.errorMessage }),
      /* @__PURE__ */ E.jsx("button", { onClick: () => this.setState({ hasError: !1, errorMessage: void 0 }), children: "Try again" })
    ] }) : this.props.children;
  }
}
function dy({ show: e, text: t, onClose: n }) {
  return e ? /* @__PURE__ */ E.jsx(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1e3
      },
      onClick: n,
      children: /* @__PURE__ */ E.jsxs(
        "div",
        {
          style: {
            width: "min(800px, 90vw)",
            height: "min(520px, 80vh)",
            background: "rgba(17,24,39,0.98)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column"
          },
          onClick: (r) => r.stopPropagation(),
          children: [
            /* @__PURE__ */ E.jsxs("div", { style: { padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ E.jsx("strong", { style: { flex: 1 }, children: "Exported JSON" }),
              /* @__PURE__ */ E.jsx(
                "button",
                {
                  onClick: async () => {
                    try {
                      await navigator.clipboard.writeText(t), alert("Copied JSON to clipboard");
                    } catch {
                      alert("Clipboard unavailable");
                    }
                  },
                  children: "Copy"
                }
              ),
              /* @__PURE__ */ E.jsx("button", { onClick: n, children: "Close" })
            ] }),
            /* @__PURE__ */ E.jsxs("div", { style: { padding: "0 12px 12px 12px", flex: 1 }, children: [
              /* @__PURE__ */ E.jsx("div", { style: { fontSize: 12, color: "#9ca3af", margin: "0 0 6px 2px" }, children: "Format matches example.json with inline x/y positions for nodes." }),
              /* @__PURE__ */ E.jsx(
                "textarea",
                {
                  readOnly: !0,
                  value: t,
                  spellCheck: !1,
                  style: {
                    width: "100%",
                    height: "100%",
                    resize: "none",
                    background: "rgba(255,255,255,0.06)",
                    color: "#e5e7eb",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 8,
                    padding: 12,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    fontSize: 12,
                    lineHeight: 1.5
                  }
                }
              )
            ] })
          ]
        }
      )
    }
  ) : null;
}
const py = z.memo(dy);
function hy() {
  return /* @__PURE__ */ E.jsx("pattern", { id: "grid", width: 20, height: 20, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ E.jsx("path", { d: "M 20 0 L 0 0 0 20", fill: "none", stroke: "rgba(255,255,255,0.06)", strokeWidth: "1" }) });
}
const yy = z.memo(hy);
function my({ show: e, initialText: t = "", onImport: n, onClose: r }) {
  const [l, o] = z.useState(t), i = z.useRef(null);
  return z.useEffect(() => {
    e && (o(t), setTimeout(() => {
      var u;
      return (u = i.current) == null ? void 0 : u.focus();
    }, 0));
  }, [e, t]), e ? /* @__PURE__ */ E.jsx(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1e3
      },
      onClick: r,
      children: /* @__PURE__ */ E.jsxs(
        "div",
        {
          style: {
            width: "min(800px, 90vw)",
            height: "min(520px, 80vh)",
            background: "rgba(17,24,39,0.98)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column"
          },
          onClick: (u) => u.stopPropagation(),
          children: [
            /* @__PURE__ */ E.jsxs("div", { style: { padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ E.jsx("strong", { style: { flex: 1 }, children: "Import JSON" }),
              /* @__PURE__ */ E.jsx("button", { onClick: () => r(), children: "Close" })
            ] }),
            /* @__PURE__ */ E.jsxs("div", { style: { padding: "0 12px 12px 12px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }, children: [
              /* @__PURE__ */ E.jsx("div", { style: { fontSize: 12, color: "#9ca3af", margin: "0 0 2px 2px" }, children: "Paste your workflow JSON (example.json shape with inline x/y) and press Import." }),
              /* @__PURE__ */ E.jsx(
                "textarea",
                {
                  ref: i,
                  "aria-label": "Workflow JSON",
                  value: l,
                  onChange: (u) => o(u.currentTarget.value),
                  spellCheck: !1,
                  style: {
                    width: "100%",
                    height: "100%",
                    resize: "vertical",
                    background: "rgba(255,255,255,0.06)",
                    color: "#e5e7eb",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 8,
                    padding: 12,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    fontSize: 12,
                    lineHeight: 1.5,
                    flex: 1,
                    minHeight: 120
                  },
                  onKeyDown: (u) => {
                    u.key === "Escape" && r(), (u.metaKey || u.ctrlKey) && u.key.toLowerCase() === "enter" && n(l);
                  }
                }
              ),
              /* @__PURE__ */ E.jsx("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: /* @__PURE__ */ E.jsx("button", { onClick: () => n(l), "aria-label": "Import JSON", children: "Import" }) })
            ] })
          ]
        }
      )
    }
  ) : null;
}
const vy = z.memo(my);
function b(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var gy = typeof Symbol == "function" && Symbol.observable || "@@observable", la = gy, jo = () => Math.random().toString(36).substring(7).split("").join("."), wy = {
  INIT: `@@redux/INIT${/* @__PURE__ */ jo()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ jo()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${jo()}`
}, Rl = wy;
function $u(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Vf(e, t, n) {
  if (typeof e != "function")
    throw new Error(b(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(b(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(b(1));
    return n(Vf)(e, t);
  }
  let r = e, l = t, o = /* @__PURE__ */ new Map(), i = o, u = 0, s = !1;
  function a() {
    i === o && (i = /* @__PURE__ */ new Map(), o.forEach((T, p) => {
      i.set(p, T);
    }));
  }
  function c() {
    if (s)
      throw new Error(b(3));
    return l;
  }
  function y(T) {
    if (typeof T != "function")
      throw new Error(b(4));
    if (s)
      throw new Error(b(5));
    let p = !0;
    a();
    const f = u++;
    return i.set(f, T), function() {
      if (p) {
        if (s)
          throw new Error(b(6));
        p = !1, a(), i.delete(f), o = null;
      }
    };
  }
  function h(T) {
    if (!$u(T))
      throw new Error(b(7));
    if (typeof T.type > "u")
      throw new Error(b(8));
    if (typeof T.type != "string")
      throw new Error(b(17));
    if (s)
      throw new Error(b(9));
    try {
      s = !0, l = r(l, T);
    } finally {
      s = !1;
    }
    return (o = i).forEach((f) => {
      f();
    }), T;
  }
  function v(T) {
    if (typeof T != "function")
      throw new Error(b(10));
    r = T, h({
      type: Rl.REPLACE
    });
  }
  function g() {
    const T = y;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(p) {
        if (typeof p != "object" || p === null)
          throw new Error(b(11));
        function f() {
          const m = p;
          m.next && m.next(c());
        }
        return f(), {
          unsubscribe: T(f)
        };
      },
      [la]() {
        return this;
      }
    };
  }
  return h({
    type: Rl.INIT
  }), {
    dispatch: h,
    subscribe: y,
    getState: c,
    replaceReducer: v,
    [la]: g
  };
}
function xy(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Rl.INIT
    }) > "u")
      throw new Error(b(12));
    if (typeof n(void 0, {
      type: Rl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(b(13));
  });
}
function Sy(e) {
  const t = Object.keys(e), n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  const r = Object.keys(n);
  let l;
  try {
    xy(n);
  } catch (o) {
    l = o;
  }
  return function(i = {}, u) {
    if (l)
      throw l;
    let s = !1;
    const a = {};
    for (let c = 0; c < r.length; c++) {
      const y = r[c], h = n[y], v = i[y], g = h(v, u);
      if (typeof g > "u")
        throw u && u.type, new Error(b(14));
      a[y] = g, s = s || g !== v;
    }
    return s = s || r.length !== Object.keys(i).length, s ? a : i;
  };
}
function zl(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ky(...e) {
  return (t) => (n, r) => {
    const l = t(n, r);
    let o = () => {
      throw new Error(b(15));
    };
    const i = {
      getState: l.getState,
      dispatch: (s, ...a) => o(s, ...a)
    }, u = e.map((s) => s(i));
    return o = zl(...u)(l.dispatch), {
      ...l,
      dispatch: o
    };
  };
}
function Ey(e) {
  return $u(e) && "type" in e && typeof e.type == "string";
}
var Wf = Symbol.for("immer-nothing"), oa = Symbol.for("immer-draftable"), ae = Symbol.for("immer-state");
function je(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var xe = Object, vn = xe.getPrototypeOf, Ml = "constructor", Zl = "prototype", Oi = "configurable", Il = "enumerable", rl = "writable", ar = "value", nt = (e) => !!e && !!e[ae];
function Ae(e) {
  var t;
  return e ? Hf(e) || ql(e) || !!e[oa] || !!((t = e[Ml]) != null && t[oa]) || bl(e) || eo(e) : !1;
}
var _y = xe[Zl][Ml].toString(), ia = /* @__PURE__ */ new WeakMap();
function Hf(e) {
  if (!e || !Bu(e))
    return !1;
  const t = vn(e);
  if (t === null || t === xe[Zl])
    return !0;
  const n = xe.hasOwnProperty.call(t, Ml) && t[Ml];
  if (n === Object)
    return !0;
  if (!Ht(n))
    return !1;
  let r = ia.get(n);
  return r === void 0 && (r = Function.toString.call(n), ia.set(n, r)), r === _y;
}
function gr(e, t, n = !0) {
  wr(e) === 0 ? (n ? Reflect.ownKeys(e) : xe.keys(e)).forEach((l) => {
    t(l, e[l], e);
  }) : e.forEach((r, l) => t(l, r, e));
}
function wr(e) {
  const t = e[ae];
  return t ? t.type_ : ql(e) ? 1 : bl(e) ? 2 : eo(e) ? 3 : 0;
}
var ua = (e, t, n = wr(e)) => n === 2 ? e.has(t) : xe[Zl].hasOwnProperty.call(e, t), Li = (e, t, n = wr(e)) => (
  // @ts-ignore
  n === 2 ? e.get(t) : e[t]
), Ol = (e, t, n, r = wr(e)) => {
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function Cy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ql = Array.isArray, bl = (e) => e instanceof Map, eo = (e) => e instanceof Set, Bu = (e) => typeof e == "object", Ht = (e) => typeof e == "function", Do = (e) => typeof e == "boolean", Ye = (e) => e.copy_ || e.base_, Vu = (e) => e.modified_ ? e.copy_ : e.base_;
function ji(e, t) {
  if (bl(e))
    return new Map(e);
  if (eo(e))
    return new Set(e);
  if (ql(e))
    return Array[Zl].slice.call(e);
  const n = Hf(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = xe.getOwnPropertyDescriptors(e);
    delete r[ae];
    let l = Reflect.ownKeys(r);
    for (let o = 0; o < l.length; o++) {
      const i = l[o], u = r[i];
      u[rl] === !1 && (u[rl] = !0, u[Oi] = !0), (u.get || u.set) && (r[i] = {
        [Oi]: !0,
        [rl]: !0,
        // could live with !!desc.set as well here...
        [Il]: u[Il],
        [ar]: e[i]
      });
    }
    return xe.create(vn(e), r);
  } else {
    const r = vn(e);
    if (r !== null && n)
      return { ...e };
    const l = xe.create(r);
    return xe.assign(l, e);
  }
}
function Wu(e, t = !1) {
  return to(e) || nt(e) || !Ae(e) || (wr(e) > 1 && xe.defineProperties(e, {
    set: Ar,
    add: Ar,
    clear: Ar,
    delete: Ar
  }), xe.freeze(e), t && gr(
    e,
    (n, r) => {
      Wu(r, !0);
    },
    !1
  )), e;
}
function Ny() {
  je(2);
}
var Ar = {
  [ar]: Ny
};
function to(e) {
  return e === null || !Bu(e) ? !0 : xe.isFrozen(e);
}
var Ll = "MapSet", Di = "Patches", Qf = {};
function gn(e) {
  const t = Qf[e];
  return t || je(0, e), t;
}
var Py = (e) => !!Qf[e], cr, Kf = () => cr, Ty = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Py(Ll) ? gn(Ll) : void 0
});
function sa(e, t) {
  t && (e.patchPlugin_ = gn(Di), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Fi(e) {
  Ui(e), e.drafts_.forEach(Ry), e.drafts_ = null;
}
function Ui(e) {
  e === cr && (cr = e.parent_);
}
var aa = (e) => cr = Ty(cr, e);
function Ry(e) {
  const t = e[ae];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ca(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    n[ae].modified_ && (Fi(t), je(4)), Ae(e) && (e = fa(t, e));
    const { patchPlugin_: l } = t;
    l && l.generateReplacementPatches_(
      n[ae].base_,
      e,
      t
    );
  } else
    e = fa(t, n);
  return zy(t, e, !0), Fi(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Wf ? e : void 0;
}
function fa(e, t) {
  if (to(t))
    return t;
  const n = t[ae];
  if (!n)
    return Hu(t, e.handledSet_, e);
  if (!no(n, e))
    return t;
  if (!n.modified_)
    return n.base_;
  if (!n.finalized_) {
    const { callbacks_: r } = n;
    if (r)
      for (; r.length > 0; )
        r.pop()(e);
    Gf(n, e);
  }
  return n.copy_;
}
function zy(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Wu(t, n);
}
function Yf(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var no = (e, t) => e.scope_ === t, My = [];
function Xf(e, t, n, r) {
  const l = Ye(e), o = e.type_;
  if (r !== void 0 && Li(l, r, o) === t) {
    Ol(l, r, n, o);
    return;
  }
  if (!e.draftLocations_) {
    const u = e.draftLocations_ = /* @__PURE__ */ new Map();
    gr(l, (s, a) => {
      if (nt(a)) {
        const c = u.get(a) || [];
        c.push(s), u.set(a, c);
      }
    });
  }
  const i = e.draftLocations_.get(t) ?? My;
  for (const u of i)
    Ol(l, u, n, o);
}
function Iy(e, t, n) {
  e.callbacks_.push(function(l) {
    var u;
    const o = t;
    if (!o || !no(o, l))
      return;
    (u = l.mapSetPlugin_) == null || u.fixSetContents(o);
    const i = Vu(o);
    Xf(e, o.draft_ ?? o, i, n), Gf(o, l);
  });
}
function Gf(e, t) {
  var r;
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || (((r = e.assigned_) == null ? void 0 : r.size) ?? 0) > 0)) {
    const { patchPlugin_: l } = t;
    if (l) {
      const o = l.getPath(e);
      o && l.generatePatches_(e, o, t);
    }
    Yf(e);
  }
}
function Oy(e, t, n) {
  const { scope_: r } = e;
  if (nt(n)) {
    const l = n[ae];
    no(l, r) && l.callbacks_.push(function() {
      ll(e);
      const i = Vu(l);
      Xf(e, n, i, t);
    });
  } else Ae(n) && e.callbacks_.push(function() {
    const o = Ye(e);
    Li(o, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && Hu(
      Li(e.copy_, t, e.type_),
      r.handledSet_,
      r
    );
  });
}
function Hu(e, t, n) {
  return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || nt(e) || t.has(e) || !Ae(e) || to(e) || (t.add(e), gr(e, (r, l) => {
    if (nt(l)) {
      const o = l[ae];
      if (no(o, n)) {
        const i = Vu(o);
        Ol(e, r, i, e.type_), Yf(o);
      }
    } else Ae(l) && Hu(l, t, n);
  })), e;
}
function Ly(e, t) {
  const n = ql(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Kf(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let l = r, o = Qu;
  n && (l = [r], o = fr);
  const { revoke: i, proxy: u } = Proxy.revocable(l, o);
  return r.draft_ = u, r.revoke_ = i, [u, r];
}
var Qu = {
  get(e, t) {
    if (t === ae)
      return e;
    const n = Ye(e);
    if (!ua(n, t, e.type_))
      return jy(e, n, t);
    const r = n[t];
    if (e.finalized_ || !Ae(r))
      return r;
    if (r === Fo(e.base_, t)) {
      ll(e);
      const l = e.type_ === 1 ? +t : t, o = $i(e.scope_, r, e, l);
      return e.copy_[l] = o;
    }
    return r;
  },
  has(e, t) {
    return t in Ye(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Ye(e));
  },
  set(e, t, n) {
    const r = Jf(Ye(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const l = Fo(Ye(e), t), o = l == null ? void 0 : l[ae];
      if (o && o.base_ === n)
        return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
      if (Cy(n, l) && (n !== void 0 || ua(e.base_, t, e.type_)))
        return !0;
      ll(e), Ai(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), Oy(e, t, n)), !0;
  },
  deleteProperty(e, t) {
    return ll(e), Fo(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Ai(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Ye(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      [rl]: !0,
      [Oi]: e.type_ !== 1 || t !== "length",
      [Il]: r[Il],
      [ar]: n[t]
    };
  },
  defineProperty() {
    je(11);
  },
  getPrototypeOf(e) {
    return vn(e.base_);
  },
  setPrototypeOf() {
    je(12);
  }
}, fr = {};
gr(Qu, (e, t) => {
  fr[e] = function() {
    const n = arguments;
    return n[0] = n[0][0], t.apply(this, n);
  };
});
fr.deleteProperty = function(e, t) {
  return fr.set.call(this, e, t, void 0);
};
fr.set = function(e, t, n) {
  return Qu.set.call(this, e[0], t, n, e[0]);
};
function Fo(e, t) {
  const n = e[ae];
  return (n ? Ye(n) : e)[t];
}
function jy(e, t, n) {
  var l;
  const r = Jf(t, n);
  return r ? ar in r ? r[ar] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (l = r.get) == null ? void 0 : l.call(e.draft_)
  ) : void 0;
}
function Jf(e, t) {
  if (!(t in e))
    return;
  let n = vn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = vn(n);
  }
}
function Ai(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ai(e.parent_));
}
function ll(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = ji(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Dy = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (t, n, r) => {
      if (Ht(t) && !Ht(n)) {
        const o = n;
        n = t;
        const i = this;
        return function(s = o, ...a) {
          return i.produce(s, (c) => n.call(this, c, ...a));
        };
      }
      Ht(n) || je(6), r !== void 0 && !Ht(r) && je(7);
      let l;
      if (Ae(t)) {
        const o = aa(this), i = $i(o, t, void 0);
        let u = !0;
        try {
          l = n(i), u = !1;
        } finally {
          u ? Fi(o) : Ui(o);
        }
        return sa(o, r), ca(l, o);
      } else if (!t || !Bu(t)) {
        if (l = n(t), l === void 0 && (l = t), l === Wf && (l = void 0), this.autoFreeze_ && Wu(l, !0), r) {
          const o = [], i = [];
          gn(Di).generateReplacementPatches_(t, l, {
            patches_: o,
            inversePatches_: i
          }), r(o, i);
        }
        return l;
      } else
        je(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (Ht(t))
        return (i, ...u) => this.produceWithPatches(i, (s) => t(s, ...u));
      let r, l;
      return [this.produce(t, n, (i, u) => {
        r = i, l = u;
      }), r, l];
    }, Do(e == null ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Do(e == null ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Do(e == null ? void 0 : e.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Ae(e) || je(8), nt(e) && (e = Fy(e));
    const t = aa(this), n = $i(t, e, void 0);
    return n[ae].isManual_ = !0, Ui(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[ae];
    (!n || !n.isManual_) && je(9);
    const { scope_: r } = n;
    return sa(r, t), ca(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const l = t[n];
      if (l.path.length === 0 && l.op === "replace") {
        e = l.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = gn(Di).applyPatches_;
    return nt(e) ? r(e, t) : this.produce(
      e,
      (l) => r(l, t)
    );
  }
};
function $i(e, t, n, r) {
  const [l, o] = bl(t) ? gn(Ll).proxyMap_(t, n) : eo(t) ? gn(Ll).proxySet_(t, n) : Ly(t, n);
  return ((n == null ? void 0 : n.scope_) ?? Kf()).drafts_.push(l), o.callbacks_ = (n == null ? void 0 : n.callbacks_) ?? [], o.key_ = r, n && r !== void 0 ? Iy(n, o, r) : o.callbacks_.push(function(s) {
    var c;
    (c = s.mapSetPlugin_) == null || c.fixSetContents(o);
    const { patchPlugin_: a } = s;
    o.modified_ && a && a.generatePatches_(o, [], s);
  }), l;
}
function Fy(e) {
  return nt(e) || je(10, e), Zf(e);
}
function Zf(e) {
  if (!Ae(e) || to(e))
    return e;
  const t = e[ae];
  let n, r = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = ji(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
  } else
    n = ji(e, !0);
  return gr(
    n,
    (l, o) => {
      Ol(n, l, Zf(o));
    },
    r
  ), t && (t.finalized_ = !1), n;
}
var Uy = new Dy(), qf = Uy.produce;
function bf(e) {
  return ({ dispatch: n, getState: r }) => (l) => (o) => typeof o == "function" ? o(n, r, e) : l(o);
}
var Ay = bf(), $y = bf, By = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? zl : zl.apply(null, arguments);
};
function da(e, t) {
  function n(...r) {
    if (t) {
      let l = t(...r);
      if (!l)
        throw new Error(Ze(0));
      return {
        type: e,
        payload: l.payload,
        ..."meta" in l && {
          meta: l.meta
        },
        ..."error" in l && {
          error: l.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Ey(r) && r.type === e, n;
}
var ed = class Dn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Dn.prototype);
  }
  static get [Symbol.species]() {
    return Dn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Dn(...t[0].concat(this)) : new Dn(...t.concat(this));
  }
};
function pa(e) {
  return Ae(e) ? qf(e, () => {
  }) : e;
}
function $r(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Vy(e) {
  return typeof e == "boolean";
}
var Wy = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: l = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let i = new ed();
  return n && (Vy(n) ? i.push(Ay) : i.push($y(n.extraArgument))), i;
}, Hy = "RTK_autoBatch", ha = (e) => (t) => {
  setTimeout(t, e);
}, Qy = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let l = !0, o = !1, i = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ha(10)
  ) : e.type === "callback" ? e.queueNotification : ha(e.timeout), a = () => {
    i = !1, o && (o = !1, u.forEach((c) => c()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const y = () => l && c(), h = r.subscribe(y);
      return u.add(c), () => {
        h(), u.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      var y;
      try {
        return l = !((y = c == null ? void 0 : c.meta) != null && y[Hy]), o = !l, o && (i || (i = !0, s(a))), r.dispatch(c);
      } finally {
        l = !0;
      }
    }
  });
}, Ky = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let l = new ed(e);
  return r && l.push(Qy(typeof r == "object" ? r : void 0)), l;
};
function Yy(e) {
  const t = Wy(), {
    reducer: n = void 0,
    middleware: r,
    devTools: l = !0,
    preloadedState: o = void 0,
    enhancers: i = void 0
  } = e || {};
  let u;
  if (typeof n == "function")
    u = n;
  else if ($u(n))
    u = Sy(n);
  else
    throw new Error(Ze(1));
  let s;
  typeof r == "function" ? s = r(t) : s = t();
  let a = zl;
  l && (a = By({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof l == "object" && l
  }));
  const c = ky(...s), y = Ky(c);
  let h = typeof i == "function" ? i(y) : y();
  const v = a(...h);
  return Vf(u, o, v);
}
function td(e) {
  const t = {}, n = [];
  let r;
  const l = {
    addCase(o, i) {
      const u = typeof o == "string" ? o : o.type;
      if (!u)
        throw new Error(Ze(28));
      if (u in t)
        throw new Error(Ze(29));
      return t[u] = i, l;
    },
    addAsyncThunk(o, i) {
      return i.pending && (t[o.pending.type] = i.pending), i.rejected && (t[o.rejected.type] = i.rejected), i.fulfilled && (t[o.fulfilled.type] = i.fulfilled), i.settled && n.push({
        matcher: o.settled,
        reducer: i.settled
      }), l;
    },
    addMatcher(o, i) {
      return n.push({
        matcher: o,
        reducer: i
      }), l;
    },
    addDefaultCase(o) {
      return r = o, l;
    }
  };
  return e(l), [t, n, r];
}
function Xy(e) {
  return typeof e == "function";
}
function Gy(e, t) {
  let [n, r, l] = td(t), o;
  if (Xy(e))
    o = () => pa(e());
  else {
    const u = pa(e);
    o = () => u;
  }
  function i(u = o(), s) {
    let a = [n[s.type], ...r.filter(({
      matcher: c
    }) => c(s)).map(({
      reducer: c
    }) => c)];
    return a.filter((c) => !!c).length === 0 && (a = [l]), a.reduce((c, y) => {
      if (y)
        if (nt(c)) {
          const v = y(c, s);
          return v === void 0 ? c : v;
        } else {
          if (Ae(c))
            return qf(c, (h) => y(h, s));
          {
            const h = y(c, s);
            if (h === void 0) {
              if (c === null)
                return c;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return c;
    }, u);
  }
  return i.getInitialState = o, i;
}
var Jy = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Zy(e, t) {
  return `${e}/${t}`;
}
function qy({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Jy];
  return function(l) {
    const {
      name: o,
      reducerPath: i = o
    } = l;
    if (!o)
      throw new Error(Ze(11));
    const u = (typeof l.reducers == "function" ? l.reducers(em()) : l.reducers) || {}, s = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(m, S) {
        const k = typeof m == "string" ? m : m.type;
        if (!k)
          throw new Error(Ze(12));
        if (k in a.sliceCaseReducersByType)
          throw new Error(Ze(13));
        return a.sliceCaseReducersByType[k] = S, c;
      },
      addMatcher(m, S) {
        return a.sliceMatchers.push({
          matcher: m,
          reducer: S
        }), c;
      },
      exposeAction(m, S) {
        return a.actionCreators[m] = S, c;
      },
      exposeCaseReducer(m, S) {
        return a.sliceCaseReducersByName[m] = S, c;
      }
    };
    s.forEach((m) => {
      const S = u[m], k = {
        reducerName: m,
        type: Zy(o, m),
        createNotation: typeof l.reducers == "function"
      };
      nm(S) ? lm(k, S, c, t) : tm(k, S, c);
    });
    function y() {
      const [m = {}, S = [], k = void 0] = typeof l.extraReducers == "function" ? td(l.extraReducers) : [l.extraReducers], _ = {
        ...m,
        ...a.sliceCaseReducersByType
      };
      return Gy(l.initialState, (C) => {
        for (let L in _)
          C.addCase(L, _[L]);
        for (let L of a.sliceMatchers)
          C.addMatcher(L.matcher, L.reducer);
        for (let L of S)
          C.addMatcher(L.matcher, L.reducer);
        k && C.addDefaultCase(k);
      });
    }
    const h = (m) => m, v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new WeakMap();
    let w;
    function T(m, S) {
      return w || (w = y()), w(m, S);
    }
    function p() {
      return w || (w = y()), w.getInitialState();
    }
    function f(m, S = !1) {
      function k(C) {
        let L = C[m];
        return typeof L > "u" && S && (L = $r(g, k, p)), L;
      }
      function _(C = h) {
        const L = $r(v, S, () => /* @__PURE__ */ new WeakMap());
        return $r(L, C, () => {
          const M = {};
          for (const [ve, Nt] of Object.entries(l.selectors ?? {}))
            M[ve] = by(Nt, C, () => $r(g, C, p), S);
          return M;
        });
      }
      return {
        reducerPath: m,
        getSelectors: _,
        get selectors() {
          return _(k);
        },
        selectSlice: k
      };
    }
    const d = {
      name: o,
      reducer: T,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: p,
      ...f(i),
      injectInto(m, {
        reducerPath: S,
        ...k
      } = {}) {
        const _ = S ?? i;
        return m.inject({
          reducerPath: _,
          reducer: T
        }, k), {
          ...d,
          ...f(_, !0)
        };
      }
    };
    return d;
  };
}
function by(e, t, n, r) {
  function l(o, ...i) {
    let u = t(o);
    return typeof u > "u" && r && (u = n()), e(u, ...i);
  }
  return l.unwrapped = e, l;
}
var nd = /* @__PURE__ */ qy();
function em() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function tm({
  type: e,
  reducerName: t,
  createNotation: n
}, r, l) {
  let o, i;
  if ("reducer" in r) {
    if (n && !rm(r))
      throw new Error(Ze(17));
    o = r.reducer, i = r.prepare;
  } else
    o = r;
  l.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, i ? da(e, i) : da(e));
}
function nm(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function rm(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function lm({
  type: e,
  reducerName: t
}, n, r, l) {
  if (!l)
    throw new Error(Ze(18));
  const {
    payloadCreator: o,
    fulfilled: i,
    pending: u,
    rejected: s,
    settled: a,
    options: c
  } = n, y = l(e, o, c);
  r.exposeAction(t, y), i && r.addCase(y.fulfilled, i), u && r.addCase(y.pending, u), s && r.addCase(y.rejected, s), a && r.addMatcher(y.settled, a), r.exposeCaseReducer(t, {
    fulfilled: i || Br,
    pending: u || Br,
    rejected: s || Br,
    settled: a || Br
  });
}
function Br() {
}
function Ze(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const om = {
  nodes: [],
  edges: [],
  selection: { nodeIds: [], edgeIds: [] },
  ui: { toolMode: "select", importErrors: null }
}, rd = nd({
  name: "diagram",
  initialState: om,
  reducers: {
    addNode: {
      prepare: (e, t, n, r) => ({
        payload: { type: e, position: t, label: n, id: r }
      }),
      reducer(e, t) {
        const { type: n, position: r, label: l, id: o } = t.payload, i = {
          id: o ?? `node_${Uo()}`,
          type: n,
          position: r,
          label: l ?? im(n)
        };
        e.nodes.push(i), e.selection = { nodeIds: [i.id], edgeIds: [] };
      }
    },
    moveNode(e, t) {
      const { id: n, position: r } = t.payload, l = e.nodes.find((o) => o.id === n);
      l && (l.position = r);
    },
    setNodeLabel(e, t) {
      const n = e.nodes.find((r) => r.id === t.payload.id);
      n && (n.label = t.payload.label);
    },
    selectNode(e, t) {
      const n = t.payload;
      e.selection = { nodeIds: n ? [n] : [], edgeIds: [] };
    },
    addEdge: {
      prepare: (e, t, n, r) => ({
        payload: { source: e, target: t, label: n, id: r }
      }),
      reducer(e, t) {
        const { source: n, target: r, label: l, id: o } = t.payload;
        if (n === r || e.edges.some((s) => s.source === n && s.target === r) || !e.nodes.find((s) => s.id === n) || !e.nodes.find((s) => s.id === r)) return;
        const u = { id: o ?? `edge_${Uo()}`, source: n, target: r, label: l };
        e.edges.push(u), e.selection = { nodeIds: [], edgeIds: [u.id] };
      }
    },
    deleteSelected(e) {
      const t = new Set(e.selection.nodeIds), n = new Set(e.selection.edgeIds);
      t.size > 0 && (e.nodes = e.nodes.filter((r) => !t.has(r.id)), e.edges = e.edges.filter((r) => !t.has(r.source) && !t.has(r.target))), n.size > 0 && (e.edges = e.edges.filter((r) => !n.has(r.id))), e.selection = { nodeIds: [], edgeIds: [] };
    },
    setToolMode(e, t) {
      e.ui.toolMode = t.payload, t.payload !== "connect" && (e.ui.pendingConnectionFrom = void 0);
    },
    startConnectionFrom(e, t) {
      e.ui.toolMode = "connect", e.ui.pendingConnectionFrom = t.payload;
    },
    completeConnectionTo(e, t) {
      const n = e.ui.pendingConnectionFrom, r = t.payload;
      n && r && n !== r && (e.edges.some((o) => o.source === n && o.target === r) || e.edges.push({ id: `edge_${Uo()}`, source: n, target: r })), e.ui.toolMode = "select", e.ui.pendingConnectionFrom = void 0;
    },
    // Hover state
    setHoveredNode(e, t) {
      e.ui.hoveredNodeId = t.payload;
    },
    setHoveredEdge(e, t) {
      e.ui.hoveredEdgeId = t.payload;
    },
    // Import/validation status
    setImportErrors(e, t) {
      e.ui.importErrors = t.payload;
    },
    setLastError(e, t) {
      e.ui.lastError = t.payload;
    },
    // Box selection (scaffolding for future feature)
    startBoxSelect(e, t) {
      const { x: n, y: r } = t.payload;
      e.ui.selectionBox = { x1: n, y1: r, x2: n, y2: r };
    },
    updateBoxSelect(e, t) {
      e.ui.selectionBox && (e.ui.selectionBox.x2 = t.payload.x, e.ui.selectionBox.y2 = t.payload.y);
    },
    commitBoxSelect(e) {
      e.ui.selectionBox = void 0;
    },
    // Editing node id (for inspector or coordinated edit states)
    setEditingNodeId(e, t) {
      e.ui.editingNodeId = t.payload;
    },
    selectEdge(e, t) {
      const n = t.payload;
      e.selection = { nodeIds: [], edgeIds: n ? [n] : [] };
    },
    clearSelection(e) {
      e.selection = { nodeIds: [], edgeIds: [] };
    },
    loadDiagram(e, t) {
      e.nodes = t.payload.nodes, e.edges = t.payload.edges, e.selection = { nodeIds: [], edgeIds: [] }, e.ui.pendingConnectionFrom = void 0;
    }
  }
});
function im(e) {
  switch (e) {
    case "start":
      return "Start";
    case "task":
      return "Task";
    case "end":
      return "End";
  }
}
function Uo() {
  if (typeof crypto < "u" && "getRandomValues" in crypto) {
    const e = new Uint32Array(2);
    return crypto.getRandomValues(e), Array.from(e).map((t) => t.toString(36)).join("").slice(0, 8);
  }
  return Math.random().toString(36).slice(2, 10);
}
const {
  addNode: Ao,
  moveNode: um,
  setNodeLabel: sm,
  selectNode: Bi,
  addEdge: Fm,
  deleteSelected: ya,
  setToolMode: Um,
  startConnectionFrom: am,
  completeConnectionTo: cm,
  setHoveredNode: ma,
  setHoveredEdge: va,
  setImportErrors: Vr,
  setLastError: Am,
  startBoxSelect: $m,
  updateBoxSelect: Bm,
  commitBoxSelect: Vm,
  setEditingNodeId: Wm,
  selectEdge: ga,
  clearSelection: fm,
  loadDiagram: ld
} = rd.actions, dm = rd.reducer;
function Vi(e) {
  switch (e.type) {
    case "task":
      return { x: e.position.x + 70, y: e.position.y + 28 };
    case "start":
    case "end":
      return { x: e.position.x + 24, y: e.position.y + 24 };
  }
}
function od(e) {
  switch (e.type) {
    case "task":
      return { x: e.position.x, y: e.position.y, w: 140, h: 56, r: 0 };
    case "start":
    case "end":
      return { x: e.position.x, y: e.position.y, w: 48, h: 48, r: 24 };
  }
}
function pm(e) {
  switch (e.type) {
    case "task":
      return { x: e.position.x, y: e.position.y, w: 140, h: 56 };
    case "start":
    case "end":
      return { x: e.position.x, y: e.position.y, w: 48, h: 48 };
  }
}
function hm(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n], { x: l, y: o, w: i, h: u } = pm(r);
    if (e.x >= l && e.x <= l + i && e.y >= o && e.y <= o + u) return r;
  }
}
function wa(e, t) {
  const n = Vi(e), r = od(e);
  return e.type === "task" ? mm(n, t, { x: r.x, y: r.y, w: r.w, h: r.h }) : ym(n, t, r.r);
}
function ym(e, t, n) {
  const r = t.x - e.x, l = t.y - e.y, o = Math.hypot(r, l) || 1;
  return { x: e.x + r / o * n, y: e.y + l / o * n };
}
function mm(e, t, n) {
  const r = t.x - e.x, l = t.y - e.y, o = [], i = n.x, u = n.x + n.w, s = n.y, a = n.y + n.h;
  if (r !== 0) {
    const y = (i - e.x) / r, h = e.y + y * l;
    y > 0 && h >= s && h <= a && o.push(y);
    const v = (u - e.x) / r, g = e.y + v * l;
    v > 0 && g >= s && g <= a && o.push(v);
  }
  if (l !== 0) {
    const y = (s - e.y) / l, h = e.x + y * r;
    y > 0 && h >= i && h <= u && o.push(y);
    const v = (a - e.y) / l, g = e.x + v * r;
    v > 0 && g >= i && g <= u && o.push(v);
  }
  const c = Math.min(...o);
  return { x: e.x + c * r, y: e.y + c * l };
}
function vm(e, t, n) {
  if (id(e, t, n)) return [e, t];
  const r = (c) => gm(c, n) ? Em(c) : null, l = r([e, { x: t.x, y: e.y }, t]);
  if (l) return l;
  const o = r([e, { x: e.x, y: t.y }, t]);
  if (o) return o;
  const { xs: i, ys: u } = km(n, e, t), s = i.slice(0, 12), a = u.slice(0, 12);
  for (const c of s) {
    const y = r([e, { x: c, y: e.y }, { x: c, y: t.y }, t]);
    if (y) return y;
    for (const h of a) {
      const v = r([e, { x: c, y: e.y }, { x: c, y: h }, { x: t.x, y: h }, t]);
      if (v) return v;
    }
  }
  for (const c of a) {
    const y = r([e, { x: e.x, y: c }, { x: t.x, y: c }, t]);
    if (y) return y;
    for (const h of s) {
      const v = r([e, { x: e.x, y: c }, { x: h, y: c }, { x: h, y: t.y }, t]);
      if (v) return v;
    }
  }
  return [e, t];
}
function xa(e) {
  if (e.length === 0) return "";
  const [t, ...n] = e;
  return ["M", t.x, t.y, ...n.flatMap((r) => ["L", r.x, r.y])].join(" ");
}
function gm(e, t) {
  for (let n = 0; n < e.length - 1; n++)
    if (!id(e[n], e[n + 1], t)) return !1;
  return !0;
}
function id(e, t, n) {
  for (const r of n)
    if (r.kind === "rect") {
      if (wm(e, t, r)) return !1;
    } else if (xm(e, t, r)) return !1;
  return !0;
}
function wm(e, t, n) {
  const r = Math.min(e.x, t.x), l = Math.max(e.x, t.x), o = Math.min(e.y, t.y), i = Math.max(e.y, t.y);
  if (l < n.x || r > n.x + n.w || i < n.y || o > n.y + n.h)
    return !1;
  if (Sa(e, n) || Sa(t, n)) return !0;
  const u = [
    [{ x: n.x, y: n.y }, { x: n.x + n.w, y: n.y }],
    [{ x: n.x + n.w, y: n.y }, { x: n.x + n.w, y: n.y + n.h }],
    [{ x: n.x + n.w, y: n.y + n.h }, { x: n.x, y: n.y + n.h }],
    [{ x: n.x, y: n.y + n.h }, { x: n.x, y: n.y }]
  ];
  for (const [s, a] of u)
    if (Sm(e, t, s, a)) return !0;
  return !1;
}
function Sa(e, t) {
  return e.x > t.x && e.x < t.x + t.w && e.y > t.y && e.y < t.y + t.h;
}
function xm(e, t, n) {
  const r = t.x - e.x, l = t.y - e.y, o = r * r + l * l;
  if (o === 0) return ka(e.x, e.y, n.cx, n.cy) <= n.r;
  let i = ((n.cx - e.x) * r + (n.cy - e.y) * l) / o;
  i = Math.max(0, Math.min(1, i));
  const u = e.x + i * r, s = e.y + i * l;
  return ka(u, s, n.cx, n.cy) <= n.r;
}
function ka(e, t, n, r) {
  const l = n - e, o = r - t;
  return Math.hypot(l, o);
}
function Sm(e, t, n, r) {
  const l = Wr(e, t, n), o = Wr(e, t, r), i = Wr(n, r, e), u = Wr(n, r, t);
  return !!(l !== o && i !== u || l === 0 && Hr(e, n, t) || o === 0 && Hr(e, r, t) || i === 0 && Hr(n, e, r) || u === 0 && Hr(n, t, r));
}
function Wr(e, t, n) {
  const r = (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
  return Math.abs(r) < 1e-6 ? 0 : r > 0 ? 1 : 2;
}
function Hr(e, t, n) {
  return t.x <= Math.max(e.x, n.x) + 1e-6 && t.x + 1e-6 >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) + 1e-6 && t.y + 1e-6 >= Math.min(e.y, n.y);
}
function km(e, t, n) {
  const r = /* @__PURE__ */ new Set([t.x, n.x]), l = /* @__PURE__ */ new Set([t.y, n.y]);
  for (const a of e)
    a.kind === "rect" ? (r.add(a.x - 8), r.add(a.x + a.w + 8), l.add(a.y - 8), l.add(a.y + a.h + 8)) : (r.add(a.cx - a.r - 8), r.add(a.cx + a.r + 8), l.add(a.cy - a.r - 8), l.add(a.cy + a.r + 8));
  const o = (t.x + n.x) / 2, i = (t.y + n.y) / 2, u = Array.from(r).sort((a, c) => Math.abs(a - o) - Math.abs(c - o)), s = Array.from(l).sort((a, c) => Math.abs(a - i) - Math.abs(c - i));
  return { xs: u, ys: s };
}
function Em(e) {
  const t = [];
  for (const r of e) {
    const l = t[t.length - 1];
    (!l || l.x !== r.x || l.y !== r.y) && t.push({ x: r.x, y: r.y });
  }
  const n = [];
  for (const r of t) {
    if (n.length < 2) {
      n.push(r);
      continue;
    }
    const l = n[n.length - 2], o = n[n.length - 1];
    l.x === o.x && o.x === r.x || l.y === o.y && o.y === r.y ? n[n.length - 1] = r : n.push(r);
  }
  return n;
}
function _m({ edge: e, nodes: t }) {
  const n = t[e.source], r = t[e.target];
  if (!n || !r) return null;
  const l = Au(), o = ft((p) => p.diagram.selection.edgeIds.includes(e.id)), i = Vi(n), u = Vi(r), s = wa(n, u), a = wa(r, i), c = ft((p) => {
    var f;
    return ((f = p.config) == null ? void 0 : f.obstaclePadding) ?? 8;
  }), y = z.useMemo(() => {
    const p = [];
    for (const f of Object.values(t)) {
      if (!f || f.id === n.id || f.id === r.id) continue;
      const d = od(f);
      f.type === "task" ? p.push({
        kind: "rect",
        x: d.x - c,
        y: d.y - c,
        w: d.w + c * 2,
        h: d.h + c * 2
      }) : p.push({
        kind: "circle",
        cx: f.position.x + 24,
        cy: f.position.y + 24,
        r: 24 + c
      });
    }
    return p;
  }, [t, n.id, r.id, c]), h = vm(s, a, y), v = `arrow-${e.id}`, g = o ? "#6366f1" : "#e5e7eb", w = o ? 3 : 2, T = (p) => {
    p.stopPropagation(), l(ga(e.id));
  };
  return /* @__PURE__ */ E.jsxs(
    "g",
    {
      onClick: T,
      onMouseEnter: () => l(va(e.id)),
      onMouseLeave: () => l(va(void 0)),
      style: { cursor: "pointer" },
      tabIndex: 0,
      role: "button",
      "aria-label": `Connection from ${n.label ?? n.type} to ${r.label ?? r.type}`,
      onKeyDown: (p) => {
        (p.key === "Enter" || p.key === " ") && (p.preventDefault(), l(ga(e.id)));
      },
      children: [
        /* @__PURE__ */ E.jsx("defs", { children: /* @__PURE__ */ E.jsx("marker", { id: v, markerWidth: "5", markerHeight: "5", refX: "5", refY: "2.5", orient: "auto-start-reverse", children: /* @__PURE__ */ E.jsx("path", { d: "M 0 0 L 5 2.5 L 0 5 z", fill: g }) }) }),
        h.length === 2 ? /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx(
            "line",
            {
              x1: h[0].x,
              y1: h[0].y,
              x2: h[1].x,
              y2: h[1].y,
              stroke: g,
              strokeOpacity: 0.85,
              strokeWidth: w,
              markerEnd: `url(#${v})`
            }
          ),
          /* @__PURE__ */ E.jsx(
            "line",
            {
              x1: h[0].x,
              y1: h[0].y,
              x2: h[1].x,
              y2: h[1].y,
              stroke: "transparent",
              strokeWidth: 16,
              pointerEvents: "stroke"
            }
          )
        ] }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx(
            "path",
            {
              d: xa(h),
              fill: "none",
              stroke: g,
              strokeOpacity: 0.85,
              strokeWidth: w,
              markerEnd: `url(#${v})`
            }
          ),
          /* @__PURE__ */ E.jsx("path", { d: xa(h), fill: "none", stroke: "transparent", strokeWidth: 16, pointerEvents: "stroke" })
        ] })
      ]
    }
  );
}
const Cm = z.memo(_m);
function Nm({ svgRef: e, nodes: t, nodesById: n, onSelectNode: r, onMoveNode: l }) {
  const [o, i] = z.useState(), u = z.useCallback((y, h) => {
    var T;
    const v = e.current;
    if (!v) return { x: y, y: h };
    const g = v.createSVGPoint();
    g.x = y, g.y = h;
    const w = g.matrixTransform((T = v.getScreenCTM()) == null ? void 0 : T.inverse());
    return { x: w.x, y: w.y };
  }, [e]), s = z.useCallback((y) => {
    const h = u(y.clientX, y.clientY), v = hm(h, t);
    if (v) {
      const g = n[v.id];
      i({ id: v.id, offset: { x: h.x - g.position.x, y: h.y - g.position.y } }), r(v.id);
    }
  }, [u, t, n, r]), a = z.useCallback((y) => {
    if (!o) return;
    const h = u(y.clientX, y.clientY), v = { x: h.x - o.offset.x, y: h.y - o.offset.y };
    l(o.id, v);
  }, [u, o, l]), c = z.useCallback(() => i(void 0), []);
  return { handleMouseDown: s, handleMouseMove: a, handleMouseUp: c, dragging: !!o };
}
function Pm(e) {
  const { onDelete: t } = e;
  z.useEffect(() => {
    const n = (r) => {
      (r.key === "Delete" || r.key === "Backspace") && t && t();
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [t]);
}
function Tm({ node: e }) {
  const t = Au(), n = ft((d) => d.diagram.selection.nodeIds.includes(e.id)), { toolMode: r, pendingConnectionFrom: l } = ft((d) => d.diagram.ui), [o, i] = z.useState(!1), u = z.useRef(null), { width: s, height: a, borderRadius: c } = z.useMemo(() => {
    switch (e.type) {
      case "task":
        return { width: 140, height: 56, borderRadius: 10 };
      case "start":
      case "end":
        return { width: 48, height: 48, borderRadius: 24 };
    }
  }, [e.type]), y = e.position.x, h = e.position.y, v = (d) => {
    d.stopPropagation(), r === "connect" && l && l !== e.id ? t(cm(e.id)) : t(Bi(e.id));
  }, g = (d) => {
    d.stopPropagation(), e.type === "task" && i(!0);
  }, w = n ? "#6366f1" : "rgba(255,255,255,0.35)", T = (e.type === "task", "rgba(255,255,255,0.06)"), p = (e.type === "task", y + s), f = (e.type === "task", h + a / 2);
  return /* @__PURE__ */ E.jsxs(
    "g",
    {
      ref: u,
      onClick: v,
      onMouseEnter: () => t(ma(e.id)),
      onMouseLeave: () => t(ma(void 0)),
      tabIndex: 0,
      onKeyDown: (d) => {
        (d.key === "Enter" || d.key === " ") && (d.preventDefault(), t(Bi(e.id)));
      },
      role: "button",
      "aria-label": `${e.type === "task" ? "Task" : e.type === "start" ? "Start" : "End"} node${e.label ? `: ${e.label}` : ""}`,
      children: [
        e.type === "task" ? /* @__PURE__ */ E.jsx("rect", { x: y, y: h, width: s, height: a, rx: c, fill: T, stroke: w }) : e.type === "start" ? /* @__PURE__ */ E.jsx("circle", { cx: y + c, cy: h + c, r: c, fill: T, stroke: w }) : (
          // end: double circle
          /* @__PURE__ */ E.jsxs("g", { children: [
            /* @__PURE__ */ E.jsx("circle", { cx: y + c, cy: h + c, r: c, fill: T, stroke: w }),
            /* @__PURE__ */ E.jsx("circle", { cx: y + c, cy: h + c, r: c - 5, fill: T, stroke: w })
          ] })
        ),
        e.type === "task" && !o && /* @__PURE__ */ E.jsx(
          "text",
          {
            x: y + s / 2,
            y: h + a / 2 + 5,
            textAnchor: "middle",
            fontSize: 14,
            onDoubleClick: g,
            style: { userSelect: "none", pointerEvents: "auto" },
            children: e.label ?? "Task"
          }
        ),
        o && /* @__PURE__ */ E.jsx("foreignObject", { x: y + 8, y: h + a / 2 - 14, width: s - 16, height: 28, children: /* @__PURE__ */ E.jsx(
          "input",
          {
            autoFocus: !0,
            defaultValue: e.label ?? "",
            onBlur: (d) => {
              i(!1), t(sm({ id: e.id, label: d.currentTarget.value })), setTimeout(() => {
                var m;
                return (m = u.current) == null ? void 0 : m.focus();
              }, 0);
            },
            onKeyDown: (d) => {
              d.key === "Enter" && d.target.blur(), d.key === "Escape" && i(!1);
            },
            style: { width: "100%", background: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, padding: "4px 6px" }
          }
        ) }),
        /* @__PURE__ */ E.jsx(
          "circle",
          {
            cx: p,
            cy: f,
            r: 6,
            fill: r === "connect" && l === e.id ? "#6366f1" : "rgba(255,255,255,0.2)",
            stroke: w,
            onClick: (d) => {
              d.stopPropagation(), t(am(e.id));
            },
            "aria-label": `Connect from ${e.label ?? e.type} node`
          }
        )
      ]
    }
  );
}
const Rm = z.memo(Tm);
function zm() {
  const e = Au(), t = ft((d) => d.diagram.nodes), n = ft((d) => d.diagram.edges), [r, l] = z.useState(!1), [o, i] = z.useState(""), [u, s] = z.useState(!1), [a, c] = z.useState(""), y = ft((d) => d.diagram.ui.importErrors), h = ft((d) => {
    var m;
    return ((m = d.config) == null ? void 0 : m.keyboardEnabled) ?? !0;
  }), v = z.useMemo(() => Object.fromEntries(t.map((d) => [d.id, d])), [t]), g = z.useRef(null), w = () => e(fm()), { handleMouseDown: T, handleMouseMove: p, handleMouseUp: f } = Nm({
    svgRef: g,
    nodes: t,
    nodesById: v,
    onSelectNode: (d) => e(Bi(d)),
    onMoveNode: (d, m) => e(um({ id: d, position: m }))
  });
  return Pm({ onDelete: h ? () => e(ya()) : void 0 }), /* @__PURE__ */ E.jsxs("div", { style: { display: "grid", gridTemplateRows: "40px 1fr", height: "100%" }, children: [
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", padding: "6px 10px" }, children: [
      /* @__PURE__ */ E.jsx("button", { onClick: () => e(Ao("start", { x: 80, y: 80 })), children: "+ Start" }),
      /* @__PURE__ */ E.jsx("button", { onClick: () => e(Ao("task", { x: 200, y: 80 })), children: "+ Task" }),
      /* @__PURE__ */ E.jsx("button", { onClick: () => e(Ao("end", { x: 380, y: 80 })), children: "+ End" }),
      /* @__PURE__ */ E.jsx("button", { onClick: () => e(ya()), style: { marginLeft: 12 }, children: "Delete" }),
      /* @__PURE__ */ E.jsx(
        "button",
        {
          style: { marginLeft: "auto" },
          onClick: async () => {
            const d = await Mm(t, n);
            i(d), l(!0);
          },
          children: "Export JSON"
        }
      ),
      /* @__PURE__ */ E.jsx("button", { onClick: () => s(!0), children: "Import JSON" })
    ] }),
    y && y.length > 0 && /* @__PURE__ */ E.jsxs("div", { "aria-live": "polite", role: "status", style: { padding: "0 10px 6px 10px" }, children: [
      /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, color: "#fecaca" }, children: [
        /* @__PURE__ */ E.jsx("strong", { children: "Import errors:" }),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            onClick: () => e(Vr(null)),
            "aria-label": "Dismiss import errors",
            style: { marginLeft: 8 },
            children: "Close"
          }
        )
      ] }),
      /* @__PURE__ */ E.jsx("ul", { style: { margin: "6px 0 0 18px", color: "#fecaca" }, children: y.map((d, m) => /* @__PURE__ */ E.jsx("li", { children: d }, m)) })
    ] }),
    /* @__PURE__ */ E.jsxs(
      "svg",
      {
        ref: g,
        width: "100%",
        height: "100%",
        onMouseDown: T,
        onMouseMove: p,
        onMouseUp: f,
        onClick: w,
        children: [
          /* @__PURE__ */ E.jsx(yy, {}),
          n.map((d) => /* @__PURE__ */ E.jsx(Cm, { edge: d, nodes: v }, d.id)),
          t.map((d) => /* @__PURE__ */ E.jsx(Rm, { node: d }, d.id))
        ]
      }
    ),
    /* @__PURE__ */ E.jsx(py, { show: r, text: o, onClose: () => l(!1) }),
    /* @__PURE__ */ E.jsx(
      vy,
      {
        show: u,
        initialText: a,
        onImport: async (d) => {
          c(d);
          try {
            const m = JSON.parse(d), { safeImportFromExampleJson: S } = await Promise.resolve().then(() => fd), k = S(m);
            e(ld(k)), e(Vr(null)), s(!1);
          } catch (m) {
            const S = m instanceof Error ? m.message : "Invalid JSON", _ = S.split(`
`).filter((C) => C.trim().startsWith("- ")).map((C) => C.replace(/^\s*-\s*/, ""));
            e(Vr(_.length > 0 ? _.slice(0, 5) : [S])), s(!1), window.setTimeout(() => e(Vr(null)), 6e3);
          }
        },
        onClose: () => s(!1)
      }
    )
  ] });
}
async function Mm(e, t) {
  const { exportToExampleJson: n } = await Promise.resolve().then(() => fd), r = n({ nodes: e, edges: t });
  return JSON.stringify(r, null, 2);
}
function Im() {
  return /* @__PURE__ */ E.jsx(fy, { children: /* @__PURE__ */ E.jsx(zm, {}) });
}
function Ku(e) {
  switch (e) {
    case "bpmn:StartEvent":
      return "start";
    case "bpmn:UserTask":
      return "task";
    case "bpmn:EndEvent":
      return "end";
    default:
      return;
  }
}
function ud(e) {
  switch (e) {
    case "start":
      return "bpmn:StartEvent";
    case "task":
      return "bpmn:UserTask";
    case "end":
      return "bpmn:EndEvent";
  }
}
function sd(e) {
  const t = e.definitions.rootElements.find((o) => o.$type === "bpmn:Process"), n = (t == null ? void 0 : t.flowElements) ?? [], r = [], l = [];
  for (const o of n)
    if (o.$type === "bpmn:SequenceFlow")
      l.push({ id: o.id, source: o.sourceRef, target: o.targetRef, label: o.name });
    else {
      const i = Ku(o.$type);
      if (!i) continue;
      r.push({
        id: o.id,
        type: i,
        position: { x: Number(o.x ?? 0), y: Number(o.y ?? 0) },
        label: o.name
      });
    }
  return { nodes: r, edges: l };
}
function Wi(e) {
  const t = [];
  for (const n of e.nodes)
    t.push({
      $type: ud(n.type),
      id: n.id,
      name: n.label ?? "",
      x: n.position.x,
      y: n.position.y
    });
  for (const n of e.edges)
    t.push({
      $type: "bpmn:SequenceFlow",
      id: n.id,
      sourceRef: n.source,
      targetRef: n.target,
      name: n.label ?? ""
    });
  return {
    definitions: {
      $type: "bpmn:Definitions",
      id: "Definitions_1",
      targetNamespace: "bpmn.io",
      rootElements: [
        {
          $type: "bpmn:Process",
          id: "Process_1",
          isExecutable: !1,
          name: "Workflow",
          flowElements: t
        }
      ]
    }
  };
}
function ad(e) {
  var s, a;
  const t = [], n = e;
  if (!n || typeof n != "object")
    return { valid: !1, errors: ["Root is not an object"] };
  const r = n.definitions;
  (!r || r.$type !== "bpmn:Definitions") && t.push('definitions.$type must be "bpmn:Definitions"');
  const l = (a = (s = r == null ? void 0 : r.rootElements) == null ? void 0 : s.find) == null ? void 0 : a.call(s, (c) => c.$type === "bpmn:Process");
  l || t.push("definitions.rootElements must contain one bpmn:Process");
  const o = (l == null ? void 0 : l.flowElements) || [], i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  for (const c of o) {
    if (!c || typeof c != "object") {
      t.push("flowElements contains a non-object entry");
      continue;
    }
    typeof c.id != "string" || c.id.length === 0 ? t.push("Every flowElement must have a non-empty string id") : (i.has(c.id) && t.push(`Duplicate id detected: ${c.id}`), i.add(c.id)), c.$type === "bpmn:SequenceFlow" ? (typeof c.sourceRef != "string" && t.push(`SequenceFlow ${c.id}: missing sourceRef`), typeof c.targetRef != "string" && t.push(`SequenceFlow ${c.id}: missing targetRef`)) : (Ku(c.$type) || t.push(`Unsupported element type: ${String(c.$type)}`), (typeof c.x != "number" || typeof c.y != "number") && t.push(`Element ${c.id} (${c.$type}) must have numeric x and y`), typeof c.id == "string" && u.add(c.id));
  }
  for (const c of o)
    c.$type === "bpmn:SequenceFlow" && (typeof c.sourceRef == "string" && !u.has(c.sourceRef) && t.push(`SequenceFlow ${c.id}: sourceRef does not reference an existing node (${c.sourceRef})`), typeof c.targetRef == "string" && !u.has(c.targetRef) && t.push(`SequenceFlow ${c.id}: targetRef does not reference an existing node (${c.targetRef})`), c.sourceRef === c.targetRef && t.push(`SequenceFlow ${c.id}: sourceRef and targetRef must differ`));
  return { valid: t.length === 0, errors: t };
}
function cd(e) {
  const t = ad(e);
  if (!t.valid) {
    const n = `Invalid diagram JSON:
- ${t.errors.join(`
- `)}`;
    throw new Error(n);
  }
  return sd(e);
}
const fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportToExampleJson: Wi,
  importFromExampleJson: sd,
  mapBpmnTypeToInternal: Ku,
  mapInternalTypeToBpmn: ud,
  safeImportFromExampleJson: cd,
  validateExampleJson: ad
}, Symbol.toStringTag, { value: "Module" })), Om = {
  readOnly: !1,
  theme: "dark",
  keyboardEnabled: !0,
  obstaclePadding: 8,
  allowDoglegs: !0
}, dd = nd({
  name: "config",
  initialState: Om,
  reducers: {
    setReadOnly(e, t) {
      e.readOnly = t.payload;
    },
    setTheme(e, t) {
      e.theme = t.payload;
    },
    setKeyboardEnabled(e, t) {
      e.keyboardEnabled = t.payload;
    },
    setObstaclePadding(e, t) {
      e.obstaclePadding = t.payload;
    },
    setAllowDoglegs(e, t) {
      e.allowDoglegs = t.payload;
    }
  }
}), {
  setReadOnly: Hm,
  setTheme: Qm,
  setKeyboardEnabled: Km,
  setObstaclePadding: Ym,
  setAllowDoglegs: Xm
} = dd.actions, Lm = dd.reducer, Mn = Yy({
  reducer: {
    config: Lm,
    diagram: dm
  }
}), jm = "*,*:before,*:after{box-sizing:border-box}html,body,#root{height:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial,sans-serif;background:linear-gradient(180deg,#0f172a,#111827);color:#e5e7eb;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid rgba(255,255,255,.15);background:#ffffff0f;color:#e5e7eb;padding:6px 12px;border-radius:8px;cursor:pointer;transition:transform .12s ease,background .12s ease,border-color .12s ease}button:hover{background:#ffffff1f;border-color:#ffffff40}button:active{transform:translateY(1px)}button:focus-visible{outline:2px solid #6366f1;outline-offset:2px}input[type=number],input[type=text]{background:#ffffff0f;border:1px solid rgba(255,255,255,.15);color:#e5e7eb;border-radius:8px;padding:6px 10px}input[type=number]:focus-visible,input[type=text]:focus-visible{outline:2px solid #6366f1;outline-offset:2px}h1{color:#e5e7eb}.accent{color:#6366f1}[role=button]:focus-visible{outline:2px solid #6366f1;outline-offset:2px}";
class Dm extends HTMLElement {
  constructor() {
    super(...arguments), this.lastSelectionKey = "";
  }
  connectedCallback() {
    const t = this.shadowRoot ?? this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = `${jm}
/* Ensure the host and mount container fill the allocated space */
:host { display: block; height: 100%; width: 100%; }
.we-root { display: block; height: 100%; width: 100%; }
`, t.appendChild(n), this.container = document.createElement("div"), this.container.className = "we-root", this.container.style.height = "100%", this.container.style.width = "100%", t.appendChild(this.container), this.root = $o.createRoot(this.container), this.root.render(
      /* @__PURE__ */ E.jsx(La.StrictMode, { children: /* @__PURE__ */ E.jsx(iy, { store: Mn, children: /* @__PURE__ */ E.jsx(Im, {}) }) })
    ), queueMicrotask(() => {
      this.dispatchEvent(new CustomEvent("ready"));
    }), this.unsubscribe = Mn.subscribe(() => {
      const r = Mn.getState().diagram, l = `${r.selection.nodeIds.join(",")}|${r.selection.edgeIds.join(",")}`;
      l !== this.lastSelectionKey && (this.lastSelectionKey = l, this.dispatchEvent(
        new CustomEvent("selectionchange", {
          detail: { nodeIds: r.selection.nodeIds, edgeIds: r.selection.edgeIds }
        })
      )), this.changeTimer && window.clearTimeout(this.changeTimer), this.changeTimer = window.setTimeout(() => {
        const o = Wi({ nodes: r.nodes, edges: r.edges });
        this.dispatchEvent(new CustomEvent("change", { detail: { json: o } }));
      }, 200);
    });
  }
  disconnectedCallback() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0), this.root && (this.root.unmount(), this.root = void 0), this.container && this.container.parentNode && (this.container.parentNode.removeChild(this.container), this.container = void 0);
  }
  // Public API
  getJSON() {
    const t = Mn.getState().diagram;
    return Wi({ nodes: t.nodes, edges: t.edges });
  }
  setJSON(t) {
    try {
      const n = cd(t);
      Mn.dispatch(ld(n));
    } catch (n) {
      const r = n instanceof Error ? n.message : String(n);
      this.dispatchEvent(new CustomEvent("error", { detail: { message: "Invalid JSON", details: r } }));
    }
  }
}
const Ea = "workflow-editor";
customElements.get(Ea) || customElements.define(Ea, Dm);
export {
  Dm as WorkflowEditorElement
};
//# sourceMappingURL=workflow-editor.es.js.map
