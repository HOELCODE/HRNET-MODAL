import re from "react";
var _ = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function te() {
  if ($) return x;
  $ = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function d(p, s, l) {
    var b = null;
    if (l !== void 0 && (b = "" + l), s.key !== void 0 && (b = "" + s.key), "key" in s) {
      l = {};
      for (var E in s)
        E !== "key" && (l[E] = s[E]);
    } else l = s;
    return s = l.ref, {
      $$typeof: a,
      type: p,
      key: b,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return x.Fragment = f, x.jsx = d, x.jsxs = d, x;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case A:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function d(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), f(e);
      }
    }
    function p(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === A)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = a(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function z(e, r, t, n, u, c, g, j) {
      return t = c.ref, e = {
        $$typeof: S,
        type: e,
        key: r,
        props: c,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, t, n, u, c, g, j) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (K(o)) {
            for (n = 0; n < o.length; n++)
              O(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(o);
      if (P.call(r, "key")) {
        o = a(e);
        var m = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", I[o + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          m,
          o
        ), I[o + n] = !0);
      }
      if (o = null, t !== void 0 && (d(t), o = "" + t), b(r) && (d(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return o && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), z(
        e,
        o,
        c,
        u,
        s(),
        t,
        g,
        j
      );
    }
    function O(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var v = re, S = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), h = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, K = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = v["react-stack-bottom-frame"].bind(
      v,
      l
    )(), F = k(p(l)), I = {};
    R.Fragment = T, R.jsx = function(e, r, t, n, u) {
      var c = 1e4 > h.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !1,
        n,
        u,
        c ? Error("react-stack-top-frame") : Y,
        c ? k(p(e)) : F
      );
    }, R.jsxs = function(e, r, t, n, u) {
      var c = 1e4 > h.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !0,
        n,
        u,
        c ? Error("react-stack-top-frame") : Y,
        c ? k(p(e)) : F
      );
    };
  }()), R;
}
var L;
function oe() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? _.exports = te() : _.exports = ne()), _.exports;
}
var i = oe();
const ae = () => {
  const a = document.querySelector(".modal"), f = document.querySelector(".modal-container");
  document.querySelector(".close").addEventListener("click", () => {
    f.style.display = "none", a.style.display = "none", a.classList.remove("modal-showed");
  });
}, le = ({ text: a }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("div", { className: "modal-container", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("div", { className: "cross-container", onClick: ae, children: /* @__PURE__ */ i.jsx("span", { className: "close", children: "×" }) }),
    /* @__PURE__ */ i.jsx("div", { className: "modal-content", children: /* @__PURE__ */ i.jsx("h2", { children: a }) })
  ] }) }),
  /* @__PURE__ */ i.jsx("style", { children: `

                    .modal-container {
                    display: none;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    transition: filter 0.3s ease;
                    }

                    .modal {
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                    border-radius: 10px;
                    padding: 15px 70px;
                    position: relative;
                    width: 154px;
                    display: none;
                    background-color: #fff;
                    z-index: 1000;
                    }

                    .modal-content {
                        display: flex;;
                        flex-direction: column;
                        align-items: center;
                    }

                    .modal-showed {
                    top: 50%;
                    position: fixed;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    z-index: 1000 !important;
                    display: block;
                    }

                    .cross-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        padding: 5px 5px;
                        background-color: #000;
                        border-radius: 50px;
                        height: 15px;
                        width: 15px;
                    }

                    .close {
                        position: absolute;
                        font-size: 16px;
                        cursor: pointer;
                        color: #fff;
                    }

                    .modal h2 {
                        font-size: 16px;
                        padding: 0;
                        margin: 0;
                    }
                ` })
] });
export {
  le as Modal
};
