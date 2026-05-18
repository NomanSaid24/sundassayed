const g2 = () => Promise.resolve().then(() => m2), { Fragment: J, jsx: s, jsxs: p } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Ao(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.props && "_fgT" in e.props;
}
function Pt(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function zo(e) {
  const { _fgT: t, _fgS: i, _fgB: n, _fgD: a, ...o } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...o,
    key: e.key
  }, o.children);
}
function ri(e) {
  return Ao(e) ? zo(e) : Pt(e) ? e.props.children : e;
}
const zt = globalThis.__GLOBALS__.React.Children, Dl = {
  map(e, t, i) {
    return zt.map(e, (n, a) => {
      const o = ri(n);
      return Pt(n) ? null : t.call(i, o, a);
    });
  },
  forEach(e, t, i) {
    zt.forEach(e, (n, a) => {
      if (Pt(n))
        return;
      const o = ri(n);
      t.call(i, o, a);
    });
  },
  count(e) {
    let t = 0;
    return zt.forEach(e, (i) => {
      Pt(i) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return zt.forEach(e, (i) => {
      Pt(i) || t.push(ri(i));
    }), t;
  },
  only(e) {
    const t = zt.only(e);
    return ri(t);
  }
}, Wa = globalThis.__GLOBALS__.React.cloneElement, Pl = (e, ...t) => Ao(e) ? Wa(zo(e), ...t) : Wa(e, ...t);
({
  ...globalThis.__GLOBALS__.React
});
const { Component: Eo, createContext: Pe, createElement: Rl, createFactory: h2, createRef: y2, forwardRef: jl, Fragment: Bo, isValidElement: ql, lazy: x2, memo: v2, Profiler: b2, PureComponent: w2, startTransition: S2, StrictMode: C2, Suspense: T2, use: I2, useCallback: oe, useContext: O, useDebugValue: F2, useDeferredValue: k2, useEffect: B, useId: Jn, useImperativeHandle: L2, useInsertionEffect: ea, useLayoutEffect: Hl, useMemo: ot, useReducer: A2, useRef: I, useState: T, useSyncExternalStore: z2, useTransition: E2, version: B2 } = globalThis.__GLOBALS__.React, ta = Pe({});
function Ft(e) {
  const t = I(null);
  return t.current === null && (t.current = e()), t.current;
}
const ia = typeof window < "u", Qi = ia ? Hl : B, Ji = /* @__PURE__ */ Pe(null);
function na(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function aa(e, t) {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}
const Ie = (e, t, i) => i > t ? t : i < e ? e : i;
let Gt = () => {
};
const Le = {}, Mo = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Vo(e) {
  return typeof e == "object" && e !== null;
}
const Do = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function sa(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ae = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Wl = (e, t) => (i) => t(e(i)), ii = (...e) => e.reduce(Wl), Ct = /* @__NO_SIDE_EFFECTS__ */ (e, t, i) => {
  const n = t - e;
  return n === 0 ? 1 : (i - e) / n;
};
class oa {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return na(this.subscriptions, t), () => aa(this.subscriptions, t);
  }
  notify(t, i, n) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1)
        this.subscriptions[0](t, i, n);
      else
        for (let o = 0; o < a; o++) {
          const r = this.subscriptions[o];
          r && r(t, i, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ce = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, pe = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function ra(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Po = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e, Ul = 1e-7, Ol = 12;
function Nl(e, t, i, n, a) {
  let o, r, l = 0;
  do
    r = t + (i - t) / 2, o = Po(r, n, a) - e, o > 0 ? i = r : t = r;
  while (Math.abs(o) > Ul && ++l < Ol);
  return r;
}
function ni(e, t, i, n) {
  if (e === t && i === n)
    return ae;
  const a = (o) => Nl(o, 0, 1, e, i);
  return (o) => o === 0 || o === 1 ? o : Po(a(o), t, n);
}
const Ro = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, jo = (e) => (t) => 1 - e(1 - t), qo = /* @__PURE__ */ ni(0.33, 1.53, 0.69, 0.99), la = /* @__PURE__ */ jo(qo), Ho = /* @__PURE__ */ Ro(la), Wo = (e) => (e *= 2) < 1 ? 0.5 * la(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), ca = (e) => 1 - Math.sin(Math.acos(e)), Uo = jo(ca), Oo = Ro(ca), _l = /* @__PURE__ */ ni(0.42, 0, 1, 1), Xl = /* @__PURE__ */ ni(0, 0, 0.58, 1), No = /* @__PURE__ */ ni(0.42, 0, 0.58, 1), $l = (e) => Array.isArray(e) && typeof e[0] != "number", _o = (e) => Array.isArray(e) && typeof e[0] == "number", Gl = {
  linear: ae,
  easeIn: _l,
  easeInOut: No,
  easeOut: Xl,
  circIn: ca,
  circInOut: Oo,
  circOut: Uo,
  backIn: la,
  backInOut: Ho,
  backOut: qo,
  anticipate: Wo
}, Kl = (e) => typeof e == "string", Ua = (e) => {
  if (_o(e)) {
    Gt(e.length === 4);
    const [t, i, n, a] = e;
    return ni(t, i, n, a);
  } else if (Kl(e))
    return Gl[e];
  return e;
}, li = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Zl(e, t) {
  let i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), a = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function c(u) {
    r.has(u) && (d.schedule(u), e()), u(l);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, m = !1, g = !1) => {
      const b = g && a ? i : n;
      return m && r.add(u), b.has(u) || b.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), r.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (l = u, a) {
        o = !0;
        return;
      }
      a = !0, [i, n] = [n, i], i.forEach(c), i.clear(), a = !1, o && (o = !1, d.process(u));
    }
  };
  return d;
}
const Yl = 40;
function Xo(e, t) {
  let i = !1, n = !0;
  const a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => i = !0, r = li.reduce((v, z) => (v[z] = Zl(o), v), {}), { setup: l, read: c, resolveKeyframes: d, preUpdate: u, update: m, preRender: g, render: S, postRender: b } = r, x = () => {
    const v = Le.useManualTiming ? a.timestamp : performance.now();
    i = !1, Le.useManualTiming || (a.delta = n ? 1e3 / 60 : Math.max(Math.min(v - a.timestamp, Yl), 1)), a.timestamp = v, a.isProcessing = !0, l.process(a), c.process(a), d.process(a), u.process(a), m.process(a), g.process(a), S.process(a), b.process(a), a.isProcessing = !1, i && t && (n = !1, e(x));
  }, y = () => {
    i = !0, n = !0, a.isProcessing || e(x);
  };
  return { schedule: li.reduce((v, z) => {
    const F = r[z];
    return v[z] = (E, L = !1, A = !1) => (i || y(), F.schedule(E, L, A)), v;
  }, {}), cancel: (v) => {
    for (let z = 0; z < li.length; z++)
      r[li[z]].cancel(v);
  }, state: a, steps: r };
}
const { schedule: P, cancel: ye, state: _, steps: sn } = /* @__PURE__ */ Xo(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ae, !0);
let zi;
function Ql() {
  zi = void 0;
}
const ne = {
  now: () => (zi === void 0 && ne.set(_.isProcessing || Le.useManualTiming ? _.timestamp : performance.now()), zi),
  set: (e) => {
    zi = e, queueMicrotask(Ql);
  }
}, $o = (e) => (t) => typeof t == "string" && t.startsWith(e), da = /* @__PURE__ */ $o("--"), Jl = /* @__PURE__ */ $o("var(--"), pa = (e) => Jl(e) ? ec.test(e.split("/*")[0].trim()) : !1, ec = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, kt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Kt = {
  ...kt,
  transform: (e) => Ie(0, 1, e)
}, ci = {
  ...kt,
  default: 1
}, qt = (e) => Math.round(e * 1e5) / 1e5, ua = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function tc(e) {
  return e == null;
}
const ic = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ma = (e, t) => (i) => !!(typeof i == "string" && ic.test(i) && i.startsWith(e) || t && !tc(i) && Object.prototype.hasOwnProperty.call(i, t)), Go = (e, t, i) => (n) => {
  if (typeof n != "string")
    return n;
  const [a, o, r, l] = n.match(ua);
  return {
    [e]: parseFloat(a),
    [t]: parseFloat(o),
    [i]: parseFloat(r),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, nc = (e) => Ie(0, 255, e), on = {
  ...kt,
  transform: (e) => Math.round(nc(e))
}, tt = {
  test: /* @__PURE__ */ ma("rgb", "red"),
  parse: /* @__PURE__ */ Go("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: i, alpha: n = 1 }) => "rgba(" + on.transform(e) + ", " + on.transform(t) + ", " + on.transform(i) + ", " + qt(Kt.transform(n)) + ")"
};
function ac(e) {
  let t = "", i = "", n = "", a = "";
  return e.length > 5 ? (t = e.substring(1, 3), i = e.substring(3, 5), n = e.substring(5, 7), a = e.substring(7, 9)) : (t = e.substring(1, 2), i = e.substring(2, 3), n = e.substring(3, 4), a = e.substring(4, 5), t += t, i += i, n += n, a += a), {
    red: parseInt(t, 16),
    green: parseInt(i, 16),
    blue: parseInt(n, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const Ln = {
  test: /* @__PURE__ */ ma("#"),
  parse: ac,
  transform: tt.transform
}, ai = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ee = /* @__PURE__ */ ai("deg"), Te = /* @__PURE__ */ ai("%"), k = /* @__PURE__ */ ai("px"), sc = /* @__PURE__ */ ai("vh"), oc = /* @__PURE__ */ ai("vw"), Oa = {
  ...Te,
  parse: (e) => Te.parse(e) / 100,
  transform: (e) => Te.transform(e * 100)
}, ut = {
  test: /* @__PURE__ */ ma("hsl", "hue"),
  parse: /* @__PURE__ */ Go("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: i, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Te.transform(qt(t)) + ", " + Te.transform(qt(i)) + ", " + qt(Kt.transform(n)) + ")"
}, U = {
  test: (e) => tt.test(e) || Ln.test(e) || ut.test(e),
  parse: (e) => tt.test(e) ? tt.parse(e) : ut.test(e) ? ut.parse(e) : Ln.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? tt.transform(e) : ut.transform(e),
  getAnimatableNone: (e) => {
    const t = U.parse(e);
    return t.alpha = 0, U.transform(t);
  }
}, rc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function lc(e) {
  return isNaN(e) && typeof e == "string" && (e.match(ua)?.length || 0) + (e.match(rc)?.length || 0) > 0;
}
const Ko = "number", Zo = "color", cc = "var", dc = "var(", Na = "${}", pc = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zt(e) {
  const t = e.toString(), i = [], n = {
    color: [],
    number: [],
    var: []
  }, a = [];
  let o = 0;
  const l = t.replace(pc, (c) => (U.test(c) ? (n.color.push(o), a.push(Zo), i.push(U.parse(c))) : c.startsWith(dc) ? (n.var.push(o), a.push(cc), i.push(c)) : (n.number.push(o), a.push(Ko), i.push(parseFloat(c))), ++o, Na)).split(Na);
  return { values: i, split: l, indexes: n, types: a };
}
function Yo(e) {
  return Zt(e).values;
}
function Qo(e) {
  const { split: t, types: i } = Zt(e), n = t.length;
  return (a) => {
    let o = "";
    for (let r = 0; r < n; r++)
      if (o += t[r], a[r] !== void 0) {
        const l = i[r];
        l === Ko ? o += qt(a[r]) : l === Zo ? o += U.transform(a[r]) : o += a[r];
      }
    return o;
  };
}
const uc = (e) => typeof e == "number" ? 0 : U.test(e) ? U.getAnimatableNone(e) : e;
function mc(e) {
  const t = Yo(e);
  return Qo(e)(t.map(uc));
}
const De = {
  test: lc,
  parse: Yo,
  createTransformer: Qo,
  getAnimatableNone: mc
};
function rn(e, t, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
}
function fc({ hue: e, saturation: t, lightness: i, alpha: n }) {
  e /= 360, t /= 100, i /= 100;
  let a = 0, o = 0, r = 0;
  if (!t)
    a = o = r = i;
  else {
    const l = i < 0.5 ? i * (1 + t) : i + t - i * t, c = 2 * i - l;
    a = rn(c, l, e + 1 / 3), o = rn(c, l, e), r = rn(c, l, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: n
  };
}
function qi(e, t) {
  return (i) => i > 0 ? t : e;
}
const j = (e, t, i) => e + (t - e) * i, ln = (e, t, i) => {
  const n = e * e, a = i * (t * t - n) + n;
  return a < 0 ? 0 : Math.sqrt(a);
}, gc = [Ln, tt, ut], hc = (e) => gc.find((t) => t.test(e));
function _a(e) {
  const t = hc(e);
  if (!t)
    return !1;
  let i = t.parse(e);
  return t === ut && (i = fc(i)), i;
}
const Xa = (e, t) => {
  const i = _a(e), n = _a(t);
  if (!i || !n)
    return qi(e, t);
  const a = { ...i };
  return (o) => (a.red = ln(i.red, n.red, o), a.green = ln(i.green, n.green, o), a.blue = ln(i.blue, n.blue, o), a.alpha = j(i.alpha, n.alpha, o), tt.transform(a));
}, An = /* @__PURE__ */ new Set(["none", "hidden"]);
function yc(e, t) {
  return An.has(e) ? (i) => i <= 0 ? e : t : (i) => i >= 1 ? t : e;
}
function xc(e, t) {
  return (i) => j(e, t, i);
}
function fa(e) {
  return typeof e == "number" ? xc : typeof e == "string" ? pa(e) ? qi : U.test(e) ? Xa : wc : Array.isArray(e) ? Jo : typeof e == "object" ? U.test(e) ? Xa : vc : qi;
}
function Jo(e, t) {
  const i = [...e], n = i.length, a = e.map((o, r) => fa(o)(o, t[r]));
  return (o) => {
    for (let r = 0; r < n; r++)
      i[r] = a[r](o);
    return i;
  };
}
function vc(e, t) {
  const i = { ...e, ...t }, n = {};
  for (const a in i)
    e[a] !== void 0 && t[a] !== void 0 && (n[a] = fa(e[a])(e[a], t[a]));
  return (a) => {
    for (const o in n)
      i[o] = n[o](a);
    return i;
  };
}
function bc(e, t) {
  const i = [], n = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < t.values.length; a++) {
    const o = t.types[a], r = e.indexes[o][n[o]], l = e.values[r] ?? 0;
    i[a] = l, n[o]++;
  }
  return i;
}
const wc = (e, t) => {
  const i = De.createTransformer(t), n = Zt(e), a = Zt(t);
  return n.indexes.var.length === a.indexes.var.length && n.indexes.color.length === a.indexes.color.length && n.indexes.number.length >= a.indexes.number.length ? An.has(e) && !a.values.length || An.has(t) && !n.values.length ? yc(e, t) : ii(Jo(bc(n, a), a.values), i) : qi(e, t);
};
function er(e, t, i) {
  return typeof e == "number" && typeof t == "number" && typeof i == "number" ? j(e, t, i) : fa(e)(e, t);
}
const Sc = (e) => {
  const t = ({ timestamp: i }) => e(i);
  return {
    start: (i = !0) => P.update(t, i),
    stop: () => ye(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => _.isProcessing ? _.timestamp : ne.now()
  };
}, tr = (e, t, i = 10) => {
  let n = "";
  const a = Math.max(Math.round(t / i), 2);
  for (let o = 0; o < a; o++)
    n += Math.round(e(o / (a - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
}, Hi = 2e4;
function ga(e) {
  let t = 0;
  const i = 50;
  let n = e.next(t);
  for (; !n.done && t < Hi; )
    t += i, n = e.next(t);
  return t >= Hi ? 1 / 0 : t;
}
function Cc(e, t = 100, i) {
  const n = i({ ...e, keyframes: [0, t] }), a = Math.min(ga(n), Hi);
  return {
    type: "keyframes",
    ease: (o) => n.next(a * o).value / t,
    duration: /* @__PURE__ */ pe(a)
  };
}
const Tc = 5;
function ir(e, t, i) {
  const n = Math.max(t - Tc, 0);
  return ra(i - e(n), t - n);
}
const q = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, cn = 1e-3;
function Ic({ duration: e = q.duration, bounce: t = q.bounce, velocity: i = q.velocity, mass: n = q.mass }) {
  let a, o, r = 1 - t;
  r = Ie(q.minDamping, q.maxDamping, r), e = Ie(q.minDuration, q.maxDuration, /* @__PURE__ */ pe(e)), r < 1 ? (a = (d) => {
    const u = d * r, m = u * e, g = u - i, S = zn(d, r), b = Math.exp(-m);
    return cn - g / S * b;
  }, o = (d) => {
    const m = d * r * e, g = m * i + i, S = Math.pow(r, 2) * Math.pow(d, 2) * e, b = Math.exp(-m), x = zn(Math.pow(d, 2), r);
    return (-a(d) + cn > 0 ? -1 : 1) * ((g - S) * b) / x;
  }) : (a = (d) => {
    const u = Math.exp(-d * e), m = (d - i) * e + 1;
    return -cn + u * m;
  }, o = (d) => {
    const u = Math.exp(-d * e), m = (i - d) * (e * e);
    return u * m;
  });
  const l = 5 / e, c = kc(a, o, l);
  if (e = /* @__PURE__ */ Ce(e), isNaN(c))
    return {
      stiffness: q.stiffness,
      damping: q.damping,
      duration: e
    };
  {
    const d = Math.pow(c, 2) * n;
    return {
      stiffness: d,
      damping: r * 2 * Math.sqrt(n * d),
      duration: e
    };
  }
}
const Fc = 12;
function kc(e, t, i) {
  let n = i;
  for (let a = 1; a < Fc; a++)
    n = n - e(n) / t(n);
  return n;
}
function zn(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Lc = ["duration", "bounce"], Ac = ["stiffness", "damping", "mass"];
function $a(e, t) {
  return t.some((i) => e[i] !== void 0);
}
function zc(e) {
  let t = {
    velocity: q.velocity,
    stiffness: q.stiffness,
    damping: q.damping,
    mass: q.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!$a(e, Ac) && $a(e, Lc))
    if (e.visualDuration) {
      const i = e.visualDuration, n = 2 * Math.PI / (i * 1.2), a = n * n, o = 2 * Ie(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
      t = {
        ...t,
        mass: q.mass,
        stiffness: a,
        damping: o
      };
    } else {
      const i = Ic(e);
      t = {
        ...t,
        ...i,
        mass: q.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Wi(e = q.visualDuration, t = q.bounce) {
  const i = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: n, restDelta: a } = i;
  const o = i.keyframes[0], r = i.keyframes[i.keyframes.length - 1], l = { done: !1, value: o }, { stiffness: c, damping: d, mass: u, duration: m, velocity: g, isResolvedFromDuration: S } = zc({
    ...i,
    velocity: -/* @__PURE__ */ pe(i.velocity || 0)
  }), b = g || 0, x = d / (2 * Math.sqrt(c * u)), y = r - o, C = /* @__PURE__ */ pe(Math.sqrt(c / u)), h = Math.abs(y) < 5;
  n || (n = h ? q.restSpeed.granular : q.restSpeed.default), a || (a = h ? q.restDelta.granular : q.restDelta.default);
  let v;
  if (x < 1) {
    const F = zn(C, x);
    v = (E) => {
      const L = Math.exp(-x * C * E);
      return r - L * ((b + x * C * y) / F * Math.sin(F * E) + y * Math.cos(F * E));
    };
  } else if (x === 1)
    v = (F) => r - Math.exp(-C * F) * (y + (b + C * y) * F);
  else {
    const F = C * Math.sqrt(x * x - 1);
    v = (E) => {
      const L = Math.exp(-x * C * E), A = Math.min(F * E, 300);
      return r - L * ((b + x * C * y) * Math.sinh(A) + F * y * Math.cosh(A)) / F;
    };
  }
  const z = {
    calculatedDuration: S && m || null,
    next: (F) => {
      const E = v(F);
      if (S)
        l.done = F >= m;
      else {
        let L = F === 0 ? b : 0;
        x < 1 && (L = F === 0 ? /* @__PURE__ */ Ce(b) : ir(v, F, E));
        const A = Math.abs(L) <= n, H = Math.abs(r - E) <= a;
        l.done = A && H;
      }
      return l.value = l.done ? r : E, l;
    },
    toString: () => {
      const F = Math.min(ga(z), Hi), E = tr((L) => z.next(F * L).value, F, 30);
      return F + "ms " + E;
    },
    toTransition: () => {
    }
  };
  return z;
}
Wi.applyToOptions = (e) => {
  const t = Cc(e, 100, Wi);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Ce(t.duration), e.type = "keyframes", e;
};
function En({ keyframes: e, velocity: t = 0, power: i = 0.8, timeConstant: n = 325, bounceDamping: a = 10, bounceStiffness: o = 500, modifyTarget: r, min: l, max: c, restDelta: d = 0.5, restSpeed: u }) {
  const m = e[0], g = {
    done: !1,
    value: m
  }, S = (A) => l !== void 0 && A < l || c !== void 0 && A > c, b = (A) => l === void 0 ? c : c === void 0 || Math.abs(l - A) < Math.abs(c - A) ? l : c;
  let x = i * t;
  const y = m + x, C = r === void 0 ? y : r(y);
  C !== y && (x = C - m);
  const h = (A) => -x * Math.exp(-A / n), v = (A) => C + h(A), z = (A) => {
    const H = h(A), X = v(A);
    g.done = Math.abs(H) <= d, g.value = g.done ? C : X;
  };
  let F, E;
  const L = (A) => {
    S(g.value) && (F = A, E = Wi({
      keyframes: [g.value, b(g.value)],
      velocity: ir(v, A, g.value),
      // TODO: This should be passing * 1000
      damping: a,
      stiffness: o,
      restDelta: d,
      restSpeed: u
    }));
  };
  return L(0), {
    calculatedDuration: null,
    next: (A) => {
      let H = !1;
      return !E && F === void 0 && (H = !0, z(A), L(A)), F !== void 0 && A >= F ? E.next(A - F) : (!H && z(A), g);
    }
  };
}
function Ec(e, t, i) {
  const n = [], a = i || Le.mix || er, o = e.length - 1;
  for (let r = 0; r < o; r++) {
    let l = a(e[r], e[r + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[r] || ae : t;
      l = ii(c, l);
    }
    n.push(l);
  }
  return n;
}
function ha(e, t, { clamp: i = !0, ease: n, mixer: a } = {}) {
  const o = e.length;
  if (Gt(o === t.length), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const r = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = Ec(t, n, a), c = l.length, d = (u) => {
    if (r && u < e[0])
      return t[0];
    let m = 0;
    if (c > 1)
      for (; m < e.length - 2 && !(u < e[m + 1]); m++)
        ;
    const g = /* @__PURE__ */ Ct(e[m], e[m + 1], u);
    return l[m](g);
  };
  return i ? (u) => d(Ie(e[0], e[o - 1], u)) : d;
}
function Bc(e, t) {
  const i = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const a = /* @__PURE__ */ Ct(0, t, n);
    e.push(j(i, 1, a));
  }
}
function nr(e) {
  const t = [0];
  return Bc(t, e.length - 1), t;
}
function Mc(e, t) {
  return e.map((i) => i * t);
}
function Vc(e, t) {
  return e.map(() => t || No).splice(0, e.length - 1);
}
function Ht({ duration: e = 300, keyframes: t, times: i, ease: n = "easeInOut" }) {
  const a = $l(n) ? n.map(Ua) : Ua(n), o = {
    done: !1,
    value: t[0]
  }, r = Mc(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === t.length ? i : nr(t),
    e
  ), l = ha(r, t, {
    ease: Array.isArray(a) ? a : Vc(t, a)
  });
  return {
    calculatedDuration: e,
    next: (c) => (o.value = l(c), o.done = c >= e, o)
  };
}
const Dc = (e) => e !== null;
function ya(e, { repeat: t, repeatType: i = "loop" }, n, a = 1) {
  const o = e.filter(Dc), l = a < 0 || t && i !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !l || n === void 0 ? o[l] : n;
}
const Pc = {
  decay: En,
  inertia: En,
  tween: Ht,
  keyframes: Ht,
  spring: Wi
};
function ar(e) {
  typeof e.type == "string" && (e.type = Pc[e.type]);
}
class xa {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, i) {
    return this.finished.then(t, i);
  }
}
const Rc = (e) => e / 100;
class en extends xa {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: i } = this.options;
      i && i.updatedAt !== ne.now() && this.tick(ne.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    ar(t);
    const { type: i = Ht, repeat: n = 0, repeatDelay: a = 0, repeatType: o, velocity: r = 0 } = t;
    let { keyframes: l } = t;
    const c = i || Ht;
    c !== Ht && typeof l[0] != "number" && (this.mixKeyframes = ii(Rc, er(l[0], l[1])), l = [0, 100]);
    const d = c({ ...t, keyframes: l });
    o === "mirror" && (this.mirroredGenerator = c({
      ...t,
      keyframes: [...l].reverse(),
      velocity: -r
    })), d.calculatedDuration === null && (d.calculatedDuration = ga(d));
    const { calculatedDuration: u } = d;
    this.calculatedDuration = u, this.resolvedDuration = u + a, this.totalDuration = this.resolvedDuration * (n + 1) - a, this.generator = d;
  }
  updateTime(t) {
    const i = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i;
  }
  tick(t, i = !1) {
    const { generator: n, totalDuration: a, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: l, calculatedDuration: c } = this;
    if (this.startTime === null)
      return n.next(0);
    const { delay: d = 0, keyframes: u, repeat: m, repeatType: g, repeatDelay: S, type: b, onUpdate: x, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - a / this.speed, this.startTime)), i ? this.currentTime = t : this.updateTime(t);
    const C = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), h = this.playbackSpeed >= 0 ? C < 0 : C > a;
    this.currentTime = Math.max(C, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = a);
    let v = this.currentTime, z = n;
    if (m) {
      const A = Math.min(this.currentTime, a) / l;
      let H = Math.floor(A), X = A % 1;
      !X && A >= 1 && (X = 1), X === 1 && H--, H = Math.min(H, m + 1), !!(H % 2) && (g === "reverse" ? (X = 1 - X, S && (X -= S / l)) : g === "mirror" && (z = r)), v = Ie(0, 1, X) * l;
    }
    const F = h ? { done: !1, value: u[0] } : z.next(v);
    o && (F.value = o(F.value));
    let { done: E } = F;
    !h && c !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
    const L = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return L && b !== En && (F.value = ya(u, this.options, y, this.speed)), x && x(F.value), L && this.finish(), F;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, i) {
    return this.finished.then(t, i);
  }
  get duration() {
    return /* @__PURE__ */ pe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ pe(t);
  }
  get time() {
    return /* @__PURE__ */ pe(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Ce(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(ne.now());
    const i = this.playbackSpeed !== t;
    this.playbackSpeed = t, i && (this.time = /* @__PURE__ */ pe(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = Sc, startTime: i } = this.options;
    this.driver || (this.driver = t((a) => this.tick(a))), this.options.onPlay?.();
    const n = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = i ?? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ne.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function jc(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const it = (e) => e * 180 / Math.PI, Bn = (e) => {
  const t = it(Math.atan2(e[1], e[0]));
  return Mn(t);
}, qc = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Bn,
  rotateZ: Bn,
  skewX: (e) => it(Math.atan(e[1])),
  skewY: (e) => it(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Mn = (e) => (e = e % 360, e < 0 && (e += 360), e), Ga = Bn, Ka = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Za = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Hc = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Ka,
  scaleY: Za,
  scale: (e) => (Ka(e) + Za(e)) / 2,
  rotateX: (e) => Mn(it(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Mn(it(Math.atan2(-e[2], e[0]))),
  rotateZ: Ga,
  rotate: Ga,
  skewX: (e) => it(Math.atan(e[4])),
  skewY: (e) => it(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Vn(e) {
  return e.includes("scale") ? 1 : 0;
}
function Dn(e, t) {
  if (!e || e === "none")
    return Vn(t);
  const i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, a;
  if (i)
    n = Hc, a = i;
  else {
    const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    n = qc, a = l;
  }
  if (!a)
    return Vn(t);
  const o = n[t], r = a[1].split(",").map(Uc);
  return typeof o == "function" ? o(r) : r[o];
}
const Wc = (e, t) => {
  const { transform: i = "none" } = getComputedStyle(e);
  return Dn(i, t);
};
function Uc(e) {
  return parseFloat(e.trim());
}
const Lt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], At = new Set(Lt), Ya = (e) => e === kt || e === k, Oc = /* @__PURE__ */ new Set(["x", "y", "z"]), Nc = Lt.filter((e) => !Oc.has(e));
function _c(e) {
  const t = [];
  return Nc.forEach((i) => {
    const n = e.getValue(i);
    n !== void 0 && (t.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
  }), t;
}
const nt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(i),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(i),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Dn(t, "x"),
  y: (e, { transform: t }) => Dn(t, "y")
};
nt.translateX = nt.x;
nt.translateY = nt.y;
const at = /* @__PURE__ */ new Set();
let Pn = !1, Rn = !1, jn = !1;
function sr() {
  if (Rn) {
    const e = Array.from(at).filter((n) => n.needsMeasurement), t = new Set(e.map((n) => n.element)), i = /* @__PURE__ */ new Map();
    t.forEach((n) => {
      const a = _c(n);
      a.length && (i.set(n, a), n.render());
    }), e.forEach((n) => n.measureInitialState()), t.forEach((n) => {
      n.render();
      const a = i.get(n);
      a && a.forEach(([o, r]) => {
        n.getValue(o)?.set(r);
      });
    }), e.forEach((n) => n.measureEndState()), e.forEach((n) => {
      n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
    });
  }
  Rn = !1, Pn = !1, at.forEach((e) => e.complete(jn)), at.clear();
}
function or() {
  at.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Rn = !0);
  });
}
function Xc() {
  jn = !0, or(), sr(), jn = !1;
}
class va {
  constructor(t, i, n, a, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = i, this.name = n, this.motionValue = a, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (at.add(this), Pn || (Pn = !0, P.read(or), P.resolveKeyframes(sr))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: i, element: n, motionValue: a } = this;
    if (t[0] === null) {
      const o = a?.get(), r = t[t.length - 1];
      if (o !== void 0)
        t[0] = o;
      else if (n && i) {
        const l = n.readValue(i, r);
        l != null && (t[0] = l);
      }
      t[0] === void 0 && (t[0] = r), a && o === void 0 && a.set(t[0]);
    }
    jc(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), at.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (at.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const $c = (e) => e.startsWith("--");
function Gc(e, t, i) {
  $c(t) ? e.style.setProperty(t, i) : e.style[t] = i;
}
const rr = /* @__PURE__ */ sa(() => window.ScrollTimeline !== void 0), Kc = {};
function Zc(e, t) {
  const i = /* @__PURE__ */ sa(e);
  return () => Kc[t] ?? i();
}
const lr = /* @__PURE__ */ Zc(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Rt = ([e, t, i, n]) => `cubic-bezier(${e}, ${t}, ${i}, ${n})`, Qa = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Rt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Rt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Rt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Rt([0.33, 1.53, 0.69, 0.99])
};
function cr(e, t) {
  if (e)
    return typeof e == "function" ? lr() ? tr(e, t) : "ease-out" : _o(e) ? Rt(e) : Array.isArray(e) ? e.map((i) => cr(i, t) || Qa.easeOut) : Qa[e];
}
function Yc(e, t, i, { delay: n = 0, duration: a = 300, repeat: o = 0, repeatType: r = "loop", ease: l = "easeOut", times: c } = {}, d = void 0) {
  const u = {
    [t]: i
  };
  c && (u.offset = c);
  const m = cr(l, a);
  Array.isArray(m) && (u.easing = m);
  const g = {
    delay: n,
    duration: a,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return d && (g.pseudoElement = d), e.animate(u, g);
}
function dr(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Qc({ type: e, ...t }) {
  return dr(e) && lr() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Jc extends xa {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: i, name: n, keyframes: a, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: l, onComplete: c } = t;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = t, Gt(typeof t.type != "string");
    const d = Qc(t);
    this.animation = Yc(i, n, a, d, o), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const u = ya(a, this.options, l, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : Gc(i, n, u), this.animation.cancel();
      }
      c?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ pe(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ pe(t);
  }
  get time() {
    return /* @__PURE__ */ pe(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ce(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && rr() ? (this.animation.timeline = t, ae) : i(this);
  }
}
const pr = {
  anticipate: Wo,
  backInOut: Ho,
  circInOut: Oo
};
function ed(e) {
  return e in pr;
}
function td(e) {
  typeof e.ease == "string" && ed(e.ease) && (e.ease = pr[e.ease]);
}
const Ja = 10;
class id extends Jc {
  constructor(t) {
    td(t), ar(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: i, onUpdate: n, onComplete: a, element: o, ...r } = this.options;
    if (!i)
      return;
    if (t !== void 0) {
      i.set(t);
      return;
    }
    const l = new en({
      ...r,
      autoplay: !1
    }), c = /* @__PURE__ */ Ce(this.finishedTime ?? this.time);
    i.setWithVelocity(l.sample(c - Ja).value, l.sample(c).value, Ja), l.stop();
  }
}
const es = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(De.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function nd(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let i = 0; i < e.length; i++)
    if (e[i] !== t)
      return !0;
}
function ad(e, t, i, n) {
  const a = e[0];
  if (a === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], r = es(a, t), l = es(o, t);
  return !r || !l ? !1 : nd(e) || (i === "spring" || dr(i)) && n;
}
function qn(e) {
  e.duration = 0, e.type = "keyframes";
}
const sd = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), od = /* @__PURE__ */ sa(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function rd(e) {
  const { motionValue: t, name: i, repeatDelay: n, repeatType: a, damping: o, type: r } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: d } = t.owner.getProps();
  return od() && i && sd.has(i) && (i !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !n && a !== "mirror" && o !== 0 && r !== "inertia";
}
const ld = 40;
class cd extends xa {
  constructor({ autoplay: t = !0, delay: i = 0, type: n = "keyframes", repeat: a = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: l, name: c, motionValue: d, element: u, ...m }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = ne.now();
    const g = {
      autoplay: t,
      delay: i,
      type: n,
      repeat: a,
      repeatDelay: o,
      repeatType: r,
      name: c,
      motionValue: d,
      element: u,
      ...m
    }, S = u?.KeyframeResolver || va;
    this.keyframeResolver = new S(l, (b, x, y) => this.onKeyframesResolved(b, x, g, !y), c, d, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, i, n, a) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: l, delay: c, isHandoff: d, onUpdate: u } = n;
    this.resolvedAt = ne.now(), ad(t, o, r, l) || ((Le.instantAnimations || !c) && u?.(ya(t, n, i)), t[0] = t[t.length - 1], qn(n), n.repeat = 0);
    const g = {
      startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > ld ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: i,
      ...n,
      keyframes: t
    }, S = !d && rd(g) ? new id({
      ...g,
      element: g.motionValue.owner.current
    }) : new en(g);
    S.finished.then(() => this.notifyFinished()).catch(ae), this.pendingTimeline && (this.stopTimeline = S.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = S;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, i) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Xc()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const dd = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function pd(e) {
  const t = dd.exec(e);
  if (!t)
    return [,];
  const [, i, n, a] = t;
  return [`--${i ?? n}`, a];
}
function ur(e, t, i = 1) {
  const [n, a] = pd(e);
  if (!n)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(n);
  if (o) {
    const r = o.trim();
    return Mo(r) ? parseFloat(r) : r;
  }
  return pa(a) ? ur(a, t, i + 1) : a;
}
function ba(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const mr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Lt
]), ud = {
  test: (e) => e === "auto",
  parse: (e) => e
}, fr = (e) => (t) => t.test(e), gr = [kt, k, Te, Ee, oc, sc, ud], ts = (e) => gr.find(fr(e));
function md(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Do(e) : !0;
}
const fd = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function gd(e) {
  const [t, i] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = i.match(ua) || [];
  if (!n)
    return e;
  const a = i.replace(n, "");
  let o = fd.has(t) ? 1 : 0;
  return n !== i && (o *= 100), t + "(" + o + a + ")";
}
const hd = /\b([a-z-]*)\(.*?\)/gu, Hn = {
  ...De,
  getAnimatableNone: (e) => {
    const t = e.match(hd);
    return t ? t.map(gd).join(" ") : e;
  }
}, is = {
  ...kt,
  transform: Math.round
}, yd = {
  rotate: Ee,
  rotateX: Ee,
  rotateY: Ee,
  rotateZ: Ee,
  scale: ci,
  scaleX: ci,
  scaleY: ci,
  scaleZ: ci,
  skew: Ee,
  skewX: Ee,
  skewY: Ee,
  distance: k,
  translateX: k,
  translateY: k,
  translateZ: k,
  x: k,
  y: k,
  z: k,
  perspective: k,
  transformPerspective: k,
  opacity: Kt,
  originX: Oa,
  originY: Oa,
  originZ: k
}, wa = {
  // Border props
  borderWidth: k,
  borderTopWidth: k,
  borderRightWidth: k,
  borderBottomWidth: k,
  borderLeftWidth: k,
  borderRadius: k,
  radius: k,
  borderTopLeftRadius: k,
  borderTopRightRadius: k,
  borderBottomRightRadius: k,
  borderBottomLeftRadius: k,
  // Positioning props
  width: k,
  maxWidth: k,
  height: k,
  maxHeight: k,
  top: k,
  right: k,
  bottom: k,
  left: k,
  // Spacing props
  padding: k,
  paddingTop: k,
  paddingRight: k,
  paddingBottom: k,
  paddingLeft: k,
  margin: k,
  marginTop: k,
  marginRight: k,
  marginBottom: k,
  marginLeft: k,
  // Misc
  backgroundPositionX: k,
  backgroundPositionY: k,
  ...yd,
  zIndex: is,
  // SVG
  fillOpacity: Kt,
  strokeOpacity: Kt,
  numOctaves: is
}, xd = {
  ...wa,
  // Color props
  color: U,
  backgroundColor: U,
  outlineColor: U,
  fill: U,
  stroke: U,
  // Border props
  borderColor: U,
  borderTopColor: U,
  borderRightColor: U,
  borderBottomColor: U,
  borderLeftColor: U,
  filter: Hn,
  WebkitFilter: Hn
}, hr = (e) => xd[e];
function yr(e, t) {
  let i = hr(e);
  return i !== Hn && (i = De), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0;
}
const vd = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function bd(e, t, i) {
  let n = 0, a;
  for (; n < e.length && !a; ) {
    const o = e[n];
    typeof o == "string" && !vd.has(o) && Zt(o).values.length && (a = e[n]), n++;
  }
  if (a && i)
    for (const o of t)
      e[o] = yr(i, a);
}
class wd extends va {
  constructor(t, i, n, a, o) {
    super(t, i, n, a, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: i, name: n } = this;
    if (!i || !i.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && (d = d.trim(), pa(d))) {
        const u = ur(d, i.current);
        u !== void 0 && (t[c] = u), c === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !mr.has(n) || t.length !== 2)
      return;
    const [a, o] = t, r = ts(a), l = ts(o);
    if (r !== l)
      if (Ya(r) && Ya(l))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else nt[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: i } = this, n = [];
    for (let a = 0; a < t.length; a++)
      (t[a] === null || md(t[a])) && n.push(a);
    n.length && bd(t, n, i);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: i, name: n } = this;
    if (!t || !t.current)
      return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = nt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i[0] = this.measuredOrigin;
    const a = i[i.length - 1];
    a !== void 0 && t.getValue(n, a).jump(a, !1);
  }
  measureEndState() {
    const { element: t, name: i, unresolvedKeyframes: n } = this;
    if (!t || !t.current)
      return;
    const a = t.getValue(i);
    a && a.jump(this.measuredOrigin, !1);
    const o = n.length - 1, r = n[o];
    n[o] = nt[i](t.measureViewportBox(), window.getComputedStyle(t.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([l, c]) => {
      t.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Sa(e, t, i) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    const a = document.querySelectorAll(e);
    return a ? Array.from(a) : [];
  }
  return Array.from(e);
}
const xr = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Ca(e) {
  return Vo(e) && "offsetHeight" in e;
}
const ns = 30, Sd = (e) => !isNaN(parseFloat(e)), Wt = {
  current: void 0
};
class Cd {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, i = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n) => {
      const a = ne.now();
      if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = i.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = ne.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Sd(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, i) {
    this.events[t] || (this.events[t] = new oa());
    const n = this.events[t].add(i);
    return t === "change" ? () => {
      n(), P.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, i) {
    this.passiveEffect = t, this.stopPassiveEffect = i;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, i, n) {
    this.set(i), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, i = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Wt.current && Wt.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = ne.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ns)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, ns);
    return ra(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = t(i), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function he(e, t) {
  return new Cd(e, t);
}
const { schedule: Ta } = /* @__PURE__ */ Xo(queueMicrotask, !1), fe = {
  x: !1,
  y: !1
};
function vr() {
  return fe.x || fe.y;
}
function Td(e) {
  return e === "x" || e === "y" ? fe[e] ? null : (fe[e] = !0, () => {
    fe[e] = !1;
  }) : fe.x || fe.y ? null : (fe.x = fe.y = !0, () => {
    fe.x = fe.y = !1;
  });
}
function br(e, t) {
  const i = Sa(e), n = new AbortController(), a = {
    passive: !0,
    ...t,
    signal: n.signal
  };
  return [i, a, () => n.abort()];
}
function as(e) {
  return !(e.pointerType === "touch" || vr());
}
function Id(e, t, i = {}) {
  const [n, a, o] = br(e, i), r = (l) => {
    if (!as(l))
      return;
    const { target: c } = l, d = t(c, l);
    if (typeof d != "function" || !c)
      return;
    const u = (m) => {
      as(m) && (d(m), c.removeEventListener("pointerleave", u));
    };
    c.addEventListener("pointerleave", u, a);
  };
  return n.forEach((l) => {
    l.addEventListener("pointerenter", r, a);
  }), o;
}
const wr = (e, t) => t ? e === t ? !0 : wr(e, t.parentElement) : !1, Ia = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Fd = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function kd(e) {
  return Fd.has(e.tagName) || e.tabIndex !== -1;
}
const Ei = /* @__PURE__ */ new WeakSet();
function ss(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function dn(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Ld = (e, t) => {
  const i = e.currentTarget;
  if (!i)
    return;
  const n = ss(() => {
    if (Ei.has(i))
      return;
    dn(i, "down");
    const a = ss(() => {
      dn(i, "up");
    }), o = () => dn(i, "cancel");
    i.addEventListener("keyup", a, t), i.addEventListener("blur", o, t);
  });
  i.addEventListener("keydown", n, t), i.addEventListener("blur", () => i.removeEventListener("keydown", n), t);
};
function os(e) {
  return Ia(e) && !vr();
}
function Ad(e, t, i = {}) {
  const [n, a, o] = br(e, i), r = (l) => {
    const c = l.currentTarget;
    if (!os(l))
      return;
    Ei.add(c);
    const d = t(c, l), u = (S, b) => {
      window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", g), Ei.has(c) && Ei.delete(c), os(S) && typeof d == "function" && d(S, { success: b });
    }, m = (S) => {
      u(S, c === window || c === document || i.useGlobalTarget || wr(c, S.target));
    }, g = (S) => {
      u(S, !1);
    };
    window.addEventListener("pointerup", m, a), window.addEventListener("pointercancel", g, a);
  };
  return n.forEach((l) => {
    (i.useGlobalTarget ? window : l).addEventListener("pointerdown", r, a), Ca(l) && (l.addEventListener("focus", (d) => Ld(d, a)), !kd(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0));
  }), o;
}
function Fa(e) {
  return Vo(e) && "ownerSVGElement" in e;
}
const Bi = /* @__PURE__ */ new WeakMap();
let Mi;
const Sr = (e, t, i) => (n, a) => a && a[0] ? a[0][e + "Size"] : Fa(n) && "getBBox" in n ? n.getBBox()[t] : n[i], zd = /* @__PURE__ */ Sr("inline", "width", "offsetWidth"), Ed = /* @__PURE__ */ Sr("block", "height", "offsetHeight");
function Bd({ target: e, borderBoxSize: t }) {
  Bi.get(e)?.forEach((i) => {
    i(e, {
      get width() {
        return zd(e, t);
      },
      get height() {
        return Ed(e, t);
      }
    });
  });
}
function Md(e) {
  e.forEach(Bd);
}
function Vd() {
  typeof ResizeObserver > "u" || (Mi = new ResizeObserver(Md));
}
function Dd(e, t) {
  Mi || Vd();
  const i = Sa(e);
  return i.forEach((n) => {
    let a = Bi.get(n);
    a || (a = /* @__PURE__ */ new Set(), Bi.set(n, a)), a.add(t), Mi?.observe(n);
  }), () => {
    i.forEach((n) => {
      const a = Bi.get(n);
      a?.delete(t), a?.size || Mi?.unobserve(n);
    });
  };
}
const Vi = /* @__PURE__ */ new Set();
let mt;
function Pd() {
  mt = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Vi.forEach((t) => t(e));
  }, window.addEventListener("resize", mt);
}
function Rd(e) {
  return Vi.add(e), mt || Pd(), () => {
    Vi.delete(e), !Vi.size && typeof mt == "function" && (window.removeEventListener("resize", mt), mt = void 0);
  };
}
function jd(e, t) {
  return typeof e == "function" ? Rd(e) : Dd(e, t);
}
function Cr(e, t) {
  let i;
  const n = () => {
    const { currentTime: a } = t, r = (a === null ? 0 : a.value) / 100;
    i !== r && e(r), i = r;
  };
  return P.preUpdate(n, !0), () => ye(n);
}
function qd(e) {
  return Fa(e) && e.tagName === "svg";
}
function Hd(...e) {
  const t = !Array.isArray(e[0]), i = t ? 0 : -1, n = e[0 + i], a = e[1 + i], o = e[2 + i], r = e[3 + i], l = ha(a, o, r);
  return t ? l(n) : l;
}
const N = (e) => !!(e && e.getVelocity);
function Wd(e, t, i) {
  const n = e.get();
  let a = null, o = n, r;
  const l = typeof n == "string" ? n.replace(/[\d.-]/g, "") : void 0, c = () => {
    a && (a.stop(), a = null);
  }, d = () => {
    c(), a = new en({
      keyframes: [ls(e.get()), ls(o)],
      velocity: e.getVelocity(),
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...i,
      onUpdate: r
    });
  };
  if (e.attach((u, m) => {
    o = u, r = (g) => m(rs(g, l)), P.postRender(d);
  }, c), N(t)) {
    const u = t.on("change", (g) => e.set(rs(g, l))), m = e.on("destroy", u);
    return () => {
      u(), m();
    };
  }
  return c;
}
function rs(e, t) {
  return t ? e + t : e;
}
function ls(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
const Ud = [...gr, U, De], Od = (e) => Ud.find(fr(e)), si = Pe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function cs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Nd(...e) {
  return (t) => {
    let i = !1;
    const n = e.map((a) => {
      const o = cs(a, t);
      return !i && typeof o == "function" && (i = !0), o;
    });
    if (i)
      return () => {
        for (let a = 0; a < n.length; a++) {
          const o = n[a];
          typeof o == "function" ? o() : cs(e[a], null);
        }
      };
  };
}
function _d(...e) {
  return oe(Nd(...e), e);
}
class Xd extends Eo {
  getSnapshotBeforeUpdate(t) {
    const i = this.props.childRef.current;
    if (i && t.isPresent && !this.props.isPresent) {
      const n = i.offsetParent, a = Ca(n) && n.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = i.offsetHeight || 0, o.width = i.offsetWidth || 0, o.top = i.offsetTop, o.left = i.offsetLeft, o.right = a - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function $d({ children: e, isPresent: t, anchorX: i, root: n }) {
  const a = Jn(), o = I(null), r = I({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: l } = O(si), c = _d(o, e?.ref);
  return ea(() => {
    const { width: d, height: u, top: m, left: g, right: S } = r.current;
    if (t || !o.current || !d || !u)
      return;
    const b = i === "left" ? `left: ${g}` : `right: ${S}`;
    o.current.dataset.motionPopId = a;
    const x = document.createElement("style");
    l && (x.nonce = l);
    const y = n ?? document.head;
    return y.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${u}px !important;
            ${b}px !important;
            top: ${m}px !important;
          }
        `), () => {
      y.contains(x) && y.removeChild(x);
    };
  }, [t]), s(Xd, { isPresent: t, childRef: o, sizeRef: r, children: Pl(e, { ref: c }) });
}
const Gd = ({ children: e, initial: t, isPresent: i, onExitComplete: n, custom: a, presenceAffectsLayout: o, mode: r, anchorX: l, root: c }) => {
  const d = Ft(Kd), u = Jn();
  let m = !0, g = ot(() => (m = !1, {
    id: u,
    initial: t,
    isPresent: i,
    custom: a,
    onExitComplete: (S) => {
      d.set(S, !0);
      for (const b of d.values())
        if (!b)
          return;
      n && n();
    },
    register: (S) => (d.set(S, !1), () => d.delete(S))
  }), [i, d, n]);
  return o && m && (g = { ...g }), ot(() => {
    d.forEach((S, b) => d.set(b, !1));
  }, [i]), B(() => {
    !i && !d.size && n && n();
  }, [i]), r === "popLayout" && (e = s($d, { isPresent: i, anchorX: l, root: c, children: e })), s(Ji.Provider, { value: g, children: e });
};
function Kd() {
  return /* @__PURE__ */ new Map();
}
function Tr(e = !0) {
  const t = O(Ji);
  if (t === null)
    return [!0, null];
  const { isPresent: i, onExitComplete: n, register: a } = t, o = Jn();
  B(() => {
    if (e)
      return a(o);
  }, [e]);
  const r = oe(() => e && n && n(o), [o, n, e]);
  return !i && n ? [!1, r] : [!0];
}
const di = (e) => e.key || "";
function ds(e) {
  const t = [];
  return Dl.forEach(e, (i) => {
    ql(i) && t.push(i);
  }), t;
}
const Ir = ({ children: e, custom: t, initial: i = !0, onExitComplete: n, presenceAffectsLayout: a = !0, mode: o = "sync", propagate: r = !1, anchorX: l = "left", root: c }) => {
  const [d, u] = Tr(r), m = ot(() => ds(e), [e]), g = r && !d ? [] : m.map(di), S = I(!0), b = I(m), x = Ft(() => /* @__PURE__ */ new Map()), [y, C] = T(m), [h, v] = T(m);
  Qi(() => {
    S.current = !1, b.current = m;
    for (let E = 0; E < h.length; E++) {
      const L = di(h[E]);
      g.includes(L) ? x.delete(L) : x.get(L) !== !0 && x.set(L, !1);
    }
  }, [h, g.length, g.join("-")]);
  const z = [];
  if (m !== y) {
    let E = [...m];
    for (let L = 0; L < h.length; L++) {
      const A = h[L], H = di(A);
      g.includes(H) || (E.splice(L, 0, A), z.push(A));
    }
    return o === "wait" && z.length && (E = z), v(ds(E)), C(m), null;
  }
  const { forceRender: F } = O(ta);
  return s(J, { children: h.map((E) => {
    const L = di(E), A = r && !d ? !1 : m === h || g.includes(L), H = () => {
      if (x.has(L))
        x.set(L, !0);
      else
        return;
      let X = !0;
      x.forEach((xe) => {
        xe || (X = !1);
      }), X && (F?.(), v(b.current), r && u?.(), n && n());
    };
    return s(Gd, { isPresent: A, initial: !S.current || i ? void 0 : !1, custom: t, presenceAffectsLayout: a, mode: o, root: c, onExitComplete: A ? void 0 : H, anchorX: l, children: E }, L);
  }) });
}, Fr = Pe({ strict: !1 }), ps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Tt = {};
for (const e in ps)
  Tt[e] = {
    isEnabled: (t) => ps[e].some((i) => !!t[i])
  };
function Zd(e) {
  for (const t in e)
    Tt[t] = {
      ...Tt[t],
      ...e[t]
    };
}
const Yd = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ui(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Yd.has(e);
}
let kr = (e) => !Ui(e);
function Qd(e) {
  typeof e == "function" && (kr = (t) => t.startsWith("on") ? !Ui(t) : e(t));
}
try {
  Qd(require("@emotion/is-prop-valid").default);
} catch {
}
function Jd(e, t, i) {
  const n = {};
  for (const a in e)
    a === "values" && typeof e.values == "object" || (kr(a) || i === !0 && Ui(a) || !t && !Ui(a) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && a.startsWith("onDrag")) && (n[a] = e[a]);
  return n;
}
const tn = /* @__PURE__ */ Pe({});
function nn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Yt(e) {
  return typeof e == "string" || Array.isArray(e);
}
const ka = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], La = ["initial", ...ka];
function an(e) {
  return nn(e.animate) || La.some((t) => Yt(e[t]));
}
function Lr(e) {
  return !!(an(e) || e.variants);
}
function ep(e, t) {
  if (an(e)) {
    const { initial: i, animate: n } = e;
    return {
      initial: i === !1 || Yt(i) ? i : void 0,
      animate: Yt(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function tp(e) {
  const { initial: t, animate: i } = ep(e, O(tn));
  return ot(() => ({ initial: t, animate: i }), [us(t), us(i)]);
}
function us(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Qt = {};
function ip(e) {
  for (const t in e)
    Qt[t] = e[t], da(t) && (Qt[t].isCSSVariable = !0);
}
function Ar(e, { layout: t, layoutId: i }) {
  return At.has(e) || e.startsWith("origin") || (t || i !== void 0) && (!!Qt[e] || e === "opacity");
}
const np = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ap = Lt.length;
function sp(e, t, i) {
  let n = "", a = !0;
  for (let o = 0; o < ap; o++) {
    const r = Lt[o], l = e[r];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number" ? c = l === (r.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0, !c || i) {
      const d = xr(l, wa[r]);
      if (!c) {
        a = !1;
        const u = np[r] || r;
        n += `${u}(${d}) `;
      }
      i && (t[r] = d);
    }
  }
  return n = n.trim(), i ? n = i(t, a ? "" : n) : a && (n = "none"), n;
}
function Aa(e, t, i) {
  const { style: n, vars: a, transformOrigin: o } = e;
  let r = !1, l = !1;
  for (const c in t) {
    const d = t[c];
    if (At.has(c)) {
      r = !0;
      continue;
    } else if (da(c)) {
      a[c] = d;
      continue;
    } else {
      const u = xr(d, wa[c]);
      c.startsWith("origin") ? (l = !0, o[c] = u) : n[c] = u;
    }
  }
  if (t.transform || (r || i ? n.transform = sp(t, e.transform, i) : n.transform && (n.transform = "none")), l) {
    const { originX: c = "50%", originY: d = "50%", originZ: u = 0 } = o;
    n.transformOrigin = `${c} ${d} ${u}`;
  }
}
const za = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function zr(e, t, i) {
  for (const n in t)
    !N(t[n]) && !Ar(n, i) && (e[n] = t[n]);
}
function op({ transformTemplate: e }, t) {
  return ot(() => {
    const i = za();
    return Aa(i, t, e), Object.assign({}, i.vars, i.style);
  }, [t]);
}
function rp(e, t) {
  const i = e.style || {}, n = {};
  return zr(n, i, e), Object.assign(n, op(e, t)), n;
}
function lp(e, t) {
  const i = {}, n = rp(e, t);
  return e.drag && e.dragListener !== !1 && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = n, i;
}
const cp = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, dp = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function pp(e, t, i = 1, n = 0, a = !0) {
  e.pathLength = 1;
  const o = a ? cp : dp;
  e[o.offset] = k.transform(-n);
  const r = k.transform(t), l = k.transform(i);
  e[o.array] = `${r} ${l}`;
}
function Er(e, {
  attrX: t,
  attrY: i,
  attrScale: n,
  pathLength: a,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, c, d, u) {
  if (Aa(e, l, d), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: m, style: g } = e;
  m.transform && (g.transform = m.transform, delete m.transform), (g.transform || m.transformOrigin) && (g.transformOrigin = m.transformOrigin ?? "50% 50%", delete m.transformOrigin), g.transform && (g.transformBox = u?.transformBox ?? "fill-box", delete m.transformBox), t !== void 0 && (m.x = t), i !== void 0 && (m.y = i), n !== void 0 && (m.scale = n), a !== void 0 && pp(m, a, o, r, !1);
}
const Br = () => ({
  ...za(),
  attrs: {}
}), Mr = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function up(e, t, i, n) {
  const a = ot(() => {
    const o = Br();
    return Er(o, t, Mr(n), e.transformTemplate, e.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    zr(o, e.style, e), a.style = { ...o, ...a.style };
  }
  return a;
}
const mp = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ea(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(mp.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function fp(e, t, i, { latestValues: n }, a, o = !1) {
  const l = (Ea(e) ? up : lp)(t, n, a, e), c = Jd(t, typeof e == "string", o), d = e !== Bo ? { ...c, ...l, ref: i } : {}, { children: u } = t, m = ot(() => N(u) ? u.get() : u, [u]);
  return Rl(e, {
    ...d,
    children: m
  });
}
function ms(e) {
  const t = [{}, {}];
  return e?.values.forEach((i, n) => {
    t[0][n] = i.get(), t[1][n] = i.getVelocity();
  }), t;
}
function Ba(e, t, i, n) {
  if (typeof t == "function") {
    const [a, o] = ms(n);
    t = t(i !== void 0 ? i : e.custom, a, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [a, o] = ms(n);
    t = t(i !== void 0 ? i : e.custom, a, o);
  }
  return t;
}
function Di(e) {
  return N(e) ? e.get() : e;
}
function gp({ scrapeMotionValuesFromProps: e, createRenderState: t }, i, n, a) {
  return {
    latestValues: hp(i, n, a, e),
    renderState: t()
  };
}
function hp(e, t, i, n) {
  const a = {}, o = n(e, {});
  for (const g in o)
    a[g] = Di(o[g]);
  let { initial: r, animate: l } = e;
  const c = an(e), d = Lr(e);
  t && d && !c && e.inherit !== !1 && (r === void 0 && (r = t.initial), l === void 0 && (l = t.animate));
  let u = i ? i.initial === !1 : !1;
  u = u || r === !1;
  const m = u ? l : r;
  if (m && typeof m != "boolean" && !nn(m)) {
    const g = Array.isArray(m) ? m : [m];
    for (let S = 0; S < g.length; S++) {
      const b = Ba(e, g[S]);
      if (b) {
        const { transitionEnd: x, transition: y, ...C } = b;
        for (const h in C) {
          let v = C[h];
          if (Array.isArray(v)) {
            const z = u ? v.length - 1 : 0;
            v = v[z];
          }
          v !== null && (a[h] = v);
        }
        for (const h in x)
          a[h] = x[h];
      }
    }
  }
  return a;
}
const Vr = (e) => (t, i) => {
  const n = O(tn), a = O(Ji), o = () => gp(e, t, n, a);
  return i ? o() : Ft(o);
};
function Ma(e, t, i) {
  const { style: n } = e, a = {};
  for (const o in n)
    (N(n[o]) || t.style && N(t.style[o]) || Ar(o, e) || i?.getValue(o)?.liveStyle !== void 0) && (a[o] = n[o]);
  return a;
}
const yp = /* @__PURE__ */ Vr({
  scrapeMotionValuesFromProps: Ma,
  createRenderState: za
});
function Dr(e, t, i) {
  const n = Ma(e, t, i);
  for (const a in e)
    if (N(e[a]) || N(t[a])) {
      const o = Lt.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      n[o] = e[a];
    }
  return n;
}
const xp = /* @__PURE__ */ Vr({
  scrapeMotionValuesFromProps: Dr,
  createRenderState: Br
}), vp = Symbol.for("motionComponentSymbol");
function ft(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function bp(e, t, i) {
  return oe(
    (n) => {
      n && e.onMount && e.onMount(n), t && (n ? t.mount(n) : t.unmount()), i && (typeof i == "function" ? i(n) : ft(i) && (i.current = n));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const Va = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), wp = "framerAppearId", Pr = "data-" + Va(wp), Rr = Pe({});
function Sp(e, t, i, n, a) {
  const { visualElement: o } = O(tn), r = O(Fr), l = O(Ji), c = O(si).reducedMotion, d = I(null);
  n = n || r.renderer, !d.current && n && (d.current = n(e, {
    visualState: t,
    parent: o,
    props: i,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const u = d.current, m = O(Rr);
  u && !u.projection && a && (u.type === "html" || u.type === "svg") && Cp(d.current, i, a, m);
  const g = I(!1);
  ea(() => {
    u && g.current && u.update(i, l);
  });
  const S = i[Pr], b = I(!!S && !window.MotionHandoffIsComplete?.(S) && window.MotionHasOptimisedAnimation?.(S));
  return Qi(() => {
    u && (g.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), b.current && u.animationState && u.animationState.animateChanges());
  }), B(() => {
    u && (!b.current && u.animationState && u.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(S);
    }), b.current = !1), u.enteringChildren = void 0);
  }), u;
}
function Cp(e, t, i, n) {
  const { layoutId: a, layout: o, drag: r, dragConstraints: l, layoutScroll: c, layoutRoot: d, layoutCrossfade: u } = t;
  e.projection = new i(e.latestValues, t["data-framer-portal-id"] ? void 0 : jr(e.parent)), e.projection.setOptions({
    layoutId: a,
    layout: o,
    alwaysMeasureLayout: !!r || l && ft(l),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: n,
    crossfade: u,
    layoutScroll: c,
    layoutRoot: d
  });
}
function jr(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : jr(e.parent);
}
function pn(e, { forwardMotionProps: t = !1 } = {}, i, n) {
  i && Zd(i);
  const a = Ea(e) ? xp : yp;
  function o(l, c) {
    let d;
    const u = {
      ...O(si),
      ...l,
      layoutId: Tp(l)
    }, { isStatic: m } = u, g = tp(l), S = a(l, m);
    if (!m && ia) {
      Ip();
      const b = Fp(u);
      d = b.MeasureLayout, g.visualElement = Sp(e, S, u, n, b.ProjectionNode);
    }
    return p(tn.Provider, { value: g, children: [d && g.visualElement ? s(d, { visualElement: g.visualElement, ...u }) : null, fp(e, l, bp(S, g.visualElement, c), S, m, t)] });
  }
  o.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const r = jl(o);
  return r[vp] = e, r;
}
function Tp({ layoutId: e }) {
  const t = O(ta).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Ip(e, t) {
  O(Fr).strict;
}
function Fp(e) {
  const { drag: t, layout: i } = Tt;
  if (!t && !i)
    return {};
  const n = { ...t, ...i };
  return {
    MeasureLayout: t?.isEnabled(e) || i?.isEnabled(e) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode
  };
}
function kp(e, t) {
  if (typeof Proxy > "u")
    return pn;
  const i = /* @__PURE__ */ new Map(), n = (o, r) => pn(o, r, e, t), a = (o, r) => n(o, r);
  return new Proxy(a, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? n : (i.has(r) || i.set(r, pn(r, void 0, e, t)), i.get(r))
  });
}
function qr({ top: e, left: t, right: i, bottom: n }) {
  return {
    x: { min: t, max: i },
    y: { min: e, max: n }
  };
}
function Lp({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Ap(e, t) {
  if (!t)
    return e;
  const i = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: n.y,
    right: n.x
  };
}
function un(e) {
  return e === void 0 || e === 1;
}
function Wn({ scale: e, scaleX: t, scaleY: i }) {
  return !un(e) || !un(t) || !un(i);
}
function Ke(e) {
  return Wn(e) || Hr(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Hr(e) {
  return fs(e.x) || fs(e.y);
}
function fs(e) {
  return e && e !== "0%";
}
function Oi(e, t, i) {
  const n = e - i, a = t * n;
  return i + a;
}
function gs(e, t, i, n, a) {
  return a !== void 0 && (e = Oi(e, a, n)), Oi(e, i, n) + t;
}
function Un(e, t = 0, i = 1, n, a) {
  e.min = gs(e.min, t, i, n, a), e.max = gs(e.max, t, i, n, a);
}
function Wr(e, { x: t, y: i }) {
  Un(e.x, t.translate, t.scale, t.originPoint), Un(e.y, i.translate, i.scale, i.originPoint);
}
const hs = 0.999999999999, ys = 1.0000000000001;
function zp(e, t, i, n = !1) {
  const a = i.length;
  if (!a)
    return;
  t.x = t.y = 1;
  let o, r;
  for (let l = 0; l < a; l++) {
    o = i[l], r = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (n && o.options.layoutScroll && o.scroll && o !== o.root && ht(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (t.x *= r.x.scale, t.y *= r.y.scale, Wr(e, r)), n && Ke(o.latestValues) && ht(e, o.latestValues));
  }
  t.x < ys && t.x > hs && (t.x = 1), t.y < ys && t.y > hs && (t.y = 1);
}
function gt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function xs(e, t, i, n, a = 0.5) {
  const o = j(e.min, e.max, a);
  Un(e, t, i, o, n);
}
function ht(e, t) {
  xs(e.x, t.x, t.scaleX, t.scale, t.originX), xs(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ur(e, t) {
  return qr(Ap(e.getBoundingClientRect(), t));
}
function Ep(e, t, i) {
  const n = Ur(e, i), { scroll: a } = t;
  return a && (gt(n.x, a.offset.x), gt(n.y, a.offset.y)), n;
}
const vs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), yt = () => ({
  x: vs(),
  y: vs()
}), bs = () => ({ min: 0, max: 0 }), W = () => ({
  x: bs(),
  y: bs()
}), On = { current: null }, Or = { current: !1 };
function Bp() {
  if (Or.current = !0, !!ia)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => On.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      On.current = !1;
}
const Mp = /* @__PURE__ */ new WeakMap();
function Vp(e, t, i) {
  for (const n in t) {
    const a = t[n], o = i[n];
    if (N(a))
      e.addValue(n, a);
    else if (N(o))
      e.addValue(n, he(a, { owner: e }));
    else if (o !== a)
      if (e.hasValue(n)) {
        const r = e.getValue(n);
        r.liveStyle === !0 ? r.jump(a) : r.hasAnimated || r.set(a);
      } else {
        const r = e.getStaticValue(n);
        e.addValue(n, he(r !== void 0 ? r : a, { owner: e }));
      }
  }
  for (const n in i)
    t[n] === void 0 && e.removeValue(n);
  return t;
}
const ws = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Dp {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, i, n) {
    return {};
  }
  constructor({ parent: t, props: i, presenceContext: n, reducedMotionConfig: a, blockInitialAnimation: o, visualState: r }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = va, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = ne.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, P.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: d } = r;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = i.initial ? { ...c } : {}, this.renderState = d, this.parent = t, this.props = i, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = a, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = an(i), this.isVariantNode = Lr(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...m } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const g in m) {
      const S = m[g];
      c[g] !== void 0 && N(S) && S.set(c[g]);
    }
  }
  mount(t) {
    this.current = t, Mp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, n) => this.bindToMotionValue(n, i)), Or.current || Bp(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : On.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), ye(this.notifyUpdate), ye(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const i = this.features[t];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, i) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const n = At.has(t);
    n && this.onBindTransform && this.onBindTransform();
    const a = i.on("change", (r) => {
      this.latestValues[t] = r, this.props.onUpdate && P.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, i)), this.valueSubscriptions.set(t, () => {
      a(), o && o(), i.owner && i.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Tt) {
      const i = Tt[t];
      if (!i)
        continue;
      const { isEnabled: n, Feature: a } = i;
      if (!this.features[t] && a && n(this.props) && (this.features[t] = new a(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : W();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, i) {
    this.latestValues[t] = i;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, i) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let n = 0; n < ws.length; n++) {
      const a = ws[n];
      this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
      const o = "on" + a, r = t[o];
      r && (this.propEventSubscriptions[a] = this.on(a, r));
    }
    this.prevMotionValues = Vp(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(t), () => i.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, i) {
    const n = this.values.get(t);
    i !== n && (n && this.removeValue(t), this.bindToMotionValue(t, i), this.values.set(t, i), this.latestValues[t] = i.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const i = this.valueSubscriptions.get(t);
    i && (i(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, i) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && i !== void 0 && (n = he(i === null ? void 0 : i, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, i) {
    let n = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return n != null && (typeof n == "string" && (Mo(n) || Do(n)) ? n = parseFloat(n) : !Od(n) && De.test(i) && (n = yr(t, i)), this.setBaseTarget(t, N(n) ? n.get() : n)), N(n) ? n.get() : n;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, i) {
    this.baseTarget[t] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: i } = this.props;
    let n;
    if (typeof i == "string" || typeof i == "object") {
      const o = Ba(this.props, i, this.presenceContext?.custom);
      o && (n = o[t]);
    }
    if (i && n !== void 0)
      return n;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !N(a) ? a : this.initialValues[t] !== void 0 && n === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, i) {
    return this.events[t] || (this.events[t] = new oa()), this.events[t].add(i);
  }
  notify(t, ...i) {
    this.events[t] && this.events[t].notify(...i);
  }
  scheduleRenderMicrotask() {
    Ta.render(this.render);
  }
}
class Nr extends Dp {
  constructor() {
    super(...arguments), this.KeyframeResolver = wd;
  }
  sortInstanceNodePosition(t, i) {
    return t.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, i) {
    return t.style ? t.style[i] : void 0;
  }
  removeValueFromRenderState(t, { vars: i, style: n }) {
    delete i[t], delete n[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    N(t) && (this.childSubscription = t.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
function _r(e, { style: t, vars: i }, n, a) {
  const o = e.style;
  let r;
  for (r in t)
    o[r] = t[r];
  a?.applyProjectionStyles(o, n);
  for (r in i)
    o.setProperty(r, i[r]);
}
function Pp(e) {
  return window.getComputedStyle(e);
}
class Rp extends Nr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = _r;
  }
  readValueFromInstance(t, i) {
    if (At.has(i))
      return this.projection?.isProjecting ? Vn(i) : Wc(t, i);
    {
      const n = Pp(t), a = (da(i) ? n.getPropertyValue(i) : n[i]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: i }) {
    return Ur(t, i);
  }
  build(t, i, n) {
    Aa(t, i, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, i, n) {
    return Ma(t, i, n);
  }
}
const Xr = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function jp(e, t, i, n) {
  _r(e, t, void 0, n);
  for (const a in t.attrs)
    e.setAttribute(Xr.has(a) ? a : Va(a), t.attrs[a]);
}
class qp extends Nr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = W;
  }
  getBaseTargetFromProps(t, i) {
    return t[i];
  }
  readValueFromInstance(t, i) {
    if (At.has(i)) {
      const n = hr(i);
      return n && n.default || 0;
    }
    return i = Xr.has(i) ? i : Va(i), t.getAttribute(i);
  }
  scrapeMotionValuesFromProps(t, i, n) {
    return Dr(t, i, n);
  }
  build(t, i, n) {
    Er(t, i, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(t, i, n, a) {
    jp(t, i, n, a);
  }
  mount(t) {
    this.isSVGTag = Mr(t.tagName), super.mount(t);
  }
}
const Hp = (e, t) => Ea(e) ? new qp(t) : new Rp(t, {
  allowProjection: e !== Bo
});
function bt(e, t, i) {
  const n = e.getProps();
  return Ba(n, t, i !== void 0 ? i : n.custom, e);
}
const Nn = (e) => Array.isArray(e);
function Wp(e, t, i) {
  e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, he(i));
}
function Up(e) {
  return Nn(e) ? e[e.length - 1] || 0 : e;
}
function Op(e, t) {
  const i = bt(e, t);
  let { transitionEnd: n = {}, transition: a = {}, ...o } = i || {};
  o = { ...o, ...n };
  for (const r in o) {
    const l = Up(o[r]);
    Wp(e, r, l);
  }
}
function Np(e) {
  return !!(N(e) && e.add);
}
function _n(e, t) {
  const i = e.getValue("willChange");
  if (Np(i))
    return i.add(t);
  if (!i && Le.WillChange) {
    const n = new Le.WillChange("auto");
    e.addValue("willChange", n), n.add(t);
  }
}
function $r(e) {
  return e.props[Pr];
}
const _p = (e) => e !== null;
function Xp(e, { repeat: t, repeatType: i = "loop" }, n) {
  const a = e.filter(_p), o = t && i !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
  return a[o];
}
const $p = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Gp = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Kp = {
  type: "keyframes",
  duration: 0.8
}, Zp = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Yp = (e, { keyframes: t }) => t.length > 2 ? Kp : At.has(e) ? e.startsWith("scale") ? Gp(t[1]) : $p : Zp;
function Qp({ when: e, delay: t, delayChildren: i, staggerChildren: n, staggerDirection: a, repeat: o, repeatType: r, repeatDelay: l, from: c, elapsed: d, ...u }) {
  return !!Object.keys(u).length;
}
const Da = (e, t, i, n = {}, a, o) => (r) => {
  const l = ba(n, e) || {}, c = l.delay || n.delay || 0;
  let { elapsed: d = 0 } = n;
  d = d - /* @__PURE__ */ Ce(c);
  const u = {
    keyframes: Array.isArray(i) ? i : [null, i],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -d,
    onUpdate: (g) => {
      t.set(g), l.onUpdate && l.onUpdate(g);
    },
    onComplete: () => {
      r(), l.onComplete && l.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : a
  };
  Qp(l) || Object.assign(u, Yp(e, u)), u.duration && (u.duration = /* @__PURE__ */ Ce(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Ce(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let m = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (qn(u), u.delay === 0 && (m = !0)), (Le.instantAnimations || Le.skipAnimations) && (m = !0, qn(u), u.delay = 0), u.allowFlatten = !l.type && !l.ease, m && !o && t.get() !== void 0) {
    const g = Xp(u.keyframes, l);
    if (g !== void 0) {
      P.update(() => {
        u.onUpdate(g), u.onComplete();
      });
      return;
    }
  }
  return l.isSync ? new en(u) : new cd(u);
};
function Jp({ protectedKeys: e, needsAnimating: t }, i) {
  const n = e.hasOwnProperty(i) && t[i] !== !0;
  return t[i] = !1, n;
}
function Gr(e, t, { delay: i = 0, transitionOverride: n, type: a } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: r, ...l } = t;
  n && (o = n);
  const c = [], d = a && e.animationState && e.animationState.getState()[a];
  for (const u in l) {
    const m = e.getValue(u, e.latestValues[u] ?? null), g = l[u];
    if (g === void 0 || d && Jp(d, u))
      continue;
    const S = {
      delay: i,
      ...ba(o || {}, u)
    }, b = m.get();
    if (b !== void 0 && !m.isAnimating && !Array.isArray(g) && g === b && !S.velocity)
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const C = $r(e);
      if (C) {
        const h = window.MotionHandoffAnimation(C, u, P);
        h !== null && (S.startTime = h, x = !0);
      }
    }
    _n(e, u), m.start(Da(u, m, g, e.shouldReduceMotion && mr.has(u) ? { type: !1 } : S, e, x));
    const y = m.animation;
    y && c.push(y);
  }
  return r && Promise.all(c).then(() => {
    P.update(() => {
      r && Op(e, r);
    });
  }), c;
}
function Kr(e, t, i, n = 0, a = 1) {
  const o = Array.from(e).sort((d, u) => d.sortNodePosition(u)).indexOf(t), r = e.size, l = (r - 1) * n;
  return typeof i == "function" ? i(o, r) : a === 1 ? o * n : l - o * n;
}
function Xn(e, t, i = {}) {
  const n = bt(e, t, i.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: a = e.getDefaultTransition() || {} } = n || {};
  i.transitionOverride && (a = i.transitionOverride);
  const o = n ? () => Promise.all(Gr(e, n, i)) : () => Promise.resolve(), r = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: m } = a;
    return eu(e, t, c, d, u, m, i);
  } : () => Promise.resolve(), { when: l } = a;
  if (l) {
    const [c, d] = l === "beforeChildren" ? [o, r] : [r, o];
    return c().then(() => d());
  } else
    return Promise.all([o(), r(i.delay)]);
}
function eu(e, t, i = 0, n = 0, a = 0, o = 1, r) {
  const l = [];
  for (const c of e.variantChildren)
    c.notify("AnimationStart", t), l.push(Xn(c, t, {
      ...r,
      delay: i + (typeof n == "function" ? 0 : n) + Kr(e.variantChildren, c, n, a, o)
    }).then(() => c.notify("AnimationComplete", t)));
  return Promise.all(l);
}
function tu(e, t, i = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const a = t.map((o) => Xn(e, o, i));
    n = Promise.all(a);
  } else if (typeof t == "string")
    n = Xn(e, t, i);
  else {
    const a = typeof t == "function" ? bt(e, t, i.custom) : t;
    n = Promise.all(Gr(e, a, i));
  }
  return n.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Zr(e, t) {
  if (!Array.isArray(t))
    return !1;
  const i = t.length;
  if (i !== e.length)
    return !1;
  for (let n = 0; n < i; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
const iu = La.length;
function Yr(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const i = e.parent ? Yr(e.parent) || {} : {};
    return e.props.initial !== void 0 && (i.initial = e.props.initial), i;
  }
  const t = {};
  for (let i = 0; i < iu; i++) {
    const n = La[i], a = e.props[n];
    (Yt(a) || a === !1) && (t[n] = a);
  }
  return t;
}
const nu = [...ka].reverse(), au = ka.length;
function su(e) {
  return (t) => Promise.all(t.map(({ animation: i, options: n }) => tu(e, i, n)));
}
function ou(e) {
  let t = su(e), i = Ss(), n = !0;
  const a = (c) => (d, u) => {
    const m = bt(e, u, c === "exit" ? e.presenceContext?.custom : void 0);
    if (m) {
      const { transition: g, transitionEnd: S, ...b } = m;
      d = { ...d, ...b, ...S };
    }
    return d;
  };
  function o(c) {
    t = c(e);
  }
  function r(c) {
    const { props: d } = e, u = Yr(e.parent) || {}, m = [], g = /* @__PURE__ */ new Set();
    let S = {}, b = 1 / 0;
    for (let y = 0; y < au; y++) {
      const C = nu[y], h = i[C], v = d[C] !== void 0 ? d[C] : u[C], z = Yt(v), F = C === c ? h.isActive : null;
      F === !1 && (b = y);
      let E = v === u[C] && v !== d[C] && z;
      if (E && n && e.manuallyAnimateOnMount && (E = !1), h.protectedKeys = { ...S }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && F === null || // If we didn't and don't have any defined prop for this animation type
      !v && !h.prevProp || // Or if the prop doesn't define an animation
      nn(v) || typeof v == "boolean")
        continue;
      const L = ru(h.prevProp, v);
      let A = L || // If we're making this variant active, we want to always make it active
      C === c && h.isActive && !E && z || // If we removed a higher-priority variant (i is in reverse order)
      y > b && z, H = !1;
      const X = Array.isArray(v) ? v : [v];
      let xe = X.reduce(a(C), {});
      F === !1 && (xe = {});
      const { prevResolvedValues: ja = {} } = h, Ml = {
        ...ja,
        ...xe
      }, qa = ($) => {
        A = !0, g.has($) && (H = !0, g.delete($)), h.needsAnimating[$] = !0;
        const re = e.getValue($);
        re && (re.liveStyle = !1);
      };
      for (const $ in Ml) {
        const re = xe[$], We = ja[$];
        if (S.hasOwnProperty($))
          continue;
        let rt = !1;
        Nn(re) && Nn(We) ? rt = !Zr(re, We) : rt = re !== We, rt ? re != null ? qa($) : g.add($) : re !== void 0 && g.has($) ? qa($) : h.protectedKeys[$] = !0;
      }
      h.prevProp = v, h.prevResolvedValues = xe, h.isActive && (S = { ...S, ...xe }), n && e.blockInitialAnimation && (A = !1);
      const Ha = E && L;
      A && (!Ha || H) && m.push(...X.map(($) => {
        const re = { type: C };
        if (typeof $ == "string" && n && !Ha && e.manuallyAnimateOnMount && e.parent) {
          const { parent: We } = e, rt = bt(We, $);
          if (We.enteringChildren && rt) {
            const { delayChildren: Vl } = rt.transition || {};
            re.delay = Kr(We.enteringChildren, e, Vl);
          }
        }
        return {
          animation: $,
          options: re
        };
      }));
    }
    if (g.size) {
      const y = {};
      if (typeof d.initial != "boolean") {
        const C = bt(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        C && C.transition && (y.transition = C.transition);
      }
      g.forEach((C) => {
        const h = e.getBaseTarget(C), v = e.getValue(C);
        v && (v.liveStyle = !0), y[C] = h ?? null;
      }), m.push({ animation: y });
    }
    let x = !!m.length;
    return n && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (x = !1), n = !1, x ? t(m) : Promise.resolve();
  }
  function l(c, d) {
    if (i[c].isActive === d)
      return Promise.resolve();
    e.variantChildren?.forEach((m) => m.animationState?.setActive(c, d)), i[c].isActive = d;
    const u = r(c);
    for (const m in i)
      i[m].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: r,
    setActive: l,
    setAnimateFunction: o,
    getState: () => i,
    reset: () => {
      i = Ss();
    }
  };
}
function ru(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Zr(t, e) : !1;
}
function Ue(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ss() {
  return {
    animate: Ue(!0),
    whileInView: Ue(),
    whileHover: Ue(),
    whileTap: Ue(),
    whileDrag: Ue(),
    whileFocus: Ue(),
    exit: Ue()
  };
}
class Re {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class lu extends Re {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = ou(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    nn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    t !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let cu = 0;
class du extends Re {
  constructor() {
    super(...arguments), this.id = cu++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: i } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n)
      return;
    const a = this.node.animationState.setActive("exit", !t);
    i && !t && a.then(() => {
      i(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const pu = {
  animation: {
    Feature: lu
  },
  exit: {
    Feature: du
  }
};
function Jt(e, t, i, n = { passive: !0 }) {
  return e.addEventListener(t, i, n), () => e.removeEventListener(t, i);
}
function oi(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const uu = (e) => (t) => Ia(t) && e(t, oi(t));
function Ut(e, t, i, n) {
  return Jt(e, t, uu(i), n);
}
const Qr = 1e-4, mu = 1 - Qr, fu = 1 + Qr, Jr = 0.01, gu = 0 - Jr, hu = 0 + Jr;
function Q(e) {
  return e.max - e.min;
}
function yu(e, t, i) {
  return Math.abs(e - t) <= i;
}
function Cs(e, t, i, n = 0.5) {
  e.origin = n, e.originPoint = j(t.min, t.max, e.origin), e.scale = Q(i) / Q(t), e.translate = j(i.min, i.max, e.origin) - e.originPoint, (e.scale >= mu && e.scale <= fu || isNaN(e.scale)) && (e.scale = 1), (e.translate >= gu && e.translate <= hu || isNaN(e.translate)) && (e.translate = 0);
}
function Ot(e, t, i, n) {
  Cs(e.x, t.x, i.x, n ? n.originX : void 0), Cs(e.y, t.y, i.y, n ? n.originY : void 0);
}
function Ts(e, t, i) {
  e.min = i.min + t.min, e.max = e.min + Q(t);
}
function xu(e, t, i) {
  Ts(e.x, t.x, i.x), Ts(e.y, t.y, i.y);
}
function Is(e, t, i) {
  e.min = t.min - i.min, e.max = e.min + Q(t);
}
function Nt(e, t, i) {
  Is(e.x, t.x, i.x), Is(e.y, t.y, i.y);
}
function de(e) {
  return [e("x"), e("y")];
}
const el = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Fs = (e, t) => Math.abs(e - t);
function vu(e, t) {
  const i = Fs(e.x, t.x), n = Fs(e.y, t.y);
  return Math.sqrt(i ** 2 + n ** 2);
}
class tl {
  constructor(t, i, { transformPagePoint: n, contextWindow: a = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = fn(this.lastMoveEventInfo, this.history), S = this.startEvent !== null, b = vu(g.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!S && !b)
        return;
      const { point: x } = g, { timestamp: y } = _;
      this.history.push({ ...x, timestamp: y });
      const { onStart: C, onMove: h } = this.handlers;
      S || (C && C(this.lastMoveEvent, g), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, g);
    }, this.handlePointerMove = (g, S) => {
      this.lastMoveEvent = g, this.lastMoveEventInfo = mn(S, this.transformPagePoint), P.update(this.updatePoint, !0);
    }, this.handlePointerUp = (g, S) => {
      this.end();
      const { onEnd: b, onSessionEnd: x, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const C = fn(g.type === "pointercancel" ? this.lastMoveEventInfo : mn(S, this.transformPagePoint), this.history);
      this.startEvent && b && b(g, C), x && x(g, C);
    }, !Ia(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = i, this.transformPagePoint = n, this.distanceThreshold = r, this.contextWindow = a || window;
    const l = oi(t), c = mn(l, this.transformPagePoint), { point: d } = c, { timestamp: u } = _;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: m } = i;
    m && m(t, fn(c, this.history)), this.removeListeners = ii(Ut(this.contextWindow, "pointermove", this.handlePointerMove), Ut(this.contextWindow, "pointerup", this.handlePointerUp), Ut(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ye(this.updatePoint);
  }
}
function mn(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ks(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fn({ point: e }, t) {
  return {
    point: e,
    delta: ks(e, il(t)),
    offset: ks(e, bu(t)),
    velocity: wu(t, 0.1)
  };
}
function bu(e) {
  return e[0];
}
function il(e) {
  return e[e.length - 1];
}
function wu(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let i = e.length - 1, n = null;
  const a = il(e);
  for (; i >= 0 && (n = e[i], !(a.timestamp - n.timestamp > /* @__PURE__ */ Ce(t))); )
    i--;
  if (!n)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ pe(a.timestamp - n.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (a.x - n.x) / o,
    y: (a.y - n.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Su(e, { min: t, max: i }, n) {
  return t !== void 0 && e < t ? e = n ? j(t, e, n.min) : Math.max(e, t) : i !== void 0 && e > i && (e = n ? j(i, e, n.max) : Math.min(e, i)), e;
}
function Ls(e, t, i) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
  };
}
function Cu(e, { top: t, left: i, bottom: n, right: a }) {
  return {
    x: Ls(e.x, i, a),
    y: Ls(e.y, t, n)
  };
}
function As(e, t) {
  let i = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([i, n] = [n, i]), { min: i, max: n };
}
function Tu(e, t) {
  return {
    x: As(e.x, t.x),
    y: As(e.y, t.y)
  };
}
function Iu(e, t) {
  let i = 0.5;
  const n = Q(e), a = Q(t);
  return a > n ? i = /* @__PURE__ */ Ct(t.min, t.max - n, e.min) : n > a && (i = /* @__PURE__ */ Ct(e.min, e.max - a, t.min)), Ie(0, 1, i);
}
function Fu(e, t) {
  const i = {};
  return t.min !== void 0 && (i.min = t.min - e.min), t.max !== void 0 && (i.max = t.max - e.min), i;
}
const $n = 0.35;
function ku(e = $n) {
  return e === !1 ? e = 0 : e === !0 && (e = $n), {
    x: zs(e, "left", "right"),
    y: zs(e, "top", "bottom")
  };
}
function zs(e, t, i) {
  return {
    min: Es(e, t),
    max: Es(e, i)
  };
}
function Es(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Lu = /* @__PURE__ */ new WeakMap();
class Au {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = W(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: i = !1, distanceThreshold: n } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1)
      return;
    const o = (m) => {
      const { dragSnapToOrigin: g } = this.getProps();
      g ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(oi(m).point);
    }, r = (m, g) => {
      const { drag: S, dragPropagation: b, onDragStart: x } = this.getProps();
      if (S && !b && (this.openDragLock && this.openDragLock(), this.openDragLock = Td(S), !this.openDragLock))
        return;
      this.latestPointerEvent = m, this.latestPanInfo = g, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), de((C) => {
        let h = this.getAxisMotionValue(C).get() || 0;
        if (Te.test(h)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const z = v.layout.layoutBox[C];
            z && (h = Q(z) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[C] = h;
      }), x && P.postRender(() => x(m, g)), _n(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, l = (m, g) => {
      this.latestPointerEvent = m, this.latestPanInfo = g;
      const { dragPropagation: S, dragDirectionLock: b, onDirectionLock: x, onDrag: y } = this.getProps();
      if (!S && !this.openDragLock)
        return;
      const { offset: C } = g;
      if (b && this.currentDirection === null) {
        this.currentDirection = zu(C), this.currentDirection !== null && x && x(this.currentDirection);
        return;
      }
      this.updateAxis("x", g.point, C), this.updateAxis("y", g.point, C), this.visualElement.render(), y && y(m, g);
    }, c = (m, g) => {
      this.latestPointerEvent = m, this.latestPanInfo = g, this.stop(m, g), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => de((m) => this.getAnimationState(m) === "paused" && this.getAxisMotionValue(m).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new tl(t, {
      onSessionStart: o,
      onStart: r,
      onMove: l,
      onSessionEnd: c,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: n,
      contextWindow: el(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, i) {
    const n = t || this.latestPointerEvent, a = i || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !a || !n)
      return;
    const { velocity: r } = a;
    this.startAnimation(r);
    const { onDragEnd: l } = this.getProps();
    l && P.postRender(() => l(n, a));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: i } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1);
  }
  updateAxis(t, i, n) {
    const { drag: a } = this.getProps();
    if (!n || !pi(t, a, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let r = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (r = Su(r, this.constraints[t], this.elastic[t])), o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: i } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, a = this.constraints;
    t && ft(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = Cu(n.layoutBox, t) : this.constraints = !1, this.elastic = ku(i), a !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && de((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Fu(n.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: i } = this.getProps();
    if (!t || !ft(t))
      return !1;
    const n = t.current, { projection: a } = this.visualElement;
    if (!a || !a.layout)
      return !1;
    const o = Ep(n, a.root, this.visualElement.getTransformPagePoint());
    let r = Tu(a.layout.layoutBox, o);
    if (i) {
      const l = i(Lp(r));
      this.hasMutatedConstraints = !!l, l && (r = qr(l));
    }
    return r;
  }
  startAnimation(t) {
    const { drag: i, dragMomentum: n, dragElastic: a, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: l } = this.getProps(), c = this.constraints || {}, d = de((u) => {
      if (!pi(u, i, this.currentDirection))
        return;
      let m = c && c[u] || {};
      r && (m = { min: 0, max: 0 });
      const g = a ? 200 : 1e6, S = a ? 40 : 1e7, b = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: g,
        bounceDamping: S,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...m
      };
      return this.startAxisValueAnimation(u, b);
    });
    return Promise.all(d).then(l);
  }
  startAxisValueAnimation(t, i) {
    const n = this.getAxisMotionValue(t);
    return _n(this.visualElement, t), n.start(Da(t, n, 0, i, this.visualElement, !1));
  }
  stopAnimation() {
    de((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    de((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const i = `_drag${t.toUpperCase()}`, n = this.visualElement.getProps(), a = n[i];
    return a || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    de((i) => {
      const { drag: n } = this.getProps();
      if (!pi(i, n, this.currentDirection))
        return;
      const { projection: a } = this.visualElement, o = this.getAxisMotionValue(i);
      if (a && a.layout) {
        const { min: r, max: l } = a.layout.layoutBox[i];
        o.set(t[i] - j(r, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: i } = this.getProps(), { projection: n } = this.visualElement;
    if (!ft(i) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    de((r) => {
      const l = this.getAxisMotionValue(r);
      if (l && this.constraints !== !1) {
        const c = l.get();
        a[r] = Iu({ min: c, max: c }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), de((r) => {
      if (!pi(r, t, null))
        return;
      const l = this.getAxisMotionValue(r), { min: c, max: d } = this.constraints[r];
      l.set(j(c, d, a[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Lu.set(this.visualElement, this);
    const t = this.visualElement.current, i = Ut(t, "pointerdown", (c) => {
      const { drag: d, dragListener: u = !0 } = this.getProps();
      d && u && this.start(c);
    }), n = () => {
      const { dragConstraints: c } = this.getProps();
      ft(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: a } = this.visualElement, o = a.addEventListener("measure", n);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), P.read(n);
    const r = Jt(window, "resize", () => this.scalePositionWithinConstraints()), l = a.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: d }) => {
      this.isDragging && d && (de((u) => {
        const m = this.getAxisMotionValue(u);
        m && (this.originPoint[u] += c[u].translate, m.set(m.get() + c[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      r(), i(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: n = !1, dragPropagation: a = !1, dragConstraints: o = !1, dragElastic: r = $n, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: i,
      dragDirectionLock: n,
      dragPropagation: a,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: l
    };
  }
}
function pi(e, t, i) {
  return (t === !0 || t === e) && (i === null || i === e);
}
function zu(e, t = 10) {
  let i = null;
  return Math.abs(e.y) > t ? i = "y" : Math.abs(e.x) > t && (i = "x"), i;
}
class Eu extends Re {
  constructor(t) {
    super(t), this.removeGroupControls = ae, this.removeListeners = ae, this.controls = new Au(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ae;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Bs = (e) => (t, i) => {
  e && P.postRender(() => e(t, i));
};
class Bu extends Re {
  constructor() {
    super(...arguments), this.removePointerDownListener = ae;
  }
  onPointerDown(t) {
    this.session = new tl(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: el(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: i, onPan: n, onPanEnd: a } = this.node.getProps();
    return {
      onSessionStart: Bs(t),
      onStart: Bs(i),
      onMove: n,
      onEnd: (o, r) => {
        delete this.session, a && P.postRender(() => a(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ut(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Pi = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ms(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Et = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (k.test(e))
        e = parseFloat(e);
      else
        return e;
    const i = Ms(e, t.target.x), n = Ms(e, t.target.y);
    return `${i}% ${n}%`;
  }
}, Mu = {
  correct: (e, { treeScale: t, projectionDelta: i }) => {
    const n = e, a = De.parse(e);
    if (a.length > 5)
      return n;
    const o = De.createTransformer(e), r = typeof a[0] != "number" ? 1 : 0, l = i.x.scale * t.x, c = i.y.scale * t.y;
    a[0 + r] /= l, a[1 + r] /= c;
    const d = j(l, c, 0.5);
    return typeof a[2 + r] == "number" && (a[2 + r] /= d), typeof a[3 + r] == "number" && (a[3 + r] /= d), o(a);
  }
};
let gn = !1;
class Vu extends Eo {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: n, layoutId: a } = this.props, { projection: o } = t;
    ip(Du), o && (i.group && i.group.add(o), n && n.register && a && n.register(o), gn && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Pi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: i, visualElement: n, drag: a, isPresent: o } = this.props, { projection: r } = n;
    return r && (r.isPresent = o, gn = !0, a || t.layoutDependency !== i || i === void 0 || t.isPresent !== o ? r.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? r.promote() : r.relegate() || P.postRender(() => {
      const l = r.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ta.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: n } = this.props, { projection: a } = t;
    gn = !0, a && (a.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(a), n && n.deregister && n.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function nl(e) {
  const [t, i] = Tr(), n = O(ta);
  return s(Vu, { ...e, layoutGroup: n, switchLayoutGroup: O(Rr), isPresent: t, safeToRemove: i });
}
const Du = {
  borderRadius: {
    ...Et,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Et,
  borderTopRightRadius: Et,
  borderBottomLeftRadius: Et,
  borderBottomRightRadius: Et,
  boxShadow: Mu
};
function Pu(e, t, i) {
  const n = N(e) ? e : he(e);
  return n.start(Da("", n, t, i)), n.animation;
}
const Ru = (e, t) => e.depth - t.depth;
class ju {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    na(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    aa(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Ru), this.isDirty = !1, this.children.forEach(t);
  }
}
function qu(e, t) {
  const i = ne.now(), n = ({ timestamp: a }) => {
    const o = a - i;
    o >= t && (ye(n), e(o - t));
  };
  return P.setup(n, !0), () => ye(n);
}
const al = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Hu = al.length, Vs = (e) => typeof e == "string" ? parseFloat(e) : e, Ds = (e) => typeof e == "number" || k.test(e);
function Wu(e, t, i, n, a, o) {
  a ? (e.opacity = j(0, i.opacity ?? 1, Uu(n)), e.opacityExit = j(t.opacity ?? 1, 0, Ou(n))) : o && (e.opacity = j(t.opacity ?? 1, i.opacity ?? 1, n));
  for (let r = 0; r < Hu; r++) {
    const l = `border${al[r]}Radius`;
    let c = Ps(t, l), d = Ps(i, l);
    if (c === void 0 && d === void 0)
      continue;
    c || (c = 0), d || (d = 0), c === 0 || d === 0 || Ds(c) === Ds(d) ? (e[l] = Math.max(j(Vs(c), Vs(d), n), 0), (Te.test(d) || Te.test(c)) && (e[l] += "%")) : e[l] = d;
  }
  (t.rotate || i.rotate) && (e.rotate = j(t.rotate || 0, i.rotate || 0, n));
}
function Ps(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Uu = /* @__PURE__ */ sl(0, 0.5, Uo), Ou = /* @__PURE__ */ sl(0.5, 0.95, ae);
function sl(e, t, i) {
  return (n) => n < e ? 0 : n > t ? 1 : i(/* @__PURE__ */ Ct(e, t, n));
}
function Rs(e, t) {
  e.min = t.min, e.max = t.max;
}
function le(e, t) {
  Rs(e.x, t.x), Rs(e.y, t.y);
}
function js(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function qs(e, t, i, n, a) {
  return e -= t, e = Oi(e, 1 / i, n), a !== void 0 && (e = Oi(e, 1 / a, n)), e;
}
function Nu(e, t = 0, i = 1, n = 0.5, a, o = e, r = e) {
  if (Te.test(t) && (t = parseFloat(t), t = j(r.min, r.max, t / 100) - r.min), typeof t != "number")
    return;
  let l = j(o.min, o.max, n);
  e === o && (l -= t), e.min = qs(e.min, t, i, l, a), e.max = qs(e.max, t, i, l, a);
}
function Hs(e, t, [i, n, a], o, r) {
  Nu(e, t[i], t[n], t[a], t.scale, o, r);
}
const _u = ["x", "scaleX", "originX"], Xu = ["y", "scaleY", "originY"];
function Ws(e, t, i, n) {
  Hs(e.x, t, _u, i ? i.x : void 0, n ? n.x : void 0), Hs(e.y, t, Xu, i ? i.y : void 0, n ? n.y : void 0);
}
function Us(e) {
  return e.translate === 0 && e.scale === 1;
}
function ol(e) {
  return Us(e.x) && Us(e.y);
}
function Os(e, t) {
  return e.min === t.min && e.max === t.max;
}
function $u(e, t) {
  return Os(e.x, t.x) && Os(e.y, t.y);
}
function Ns(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function rl(e, t) {
  return Ns(e.x, t.x) && Ns(e.y, t.y);
}
function _s(e) {
  return Q(e.x) / Q(e.y);
}
function Xs(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Gu {
  constructor() {
    this.members = [];
  }
  add(t) {
    na(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (aa(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(t) {
    const i = this.members.findIndex((a) => t === a);
    if (i === 0)
      return !1;
    let n;
    for (let a = i; a >= 0; a--) {
      const o = this.members[a];
      if (o.isPresent !== !1) {
        n = o;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, i) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, i && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: a } = t.options;
      a === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: i, resumingFrom: n } = t;
      i.onExitComplete && i.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ku(e, t, i) {
  let n = "";
  const a = e.x.translate / t.x, o = e.y.translate / t.y, r = i?.z || 0;
  if ((a || o || r) && (n = `translate3d(${a}px, ${o}px, ${r}px) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), i) {
    const { transformPerspective: d, rotate: u, rotateX: m, rotateY: g, skewX: S, skewY: b } = i;
    d && (n = `perspective(${d}px) ${n}`), u && (n += `rotate(${u}deg) `), m && (n += `rotateX(${m}deg) `), g && (n += `rotateY(${g}deg) `), S && (n += `skewX(${S}deg) `), b && (n += `skewY(${b}deg) `);
  }
  const l = e.x.scale * t.x, c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (n += `scale(${l}, ${c})`), n || "none";
}
const hn = ["", "X", "Y", "Z"], Zu = 1e3;
let Yu = 0;
function yn(e, t, i, n) {
  const { latestValues: a } = t;
  a[e] && (i[e] = a[e], t.setStaticValue(e, 0), n && (n[e] = 0));
}
function ll(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const i = $r(t);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: a, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(i, "transform", P, !(a || o));
  }
  const { parent: n } = e;
  n && !n.hasCheckedOptimisedAppear && ll(n);
}
function cl({ attachResizeListener: e, defaultParent: t, measureScroll: i, checkIsScrollRoot: n, resetTransform: a }) {
  return class {
    constructor(r = {}, l = t?.()) {
      this.id = Yu++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(em), this.nodes.forEach(am), this.nodes.forEach(sm), this.nodes.forEach(tm);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ju());
    }
    addEventListener(r, l) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new oa()), this.eventHandlers.get(r).add(l);
    }
    notifyListeners(r, ...l) {
      const c = this.eventHandlers.get(r);
      c && c.notify(...l);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = Fa(r) && !qd(r), this.instance = r;
      const { layoutId: l, layout: c, visualElement: d } = this.options;
      if (d && !d.current && d.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || l) && (this.isLayoutDirty = !0), e) {
        let u, m = 0;
        const g = () => this.root.updateBlockedByResize = !1;
        P.read(() => {
          m = window.innerWidth;
        }), e(r, () => {
          const S = window.innerWidth;
          S !== m && (m = S, this.root.updateBlockedByResize = !0, u && u(), u = qu(g, 250), Pi.hasAnimatedSinceResize && (Pi.hasAnimatedSinceResize = !1, this.nodes.forEach(Ks)));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && d && (l || c) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: m, hasRelativeLayoutChanged: g, layout: S }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const b = this.options.transition || d.getDefaultTransition() || dm, { onLayoutAnimationStart: x, onLayoutAnimationComplete: y } = d.getProps(), C = !this.targetLayout || !rl(this.targetLayout, S), h = !m && g;
        if (this.options.layoutRoot || this.resumeFrom || h || m && (C || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = {
            ...ba(b, "layout"),
            onPlay: x,
            onComplete: y
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = !1), this.startAnimation(v), this.setAnimationOrigin(u, h);
        } else
          m || Ks(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = S;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ye(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(om), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ll(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const m = this.path[u];
        m.shouldResetTransform = !0, m.updateScroll("snapshot"), m.options.layoutRoot && m.willUpdate(!1);
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c)
        return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($s);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Gs);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(nm), this.nodes.forEach(Qu), this.nodes.forEach(Ju)) : this.nodes.forEach(Gs), this.clearAllSnapshots();
      const l = ne.now();
      _.delta = Ie(0, 1e3 / 60, l - _.timestamp), _.timestamp = l, _.isProcessing = !0, sn.update.process(_), sn.preRender.process(_), sn.render.process(_), _.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ta.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(im), this.sharedNodes.forEach(rm);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, P.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      P.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Q(this.snapshot.measuredBox.x) && !Q(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = W(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (l = !1), l && this.instance) {
        const c = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: c,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!a)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !ol(this.projectionDelta), c = this.getTransformTemplate(), d = c ? c(this.latestValues, "") : void 0, u = d !== this.prevTransformTemplateValue;
      r && this.instance && (l || Ke(this.latestValues) || u) && (a(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return r && (c = this.removeTransform(c)), pm(c), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return W();
      const l = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(um))) {
        const { scroll: d } = this.root;
        d && (gt(l.x, d.offset.x), gt(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      const l = W();
      if (le(l, r), this.scroll?.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: m } = d;
        d !== this.root && u && m.layoutScroll && (u.wasRoot && le(l, r), gt(l.x, u.offset.x), gt(l.y, u.offset.y));
      }
      return l;
    }
    applyTransform(r, l = !1) {
      const c = W();
      le(c, r);
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        !l && u.options.layoutScroll && u.scroll && u !== u.root && ht(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Ke(u.latestValues) && ht(c, u.latestValues);
      }
      return Ke(this.latestValues) && ht(c, this.latestValues), c;
    }
    removeTransform(r) {
      const l = W();
      le(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!d.instance || !Ke(d.latestValues))
          continue;
        Wn(d.latestValues) && d.updateSnapshot();
        const u = W(), m = d.measurePageBox();
        le(u, m), Ws(l, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u);
      }
      return Ke(this.latestValues) && Ws(l, this.latestValues), l;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(r || c && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: m } = this.options;
      if (!(!this.layout || !(u || m))) {
        if (this.resolvedRelativeTargetAt = _.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = W(), this.relativeTargetOrigin = W(), Nt(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = W(), this.targetWithTransforms = W()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xu(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : le(this.target, this.layout.layoutBox), Wr(this.target, this.targetDelta)) : le(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const g = this.getClosestProjectingParent();
          g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = W(), this.relativeTargetOrigin = W(), Nt(this.relativeTargetOrigin, this.target, g.target), le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Wn(this.parent.latestValues) || Hr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const r = this.getLead(), l = !!this.resumingFrom || this !== r;
      let c = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === _.timestamp && (c = !1), c)
        return;
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      le(this.layoutCorrected, this.layout.layoutBox);
      const m = this.treeScale.x, g = this.treeScale.y;
      zp(this.layoutCorrected, this.treeScale, this.path, l), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = W());
      const { target: S } = r;
      if (!S) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (js(this.prevProjectionDelta.x, this.projectionDelta.x), js(this.prevProjectionDelta.y, this.projectionDelta.y)), Ot(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== m || this.treeScale.y !== g || !Xs(this.projectionDelta.x, this.prevProjectionDelta.x) || !Xs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.visualElement?.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = yt(), this.projectionDelta = yt(), this.projectionDeltaWithTransform = yt();
    }
    setAnimationOrigin(r, l = !1) {
      const c = this.snapshot, d = c ? c.latestValues : {}, u = { ...this.latestValues }, m = yt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const g = W(), S = c ? c.source : void 0, b = this.layout ? this.layout.source : void 0, x = S !== b, y = this.getStack(), C = !y || y.members.length <= 1, h = !!(x && !C && this.options.crossfade === !0 && !this.path.some(cm));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (z) => {
        const F = z / 1e3;
        Zs(m.x, r.x, F), Zs(m.y, r.y, F), this.setTargetDelta(m), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Nt(g, this.layout.layoutBox, this.relativeParent.layout.layoutBox), lm(this.relativeTarget, this.relativeTargetOrigin, g, F), v && $u(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = W()), le(v, this.relativeTarget)), x && (this.animationValues = u, Wu(u, d, this.latestValues, F, h, C)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = F;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (ye(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = P.update(() => {
        Pi.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = he(0)), this.currentAnimation = Pu(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (l) => {
            this.mixTargetDelta(l), r.onUpdate && r.onUpdate(l);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Zu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: l, target: c, layout: d, latestValues: u } = r;
      if (!(!l || !c || !d)) {
        if (this !== r && this.layout && d && dl(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          c = this.target || W();
          const m = Q(this.layout.layoutBox.x);
          c.x.min = r.target.x.min, c.x.max = c.x.min + m;
          const g = Q(this.layout.layoutBox.y);
          c.y.min = r.target.y.min, c.y.max = c.y.min + g;
        }
        le(l, c), ht(l, u), Ot(this.projectionDeltaWithTransform, this.layoutCorrected, l, u);
      }
    }
    registerSharedNode(r, l) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Gu()), this.sharedNodes.get(r).add(l);
      const d = l.options.initialPromotionConfig;
      l.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: l, preserveFollowOpacity: c } = {}) {
      const d = this.getStack();
      d && d.promote(this, c), r && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let l = !1;
      const { latestValues: c } = r;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0), !l)
        return;
      const d = {};
      c.z && yn("z", r, d, this.animationValues);
      for (let u = 0; u < hn.length; u++)
        yn(`rotate${hn[u]}`, r, d, this.animationValues), yn(`skew${hn[u]}`, r, d, this.animationValues);
      r.render();
      for (const u in d)
        r.setStaticValue(u, d[u]), this.animationValues && (this.animationValues[u] = d[u]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, l) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = Di(l?.pointerEvents) || "", r.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Di(l?.pointerEvents) || ""), this.hasProjected && !Ke(this.latestValues) && (r.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const u = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let m = Ku(this.projectionDeltaWithTransform, this.treeScale, u);
      c && (m = c(u, m)), r.transform = m;
      const { x: g, y: S } = this.projectionDelta;
      r.transformOrigin = `${g.origin * 100}% ${S.origin * 100}% 0`, d.animationValues ? r.opacity = d === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : r.opacity = d === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const b in Qt) {
        if (u[b] === void 0)
          continue;
        const { correct: x, applyTo: y, isCSSVariable: C } = Qt[b], h = m === "none" ? u[b] : x(u[b], d);
        if (y) {
          const v = y.length;
          for (let z = 0; z < v; z++)
            r[y[z]] = h;
        } else
          C ? this.options.visualElement.renderState.vars[b] = h : r[b] = h;
      }
      this.options.layoutId && (r.pointerEvents = d === this ? Di(l?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach($s), this.root.sharedNodes.clear();
    }
  };
}
function Qu(e) {
  e.updateLayout();
}
function Ju(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: n } = e.layout, { animationType: a } = e.options, o = t.source !== e.layout.source;
    a === "size" ? de((u) => {
      const m = o ? t.measuredBox[u] : t.layoutBox[u], g = Q(m);
      m.min = i[u].min, m.max = m.min + g;
    }) : dl(a, t.layoutBox, i) && de((u) => {
      const m = o ? t.measuredBox[u] : t.layoutBox[u], g = Q(i[u]);
      m.max = m.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + g);
    });
    const r = yt();
    Ot(r, i, t.layoutBox);
    const l = yt();
    o ? Ot(l, e.applyTransform(n, !0), t.measuredBox) : Ot(l, i, t.layoutBox);
    const c = !ol(r);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: m, layout: g } = u;
        if (m && g) {
          const S = W();
          Nt(S, t.layoutBox, m.layoutBox);
          const b = W();
          Nt(b, i, g.layoutBox), rl(S, b) || (d = !0), u.options.layoutRoot && (e.relativeTarget = b, e.relativeTargetOrigin = S, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: t,
      delta: l,
      layoutDelta: r,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function em(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tm(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function im(e) {
  e.clearSnapshot();
}
function $s(e) {
  e.clearMeasurements();
}
function Gs(e) {
  e.isLayoutDirty = !1;
}
function nm(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Ks(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function am(e) {
  e.resolveTargetDelta();
}
function sm(e) {
  e.calcProjection();
}
function om(e) {
  e.resetSkewAndRotation();
}
function rm(e) {
  e.removeLeadSnapshot();
}
function Zs(e, t, i) {
  e.translate = j(t.translate, 0, i), e.scale = j(t.scale, 1, i), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ys(e, t, i, n) {
  e.min = j(t.min, i.min, n), e.max = j(t.max, i.max, n);
}
function lm(e, t, i, n) {
  Ys(e.x, t.x, i.x, n), Ys(e.y, t.y, i.y, n);
}
function cm(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const dm = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Qs = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Js = Qs("applewebkit/") && !Qs("chrome/") ? Math.round : ae;
function eo(e) {
  e.min = Js(e.min), e.max = Js(e.max);
}
function pm(e) {
  eo(e.x), eo(e.y);
}
function dl(e, t, i) {
  return e === "position" || e === "preserve-aspect" && !yu(_s(t), _s(i), 0.2);
}
function um(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const mm = cl({
  attachResizeListener: (e, t) => Jt(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), xn = {
  current: void 0
}, pl = cl({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!xn.current) {
      const e = new mm({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), xn.current = e;
    }
    return xn.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), fm = {
  pan: {
    Feature: Bu
  },
  drag: {
    Feature: Eu,
    ProjectionNode: pl,
    MeasureLayout: nl
  }
};
function to(e, t, i) {
  const { props: n } = e;
  e.animationState && n.whileHover && e.animationState.setActive("whileHover", i === "Start");
  const a = "onHover" + i, o = n[a];
  o && P.postRender(() => o(t, oi(t)));
}
class gm extends Re {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Id(t, (i, n) => (to(this.node, n, "Start"), (a) => to(this.node, a, "End"))));
  }
  unmount() {
  }
}
class hm extends Re {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ii(Jt(this.node.current, "focus", () => this.onFocus()), Jt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function io(e, t, i) {
  const { props: n } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && n.whileTap && e.animationState.setActive("whileTap", i === "Start");
  const a = "onTap" + (i === "End" ? "" : i), o = n[a];
  o && P.postRender(() => o(t, oi(t)));
}
class ym extends Re {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Ad(t, (i, n) => (io(this.node, n, "Start"), (a, { success: o }) => io(this.node, a, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Gn = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), xm = (e) => {
  const t = Gn.get(e.target);
  t && t(e);
}, vm = (e) => {
  e.forEach(xm);
};
function bm({ root: e, ...t }) {
  const i = e || document;
  vn.has(i) || vn.set(i, {});
  const n = vn.get(i), a = JSON.stringify(t);
  return n[a] || (n[a] = new IntersectionObserver(vm, { root: e, ...t })), n[a];
}
function wm(e, t, i) {
  const n = bm(t);
  return Gn.set(e, i), n.observe(e), () => {
    Gn.delete(e), n.unobserve(e);
  };
}
const Sm = {
  some: 0,
  all: 1
};
class Cm extends Re {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: i, margin: n, amount: a = "some", once: o } = t, r = {
      root: i ? i.current : void 0,
      rootMargin: n,
      threshold: typeof a == "number" ? a : Sm[a]
    }, l = (c) => {
      const { isIntersecting: d } = c;
      if (this.isInView === d || (this.isInView = d, o && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: m } = this.node.getProps(), g = d ? u : m;
      g && g(c);
    };
    return wm(this.node.current, r, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(Tm(t, i)) && this.startObserver();
  }
  unmount() {
  }
}
function Tm({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (i) => e[i] !== t[i];
}
const Im = {
  inView: {
    Feature: Cm
  },
  tap: {
    Feature: ym
  },
  focus: {
    Feature: hm
  },
  hover: {
    Feature: gm
  }
}, Fm = {
  layout: {
    ProjectionNode: pl,
    MeasureLayout: nl
  }
}, km = {
  ...pu,
  ...Im,
  ...fm,
  ...Fm
}, w = /* @__PURE__ */ kp(km, Hp), Lm = 50, no = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
}), Am = () => ({
  time: 0,
  x: no(),
  y: no()
}), zm = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function ao(e, t, i, n) {
  const a = i[t], { length: o, position: r } = zm[t], l = a.current, c = i.time;
  a.current = e[`scroll${r}`], a.scrollLength = e[`scroll${o}`] - e[`client${o}`], a.offset.length = 0, a.offset[0] = 0, a.offset[1] = a.scrollLength, a.progress = /* @__PURE__ */ Ct(0, a.scrollLength, a.current);
  const d = n - c;
  a.velocity = d > Lm ? 0 : ra(a.current - l, d);
}
function Em(e, t, i) {
  ao(e, "x", t, i), ao(e, "y", t, i), t.time = i;
}
function Bm(e, t) {
  const i = { x: 0, y: 0 };
  let n = e;
  for (; n && n !== t; )
    if (Ca(n))
      i.x += n.offsetLeft, i.y += n.offsetTop, n = n.offsetParent;
    else if (n.tagName === "svg") {
      const a = n.getBoundingClientRect();
      n = n.parentElement;
      const o = n.getBoundingClientRect();
      i.x += a.left - o.left, i.y += a.top - o.top;
    } else if (n instanceof SVGGraphicsElement) {
      const { x: a, y: o } = n.getBBox();
      i.x += a, i.y += o;
      let r = null, l = n.parentNode;
      for (; !r; )
        l.tagName === "svg" && (r = l), l = n.parentNode;
      n = r;
    } else
      break;
  return i;
}
const Kn = {
  start: 0,
  center: 0.5,
  end: 1
};
function so(e, t, i = 0) {
  let n = 0;
  if (e in Kn && (e = Kn[e]), typeof e == "string") {
    const a = parseFloat(e);
    e.endsWith("px") ? n = a : e.endsWith("%") ? e = a / 100 : e.endsWith("vw") ? n = a / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = a / 100 * document.documentElement.clientHeight : e = a;
  }
  return typeof e == "number" && (n = t * e), i + n;
}
const Mm = [0, 0];
function Vm(e, t, i, n) {
  let a = Array.isArray(e) ? e : Mm, o = 0, r = 0;
  return typeof e == "number" ? a = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? a = e.split(" ") : a = [e, Kn[e] ? e : "0"]), o = so(a[0], i, n), r = so(a[1], t), o - r;
}
const Dm = {
  All: [
    [0, 0],
    [1, 1]
  ]
}, Pm = { x: 0, y: 0 };
function Rm(e) {
  return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : { width: e.clientWidth, height: e.clientHeight };
}
function jm(e, t, i) {
  const { offset: n = Dm.All } = i, { target: a = e, axis: o = "y" } = i, r = o === "y" ? "height" : "width", l = a !== e ? Bm(a, e) : Pm, c = a === e ? { width: e.scrollWidth, height: e.scrollHeight } : Rm(a), d = {
    width: e.clientWidth,
    height: e.clientHeight
  };
  t[o].offset.length = 0;
  let u = !t[o].interpolate;
  const m = n.length;
  for (let g = 0; g < m; g++) {
    const S = Vm(n[g], d[r], c[r], l[o]);
    !u && S !== t[o].interpolatorOffsets[g] && (u = !0), t[o].offset[g] = S;
  }
  u && (t[o].interpolate = ha(t[o].offset, nr(n), { clamp: !1 }), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = Ie(0, 1, t[o].interpolate(t[o].current));
}
function qm(e, t = e, i) {
  if (i.x.targetOffset = 0, i.y.targetOffset = 0, t !== e) {
    let n = t;
    for (; n && n !== e; )
      i.x.targetOffset += n.offsetLeft, i.y.targetOffset += n.offsetTop, n = n.offsetParent;
  }
  i.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, i.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, i.x.containerLength = e.clientWidth, i.y.containerLength = e.clientHeight;
}
function Hm(e, t, i, n = {}) {
  return {
    measure: (a) => {
      qm(e, n.target, i), Em(e, i, a), (n.offset || n.target) && jm(e, i, n);
    },
    notify: () => t(i)
  };
}
const Bt = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), ro = (e) => e === document.scrollingElement ? window : e;
function ul(e, { container: t = document.scrollingElement, ...i } = {}) {
  if (!t)
    return ae;
  let n = bn.get(t);
  n || (n = /* @__PURE__ */ new Set(), bn.set(t, n));
  const a = Am(), o = Hm(t, e, a, i);
  if (n.add(o), !Bt.has(t)) {
    const l = () => {
      for (const m of n)
        m.measure(_.timestamp);
      P.preUpdate(c);
    }, c = () => {
      for (const m of n)
        m.notify();
    }, d = () => P.read(l);
    Bt.set(t, d);
    const u = ro(t);
    window.addEventListener("resize", d, { passive: !0 }), t !== document.documentElement && oo.set(t, jd(t, d)), u.addEventListener("scroll", d, { passive: !0 }), d();
  }
  const r = Bt.get(t);
  return P.read(r, !1, !0), () => {
    ye(r);
    const l = bn.get(t);
    if (!l || (l.delete(o), l.size))
      return;
    const c = Bt.get(t);
    Bt.delete(t), c && (ro(t).removeEventListener("scroll", c), oo.get(t)?.(), window.removeEventListener("resize", c));
  };
}
const lo = /* @__PURE__ */ new Map();
function Wm(e) {
  const t = { value: 0 }, i = ul((n) => {
    t.value = n[e.axis].progress * 100;
  }, e);
  return { currentTime: t, cancel: i };
}
function ml({ source: e, container: t, ...i }) {
  const { axis: n } = i;
  e && (t = e);
  const a = lo.get(t) ?? /* @__PURE__ */ new Map();
  lo.set(t, a);
  const o = i.target ?? "self", r = a.get(o) ?? {}, l = n + (i.offset ?? []).join(",");
  return r[l] || (r[l] = !i.target && rr() ? new ScrollTimeline({ source: t, axis: n }) : Wm({ container: t, ...i })), r[l];
}
function Um(e, t) {
  const i = ml(t);
  return e.attachTimeline({
    timeline: t.target ? void 0 : i,
    observe: (n) => (n.pause(), Cr((a) => {
      n.time = n.iterationDuration * a;
    }, i))
  });
}
function Om(e) {
  return e.length === 2;
}
function Nm(e, t) {
  return Om(e) ? ul((i) => {
    e(i[t.axis].progress, i);
  }, t) : Cr(e, ml(t));
}
function _m(e, { axis: t = "y", container: i = document.scrollingElement, ...n } = {}) {
  if (!i)
    return ae;
  const a = { axis: t, container: i, ...n };
  return typeof e == "function" ? Nm(e, a) : Um(e, a);
}
const Xm = () => ({
  scrollX: he(0),
  scrollY: he(0),
  scrollXProgress: he(0),
  scrollYProgress: he(0)
}), ui = (e) => e ? !e.current : !1;
function Fe({ container: e, target: t, ...i } = {}) {
  const n = Ft(Xm), a = I(null), o = I(!1), r = oe(() => (a.current = _m((l, { x: c, y: d }) => {
    n.scrollX.set(c.current), n.scrollXProgress.set(c.progress), n.scrollY.set(d.current), n.scrollYProgress.set(d.progress);
  }, {
    ...i,
    container: e?.current || void 0,
    target: t?.current || void 0
  }), () => {
    a.current?.();
  }), [e, t, JSON.stringify(i.offset)]);
  return Qi(() => {
    if (o.current = !1, ui(e) || ui(t)) {
      o.current = !0;
      return;
    } else
      return r();
  }, [r]), B(() => {
    if (o.current)
      return Gt(!ui(e)), Gt(!ui(t)), r();
  }, [r]), n;
}
function It(e) {
  const t = Ft(() => he(e)), { isStatic: i } = O(si);
  if (i) {
    const [, n] = T(e);
    B(() => t.on("change", n), []);
  }
  return t;
}
function Pa(e, t) {
  const i = It(t()), n = () => i.set(t());
  return n(), Qi(() => {
    const a = () => P.preRender(n, !1, !0), o = e.map((r) => r.on("change", a));
    return () => {
      o.forEach((r) => r()), ye(n);
    };
  }), i;
}
function co(e, ...t) {
  const i = e.length;
  function n() {
    let a = "";
    for (let o = 0; o < i; o++) {
      a += e[o];
      const r = t[o];
      r && (a += N(r) ? r.get() : r);
    }
    return a;
  }
  return Pa(t.filter(N), n);
}
function $m(e) {
  Wt.current = [], e();
  const t = Pa(Wt.current, e);
  return Wt.current = void 0, t;
}
function R(e, t, i, n) {
  if (typeof e == "function")
    return $m(e);
  const a = typeof t == "function" ? t : Hd(t, i, n);
  return Array.isArray(e) ? po(e, a) : po([e], ([o]) => a(o));
}
function po(e, t) {
  const i = Ft(() => []);
  return Pa(e, () => {
    i.length = 0;
    const n = e.length;
    for (let a = 0; a < n; a++)
      i[a] = e[a].get();
    return t(i);
  });
}
function Ni(e, t = {}) {
  const { isStatic: i } = O(si), n = () => N(e) ? e.get() : e;
  if (i)
    return R(n);
  const a = It(n());
  return ea(() => Wd(a, e, t), [a, JSON.stringify(t)]), a;
}
const Gm = {
  some: 0,
  all: 1
};
function Km(e, t, { root: i, margin: n, amount: a = "some" } = {}) {
  const o = Sa(e), r = /* @__PURE__ */ new WeakMap(), l = (d) => {
    d.forEach((u) => {
      const m = r.get(u.target);
      if (u.isIntersecting !== !!m)
        if (u.isIntersecting) {
          const g = t(u.target, u);
          typeof g == "function" ? r.set(u.target, g) : c.unobserve(u.target);
        } else typeof m == "function" && (m(u), r.delete(u.target));
    });
  }, c = new IntersectionObserver(l, {
    root: i,
    rootMargin: n,
    threshold: typeof a == "number" ? a : Gm[a]
  });
  return o.forEach((d) => c.observe(d)), () => c.disconnect();
}
function M(e, { root: t, margin: i, amount: n, once: a = !1, initial: o = !1 } = {}) {
  const [r, l] = T(o);
  return B(() => {
    if (!e.current || a && r)
      return;
    const c = () => (l(!0), a ? void 0 : () => l(!1)), d = {
      root: t && t.current || void 0,
      margin: i,
      amount: n
    };
    return Km(e.current, c, d);
  }, [t, e, i, a, n]), r;
}
const Zm = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function ue(e) {
  const [t, i] = T(!1), n = () => {
    i(!0);
  }, { src: a, alt: o, style: r, className: l, ...c } = e;
  return t ? /* @__PURE__ */ s(
    "div",
    {
      className: `inline-block bg-gray-100 text-center align-middle ${l ?? ""}`,
      style: r,
      children: /* @__PURE__ */ s("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ s("img", { src: Zm, alt: "Error loading image", ...c, "data-original-url": a }) })
    }
  ) : /* @__PURE__ */ s("img", { src: a, alt: o, className: l, style: r, ...c, onError: n });
}
const Ym = globalThis.__GLOBALS__.getAssetURL("sundas-horizontal-bglarge.png"), Qm = globalThis.__GLOBALS__.getAssetURL("sundas-portrait-bgsmall.png"), fl = Pe({
  lang: "en",
  setLang: () => {
  }
});
function Jm({ children: e }) {
  const [t, i] = T(() => {
    try {
      const a = localStorage.getItem("portfolio-lang");
      if (a === "en" || a === "es" || a === "ca") return a;
    } catch {
    }
    return "en";
  }), n = oe((a) => {
    i(a);
    try {
      localStorage.setItem("portfolio-lang", a);
    } catch {
    }
  }, []);
  return /* @__PURE__ */ s(fl.Provider, { value: { lang: t, setLang: n }, children: e });
}
function V() {
  return O(fl);
}
const e0 = {
  "nav.services": {
    "en": "Expertise",
    "es": "Expertise",
    "ca": "Expertise"
  },
  "nav.work": {
    "en": "Experience",
    "es": "Experience",
    "ca": "Experience"
  },
  "nav.teaching": {
    "en": "STEM Work",
    "es": "STEM Work",
    "ca": "STEM Work"
  },
  "nav.aboutMe": {
    "en": "Profile",
    "es": "Profile",
    "ca": "Profile"
  },
  "nav.contact": {
    "en": "Contact",
    "es": "Contact",
    "ca": "Contact"
  },
  "nav.back": {
    "en": "Back",
    "es": "Back",
    "ca": "Back"
  },
  "nav.subtitle": {
    "en": "Junior Product Manager · Network Engineering · STEM Lead",
    "es": "Junior Product Manager · Network Engineering · STEM Lead",
    "ca": "Junior Product Manager · Network Engineering · STEM Lead"
  },
  "hero.location": {
    "en": "Based in Vienna, Austria",
    "es": "Based in Vienna, Austria",
    "ca": "Based in Vienna, Austria"
  },
  "hero.role1": {
    "en": "Junior Product Manager",
    "es": "Junior Product Manager",
    "ca": "Junior Product Manager"
  },
  "hero.role2": {
    "en": "Network Engineering",
    "es": "Network Engineering",
    "ca": "Network Engineering"
  },
  "hero.a11y": {
    "en": "Sundas Syed · Junior Product Manager, Network Engineering and STEM Lead",
    "es": "Sundas Syed · Junior Product Manager, Network Engineering and STEM Lead",
    "ca": "Sundas Syed · Junior Product Manager, Network Engineering and STEM Lead"
  },
  "welcome.label": {
    "en": "Welcome",
    "es": "Welcome",
    "ca": "Welcome"
  },
  "welcome.line1": {
    "en": "Hi, I'm Sundas",
    "es": "Hi, I'm Sundas",
    "ca": "Hi, I'm Sundas"
  },
  "welcome.line2_prefix": {
    "en": "I connect",
    "es": "I connect",
    "ca": "I connect"
  },
  "welcome.line2_accent": {
    "en": "systems",
    "es": "systems",
    "ca": "systems"
  },
  "welcome.line2_suffix_desktop": {
    "en": "across",
    "es": "across",
    "ca": "across"
  },
  "welcome.line3": {
    "en": "engineering, data, and people",
    "es": "engineering, data, and people",
    "ca": "engineering, data, and people"
  },
  "welcome.body1": {
    "en": "Junior Product Manager in network engineering at Schrack Technik, WIA-Europe Regional Network Lead in Austria, and Mechatronics & Robotics graduate based in Vienna.",
    "es": "Junior Product Manager in network engineering at Schrack Technik, WIA-Europe Regional Network Lead in Austria, and Mechatronics & Robotics graduate based in Vienna.",
    "ca": "Junior Product Manager in network engineering at Schrack Technik, WIA-Europe Regional Network Lead in Austria, and Mechatronics & Robotics graduate based in Vienna."
  },
  "welcome.body2": {
    "en": "I work at the intersection of technical product data, process quality, documentation, supplier coordination, and STEM community building.",
    "es": "I work at the intersection of technical product data, process quality, documentation, supplier coordination, and STEM community building.",
    "ca": "I work at the intersection of technical product data, process quality, documentation, supplier coordination, and STEM community building."
  },
  "services.label": {
    "en": "What I Do",
    "es": "What I Do",
    "ca": "What I Do"
  },
  "services.headline1": {
    "en": "Technical",
    "es": "Technical",
    "ca": "Technical"
  },
  "services.headline2_accent": {
    "en": "product work",
    "es": "product work",
    "ca": "product work"
  },
  "services.headline3": {
    "en": "with structure",
    "es": "with structure",
    "ca": "with structure"
  },
  "services.subtitle": {
    "en": "A profile built around network engineering, product data, technical documentation, process interfaces, and clear communication across teams.",
    "es": "A profile built around network engineering, product data, technical documentation, process interfaces, and clear communication across teams.",
    "ca": "A profile built around network engineering, product data, technical documentation, process interfaces, and clear communication across teams."
  },
  "services.ux.title": {
    "en": "Product Data & Assortment",
    "es": "Product Data & Assortment",
    "ca": "Product Data & Assortment"
  },
  "services.ux.description": {
    "en": "Preparing, analyzing, and maintaining technical, logistical, and commercial product data for structured assortment integration and reliable article master data.",
    "es": "Preparing, analyzing, and maintaining technical, logistical, and commercial product data for structured assortment integration and reliable article master data.",
    "ca": "Preparing, analyzing, and maintaining technical, logistical, and commercial product data for structured assortment integration and reliable article master data."
  },
  "services.systems.title": {
    "en": "Network Engineering",
    "es": "Network Engineering",
    "ca": "Network Engineering"
  },
  "services.systems.description": {
    "en": "Working with technical specifications, measurements, verification, supplier coordination, and quality requirements for data and network technology products.",
    "es": "Working with technical specifications, measurements, verification, supplier coordination, and quality requirements for data and network technology products.",
    "ca": "Working with technical specifications, measurements, verification, supplier coordination, and quality requirements for data and network technology products."
  },
  "services.ai.title": {
    "en": "Documentation & ERP",
    "es": "Documentation & ERP",
    "ca": "Documentation & ERP"
  },
  "services.ai.description": {
    "en": "Creating technical documentation, specifications, data sheets, ERP article records, product support material, and traceable process documentation.",
    "es": "Creating technical documentation, specifications, data sheets, ERP article records, product support material, and traceable process documentation.",
    "ca": "Creating technical documentation, specifications, data sheets, ERP article records, product support material, and traceable process documentation."
  },
  "services.research.title": {
    "en": "STEM Leadership",
    "es": "STEM Leadership",
    "ca": "STEM Leadership"
  },
  "services.research.description": {
    "en": "Leading STEM formats, school workshops, events, communication, partner development, and community programs for girls and women in technical fields.",
    "es": "Leading STEM formats, school workshops, events, communication, partner development, and community programs for girls and women in technical fields.",
    "ca": "Leading STEM formats, school workshops, events, communication, partner development, and community programs for girls and women in technical fields."
  },
  "projects.label": {
    "en": "Professional Experience",
    "es": "Professional Experience",
    "ca": "Professional Experience"
  },
  "projects.seeAll": {
    "en": "See all experience",
    "es": "See all experience",
    "ca": "See all experience"
  },
  "projects.seeAllShort": {
    "en": "All",
    "es": "All",
    "ca": "All"
  },
  "projects.cursorView": {
    "en": "View",
    "es": "View",
    "ca": "View"
  },
  "projects.viewAll": {
    "en": "View all experience",
    "es": "View all experience",
    "ca": "View all experience"
  },
  "allProjects.title": {
    "en": "All Experience",
    "es": "All Experience",
    "ca": "All Experience"
  },
  "allProjects.subtitle": {
    "en": "A focused overview of technical product management, aerospace/STEM network leadership, UAV product support, precision engineering, medical technology, and research program work.",
    "es": "A focused overview of technical product management, aerospace/STEM network leadership, UAV product support, precision engineering, medical technology, and research program work.",
    "ca": "A focused overview of technical product management, aerospace/STEM network leadership, UAV product support, precision engineering, medical technology, and research program work."
  },
  "teaching.label": {
    "en": "STEM & Training",
    "es": "STEM & Training",
    "ca": "STEM & Training"
  },
  "teaching.headline1": {
    "en": "Building",
    "es": "Building",
    "ca": "Building"
  },
  "teaching.headline2_accent": {
    "en": "access",
    "es": "access",
    "ca": "access"
  },
  "teaching.headline2_suffix": {
    "en": "to technical fields",
    "es": "to technical fields",
    "ca": "to technical fields"
  },
  "teaching.subtitle": {
    "en": "Alongside technical product work, Sundas leads STEM community formats, workshops, event programs, communication, and partner development.",
    "es": "Alongside technical product work, Sundas leads STEM community formats, workshops, event programs, communication, and partner development.",
    "ca": "Alongside technical product work, Sundas leads STEM community formats, workshops, event programs, communication, and partner development."
  },
  "teaching.un.title": {
    "en": "United Nations",
    "es": "United Nations",
    "ca": "United Nations"
  },
  "teaching.un.description": {
    "en": "WIA observer presence at the United Nations, connecting aerospace and STEM advocacy with international dialogue, representation, and network visibility.",
    "es": "WIA observer presence at the United Nations, connecting aerospace and STEM advocacy with international dialogue, representation, and network visibility.",
    "ca": "WIA observer presence at the United Nations, connecting aerospace and STEM advocacy with international dialogue, representation, and network visibility."
  },
  "teaching.schrack.title": {
    "en": "Schrack Technik",
    "es": "Schrack Technik",
    "ca": "Schrack Technik"
  },
  "teaching.schrack.description": {
    "en": "Junior Product Manager in network engineering, preparing product data, article master data, technical documentation, supplier coordination, and data-based analysis.",
    "es": "Junior Product Manager in network engineering, preparing product data, article master data, technical documentation, supplier coordination, and data-based analysis.",
    "ca": "Junior Product Manager in network engineering, preparing product data, article master data, technical documentation, supplier coordination, and data-based analysis."
  },
  "teaching.schiebel.title": {
    "en": "Schiebel",
    "es": "Schiebel",
    "ca": "Schiebel"
  },
  "teaching.schiebel.description": {
    "en": "Integrated Logistics Support internship in product support, technical documentation, master data, ERP article creation, BOM checks, standards, and FMEA coordination.",
    "es": "Integrated Logistics Support internship in product support, technical documentation, master data, ERP article creation, BOM checks, standards, and FMEA coordination.",
    "ca": "Integrated Logistics Support internship in product support, technical documentation, master data, ERP article creation, BOM checks, standards, and FMEA coordination."
  },
  "teaching.glock.title": {
    "en": "Glock",
    "es": "Glock",
    "ca": "Glock"
  },
  "teaching.glock.description": {
    "en": "Precision engineering context focused on disciplined technical work, quality awareness, documentation, and structured industrial processes.",
    "es": "Precision engineering context focused on disciplined technical work, quality awareness, documentation, and structured industrial processes.",
    "ca": "Precision engineering context focused on disciplined technical work, quality awareness, documentation, and structured industrial processes."
  },
  "teaching.austro.title": {
    "en": "Austro Control",
    "es": "Austro Control",
    "ca": "Austro Control"
  },
  "teaching.austro.description": {
    "en": "Safety Management experience with TOKAI, ASOR occurrence-reporting workflows, airspace infringement data, and technical fault ticket systems.",
    "es": "Safety Management experience with TOKAI, ASOR occurrence-reporting workflows, airspace infringement data, and technical fault ticket systems.",
    "ca": "Safety Management experience with TOKAI, ASOR occurrence-reporting workflows, airspace infringement data, and technical fault ticket systems."
  },
  "teaching.teaching.title": {
    "en": "WIA-Europe Austria",
    "es": "WIA-Europe Austria",
    "ca": "WIA-Europe Austria"
  },
  "teaching.teaching.description": {
    "en": "Regional Network Lead for Austria, representing Women in Aerospace Europe and coordinating STEM formats with partners in industry, research, education, and European networks.",
    "es": "Regional Network Lead for Austria, representing Women in Aerospace Europe and coordinating STEM formats with partners in industry, research, education, and European networks.",
    "ca": "Regional Network Lead for Austria, representing Women in Aerospace Europe and coordinating STEM formats with partners in industry, research, education, and European networks."
  },
  "teaching.workshops.title": {
    "en": "FIT Ambassador",
    "es": "FIT Ambassador",
    "ca": "FIT Ambassador"
  },
  "teaching.workshops.description": {
    "en": "Runs interactive school workshops on women in natural sciences and technology, AI, study choice, study experience, diversity, and respectful discussion culture.",
    "es": "Runs interactive school workshops on women in natural sciences and technology, AI, study choice, study experience, diversity, and respectful discussion culture.",
    "ca": "Runs interactive school workshops on women in natural sciences and technology, AI, study choice, study experience, diversity, and respectful discussion culture."
  },
  "niceToMeet.label": {
    "en": "Profile",
    "es": "Profile",
    "ca": "Profile"
  },
  "niceToMeet.headline1": {
    "en": "Beyond the",
    "es": "Beyond the",
    "ca": "Beyond the"
  },
  "niceToMeet.headline2": {
    "en": "resume",
    "es": "resume",
    "ca": "resume"
  },
  "niceToMeet.body1": {
    "en": "Sundas brings technical system understanding, strong communication, teamwork, leadership, and a process-oriented mindset to product, network engineering, and STEM community work.",
    "es": "Sundas brings technical system understanding, strong communication, teamwork, leadership, and a process-oriented mindset to product, network engineering, and STEM community work.",
    "ca": "Sundas brings technical system understanding, strong communication, teamwork, leadership, and a process-oriented mindset to product, network engineering, and STEM community work."
  },
  "niceToMeet.body2": {
    "en": "Her background spans mechatronics, robotics, aerospace specialization, network engineering, UAV product support, precision engineering, medical technology, and research programs.",
    "es": "Her background spans mechatronics, robotics, aerospace specialization, network engineering, UAV product support, precision engineering, medical technology, and research programs.",
    "ca": "Her background spans mechatronics, robotics, aerospace specialization, network engineering, UAV product support, precision engineering, medical technology, and research programs."
  },
  "niceToMeet.colleaguesDescribe": {
    "en": "Core strengths",
    "es": "Core strengths",
    "ca": "Core strengths"
  },
  "niceToMeet.basedIn.label": {
    "en": "Based in",
    "es": "Based in",
    "ca": "Based in"
  },
  "niceToMeet.basedIn.value": {
    "en": "Vienna, Austria · +43 69910847004 · sundas_syed@hotmail.com",
    "es": "Vienna, Austria · +43 69910847004 · sundas_syed@hotmail.com",
    "ca": "Vienna, Austria · +43 69910847004 · sundas_syed@hotmail.com"
  },
  "niceToMeet.languages.label": {
    "en": "Languages",
    "es": "Languages",
    "ca": "Languages"
  },
  "niceToMeet.languages.value": {
    "en": "Urdu native/bilingual, German native/business fluent, English fluent, French elementary",
    "es": "Urdu native/bilingual, German native/business fluent, English fluent, French elementary",
    "ca": "Urdu native/bilingual, German native/business fluent, English fluent, French elementary"
  },
  "niceToMeet.studies.label": {
    "en": "Education",
    "es": "Education",
    "ca": "Education"
  },
  "niceToMeet.studies.value": {
    "en": "BSc Mechatronics and Robotics, FH Technikum Wien; BSc Mechatronics and Microsystems Technology with Aerospace specialization, FH Wiener Neustadt; Industrial Engineering - Mechanical Engineering, TGM",
    "es": "BSc Mechatronics and Robotics, FH Technikum Wien; BSc Mechatronics and Microsystems Technology with Aerospace specialization, FH Wiener Neustadt; Industrial Engineering - Mechanical Engineering, TGM",
    "ca": "BSc Mechatronics and Robotics, FH Technikum Wien; BSc Mechatronics and Microsystems Technology with Aerospace specialization, FH Wiener Neustadt; Industrial Engineering - Mechanical Engineering, TGM"
  },
  "niceToMeet.offTheClock.label": {
    "en": "Interests",
    "es": "Interests",
    "ca": "Interests"
  },
  "niceToMeet.offTheClock.value": {
    "en": "Sports, reading, and association work with Women in Aerospace Europe",
    "es": "Sports, reading, and association work with Women in Aerospace Europe",
    "ca": "Sports, reading, and association work with Women in Aerospace Europe"
  },
  "niceToMeet.alsoMe.label": {
    "en": "Awards",
    "es": "Awards",
    "ca": "Awards"
  },
  "niceToMeet.alsoMe.value": {
    "en": "Training as a Safety Representative (2019); Botball Judge's Choice Award (2018)",
    "es": "Training as a Safety Representative (2019); Botball Judge's Choice Award (2018)",
    "ca": "Training as a Safety Representative (2019); Botball Judge's Choice Award (2018)"
  },
  "niceToMeet.obsession.label": {
    "en": "Tools",
    "es": "Tools",
    "ca": "Tools"
  },
  "niceToMeet.obsession.value": {
    "en": "MS Office, ERP systems, SolidWorks, CATIA V5, Autodesk Inventor",
    "es": "MS Office, ERP systems, SolidWorks, CATIA V5, Autodesk Inventor",
    "ca": "MS Office, ERP systems, SolidWorks, CATIA V5, Autodesk Inventor"
  },
  "niceToMeet.tag.systemsThinker": {
    "en": "Systems thinking",
    "es": "Systems thinking",
    "ca": "Systems thinking"
  },
  "niceToMeet.tag.proactive": {
    "en": "Technical consulting",
    "es": "Technical consulting",
    "ca": "Technical consulting"
  },
  "niceToMeet.tag.fun": {
    "en": "Network engineering",
    "es": "Network engineering",
    "ca": "Network engineering"
  },
  "niceToMeet.tag.calm": {
    "en": "Communication",
    "es": "Communication",
    "ca": "Communication"
  },
  "niceToMeet.tag.curious": {
    "en": "Team leadership",
    "es": "Team leadership",
    "ca": "Team leadership"
  },
  "niceToMeet.tag.perfectionist": {
    "en": "Process management",
    "es": "Process management",
    "ca": "Process management"
  },
  "niceToMeet.tag.overthinks": {
    "en": "ERP and master data",
    "es": "ERP and master data",
    "ca": "ERP and master data"
  },
  "niceToMeet.tag.tooHonest": {
    "en": "CAD and documentation",
    "es": "CAD and documentation",
    "ca": "CAD and documentation"
  },
  "values.label": {
    "en": "Principles & Strengths",
    "es": "Principles & Strengths",
    "ca": "Principles & Strengths"
  },
  "values.headline1": {
    "en": "How I",
    "es": "How I",
    "ca": "How I"
  },
  "values.headline2": {
    "en": "work",
    "es": "work",
    "ca": "work"
  },
  "values.subtitle": {
    "en": "The habits that show up across technical product work, STEM outreach, and cross-functional coordination.",
    "es": "The habits that show up across technical product work, STEM outreach, and cross-functional coordination.",
    "ca": "The habits that show up across technical product work, STEM outreach, and cross-functional coordination."
  },
  "values.lessIsMore.title": {
    "en": "Data quality first",
    "es": "Data quality first",
    "ca": "Data quality first"
  },
  "values.lessIsMore.body": {
    "en": "Technical work scales when product data, master data, documentation, and specifications are consistent, traceable, and easy to use.",
    "es": "Technical work scales when product data, master data, documentation, and specifications are consistent, traceable, and easy to use.",
    "ca": "Technical work scales when product data, master data, documentation, and specifications are consistent, traceable, and easy to use."
  },
  "values.usersFirst.title": {
    "en": "Clear interfaces",
    "es": "Clear interfaces",
    "ca": "Clear interfaces"
  },
  "values.usersFirst.body": {
    "en": "Whether the interface is a product sheet, ERP record, supplier exchange, workshop agenda, or complaint process, clarity helps people act faster.",
    "es": "Whether the interface is a product sheet, ERP record, supplier exchange, workshop agenda, or complaint process, clarity helps people act faster.",
    "ca": "Whether the interface is a product sheet, ERP record, supplier exchange, workshop agenda, or complaint process, clarity helps people act faster."
  },
  "values.workSmarter.title": {
    "en": "Process thinking",
    "es": "Process thinking",
    "ca": "Process thinking"
  },
  "values.workSmarter.body": {
    "en": "Cross-departmental workflows work best when responsibilities, information flows, quality checks, and decisions are structured.",
    "es": "Cross-departmental workflows work best when responsibilities, information flows, quality checks, and decisions are structured.",
    "ca": "Cross-departmental workflows work best when responsibilities, information flows, quality checks, and decisions are structured."
  },
  "values.communication.title": {
    "en": "Respectful communication",
    "es": "Respectful communication",
    "ca": "Respectful communication"
  },
  "values.communication.body": {
    "en": "Strong technical outcomes depend on communication that connects customers, suppliers, sales, logistics, students, and partners.",
    "es": "Strong technical outcomes depend on communication that connects customers, suppliers, sales, logistics, students, and partners.",
    "ca": "Strong technical outcomes depend on communication that connects customers, suppliers, sales, logistics, students, and partners."
  },
  "lookingFor.label": {
    "en": "Direction",
    "es": "Direction",
    "ca": "Direction"
  },
  "lookingFor.headline1": {
    "en": "The right",
    "es": "The right",
    "ca": "The right"
  },
  "lookingFor.headline2": {
    "en": "technical",
    "es": "technical",
    "ca": "technical"
  },
  "lookingFor.headline3": {
    "en": "environment matters",
    "es": "environment matters",
    "ca": "environment matters"
  },
  "lookingFor.impact.title": {
    "en": "Technical product impact",
    "es": "Technical product impact",
    "ca": "Technical product impact"
  },
  "lookingFor.impact.body": {
    "en": "Work where product data, technical documentation, quality assurance, and supplier coordination directly improve decisions and operations.",
    "es": "Work where product data, technical documentation, quality assurance, and supplier coordination directly improve decisions and operations.",
    "ca": "Work where product data, technical documentation, quality assurance, and supplier coordination directly improve decisions and operations."
  },
  "lookingFor.collaboration.title": {
    "en": "Cross-functional work",
    "es": "Cross-functional work",
    "ca": "Cross-functional work"
  },
  "lookingFor.collaboration.body": {
    "en": "Roles that connect engineering, product, sales, customers, suppliers, logistics, research, education, and community partners.",
    "es": "Roles that connect engineering, product, sales, customers, suppliers, logistics, research, education, and community partners.",
    "ca": "Roles that connect engineering, product, sales, customers, suppliers, logistics, research, education, and community partners."
  },
  "lookingFor.maturity.title": {
    "en": "Structured systems",
    "es": "Structured systems",
    "ca": "Structured systems"
  },
  "lookingFor.maturity.body": {
    "en": "Environments that value clean data, clear ownership, documented processes, and measurable quality requirements.",
    "es": "Environments that value clean data, clear ownership, documented processes, and measurable quality requirements.",
    "ca": "Environments that value clean data, clear ownership, documented processes, and measurable quality requirements."
  },
  "lookingFor.complexity.title": {
    "en": "Complex technical domains",
    "es": "Complex technical domains",
    "ca": "Complex technical domains"
  },
  "lookingFor.complexity.body": {
    "en": "Network engineering, aerospace, robotics, medical technology, logistics, and systems that require careful coordination are the spaces where Sundas brings value.",
    "es": "Network engineering, aerospace, robotics, medical technology, logistics, and systems that require careful coordination are the spaces where Sundas brings value.",
    "ca": "Network engineering, aerospace, robotics, medical technology, logistics, and systems that require careful coordination are the spaces where Sundas brings value."
  },
  "lookingFor.growth.title": {
    "en": "Continuous learning",
    "es": "Continuous learning",
    "ca": "Continuous learning"
  },
  "lookingFor.growth.body": {
    "en": "Opportunities to grow through measurements, verification, product support, technical standards, ERP/PLM work, and international supplier coordination.",
    "es": "Opportunities to grow through measurements, verification, product support, technical standards, ERP/PLM work, and international supplier coordination.",
    "ca": "Opportunities to grow through measurements, verification, product support, technical standards, ERP/PLM work, and international supplier coordination."
  },
  "lookingFor.culture.title": {
    "en": "Inclusive STEM culture",
    "es": "Inclusive STEM culture",
    "ca": "Inclusive STEM culture"
  },
  "lookingFor.culture.body": {
    "en": "Teams and networks that make technical fields more accessible, especially for girls and women in STEM.",
    "es": "Teams and networks that make technical fields more accessible, especially for girls and women in STEM.",
    "ca": "Teams and networks that make technical fields more accessible, especially for girls and women in STEM."
  },
  "testimonials.label": {
    "en": "Highlights",
    "es": "Highlights",
    "ca": "Highlights"
  },
  "testimonials.marquee": {
    "en": "Professional strengths and achievements",
    "es": "Professional strengths and achievements",
    "ca": "Professional strengths and achievements"
  },
  "contact.label": {
    "en": "Contact",
    "es": "Contact",
    "ca": "Contact"
  },
  "contact.letsConnect1": {
    "en": "Let's",
    "es": "Let's",
    "ca": "Let's"
  },
  "contact.letsConnect2": {
    "en": "connect",
    "es": "connect",
    "ca": "connect"
  },
  "contact.cookies": {
    "en": "Cookies",
    "es": "Cookies",
    "ca": "Cookies"
  },
  "contact.privacy": {
    "en": "Privacy",
    "es": "Privacy",
    "ca": "Privacy"
  },
  "contact.legal": {
    "en": "Legal",
    "es": "Legal",
    "ca": "Legal"
  },
  "contact.emailNotice": {
    "en": "Emails sent to sundas_syed@hotmail.com are used solely to respond to your inquiry or professional request. You can also reach Sundas by phone at +43 69910847004.",
    "es": "Emails sent to sundas_syed@hotmail.com are used solely to respond to your inquiry or professional request. You can also reach Sundas by phone at +43 69910847004.",
    "ca": "Emails sent to sundas_syed@hotmail.com are used solely to respond to your inquiry or professional request. You can also reach Sundas by phone at +43 69910847004."
  },
  "contact.emailNoticeHeading": {
    "en": "Email Communications",
    "es": "Email Communications",
    "ca": "Email Communications"
  },
  "footer.cookies": {
    "en": "Cookies",
    "es": "Cookies",
    "ca": "Cookies"
  },
  "footer.privacy": {
    "en": "Privacy",
    "es": "Privacy",
    "ca": "Privacy"
  },
  "footer.legal": {
    "en": "Legal Notice",
    "es": "Legal Notice",
    "ca": "Legal Notice"
  },
  "detail.back": {
    "en": "Back",
    "es": "Back",
    "ca": "Back"
  },
  "detail.seeAllWork": {
    "en": "See all experience",
    "es": "See all experience",
    "ca": "See all experience"
  },
  "detail.nextProject": {
    "en": "Next experience",
    "es": "Next experience",
    "ca": "Next experience"
  },
  "detail.confidentiality": {
    "en": "This page presents professional experience information provided for Sundas Syed. Visuals are retained from the cloned design and used only as design placeholders.",
    "es": "This page presents professional experience information provided for Sundas Syed. Visuals are retained from the cloned design and used only as design placeholders.",
    "ca": "This page presents professional experience information provided for Sundas Syed. Visuals are retained from the cloned design and used only as design placeholders."
  },
  "detail.viewProject": {
    "en": "View details",
    "es": "View details",
    "ca": "View details"
  },
  "detail.lightModeQuestion": {
    "en": "Prefer light mode?",
    "es": "Prefer light mode?",
    "ca": "Prefer light mode?"
  },
  "detail.darkModeQuestion": {
    "en": "Prefer dark mode?",
    "es": "Prefer dark mode?",
    "ca": "Prefer dark mode?"
  },
  "detail.context": {
    "en": "Context",
    "es": "Context",
    "ca": "Context"
  },
  "detail.overview": {
    "en": "Overview",
    "es": "Overview",
    "ca": "Overview"
  },
  "detail.challenge": {
    "en": "The Focus",
    "es": "The Focus",
    "ca": "The Focus"
  },
  "detail.myRole": {
    "en": "Role",
    "es": "Role",
    "ca": "Role"
  },
  "detail.role": {
    "en": "Role",
    "es": "Role",
    "ca": "Role"
  },
  "detail.focus": {
    "en": "Focus",
    "es": "Focus",
    "ca": "Focus"
  },
  "detail.systemDecisions": {
    "en": "Process decisions",
    "es": "Process decisions",
    "ca": "Process decisions"
  },
  "detail.systemDecisionsBefore": {
    "en": "Before",
    "es": "Before",
    "ca": "Before"
  },
  "detail.systemDecisionsAfter": {
    "en": "After",
    "es": "After",
    "ca": "After"
  },
  "detail.clinicalTrust": {
    "en": "Quality and trust",
    "es": "Quality and trust",
    "ca": "Quality and trust"
  },
  "detail.compatibilityConfidence": {
    "en": "Verification confidence",
    "es": "Verification confidence",
    "ca": "Verification confidence"
  },
  "detail.managingStyles": {
    "en": "Managing standards",
    "es": "Managing standards",
    "ca": "Managing standards"
  },
  "detail.keyContributions": {
    "en": "Key contributions",
    "es": "Key contributions",
    "ca": "Key contributions"
  },
  "detail.gamificationMechanics": {
    "en": "Program mechanics",
    "es": "Program mechanics",
    "ca": "Program mechanics"
  },
  "detail.whatIFocusedOn": {
    "en": "What I focused on",
    "es": "What I focused on",
    "ca": "What I focused on"
  },
  "detail.impact": {
    "en": "Impact",
    "es": "Impact",
    "ca": "Impact"
  },
  "detail.reflection": {
    "en": "Reflection",
    "es": "Reflection",
    "ca": "Reflection"
  },
  "detail.whatThisProjectShaped": {
    "en": "What this experience shaped",
    "es": "What this experience shaped",
    "ca": "What this experience shaped"
  },
  "detail.whatThisProjectSharpened": {
    "en": "What this experience sharpened",
    "es": "What this experience sharpened",
    "ca": "What this experience sharpened"
  },
  "detail.whatThisProjectStrengthened": {
    "en": "What this experience strengthened",
    "es": "What this experience strengthened",
    "ca": "What this experience strengthened"
  },
  "legal.cookiePolicy": {
    "en": "Cookie Policy",
    "es": "Cookie Policy",
    "ca": "Cookie Policy"
  },
  "legal.privacyPolicy": {
    "en": "Privacy Policy",
    "es": "Privacy Policy",
    "ca": "Privacy Policy"
  },
  "legal.legalNotice": {
    "en": "Legal Notice",
    "es": "Legal Notice",
    "ca": "Legal Notice"
  },
  "a11y.skipToContent": {
    "en": "Skip to main content",
    "es": "Skip to main content",
    "ca": "Skip to main content"
  },
  "projects.veepee.description": {
    "en": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
    "es": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
    "ca": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration."
  },
  "projects.veepee.year": {
    "en": "Vienna, Austria · March 2026 - Present",
    "es": "Vienna, Austria · March 2026 - Present",
    "ca": "Vienna, Austria · March 2026 - Present"
  },
  "projects.veepee.bullet1": {
    "en": "Article master data management with focus on consistency and process optimization",
    "es": "Article master data management with focus on consistency and process optimization",
    "ca": "Article master data management with focus on consistency and process optimization"
  },
  "projects.veepee.bullet2": {
    "en": "Technical documentation, specifications, and data sheets",
    "es": "Technical documentation, specifications, and data sheets",
    "ca": "Technical documentation, specifications, and data sheets"
  },
  "projects.veepee.bullet3": {
    "en": "Interface coordination across sales, customers, suppliers, and logistics",
    "es": "Interface coordination across sales, customers, suppliers, and logistics",
    "ca": "Interface coordination across sales, customers, suppliers, and logistics"
  },
  "allProjects.veepee.description": {
    "en": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
    "es": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
    "ca": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration."
  },
  "projects.kira.description": {
    "en": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
    "es": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
    "ca": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education."
  },
  "projects.kira.year": {
    "en": "Austria · February 2025 - Present",
    "es": "Austria · February 2025 - Present",
    "ca": "Austria · February 2025 - Present"
  },
  "projects.kira.bullet1": {
    "en": "Implements STEM formats, events, and programs for girls and women",
    "es": "Implements STEM formats, events, and programs for girls and women",
    "ca": "Implements STEM formats, events, and programs for girls and women"
  },
  "projects.kira.bullet2": {
    "en": "Represents the network with industry, research, education, and European WIA partners",
    "es": "Represents the network with industry, research, education, and European WIA partners",
    "ca": "Represents the network with industry, research, education, and European WIA partners"
  },
  "projects.kira.bullet3": {
    "en": "Builds partnerships, member development, communication, and cooperation initiatives",
    "es": "Builds partnerships, member development, communication, and cooperation initiatives",
    "ca": "Builds partnerships, member development, communication, and cooperation initiatives"
  },
  "allProjects.kira.description": {
    "en": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
    "es": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
    "ca": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education."
  },
  "projects.tucuvi.description": {
    "en": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
    "es": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
    "ca": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience."
  },
  "projects.tucuvi.year": {
    "en": "Vienna / Lower Austria / Burgenland · September 2020 - Present",
    "es": "Vienna / Lower Austria / Burgenland · September 2020 - Present",
    "ca": "Vienna / Lower Austria / Burgenland · September 2020 - Present"
  },
  "projects.tucuvi.bullet1": {
    "en": "Runs workshops for students aged 15 and above in schools and online",
    "es": "Runs workshops for students aged 15 and above in schools and online",
    "ca": "Runs workshops for students aged 15 and above in schools and online"
  },
  "projects.tucuvi.bullet2": {
    "en": "Creates feedback reports and supports FIT public relations",
    "es": "Creates feedback reports and supports FIT public relations",
    "ca": "Creates feedback reports and supports FIT public relations"
  },
  "projects.tucuvi.bullet3": {
    "en": "Promotes respectful discussion culture and visible diversity in STEM",
    "es": "Promotes respectful discussion culture and visible diversity in STEM",
    "ca": "Promotes respectful discussion culture and visible diversity in STEM"
  },
  "allProjects.tucuvi.description": {
    "en": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
    "es": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
    "ca": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience."
  },
  "projects.hp.description": {
    "en": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
    "es": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
    "ca": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices."
  },
  "projects.hp.year": {
    "en": "Vienna, Austria · March 2025 - May 2025",
    "es": "Vienna, Austria · March 2025 - May 2025",
    "ca": "Vienna, Austria · March 2025 - May 2025"
  },
  "projects.hp.bullet1": {
    "en": "Documented inspections and ensured operational readiness and traceability",
    "es": "Documented inspections and ensured operational readiness and traceability",
    "ca": "Documented inspections and ensured operational readiness and traceability"
  },
  "projects.hp.bullet2": {
    "en": "Performed repairs, visual checks, replacement, and functional tests",
    "es": "Performed repairs, visual checks, replacement, and functional tests",
    "ca": "Performed repairs, visual checks, replacement, and functional tests"
  },
  "projects.hp.bullet3": {
    "en": "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery",
    "es": "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery",
    "ca": "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery"
  },
  "allProjects.hp.description": {
    "en": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
    "es": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
    "ca": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices."
  },
  "projects.viavia.description": {
    "en": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
    "es": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
    "ca": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work."
  },
  "projects.viavia.year": {
    "en": "Vienna, Austria · July 2024 - August 2024",
    "es": "Vienna, Austria · July 2024 - August 2024",
    "ca": "Vienna, Austria · July 2024 - August 2024"
  },
  "projects.viavia.bullet1": {
    "en": "Worked with product and maintenance documentation standards",
    "es": "Worked with product and maintenance documentation standards",
    "ca": "Worked with product and maintenance documentation standards"
  },
  "projects.viavia.bullet2": {
    "en": "Created and maintained article and material master data",
    "es": "Created and maintained article and material master data",
    "ca": "Created and maintained article and material master data"
  },
  "projects.viavia.bullet3": {
    "en": "Supported ERP article creation, BOM checks, and FMEA risk analysis",
    "es": "Supported ERP article creation, BOM checks, and FMEA risk analysis",
    "ca": "Supported ERP article creation, BOM checks, and FMEA risk analysis"
  },
  "allProjects.viavia.description": {
    "en": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
    "es": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
    "ca": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work."
  },
  "projects.fourlink.description": {
    "en": "Precision engineering experience connected to disciplined technical work, quality awareness, documentation, and structured industrial processes.",
    "es": "Precision engineering experience connected to disciplined technical work, quality awareness, documentation, and structured industrial processes.",
    "ca": "Precision engineering experience connected to disciplined technical work, quality awareness, documentation, and structured industrial processes."
  },
  "projects.fourlink.year": {
    "en": "Austria - Precision engineering context",
    "es": "Austria - Precision engineering context",
    "ca": "Austria - Precision engineering context"
  },
  "projects.fourlink.bullet1": {
    "en": "Quality-focused industrial processes",
    "es": "Quality-focused industrial processes",
    "ca": "Quality-focused industrial processes"
  },
  "projects.fourlink.bullet2": {
    "en": "Structured technical documentation and traceability",
    "es": "Structured technical documentation and traceability",
    "ca": "Structured technical documentation and traceability"
  },
  "projects.fourlink.bullet3": {
    "en": "Precision engineering context and disciplined execution",
    "es": "Precision engineering context and disciplined execution",
    "ca": "Precision engineering context and disciplined execution"
  },
  "allProjects.fourlink.description": {
    "en": "Precision engineering context with a focus on quality awareness, structured documentation, traceability, and disciplined technical execution.",
    "es": "Precision engineering context with a focus on quality awareness, structured documentation, traceability, and disciplined technical execution.",
    "ca": "Precision engineering context with a focus on quality awareness, structured documentation, traceability, and disciplined technical execution."
  },
  "projects.affinity.description": {
    "en": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
    "es": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
    "ca": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps."
  },
  "projects.affinity.year": {
    "en": "Austria · July 2022 - August 2022",
    "es": "Austria · July 2022 - August 2022",
    "ca": "Austria · July 2022 - August 2022"
  },
  "projects.affinity.bullet1": {
    "en": "Aligned aviation and energy-transition content across departments",
    "es": "Aligned aviation and energy-transition content across departments",
    "ca": "Aligned aviation and energy-transition content across departments"
  },
  "projects.affinity.bullet2": {
    "en": "Validated project data and funding documents",
    "es": "Validated project data and funding documents",
    "ca": "Validated project data and funding documents"
  },
  "projects.affinity.bullet3": {
    "en": "Supported aviation dossiers, event work, calls, and roadmap research",
    "es": "Supported aviation dossiers, event work, calls, and roadmap research",
    "ca": "Supported aviation dossiers, event work, calls, and roadmap research"
  },
  "allProjects.affinity.description": {
    "en": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
    "es": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
    "ca": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps."
  },
  "projects.tao.description": {
    "en": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
    "es": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
    "ca": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes."
  },
  "projects.tao.year": {
    "en": "Vienna, Austria · July 2019 - August 2019",
    "es": "Vienna, Austria · July 2019 - August 2019",
    "ca": "Vienna, Austria · July 2019 - August 2019"
  },
  "projects.tao.bullet1": {
    "en": "Customer care and consulting at UniCredit Bank Austria",
    "es": "Customer care and consulting at UniCredit Bank Austria",
    "ca": "Customer care and consulting at UniCredit Bank Austria"
  },
  "projects.tao.bullet2": {
    "en": "First-line maintenance on self-service devices and receipt printers",
    "es": "First-line maintenance on self-service devices and receipt printers",
    "ca": "First-line maintenance on self-service devices and receipt printers"
  },
  "projects.tao.bullet3": {
    "en": "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control",
    "es": "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control",
    "ca": "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control"
  },
  "allProjects.tao.description": {
    "en": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
    "es": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
    "ca": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes."
  }
};
function f(e, t) {
  const i = e0[e];
  return i ? i[t] ?? i.en : e;
}
const mi = "Sundas Syed", fi = "   ·   ", uo = `${mi}${fi}${mi}${fi}${mi}${fi}${mi}${fi}`, t0 = 768;
function i0(e = t0) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function n0({ isReady: e }) {
  const [t, i] = T(!1), n = i0(), a = I(null), { lang: o } = V(), { scrollYProgress: r } = Fe({
    target: a,
    offset: ["start start", "end start"]
  }), l = R(r, [0, 0.8], [0, 1]);
  B(() => {
    if (!e) return;
    const d = setTimeout(() => i(!0), 100);
    return () => clearTimeout(d);
  }, [e]);
  const c = n ? "clamp(260px, 70vw, 520px)" : "clamp(160px, 26vw, 440px)";
  return /* @__PURE__ */ p(
    "section",
    {
      ref: a,
      className: "relative overflow-hidden",
      style: {
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        fontFamily: "'Inter', sans-serif"
      },
      children: [
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0, scale: 1.08, y: 20 },
            animate: t ? { opacity: 1, scale: 1, y: 0 } : {},
            transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] },
            style: {
              position: "absolute",
              inset: 0,
              zIndex: 1
            },
            children: /* @__PURE__ */ s(
              ue,
              {
                src: n ? Qm : Ym,
                alt: "Sundas Syed professional portrait",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: n ? "center 30%" : "center 20%",
                  display: "block"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ s(
          w.div,
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              inset: 0,
              backgroundColor: "#000",
              opacity: l,
              zIndex: 3,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              width: "100%",
              overflow: "hidden",
              zIndex: 4,
              pointerEvents: "none",
              opacity: t ? 1 : 0,
              transition: "opacity 1.2s ease 0.5s",
              mixBlendMode: "difference"
            },
            children: /* @__PURE__ */ p(
              "div",
              {
                style: {
                  display: "flex",
                  width: "max-content",
                  whiteSpace: "nowrap",
                  animation: n ? "marqueeScroll 50s linear infinite" : "marqueeScroll 90s linear infinite"
                },
                children: [
                  /* @__PURE__ */ s(
                    "span",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: c,
                        fontWeight: 500,
                        lineHeight: 0.88,
                        letterSpacing: "-0.06em",
                        color: "#FFFFFF",
                        userSelect: "none",
                        flexShrink: 0
                      },
                      children: uo
                    }
                  ),
                  /* @__PURE__ */ s(
                    "span",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: c,
                        fontWeight: 500,
                        lineHeight: 0.88,
                        letterSpacing: "-0.06em",
                        color: "#FFFFFF",
                        userSelect: "none",
                        flexShrink: 0
                      },
                      children: uo
                    }
                  )
                ]
              }
            )
          }
        ),
        !n && /* @__PURE__ */ s(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "35%",
              zIndex: 5,
              background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
              pointerEvents: "none",
              opacity: t ? 1 : 0,
              transition: "opacity 1s ease 0.6s"
            }
          }
        ),
        /* @__PURE__ */ s(
          "h1",
          {
            style: {
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap"
            },
            children: "Sundas Syed · Junior Product Manager, Network Engineering and STEM Lead"
          }
        ),
        n ? (
          /* Mobile: full-width bottom block with location above role */
          /* @__PURE__ */ p(
            w.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                padding: "16px"
              },
              children: [
                /* @__PURE__ */ s(
                  w.span,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
                    style: {
                      display: "block",
                      color: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: 400,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "12px"
                    },
                    children: f("hero.location", o)
                  }
                ),
                /* @__PURE__ */ s("div", { style: { overflow: "hidden", paddingBottom: "1px" }, children: /* @__PURE__ */ s(
                  w.div,
                  {
                    initial: { y: "110%" },
                    animate: t ? { y: "0%" } : {},
                    transition: {
                      duration: 1,
                      delay: 0.75,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    style: {
                      color: "rgba(242,242,242,0.95)",
                      fontSize: "clamp(28px, 9vw, 48px)",
                      fontWeight: 300,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      willChange: "transform"
                    },
                    children: "Junior Product Manager"
                  }
                ) }),
                /* @__PURE__ */ s("div", { style: { overflow: "hidden", paddingBottom: "1px" }, children: /* @__PURE__ */ s(
                  w.div,
                  {
                    initial: { y: "110%" },
                    animate: t ? { y: "0%" } : {},
                    transition: {
                      duration: 1,
                      delay: 0.85,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    style: {
                      color: "rgba(242,242,242,0.95)",
                      fontSize: "clamp(28px, 9vw, 48px)",
                      fontWeight: 300,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      willChange: "transform",
                      width: "100%"
                    },
                    children: "Network Engineering"
                  }
                ) })
              ]
            }
          )
        ) : (
          /* Desktop: original layout */
          /* @__PURE__ */ p(J, { children: [
            /* @__PURE__ */ s(
              w.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: t ? { opacity: 1, y: 0 } : {},
                transition: {
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                },
                style: {
                  position: "absolute",
                  bottom: "32px",
                  left: "32px",
                  zIndex: 10
                },
                children: /* @__PURE__ */ s(
                  "span",
                  {
                    style: {
                      color: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: 400,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase"
                    },
                    children: f("hero.location", o)
                  }
                )
              }
            ),
            /* @__PURE__ */ s(
              "div",
              {
                style: {
                  position: "absolute",
                  bottom: "32px",
                  right: "32px",
                  zIndex: 10
                },
                children: /* @__PURE__ */ s("div", { style: { textAlign: "right" }, children: [f("hero.role1", o), f("hero.role2", o)].map((d, u) => /* @__PURE__ */ s("div", { style: { overflow: "hidden", paddingBottom: "1px" }, children: /* @__PURE__ */ s(
                  w.div,
                  {
                    initial: { y: "110%" },
                    animate: t ? { y: "0%" } : {},
                    transition: {
                      duration: 1,
                      delay: 0.7 + u * 0.12,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    style: {
                      color: "rgba(242,242,242,0.95)",
                      fontSize: "clamp(28px, 3.8vw, 60px)",
                      fontWeight: 300,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      willChange: "transform"
                    },
                    children: d
                  }
                ) }, u)) })
              }
            )
          ] })
        ),
        /* @__PURE__ */ s("style", { children: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` })
      ]
    }
  );
}
const gi = "#00B6B6", wn = [0.22, 1, 0.36, 1];
function a0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function s0() {
  const e = I(null), t = M(e, { once: !0, margin: "-80px" }), i = a0(), { lang: n } = V();
  return /* @__PURE__ */ p(
    "section",
    {
      ref: e,
      style: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        paddingTop: i ? "32px" : "48px",
        paddingBottom: i ? "clamp(64px, 12vw, 100px)" : "clamp(80px, 8vw, 140px)"
      },
      children: [
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0 },
            animate: t ? { opacity: 1 } : {},
            transition: { duration: 0.7, ease: wn },
            style: {
              position: "sticky",
              top: i ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              zIndex: 10,
              paddingLeft: i ? "16px" : "48px",
              height: 0,
              overflow: "visible",
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: gi,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s("span", { "aria-hidden": !0, style: { width: "clamp(16px, 1.5vw, 24px)", height: "1px", backgroundColor: gi, flexShrink: 0 } }),
                  f("welcome.label", n)
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              width: "100%",
              maxWidth: "1400px",
              marginTop: 0,
              marginBottom: 0,
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: i ? "16px" : "48px",
              paddingRight: i ? "16px" : "48px"
            },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    marginTop: i ? "clamp(72px, 14vw, 120px)" : "clamp(80px, 10vw, 140px)",
                    marginBottom: i ? "clamp(48px, 10vw, 96px)" : "clamp(56px, 7vw, 112px)"
                  },
                  children: (i ? [
                    { text: f("welcome.line1", n), delay: 0.05 },
                    {
                      text: /* @__PURE__ */ p(J, { children: [
                        f("welcome.line2_prefix", n),
                        " ",
                        /* @__PURE__ */ s("span", { style: { color: gi }, children: f("welcome.line2_accent", n) })
                      ] }),
                      delay: 0.1
                    },
                    { text: f("welcome.line3", n), delay: 0.15 }
                  ] : [
                    { text: f("welcome.line1", n), delay: 0.05 },
                    {
                      text: /* @__PURE__ */ p(J, { children: [
                        f("welcome.line2_prefix", n),
                        " ",
                        /* @__PURE__ */ s("span", { style: { color: gi }, children: f("welcome.line2_accent", n) }),
                        " ",
                        f("welcome.line2_suffix_desktop", n)
                      ] }),
                      delay: 0.1
                    },
                    { text: f("welcome.line3", n), delay: 0.2 }
                  ]).map((a, o) => /* @__PURE__ */ s(
                    "div",
                    {
                      style: {
                        overflow: "hidden",
                        position: "relative"
                      },
                      children: /* @__PURE__ */ s(
                        w.div,
                        {
                          initial: { y: "100%", opacity: 0 },
                          animate: t ? { y: "0%", opacity: 1 } : {},
                          transition: {
                            duration: 1.1,
                            delay: a.delay,
                            ease: wn
                          },
                          style: {
                            fontSize: i ? "clamp(38px, 10vw, 64px)" : "clamp(36px, 5.8vw, 88px)",
                            fontWeight: 600,
                            lineHeight: 1.05,
                            letterSpacing: "-0.04em",
                            color: "#F2F2F2",
                            willChange: "transform, opacity"
                          },
                          children: a.text
                        }
                      )
                    },
                    o
                  ))
                }
              ),
              /* @__PURE__ */ p(
                w.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.4, ease: wn },
                  style: {
                    maxWidth: "680px"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      "p",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(15px, 1.2vw, 19px)",
                          fontWeight: 400,
                          lineHeight: 1.55,
                          letterSpacing: "-0.01em",
                          color: "rgba(242,242,242,0.55)",
                          marginTop: 0,
                          marginBottom: "clamp(16px, 2vw, 28px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: f("welcome.body1", n)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "p",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(15px, 1.2vw, 19px)",
                          fontWeight: 400,
                          lineHeight: 1.55,
                          letterSpacing: "-0.01em",
                          color: "rgba(242,242,242,0.55)",
                          marginTop: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: f("welcome.body2", n)
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const expSchrack = "/_assets/experience/schrackteknicgmbh-experience.png", expWia = "/_assets/experience/wia-experience.png", expFit = "/_assets/experience/fit-experience.png", expMed = "/_assets/experience/medizintechnik-experience.png", expSchiebel = "/_assets/experience/schiebel-experience.png", expGlock = "/_assets/experience/glock-experience.png", expFfg = "/_assets/experience/ffg-experience.png", gl = expSchrack, hl = expMed, yl = expWia, xl = expFit, mo = "#00B6B6", vl = [0.22, 1, 0.36, 1], bl = 56, wl = 48, _i = wl + bl + 10, Xi = 16, hi = 72;
function Zn(e) {
  return [
    {
      id: "veepee",
      title: "Schrack Technik GmbH",
      shortTitle: "Schrack",
      year: f("projects.veepee.year", e),
      href: "#/projects/veepee",
      description: f("projects.veepee.description", e),
      tags: ["NetworkEngineering","ProductData","Documentation"],
      image: gl,
      bullets: [f("projects.veepee.bullet1", e), f("projects.veepee.bullet2", e), f("projects.veepee.bullet3", e)]
    },
    {
      id: "kira-learning",
      title: "Women in Aerospace Europe",
      shortTitle: "WIA-E",
      year: f("projects.kira.year", e),
      href: "#/projects/kira-learning",
      description: f("projects.kira.description", e),
      tags: ["Aerospace","STEM","Leadership"],
      image: yl,
      bullets: [f("projects.kira.bullet1", e), f("projects.kira.bullet2", e), f("projects.kira.bullet3", e)]
    },
    {
      id: "viavia",
      title: "Schiebel ILS",
      shortTitle: "Schiebel",
      year: f("projects.viavia.year", e),
      href: "#/projects/viavia",
      description: f("projects.viavia.description", e),
      tags: ["ILS","UAV","FMEA"],
      image: expSchiebel,
      bullets: [f("projects.viavia.bullet1", e), f("projects.viavia.bullet2", e), f("projects.viavia.bullet3", e)]
    },
    {
      id: "fourlink",
      title: "Glock",
      shortTitle: "Glock",
      year: f("projects.fourlink.year", e),
      href: "#/projects/fourlink",
      description: f("projects.fourlink.description", e),
      tags: ["Precision","Engineering","Quality"],
      image: expGlock,
      bullets: [f("projects.fourlink.bullet1", e), f("projects.fourlink.bullet2", e), f("projects.fourlink.bullet3", e)]
    }
  ];
}
const Mt = ["veepee", "kira-learning", "viavia", "fourlink"];
function o0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
const Sn = `calc(100vh - ${_i + Xi}px)`;
function r0({
  project: e,
  index: t,
  isMobile: i,
  isLast: n,
  onCardMouseEnter: a,
  onCardMouseLeave: o
}) {
  const r = I(null), l = M(r, { once: !0, margin: "-40px" });
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        /* Scroll slot: each card wrapper is tall enough
           to pin the card for a shorter scroll distance.
           Last card doesn't need extra — just its own height. */
        height: n ? Sn : `calc(${Sn} + 50vh)`,
        position: "relative"
      },
      children: /* @__PURE__ */ s(
        "div",
        {
          style: {
            position: "sticky",
            top: `${_i}px`,
            zIndex: 10 + t
          },
          children: /* @__PURE__ */ s(
            w.div,
            {
              ref: r,
              initial: { opacity: 0, y: 40 },
              animate: l ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.9, ease: vl },
              children: /* @__PURE__ */ s(
                "a",
                {
                  href: e.href,
                  onMouseEnter: a,
                  onMouseLeave: o,
                  style: {
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: `${Xi}px`,
                    marginRight: `${Xi}px`,
                    height: Sn,
                    minHeight: "420px",
                    borderRadius: "20px",
                    border: "1px solid rgba(242,242,242,0.06)",
                    backgroundColor: "#0A0A0A",
                    overflow: "hidden",
                    position: "relative",
                    cursor: i ? "pointer" : "none",
                    /* Top shadow — sells the "sliding over" depth */
                    boxShadow: t > 0 ? "0 -24px 80px rgba(0,0,0,0.7), 0 -4px 20px rgba(0,0,0,0.5)" : "none"
                  },
                  className: "project-card-link",
                  children: /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        display: "grid",
                        gridTemplateColumns: i ? "1fr" : "1fr 1fr",
                        height: "100%"
                      },
                      children: [
                        /* @__PURE__ */ s(
                          "div",
                          {
                            style: {
                              position: "relative",
                              overflow: "hidden",
                              minHeight: i ? "clamp(200px, 45vw, 320px)" : "auto"
                            },
                            children: /* @__PURE__ */ s(
                              ue,
                              {
                                src: e.image,
                                alt: e.title,
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  display: "block",
                                  filter: "grayscale(0.45) contrast(1.08) brightness(0.8)",
                                  transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)"
                                }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ p(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              padding: i ? "clamp(16px, 4vw, 28px)" : "clamp(32px, 3.5vw, 64px)"
                            },
                            children: [
                              /* @__PURE__ */ p("div", { children: [
                                /* @__PURE__ */ s(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "clamp(11px, 0.85vw, 13px)",
                                      fontWeight: 400,
                                      letterSpacing: "0.08em",
                                      color: "rgba(242,242,242,0.5)",
                                      display: "block",
                                      marginBottom: "clamp(16px, 2vw, 32px)"
                                    },
                                    children: e.year
                                  }
                                ),
                                /* @__PURE__ */ s(
                                  "h3",
                                  {
                                    style: {
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "clamp(26px, 3.2vw, 52px)",
                                      fontWeight: 600,
                                      lineHeight: 0.95,
                                      letterSpacing: "-0.04em",
                                      color: "#F2F2F2",
                                      marginTop: 0,
                                      marginBottom: "clamp(16px, 2vw, 32px)",
                                      marginLeft: 0,
                                      marginRight: 0
                                    },
                                    children: e.title
                                  }
                                ),
                                /* @__PURE__ */ s(
                                  "p",
                                  {
                                    style: {
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "clamp(14px, 1.1vw, 17px)",
                                      fontWeight: 400,
                                      lineHeight: 1.55,
                                      letterSpacing: "-0.01em",
                                      color: "#F2F2F2",
                                      marginTop: 0,
                                      marginBottom: 0,
                                      maxWidth: "440px"
                                    },
                                    children: e.description
                                  }
                                ),
                                e.bullets && /* @__PURE__ */ s(
                                  "ul",
                                  {
                                    style: {
                                      listStyle: "none",
                                      padding: 0,
                                      margin: 0,
                                      marginTop: "clamp(16px, 2vw, 32px)"
                                    },
                                    children: e.bullets.map((c, d) => /* @__PURE__ */ p(
                                      "li",
                                      {
                                        style: {
                                          fontFamily: "'Inter', sans-serif",
                                          fontSize: "clamp(14px, 1.1vw, 17px)",
                                          fontWeight: 400,
                                          lineHeight: 1.55,
                                          letterSpacing: "-0.01em",
                                          color: "#F2F2F2",
                                          marginTop: d > 0 ? "clamp(8px, 1vw, 16px)" : 0,
                                          marginBottom: 0,
                                          maxWidth: "440px",
                                          display: "flex",
                                          alignItems: "flex-start"
                                        },
                                        children: [
                                          /* @__PURE__ */ s(
                                            "span",
                                            {
                                              style: {
                                                display: "inline-block",
                                                width: "4px",
                                                height: "4px",
                                                backgroundColor: "rgba(242,242,242,0.35)",
                                                borderRadius: "50%",
                                                marginRight: "clamp(8px, 1vw, 14px)",
                                                marginTop: "10px",
                                                flexShrink: 0
                                              }
                                            }
                                          ),
                                          c
                                        ]
                                      },
                                      d
                                    ))
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ s(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                    marginTop: "clamp(24px, 3vw, 40px)"
                                  },
                                  children: e.tags.map((c) => /* @__PURE__ */ s(
                                    "span",
                                    {
                                      style: {
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "clamp(10px, 0.75vw, 12px)",
                                        fontWeight: 400,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        color: "rgba(242,242,242,0.5)",
                                        border: "1px solid rgba(242,242,242,0.08)",
                                        borderRadius: "12px",
                                        padding: "5px 14px",
                                        whiteSpace: "nowrap"
                                      },
                                      children: c
                                    },
                                    c
                                  ))
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  );
}
function l0({
  label: e,
  active: t,
  onClick: i
}) {
  const [n, a] = T(!1);
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: i,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      style: {
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(10px, 0.8vw, 12px)",
        fontWeight: t ? 500 : 400,
        letterSpacing: "0.04em",
        color: t ? "rgba(242,242,242,0.9)" : n ? "rgba(242,242,242,0.6)" : "rgba(242,242,242,0.3)",
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: "12px",
        paddingRight: "12px",
        minHeight: "44px",
        display: "inline-flex",
        alignItems: "center",
        borderBottom: t ? "1px solid rgba(242,242,242,0.5)" : "1px solid transparent",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        whiteSpace: "nowrap",
        flexShrink: 0
      },
      children: e
    }
  );
}
function c0() {
  const e = I(null), t = M(e, { once: !0, margin: "-80px" }), i = o0(), { lang: n } = V(), [a, o] = T(Mt[0]), r = It(-200), l = It(-200), c = { damping: 28, stiffness: 350, mass: 0.45 }, d = Ni(r, c), u = Ni(l, c), [m, g] = T(!1), S = oe(
    (h) => {
      i || (r.set(h.clientX - hi / 2), l.set(h.clientY - hi / 2));
    },
    [i, r, l]
  ), b = I(null);
  B(() => {
    const h = () => {
      if (!b.current) return;
      const z = b.current.children;
      let F = Mt[0];
      const E = _i + 80;
      for (let L = 0; L < z.length; L++)
        z[L].getBoundingClientRect().top <= E && (F = Mt[L]);
      o(F);
    };
    return window.addEventListener("scroll", h, { passive: !0 }), h(), () => window.removeEventListener("scroll", h);
  }, []);
  const x = oe((h) => {
    if (!b.current) return;
    const v = Mt.indexOf(h);
    if (v < 0) return;
    const z = b.current.children[v];
    if (!z) return;
    const F = z.getBoundingClientRect(), E = window.scrollY + F.top - _i - 4;
    window.scrollTo({ top: E, behavior: "smooth" });
  }, []), [y, C] = T(!1);
  return /* @__PURE__ */ p(
    "section",
    {
      ref: e,
      onMouseMove: S,
      style: {
        position: "relative",
        backgroundColor: "#000",
        fontFamily: "'Inter', sans-serif"
      },
      children: [
        !i && /* @__PURE__ */ s(
          w.div,
          {
            "aria-hidden": "true",
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              x: d,
              y: u,
              width: hi,
              height: hi,
              borderRadius: "50%",
              border: "1px solid rgba(242,242,242,0.25)",
              backgroundColor: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 9998
            },
            animate: {
              scale: m ? 1 : 0.35,
              opacity: m ? 1 : 0
            },
            transition: {
              scale: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, ease: "easeOut" }
            },
            children: /* @__PURE__ */ s(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(242,242,242,0.85)"
                },
                children: f("projects.cursorView", n)
              }
            )
          }
        ),
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0 },
            animate: t ? { opacity: 1 } : {},
            transition: { duration: 0.7, ease: vl },
            style: {
              position: "sticky",
              top: i ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              zIndex: 50,
              paddingLeft: i ? "16px" : "48px",
              height: 0,
              overflow: "visible",
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: mo,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s("span", { "aria-hidden": !0, style: { width: "clamp(16px, 1.5vw, 24px)", height: "1px", backgroundColor: mo, flexShrink: 0 } }),
                  f("projects.label", n)
                ]
              }
            )
          }
        ),
        i && /* @__PURE__ */ s("div", { style: { height: "72px" } }),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              position: "sticky",
              top: `${wl}px`,
              zIndex: 40,
              backgroundColor: "transparent",
              borderBottom: "1px solid rgba(242,242,242,0.04)",
              height: `${bl}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: i ? "16px" : "48px",
              paddingRight: i ? "16px" : "48px",
              paddingTop: 0,
              paddingBottom: 0
            },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: i ? "4px" : "clamp(20px, 2.5vw, 36px)",
                    alignItems: "center",
                    flex: 1,
                    justifyContent: i ? "flex-start" : "center",
                    overflowX: i ? "auto" : "visible",
                    scrollbarWidth: "none",
                    WebkitOverflowScrolling: "touch"
                  },
                  className: "projects-tabs-scroll",
                  children: Zn(n).map((h) => /* @__PURE__ */ s(
                    l0,
                    {
                      label: h.shortTitle,
                      active: a === h.id,
                      onClick: () => x(h.id)
                    },
                    h.id
                  ))
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    marginLeft: i ? "8px" : "clamp(24px, 3vw, 48px)"
                  },
                  children: /* @__PURE__ */ p(
                    "a",
                    {
                      href: "#/projects",
                      onMouseEnter: () => C(!0),
                      onMouseLeave: () => C(!1),
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(10px, 0.8vw, 12px)",
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: y ? "rgba(242,242,242,0.85)" : "rgba(242,242,242,0.5)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      },
                      children: [
                        f(i ? "projects.seeAllShort" : "projects.seeAll", n),
                        /* @__PURE__ */ s(
                          "span",
                          {
                            style: {
                              display: "inline-block",
                              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                              transform: y ? "translateX(3px)" : "translateX(0)"
                            },
                            children: "→"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            ref: b,
            style: {
              position: "relative",
              paddingTop: `${Xi}px`,
              display: "flex",
              flexDirection: "column",
              gap: i ? "16px" : "24px"
            },
            children: Zn(n).map((h, v) => /* @__PURE__ */ s(
              r0,
              {
                project: h,
                index: v,
                isMobile: i,
                isLast: v === Mt.length - 1,
                onCardMouseEnter: () => g(!0),
                onCardMouseLeave: () => g(!1)
              },
              h.id
            ))
          }
        ),
        /* @__PURE__ */ s("style", { children: `
        .projects-tabs-scroll::-webkit-scrollbar {
          display: none;
        }
        .project-card-link:hover img {
          transform: scale(1.03);
        }
      ` })
      ]
    }
  );
}
const Vt = "#00B6B6", Ve = [0.22, 1, 0.36, 1], d0 = [
  { id: "ux", number: "01", title: "Product Data & Assortment", description: "Structured preparation, analysis, and quality assurance of technical, logistical, and commercial product data.", items: ["Article master data", "Product assortment", "Data consistency", "Process optimization", "Data sheets", "Technical specs"] },
  { id: "systems", number: "02", title: "Network Engineering", description: "Technical product work around network engineering, supplier specifications, measurements, verification, and quality requirements.", items: ["Netzwerktechnik", "Supplier specs", "Measurements", "Verification", "Quality checks", "Technical consulting"] },
  { id: "ai", number: "03", title: "Documentation & ERP", description: "Traceable technical documentation, product support content, ERP article creation, BOM checks, and structured maintenance information.", items: ["ERP systems", "proAlpha", "PLM/ERP", "BOM checks", "ILS standards", "FMEA"] },
  { id: "research", number: "04", title: "STEM Leadership", description: "Community building, STEM formats, events, workshops, communication, and partner development for girls and women in technical fields.", items: ["WIA-Europe", "FIT workshops", "Events", "Newsletter", "Partners", "Public outreach"] }
];
function p0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
const fo = [-1.8, 1.2, -0.7, 2.1, -1.4, 0.9, -2.2, 1.6, -0.4, 1.9], go = [0, 3, -2, 5, -1, 4, -3, 2, -4, 1], ho = [1, 1.04, 0.97, 1.02, 0.98, 1.03, 0.99, 1.01, 0.96, 1.05], yo = [3, 0, 5, 1, 4, 2, 7, 6, 9, 8];
function u0({
  label: e,
  index: t,
  revealed: i,
  parentIndex: n
}) {
  const a = (t * 7 + n * 13) % fo.length, o = fo[a], r = go[(a + 3) % go.length], l = ho[(a + 5) % ho.length], c = yo[(t + n * 3) % yo.length], d = `${-(a * 1.2 % 6).toFixed(2)}s`;
  return /* @__PURE__ */ s(
    w.span,
    {
      initial: { opacity: 0, y: 18, rotate: 0, scale: 0.9 },
      animate: i ? { opacity: 1, y: r, rotate: o, scale: l } : {},
      transition: {
        duration: 0.7,
        delay: 0.15 + c * 0.08,
        ease: Ve
      },
      className: "shiny-tag-outer",
      style: {
        display: "inline-block",
        position: "relative",
        borderRadius: "9999px",
        padding: "1px",
        willChange: "transform, opacity",
        cursor: "default",
        animationDelay: d
      },
      whileHover: {
        rotate: 0,
        scale: 1.06,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      },
      children: /* @__PURE__ */ s(
        "span",
        {
          className: "shiny-tag-inner",
          style: {
            display: "block",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(11px, 0.9vw, 14px)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "rgba(242,242,242,0.55)",
            backgroundColor: "#000000",
            borderRadius: "9999px",
            paddingTop: "clamp(6px, 0.6vw, 9px)",
            paddingBottom: "clamp(6px, 0.6vw, 9px)",
            paddingLeft: "clamp(14px, 1.4vw, 22px)",
            paddingRight: "clamp(14px, 1.4vw, 22px)",
            whiteSpace: "nowrap",
            position: "relative",
            zIndex: 1
          },
          children: e
        }
      )
    }
  );
}
function m0({
  service: e,
  index: t
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" }), a = t % 2 === 0;
  return /* @__PURE__ */ p("div", { ref: i, children: [
    /* @__PURE__ */ s(
      w.div,
      {
        initial: { scaleX: 0 },
        animate: n ? { scaleX: 1 } : {},
        transition: { duration: 1, ease: Ve },
        style: {
          height: "1px",
          backgroundColor: "rgba(242,242,242,0.08)",
          transformOrigin: "left center"
        }
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        style: {
          paddingTop: "clamp(40px, 5vw, 80px)",
          paddingBottom: "clamp(40px, 5vw, 80px)"
        },
        children: [
          /* @__PURE__ */ s(
            "div",
            {
              style: {
                marginBottom: "clamp(24px, 3vw, 48px)"
              },
              children: /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                w.h3,
                {
                  initial: { y: "110%", opacity: 0 },
                  animate: n ? { y: "0%", opacity: 1 } : {},
                  transition: { duration: 1, delay: 0.08, ease: Ve },
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(32px, 4.5vw, 76px)",
                    fontWeight: 300,
                    lineHeight: 0.95,
                    letterSpacing: "-0.05em",
                    color: "#F2F2F2",
                    whiteSpace: "nowrap"
                  },
                  children: e.title
                }
              ) })
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              className: "service-block-content",
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(32px, 4vw, 80px)",
                alignItems: "start"
              },
              children: [
                /* @__PURE__ */ s(
                  w.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: n ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8, delay: 0.2, ease: Ve },
                    style: {
                      order: a ? 0 : 1,
                      maxWidth: "520px"
                    },
                    children: /* @__PURE__ */ s(
                      "p",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(15px, 1.15vw, 18px)",
                          fontWeight: 400,
                          lineHeight: 1.6,
                          letterSpacing: "-0.01em",
                          color: "rgba(242,242,242,0.55)",
                          marginTop: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: e.description
                      }
                    )
                  }
                ),
                /* @__PURE__ */ s(
                  "div",
                  {
                    style: {
                      order: a ? 1 : 0,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "clamp(8px, 0.8vw, 12px)",
                      alignItems: "center",
                      justifyContent: a ? "flex-start" : "flex-end",
                      paddingTop: "clamp(4px, 0.5vw, 8px)"
                    },
                    children: e.items.map((o, r) => /* @__PURE__ */ s(
                      u0,
                      {
                        label: o,
                        index: r,
                        revealed: n,
                        parentIndex: t
                      },
                      o
                    ))
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
function f0() {
  const e = I(null), t = M(e, { once: !0, margin: "-80px" }), i = I(null), n = M(i, { once: !0, margin: "-60px" }), a = p0(), { lang: o } = V(), r = d0.map((l) => {
    const c = l.id === "ux" ? "ux" : l.id === "systems" ? "systems" : l.id === "ai" ? "ai" : "research";
    return {
      ...l,
      title: f(`services.${c}.title`, o),
      description: f(`services.${c}.description`, o)
    };
  });
  return /* @__PURE__ */ p(
    "section",
    {
      ref: e,
      style: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        paddingTop: a ? "32px" : "48px",
        paddingBottom: a ? "32px" : "48px",
        paddingLeft: 0,
        paddingRight: 0
      },
      children: [
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0 },
            animate: t ? { opacity: 1 } : {},
            transition: { duration: 0.7, ease: Ve },
            style: {
              position: "sticky",
              top: a ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              zIndex: 10,
              paddingLeft: a ? "16px" : "48px",
              height: 0,
              overflow: "visible",
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(10px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: Vt,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s("span", { "aria-hidden": !0, style: { width: "clamp(16px, 1.5vw, 24px)", height: "1px", backgroundColor: Vt, flexShrink: 0 } }),
                  f("services.label", o)
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              width: "100%",
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              paddingTop: a ? "clamp(64px, 12vw, 100px)" : "clamp(56px, 7vw, 120px)",
              paddingBottom: 0,
              paddingLeft: a ? "16px" : "48px",
              paddingRight: a ? "16px" : "48px"
            },
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  ref: i,
                  style: {
                    marginBottom: a ? "clamp(40px, 8vw, 80px)" : "clamp(64px, 8vw, 140px)",
                    maxWidth: "900px"
                  },
                  children: [
                    (a ? [
                      {
                        text: /* @__PURE__ */ p(J, { children: [
                          f("services.headline1", o),
                          " ",
                          /* @__PURE__ */ s("span", { style: { color: Vt, fontStyle: "italic" }, children: f("services.headline2_accent", o).split(" ")[0] })
                        ] }),
                        delay: 0.06
                      },
                      {
                        text: /* @__PURE__ */ s("span", { style: { color: Vt, fontStyle: "italic" }, children: f("services.headline2_accent", o).split(" ").slice(1).join(" ") }),
                        delay: 0.12
                      },
                      { text: f("services.headline3", o), delay: 0.18 }
                    ] : [
                      {
                        text: /* @__PURE__ */ p(J, { children: [
                          f("services.headline1", o),
                          " ",
                          /* @__PURE__ */ s("span", { style: { color: Vt, fontStyle: "italic" }, children: f("services.headline2_accent", o) })
                        ] }),
                        delay: 0.08
                      },
                      { text: f("services.headline3", o), delay: 0.16 }
                    ]).map((l, c) => /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { y: "110%", opacity: 0 },
                        animate: n ? { y: "0%", opacity: 1 } : {},
                        transition: { duration: 1.1, delay: l.delay, ease: Ve },
                        style: {
                          fontSize: a ? "clamp(38px, 10vw, 64px)" : "clamp(36px, 5.5vw, 84px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.05em",
                          color: "#F2F2F2",
                          willChange: "transform, opacity"
                        },
                        children: l.text
                      }
                    ) }, c)),
                    /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { opacity: 0, y: 16 },
                        animate: n ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 0.8, delay: 0.35, ease: Ve },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(14px, 1.05vw, 17px)",
                          fontWeight: 400,
                          lineHeight: 1.55,
                          letterSpacing: "-0.01em",
                          color: "rgba(242,242,242,0.55)",
                          marginTop: "clamp(28px, 3vw, 48px)",
                          marginBottom: 0,
                          marginLeft: 0,
                          marginRight: 0,
                          maxWidth: "520px"
                        },
                        children: f("services.subtitle", o)
                      }
                    )
                  ]
                }
              ),
              r.map((l, c) => /* @__PURE__ */ s(m0, { service: l, index: c }, l.id)),
              /* @__PURE__ */ s(
                w.div,
                {
                  initial: { scaleX: 0 },
                  whileInView: { scaleX: 1 },
                  viewport: { once: !0, margin: "-40px" },
                  transition: { duration: 1, ease: Ve },
                  style: {
                    height: "1px",
                    backgroundColor: "rgba(242,242,242,0.08)",
                    transformOrigin: "left center"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s("style", { children: `
        @keyframes shiny-border-rotate {
          0% { --shiny-angle: 0deg; }
          100% { --shiny-angle: 360deg; }
        }
        @property --shiny-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        .shiny-tag-outer {
          background: conic-gradient(
            from var(--shiny-angle),
            rgba(0,182,182,0.03) 0%,
            rgba(0,182,182,0.12) 4%,
            rgba(0,182,182,0.45) 9%,
            rgba(0,182,182,0.8) 13%,
            rgba(0,182,182,0.45) 17%,
            rgba(0,182,182,0.12) 22%,
            rgba(0,182,182,0.03) 30%,
            rgba(0,182,182,0.03) 100%
          );
          animation: shiny-border-rotate 6s linear infinite;
          box-shadow:
            0 0 12px rgba(0,182,182,0.08),
            0 0 28px rgba(0,182,182,0.04);
          transition: box-shadow 0.5s ease;
        }
        .shiny-tag-outer:hover {
          background: conic-gradient(
            from var(--shiny-angle),
            rgba(0,182,182,0.06) 0%,
            rgba(0,182,182,0.2) 4%,
            rgba(0,182,182,0.6) 9%,
            rgba(0,182,182,1) 13%,
            rgba(0,182,182,0.6) 17%,
            rgba(0,182,182,0.2) 22%,
            rgba(0,182,182,0.06) 30%,
            rgba(0,182,182,0.06) 100%
          );
          box-shadow:
            0 0 18px rgba(0,182,182,0.18),
            0 0 40px rgba(0,182,182,0.1),
            0 0 60px rgba(0,182,182,0.05);
        }
        .shiny-tag-outer:hover .shiny-tag-inner {
          color: rgba(242,242,242,0.9) !important;
        }
        @media (max-width: 768px) {
          .service-block-content {
            grid-template-columns: 1fr !important;
          }
          .service-block-content > * {
            order: 0 !important;
          }
        }
      ` })
      ]
    }
  );
}
const g0 = [0.22, 1, 0.36, 1];
function ve({
  children: e,
  id: t,
  entrance: i = !0
}) {
  const n = I(null), a = M(n, { once: !0, amount: 0.04 });
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      id: t,
      style: {
        position: "relative"
      },
      children: i ? /* @__PURE__ */ s(
        w.div,
        {
          initial: { opacity: 0.35, y: 32 },
          animate: a ? { opacity: 1, y: 0 } : {},
          transition: {
            duration: 0.55,
            ease: g0
          },
          style: {
            willChange: a ? "auto" : "transform, opacity"
          },
          children: e
        }
      ) : e
    }
  );
}
const yi = {
  p1694f000: "M258.8 117.77C255.47 117.77 253.76 115.1 253.76 109.9C253.76 104.7 255.31 101.72 258.22 101.72C260.58 101.72 262.13 103.73 262.13 106.76V115.75C261.51 116.95 260.15 117.76 258.8 117.76V117.77ZM257.28 120.17C259.41 120.17 261.27 118.89 262.36 116.6V120.01H263.17L268.83 119.27V118.53L266.93 117.95C265.96 117.64 265.73 117.33 265.73 116.21V92.34H263.91L259.1 93V93.74L261.08 94.59C261.89 94.94 262.13 95.33 262.13 96.3V101.18C260.89 100.79 259.84 100.64 258.56 100.64C253.41 100.64 249.84 104.67 249.84 110.56C249.84 116.45 252.59 120.17 257.28 120.17ZM279.41 120.17C281.73 120.17 283.79 119.2 285.49 117.26V116.29C283.98 117.45 282.35 117.99 280.37 117.99C276.61 117.99 274.52 114.93 274.52 109.54H285.68C285.72 109.31 285.76 108.53 285.76 108.03C285.76 103.23 283.4 100.55 279.17 100.55C274.21 100.55 270.76 104.5 270.76 110.24C270.76 116.52 273.94 120.16 279.4 120.16L279.41 120.17ZM274.6 108.43C274.83 104.44 276.61 101.65 278.94 101.65C281 101.65 282.2 103.43 282.2 106.53C282.2 107.58 282.2 108.04 282.16 108.43H274.6ZM305.37 120.21C308.66 120.21 311.34 119.63 313.08 118.66V112.23H312.46L311.99 113.55C310.79 116.92 308.47 118.97 305.71 118.97C301.45 118.97 299.09 114.75 299.09 107.23C299.09 99.71 301.34 95.41 305.68 95.41C308.12 95.41 310.18 97.15 311.65 100.29L312.27 101.61H312.89V95.49C311.07 94.68 308.43 94.17 305.8 94.17C299.17 94.17 294.56 99.56 294.56 107.23C294.56 114.9 298.71 120.21 305.37 120.21ZM323.23 118.35C321.33 118.35 320.25 117.15 320.25 114.98C320.25 112.54 321.72 111.03 325.09 110.25L326.68 109.86V113.62C326.68 116.22 325.13 118.35 323.23 118.35ZM321.88 120.17C324.01 120.17 325.79 118.93 326.92 116.68C327.04 118.85 328.16 120.13 329.94 120.13C330.68 120.13 331.57 119.94 332.81 119.55L333.16 119.43V118.85L331.57 118.42C330.64 118.19 330.29 117.68 330.29 116.72V107.38C330.29 102.85 328 100.56 323.39 100.56C321.45 100.56 319.05 101.18 317.54 102.07V106.22H318.04C319.2 103.47 320.98 101.88 323.08 101.88C325.6 101.88 326.68 103.31 326.68 106.41V108.85L324.59 109.31C318.82 110.55 316.65 112.22 316.65 115.35C316.65 118.48 318.67 120.16 321.88 120.16V120.17ZM341.91 120.17C343.61 120.17 345.24 119.32 346.29 118.04V117.34C345.48 117.8 344.86 118 343.81 118C341.56 118 340.48 117.03 340.48 114.55V102.65H345.75V101.26H340.48V96.88H337.77L337.27 99.44C337.04 100.72 336.8 100.99 335.8 101.38L334.68 101.81V102.66H336.89V114.94C336.89 118.39 338.63 120.17 341.93 120.17H341.91ZM355 118.35C353.1 118.35 352.02 117.15 352.02 114.98C352.02 112.54 353.49 111.03 356.86 110.25L358.45 109.86V113.62C358.45 116.22 356.9 118.35 355 118.35ZM353.65 120.17C355.78 120.17 357.56 118.93 358.69 116.68C358.81 118.85 359.93 120.13 361.71 120.13C362.45 120.13 363.34 119.94 364.58 119.55L364.93 119.43V118.85L363.34 118.42C362.41 118.19 362.06 117.68 362.06 116.72V107.38C362.06 102.85 359.77 100.56 355.16 100.56C353.22 100.56 350.82 101.18 349.31 102.07V106.22H349.81C350.97 103.47 352.75 101.88 354.85 101.88C357.37 101.88 358.45 103.31 358.45 106.41V108.85L356.36 109.31C350.59 110.55 348.42 112.22 348.42 115.35C348.42 118.48 350.43 120.16 353.65 120.16V120.17ZM365.81 119.71H375.34V118.93L373.29 118.35C372.48 118.12 372.24 117.73 372.24 116.84V92.35H370.42L365.73 93.01V93.78L367.63 94.59C368.37 94.98 368.64 95.33 368.64 96.33V116.83C368.64 117.72 368.41 118.07 367.59 118.34L365.81 118.92V119.7V119.71ZM383.98 120.17C386.19 120.17 388.32 118.66 390.26 115.64V120.02H391.07L396.73 119.28V118.54L394.83 117.96C393.82 117.65 393.63 117.3 393.63 116.26V101.11H391.81L387.78 101.54V102.08L389.1 102.86C389.84 103.29 390.03 103.64 390.03 104.64V114.6C388.6 116.58 387.16 117.43 385.54 117.43C383.29 117.43 382.44 116.15 382.44 112.74V101.12H380.62L377.02 101.7V102.28L377.99 103.13C378.73 103.75 378.84 104.14 378.84 105.22V113.94C378.84 118.12 380.54 120.18 383.99 120.18L383.98 120.17ZM397.97 119.71H407.11V118.93L405.44 118.43C404.67 118.2 404.39 117.85 404.39 116.92V106.15C405.75 104.25 407.37 103.28 409.12 103.28C411.41 103.28 412.22 104.6 412.22 107.89V116.92C412.22 117.81 411.99 118.2 411.17 118.43L409.5 118.93V119.71H418.76V118.93L416.86 118.35C416.05 118.12 415.81 117.73 415.81 116.84V107.27C415.81 102.89 414.07 100.57 410.58 100.57C408.33 100.57 406.12 102.12 404.26 105.18V101.11H402.56L398.96 102.08V102.66L399.93 103.51C400.63 104.09 400.78 104.48 400.78 105.6V116.84C400.78 117.73 400.55 118.08 399.73 118.35L397.95 118.93V119.71H397.97ZM420.95 127.8C424.98 127.61 427.26 125.44 429.24 120.01L434.9 104.35C435.21 103.5 435.71 102.84 436.33 102.3L436.64 102.03V101.26H430.79V102.11L432.07 102.5C432.73 102.69 432.92 102.96 432.92 103.39C432.92 103.66 432.88 104.16 432.73 104.67L429.67 115.44L424.32 104.28C424.21 104.01 424.09 103.62 424.09 103.39C424.09 102.96 424.25 102.73 424.94 102.54L426.61 102.11V101.26H418.63V102.03C419.25 102.57 419.71 103.15 420.18 104.08L427.77 119.7C427.19 122.53 424.63 124.7 420.95 124.85V127.79V127.8ZM444.97 118.35C443.07 118.35 441.99 117.15 441.99 114.98C441.99 112.54 443.46 111.03 446.83 110.25L448.42 109.86V113.62C448.42 116.22 446.87 118.35 444.97 118.35ZM443.62 120.17C445.75 120.17 447.53 118.93 448.66 116.68C448.77 118.85 449.9 120.13 451.68 120.13C452.42 120.13 453.31 119.94 454.55 119.55L454.9 119.43V118.85L453.31 118.42C452.38 118.19 452.03 117.68 452.03 116.72V107.38C452.03 102.85 449.75 100.56 445.13 100.56C443.19 100.56 440.79 101.18 439.28 102.07V106.22H439.78C440.94 103.47 442.72 101.88 444.82 101.88C447.34 101.88 448.42 103.31 448.42 106.41V108.85L446.33 109.31C440.56 110.55 438.39 112.22 438.39 115.35C438.39 118.48 440.4 120.16 443.62 120.16V120.17Z",
  p39cc3e00: "M260.89 82.87C267.32 82.87 271.78 77.56 271.78 69.85C271.78 62.14 267.44 56.83 260.89 56.83C254.34 56.83 250 62.14 250 69.85C250 77.56 254.34 82.87 260.89 82.87ZM260.81 58.07C264.8 58.07 267.2 62.45 267.2 69.85C267.2 77.25 265.07 81.63 260.96 81.63C256.85 81.63 254.57 77.25 254.57 69.85C254.57 62.45 256.7 58.07 260.81 58.07ZM284.06 81.63C281.89 81.63 280.38 79.77 280.38 76.71V67.72C281.5 66.33 282.55 65.75 283.94 65.75C287 65.75 288.74 68.5 288.74 73.3C288.74 78.42 287.04 81.63 284.05 81.63H284.06ZM276.77 82.99H277.66L278.4 81.29C279.95 82.26 281.77 82.76 283.82 82.76C289.32 82.76 292.81 78.85 292.81 72.69C292.81 66.88 290.14 63.23 285.8 63.23C283.28 63.23 281.54 64.31 280.37 66.6V55.02H278.55L273.86 55.68V56.42L275.76 57.23C276.53 57.66 276.77 58.04 276.77 58.97V82.99ZM304.63 82.83C306.95 82.83 309.01 81.86 310.71 79.92V78.95C309.2 80.11 307.57 80.65 305.6 80.65C301.84 80.65 299.75 77.59 299.75 72.2H310.91C310.95 71.97 310.99 71.19 310.99 70.69C310.99 65.89 308.63 63.21 304.4 63.21C299.44 63.21 295.99 67.16 295.99 72.9C295.99 79.18 299.17 82.82 304.63 82.82V82.83ZM299.83 71.09C300.06 67.1 301.85 64.31 304.17 64.31C306.23 64.31 307.42 66.09 307.42 69.19C307.42 70.24 307.42 70.7 307.38 71.09H299.82H299.83ZM313.04 82.37H323.35V81.52L320.52 80.9C319.74 80.71 319.47 80.32 319.47 79.39V70.32C320.71 68 322.3 67.14 325.63 66.95V63.31C322.8 63.58 321.06 65.33 319.35 69.43V63.77H317.64L314.04 64.74V65.32L315.01 66.17C315.71 66.75 315.86 67.14 315.86 68.26V79.5C315.86 80.39 315.63 80.74 314.81 81.01L313.03 81.59V82.37H313.04ZM334.78 82.83C336.49 82.83 338.11 81.98 339.16 80.7V80C338.35 80.47 337.72 80.66 336.68 80.66C334.43 80.66 333.35 79.69 333.35 77.21V65.32H338.62V63.92H333.35V59.54H330.64L330.14 62.1C329.91 63.38 329.68 63.65 328.67 64.04L327.55 64.47V65.32H329.76V77.6C329.76 81.05 331.5 82.83 334.8 82.83H334.78ZM347.87 81.01C345.97 81.01 344.89 79.81 344.89 77.64C344.89 75.2 346.36 73.69 349.73 72.91L351.32 72.52V76.28C351.32 78.88 349.77 81.01 347.87 81.01ZM346.52 82.83C348.65 82.83 350.43 81.59 351.56 79.34C351.67 81.51 352.8 82.79 354.58 82.79C355.32 82.79 356.21 82.6 357.45 82.21L357.8 82.09V81.51L356.21 81.08C355.28 80.85 354.93 80.34 354.93 79.38V70.04C354.93 65.51 352.64 63.22 348.03 63.22C346.09 63.22 343.69 63.84 342.18 64.73V68.88H342.68C343.84 66.13 345.62 64.54 347.72 64.54C350.24 64.54 351.32 65.97 351.32 69.07V71.51L349.23 71.98C343.45 73.22 341.29 74.88 341.29 78.02C341.29 81.16 343.31 82.82 346.52 82.82V82.83Z",
  pa0e7700: "M230 0H34.03V45.1C34.03 58.3 39.02 63.37 49.01 63.37C59 63.37 63.99 58.3 63.99 45.1V0H88.03V43.86C88.03 69.96 73.99 84.4 49.02 84.4C24.05 84.4 10 69.97 10 43.86V0H34.03H0V170H230V149.06C226.8 149.68 223.36 150 219.67 150C194.7 150 180.66 135.57 180.66 109.47V87.97C180.66 61.87 194.71 47.44 219.67 47.44C223.36 47.44 226.8 47.76 230 48.38V0ZM230 125.71V71.73C227.53 69.47 224.09 68.47 219.67 68.47C209.68 68.47 204.69 73.53 204.69 86.74V110.7C204.69 123.9 209.68 128.97 219.67 128.97C224.09 128.97 227.53 127.97 230 125.71ZM173.37 55.17V76.67C173.37 102.77 159.33 117.21 134.36 117.21C109.39 117.21 95.35 102.77 95.35 76.67V55.17C95.35 29.07 109.39 14.64 134.36 14.64C159.33 14.64 173.37 29.07 173.37 55.17ZM149.34 77.89V53.94C149.34 40.74 144.35 35.67 134.36 35.67C124.37 35.67 119.38 40.74 119.38 53.94V77.9C119.38 91.1 124.37 96.17 134.36 96.17C144.35 96.17 149.34 91.1 149.34 77.9V77.89Z",
  pf5edd20: "M262.63 45.53C268.06 45.53 271.35 41.85 271.35 34.87V23.67C271.35 22.28 271.58 21.81 272.51 21.5L274.6 20.84V19.99H265.73V20.84L267.98 21.54C269.1 21.89 269.37 22.35 269.37 23.86V35.68C269.37 41.26 266.81 44.28 262.98 44.28C259.15 44.28 257.25 41.22 257.25 35.37V23.86C257.25 22.35 257.52 21.88 258.64 21.54L260.89 20.84V19.99H250V20.84L252.01 21.5C252.94 21.81 253.17 22.28 253.17 23.67V34.4C253.17 41.8 256.5 45.52 262.62 45.52L262.63 45.53ZM275.65 45.03H284.8V44.25L283.13 43.75C282.35 43.52 282.08 43.17 282.08 42.24V31.47C283.44 29.57 285.06 28.6 286.81 28.6C289.1 28.6 289.91 29.92 289.91 33.21V42.24C289.91 43.13 289.68 43.52 288.86 43.75L287.19 44.25V45.03H296.45V44.25L294.55 43.67C293.74 43.44 293.5 43.05 293.5 42.16V32.59C293.5 28.21 291.76 25.89 288.27 25.89C286.02 25.89 283.81 27.44 281.95 30.5V26.43H280.25L276.65 27.4V27.98L277.62 28.83C278.32 29.41 278.47 29.8 278.47 30.92V42.16C278.47 43.05 278.24 43.4 277.42 43.67L275.64 44.25V45.03H275.65ZM302.04 22.67C303.32 22.67 304.29 21.74 304.29 20.42C304.29 19.1 303.32 18.17 302.04 18.17C300.76 18.17 299.79 19.1 299.79 20.42C299.79 21.74 300.76 22.67 302.04 22.67ZM297.7 45.03H307.23V44.25L305.18 43.67C304.37 43.44 304.13 43.05 304.13 42.16V26.43H302.31L298.71 27.4V27.98L299.68 28.83C300.42 29.45 300.53 29.84 300.53 30.92V42.16C300.53 43.05 300.3 43.4 299.48 43.67L297.7 44.25V45.03ZM316.06 45.11H317.53L323.69 30.04C324.12 29.03 324.7 28.18 325.63 27.4V26.59H319.86V27.4L320.98 27.67C321.64 27.83 321.99 28.13 321.99 28.64C321.99 28.95 321.87 29.65 321.68 30.23L318 40.88L313.7 30.23C313.51 29.76 313.31 29.3 313.31 28.84C313.31 28.41 313.54 28.14 314.24 27.91L315.83 27.41V26.6H307.89V27.34C308.59 27.92 308.94 28.35 309.25 29.08L316.07 45.12L316.06 45.11ZM335.52 45.49C337.84 45.49 339.9 44.52 341.6 42.58V41.61C340.09 42.77 338.46 43.32 336.49 43.32C332.73 43.32 330.64 40.26 330.64 34.87H341.8C341.84 34.64 341.88 33.86 341.88 33.36C341.88 28.56 339.52 25.88 335.29 25.88C330.33 25.88 326.88 29.83 326.88 35.57C326.88 41.85 330.06 45.49 335.52 45.49ZM330.71 33.75C330.94 29.76 332.72 26.97 335.05 26.97C337.1 26.97 338.3 28.75 338.3 31.85C338.3 32.9 338.3 33.36 338.26 33.75H330.7H330.71ZM343.92 45.03H354.23V44.18L351.4 43.56C350.63 43.37 350.35 42.98 350.35 42.05V32.98C351.59 30.65 353.18 29.8 356.51 29.61V25.97C353.68 26.24 351.94 27.99 350.23 32.09V26.43H348.53L344.93 27.4V27.98L345.9 28.83C346.6 29.41 346.75 29.8 346.75 30.92V42.16C346.75 43.05 346.52 43.4 345.7 43.67L343.92 44.25V45.03ZM364.42 45.46C368.64 45.46 371.36 43.14 371.36 39.53C371.36 37.09 370 35.34 367.29 34.49L365.04 33.75C362.91 33.05 362.02 32.05 362.02 30.19C362.02 28.33 363.26 26.97 365.12 26.97C366.98 26.97 368.26 27.98 369.46 30.23L369.89 31.04H370.36V26.66C368.93 26.16 367.18 25.88 365.36 25.88C361.52 25.88 358.81 28.17 358.81 31.34C358.81 34.24 360.24 35.99 363.57 37.07L365.39 37.65C367.29 38.27 368.14 39.28 368.14 40.94C368.14 43.11 366.78 44.35 364.5 44.35C362.41 44.35 360.98 43.11 359.7 40.44L359.39 39.78H358.93V44.31C360.13 44.97 362.42 45.43 364.43 45.43L364.42 45.46ZM377.71 22.67C378.99 22.67 379.96 21.74 379.96 20.42C379.96 19.1 378.99 18.17 377.71 18.17C376.43 18.17 375.46 19.1 375.46 20.42C375.46 21.74 376.43 22.67 377.71 22.67ZM373.37 45.03H382.9V44.25L380.85 43.67C380.04 43.44 379.8 43.05 379.8 42.16V26.43H377.98L374.38 27.4V27.98L375.35 28.83C376.08 29.45 376.2 29.84 376.2 30.92V42.16C376.2 43.05 375.97 43.4 375.15 43.67L373.37 44.25V45.03ZM391.74 45.49C393.44 45.49 395.07 44.64 396.12 43.36V42.66C395.31 43.13 394.69 43.32 393.64 43.32C391.39 43.32 390.31 42.35 390.31 39.87V27.97H395.58V26.58H390.31V22.2H387.6L387.1 24.76C386.87 26.04 386.63 26.31 385.63 26.7L384.51 27.12V27.97H386.72V40.25C386.72 43.7 388.46 45.48 391.76 45.48L391.74 45.49ZM404.83 43.67C402.93 43.67 401.85 42.47 401.85 40.3C401.85 37.86 403.32 36.35 406.69 35.57L408.28 35.18V38.94C408.28 41.53 406.73 43.67 404.83 43.67ZM403.47 45.49C405.6 45.49 407.38 44.25 408.51 42C408.63 44.17 409.75 45.45 411.53 45.45C412.27 45.45 413.16 45.26 414.4 44.87L414.75 44.75V44.17L413.16 43.74C412.23 43.51 411.88 43.01 411.88 42.04V32.7C411.88 28.17 409.59 25.88 404.98 25.88C403.04 25.88 400.64 26.5 399.13 27.39V31.54H399.63C400.79 28.79 402.57 27.2 404.67 27.2C407.19 27.2 408.27 28.63 408.27 31.73V34.17L406.18 34.64C400.41 35.88 398.24 37.54 398.24 40.68C398.24 43.82 400.25 45.48 403.47 45.48V45.49ZM423.51 45.49C425.22 45.49 426.84 44.64 427.89 43.36V42.66C427.08 43.13 426.46 43.32 425.41 43.32C423.16 43.32 422.08 42.35 422.08 39.87V27.97H427.35V26.58H422.08V22.2H419.37L418.87 24.76C418.64 26.04 418.41 26.31 417.4 26.7L416.28 27.12V27.97H418.49V40.25C418.49 43.7 420.23 45.48 423.53 45.48L423.51 45.49Z"
};
function h0() {
  return /* @__PURE__ */ s("div", { className: "relative size-full", "data-name": "WIA-Europe logo", children: /* @__PURE__ */ s("img", { src: "/_assets/wia-logo.png", alt: "Women in Aerospace Europe logo", style: { display: "block", width: "100%", height: "100%", objectFit: "contain", objectPosition: "left top" } }) });
}
const D = {
  p12655180: "M209.839 92.4018C210.153 92.346 210.471 92.3052 210.789 92.2803C227.806 90.8637 243.506 107.787 243.611 123.951C243.641 128.567 243.232 132.652 237.512 133.31C232.97 133.832 228.225 133.573 223.706 133.561L199.053 133.549C203.315 143.201 209.593 146.705 220.328 143.663C227.987 141.492 236.286 133.151 241.861 143.739C245.807 155.35 224.956 161.025 217.011 161.699C191.571 163.855 173.47 144.774 178.701 119.588C182.008 103.663 193.477 93.3507 209.839 92.4018ZM198.378 120.2C203.111 120.149 207.844 120.13 212.577 120.141L224.152 120.16C221.916 112.847 218.818 107.863 210.204 108.468C202.929 109.935 200.82 113.423 198.378 120.2Z",
  p14f5d2f0: "M463.989 215.104C464.745 215.085 466.266 214.973 466.881 215.356C469.239 216.831 469.896 221.888 470.482 224.503C471.75 221.329 472.078 216.864 474.8 215.019C478.299 214.679 478.793 220.309 479.284 222.867C479.75 225.303 480.802 229.672 478.917 231.536C477.671 231.631 478.137 231.677 476.905 230.943C476.085 229.71 475.81 226.367 475.577 224.727L475.362 223.491L475.062 223.33C473.667 225.286 473.759 229.282 471.919 231.512C468.756 232.815 466.835 224.604 466.129 222.411C465.836 224.706 465.366 230.897 463.103 232L462.771 231.867C460.487 228.994 462.34 217.777 463.989 215.104Z",
  p1624e100: "M267.303 92.708C278.895 93.18 276.582 102.2 277.341 109.775C278.33 119.658 272.208 143.5 287.926 142.989C299.567 142.612 297.925 133.883 298.533 125.953C299.218 116.958 295.856 102.679 301.551 95.458C306.551 89.8355 317.242 93.317 317.863 101.115C318.361 107.346 318.072 114.062 318.036 120.522C318.026 129.677 319.364 141.642 314.258 149.222C309.919 155.668 301.996 159.792 294.494 161.216C285.37 162.944 275.929 161 268.243 155.813C252.944 145.285 258.72 127.152 257.619 111.214C257.04 102.834 256.923 94.0994 267.303 92.708Z",
  p17fd70: "M257.252 178.035C265.884 177.965 269.93 185.89 266.202 193.417C264.768 196.313 262.237 197.189 259.303 198.001C245.292 198.072 244.768 180.103 257.252 178.035ZM259.486 193.895C264.366 190.349 263.737 181.287 256.27 182.531C251.853 185.771 252.305 194.232 259.486 193.895Z",
  p1e98d500: "M275.643 178.699C279.057 178.32 283.541 177.992 286.408 180.06C287.919 181.13 288.894 182.798 289.074 184.634C289.558 189.822 284.77 191.3 280.632 191.502L279.848 191.475C278.718 193.291 280.184 195.42 278.372 197.53C277.415 198.002 277.281 197.907 276.166 197.724C274.181 195.786 274.294 180.323 275.643 178.699ZM283.665 186.695C284.053 185.386 284.18 185.237 283.838 183.979C282.602 182.417 281.267 182.567 279.417 182.495C279.368 184.014 279.128 185.703 279.763 187.001C281.133 187.886 282.238 187.234 283.665 186.695Z",
  p208ff340: "M337.904 178.191C339.574 178.228 340.047 178.192 341.177 179.419C344.008 182.487 346.497 185.864 349.043 189.166C349.036 186.328 348.033 179.828 350.805 178.375C352.267 178.334 351.691 178.203 352.99 178.874C354.555 180.716 353.626 192.3 353.693 195.149C353.732 196.629 353.11 197.103 352.132 198.061C349.301 197.597 343.694 189.36 341.639 186.663C341.653 189.783 342.589 195.962 339.952 197.853C338.8 197.935 337.127 197.048 337.088 195.971C336.961 192.278 336.103 180.745 337.904 178.191Z",
  p227a1d80: "M320.007 178.283C325.168 177.765 325.769 183.144 327.417 187.081C328.526 189.734 330.422 194.92 329.024 197.475C327.894 198.039 328.484 197.9 327.174 197.848C325.906 197.069 325.649 195.693 324.759 194.159L323.707 193.997L318.111 194.015C317.507 196.034 316.504 198.408 313.891 197.827C313.39 197.092 313.051 196.151 313.231 195.314C314.001 191.693 317.482 180.631 320.007 178.283ZM322.612 190.093L323.343 189.657C322.979 187.216 322.153 185.682 321.634 183.446C320.988 185.271 319.738 187.788 320.112 189.501C321.009 190.195 321.327 189.999 322.612 190.093Z",
  p27f1a500: "M444.719 178.291C450.113 177.703 454.975 181.556 455.6 186.917C456.229 192.278 452.387 197.137 446.999 197.796C441.566 198.461 436.623 194.597 435.991 189.185C435.355 183.774 439.274 178.884 444.719 178.291ZM445.894 194.085C447.582 193.599 448.458 193.373 449.386 191.728C450.442 189.858 450.668 187.633 450 185.591C449.277 183.399 448.006 182.512 445.739 182.237C439.306 183.684 439.903 192.845 445.894 194.085Z",
  p29fd3d80: "M329.126 214.835C340.132 214.244 342.201 228.481 332.085 231.624C327.936 231.81 323.95 230.42 322.757 226.195C321.094 220.299 323.714 216.66 329.126 214.835ZM331.796 228.193C335.701 224.752 335.478 218.399 329.73 218.264L329.282 218.254C325.437 221.727 325.486 228.067 331.315 228.183L331.796 228.193Z",
  p2bf24600: "M226.156 215.26C228.647 215.181 232.692 214.623 234.429 216.491C234.399 217.599 234.479 217.187 233.828 218.193C232.417 218.876 230.575 218.656 228.853 218.781C226.919 223.069 231.449 220.646 233.581 222.177C233.993 223.137 233.952 223.095 233.735 224.141C232.353 225.166 231.448 224.517 229.191 225.289C228.348 226.286 228.628 226.434 228.617 227.997C230.685 227.877 233.443 227.6 234.795 229.479L234.663 229.872C234.334 230.184 233.407 231.038 233.022 231.069C231.156 231.238 227.001 231.505 225.399 230.634C224.038 228.615 224.717 220.034 224.796 217.267C224.828 216.14 225.426 215.847 226.156 215.26Z",
  p2c5b3570: "M280.007 214.973C283.082 215.042 284.141 217.561 285.769 219.89C287.669 217.151 288.064 216.121 291.055 214.687L292.054 215.129C292.569 218.091 289.487 221.544 287.782 223.744C287.467 225.911 288.096 228.724 287.397 230.599C286.412 231.41 285.875 231.944 284.629 231.414C283.361 229.738 283.7 226.104 283.721 223.923C282.415 222.176 280.607 219.939 279.7 217.984C279.071 216.628 279.495 216.17 280.007 214.973Z",
  p2d429300: "M345.844 215.256C349.626 215.125 354.117 214.84 356.345 218.619C357.873 221.221 355.091 223.772 352.863 224.741C354.858 226.782 356.768 228.569 355.977 231.614C354.449 231.786 354.643 231.719 353.199 230.936C351.585 229.247 350.127 227.273 348.69 225.419C348.75 227.926 349.287 229.998 347.048 231.491C343.009 231.561 343.871 217.32 345.844 215.256ZM352.383 221.6C352.471 220.326 352.549 220.204 351.882 219.195C350.734 218.434 350.067 218.524 348.679 218.433C348.686 220.093 348.418 220.738 349.142 222.041C350.18 222.435 351.257 221.948 352.383 221.6Z",
  p2e0fec80: "M186.585 178.682C188.428 178.464 198.791 177.408 196.587 181.553C194.673 182.859 192.491 182.864 190.23 182.974C189.638 183.384 189.576 183.727 189.299 184.39C189.879 186.524 193.791 185.17 195.935 187.147C196.184 188.53 196.268 188.024 195.836 189.297C194.509 190.234 192.832 189.37 190.495 190.186C189.556 191.14 189.863 191.319 189.831 192.987C191.691 194.628 194.575 191.773 196.445 195.048C196.396 199.01 188.058 197.983 185.946 196.49C184.941 194.785 185.378 190.321 185.423 188.218C185.486 185.221 184.561 181.05 186.585 178.682Z",
  p2e5af880: "M204.933 178.192L206.592 178.339C210.771 181.157 205.32 192.877 210.858 193.625C220.329 194.904 212.104 180.952 217.793 178.101C220.29 178.375 220.488 180.345 220.521 182.415C220.55 185.838 221.047 191.976 219.01 194.637C214.101 200.941 204.043 198.208 203.626 189.942C203.459 186.627 202.83 180.768 204.933 178.192Z",
  p31dcc300: "M378.013 214.699C379.393 215 380.735 215.512 381.25 216.901C382.493 220.225 386.169 227.344 385.222 230.701C384.375 231.677 384.837 231.41 383.531 231.642C381.289 230.276 382.924 228.696 379.845 228.446C373.553 228.221 376.208 230.637 373.154 231.635C369.038 230.128 375.516 216.079 378.013 214.699ZM379.28 225.205L380.029 224.548C379.962 223.181 379.125 220.849 378.51 219.619L377.398 222.61C377.063 223.509 377.063 223.579 377.306 224.513C378.129 225.015 378.362 225.015 379.28 225.205Z",
  p32119800: "M427.838 215.01C429.547 215.123 429.212 214.85 430.373 215.717C431.556 217.994 430.966 224.892 430.949 227.955C433.148 227.846 434.652 227.435 436.273 228.66C436.651 229.823 436.517 229.96 436.111 231.189C434.483 231.224 429.872 231.326 428.664 230.982C426.355 230.321 427.079 216.733 427.838 215.01Z",
  p330c0300: "M376.332 178.155C378.048 178.326 377.815 178.065 379.093 178.953C381.501 182.903 378.083 191.176 382.147 194C391.027 195.182 384.908 180.613 389.371 178.108C390.395 178.196 390.487 178.372 391.327 179.051C392.068 180.316 391.984 181.292 392.061 182.766C392.086 185.645 392.323 192.232 390.995 194.05C385.515 201.549 373.529 197.915 375.435 187.511C376.004 184.398 374.365 181.253 376.332 178.155Z",
  p3344b740: "M400.846 178.183L402.516 178.357C405.143 179.802 409.729 186.58 411.946 189.307C411.862 186.068 410.901 180.424 413.655 178.389C414.99 178.315 414.524 178.176 415.664 178.739C416.102 179.355 416.504 180.205 416.459 180.956C416.233 184.595 417.511 195.257 415.385 197.929C412.059 197.859 406.661 189.434 404.387 186.639C404.451 189.457 405.146 195.735 402.971 197.691C401.224 197.948 399.787 196.912 399.864 195.238C400.041 191.576 398.9 180.686 400.846 178.183Z",
  p363e7e00: "M241.053 215.019C245.648 215.166 247.036 220.495 250.603 223.899L250.879 224.155C250.801 221.56 250.222 217.38 251.691 215.452C252.93 214.951 252.421 215.049 253.855 215.33C254.522 216.094 254.787 216.667 254.784 218.219C254.78 222.065 255.161 227.01 254.37 230.76C253.936 231.252 253.587 231.645 253.322 231.944C249.099 229.939 247.899 225.243 244.29 222.301C244.318 223.516 244.334 224.727 244.339 225.942C244.342 227.807 244.168 230.371 242.776 231.765L242.157 231.684C239.559 229.113 239.752 218.106 241.053 215.019Z",
  p36ea5300: "M361.634 92.3969C368.095 91.0586 374.863 95.4862 379.234 99.7058C381.046 96.5263 382.67 93.7707 386.529 92.8973C391.323 91.8126 397.612 94.9425 398.36 100.053C399.165 105.582 398.805 111.776 398.858 117.418C398.939 125.86 398.798 134.33 398.844 142.774C398.858 145.985 398.89 149.257 398.537 152.443C398.325 154.337 397.545 156.006 396.468 157.549C395.073 159.675 393.392 160.831 390.879 161.266C381.904 162.497 381.434 156.352 378.871 154.527L378.284 154.991C368.247 165.478 354.678 163.185 344.047 154.621C329.755 143.11 328.445 116.452 340.711 103.071C346.557 96.6903 352.764 92.9816 361.634 92.3969ZM367.399 143.333C383.612 139.722 382.313 109.766 363.734 110.576C346.614 114.477 348.189 144.862 367.399 143.333Z",
  p36fcd000: "M395.603 214.874C398.007 214.687 401.234 214.713 401.845 217.494C400.959 220.08 397.276 217.664 395.437 219.375C396.507 221.889 399.561 221.143 401.107 222.587C406.198 227.336 401.315 231.47 395.949 231.726C393.728 231.435 389.113 230.191 391.895 227.228C394.752 226.747 395.885 229.191 398.304 227.308C398.385 224.576 383.019 220.344 395.603 214.874Z",
  p37134870: "M441.732 215.048C442.388 215.06 443.048 215.125 443.702 215.175C447.134 218.015 443.37 226.209 447.127 228.443C448.006 228.506 449.52 227.895 450.106 227.301C453.623 223.723 448.631 218.263 452.889 214.89C455.321 214.784 455.268 216.794 455.353 218.585C455.378 220.839 455.47 223.14 455.325 225.388C455.018 230.048 450.668 232.91 446.24 231.466C444.404 230.887 442.886 229.587 442.039 227.87C440.619 225.001 440.821 217.899 441.732 215.048Z",
  p378c8b80: "M408.511 214.959C411.738 215.06 412.688 217.49 414.375 219.953C415.435 218.271 418.009 213.936 420.399 215.132C421.285 218.215 418.227 221.314 416.413 223.579C415.445 225.507 417.218 230.659 414.435 231.881C411.604 231.178 412.31 226.244 412.314 223.941C410.177 221.124 407.208 218.496 408.511 214.959Z",
  p378d8d00: "M210.11 214.847C212.48 214.72 219.26 215.932 217.206 219.423C214.993 219.867 212.319 218.184 209.936 218.702C206.306 219.491 206.343 227.336 210.08 228.014C212.353 228.429 213.807 227.891 214.409 225.735C213.516 224.685 212.544 225.24 210.698 224.362L210.436 223.625C210.969 221.999 211.077 222.006 212.666 221.82C215.939 221.696 220.349 221.592 218.356 226.901C216.972 230.592 210.109 233.37 206.78 230.729C200.838 226.016 201.621 216.922 210.11 214.847Z",
  p37bdf980: "M94.9101 88.7553C95.0955 88.7437 95.2812 88.7357 95.4673 88.7314C114.638 88.2465 134.701 88.7399 153.916 88.9351C157.709 88.9737 161.883 92.6828 162.202 96.4505C162.75 102.911 162.485 109.915 162.48 116.486L162.518 161.84L157.41 161.83L120.547 161.86C114.046 161.863 100.939 162.643 94.4565 160.774C91.3561 159.881 88.8126 154.534 88.8331 151.041C88.9386 133.275 88.7858 115.294 88.8553 97.5124C88.874 92.7 90.6599 90.5817 94.9101 88.7553Z",
  p39ce600: "M425.66 178.227C426.963 178.236 427.238 178.197 428.4 178.749C428.911 179.429 429.229 179.639 429.233 180.918C429.24 185.921 429.568 191.743 428.908 196.677C428.512 197.169 428.195 197.565 427.955 197.864C426.009 197.936 424.682 197.02 424.604 195C424.456 191.146 423.619 181.175 425.66 178.227Z",
  p3f3f36c0: "M296.679 178.677C299.655 178.358 305.891 177.698 307.239 180.92C305.961 183.507 301.629 182.384 300.337 183.089C299.903 184.505 299.8 184.108 300.153 185.328C302.219 186.686 304.235 184.942 306.191 187.129C307.158 191.655 303.384 188.813 300.771 190.239C299.924 191.445 300.224 191.63 300.227 193.35C301.922 193.582 306.989 193.122 307.123 195.831C304.983 198.097 298.66 198.329 296.139 196.649C294.9 195.069 295.532 190.728 295.507 188.571C295.475 185.503 294.596 181.069 296.679 178.677Z",
  p3f555040: "M267.762 214.847C271.028 214.69 271.851 214.955 274.174 217.127L274.051 218.275C272.472 218.683 270.202 218.438 268.25 218.875C263.501 219.592 264.203 227.607 268.384 228.042C270.862 228.299 270.834 226.413 274.139 227.916C273.931 229.602 273.768 230.409 272.006 231.08C263.377 234.349 258.219 225.31 262.089 218.357C263.345 216.099 265.33 215.393 267.762 214.847Z",
  p9776900: "M229.14 178.705C235 177.938 245.172 178.681 241.212 187.473C240.611 188.808 239.271 188.979 238.28 189.971C239.826 191.834 243.632 195.491 240.957 197.797C239.693 197.881 239.543 197.865 238.442 197.249C236.309 194.897 234.727 192.691 232.85 190.138C232.921 192.651 233.498 196.426 231.176 197.882C229.575 197.858 228.028 196.935 228.097 195.277C228.25 191.588 227.083 181.467 229.14 178.705ZM237.152 186.114C237.487 184.383 237.591 184.979 237.058 183.557C235.725 182.436 234.615 182.5 232.855 182.514C232.811 183.921 232.592 185.216 233.244 186.397C234.665 187.217 235.684 186.642 237.152 186.114Z",
  pca3c00: "M10.6467 0.331859C20.1955 -0.0403793 32.1671 0.292526 41.8664 0.292175H102.743L134.618 0.319567C140.541 0.318864 148.114 -0.693204 153.792 0.888458C157.083 1.80536 159.295 3.58894 160.959 6.5535C161.617 7.72359 162.137 8.97235 162.271 10.3152C162.928 16.8845 163.081 68.7004 161.845 72.7786C160.72 76.4876 158.318 78.8875 154.67 80.2037C150.074 81.8615 144.051 81.1427 139.176 81.13L109.717 81.0535C106.217 81.0451 102.582 81.0521 99.0919 81.0314C90.066 80.978 84.3179 81.9462 81.5163 91.335C81.2596 108.031 81.6576 124.794 81.5096 141.495C81.4725 145.68 81.9093 151.502 80.0398 155.245C78.601 158.064 76.0889 160.194 73.0624 161.161C71.8425 161.545 70.0005 161.884 68.7274 161.87C49.6615 161.653 30.5931 162.03 11.5315 161.753C6.71841 161.682 1.67937 157.488 0.453858 152.916C-0.240635 150.325 0.221538 146.095 0.0492386 143.36C-0.0266718 139.889 0.0453604 136.239 0.0439481 132.741L0.0375909 85.1414L0.0450041 36.0309C0.0471225 27.7792 -0.102226 19.4178 0.131861 11.1794C0.303806 5.13127 5.41735 1.75725 10.6467 0.331859Z",
  pce54d80: "M463.241 178.199C465.137 178.307 465.472 178.138 466.796 179.581C469.621 182.653 472.103 186.137 474.677 189.43C474.599 186.318 473.674 180.296 476.322 178.372C477.837 178.375 477.236 178.216 478.575 179.034C479.817 181.201 479.853 195.902 477.801 197.974C474.535 197.583 469.204 189.372 467.029 186.5C467.071 189.446 467.622 195.034 466.086 197.271C464.981 197.963 465.49 197.812 464.113 197.716C463.657 197.376 463.036 197.042 462.93 196.574C462.203 193.341 462.132 180.628 463.241 178.199Z",
  pd055700: "M442.159 92.3955C448.698 91.0024 455.321 95.5574 459.805 99.6893C463.53 92.5563 469.592 89.9563 476.654 95.8194C479.295 98.0086 479.217 102.903 479.214 106.193C479.2 120.763 479.291 135.421 479.14 149.994C479.097 153.634 478.289 156.818 475.464 159.255C473.607 160.874 471.171 161.672 468.71 161.466C462.75 161.023 462.362 157.626 459.435 154.325L458.986 154.783C455.088 158.687 451.981 161.332 446.166 161.787C438.247 162.443 430.599 159.652 424.562 154.63C410.34 142.803 408.825 116.86 421.119 103.2C426.987 96.6773 433.223 92.9971 442.159 92.3955ZM447.879 143.31C463.855 140.027 463.061 109.907 444.313 110.562C426.507 114.703 429.466 145.419 447.879 143.31Z",
  pf863200: "M309.072 215.243C311.204 215.194 315.505 214.727 317.009 216.004C317.496 217.195 317.51 216.765 317.281 217.892C316.07 218.861 313.669 218.708 312.002 218.758C311.109 219.724 311.289 219.266 311.155 220.474C312.504 221.936 315.109 221.172 316.797 222.947L316.695 223.79C315.773 225.019 316.267 224.72 314.88 224.984C313.835 225.001 312.885 225.082 311.847 225.163C310.798 227.08 313.03 229.033 310.579 231.382C309.323 231.631 309.926 231.684 308.712 231.171C307.239 229.472 307.102 217.062 309.072 215.243Z",
  pfa9300: "M190.465 214.73C194.917 215.041 195.055 220.414 196.79 223.8C197.683 225.542 198.476 228.731 198.056 230.68C197.313 231.705 197.752 231.414 196.42 231.698C195.02 231.122 194.716 230.023 194.004 228.615L193.07 228.443C185.994 228.369 189.85 228.183 186.873 231.428C185.88 231.807 185.929 231.772 184.867 231.554C183.55 229.96 184.569 227.358 185.327 225.64C187.06 221.715 187.087 217.592 190.465 214.73ZM192.144 225.18L192.834 224.548C192.834 223.051 191.871 221.024 191.28 219.574C190.655 221.428 189.844 222.818 190.147 224.527C191 225.005 191.162 224.994 192.144 225.18Z"
};
function y0() {
  return /* @__PURE__ */ s("div", { className: "relative size-full", "data-name": "European Union emblem", dangerouslySetInnerHTML: { __html: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 172 48" role="img" aria-label="European Union"><title>European Union</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><g><rect fill="#003399" fill-rule="nonzero" x="0" y="0" width="72" height="48"/><path d="M35.06,8.91 L33.54,7.8 L35.42,7.8 L36,6 L36.58,7.8 L38.46,7.8 L36.94,8.91 L37.52,10.72 L36,9.6 L34.48,10.72 L35.06,8.91 L35.06,8.91 Z M36.94,40.2 L37.52,42 L36,40.89 L34.48,42 L35.06,40.2 L33.54,39.09 L35.42,39.09 L36,37.28 L36.58,39.09 L38.46,39.09 L36.94,40.2 Z M20.46,25.2 L18.94,26.32 L19.52,24.52 L18,23.44 L19.88,23.44 L20.46,21.64 L21.04,23.44 L22.93,23.44 L21.4,24.56 L21.98,26.36 L20.46,25.24 L20.46,25.2 Z M29.17,11 L29.75,12.8 L28.23,11.7 L26.71,12.81 L27.29,11.01 L25.77,9.9 L27.65,9.9 L28.23,8.1 L28.81,9.9 L30.69,9.9 L29.17,11 Z M22,15.62 L22.58,13.82 L23.17,15.62 L25,15.62 L23.48,16.74 L24.06,18.54 L22.53,17.42 L21,18.54 L21.58,16.74 L20.06,15.62 L22,15.62 Z M20.08,31.26 L22,31.26 L22.58,29.46 L23.17,31.26 L25,31.26 L23.48,32.38 L24.06,34.18 L22.53,33.07 L21,34.18 L21.58,32.38 L20.06,31.26 L20.08,31.26 Z M27.29,38.1 L25.77,37 L27.65,37 L28.23,35.2 L28.81,37 L30.69,37 L29.17,38.1 L29.75,39.9 L28.23,38.79 L26.71,39.9 L27.29,38.1 Z M52.48,24.56 L53.06,26.36 L51.54,25.24 L50,26.36 L50.58,24.56 L49.05,23.44 L51,23.44 L51.58,21.64 L52.16,23.44 L54,23.44 L52.48,24.56 Z M42.83,11 L41.31,9.9 L43.19,9.9 L43.77,8.1 L44.35,9.9 L46.23,9.9 L44.71,11 L45.29,12.8 L43.77,11.7 L42.25,12.81 L42.83,11.01 L42.83,11 Z M48.83,15.61 L49.42,13.81 L50,15.61 L51.88,15.61 L50.4,16.74 L50.98,18.54 L49.46,17.42 L47.93,18.54 L48.51,16.74 L47,15.62 L48.83,15.61 Z M50,31.26 L51.88,31.26 L50.4,32.38 L50.98,34.18 L49.46,33.07 L47.93,34.18 L48.51,32.38 L47,31.26 L48.88,31.26 L49.47,29.46 L50.05,31.26 L50,31.26 Z M46.23,37 L44.71,38.1 L45.29,39.9 L43.77,38.79 L42.25,39.9 L42.83,38.1 L41.31,37 L43.19,37 L43.77,35.2 L44.35,37 L46.23,37 Z" fill="#FFCC00" fill-rule="nonzero"/></g><g transform="translate(83.000000, 27.000000)" fill="#515560" fill-rule="nonzero"><path d="M1,0.69 L3.89,0.69 L3.89,8.44 C3.8678325,9.24161441 3.90459816,10.0437742 4,10.84 C4.11178312,11.401504 4.42470326,11.9028874 4.88,12.25 C5.44212954,12.6295873 6.11264827,12.8156474 6.79,12.78 C7.44810314,12.8222963 8.10180702,12.6465695 8.65,12.28 C9.05776827,11.9646946 9.33251362,11.507975 9.42,11 C9.51798477,10.1939055 9.55808745,9.38182642 9.54,8.57 L9.54,0.69 L12.44,0.69 L12.44,8.21 C12.477931,9.42824013 12.3975543,10.6472864 12.2,11.85 C12.0666927,12.5119183 11.7711935,13.130405 11.34,13.65 C10.8769401,14.1679576 10.2978054,14.568897 9.65,14.82 C8.76813501,15.1334363 7.8354524,15.2792739 6.9,15.25 C5.84244573,15.3006748 4.78535167,15.1409211 3.79,14.78 C3.14209323,14.5060045 2.56690093,14.0848815 2.11,13.55 C1.72897377,13.0994058 1.4523631,12.5700891 1.3,12 C1.06994935,10.7907922 0.969381804,9.5605159 1,8.33 L1,0.69 Z"/><path d="M24.3,15 L21.55,15 L21.55,9.7 C21.5855773,8.97238442 21.5284521,8.24319853 21.38,7.53 C21.2731042,7.22114019 21.0741851,6.95242486 20.81,6.76 C20.5131439,6.56754971 20.1633772,6.47311271 19.81,6.49 C19.3533771,6.48525986 18.906401,6.62144789 18.53,6.88 C18.1721289,7.12148884 17.9020074,7.4722961 17.76,7.88 C17.5835877,8.66032644 17.5129543,9.46083903 17.55,10.26 L17.55,15 L14.84,15 L14.84,4.63 L17.39,4.63 L17.39,6.16 C18.175208,5.05121788 19.451354,4.39448775 20.81,4.4 C21.3803442,4.39246359 21.945904,4.50489415 22.47,4.73 C22.9143712,4.90527174 23.3067253,5.19093308 23.61,5.56 C23.8619724,5.90392796 24.0422117,6.29501327 24.14,6.71 C24.2649634,7.3183654 24.3186584,7.93921326 24.3,8.56 L24.3,15 Z"/><path d="M26.58,3.23 L26.58,0.69 L29.32,0.69 L29.32,3.23 L26.58,3.23 Z M26.58,15.01 L26.58,4.63 L29.32,4.63 L29.32,15 L26.58,15.01 Z"/><path d="M31,9.67 C31.0049073,8.74731313 31.2385465,7.84024316 31.68,7.03 C32.091107,6.18277843 32.7549603,5.48398545 33.58,5.03 C34.4304055,4.58177682 35.3787392,4.35156536 36.34,4.36 C37.7837214,4.309447 39.1829673,4.86407035 40.2,5.89 C41.20477,6.91872288 41.7464925,8.31275543 41.7,9.75 C41.7478306,11.2012282 41.2026306,12.6093607 40.19,13.65 C39.1849397,14.6775563 37.7968269,15.2393251 36.36,15.2 C35.4156003,15.2037053 34.483663,14.9844259 33.64,14.56 C32.7872002,14.1618112 32.0857443,13.4989353 31.64,12.67 C31.1823592,11.7381398 30.9624878,10.7074928 31,9.67 L31,9.67 Z M33.81,9.82 C33.7526345,10.6715533 34.016685,11.5136601 34.55,12.18 C35.0038579,12.6995884 35.6601021,12.9977087 36.35,12.9977087 C37.0398979,12.9977087 37.6961421,12.6995884 38.15,12.18 C38.6819239,11.5056213 38.9423233,10.6566478 38.88,9.8 C38.9380359,8.95613492 38.6775584,8.12117969 38.15,7.46 C37.6961421,6.94041163 37.0398979,6.64229132 36.35,6.64229132 C35.6601021,6.64229132 35.0038579,6.94041163 34.55,7.46 C34.016685,8.12633988 33.7526345,8.96844673 33.81,9.82 L33.81,9.82 Z"/><path d="M52.79,15 L50,15 L50,9.7 C50.0355773,8.97238442 49.9784521,8.24319853 49.83,7.53 C49.7231042,7.22114019 49.5241851,6.95242486 49.26,6.76 C48.9631439,6.56754971 48.6133772,6.47311271 48.26,6.49 C47.8033771,6.48525986 47.356401,6.62144789 46.98,6.88 C46.6221289,7.12148884 46.3520074,7.4722961 46.21,7.88 C46.0335877,8.66032644 45.9629543,9.46083903 46,10.26 L46,15 L43.25,15 L43.25,4.63 L45.8,4.63 L45.8,6.16 C46.585208,5.05121788 47.861354,4.39448775 49.22,4.4 C49.7903442,4.39246359 50.355904,4.50489415 50.88,4.73 C51.3243712,4.90527174 51.7167253,5.19093308 52.02,5.56 C52.271073,5.90575398 52.4543094,6.2959795 52.56,6.71 C52.6758254,7.31955361 52.7261115,7.9397488 52.71,8.56 L52.79,15 Z"/></g><g transform="translate(84.000000, 6.000000)" fill="#515560" fill-rule="nonzero"><polygon points="0 14.33 0 0 10.65 0 10.65 2.43 2.92 2.43 2.92 5.61 10.11 5.61 10.11 8 2.92 8 2.92 11.89 10.92 11.89 10.92 14.31"/><path d="M19.9,14.33 L19.9,12.77 C19.5212252,13.3248647 19.0087967,13.7753891 18.41,14.08 C17.7934196,14.4032876 17.1061455,14.5682334 16.41,14.56 C15.7540832,14.5719591 15.1062936,14.4134574 14.53,14.1 C13.9960496,13.8175266 13.5731879,13.3629502 13.33,12.81 C13.069166,12.0761187 12.9569874,11.297667 13,10.52 L13,4 L15.75,4 L15.75,8.77 C15.7096323,9.66610518 15.7598874,10.5639963 15.9,11.45 C15.9878498,11.7656691 16.182165,12.0412435 16.45,12.23 C16.7450842,12.4282653 17.0946255,12.5296323 17.45,12.52 C17.8972809,12.5244758 18.3346197,12.3880261 18.7,12.13 C19.0538421,11.9062755 19.3243805,11.5724944 19.47,11.18 C19.64967,10.2581912 19.7168274,9.31798719 19.67,8.38 L19.67,4 L22.42,4 L22.42,14.33 L19.9,14.33 Z"/><path d="M27.61,14.33 L24.87,14.33 L24.87,4 L27.42,4 L27.42,5.48 C27.7135943,4.94329671 28.1154043,4.47338325 28.6,4.1 C28.9527623,3.87734116 29.36291,3.76263884 29.78,3.77 C30.4199569,3.77159768 31.046781,3.95167974 31.59,4.29 L30.74,6.68 C30.3629472,6.40767318 29.9146265,6.25128222 29.45,6.23 C29.0897054,6.21791863 28.7363465,6.33099349 28.45,6.55 C28.129991,6.86191047 27.9105885,7.26240699 27.82,7.7 C27.6207931,8.84527309 27.5436946,10.0084538 27.59,11.17 L27.61,14.33 Z"/><path d="M31.84,9 C31.8414197,8.07811408 32.0716356,7.17099467 32.51,6.36 C32.9280484,5.51431914 33.5944498,4.81651666 34.42,4.36 C35.2677843,3.90488647 36.2179095,3.67424013 37.18,3.69 C38.6142068,3.65972579 39.9969803,4.22441866 41,5.25 C42.00477,6.27872288 42.5464925,7.67275543 42.5,9.11 C42.5465961,10.5561552 42.0054531,11.9595193 41,13 C39.9987129,14.0270347 38.6138263,14.5889651 37.18,14.55 C36.2356003,14.5537053 35.303663,14.3344259 34.46,13.91 C33.6103978,13.5071219 32.9102454,12.8454778 32.46,12.02 C32.0064089,11.0802169 31.7933633,10.0424789 31.84,9 Z M34.65,9.15 C34.5888366,10.0003686 34.8493827,10.8426822 35.38,11.51 C35.835708,12.0300228 36.4935569,12.3282367 37.185,12.3282367 C37.8764431,12.3282367 38.534292,12.0300228 38.99,11.51 C39.5219239,10.8356213 39.7823233,9.98664779 39.72,9.13 C39.7780359,8.28613492 39.5175584,7.45117969 38.99,6.79 C38.534292,6.26997718 37.8764431,5.97176326 37.185,5.97176326 C36.4935569,5.97176326 35.835708,6.26997718 35.38,6.79 C34.8517875,7.45471144 34.5913838,8.2929971 34.65,9.14 L34.65,9.15 Z"/><path d="M44.27,4 L46.83,4 L46.83,5.53 C47.1666441,5.00037466 47.6308221,4.56370354 48.18,4.26 C48.7506994,3.92935657 49.4005133,3.75999019 50.06,3.77 C51.244791,3.75764244 52.3722381,4.2791326 53.13,5.19 C54.0268077,6.30016135 54.4762208,7.70546914 54.39,9.13 C54.461981,10.5727408 54.0110426,11.9930192 53.12,13.13 C52.3477253,14.0512902 51.2020462,14.5763931 50,14.56 C49.4607497,14.5683706 48.9268596,14.4520099 48.44,14.22 C47.8973158,13.9142006 47.4104143,13.5185931 47,13.05 L47,18.27 L44.26,18.27 L44.27,4 Z M47,9 C46.9282091,9.91817467 47.1754582,10.8329963 47.7,11.59 C48.1028362,12.1153665 48.7279719,12.4223858 49.39,12.42 C50.0090618,12.4264112 50.5961943,12.1457693 50.98,11.66 C51.4644905,10.9134742 51.6861854,10.0266948 51.61,9.14 C51.6797113,8.28243771 51.4500055,7.42722515 50.96,6.72 C50.5759841,6.21448245 49.974776,5.92130072 49.34,5.93 C48.6951929,5.91930312 48.080576,6.20268935 47.67,6.7 C47.1822932,7.36360245 46.9449695,8.17829582 47,9 L47,9 Z"/><path d="M62.37,11 L65.1,11.45 C64.8130968,12.3748843 64.2297486,13.1796238 63.44,13.74 C62.5951369,14.2930105 61.599001,14.5691324 60.59,14.53 C59.0447651,14.6448985 57.5441538,13.980878 56.59,12.76 C55.8843274,11.7071641 55.5339205,10.4562118 55.59,9.19 C55.5135026,7.7333052 55.9964261,6.30242072 56.94,5.19 C57.8107713,4.23131045 59.0552666,3.69847669 60.35,3.73 C61.7334648,3.66127261 63.0742438,4.21962444 64,5.25 C64.9902179,6.59828149 65.4461916,8.26543557 65.28,9.93 L58.41,9.93 C58.3851457,10.6235106 58.620568,11.3012415 59.07,11.83 C59.4738823,12.2740211 60.0498887,12.5219226 60.65,12.51 C61.0424109,12.5196203 61.4265461,12.3962741 61.74,12.16 C62.0632712,11.8465439 62.2830789,11.4418186 62.37,11 L62.37,11 Z M62.53,8.22 C62.5559403,7.56051029 62.3348519,6.91507469 61.91,6.41 C61.5470264,6.00989135 61.0301884,5.78422968 60.49,5.79 C59.9218585,5.77673139 59.3767464,6.01453197 59,6.44 C58.5897686,6.93883036 58.3858393,7.57566205 58.43,8.22 L62.53,8.22 Z"/><path d="M69.54,7.12 L67.05,6.67 C67.2544769,5.78115376 67.7640103,4.99208462 68.49,4.44 C69.3969292,3.90894172 70.440834,3.65840457 71.49,3.72 C72.4199943,3.67205521 73.3497712,3.81850358 74.22,4.15 C74.7506314,4.37548354 75.195521,4.76432407 75.49,5.26 C75.7927699,6.03931612 75.9191307,6.87602952 75.86,7.71 L75.86,10.92 C75.8416494,11.5892475 75.8851677,12.2587593 75.99,12.92 C76.0947998,13.4051371 76.2593905,13.8753963 76.48,14.32 L73.77,14.32 C73.7033333,14.1333333 73.6133333,13.8633333 73.5,13.51 C73.5,13.34 73.42,13.24 73.41,13.18 C72.9733242,13.6044481 72.4612091,13.9435972 71.9,14.18 C71.3596209,14.4102871 70.7773713,14.526056 70.19,14.52 C69.2682718,14.5727029 68.3628925,14.2601315 67.67,13.65 C66.6665342,12.6567707 66.4609735,11.1109543 67.17,9.89 C67.4502518,9.43175528 67.8563988,9.06379307 68.34,8.83 C69.0379492,8.52884338 69.7700192,8.31392374 70.52,8.19 C71.4291269,8.05131417 72.3231049,7.8269826 73.19,7.52 L73.19,7.24 C73.2309608,6.8274882 73.0883195,6.41785168 72.8,6.12 C72.3624767,5.84386329 71.8443389,5.72402189 71.33,5.78 C70.9261627,5.75817053 70.5251954,5.85928401 70.18,6.07 C69.8616938,6.34410523 69.6377734,6.71147477 69.54,7.12 L69.54,7.12 Z M73.21,9.35 C72.86,9.46 72.3,9.6 71.54,9.77 C71.0222854,9.84982623 70.5198155,10.0083235 70.05,10.24 C69.7078564,10.4562881 69.5031996,10.8352822 69.51,11.24 C69.5066394,11.6189085 69.6626766,11.9817856 69.94,12.24 C70.2316557,12.5215326 70.6248411,12.6730352 71.03,12.66 C71.5433265,12.6514267 72.040626,12.4798234 72.45,12.17 C72.762533,11.9480897 72.9914469,11.6276103 73.1,11.26 C73.1919353,10.8196003 73.2288841,10.3694968 73.21,9.92 L73.21,9.35 Z"/><path d="M87.92,14.33 L85.18,14.33 L85.18,9 C85.2191795,8.2718436 85.1586187,7.54174919 85,6.83 C84.9006237,6.51723671 84.7001142,6.24637292 84.43,6.06 C84.1345873,5.86433404 83.7837485,5.76960756 83.43,5.79 C82.9733771,5.78525986 82.526401,5.92144789 82.15,6.18 C81.7868865,6.41585827 81.5152239,6.76866673 81.38,7.18 C81.2035877,7.96032644 81.1329543,8.76083903 81.17,9.56 L81.17,14.26 L78.42,14.26 L78.42,4 L81,4 L81,5.53 C81.7840613,4.41989792 83.0609464,3.76278746 84.42,3.77 C84.9902623,3.76335163 85.5556399,3.87574597 86.08,4.1 C86.5243712,4.27527174 86.9167253,4.56093308 87.22,4.93 C87.4719724,5.27392796 87.6522117,5.66501327 87.75,6.08 C87.8658254,6.68955361 87.9161115,7.3097488 87.9,7.93 L87.92,14.33 Z"/></g></g></g></svg>` } });
}
const Oe = {
  p29683e00: "M333.713 83.6179C334.684 77.4195 337.433 74.4625 348.987 74.4625C361.309 74.4625 364.219 77.6761 364.828 83.6179H333.713ZM348.987 65.0793C340.958 65.0793 322.153 65.0793 322.153 89.7684C322.153 114.465 340.958 114.465 348.987 114.465H373.866V105.074H348.987C336.35 105.074 333.703 101.902 333.145 93.001H376.327V89.7684C376.327 65.0793 357.865 65.0793 348.987 65.0793Z",
  p34495f0: "M85.1325 83.6179C86.1086 77.4195 88.8585 74.4642 100.413 74.4642C112.732 74.4642 115.646 77.6761 116.252 83.6179H85.1325ZM100.413 65.0793C92.3838 65.0793 73.5781 65.0793 73.5781 89.7684C73.5781 114.464 92.3838 114.464 100.413 114.464H125.288V105.076H100.413C87.7738 105.076 85.1302 101.903 84.5676 93.0022H127.753V89.7684C127.753 65.0793 109.287 65.0793 100.413 65.0793Z",
  p3a6e4e80: "M272.064 83.6179C273.038 77.4195 275.79 74.4642 287.342 74.4642C299.66 74.4642 302.57 77.6761 303.179 83.6179H272.064ZM287.342 65.0793C279.313 65.0793 260.506 65.0793 260.506 89.7684C260.506 114.464 279.313 114.464 287.342 114.464H312.217V105.076H287.342C274.703 105.076 272.056 101.903 271.496 93.0022H314.682V89.7684C314.682 65.0793 296.213 65.0793 287.342 65.0793Z",
  p3b269880: "M146.781 83.6179C147.753 77.4195 150.507 74.4642 162.056 74.4642C174.376 74.4642 177.287 77.6761 177.899 83.6179H146.781ZM162.056 65.0793C154.027 65.0793 135.225 65.0793 135.225 89.7684C135.225 114.464 154.027 114.464 162.056 114.464H186.937V105.076H162.056C149.42 105.076 146.774 101.903 146.214 93.0022H189.399V89.7684C189.399 65.0793 170.927 65.0793 162.056 65.0793Z",
  p3b92900: "M47.4099 113.361L84.9538 39.442H72.8165L42.4983 100.55L12.2921 39.7584L12.1251 39.442H0L37.4256 113.064L37.5973 113.361H47.4099Z",
  p3d5a0540: "M467.162 47.0165C466.596 40.9804 465.205 35.4769 463.027 30.4175C466.746 22.688 470.568 19.8264 470.568 19.8264C470.568 19.8264 478.428 39.8985 471.532 60.5261C467.266 73.2892 462.161 80.9945 459.424 84.3047C458.812 85.0433 458.272 85.2722 458.606 84.8253C465.053 76.1548 468.603 62.3662 467.162 47.0165ZM473.405 71.345C470.221 75.1729 467.003 78.8858 463.447 81.7261C462.936 82.1322 462.613 82.1029 463.005 81.6761C475.586 67.9772 489.251 37.6218 471.539 7.70475C471.539 7.70475 464.537 12.5278 458.787 22.527C453.119 13.8191 444.867 6.52101 434.599 1.13925e-05C434.599 1.13925e-05 408.619 28.8852 420.111 70.7272C386.97 75.2874 399.004 100.812 404.257 104.485C404.501 104.657 404.71 104.569 404.371 104.052C402.508 101.202 397.3 91.233 408.036 81.6721C413.794 76.5436 425.869 75.2063 425.869 75.2063C423.124 55.1164 423.318 36.965 437.08 16.8751C438.837 18.037 458.967 26.8651 459.724 56.5855C461.407 75.2258 451.705 90.1458 442.291 95.9536C425.604 104.881 406.881 109.261 390.605 113.072C389.224 113.398 389.761 113.547 390.683 113.506C429.354 111.884 463.733 94.5334 476.95 77.9764C479.497 74.795 480.635 71.2886 478.919 69.3479C477.204 67.4072 474.099 70.5041 473.405 71.345Z",
  p3da66600: "M225.219 105.076C208.497 105.076 207.81 101.906 207.81 89.769C207.81 77.8872 208.552 74.4642 225.219 74.4642C241.894 74.4642 242.64 77.8872 242.64 89.769C242.64 101.651 241.894 105.076 225.219 105.076ZM225.219 65.0793C210.282 65.0793 196.871 66.9677 196.871 89.769V139H207.81V111.864C213.033 114.255 219.508 114.464 225.219 114.464C240.167 114.464 253.579 112.58 253.579 89.769C253.579 66.9677 240.167 65.0793 225.219 65.0793Z"
};
function x0() {
  return /* @__PURE__ */ s("div", { className: "absolute contents inset-0", "data-name": "layer1", children: /* @__PURE__ */ s("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 480 139", children: /* @__PURE__ */ p("g", { id: "g1", children: [
    /* @__PURE__ */ s("path", { clipRule: "evenodd", d: Oe.p3d5a0540, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "Fill-14" }),
    /* @__PURE__ */ s("path", { clipRule: "evenodd", d: Oe.p29683e00, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "Fill-6" }),
    /* @__PURE__ */ s("path", { clipRule: "evenodd", d: Oe.p3a6e4e80, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "Fill-8" }),
    /* @__PURE__ */ s("path", { clipRule: "evenodd", d: Oe.p3da66600, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "Fill-1" }),
    /* @__PURE__ */ s("path", { clipRule: "evenodd", d: Oe.p3b269880, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "Fill-10" }),
    /* @__PURE__ */ s("path", { clipRule: "evenodd", d: Oe.p34495f0, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "Fill-12" }),
    /* @__PURE__ */ s("path", { clipRule: "evenodd", d: Oe.p3b92900, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "polygon1" })
  ] }) }) });
}
function v0() {
  return /* @__PURE__ */ s("div", { className: "relative size-full", "data-name": "logo Schrack Technik", children: /* @__PURE__ */ s(x0, {}) });
}
const jt = "#00B6B6", Ri = [0.22, 1, 0.36, 1];
function assetLogo0({
  name: e,
  src: t,
  alt: i,
  position: n = "left top"
}) {
  return /* @__PURE__ */ s("div", { className: "relative size-full", "data-name": e, children: /* @__PURE__ */ s("img", { src: t, alt: i, style: { display: "block", width: "100%", height: "100%", objectFit: "contain", objectPosition: n } }) });
}
function un0() {
  return /* @__PURE__ */ s(assetLogo0, { name: "United Nations logo", src: "/_assets/unitednations-logo.png", alt: "United Nations logo" });
}
function schrack0() {
  return /* @__PURE__ */ s(assetLogo0, { name: "Schrack Technik logo", src: "/_assets/schrackteknic-logo.png", alt: "Schrack Technik logo" });
}
function schiebel0() {
  return /* @__PURE__ */ s(assetLogo0, { name: "Schiebel logo", src: "/_assets/schiebel-logo.png", alt: "Schiebel logo" });
}
function glock0() {
  return /* @__PURE__ */ s(assetLogo0, { name: "GLOCK logo", src: "/_assets/glock-logo-grey.svg", alt: "GLOCK logo" });
}
function austro0() {
  return /* @__PURE__ */ s(assetLogo0, { name: "Austro Control logo", src: "/_assets/austrocontrol-logo.png", alt: "Austro Control logo" });
}
const b0 = [
  {
    id: "united-nations",
    titleKey: "teaching.un.title",
    descKey: "teaching.un.description",
    Logo: un0,
    logoAspect: 666 / 375,
    variant: "white"
  },
  {
    id: "schrack-technik",
    titleKey: "teaching.schrack.title",
    descKey: "teaching.schrack.description",
    Logo: schrack0,
    logoAspect: 600 / 300,
    variant: "teal"
  },
  {
    id: "schiebel",
    titleKey: "teaching.schiebel.title",
    descKey: "teaching.schiebel.description",
    Logo: schiebel0,
    logoAspect: 594 / 420,
    variant: "dark"
  },
  {
    id: "glock",
    titleKey: "teaching.glock.title",
    descKey: "teaching.glock.description",
    Logo: glock0,
    logoAspect: 560.25 / 474.15,
    variant: "white"
  },
  {
    id: "austro-control",
    titleKey: "teaching.austro.title",
    descKey: "teaching.austro.description",
    Logo: austro0,
    logoAspect: 242 / 62,
    variant: "dark"
  },
  {
    id: "teaching",
    titleKey: "teaching.teaching.title",
    descKey: "teaching.teaching.description",
    Logo: h0,
    logoAspect: 300 / 124,
    variant: "teal"
  },
  {
    id: "workshops",
    titleKey: "teaching.workshops.title",
    descKey: "teaching.workshops.description",
    Logo: y0,
    logoAspect: 172 / 48,
    variant: "white"
  }
];
function w0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
const xo = 4, vo = { stiffness: 260, damping: 24, mass: 0.6 };
function S0({
  card: e,
  index: t,
  revealed: i
}) {
  const { lang: n } = V(), a = e.Logo, o = I(null), [r, l] = T(!1), c = It(0), d = It(0), u = Ni(c, vo), m = Ni(d, vo), g = oe(
    (F) => {
      const E = o.current;
      if (!E) return;
      const L = E.getBoundingClientRect(), A = L.left + L.width / 2, H = L.top + L.height / 2, X = (F.clientX - A) / (L.width / 2), xe = (F.clientY - H) / (L.height / 2);
      d.set(X * xo), c.set(-xe * xo);
    },
    [c, d]
  ), S = oe(() => {
    l(!1), c.set(0), d.set(0);
  }, [c, d]), b = e.variant, x = b === "teal" ? jt : b === "white" ? "#F2F2F2" : "#0A0A0A", y = b === "dark" ? "1px solid rgba(255,255,255,0.18)" : "none", C = b === "dark" ? "#FFFFFF" : "#111111", h = b === "dark" ? "#F2F2F2" : "#222222", v = b === "dark" ? "#F2F2F2" : "#222222", z = b === "teal" ? "0 24px 80px rgba(0,182,182,0.15), 0 8px 32px rgba(0,0,0,0.25)" : b === "white" ? "0 24px 80px rgba(0,0,0,0.10), 0 8px 32px rgba(0,0,0,0.15)" : "0 24px 80px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.35)";
  return /* @__PURE__ */ s(
    w.div,
    {
      initial: { opacity: 0, y: 70 },
      animate: i ? { opacity: 1, y: 0 } : {},
      transition: { duration: 1.1, delay: 0.15 + t * 0.12, ease: Ri },
      style: { perspective: 900 },
      children: /* @__PURE__ */ p(
        w.div,
        {
          ref: o,
          onMouseEnter: () => l(!0),
          onMouseMove: g,
          onMouseLeave: S,
          style: {
            rotateX: u,
            rotateY: m,
            transformStyle: "preserve-3d",
            borderRadius: "20px",
            backgroundColor: x,
            border: y,
            overflow: "hidden",
            cursor: "default",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            /* Poster proportions */
            paddingTop: "clamp(20px, 2vw, 32px)",
            paddingBottom: "clamp(20px, 2vw, 32px)",
            paddingLeft: "clamp(18px, 2vw, 32px)",
            paddingRight: "clamp(18px, 2vw, 32px)",
            minHeight: "clamp(420px, 50vw, 640px)",
            willChange: "transform"
          },
          children: [
            /* @__PURE__ */ s(
              w.div,
              {
                "aria-hidden": !0,
                animate: { opacity: r ? 1 : 0 },
                transition: { duration: 0.4 },
                style: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  boxShadow: z,
                  pointerEvents: "none"
                }
              }
            ),
            /* @__PURE__ */ s(
              "div",
              {
                style: {
                  // @ts-expect-error css custom property
                  "--fill-0": C,
                  width: "clamp(80px, 40%, 160px)",
                  aspectRatio: `${e.logoAspect}`,
                  opacity: b === "dark" ? 0.5 : 0.7,
                  flexShrink: 0
                },
                children: /* @__PURE__ */ s(a, {})
              }
            ),
            /* @__PURE__ */ p("div", { style: { marginTop: "auto" }, children: [
              /* @__PURE__ */ s(
                "h3",
                {
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(34px, 4vw, 72px)",
                    fontWeight: 600,
                    lineHeight: 0.92,
                    letterSpacing: "-0.04em",
                    color: h,
                    marginTop: 0,
                    marginBottom: "clamp(16px, 1.8vw, 28px)",
                    marginLeft: 0,
                    marginRight: 0,
                    maxWidth: "90%"
                  },
                  children: f(e.titleKey, n)
                }
              ),
              /* @__PURE__ */ s(
                "p",
                {
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(15px, 1.2vw, 19px)",
                    fontWeight: 400,
                    lineHeight: 1.55,
                    letterSpacing: "-0.01em",
                    color: v,
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    maxWidth: "clamp(260px, 90%, 420px)"
                  },
                  children: f(e.descKey, n)
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function C0() {
  const e = I(null), t = M(e, { once: !0, margin: "-80px" }), i = I(null), n = M(i, {
    once: !0,
    margin: "-60px"
  }), a = I(null), o = M(a, {
    once: !0,
    margin: "-40px"
  }), r = I(null), l = M(r, { once: !0, margin: "-60px" }), c = w0(), u = I(null), m = oe((g) => {
    const S = u.current;
    if (!S) return;
    const b = S.querySelector("[data-slider-card]"), x = b ? b.getBoundingClientRect().width : S.clientWidth;
    S.scrollBy({ left: g * (x + 16), behavior: "smooth" });
  }, []), { lang: d } = V();
  return /* @__PURE__ */ p(
    "section",
    {
      ref: e,
      style: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        paddingTop: c ? "32px" : "48px",
        paddingBottom: c ? "32px" : "48px",
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            "aria-hidden": !0,
            style: {
              position: "absolute",
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "120%",
              height: "60%",
              background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${jt}06 0%, transparent 70%)`,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0 },
            animate: t ? { opacity: 1 } : {},
            transition: { duration: 0.7, ease: Ri },
            style: {
              position: "sticky",
              top: c ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              zIndex: 10,
              paddingLeft: c ? "16px" : "48px",
              height: 0,
              overflow: "visible",
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: jt,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s("span", { "aria-hidden": !0, style: { width: "clamp(16px, 1.5vw, 24px)", height: "1px", backgroundColor: jt, flexShrink: 0 } }),
                  f("teaching.label", d)
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              position: "relative",
              maxWidth: "1400px",
              width: "100%",
              marginTop: 0,
              marginBottom: 0,
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: c ? "clamp(88px, 18vw, 140px)" : "clamp(80px, 10vw, 160px)",
              paddingBottom: "clamp(48px, 5vw, 80px)",
              paddingLeft: c ? "16px" : "48px",
              paddingRight: c ? "16px" : "48px"
            },
            children: /* @__PURE__ */ p(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "clamp(32px, 4vw, 56px)"
                },
                children: [
                  /* @__PURE__ */ s("div", { ref: i, children: [
                    {
                      text: f("teaching.headline1", d),
                      delay: 0.06
                    },
                    {
                      text: /* @__PURE__ */ p(J, { children: [
                        /* @__PURE__ */ s("span", { style: { color: jt, fontStyle: "italic" }, children: f("teaching.headline2_accent", d) }),
                        " ",
                        f("teaching.headline2_suffix", d)
                      ] }),
                      delay: 0.14
                    }
                  ].map((u, m) => /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                    w.div,
                    {
                      initial: { y: "110%", opacity: 0 },
                      animate: n ? { y: "0%", opacity: 1 } : {},
                      transition: { duration: 1.1, delay: u.delay, ease: Ri },
                      style: {
                        fontSize: c ? "clamp(38px, 10vw, 64px)" : "clamp(36px, 5.5vw, 84px)",
                        fontWeight: 600,
                        lineHeight: 0.95,
                        letterSpacing: "-0.05em",
                        color: "#F2F2F2",
                        willChange: "transform, opacity"
                      },
                      children: u.text
                    }
                  ) }, m)) }),
                  /* @__PURE__ */ s(
                    w.div,
                    {
                      ref: a,
                      initial: { opacity: 0, y: 24 },
                      animate: o ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.9, delay: 0.1, ease: Ri },
                      style: {
                        maxWidth: "600px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0
                      },
                      children: /* @__PURE__ */ s(
                        "p",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 19px)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            letterSpacing: "-0.01em",
                            color: "rgba(242,242,242,0.55)",
                            marginTop: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: f("teaching.subtitle", d)
                        }
                      )
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            ref: r,
            className: "sharing-love-slider",
            style: {
              position: "relative",
              paddingLeft: c ? "16px" : "clamp(10px, 1vw, 16px)",
              paddingRight: c ? "16px" : "clamp(10px, 1vw, 16px)",
              paddingBottom: "clamp(48px, 5vw, 80px)"
            },
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "clamp(14px, 2vw, 24px)",
                    paddingRight: c ? 0 : "32px"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Scroll cards left",
                        onClick: () => m(-1),
                        style: {
                          width: "44px",
                          height: "44px",
                          borderRadius: "999px",
                          border: "1px solid rgba(255,184,0,0.72)",
                          background: "rgba(0,0,0,0.55)",
                          color: "#FFB800",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          lineHeight: 1,
                          cursor: "pointer"
                        },
                        children: "<"
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Scroll cards right",
                        onClick: () => m(1),
                        style: {
                          width: "44px",
                          height: "44px",
                          borderRadius: "999px",
                          border: "1px solid rgba(255,184,0,0.72)",
                          background: "rgba(0,0,0,0.55)",
                          color: "#FFB800",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          lineHeight: 1,
                          cursor: "pointer"
                        },
                        children: ">"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  ref: u,
                  className: "sharing-love-track",
                  style: {
                    display: "grid",
                    gridAutoFlow: "column",
                    gridAutoColumns: c ? "minmax(280px, 86vw)" : "minmax(360px, calc((100vw - 144px) / 3))",
                    gap: "clamp(10px, 1vw, 16px)",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth",
                    overscrollBehaviorX: "contain",
                    paddingBottom: "8px",
                    scrollbarWidth: "none"
                  },
                  children: b0.map((g, S) => /* @__PURE__ */ s(
                    "div",
                    {
                      "data-slider-card": !0,
                      style: {
                        scrollSnapAlign: "start",
                        minWidth: 0
                      },
                      children: /* @__PURE__ */ s(
                        S0,
                        {
                          card: g,
                          index: S,
                          revealed: l
                        }
                      )
                    },
                    g.id
                  ))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s("style", { children: `
        .sharing-love-track::-webkit-scrollbar {
          display: none;
        }
        .sharing-love-slider button:focus-visible {
          outline: 2px solid #00B6B6;
          outline-offset: 3px;
        }
        @media (max-width: 900px) {
          .sharing-love-slider {
            max-width: 100% !important;
          }
        }
      ` })
      ]
    }
  );
}
const bo = "#00B6B6", T0 = [
  { id: "product-data", quote: "Structured technical product data is one of Sundas' strongest through-lines: article master data, data sheets, specifications, supplier inputs, ERP records, and decision-support analysis.", name: "Product Data", role: "Network engineering and assortment quality", range: [0, 0.12, 0.42], rotate: -2.8, xShift: -14 },
  { id: "stem-leadership", quote: "Her STEM work connects aerospace, education, industry, research, events, newsletters, school workshops, and programs for girls and women in technical fields.", name: "STEM Leadership", role: "WIA-Europe Austria and FIT Ambassador work", range: [0.18, 0.36, 0.66], rotate: 2.2, xShift: 16 },
  { id: "technical-range", quote: "Sundas has worked across network engineering, aerospace/STEM leadership, UAV product support, precision engineering, medical technology, and research programs, supported by mechatronics and robotics education.", name: "Technical Range", role: "Mechatronics, robotics, aerospace, and systems thinking", range: [0.42, 0.62, 0.96], rotate: -1.5, xShift: -8 }
];
function I0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function F0({
  testimonial: e,
  scrollYProgress: t,
  isMobile: i
}) {
  const [n, a, o] = e.range, r = R(
    t,
    [n, a, o],
    [55, 0, -55]
  ), l = co`${r}vh`, c = R(
    t,
    [n, n + 0.03, a - 0.03, a + 0.03, o - 0.03, o],
    [0, 1, 1, 1, 1, 0]
  ), d = R(
    t,
    [n, a, o],
    [e.rotate * 1.8, e.rotate, e.rotate * -0.6]
  ), u = R(
    t,
    [n, a, o],
    [0.85, 1, 0.9]
  ), m = R(
    t,
    [n, n + 0.04, a - 0.03, a + 0.03, o - 0.04, o],
    [10, 0, 0, 0, 0, 8]
  ), g = co`blur(${m}px)`, S = e.quote.split(`

`), b = i ? e.xShift * 0.15 : e.xShift;
  return /* @__PURE__ */ s(
    w.div,
    {
      style: {
        position: "absolute",
        top: 0,
        left: "50%",
        width: i ? "90vw" : "clamp(600px, 60vw, 920px)",
        x: `calc(-50% + ${b}vw)`,
        y: l,
        opacity: c,
        rotate: d,
        scale: u,
        filter: g,
        willChange: "transform, opacity, filter",
        zIndex: 5
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          style: {
            position: "relative",
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(64px)",
            WebkitBackdropFilter: "blur(64px)",
            paddingTop: i ? "20px" : "clamp(28px, 2.5vw, 44px)",
            paddingBottom: i ? "20px" : "clamp(24px, 2.2vw, 40px)",
            paddingLeft: i ? "18px" : "clamp(28px, 2.5vw, 48px)",
            paddingRight: i ? "18px" : "clamp(28px, 2.5vw, 48px)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 0.5px rgba(255,255,255,0.04)"
          },
          children: [
            /* @__PURE__ */ s(
              "div",
              {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  top: i ? "-18px" : "-24px",
                  left: i ? "14px" : "clamp(24px, 2.5vw, 44px)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: i ? "80px" : "clamp(100px, 8vw, 140px)",
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.06)",
                  pointerEvents: "none",
                  userSelect: "none"
                },
                children: "“"
              }
            ),
            /* @__PURE__ */ s("div", { style: { marginBottom: "clamp(16px, 1.8vw, 28px)" }, children: S.map((x, y) => /* @__PURE__ */ s(
              "p",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: i ? "17px" : "clamp(19px, 1.6vw, 26px)",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  letterSpacing: "-0.02em",
                  color: "#F2F2F2",
                  marginTop: y === 0 ? 0 : "clamp(10px, 1vw, 18px)",
                  marginBottom: 0,
                  marginLeft: 0,
                  marginRight: 0
                },
                children: x
              },
              y
            )) }),
            /* @__PURE__ */ p(
              "div",
              {
                style: {
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: "clamp(12px, 1.2vw, 20px)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "clamp(12px, 1.2vw, 22px)",
                  flexWrap: "wrap"
                },
                children: [
                  /* @__PURE__ */ s(
                    "span",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: i ? "12px" : "clamp(12px, 0.95vw, 15px)",
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#FFFFFF"
                      },
                      children: e.name
                    }
                  ),
                  /* @__PURE__ */ s(
                    "span",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: i ? "12px" : "clamp(12px, 0.75vw, 13px)",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        color: "#F2F2F2"
                      },
                      children: e.role
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
const k0 = 8;
function L0({ isMobile: e, marqueeText: t }) {
  const i = Array.from({ length: k0 }, (n, a) => a);
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100%",
        transform: "translateY(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 1
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              display: "flex",
              whiteSpace: "nowrap",
              animation: "testimonials-marquee 65s linear infinite",
              width: "max-content"
            },
            children: i.map((n) => /* @__PURE__ */ s(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: e ? "clamp(48px, 14vw, 100px)" : "clamp(100px, 10vw, 180px)",
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  color: "#FFFFFF",
                  paddingRight: e ? "40px" : "clamp(60px, 6vw, 100px)"
                },
                children: t
              },
              n
            ))
          }
        ),
        /* @__PURE__ */ s("style", { children: `
        @keyframes testimonials-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` })
      ]
    }
  );
}
function A0() {
  const e = I(null), t = I0(), { scrollYProgress: i } = Fe({
    target: e,
    offset: ["start start", "end end"]
  }), n = R(
    i,
    [0, 0.04, 0.1, 0.85, 0.95],
    [1, 1, 0.04, 0.04, 0.03]
  ), { lang: a } = V();
  return /* @__PURE__ */ s(
    "section",
    {
      ref: e,
      style: {
        position: "relative",
        height: "300vh",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif"
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          style: {
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ s(
              "div",
              {
                style: {
                  position: "absolute",
                  top: t ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
                  left: t ? "16px" : "48px",
                  zIndex: 10,
                  pointerEvents: "none"
                },
                children: /* @__PURE__ */ p(
                  "span",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(12px, 0.85vw, 13px)",
                      fontWeight: 400,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: bo,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "clamp(6px, 0.6vw, 10px)"
                    },
                    children: [
                      /* @__PURE__ */ s("span", { "aria-hidden": !0, style: { width: "clamp(16px, 1.5vw, 24px)", height: "1px", backgroundColor: bo, flexShrink: 0 } }),
                      f("testimonials.label", a)
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ s(w.div, { style: { opacity: n }, children: /* @__PURE__ */ s(L0, { isMobile: t, marqueeText: f("testimonials.marquee", a) }) }),
            /* @__PURE__ */ s(
              "div",
              {
                style: {
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  pointerEvents: "none"
                },
                children: T0.map((o) => /* @__PURE__ */ s(
                  F0,
                  {
                    testimonial: o,
                    scrollYProgress: i,
                    isMobile: t
                  },
                  o.id
                ))
              }
            )
          ]
        }
      )
    }
  );
}
const wo = "#00B6B6", Ne = [0.22, 1, 0.36, 1], be = (e) => ({
  fontFamily: "'Inter', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#FFFFFF",
  textDecoration: "none"
});
function z0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function E0() {
  const e = I(null), t = I(null), i = M(t, { once: !0, amount: 0.2 }), n = z0(), { lang: a } = V();
  return /* @__PURE__ */ p(
    "section",
    {
      ref: e,
      style: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              position: "absolute",
              top: n ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              left: n ? "16px" : "48px",
              zIndex: 10,
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: wo,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s("span", { "aria-hidden": !0, style: { width: "clamp(16px, 1.5vw, 24px)", height: "1px", backgroundColor: wo, flexShrink: 0 } }),
                  f("contact.label", a)
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            ref: t,
            style: {
              paddingLeft: n ? "16px" : "48px",
              paddingRight: n ? "16px" : "48px",
              paddingBottom: n ? "80px" : "120px",
              overflow: "hidden"
            },
            children: [
              n && /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 10
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.a,
                      {
                        href: "https://www.linkedin.com/in/sundas-syed-6b737715a/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        initial: { opacity: 0, y: 8 },
                        animate: i ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 1, delay: 0.3, ease: Ne },
                        style: be(),
                        children: "Linkedin"
                      }
                    ),
                    /* @__PURE__ */ s(
                      w.a,
                      {
                        href: "mailto:sundas_syed@hotmail.com",
                        initial: { opacity: 0, y: 8 },
                        animate: i ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 1, delay: 0.45, ease: Ne },
                        style: be(),
                        children: "sundas_syed@hotmail.com"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ p(
                w.h2,
                {
                  initial: { y: "110%", opacity: 0 },
                  animate: i ? { y: "0%", opacity: 1 } : {},
                  transition: { duration: 1.6, ease: Ne },
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: n ? "clamp(72px, 22vw, 160px)" : "clamp(140px, 16vw, 360px)",
                    fontWeight: 600,
                    lineHeight: 0.65,
                    letterSpacing: "-0.04em",
                    color: "#FFFFFF",
                    marginTop: 0,
                    marginBottom: n ? "8px" : 0,
                    marginLeft: 0,
                    marginRight: 0
                  },
                  children: [
                    f("contact.letsConnect1", a),
                    f("contact.letsConnect2", a) && /* @__PURE__ */ p(J, { children: [
                      /* @__PURE__ */ s("br", {}),
                      f("contact.letsConnect2", a)
                    ] })
                  ]
                }
              ),
              n && /* @__PURE__ */ p(
                w.div,
                {
                  initial: { opacity: 0 },
                  animate: i ? { opacity: 1 } : {},
                  transition: { duration: 1, delay: 0.6, ease: Ne },
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginTop: "24px",
                    position: "relative",
                    zIndex: 10
                  },
                  children: [
                    /* @__PURE__ */ s("a", { href: "#/legal/cookies", style: be(), children: f("contact.cookies", a) }),
                    /* @__PURE__ */ s("a", { href: "#/legal/privacy", style: be(), children: f("contact.privacy", a) }),
                    /* @__PURE__ */ s("a", { href: "#/legal/legal-notice", style: be(), children: f("contact.legal", a) })
                  ]
                }
              )
            ]
          }
        ),
        !n && /* @__PURE__ */ s(
          "div",
          {
            style: {
              position: "absolute",
              bottom: "48px",
              right: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "12px",
              zIndex: 10
            },
            children: /* @__PURE__ */ p(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(20px, 2.5vw, 40px)"
                },
                children: [
                  /* @__PURE__ */ s(
                    w.a,
                    {
                      href: "https://www.linkedin.com/in/sundas-syed-6b737715a/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      initial: { opacity: 0, y: 8 },
                      animate: i ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 1, delay: 0.3, ease: Ne },
                      style: be(),
                      children: "Linkedin"
                    }
                  ),
                  /* @__PURE__ */ s(
                    w.a,
                    {
                      href: "mailto:sundas_syed@hotmail.com",
                      initial: { opacity: 0, y: 8 },
                      animate: i ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 1, delay: 0.45, ease: Ne },
                      style: be(),
                      children: "sundas_syed@hotmail.com"
                    }
                  )
                ]
              }
            )
          }
        ),
        !n && /* @__PURE__ */ p(
          w.div,
          {
            initial: { opacity: 0 },
            animate: i ? { opacity: 1 } : {},
            transition: { duration: 1, delay: 0.6, ease: Ne },
            style: {
              position: "absolute",
              bottom: "48px",
              left: "48px",
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px, 2.5vw, 40px)",
              zIndex: 10
            },
            children: [
              /* @__PURE__ */ s("a", { href: "#/legal/cookies", style: be(), children: f("contact.cookies", a) }),
              /* @__PURE__ */ s("a", { href: "#/legal/privacy", style: be(), children: f("contact.privacy", a) }),
              /* @__PURE__ */ s("a", { href: "#/legal/legal-notice", style: be(), children: f("contact.legal", a) })
            ]
          }
        )
      ]
    }
  );
}
const st = [0.22, 1, 0.36, 1], B0 = [
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
  { id: "ca", label: "CA" }
];
function M0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function V0({ open: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        width: "20px",
        height: "14px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      },
      children: [
        /* @__PURE__ */ s(
          w.span,
          {
            animate: {
              rotate: e ? 45 : 0,
              y: e ? 6 : 0
            },
            transition: { duration: 0.35, ease: st },
            style: {
              display: "block",
              width: "100%",
              height: "1px",
              backgroundColor: "#FFFFFF",
              transformOrigin: "center center"
            }
          }
        ),
        /* @__PURE__ */ s(
          w.span,
          {
            animate: {
              opacity: e ? 0 : 1,
              scaleX: e ? 0 : 1
            },
            transition: { duration: 0.25, ease: st },
            style: {
              display: "block",
              width: "100%",
              height: "1px",
              backgroundColor: "#FFFFFF",
              transformOrigin: "center center"
            }
          }
        ),
        /* @__PURE__ */ s(
          w.span,
          {
            animate: {
              rotate: e ? -45 : 0,
              y: e ? -6 : 0
            },
            transition: { duration: 0.35, ease: st },
            style: {
              display: "block",
              width: "100%",
              height: "1px",
              backgroundColor: "#FFFFFF",
              transformOrigin: "center center"
            }
          }
        )
      ]
    }
  );
}
function Sl({ style: e }) {
  const { lang: t, setLang: i } = V();
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        pointerEvents: "auto",
        ...e
      },
      children: B0.map((n, a) => /* @__PURE__ */ p("span", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        a > 0 && /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              color: "rgba(255,255,255,0.3)",
              userSelect: "none"
            },
            children: "/"
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: () => i(n.id),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              color: "#FFFFFF",
              textDecoration: t === n.id ? "underline" : "none",
              textUnderlineOffset: "4px",
              textDecorationThickness: "1px",
              opacity: t === n.id ? 1 : 0.5,
              transition: "opacity 0.3s ease, text-decoration 0.3s ease"
            },
            children: n.label
          }
        )
      ] }, n.id))
    }
  );
}
function D0({
  open: e,
  onClose: t,
  onSubPage: i
}) {
  const { lang: n } = V(), a = [
    { label: f("nav.services", n), href: "#services" },
    { label: f("nav.work", n), href: "#projects" },
    { label: f("nav.teaching", n), href: "#teaching-experience" },
    { label: f("nav.aboutMe", n), href: "#nice-to-meet-you" },
    { label: f("nav.contact", n), href: "#contact" }
  ], o = oe(
    (r, l) => {
      r.preventDefault(), t(), i ? (window.location.hash = "", setTimeout(() => {
        const c = l.replace("#", ""), d = document.getElementById(c);
        d && d.scrollIntoView({ behavior: "smooth" });
      }, 400)) : setTimeout(() => {
        const c = l.replace("#", ""), d = document.getElementById(c);
        d && d.scrollIntoView({ behavior: "smooth" });
      }, 350);
    },
    [t, i]
  );
  return B(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [e]), /* @__PURE__ */ s(Ir, { children: e && /* @__PURE__ */ p(
    w.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4, ease: st },
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 899,
        backgroundColor: "rgba(0,0,0,0.96)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "80px"
      },
      children: [
        /* @__PURE__ */ s(
          "nav",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            },
            children: a.map((r, l) => /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
              w.div,
              {
                initial: { y: "100%", opacity: 0 },
                animate: { y: "0%", opacity: 1 },
                exit: { y: "-40%", opacity: 0 },
                transition: {
                  duration: 0.6,
                  delay: 0.06 + l * 0.05,
                  ease: st
                },
                children: /* @__PURE__ */ s(
                  "a",
                  {
                    href: r.href,
                    onClick: (c) => o(c, r.href),
                    style: {
                      display: "block",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(42px, 12vw, 72px)",
                      fontWeight: 500,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      paddingTop: "8px",
                      paddingBottom: "8px"
                    },
                    children: r.label
                  }
                )
              }
            ) }, r.href))
          }
        ),
        /* @__PURE__ */ p(
          w.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, delay: 0.35, ease: st },
            style: {
              position: "absolute",
              bottom: "32px",
              left: "16px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FFFFFF"
                  },
                  children: f("nav.subtitle", n)
                }
              ),
              /* @__PURE__ */ s(Sl, {})
            ]
          }
        )
      ]
    }
  ) });
}
function Cl() {
  const e = M0(), [t, i] = T(!1), { lang: n } = V(), [a, o] = T(!1);
  B(() => {
    const d = () => {
      const u = window.location.hash;
      o(u.startsWith("#/"));
    };
    return d(), window.addEventListener("hashchange", d), () => window.removeEventListener("hashchange", d);
  }, []);
  const r = [
    { label: f("nav.services", n), href: "#services" },
    { label: f("nav.work", n), href: "#projects" },
    { label: f("nav.teaching", n), href: "#teaching-experience" },
    { label: f("nav.aboutMe", n), href: "#nice-to-meet-you" },
    { label: f("nav.contact", n), href: "#contact" }
  ], l = oe(
    (d, u) => {
      if (d.preventDefault(), a)
        window.location.hash = "", requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              const m = u.replace("#", ""), g = document.getElementById(m);
              g && g.scrollIntoView({ behavior: "smooth" });
            }, 200);
          });
        });
      else {
        const m = u.replace("#", ""), g = document.getElementById(m);
        g && g.scrollIntoView({ behavior: "smooth" });
      }
    },
    [a]
  ), c = oe(
    (d) => {
      if (d.preventDefault(), a)
        window.location.hash = "";
      else {
        const u = document.getElementById("hero");
        u && u.scrollIntoView({ behavior: "smooth" });
      }
    },
    [a]
  );
  return /* @__PURE__ */ p(J, { children: [
    e && /* @__PURE__ */ s(
      D0,
      {
        open: t,
        onClose: () => i(!1),
        onSubPage: a
      }
    ),
    /* @__PURE__ */ p(
      w.nav,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 1.2, ease: st },
        "aria-label": "Main navigation",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingTop: e ? "16px" : "24px",
          paddingBottom: "16px",
          paddingLeft: e ? "16px" : "32px",
          paddingRight: e ? "16px" : "32px",
          fontFamily: "'Inter', sans-serif",
          mixBlendMode: t ? "normal" : "difference",
          pointerEvents: "none"
        },
        children: [
          /* @__PURE__ */ s(
            "a",
            {
              href: "#hero",
              onClick: c,
              "aria-label": "Sundas Syed, Back to top",
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
                pointerEvents: "auto"
              },
              children: "Sundas Syed"
            }
          ),
          !e && /* @__PURE__ */ p(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "clamp(20px, 2.5vw, 40px)"
              },
              children: [
                r.map((d) => /* @__PURE__ */ s(
                  "a",
                  {
                    href: d.href,
                    onClick: (u) => l(u, d.href),
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: 400,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      pointerEvents: "auto"
                    },
                    children: d.label
                  },
                  d.href
                )),
                /* @__PURE__ */ s(
                  "span",
                  {
                    style: {
                      width: "1px",
                      height: "12px",
                      backgroundColor: "rgba(255,255,255,0.25)",
                      flexShrink: 0
                    }
                  }
                ),
                /* @__PURE__ */ s(Sl, {})
              ]
            }
          ),
          e && /* @__PURE__ */ s(
            "button",
            {
              onClick: () => i((d) => !d),
              "aria-label": t ? "Close menu" : "Open menu",
              style: {
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                padding: "4px",
                pointerEvents: "auto",
                position: "relative",
                zIndex: 901
              },
              children: /* @__PURE__ */ s(V0, { open: t })
            }
          )
        ]
      }
    )
  ] });
}
const P0 = globalThis.__GLOBALS__.getAssetURL("c5571b212c5d1c66a686d3b9f1448c3ceaabc433.png"), xi = "#00B6B6", Yn = [0.22, 1, 0.36, 1], So = [
  { labelKey: "niceToMeet.basedIn.label", valueKey: "niceToMeet.basedIn.value" },
  { labelKey: "niceToMeet.languages.label", valueKey: "niceToMeet.languages.value" },
  { labelKey: "niceToMeet.studies.label", valueKey: "niceToMeet.studies.value" },
  { labelKey: "niceToMeet.offTheClock.label", valueKey: "niceToMeet.offTheClock.value" },
  { labelKey: "niceToMeet.alsoMe.label", valueKey: "niceToMeet.alsoMe.value" },
  { labelKey: "niceToMeet.obsession.label", valueKey: "niceToMeet.obsession.value" }
], R0 = [
  { labelKey: "niceToMeet.tag.systemsThinker" },
  { labelKey: "niceToMeet.tag.proactive" },
  { labelKey: "niceToMeet.tag.fun" },
  { labelKey: "niceToMeet.tag.calm" },
  { labelKey: "niceToMeet.tag.curious" },
  { labelKey: "niceToMeet.tag.perfectionist" },
  { labelKey: "niceToMeet.tag.overthinks", negative: !0 },
  { labelKey: "niceToMeet.tag.tooHonest", negative: !0 }
];
function j0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function vi({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 28 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: Yn },
      children: e
    }
  );
}
function q0() {
  const e = j0(), t = I(null), i = M(t, { once: !0, margin: "-80px" }), n = I(null), a = M(n, { once: !0, margin: "-60px" }), { lang: o } = V();
  return /* @__PURE__ */ p(
    "section",
    {
      ref: t,
      style: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: e ? "clamp(64px, 12vw, 100px)" : "clamp(80px, 8vw, 140px)"
      },
      children: [
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0 },
            animate: i ? { opacity: 1 } : {},
            transition: { duration: 0.7, ease: Yn },
            style: {
              position: "sticky",
              top: e ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              zIndex: 10,
              paddingLeft: e ? "16px" : "48px",
              height: 0,
              overflow: "visible",
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(10px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: xi,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s(
                    "span",
                    {
                      "aria-hidden": !0,
                      style: {
                        width: "clamp(16px, 1.5vw, 24px)",
                        height: "1px",
                        backgroundColor: xi,
                        flexShrink: 0
                      }
                    }
                  ),
                  f("niceToMeet.label", o)
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              width: "100%",
              maxWidth: "1400px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 0,
              marginBottom: 0,
              paddingTop: e ? "clamp(64px, 12vw, 100px)" : "clamp(56px, 7vw, 120px)",
              paddingBottom: 0,
              paddingLeft: e ? "16px" : "48px",
              paddingRight: e ? "16px" : "48px"
            },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  ref: n,
                  style: {
                    marginBottom: e ? "clamp(48px, 10vw, 80px)" : "clamp(64px, 7vw, 112px)",
                    maxWidth: "900px"
                  },
                  children: (e ? [
                    {
                      text: f("niceToMeet.headline1", o),
                      delay: 0.06
                    },
                    {
                      text: /* @__PURE__ */ s("span", { style: { color: xi, fontStyle: "italic" }, children: f("niceToMeet.headline2", o) }),
                      delay: 0.12
                    }
                  ] : [
                    {
                      text: /* @__PURE__ */ p(J, { children: [
                        f("niceToMeet.headline1", o),
                        " ",
                        /* @__PURE__ */ s("span", { style: { color: xi, fontStyle: "italic" }, children: f("niceToMeet.headline2", o) })
                      ] }),
                      delay: 0.08
                    }
                  ]).map((r, l) => /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                    w.div,
                    {
                      initial: { y: "110%", opacity: 0 },
                      animate: a ? { y: "0%", opacity: 1 } : {},
                      transition: { duration: 1.1, delay: r.delay, ease: Yn },
                      style: {
                        fontSize: e ? "clamp(38px, 10vw, 64px)" : "clamp(36px, 5.5vw, 84px)",
                        fontWeight: 600,
                        lineHeight: 0.95,
                        letterSpacing: "-0.05em",
                        color: "#F2F2F2",
                        willChange: "transform, opacity"
                      },
                      children: r.text
                    }
                  ) }, l))
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: e ? "1fr" : "1fr 1fr",
                    gap: e ? "clamp(40px, 8vw, 64px)" : "clamp(48px, 5vw, 96px)",
                    alignItems: "start"
                  },
                  children: [
                    /* @__PURE__ */ p("div", { children: [
                      /* @__PURE__ */ s(vi, { children: /* @__PURE__ */ s(
                        "div",
                        {
                          style: {
                            borderRadius: "20px",
                            overflow: "hidden",
                            marginBottom: "clamp(28px, 3vw, 44px)",
                            aspectRatio: "4 / 3"
                          },
                          children: /* @__PURE__ */ s(
                            ue,
                            {
                              src: P0,
                              alt: "Sundas Syed profile placeholder image",
                              style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                filter: "grayscale(0.5) contrast(1.05) brightness(0.85)"
                              }
                            }
                          )
                        }
                      ) }),
                      /* @__PURE__ */ p(vi, { delay: 0.1, children: [
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: e ? "clamp(14px, 3.8vw, 18px)" : "clamp(15px, 1.1vw, 19px)",
                              fontWeight: 400,
                              lineHeight: 1.55,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(20px, 2vw, 32px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: f("niceToMeet.body1", o)
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: e ? "clamp(14px, 3.8vw, 18px)" : "clamp(15px, 1.1vw, 19px)",
                              fontWeight: 400,
                              lineHeight: 1.55,
                              letterSpacing: "-0.02em",
                              color: "rgba(242,242,242,0.55)",
                              marginTop: 0,
                              marginBottom: 0,
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: f("niceToMeet.body2", o)
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ p("div", { children: [
                      /* @__PURE__ */ s(vi, { delay: 0.05, children: /* @__PURE__ */ s(
                        "div",
                        {
                          style: {
                            borderTop: "1px solid rgba(242,242,242,0.06)"
                          },
                          children: So.map((r, l) => /* @__PURE__ */ p(
                            "div",
                            {
                              style: {
                                display: "grid",
                                gridTemplateColumns: e ? "110px 1fr" : "140px 1fr",
                                gap: "16px",
                                paddingTop: "clamp(16px, 1.5vw, 24px)",
                                paddingBottom: "clamp(16px, 1.5vw, 24px)",
                                borderBottom: l < So.length - 1 ? "1px solid rgba(242,242,242,0.06)" : "none"
                              },
                              children: [
                                /* @__PURE__ */ s(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "clamp(10px, 0.75vw, 12px)",
                                      fontWeight: 400,
                                      letterSpacing: "0.1em",
                                      textTransform: "uppercase",
                                      color: "#F2F2F2",
                                      paddingTop: "3px"
                                    },
                                    children: f(r.labelKey, o)
                                  }
                                ),
                                /* @__PURE__ */ s(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "clamp(14px, 1vw, 16px)",
                                      fontWeight: 400,
                                      lineHeight: 1.55,
                                      color: "#F2F2F2"
                                    },
                                    children: f(r.valueKey, o)
                                  }
                                )
                              ]
                            },
                            r.labelKey
                          ))
                        }
                      ) }),
                      /* @__PURE__ */ s(vi, { delay: 0.15, children: /* @__PURE__ */ p(
                        "div",
                        {
                          style: {
                            marginTop: "clamp(32px, 3vw, 48px)"
                          },
                          children: [
                            /* @__PURE__ */ s(
                              "span",
                              {
                                style: {
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "clamp(10px, 0.75vw, 12px)",
                                  fontWeight: 400,
                                  letterSpacing: "0.1em",
                                  textTransform: "uppercase",
                                  color: "#F2F2F2",
                                  display: "block",
                                  marginBottom: "clamp(16px, 1.5vw, 24px)"
                                },
                                children: f("niceToMeet.colleaguesDescribe", o)
                              }
                            ),
                            /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: "8px"
                                },
                                children: R0.map((r) => /* @__PURE__ */ s(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "clamp(11px, 0.8vw, 13px)",
                                      fontWeight: 400,
                                      letterSpacing: "0.02em",
                                      color: r.negative ? "rgba(242,242,242,0.55)" : "#F2F2F2",
                                      border: "1px solid rgba(242,242,242,0.08)",
                                      borderRadius: "9999px",
                                      paddingTop: "7px",
                                      paddingBottom: "7px",
                                      paddingLeft: "16px",
                                      paddingRight: "16px",
                                      whiteSpace: "nowrap"
                                    },
                                    children: f(r.labelKey, o)
                                  },
                                  r.labelKey
                                ))
                              }
                            )
                          ]
                        }
                      ) })
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const xt = "#00B6B6", wt = [0.22, 1, 0.36, 1], H0 = [
  {
    id: "less-is-more",
    number: "01",
    title: "values.lessIsMore.title",
    body: "values.lessIsMore.body"
  },
  {
    id: "users-first",
    number: "02",
    title: "values.usersFirst.title",
    body: "values.usersFirst.body"
  },
  {
    id: "work-smarter",
    number: "03",
    title: "values.workSmarter.title",
    body: "values.workSmarter.body"
  },
  {
    id: "communication",
    number: "04",
    title: "values.communication.title",
    body: "values.communication.body"
  }
];
function W0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function U0({
  value: e,
  index: t,
  isMobile: i
}) {
  const n = I(null), a = M(n, { once: !0, margin: "-60px" }), [o, r] = T(!1), { lang: l } = V();
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: n,
      initial: { opacity: 0, y: 32 },
      animate: a ? { opacity: 1, y: 0 } : {},
      transition: {
        duration: 0.9,
        delay: i ? 0.05 : t * 0.08,
        ease: wt
      },
      onMouseEnter: () => r(!0),
      onMouseLeave: () => r(!1),
      style: {
        position: "relative",
        overflow: "hidden",
        backgroundColor: o ? "rgba(0,182,182,0.06)" : "rgba(242,242,242,0.05)",
        border: o ? "1px solid rgba(0,182,182,0.45)" : "1px solid rgba(242,242,242,0.10)",
        borderRadius: "20px",
        padding: i ? "clamp(24px, 6vw, 36px)" : "clamp(32px, 2.5vw, 48px)",
        transition: "background-color 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)",
        cursor: "default",
        boxShadow: o ? "0 0 24px rgba(0,182,182,0.04), inset 0 1px 0 rgba(242,242,242,0.08)" : "inset 0 1px 0 rgba(242,242,242,0.05)",
        display: "flex",
        flexDirection: "column",
        minHeight: i ? "auto" : "clamp(240px, 18vw, 320px)"
      },
      children: [
        /* @__PURE__ */ s(
          w.div,
          {
            "aria-hidden": "true",
            animate: {
              opacity: o ? 1 : 0,
              scale: o ? 1 : 0.5
            },
            transition: { duration: 0.7, ease: wt },
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: i ? "300px" : "clamp(360px, 28vw, 540px)",
              height: i ? "300px" : "clamp(360px, 28vw, 540px)",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(0,182,182,0.35) 0%, rgba(0,182,182,0.18) 30%, rgba(0,182,182,0.06) 55%, transparent 75%)",
              filter: "blur(40px)",
              pointerEvents: "none",
              willChange: "opacity, transform"
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: i ? "-8px" : "-12px",
              right: i ? "12px" : "clamp(16px, 2vw, 32px)",
              fontFamily: "'Inter', sans-serif",
              fontSize: i ? "clamp(100px, 28vw, 160px)" : "clamp(120px, 10vw, 200px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: o ? "rgba(0,182,182,0.06)" : "rgba(242,242,242,0.03)",
              transition: "color 0.5s cubic-bezier(0.22,1,0.36,1)",
              pointerEvents: "none",
              userSelect: "none"
            },
            children: e.number
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 0.75vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: o ? xt : "rgba(242,242,242,0.55)",
              transition: "color 0.4s cubic-bezier(0.22,1,0.36,1)",
              display: "block",
              marginBottom: "clamp(16px, 1.5vw, 24px)",
              position: "relative",
              zIndex: 1
            },
            children: e.number
          }
        ),
        /* @__PURE__ */ s(
          "h3",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: i ? "clamp(24px, 6.5vw, 36px)" : "clamp(24px, 2.2vw, 38px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: o ? "#FFFFFF" : "#F2F2F2",
              transition: "color 0.4s cubic-bezier(0.22,1,0.36,1)",
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              position: "relative",
              zIndex: 1
            },
            children: f(e.title, l)
          }
        ),
        /* @__PURE__ */ s("div", { style: { flex: 1, minHeight: "clamp(20px, 2vw, 40px)" } }),
        /* @__PURE__ */ p("div", { style: { position: "relative", zIndex: 1 }, children: [
          /* @__PURE__ */ s(
            "p",
            {
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(13px, 0.9vw, 15px)",
                fontWeight: 400,
                lineHeight: 1.6,
                letterSpacing: "-0.005em",
                color: "#F2F2F2",
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                maxWidth: i ? "100%" : "85%"
              },
              children: f(e.body, l)
            }
          ),
          /* @__PURE__ */ s(
            w.div,
            {
              animate: { width: o ? "48px" : "32px" },
              transition: { duration: 0.5, ease: wt },
              style: {
                height: "2px",
                backgroundColor: xt,
                marginTop: "clamp(16px, 1.5vw, 24px)",
                opacity: o ? 1 : 0.5,
                transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1)"
              }
            }
          )
        ] })
      ]
    }
  );
}
function O0() {
  const e = W0(), t = I(null), i = M(t, { once: !0, margin: "-80px" }), n = I(null), a = M(n, { once: !0, margin: "-60px" }), { lang: o } = V();
  return /* @__PURE__ */ p(
    "section",
    {
      ref: t,
      style: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: e ? "clamp(64px, 12vw, 100px)" : "clamp(80px, 8vw, 140px)"
      },
      children: [
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0 },
            animate: i ? { opacity: 1 } : {},
            transition: { duration: 0.7, ease: wt },
            style: {
              position: "sticky",
              top: e ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              zIndex: 10,
              paddingLeft: e ? "16px" : "48px",
              height: 0,
              overflow: "visible",
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: xt,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s(
                    "span",
                    {
                      "aria-hidden": !0,
                      style: {
                        width: "clamp(16px, 1.5vw, 24px)",
                        height: "1px",
                        backgroundColor: xt,
                        flexShrink: 0
                      }
                    }
                  ),
                  f("values.label", o)
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              width: "100%",
              maxWidth: "1400px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 0,
              marginBottom: 0,
              paddingTop: e ? "clamp(64px, 12vw, 100px)" : "clamp(56px, 7vw, 120px)",
              paddingBottom: 0,
              paddingLeft: e ? "16px" : "48px",
              paddingRight: e ? "16px" : "48px"
            },
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  ref: n,
                  style: {
                    marginBottom: e ? "clamp(48px, 10vw, 80px)" : "clamp(64px, 7vw, 112px)",
                    maxWidth: "900px"
                  },
                  children: [
                    (e ? [
                      { text: f("values.headline1", o), delay: 0.06 },
                      {
                        text: /* @__PURE__ */ s("span", { style: { color: xt, fontStyle: "italic" }, children: f("values.headline2", o) }),
                        delay: 0.12
                      }
                    ] : [
                      {
                        text: /* @__PURE__ */ p(J, { children: [
                          f("values.headline1", o),
                          " ",
                          /* @__PURE__ */ s("span", { style: { color: xt, fontStyle: "italic" }, children: f("values.headline2", o) })
                        ] }),
                        delay: 0.08
                      }
                    ]).map((r, l) => /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { y: "110%", opacity: 0 },
                        animate: a ? { y: "0%", opacity: 1 } : {},
                        transition: { duration: 1.1, delay: r.delay, ease: wt },
                        style: {
                          fontSize: e ? "clamp(38px, 10vw, 64px)" : "clamp(36px, 5.5vw, 84px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.05em",
                          color: "#F2F2F2",
                          willChange: "transform, opacity"
                        },
                        children: r.text
                      }
                    ) }, l)),
                    /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { opacity: 0, y: 16 },
                        animate: a ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 0.8, delay: 0.35, ease: wt },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(13px, 1vw, 16px)",
                          fontWeight: 400,
                          lineHeight: 1.55,
                          letterSpacing: "-0.01em",
                          color: "rgba(242,242,242,0.55)",
                          marginTop: "clamp(28px, 3vw, 44px)",
                          marginBottom: 0,
                          marginLeft: 0,
                          marginRight: 0,
                          maxWidth: "480px"
                        },
                        children: f("values.subtitle", o)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: e ? "1fr" : "repeat(2, 1fr)",
                    gap: e ? "16px" : "clamp(16px, 1.5vw, 24px)"
                  },
                  children: H0.map((r, l) => /* @__PURE__ */ s(
                    U0,
                    {
                      value: r,
                      index: l,
                      isMobile: e
                    },
                    r.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const vt = "#00B6B6", $i = [0.22, 1, 0.36, 1], Co = [
  {
    id: "impact",
    title: "lookingFor.impact.title",
    body: "lookingFor.impact.body"
  },
  {
    id: "collaboration",
    title: "lookingFor.collaboration.title",
    body: "lookingFor.collaboration.body"
  },
  {
    id: "maturity",
    title: "lookingFor.maturity.title",
    body: "lookingFor.maturity.body"
  },
  {
    id: "complexity",
    title: "lookingFor.complexity.title",
    body: "lookingFor.complexity.body"
  },
  {
    id: "growth",
    title: "lookingFor.growth.title",
    body: "lookingFor.growth.body"
  },
  {
    id: "culture",
    title: "lookingFor.culture.title",
    body: "lookingFor.culture.body"
  }
];
function N0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function _0({
  item: e,
  index: t,
  isMobile: i,
  isLast: n
}) {
  const a = I(null), o = M(a, { once: !0, margin: "-60px" }), [r, l] = T(!1), { lang: c } = V();
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: a,
      initial: { opacity: 0, y: 24 },
      animate: o ? { opacity: 1, y: 0 } : {},
      transition: {
        duration: 0.8,
        delay: i ? 0.05 : t * 0.06,
        ease: $i
      },
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      style: {
        cursor: "default"
      },
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              display: i ? "flex" : "grid",
              flexDirection: i ? "column" : void 0,
              gridTemplateColumns: i ? void 0 : "1fr 1.4fr",
              gap: i ? "12px" : "clamp(32px, 4vw, 80px)",
              alignItems: i ? void 0 : "baseline",
              paddingTop: i ? "clamp(24px, 5vw, 32px)" : "clamp(28px, 2.5vw, 40px)",
              paddingBottom: i ? "clamp(24px, 5vw, 32px)" : "clamp(28px, 2.5vw, 40px)"
            },
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(10px, 1vw, 16px)"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.span,
                      {
                        "aria-hidden": "true",
                        animate: { width: r ? "28px" : "16px" },
                        transition: { duration: 0.5, ease: $i },
                        style: {
                          height: "1.5px",
                          backgroundColor: vt,
                          flexShrink: 0,
                          opacity: r ? 1 : 0.5,
                          transition: "opacity 0.4s cubic-bezier(0.22,1,0.36,1)"
                        }
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: i ? "clamp(18px, 4.8vw, 24px)" : "clamp(18px, 1.5vw, 24px)",
                          fontWeight: 500,
                          lineHeight: 1.2,
                          letterSpacing: "-0.025em",
                          color: r ? vt : "#F2F2F2",
                          transition: "color 0.4s cubic-bezier(0.22,1,0.36,1)",
                          marginTop: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                          marginRight: 0,
                          whiteSpace: i ? "normal" : "nowrap"
                        },
                        children: f(e.title, c)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "p",
                {
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(13px, 0.9vw, 15px)",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    letterSpacing: "-0.005em",
                    color: r ? "rgba(242,242,242,0.85)" : "rgba(242,242,242,0.55)",
                    transition: "color 0.4s cubic-bezier(0.22,1,0.36,1)",
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: i ? "26px" : 0,
                    marginRight: 0,
                    maxWidth: "560px"
                  },
                  children: f(e.body, c)
                }
              )
            ]
          }
        ),
        !n && /* @__PURE__ */ s(
          "div",
          {
            style: {
              height: "1px",
              backgroundColor: r ? "rgba(0,182,182,0.2)" : "rgba(242,242,242,0.07)",
              transition: "background-color 0.5s cubic-bezier(0.22,1,0.36,1)"
            }
          }
        )
      ]
    }
  );
}
function X0() {
  const e = N0(), t = I(null), i = M(t, { once: !0, margin: "-80px" }), n = I(null), a = M(n, { once: !0, margin: "-60px" }), { lang: o } = V();
  return /* @__PURE__ */ p(
    "section",
    {
      ref: t,
      style: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: e ? "clamp(64px, 12vw, 100px)" : "clamp(80px, 8vw, 140px)"
      },
      children: [
        /* @__PURE__ */ s(
          w.div,
          {
            initial: { opacity: 0 },
            animate: i ? { opacity: 1 } : {},
            transition: { duration: 0.7, ease: $i },
            style: {
              position: "sticky",
              top: e ? "calc(32px + clamp(10px, 1.5vw, 16px))" : "calc(48px + clamp(10px, 1.5vw, 16px))",
              zIndex: 10,
              paddingLeft: e ? "16px" : "48px",
              height: 0,
              overflow: "visible",
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ p(
              "span",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 0.85vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: vt,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(6px, 0.6vw, 10px)"
                },
                children: [
                  /* @__PURE__ */ s(
                    "span",
                    {
                      "aria-hidden": !0,
                      style: {
                        width: "clamp(16px, 1.5vw, 24px)",
                        height: "1px",
                        backgroundColor: vt,
                        flexShrink: 0
                      }
                    }
                  ),
                  f("lookingFor.label", o)
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              width: "100%",
              maxWidth: "1400px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 0,
              marginBottom: 0,
              paddingTop: e ? "clamp(64px, 12vw, 100px)" : "clamp(56px, 7vw, 120px)",
              paddingBottom: 0,
              paddingLeft: e ? "16px" : "48px",
              paddingRight: e ? "16px" : "48px"
            },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  ref: n,
                  style: {
                    marginBottom: e ? "clamp(36px, 8vw, 56px)" : "clamp(48px, 5vw, 80px)",
                    maxWidth: "900px"
                  },
                  children: (e ? [
                    {
                      text: /* @__PURE__ */ p(J, { children: [
                        f("lookingFor.headline1", o),
                        " ",
                        /* @__PURE__ */ s("span", { style: { color: vt, fontStyle: "italic" }, children: f("lookingFor.headline2", o) })
                      ] }),
                      delay: 0.06
                    },
                    { text: f("lookingFor.headline3", o), delay: 0.12 }
                  ] : [
                    {
                      text: /* @__PURE__ */ p(J, { children: [
                        f("lookingFor.headline1", o),
                        " ",
                        /* @__PURE__ */ s("span", { style: { color: vt, fontStyle: "italic" }, children: f("lookingFor.headline2", o) }),
                        " ",
                        f("lookingFor.headline3", o)
                      ] }),
                      delay: 0.08
                    }
                  ]).map((r, l) => /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                    w.div,
                    {
                      initial: { y: "110%", opacity: 0 },
                      animate: a ? { y: "0%", opacity: 1 } : {},
                      transition: { duration: 1.1, delay: r.delay, ease: $i },
                      style: {
                        fontSize: e ? "clamp(38px, 10vw, 64px)" : "clamp(36px, 5.5vw, 84px)",
                        fontWeight: 600,
                        lineHeight: 0.95,
                        letterSpacing: "-0.05em",
                        color: "#F2F2F2",
                        willChange: "transform, opacity"
                      },
                      children: r.text
                    }
                  ) }, l))
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    height: "1px",
                    backgroundColor: "rgba(242,242,242,0.07)"
                  }
                }
              ),
              Co.map((r, l) => /* @__PURE__ */ s(
                _0,
                {
                  item: r,
                  index: l,
                  isMobile: e,
                  isLast: l === Co.length - 1
                },
                r.id
              ))
            ]
          }
        )
      ]
    }
  );
}
const To = [0.22, 1, 0.36, 1];
function $0(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
const we = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#FFFFFF",
  textDecoration: "none"
};
function Ae() {
  const e = $0(), t = I(null), i = M(t, { once: !0, amount: 0.3 }), { lang: n } = V();
  return /* @__PURE__ */ s(
    "footer",
    {
      ref: t,
      "data-page-footer": !0,
      style: {
        position: "relative",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: e ? "32px" : "40px",
        paddingBottom: e ? "32px" : "40px",
        paddingLeft: e ? "16px" : "48px",
        paddingRight: e ? "16px" : "48px"
      },
      children: e ? (
        /* ─── Mobile: stacked layout ─── */
        /* @__PURE__ */ p(
          w.div,
          {
            initial: { opacity: 0 },
            animate: i ? { opacity: 1 } : {},
            transition: { duration: 0.8, ease: To },
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            },
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    flexWrap: "wrap"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      "a",
                      {
                        href: "https://www.linkedin.com/in/sundas-syed-6b737715a/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: we,
                        children: "Linkedin"
                      }
                    ),
                    /* @__PURE__ */ s("a", { href: "mailto:sundas_syed@hotmail.com", style: we, children: "sundas_syed@hotmail.com" })
                  ]
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                  },
                  children: [
                    /* @__PURE__ */ s("a", { href: "#/legal/cookies", style: we, children: f("footer.cookies", n) }),
                    /* @__PURE__ */ s("a", { href: "#/legal/privacy", style: we, children: f("footer.privacy", n) }),
                    /* @__PURE__ */ s("a", { href: "#/legal/legal-notice", style: we, children: f("footer.legal", n) })
                  ]
                }
              )
            ]
          }
        )
      ) : (
        /* ─── Desktop: single row, contact right, legal left ─── */
        /* @__PURE__ */ p(
          w.div,
          {
            initial: { opacity: 0 },
            animate: i ? { opacity: 1 } : {},
            transition: { duration: 0.8, ease: To },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(20px, 2.5vw, 40px)"
                  },
                  children: [
                    /* @__PURE__ */ s("a", { href: "#/legal/cookies", style: we, children: f("footer.cookies", n) }),
                    /* @__PURE__ */ s("a", { href: "#/legal/privacy", style: we, children: f("footer.privacy", n) }),
                    /* @__PURE__ */ s("a", { href: "#/legal/legal-notice", style: we, children: f("footer.legal", n) })
                  ]
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(20px, 2.5vw, 40px)"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      "a",
                      {
                        href: "https://www.linkedin.com/in/sundas-syed-6b737715a/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: we,
                        children: "Linkedin"
                      }
                    ),
                    /* @__PURE__ */ s("a", { href: "mailto:sundas_syed@hotmail.com", style: we, children: "sundas_syed@hotmail.com" })
                  ]
                }
              )
            ]
          }
        )
      )
    }
  );
}
const G0 = {
  "veepee": {
    "heroMeta": {
      "en": "Vienna, Austria · March 2026 - Present",
      "es": "Vienna, Austria · March 2026 - Present",
      "ca": "Vienna, Austria · March 2026 - Present"
    },
    "contextHeading": {
      "en": "Junior Product Manager · Network Engineering / Netzwerktechnik",
      "es": "Junior Product Manager · Network Engineering / Netzwerktechnik",
      "ca": "Junior Product Manager · Network Engineering / Netzwerktechnik"
    },
    "contextBody": {
      "en": [
        "Schrack Technik is a leading Austrian distributor of innovative electrical engineering products and solutions for energy, building, and data technology.",
        "Sundas works with technical, logistical, and commercial product data so network engineering products can be integrated into the product assortment with consistency, clarity, and reliable documentation."
      ],
      "es": [
        "Schrack Technik is a leading Austrian distributor of innovative electrical engineering products and solutions for energy, building, and data technology.",
        "Sundas works with technical, logistical, and commercial product data so network engineering products can be integrated into the product assortment with consistency, clarity, and reliable documentation."
      ],
      "ca": [
        "Schrack Technik is a leading Austrian distributor of innovative electrical engineering products and solutions for energy, building, and data technology.",
        "Sundas works with technical, logistical, and commercial product data so network engineering products can be integrated into the product assortment with consistency, clarity, and reliable documentation."
      ]
    },
    "metrics": [
      {
        "value": "March 2026",
        "label": {
          "en": "Start period",
          "es": "Start period",
          "ca": "Start period"
        }
      },
      {
        "value": "9",
        "label": {
          "en": "Core responsibilities captured",
          "es": "Core responsibilities captured",
          "ca": "Core responsibilities captured"
        }
      },
      {
        "value": "Schrack",
        "label": {
          "en": "Schrack Technik GmbH",
          "es": "Schrack Technik GmbH",
          "ca": "Schrack Technik GmbH"
        }
      }
    ],
    "challengeHeading": {
      "en": "The focus",
      "es": "The focus",
      "ca": "The focus"
    },
    "challengeBody": {
      "en": [
        "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "es": [
        "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "ca": [
        "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ]
    },
    "roleHeading": {
      "en": "Junior Product Manager · Network Engineering / Netzwerktechnik",
      "es": "Junior Product Manager · Network Engineering / Netzwerktechnik",
      "ca": "Junior Product Manager · Network Engineering / Netzwerktechnik"
    },
    "roleIntro": {
      "en": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
      "es": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration.",
      "ca": "Structured preparation and analysis of technical, logistical, and commercial product data for network engineering products and assortment integration."
    },
    "roleItems": [
      {
        "num": "01",
        "title": {
          "en": "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment",
          "es": "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment",
          "ca": "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment"
        },
        "desc": {
          "en": "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment.",
          "es": "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment.",
          "ca": "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment."
        }
      },
      {
        "num": "02",
        "title": {
          "en": "Management and quality assurance of article master data with a focus on data consistency and process optimization",
          "es": "Management and quality assurance of article master data with a focus on data consistency and process optimization",
          "ca": "Management and quality assurance of article master data with a focus on data consistency and process optimization"
        },
        "desc": {
          "en": "Management and quality assurance of article master data with a focus on data consistency and process optimization.",
          "es": "Management and quality assurance of article master data with a focus on data consistency and process optimization.",
          "ca": "Management and quality assurance of article master data with a focus on data consistency and process optimization."
        }
      },
      {
        "num": "03",
        "title": {
          "en": "Creation and maintenance of technical documentation, specifications, and data sheets",
          "es": "Creation and maintenance of technical documentation, specifications, and data sheets",
          "ca": "Creation and maintenance of technical documentation, specifications, and data sheets"
        },
        "desc": {
          "en": "Creation and maintenance of technical documentation, specifications, and data sheets.",
          "es": "Creation and maintenance of technical documentation, specifications, and data sheets.",
          "ca": "Creation and maintenance of technical documentation, specifications, and data sheets."
        }
      },
      {
        "num": "04",
        "title": {
          "en": "Interface management between sales, customers, suppliers, and logistics to ensure efficient information flows",
          "es": "Interface management between sales, customers, suppliers, and logistics to ensure efficient information flows",
          "ca": "Interface management between sales, customers, suppliers, and logistics to ensure efficient information flows"
        },
        "desc": {
          "en": "Interface management between sales, customers, suppliers, and logistics to ensure efficient information flows.",
          "es": "Interface management between sales, customers, suppliers, and logistics to ensure efficient information flows.",
          "ca": "Interface management between sales, customers, suppliers, and logistics to ensure efficient information flows."
        }
      },
      {
        "num": "05",
        "title": {
          "en": "Support in technical and commercial complaint processes, including root cause analysis and solution coordination",
          "es": "Support in technical and commercial complaint processes, including root cause analysis and solution coordination",
          "ca": "Support in technical and commercial complaint processes, including root cause analysis and solution coordination"
        },
        "desc": {
          "en": "Support in technical and commercial complaint processes, including root cause analysis and solution coordination.",
          "es": "Support in technical and commercial complaint processes, including root cause analysis and solution coordination.",
          "ca": "Support in technical and commercial complaint processes, including root cause analysis and solution coordination."
        }
      },
      {
        "num": "06",
        "title": {
          "en": "Execution of technical measurements and verifications to ensure quality requirements",
          "es": "Execution of technical measurements and verifications to ensure quality requirements",
          "ca": "Execution of technical measurements and verifications to ensure quality requirements"
        },
        "desc": {
          "en": "Execution of technical measurements and verifications to ensure quality requirements.",
          "es": "Execution of technical measurements and verifications to ensure quality requirements.",
          "ca": "Execution of technical measurements and verifications to ensure quality requirements."
        }
      },
      {
        "num": "07",
        "title": {
          "en": "Coordination of technical specifications with international suppliers",
          "es": "Coordination of technical specifications with international suppliers",
          "ca": "Coordination of technical specifications with international suppliers"
        },
        "desc": {
          "en": "Coordination of technical specifications with international suppliers.",
          "es": "Coordination of technical specifications with international suppliers.",
          "ca": "Coordination of technical specifications with international suppliers."
        }
      },
      {
        "num": "08",
        "title": {
          "en": "Data-based evaluations and analyses to support decision-making processes",
          "es": "Data-based evaluations and analyses to support decision-making processes",
          "ca": "Data-based evaluations and analyses to support decision-making processes"
        },
        "desc": {
          "en": "Data-based evaluations and analyses to support decision-making processes.",
          "es": "Data-based evaluations and analyses to support decision-making processes.",
          "ca": "Data-based evaluations and analyses to support decision-making processes."
        }
      },
      {
        "num": "09",
        "title": {
          "en": "Conception and execution of internal training in a technical context",
          "es": "Conception and execution of internal training in a technical context",
          "ca": "Conception and execution of internal training in a technical context"
        },
        "desc": {
          "en": "Conception and execution of internal training in a technical context.",
          "es": "Conception and execution of internal training in a technical context.",
          "ca": "Conception and execution of internal training in a technical context."
        }
      }
    ],
    "focusHeading": {
      "en": "What this experience strengthened",
      "es": "What this experience strengthened",
      "ca": "What this experience strengthened"
    },
    "focusBody": {
      "en": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "es": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "ca": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ]
    },
    "focusIntro": {
      "en": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "es": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "ca": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination."
    },
    "focusItems": [
      {
        "title": {
          "en": "Article master data management",
          "es": "Article master data management",
          "ca": "Article master data management"
        },
        "desc": {
          "en": "Article master data management with focus on consistency and process optimization",
          "es": "Article master data management with focus on consistency and process optimization",
          "ca": "Article master data management with focus on consistency and process optimization"
        }
      },
      {
        "title": {
          "en": "Technical documentation, specifications, and",
          "es": "Technical documentation, specifications, and",
          "ca": "Technical documentation, specifications, and"
        },
        "desc": {
          "en": "Technical documentation, specifications, and data sheets",
          "es": "Technical documentation, specifications, and data sheets",
          "ca": "Technical documentation, specifications, and data sheets"
        }
      },
      {
        "title": {
          "en": "Interface coordination across sales,",
          "es": "Interface coordination across sales,",
          "ca": "Interface coordination across sales,"
        },
        "desc": {
          "en": "Interface coordination across sales, customers, suppliers, and logistics",
          "es": "Interface coordination across sales, customers, suppliers, and logistics",
          "ca": "Interface coordination across sales, customers, suppliers, and logistics"
        }
      }
    ],
    "impactHeading": {
      "en": "Key contributions",
      "es": "Key contributions",
      "ca": "Key contributions"
    },
    "impactBullets": {
      "en": [
        "Article master data management with focus on consistency and process optimization",
        "Technical documentation, specifications, and data sheets",
        "Interface coordination across sales, customers, suppliers, and logistics",
        "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment.",
        "Management and quality assurance of article master data with a focus on data consistency and process optimization.",
        "Creation and maintenance of technical documentation, specifications, and data sheets."
      ],
      "es": [
        "Article master data management with focus on consistency and process optimization",
        "Technical documentation, specifications, and data sheets",
        "Interface coordination across sales, customers, suppliers, and logistics",
        "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment.",
        "Management and quality assurance of article master data with a focus on data consistency and process optimization.",
        "Creation and maintenance of technical documentation, specifications, and data sheets."
      ],
      "ca": [
        "Article master data management with focus on consistency and process optimization",
        "Technical documentation, specifications, and data sheets",
        "Interface coordination across sales, customers, suppliers, and logistics",
        "Structured preparation and analysis of technical, logistical, and commercial product data for integration into the product assortment.",
        "Management and quality assurance of article master data with a focus on data consistency and process optimization.",
        "Creation and maintenance of technical documentation, specifications, and data sheets."
      ]
    },
    "reflectionTexts": {
      "en": [
        "This role deepens Sundas' ability to analyze technical product data systematically.",
        "It builds practical judgment around data quality, supplier coordination, and cross-functional process design.",
        "It also connects her engineering background with daily product management responsibilities."
      ],
      "es": [
        "This role deepens Sundas' ability to analyze technical product data systematically.",
        "It builds practical judgment around data quality, supplier coordination, and cross-functional process design.",
        "It also connects her engineering background with daily product management responsibilities."
      ],
      "ca": [
        "This role deepens Sundas' ability to analyze technical product data systematically.",
        "It builds practical judgment around data quality, supplier coordination, and cross-functional process design.",
        "It also connects her engineering background with daily product management responsibilities."
      ]
    }
  },
  "kira-learning": {
    "heroMeta": {
      "en": "Austria · February 2025 - Present",
      "es": "Austria · February 2025 - Present",
      "ca": "Austria · February 2025 - Present"
    },
    "contextHeading": {
      "en": "Regional Network Lead · Austria",
      "es": "Regional Network Lead · Austria",
      "ca": "Regional Network Lead · Austria"
    },
    "contextBody": {
      "en": [
        "Women in Aerospace Europe connects and supports women across aerospace, STEM, industry, research, and education.",
        "As Regional Network Lead for Austria, Sundas represents the network, coordinates formats and events, and builds links between partners and members."
      ],
      "es": [
        "Women in Aerospace Europe connects and supports women across aerospace, STEM, industry, research, and education.",
        "As Regional Network Lead for Austria, Sundas represents the network, coordinates formats and events, and builds links between partners and members."
      ],
      "ca": [
        "Women in Aerospace Europe connects and supports women across aerospace, STEM, industry, research, and education.",
        "As Regional Network Lead for Austria, Sundas represents the network, coordinates formats and events, and builds links between partners and members."
      ]
    },
    "metrics": [
      {
        "value": "February 2025",
        "label": {
          "en": "Start period",
          "es": "Start period",
          "ca": "Start period"
        }
      },
      {
        "value": "7",
        "label": {
          "en": "Core responsibilities captured",
          "es": "Core responsibilities captured",
          "ca": "Core responsibilities captured"
        }
      },
      {
        "value": "WIA-E",
        "label": {
          "en": "Women in Aerospace Europe",
          "es": "Women in Aerospace Europe",
          "ca": "Women in Aerospace Europe"
        }
      }
    ],
    "challengeHeading": {
      "en": "The focus",
      "es": "The focus",
      "ca": "The focus"
    },
    "challengeBody": {
      "en": [
        "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "es": [
        "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "ca": [
        "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ]
    },
    "roleHeading": {
      "en": "Regional Network Lead · Austria",
      "es": "Regional Network Lead · Austria",
      "ca": "Regional Network Lead · Austria"
    },
    "roleIntro": {
      "en": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
      "es": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education.",
      "ca": "Regional leadership for Women in Aerospace Europe in Austria, connecting STEM programs, partners, industry, research, and education."
    },
    "roleItems": [
      {
        "num": "01",
        "title": {
          "en": "Implement STEM and MINT formats and events",
          "es": "Implement STEM and MINT formats and events",
          "ca": "Implement STEM and MINT formats and events"
        },
        "desc": {
          "en": "Implement STEM and MINT formats and events.",
          "es": "Implement STEM and MINT formats and events.",
          "ca": "Implement STEM and MINT formats and events."
        }
      },
      {
        "num": "02",
        "title": {
          "en": "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe",
          "es": "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe",
          "ca": "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe"
        },
        "desc": {
          "en": "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe.",
          "es": "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe.",
          "ca": "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe."
        }
      },
      {
        "num": "03",
        "title": {
          "en": "Coordinate programs for girls and women in STEM",
          "es": "Coordinate programs for girls and women in STEM",
          "ca": "Coordinate programs for girls and women in STEM"
        },
        "desc": {
          "en": "Coordinate programs for girls and women in STEM.",
          "es": "Coordinate programs for girls and women in STEM.",
          "ca": "Coordinate programs for girls and women in STEM."
        }
      },
      {
        "num": "04",
        "title": {
          "en": "Event management",
          "es": "Event management",
          "ca": "Event management"
        },
        "desc": {
          "en": "Event management.",
          "es": "Event management.",
          "ca": "Event management."
        }
      },
      {
        "num": "05",
        "title": {
          "en": "Communication through newsletters, social updates, and community updates",
          "es": "Communication through newsletters, social updates, and community updates",
          "ca": "Communication through newsletters, social updates, and community updates"
        },
        "desc": {
          "en": "Communication through newsletters, social updates, and community updates.",
          "es": "Communication through newsletters, social updates, and community updates.",
          "ca": "Communication through newsletters, social updates, and community updates."
        }
      },
      {
        "num": "06",
        "title": {
          "en": "Partner and member development",
          "es": "Partner and member development",
          "ca": "Partner and member development"
        },
        "desc": {
          "en": "Partner and member development.",
          "es": "Partner and member development.",
          "ca": "Partner and member development."
        }
      },
      {
        "num": "07",
        "title": {
          "en": "Initiate cooperations",
          "es": "Initiate cooperations",
          "ca": "Initiate cooperations"
        },
        "desc": {
          "en": "Initiate cooperations.",
          "es": "Initiate cooperations.",
          "ca": "Initiate cooperations."
        }
      }
    ],
    "focusHeading": {
      "en": "What this experience strengthened",
      "es": "What this experience strengthened",
      "ca": "What this experience strengthened"
    },
    "focusBody": {
      "en": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "es": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "ca": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ]
    },
    "focusIntro": {
      "en": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "es": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "ca": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination."
    },
    "focusItems": [
      {
        "title": {
          "en": "Implements STEM formats, events,",
          "es": "Implements STEM formats, events,",
          "ca": "Implements STEM formats, events,"
        },
        "desc": {
          "en": "Implements STEM formats, events, and programs for girls and women",
          "es": "Implements STEM formats, events, and programs for girls and women",
          "ca": "Implements STEM formats, events, and programs for girls and women"
        }
      },
      {
        "title": {
          "en": "Represents the network with",
          "es": "Represents the network with",
          "ca": "Represents the network with"
        },
        "desc": {
          "en": "Represents the network with industry, research, education, and European WIA partners",
          "es": "Represents the network with industry, research, education, and European WIA partners",
          "ca": "Represents the network with industry, research, education, and European WIA partners"
        }
      },
      {
        "title": {
          "en": "Builds partnerships, member development,",
          "es": "Builds partnerships, member development,",
          "ca": "Builds partnerships, member development,"
        },
        "desc": {
          "en": "Builds partnerships, member development, communication, and cooperation initiatives",
          "es": "Builds partnerships, member development, communication, and cooperation initiatives",
          "ca": "Builds partnerships, member development, communication, and cooperation initiatives"
        }
      }
    ],
    "impactHeading": {
      "en": "Key contributions",
      "es": "Key contributions",
      "ca": "Key contributions"
    },
    "impactBullets": {
      "en": [
        "Implements STEM formats, events, and programs for girls and women",
        "Represents the network with industry, research, education, and European WIA partners",
        "Builds partnerships, member development, communication, and cooperation initiatives",
        "Implement STEM and MINT formats and events.",
        "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe.",
        "Coordinate programs for girls and women in STEM."
      ],
      "es": [
        "Implements STEM formats, events, and programs for girls and women",
        "Represents the network with industry, research, education, and European WIA partners",
        "Builds partnerships, member development, communication, and cooperation initiatives",
        "Implement STEM and MINT formats and events.",
        "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe.",
        "Coordinate programs for girls and women in STEM."
      ],
      "ca": [
        "Implements STEM formats, events, and programs for girls and women",
        "Represents the network with industry, research, education, and European WIA partners",
        "Builds partnerships, member development, communication, and cooperation initiatives",
        "Implement STEM and MINT formats and events.",
        "Represent the network and act as contact person for partners in industry, research, education, and other WIA networks in Europe.",
        "Coordinate programs for girls and women in STEM."
      ]
    },
    "reflectionTexts": {
      "en": [
        "This role strengthens Sundas' leadership and communication skills.",
        "It connects her aerospace interest with tangible network-building work.",
        "It also reflects her commitment to making technical fields more accessible."
      ],
      "es": [
        "This role strengthens Sundas' leadership and communication skills.",
        "It connects her aerospace interest with tangible network-building work.",
        "It also reflects her commitment to making technical fields more accessible."
      ],
      "ca": [
        "This role strengthens Sundas' leadership and communication skills.",
        "It connects her aerospace interest with tangible network-building work.",
        "It also reflects her commitment to making technical fields more accessible."
      ]
    }
  },
  "tucuvi": {
    "heroMeta": {
      "en": "Vienna / Lower Austria / Burgenland · September 2020 - Present",
      "es": "Vienna / Lower Austria / Burgenland · September 2020 - Present",
      "ca": "Vienna / Lower Austria / Burgenland · September 2020 - Present"
    },
    "contextHeading": {
      "en": "FIT Ambassador · FIT-Botschafterin",
      "es": "FIT Ambassador · FIT-Botschafterin",
      "ca": "FIT Ambassador · FIT-Botschafterin"
    },
    "contextBody": {
      "en": [
        "Verein sprungbrett runs FIT initiatives that encourage girls and young women to explore natural sciences and technology.",
        "As FIT Ambassador, Sundas independently delivers designed workshops and contributes to public relations, feedback, and fair appearances."
      ],
      "es": [
        "Verein sprungbrett runs FIT initiatives that encourage girls and young women to explore natural sciences and technology.",
        "As FIT Ambassador, Sundas independently delivers designed workshops and contributes to public relations, feedback, and fair appearances."
      ],
      "ca": [
        "Verein sprungbrett runs FIT initiatives that encourage girls and young women to explore natural sciences and technology.",
        "As FIT Ambassador, Sundas independently delivers designed workshops and contributes to public relations, feedback, and fair appearances."
      ]
    },
    "metrics": [
      {
        "value": "September 2020",
        "label": {
          "en": "Start period",
          "es": "Start period",
          "ca": "Start period"
        }
      },
      {
        "value": "7",
        "label": {
          "en": "Core responsibilities captured",
          "es": "Core responsibilities captured",
          "ca": "Core responsibilities captured"
        }
      },
      {
        "value": "FIT",
        "label": {
          "en": "Verein sprungbrett",
          "es": "Verein sprungbrett",
          "ca": "Verein sprungbrett"
        }
      }
    ],
    "challengeHeading": {
      "en": "The focus",
      "es": "The focus",
      "ca": "The focus"
    },
    "challengeBody": {
      "en": [
        "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "es": [
        "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "ca": [
        "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ]
    },
    "roleHeading": {
      "en": "FIT Ambassador · FIT-Botschafterin",
      "es": "FIT Ambassador · FIT-Botschafterin",
      "ca": "FIT Ambassador · FIT-Botschafterin"
    },
    "roleIntro": {
      "en": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
      "es": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience.",
      "ca": "Facilitates school workshops and public outreach around women in natural sciences, technology, AI, study choice, and study experience."
    },
    "roleItems": [
      {
        "num": "01",
        "title": {
          "en": "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences",
          "es": "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences",
          "ca": "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences"
        },
        "desc": {
          "en": "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences.",
          "es": "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences.",
          "ca": "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences."
        }
      },
      {
        "num": "02",
        "title": {
          "en": "Works with female students aged 15 and above in groups of around 10 to 60 participants",
          "es": "Works with female students aged 15 and above in groups of around 10 to 60 participants",
          "ca": "Works with female students aged 15 and above in groups of around 10 to 60 participants"
        },
        "desc": {
          "en": "Works with female students aged 15 and above in groups of around 10 to 60 participants.",
          "es": "Works with female students aged 15 and above in groups of around 10 to 60 participants.",
          "ca": "Works with female students aged 15 and above in groups of around 10 to 60 participants."
        }
      },
      {
        "num": "03",
        "title": {
          "en": "Creates short feedback reports on school or online assignments and derives measures",
          "es": "Creates short feedback reports on school or online assignments and derives measures",
          "ca": "Creates short feedback reports on school or online assignments and derives measures"
        },
        "desc": {
          "en": "Creates short feedback reports on school or online assignments and derives measures.",
          "es": "Creates short feedback reports on school or online assignments and derives measures.",
          "ca": "Creates short feedback reports on school or online assignments and derives measures."
        }
      },
      {
        "num": "04",
        "title": {
          "en": "Co-designs FIT public relations",
          "es": "Co-designs FIT public relations",
          "ca": "Co-designs FIT public relations"
        },
        "desc": {
          "en": "Co-designs FIT public relations.",
          "es": "Co-designs FIT public relations.",
          "ca": "Co-designs FIT public relations."
        }
      },
      {
        "num": "05",
        "title": {
          "en": "Handles feminist topics confidently by making diversity visible and promoting respectful discussion culture",
          "es": "Handles feminist topics confidently by making diversity visible and promoting respectful discussion culture",
          "ca": "Handles feminist topics confidently by making diversity visible and promoting respectful discussion culture"
        },
        "desc": {
          "en": "Handles feminist topics confidently by making diversity visible and promoting respectful discussion culture.",
          "es": "Handles feminist topics confidently by making diversity visible and promoting respectful discussion culture.",
          "ca": "Handles feminist topics confidently by making diversity visible and promoting respectful discussion culture."
        }
      },
      {
        "num": "06",
        "title": {
          "en": "Uses didactics and methodology including interactive elements, clear agendas, and Q&A steering",
          "es": "Uses didactics and methodology including interactive elements, clear agendas, and Q&A steering",
          "ca": "Uses didactics and methodology including interactive elements, clear agendas, and Q&A steering"
        },
        "desc": {
          "en": "Uses didactics and methodology including interactive elements, clear agendas, and Q&A steering.",
          "es": "Uses didactics and methodology including interactive elements, clear agendas, and Q&A steering.",
          "ca": "Uses didactics and methodology including interactive elements, clear agendas, and Q&A steering."
        }
      },
      {
        "num": "07",
        "title": {
          "en": "Supports trade fair appearances by advising visitors, explaining study paths, and initiating follow-ups",
          "es": "Supports trade fair appearances by advising visitors, explaining study paths, and initiating follow-ups",
          "ca": "Supports trade fair appearances by advising visitors, explaining study paths, and initiating follow-ups"
        },
        "desc": {
          "en": "Supports trade fair appearances by advising visitors, explaining study paths, and initiating follow-ups.",
          "es": "Supports trade fair appearances by advising visitors, explaining study paths, and initiating follow-ups.",
          "ca": "Supports trade fair appearances by advising visitors, explaining study paths, and initiating follow-ups."
        }
      }
    ],
    "focusHeading": {
      "en": "What this experience strengthened",
      "es": "What this experience strengthened",
      "ca": "What this experience strengthened"
    },
    "focusBody": {
      "en": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "es": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "ca": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ]
    },
    "focusIntro": {
      "en": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "es": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "ca": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination."
    },
    "focusItems": [
      {
        "title": {
          "en": "Runs workshops for students",
          "es": "Runs workshops for students",
          "ca": "Runs workshops for students"
        },
        "desc": {
          "en": "Runs workshops for students aged 15 and above in schools and online",
          "es": "Runs workshops for students aged 15 and above in schools and online",
          "ca": "Runs workshops for students aged 15 and above in schools and online"
        }
      },
      {
        "title": {
          "en": "Creates feedback reports and",
          "es": "Creates feedback reports and",
          "ca": "Creates feedback reports and"
        },
        "desc": {
          "en": "Creates feedback reports and supports FIT public relations",
          "es": "Creates feedback reports and supports FIT public relations",
          "ca": "Creates feedback reports and supports FIT public relations"
        }
      },
      {
        "title": {
          "en": "Promotes respectful discussion culture",
          "es": "Promotes respectful discussion culture",
          "ca": "Promotes respectful discussion culture"
        },
        "desc": {
          "en": "Promotes respectful discussion culture and visible diversity in STEM",
          "es": "Promotes respectful discussion culture and visible diversity in STEM",
          "ca": "Promotes respectful discussion culture and visible diversity in STEM"
        }
      }
    ],
    "impactHeading": {
      "en": "Key contributions",
      "es": "Key contributions",
      "ca": "Key contributions"
    },
    "impactBullets": {
      "en": [
        "Runs workshops for students aged 15 and above in schools and online",
        "Creates feedback reports and supports FIT public relations",
        "Promotes respectful discussion culture and visible diversity in STEM",
        "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences.",
        "Works with female students aged 15 and above in groups of around 10 to 60 participants.",
        "Creates short feedback reports on school or online assignments and derives measures."
      ],
      "es": [
        "Runs workshops for students aged 15 and above in schools and online",
        "Creates feedback reports and supports FIT public relations",
        "Promotes respectful discussion culture and visible diversity in STEM",
        "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences.",
        "Works with female students aged 15 and above in groups of around 10 to 60 participants.",
        "Creates short feedback reports on school or online assignments and derives measures."
      ],
      "ca": [
        "Runs workshops for students aged 15 and above in schools and online",
        "Creates feedback reports and supports FIT public relations",
        "Promotes respectful discussion culture and visible diversity in STEM",
        "Independently holds school workshops on women in natural sciences and technology, AI, study choice, and study experiences.",
        "Works with female students aged 15 and above in groups of around 10 to 60 participants.",
        "Creates short feedback reports on school or online assignments and derives measures."
      ]
    },
    "reflectionTexts": {
      "en": [
        "This long-running role shows Sundas' commitment to technical education and inclusion.",
        "It strengthens facilitation, moderation, communication, and public-facing confidence.",
        "It connects her engineering path with advocacy for girls and women in STEM."
      ],
      "es": [
        "This long-running role shows Sundas' commitment to technical education and inclusion.",
        "It strengthens facilitation, moderation, communication, and public-facing confidence.",
        "It connects her engineering path with advocacy for girls and women in STEM."
      ],
      "ca": [
        "This long-running role shows Sundas' commitment to technical education and inclusion.",
        "It strengthens facilitation, moderation, communication, and public-facing confidence.",
        "It connects her engineering path with advocacy for girls and women in STEM."
      ]
    }
  },
  "hp-parts-store": {
    "heroMeta": {
      "en": "Vienna, Austria · March 2025 - May 2025",
      "es": "Vienna, Austria · March 2025 - May 2025",
      "ca": "Vienna, Austria · March 2025 - May 2025"
    },
    "contextHeading": {
      "en": "Medical Technology · Medizintechnik",
      "es": "Medical Technology · Medizintechnik",
      "ca": "Medical Technology · Medizintechnik"
    },
    "contextBody": {
      "en": [
        "At Wiener Gesundheitsverbund, Sundas worked in a medical technology environment supporting incoming inspections, functional checks, commissioning, safety checks, and troubleshooting.",
        "The role also gave her insight into operating room contexts including neurosurgery, laparoscopy, and robot-assisted surgery."
      ],
      "es": [
        "At Wiener Gesundheitsverbund, Sundas worked in a medical technology environment supporting incoming inspections, functional checks, commissioning, safety checks, and troubleshooting.",
        "The role also gave her insight into operating room contexts including neurosurgery, laparoscopy, and robot-assisted surgery."
      ],
      "ca": [
        "At Wiener Gesundheitsverbund, Sundas worked in a medical technology environment supporting incoming inspections, functional checks, commissioning, safety checks, and troubleshooting.",
        "The role also gave her insight into operating room contexts including neurosurgery, laparoscopy, and robot-assisted surgery."
      ]
    },
    "metrics": [
      {
        "value": "March 2025",
        "label": {
          "en": "Start period",
          "es": "Start period",
          "ca": "Start period"
        }
      },
      {
        "value": "4",
        "label": {
          "en": "Core responsibilities captured",
          "es": "Core responsibilities captured",
          "ca": "Core responsibilities captured"
        }
      },
      {
        "value": "MedTech",
        "label": {
          "en": "Wiener Gesundheitsverbund",
          "es": "Wiener Gesundheitsverbund",
          "ca": "Wiener Gesundheitsverbund"
        }
      }
    ],
    "challengeHeading": {
      "en": "The focus",
      "es": "The focus",
      "ca": "The focus"
    },
    "challengeBody": {
      "en": [
        "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "es": [
        "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "ca": [
        "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ]
    },
    "roleHeading": {
      "en": "Medical Technology · Medizintechnik",
      "es": "Medical Technology · Medizintechnik",
      "ca": "Medical Technology · Medizintechnik"
    },
    "roleIntro": {
      "en": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
      "es": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices.",
      "ca": "Supported technical incoming inspections, functional checks, commissioning, safety checks, and first-level troubleshooting of medical devices."
    },
    "roleItems": [
      {
        "num": "01",
        "title": {
          "en": "Conducted technical incoming inspections and functional checks of new medical devices and documented results",
          "es": "Conducted technical incoming inspections and functional checks of new medical devices and documented results",
          "ca": "Conducted technical incoming inspections and functional checks of new medical devices and documented results"
        },
        "desc": {
          "en": "Conducted technical incoming inspections and functional checks of new medical devices and documented results.",
          "es": "Conducted technical incoming inspections and functional checks of new medical devices and documented results.",
          "ca": "Conducted technical incoming inspections and functional checks of new medical devices and documented results."
        }
      },
      {
        "num": "02",
        "title": {
          "en": "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability",
          "es": "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability",
          "ca": "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability"
        },
        "desc": {
          "en": "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability.",
          "es": "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability.",
          "ca": "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability."
        }
      },
      {
        "num": "03",
        "title": {
          "en": "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests",
          "es": "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests",
          "ca": "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests"
        },
        "desc": {
          "en": "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests.",
          "es": "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests.",
          "ca": "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests."
        }
      },
      {
        "num": "04",
        "title": {
          "en": "Gained operating room insights in neurosurgery, laparoscopy, and robot-assisted surgery",
          "es": "Gained operating room insights in neurosurgery, laparoscopy, and robot-assisted surgery",
          "ca": "Gained operating room insights in neurosurgery, laparoscopy, and robot-assisted surgery"
        },
        "desc": {
          "en": "Gained operating room insights in neurosurgery, laparoscopy, and robot-assisted surgery.",
          "es": "Gained operating room insights in neurosurgery, laparoscopy, and robot-assisted surgery.",
          "ca": "Gained operating room insights in neurosurgery, laparoscopy, and robot-assisted surgery."
        }
      }
    ],
    "focusHeading": {
      "en": "What this experience strengthened",
      "es": "What this experience strengthened",
      "ca": "What this experience strengthened"
    },
    "focusBody": {
      "en": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "es": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "ca": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ]
    },
    "focusIntro": {
      "en": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "es": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "ca": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination."
    },
    "focusItems": [
      {
        "title": {
          "en": "Documented inspections and ensured",
          "es": "Documented inspections and ensured",
          "ca": "Documented inspections and ensured"
        },
        "desc": {
          "en": "Documented inspections and ensured operational readiness and traceability",
          "es": "Documented inspections and ensured operational readiness and traceability",
          "ca": "Documented inspections and ensured operational readiness and traceability"
        }
      },
      {
        "title": {
          "en": "Performed repairs, visual checks,",
          "es": "Performed repairs, visual checks,",
          "ca": "Performed repairs, visual checks,"
        },
        "desc": {
          "en": "Performed repairs, visual checks, replacement, and functional tests",
          "es": "Performed repairs, visual checks, replacement, and functional tests",
          "ca": "Performed repairs, visual checks, replacement, and functional tests"
        }
      },
      {
        "title": {
          "en": "Gained operating room insight",
          "es": "Gained operating room insight",
          "ca": "Gained operating room insight"
        },
        "desc": {
          "en": "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery",
          "es": "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery",
          "ca": "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery"
        }
      }
    ],
    "impactHeading": {
      "en": "Key contributions",
      "es": "Key contributions",
      "ca": "Key contributions"
    },
    "impactBullets": {
      "en": [
        "Documented inspections and ensured operational readiness and traceability",
        "Performed repairs, visual checks, replacement, and functional tests",
        "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery",
        "Conducted technical incoming inspections and functional checks of new medical devices and documented results.",
        "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability.",
        "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests."
      ],
      "es": [
        "Documented inspections and ensured operational readiness and traceability",
        "Performed repairs, visual checks, replacement, and functional tests",
        "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery",
        "Conducted technical incoming inspections and functional checks of new medical devices and documented results.",
        "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability.",
        "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests."
      ],
      "ca": [
        "Documented inspections and ensured operational readiness and traceability",
        "Performed repairs, visual checks, replacement, and functional tests",
        "Gained operating room insight in neurosurgery, laparoscopy, and robot-assisted surgery",
        "Conducted technical incoming inspections and functional checks of new medical devices and documented results.",
        "Supported assembly, commissioning, and safety checks while ensuring operational readiness and traceability.",
        "Handled repairs and first-level troubleshooting through visual inspection, replacement, and functional tests."
      ]
    },
    "reflectionTexts": {
      "en": [
        "This role gave Sundas practical exposure to safety-critical technical systems.",
        "It strengthened her discipline around documentation, verification, and device readiness.",
        "It broadened her technical experience beyond product data into clinical technology."
      ],
      "es": [
        "This role gave Sundas practical exposure to safety-critical technical systems.",
        "It strengthened her discipline around documentation, verification, and device readiness.",
        "It broadened her technical experience beyond product data into clinical technology."
      ],
      "ca": [
        "This role gave Sundas practical exposure to safety-critical technical systems.",
        "It strengthened her discipline around documentation, verification, and device readiness.",
        "It broadened her technical experience beyond product data into clinical technology."
      ]
    }
  },
  "viavia": {
    "heroMeta": {
      "en": "Vienna, Austria · July 2024 - August 2024",
      "es": "Vienna, Austria · July 2024 - August 2024",
      "ca": "Vienna, Austria · July 2024 - August 2024"
    },
    "contextHeading": {
      "en": "Internship · Integrated Logistics Support / Product Support",
      "es": "Internship · Integrated Logistics Support / Product Support",
      "ca": "Internship · Integrated Logistics Support / Product Support"
    },
    "contextBody": {
      "en": [
        "Schiebel develops modern UAV solutions such as the CAMCOPTER S-100 for civil and military applications in Vienna.",
        "During her internship, Sundas worked on product support, ILS documentation, master data management, ERP processes, and FMEA support."
      ],
      "es": [
        "Schiebel develops modern UAV solutions such as the CAMCOPTER S-100 for civil and military applications in Vienna.",
        "During her internship, Sundas worked on product support, ILS documentation, master data management, ERP processes, and FMEA support."
      ],
      "ca": [
        "Schiebel develops modern UAV solutions such as the CAMCOPTER S-100 for civil and military applications in Vienna.",
        "During her internship, Sundas worked on product support, ILS documentation, master data management, ERP processes, and FMEA support."
      ]
    },
    "metrics": [
      {
        "value": "July 2024",
        "label": {
          "en": "Start period",
          "es": "Start period",
          "ca": "Start period"
        }
      },
      {
        "value": "6",
        "label": {
          "en": "Core responsibilities captured",
          "es": "Core responsibilities captured",
          "ca": "Core responsibilities captured"
        }
      },
      {
        "value": "Schiebel",
        "label": {
          "en": "Schiebel ILS",
          "es": "Schiebel ILS",
          "ca": "Schiebel ILS"
        }
      }
    ],
    "challengeHeading": {
      "en": "The focus",
      "es": "The focus",
      "ca": "The focus"
    },
    "challengeBody": {
      "en": [
        "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "es": [
        "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "ca": [
        "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ]
    },
    "roleHeading": {
      "en": "Internship · Integrated Logistics Support / Product Support",
      "es": "Internship · Integrated Logistics Support / Product Support",
      "ca": "Internship · Integrated Logistics Support / Product Support"
    },
    "roleIntro": {
      "en": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
      "es": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work.",
      "ca": "Integrated Logistics Support internship at Schiebel, focused on product support, technical documentation, master data, ERP processes, and FMEA work."
    },
    "roleItems": [
      {
        "num": "01",
        "title": {
          "en": "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600",
          "es": "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600",
          "ca": "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600"
        },
        "desc": {
          "en": "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600.",
          "es": "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600.",
          "ca": "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600."
        }
      },
      {
        "num": "02",
        "title": {
          "en": "Prepared contents in a structured, consistent, and traceable way",
          "es": "Prepared contents in a structured, consistent, and traceable way",
          "ca": "Prepared contents in a structured, consistent, and traceable way"
        },
        "desc": {
          "en": "Prepared contents in a structured, consistent, and traceable way.",
          "es": "Prepared contents in a structured, consistent, and traceable way.",
          "ca": "Prepared contents in a structured, consistent, and traceable way."
        }
      },
      {
        "num": "03",
        "title": {
          "en": "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals",
          "es": "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals",
          "ca": "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals"
        },
        "desc": {
          "en": "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals.",
          "es": "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals.",
          "ca": "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals."
        }
      },
      {
        "num": "04",
        "title": {
          "en": "Created and maintained articles and materials, independently researched product properties, and entered them quality-assured into the database",
          "es": "Created and maintained articles and materials, independently researched product properties, and entered them quality-assured into the database",
          "ca": "Created and maintained articles and materials, independently researched product properties, and entered them quality-assured into the database"
        },
        "desc": {
          "en": "Created and maintained articles and materials, independently researched product properties, and entered them quality-assured into the database.",
          "es": "Created and maintained articles and materials, independently researched product properties, and entered them quality-assured into the database.",
          "ca": "Created and maintained articles and materials, independently researched product properties, and entered them quality-assured into the database."
        }
      },
      {
        "num": "05",
        "title": {
          "en": "Coordinated ERP article creation in proAlpha, checked bills of materials, reduced duplicates, and improved data quality",
          "es": "Coordinated ERP article creation in proAlpha, checked bills of materials, reduced duplicates, and improved data quality",
          "ca": "Coordinated ERP article creation in proAlpha, checked bills of materials, reduced duplicates, and improved data quality"
        },
        "desc": {
          "en": "Coordinated ERP article creation in proAlpha, checked bills of materials, reduced duplicates, and improved data quality.",
          "es": "Coordinated ERP article creation in proAlpha, checked bills of materials, reduced duplicates, and improved data quality.",
          "ca": "Coordinated ERP article creation in proAlpha, checked bills of materials, reduced duplicates, and improved data quality."
        }
      },
      {
        "num": "06",
        "title": {
          "en": "Supported an FMEA workshop according to MIL-STD-1629 by identifying risk sources, prioritizing RPN, and coordinating measures with engineering",
          "es": "Supported an FMEA workshop according to MIL-STD-1629 by identifying risk sources, prioritizing RPN, and coordinating measures with engineering",
          "ca": "Supported an FMEA workshop according to MIL-STD-1629 by identifying risk sources, prioritizing RPN, and coordinating measures with engineering"
        },
        "desc": {
          "en": "Supported an FMEA workshop according to MIL-STD-1629 by identifying risk sources, prioritizing RPN, and coordinating measures with engineering.",
          "es": "Supported an FMEA workshop according to MIL-STD-1629 by identifying risk sources, prioritizing RPN, and coordinating measures with engineering.",
          "ca": "Supported an FMEA workshop according to MIL-STD-1629 by identifying risk sources, prioritizing RPN, and coordinating measures with engineering."
        }
      }
    ],
    "focusHeading": {
      "en": "What this experience strengthened",
      "es": "What this experience strengthened",
      "ca": "What this experience strengthened"
    },
    "focusBody": {
      "en": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "es": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "ca": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ]
    },
    "focusIntro": {
      "en": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "es": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "ca": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination."
    },
    "focusItems": [
      {
        "title": {
          "en": "Worked with product and",
          "es": "Worked with product and",
          "ca": "Worked with product and"
        },
        "desc": {
          "en": "Worked with product and maintenance documentation standards",
          "es": "Worked with product and maintenance documentation standards",
          "ca": "Worked with product and maintenance documentation standards"
        }
      },
      {
        "title": {
          "en": "Created and maintained article",
          "es": "Created and maintained article",
          "ca": "Created and maintained article"
        },
        "desc": {
          "en": "Created and maintained article and material master data",
          "es": "Created and maintained article and material master data",
          "ca": "Created and maintained article and material master data"
        }
      },
      {
        "title": {
          "en": "Supported ERP article creation,",
          "es": "Supported ERP article creation,",
          "ca": "Supported ERP article creation,"
        },
        "desc": {
          "en": "Supported ERP article creation, BOM checks, and FMEA risk analysis",
          "es": "Supported ERP article creation, BOM checks, and FMEA risk analysis",
          "ca": "Supported ERP article creation, BOM checks, and FMEA risk analysis"
        }
      }
    ],
    "impactHeading": {
      "en": "Key contributions",
      "es": "Key contributions",
      "ca": "Key contributions"
    },
    "impactBullets": {
      "en": [
        "Worked with product and maintenance documentation standards",
        "Created and maintained article and material master data",
        "Supported ERP article creation, BOM checks, and FMEA risk analysis",
        "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600.",
        "Prepared contents in a structured, consistent, and traceable way.",
        "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals."
      ],
      "es": [
        "Worked with product and maintenance documentation standards",
        "Created and maintained article and material master data",
        "Supported ERP article creation, BOM checks, and FMEA risk analysis",
        "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600.",
        "Prepared contents in a structured, consistent, and traceable way.",
        "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals."
      ],
      "ca": [
        "Worked with product and maintenance documentation standards",
        "Created and maintained article and material master data",
        "Supported ERP article creation, BOM checks, and FMEA risk analysis",
        "Collaborated on product-relevant and maintenance-relevant documents according to ASD S2000M/S3000L and DEF-STAN 00-600.",
        "Prepared contents in a structured, consistent, and traceable way.",
        "Researched functions, assemblies, and maintenance procedures for user-friendly documentation and maintenance manuals."
      ]
    },
    "reflectionTexts": {
      "en": [
        "This internship gave Sundas in-depth knowledge of product support and technical documentation.",
        "It strengthened her comfort with PLM/ERP-style data workflows and aerospace standards.",
        "It connected her aerospace interest with practical UAV product support processes."
      ],
      "es": [
        "This internship gave Sundas in-depth knowledge of product support and technical documentation.",
        "It strengthened her comfort with PLM/ERP-style data workflows and aerospace standards.",
        "It connected her aerospace interest with practical UAV product support processes."
      ],
      "ca": [
        "This internship gave Sundas in-depth knowledge of product support and technical documentation.",
        "It strengthened her comfort with PLM/ERP-style data workflows and aerospace standards.",
        "It connected her aerospace interest with practical UAV product support processes."
      ]
    }
  },
  "fourlink": {
      "heroMeta": {
          "en": "Austria - Precision engineering context",
          "es": "Austria - Precision engineering context",
          "ca": "Austria - Precision engineering context"
      },
      "contextHeading": {
          "en": "Glock - Precision Engineering",
          "es": "Glock - Precision Engineering",
          "ca": "Glock - Precision Engineering"
      },
      "contextBody": {
          "en": [
              "This featured experience highlights a precision engineering context connected to disciplined technical work, quality awareness, documentation, and structured industrial processes.",
              "It fits Sundas' wider profile across product data, technical systems, stakeholder coordination, and traceable engineering workflows."
          ],
          "es": [
              "This featured experience highlights a precision engineering context connected to disciplined technical work, quality awareness, documentation, and structured industrial processes.",
              "It fits Sundas' wider profile across product data, technical systems, stakeholder coordination, and traceable engineering workflows."
          ],
          "ca": [
              "This featured experience highlights a precision engineering context connected to disciplined technical work, quality awareness, documentation, and structured industrial processes.",
              "It fits Sundas' wider profile across product data, technical systems, stakeholder coordination, and traceable engineering workflows."
          ]
      },
      "metrics": [
          {
              "value": "Glock",
              "label": {
                  "en": "Featured organization",
                  "es": "Featured organization",
                  "ca": "Featured organization"
              }
          },
          {
              "value": "Quality",
              "label": {
                  "en": "Core focus",
                  "es": "Core focus",
                  "ca": "Core focus"
              }
          },
          {
              "value": "Precision",
              "label": {
                  "en": "Engineering context",
                  "es": "Engineering context",
                  "ca": "Engineering context"
              }
          }
      ],
      "challengeHeading": {
          "en": "The focus",
          "es": "The focus",
          "ca": "The focus"
      },
      "challengeBody": {
          "en": [
              "Precision engineering environments depend on clear documentation, repeatable processes, quality controls, and careful communication across technical interfaces.",
              "The experience is presented as part of Sundas' broader technical portfolio, emphasizing structured execution and quality-minded engineering work."
          ],
          "es": [
              "Precision engineering environments depend on clear documentation, repeatable processes, quality controls, and careful communication across technical interfaces.",
              "The experience is presented as part of Sundas' broader technical portfolio, emphasizing structured execution and quality-minded engineering work."
          ],
          "ca": [
              "Precision engineering environments depend on clear documentation, repeatable processes, quality controls, and careful communication across technical interfaces.",
              "The experience is presented as part of Sundas' broader technical portfolio, emphasizing structured execution and quality-minded engineering work."
          ]
      },
      "roleHeading": {
          "en": "Precision engineering context",
          "es": "Precision engineering context",
          "ca": "Precision engineering context"
      },
      "roleIntro": {
          "en": "The focus areas connect quality awareness, technical documentation, traceability, and disciplined industrial execution.",
          "es": "The focus areas connect quality awareness, technical documentation, traceability, and disciplined industrial execution.",
          "ca": "The focus areas connect quality awareness, technical documentation, traceability, and disciplined industrial execution."
      },
      "roleItems": [
          {
              "num": "01",
              "title": {
                  "en": "Worked in a precision-oriented engineering context with attention to quality and consistency.",
                  "es": "Worked in a precision-oriented engineering context with attention to quality and consistency.",
                  "ca": "Worked in a precision-oriented engineering context with attention to quality and consistency."
              },
              "desc": {
                  "en": "Worked in a precision-oriented engineering context with attention to quality and consistency.",
                  "es": "Worked in a precision-oriented engineering context with attention to quality and consistency.",
                  "ca": "Worked in a precision-oriented engineering context with attention to quality and consistency."
              }
          },
          {
              "num": "02",
              "title": {
                  "en": "Connected technical documentation habits with traceable industrial processes.",
                  "es": "Connected technical documentation habits with traceable industrial processes.",
                  "ca": "Connected technical documentation habits with traceable industrial processes."
              },
              "desc": {
                  "en": "Connected technical documentation habits with traceable industrial processes.",
                  "es": "Connected technical documentation habits with traceable industrial processes.",
                  "ca": "Connected technical documentation habits with traceable industrial processes."
              }
          },
          {
              "num": "03",
              "title": {
                  "en": "Applied disciplined execution across structured technical workflows.",
                  "es": "Applied disciplined execution across structured technical workflows.",
                  "ca": "Applied disciplined execution across structured technical workflows."
              },
              "desc": {
                  "en": "Applied disciplined execution across structured technical workflows.",
                  "es": "Applied disciplined execution across structured technical workflows.",
                  "ca": "Applied disciplined execution across structured technical workflows."
              }
          },
          {
              "num": "04",
              "title": {
                  "en": "Strengthened awareness of how precision, repeatability, and documentation support reliable engineering outcomes.",
                  "es": "Strengthened awareness of how precision, repeatability, and documentation support reliable engineering outcomes.",
                  "ca": "Strengthened awareness of how precision, repeatability, and documentation support reliable engineering outcomes."
              },
              "desc": {
                  "en": "Strengthened awareness of how precision, repeatability, and documentation support reliable engineering outcomes.",
                  "es": "Strengthened awareness of how precision, repeatability, and documentation support reliable engineering outcomes.",
                  "ca": "Strengthened awareness of how precision, repeatability, and documentation support reliable engineering outcomes."
              }
          }
      ],
      "focusHeading": {
          "en": "What this experience strengthened",
          "es": "What this experience strengthened",
          "ca": "What this experience strengthened"
      },
      "focusBody": {
          "en": [
              "This experience reinforces Sundas' technical system understanding and attention to documentation quality.",
              "It supports a profile that combines product data, engineering context, process reliability, and stakeholder coordination."
          ],
          "es": [
              "This experience reinforces Sundas' technical system understanding and attention to documentation quality.",
              "It supports a profile that combines product data, engineering context, process reliability, and stakeholder coordination."
          ],
          "ca": [
              "This experience reinforces Sundas' technical system understanding and attention to documentation quality.",
              "It supports a profile that combines product data, engineering context, process reliability, and stakeholder coordination."
          ]
      },
      "focusIntro": {
          "en": "Focus areas include precision engineering context, quality awareness, documentation, and traceability.",
          "es": "Focus areas include precision engineering context, quality awareness, documentation, and traceability.",
          "ca": "Focus areas include precision engineering context, quality awareness, documentation, and traceability."
      },
      "focusItems": [
          {
              "title": {
                  "en": "Quality awareness",
                  "es": "Quality awareness",
                  "ca": "Quality awareness"
              },
              "desc": {
                  "en": "Quality-focused industrial processes",
                  "es": "Quality-focused industrial processes",
                  "ca": "Quality-focused industrial processes"
              }
          },
          {
              "title": {
                  "en": "Documentation",
                  "es": "Documentation",
                  "ca": "Documentation"
              },
              "desc": {
                  "en": "Structured technical documentation and traceability",
                  "es": "Structured technical documentation and traceability",
                  "ca": "Structured technical documentation and traceability"
              }
          },
          {
              "title": {
                  "en": "Precision context",
                  "es": "Precision context",
                  "ca": "Precision context"
              },
              "desc": {
                  "en": "Precision engineering context and disciplined execution",
                  "es": "Precision engineering context and disciplined execution",
                  "ca": "Precision engineering context and disciplined execution"
              }
          }
      ],
      "impactHeading": {
          "en": "Key contributions",
          "es": "Key contributions",
          "ca": "Key contributions"
      },
      "impactBullets": {
          "en": [
              "Quality-focused industrial processes",
              "Structured technical documentation and traceability",
              "Precision engineering context and disciplined execution",
              "Technical system thinking applied to practical industrial workflows",
              "Process reliability and careful communication across technical contexts"
          ],
          "es": [
              "Quality-focused industrial processes",
              "Structured technical documentation and traceability",
              "Precision engineering context and disciplined execution",
              "Technical system thinking applied to practical industrial workflows",
              "Process reliability and careful communication across technical contexts"
          ],
          "ca": [
              "Quality-focused industrial processes",
              "Structured technical documentation and traceability",
              "Precision engineering context and disciplined execution",
              "Technical system thinking applied to practical industrial workflows",
              "Process reliability and careful communication across technical contexts"
          ]
      },
      "reflectionTexts": {
          "en": [
              "This featured experience adds a precision engineering layer to Sundas' portfolio.",
              "It complements her network engineering, aerospace, medical technology, and STEM leadership work.",
              "It reinforces the recurring theme of quality, traceability, and disciplined technical execution."
          ],
          "es": [
              "This featured experience adds a precision engineering layer to Sundas' portfolio.",
              "It complements her network engineering, aerospace, medical technology, and STEM leadership work.",
              "It reinforces the recurring theme of quality, traceability, and disciplined technical execution."
          ],
          "ca": [
              "This featured experience adds a precision engineering layer to Sundas' portfolio.",
              "It complements her network engineering, aerospace, medical technology, and STEM leadership work.",
              "It reinforces the recurring theme of quality, traceability, and disciplined technical execution."
          ]
      }
  },
  "affinity": {
    "heroMeta": {
      "en": "Austria · July 2022 - August 2022",
      "es": "Austria · July 2022 - August 2022",
      "ca": "Austria · July 2022 - August 2022"
    },
    "contextHeading": {
      "en": "Thematic Programs",
      "es": "Thematic Programs",
      "ca": "Thematic Programs"
    },
    "contextBody": {
      "en": [
        "At FFG, Sundas supported thematic programs connected to aviation, energy transition, project data, funding documents, event organization, calls for proposals, and roadmaps.",
        "The work required cross-departmental coordination, data validation, research, concise dossiers, and structured preparation of program information."
      ],
      "es": [
        "At FFG, Sundas supported thematic programs connected to aviation, energy transition, project data, funding documents, event organization, calls for proposals, and roadmaps.",
        "The work required cross-departmental coordination, data validation, research, concise dossiers, and structured preparation of program information."
      ],
      "ca": [
        "At FFG, Sundas supported thematic programs connected to aviation, energy transition, project data, funding documents, event organization, calls for proposals, and roadmaps.",
        "The work required cross-departmental coordination, data validation, research, concise dossiers, and structured preparation of program information."
      ]
    },
    "metrics": [
      {
        "value": "July 2022",
        "label": {
          "en": "Start period",
          "es": "Start period",
          "ca": "Start period"
        }
      },
      {
        "value": "7",
        "label": {
          "en": "Core responsibilities captured",
          "es": "Core responsibilities captured",
          "ca": "Core responsibilities captured"
        }
      },
      {
        "value": "FFG",
        "label": {
          "en": "FFG",
          "es": "FFG",
          "ca": "FFG"
        }
      }
    ],
    "challengeHeading": {
      "en": "The focus",
      "es": "The focus",
      "ca": "The focus"
    },
    "challengeBody": {
      "en": [
        "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "es": [
        "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "ca": [
        "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ]
    },
    "roleHeading": {
      "en": "Thematic Programs",
      "es": "Thematic Programs",
      "ca": "Thematic Programs"
    },
    "roleIntro": {
      "en": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
      "es": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps.",
      "ca": "Cross-departmental program support for aviation, energy transition, project data management, dossiers, events, calls, and research roadmaps."
    },
    "roleItems": [
      {
        "num": "01",
        "title": {
          "en": "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages",
          "es": "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages",
          "ca": "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages"
        },
        "desc": {
          "en": "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages.",
          "es": "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages.",
          "ca": "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages."
        }
      },
      {
        "num": "02",
        "title": {
          "en": "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents",
          "es": "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents",
          "ca": "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents"
        },
        "desc": {
          "en": "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents.",
          "es": "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents.",
          "ca": "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents."
        }
      },
      {
        "num": "03",
        "title": {
          "en": "Administered ECSEL documents of the EU Commission",
          "es": "Administered ECSEL documents of the EU Commission",
          "ca": "Administered ECSEL documents of the EU Commission"
        },
        "desc": {
          "en": "Administered ECSEL documents of the EU Commission.",
          "es": "Administered ECSEL documents of the EU Commission.",
          "ca": "Administered ECSEL documents of the EU Commission."
        }
      },
      {
        "num": "04",
        "title": {
          "en": "Created short economic and technical dossiers on aviation companies for the Federal Ministry",
          "es": "Created short economic and technical dossiers on aviation companies for the Federal Ministry",
          "ca": "Created short economic and technical dossiers on aviation companies for the Federal Ministry"
        },
        "desc": {
          "en": "Created short economic and technical dossiers on aviation companies for the Federal Ministry.",
          "es": "Created short economic and technical dossiers on aviation companies for the Federal Ministry.",
          "ca": "Created short economic and technical dossiers on aviation companies for the Federal Ministry."
        }
      },
      {
        "num": "05",
        "title": {
          "en": "Provided organizational support for the Austrian Aviation Forum 2022",
          "es": "Provided organizational support for the Austrian Aviation Forum 2022",
          "ca": "Provided organizational support for the Austrian Aviation Forum 2022"
        },
        "desc": {
          "en": "Provided organizational support for the Austrian Aviation Forum 2022.",
          "es": "Provided organizational support for the Austrian Aviation Forum 2022.",
          "ca": "Provided organizational support for the Austrian Aviation Forum 2022."
        }
      },
      {
        "num": "06",
        "title": {
          "en": "Researched, structured, and prepared information on the TAKE OFF call for proposals for Switzerland",
          "es": "Researched, structured, and prepared information on the TAKE OFF call for proposals for Switzerland",
          "ca": "Researched, structured, and prepared information on the TAKE OFF call for proposals for Switzerland"
        },
        "desc": {
          "en": "Researched, structured, and prepared information on the TAKE OFF call for proposals for Switzerland.",
          "es": "Researched, structured, and prepared information on the TAKE OFF call for proposals for Switzerland.",
          "ca": "Researched, structured, and prepared information on the TAKE OFF call for proposals for Switzerland."
        }
      },
      {
        "num": "07",
        "title": {
          "en": "Created an analytical action plan and overview for Real-world Laboratory - City of the Future, energy research, and climate-neutral city topics",
          "es": "Created an analytical action plan and overview for Real-world Laboratory - City of the Future, energy research, and climate-neutral city topics",
          "ca": "Created an analytical action plan and overview for Real-world Laboratory - City of the Future, energy research, and climate-neutral city topics"
        },
        "desc": {
          "en": "Created an analytical action plan and overview for Real-world Laboratory - City of the Future, energy research, and climate-neutral city topics.",
          "es": "Created an analytical action plan and overview for Real-world Laboratory - City of the Future, energy research, and climate-neutral city topics.",
          "ca": "Created an analytical action plan and overview for Real-world Laboratory - City of the Future, energy research, and climate-neutral city topics."
        }
      }
    ],
    "focusHeading": {
      "en": "What this experience strengthened",
      "es": "What this experience strengthened",
      "ca": "What this experience strengthened"
    },
    "focusBody": {
      "en": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "es": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "ca": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ]
    },
    "focusIntro": {
      "en": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "es": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "ca": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination."
    },
    "focusItems": [
      {
        "title": {
          "en": "Aligned aviation and energy-transition",
          "es": "Aligned aviation and energy-transition",
          "ca": "Aligned aviation and energy-transition"
        },
        "desc": {
          "en": "Aligned aviation and energy-transition content across departments",
          "es": "Aligned aviation and energy-transition content across departments",
          "ca": "Aligned aviation and energy-transition content across departments"
        }
      },
      {
        "title": {
          "en": "Validated project data and",
          "es": "Validated project data and",
          "ca": "Validated project data and"
        },
        "desc": {
          "en": "Validated project data and funding documents",
          "es": "Validated project data and funding documents",
          "ca": "Validated project data and funding documents"
        }
      },
      {
        "title": {
          "en": "Supported aviation dossiers, event",
          "es": "Supported aviation dossiers, event",
          "ca": "Supported aviation dossiers, event"
        },
        "desc": {
          "en": "Supported aviation dossiers, event work, calls, and roadmap research",
          "es": "Supported aviation dossiers, event work, calls, and roadmap research",
          "ca": "Supported aviation dossiers, event work, calls, and roadmap research"
        }
      }
    ],
    "impactHeading": {
      "en": "Key contributions",
      "es": "Key contributions",
      "ca": "Key contributions"
    },
    "impactBullets": {
      "en": [
        "Aligned aviation and energy-transition content across departments",
        "Validated project data and funding documents",
        "Supported aviation dossiers, event work, calls, and roadmap research",
        "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages.",
        "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents.",
        "Administered ECSEL documents of the EU Commission."
      ],
      "es": [
        "Aligned aviation and energy-transition content across departments",
        "Validated project data and funding documents",
        "Supported aviation dossiers, event work, calls, and roadmap research",
        "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages.",
        "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents.",
        "Administered ECSEL documents of the EU Commission."
      ],
      "ca": [
        "Aligned aviation and energy-transition content across departments",
        "Validated project data and funding documents",
        "Supported aviation dossiers, event work, calls, and roadmap research",
        "Worked cross-departmentally with aviation and energy transition, aligned contents, and coordinated work packages.",
        "Obtained, validated, and maintained project data in databases and cross-checked it with funding documents.",
        "Administered ECSEL documents of the EU Commission."
      ]
    },
    "reflectionTexts": {
      "en": [
        "This experience strengthened Sundas' research and program-support skills.",
        "It connected aerospace, energy transition, and public funding contexts.",
        "It reinforced her ability to turn complex information into concise, useful outputs."
      ],
      "es": [
        "This experience strengthened Sundas' research and program-support skills.",
        "It connected aerospace, energy transition, and public funding contexts.",
        "It reinforced her ability to turn complex information into concise, useful outputs."
      ],
      "ca": [
        "This experience strengthened Sundas' research and program-support skills.",
        "It connected aerospace, energy transition, and public funding contexts.",
        "It reinforced her ability to turn complex information into concise, useful outputs."
      ]
    }
  },
  "tao": {
    "heroMeta": {
      "en": "Vienna, Austria · July 2019 - August 2019",
      "es": "Vienna, Austria · July 2019 - August 2019",
      "ca": "Vienna, Austria · July 2019 - August 2019"
    },
    "contextHeading": {
      "en": "Sales and Service · Safety Management",
      "es": "Sales and Service · Safety Management",
      "ca": "Sales and Service · Safety Management"
    },
    "contextBody": {
      "en": [
        "Sundas built early professional experience through Sales and Service at UniCredit Bank Austria and Safety Management at Austro Control.",
        "These roles included customer care, self-service device checks, administrative procedures, service quality work, TOKAI, airspace infringement data preparation, ASOR technical failure processing, and technical ticket systems."
      ],
      "es": [
        "Sundas built early professional experience through Sales and Service at UniCredit Bank Austria and Safety Management at Austro Control.",
        "These roles included customer care, self-service device checks, administrative procedures, service quality work, TOKAI, airspace infringement data preparation, ASOR technical failure processing, and technical ticket systems."
      ],
      "ca": [
        "Sundas built early professional experience through Sales and Service at UniCredit Bank Austria and Safety Management at Austro Control.",
        "These roles included customer care, self-service device checks, administrative procedures, service quality work, TOKAI, airspace infringement data preparation, ASOR technical failure processing, and technical ticket systems."
      ]
    },
    "metrics": [
      {
        "value": "July 2019",
        "label": {
          "en": "Start period",
          "es": "Start period",
          "ca": "Start period"
        }
      },
      {
        "value": "8",
        "label": {
          "en": "Core responsibilities captured",
          "es": "Core responsibilities captured",
          "ca": "Core responsibilities captured"
        }
      },
      {
        "value": "2019 Roles",
        "label": {
          "en": "Early Technical Roles",
          "es": "Early Technical Roles",
          "ca": "Early Technical Roles"
        }
      }
    ],
    "challengeHeading": {
      "en": "The focus",
      "es": "The focus",
      "ca": "The focus"
    },
    "challengeBody": {
      "en": [
        "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "es": [
        "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ],
      "ca": [
        "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
        "The work required structured communication, technical understanding, clear documentation, and reliable process follow-through."
      ]
    },
    "roleHeading": {
      "en": "Sales and Service · Safety Management",
      "es": "Sales and Service · Safety Management",
      "ca": "Sales and Service · Safety Management"
    },
    "roleIntro": {
      "en": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
      "es": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes.",
      "ca": "Early service and safety-management roles covering branch customer service, self-service device checks, ATM occurrence data, and technical ticket processes."
    },
    "roleItems": [
      {
        "num": "01",
        "title": {
          "en": "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office",
          "es": "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office",
          "ca": "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office"
        },
        "desc": {
          "en": "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office.",
          "es": "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office.",
          "ca": "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office."
        }
      },
      {
        "num": "02",
        "title": {
          "en": "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation",
          "es": "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation",
          "ca": "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation"
        },
        "desc": {
          "en": "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation.",
          "es": "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation.",
          "ca": "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation."
        }
      },
      {
        "num": "03",
        "title": {
          "en": "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents",
          "es": "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents",
          "ca": "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents"
        },
        "desc": {
          "en": "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents.",
          "es": "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents.",
          "ca": "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents."
        }
      },
      {
        "num": "04",
        "title": {
          "en": "Improved waiting times and first-resolution rate while gathering customer feedback",
          "es": "Improved waiting times and first-resolution rate while gathering customer feedback",
          "ca": "Improved waiting times and first-resolution rate while gathering customer feedback"
        },
        "desc": {
          "en": "Improved waiting times and first-resolution rate while gathering customer feedback.",
          "es": "Improved waiting times and first-resolution rate while gathering customer feedback.",
          "ca": "Improved waiting times and first-resolution rate while gathering customer feedback."
        }
      },
      {
        "num": "05",
        "title": {
          "en": "Worked with TOKAI, the Toolkit for ATM Occurrence Investigation by EUROCONTROL",
          "es": "Worked with TOKAI, the Toolkit for ATM Occurrence Investigation by EUROCONTROL",
          "ca": "Worked with TOKAI, the Toolkit for ATM Occurrence Investigation by EUROCONTROL"
        },
        "desc": {
          "en": "Worked with TOKAI, the Toolkit for ATM Occurrence Investigation by EUROCONTROL.",
          "es": "Worked with TOKAI, the Toolkit for ATM Occurrence Investigation by EUROCONTROL.",
          "ca": "Worked with TOKAI, the Toolkit for ATM Occurrence Investigation by EUROCONTROL."
        }
      },
      {
        "num": "06",
        "title": {
          "en": "Prepared data for airspace infringements for Season Opener",
          "es": "Prepared data for airspace infringements for Season Opener",
          "ca": "Prepared data for airspace infringements for Season Opener"
        },
        "desc": {
          "en": "Prepared data for airspace infringements for Season Opener.",
          "es": "Prepared data for airspace infringements for Season Opener.",
          "ca": "Prepared data for airspace infringements for Season Opener."
        }
      },
      {
        "num": "07",
        "title": {
          "en": "Processed technical failures with ASOR in the air traffic control occurrence-reporting process",
          "es": "Processed technical failures with ASOR in the air traffic control occurrence-reporting process",
          "ca": "Processed technical failures with ASOR in the air traffic control occurrence-reporting process"
        },
        "desc": {
          "en": "Processed technical failures with ASOR in the air traffic control occurrence-reporting process.",
          "es": "Processed technical failures with ASOR in the air traffic control occurrence-reporting process.",
          "ca": "Processed technical failures with ASOR in the air traffic control occurrence-reporting process."
        }
      },
      {
        "num": "08",
        "title": {
          "en": "Used ticket systems for technical faults",
          "es": "Used ticket systems for technical faults",
          "ca": "Used ticket systems for technical faults"
        },
        "desc": {
          "en": "Used ticket systems for technical faults.",
          "es": "Used ticket systems for technical faults.",
          "ca": "Used ticket systems for technical faults."
        }
      }
    ],
    "focusHeading": {
      "en": "What this experience strengthened",
      "es": "What this experience strengthened",
      "ca": "What this experience strengthened"
    },
    "focusBody": {
      "en": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "es": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ],
      "ca": [
        "This experience strengthened Sundas' technical system understanding, communication, and process-oriented execution.",
        "It contributes to a profile that combines product data, engineering context, documentation, quality, and stakeholder coordination."
      ]
    },
    "focusIntro": {
      "en": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "es": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination.",
      "ca": "Focus areas include technical detail, documentation quality, process reliability, and cross-functional coordination."
    },
    "focusItems": [
      {
        "title": {
          "en": "Customer care and consulting",
          "es": "Customer care and consulting",
          "ca": "Customer care and consulting"
        },
        "desc": {
          "en": "Customer care and consulting at UniCredit Bank Austria",
          "es": "Customer care and consulting at UniCredit Bank Austria",
          "ca": "Customer care and consulting at UniCredit Bank Austria"
        }
      },
      {
        "title": {
          "en": "First-line maintenance on self-service",
          "es": "First-line maintenance on self-service",
          "ca": "First-line maintenance on self-service"
        },
        "desc": {
          "en": "First-line maintenance on self-service devices and receipt printers",
          "es": "First-line maintenance on self-service devices and receipt printers",
          "ca": "First-line maintenance on self-service devices and receipt printers"
        }
      },
      {
        "title": {
          "en": "TOKAI, ASOR, airspace infringement",
          "es": "TOKAI, ASOR, airspace infringement",
          "ca": "TOKAI, ASOR, airspace infringement"
        },
        "desc": {
          "en": "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control",
          "es": "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control",
          "ca": "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control"
        }
      }
    ],
    "impactHeading": {
      "en": "Key contributions",
      "es": "Key contributions",
      "ca": "Key contributions"
    },
    "impactBullets": {
      "en": [
        "Customer care and consulting at UniCredit Bank Austria",
        "First-line maintenance on self-service devices and receipt printers",
        "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control",
        "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office.",
        "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation.",
        "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents."
      ],
      "es": [
        "Customer care and consulting at UniCredit Bank Austria",
        "First-line maintenance on self-service devices and receipt printers",
        "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control",
        "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office.",
        "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation.",
        "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents."
      ],
      "ca": [
        "Customer care and consulting at UniCredit Bank Austria",
        "First-line maintenance on self-service devices and receipt printers",
        "TOKAI, ASOR, airspace infringement data, and technical ticket systems at Austro Control",
        "Qualified customer concerns in the branch, offered initial solutions, and transferred cases to specialist consulting or back office.",
        "Performed first-line maintenance on self-service devices and receipt printers through visual inspection, consumables checks, restart, functional tests, and fault documentation.",
        "Recorded transactions in CRM/ticket systems, planned resubmissions, and checked and filed forms and ID documents."
      ]
    },
    "reflectionTexts": {
      "en": [
        "These roles gave Sundas early experience in service quality and technical process reliability.",
        "They reinforced the importance of clear documentation and operational readiness.",
        "They introduced aviation safety management before her later aerospace-oriented studies and network work."
      ],
      "es": [
        "These roles gave Sundas early experience in service quality and technical process reliability.",
        "They reinforced the importance of clear documentation and operational readiness.",
        "They introduced aviation safety management before her later aerospace-oriented studies and network work."
      ],
      "ca": [
        "These roles gave Sundas early experience in service quality and technical process reliability.",
        "They reinforced the importance of clear documentation and operational readiness.",
        "They introduced aviation safety management before her later aerospace-oriented studies and network work."
      ]
    }
  }
};
function je(e, t) {
  const i = G0[e];
  if (!i) throw new Error(`Unknown project slug: ${e}`);
  return {
    heroMeta: i.heroMeta?.[t],
    contextHeading: i.contextHeading[t],
    contextBody: i.contextBody[t],
    metrics: i.metrics?.map((n) => ({ value: typeof n.value == "string" ? n.value : n.value[t], label: n.label[t] })),
    challengeHeading: i.challengeHeading[t],
    challengeBody: i.challengeBody[t],
    roleHeading: i.roleHeading[t],
    roleIntro: i.roleIntro?.[t],
    roleItems: i.roleItems.map((n) => ({ num: n.num, title: n.title[t], desc: n.desc[t] })),
    roleListItems: i.roleListItems?.[t],
    focusHeading: i.focusHeading[t],
    focusBody: i.focusBody[t],
    focusIntro: i.focusIntro?.[t],
    focusItems: i.focusItems?.map((n) => ({ title: n.title[t], desc: n.desc[t] })),
    impactHeading: i.impactHeading[t],
    impactBullets: i.impactBullets[t],
    reflectionTexts: i.reflectionTexts[t]
  };
}
const K0 = [0.22, 1, 0.36, 1];
function qe({ isMobile: e }) {
  const t = I(null), i = M(t, { once: !0, margin: "-40px" }), { lang: n } = V();
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: t,
      "data-confidentiality-note": !0,
      initial: { opacity: 0, y: 16 },
      animate: i ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.7, ease: K0 },
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: e ? "10px" : "12px",
        paddingTop: e ? "14px" : "16px",
        paddingBottom: e ? "14px" : "16px",
        paddingLeft: e ? "14px" : "18px",
        paddingRight: e ? "14px" : "18px",
        borderLeft: "2px solid rgba(255,255,255,0.08)",
        marginBottom: e ? "48px" : "80px"
      },
      children: [
        /* @__PURE__ */ p(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            style: { flexShrink: 0, marginTop: "1px" },
            children: [
              /* @__PURE__ */ s(
                "path",
                {
                  d: "M8 1.333L3 3.333v3.334C3 9.867 5.133 12.8 8 14c2.867-1.2 5-4.133 5-7.333V3.333L8 1.333z",
                  stroke: "rgba(255,255,255,0.3)",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ s(
                "path",
                {
                  d: "M6 7.667l1.333 1.333L10 6",
                  stroke: "rgba(255,255,255,0.3)",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(
          "p",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(11px, 0.8vw, 13px)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(242,242,242,0.5)",
              margin: 0
            },
            children: f("detail.confidentiality", n)
          }
        )
      ]
    }
  );
}
const Tl = Pe({
  isLight: !1,
  toggle: () => {
  }
}), Io = "detail-theme-light";
function bi(e) {
  return e ? !!(/rgba?\(\s*(2[0-4]\d|25[0-5])/.test(e) || /^#[fFeEdDcC]/.test(e) || e === "white" || e === "#fff" || e === "#ffffff") : !1;
}
function wi(e) {
  if (!e) return !1;
  const t = e.toLowerCase();
  return t.includes("#00b6b6") || t.includes("0, 182, 182") || t.includes("0,182,182");
}
const Z0 = /* @__PURE__ */ new Set([
  "P",
  "SPAN",
  "DIV",
  "LI",
  "A",
  "BUTTON",
  "LABEL",
  "STRONG",
  "EM",
  "B",
  "I",
  "BLOCKQUOTE",
  "FIGCAPTION",
  "TD",
  "TH",
  "DT",
  "DD",
  "SMALL",
  "CITE",
  "TIME",
  "SECTION",
  "ARTICLE",
  "ASIDE",
  "HEADER",
  "FOOTER",
  "NAV",
  "UL",
  "OL"
]), Y0 = /* @__PURE__ */ new Set(["IMG", "VIDEO", "CANVAS", "IFRAME"]), Q0 = /* @__PURE__ */ new Set([
  "PATH",
  "CIRCLE",
  "LINE",
  "POLYLINE",
  "RECT",
  "ELLIPSE",
  "POLYGON"
]), Gi = [
  "border-color",
  "border-top-color",
  "border-right-color",
  "border-bottom-color",
  "border-left-color"
], Il = [
  "lmOba",
  // border-color (all)
  "lmObt",
  // border-top-color
  "lmObr",
  // border-right-color
  "lmObb",
  // border-bottom-color
  "lmObl"
  // border-left-color
];
function J0(e) {
  const t = (i) => {
    const n = i.tagName;
    if (Y0.has(n)) return;
    if (Q0.has(n)) {
      const o = i.getAttribute("stroke");
      o && bi(o) && (i.dataset.lmOs === void 0 && (i.dataset.lmOs = o), i.setAttribute("stroke", "rgba(0,0,0,0.35)"));
      const r = i.getAttribute("fill");
      r && r !== "none" && bi(r) && (i.dataset.lmOf === void 0 && (i.dataset.lmOf = r), i.setAttribute("fill", "#333333"));
      return;
    }
    if (n === "SVG" || n === "G" || n === "DEFS" || n === "FILTER" || n === "FETURBULENCE" || n === "FEMORPHOLOGY") return;
    if (!(i.style.getPropertyPriority("color") === "important")) {
      const o = i.style.getPropertyValue("color");
      if (o) {
        if (wi(o) || bi(o)) {
          i.dataset.lmOc === void 0 && (i.dataset.lmOc = o);
          const r = wi(o) ? "#007A7A" : n === "H1" || n === "H2" || n === "H3" ? "#1A1A1A" : "#333333";
          i.style.setProperty("color", r, "important");
        }
      } else
        n === "H1" || n === "H2" || n === "H3" ? (i.dataset.lmOc === void 0 && (i.dataset.lmOc = ""), i.style.setProperty("color", "#1A1A1A", "important")) : Z0.has(n) && (i.dataset.lmOc === void 0 && (i.dataset.lmOc = ""), i.style.setProperty("color", "#333333", "important"));
    }
    if (i.style.getPropertyPriority("background-color") !== "important") {
      const o = i.style.getPropertyValue("background-color");
      o && (wi(o) ? (i.dataset.lmOb === void 0 && (i.dataset.lmOb = o), i.style.setProperty("background-color", "#007A7A", "important")) : o.includes("rgba(255") && !o.includes("rgba(255, 255, 255, 1)") && (i.dataset.lmOb === void 0 && (i.dataset.lmOb = o), i.style.setProperty("background-color", "rgba(0,0,0,0.03)", "important")));
    }
    for (let o = 0; o < Gi.length; o++) {
      const r = Gi[o], l = Il[o];
      if (i.style.getPropertyPriority(r) === "important") continue;
      const c = i.style.getPropertyValue(r);
      c && (wi(c) ? (i.dataset[l] === void 0 && (i.dataset[l] = c), i.style.setProperty(r, "#007A7A", "important")) : bi(c) && (i.dataset[l] === void 0 && (i.dataset[l] = c), i.style.setProperty(r, "rgba(0,0,0,0.15)", "important")));
    }
  };
  t(e), e.querySelectorAll("*").forEach((i) => t(i));
}
function ef(e) {
  const t = (i) => {
    i.dataset.lmOc !== void 0 && (i.dataset.lmOc ? i.style.setProperty("color", i.dataset.lmOc) : i.style.removeProperty("color"), delete i.dataset.lmOc), i.dataset.lmOb !== void 0 && (i.dataset.lmOb ? i.style.setProperty("background-color", i.dataset.lmOb) : i.style.removeProperty("background-color"), delete i.dataset.lmOb);
    for (let n = 0; n < Gi.length; n++) {
      const a = Gi[n], o = Il[n];
      i.dataset[o] !== void 0 && (i.dataset[o] ? i.style.setProperty(a, i.dataset[o]) : i.style.removeProperty(a), delete i.dataset[o]);
    }
    i.dataset.lmOs !== void 0 && (i.setAttribute("stroke", i.dataset.lmOs), delete i.dataset.lmOs), i.dataset.lmOf !== void 0 && (i.setAttribute("fill", i.dataset.lmOf), delete i.dataset.lmOf);
  };
  t(e), e.querySelectorAll("*").forEach((i) => t(i));
}
function tf({
  children: e
}) {
  const [t, i] = T(() => {
    try {
      return localStorage.getItem(Io) === "true";
    } catch {
      return !1;
    }
  }), n = I(t);
  n.current = t;
  const a = I(!1);
  B(() => {
    try {
      localStorage.setItem(Io, String(t));
    } catch {
    }
  }, [t]), B(() => {
    function r() {
      return Array.from(
        document.querySelectorAll("[data-content-section], [data-page-footer]")
      );
    }
    function l() {
      if (!(!n.current || a.current)) {
        a.current = !0;
        try {
          r().forEach(J0);
        } finally {
          a.current = !1;
        }
      }
    }
    function c() {
      a.current = !0;
      try {
        r().forEach(ef);
      } finally {
        a.current = !1;
      }
    }
    if (t) {
      l();
      const d = new MutationObserver(() => {
        !n.current || a.current || requestAnimationFrame(l);
      });
      d.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["style", "stroke", "fill"]
      });
      const u = [50, 150, 300, 500, 800, 1200, 2e3, 3500, 6e3].map(
        (m) => setTimeout(l, m)
      );
      return () => {
        d.disconnect(), u.forEach(clearTimeout);
      };
    } else {
      c();
      return;
    }
  }, [t]);
  const o = oe(() => i((r) => !r), []);
  return /* @__PURE__ */ s(Tl.Provider, { value: { isLight: t, toggle: o }, children: e });
}
function ze() {
  return O(Tl);
}
const Si = [0.22, 1, 0.36, 1];
function He({ isMobile: e }) {
  const { isLight: t, toggle: i } = ze(), { lang: n } = V(), [a, o] = T(!1), [r, l] = T(!1);
  return B(() => {
    const c = () => {
      o(window.scrollY > window.innerHeight * 0.85);
    };
    return c(), window.addEventListener("scroll", c, { passive: !0 }), () => window.removeEventListener("scroll", c);
  }, []), /* @__PURE__ */ p(
    w.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.5, ease: Si },
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      style: {
        position: "fixed",
        bottom: e ? "16px" : "32px",
        right: e ? "16px" : "48px",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        pointerEvents: "auto"
      },
      children: [
        /* @__PURE__ */ s(Ir, { children: !a && !e && /* @__PURE__ */ s(
          w.span,
          {
            initial: { opacity: 0, x: 8 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 8 },
            transition: { duration: 0.35, ease: Si },
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: t ? "#333333" : "#FFFFFF",
              whiteSpace: "nowrap",
              userSelect: "none"
            },
            children: f(t ? "detail.darkModeQuestion" : "detail.lightModeQuestion", n)
          }
        ) }),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: i,
            "aria-label": t ? "Switch to dark mode" : "Switch to light mode",
            style: {
              position: "relative",
              width: "44px",
              height: "24px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              cursor: "pointer",
              padding: 0,
              backgroundColor: t ? "rgba(0,182,182,0.85)" : "rgba(255,255,255,0.15)",
              transition: "background-color 0.35s cubic-bezier(0.22,1,0.36,1)",
              flexShrink: 0,
              boxShadow: r ? "0 0 0 2px rgba(0,182,182,0.3)" : t ? "0 0 0 1px rgba(0,0,0,0.12)" : "0 0 0 1px rgba(255,255,255,0.08)"
            },
            children: /* @__PURE__ */ s(
              w.div,
              {
                animate: { x: t ? 20 : 0 },
                transition: { duration: 0.3, ease: Si },
                style: {
                  position: "absolute",
                  top: "2px",
                  left: "2px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3)"
                },
                children: /* @__PURE__ */ s(
                  w.svg,
                  {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    animate: { rotate: t ? 0 : 180 },
                    transition: { duration: 0.4, ease: Si },
                    children: t ? (
                      /* Sun */
                      /* @__PURE__ */ p(J, { children: [
                        /* @__PURE__ */ s("circle", { cx: "6", cy: "6", r: "2.5", fill: "#00B6B6" }),
                        [0, 45, 90, 135, 180, 225, 270, 315].map((c) => /* @__PURE__ */ s(
                          "line",
                          {
                            x1: "6",
                            y1: "0.8",
                            x2: "6",
                            y2: "2",
                            stroke: "#00B6B6",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            transform: `rotate(${c} 6 6)`
                          },
                          c
                        ))
                      ] })
                    ) : (
                      /* Moon */
                      /* @__PURE__ */ s(
                        "path",
                        {
                          d: "M7.5 1.5a4.5 4.5 0 1 0 3 7.5 5.25 5.25 0 0 1-3-7.5z",
                          fill: "#555"
                        }
                      )
                    )
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}
const G = "#00B6B6", Je = [0.22, 1, 0.36, 1], nf = gl;
function af(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function ee({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: Je },
      children: e
    }
  );
}
function sf({
  value: e,
  label: t,
  delay: i
}) {
  const n = I(null), a = M(n, { once: !0, margin: "-40px" });
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: n,
      initial: { opacity: 0, y: 30 },
      animate: a ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8, delay: i, ease: Je },
      style: {
        backgroundColor: "rgba(255,255,255,0.025)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "clamp(28px, 3vw, 48px)",
        paddingBottom: "clamp(28px, 3vw, 48px)",
        paddingLeft: "clamp(24px, 2.5vw, 40px)",
        paddingRight: "clamp(24px, 2.5vw, 40px)"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: G,
              marginBottom: "clamp(8px, 1vw, 16px)"
            },
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(242,242,242,0.55)"
            },
            children: t
          }
        )
      ]
    }
  );
}
function of({ onBack: e, onSeeAll: t, onNext: i }) {
  const n = af(), a = I(null), { scrollYProgress: o } = Fe({
    target: a,
    offset: ["start start", "end start"]
  }), r = R(o, [0, 1], [1, 1.1]), l = R(o, [0, 0.8], [1, 0]), c = n ? "16px" : "48px", d = "920px", [u, m] = T(!1), [g, S] = T(!1), { lang: b } = V(), x = je("veepee", b), { isLight: y } = ze(), C = [
    {
      titleKey: "componentConsolidation",
      title: {
        en: "Component consolidation",
        es: "Consolidación de componentes",
        ca: "Consolidació de components"
      },
      before: {
        en: "3 button variants across products",
        es: "3 variantes de botón en distintos productos",
        ca: "3 variants de botó en diferents productes"
      },
      after: {
        en: "Unified scalable component",
        es: "Componente unificado y escalable",
        ca: "Component unificat i escalable"
      }
    },
    {
      titleKey: "tokenArchitecture",
      title: {
        en: "Token architecture",
        es: "Arquitectura de tokens",
        ca: "Arquitectura de tokens"
      },
      before: {
        en: "Raw values and inconsistent spacing scales",
        es: "Valores crudos y escalas de espaciado inconsistentes",
        ca: "Valors crus i escales d'espaiat inconsistents"
      },
      after: {
        en: "Semantic token system aligned with engineering",
        es: "Sistema de tokens semánticos alineado con ingeniería",
        ca: "Sistema de tokens semàntics alineat amb enginyeria"
      }
    },
    {
      titleKey: "contributionModel",
      title: {
        en: "Contribution model",
        es: "Modelo de contribución",
        ca: "Model de contribució"
      },
      before: {
        en: "Design system maintained by 1 designer",
        es: "Sistema de diseño mantenido por 1 diseñadora",
        ca: "Sistema de disseny mantingut per 1 dissenyadora"
      },
      after: {
        en: "Structured multi-team contribution workflow",
        es: "Flujo de contribución estructurado multi-equipo",
        ca: "Flux de contribució estructurat multi-equip"
      }
    }
  ];
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": y ? "light" : "dark",
      style: {
        backgroundColor: y ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Je },
            onClick: e,
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            style: {
              position: "fixed",
              top: n ? "52px" : "72px",
              left: n ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: u ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", b)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Je },
            onClick: (h) => {
              h.preventDefault(), t();
            },
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            style: {
              position: "fixed",
              top: n ? "52px" : "72px",
              right: n ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: g ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", b)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: n }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: a,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: r,
                    opacity: l
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: nf,
                      alt: "Schrack Technik product data and network engineering workflow placeholders showing product data preparation, master data quality, technical documentation, and supplier coordination",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: n ? "32px" : "64px",
                    left: c,
                    right: c,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: Je },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["ProductData", "MasterData", "Suppliers"].map((h) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(12px, 0.85vw, 13px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.55)",
                              border: "1px solid rgba(242,242,242,0.12)",
                              borderRadius: "12px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              paddingLeft: "14px",
                              paddingRight: "14px"
                            },
                            children: [
                              "#",
                              h
                            ]
                          },
                          h
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: Je },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: n ? "clamp(32px, 10vw, 56px)" : "clamp(48px, 5.5vw, 88px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Schrack Technik"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: Je },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(12px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: x.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: d,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: c,
              paddingRight: c,
              paddingTop: n ? "64px" : "120px",
              paddingBottom: n ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: n }),
              /* @__PURE__ */ p(ee, { children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(6px, 0.6vw, 10px)",
                      marginBottom: "clamp(24px, 3vw, 48px)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          "aria-hidden": !0,
                          style: {
                            width: "clamp(16px, 1.5vw, 24px)",
                            height: "1px",
                            backgroundColor: G,
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(10px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: G
                          },
                          children: f("detail.overview", b)
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: x.contextHeading
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.3vw, 20px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: "-0.01em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 28px)",
                      maxWidth: "640px"
                    },
                    children: x.contextBody[0]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.3vw, 20px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: "-0.01em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "640px",
                      fontStyle: "italic"
                    },
                    children: x.contextBody[1]
                  }
                )
              ] }),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    marginTop: n ? "64px" : "120px",
                    display: "grid",
                    gridTemplateColumns: n ? "1fr" : "1fr 1fr 1fr",
                    gap: "clamp(12px, 1.5vw, 24px)"
                  },
                  children: x.metrics?.map((h, v) => /* @__PURE__ */ s(
                    sf,
                    {
                      value: h.value,
                      label: h.label,
                      delay: v * 0.1
                    },
                    v
                  ))
                }
              ),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ee, { children: [
                  /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(6px, 0.6vw, 10px)",
                        marginBottom: "clamp(24px, 3vw, 48px)"
                      },
                      children: [
                        /* @__PURE__ */ s(
                          "span",
                          {
                            "aria-hidden": !0,
                            style: {
                              width: "clamp(16px, 1.5vw, 24px)",
                              height: "1px",
                              backgroundColor: G,
                              flexShrink: 0
                            }
                          }
                        ),
                        /* @__PURE__ */ s(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.85vw, 13px)",
                              fontWeight: 400,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: G
                            },
                            children: f("detail.challenge", b)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: n ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: x.challengeHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ p(ee, { delay: 0.1, children: [
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 32px)",
                        maxWidth: "640px"
                      },
                      children: x.challengeBody[0]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: 0,
                        maxWidth: "640px",
                        fontStyle: "italic"
                      },
                      children: x.challengeBody[1]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ee, { children: [
                  /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(6px, 0.6vw, 10px)",
                        marginBottom: "clamp(24px, 3vw, 48px)"
                      },
                      children: [
                        /* @__PURE__ */ s(
                          "span",
                          {
                            "aria-hidden": !0,
                            style: {
                              width: "clamp(16px, 1.5vw, 24px)",
                              height: "1px",
                              backgroundColor: G,
                              flexShrink: 0
                            }
                          }
                        ),
                        /* @__PURE__ */ s(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.85vw, 13px)",
                              fontWeight: 400,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: G
                            },
                            children: f("detail.myRole", b)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: n ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: x.roleHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ s(ee, { delay: 0.1, children: /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(15px, 1.2vw, 18px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "640px"
                    },
                    children: x.roleIntro
                  }
                ) }),
                x.roleItems.map((h, v) => /* @__PURE__ */ s(ee, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: n ? "1fr" : "auto 1fr",
                      gap: n ? "8px" : "clamp(24px, 3vw, 48px)",
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(11px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            color: "rgba(242,242,242,0.5)",
                            minWidth: "40px"
                          },
                          children: h.num
                        }
                      ),
                      /* @__PURE__ */ p("div", { children: [
                        /* @__PURE__ */ s(
                          "h3",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(18px, 1.5vw, 24px)",
                              fontWeight: 500,
                              lineHeight: 1.2,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(8px, 1vw, 16px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: h.title
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 17px)",
                              fontWeight: 400,
                              lineHeight: 1.6,
                              color: "rgba(242,242,242,0.55)",
                              marginTop: 0,
                              marginBottom: 0,
                              maxWidth: "560px"
                            },
                            children: h.desc
                          }
                        )
                      ] })
                    ]
                  }
                ) }, h.num))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ s(ee, { children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(6px, 0.6vw, 10px)",
                      marginBottom: "clamp(24px, 3vw, 48px)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          "aria-hidden": !0,
                          style: {
                            width: "clamp(16px, 1.5vw, 24px)",
                            height: "1px",
                            backgroundColor: G,
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(10px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: G
                          },
                          children: f("detail.systemDecisions", b)
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ s(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: n ? "1fr" : "1fr 1fr 1fr",
                      gap: "clamp(16px, 2vw, 24px)"
                    },
                    children: C.map((h, v) => /* @__PURE__ */ s(ee, { delay: v * 0.1, children: /* @__PURE__ */ p(
                      "div",
                      {
                        style: {
                          backgroundColor: "rgba(255,255,255,0.025)",
                          borderRadius: "20px",
                          border: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: "clamp(28px, 3vw, 40px)",
                          paddingBottom: "clamp(28px, 3vw, 40px)",
                          paddingLeft: "clamp(24px, 2.5vw, 32px)",
                          paddingRight: "clamp(24px, 2.5vw, 32px)",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column"
                        },
                        children: [
                          /* @__PURE__ */ s(
                            "h3",
                            {
                              style: {
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "clamp(16px, 1.3vw, 20px)",
                                fontWeight: 500,
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                                color: "#F2F2F2",
                                marginTop: 0,
                                marginBottom: "clamp(20px, 2.5vw, 32px)",
                                marginLeft: 0,
                                marginRight: 0
                              },
                              children: h.title[b]
                            }
                          ),
                          /* @__PURE__ */ p("div", { style: { marginBottom: "clamp(16px, 2vw, 24px)" }, children: [
                            /* @__PURE__ */ s(
                              "span",
                              {
                                style: {
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "clamp(10px, 0.75vw, 11px)",
                                  fontWeight: 400,
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  color: "rgba(242,242,242,0.5)",
                                  display: "block",
                                  marginBottom: "8px"
                                },
                                children: f("detail.systemDecisionsBefore", b)
                              }
                            ),
                            /* @__PURE__ */ s(
                              "p",
                              {
                                style: {
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "clamp(13px, 1vw, 15px)",
                                  fontWeight: 400,
                                  lineHeight: 1.55,
                                  color: "rgba(242,242,242,0.5)",
                                  marginTop: 0,
                                  marginBottom: 0
                                },
                                children: h.before[b]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              style: {
                                width: "100%",
                                height: "1px",
                                backgroundColor: "rgba(255,255,255,0.06)",
                                marginBottom: "clamp(16px, 2vw, 24px)"
                              }
                            }
                          ),
                          /* @__PURE__ */ p("div", { children: [
                            /* @__PURE__ */ s(
                              "span",
                              {
                                style: {
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "clamp(10px, 0.75vw, 11px)",
                                  fontWeight: 400,
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  color: G,
                                  display: "block",
                                  marginBottom: "8px"
                                },
                                children: f("detail.systemDecisionsAfter", b)
                              }
                            ),
                            /* @__PURE__ */ s(
                              "p",
                              {
                                style: {
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "clamp(13px, 1vw, 15px)",
                                  fontWeight: 400,
                                  lineHeight: 1.55,
                                  color: "rgba(242,242,242,0.65)",
                                  marginTop: 0,
                                  marginBottom: 0
                                },
                                children: h.after[b]
                              }
                            )
                          ] })
                        ]
                      }
                    ) }, h.titleKey))
                  }
                )
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ee, { children: [
                  /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(6px, 0.6vw, 10px)",
                        marginBottom: "clamp(24px, 3vw, 48px)"
                      },
                      children: [
                        /* @__PURE__ */ s(
                          "span",
                          {
                            "aria-hidden": !0,
                            style: {
                              width: "clamp(16px, 1.5vw, 24px)",
                              height: "1px",
                              backgroundColor: G,
                              flexShrink: 0
                            }
                          }
                        ),
                        /* @__PURE__ */ s(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.85vw, 13px)",
                              fontWeight: 400,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: G
                            },
                            children: f("detail.focus", b)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: n ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0,
                        maxWidth: "600px"
                      },
                      children: x.focusHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ p(ee, { delay: 0.1, children: [
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 32px)",
                        maxWidth: "640px"
                      },
                      children: x.focusBody[0]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: 0,
                        maxWidth: "640px"
                      },
                      children: x.focusBody[1]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ee, { children: [
                  /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(6px, 0.6vw, 10px)",
                        marginBottom: "clamp(24px, 3vw, 48px)"
                      },
                      children: [
                        /* @__PURE__ */ s(
                          "span",
                          {
                            "aria-hidden": !0,
                            style: {
                              width: "clamp(16px, 1.5vw, 24px)",
                              height: "1px",
                              backgroundColor: G,
                              flexShrink: 0
                            }
                          }
                        ),
                        /* @__PURE__ */ s(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.85vw, 13px)",
                              fontWeight: 400,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: G
                            },
                            children: f("detail.impact", b)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: n ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: x.impactHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ s(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gap: 0
                    },
                    children: x.impactBullets.map((h, v) => /* @__PURE__ */ s(ee, { delay: v * 0.06, children: /* @__PURE__ */ p(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "clamp(12px, 1.5vw, 20px)",
                          paddingTop: "clamp(16px, 2vw, 28px)",
                          paddingBottom: "clamp(16px, 2vw, 28px)",
                          borderBottom: "1px solid rgba(242,242,242,0.06)"
                        },
                        children: [
                          /* @__PURE__ */ s(
                            "span",
                            {
                              style: {
                                width: "6px",
                                height: "6px",
                                backgroundColor: G,
                                borderRadius: "50%",
                                marginTop: "8px",
                                flexShrink: 0
                              }
                            }
                          ),
                          /* @__PURE__ */ s(
                            "span",
                            {
                              style: {
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "clamp(15px, 1.2vw, 18px)",
                                fontWeight: 400,
                                lineHeight: 1.55,
                                color: "rgba(242,242,242,0.6)"
                              },
                              children: h
                            }
                          )
                        ]
                      }
                    ) }, v))
                  }
                )
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: n ? "64px" : "120px" }, children: /* @__PURE__ */ p(ee, { children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(6px, 0.6vw, 10px)",
                      marginBottom: "clamp(24px, 3vw, 48px)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          "aria-hidden": !0,
                          style: {
                            width: "clamp(16px, 1.5vw, 24px)",
                            height: "1px",
                            backgroundColor: G,
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(10px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: G
                          },
                          children: f("detail.reflection", b)
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.55)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "700px"
                    },
                    children: x.reflectionTexts[0]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 28px)",
                      maxWidth: "700px"
                    },
                    children: x.reflectionTexts[1]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "700px",
                      fontStyle: "italic"
                    },
                    children: x.reflectionTexts[2]
                  }
                )
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: n ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(ee, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.3)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", b)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: n ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Women in Aerospace Europe"
                      }
                    ),
                    /* @__PURE__ */ s(rf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function rf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        textDecoration: "none",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const _t = "#00B6B6", Ze = [0.22, 1, 0.36, 1], lf = hl;
function cf(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function K({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: Ze },
      children: e
    }
  );
}
function _e({ label: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 10px)",
        marginBottom: "clamp(24px, 3vw, 48px)"
      },
      children: [
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": !0,
            style: {
              width: "clamp(16px, 1.5vw, 24px)",
              height: "1px",
              backgroundColor: _t,
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 0.85vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: _t
            },
            children: e
          }
        )
      ]
    }
  );
}
function Ci({
  children: e,
  isMobile: t
}) {
  return /* @__PURE__ */ s(
    "h2",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: t ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: "-0.04em",
        color: "#F2F2F2",
        marginTop: 0,
        marginBottom: "clamp(20px, 2.5vw, 40px)",
        marginLeft: 0,
        marginRight: 0
      },
      children: e
    }
  );
}
function lt({ children: e }) {
  return /* @__PURE__ */ s(
    "p",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(15px, 1.2vw, 18px)",
        fontWeight: 400,
        lineHeight: 1.65,
        color: "rgba(242,242,242,0.5)",
        marginTop: 0,
        marginBottom: "clamp(16px, 2vw, 32px)",
        maxWidth: "640px"
      },
      children: e
    }
  );
}
function df({ onBack: e, onSeeAll: t, onNext: i }) {
  const n = cf(), a = I(null), { scrollYProgress: o } = Fe({
    target: a,
    offset: ["start start", "end start"]
  }), r = R(o, [0, 1], [1, 1.1]), l = R(o, [0, 0.8], [1, 0]), c = n ? "16px" : "48px", d = "920px", [u, m] = T(!1), [g, S] = T(!1), { lang: b } = V(), x = je("hp-parts-store", b), { isLight: y } = ze();
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": y ? "light" : "dark",
      style: {
        backgroundColor: y ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Ze },
            onClick: e,
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            style: {
              position: "fixed",
              top: n ? "52px" : "72px",
              left: n ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: u ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", b)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Ze },
            onClick: (C) => {
              C.preventDefault(), t();
            },
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            style: {
              position: "fixed",
              top: n ? "52px" : "72px",
              right: n ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: g ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", b)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: n }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: a,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: r,
                    opacity: l
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: lf,
                      alt: "Wiener Gesundheitsverbund UX process showing User Research board with interview notes and technician personas, UX Analysis with heuristic evaluation and compatibility flow mapping, UX/UI Design Proposals for parts compatibility and product listings, and Interactive Prototype with device-first search and compatible replacement parts flow",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: n ? "32px" : "64px",
                    left: c,
                    right: c,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: Ze },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["MedicalTech", "Inspection", "Safety"].map((C) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.75vw, 12px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.55)"
                            },
                            children: [
                              "#",
                              C
                            ]
                          },
                          C
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: Ze },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: n ? "clamp(32px, 10vw, 56px)" : "clamp(48px, 5.5vw, 88px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Wiener Gesundheitsverbund"
                      }
                    ) }),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1, delay: 0.4, ease: Ze },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: n ? "clamp(18px, 5vw, 28px)" : "clamp(20px, 2vw, 32px)",
                          fontWeight: 300,
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          color: "rgba(242,242,242,0.6)",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "UX Research & Design"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: Ze },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(11px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: x.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: d,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: c,
              paddingRight: c,
              paddingTop: n ? "64px" : "120px",
              paddingBottom: n ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: n }),
              /* @__PURE__ */ p(K, { children: [
                /* @__PURE__ */ s(_e, { label: f("detail.context", b) }),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: x.contextHeading
                  }
                ),
                /* @__PURE__ */ s(lt, { children: x.contextBody[0] }),
                x.contextBody[1] && /* @__PURE__ */ s(lt, { children: x.contextBody[1] })
              ] }),
              x.metrics && x.metrics.length > 0 && /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    marginTop: n ? "64px" : "120px",
                    display: "grid",
                    gridTemplateColumns: n ? "1fr" : "1fr 1fr 1fr",
                    gap: "clamp(12px, 1.5vw, 24px)"
                  },
                  children: x.metrics.map((C, h) => /* @__PURE__ */ s(K, { delay: h * 0.1, children: /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        backgroundColor: "rgba(255,255,255,0.025)",
                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "clamp(28px, 3vw, 48px)",
                        paddingBottom: "clamp(28px, 3vw, 48px)",
                        paddingLeft: "clamp(24px, 2.5vw, 40px)",
                        paddingRight: "clamp(24px, 2.5vw, 40px)"
                      },
                      children: [
                        /* @__PURE__ */ s(
                          "div",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(36px, 5vw, 72px)",
                              fontWeight: 600,
                              lineHeight: 1,
                              letterSpacing: "-0.04em",
                              color: _t,
                              marginBottom: "clamp(8px, 1vw, 16px)"
                            },
                            children: C.value
                          }
                        ),
                        /* @__PURE__ */ s(
                          "div",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(13px, 1vw, 16px)",
                              fontWeight: 400,
                              lineHeight: 1.5,
                              color: "rgba(242,242,242,0.55)"
                            },
                            children: C.label
                          }
                        )
                      ]
                    }
                  ) }, h))
                }
              ),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(K, { children: [
                  /* @__PURE__ */ s(_e, { label: f("detail.challenge", b) }),
                  /* @__PURE__ */ s(Ci, { isMobile: n, children: x.challengeHeading })
                ] }),
                /* @__PURE__ */ p(K, { delay: 0.1, children: [
                  /* @__PURE__ */ s(lt, { children: x.challengeBody[0] }),
                  x.challengeBody[1] && /* @__PURE__ */ s(lt, { children: x.challengeBody[1] })
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(K, { children: [
                  /* @__PURE__ */ s(_e, { label: f("detail.myRole", b) }),
                  /* @__PURE__ */ s(Ci, { isMobile: n, children: x.roleHeading })
                ] }),
                x.roleIntro && /* @__PURE__ */ s(K, { delay: 0.1, children: /* @__PURE__ */ s(lt, { children: x.roleIntro }) }),
                x.roleItems.map((C, h) => /* @__PURE__ */ s(K, { delay: h * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: n ? "1fr" : "auto 1fr",
                      gap: n ? "8px" : "clamp(24px, 3vw, 48px)",
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(11px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            color: "rgba(242,242,242,0.5)",
                            minWidth: "40px"
                          },
                          children: C.num
                        }
                      ),
                      /* @__PURE__ */ p("div", { children: [
                        /* @__PURE__ */ s(
                          "h3",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(18px, 1.5vw, 24px)",
                              fontWeight: 500,
                              lineHeight: 1.2,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(8px, 1vw, 16px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: C.title
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 17px)",
                              fontWeight: 400,
                              lineHeight: 1.6,
                              color: "rgba(242,242,242,0.55)",
                              marginTop: 0,
                              marginBottom: 0,
                              maxWidth: "560px"
                            },
                            children: C.desc
                          }
                        )
                      ] })
                    ]
                  }
                ) }, C.num))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ s(K, { children: /* @__PURE__ */ s(_e, { label: f("detail.compatibilityConfidence", b) }) }),
                /* @__PURE__ */ s(K, { delay: 0.1, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      backgroundColor: "rgba(255,255,255,0.025)",
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "clamp(28px, 3vw, 40px)",
                      paddingBottom: "clamp(28px, 3vw, 40px)",
                      paddingLeft: "clamp(24px, 2.5vw, 32px)",
                      paddingRight: "clamp(24px, 2.5vw, 32px)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(16px, 1.3vw, 20px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(24px, 3vw, 36px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: {
                            en: "Part compatibility verification",
                            es: "Verificación de compatibilidad de piezas",
                            ca: "Verificació de compatibilitat de peces"
                          }[b]
                        }
                      ),
                      /* @__PURE__ */ p(
                        "div",
                        {
                          style: {
                            display: "grid",
                            gridTemplateColumns: n ? "1fr" : "1fr auto 1fr",
                            gap: n ? "clamp(20px, 3vw, 28px)" : "clamp(24px, 3vw, 40px)",
                            alignItems: "start"
                          },
                          children: [
                            /* @__PURE__ */ p("div", { children: [
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(10px, 0.75vw, 11px)",
                                    fontWeight: 400,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "rgba(242,242,242,0.5)",
                                    display: "block",
                                    marginBottom: "10px"
                                  },
                                  children: f("detail.systemDecisionsBefore", b)
                                }
                              ),
                              /* @__PURE__ */ s(
                                "p",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(13px, 1vw, 15px)",
                                    fontWeight: 400,
                                    lineHeight: 1.55,
                                    color: "rgba(242,242,242,0.5)",
                                    marginTop: 0,
                                    marginBottom: 0
                                  },
                                  children: {
                                    en: "Users needed to manually compare part numbers and documentation to verify compatibility.",
                                    es: "Los usuarios necesitaban comparar manualmente números de pieza y documentación para verificar la compatibilidad.",
                                    ca: "Els usuaris necessitaven comparar manualment números de peça i documentació per verificar la compatibilitat."
                                  }[b]
                                }
                              )
                            ] }),
                            !n && /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  width: "1px",
                                  backgroundColor: "rgba(255,255,255,0.06)",
                                  alignSelf: "stretch"
                                }
                              }
                            ),
                            n && /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  width: "100%",
                                  height: "1px",
                                  backgroundColor: "rgba(255,255,255,0.06)"
                                }
                              }
                            ),
                            /* @__PURE__ */ p("div", { children: [
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(10px, 0.75vw, 11px)",
                                    fontWeight: 400,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: _t,
                                    display: "block",
                                    marginBottom: "10px"
                                  },
                                  children: f("detail.systemDecisionsAfter", b)
                                }
                              ),
                              /* @__PURE__ */ s(
                                "p",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(13px, 1vw, 15px)",
                                    fontWeight: 400,
                                    lineHeight: 1.55,
                                    color: "rgba(242,242,242,0.65)",
                                    marginTop: 0,
                                    marginBottom: 0
                                  },
                                  children: {
                                    en: "Clear compatibility indicators and device matching simplified the decision process.",
                                    es: "Indicadores claros de compatibilidad y coincidencia de dispositivos simplificaron el proceso de decisión.",
                                    ca: "Indicadors clars de compatibilitat i coincidència de dispositius van simplificar el procés de decisió."
                                  }[b]
                                }
                              )
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(K, { children: [
                  /* @__PURE__ */ s(_e, { label: f("detail.focus", b) }),
                  /* @__PURE__ */ s(Ci, { isMobile: n, children: x.focusHeading })
                ] }),
                x.focusBody[0] && /* @__PURE__ */ s(K, { delay: 0.1, children: /* @__PURE__ */ s(lt, { children: x.focusBody[0] }) }),
                (x.focusItems ?? []).map((C, h) => /* @__PURE__ */ s(K, { delay: h * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(18px, 1.5vw, 24px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(8px, 1vw, 16px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: C.title
                        }
                      ),
                      /* @__PURE__ */ s(
                        "p",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(14px, 1.1vw, 17px)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: "rgba(242,242,242,0.55)",
                            marginTop: 0,
                            marginBottom: 0,
                            maxWidth: "560px"
                          },
                          children: C.desc
                        }
                      )
                    ]
                  }
                ) }, h))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: n ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(K, { children: [
                  /* @__PURE__ */ s(_e, { label: f("detail.impact", b) }),
                  /* @__PURE__ */ s(Ci, { isMobile: n, children: x.impactHeading })
                ] }),
                /* @__PURE__ */ s("div", { style: { display: "grid", gap: 0 }, children: x.impactBullets.map((C, h) => /* @__PURE__ */ s(K, { delay: h * 0.06, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            width: "6px",
                            height: "6px",
                            backgroundColor: _t,
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 18px)",
                            fontWeight: 400,
                            lineHeight: 1.55,
                            color: "rgba(242,242,242,0.6)"
                          },
                          children: C
                        }
                      )
                    ]
                  }
                ) }, h)) })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: n ? "64px" : "120px" }, children: /* @__PURE__ */ p(K, { children: [
                /* @__PURE__ */ s(_e, { label: f("detail.whatThisProjectShaped", b) }),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.65)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "700px"
                    },
                    children: x.reflectionTexts[0]
                  }
                ),
                x.reflectionTexts[1] && /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.55)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "700px"
                    },
                    children: x.reflectionTexts[1]
                  }
                ),
                x.reflectionTexts[2] && /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: n ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.55)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "700px",
                      fontStyle: "italic"
                    },
                    children: x.reflectionTexts[2]
                  }
                )
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: n ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(K, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.3)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", b)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: n ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Schrack Technik"
                      }
                    ),
                    /* @__PURE__ */ s(pf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function pf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const Ki = "#00B6B6", Be = [0.22, 1, 0.36, 1], uf = yl;
function mf(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function ce({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: Be },
      children: e
    }
  );
}
function Cn({
  value: e,
  label: t,
  delay: i
}) {
  const n = I(null), a = M(n, { once: !0, margin: "-40px" });
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: n,
      initial: { opacity: 0, y: 30 },
      animate: a ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8, delay: i, ease: Be },
      style: {
        backgroundColor: "rgba(255,255,255,0.025)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "clamp(28px, 3vw, 48px)",
        paddingBottom: "clamp(28px, 3vw, 48px)",
        paddingLeft: "clamp(24px, 2.5vw, 40px)",
        paddingRight: "clamp(24px, 2.5vw, 40px)"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: Ki,
              marginBottom: "clamp(8px, 1vw, 16px)"
            },
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(242,242,242,0.55)"
            },
            children: t
          }
        )
      ]
    }
  );
}
function ct({ label: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 10px)",
        marginBottom: "clamp(24px, 3vw, 48px)"
      },
      children: [
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": !0,
            style: {
              width: "clamp(16px, 1.5vw, 24px)",
              height: "1px",
              backgroundColor: Ki,
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 0.85vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: Ki
            },
            children: e
          }
        )
      ]
    }
  );
}
function ff({
  onBack: e,
  onSeeAll: t,
  onNext: i,
  nextProjectName: n
}) {
  const a = mf(), o = I(null), { scrollYProgress: r } = Fe({
    target: o,
    offset: ["start start", "end start"]
  }), l = R(r, [0, 1], [1, 1.1]), c = R(r, [0, 0.8], [1, 0]), d = a ? "16px" : "48px", u = "920px", [m, g] = T(!1), [S, b] = T(!1), { lang: x } = V(), y = je("kira-learning", x), { isLight: C } = ze();
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": C ? "light" : "dark",
      style: {
        backgroundColor: C ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Be },
            onClick: e,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              left: a ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: m ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", x)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Be },
            onClick: (h) => {
              h.preventDefault(), t();
            },
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              right: a ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: S ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", x)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: a }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: o,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: l,
                    opacity: c
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: uf,
                      alt: "Women in Aerospace Europe platform showing learning flow analysis with course activities, notebook-based coding interface with data visualizations, UX/UI design proposals with code editor and test results, and classroom dashboard prototype with student analytics and assignment performance metrics",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: a ? "32px" : "64px",
                    left: d,
                    right: d,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: Be },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["Aerospace", "STEM", "Leadership"].map((h) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.75vw, 12px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.55)",
                              border: "1px solid rgba(242,242,242,0.12)",
                              borderRadius: "12px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              paddingLeft: "14px",
                              paddingRight: "14px"
                            },
                            children: [
                              "#",
                              h
                            ]
                          },
                          h
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: Be },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(32px, 10vw, 56px)" : "clamp(48px, 5.5vw, 88px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Women in Aerospace Europe"
                      }
                    ) }),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1, delay: 0.4, ease: Be },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(18px, 5vw, 28px)" : "clamp(20px, 2vw, 32px)",
                          fontWeight: 300,
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          color: "rgba(242,242,242,0.6)",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Regional Network Lead"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: Be },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(11px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: y.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: u,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: d,
              paddingRight: d,
              paddingTop: a ? "64px" : "120px",
              paddingBottom: a ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: a }),
              /* @__PURE__ */ p(ce, { children: [
                /* @__PURE__ */ s(ct, { label: f("detail.context", x) }),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: y.contextHeading
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.3vw, 20px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: "-0.01em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 28px)",
                      maxWidth: "640px"
                    },
                    children: y.contextBody[0]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.3vw, 20px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: "-0.01em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "640px"
                    },
                    children: y.contextBody[1]
                  }
                )
              ] }),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    marginTop: a ? "64px" : "120px",
                    display: "grid",
                    gridTemplateColumns: a ? "1fr" : "1fr 1fr 1fr",
                    gap: "clamp(12px, 1.5vw, 24px)"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      Cn,
                      {
                        value: y.metrics?.[0]?.value ?? "3",
                        label: y.metrics?.[0]?.label ?? "",
                        delay: 0
                      }
                    ),
                    /* @__PURE__ */ s(
                      Cn,
                      {
                        value: y.metrics?.[1]?.value ?? "100%",
                        label: y.metrics?.[1]?.label ?? "",
                        delay: 0.1
                      }
                    ),
                    /* @__PURE__ */ s(
                      Cn,
                      {
                        value: y.metrics?.[2]?.value ?? "AI",
                        label: y.metrics?.[2]?.label ?? "",
                        delay: 0.2
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ce, { children: [
                  /* @__PURE__ */ s(ct, { label: f("detail.challenge", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: y.challengeHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ p(ce, { delay: 0.1, children: [
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 32px)",
                        maxWidth: "640px"
                      },
                      children: y.challengeBody[0]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: 0,
                        maxWidth: "640px"
                      },
                      children: y.challengeBody[1]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ce, { children: [
                  /* @__PURE__ */ s(ct, { label: f("detail.myRole", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: y.roleHeading
                    }
                  )
                ] }),
                y.roleIntro && /* @__PURE__ */ s(ce, { delay: 0.1, children: /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(15px, 1.2vw, 18px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "640px"
                    },
                    children: y.roleIntro
                  }
                ) }),
                y.roleItems.map((h, v) => /* @__PURE__ */ s(ce, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: a ? "1fr" : "auto 1fr",
                      gap: a ? "8px" : "clamp(24px, 3vw, 48px)",
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(11px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            color: "rgba(242,242,242,0.5)",
                            minWidth: "40px"
                          },
                          children: h.num
                        }
                      ),
                      /* @__PURE__ */ p("div", { children: [
                        /* @__PURE__ */ s(
                          "h3",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(18px, 1.5vw, 24px)",
                              fontWeight: 500,
                              lineHeight: 1.2,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(8px, 1vw, 16px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: h.title
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 17px)",
                              fontWeight: 400,
                              lineHeight: 1.6,
                              color: "rgba(242,242,242,0.55)",
                              marginTop: 0,
                              marginBottom: 0,
                              maxWidth: "560px"
                            },
                            children: h.desc
                          }
                        )
                      ] })
                    ]
                  }
                ) }, h.num))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ce, { children: [
                  /* @__PURE__ */ s(ct, { label: f("detail.focus", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0,
                        maxWidth: "600px"
                      },
                      children: y.focusHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ p(ce, { delay: 0.1, children: [
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 32px)",
                        maxWidth: "640px"
                      },
                      children: y.focusBody[0]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: 0,
                        maxWidth: "640px",
                        fontStyle: "italic"
                      },
                      children: y.focusBody[1]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ce, { children: [
                  /* @__PURE__ */ s(ct, { label: f("detail.impact", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: y.impactHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ s("div", { style: { display: "grid", gap: 0 }, children: y.impactBullets.map((h, v) => /* @__PURE__ */ s(ce, { delay: v * 0.06, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            width: "6px",
                            height: "6px",
                            backgroundColor: Ki,
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 18px)",
                            fontWeight: 400,
                            lineHeight: 1.55,
                            color: "rgba(242,242,242,0.6)"
                          },
                          children: h
                        }
                      )
                    ]
                  }
                ) }, v)) })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: a ? "64px" : "120px" }, children: /* @__PURE__ */ p(ce, { children: [
                /* @__PURE__ */ s(ct, { label: f("detail.whatThisProjectSharpened", x) }),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.65)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "700px"
                    },
                    children: y.reflectionTexts[0]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 28px)",
                      maxWidth: "700px"
                    },
                    children: y.reflectionTexts[1]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "700px",
                      fontStyle: "italic"
                    },
                    children: y.reflectionTexts[2]
                  }
                )
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: a ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(ce, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.5)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", x)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: n
                      }
                    ),
                    /* @__PURE__ */ s(gf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function gf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        textDecoration: "none",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const ei = "#00B6B6", et = [0.22, 1, 0.36, 1], hf = xl;
function yf(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function te({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: et },
      children: e
    }
  );
}
function Tn({
  value: e,
  label: t,
  delay: i
}) {
  const n = I(null), a = M(n, { once: !0, margin: "-40px" });
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: n,
      initial: { opacity: 0, y: 30 },
      animate: a ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8, delay: i, ease: et },
      style: {
        backgroundColor: "rgba(255,255,255,0.025)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "clamp(28px, 3vw, 48px)",
        paddingBottom: "clamp(28px, 3vw, 48px)",
        paddingLeft: "clamp(24px, 2.5vw, 40px)",
        paddingRight: "clamp(24px, 2.5vw, 40px)"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: ei,
              marginBottom: "clamp(8px, 1vw, 16px)"
            },
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(242,242,242,0.55)"
            },
            children: t
          }
        )
      ]
    }
  );
}
function Xe({ label: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 10px)",
        marginBottom: "clamp(24px, 3vw, 48px)"
      },
      children: [
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": !0,
            style: {
              width: "clamp(16px, 1.5vw, 24px)",
              height: "1px",
              backgroundColor: ei,
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 0.85vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: ei
            },
            children: e
          }
        )
      ]
    }
  );
}
function xf({
  onBack: e,
  onSeeAll: t,
  onNext: i,
  nextProjectName: n
}) {
  const a = yf(), o = I(null), { scrollYProgress: r } = Fe({
    target: o,
    offset: ["start start", "end start"]
  }), l = R(r, [0, 1], [1, 1.1]), c = R(r, [0, 0.8], [1, 0]), d = a ? "16px" : "48px", u = "920px", [m, g] = T(!1), [S, b] = T(!1), { lang: x } = V(), y = je("tucuvi", x), { isLight: C } = ze();
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": C ? "light" : "dark",
      style: {
        backgroundColor: C ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: et },
            onClick: e,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              left: a ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: m ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", x)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: et },
            onClick: (h) => {
              h.preventDefault(), t();
            },
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              right: a ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: S ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", x)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: a }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: o,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: l,
                    opacity: c
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: hf,
                      alt: "Verein sprungbrett STEM workshop placeholder showing workshop planning, student discussion, feedback notes, and public outreach materials",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: a ? "32px" : "64px",
                    left: d,
                    right: d,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: et },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["Workshops", "STEM", "Diversity"].map((h) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(12px, 0.85vw, 13px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.55)",
                              border: "1px solid rgba(242,242,242,0.12)",
                              borderRadius: "12px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              paddingLeft: "14px",
                              paddingRight: "14px"
                            },
                            children: [
                              "#",
                              h
                            ]
                          },
                          h
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: et },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(36px, 11vw, 60px)" : "clamp(52px, 6vw, 96px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Verein sprungbrett"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: et },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(12px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: y.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: u,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: d,
              paddingRight: d,
              paddingTop: a ? "64px" : "120px",
              paddingBottom: a ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: a }),
              /* @__PURE__ */ p(te, { children: [
                /* @__PURE__ */ s(Xe, { label: f("detail.context", x) }),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: y.contextHeading
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.3vw, 20px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: "-0.01em",
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 28px)",
                      maxWidth: "640px"
                    },
                    children: y.contextBody[0]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.3vw, 20px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: "-0.01em",
                      color: "rgba(242,242,242,0.55)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "640px"
                    },
                    children: y.contextBody[1]
                  }
                )
              ] }),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    marginTop: a ? "64px" : "120px",
                    display: "grid",
                    gridTemplateColumns: a ? "1fr" : "1fr 1fr 1fr",
                    gap: "clamp(12px, 1.5vw, 24px)"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      Tn,
                      {
                        value: y.metrics?.[0]?.value ?? "",
                        label: y.metrics?.[0]?.label ?? "",
                        delay: 0
                      }
                    ),
                    /* @__PURE__ */ s(
                      Tn,
                      {
                        value: y.metrics?.[1]?.value ?? "",
                        label: y.metrics?.[1]?.label ?? "",
                        delay: 0.1
                      }
                    ),
                    /* @__PURE__ */ s(
                      Tn,
                      {
                        value: y.metrics?.[2]?.value ?? "",
                        label: y.metrics?.[2]?.label ?? "",
                        delay: 0.2
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(te, { children: [
                  /* @__PURE__ */ s(Xe, { label: f("detail.challenge", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: y.challengeHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ p(te, { delay: 0.1, children: [
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 32px)",
                        maxWidth: "640px"
                      },
                      children: y.challengeBody[0]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 32px)",
                        maxWidth: "640px"
                      },
                      children: y.challengeBody[1]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(te, { children: [
                  /* @__PURE__ */ s(Xe, { label: f("detail.myRole", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: y.roleHeading
                    }
                  )
                ] }),
                y.roleIntro && /* @__PURE__ */ s(te, { delay: 0.1, children: /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(15px, 1.2vw, 18px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "640px"
                    },
                    children: y.roleIntro
                  }
                ) }),
                y.roleItems.map((h, v) => /* @__PURE__ */ s(te, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: a ? "1fr" : "auto 1fr",
                      gap: a ? "8px" : "clamp(24px, 3vw, 48px)",
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(11px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            color: "rgba(242,242,242,0.2)",
                            minWidth: "40px"
                          },
                          children: h.num
                        }
                      ),
                      /* @__PURE__ */ p("div", { children: [
                        /* @__PURE__ */ s(
                          "h3",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(18px, 1.5vw, 24px)",
                              fontWeight: 500,
                              lineHeight: 1.2,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(8px, 1vw, 16px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: h.title
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 17px)",
                              fontWeight: 400,
                              lineHeight: 1.6,
                              color: "rgba(242,242,242,0.45)",
                              marginTop: 0,
                              marginBottom: 0,
                              maxWidth: "560px"
                            },
                            children: h.desc
                          }
                        )
                      ] })
                    ]
                  }
                ) }, h.num))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ s(te, { children: /* @__PURE__ */ s(Xe, { label: f("detail.clinicalTrust", x) }) }),
                /* @__PURE__ */ s(te, { delay: 0.1, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      backgroundColor: "rgba(255,255,255,0.025)",
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "clamp(28px, 3vw, 40px)",
                      paddingBottom: "clamp(28px, 3vw, 40px)",
                      paddingLeft: "clamp(24px, 2.5vw, 32px)",
                      paddingRight: "clamp(24px, 2.5vw, 32px)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(16px, 1.3vw, 20px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(24px, 3vw, 36px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: {
                            en: "AI call review interface",
                            es: "Interfaz de revisión de llamadas IA",
                            ca: "Interfície de revisió de trucades IA"
                          }[x]
                        }
                      ),
                      /* @__PURE__ */ p(
                        "div",
                        {
                          style: {
                            display: "grid",
                            gridTemplateColumns: a ? "1fr" : "1fr auto 1fr",
                            gap: a ? "clamp(20px, 3vw, 28px)" : "clamp(24px, 3vw, 40px)",
                            alignItems: "start"
                          },
                          children: [
                            /* @__PURE__ */ p("div", { children: [
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(10px, 0.75vw, 11px)",
                                    fontWeight: 400,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "rgba(242,242,242,0.5)",
                                    display: "block",
                                    marginBottom: "10px"
                                  },
                                  children: f("detail.systemDecisionsBefore", x)
                                }
                              ),
                              /* @__PURE__ */ s(
                                "p",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(13px, 1vw, 15px)",
                                    fontWeight: 400,
                                    lineHeight: 1.55,
                                    color: "rgba(242,242,242,0.5)",
                                    marginTop: 0,
                                    marginBottom: 0
                                  },
                                  children: {
                                    en: "Clinicians had to manually read raw call logs to understand patient responses.",
                                    es: "Los clínicos tenían que leer manualmente los registros de llamadas sin procesar para entender las respuestas de los pacientes.",
                                    ca: "Els clínics havien de llegir manualment els registres de trucades sense processar per entendre les respostes dels pacients."
                                  }[x]
                                }
                              )
                            ] }),
                            !a && /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  width: "1px",
                                  backgroundColor: "rgba(255,255,255,0.06)",
                                  alignSelf: "stretch"
                                }
                              }
                            ),
                            a && /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  width: "100%",
                                  height: "1px",
                                  backgroundColor: "rgba(255,255,255,0.06)"
                                }
                              }
                            ),
                            /* @__PURE__ */ p("div", { children: [
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(10px, 0.75vw, 11px)",
                                    fontWeight: 400,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: ei,
                                    display: "block",
                                    marginBottom: "10px"
                                  },
                                  children: f("detail.systemDecisionsAfter", x)
                                }
                              ),
                              /* @__PURE__ */ s(
                                "p",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(13px, 1vw, 15px)",
                                    fontWeight: 400,
                                    lineHeight: 1.55,
                                    color: "rgba(242,242,242,0.65)",
                                    marginTop: 0,
                                    marginBottom: 0
                                  },
                                  children: {
                                    en: "Structured summaries highlighted key patient signals and flagged cases requiring intervention.",
                                    es: "Los resúmenes estructurados destacaban las señales clave de los pacientes y marcaban los casos que requerían intervención.",
                                    ca: "Els resums estructurats destacaven els senyals clau dels pacients i marcaven els casos que requerien intervenció."
                                  }[x]
                                }
                              )
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(te, { children: [
                  /* @__PURE__ */ s(Xe, { label: f("detail.focus", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0,
                        maxWidth: "600px"
                      },
                      children: y.focusHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ p(te, { delay: 0.1, children: [
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.5)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 32px)",
                        maxWidth: "640px"
                      },
                      children: y.focusBody[0]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(242,242,242,0.55)",
                        marginTop: 0,
                        marginBottom: 0,
                        maxWidth: "640px",
                        fontStyle: "italic"
                      },
                      children: y.focusBody[1]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(te, { children: [
                  /* @__PURE__ */ s(Xe, { label: f("detail.impact", x) }),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: a ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(20px, 2.5vw, 40px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: y.impactHeading
                    }
                  )
                ] }),
                /* @__PURE__ */ s("div", { style: { display: "grid", gap: 0 }, children: y.impactBullets.map((h, v) => /* @__PURE__ */ s(te, { delay: v * 0.06, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            width: "6px",
                            height: "6px",
                            backgroundColor: ei,
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 18px)",
                            fontWeight: 400,
                            lineHeight: 1.55,
                            color: "rgba(242,242,242,0.6)"
                          },
                          children: h
                        }
                      )
                    ]
                  }
                ) }, v)) })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: a ? "64px" : "120px" }, children: /* @__PURE__ */ p(te, { children: [
                /* @__PURE__ */ s(Xe, { label: f("detail.whatThisProjectShaped", x) }),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.65)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "700px"
                    },
                    children: y.reflectionTexts[0]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.45)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 28px)",
                      maxWidth: "700px"
                    },
                    children: y.reflectionTexts[1]
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.55)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "700px",
                      fontStyle: "italic"
                    },
                    children: y.reflectionTexts[2]
                  }
                )
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: a ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(te, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.3)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", x)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: n
                      }
                    ),
                    /* @__PURE__ */ s(vf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function vf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        textDecoration: "none",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const Fl = expSchiebel, Xt = "#00B6B6", Ye = [0.22, 1, 0.36, 1], bf = Fl;
function wf(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function Z({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: Ye },
      children: e
    }
  );
}
function $e({ label: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 10px)",
        marginBottom: "clamp(24px, 3vw, 48px)"
      },
      children: [
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": !0,
            style: {
              width: "clamp(16px, 1.5vw, 24px)",
              height: "1px",
              backgroundColor: Xt,
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 0.85vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: Xt
            },
            children: e
          }
        )
      ]
    }
  );
}
function Ti({
  children: e,
  isMobile: t
}) {
  return /* @__PURE__ */ s(
    "h2",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: t ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: "-0.04em",
        color: "#F2F2F2",
        marginTop: 0,
        marginBottom: "clamp(20px, 2.5vw, 40px)",
        marginLeft: 0,
        marginRight: 0
      },
      children: e
    }
  );
}
function dt({ children: e }) {
  return /* @__PURE__ */ s(
    "p",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(15px, 1.2vw, 18px)",
        fontWeight: 400,
        lineHeight: 1.65,
        color: "rgba(242,242,242,0.5)",
        marginTop: 0,
        marginBottom: "clamp(16px, 2vw, 32px)",
        maxWidth: "640px"
      },
      children: e
    }
  );
}
function Sf({
  onBack: e,
  onSeeAll: t,
  onNext: i,
  nextProjectName: n
}) {
  const a = wf(), o = I(null), { scrollYProgress: r } = Fe({
    target: o,
    offset: ["start start", "end start"]
  }), l = R(r, [0, 1], [1, 1.1]), c = R(r, [0, 0.8], [1, 0]), d = a ? "16px" : "48px", u = "920px", [m, g] = T(!1), [S, b] = T(!1), { lang: x } = V(), y = je("viavia", x), { isLight: C } = ze();
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": C ? "light" : "dark",
      style: {
        backgroundColor: C ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Ye },
            onClick: e,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              left: a ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: m ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", x)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Ye },
            onClick: (h) => {
              h.preventDefault(), t();
            },
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              right: a ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: S ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", x)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: a }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: o,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: l,
                    opacity: c
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: bf,
                      alt: "Schiebel ILS product support placeholder showing maintenance documentation, master data, ERP article creation, BOM checks, and FMEA coordination",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: a ? "32px" : "64px",
                    left: d,
                    right: d,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: Ye },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["ILS", "UAV", "FMEA"].map((h) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.75vw, 12px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.55)"
                            },
                            children: [
                              "#",
                              h
                            ]
                          },
                          h
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: Ye },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(32px, 10vw, 56px)" : "clamp(48px, 5.5vw, 88px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Schiebel ILS"
                      }
                    ) }),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1, delay: 0.4, ease: Ye },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(18px, 5vw, 28px)" : "clamp(20px, 2vw, 32px)",
                          fontWeight: 300,
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          color: "rgba(242,242,242,0.6)",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Product Support Intern"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: Ye },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(11px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: y.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: u,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: d,
              paddingRight: d,
              paddingTop: a ? "64px" : "120px",
              paddingBottom: a ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: a }),
              /* @__PURE__ */ p(Z, { children: [
                /* @__PURE__ */ s($e, { label: f("detail.context", x) }),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: y.contextHeading
                  }
                ),
                /* @__PURE__ */ s(dt, { children: y.contextBody[0] }),
                y.contextBody[1] && /* @__PURE__ */ s(dt, { children: y.contextBody[1] })
              ] }),
              y.metrics && y.metrics.length > 0 && /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    marginTop: a ? "64px" : "120px",
                    display: "grid",
                    gridTemplateColumns: a ? "1fr" : "1fr 1fr 1fr",
                    gap: "clamp(12px, 1.5vw, 24px)"
                  },
                  children: y.metrics.map((h, v) => /* @__PURE__ */ s(Z, { delay: v * 0.1, children: /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        backgroundColor: "rgba(255,255,255,0.025)",
                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "clamp(28px, 3vw, 48px)",
                        paddingBottom: "clamp(28px, 3vw, 48px)",
                        paddingLeft: "clamp(24px, 2.5vw, 40px)",
                        paddingRight: "clamp(24px, 2.5vw, 40px)"
                      },
                      children: [
                        /* @__PURE__ */ s(
                          "div",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(28px, 3.5vw, 48px)",
                              fontWeight: 600,
                              lineHeight: 1,
                              letterSpacing: "-0.04em",
                              color: Xt,
                              marginBottom: "clamp(8px, 1vw, 16px)"
                            },
                            children: h.value
                          }
                        ),
                        /* @__PURE__ */ s(
                          "div",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(13px, 1vw, 16px)",
                              fontWeight: 400,
                              lineHeight: 1.5,
                              color: "rgba(242,242,242,0.55)"
                            },
                            children: h.label
                          }
                        )
                      ]
                    }
                  ) }, v))
                }
              ),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(Z, { children: [
                  /* @__PURE__ */ s($e, { label: f("detail.challenge", x) }),
                  /* @__PURE__ */ s(Ti, { isMobile: a, children: y.challengeHeading })
                ] }),
                /* @__PURE__ */ p(Z, { delay: 0.1, children: [
                  /* @__PURE__ */ s(dt, { children: y.challengeBody[0] }),
                  y.challengeBody[1] && /* @__PURE__ */ s(dt, { children: y.challengeBody[1] })
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(Z, { children: [
                  /* @__PURE__ */ s($e, { label: f("detail.myRole", x) }),
                  /* @__PURE__ */ s(Ti, { isMobile: a, children: y.roleHeading })
                ] }),
                y.roleIntro && /* @__PURE__ */ s(Z, { delay: 0.1, children: /* @__PURE__ */ s(dt, { children: y.roleIntro }) }),
                y.roleItems.map((h, v) => /* @__PURE__ */ s(Z, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: a ? "1fr" : "auto 1fr",
                      gap: a ? "8px" : "clamp(24px, 3vw, 48px)",
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(11px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            color: "rgba(242,242,242,0.5)",
                            minWidth: "40px"
                          },
                          children: h.num
                        }
                      ),
                      /* @__PURE__ */ p("div", { children: [
                        /* @__PURE__ */ s(
                          "h3",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(18px, 1.5vw, 24px)",
                              fontWeight: 500,
                              lineHeight: 1.2,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(8px, 1vw, 16px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: h.title
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 17px)",
                              fontWeight: 400,
                              lineHeight: 1.6,
                              color: "rgba(242,242,242,0.55)",
                              marginTop: 0,
                              marginBottom: 0,
                              maxWidth: "560px"
                            },
                            children: h.desc
                          }
                        )
                      ] })
                    ]
                  }
                ) }, h.num))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ s(Z, { children: /* @__PURE__ */ s($e, { label: f("detail.managingStyles", x) }) }),
                /* @__PURE__ */ s(Z, { delay: 0.1, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      backgroundColor: "rgba(255,255,255,0.025)",
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "clamp(28px, 3vw, 40px)",
                      paddingBottom: "clamp(28px, 3vw, 40px)",
                      paddingLeft: "clamp(24px, 2.5vw, 32px)",
                      paddingRight: "clamp(24px, 2.5vw, 32px)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(16px, 1.3vw, 20px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(24px, 3vw, 36px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: {
                            en: "Style collection management",
                            es: "Gestión de colecciones de estilos",
                            ca: "Gestió de col·leccions d'estils"
                          }[x]
                        }
                      ),
                      /* @__PURE__ */ p(
                        "div",
                        {
                          style: {
                            display: "grid",
                            gridTemplateColumns: a ? "1fr" : "1fr auto 1fr",
                            gap: a ? "clamp(20px, 3vw, 28px)" : "clamp(24px, 3vw, 40px)",
                            alignItems: "start"
                          },
                          children: [
                            /* @__PURE__ */ p("div", { children: [
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(10px, 0.75vw, 11px)",
                                    fontWeight: 400,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "rgba(242,242,242,0.5)",
                                    display: "block",
                                    marginBottom: "10px"
                                  },
                                  children: f("detail.systemDecisionsBefore", x)
                                }
                              ),
                              /* @__PURE__ */ s(
                                "p",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(13px, 1vw, 15px)",
                                    fontWeight: 400,
                                    lineHeight: 1.55,
                                    color: "rgba(242,242,242,0.5)",
                                    marginTop: 0,
                                    marginBottom: 0
                                  },
                                  children: {
                                    en: "Collections tracked through spreadsheets and fragmented tools.",
                                    es: "Colecciones gestionadas mediante hojas de cálculo y herramientas fragmentadas.",
                                    ca: "Col·leccions gestionades mitjançant fulls de càlcul i eines fragmentades."
                                  }[x]
                                }
                              )
                            ] }),
                            !a && /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  width: "1px",
                                  backgroundColor: "rgba(255,255,255,0.06)",
                                  alignSelf: "stretch"
                                }
                              }
                            ),
                            a && /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  width: "100%",
                                  height: "1px",
                                  backgroundColor: "rgba(255,255,255,0.06)"
                                }
                              }
                            ),
                            /* @__PURE__ */ p("div", { children: [
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(10px, 0.75vw, 11px)",
                                    fontWeight: 400,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: Xt,
                                    display: "block",
                                    marginBottom: "10px"
                                  },
                                  children: f("detail.systemDecisionsAfter", x)
                                }
                              ),
                              /* @__PURE__ */ s(
                                "p",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(13px, 1vw, 15px)",
                                    fontWeight: 400,
                                    lineHeight: 1.55,
                                    color: "rgba(242,242,242,0.65)",
                                    marginTop: 0,
                                    marginBottom: 0
                                  },
                                  children: {
                                    en: "Centralized style library with filters, status indicators, and operational views.",
                                    es: "Biblioteca de estilos centralizada con filtros, indicadores de estado y vistas operativas.",
                                    ca: "Biblioteca d'estils centralitzada amb filtres, indicadors d'estat i vistes operatives."
                                  }[x]
                                }
                              )
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(Z, { children: [
                  /* @__PURE__ */ s($e, { label: f("detail.focus", x) }),
                  /* @__PURE__ */ s(Ti, { isMobile: a, children: y.focusHeading })
                ] }),
                y.focusBody[0] && /* @__PURE__ */ s(Z, { delay: 0.1, children: /* @__PURE__ */ s(dt, { children: y.focusBody[0] }) }),
                (y.focusItems ?? []).map((h, v) => /* @__PURE__ */ s(Z, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(18px, 1.5vw, 24px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(8px, 1vw, 16px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: h.title
                        }
                      ),
                      /* @__PURE__ */ s(
                        "p",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(14px, 1.1vw, 17px)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: "rgba(242,242,242,0.55)",
                            marginTop: 0,
                            marginBottom: 0,
                            maxWidth: "560px"
                          },
                          children: h.desc
                        }
                      )
                    ]
                  }
                ) }, v))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(Z, { children: [
                  /* @__PURE__ */ s($e, { label: f("detail.impact", x) }),
                  /* @__PURE__ */ s(Ti, { isMobile: a, children: y.impactHeading })
                ] }),
                /* @__PURE__ */ s("div", { style: { display: "grid", gap: 0 }, children: y.impactBullets.map((h, v) => /* @__PURE__ */ s(Z, { delay: v * 0.06, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            width: "6px",
                            height: "6px",
                            backgroundColor: Xt,
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 18px)",
                            fontWeight: 400,
                            lineHeight: 1.55,
                            color: "rgba(242,242,242,0.6)"
                          },
                          children: h
                        }
                      )
                    ]
                  }
                ) }, v)) })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: a ? "64px" : "120px" }, children: /* @__PURE__ */ p(Z, { children: [
                /* @__PURE__ */ s($e, { label: f("detail.whatThisProjectShaped", x) }),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.65)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "700px"
                    },
                    children: y.reflectionTexts[0]
                  }
                ),
                y.reflectionTexts[1] && /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.55)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "700px"
                    },
                    children: y.reflectionTexts[1]
                  }
                ),
                y.reflectionTexts[2] && /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.55)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "700px",
                      fontStyle: "italic"
                    },
                    children: y.reflectionTexts[2]
                  }
                )
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: a ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(Z, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.55)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", x)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: n
                      }
                    ),
                    /* @__PURE__ */ s(Cf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function Cf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const kl = expGlock, Zi = "#00B6B6", Me = [0.22, 1, 0.36, 1], Tf = kl;
function If(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function se({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: Me },
      children: e
    }
  );
}
function pt({ label: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 10px)",
        marginBottom: "clamp(24px, 3vw, 48px)"
      },
      children: [
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": !0,
            style: {
              width: "clamp(16px, 1.5vw, 24px)",
              height: "1px",
              backgroundColor: Zi,
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(10px, 0.85vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: Zi
            },
            children: e
          }
        )
      ]
    }
  );
}
function Ii({
  children: e,
  isMobile: t
}) {
  return /* @__PURE__ */ s(
    "h2",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: t ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: "-0.04em",
        color: "#F2F2F2",
        marginTop: 0,
        marginBottom: "clamp(20px, 2.5vw, 40px)",
        marginLeft: 0,
        marginRight: 0
      },
      children: e
    }
  );
}
function In({ children: e }) {
  return /* @__PURE__ */ s(
    "p",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(15px, 1.2vw, 18px)",
        fontWeight: 400,
        lineHeight: 1.65,
        color: "rgba(242,242,242,0.5)",
        marginTop: 0,
        marginBottom: "clamp(16px, 2vw, 32px)",
        maxWidth: "640px"
      },
      children: e
    }
  );
}
function Ff({
  value: e,
  label: t,
  delay: i
}) {
  const n = I(null), a = M(n, { once: !0, margin: "-40px" });
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: n,
      initial: { opacity: 0, y: 30 },
      animate: a ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8, delay: i, ease: Me },
      style: {
        backgroundColor: "rgba(255,255,255,0.025)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "clamp(28px, 3vw, 48px)",
        paddingBottom: "clamp(28px, 3vw, 48px)",
        paddingLeft: "clamp(24px, 2.5vw, 40px)",
        paddingRight: "clamp(24px, 2.5vw, 40px)"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(18px, 1.5vw, 24px)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: Zi,
              marginBottom: "clamp(8px, 1vw, 16px)"
            },
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(242,242,242,0.55)"
            },
            children: t
          }
        )
      ]
    }
  );
}
function kf({
  onBack: e,
  onSeeAll: t,
  onNext: i,
  nextProjectName: n
}) {
  const a = If(), o = I(null), { scrollYProgress: r } = Fe({
    target: o,
    offset: ["start start", "end start"]
  }), l = R(r, [0, 1], [1, 1.1]), c = R(r, [0, 0.8], [1, 0]), d = a ? "16px" : "48px", u = "920px", [m, g] = T(!1), [S, b] = T(!1), { lang: x } = V(), y = je("fourlink", x), { isLight: C } = ze();
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": C ? "light" : "dark",
      style: {
        backgroundColor: C ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Me },
            onClick: e,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              left: a ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: m ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", x)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Me },
            onClick: (h) => {
              h.preventDefault(), t();
            },
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              right: a ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: S ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", x)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: a }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: o,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: l,
                    opacity: c
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: Tf,
                      alt: "Glock precision engineering experience image",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: a ? "32px" : "64px",
                    left: d,
                    right: d,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: Me },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["Precision", "Engineering", "Quality"].map((h) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.75vw, 12px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.5)",
                              border: "1px solid rgba(242,242,242,0.12)",
                              borderRadius: "12px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              paddingLeft: "14px",
                              paddingRight: "14px"
                            },
                            children: [
                              "#",
                              h
                            ]
                          },
                          h
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: Me },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(32px, 10vw, 56px)" : "clamp(48px, 5.5vw, 88px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Glock"
                      }
                    ) }),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1, delay: 0.4, ease: Me },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(18px, 5vw, 28px)" : "clamp(20px, 2vw, 32px)",
                          fontWeight: 300,
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          color: "rgba(242,242,242,0.6)",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Precision Engineering Context"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: Me },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(11px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: y.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: u,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: d,
              paddingRight: d,
              paddingTop: a ? "64px" : "120px",
              paddingBottom: a ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: a }),
              /* @__PURE__ */ p(se, { children: [
                /* @__PURE__ */ s(pt, { label: f("detail.overview", x) }),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: y.contextHeading
                  }
                ),
                y.contextBody.map((h, v) => /* @__PURE__ */ s(In, { children: h }, v))
              ] }),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    marginTop: a ? "64px" : "120px",
                    display: "grid",
                    gridTemplateColumns: a ? "1fr" : "1fr 1fr 1fr",
                    gap: "clamp(12px, 1.5vw, 24px)"
                  },
                  children: y.metrics?.map((h, v) => /* @__PURE__ */ s(
                    Ff,
                    {
                      value: h.value,
                      label: h.label,
                      delay: v * 0.1
                    },
                    v
                  ))
                }
              ),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(se, { children: [
                  /* @__PURE__ */ s(pt, { label: f("detail.challenge", x) }),
                  /* @__PURE__ */ s(Ii, { isMobile: a, children: y.challengeHeading })
                ] }),
                /* @__PURE__ */ s(se, { delay: 0.1, children: y.challengeBody.map((h, v) => /* @__PURE__ */ s(In, { children: h }, v)) })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(se, { children: [
                  /* @__PURE__ */ s(pt, { label: f("detail.myRole", x) }),
                  /* @__PURE__ */ s(Ii, { isMobile: a, children: y.roleHeading })
                ] }),
                /* @__PURE__ */ s(se, { delay: 0.1, children: /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(15px, 1.2vw, 18px)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                      color: "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: "clamp(16px, 2vw, 32px)",
                      maxWidth: "640px"
                    },
                    children: y.roleIntro
                  }
                ) }),
                y.roleItems.map((h, v) => /* @__PURE__ */ s(se, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: a ? "1fr" : "auto 1fr",
                      gap: a ? "8px" : "clamp(24px, 3vw, 48px)",
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(11px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            color: "rgba(242,242,242,0.5)",
                            minWidth: "40px"
                          },
                          children: h.num
                        }
                      ),
                      /* @__PURE__ */ p("div", { children: [
                        /* @__PURE__ */ s(
                          "h3",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(18px, 1.5vw, 24px)",
                              fontWeight: 500,
                              lineHeight: 1.2,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(8px, 1vw, 16px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: h.title
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 17px)",
                              fontWeight: 400,
                              lineHeight: 1.6,
                              color: "rgba(242,242,242,0.55)",
                              marginTop: 0,
                              marginBottom: 0,
                              maxWidth: "560px"
                            },
                            children: h.desc
                          }
                        )
                      ] })
                    ]
                  }
                ) }, h.num))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(se, { children: [
                  /* @__PURE__ */ s(pt, { label: f("detail.focus", x) }),
                  /* @__PURE__ */ s(Ii, { isMobile: a, children: y.focusHeading })
                ] }),
                /* @__PURE__ */ s(se, { delay: 0.05, children: /* @__PURE__ */ s(In, { children: y.focusIntro }) }),
                (y.focusItems ?? []).map((h, v) => /* @__PURE__ */ s(se, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(18px, 1.5vw, 24px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(8px, 1vw, 16px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: h.title
                        }
                      ),
                      /* @__PURE__ */ s(
                        "p",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(14px, 1.1vw, 17px)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: "rgba(242,242,242,0.55)",
                            marginTop: 0,
                            marginBottom: 0,
                            maxWidth: "560px"
                          },
                          children: h.desc
                        }
                      )
                    ]
                  }
                ) }, v))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(se, { children: [
                  /* @__PURE__ */ s(pt, { label: f("detail.impact", x) }),
                  /* @__PURE__ */ s(Ii, { isMobile: a, children: y.impactHeading })
                ] }),
                /* @__PURE__ */ s("div", { style: { display: "grid", gap: 0 }, children: y.impactBullets.map((h, v) => /* @__PURE__ */ s(se, { delay: v * 0.06, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            width: "6px",
                            height: "6px",
                            backgroundColor: Zi,
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 18px)",
                            fontWeight: 400,
                            lineHeight: 1.55,
                            color: "rgba(242,242,242,0.6)"
                          },
                          children: h
                        }
                      )
                    ]
                  }
                ) }, v)) })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: a ? "64px" : "120px" }, children: /* @__PURE__ */ p(se, { children: [
                /* @__PURE__ */ s(pt, { label: f("detail.reflection", x) }),
                y.reflectionTexts.map((h, v) => /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: v === 0 ? "rgba(242,242,242,0.55)" : "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: v < y.reflectionTexts.length - 1 ? "clamp(16px, 2vw, 28px)" : 0,
                      maxWidth: "700px",
                      fontStyle: v === y.reflectionTexts.length - 1 ? "italic" : void 0
                    },
                    children: h
                  },
                  v
                ))
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: a ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(se, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.55)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", x)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: n
                      }
                    ),
                    /* @__PURE__ */ s(Lf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function Lf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const Ll = expFfg, ti = "#00B6B6", ge = [0.22, 1, 0.36, 1], Af = Ll;
function zf(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function ie({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: ge },
      children: e
    }
  );
}
function Ge({ label: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 10px)",
        marginBottom: "clamp(24px, 3vw, 48px)"
      },
      children: [
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": !0,
            style: {
              width: "clamp(16px, 1.5vw, 24px)",
              height: "1px",
              backgroundColor: ti,
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(10px, 0.85vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: ti
            },
            children: e
          }
        )
      ]
    }
  );
}
function Fi({
  children: e,
  isMobile: t
}) {
  return /* @__PURE__ */ s(
    "h2",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: t ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: "-0.04em",
        color: "#F2F2F2",
        marginTop: 0,
        marginBottom: "clamp(20px, 2.5vw, 40px)",
        marginLeft: 0,
        marginRight: 0
      },
      children: e
    }
  );
}
function ki({ children: e }) {
  return /* @__PURE__ */ s(
    "p",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(15px, 1.2vw, 18px)",
        fontWeight: 400,
        lineHeight: 1.65,
        color: "rgba(242,242,242,0.5)",
        marginTop: 0,
        marginBottom: "clamp(16px, 2vw, 32px)",
        maxWidth: "640px"
      },
      children: e
    }
  );
}
function Ef({
  value: e,
  label: t,
  delay: i
}) {
  const n = I(null), a = M(n, { once: !0, margin: "-40px" });
  return /* @__PURE__ */ p(
    w.div,
    {
      ref: n,
      initial: { opacity: 0, y: 30 },
      animate: a ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8, delay: i, ease: ge },
      style: {
        backgroundColor: "rgba(255,255,255,0.025)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "clamp(28px, 3vw, 48px)",
        paddingBottom: "clamp(28px, 3vw, 48px)",
        paddingLeft: "clamp(24px, 2.5vw, 40px)",
        paddingRight: "clamp(24px, 2.5vw, 40px)"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(18px, 1.5vw, 24px)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: ti,
              marginBottom: "clamp(8px, 1vw, 16px)"
            },
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(242,242,242,0.55)"
            },
            children: t
          }
        )
      ]
    }
  );
}
const Fo = [
  { key: "action", en: "User action", es: "Acción del usuario", ca: "Acció de l'usuari", icon: "🎯" },
  { key: "points", en: "Earn points", es: "Ganar puntos", ca: "Guanyar punts", icon: "⭐" },
  { key: "level", en: "Progress level", es: "Subir de nivel", ca: "Pujar de nivell", icon: "📈" },
  { key: "engagement", en: "Unlock engagement", es: "Desbloquear engagement", ca: "Desbloquejar engagement", icon: "🔓" }
];
function Bf({ isMobile: e, lang: t }) {
  const i = I(null), n = M(i, { once: !0, margin: "-40px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, ease: ge },
      style: {
        backgroundColor: "rgba(255,255,255,0.025)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "clamp(32px, 4vw, 56px)",
        paddingBottom: "clamp(32px, 4vw, 56px)",
        paddingLeft: "clamp(24px, 3vw, 48px)",
        paddingRight: "clamp(24px, 3vw, 48px)",
        overflow: "hidden"
      },
      children: /* @__PURE__ */ s(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: e ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "0"
          },
          children: Fo.map((a, o) => /* @__PURE__ */ p(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: e ? "column" : "row",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ p(
                  w.div,
                  {
                    initial: { opacity: 0, scale: 0.85 },
                    animate: n ? { opacity: 1, scale: 1 } : {},
                    transition: { duration: 0.6, delay: 0.15 + o * 0.12, ease: ge },
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0,182,182,0.06)",
                      border: "1px solid rgba(0,182,182,0.15)",
                      borderRadius: "16px",
                      paddingTop: "clamp(20px, 2.5vw, 32px)",
                      paddingBottom: "clamp(20px, 2.5vw, 32px)",
                      paddingLeft: "clamp(16px, 2vw, 28px)",
                      paddingRight: "clamp(16px, 2vw, 28px)",
                      minWidth: e ? "180px" : "140px",
                      textAlign: "center"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: { fontSize: "clamp(24px, 2vw, 32px)", marginBottom: "clamp(8px, 1vw, 12px)" },
                          role: "img",
                          "aria-hidden": "true",
                          children: a.icon
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(12px, 0.95vw, 15px)",
                            fontWeight: 500,
                            lineHeight: 1.3,
                            color: "#F2F2F2",
                            letterSpacing: "-0.01em"
                          },
                          children: a[t]
                        }
                      )
                    ]
                  }
                ),
                o < Fo.length - 1 && /* @__PURE__ */ s(
                  w.div,
                  {
                    initial: { opacity: 0 },
                    animate: n ? { opacity: 1 } : {},
                    transition: { duration: 0.5, delay: 0.3 + o * 0.12, ease: ge },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: e ? "8px 0" : "0 clamp(8px, 1vw, 16px)",
                      transform: e ? "rotate(90deg)" : "none"
                    },
                    children: /* @__PURE__ */ s(
                      "svg",
                      {
                        width: "24",
                        height: "12",
                        viewBox: "0 0 24 12",
                        fill: "none",
                        style: { display: "block" },
                        children: /* @__PURE__ */ s(
                          "path",
                          {
                            d: "M0 6H22M22 6L17 1M22 6L17 11",
                            stroke: ti,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            opacity: "0.6"
                          }
                        )
                      }
                    )
                  }
                )
              ]
            },
            a.key
          ))
        }
      )
    }
  );
}
function Mf({
  onBack: e,
  onSeeAll: t,
  onNext: i,
  nextProjectName: n
}) {
  const a = zf(), o = I(null), { scrollYProgress: r } = Fe({
    target: o,
    offset: ["start start", "end start"]
  }), l = R(r, [0, 1], [1, 1.1]), c = R(r, [0, 0.8], [1, 0]), d = a ? "16px" : "48px", u = "920px", [m, g] = T(!1), [S, b] = T(!1), { lang: x } = V(), y = je("affinity", x), { isLight: C } = ze();
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": C ? "light" : "dark",
      style: {
        backgroundColor: C ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: ge },
            onClick: e,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              left: a ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: m ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", x)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: ge },
            onClick: (h) => {
              h.preventDefault(), t();
            },
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              right: a ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: S ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", x)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: a }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: o,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: l,
                    opacity: c
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: Af,
                      alt: "FFG thematic programs placeholder showing aviation research, energy transition data, program documents, and event support",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: a ? "32px" : "64px",
                    left: d,
                    right: d,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: ge },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["Aviation", "Energy", "Programs"].map((h) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.75vw, 12px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.5)",
                              border: "1px solid rgba(242,242,242,0.12)",
                              borderRadius: "12px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              paddingLeft: "14px",
                              paddingRight: "14px"
                            },
                            children: [
                              "#",
                              h
                            ]
                          },
                          h
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: ge },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(32px, 10vw, 56px)" : "clamp(48px, 5.5vw, 88px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "FFG"
                      }
                    ) }),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1, delay: 0.4, ease: ge },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(18px, 5vw, 28px)" : "clamp(20px, 2vw, 32px)",
                          fontWeight: 300,
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          color: "rgba(242,242,242,0.6)",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Thematic Programs"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: ge },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(11px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: y.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: u,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: d,
              paddingRight: d,
              paddingTop: a ? "64px" : "120px",
              paddingBottom: a ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: a }),
              /* @__PURE__ */ p(ie, { children: [
                /* @__PURE__ */ s(Ge, { label: f("detail.overview", x) }),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: y.contextHeading
                  }
                ),
                y.contextBody.map((h, v) => /* @__PURE__ */ s(ki, { children: h }, v))
              ] }),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    marginTop: a ? "64px" : "120px",
                    display: "grid",
                    gridTemplateColumns: a ? "1fr" : "1fr 1fr 1fr",
                    gap: "clamp(12px, 1.5vw, 24px)"
                  },
                  children: y.metrics?.map((h, v) => /* @__PURE__ */ s(
                    Ef,
                    {
                      value: h.value,
                      label: h.label,
                      delay: v * 0.1
                    },
                    v
                  ))
                }
              ),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ie, { children: [
                  /* @__PURE__ */ s(Ge, { label: f("detail.challenge", x) }),
                  /* @__PURE__ */ s(Fi, { isMobile: a, children: y.challengeHeading })
                ] }),
                /* @__PURE__ */ s(ie, { delay: 0.1, children: y.challengeBody.map((h, v) => /* @__PURE__ */ s(ki, { children: h }, v)) })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ie, { children: [
                  /* @__PURE__ */ s(Ge, { label: f("detail.myRole", x) }),
                  /* @__PURE__ */ s(Fi, { isMobile: a, children: y.roleHeading })
                ] }),
                /* @__PURE__ */ s(ie, { delay: 0.1, children: /* @__PURE__ */ s(ki, { children: y.roleIntro }) }),
                y.roleItems.map((h, v) => /* @__PURE__ */ s(ie, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: a ? "1fr" : "auto 1fr",
                      gap: a ? "8px" : "clamp(24px, 3vw, 48px)",
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(11px, 0.85vw, 13px)",
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            color: "rgba(242,242,242,0.5)",
                            minWidth: "40px"
                          },
                          children: h.num
                        }
                      ),
                      /* @__PURE__ */ p("div", { children: [
                        /* @__PURE__ */ s(
                          "h3",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(18px, 1.5vw, 24px)",
                              fontWeight: 500,
                              lineHeight: 1.2,
                              letterSpacing: "-0.02em",
                              color: "#F2F2F2",
                              marginTop: 0,
                              marginBottom: "clamp(8px, 1vw, 16px)",
                              marginLeft: 0,
                              marginRight: 0
                            },
                            children: h.title
                          }
                        ),
                        /* @__PURE__ */ s(
                          "p",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 17px)",
                              fontWeight: 400,
                              lineHeight: 1.6,
                              color: "rgba(242,242,242,0.55)",
                              marginTop: 0,
                              marginBottom: 0,
                              maxWidth: "560px"
                            },
                            children: h.desc
                          }
                        )
                      ] })
                    ]
                  }
                ) }, h.num))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ s(ie, { children: /* @__PURE__ */ s(Ge, { label: f("detail.gamificationMechanics", x) }) }),
                /* @__PURE__ */ s(Bf, { isMobile: a, lang: x })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ie, { children: [
                  /* @__PURE__ */ s(Ge, { label: f("detail.focus", x) }),
                  /* @__PURE__ */ s(Fi, { isMobile: a, children: y.focusHeading })
                ] }),
                /* @__PURE__ */ s(ie, { delay: 0.05, children: /* @__PURE__ */ s(ki, { children: y.focusIntro }) }),
                (y.focusItems ?? []).map((h, v) => /* @__PURE__ */ s(ie, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(18px, 1.5vw, 24px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(8px, 1vw, 16px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: h.title
                        }
                      ),
                      /* @__PURE__ */ s(
                        "p",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(14px, 1.1vw, 17px)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: "rgba(242,242,242,0.55)",
                            marginTop: 0,
                            marginBottom: 0,
                            maxWidth: "560px"
                          },
                          children: h.desc
                        }
                      )
                    ]
                  }
                ) }, v))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(ie, { children: [
                  /* @__PURE__ */ s(Ge, { label: f("detail.impact", x) }),
                  /* @__PURE__ */ s(Fi, { isMobile: a, children: y.impactHeading })
                ] }),
                /* @__PURE__ */ s("div", { style: { display: "grid", gap: 0 }, children: y.impactBullets.map((h, v) => /* @__PURE__ */ s(ie, { delay: v * 0.06, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            width: "6px",
                            height: "6px",
                            backgroundColor: ti,
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 18px)",
                            fontWeight: 400,
                            lineHeight: 1.55,
                            color: "rgba(242,242,242,0.6)"
                          },
                          children: h
                        }
                      )
                    ]
                  }
                ) }, v)) })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: a ? "64px" : "120px" }, children: /* @__PURE__ */ p(ie, { children: [
                /* @__PURE__ */ s(Ge, { label: f("detail.reflection", x) }),
                y.reflectionTexts.map((h, v) => /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: v === 0 ? "rgba(242,242,242,0.55)" : "rgba(242,242,242,0.5)",
                      marginTop: 0,
                      marginBottom: v < y.reflectionTexts.length - 1 ? "clamp(16px, 2vw, 28px)" : 0,
                      maxWidth: "700px",
                      fontStyle: v === y.reflectionTexts.length - 1 ? "italic" : void 0
                    },
                    children: h
                  },
                  v
                ))
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: a ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(ie, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.55)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", x)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: n
                      }
                    ),
                    /* @__PURE__ */ s(Vf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function Vf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const Al = globalThis.__GLOBALS__.getAssetURL("24c64122457aa62152570df329d54a0ef932cd23.png"), Yi = "#00B6B6", Qe = [0.22, 1, 0.36, 1], Df = Al;
function Pf(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function me({
  children: e,
  delay: t = 0
}) {
  const i = I(null), n = M(i, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: i,
      initial: { opacity: 0, y: 40 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t, ease: Qe },
      children: e
    }
  );
}
function Dt({ label: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 10px)",
        marginBottom: "clamp(24px, 3vw, 48px)"
      },
      children: [
        /* @__PURE__ */ s(
          "span",
          {
            "aria-hidden": !0,
            style: {
              width: "clamp(16px, 1.5vw, 24px)",
              height: "1px",
              backgroundColor: Yi,
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 0.85vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: Yi
            },
            children: e
          }
        )
      ]
    }
  );
}
function ko({
  children: e,
  isMobile: t
}) {
  return /* @__PURE__ */ s(
    "h2",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: t ? "clamp(24px, 7vw, 40px)" : "clamp(28px, 2.8vw, 44px)",
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: "-0.04em",
        color: "#F2F2F2",
        marginTop: 0,
        marginBottom: "clamp(20px, 2.5vw, 40px)",
        marginLeft: 0,
        marginRight: 0
      },
      children: e
    }
  );
}
function Li({ children: e }) {
  return /* @__PURE__ */ s(
    "p",
    {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(15px, 1.2vw, 18px)",
        fontWeight: 400,
        lineHeight: 1.65,
        color: "rgba(242,242,242,0.5)",
        marginTop: 0,
        marginBottom: "clamp(16px, 2vw, 32px)",
        maxWidth: "640px"
      },
      children: e
    }
  );
}
function Rf({
  onBack: e,
  onSeeAll: t,
  onNext: i,
  nextProjectName: n
}) {
  const a = Pf(), o = I(null), { scrollYProgress: r } = Fe({
    target: o,
    offset: ["start start", "end start"]
  }), l = R(r, [0, 1], [1, 1.1]), c = R(r, [0, 0.8], [1, 0]), d = a ? "16px" : "48px", u = "920px", [m, g] = T(!1), [S, b] = T(!1), { lang: x } = V(), y = je("tao", x), { isLight: C } = ze();
  return /* @__PURE__ */ p(
    "div",
    {
      "data-detail-theme": C ? "light" : "dark",
      style: {
        backgroundColor: C ? "#FAFAFA" : "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Qe },
            onClick: e,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              left: a ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: m ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", x)
            ]
          }
        ),
        /* @__PURE__ */ s(
          w.a,
          {
            href: "#/projects",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: Qe },
            onClick: (h) => {
              h.preventDefault(), t();
            },
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            style: {
              position: "fixed",
              top: a ? "52px" : "72px",
              right: a ? "16px" : "48px",
              zIndex: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              opacity: S ? 0.7 : 1,
              transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: f("detail.seeAllWork", x)
          }
        ),
        /* @__PURE__ */ s(He, { isMobile: a }),
        /* @__PURE__ */ p(
          "div",
          {
            ref: o,
            "data-hero-section": !0,
            style: {
              position: "relative",
              height: "100vh",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ s(
                w.div,
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    scale: l,
                    opacity: c
                  },
                  children: /* @__PURE__ */ s(
                    ue,
                    {
                      src: Df,
                      alt: "Early technical roles placeholder showing customer service, device checks, aviation safety data, and technical ticket workflows",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.3) contrast(1.05)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 55%)",
                    zIndex: 1
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: a ? "32px" : "64px",
                    left: d,
                    right: d,
                    zIndex: 2
                  },
                  children: [
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2, ease: Qe },
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: ["Service", "Safety", "Tickets"].map((h) => /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "clamp(10px, 0.75vw, 12px)",
                              fontWeight: 400,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(242,242,242,0.55)",
                              border: "1px solid rgba(242,242,242,0.12)",
                              borderRadius: "12px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              paddingLeft: "14px",
                              paddingRight: "14px"
                            },
                            children: [
                              "#",
                              h
                            ]
                          },
                          h
                        ))
                      }
                    ),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.h1,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1.1, delay: 0.3, ease: Qe },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(32px, 10vw, 56px)" : "clamp(48px, 5.5vw, 88px)",
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Early Technical Roles"
                      }
                    ) }),
                    /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                      w.p,
                      {
                        initial: { y: "110%" },
                        animate: { y: "0%" },
                        transition: { duration: 1, delay: 0.4, ease: Qe },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(18px, 5vw, 28px)" : "clamp(20px, 2vw, 32px)",
                          fontWeight: 300,
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          color: "rgba(242,242,242,0.6)",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 24px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: "Technical Service & Safety"
                      }
                    ) }),
                    /* @__PURE__ */ s(
                      w.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.8, delay: 0.6, ease: Qe },
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(12px, 0.85vw, 14px)",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: "rgba(242,242,242,0.55)"
                        },
                        children: y.heroMeta
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            "data-content-section": !0,
            style: {
              maxWidth: u,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: d,
              paddingRight: d,
              paddingTop: a ? "64px" : "120px",
              paddingBottom: a ? "64px" : "120px"
            },
            children: [
              /* @__PURE__ */ s(qe, { isMobile: a }),
              /* @__PURE__ */ p(me, { children: [
                /* @__PURE__ */ s(Dt, { label: f("detail.context", x) }),
                /* @__PURE__ */ s(
                  "h2",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                      fontWeight: 600,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#F2F2F2",
                      marginTop: 0,
                      marginBottom: "clamp(24px, 3vw, 48px)",
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: "700px"
                    },
                    children: y.contextHeading
                  }
                ),
                /* @__PURE__ */ s(Li, { children: y.contextBody[0] })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: a ? "48px" : "80px" }, children: /* @__PURE__ */ s(me, { children: /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    backgroundColor: "rgba(255,255,255,0.025)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "clamp(28px, 3vw, 48px)",
                    paddingBottom: "clamp(28px, 3vw, 48px)",
                    paddingLeft: "clamp(24px, 2.5vw, 40px)",
                    paddingRight: "clamp(24px, 2.5vw, 40px)"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(12px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: Yi,
                          display: "block",
                          marginBottom: "clamp(12px, 1.5vw, 20px)"
                        },
                        children: f("detail.role", x)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "p",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(16px, 1.3vw, 20px)",
                          fontWeight: 500,
                          lineHeight: 1.4,
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(12px, 1.5vw, 20px)"
                        },
                        children: y.roleHeading
                      }
                    ),
                    /* @__PURE__ */ s(
                      "p",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(14px, 1.1vw, 17px)",
                          fontWeight: 400,
                          lineHeight: 1.6,
                          color: "rgba(242,242,242,0.55)",
                          marginTop: 0,
                          marginBottom: 0
                        },
                        children: y.roleIntro
                      }
                    ),
                    /* @__PURE__ */ s(
                      "ul",
                      {
                        style: {
                          listStyle: "none",
                          padding: 0,
                          marginTop: "clamp(16px, 2vw, 28px)",
                          marginBottom: 0
                        },
                        children: (y.roleListItems ?? []).map((h, v) => /* @__PURE__ */ p(
                          "li",
                          {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "clamp(10px, 1vw, 16px)",
                              marginTop: v > 0 ? "clamp(10px, 1vw, 16px)" : 0
                            },
                            children: [
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    width: "4px",
                                    height: "4px",
                                    backgroundColor: "rgba(242,242,242,0.35)",
                                    borderRadius: "50%",
                                    marginTop: "10px",
                                    flexShrink: 0
                                  }
                                }
                              ),
                              /* @__PURE__ */ s(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(14px, 1.1vw, 17px)",
                                    fontWeight: 400,
                                    lineHeight: 1.55,
                                    color: "rgba(242,242,242,0.55)"
                                  },
                                  children: h
                                }
                              )
                            ]
                          },
                          v
                        ))
                      }
                    )
                  ]
                }
              ) }) }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(me, { children: [
                  /* @__PURE__ */ s(Dt, { label: f("detail.challenge", x) }),
                  /* @__PURE__ */ s(ko, { isMobile: a, children: y.challengeHeading })
                ] }),
                /* @__PURE__ */ p(me, { delay: 0.1, children: [
                  /* @__PURE__ */ s(Li, { children: y.challengeBody[0] }),
                  /* @__PURE__ */ s(Li, { children: y.challengeBody[1] })
                ] })
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ s(me, { children: /* @__PURE__ */ s(Dt, { label: f("detail.whatIFocusedOn", x) }) }),
                /* @__PURE__ */ s(me, { delay: 0.05, children: /* @__PURE__ */ s(Li, { children: y.focusIntro }) }),
                (y.focusItems ?? []).map((h, v) => /* @__PURE__ */ s(me, { delay: v * 0.08, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      paddingTop: "clamp(24px, 3vw, 40px)",
                      paddingBottom: "clamp(24px, 3vw, 40px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(18px, 1.5vw, 24px)",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            color: "#F2F2F2",
                            marginTop: 0,
                            marginBottom: "clamp(8px, 1vw, 16px)",
                            marginLeft: 0,
                            marginRight: 0
                          },
                          children: h.title
                        }
                      ),
                      /* @__PURE__ */ s(
                        "p",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(14px, 1.1vw, 17px)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: "rgba(242,242,242,0.55)",
                            marginTop: 0,
                            marginBottom: 0,
                            maxWidth: "560px"
                          },
                          children: h.desc
                        }
                      )
                    ]
                  }
                ) }, v))
              ] }),
              /* @__PURE__ */ p("div", { style: { marginTop: a ? "64px" : "120px" }, children: [
                /* @__PURE__ */ p(me, { children: [
                  /* @__PURE__ */ s(Dt, { label: f("detail.impact", x) }),
                  /* @__PURE__ */ s(ko, { isMobile: a, children: y.impactHeading })
                ] }),
                /* @__PURE__ */ s("div", { style: { display: "grid", gap: 0 }, children: y.impactBullets.map((h, v) => /* @__PURE__ */ s(me, { delay: v * 0.06, children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      borderBottom: "1px solid rgba(242,242,242,0.06)"
                    },
                    children: [
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            width: "6px",
                            height: "6px",
                            backgroundColor: Yi,
                            borderRadius: "50%",
                            marginTop: "8px",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(15px, 1.2vw, 18px)",
                            fontWeight: 400,
                            lineHeight: 1.55,
                            color: "rgba(242,242,242,0.6)"
                          },
                          children: h
                        }
                      )
                    ]
                  }
                ) }, v)) })
              ] }),
              /* @__PURE__ */ s("div", { style: { marginTop: a ? "64px" : "120px" }, children: /* @__PURE__ */ p(me, { children: [
                /* @__PURE__ */ s(Dt, { label: f("detail.whatThisProjectShaped", x) }),
                /* @__PURE__ */ s(
                  "p",
                  {
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: a ? "clamp(20px, 6vw, 32px)" : "clamp(22px, 2.2vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: "-0.02em",
                      color: "rgba(242,242,242,0.65)",
                      marginTop: 0,
                      marginBottom: 0,
                      maxWidth: "700px"
                    },
                    children: y.reflectionTexts[0]
                  }
                )
              ] }) }),
              /* @__PURE__ */ s(
                "div",
                {
                  "data-next-project": !0,
                  style: {
                    marginTop: a ? "80px" : "160px",
                    paddingTop: "clamp(40px, 5vw, 80px)",
                    borderTop: "1px solid rgba(242,242,242,0.06)",
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ p(me, { children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(242,242,242,0.5)",
                          display: "block",
                          marginBottom: "clamp(16px, 2vw, 32px)"
                        },
                        children: f("detail.nextProject", x)
                      }
                    ),
                    /* @__PURE__ */ s(
                      "h3",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "clamp(28px, 8vw, 48px)" : "clamp(36px, 3.5vw, 56px)",
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em",
                          color: "#F2F2F2",
                          marginTop: 0,
                          marginBottom: "clamp(24px, 3vw, 48px)",
                          marginLeft: 0,
                          marginRight: 0
                        },
                        children: n
                      }
                    ),
                    /* @__PURE__ */ s(jf, { onClick: i })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
function jf({ onClick: e }) {
  const [t, i] = T(!1), { lang: n } = V();
  return /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(11px, 0.85vw, 13px)",
        fontWeight: 400,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t ? "rgba(242,242,242,0.9)" : "rgba(242,242,242,0.55)",
        transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: t ? "1px solid rgba(242,242,242,0.2)" : "1px solid rgba(242,242,242,0.08)",
        borderRadius: "12px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "32px",
        paddingRight: "32px",
        background: "none",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        f("detail.viewProject", n),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              display: "inline-block",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: t ? "translateX(3px)" : "translateX(0)"
            },
            children: "→"
          }
        )
      ]
    }
  );
}
const Lo = "#00B6B6", ji = [0.22, 1, 0.36, 1];
function qf(e) {
  return [
    {
      id: "tucuvi",
      title: "Verein sprungbrett",
      shortTitle: "FIT",
      year: f("projects.tucuvi.year", e),
      href: "#/projects/tucuvi",
      description: f("projects.tucuvi.description", e),
      tags: ["Workshops","STEM","Diversity"],
      image: xl
    },
    {
      id: "hp-parts-store",
      title: "Wiener Gesundheitsverbund",
      shortTitle: "MedTech",
      year: f("projects.hp.year", e),
      href: "#/projects/hp-parts-store",
      description: f("projects.hp.description", e),
      tags: ["MedicalTechnology","Inspection","Safety"],
      image: hl
    },
    {
      id: "affinity",
      title: "FFG",
      shortTitle: "FFG",
      year: f("projects.affinity.year", e),
      href: "#/projects/affinity",
      description: f("projects.affinity.description", e),
      tags: ["Aviation","Energy","Programs"],
      image: expFfg
    }
  ];
}
function Hf(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function Wf({
  project: e,
  index: t,
  isMobile: i,
  lang: n
}) {
  const a = I(null), o = M(a, { once: !0, margin: "-40px" }), [r, l] = T(!1);
  return /* @__PURE__ */ s(
    w.div,
    {
      ref: a,
      initial: { opacity: 0, y: 50 },
      animate: o ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: t * 0.1, ease: ji },
      style: { height: "100%" },
      children: /* @__PURE__ */ p(
        "a",
        {
          href: e.href,
          onMouseEnter: () => l(!0),
          onMouseLeave: () => l(!1),
          style: {
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "inherit",
            borderRadius: "20px",
            border: "1px solid rgba(242,242,242,0.06)",
            backgroundColor: r ? "#0D0D0D" : "#0A0A0A",
            overflow: "hidden",
            height: "100%",
            transition: "background-color 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s cubic-bezier(0.22,1,0.36,1)"
          },
          className: "all-projects-card",
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                style: {
                  position: "relative",
                  overflow: "hidden",
                  height: i ? "200px" : "260px",
                  flexShrink: 0
                },
                children: [
                  /* @__PURE__ */ s(
                    ue,
                    {
                      src: e.image,
                      alt: e.title,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "grayscale(0.45) contrast(1.08) brightness(0.8)",
                        transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                        transform: r ? "scale(1.04)" : "scale(1)"
                      }
                    }
                  ),
                  /* @__PURE__ */ s(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: r ? 1 : 0,
                        transition: "opacity 0.4s cubic-bezier(0.22,1,0.36,1)"
                      },
                      children: /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12px",
                            fontWeight: 500,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "rgba(242,242,242,0.85)",
                            border: "1px solid rgba(242,242,242,0.25)",
                            borderRadius: "50%",
                            width: "72px",
                            height: "72px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            backgroundColor: "rgba(0,0,0,0.3)"
                          },
                          children: f("projects.cursorView", n)
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                style: {
                  paddingTop: "clamp(16px, 2vw, 24px)",
                  paddingBottom: "clamp(16px, 2vw, 24px)",
                  paddingLeft: "clamp(16px, 2vw, 24px)",
                  paddingRight: "clamp(16px, 2vw, 24px)",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column"
                },
                children: [
                  /* @__PURE__ */ s(
                    "span",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(10px, 0.75vw, 12px)",
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                        color: "rgba(242,242,242,0.5)",
                        display: "block",
                        marginBottom: "clamp(10px, 1.2vw, 16px)"
                      },
                      children: e.year
                    }
                  ),
                  /* @__PURE__ */ s(
                    "h2",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(22px, 2.5vw, 36px)",
                        fontWeight: 600,
                        lineHeight: 1.05,
                        letterSpacing: "-0.03em",
                        color: "#F2F2F2",
                        marginTop: 0,
                        marginBottom: "clamp(10px, 1.2vw, 16px)",
                        marginLeft: 0,
                        marginRight: 0
                      },
                      children: e.title
                    }
                  ),
                  /* @__PURE__ */ s(
                    "p",
                    {
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(13px, 1vw, 15px)",
                        fontWeight: 400,
                        lineHeight: 1.55,
                        color: "rgba(242,242,242,0.55)",
                        marginTop: 0,
                        marginBottom: "clamp(16px, 2vw, 24px)"
                      },
                      children: e.description
                    }
                  ),
                  /* @__PURE__ */ s(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginTop: "auto",
                        paddingTop: "clamp(12px, 1.5vw, 20px)"
                      },
                      children: e.tags.map((c) => /* @__PURE__ */ s(
                        "span",
                        {
                          style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(9px, 0.7vw, 11px)",
                            fontWeight: 400,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "rgba(242,242,242,0.25)",
                            border: "1px solid rgba(242,242,242,0.06)",
                            borderRadius: "10px",
                            paddingTop: "4px"
                          },
                          children: c
                        },
                        c
                      ))
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function Uf({ onBack: e }) {
  const t = Hf(), i = t ? "16px" : "48px", [n, a] = T(!1), { lang: o } = V(), r = I(null), l = M(r, { once: !0 }), c = [...Zn(o), ...qf(o)];
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        backgroundColor: "#000",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          w.button,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.3, ease: ji },
            onClick: e,
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            style: {
              position: "fixed",
              top: t ? "52px" : "72px",
              left: t ? "16px" : "48px",
              zIndex: 100,
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              mixBlendMode: "difference",
              padding: "8px 0"
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  style: {
                    display: "inline-block",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: n ? "translateX(-4px)" : "translateX(0)"
                  },
                  children: "←"
                }
              ),
              f("detail.back", o)
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            ref: r,
            style: {
              paddingTop: t ? "120px" : "160px",
              paddingBottom: t ? "48px" : "80px",
              paddingLeft: i,
              paddingRight: i
            },
            children: [
              /* @__PURE__ */ p(
                w.div,
                {
                  initial: { opacity: 0 },
                  animate: l ? { opacity: 1 } : {},
                  transition: { duration: 0.7, ease: ji },
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(6px, 0.6vw, 10px)",
                    marginBottom: "clamp(24px, 3vw, 48px)"
                  },
                  children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        "aria-hidden": !0,
                        style: {
                          width: "clamp(16px, 1.5vw, 24px)",
                          height: "1px",
                          backgroundColor: Lo,
                          flexShrink: 0
                        }
                      }
                    ),
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: Lo
                        },
                        children: f("nav.work", o)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ s(
                w.h1,
                {
                  initial: { y: "110%" },
                  animate: l ? { y: "0%" } : {},
                  transition: { duration: 1.1, delay: 0.2, ease: ji },
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: t ? "clamp(36px, 11vw, 64px)" : "clamp(56px, 6vw, 96px)",
                    fontWeight: 600,
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                    color: "#F2F2F2",
                    marginTop: 0,
                    marginBottom: "clamp(16px, 2vw, 32px)",
                    marginLeft: 0,
                    marginRight: 0
                  },
                  children: f("allProjects.title", o)
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              paddingLeft: t ? "12px" : "32px",
              paddingRight: t ? "12px" : "32px",
              paddingBottom: t ? "64px" : "120px",
              display: "grid",
              gridTemplateColumns: t ? "1fr" : "1fr 1fr",
              gap: t ? "12px" : "16px"
            },
            children: c.map((d, u) => /* @__PURE__ */ s(
              Wf,
              {
                project: d,
                index: u,
                isMobile: t,
                lang: o
              },
              d.id
            ))
          }
        ),
        /* @__PURE__ */ s(Ae, {})
      ]
    }
  );
}
const Of = {
  en: {
    title: "Cookie Policy",
    updated: "Last updated: March 6, 2026",
    sections: [
      { heading: "1. What are cookies?", body: "Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site." },
      { heading: "2. How we use cookies", body: "This website uses cookies managed through Cookiebot to ensure compliance with GDPR and Spanish AEPD regulations. We classify cookies into the following categories:", subSections: [
        { heading: "Necessary cookies", body: "These cookies are essential for the website to function properly. They enable basic features like page navigation, access to secure areas, and consent management. The website cannot function properly without these cookies." },
        { heading: "Analytics cookies", body: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are the most and least popular and see how visitors move around the site. We use Google Analytics (measurement ID: G-LS8PYVHG47) for this purpose. All information these cookies collect is aggregated and therefore anonymous." },
        { heading: "Marketing cookies", body: "These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device." }
      ] },
      { heading: "3. Managing your cookie preferences", body: "When you first visit our website, a cookie consent banner will appear allowing you to accept all cookies, reject non-essential cookies, or configure your preferences by category. You may modify or withdraw your consent at any time by accessing the cookie settings through the cookie icon available on the website." },
      { heading: "4. Consent duration", body: "Your cookie consent preferences are stored for 12 months in accordance with AEPD guidelines. After this period, you will be asked to renew your consent." },
      { heading: "5. Contact", body: "If you have any questions about our cookie policy, please contact us at" }
    ]
  },
  es: {
    title: "Política de cookies",
    updated: "Última actualización: 6 de marzo de 2026",
    sections: [
      { heading: "1. ¿Qué son las cookies?", body: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o teléfono móvil) cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de forma más eficiente, así como para proporcionar información a los propietarios del sitio." },
      { heading: "2. Cómo usamos las cookies", body: "Este sitio web utiliza cookies gestionadas a través de Cookiebot para garantizar el cumplimiento del GDPR y las regulaciones de la AEPD española. Clasificamos las cookies en las siguientes categorías:", subSections: [
        { heading: "Cookies necesarias", body: "Estas cookies son esenciales para que el sitio web funcione correctamente. Permiten funciones básicas como la navegación por páginas, el acceso a áreas seguras y la gestión del consentimiento. El sitio web no puede funcionar correctamente sin estas cookies." },
        { heading: "Cookies analíticas", body: "Estas cookies nos permiten contar las visitas y las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a entender qué páginas son las más y las menos populares y ver cómo los visitantes se mueven por el sitio. Usamos Google Analytics (ID de medición: G-LS8PYVHG47) para este propósito. Toda la información que recogen estas cookies es agregada y por tanto anónima." },
        { heading: "Cookies de marketing", body: "Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas para construir un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios. No almacenan directamente información personal, sino que se basan en la identificación única de tu navegador y dispositivo de internet." }
      ] },
      { heading: "3. Gestión de tus preferencias de cookies", body: "Cuando visites nuestro sitio web por primera vez, aparecerá un banner de consentimiento de cookies que te permitirá aceptar todas las cookies, rechazar las cookies no esenciales o configurar tus preferencias por categoría. Puedes modificar o retirar tu consentimiento en cualquier momento accediendo a la configuración de cookies a través del icono de cookie disponible en el sitio web." },
      { heading: "4. Duración del consentimiento", body: "Tus preferencias de consentimiento de cookies se almacenan durante 12 meses de acuerdo con las directrices de la AEPD. Después de este período, se te pedirá que renueves tu consentimiento." },
      { heading: "5. Contacto", body: "Si tienes alguna pregunta sobre nuestra política de cookies, contáctanos en" }
    ]
  },
  ca: {
    title: "Política de cookies",
    updated: "Última actualització: 6 de març de 2026",
    sections: [
      { heading: "1. Què són les cookies?", body: "Les cookies són petits arxius de text que s'emmagatzemen al teu dispositiu (ordinador, tauleta o telèfon mòbil) quan visites un lloc web. S'utilitzen àmpliament per fer que els llocs web funcionin de forma més eficient, així com per proporcionar informació als propietaris del lloc." },
      { heading: "2. Com fem servir les cookies", body: "Aquest lloc web utilitza cookies gestionades a través de Cookiebot per garantir el compliment del GDPR i les regulacions de l'AEPD espanyola. Classifiquem les cookies en les següents categories:", subSections: [
        { heading: "Cookies necessàries", body: "Aquestes cookies són essencials perquè el lloc web funcioni correctament. Permeten funcions bàsiques com la navegació per pàgines, l'accés a àrees segures i la gestió del consentiment. El lloc web no pot funcionar correctament sense aquestes cookies." },
        { heading: "Cookies analítiques", body: "Aquestes cookies ens permeten comptar les visites i les fonts de trànsit per poder mesurar i millorar el rendiment del nostre lloc. Ens ajuden a entendre quines pàgines són les més i les menys populars i veure com els visitants es mouen pel lloc. Utilitzem Google Analytics (ID de mesurament: G-LS8PYVHG47) per a aquest propòsit. Tota la informació que recullen aquestes cookies és agregada i per tant anònima." },
        { heading: "Cookies de màrqueting", body: "Aquestes cookies poden ser establertes a través del nostre lloc pels nostres socis publicitaris. Poden ser utilitzades per construir un perfil dels teus interessos i mostrar-te anuncis rellevants en altres llocs. No emmagatzemen directament informació personal, sinó que es basen en la identificació única del teu navegador i dispositiu d'internet." }
      ] },
      { heading: "3. Gestió de les teves preferències de cookies", body: "Quan visitis el nostre lloc web per primera vegada, apareixerà un bàner de consentiment de cookies que et permetrà acceptar totes les cookies, rebutjar les cookies no essencials o configurar les teves preferències per categoria. Pots modificar o retirar el teu consentiment en qualsevol moment accedint a la configuració de cookies a través de la icona de cookie disponible al lloc web." },
      { heading: "4. Durada del consentiment", body: "Les teves preferències de consentiment de cookies s'emmagatzemen durant 12 mesos d'acord amb les directrius de l'AEPD. Després d'aquest període, se't demanarà que renovis el teu consentiment." },
      { heading: "5. Contacte", body: "Si tens alguna pregunta sobre la nostra política de cookies, contacta'ns a" }
    ]
  }
}, Nf = {
  en: {
    title: "Legal Notice",
    updated: "Last updated: March 6, 2026",
    sections: [
      { heading: "1. Website owner", body: "In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following identification details are provided for the owner of this website:", list: ["Legal name: Sundas Syed", "Phone: +43 69910847004", "Location: Vienna, Austria", "Contact email: sundas_syed@hotmail.com", "LinkedIn: linkedin.com/in/sundas-syed-6b737715a"], note: "The contact email address is the primary communication channel for any legal or administrative inquiries." },
      { heading: "2. Purpose of the website", body: "This website serves as a professional portfolio showcasing UX design work, design systems expertise, and AI-related projects. It is intended for informational and professional purposes only. No commercial transactions, e-commerce, or sale of goods or services are conducted through this website." },
      { heading: "3. Intellectual property", body: "All content on this website, including but not limited to text, graphics, logos, images, case studies, and design work, is the intellectual property of Sundas Syed or is used with express permission from the respective clients. Unauthorized reproduction, distribution, public communication, or modification of any content without prior written consent is strictly prohibited and may constitute an infringement of intellectual property rights under Spanish and European law." },
      { heading: "4. Limitation of liability", body: "The information provided on this website is for general informational purposes. While every effort is made to keep the content accurate and up to date, no representations or warranties of any kind, express or implied, are made regarding the completeness, accuracy, reliability, suitability, or availability of the website or the information it contains. Any reliance placed on such information is strictly at the user's own risk." },
      { heading: "5. External links", body: "This website may contain links to third-party websites for reference or informational purposes. The inclusion of such links does not imply endorsement, sponsorship, or responsibility for their content, privacy practices, or availability. Sundas Syed assumes no liability for any damages arising from the use of linked external sites." },
      { heading: "6. Applicable law and jurisdiction", body: "This legal notice is governed by and shall be construed in accordance with Spanish law. Any disputes arising from access to or use of this website shall be subject to the exclusive jurisdiction of the courts of Vienna, Austria, except where the applicable consumer protection legislation provides otherwise." },
      { heading: "7. Regulatory compliance", body: "This website is designed to comply with the following legal framework:", list: ["General Data Protection Regulation (GDPR), Regulation (EU) 2016/679", "Spanish Organic Law 3/2018 on the Protection of Personal Data and Guarantee of Digital Rights (LOPDGDD)", "Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE)", "Guidelines issued by the Spanish Data Protection Agency (AEPD) on the use of cookies"] }
    ]
  },
  es: {
    title: "Aviso legal",
    updated: "Última actualización: 6 de marzo de 2026",
    sections: [
      { heading: "1. Titular del sitio web", body: "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos identificativos de la titular de este sitio web:", list: ["Nombre legal: Sundas Syed", "DNI: 49139186W", "Ubicación: Torredembarra, Tarragona, España", "Email de contacto: sundas_syed@hotmail.com", "LinkedIn: linkedin.com/in/sundas-syed-6b737715a"], note: "La dirección de correo electrónico de contacto es el canal principal de comunicación para cualquier consulta legal o administrativa." },
      { heading: "2. Propósito del sitio web", body: "Este sitio web funciona como portfolio profesional que muestra trabajos de diseño UX, experiencia en sistemas de diseño y proyectos relacionados con inteligencia artificial. Tiene fines exclusivamente informativos y profesionales. No se realizan transacciones comerciales, comercio electrónico ni venta de bienes o servicios a través de este sitio web." },
      { heading: "3. Propiedad intelectual", body: "Todo el contenido de este sitio web, incluyendo, entre otros, textos, gráficos, logotipos, imágenes, casos de estudio y trabajos de diseño, es propiedad intelectual de Sundas Syed o se utiliza con el permiso expreso de los respectivos clientes. La reproducción, distribución, comunicación pública o modificación no autorizada de cualquier contenido sin consentimiento previo por escrito queda estrictamente prohibida y puede constituir una infracción de los derechos de propiedad intelectual conforme a la legislación española y europea." },
      { heading: "4. Limitación de responsabilidad", body: "La información proporcionada en este sitio web tiene fines meramente informativos. Aunque se realizan todos los esfuerzos posibles para mantener el contenido preciso y actualizado, no se realizan declaraciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, exactitud, fiabilidad, idoneidad o disponibilidad del sitio web o de la información que contiene. Cualquier confianza depositada en dicha información es bajo la exclusiva responsabilidad del usuario." },
      { heading: "5. Enlaces externos", body: "Este sitio web puede contener enlaces a sitios web de terceros con fines de referencia o informativos. La inclusión de dichos enlaces no implica respaldo, patrocinio ni responsabilidad sobre su contenido, prácticas de privacidad o disponibilidad. Sundas Syed no asume ninguna responsabilidad por los daños derivados del uso de sitios externos enlazados." },
      { heading: "6. Ley aplicable y jurisdicción", body: "Este aviso legal se rige e interpreta de conformidad con la legislación española. Cualquier controversia derivada del acceso o uso de este sitio web se someterá a la jurisdicción exclusiva de los juzgados y tribunals de Tarragona, España, salvo que la legislación de protección de consumidores aplicable disponga otra cosa." },
      { heading: "7. Cumplimiento normativo", body: "Este sitio web está diseñado para cumplir con el siguiente marco normativo:", list: ["Reglamento General de Protección de Datos (RGPD), Reglamento (UE) 2016/679", "Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD)", "Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)", "Directrices de la Agencia Española de Protección de Datos (AEPD) sobre el uso de cookies"] }
    ]
  },
  ca: {
    title: "Avís legal",
    updated: "Última actualització: 6 de març de 2026",
    sections: [
      { heading: "1. Titular del lloc web", body: "En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), es faciliten les següents dades identificatives de la titular d'aquest lloc web:", list: ["Nom legal: Sundas Syed", "DNI: 49139186W", "Ubicació: Torredembarra, Tarragona, Espanya", "Email de contacte: sundas_syed@hotmail.com", "LinkedIn: linkedin.com/in/sundas-syed-6b737715a"], note: "L'adreça de correu electrònic de contacte és el canal principal de comunicació per a qualsevol consulta legal o administrativa." },
      { heading: "2. Propòsit del lloc web", body: "Aquest lloc web funciona com a portfolio professional que mostra treballs de disseny UX, experiència en sistemes de disseny i projectes relacionats amb intel·ligència artificial. Té fins exclusivament informatius i professionals. No es realitzen transaccions comercials, comerç electrònic ni venda de béns o serveis a través d'aquest lloc web." },
      { heading: "3. Propietat intel·lectual", body: "Tot el contingut d'aquest lloc web, incloent, entre d'altres, textos, gràfics, logotips, imatges, casos d'estudi i treballs de disseny, és propietat intel·lectual de Sundas Syed o s'utilitza amb el permís exprés dels respectius clients. La reproducció, distribució, comunicació pública o modificació no autoritzada de qualsevol contingut sense consentiment previ per escrit queda estrictament prohibida i pot constituir una infracció dels drets de propietat intel·lectual d'acord amb la legislació espanyola i europea." },
      { heading: "4. Limitació de responsabilitat", body: "La informació proporcionada en aquest lloc web té fins merament informatius. Encara que es realitzen tots els esforços possibles per mantenir el contingut precís i actualitzat, no es fan declaracions ni garanties de cap tipus, expresses o implícites, sobre la integritat, exactitud, fiabilitat, idoneïtat o disponibilitat del lloc web o de la informació que conté. Qualsevol confiança dipositada en aquesta informació és sota l'exclusiva responsabilitat de l'usuari." },
      { heading: "5. Enllaços externs", body: "Aquest lloc web pot contenir enllaços a llocs web de tercers amb fins de referència o informatius. La inclusió d'aquests enllaços no implica suport, patrocini ni responsabilitat sobre el seu contingut, pràctiques de privacitat o disponibilitat. Sundas Syed no assumeix cap responsabilitat pels danys derivats de l'ús de llocs externs enllaçats." },
      { heading: "6. Llei aplicable i jurisdicció", body: "Aquest avís legal es regeix i s'interpreta de conformitat amb la legislació espanyola. Qualsevol controvèrsia derivada de l'accés o ús d'aquest lloc web se sotmetrà a la jurisdicció exclusiva dels jutjats i tribunals de Tarragona, Espanya, llevat que la legislació de protecció de consumidors aplicable disposi una altra cosa." },
      { heading: "7. Compliment normatiu", body: "Aquest lloc web està dissenyat per complir amb el següent marc normatiu:", list: ["Reglament General de Protecció de Dades (RGPD), Reglament (UE) 2016/679", "Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i Garantia dels Drets Digitals (LOPDGDD)", "Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE)", "Directrius de l'Agència Espanyola de Protecció de Dades (AEPD) sobre l'ús de cookies"] }
    ]
  }
};
function _f(e) {
  return Of[e];
}
function Xf(e) {
  return Nf[e];
}
function $f(e) {
  return { en: "Privacy Policy", es: "Política de privacidad", ca: "Política de privacitat" }[e];
}
function Gf(e) {
  return { en: "en", es: "es", ca: "es" }[e];
}
const Kf = {
  en: {
    heading: "Legal Basis and Data Retention",
    intro: "The following table summarises the types of data processed through this website, the purposes for which they are used, the legal basis under which processing is carried out, and the applicable retention periods.",
    columns: { dataType: "Data Type", purpose: "Purpose", legalBasis: "Legal Basis", retention: "Retention Period" },
    rows: [
      { dataType: "Analytics Cookies", purpose: "Measure website traffic and usage patterns", legalBasis: "User consent", retention: "12 months" },
      { dataType: "Contact Emails", purpose: "Respond to user inquiries", legalBasis: "Legitimate interest", retention: "Stored as long as necessary to handle the communication" },
      { dataType: "Technical Logs", purpose: "Maintain website security and performance", legalBasis: "Legitimate interest", retention: "Automatically deleted after system rotation" }
    ]
  },
  es: {
    heading: "Base legal y conservación de datos",
    intro: "La siguiente tabla resume los tipos de datos tratados a través de este sitio web, las finalidades para las que se utilizan, la base legal bajo la que se realiza el tratamiento y los plazos de conservación aplicables.",
    columns: { dataType: "Tipo de dato", purpose: "Finalidad", legalBasis: "Base legal", retention: "Plazo de conservación" },
    rows: [
      { dataType: "Cookies analíticas", purpose: "Medir el tráfico del sitio web y los patrones de uso", legalBasis: "Consentimiento del usuario", retention: "12 meses" },
      { dataType: "Correos de contacto", purpose: "Responder a las consultas de los usuarios", legalBasis: "Interés legítimo", retention: "Conservados mientras sea necesario para gestionar la comunicación" },
      { dataType: "Registros técnicos", purpose: "Mantener la seguridad y el rendimiento del sitio web", legalBasis: "Interés legítimo", retention: "Eliminados automáticamente tras la rotación del sistema" }
    ]
  },
  ca: {
    heading: "Base legal i conservació de dades",
    intro: "La taula següent resumeix els tipus de dades tractades a través d'aquest lloc web, les finalitats per a les quals s'utilitzen, la base legal sota la qual es realitza el tractament i els terminis de conservació aplicables.",
    columns: { dataType: "Tipus de dada", purpose: "Finalitat", legalBasis: "Base legal", retention: "Termini de conservació" },
    rows: [
      { dataType: "Cookies analítiques", purpose: "Mesurar el trànsit del lloc web i els patrons d'ús", legalBasis: "Consentiment de l'usuari", retention: "12 mesos" },
      { dataType: "Correus de contacte", purpose: "Respondre a les consultes dels usuaris", legalBasis: "Interès legítim", retention: "Conservats mentre sigui necessari per gestionar la comunicació" },
      { dataType: "Registres tècnics", purpose: "Mantenir la seguretat i el rendiment del lloc web", legalBasis: "Interès legítim", retention: "Eliminats automàticament després de la rotació del sistema" }
    ]
  }
};
function Zf(e) {
  return Kf[e];
}
const Yf = {
  en: {
    heading: "Third-Party Services",
    intro: "This website relies on the following third-party service providers to operate and deliver its functionality. Each provider processes data in accordance with their own privacy policies.",
    services: [
      {
        name: "Google Analytics",
        description: "Used for anonymous traffic analysis.",
        details: [
          "Provider location: United States.",
          "Data transfers protected by Standard Contractual Clauses."
        ]
      },
      {
        name: "Cookiebot",
        description: "Used to manage cookie consent preferences.",
        details: [
          "Provider location: European Union."
        ]
      },
      {
        name: "Figma Hosting",
        description: "Website infrastructure and hosting environment."
      },
      {
        name: "Google Workspace",
        description: "Used to receive and manage contact emails."
      }
    ]
  },
  es: {
    heading: "Servicios de terceros",
    intro: "Este sitio web utiliza los siguientes proveedores de servicios de terceros para su funcionamiento. Cada proveedor trata los datos de acuerdo con sus propias políticas de privacidad.",
    services: [
      {
        name: "Google Analytics",
        description: "Utilizado para el análisis anónimo del tráfico.",
        details: [
          "Ubicación del proveedor: Estados Unidos.",
          "Transferencias de datos protegidas por cláusulas contractuales tipo."
        ]
      },
      {
        name: "Cookiebot",
        description: "Utilizado para gestionar las preferencias de consentimiento de cookies.",
        details: [
          "Ubicación del proveedor: Unión Europea."
        ]
      },
      {
        name: "Figma Hosting",
        description: "Infraestructura y entorno de alojamiento del sitio web."
      },
      {
        name: "Google Workspace",
        description: "Utilizado para recibir y gestionar los correos electrónicos de contacto."
      }
    ]
  },
  ca: {
    heading: "Serveis de tercers",
    intro: "Aquest lloc web utilitza els següents proveïdors de serveis de tercers per al seu funcionament. Cada proveïdor tracta les dades d'acord amb les seves pròpies polítiques de privacitat.",
    services: [
      {
        name: "Google Analytics",
        description: "Utilitzat per a l'anàlisi anònima del trànsit.",
        details: [
          "Ubicació del proveïdor: Estats Units.",
          "Transferències de dades protegides per clàusules contractuals tipus."
        ]
      },
      {
        name: "Cookiebot",
        description: "Utilitzat per gestionar les preferències de consentiment de cookies.",
        details: [
          "Ubicació del proveïdor: Unió Europea."
        ]
      },
      {
        name: "Figma Hosting",
        description: "Infraestructura i entorn d'allotjament del lloc web."
      },
      {
        name: "Google Workspace",
        description: "Utilitzat per rebre i gestionar els correus electrònics de contacte."
      }
    ]
  }
};
function Qf(e) {
  return Yf[e];
}
const zl = "#00B6B6", Jf = [0.22, 1, 0.36, 1];
function El(e = 768) {
  const [t, i] = T(!1);
  return B(() => {
    const n = window.matchMedia(`(max-width: ${e}px)`);
    i(n.matches);
    const a = (o) => i(o.matches);
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), t;
}
function e2({ lang: e }) {
  const t = _f(e);
  return /* @__PURE__ */ p("div", { children: [
    /* @__PURE__ */ s("h2", { style: Ra, children: t.title }),
    /* @__PURE__ */ s("p", { style: Bl, children: t.updated }),
    t.sections.map((i, n) => /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ s("h3", { style: $t, children: i.heading }),
      /* @__PURE__ */ s("p", { style: St, children: n === t.sections.length - 1 ? /* @__PURE__ */ p(J, { children: [
        i.body,
        " ",
        /* @__PURE__ */ s("a", { href: "mailto:sundas_syed@hotmail.com", style: Qn, children: "sundas_syed@hotmail.com" }),
        "."
      ] }) : i.body }),
      i.subSections?.map((a, o) => /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ s("h4", { style: n2, children: a.heading }),
        /* @__PURE__ */ s("p", { style: St, children: a.body })
      ] }, o))
    ] }, n))
  ] });
}
function t2({ lang: e }) {
  const t = I(null), i = Gf(e), n = El(), a = Zf(e), o = Qf(e);
  return B(() => {
    if (!t.current) return;
    let r = false;
    t.current.innerHTML = "";
    fetch("/_external/usercentrics/privacy-policy-" + i + ".html").then((l) => l.text()).then((l) => {
      if (r || !t.current) return;
      t.current.innerHTML = l;
      const c = t.current.querySelector("h1, h2");
      c && c.remove(), t.current.querySelectorAll("*").forEach((u) => {
        const m = u.textContent?.trim().toLowerCase() ?? "";
        if (m === "powered by usercentrics" || m.startsWith("powered by")) {
          const g = u.parentElement;
          g && g !== t.current && g.children.length === 1 ? g.remove() : u.remove();
        }
      }), t.current.querySelectorAll('a[href*="usercentrics"]').forEach((u) => {
        const m = u.closest("p, div, span");
        m && m !== t.current ? m.remove() : u.remove();
      });
    }).catch(() => {
      t.current && (t.current.innerHTML = "<p>Privacy policy content is unavailable.</p>");
    });
    return () => {
      r = true, t.current && (t.current.innerHTML = "");
    };
  }, [i]), /* @__PURE__ */ p("div", { children: [
    /* @__PURE__ */ s("h2", { style: Ra, children: $f(e) }),
    /* @__PURE__ */ s("div", { ref: t, className: "uc-privacy-policy", style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1vw, 16px)", lineHeight: 1.75, color: "rgba(255,255,255,0.65)" } }),
    /* @__PURE__ */ p("div", { style: { marginTop: "56px" }, children: [
      /* @__PURE__ */ s("hr", { style: { border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 0, marginBottom: "40px" } }),
      /* @__PURE__ */ s("h3", { style: $t, children: a.heading }),
      /* @__PURE__ */ s("p", { style: St, children: a.intro }),
      n ? (
        /* Card layout for mobile */
        /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }, children: a.rows.map((r, l) => /* @__PURE__ */ p(
          "div",
          {
            style: {
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "20px"
            },
            children: [
              /* @__PURE__ */ s("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#FFFFFF", margin: "0 0 16px 0", letterSpacing: "-0.01em" }, children: r.dataType }),
              [
                { label: a.columns.purpose, value: r.purpose },
                { label: a.columns.legalBasis, value: r.legalBasis },
                { label: a.columns.retention, value: r.retention }
              ].map((c, d) => /* @__PURE__ */ p("div", { style: { marginBottom: d < 2 ? "12px" : 0 }, children: [
                /* @__PURE__ */ s("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 2px 0" }, children: c.label }),
                /* @__PURE__ */ s("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", margin: 0 }, children: c.value })
              ] }, d))
            ]
          },
          l
        )) })
      ) : (
        /* Table layout for desktop */
        /* @__PURE__ */ s("div", { style: { overflowX: "auto", marginTop: "20px" }, children: /* @__PURE__ */ p("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: [a.columns.dataType, a.columns.purpose, a.columns.legalBasis, a.columns.retention].map((r, l) => /* @__PURE__ */ s(
            "th",
            {
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                textAlign: "left",
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                whiteSpace: "nowrap"
              },
              children: r
            },
            l
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: a.rows.map((r, l) => /* @__PURE__ */ p("tr", { children: [
            /* @__PURE__ */ s("td", { style: Ai, children: /* @__PURE__ */ s("span", { style: { color: "#FFFFFF", fontWeight: 500 }, children: r.dataType }) }),
            /* @__PURE__ */ s("td", { style: Ai, children: r.purpose }),
            /* @__PURE__ */ s("td", { style: Ai, children: r.legalBasis }),
            /* @__PURE__ */ s("td", { style: Ai, children: r.retention })
          ] }, l)) })
        ] }) })
      )
    ] }),
    /* @__PURE__ */ p("div", { style: { marginTop: "56px" }, children: [
      /* @__PURE__ */ s("hr", { style: { border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 0, marginBottom: "40px" } }),
      /* @__PURE__ */ s("h3", { style: $t, children: o.heading }),
      /* @__PURE__ */ s("p", { style: St, children: o.intro }),
      /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: "0", marginTop: "24px" }, children: o.services.map((r, l) => /* @__PURE__ */ p(
        "div",
        {
          style: {
            padding: n ? "20px 0" : "24px 0",
            borderBottom: l < o.services.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
          },
          children: [
            /* @__PURE__ */ s("p", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px, 1vw, 16px)",
              fontWeight: 600,
              color: "#FFFFFF",
              margin: "0 0 6px 0",
              letterSpacing: "-0.01em"
            }, children: r.name }),
            /* @__PURE__ */ s("p", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 0.95vw, 15px)",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              margin: 0
            }, children: r.description }),
            r.details && r.details.length > 0 && /* @__PURE__ */ s("div", { style: { marginTop: "8px", display: "flex", flexDirection: "column", gap: "2px" }, children: r.details.map((c, d) => /* @__PURE__ */ s(
              "p",
              {
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 0.85vw, 14px)",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0
                },
                children: c
              },
              d
            )) })
          ]
        },
        l
      )) })
    ] }),
    /* @__PURE__ */ p("div", { style: { marginTop: "56px" }, children: [
      /* @__PURE__ */ s("hr", { style: { border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 0, marginBottom: "40px" } }),
      /* @__PURE__ */ s("h3", { style: $t, children: f("contact.emailNoticeHeading", e) }),
      /* @__PURE__ */ s("p", { style: St, children: f("contact.emailNotice", e) })
    ] }),
    /* @__PURE__ */ s("style", { children: `
        .uc-privacy-policy h1,.uc-privacy-policy h2,.uc-privacy-policy h3,.uc-privacy-policy h4,.uc-privacy-policy h5{font-family:'Inter',sans-serif!important;color:#FFF!important;letter-spacing:-0.02em!important}
        .uc-privacy-policy h1{font-size:clamp(22px,2.5vw,32px)!important;margin-top:40px!important;margin-bottom:16px!important}
        .uc-privacy-policy h2{font-size:clamp(18px,1.6vw,22px)!important;margin-top:36px!important;margin-bottom:12px!important}
        .uc-privacy-policy h3{font-size:clamp(16px,1.3vw,19px)!important;margin-top:28px!important;margin-bottom:10px!important}
        .uc-privacy-policy h4,.uc-privacy-policy h5{font-size:clamp(14px,1.1vw,17px)!important;color:rgba(255,255,255,0.85)!important;margin-top:20px!important;margin-bottom:8px!important}
        .uc-privacy-policy p,.uc-privacy-policy li,.uc-privacy-policy span,.uc-privacy-policy td,.uc-privacy-policy th{font-family:'Inter',sans-serif!important;font-size:clamp(14px,1vw,16px)!important;line-height:1.75!important;color:rgba(255,255,255,0.65)!important}
        .uc-privacy-policy a{color:#00B6B6!important;text-decoration:underline!important;text-underline-offset:3px!important}
        .uc-privacy-policy a:hover{color:#00D4D4!important}
        .uc-privacy-policy ul,.uc-privacy-policy ol{padding-left:24px!important;margin-top:8px!important;margin-bottom:16px!important}
        .uc-privacy-policy li{margin-bottom:4px!important}
        .uc-privacy-policy table{width:100%!important;border-collapse:collapse!important;margin-top:16px!important;margin-bottom:24px!important}
        .uc-privacy-policy th{font-weight:600!important;color:#FFF!important;text-align:left!important;padding:10px 12px!important;border-bottom:1px solid rgba(255,255,255,0.12)!important}
        .uc-privacy-policy td{padding:10px 12px!important;border-bottom:1px solid rgba(255,255,255,0.06)!important}
        .uc-privacy-policy strong,.uc-privacy-policy b{color:#FFF!important}
        .uc-privacy-policy hr{border:none!important;border-top:1px solid rgba(255,255,255,0.08)!important;margin-top:32px!important;margin-bottom:32px!important}
        .uc-privacy-policy [class*="powered"],.uc-privacy-policy [id*="powered"],.uc-privacy-policy [class*="Powered"],.uc-privacy-policy [class*="branding"],.uc-privacy-policy [class*="footer"],.uc-privacy-policy a[href*="usercentrics"]{display:none!important}
      ` })
  ] });
}
function i2({ lang: e }) {
  const t = Xf(e);
  return /* @__PURE__ */ p("div", { children: [
    /* @__PURE__ */ s("h2", { style: Ra, children: t.title }),
    /* @__PURE__ */ s("p", { style: Bl, children: t.updated }),
    t.sections.map((i, n) => /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ s("h3", { style: $t, children: i.heading }),
      /* @__PURE__ */ s("p", { style: St, children: i.body }),
      i.list && /* @__PURE__ */ s("ul", { style: a2, children: i.list.map((a, o) => a.includes("sundas_syed@hotmail.com") ? /* @__PURE__ */ p("li", { style: Fn, children: [
        a.split("sundas_syed@hotmail.com")[0],
        /* @__PURE__ */ s("a", { href: "mailto:sundas_syed@hotmail.com", style: Qn, children: "sundas_syed@hotmail.com" })
      ] }, o) : a.includes("linkedin.com/in/sundas-syed-6b737715a") ? /* @__PURE__ */ p("li", { style: Fn, children: [
        a.split("linkedin.com/in/sundas-syed-6b737715a")[0],
        /* @__PURE__ */ s("a", { href: "https://www.linkedin.com/in/sundas-syed-6b737715a/", target: "_blank", rel: "noopener noreferrer", style: Qn, children: "linkedin.com/in/sundas-syed-6b737715a" })
      ] }, o) : /* @__PURE__ */ s("li", { style: Fn, children: a }, o)) }),
      i.note && /* @__PURE__ */ s("p", { style: s2, children: i.note })
    ] }, n))
  ] });
}
const Ra = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(28px, 3.5vw, 42px)",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: "#FFFFFF",
  marginTop: 0,
  marginBottom: "12px"
}, Bl = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "13px",
  fontWeight: 400,
  color: "rgba(255,255,255,0.55)",
  marginTop: 0,
  marginBottom: "48px"
}, $t = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(17px, 1.4vw, 20px)",
  fontWeight: 600,
  color: "#FFFFFF",
  marginTop: "40px",
  marginBottom: "12px"
}, n2 = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(15px, 1.1vw, 17px)",
  fontWeight: 600,
  color: "rgba(255,255,255,0.85)",
  marginTop: "24px",
  marginBottom: "8px"
}, St = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(14px, 1vw, 16px)",
  fontWeight: 400,
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.65)",
  marginTop: 0,
  marginBottom: "16px"
}, a2 = {
  paddingLeft: "24px",
  marginTop: "8px",
  marginBottom: "16px"
}, Fn = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(14px, 1vw, 16px)",
  fontWeight: 400,
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.65)",
  marginBottom: "4px"
}, Qn = {
  color: zl,
  textDecoration: "underline",
  textUnderlineOffset: "3px"
}, s2 = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(14px, 1vw, 16px)",
  fontWeight: 400,
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.65)",
  marginTop: "16px",
  marginBottom: "16px"
}, Ai = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.65,
  color: "rgba(255,255,255,0.65)",
  padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  textAlign: "left"
};
function o2({ initialTab: e = "privacy", onBack: t }) {
  const [i, n] = T(e), a = El(), { lang: o } = V(), r = [
    { id: "cookies", label: f("legal.cookiePolicy", o) },
    { id: "privacy", label: f("legal.privacyPolicy", o) },
    { id: "legal-notice", label: f("legal.legalNotice", o) }
  ];
  B(() => {
    n(e);
  }, [e]);
  const l = (c) => {
    n(c), window.location.hash = `/legal/${c}`;
  };
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        minHeight: "100vh",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              position: "sticky",
              top: 0,
              zIndex: 100,
              backgroundColor: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)"
            },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: a ? "16px" : "20px",
                    paddingBottom: a ? "12px" : "16px",
                    paddingLeft: a ? "16px" : "48px",
                    paddingRight: a ? "16px" : "48px"
                  },
                  children: /* @__PURE__ */ p(
                    "button",
                    {
                      onClick: t,
                      style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: 0,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#FFFFFF"
                      },
                      children: [
                        /* @__PURE__ */ s("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: /* @__PURE__ */ s("path", { d: "M10 12L6 8L10 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
                        "Back"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: a ? "0" : "4px",
                    paddingLeft: a ? "0" : "48px",
                    paddingRight: a ? "0" : "48px",
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none"
                  },
                  children: r.map((c) => {
                    const d = i === c.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => l(c.id),
                        style: {
                          flex: a ? "1" : void 0,
                          background: "none",
                          border: "none",
                          borderBottom: `2px solid ${d ? zl : "transparent"}`,
                          cursor: "pointer",
                          paddingTop: "12px",
                          paddingBottom: "14px",
                          paddingLeft: a ? "8px" : "20px",
                          paddingRight: a ? "8px" : "20px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: a ? "11px" : "12px",
                          fontWeight: d ? 500 : 400,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: d ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                          whiteSpace: "nowrap",
                          transition: "color 0.3s ease, border-color 0.3s ease"
                        },
                        children: c.label
                      },
                      c.id
                    );
                  })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          w.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, ease: Jf },
            style: {
              maxWidth: "780px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: a ? "40px" : "64px",
              paddingBottom: a ? "80px" : "120px",
              paddingLeft: a ? "20px" : "48px",
              paddingRight: a ? "20px" : "48px"
            },
            children: [
              i === "cookies" && /* @__PURE__ */ s(e2, { lang: o }),
              i === "privacy" && /* @__PURE__ */ s(t2, { lang: o }),
              i === "legal-notice" && /* @__PURE__ */ s(i2, { lang: o })
            ]
          },
          i
        )
      ]
    }
  );
}
function r2() {}
const kn = "G-LS8PYVHG47";
function l2() {}
function c2() {
  const [e, t] = T(window.location.hash);
  return B(() => {
    const i = () => {
      t(window.location.hash), window.scrollTo(0, 0);
    };
    return window.addEventListener("hashchange", i), () => window.removeEventListener("hashchange", i);
  }, []), e;
}
function Se({ children: e }) {
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        width: "100%",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        overflowX: "clip",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ s(Cl, {}),
        /* @__PURE__ */ p(
          "svg",
          {
            "aria-hidden": "true",
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              pointerEvents: "none",
              opacity: 0.13,
              mixBlendMode: "soft-light"
            },
            children: [
              /* @__PURE__ */ s("filter", { id: "bg-grain-detail", children: /* @__PURE__ */ s(
                "feTurbulence",
                {
                  type: "fractalNoise",
                  baseFrequency: "0.75",
                  numOctaves: 4,
                  stitchTiles: "stitch"
                }
              ) }),
              /* @__PURE__ */ s("rect", { width: "100%", height: "100%", filter: "url(#bg-grain-detail)" })
            ]
          }
        ),
        /* @__PURE__ */ p(
          "svg",
          {
            "aria-hidden": "true",
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 9999,
              pointerEvents: "none",
              opacity: 0.09,
              mixBlendMode: "overlay"
            },
            children: [
              /* @__PURE__ */ s("filter", { id: "fine-noise-detail", children: /* @__PURE__ */ s(
                "feTurbulence",
                {
                  type: "fractalNoise",
                  baseFrequency: "0.85",
                  numOctaves: 4,
                  stitchTiles: "stitch"
                }
              ) }),
              /* @__PURE__ */ s("rect", { width: "100%", height: "100%", filter: "url(#fine-noise-detail)" })
            ]
          }
        ),
        e
      ]
    }
  );
}
function Y(e) {
  window.location.hash = e;
}
function d2() {
  window.location.hash = "";
}
function ke() {
  window.location.hash = "", requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const e = document.getElementById("projects");
      e && e.scrollIntoView({ behavior: "smooth" });
    });
  });
}
function p2() {
  r2(), l2();
  const [e, t] = T("hero"), i = c2();
  return B(() => {
    const n = setTimeout(() => t("complete"), 1600);
    return () => clearTimeout(n);
  }, []), /* @__PURE__ */ s(Jm, { children: /* @__PURE__ */ s(tf, { children: /* @__PURE__ */ s(u2, { phase: e, hash: i }) }) });
}
function u2({ phase: e, hash: t }) {
  if (t === "#/projects")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(Uf, { onBack: ke }) });
  if (t === "#/projects/veepee")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(
      of,
      {
        onBack: ke,
        onSeeAll: () => Y("#/projects"),
        onNext: () => Y("#/projects/kira-learning")
      }
    ) });
  if (t === "#/projects/kira-learning")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(
      ff,
      {
        onBack: ke,
        onSeeAll: () => Y("#/projects"),
        onNext: () => Y("#/projects/viavia"),
        nextProjectName: "Schiebel ILS"
      }
    ) });
  if (t === "#/projects/viavia")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(
      Sf,
      {
        onBack: ke,
        onSeeAll: () => Y("#/projects"),
        onNext: () => Y("#/projects/fourlink"),
        nextProjectName: "Glock"
      }
    ) });
  if (t === "#/projects/fourlink")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(
      kf,
      {
        onBack: ke,
        onSeeAll: () => Y("#/projects"),
        onNext: () => Y("#/projects/tucuvi"),
        nextProjectName: "Verein sprungbrett"
      }
    ) });
  if (t === "#/projects/tucuvi")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(
      xf,
      {
        onBack: ke,
        onSeeAll: () => Y("#/projects"),
        onNext: () => Y("#/projects/hp-parts-store"),
        nextProjectName: "Wiener Gesundheitsverbund"
      }
    ) });
  if (t === "#/projects/hp-parts-store")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(
      df,
      {
        onBack: ke,
        onSeeAll: () => Y("#/projects"),
        onNext: () => Y("#/projects/affinity")
      }
    ) });
  if (t === "#/projects/affinity")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(
      Mf,
      {
        onBack: ke,
        onSeeAll: () => Y("#/projects"),
        onNext: () => Y("#/projects/veepee"),
        nextProjectName: "Schrack Technik GmbH"
      }
    ) });
  if (t === "#/projects/tao")
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(Uf, { onBack: ke }) });
  if (t.startsWith("#/legal")) {
    const i = t.replace("#/legal/", "").replace("#/legal", ""), a = {
      cookies: "cookies",
      privacy: "privacy",
      "legal-notice": "legal-notice"
    }[i] || "privacy";
    return /* @__PURE__ */ s(Se, { children: /* @__PURE__ */ s(o2, { initialTab: a, onBack: d2 }) });
  }
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        width: "100%",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        overflowX: "clip",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ s("a", { href: "#about", className: "skip-to-content", children: "Skip to main content" }),
        /* @__PURE__ */ s(Cl, {}),
        /* @__PURE__ */ p(
          "svg",
          {
            "aria-hidden": "true",
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              pointerEvents: "none",
              opacity: 0.13,
              mixBlendMode: "soft-light"
            },
            children: [
              /* @__PURE__ */ s("filter", { id: "bg-grain", children: /* @__PURE__ */ s(
                "feTurbulence",
                {
                  type: "fractalNoise",
                  baseFrequency: "0.75",
                  numOctaves: 4,
                  stitchTiles: "stitch"
                }
              ) }),
              /* @__PURE__ */ s("rect", { width: "100%", height: "100%", filter: "url(#bg-grain)" })
            ]
          }
        ),
        /* @__PURE__ */ p(
          "svg",
          {
            "aria-hidden": "true",
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              pointerEvents: "none",
              opacity: 0.09,
              mixBlendMode: "screen"
            },
            children: [
              /* @__PURE__ */ p("filter", { id: "dust", children: [
                /* @__PURE__ */ s(
                  "feTurbulence",
                  {
                    type: "fractalNoise",
                    baseFrequency: "0.45",
                    numOctaves: 2,
                    stitchTiles: "stitch"
                  }
                ),
                /* @__PURE__ */ p("feComponentTransfer", { children: [
                  /* @__PURE__ */ s("feFuncR", { type: "discrete", tableValues: "0 0 0 0 0 0 0 0 0 1" }),
                  /* @__PURE__ */ s("feFuncG", { type: "discrete", tableValues: "0 0 0 0 0 0 0 0 0 1" }),
                  /* @__PURE__ */ s("feFuncB", { type: "discrete", tableValues: "0 0 0 0 0 0 0 0 0 1" })
                ] })
              ] }),
              /* @__PURE__ */ s("rect", { width: "100%", height: "100%", filter: "url(#dust)" })
            ]
          }
        ),
        /* @__PURE__ */ p(
          "svg",
          {
            "aria-hidden": "true",
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 9999,
              pointerEvents: "none",
              opacity: 0.09,
              mixBlendMode: "overlay"
            },
            children: [
              /* @__PURE__ */ s("filter", { id: "fine-noise", children: /* @__PURE__ */ s(
                "feTurbulence",
                {
                  type: "fractalNoise",
                  baseFrequency: "0.85",
                  numOctaves: 4,
                  stitchTiles: "stitch"
                }
              ) }),
              /* @__PURE__ */ s("rect", { width: "100%", height: "100%", filter: "url(#fine-noise)" })
            ]
          }
        ),
        /* @__PURE__ */ s(ve, { id: "hero", entrance: !1, children: /* @__PURE__ */ s(n0, { isReady: !0 }) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "about", entrance: !1, children: /* @__PURE__ */ s(s0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "services", entrance: !0, children: /* @__PURE__ */ s(f0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "projects", entrance: !1, children: /* @__PURE__ */ s(c0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "teaching-experience", entrance: !0, children: /* @__PURE__ */ s(C0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "nice-to-meet-you", entrance: !0, children: /* @__PURE__ */ s(q0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "principles", entrance: !1, children: /* @__PURE__ */ s(O0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "looking-for", entrance: !1, children: /* @__PURE__ */ s(X0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "testimonials", entrance: !1, children: /* @__PURE__ */ s(A0, {}) }),
        e === "complete" && /* @__PURE__ */ s(ve, { id: "contact", entrance: !0, children: /* @__PURE__ */ s(E0, {}) })
      ]
    }
  );
}
const m2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: p2
}, Symbol.toStringTag, { value: "Module" }));
export {
  g2 as Code1_4
};
