function ad(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xa = { exports: {} }, Ol = {}, ka = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr = Symbol.for("react.element"), cd = Symbol.for("react.portal"), fd = Symbol.for("react.fragment"), dd = Symbol.for("react.strict_mode"), pd = Symbol.for("react.profiler"), hd = Symbol.for("react.provider"), yd = Symbol.for("react.context"), md = Symbol.for("react.forward_ref"), vd = Symbol.for("react.suspense"), gd = Symbol.for("react.memo"), wd = Symbol.for("react.lazy"), Yu = Symbol.iterator;
function Sd(e) {
  return e === null || typeof e != "object" ? null : (e = Yu && e[Yu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ea = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, _a = Object.assign, Ca = {};
function gn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ca, this.updater = n || Ea;
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Na() {
}
Na.prototype = gn.prototype;
function Wi(e, t, n) {
  this.props = e, this.context = t, this.refs = Ca, this.updater = n || Ea;
}
var Hi = Wi.prototype = new Na();
Hi.constructor = Wi;
_a(Hi, gn.prototype);
Hi.isPureReactComponent = !0;
var Xu = Array.isArray, Pa = Object.prototype.hasOwnProperty, Qi = { current: null }, Ta = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ra(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Pa.call(t, r) && !Ta.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: dr, type: e, key: o, ref: i, props: l, _owner: Qi.current };
}
function xd(e, t) {
  return { $$typeof: dr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function kd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Gu = /\/+/g;
function oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? kd("" + e.key) : t.toString(36);
}
function Hr(e, t, n, r, l) {
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
        case cd:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + oo(i, 0) : r, Xu(l) ? (n = "", e != null && (n = e.replace(Gu, "$&/") + "/"), Hr(l, t, n, "", function(a) {
    return a;
  })) : l != null && (Ki(l) && (l = xd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Gu, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Xu(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + oo(o, u);
    i += Hr(o, t, n, s, l);
  }
  else if (s = Sd(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + oo(o, u++), i += Hr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function kr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Hr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Ed(e) {
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
var ce = { current: null }, Qr = { transition: null }, _d = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Qr, ReactCurrentOwner: Qi };
function za() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: kr, forEach: function(e, t, n) {
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
  if (!Ki(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = gn;
I.Fragment = fd;
I.Profiler = pd;
I.PureComponent = Wi;
I.StrictMode = dd;
I.Suspense = vd;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _d;
I.act = za;
I.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = _a({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Qi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Pa.call(t, s) && !Ta.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
I.createContext = function(e) {
  return e = { $$typeof: yd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hd, _context: e }, e.Consumer = e;
};
I.createElement = Ra;
I.createFactory = function(e) {
  var t = Ra.bind(null, e);
  return t.type = e, t;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: md, render: e };
};
I.isValidElement = Ki;
I.lazy = function(e) {
  return { $$typeof: wd, _payload: { _status: -1, _result: e }, _init: Ed };
};
I.memo = function(e, t) {
  return { $$typeof: gd, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function(e) {
  var t = Qr.transition;
  Qr.transition = {};
  try {
    e();
  } finally {
    Qr.transition = t;
  }
};
I.unstable_act = za;
I.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
I.useContext = function(e) {
  return ce.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
I.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
I.useId = function() {
  return ce.current.useId();
};
I.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
I.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
I.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
I.useRef = function(e) {
  return ce.current.useRef(e);
};
I.useState = function(e) {
  return ce.current.useState(e);
};
I.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function() {
  return ce.current.useTransition();
};
I.version = "18.3.1";
ka.exports = I;
var O = ka.exports;
const Ma = /* @__PURE__ */ ad(O);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd = O, Nd = Symbol.for("react.element"), Pd = Symbol.for("react.fragment"), Td = Object.prototype.hasOwnProperty, Rd = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ia(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Td.call(t, r) && !zd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Nd, type: e, key: o, ref: i, props: l, _owner: Rd.current };
}
Ol.Fragment = Pd;
Ol.jsx = Ia;
Ol.jsxs = Ia;
xa.exports = Ol;
var T = xa.exports, Ao = {}, La = { exports: {} }, Ee = {}, Oa = { exports: {} }, Da = {};
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
    var M = P.length;
    P.push(R);
    e: for (; 0 < M; ) {
      var Q = M - 1 >>> 1, J = P[Q];
      if (0 < l(J, R)) P[Q] = R, P[M] = J, M = Q;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var R = P[0], M = P.pop();
    if (M !== R) {
      P[0] = M;
      e: for (var Q = 0, J = P.length, Sr = J >>> 1; Q < Sr; ) {
        var Nt = 2 * (Q + 1) - 1, lo = P[Nt], Pt = Nt + 1, xr = P[Pt];
        if (0 > l(lo, M)) Pt < J && 0 > l(xr, lo) ? (P[Q] = xr, P[Pt] = M, Q = Pt) : (P[Q] = lo, P[Nt] = M, Q = Nt);
        else if (Pt < J && 0 > l(xr, M)) P[Q] = xr, P[Pt] = M, Q = Pt;
        else break e;
      }
    }
    return R;
  }
  function l(P, R) {
    var M = P.sortIndex - R.sortIndex;
    return M !== 0 ? M : P.id - R.id;
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
  var s = [], a = [], c = 1, d = null, y = 3, m = !1, w = !1, g = !1, k = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null) r(a);
      else if (R.startTime <= P) r(a), R.sortIndex = R.expirationTime, t(s, R);
      else break;
      R = n(a);
    }
  }
  function v(P) {
    if (g = !1, h(P), !w) if (n(s) !== null) w = !0, no(x);
    else {
      var R = n(a);
      R !== null && ro(v, R.startTime - P);
    }
  }
  function x(P, R) {
    w = !1, g && (g = !1, p(N), N = -1), m = !0;
    var M = y;
    try {
      for (h(R), d = n(s); d !== null && (!(d.expirationTime > R) || P && !ve()); ) {
        var Q = d.callback;
        if (typeof Q == "function") {
          d.callback = null, y = d.priorityLevel;
          var J = Q(d.expirationTime <= R);
          R = e.unstable_now(), typeof J == "function" ? d.callback = J : d === n(s) && r(s), h(R);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var Sr = !0;
      else {
        var Nt = n(a);
        Nt !== null && ro(v, Nt.startTime - R), Sr = !1;
      }
      return Sr;
    } finally {
      d = null, y = M, m = !1;
    }
  }
  var E = !1, _ = null, N = -1, L = 5, z = -1;
  function ve() {
    return !(e.unstable_now() - z < L);
  }
  function Ct() {
    if (_ !== null) {
      var P = e.unstable_now();
      z = P;
      var R = !0;
      try {
        R = _(!0, P);
      } finally {
        R ? xn() : (E = !1, _ = null);
      }
    } else E = !1;
  }
  var xn;
  if (typeof f == "function") xn = function() {
    f(Ct);
  };
  else if (typeof MessageChannel < "u") {
    var Ku = new MessageChannel(), sd = Ku.port2;
    Ku.port1.onmessage = Ct, xn = function() {
      sd.postMessage(null);
    };
  } else xn = function() {
    k(Ct, 0);
  };
  function no(P) {
    _ = P, E || (E = !0, xn());
  }
  function ro(P, R) {
    N = k(function() {
      P(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    w || m || (w = !0, no(x));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = y;
    }
    var M = y;
    y = R;
    try {
      return P();
    } finally {
      y = M;
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
    var M = y;
    y = P;
    try {
      return R();
    } finally {
      y = M;
    }
  }, e.unstable_scheduleCallback = function(P, R, M) {
    var Q = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? Q + M : Q) : M = Q, P) {
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
    return J = M + J, P = { id: c++, callback: R, priorityLevel: P, startTime: M, expirationTime: J, sortIndex: -1 }, M > Q ? (P.sortIndex = M, t(a, P), n(s) === null && P === n(a) && (g ? (p(N), N = -1) : g = !0, ro(v, M - Q))) : (P.sortIndex = J, t(s, P), w || m || (w = !0, no(x))), P;
  }, e.unstable_shouldYield = ve, e.unstable_wrapCallback = function(P) {
    var R = y;
    return function() {
      var M = y;
      y = R;
      try {
        return P.apply(this, arguments);
      } finally {
        y = M;
      }
    };
  };
})(Da);
Oa.exports = Da;
var Md = Oa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id = O, ke = Md;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ja = /* @__PURE__ */ new Set(), Qn = {};
function $t(e, t) {
  an(e, t), an(e + "Capture", t);
}
function an(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) ja.add(t[e]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $o = Object.prototype.hasOwnProperty, Ld = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ju = {}, Zu = {};
function Od(e) {
  return $o.call(Zu, e) ? !0 : $o.call(Ju, e) ? !1 : Ld.test(e) ? Zu[e] = !0 : (Ju[e] = !0, !1);
}
function Dd(e, t, n, r) {
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
function jd(e, t, n, r) {
  if (t === null || typeof t > "u" || Dd(e, t, n, r)) return !0;
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
var Yi = /[\-:]([a-z])/g;
function Xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yi,
    Xi
  );
  ne[t] = new fe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yi, Xi);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yi, Xi);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gi(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jd(t, n, l, r) && (n = null), r || l === null ? Od(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Er = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Qt = Symbol.for("react.fragment"), Ji = Symbol.for("react.strict_mode"), Vo = Symbol.for("react.profiler"), Fa = Symbol.for("react.provider"), Ua = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), Bo = Symbol.for("react.suspense"), Wo = Symbol.for("react.suspense_list"), qi = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), Aa = Symbol.for("react.offscreen"), qu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = qu && e[qu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, io;
function Mn(e) {
  if (io === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    io = t && t[1] || "";
  }
  return `
` + io + e;
}
var uo = !1;
function so(e, t) {
  if (!e || uo) return "";
  uo = !0;
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
    uo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function Fd(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = so(e.type, !1), e;
    case 11:
      return e = so(e.type.render, !1), e;
    case 1:
      return e = so(e.type, !0), e;
    default:
      return "";
  }
}
function Ho(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Ht:
      return "Portal";
    case Vo:
      return "Profiler";
    case Ji:
      return "StrictMode";
    case Bo:
      return "Suspense";
    case Wo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ua:
      return (e.displayName || "Context") + ".Consumer";
    case Fa:
      return (e._context.displayName || "Context") + ".Provider";
    case Zi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case qi:
      return t = e.displayName || null, t !== null ? t : Ho(e.type) || "Memo";
    case ot:
      t = e._payload, e = e._init;
      try {
        return Ho(e(t));
      } catch {
      }
  }
  return null;
}
function Ud(e) {
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
      return Ho(t);
    case 8:
      return t === Ji ? "StrictMode" : "Mode";
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
function wt(e) {
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
function $a(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ad(e) {
  var t = $a(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Ad(e));
}
function Va(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = $a(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ll(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qo(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ba(e, t) {
  t = t.checked, t != null && Gi(e, "checked", t, !1);
}
function Ko(e, t) {
  Ba(e, t);
  var n = wt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Yo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yo(e, t.type, wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function es(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Yo(e, t, n) {
  (t !== "number" || ll(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function nn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ts(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (In(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wt(n) };
}
function Wa(e, t) {
  var n = wt(t.value), r = wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ha(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Go(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ha(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cr, Qa = function(e) {
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
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jn = {
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
}, $d = ["Webkit", "ms", "Moz", "O"];
Object.keys(jn).forEach(function(e) {
  $d.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jn[t] = jn[e];
  });
});
function Ka(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jn.hasOwnProperty(e) && jn[e] ? ("" + t).trim() : t + "px";
}
function Ya(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ka(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Vd = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Jo(e, t) {
  if (t) {
    if (Vd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Zo(e, t) {
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
var qo = null;
function bi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var bo = null, rn = null, ln = null;
function rs(e) {
  if (e = yr(e)) {
    if (typeof bo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Al(t), bo(e.stateNode, e.type, t));
  }
}
function Xa(e) {
  rn ? ln ? ln.push(e) : ln = [e] : rn = e;
}
function Ga() {
  if (rn) {
    var e = rn, t = ln;
    if (ln = rn = null, rs(e), t) for (e = 0; e < t.length; e++) rs(t[e]);
  }
}
function Ja(e, t) {
  return e(t);
}
function Za() {
}
var ao = !1;
function qa(e, t, n) {
  if (ao) return e(t, n);
  ao = !0;
  try {
    return Ja(e, t, n);
  } finally {
    ao = !1, (rn !== null || ln !== null) && (Za(), Ga());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var ei = !1;
if (qe) try {
  var En = {};
  Object.defineProperty(En, "passive", { get: function() {
    ei = !0;
  } }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
} catch {
  ei = !1;
}
function Bd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Fn = !1, ol = null, il = !1, ti = null, Wd = { onError: function(e) {
  Fn = !0, ol = e;
} };
function Hd(e, t, n, r, l, o, i, u, s) {
  Fn = !1, ol = null, Bd.apply(Wd, arguments);
}
function Qd(e, t, n, r, l, o, i, u, s) {
  if (Hd.apply(this, arguments), Fn) {
    if (Fn) {
      var a = ol;
      Fn = !1, ol = null;
    } else throw Error(S(198));
    il || (il = !0, ti = a);
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
function ba(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ls(e) {
  if (Vt(e) !== e) throw Error(S(188));
}
function Kd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Vt(e), t === null) throw Error(S(188));
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
        if (o === n) return ls(l), e;
        if (o === r) return ls(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
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
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function ec(e) {
  return e = Kd(e), e !== null ? tc(e) : null;
}
function tc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nc = ke.unstable_scheduleCallback, os = ke.unstable_cancelCallback, Yd = ke.unstable_shouldYield, Xd = ke.unstable_requestPaint, K = ke.unstable_now, Gd = ke.unstable_getCurrentPriorityLevel, eu = ke.unstable_ImmediatePriority, rc = ke.unstable_UserBlockingPriority, ul = ke.unstable_NormalPriority, Jd = ke.unstable_LowPriority, lc = ke.unstable_IdlePriority, Dl = null, We = null;
function Zd(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var je = Math.clz32 ? Math.clz32 : ep, qd = Math.log, bd = Math.LN2;
function ep(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (qd(e) / bd | 0) | 0;
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
function sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Ln(u) : (o &= i, o !== 0 && (r = Ln(o)));
  } else i = n & ~l, i !== 0 ? r = Ln(i) : o !== 0 && (r = Ln(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - je(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function tp(e, t) {
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
function np(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - je(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = tp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ni(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function oc() {
  var e = Nr;
  return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
}
function co(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - je(t), e[t] = n;
}
function rp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function tu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var j = 0;
function ic(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var uc, nu, sc, ac, cc, ri = !1, Tr = [], ft = null, dt = null, pt = null, Xn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), ut = [], lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function is(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function _n(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && nu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function op(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = _n(ft, e, t, n, r, l), !0;
    case "dragenter":
      return dt = _n(dt, e, t, n, r, l), !0;
    case "mouseover":
      return pt = _n(pt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Xn.set(o, _n(Xn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Gn.set(o, _n(Gn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function fc(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ba(n), t !== null) {
          e.blockedOn = t, cc(e.priority, function() {
            sc(n);
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
function Kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      qo = r, n.target.dispatchEvent(r), qo = null;
    } else return t = yr(n), t !== null && nu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function us(e, t, n) {
  Kr(e) && n.delete(t);
}
function ip() {
  ri = !1, ft !== null && Kr(ft) && (ft = null), dt !== null && Kr(dt) && (dt = null), pt !== null && Kr(pt) && (pt = null), Xn.forEach(us), Gn.forEach(us);
}
function Cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ri || (ri = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, ip)));
}
function Jn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < Tr.length) {
    Cn(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && Cn(ft, e), dt !== null && Cn(dt, e), pt !== null && Cn(pt, e), Xn.forEach(t), Gn.forEach(t), n = 0; n < ut.length; n++) r = ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && (n = ut[0], n.blockedOn === null); ) fc(n), n.blockedOn === null && ut.shift();
}
var on = rt.ReactCurrentBatchConfig, al = !0;
function up(e, t, n, r) {
  var l = j, o = on.transition;
  on.transition = null;
  try {
    j = 1, ru(e, t, n, r);
  } finally {
    j = l, on.transition = o;
  }
}
function sp(e, t, n, r) {
  var l = j, o = on.transition;
  on.transition = null;
  try {
    j = 4, ru(e, t, n, r);
  } finally {
    j = l, on.transition = o;
  }
}
function ru(e, t, n, r) {
  if (al) {
    var l = li(e, t, n, r);
    if (l === null) xo(e, t, r, cl, n), is(e, r);
    else if (op(l, e, t, n, r)) r.stopPropagation();
    else if (is(e, r), t & 4 && -1 < lp.indexOf(e)) {
      for (; l !== null; ) {
        var o = yr(l);
        if (o !== null && uc(o), o = li(e, t, n, r), o === null && xo(e, t, r, cl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else xo(e, t, r, null, n);
  }
}
var cl = null;
function li(e, t, n, r) {
  if (cl = null, e = bi(r), e = zt(e), e !== null) if (t = Vt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ba(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return cl = e, null;
}
function dc(e) {
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
      switch (Gd()) {
        case eu:
          return 1;
        case rc:
          return 4;
        case ul:
        case Jd:
          return 16;
        case lc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null, lu = null, Yr = null;
function pc() {
  if (Yr) return Yr;
  var e, t = lu, n = t.length, r, l = "value" in at ? at.value : at.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Yr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Xr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Rr() {
  return !0;
}
function ss() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Rr : ss, this.isPropagationStopped = ss, this;
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
var wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ou = _e(wn), hr = W({}, wn, { view: 0, detail: 0 }), ap = _e(hr), fo, po, Nn, jl = W({}, hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: iu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Nn && (Nn && e.type === "mousemove" ? (fo = e.screenX - Nn.screenX, po = e.screenY - Nn.screenY) : po = fo = 0, Nn = e), fo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : po;
} }), as = _e(jl), cp = W({}, jl, { dataTransfer: 0 }), fp = _e(cp), dp = W({}, hr, { relatedTarget: 0 }), ho = _e(dp), pp = W({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hp = _e(pp), yp = W({}, wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mp = _e(yp), vp = W({}, wn, { data: 0 }), cs = _e(vp), gp = {
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
}, wp = {
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
}, Sp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sp[e]) ? !!t[e] : !1;
}
function iu() {
  return xp;
}
var kp = W({}, hr, { key: function(e) {
  if (e.key) {
    var t = gp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: iu, charCode: function(e) {
  return e.type === "keypress" ? Xr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ep = _e(kp), _p = W({}, jl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fs = _e(_p), Cp = W({}, hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: iu }), Np = _e(Cp), Pp = W({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tp = _e(Pp), Rp = W({}, jl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zp = _e(Rp), Mp = [9, 13, 27, 32], uu = qe && "CompositionEvent" in window, Un = null;
qe && "documentMode" in document && (Un = document.documentMode);
var Ip = qe && "TextEvent" in window && !Un, hc = qe && (!uu || Un && 8 < Un && 11 >= Un), ds = " ", ps = !1;
function yc(e, t) {
  switch (e) {
    case "keyup":
      return Mp.indexOf(t.keyCode) !== -1;
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
function mc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Lp(e, t) {
  switch (e) {
    case "compositionend":
      return mc(t);
    case "keypress":
      return t.which !== 32 ? null : (ps = !0, ds);
    case "textInput":
      return e = t.data, e === ds && ps ? null : e;
    default:
      return null;
  }
}
function Op(e, t) {
  if (Kt) return e === "compositionend" || !uu && yc(e, t) ? (e = pc(), Yr = lu = at = null, Kt = !1, e) : null;
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
      return hc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Dp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dp[e.type] : t === "textarea";
}
function vc(e, t, n, r) {
  Xa(r), t = fl(t, "onChange"), 0 < t.length && (n = new ou("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var An = null, Zn = null;
function jp(e) {
  Tc(e, 0);
}
function Fl(e) {
  var t = Gt(e);
  if (Va(t)) return e;
}
function Fp(e, t) {
  if (e === "change") return t;
}
var gc = !1;
if (qe) {
  var yo;
  if (qe) {
    var mo = "oninput" in document;
    if (!mo) {
      var ys = document.createElement("div");
      ys.setAttribute("oninput", "return;"), mo = typeof ys.oninput == "function";
    }
    yo = mo;
  } else yo = !1;
  gc = yo && (!document.documentMode || 9 < document.documentMode);
}
function ms() {
  An && (An.detachEvent("onpropertychange", wc), Zn = An = null);
}
function wc(e) {
  if (e.propertyName === "value" && Fl(Zn)) {
    var t = [];
    vc(t, Zn, e, bi(e)), qa(jp, t);
  }
}
function Up(e, t, n) {
  e === "focusin" ? (ms(), An = t, Zn = n, An.attachEvent("onpropertychange", wc)) : e === "focusout" && ms();
}
function Ap(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fl(Zn);
}
function $p(e, t) {
  if (e === "click") return Fl(t);
}
function Vp(e, t) {
  if (e === "input" || e === "change") return Fl(t);
}
function Bp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ue = typeof Object.is == "function" ? Object.is : Bp;
function qn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!$o.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function vs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gs(e, t) {
  var n = vs(e);
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
    n = vs(n);
  }
}
function Sc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function xc() {
  for (var e = window, t = ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ll(e.document);
  }
  return t;
}
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wp(e) {
  var t = xc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Sc(n.ownerDocument.documentElement, n)) {
    if (r !== null && su(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = gs(n, o);
        var i = gs(
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
var Hp = qe && "documentMode" in document && 11 >= document.documentMode, Yt = null, oi = null, $n = null, ii = !1;
function ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ii || Yt == null || Yt !== ll(r) || (r = Yt, "selectionStart" in r && su(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $n && qn($n, r) || ($n = r, r = fl(oi, "onSelect"), 0 < r.length && (t = new ou("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function zr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: zr("Animation", "AnimationEnd"), animationiteration: zr("Animation", "AnimationIteration"), animationstart: zr("Animation", "AnimationStart"), transitionend: zr("Transition", "TransitionEnd") }, vo = {}, kc = {};
qe && (kc = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function Ul(e) {
  if (vo[e]) return vo[e];
  if (!Xt[e]) return e;
  var t = Xt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in kc) return vo[e] = t[n];
  return e;
}
var Ec = Ul("animationend"), _c = Ul("animationiteration"), Cc = Ul("animationstart"), Nc = Ul("transitionend"), Pc = /* @__PURE__ */ new Map(), Ss = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kt(e, t) {
  Pc.set(e, t), $t(t, [e]);
}
for (var go = 0; go < Ss.length; go++) {
  var wo = Ss[go], Qp = wo.toLowerCase(), Kp = wo[0].toUpperCase() + wo.slice(1);
  kt(Qp, "on" + Kp);
}
kt(Ec, "onAnimationEnd");
kt(_c, "onAnimationIteration");
kt(Cc, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(Nc, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
$t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var On = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yp = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function xs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Qd(r, t, void 0, e), e.currentTarget = null;
}
function Tc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        xs(l, u, a), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        xs(l, u, a), o = s;
      }
    }
  }
  if (il) throw e = ti, il = !1, ti = null, e;
}
function U(e, t) {
  var n = t[fi];
  n === void 0 && (n = t[fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Rc(t, e, 2, !1), n.add(r));
}
function So(e, t, n) {
  var r = 0;
  t && (r |= 4), Rc(n, e, r, t);
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function bn(e) {
  if (!e[Mr]) {
    e[Mr] = !0, ja.forEach(function(n) {
      n !== "selectionchange" && (Yp.has(n) || So(n, !1, e), So(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mr] || (t[Mr] = !0, So("selectionchange", !1, t));
  }
}
function Rc(e, t, n, r) {
  switch (dc(t)) {
    case 1:
      var l = up;
      break;
    case 4:
      l = sp;
      break;
    default:
      l = ru;
  }
  n = l.bind(null, t, n, e), l = void 0, !ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function xo(e, t, n, r, l) {
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
        if (i = zt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  qa(function() {
    var a = o, c = bi(n), d = [];
    e: {
      var y = Pc.get(e);
      if (y !== void 0) {
        var m = ou, w = e;
        switch (e) {
          case "keypress":
            if (Xr(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Ep;
            break;
          case "focusin":
            w = "focus", m = ho;
            break;
          case "focusout":
            w = "blur", m = ho;
            break;
          case "beforeblur":
          case "afterblur":
            m = ho;
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
            m = as;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = fp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Np;
            break;
          case Ec:
          case _c:
          case Cc:
            m = hp;
            break;
          case Nc:
            m = Tp;
            break;
          case "scroll":
            m = ap;
            break;
          case "wheel":
            m = zp;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = mp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = fs;
        }
        var g = (t & 4) !== 0, k = !g && e === "scroll", p = g ? y !== null ? y + "Capture" : null : y;
        g = [];
        for (var f = a, h; f !== null; ) {
          h = f;
          var v = h.stateNode;
          if (h.tag === 5 && v !== null && (h = v, p !== null && (v = Yn(f, p), v != null && g.push(er(f, v, h)))), k) break;
          f = f.return;
        }
        0 < g.length && (y = new m(y, w, null, n, c), d.push({ event: y, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", y && n !== qo && (w = n.relatedTarget || n.fromElement) && (zt(w) || w[be])) break e;
        if ((m || y) && (y = c.window === c ? c : (y = c.ownerDocument) ? y.defaultView || y.parentWindow : window, m ? (w = n.relatedTarget || n.toElement, m = a, w = w ? zt(w) : null, w !== null && (k = Vt(w), w !== k || w.tag !== 5 && w.tag !== 6) && (w = null)) : (m = null, w = a), m !== w)) {
          if (g = as, v = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = fs, v = "onPointerLeave", p = "onPointerEnter", f = "pointer"), k = m == null ? y : Gt(m), h = w == null ? y : Gt(w), y = new g(v, f + "leave", m, n, c), y.target = k, y.relatedTarget = h, v = null, zt(c) === a && (g = new g(p, f + "enter", w, n, c), g.target = h, g.relatedTarget = k, v = g), k = v, m && w) t: {
            for (g = m, p = w, f = 0, h = g; h; h = Bt(h)) f++;
            for (h = 0, v = p; v; v = Bt(v)) h++;
            for (; 0 < f - h; ) g = Bt(g), f--;
            for (; 0 < h - f; ) p = Bt(p), h--;
            for (; f--; ) {
              if (g === p || p !== null && g === p.alternate) break t;
              g = Bt(g), p = Bt(p);
            }
            g = null;
          }
          else g = null;
          m !== null && ks(d, y, m, g, !1), w !== null && k !== null && ks(d, k, w, g, !0);
        }
      }
      e: {
        if (y = a ? Gt(a) : window, m = y.nodeName && y.nodeName.toLowerCase(), m === "select" || m === "input" && y.type === "file") var x = Fp;
        else if (hs(y)) if (gc) x = Vp;
        else {
          x = Ap;
          var E = Up;
        }
        else (m = y.nodeName) && m.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (x = $p);
        if (x && (x = x(e, a))) {
          vc(d, x, n, c);
          break e;
        }
        E && E(e, y, a), e === "focusout" && (E = y._wrapperState) && E.controlled && y.type === "number" && Yo(y, "number", y.value);
      }
      switch (E = a ? Gt(a) : window, e) {
        case "focusin":
          (hs(E) || E.contentEditable === "true") && (Yt = E, oi = a, $n = null);
          break;
        case "focusout":
          $n = oi = Yt = null;
          break;
        case "mousedown":
          ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ii = !1, ws(d, n, c);
          break;
        case "selectionchange":
          if (Hp) break;
        case "keydown":
        case "keyup":
          ws(d, n, c);
      }
      var _;
      if (uu) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else Kt ? yc(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (hc && n.locale !== "ko" && (Kt || N !== "onCompositionStart" ? N === "onCompositionEnd" && Kt && (_ = pc()) : (at = c, lu = "value" in at ? at.value : at.textContent, Kt = !0)), E = fl(a, N), 0 < E.length && (N = new cs(N, e, null, n, c), d.push({ event: N, listeners: E }), _ ? N.data = _ : (_ = mc(n), _ !== null && (N.data = _)))), (_ = Ip ? Lp(e, n) : Op(e, n)) && (a = fl(a, "onBeforeInput"), 0 < a.length && (c = new cs("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: a }), c.data = _));
    }
    Tc(d, t);
  });
}
function er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Yn(e, n), o != null && r.unshift(er(e, o, l)), o = Yn(e, t), o != null && r.push(er(e, o, l))), e = e.return;
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ks(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, l ? (s = Yn(n, o), s != null && i.unshift(er(n, s, u))) : l || (s = Yn(n, o), s != null && i.push(er(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Xp = /\r\n?/g, Gp = /\u0000|\uFFFD/g;
function Es(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xp, `
`).replace(Gp, "");
}
function Ir(e, t, n) {
  if (t = Es(t), Es(e) !== t && n) throw Error(S(425));
}
function dl() {
}
var ui = null, si = null;
function ai(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ci = typeof setTimeout == "function" ? setTimeout : void 0, Jp = typeof clearTimeout == "function" ? clearTimeout : void 0, _s = typeof Promise == "function" ? Promise : void 0, Zp = typeof queueMicrotask == "function" ? queueMicrotask : typeof _s < "u" ? function(e) {
  return _s.resolve(null).then(e).catch(qp);
} : ci;
function qp(e) {
  setTimeout(function() {
    throw e;
  });
}
function ko(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Jn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Jn(t);
}
function ht(e) {
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
function Cs(e) {
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
var Sn = Math.random().toString(36).slice(2), Be = "__reactFiber$" + Sn, tr = "__reactProps$" + Sn, be = "__reactContainer$" + Sn, fi = "__reactEvents$" + Sn, bp = "__reactListeners$" + Sn, eh = "__reactHandles$" + Sn;
function zt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[be] || n[Be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Cs(e); e !== null; ) {
        if (n = e[Be]) return n;
        e = Cs(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[Be] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Al(e) {
  return e[tr] || null;
}
var di = [], Jt = -1;
function Et(e) {
  return { current: e };
}
function A(e) {
  0 > Jt || (e.current = di[Jt], di[Jt] = null, Jt--);
}
function F(e, t) {
  Jt++, di[Jt] = e.current, e.current = t;
}
var St = {}, ie = Et(St), he = Et(!1), Dt = St;
function cn(e, t) {
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
function pl() {
  A(he), A(ie);
}
function Ns(e, t, n) {
  if (ie.current !== St) throw Error(S(168));
  F(ie, t), F(he, n);
}
function zc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Ud(e) || "Unknown", l));
  return W({}, n, r);
}
function hl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, Dt = ie.current, F(ie, e), F(he, he.current), !0;
}
function Ps(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = zc(e, t, Dt), r.__reactInternalMemoizedMergedChildContext = e, A(he), A(ie), F(ie, e)) : A(he), F(he, n);
}
var Ke = null, $l = !1, Eo = !1;
function Mc(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function th(e) {
  $l = !0, Mc(e);
}
function _t() {
  if (!Eo && Ke !== null) {
    Eo = !0;
    var e = 0, t = j;
    try {
      var n = Ke;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, $l = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), nc(eu, _t), l;
    } finally {
      j = t, Eo = !1;
    }
  }
  return null;
}
var Zt = [], qt = 0, yl = null, ml = 0, Ce = [], Ne = 0, jt = null, Xe = 1, Ge = "";
function Tt(e, t) {
  Zt[qt++] = ml, Zt[qt++] = yl, yl = e, ml = t;
}
function Ic(e, t, n) {
  Ce[Ne++] = Xe, Ce[Ne++] = Ge, Ce[Ne++] = jt, jt = e;
  var r = Xe;
  e = Ge;
  var l = 32 - je(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - je(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Xe = 1 << 32 - je(t) + l | n << l | r, Ge = o + e;
  } else Xe = 1 << o | n << l | r, Ge = e;
}
function au(e) {
  e.return !== null && (Tt(e, 1), Ic(e, 1, 0));
}
function cu(e) {
  for (; e === yl; ) yl = Zt[--qt], Zt[qt] = null, ml = Zt[--qt], Zt[qt] = null;
  for (; e === jt; ) jt = Ce[--Ne], Ce[Ne] = null, Ge = Ce[--Ne], Ce[Ne] = null, Xe = Ce[--Ne], Ce[Ne] = null;
}
var xe = null, we = null, $ = !1, Oe = null;
function Lc(e, t) {
  var n = Pe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, we = ht(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jt !== null ? { id: Xe, overflow: Ge } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function pi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hi(e) {
  if ($) {
    var t = we;
    if (t) {
      var n = t;
      if (!Ts(e, t)) {
        if (pi(e)) throw Error(S(418));
        t = ht(n.nextSibling);
        var r = xe;
        t && Ts(e, t) ? Lc(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, xe = e);
      }
    } else {
      if (pi(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, $ = !1, xe = e;
    }
  }
}
function Rs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function Lr(e) {
  if (e !== xe) return !1;
  if (!$) return Rs(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ai(e.type, e.memoizedProps)), t && (t = we)) {
    if (pi(e)) throw Oc(), Error(S(418));
    for (; t; ) Lc(e, t), t = ht(t.nextSibling);
  }
  if (Rs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ht(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = xe ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Oc() {
  for (var e = we; e; ) e = ht(e.nextSibling);
}
function fn() {
  we = xe = null, $ = !1;
}
function fu(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var nh = rt.ReactCurrentBatchConfig;
function Pn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Or(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function zs(e) {
  var t = e._init;
  return t(e._payload);
}
function Dc(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [f], p.flags |= 16) : h.push(f);
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
    return p = gt(p, f), p.index = 0, p.sibling = null, p;
  }
  function o(p, f, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < f ? (p.flags |= 2, f) : h) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, h, v) {
    return f === null || f.tag !== 6 ? (f = zo(h, p.mode, v), f.return = p, f) : (f = l(f, h), f.return = p, f);
  }
  function s(p, f, h, v) {
    var x = h.type;
    return x === Qt ? c(p, f, h.props.children, v, h.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && zs(x) === f.type) ? (v = l(f, h.props), v.ref = Pn(p, f, h), v.return = p, v) : (v = tl(h.type, h.key, h.props, null, p.mode, v), v.ref = Pn(p, f, h), v.return = p, v);
  }
  function a(p, f, h, v) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = Mo(h, p.mode, v), f.return = p, f) : (f = l(f, h.children || []), f.return = p, f);
  }
  function c(p, f, h, v, x) {
    return f === null || f.tag !== 7 ? (f = Ot(h, p.mode, v, x), f.return = p, f) : (f = l(f, h), f.return = p, f);
  }
  function d(p, f, h) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = zo("" + f, p.mode, h), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Er:
          return h = tl(f.type, f.key, f.props, null, p.mode, h), h.ref = Pn(p, null, f), h.return = p, h;
        case Ht:
          return f = Mo(f, p.mode, h), f.return = p, f;
        case ot:
          var v = f._init;
          return d(p, v(f._payload), h);
      }
      if (In(f) || kn(f)) return f = Ot(f, p.mode, h, null), f.return = p, f;
      Or(p, f);
    }
    return null;
  }
  function y(p, f, h, v) {
    var x = f !== null ? f.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return x !== null ? null : u(p, f, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Er:
          return h.key === x ? s(p, f, h, v) : null;
        case Ht:
          return h.key === x ? a(p, f, h, v) : null;
        case ot:
          return x = h._init, y(
            p,
            f,
            x(h._payload),
            v
          );
      }
      if (In(h) || kn(h)) return x !== null ? null : c(p, f, h, v, null);
      Or(p, h);
    }
    return null;
  }
  function m(p, f, h, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return p = p.get(h) || null, u(f, p, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Er:
          return p = p.get(v.key === null ? h : v.key) || null, s(f, p, v, x);
        case Ht:
          return p = p.get(v.key === null ? h : v.key) || null, a(f, p, v, x);
        case ot:
          var E = v._init;
          return m(p, f, h, E(v._payload), x);
      }
      if (In(v) || kn(v)) return p = p.get(h) || null, c(f, p, v, x, null);
      Or(f, v);
    }
    return null;
  }
  function w(p, f, h, v) {
    for (var x = null, E = null, _ = f, N = f = 0, L = null; _ !== null && N < h.length; N++) {
      _.index > N ? (L = _, _ = null) : L = _.sibling;
      var z = y(p, _, h[N], v);
      if (z === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && z.alternate === null && t(p, _), f = o(z, f, N), E === null ? x = z : E.sibling = z, E = z, _ = L;
    }
    if (N === h.length) return n(p, _), $ && Tt(p, N), x;
    if (_ === null) {
      for (; N < h.length; N++) _ = d(p, h[N], v), _ !== null && (f = o(_, f, N), E === null ? x = _ : E.sibling = _, E = _);
      return $ && Tt(p, N), x;
    }
    for (_ = r(p, _); N < h.length; N++) L = m(_, p, N, h[N], v), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? N : L.key), f = o(L, f, N), E === null ? x = L : E.sibling = L, E = L);
    return e && _.forEach(function(ve) {
      return t(p, ve);
    }), $ && Tt(p, N), x;
  }
  function g(p, f, h, v) {
    var x = kn(h);
    if (typeof x != "function") throw Error(S(150));
    if (h = x.call(h), h == null) throw Error(S(151));
    for (var E = x = null, _ = f, N = f = 0, L = null, z = h.next(); _ !== null && !z.done; N++, z = h.next()) {
      _.index > N ? (L = _, _ = null) : L = _.sibling;
      var ve = y(p, _, z.value, v);
      if (ve === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && ve.alternate === null && t(p, _), f = o(ve, f, N), E === null ? x = ve : E.sibling = ve, E = ve, _ = L;
    }
    if (z.done) return n(
      p,
      _
    ), $ && Tt(p, N), x;
    if (_ === null) {
      for (; !z.done; N++, z = h.next()) z = d(p, z.value, v), z !== null && (f = o(z, f, N), E === null ? x = z : E.sibling = z, E = z);
      return $ && Tt(p, N), x;
    }
    for (_ = r(p, _); !z.done; N++, z = h.next()) z = m(_, p, N, z.value, v), z !== null && (e && z.alternate !== null && _.delete(z.key === null ? N : z.key), f = o(z, f, N), E === null ? x = z : E.sibling = z, E = z);
    return e && _.forEach(function(Ct) {
      return t(p, Ct);
    }), $ && Tt(p, N), x;
  }
  function k(p, f, h, v) {
    if (typeof h == "object" && h !== null && h.type === Qt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Er:
          e: {
            for (var x = h.key, E = f; E !== null; ) {
              if (E.key === x) {
                if (x = h.type, x === Qt) {
                  if (E.tag === 7) {
                    n(p, E.sibling), f = l(E, h.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (E.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && zs(x) === E.type) {
                  n(p, E.sibling), f = l(E, h.props), f.ref = Pn(p, E, h), f.return = p, p = f;
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            h.type === Qt ? (f = Ot(h.props.children, p.mode, v, h.key), f.return = p, p = f) : (v = tl(h.type, h.key, h.props, null, p.mode, v), v.ref = Pn(p, f, h), v.return = p, p = v);
          }
          return i(p);
        case Ht:
          e: {
            for (E = h.key; f !== null; ) {
              if (f.key === E) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                n(p, f.sibling), f = l(f, h.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = Mo(h, p.mode, v), f.return = p, p = f;
          }
          return i(p);
        case ot:
          return E = h._init, k(p, f, E(h._payload), v);
      }
      if (In(h)) return w(p, f, h, v);
      if (kn(h)) return g(p, f, h, v);
      Or(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(p, f.sibling), f = l(f, h), f.return = p, p = f) : (n(p, f), f = zo(h, p.mode, v), f.return = p, p = f), i(p)) : n(p, f);
  }
  return k;
}
var dn = Dc(!0), jc = Dc(!1), vl = Et(null), gl = null, bt = null, du = null;
function pu() {
  du = bt = gl = null;
}
function hu(e) {
  var t = vl.current;
  A(vl), e._currentValue = t;
}
function yi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function un(e, t) {
  gl = e, du = bt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function Re(e) {
  var t = e._currentValue;
  if (du !== e) if (e = { context: e, memoizedValue: t, next: null }, bt === null) {
    if (gl === null) throw Error(S(308));
    bt = e, gl.dependencies = { lanes: 0, firstContext: e };
  } else bt = bt.next = e;
  return t;
}
var Mt = null;
function yu(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Fc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, yu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r);
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function mu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Uc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Je(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, yu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n);
}
function Gr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, tu(e, n);
  }
}
function Ms(e, t) {
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
function wl(e, t, n, r) {
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
    var d = l.baseState;
    i = 0, c = a = s = null, u = o;
    do {
      var y = u.lane, m = u.eventTime;
      if ((r & y) === y) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, g = u;
          switch (y = t, m = n, g.tag) {
            case 1:
              if (w = g.payload, typeof w == "function") {
                d = w.call(m, d, y);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = g.payload, y = typeof w == "function" ? w.call(m, d, y) : w, y == null) break e;
              d = W({}, d, y);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [u] : y.push(u));
      } else m = { eventTime: m, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (a = c = m, s = d) : c = c.next = m, i |= y;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        y = u, u = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
      }
    } while (!0);
    if (c === null && (s = d), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Ut |= i, e.lanes = i, e.memoizedState = d;
  }
}
function Is(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var mr = {}, He = Et(mr), nr = Et(mr), rr = Et(mr);
function It(e) {
  if (e === mr) throw Error(S(174));
  return e;
}
function vu(e, t) {
  switch (F(rr, t), F(nr, e), F(He, mr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Go(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Go(t, e);
  }
  A(He), F(He, t);
}
function pn() {
  A(He), A(nr), A(rr);
}
function Ac(e) {
  It(rr.current);
  var t = It(He.current), n = Go(t, e.type);
  t !== n && (F(nr, e), F(He, n));
}
function gu(e) {
  nr.current === e && (A(He), A(nr));
}
var V = Et(0);
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
var _o = [];
function wu() {
  for (var e = 0; e < _o.length; e++) _o[e]._workInProgressVersionPrimary = null;
  _o.length = 0;
}
var Jr = rt.ReactCurrentDispatcher, Co = rt.ReactCurrentBatchConfig, Ft = 0, B = null, X = null, Z = null, xl = !1, Vn = !1, lr = 0, rh = 0;
function re() {
  throw Error(S(321));
}
function Su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function xu(e, t, n, r, l, o) {
  if (Ft = o, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jr.current = e === null || e.memoizedState === null ? uh : sh, e = n(r, l), Vn) {
    o = 0;
    do {
      if (Vn = !1, lr = 0, 25 <= o) throw Error(S(301));
      o += 1, Z = X = null, t.updateQueue = null, Jr.current = ah, e = n(r, l);
    } while (Vn);
  }
  if (Jr.current = kl, t = X !== null && X.next !== null, Ft = 0, Z = X = B = null, xl = !1, t) throw Error(S(300));
  return e;
}
function ku() {
  var e = lr !== 0;
  return lr = 0, e;
}
function Ve() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? B.memoizedState = Z = e : Z = Z.next = e, Z;
}
function ze() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = Z === null ? B.memoizedState : Z.next;
  if (t !== null) Z = t, X = e;
  else {
    if (e === null) throw Error(S(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, Z === null ? B.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function No(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(S(311));
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
      if ((Ft & c) === c) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var d = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = d, i = r) : s = s.next = d, B.lanes |= c, Ut |= c;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, Ue(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, B.lanes |= o, Ut |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Po(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(S(311));
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
function $c() {
}
function Vc(e, t) {
  var n = B, r = ze(), l = t(), o = !Ue(r.memoizedState, l);
  if (o && (r.memoizedState = l, pe = !0), r = r.queue, Eu(Hc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, ir(9, Wc.bind(null, n, r, l, t), void 0, null), q === null) throw Error(S(349));
    Ft & 30 || Bc(n, t, l);
  }
  return l;
}
function Bc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Wc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Qc(t) && Kc(e);
}
function Hc(e, t, n) {
  return n(function() {
    Qc(t) && Kc(e);
  });
}
function Qc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Kc(e) {
  var t = et(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Ls(e) {
  var t = Ve();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: or, lastRenderedState: e }, t.queue = e, e = e.dispatch = ih.bind(null, B, e), [t.memoizedState, e];
}
function ir(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Yc() {
  return ze().memoizedState;
}
function Zr(e, t, n, r) {
  var l = Ve();
  B.flags |= e, l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r);
}
function Vl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (o = i.destroy, r !== null && Su(r, i.deps)) {
      l.memoizedState = ir(t, n, o, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = ir(1 | t, n, o, r);
}
function Os(e, t) {
  return Zr(8390656, 8, e, t);
}
function Eu(e, t) {
  return Vl(2048, 8, e, t);
}
function Xc(e, t) {
  return Vl(4, 2, e, t);
}
function Gc(e, t) {
  return Vl(4, 4, e, t);
}
function Jc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Zc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vl(4, 4, Jc.bind(null, t, e), n);
}
function _u() {
}
function qc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function bc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ef(e, t, n) {
  return Ft & 21 ? (Ue(n, t) || (n = oc(), B.lanes |= n, Ut |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function lh(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Co.transition;
  Co.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, Co.transition = r;
  }
}
function tf() {
  return ze().memoizedState;
}
function oh(e, t, n) {
  var r = vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, nf(e)) rf(t, n);
  else if (n = Fc(e, t, n, r), n !== null) {
    var l = se();
    Fe(n, e, r, l), lf(n, t, r);
  }
}
function ih(e, t, n) {
  var r = vt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nf(e)) rf(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ue(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, yu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Fc(e, t, l, r), n !== null && (l = se(), Fe(n, e, r, l), lf(n, t, r));
  }
}
function nf(e) {
  var t = e.alternate;
  return e === B || t !== null && t === B;
}
function rf(e, t) {
  Vn = xl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function lf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, tu(e, n);
  }
}
var kl = { readContext: Re, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, uh = { readContext: Re, useCallback: function(e, t) {
  return Ve().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Re, useEffect: Os, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zr(
    4194308,
    4,
    Jc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Zr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Zr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ve();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ve();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = oh.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ve();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ls, useDebugValue: _u, useDeferredValue: function(e) {
  return Ve().memoizedState = e;
}, useTransition: function() {
  var e = Ls(!1), t = e[0];
  return e = lh.bind(null, e[1]), Ve().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = B, l = Ve();
  if ($) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(S(349));
    Ft & 30 || Bc(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Os(Hc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, ir(9, Wc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ve(), t = q.identifierPrefix;
  if ($) {
    var n = Ge, r = Xe;
    n = (r & ~(1 << 32 - je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = lr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sh = {
  readContext: Re,
  useCallback: qc,
  useContext: Re,
  useEffect: Eu,
  useImperativeHandle: Zc,
  useInsertionEffect: Xc,
  useLayoutEffect: Gc,
  useMemo: bc,
  useReducer: No,
  useRef: Yc,
  useState: function() {
    return No(or);
  },
  useDebugValue: _u,
  useDeferredValue: function(e) {
    var t = ze();
    return ef(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = No(or)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: $c,
  useSyncExternalStore: Vc,
  useId: tf,
  unstable_isNewReconciler: !1
}, ah = { readContext: Re, useCallback: qc, useContext: Re, useEffect: Eu, useImperativeHandle: Zc, useInsertionEffect: Xc, useLayoutEffect: Gc, useMemo: bc, useReducer: Po, useRef: Yc, useState: function() {
  return Po(or);
}, useDebugValue: _u, useDeferredValue: function(e) {
  var t = ze();
  return X === null ? t.memoizedState = e : ef(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Po(or)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: $c, useSyncExternalStore: Vc, useId: tf, unstable_isNewReconciler: !1 };
function Ie(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Vt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = vt(e), o = Je(r, l);
  o.payload = t, n != null && (o.callback = n), t = yt(e, o, l), t !== null && (Fe(t, e, l, r), Gr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = vt(e), o = Je(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = yt(e, o, l), t !== null && (Fe(t, e, l, r), Gr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = se(), r = vt(e), l = Je(n, r);
  l.tag = 2, t != null && (l.callback = t), t = yt(e, l, r), t !== null && (Fe(t, e, r, n), Gr(t, e, r));
} };
function Ds(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, o) : !0;
}
function of(e, t, n) {
  var r = !1, l = St, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Re(o) : (l = ye(t) ? Dt : ie.current, r = t.contextTypes, o = (r = r != null) ? cn(e, l) : St), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function js(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function vi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, mu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Re(o) : (o = ye(t) ? Dt : ie.current, l.context = cn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (mi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Bl.enqueueReplaceState(l, l.state, null), wl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Fd(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function To(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ch = typeof WeakMap == "function" ? WeakMap : Map;
function uf(e, t, n) {
  n = Je(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    _l || (_l = !0, Ti = r), gi(e, t);
  }, n;
}
function sf(e, t, n) {
  n = Je(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      gi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    gi(e, t), typeof r != "function" && (mt === null ? mt = /* @__PURE__ */ new Set([this]) : mt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Fs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ch();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = _h.bind(null, e, t, n), t.then(e, e));
}
function Us(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function As(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Je(-1, 1), t.tag = 2, yt(n, t, 1))), n.lanes |= 1), e);
}
var fh = rt.ReactCurrentOwner, pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? jc(t, null, n, r) : dn(t, e.child, n, r);
}
function $s(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return un(t, l), r = xu(e, t, n, r, o, l), n = ku(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && n && au(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Vs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Iu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, af(e, t, o, r, l)) : (e = tl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qn, n(i, r) && e.ref === t.ref) return tt(e, t, l);
  }
  return t.flags |= 1, e = gt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function af(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (qn(o, r) && e.ref === t.ref) if (pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (pe = !0);
    else return t.lanes = e.lanes, tt(e, t, l);
  }
  return wi(e, t, n, r, l);
}
function cf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(tn, ge), ge |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(tn, ge), ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, F(tn, ge), ge |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, F(tn, ge), ge |= r;
  return ue(e, t, l, n), t.child;
}
function ff(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wi(e, t, n, r, l) {
  var o = ye(n) ? Dt : ie.current;
  return o = cn(t, o), un(t, l), n = xu(e, t, n, r, o, l), r = ku(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && r && au(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Bs(e, t, n, r, l) {
  if (ye(n)) {
    var o = !0;
    hl(t);
  } else o = !1;
  if (un(t, l), t.stateNode === null) qr(e, t), of(t, n, r), vi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Re(a) : (a = ye(n) ? Dt : ie.current, a = cn(t, a));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && js(t, i, r, a), it = !1;
    var y = t.memoizedState;
    i.state = y, wl(t, r, i, l), s = t.memoizedState, u !== r || y !== s || he.current || it ? (typeof c == "function" && (mi(t, n, c, r), s = t.memoizedState), (u = it || Ds(t, n, u, r, y, s, a)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Uc(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ie(t.type, u), i.props = a, d = t.pendingProps, y = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Re(s) : (s = ye(n) ? Dt : ie.current, s = cn(t, s));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== d || y !== s) && js(t, i, r, s), it = !1, y = t.memoizedState, i.state = y, wl(t, r, i, l);
    var w = t.memoizedState;
    u !== d || y !== w || he.current || it ? (typeof m == "function" && (mi(t, n, m, r), w = t.memoizedState), (a = it || Ds(t, n, a, r, y, w, s) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Si(e, t, n, r, o, l);
}
function Si(e, t, n, r, l, o) {
  ff(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ps(t, n, !1), tt(e, t, o);
  r = t.stateNode, fh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = dn(t, e.child, null, o), t.child = dn(t, null, u, o)) : ue(e, t, u, o), t.memoizedState = r.state, l && Ps(t, n, !0), t.child;
}
function df(e) {
  var t = e.stateNode;
  t.pendingContext ? Ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ns(e, t.context, !1), vu(e, t.containerInfo);
}
function Ws(e, t, n, r, l) {
  return fn(), fu(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pf(e, t, n) {
  var r = t.pendingProps, l = V.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(V, l & 1), e === null)
    return hi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Ql(i, r, 0, null), e = Ot(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ki(n), t.memoizedState = xi, e) : Cu(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return dh(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = gt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = gt(u, o) : (o = Ot(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ki(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = xi, r;
  }
  return o = e.child, e = o.sibling, r = gt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Cu(e, t) {
  return t = Ql({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Dr(e, t, n, r) {
  return r !== null && fu(r), dn(t, e.child, null, n), e = Cu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = To(Error(S(422))), Dr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ql({ mode: "visible", children: r.children }, l, 0, null), o = Ot(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && dn(t, e.child, null, i), t.child.memoizedState = ki(i), t.memoizedState = xi, o);
  if (!(t.mode & 1)) return Dr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = To(o, r, void 0), Dr(e, t, i, r);
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
    return Mu(), r = To(Error(S(421))), Dr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ch.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = ht(l.nextSibling), xe = t, $ = !0, Oe = null, e !== null && (Ce[Ne++] = Xe, Ce[Ne++] = Ge, Ce[Ne++] = jt, Xe = e.id, Ge = e.overflow, jt = t), t = Cu(t, r.children), t.flags |= 4096, t);
}
function Hs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yi(e.return, t, n);
}
function Ro(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function hf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ue(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Hs(e, n, t);
      else if (e.tag === 19) Hs(e, n, t);
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
  if (F(V, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Sl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ro(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Sl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ro(t, !0, n, null, o);
      break;
    case "together":
      Ro(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function qr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ut |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = gt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ph(e, t, n) {
  switch (t.tag) {
    case 3:
      df(t), fn();
      break;
    case 5:
      Ac(t);
      break;
    case 1:
      ye(t.type) && hl(t);
      break;
    case 4:
      vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(vl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? pf(e, t, n) : (F(V, V.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return hf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(V, V.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, cf(e, t, n);
  }
  return tt(e, t, n);
}
var yf, Ei, mf, vf;
yf = function(e, t) {
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
Ei = function() {
};
mf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, It(He.current);
    var o = null;
    switch (n) {
      case "input":
        l = Qo(e, l), r = Qo(e, r), o = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Xo(e, l), r = Xo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = dl);
    }
    Jo(n, r);
    var i;
    n = null;
    for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
      var u = l[a];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Qn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Qn.hasOwnProperty(a) ? (s != null && a === "onScroll" && U("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
vf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
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
function hh(e, t, n) {
  var r = t.pendingProps;
  switch (cu(t), t.tag) {
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
      return ye(t.type) && pl(), le(t), null;
    case 3:
      return r = t.stateNode, pn(), A(he), A(ie), wu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Lr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (Mi(Oe), Oe = null))), Ei(e, t), le(t), null;
    case 5:
      gu(t);
      var l = It(rr.current);
      if (n = t.type, e !== null && t.stateNode != null) mf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (e = It(He.current), Lr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Be] = t, r[tr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < On.length; l++) U(On[l], r);
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
              bu(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, U("invalid", r);
              break;
            case "textarea":
              ts(r, o), U("invalid", r);
          }
          Jo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Ir(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Ir(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Qn.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), es(r, o, !0);
              break;
            case "textarea":
              _r(r), ns(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = dl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ha(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Be] = t, e[tr] = r, yf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Zo(n, r), n) {
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
                for (l = 0; l < On.length; l++) U(On[l], e);
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
                bu(e, r), l = Qo(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                ts(e, r), l = Xo(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            Jo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ya(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Qa(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Kn(e, s) : typeof s == "number" && Kn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qn.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && Gi(e, o, s, i));
            }
            switch (n) {
              case "input":
                _r(e), es(e, r, !1);
                break;
              case "textarea":
                _r(e), ns(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? nn(e, !!r.multiple, o, !1) : r.defaultValue != null && nn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = dl);
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
      if (e && t.stateNode != null) vf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = It(rr.current), It(He.current), Lr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (o = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
            case 3:
              Ir(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ir(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (A(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128)) Oc(), fn(), t.flags |= 98560, o = !1;
        else if (o = Lr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Be] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), o = !1;
        } else Oe !== null && (Mi(Oe), Oe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? G === 0 && (G = 3) : Mu())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return pn(), Ei(e, t), e === null && bn(t.stateNode.containerInfo), le(t), null;
    case 10:
      return hu(t.type._context), le(t), null;
    case 17:
      return ye(t.type) && pl(), le(t), null;
    case 19:
      if (A(V), o = t.memoizedState, o === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Tn(o, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Sl(e), i !== null) {
            for (t.flags |= 128, Tn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F(V, V.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && K() > yn && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Sl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return le(t), null;
        } else 2 * K() - o.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = V.current, F(V, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function yh(e, t) {
  switch (cu(t), t.tag) {
    case 1:
      return ye(t.type) && pl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return pn(), A(he), A(ie), wu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return gu(t), null;
    case 13:
      if (A(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A(V), null;
    case 4:
      return pn(), null;
    case 10:
      return hu(t.type._context), null;
    case 22:
    case 23:
      return zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1, oe = !1, mh = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    H(e, t, r);
  }
  else n.current = null;
}
function _i(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Qs = !1;
function vh(e, t) {
  if (ui = al, e = xc(), su(e)) {
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
        var i = 0, u = -1, s = -1, a = 0, c = 0, d = e, y = null;
        t: for (; ; ) {
          for (var m; d !== n || l !== 0 && d.nodeType !== 3 || (u = i + l), d !== o || r !== 0 && d.nodeType !== 3 || (s = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (m = d.firstChild) !== null; )
            y = d, d = m;
          for (; ; ) {
            if (d === e) break t;
            if (y === n && ++a === l && (u = i), y === o && ++c === r && (s = i), (m = d.nextSibling) !== null) break;
            d = y, y = d.parentNode;
          }
          d = m;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (si = { focusedElem: e, selectionRange: n }, al = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var g = w.memoizedProps, k = w.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ie(t.type, g), k);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (v) {
      H(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return w = Qs, Qs = !1, w;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && _i(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Wl(e, t) {
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
function Ci(e) {
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
function gf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[tr], delete t[fi], delete t[bp], delete t[eh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function wf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ks(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || wf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = dl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ni(e, t, n), e = e.sibling; e !== null; ) Ni(e, t, n), e = e.sibling;
}
function Pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), e = e.sibling;
}
var ee = null, Le = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) Sf(e, t, n), n = n.sibling;
}
function Sf(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function") try {
    We.onCommitFiberUnmount(Dl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      oe || en(n, t);
    case 6:
      var r = ee, l = Le;
      ee = null, lt(e, t, n), ee = r, Le = l, ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? ko(e.parentNode, n) : e.nodeType === 1 && ko(e, n), Jn(e)) : ko(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Le, ee = n.stateNode.containerInfo, Le = !0, lt(e, t, n), ee = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && _i(n, t, i), l = l.next;
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (!oe && (en(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
function Ys(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mh()), t.forEach(function(r) {
      var l = Nh.bind(null, e, r);
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
            ee = u.stateNode, Le = !1;
            break e;
          case 3:
            ee = u.stateNode.containerInfo, Le = !0;
            break e;
          case 4:
            ee = u.stateNode.containerInfo, Le = !0;
            break e;
        }
        u = u.return;
      }
      if (ee === null) throw Error(S(160));
      Sf(o, i, l), ee = null, Le = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (a) {
      H(l, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xf(t, e), t = t.sibling;
}
function xf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Me(t, e), $e(e), r & 4) {
        try {
          Bn(3, e, e.return), Wl(3, e);
        } catch (g) {
          H(e, e.return, g);
        }
        try {
          Bn(5, e, e.return);
        } catch (g) {
          H(e, e.return, g);
        }
      }
      break;
    case 1:
      Me(t, e), $e(e), r & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (Me(t, e), $e(e), r & 512 && n !== null && en(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (g) {
          H(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Ba(l, o), Zo(u, i);
          var a = Zo(u, o);
          for (i = 0; i < s.length; i += 2) {
            var c = s[i], d = s[i + 1];
            c === "style" ? Ya(l, d) : c === "dangerouslySetInnerHTML" ? Qa(l, d) : c === "children" ? Kn(l, d) : Gi(l, c, d, a);
          }
          switch (u) {
            case "input":
              Ko(l, o);
              break;
            case "textarea":
              Wa(l, o);
              break;
            case "select":
              var y = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var m = o.value;
              m != null ? nn(l, !!o.multiple, m, !1) : y !== !!o.multiple && (o.defaultValue != null ? nn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : nn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[tr] = o;
        } catch (g) {
          H(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Me(t, e), $e(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (g) {
          H(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Me(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Jn(t.containerInfo);
      } catch (g) {
        H(e, e.return, g);
      }
      break;
    case 4:
      Me(t, e), $e(e);
      break;
    case 13:
      Me(t, e), $e(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Tu = K())), r & 4 && Ys(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (a = oe) || c, Me(t, e), oe = a) : Me(t, e), $e(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (C = e, c = e.child; c !== null; ) {
          for (d = C = c; C !== null; ) {
            switch (y = C, m = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bn(4, y, y.return);
                break;
              case 1:
                en(y, y.return);
                var w = y.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (g) {
                    H(r, n, g);
                  }
                }
                break;
              case 5:
                en(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  Gs(d);
                  continue;
                }
            }
            m !== null ? (m.return = y, C = m) : Gs(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                l = d.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ka("display", i));
              } catch (g) {
                H(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = a ? "" : d.memoizedProps;
            } catch (g) {
              H(e, e.return, g);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Me(t, e), $e(e), r & 4 && Ys(e);
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
          if (wf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), r.flags &= -33);
          var o = Ks(e);
          Pi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ks(e);
          Ni(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gh(e, t, n) {
  C = e, kf(e);
}
function kf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || jr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || oe;
        u = jr;
        var a = oe;
        if (jr = i, (oe = s) && !a) for (C = l; C !== null; ) i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? Js(l) : s !== null ? (s.return = i, C = s) : Js(l);
        for (; o !== null; ) C = o, kf(o), o = o.sibling;
        C = l, jr = u, oe = a;
      }
      Xs(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Xs(e);
  }
}
function Xs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            oe || Wl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !oe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Is(t, o, r);
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
              Is(t, i, n);
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
                  var d = c.dehydrated;
                  d !== null && Jn(d);
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
            throw Error(S(163));
        }
        oe || t.flags & 512 && Ci(t);
      } catch (y) {
        H(t, t.return, y);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Gs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Js(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wl(4, t);
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
            Ci(t);
          } catch (s) {
            H(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ci(t);
          } catch (s) {
            H(t, i, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, C = u;
      break;
    }
    C = t.return;
  }
}
var wh = Math.ceil, El = rt.ReactCurrentDispatcher, Nu = rt.ReactCurrentOwner, Te = rt.ReactCurrentBatchConfig, D = 0, q = null, Y = null, te = 0, ge = 0, tn = Et(0), G = 0, ur = null, Ut = 0, Hl = 0, Pu = 0, Wn = null, de = null, Tu = 0, yn = 1 / 0, Qe = null, _l = !1, Ti = null, mt = null, Fr = !1, ct = null, Cl = 0, Hn = 0, Ri = null, br = -1, el = 0;
function se() {
  return D & 6 ? K() : br !== -1 ? br : br = K();
}
function vt(e) {
  return e.mode & 1 ? D & 2 && te !== 0 ? te & -te : nh.transition !== null ? (el === 0 && (el = oc()), el) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : dc(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Hn) throw Hn = 0, Ri = null, Error(S(185));
  pr(e, n, r), (!(D & 2) || e !== q) && (e === q && (!(D & 2) && (Hl |= n), G === 4 && st(e, te)), me(e, r), n === 1 && D === 0 && !(t.mode & 1) && (yn = K() + 500, $l && _t()));
}
function me(e, t) {
  var n = e.callbackNode;
  np(e, t);
  var r = sl(e, e === q ? te : 0);
  if (r === 0) n !== null && os(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && os(n), t === 1) e.tag === 0 ? th(Zs.bind(null, e)) : Mc(Zs.bind(null, e)), Zp(function() {
      !(D & 6) && _t();
    }), n = null;
    else {
      switch (ic(r)) {
        case 1:
          n = eu;
          break;
        case 4:
          n = rc;
          break;
        case 16:
          n = ul;
          break;
        case 536870912:
          n = lc;
          break;
        default:
          n = ul;
      }
      n = zf(n, Ef.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ef(e, t) {
  if (br = -1, el = 0, D & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = sl(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = Cf();
    (q !== e || te !== t) && (Qe = null, yn = K() + 500, Lt(e, t));
    do
      try {
        kh();
        break;
      } catch (u) {
        _f(e, u);
      }
    while (!0);
    pu(), El.current = o, D = l, Y !== null ? t = 0 : (q = null, te = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = ni(e), l !== 0 && (r = l, t = zi(e, l))), t === 1) throw n = ur, Lt(e, 0), st(e, r), me(e, K()), n;
    if (t === 6) st(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Sh(l) && (t = Nl(e, r), t === 2 && (o = ni(e), o !== 0 && (r = o, t = zi(e, o))), t === 1)) throw n = ur, Lt(e, 0), st(e, r), me(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Rt(e, de, Qe);
          break;
        case 3:
          if (st(e, r), (r & 130023424) === r && (t = Tu + 500 - K(), 10 < t)) {
            if (sl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ci(Rt.bind(null, e, de, Qe), t);
            break;
          }
          Rt(e, de, Qe);
          break;
        case 4:
          if (st(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - je(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ci(Rt.bind(null, e, de, Qe), r);
            break;
          }
          Rt(e, de, Qe);
          break;
        case 5:
          Rt(e, de, Qe);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Ef.bind(null, e) : null;
}
function zi(e, t) {
  var n = Wn;
  return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = Nl(e, t), e !== 2 && (t = de, de = n, t !== null && Mi(t)), e;
}
function Mi(e) {
  de === null ? de = e : de.push.apply(de, e);
}
function Sh(e) {
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
  for (t &= ~Pu, t &= ~Hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Zs(e) {
  if (D & 6) throw Error(S(327));
  sn();
  var t = sl(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ni(e);
    r !== 0 && (t = r, n = zi(e, r));
  }
  if (n === 1) throw n = ur, Lt(e, 0), st(e, t), me(e, K()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rt(e, de, Qe), me(e, K()), null;
}
function Ru(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (yn = K() + 500, $l && _t());
  }
}
function At(e) {
  ct !== null && ct.tag === 0 && !(D & 6) && sn();
  var t = D;
  D |= 1;
  var n = Te.transition, r = j;
  try {
    if (Te.transition = null, j = 1, e) return e();
  } finally {
    j = r, Te.transition = n, D = t, !(D & 6) && _t();
  }
}
function zu() {
  ge = tn.current, A(tn);
}
function Lt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Jp(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (cu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && pl();
        break;
      case 3:
        pn(), A(he), A(ie), wu();
        break;
      case 5:
        gu(r);
        break;
      case 4:
        pn();
        break;
      case 13:
        A(V);
        break;
      case 19:
        A(V);
        break;
      case 10:
        hu(r.type._context);
        break;
      case 22:
      case 23:
        zu();
    }
    n = n.return;
  }
  if (q = e, Y = e = gt(e.current, null), te = ge = t, G = 0, ur = null, Pu = Hl = Ut = 0, de = Wn = null, Mt !== null) {
    for (t = 0; t < Mt.length; t++) if (n = Mt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Mt = null;
  }
  return e;
}
function _f(e, t) {
  do {
    var n = Y;
    try {
      if (pu(), Jr.current = kl, xl) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        xl = !1;
      }
      if (Ft = 0, Z = X = B = null, Vn = !1, lr = 0, Nu.current = null, n === null || n.return === null) {
        G = 1, ur = t, Y = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, c = u, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var y = c.alternate;
            y ? (c.updateQueue = y.updateQueue, c.memoizedState = y.memoizedState, c.lanes = y.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = Us(i);
          if (m !== null) {
            m.flags &= -257, As(m, i, u, o, t), m.mode & 1 && Fs(o, a, t), t = m, s = a;
            var w = t.updateQueue;
            if (w === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Fs(o, a, t), Mu();
              break e;
            }
            s = Error(S(426));
          }
        } else if ($ && u.mode & 1) {
          var k = Us(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), As(k, i, u, o, t), fu(hn(s, u));
            break e;
          }
        }
        o = s = hn(s, u), G !== 4 && (G = 2), Wn === null ? Wn = [o] : Wn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = uf(o, s, t);
              Ms(o, p);
              break e;
            case 1:
              u = s;
              var f = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (mt === null || !mt.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = sf(o, u, t);
                Ms(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Pf(n);
    } catch (x) {
      t = x, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cf() {
  var e = El.current;
  return El.current = kl, e === null ? kl : e;
}
function Mu() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Ut & 268435455) && !(Hl & 268435455) || st(q, te);
}
function Nl(e, t) {
  var n = D;
  D |= 2;
  var r = Cf();
  (q !== e || te !== t) && (Qe = null, Lt(e, t));
  do
    try {
      xh();
      break;
    } catch (l) {
      _f(e, l);
    }
  while (!0);
  if (pu(), D = n, El.current = r, Y !== null) throw Error(S(261));
  return q = null, te = 0, G;
}
function xh() {
  for (; Y !== null; ) Nf(Y);
}
function kh() {
  for (; Y !== null && !Yd(); ) Nf(Y);
}
function Nf(e) {
  var t = Rf(e.alternate, e, ge);
  e.memoizedProps = e.pendingProps, t === null ? Pf(e) : Y = t, Nu.current = null;
}
function Pf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = yh(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = hh(n, t, ge), n !== null) {
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
function Rt(e, t, n) {
  var r = j, l = Te.transition;
  try {
    Te.transition = null, j = 1, Eh(e, t, n, r);
  } finally {
    Te.transition = l, j = r;
  }
  return null;
}
function Eh(e, t, n, r) {
  do
    sn();
  while (ct !== null);
  if (D & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (rp(e, o), e === q && (Y = q = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fr || (Fr = !0, zf(ul, function() {
    return sn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = j;
    j = 1;
    var u = D;
    D |= 4, Nu.current = null, vh(e, n), xf(n, e), Wp(si), al = !!ui, si = ui = null, e.current = n, gh(n), Xd(), D = u, j = i, Te.transition = o;
  } else e.current = n;
  if (Fr && (Fr = !1, ct = e, Cl = l), o = e.pendingLanes, o === 0 && (mt = null), Zd(n.stateNode), me(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (_l) throw _l = !1, e = Ti, Ti = null, e;
  return Cl & 1 && e.tag !== 0 && sn(), o = e.pendingLanes, o & 1 ? e === Ri ? Hn++ : (Hn = 0, Ri = e) : Hn = 0, _t(), null;
}
function sn() {
  if (ct !== null) {
    var e = ic(Cl), t = Te.transition, n = j;
    try {
      if (Te.transition = null, j = 16 > e ? 16 : e, ct === null) var r = !1;
      else {
        if (e = ct, ct = null, Cl = 0, D & 6) throw Error(S(331));
        var l = D;
        for (D |= 4, C = e.current; C !== null; ) {
          var o = C, i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var c = C;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, C = d;
                  else for (; C !== null; ) {
                    c = C;
                    var y = c.sibling, m = c.return;
                    if (gf(c), c === a) {
                      C = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = m, C = y;
                      break;
                    }
                    C = m;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var k = g.sibling;
                    g.sibling = null, g = k;
                  } while (g !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Bn(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, C = p;
              break e;
            }
            C = o.return;
          }
        }
        var f = e.current;
        for (C = f; C !== null; ) {
          i = C;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) h.return = i, C = h;
          else e: for (i = f; C !== null; ) {
            if (u = C, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Wl(9, u);
              }
            } catch (x) {
              H(u, u.return, x);
            }
            if (u === i) {
              C = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, C = v;
              break e;
            }
            C = u.return;
          }
        }
        if (D = l, _t(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(Dl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      j = n, Te.transition = t;
    }
  }
  return !1;
}
function qs(e, t, n) {
  t = hn(n, t), t = uf(e, t, 1), e = yt(e, t, 1), t = se(), e !== null && (pr(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) qs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      qs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mt === null || !mt.has(r))) {
        e = hn(n, e), e = sf(t, e, 1), t = yt(t, e, 1), e = se(), t !== null && (pr(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _h(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, q === e && (te & n) === n && (G === 4 || G === 3 && (te & 130023424) === te && 500 > K() - Tu ? Lt(e, 0) : Pu |= n), me(e, t);
}
function Tf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : t = 1);
  var n = se();
  e = et(e, t), e !== null && (pr(e, t, n), me(e, n));
}
function Ch(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Tf(e, n);
}
function Nh(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), Tf(e, n);
}
var Rf;
Rf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, ph(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, $ && t.flags & 1048576 && Ic(t, ml, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      qr(e, t), e = t.pendingProps;
      var l = cn(t, ie.current);
      un(t, n), l = xu(null, t, r, e, l, n);
      var o = ku();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r) ? (o = !0, hl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mu(t), l.updater = Bl, t.stateNode = l, l._reactInternals = t, vi(t, r, e, n), t = Si(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && au(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Th(r), e = Ie(r, e), l) {
          case 0:
            t = wi(null, t, r, e, n);
            break e;
          case 1:
            t = Bs(null, t, r, e, n);
            break e;
          case 11:
            t = $s(null, t, r, e, n);
            break e;
          case 14:
            t = Vs(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), wi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Bs(e, t, r, l, n);
    case 3:
      e: {
        if (df(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Uc(e, t), wl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = hn(Error(S(423)), t), t = Ws(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(S(424)), t), t = Ws(e, t, r, n, l);
          break e;
        } else for (we = ht(t.stateNode.containerInfo.firstChild), xe = t, $ = !0, Oe = null, n = jc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = tt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ac(t), e === null && hi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ai(r, l) ? i = null : o !== null && ai(r, o) && (t.flags |= 32), ff(e, t), ue(e, t, i, n), t.child;
    case 6:
      return e === null && hi(t), null;
    case 13:
      return pf(e, t, n);
    case 4:
      return vu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = dn(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), $s(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, F(vl, r._currentValue), r._currentValue = i, o !== null) if (Ue(o.value, i)) {
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
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), yi(
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
            if (i = o.return, i === null) throw Error(S(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), yi(i, n, t), i = o.sibling;
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
      return l = t.type, r = t.pendingProps.children, un(t, n), l = Re(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), Vs(e, t, r, l, n);
    case 15:
      return af(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), qr(e, t), t.tag = 1, ye(r) ? (e = !0, hl(t)) : e = !1, un(t, n), of(t, r, l), vi(t, r, l, n), Si(null, t, r, !0, e, n);
    case 19:
      return hf(e, t, n);
    case 22:
      return cf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function zf(e, t) {
  return nc(e, t);
}
function Ph(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pe(e, t, n, r) {
  return new Ph(e, t, n, r);
}
function Iu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Th(e) {
  if (typeof e == "function") return Iu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zi) return 11;
    if (e === qi) return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function tl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Iu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Qt:
      return Ot(n.children, l, o, t);
    case Ji:
      i = 8, l |= 8;
      break;
    case Vo:
      return e = Pe(12, n, t, l | 2), e.elementType = Vo, e.lanes = o, e;
    case Bo:
      return e = Pe(13, n, t, l), e.elementType = Bo, e.lanes = o, e;
    case Wo:
      return e = Pe(19, n, t, l), e.elementType = Wo, e.lanes = o, e;
    case Aa:
      return Ql(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Fa:
          i = 10;
          break e;
        case Ua:
          i = 9;
          break e;
        case Zi:
          i = 11;
          break e;
        case qi:
          i = 14;
          break e;
        case ot:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Pe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ot(e, t, n, r) {
  return e = Pe(7, e, r, t), e.lanes = n, e;
}
function Ql(e, t, n, r) {
  return e = Pe(22, e, r, t), e.elementType = Aa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function zo(e, t, n) {
  return e = Pe(6, e, null, t), e.lanes = n, e;
}
function Mo(e, t, n) {
  return t = Pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = co(0), this.expirationTimes = co(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = co(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Lu(e, t, n, r, l, o, i, u, s) {
  return e = new Rh(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Pe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mu(o), e;
}
function zh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Mf(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(S(170));
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
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return zc(e, n, t);
  }
  return t;
}
function If(e, t, n, r, l, o, i, u, s) {
  return e = Lu(n, r, !0, e, l, o, i, u, s), e.context = Mf(null), n = e.current, r = se(), l = vt(n), o = Je(r, l), o.callback = t ?? null, yt(n, o, l), e.current.lanes = l, pr(e, l, r), me(e, r), e;
}
function Kl(e, t, n, r) {
  var l = t.current, o = se(), i = vt(l);
  return n = Mf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Je(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yt(l, t, i), e !== null && (Fe(e, l, i, o), Gr(e, l, i)), i;
}
function Pl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ou(e, t) {
  bs(e, t), (e = e.alternate) && bs(e, t);
}
function Mh() {
  return null;
}
var Lf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Du(e) {
  this._internalRoot = e;
}
Yl.prototype.render = Du.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Kl(e, t, null, null);
};
Yl.prototype.unmount = Du.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function() {
      Kl(null, e, null, null);
    }), t[be] = null;
  }
};
function Yl(e) {
  this._internalRoot = e;
}
Yl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++) ;
    ut.splice(n, 0, e), n === 0 && fc(e);
  }
};
function ju(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ea() {
}
function Ih(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Pl(i);
        o.call(a);
      };
    }
    var i = If(t, r, e, 0, null, !1, !1, "", ea);
    return e._reactRootContainer = i, e[be] = i.current, bn(e.nodeType === 8 ? e.parentNode : e), At(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Pl(s);
      u.call(a);
    };
  }
  var s = Lu(e, 0, !1, null, null, !1, !1, "", ea);
  return e._reactRootContainer = s, e[be] = s.current, bn(e.nodeType === 8 ? e.parentNode : e), At(function() {
    Kl(t, s, n, r);
  }), s;
}
function Gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Pl(i);
        u.call(s);
      };
    }
    Kl(t, i, e, l);
  } else i = Ih(n, t, e, l, r);
  return Pl(i);
}
uc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 && (tu(t, n | 1), me(t, K()), !(D & 6) && (yn = K() + 500, _t()));
      }
      break;
    case 13:
      At(function() {
        var r = et(e, 1);
        if (r !== null) {
          var l = se();
          Fe(r, e, 1, l);
        }
      }), Ou(e, 1);
  }
};
nu = function(e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = se();
      Fe(t, e, 134217728, n);
    }
    Ou(e, 134217728);
  }
};
sc = function(e) {
  if (e.tag === 13) {
    var t = vt(e), n = et(e, t);
    if (n !== null) {
      var r = se();
      Fe(n, e, t, r);
    }
    Ou(e, t);
  }
};
ac = function() {
  return j;
};
cc = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
bo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ko(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Al(r);
            if (!l) throw Error(S(90));
            Va(r), Ko(r, l);
          }
        }
      }
      break;
    case "textarea":
      Wa(e, n);
      break;
    case "select":
      t = n.value, t != null && nn(e, !!n.multiple, t, !1);
  }
};
Ja = Ru;
Za = At;
var Lh = { usingClientEntryPoint: !1, Events: [yr, Gt, Al, Xa, Ga, Ru] }, Rn = { findFiberByHostInstance: zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Oh = { bundleType: Rn.bundleType, version: Rn.version, rendererPackageName: Rn.rendererPackageName, rendererConfig: Rn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ec(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Rn.findFiberByHostInstance || Mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber) try {
    Dl = Ur.inject(Oh), We = Ur;
  } catch {
  }
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lh;
Ee.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ju(t)) throw Error(S(200));
  return zh(e, t, null, n);
};
Ee.createRoot = function(e, t) {
  if (!ju(e)) throw Error(S(299));
  var n = !1, r = "", l = Lf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Lu(e, 1, !1, null, null, n, !1, r, l), e[be] = t.current, bn(e.nodeType === 8 ? e.parentNode : e), new Du(t);
};
Ee.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = ec(t), e = e === null ? null : e.stateNode, e;
};
Ee.flushSync = function(e) {
  return At(e);
};
Ee.hydrate = function(e, t, n) {
  if (!Xl(t)) throw Error(S(200));
  return Gl(null, e, t, !0, n);
};
Ee.hydrateRoot = function(e, t, n) {
  if (!ju(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Lf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = If(t, null, e, 1, n ?? null, l, !1, o, i), e[be] = t.current, bn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Yl(t);
};
Ee.render = function(e, t, n) {
  if (!Xl(t)) throw Error(S(200));
  return Gl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function(e) {
  if (!Xl(e)) throw Error(S(40));
  return e._reactRootContainer ? (At(function() {
    Gl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[be] = null;
    });
  }), !0) : !1;
};
Ee.unstable_batchedUpdates = Ru;
Ee.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Xl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Gl(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function Of() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of);
    } catch (e) {
      console.error(e);
    }
}
Of(), La.exports = Ee;
var Dh = La.exports, ta = Dh;
Ao.createRoot = ta.createRoot, Ao.hydrateRoot = ta.hydrateRoot;
var Df = { exports: {} }, jf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr = O;
function jh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fh = typeof Object.is == "function" ? Object.is : jh, Uh = vr.useSyncExternalStore, Ah = vr.useRef, $h = vr.useEffect, Vh = vr.useMemo, Bh = vr.useDebugValue;
jf.useSyncExternalStoreWithSelector = function(e, t, n, r, l) {
  var o = Ah(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = Vh(
    function() {
      function s(m) {
        if (!a) {
          if (a = !0, c = m, m = r(m), l !== void 0 && i.hasValue) {
            var w = i.value;
            if (l(w, m))
              return d = w;
          }
          return d = m;
        }
        if (w = d, Fh(c, m)) return w;
        var g = r(m);
        return l !== void 0 && l(w, g) ? (c = m, w) : (c = m, d = g);
      }
      var a = !1, c, d, y = n === void 0 ? null : n;
      return [
        function() {
          return s(t());
        },
        y === null ? void 0 : function() {
          return s(y());
        }
      ];
    },
    [t, n, r, l]
  );
  var u = Uh(e, o[0], o[1]);
  return $h(
    function() {
      i.hasValue = !0, i.value = u;
    },
    [u]
  ), Bh(u), u;
};
Df.exports = jf;
var Wh = Df.exports;
function Hh(e) {
  e();
}
function Qh() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Hh(() => {
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
var na = {
  notify() {
  },
  get: () => []
};
function Kh(e, t) {
  let n, r = na, l = 0, o = !1;
  function i(g) {
    c();
    const k = r.subscribe(g);
    let p = !1;
    return () => {
      p || (p = !0, k(), d());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    w.onStateChange && w.onStateChange();
  }
  function a() {
    return o;
  }
  function c() {
    l++, n || (n = e.subscribe(s), r = Qh());
  }
  function d() {
    l--, n && l === 0 && (n(), n = void 0, r.clear(), r = na);
  }
  function y() {
    o || (o = !0, c());
  }
  function m() {
    o && (o = !1, d());
  }
  const w = {
    addNestedSub: i,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: y,
    tryUnsubscribe: m,
    getListeners: () => r
  };
  return w;
}
var Yh = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xh = /* @__PURE__ */ Yh(), Gh = () => typeof navigator < "u" && navigator.product === "ReactNative", Jh = /* @__PURE__ */ Gh(), Zh = () => Xh || Jh ? O.useLayoutEffect : O.useEffect, qh = /* @__PURE__ */ Zh(), Io = /* @__PURE__ */ Symbol.for("react-redux-context"), Lo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function bh() {
  if (!O.createContext) return {};
  const e = Lo[Io] ?? (Lo[Io] = /* @__PURE__ */ new Map());
  let t = e.get(O.createContext);
  return t || (t = O.createContext(
    null
  ), e.set(O.createContext, t)), t;
}
var xt = /* @__PURE__ */ bh();
function ey(e) {
  const { children: t, context: n, serverState: r, store: l } = e, o = O.useMemo(() => {
    const s = Kh(l);
    return {
      store: l,
      subscription: s,
      getServerState: r ? () => r : void 0
    };
  }, [l, r]), i = O.useMemo(() => l.getState(), [l]);
  qh(() => {
    const { subscription: s } = o;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), i !== l.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [o, i]);
  const u = n || xt;
  return /* @__PURE__ */ O.createElement(u.Provider, { value: o }, t);
}
var ty = ey;
function Fu(e = xt) {
  return function() {
    return O.useContext(e);
  };
}
var Ff = /* @__PURE__ */ Fu();
function Uf(e = xt) {
  const t = e === xt ? Ff : (
    // @ts-ignore
    Fu(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ny = /* @__PURE__ */ Uf();
function ry(e = xt) {
  const t = e === xt ? ny : Uf(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Uu = /* @__PURE__ */ ry(), ly = (e, t) => e === t;
function oy(e = xt) {
  const t = e === xt ? Ff : Fu(e), n = (r, l = {}) => {
    const { equalityFn: o = ly } = typeof l == "function" ? { equalityFn: l } : l, i = t(), { store: u, subscription: s, getServerState: a } = i;
    O.useRef(!0);
    const c = O.useCallback(
      {
        [r.name](y) {
          return r(y);
        }
      }[r.name],
      [r]
    ), d = Wh.useSyncExternalStoreWithSelector(
      s.addNestedSub,
      u.getState,
      a || u.getState,
      c,
      o
    );
    return O.useDebugValue(d), d;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var sr = /* @__PURE__ */ oy();
class iy extends Ma.Component {
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
    return this.state.hasError ? /* @__PURE__ */ T.jsxs("div", { style: { padding: 16 }, children: [
      /* @__PURE__ */ T.jsx("h2", { children: "Something went wrong." }),
      /* @__PURE__ */ T.jsx("p", { style: { opacity: 0.8 }, children: this.state.errorMessage }),
      /* @__PURE__ */ T.jsx("button", { onClick: () => this.setState({ hasError: !1, errorMessage: void 0 }), children: "Try again" })
    ] }) : this.props.children;
  }
}
function uy({ show: e, text: t, onClose: n }) {
  return e ? /* @__PURE__ */ T.jsx(
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
      children: /* @__PURE__ */ T.jsxs(
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
            /* @__PURE__ */ T.jsxs("div", { style: { padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ T.jsx("strong", { style: { flex: 1 }, children: "Exported JSON" }),
              /* @__PURE__ */ T.jsx(
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
              /* @__PURE__ */ T.jsx("button", { onClick: n, children: "Close" })
            ] }),
            /* @__PURE__ */ T.jsx("div", { style: { padding: "0 12px 12px 12px", flex: 1 }, children: /* @__PURE__ */ T.jsx(
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
            ) })
          ]
        }
      )
    }
  ) : null;
}
const sy = O.memo(uy);
function ay() {
  return /* @__PURE__ */ T.jsx("pattern", { id: "grid", width: 20, height: 20, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ T.jsx("path", { d: "M 20 0 L 0 0 0 20", fill: "none", stroke: "rgba(255,255,255,0.06)", strokeWidth: "1" }) });
}
const cy = O.memo(ay);
function b(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var fy = typeof Symbol == "function" && Symbol.observable || "@@observable", ra = fy, Oo = () => Math.random().toString(36).substring(7).split("").join("."), dy = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Oo()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Oo()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Oo()}`
}, Tl = dy;
function Au(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Af(e, t, n) {
  if (typeof e != "function")
    throw new Error(b(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(b(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(b(1));
    return n(Af)(e, t);
  }
  let r = e, l = t, o = /* @__PURE__ */ new Map(), i = o, u = 0, s = !1;
  function a() {
    i === o && (i = /* @__PURE__ */ new Map(), o.forEach((k, p) => {
      i.set(p, k);
    }));
  }
  function c() {
    if (s)
      throw new Error(b(3));
    return l;
  }
  function d(k) {
    if (typeof k != "function")
      throw new Error(b(4));
    if (s)
      throw new Error(b(5));
    let p = !0;
    a();
    const f = u++;
    return i.set(f, k), function() {
      if (p) {
        if (s)
          throw new Error(b(6));
        p = !1, a(), i.delete(f), o = null;
      }
    };
  }
  function y(k) {
    if (!Au(k))
      throw new Error(b(7));
    if (typeof k.type > "u")
      throw new Error(b(8));
    if (typeof k.type != "string")
      throw new Error(b(17));
    if (s)
      throw new Error(b(9));
    try {
      s = !0, l = r(l, k);
    } finally {
      s = !1;
    }
    return (o = i).forEach((f) => {
      f();
    }), k;
  }
  function m(k) {
    if (typeof k != "function")
      throw new Error(b(10));
    r = k, y({
      type: Tl.REPLACE
    });
  }
  function w() {
    const k = d;
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
          const v = p;
          v.next && v.next(c());
        }
        return f(), {
          unsubscribe: k(f)
        };
      },
      [ra]() {
        return this;
      }
    };
  }
  return y({
    type: Tl.INIT
  }), {
    dispatch: y,
    subscribe: d,
    getState: c,
    replaceReducer: m,
    [ra]: w
  };
}
function py(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Tl.INIT
    }) > "u")
      throw new Error(b(12));
    if (typeof n(void 0, {
      type: Tl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(b(13));
  });
}
function hy(e) {
  const t = Object.keys(e), n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  const r = Object.keys(n);
  let l;
  try {
    py(n);
  } catch (o) {
    l = o;
  }
  return function(i = {}, u) {
    if (l)
      throw l;
    let s = !1;
    const a = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c], y = n[d], m = i[d], w = y(m, u);
      if (typeof w > "u")
        throw u && u.type, new Error(b(14));
      a[d] = w, s = s || w !== m;
    }
    return s = s || r.length !== Object.keys(i).length, s ? a : i;
  };
}
function Rl(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function yy(...e) {
  return (t) => (n, r) => {
    const l = t(n, r);
    let o = () => {
      throw new Error(b(15));
    };
    const i = {
      getState: l.getState,
      dispatch: (s, ...a) => o(s, ...a)
    }, u = e.map((s) => s(i));
    return o = Rl(...u)(l.dispatch), {
      ...l,
      dispatch: o
    };
  };
}
function my(e) {
  return Au(e) && "type" in e && typeof e.type == "string";
}
var $f = Symbol.for("immer-nothing"), la = Symbol.for("immer-draftable"), ae = Symbol.for("immer-state");
function De(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Se = Object, mn = Se.getPrototypeOf, zl = "constructor", Jl = "prototype", Ii = "configurable", Ml = "enumerable", nl = "writable", ar = "value", nt = (e) => !!e && !!e[ae];
function Ae(e) {
  var t;
  return e ? Vf(e) || Zl(e) || !!e[la] || !!((t = e[zl]) != null && t[la]) || ql(e) || bl(e) : !1;
}
var vy = Se[Jl][zl].toString(), oa = /* @__PURE__ */ new WeakMap();
function Vf(e) {
  if (!e || !$u(e))
    return !1;
  const t = mn(e);
  if (t === null || t === Se[Jl])
    return !0;
  const n = Se.hasOwnProperty.call(t, zl) && t[zl];
  if (n === Object)
    return !0;
  if (!Wt(n))
    return !1;
  let r = oa.get(n);
  return r === void 0 && (r = Function.toString.call(n), oa.set(n, r)), r === vy;
}
function gr(e, t, n = !0) {
  wr(e) === 0 ? (n ? Reflect.ownKeys(e) : Se.keys(e)).forEach((l) => {
    t(l, e[l], e);
  }) : e.forEach((r, l) => t(l, r, e));
}
function wr(e) {
  const t = e[ae];
  return t ? t.type_ : Zl(e) ? 1 : ql(e) ? 2 : bl(e) ? 3 : 0;
}
var ia = (e, t, n = wr(e)) => n === 2 ? e.has(t) : Se[Jl].hasOwnProperty.call(e, t), Li = (e, t, n = wr(e)) => (
  // @ts-ignore
  n === 2 ? e.get(t) : e[t]
), Il = (e, t, n, r = wr(e)) => {
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function gy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Zl = Array.isArray, ql = (e) => e instanceof Map, bl = (e) => e instanceof Set, $u = (e) => typeof e == "object", Wt = (e) => typeof e == "function", Do = (e) => typeof e == "boolean", Ye = (e) => e.copy_ || e.base_, Vu = (e) => e.modified_ ? e.copy_ : e.base_;
function Oi(e, t) {
  if (ql(e))
    return new Map(e);
  if (bl(e))
    return new Set(e);
  if (Zl(e))
    return Array[Jl].slice.call(e);
  const n = Vf(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Se.getOwnPropertyDescriptors(e);
    delete r[ae];
    let l = Reflect.ownKeys(r);
    for (let o = 0; o < l.length; o++) {
      const i = l[o], u = r[i];
      u[nl] === !1 && (u[nl] = !0, u[Ii] = !0), (u.get || u.set) && (r[i] = {
        [Ii]: !0,
        [nl]: !0,
        // could live with !!desc.set as well here...
        [Ml]: u[Ml],
        [ar]: e[i]
      });
    }
    return Se.create(mn(e), r);
  } else {
    const r = mn(e);
    if (r !== null && n)
      return { ...e };
    const l = Se.create(r);
    return Se.assign(l, e);
  }
}
function Bu(e, t = !1) {
  return eo(e) || nt(e) || !Ae(e) || (wr(e) > 1 && Se.defineProperties(e, {
    set: Ar,
    add: Ar,
    clear: Ar,
    delete: Ar
  }), Se.freeze(e), t && gr(
    e,
    (n, r) => {
      Bu(r, !0);
    },
    !1
  )), e;
}
function wy() {
  De(2);
}
var Ar = {
  [ar]: wy
};
function eo(e) {
  return e === null || !$u(e) ? !0 : Se.isFrozen(e);
}
var Ll = "MapSet", Di = "Patches", Bf = {};
function vn(e) {
  const t = Bf[e];
  return t || De(0, e), t;
}
var Sy = (e) => !!Bf[e], cr, Wf = () => cr, xy = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Sy(Ll) ? vn(Ll) : void 0
});
function ua(e, t) {
  t && (e.patchPlugin_ = vn(Di), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ji(e) {
  Fi(e), e.drafts_.forEach(ky), e.drafts_ = null;
}
function Fi(e) {
  e === cr && (cr = e.parent_);
}
var sa = (e) => cr = xy(cr, e);
function ky(e) {
  const t = e[ae];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function aa(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    n[ae].modified_ && (ji(t), De(4)), Ae(e) && (e = ca(t, e));
    const { patchPlugin_: l } = t;
    l && l.generateReplacementPatches_(
      n[ae].base_,
      e,
      t
    );
  } else
    e = ca(t, n);
  return Ey(t, e, !0), ji(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== $f ? e : void 0;
}
function ca(e, t) {
  if (eo(t))
    return t;
  const n = t[ae];
  if (!n)
    return Wu(t, e.handledSet_, e);
  if (!to(n, e))
    return t;
  if (!n.modified_)
    return n.base_;
  if (!n.finalized_) {
    const { callbacks_: r } = n;
    if (r)
      for (; r.length > 0; )
        r.pop()(e);
    Kf(n, e);
  }
  return n.copy_;
}
function Ey(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Bu(t, n);
}
function Hf(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var to = (e, t) => e.scope_ === t, _y = [];
function Qf(e, t, n, r) {
  const l = Ye(e), o = e.type_;
  if (r !== void 0 && Li(l, r, o) === t) {
    Il(l, r, n, o);
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
  const i = e.draftLocations_.get(t) ?? _y;
  for (const u of i)
    Il(l, u, n, o);
}
function Cy(e, t, n) {
  e.callbacks_.push(function(l) {
    var u;
    const o = t;
    if (!o || !to(o, l))
      return;
    (u = l.mapSetPlugin_) == null || u.fixSetContents(o);
    const i = Vu(o);
    Qf(e, o.draft_ ?? o, i, n), Kf(o, l);
  });
}
function Kf(e, t) {
  var r;
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || (((r = e.assigned_) == null ? void 0 : r.size) ?? 0) > 0)) {
    const { patchPlugin_: l } = t;
    if (l) {
      const o = l.getPath(e);
      o && l.generatePatches_(e, o, t);
    }
    Hf(e);
  }
}
function Ny(e, t, n) {
  const { scope_: r } = e;
  if (nt(n)) {
    const l = n[ae];
    to(l, r) && l.callbacks_.push(function() {
      rl(e);
      const i = Vu(l);
      Qf(e, n, i, t);
    });
  } else Ae(n) && e.callbacks_.push(function() {
    const o = Ye(e);
    Li(o, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && Wu(
      Li(e.copy_, t, e.type_),
      r.handledSet_,
      r
    );
  });
}
function Wu(e, t, n) {
  return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || nt(e) || t.has(e) || !Ae(e) || eo(e) || (t.add(e), gr(e, (r, l) => {
    if (nt(l)) {
      const o = l[ae];
      if (to(o, n)) {
        const i = Vu(o);
        Il(e, r, i, e.type_), Hf(o);
      }
    } else Ae(l) && Wu(l, t, n);
  })), e;
}
function Py(e, t) {
  const n = Zl(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Wf(),
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
  let l = r, o = Hu;
  n && (l = [r], o = fr);
  const { revoke: i, proxy: u } = Proxy.revocable(l, o);
  return r.draft_ = u, r.revoke_ = i, [u, r];
}
var Hu = {
  get(e, t) {
    if (t === ae)
      return e;
    const n = Ye(e);
    if (!ia(n, t, e.type_))
      return Ty(e, n, t);
    const r = n[t];
    if (e.finalized_ || !Ae(r))
      return r;
    if (r === jo(e.base_, t)) {
      rl(e);
      const l = e.type_ === 1 ? +t : t, o = Ai(e.scope_, r, e, l);
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
    const r = Yf(Ye(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const l = jo(Ye(e), t), o = l == null ? void 0 : l[ae];
      if (o && o.base_ === n)
        return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
      if (gy(n, l) && (n !== void 0 || ia(e.base_, t, e.type_)))
        return !0;
      rl(e), Ui(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), Ny(e, t, n)), !0;
  },
  deleteProperty(e, t) {
    return rl(e), jo(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Ui(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Ye(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      [nl]: !0,
      [Ii]: e.type_ !== 1 || t !== "length",
      [Ml]: r[Ml],
      [ar]: n[t]
    };
  },
  defineProperty() {
    De(11);
  },
  getPrototypeOf(e) {
    return mn(e.base_);
  },
  setPrototypeOf() {
    De(12);
  }
}, fr = {};
gr(Hu, (e, t) => {
  fr[e] = function() {
    const n = arguments;
    return n[0] = n[0][0], t.apply(this, n);
  };
});
fr.deleteProperty = function(e, t) {
  return fr.set.call(this, e, t, void 0);
};
fr.set = function(e, t, n) {
  return Hu.set.call(this, e[0], t, n, e[0]);
};
function jo(e, t) {
  const n = e[ae];
  return (n ? Ye(n) : e)[t];
}
function Ty(e, t, n) {
  var l;
  const r = Yf(t, n);
  return r ? ar in r ? r[ar] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (l = r.get) == null ? void 0 : l.call(e.draft_)
  ) : void 0;
}
function Yf(e, t) {
  if (!(t in e))
    return;
  let n = mn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = mn(n);
  }
}
function Ui(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ui(e.parent_));
}
function rl(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = Oi(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ry = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (t, n, r) => {
      if (Wt(t) && !Wt(n)) {
        const o = n;
        n = t;
        const i = this;
        return function(s = o, ...a) {
          return i.produce(s, (c) => n.call(this, c, ...a));
        };
      }
      Wt(n) || De(6), r !== void 0 && !Wt(r) && De(7);
      let l;
      if (Ae(t)) {
        const o = sa(this), i = Ai(o, t, void 0);
        let u = !0;
        try {
          l = n(i), u = !1;
        } finally {
          u ? ji(o) : Fi(o);
        }
        return ua(o, r), aa(l, o);
      } else if (!t || !$u(t)) {
        if (l = n(t), l === void 0 && (l = t), l === $f && (l = void 0), this.autoFreeze_ && Bu(l, !0), r) {
          const o = [], i = [];
          vn(Di).generateReplacementPatches_(t, l, {
            patches_: o,
            inversePatches_: i
          }), r(o, i);
        }
        return l;
      } else
        De(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (Wt(t))
        return (i, ...u) => this.produceWithPatches(i, (s) => t(s, ...u));
      let r, l;
      return [this.produce(t, n, (i, u) => {
        r = i, l = u;
      }), r, l];
    }, Do(e == null ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Do(e == null ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Do(e == null ? void 0 : e.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Ae(e) || De(8), nt(e) && (e = zy(e));
    const t = sa(this), n = Ai(t, e, void 0);
    return n[ae].isManual_ = !0, Fi(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[ae];
    (!n || !n.isManual_) && De(9);
    const { scope_: r } = n;
    return ua(r, t), aa(void 0, r);
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
    const r = vn(Di).applyPatches_;
    return nt(e) ? r(e, t) : this.produce(
      e,
      (l) => r(l, t)
    );
  }
};
function Ai(e, t, n, r) {
  const [l, o] = ql(t) ? vn(Ll).proxyMap_(t, n) : bl(t) ? vn(Ll).proxySet_(t, n) : Py(t, n);
  return ((n == null ? void 0 : n.scope_) ?? Wf()).drafts_.push(l), o.callbacks_ = (n == null ? void 0 : n.callbacks_) ?? [], o.key_ = r, n && r !== void 0 ? Cy(n, o, r) : o.callbacks_.push(function(s) {
    var c;
    (c = s.mapSetPlugin_) == null || c.fixSetContents(o);
    const { patchPlugin_: a } = s;
    o.modified_ && a && a.generatePatches_(o, [], s);
  }), l;
}
function zy(e) {
  return nt(e) || De(10, e), Xf(e);
}
function Xf(e) {
  if (!Ae(e) || eo(e))
    return e;
  const t = e[ae];
  let n, r = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Oi(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
  } else
    n = Oi(e, !0);
  return gr(
    n,
    (l, o) => {
      Il(n, l, Xf(o));
    },
    r
  ), t && (t.finalized_ = !1), n;
}
var My = new Ry(), Gf = My.produce;
function Jf(e) {
  return ({ dispatch: n, getState: r }) => (l) => (o) => typeof o == "function" ? o(n, r, e) : l(o);
}
var Iy = Jf(), Ly = Jf, Oy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Rl : Rl.apply(null, arguments);
};
function fa(e, t) {
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => my(r) && r.type === e, n;
}
var Zf = class Dn extends Array {
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
function da(e) {
  return Ae(e) ? Gf(e, () => {
  }) : e;
}
function $r(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Dy(e) {
  return typeof e == "boolean";
}
var jy = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: l = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let i = new Zf();
  return n && (Dy(n) ? i.push(Iy) : i.push(Ly(n.extraArgument))), i;
}, Fy = "RTK_autoBatch", pa = (e) => (t) => {
  setTimeout(t, e);
}, Uy = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let l = !0, o = !1, i = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : pa(10)
  ) : e.type === "callback" ? e.queueNotification : pa(e.timeout), a = () => {
    i = !1, o && (o = !1, u.forEach((c) => c()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const d = () => l && c(), y = r.subscribe(d);
      return u.add(c), () => {
        y(), u.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      var d;
      try {
        return l = !((d = c == null ? void 0 : c.meta) != null && d[Fy]), o = !l, o && (i || (i = !0, s(a))), r.dispatch(c);
      } finally {
        l = !0;
      }
    }
  });
}, Ay = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let l = new Zf(e);
  return r && l.push(Uy(typeof r == "object" ? r : void 0)), l;
};
function $y(e) {
  const t = jy(), {
    reducer: n = void 0,
    middleware: r,
    devTools: l = !0,
    preloadedState: o = void 0,
    enhancers: i = void 0
  } = e || {};
  let u;
  if (typeof n == "function")
    u = n;
  else if (Au(n))
    u = hy(n);
  else
    throw new Error(Ze(1));
  let s;
  typeof r == "function" ? s = r(t) : s = t();
  let a = Rl;
  l && (a = Oy({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof l == "object" && l
  }));
  const c = yy(...s), d = Ay(c);
  let y = typeof i == "function" ? i(d) : d();
  const m = a(...y);
  return Af(u, o, m);
}
function qf(e) {
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
function Vy(e) {
  return typeof e == "function";
}
function By(e, t) {
  let [n, r, l] = qf(t), o;
  if (Vy(e))
    o = () => da(e());
  else {
    const u = da(e);
    o = () => u;
  }
  function i(u = o(), s) {
    let a = [n[s.type], ...r.filter(({
      matcher: c
    }) => c(s)).map(({
      reducer: c
    }) => c)];
    return a.filter((c) => !!c).length === 0 && (a = [l]), a.reduce((c, d) => {
      if (d)
        if (nt(c)) {
          const m = d(c, s);
          return m === void 0 ? c : m;
        } else {
          if (Ae(c))
            return Gf(c, (y) => d(y, s));
          {
            const y = d(c, s);
            if (y === void 0) {
              if (c === null)
                return c;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return y;
          }
        }
      return c;
    }, u);
  }
  return i.getInitialState = o, i;
}
var Wy = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Hy(e, t) {
  return `${e}/${t}`;
}
function Qy({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Wy];
  return function(l) {
    const {
      name: o,
      reducerPath: i = o
    } = l;
    if (!o)
      throw new Error(Ze(11));
    const u = (typeof l.reducers == "function" ? l.reducers(Xy()) : l.reducers) || {}, s = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(v, x) {
        const E = typeof v == "string" ? v : v.type;
        if (!E)
          throw new Error(Ze(12));
        if (E in a.sliceCaseReducersByType)
          throw new Error(Ze(13));
        return a.sliceCaseReducersByType[E] = x, c;
      },
      addMatcher(v, x) {
        return a.sliceMatchers.push({
          matcher: v,
          reducer: x
        }), c;
      },
      exposeAction(v, x) {
        return a.actionCreators[v] = x, c;
      },
      exposeCaseReducer(v, x) {
        return a.sliceCaseReducersByName[v] = x, c;
      }
    };
    s.forEach((v) => {
      const x = u[v], E = {
        reducerName: v,
        type: Hy(o, v),
        createNotation: typeof l.reducers == "function"
      };
      Jy(x) ? qy(E, x, c, t) : Gy(E, x, c);
    });
    function d() {
      const [v = {}, x = [], E = void 0] = typeof l.extraReducers == "function" ? qf(l.extraReducers) : [l.extraReducers], _ = {
        ...v,
        ...a.sliceCaseReducersByType
      };
      return By(l.initialState, (N) => {
        for (let L in _)
          N.addCase(L, _[L]);
        for (let L of a.sliceMatchers)
          N.addMatcher(L.matcher, L.reducer);
        for (let L of x)
          N.addMatcher(L.matcher, L.reducer);
        E && N.addDefaultCase(E);
      });
    }
    const y = (v) => v, m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new WeakMap();
    let g;
    function k(v, x) {
      return g || (g = d()), g(v, x);
    }
    function p() {
      return g || (g = d()), g.getInitialState();
    }
    function f(v, x = !1) {
      function E(N) {
        let L = N[v];
        return typeof L > "u" && x && (L = $r(w, E, p)), L;
      }
      function _(N = y) {
        const L = $r(m, x, () => /* @__PURE__ */ new WeakMap());
        return $r(L, N, () => {
          const z = {};
          for (const [ve, Ct] of Object.entries(l.selectors ?? {}))
            z[ve] = Ky(Ct, N, () => $r(w, N, p), x);
          return z;
        });
      }
      return {
        reducerPath: v,
        getSelectors: _,
        get selectors() {
          return _(E);
        },
        selectSlice: E
      };
    }
    const h = {
      name: o,
      reducer: k,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: p,
      ...f(i),
      injectInto(v, {
        reducerPath: x,
        ...E
      } = {}) {
        const _ = x ?? i;
        return v.inject({
          reducerPath: _,
          reducer: k
        }, E), {
          ...h,
          ...f(_, !0)
        };
      }
    };
    return h;
  };
}
function Ky(e, t, n, r) {
  function l(o, ...i) {
    let u = t(o);
    return typeof u > "u" && r && (u = n()), e(u, ...i);
  }
  return l.unwrapped = e, l;
}
var Yy = /* @__PURE__ */ Qy();
function Xy() {
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
function Gy({
  type: e,
  reducerName: t,
  createNotation: n
}, r, l) {
  let o, i;
  if ("reducer" in r) {
    if (n && !Zy(r))
      throw new Error(Ze(17));
    o = r.reducer, i = r.prepare;
  } else
    o = r;
  l.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, i ? fa(e, i) : fa(e));
}
function Jy(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Zy(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function qy({
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
  } = n, d = l(e, o, c);
  r.exposeAction(t, d), i && r.addCase(d.fulfilled, i), u && r.addCase(d.pending, u), s && r.addCase(d.rejected, s), a && r.addMatcher(d.settled, a), r.exposeCaseReducer(t, {
    fulfilled: i || Vr,
    pending: u || Vr,
    rejected: s || Vr,
    settled: a || Vr
  });
}
function Vr() {
}
function Ze(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const by = {
  nodes: [],
  edges: [],
  selection: { nodeIds: [], edgeIds: [] },
  ui: { toolMode: "select" }
}, bf = Yy({
  name: "diagram",
  initialState: by,
  reducers: {
    addNode: {
      prepare: (e, t, n, r) => ({
        payload: { type: e, position: t, label: n, id: r }
      }),
      reducer(e, t) {
        const { type: n, position: r, label: l, id: o } = t.payload, i = {
          id: o ?? `node_${Fo()}`,
          type: n,
          position: r,
          label: l ?? em(n)
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
        const u = { id: o ?? `edge_${Fo()}`, source: n, target: r, label: l };
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
      n && r && n !== r && (e.edges.some((o) => o.source === n && o.target === r) || e.edges.push({ id: `edge_${Fo()}`, source: n, target: r })), e.ui.toolMode = "select", e.ui.pendingConnectionFrom = void 0;
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
function em(e) {
  switch (e) {
    case "start":
      return "Start";
    case "task":
      return "Task";
    case "end":
      return "End";
  }
}
function Fo() {
  if (typeof crypto < "u" && "getRandomValues" in crypto) {
    const e = new Uint32Array(2);
    return crypto.getRandomValues(e), Array.from(e).map((t) => t.toString(36)).join("").slice(0, 8);
  }
  return Math.random().toString(36).slice(2, 10);
}
const {
  addNode: Uo,
  moveNode: tm,
  setNodeLabel: nm,
  selectNode: $i,
  addEdge: Rm,
  deleteSelected: ha,
  setToolMode: zm,
  startConnectionFrom: rm,
  completeConnectionTo: lm,
  selectEdge: ya,
  clearSelection: om,
  loadDiagram: ed
} = bf.actions, im = bf.reducer;
function Vi(e) {
  switch (e.type) {
    case "task":
      return { x: e.position.x + 70, y: e.position.y + 28 };
    case "start":
    case "end":
      return { x: e.position.x + 24, y: e.position.y + 24 };
  }
}
function td(e) {
  switch (e.type) {
    case "task":
      return { x: e.position.x, y: e.position.y, w: 140, h: 56, r: 0 };
    case "start":
    case "end":
      return { x: e.position.x, y: e.position.y, w: 48, h: 48, r: 24 };
  }
}
function um(e) {
  switch (e.type) {
    case "task":
      return { x: e.position.x, y: e.position.y, w: 140, h: 56 };
    case "start":
    case "end":
      return { x: e.position.x, y: e.position.y, w: 48, h: 48 };
  }
}
function sm(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n], { x: l, y: o, w: i, h: u } = um(r);
    if (e.x >= l && e.x <= l + i && e.y >= o && e.y <= o + u) return r;
  }
}
function ma(e, t) {
  const n = Vi(e), r = td(e);
  return e.type === "task" ? cm(n, t, { x: r.x, y: r.y, w: r.w, h: r.h }) : am(n, t, r.r);
}
function am(e, t, n) {
  const r = t.x - e.x, l = t.y - e.y, o = Math.hypot(r, l) || 1;
  return { x: e.x + r / o * n, y: e.y + l / o * n };
}
function cm(e, t, n) {
  const r = t.x - e.x, l = t.y - e.y, o = [], i = n.x, u = n.x + n.w, s = n.y, a = n.y + n.h;
  if (r !== 0) {
    const d = (i - e.x) / r, y = e.y + d * l;
    d > 0 && y >= s && y <= a && o.push(d);
    const m = (u - e.x) / r, w = e.y + m * l;
    m > 0 && w >= s && w <= a && o.push(m);
  }
  if (l !== 0) {
    const d = (s - e.y) / l, y = e.x + d * r;
    d > 0 && y >= i && y <= u && o.push(d);
    const m = (a - e.y) / l, w = e.x + m * r;
    m > 0 && w >= i && w <= u && o.push(m);
  }
  const c = Math.min(...o);
  return { x: e.x + c * r, y: e.y + c * l };
}
function fm(e, t, n) {
  if (nd(e, t, n)) return [e, t];
  const r = (c) => dm(c, n) ? vm(c) : null, l = r([e, { x: t.x, y: e.y }, t]);
  if (l) return l;
  const o = r([e, { x: e.x, y: t.y }, t]);
  if (o) return o;
  const { xs: i, ys: u } = mm(n, e, t), s = i.slice(0, 12), a = u.slice(0, 12);
  for (const c of s) {
    const d = r([e, { x: c, y: e.y }, { x: c, y: t.y }, t]);
    if (d) return d;
    for (const y of a) {
      const m = r([e, { x: c, y: e.y }, { x: c, y }, { x: t.x, y }, t]);
      if (m) return m;
    }
  }
  for (const c of a) {
    const d = r([e, { x: e.x, y: c }, { x: t.x, y: c }, t]);
    if (d) return d;
    for (const y of s) {
      const m = r([e, { x: e.x, y: c }, { x: y, y: c }, { x: y, y: t.y }, t]);
      if (m) return m;
    }
  }
  return [e, t];
}
function va(e) {
  if (e.length === 0) return "";
  const [t, ...n] = e;
  return ["M", t.x, t.y, ...n.flatMap((r) => ["L", r.x, r.y])].join(" ");
}
function dm(e, t) {
  for (let n = 0; n < e.length - 1; n++)
    if (!nd(e[n], e[n + 1], t)) return !1;
  return !0;
}
function nd(e, t, n) {
  for (const r of n)
    if (r.kind === "rect") {
      if (pm(e, t, r)) return !1;
    } else if (hm(e, t, r)) return !1;
  return !0;
}
function pm(e, t, n) {
  const r = Math.min(e.x, t.x), l = Math.max(e.x, t.x), o = Math.min(e.y, t.y), i = Math.max(e.y, t.y);
  if (l < n.x || r > n.x + n.w || i < n.y || o > n.y + n.h, ga(e, n) || ga(t, n)) return !0;
  const u = [
    [{ x: n.x, y: n.y }, { x: n.x + n.w, y: n.y }],
    [{ x: n.x + n.w, y: n.y }, { x: n.x + n.w, y: n.y + n.h }],
    [{ x: n.x + n.w, y: n.y + n.h }, { x: n.x, y: n.y + n.h }],
    [{ x: n.x, y: n.y + n.h }, { x: n.x, y: n.y }]
  ];
  for (const [s, a] of u)
    if (ym(e, t, s, a)) return !0;
  return !1;
}
function ga(e, t) {
  return e.x > t.x && e.x < t.x + t.w && e.y > t.y && e.y < t.y + t.h;
}
function hm(e, t, n) {
  const r = t.x - e.x, l = t.y - e.y, o = r * r + l * l;
  if (o === 0) return wa(e.x, e.y, n.cx, n.cy) <= n.r;
  let i = ((n.cx - e.x) * r + (n.cy - e.y) * l) / o;
  i = Math.max(0, Math.min(1, i));
  const u = e.x + i * r, s = e.y + i * l;
  return wa(u, s, n.cx, n.cy) <= n.r;
}
function wa(e, t, n, r) {
  const l = n - e, o = r - t;
  return Math.hypot(l, o);
}
function ym(e, t, n, r) {
  const l = Br(e, t, n), o = Br(e, t, r), i = Br(n, r, e), u = Br(n, r, t);
  return !!(l !== o && i !== u || l === 0 && Wr(e, n, t) || o === 0 && Wr(e, r, t) || i === 0 && Wr(n, e, r) || u === 0 && Wr(n, t, r));
}
function Br(e, t, n) {
  const r = (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
  return Math.abs(r) < 1e-6 ? 0 : r > 0 ? 1 : 2;
}
function Wr(e, t, n) {
  return t.x <= Math.max(e.x, n.x) + 1e-6 && t.x + 1e-6 >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) + 1e-6 && t.y + 1e-6 >= Math.min(e.y, n.y);
}
function mm(e, t, n) {
  const r = /* @__PURE__ */ new Set([t.x, n.x]), l = /* @__PURE__ */ new Set([t.y, n.y]);
  for (const a of e)
    a.kind === "rect" ? (r.add(a.x - 8), r.add(a.x + a.w + 8), l.add(a.y - 8), l.add(a.y + a.h + 8)) : (r.add(a.cx - a.r - 8), r.add(a.cx + a.r + 8), l.add(a.cy - a.r - 8), l.add(a.cy + a.r + 8));
  const o = (t.x + n.x) / 2, i = (t.y + n.y) / 2, u = Array.from(r).sort((a, c) => Math.abs(a - o) - Math.abs(c - o)), s = Array.from(l).sort((a, c) => Math.abs(a - i) - Math.abs(c - i));
  return { xs: u, ys: s };
}
function vm(e) {
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
function gm({ edge: e, nodes: t }) {
  const n = t[e.source], r = t[e.target];
  if (!n || !r) return null;
  const l = Uu(), o = sr((k) => k.diagram.selection.edgeIds.includes(e.id)), i = Vi(n), u = Vi(r), s = ma(n, u), a = ma(r, i), c = [];
  for (const k of Object.values(t)) {
    if (!k || k.id === n.id || k.id === r.id) continue;
    const p = td(k);
    k.type === "task" ? c.push({ kind: "rect", x: p.x - 6, y: p.y - 6, w: p.w + 12, h: p.h + 12 }) : c.push({ kind: "circle", cx: k.position.x + 24, cy: k.position.y + 24, r: 30 });
  }
  const d = fm(s, a, c), y = `arrow-${e.id}`, m = o ? "#6366f1" : "#e5e7eb", w = o ? 3 : 2, g = (k) => {
    k.stopPropagation(), l(ya(e.id));
  };
  return /* @__PURE__ */ T.jsxs(
    "g",
    {
      onClick: g,
      style: { cursor: "pointer" },
      tabIndex: 0,
      role: "button",
      "aria-label": `Connection from ${n.label ?? n.type} to ${r.label ?? r.type}`,
      onKeyDown: (k) => {
        (k.key === "Enter" || k.key === " ") && (k.preventDefault(), l(ya(e.id)));
      },
      children: [
        /* @__PURE__ */ T.jsx("defs", { children: /* @__PURE__ */ T.jsx("marker", { id: y, markerWidth: "5", markerHeight: "5", refX: "5", refY: "2.5", orient: "auto-start-reverse", children: /* @__PURE__ */ T.jsx("path", { d: "M 0 0 L 5 2.5 L 0 5 z", fill: m }) }) }),
        d.length === 2 ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx(
            "line",
            {
              x1: d[0].x,
              y1: d[0].y,
              x2: d[1].x,
              y2: d[1].y,
              stroke: m,
              strokeOpacity: 0.85,
              strokeWidth: w,
              markerEnd: `url(#${y})`
            }
          ),
          /* @__PURE__ */ T.jsx(
            "line",
            {
              x1: d[0].x,
              y1: d[0].y,
              x2: d[1].x,
              y2: d[1].y,
              stroke: "transparent",
              strokeWidth: 16,
              pointerEvents: "stroke"
            }
          )
        ] }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx(
            "path",
            {
              d: va(d),
              fill: "none",
              stroke: m,
              strokeOpacity: 0.85,
              strokeWidth: w,
              markerEnd: `url(#${y})`
            }
          ),
          /* @__PURE__ */ T.jsx("path", { d: va(d), fill: "none", stroke: "transparent", strokeWidth: 16, pointerEvents: "stroke" })
        ] })
      ]
    }
  );
}
const wm = O.memo(gm);
function Sm({ svgRef: e, nodes: t, nodesById: n, onSelectNode: r, onMoveNode: l }) {
  const [o, i] = O.useState(), u = O.useCallback((d, y) => {
    var k;
    const m = e.current;
    if (!m) return { x: d, y };
    const w = m.createSVGPoint();
    w.x = d, w.y = y;
    const g = w.matrixTransform((k = m.getScreenCTM()) == null ? void 0 : k.inverse());
    return { x: g.x, y: g.y };
  }, [e]), s = O.useCallback((d) => {
    const y = u(d.clientX, d.clientY), m = sm(y, t);
    if (m) {
      const w = n[m.id];
      i({ id: m.id, offset: { x: y.x - w.position.x, y: y.y - w.position.y } }), r(m.id);
    }
  }, [u, t, n, r]), a = O.useCallback((d) => {
    if (!o) return;
    const y = u(d.clientX, d.clientY), m = { x: y.x - o.offset.x, y: y.y - o.offset.y };
    l(o.id, m);
  }, [u, o, l]), c = O.useCallback(() => i(void 0), []);
  return { handleMouseDown: s, handleMouseMove: a, handleMouseUp: c, dragging: !!o };
}
function xm(e) {
  const { onDelete: t } = e;
  O.useEffect(() => {
    const n = (r) => {
      (r.key === "Delete" || r.key === "Backspace") && t && t();
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [t]);
}
function km({ node: e }) {
  const t = Uu(), n = sr((h) => h.diagram.selection.nodeIds.includes(e.id)), { toolMode: r, pendingConnectionFrom: l } = sr((h) => h.diagram.ui), [o, i] = O.useState(!1), u = O.useRef(null), { width: s, height: a, borderRadius: c } = O.useMemo(() => {
    switch (e.type) {
      case "task":
        return { width: 140, height: 56, borderRadius: 10 };
      case "start":
      case "end":
        return { width: 48, height: 48, borderRadius: 24 };
    }
  }, [e.type]), d = e.position.x, y = e.position.y, m = (h) => {
    h.stopPropagation(), r === "connect" && l && l !== e.id ? t(lm(e.id)) : t($i(e.id));
  }, w = (h) => {
    h.stopPropagation(), e.type === "task" && i(!0);
  }, g = n ? "#6366f1" : "rgba(255,255,255,0.35)", k = (e.type === "task", "rgba(255,255,255,0.06)"), p = (e.type === "task", d + s), f = (e.type === "task", y + a / 2);
  return /* @__PURE__ */ T.jsxs(
    "g",
    {
      ref: u,
      onClick: m,
      tabIndex: 0,
      onKeyDown: (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), t($i(e.id)));
      },
      role: "button",
      "aria-label": `${e.type === "task" ? "Task" : e.type === "start" ? "Start" : "End"} node${e.label ? `: ${e.label}` : ""}`,
      children: [
        e.type === "task" ? /* @__PURE__ */ T.jsx("rect", { x: d, y, width: s, height: a, rx: c, fill: k, stroke: g }) : e.type === "start" ? /* @__PURE__ */ T.jsx("circle", { cx: d + c, cy: y + c, r: c, fill: k, stroke: g }) : (
          // end: double circle
          /* @__PURE__ */ T.jsxs("g", { children: [
            /* @__PURE__ */ T.jsx("circle", { cx: d + c, cy: y + c, r: c, fill: k, stroke: g }),
            /* @__PURE__ */ T.jsx("circle", { cx: d + c, cy: y + c, r: c - 5, fill: k, stroke: g })
          ] })
        ),
        e.type === "task" && !o && /* @__PURE__ */ T.jsx(
          "text",
          {
            x: d + s / 2,
            y: y + a / 2 + 5,
            textAnchor: "middle",
            fontSize: 14,
            onDoubleClick: w,
            style: { userSelect: "none", pointerEvents: "auto" },
            children: e.label ?? "Task"
          }
        ),
        o && /* @__PURE__ */ T.jsx("foreignObject", { x: d + 8, y: y + a / 2 - 14, width: s - 16, height: 28, children: /* @__PURE__ */ T.jsx(
          "input",
          {
            autoFocus: !0,
            defaultValue: e.label ?? "",
            onBlur: (h) => {
              i(!1), t(nm({ id: e.id, label: h.currentTarget.value })), setTimeout(() => {
                var v;
                return (v = u.current) == null ? void 0 : v.focus();
              }, 0);
            },
            onKeyDown: (h) => {
              h.key === "Enter" && h.target.blur(), h.key === "Escape" && i(!1);
            },
            style: { width: "100%", background: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, padding: "4px 6px" }
          }
        ) }),
        /* @__PURE__ */ T.jsx(
          "circle",
          {
            cx: p,
            cy: f,
            r: 6,
            fill: r === "connect" && l === e.id ? "#6366f1" : "rgba(255,255,255,0.2)",
            stroke: g,
            onClick: (h) => {
              h.stopPropagation(), t(rm(e.id));
            },
            "aria-label": `Connect from ${e.label ?? e.type} node`
          }
        )
      ]
    }
  );
}
const Em = O.memo(km);
function _m() {
  const e = Uu(), t = sr((g) => g.diagram.nodes), n = sr((g) => g.diagram.edges), [r, l] = O.useState(!1), [o, i] = O.useState(""), [u, s] = O.useState(null), a = O.useMemo(() => Object.fromEntries(t.map((g) => [g.id, g])), [t]), c = O.useRef(null), d = () => e(om()), { handleMouseDown: y, handleMouseMove: m, handleMouseUp: w } = Sm({
    svgRef: c,
    nodes: t,
    nodesById: a,
    onSelectNode: (g) => e($i(g)),
    onMoveNode: (g, k) => e(tm({ id: g, position: k }))
  });
  return xm({ onDelete: () => e(ha()) }), /* @__PURE__ */ T.jsxs("div", { style: { display: "grid", gridTemplateRows: "40px 1fr", height: "100%" }, children: [
    /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", padding: "6px 10px" }, children: [
      /* @__PURE__ */ T.jsx("button", { onClick: () => e(Uo("start", { x: 80, y: 80 })), children: "+ Start" }),
      /* @__PURE__ */ T.jsx("button", { onClick: () => e(Uo("task", { x: 200, y: 80 })), children: "+ Task" }),
      /* @__PURE__ */ T.jsx("button", { onClick: () => e(Uo("end", { x: 380, y: 80 })), children: "+ End" }),
      /* @__PURE__ */ T.jsx("button", { onClick: () => e(ha()), style: { marginLeft: 12 }, children: "Delete" }),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          style: { marginLeft: "auto" },
          onClick: async () => {
            const g = await Cm(t, n);
            i(g), l(!0);
          },
          children: "Export JSON"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          onClick: async () => {
            const g = prompt("Paste JSON here:");
            if (g)
              try {
                const k = JSON.parse(g), { safeImportFromExampleJson: p } = await Promise.resolve().then(() => ud), f = p(k);
                e(ed(f));
              } catch (k) {
                const p = k instanceof Error ? k.message : "Invalid JSON";
                s(p), window.setTimeout(() => s(null), 4e3);
              }
          },
          children: "Import JSON"
        }
      )
    ] }),
    u && /* @__PURE__ */ T.jsx("div", { "aria-live": "polite", role: "status", style: { padding: "0 10px 6px 10px", color: "#fecaca" }, children: u }),
    /* @__PURE__ */ T.jsxs(
      "svg",
      {
        ref: c,
        width: "100%",
        height: "100%",
        onMouseDown: y,
        onMouseMove: m,
        onMouseUp: w,
        onClick: d,
        children: [
          /* @__PURE__ */ T.jsx(cy, {}),
          n.map((g) => /* @__PURE__ */ T.jsx(wm, { edge: g, nodes: a }, g.id)),
          t.map((g) => /* @__PURE__ */ T.jsx(Em, { node: g }, g.id))
        ]
      }
    ),
    /* @__PURE__ */ T.jsx(sy, { show: r, text: o, onClose: () => l(!1) })
  ] });
}
async function Cm(e, t) {
  const { exportToExampleJson: n } = await Promise.resolve().then(() => ud), r = n({ nodes: e, edges: t });
  return JSON.stringify(r, null, 2);
}
function Nm() {
  return /* @__PURE__ */ T.jsx(iy, { children: /* @__PURE__ */ T.jsx(_m, {}) });
}
function Qu(e) {
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
function rd(e) {
  switch (e) {
    case "start":
      return "bpmn:StartEvent";
    case "task":
      return "bpmn:UserTask";
    case "end":
      return "bpmn:EndEvent";
  }
}
function ld(e) {
  const t = e.definitions.rootElements.find((o) => o.$type === "bpmn:Process"), n = (t == null ? void 0 : t.flowElements) ?? [], r = [], l = [];
  for (const o of n)
    if (o.$type === "bpmn:SequenceFlow")
      l.push({ id: o.id, source: o.sourceRef, target: o.targetRef, label: o.name });
    else {
      const i = Qu(o.$type);
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
function Bi(e) {
  const t = [];
  for (const n of e.nodes)
    t.push({
      $type: rd(n.type),
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
function od(e) {
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
    typeof c.id != "string" || c.id.length === 0 ? t.push("Every flowElement must have a non-empty string id") : (i.has(c.id) && t.push(`Duplicate id detected: ${c.id}`), i.add(c.id)), c.$type === "bpmn:SequenceFlow" ? (typeof c.sourceRef != "string" && t.push(`SequenceFlow ${c.id}: missing sourceRef`), typeof c.targetRef != "string" && t.push(`SequenceFlow ${c.id}: missing targetRef`)) : (Qu(c.$type) || t.push(`Unsupported element type: ${String(c.$type)}`), (typeof c.x != "number" || typeof c.y != "number") && t.push(`Element ${c.id} (${c.$type}) must have numeric x and y`), typeof c.id == "string" && u.add(c.id));
  }
  for (const c of o)
    c.$type === "bpmn:SequenceFlow" && (typeof c.sourceRef == "string" && !u.has(c.sourceRef) && t.push(`SequenceFlow ${c.id}: sourceRef does not reference an existing node (${c.sourceRef})`), typeof c.targetRef == "string" && !u.has(c.targetRef) && t.push(`SequenceFlow ${c.id}: targetRef does not reference an existing node (${c.targetRef})`), c.sourceRef === c.targetRef && t.push(`SequenceFlow ${c.id}: sourceRef and targetRef must differ`));
  return { valid: t.length === 0, errors: t };
}
function id(e) {
  const t = od(e);
  if (!t.valid) {
    const n = `Invalid diagram JSON:
- ${t.errors.join(`
- `)}`;
    throw new Error(n);
  }
  return ld(e);
}
const ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportToExampleJson: Bi,
  importFromExampleJson: ld,
  mapBpmnTypeToInternal: Qu,
  mapInternalTypeToBpmn: rd,
  safeImportFromExampleJson: id,
  validateExampleJson: od
}, Symbol.toStringTag, { value: "Module" })), zn = $y({
  reducer: {
    diagram: im
  }
}), Pm = "*,*:before,*:after{box-sizing:border-box}html,body,#root{height:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial,sans-serif;background:linear-gradient(180deg,#0f172a,#111827);color:#e5e7eb;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid rgba(255,255,255,.15);background:#ffffff0f;color:#e5e7eb;padding:6px 12px;border-radius:8px;cursor:pointer;transition:transform .12s ease,background .12s ease,border-color .12s ease}button:hover{background:#ffffff1f;border-color:#ffffff40}button:active{transform:translateY(1px)}input[type=number],input[type=text]{background:#ffffff0f;border:1px solid rgba(255,255,255,.15);color:#e5e7eb;border-radius:8px;padding:6px 10px}h1{color:#e5e7eb}.accent{color:#6366f1}";
class Tm extends HTMLElement {
  constructor() {
    super(...arguments), this.lastSelectionKey = "";
  }
  connectedCallback() {
    const t = this.shadowRoot ?? this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = `${Pm}
/* Ensure the host and mount container fill the allocated space */
:host { display: block; height: 100%; width: 100%; }
.we-root { display: block; height: 100%; width: 100%; }
`, t.appendChild(n), this.container = document.createElement("div"), this.container.className = "we-root", this.container.style.height = "100%", this.container.style.width = "100%", t.appendChild(this.container), this.root = Ao.createRoot(this.container), this.root.render(
      /* @__PURE__ */ T.jsx(Ma.StrictMode, { children: /* @__PURE__ */ T.jsx(ty, { store: zn, children: /* @__PURE__ */ T.jsx(Nm, {}) }) })
    ), queueMicrotask(() => {
      this.dispatchEvent(new CustomEvent("ready"));
    }), this.unsubscribe = zn.subscribe(() => {
      const r = zn.getState().diagram, l = `${r.selection.nodeIds.join(",")}|${r.selection.edgeIds.join(",")}`;
      l !== this.lastSelectionKey && (this.lastSelectionKey = l, this.dispatchEvent(
        new CustomEvent("selectionchange", {
          detail: { nodeIds: r.selection.nodeIds, edgeIds: r.selection.edgeIds }
        })
      )), this.changeTimer && window.clearTimeout(this.changeTimer), this.changeTimer = window.setTimeout(() => {
        const o = Bi({ nodes: r.nodes, edges: r.edges });
        this.dispatchEvent(new CustomEvent("change", { detail: { json: o } }));
      }, 200);
    });
  }
  disconnectedCallback() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0), this.root && (this.root.unmount(), this.root = void 0), this.container && this.container.parentNode && (this.container.parentNode.removeChild(this.container), this.container = void 0);
  }
  // Public API
  getJSON() {
    const t = zn.getState().diagram;
    return Bi({ nodes: t.nodes, edges: t.edges });
  }
  setJSON(t) {
    try {
      const n = id(t);
      zn.dispatch(ed(n));
    } catch (n) {
      const r = n instanceof Error ? n.message : String(n);
      this.dispatchEvent(new CustomEvent("error", { detail: { message: "Invalid JSON", details: r } }));
    }
  }
}
const Sa = "workflow-editor";
customElements.get(Sa) || customElements.define(Sa, Tm);
export {
  Tm as WorkflowEditorElement
};
//# sourceMappingURL=workflow-editor.es.js.map
