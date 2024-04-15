function Om(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
        Object.keys(e).forEach(function (r) {
            var i = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, i.get ? i : {
                enumerable: !0,
                get: function () {
                    return e[r]
                }
            })
        }),
        n
}

/**********************/
var d$ = {}, JC = {}, $D = {}, due;

function fLe() {
    if (due)
        return $D;
    due = 1,
        Object.defineProperty($D, "__esModule", {
            value: !0
        }),
        $D.default = n;
    var e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto)
        , t = new Uint8Array(16);

    function n() {
        if (!e)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return e(t)
    }

    return $D
}

var YC = {}, pue;

function $Q() {
    if (pue)
        return YC;
    pue = 1,
        Object.defineProperty(YC, "__esModule", {
            value: !0
        }),
        YC.default = void 0;
    for (var e = [], t = 0; t < 256; ++t)
        e[t] = (t + 256).toString(16).substr(1);

    function n(i, o) {
        var a = o || 0
            , s = e;
        return [s[i[a++]], s[i[a++]], s[i[a++]], s[i[a++]], "-", s[i[a++]], s[i[a++]], "-", s[i[a++]], s[i[a++]], "-", s[i[a++]], s[i[a++]], "-", s[i[a++]], s[i[a++]], s[i[a++]], s[i[a++]], s[i[a++]], s[i[a++]]].join("")
    }

    var r = n;
    return YC.default = r,
        YC
}

var e = n(fLe())
    , t = n($Q());

function n(o) {
    return o && o.__esModule ? o : {
        default: o
    }
}

function n(o) {
    return o && o.__esModule ? o : {
        default: o
    }
}

function r(o, a, s) {
    var l = a && s || 0;
    typeof o == "string" && (a = o === "binary" ? new Array(16) : null,
        o = null),
        o = o || {};
    var u = o.random || (o.rng || e.default)();
    if (u[6] = u[6] & 15 | 64,
        u[8] = u[8] & 63 | 128,
        a)
        for (var c = 0; c < 16; ++c)
            a[l + c] = u[c];
    return a || (0,
        t.default)(u)
}

/*********************/

var UY = function (e, t) {
    return UY = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (n, r) {
            n.__proto__ = r
        }
        || function (n, r) {
            for (var i in r)
                r.hasOwnProperty(i) && (n[i] = r[i])
        }
        ,
        UY(e, t)
};

function GOt(e, t) {
    UY(e, t);

    function n() {
        this.constructor = e
    }

    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype,
        new n)
}

var HY = function () {
    return HY = Object.assign || function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
        ,
        HY.apply(this, arguments)
};

function KOt(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}

function WOt(e, t, n, r) {
    var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        o = Reflect.decorate(e, t, n, r);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
    return i > 3 && o && Object.defineProperty(t, n, o),
        o
}

function JOt(e, t) {
    return function (n, r) {
        t(n, r, e)
    }
}

function YOt(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e, t)
}

function ZOt(e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function (a) {
                a(o)
            }
        )
    }

    return new (n || (n = Promise))(function (o, a) {
            function s(c) {
                try {
                    u(r.next(c))
                } catch (d) {
                    a(d)
                }
            }

            function l(c) {
                try {
                    u(r.throw(c))
                } catch (d) {
                    a(d)
                }
            }

            function u(c) {
                c.done ? o(c.value) : i(c.value).then(s, l)
            }

            u((r = r.apply(e, t || [])).next())
        }
    )
}

function XOt(e, t) {
    var n = {
        label: 0,
        sent: function () {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, i, o, a;
    return a = {
        next: s(0),
        throw: s(1),
        return: s(2)
    },
    typeof Symbol == "function" && (a[Symbol.iterator] = function () {
            return this
        }
    ),
        a;

    function s(u) {
        return function (c) {
            return l([u, c])
        }
    }

    function l(u) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; n;)
            try {
                if (r = 1,
                i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i),
                    0) : i.next) && !(o = o.call(i, u[1])).done)
                    return o;
                switch (i = 0,
                o && (u = [u[0] & 2, o.value]),
                    u[0]) {
                    case 0:
                    case 1:
                        o = u;
                        break;
                    case 4:
                        return n.label++,
                            {
                                value: u[1],
                                done: !1
                            };
                    case 5:
                        n.label++,
                            i = u[1],
                            u = [0];
                        continue;
                    case 7:
                        u = n.ops.pop(),
                            n.trys.pop();
                        continue;
                    default:
                        if (o = n.trys,
                        !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                            n.label = u[1];
                            break
                        }
                        if (u[0] === 6 && n.label < o[1]) {
                            n.label = o[1],
                                o = u;
                            break
                        }
                        if (o && n.label < o[2]) {
                            n.label = o[2],
                                n.ops.push(u);
                            break
                        }
                        o[2] && n.ops.pop(),
                            n.trys.pop();
                        continue
                }
                u = t.call(e, n)
            } catch (c) {
                u = [6, c],
                    i = 0
            } finally {
                r = o = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}

function QOt(e, t, n, r) {
    r === void 0 && (r = n),
        e[r] = t[n]
}

function e4t(e, t) {
    for (var n in e)
        n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n])
}

function jY(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
        , n = t && e[t]
        , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function () {
                return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Hze(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n)
        return e;
    var r = n.call(e), i, o = [], a;
    try {
        for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;)
            o.push(i.value)
    } catch (s) {
        a = {
            error: s
        }
    } finally {
        try {
            i && !i.done && (n = r.return) && n.call(r)
        } finally {
            if (a)
                throw a.error
        }
    }
    return o
}

function t4t() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(Hze(arguments[t]));
    return e
}

function n4t() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
    for (var r = Array(e), i = 0, t = 0; t < n; t++)
        for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
            i++)
            r[i] = o[a];
    return r
}

function DI(e) {
    return this instanceof DI ? (this.v = e,
        this) : new DI(e)
}

function r4t(e, t, n) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), i, o = [];
    return i = {},
        a("next"),
        a("throw"),
        a("return"),
        i[Symbol.asyncIterator] = function () {
            return this
        }
        ,
        i;

    function a(p) {
        r[p] && (i[p] = function (m) {
                return new Promise(function (f, h) {
                        o.push([p, m, f, h]) > 1 || s(p, m)
                    }
                )
            }
        )
    }

    function s(p, m) {
        try {
            l(r[p](m))
        } catch (f) {
            d(o[0][3], f)
        }
    }

    function l(p) {
        p.value instanceof DI ? Promise.resolve(p.value.v).then(u, c) : d(o[0][2], p)
    }

    function u(p) {
        s("next", p)
    }

    function c(p) {
        s("throw", p)
    }

    function d(p, m) {
        p(m),
            o.shift(),
        o.length && s(o[0][0], o[0][1])
    }
}

function i4t(e) {
    var t, n;
    return t = {},
        r("next"),
        r("throw", function (i) {
            throw i
        }),
        r("return"),
        t[Symbol.iterator] = function () {
            return this
        }
        ,
        t;

    function r(i, o) {
        t[i] = e[i] ? function (a) {
                return (n = !n) ? {
                    value: DI(e[i](a)),
                    done: i === "return"
                } : o ? o(a) : a
            }
            : o
    }
}

function o4t(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof jY == "function" ? jY(e) : e[Symbol.iterator](),
        n = {},
        r("next"),
        r("throw"),
        r("return"),
        n[Symbol.asyncIterator] = function () {
            return this
        }
        ,
        n);

    function r(o) {
        n[o] = e[o] && function (a) {
            return new Promise(function (s, l) {
                    a = e[o](a),
                        i(s, l, a.done, a.value)
                }
            )
        }
    }

    function i(o, a, s, l) {
        Promise.resolve(l).then(function (u) {
            o({
                value: u,
                done: s
            })
        }, a)
    }
}

function a4t(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t,
        e
}

function s4t(e) {
    if (e && e.__esModule)
        return e;
    var t = {};
    if (e != null)
        for (var n in e)
            Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e,
        t
}

function l4t(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function u4t(e, t) {
    if (!t.has(e))
        throw new TypeError("attempted to get private field on non-instance");
    return t.get(e)
}

function c4t(e, t, n) {
    if (!t.has(e))
        throw new TypeError("attempted to set private field on non-instance");
    return t.set(e, n),
        n
}

const d4t = Object.freeze(Object.defineProperty({
    __proto__: null,
    get __assign() {
        return HY
    },
    __asyncDelegator: i4t,
    __asyncGenerator: r4t,
    __asyncValues: o4t,
    __await: DI,
    __awaiter: ZOt,
    __classPrivateFieldGet: u4t,
    __classPrivateFieldSet: c4t,
    __createBinding: QOt,
    __decorate: WOt,
    __exportStar: e4t,
    __extends: GOt,
    __generator: XOt,
    __importDefault: l4t,
    __importStar: s4t,
    __makeTemplateObject: a4t,
    __metadata: YOt,
    __param: JOt,
    __read: Hze,
    __rest: KOt,
    __spread: t4t,
    __spreadArrays: n4t,
    __values: jY
}, Symbol.toStringTag, {
    value: "Module"
}))
    , p4t = Om(d4t);
var vE = {}, bE = {}, SE = {}, yye;

function m4t() {
    if (yye)
        return SE;
    yye = 1,
        Object.defineProperty(SE, "__esModule", {
            value: !0
        }),
        SE.isEmptyData = void 0;

    function e(t) {
        return typeof t == "string" ? t.length === 0 : t.byteLength === 0
    }

    return SE.isEmptyData = e,
        SE
}

var H5 = {}, vye;

function jze() {
    return vye || (vye = 1,
        function (e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.EMPTY_DATA_SHA_256 = e.SHA_256_HMAC_ALGO = e.SHA_256_HASH = void 0,
                e.SHA_256_HASH = {
                    name: "SHA-256"
                },
                e.SHA_256_HMAC_ALGO = {
                    name: "HMAC",
                    hash: e.SHA_256_HASH
                },
                e.EMPTY_DATA_SHA_256 = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85])
        }(H5)),
        H5
}

var f4t = function (e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) {
        var i = e.charCodeAt(n);
        if (i < 128)
            t.push(i);
        else if (i < 2048)
            t.push(i >> 6 | 192, i & 63 | 128);
        else if (n + 1 < e.length && (i & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) {
            var o = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++n) & 1023);
            t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128)
        } else
            t.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128)
    }
    return Uint8Array.from(t)
}
    , h4t = function (e) {
    for (var t = "", n = 0, r = e.length; n < r; n++) {
        var i = e[n];
        if (i < 128)
            t += String.fromCharCode(i);
        else if (192 <= i && i < 224) {
            var o = e[++n];
            t += String.fromCharCode((i & 31) << 6 | o & 63)
        } else if (240 <= i && i < 365) {
            var a = [i, e[++n], e[++n], e[++n]]
                , s = "%" + a.map(function (l) {
                return l.toString(16)
            }).join("%");
            t += decodeURIComponent(s)
        } else
            t += String.fromCharCode((i & 15) << 12 | (e[++n] & 63) << 6 | e[++n] & 63)
    }
    return t
};

function g4t(e) {
    return new TextEncoder().encode(e)
}

function y4t(e) {
    return new TextDecoder("utf-8").decode(e)
}

var yR = function (e) {
    return typeof TextEncoder == "function" ? g4t(e) : f4t(e)
}
    , vR = function (e) {
    return typeof TextDecoder == "function" ? y4t(e) : h4t(e)
};
const v4t = Object.freeze(Object.defineProperty({
    __proto__: null,
    fromUtf8: yR,
    toUtf8: vR
}, Symbol.toStringTag, {
    value: "Module"
}))
    , Vze = Om(v4t)
    , b4t = {};

function S4t() {
    return typeof window < "u" ? window : typeof self < "u" ? self : b4t
}

const _4t = Object.freeze(Object.defineProperty({
    __proto__: null,
    locateWindow: S4t
}, Symbol.toStringTag, {
    value: "Module"
}))
    , Dte = Om(_4t);
var bye;

function Gze() {
    if (bye)
        return bE;
    bye = 1,
        Object.defineProperty(bE, "__esModule", {
            value: !0
        }),
        bE.Sha256 = void 0;
    var e = m4t()
        , t = jze()
        , n = Vze
        , r = Dte
        , i = function () {
        function s(l) {
            l ? (this.operation = o(l).then(function (u) {
                return (0,
                    r.locateWindow)().msCrypto.subtle.sign(t.SHA_256_HMAC_ALGO, u)
            }),
                this.operation.catch(function () {
                })) : this.operation = Promise.resolve((0,
                r.locateWindow)().msCrypto.subtle.digest("SHA-256"))
        }

        return s.prototype.update = function (l) {
            var u = this;
            (0,
                e.isEmptyData)(l) || (this.operation = this.operation.then(function (c) {
                return c.onerror = function () {
                    u.operation = Promise.reject(new Error("Error encountered updating hash"))
                }
                    ,
                    c.process(a(l)),
                    c
            }),
                this.operation.catch(function () {
                }))
        }
            ,
            s.prototype.digest = function () {
                return this.operation.then(function (l) {
                    return new Promise(function (u, c) {
                            l.onerror = function () {
                                c(new Error("Error encountered finalizing hash"))
                            }
                                ,
                                l.oncomplete = function () {
                                    l.result && u(new Uint8Array(l.result)),
                                        c(new Error("Error encountered finalizing hash"))
                                }
                                ,
                                l.finish()
                        }
                    )
                })
            }
            ,
            s
    }();
    bE.Sha256 = i;

    function o(s) {
        return new Promise(function (l, u) {
                var c = (0,
                    r.locateWindow)().msCrypto.subtle.importKey("raw", a(s), t.SHA_256_HMAC_ALGO, !1, ["sign"]);
                c.oncomplete = function () {
                    c.result && l(c.result),
                        u(new Error("ImportKey completed without importing key."))
                }
                    ,
                    c.onerror = function () {
                        u(new Error("ImportKey failed to import key."))
                    }
            }
        )
    }

    function a(s) {
        return typeof s == "string" ? (0,
            n.fromUtf8)(s) : ArrayBuffer.isView(s) ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(s)
    }

    return bE
}

var _E = {}, j5 = {}, wE = {}, Sye;

function w4t() {
    if (Sye)
        return wE;
    Sye = 1,
        Object.defineProperty(wE, "__esModule", {
            value: !0
        }),
        wE.convertToBuffer = void 0;
    var e = Vze
        , t = typeof Buffer < "u" && Buffer.from ? function (r) {
            return Buffer.from(r, "utf8")
        }
        : e.fromUtf8;

    function n(r) {
        return r instanceof Uint8Array ? r : typeof r == "string" ? t(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r)
    }

    return wE.convertToBuffer = n,
        wE
}

var kE = {}, _ye;

function k4t() {
    if (_ye)
        return kE;
    _ye = 1,
        Object.defineProperty(kE, "__esModule", {
            value: !0
        }),
        kE.isEmptyData = void 0;

    function e(t) {
        return typeof t == "string" ? t.length === 0 : t.byteLength === 0
    }

    return kE.isEmptyData = e,
        kE
}

var AE = {}, wye;

function A4t() {
    if (wye)
        return AE;
    wye = 1,
        Object.defineProperty(AE, "__esModule", {
            value: !0
        }),
        AE.numToUint8 = void 0;

    function e(t) {
        return new Uint8Array([(t & 4278190080) >> 24, (t & 16711680) >> 16, (t & 65280) >> 8, t & 255])
    }

    return AE.numToUint8 = e,
        AE
}

var xE = {}, kye;

function x4t() {
    if (kye)
        return xE;
    kye = 1,
        Object.defineProperty(xE, "__esModule", {
            value: !0
        }),
        xE.uint32ArrayFrom = void 0;

    function e(t) {
        if (!Uint32Array.from) {
            for (var n = new Uint32Array(t.length), r = 0; r < t.length;)
                n[r] = t[r],
                    r += 1;
            return n
        }
        return Uint32Array.from(t)
    }

    return xE.uint32ArrayFrom = e,
        xE
}

var Aye;

function bO() {
    return Aye || (Aye = 1,
        function (e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.uint32ArrayFrom = e.numToUint8 = e.isEmptyData = e.convertToBuffer = void 0;
            var t = w4t();
            Object.defineProperty(e, "convertToBuffer", {
                enumerable: !0,
                get: function () {
                    return t.convertToBuffer
                }
            });
            var n = k4t();
            Object.defineProperty(e, "isEmptyData", {
                enumerable: !0,
                get: function () {
                    return n.isEmptyData
                }
            });
            var r = A4t();
            Object.defineProperty(e, "numToUint8", {
                enumerable: !0,
                get: function () {
                    return r.numToUint8
                }
            });
            var i = x4t();
            Object.defineProperty(e, "uint32ArrayFrom", {
                enumerable: !0,
                get: function () {
                    return i.uint32ArrayFrom
                }
            })
        }(j5)),
        j5
}

var xye;

function Kze() {
    if (xye)
        return _E;
    xye = 1,
        Object.defineProperty(_E, "__esModule", {
            value: !0
        }),
        _E.Sha256 = void 0;
    var e = bO()
        , t = jze()
        , n = Dte
        , r = function () {
        function i(o) {
            this.toHash = new Uint8Array(0),
            o !== void 0 && (this.key = new Promise(function (a, s) {
                    crypto.subtle.importKey("raw", (0,
                        e.convertToBuffer)(o), t.SHA_256_HMAC_ALGO, !1, ["sign"]).then(a, s)
                }
            ),
                this.key.catch(function () {
                }))
        }

        return i.prototype.update = function (o) {
            if (!(0,
                e.isEmptyData)(o)) {
                var a = (0,
                    e.convertToBuffer)(o)
                    , s = new Uint8Array(this.toHash.byteLength + a.byteLength);
                s.set(this.toHash, 0),
                    s.set(a, this.toHash.byteLength),
                    this.toHash = s
            }
        }
            ,
            i.prototype.digest = function () {
                var o = this;
                return this.key ? this.key.then(function (a) {
                    return crypto.subtle.sign(t.SHA_256_HMAC_ALGO, a, o.toHash).then(function (s) {
                        return new Uint8Array(s)
                    })
                }) : (0,
                    e.isEmptyData)(this.toHash) ? Promise.resolve(t.EMPTY_DATA_SHA_256) : Promise.resolve().then(function () {
                    return crypto.subtle.digest(t.SHA_256_HASH, o.toHash)
                }).then(function (a) {
                    return Promise.resolve(new Uint8Array(a))
                })
            }
            ,
            i
    }();
    return _E.Sha256 = r,
        _E
}

var V5 = {};

var uFe = {}, tZ = {};
for (var IE = 0; IE < 256; IE++) {
    var NE = IE.toString(16).toLowerCase();
    NE.length === 1 && (NE = "0".concat(NE)),
        uFe[IE] = NE,
        tZ[NE] = IE
}

function Pf(e) {
    for (var t = "", n = 0; n < e.byteLength; n++)
        t += uFe[e[n]];
    return t
}


function Pe(e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function (a) {
                a(o)
            }
        )
    }

    return new (n || (n = Promise))(function (o, a) {
            function s(c) {
                try {
                    u(r.next(c))
                } catch (d) {
                    a(d)
                }
            }

            function l(c) {
                try {
                    u(r.throw(c))
                } catch (d) {
                    a(d)
                }
            }

            function u(c) {
                c.done ? o(c.value) : i(c.value).then(s, l)
            }

            u((r = r.apply(e, t || [])).next())
        }
    )
}

function Re(e, t) {
    var n = {
        label: 0,
        sent: function () {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, i, o, a;
    return a = {
        next: s(0),
        throw: s(1),
        return: s(2)
    },
    typeof Symbol == "function" && (a[Symbol.iterator] = function () {
            return this
        }
    ),
        a;

    function s(u) {
        return function (c) {
            return l([u, c])
        }
    }

    function l(u) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; a && (a = 0,
        u[0] && (n = 0)),
                   n;)
            try {
                if (r = 1,
                i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i),
                    0) : i.next) && !(o = o.call(i, u[1])).done)
                    return o;
                switch (i = 0,
                o && (u = [u[0] & 2, o.value]),
                    u[0]) {
                    case 0:
                    case 1:
                        o = u;
                        break;
                    case 4:
                        return n.label++,
                            {
                                value: u[1],
                                done: !1
                            };
                    case 5:
                        n.label++,
                            i = u[1],
                            u = [0];
                        continue;
                    case 7:
                        u = n.ops.pop(),
                            n.trys.pop();
                        continue;
                    default:
                        if (o = n.trys,
                        !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                            n.label = u[1];
                            break
                        }
                        if (u[0] === 6 && n.label < o[1]) {
                            n.label = o[1],
                                o = u;
                            break
                        }
                        if (o && n.label < o[2]) {
                            n.label = o[2],
                                n.ops.push(u);
                            break
                        }
                        o[2] && n.ops.pop(),
                            n.trys.pop();
                        continue
                }
                u = t.call(e, n)
            } catch (c) {
                u = [6, c],
                    i = 0
            } finally {
                r = o = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}

function Au(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
        , n = t && e[t]
        , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function () {
                return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

var Rzt = function (e, t, n) {
    var r, i, o, a = !1, s = function () {
        return Pe(void 0, void 0, void 0, function () {
            return Re(this, function (l) {
                switch (l.label) {
                    case 0:
                        i || (i = e()),
                            l.label = 1;
                    case 1:
                        return l.trys.push([1, , 3, 4]),
                            [4, i];
                    case 2:
                        return r = l.sent(),
                            o = !0,
                            a = !1,
                            [3, 4];
                    case 3:
                        return i = void 0,
                            [7];
                    case 4:
                        return [2, r]
                }
            })
        })
    };
    return t === void 0 ? function (l) {
            return Pe(void 0, void 0, void 0, function () {
                return Re(this, function (u) {
                    switch (u.label) {
                        case 0:
                            return !o || l != null && l.forceRefresh ? [4, s()] : [3, 2];
                        case 1:
                            r = u.sent(),
                                u.label = 2;
                        case 2:
                            return [2, r]
                    }
                })
            })
        }
        : function (l) {
            return Pe(void 0, void 0, void 0, function () {
                return Re(this, function (u) {
                    switch (u.label) {
                        case 0:
                            return !o || l != null && l.forceRefresh ? [4, s()] : [3, 2];
                        case 1:
                            r = u.sent(),
                                u.label = 2;
                        case 2:
                            return a ? [2, r] : n && !n(r) ? (a = !0,
                                [2, r]) : t(r) ? [4, s()] : [3, 4];
                        case 3:
                            return u.sent(),
                                [2, r];
                        case 4:
                            return [2, r]
                    }
                })
            })
        }
}
    , uFe = {}
    , tZ = {};
for (var IE = 0; IE < 256; IE++) {
    var NE = IE.toString(16).toLowerCase();
    NE.length === 1 && (NE = "0".concat(NE)),
        uFe[IE] = NE,
        tZ[NE] = IE
}
var Zye = function (e) {
    if (typeof e == "function")
        return e;
    var t = Promise.resolve(e);
    return function () {
        return t
    }
}
    , Pzt = "X-Amz-Algorithm"
    , Mzt = "X-Amz-Credential"
    , cFe = "X-Amz-Date"
    , Lzt = "X-Amz-SignedHeaders"
    , Ozt = "X-Amz-Expires"
    , dFe = "X-Amz-Signature"
    , pFe = "X-Amz-Security-Token"
    , mFe = "authorization"
    , fFe = cFe.toLowerCase()
    , Bzt = "date"
    , zzt = [mFe, fFe, Bzt]
    , Fzt = dFe.toLowerCase()
    , nZ = "x-amz-content-sha256"
    , $zt = pFe.toLowerCase()
    , qzt = {
    authorization: !0,
    "cache-control": !0,
    connection: !0,
    expect: !0,
    from: !0,
    "keep-alive": !0,
    "max-forwards": !0,
    pragma: !0,
    referer: !0,
    te: !0,
    trailer: !0,
    "transfer-encoding": !0,
    upgrade: !0,
    "user-agent": !0,
    "x-amzn-trace-id": !0
}
    , Uzt = /^proxy-/
    , Hzt = /^sec-/
    , Q5 = "AWS4-HMAC-SHA256"
    , jzt = "AWS4-HMAC-SHA256-PAYLOAD"
    , Vzt = "UNSIGNED-PAYLOAD"
    , Gzt = 50
    , hFe = "aws4_request"
    , Kzt = 60 * 60 * 24 * 7
    , CP = {}
    , eU = []
    , tU = function (e, t, n) {
    return "".concat(e, "/").concat(t, "/").concat(n, "/").concat(hFe)
}
    , Wzt = function (e, t, n, r, i) {
    return Pe(void 0, void 0, void 0, function () {
        var o, a, s, l, u, c, d, p, m;
        return Re(this, function (f) {
            switch (f.label) {
                case 0:
                    return [4, Xye(e, t.secretAccessKey, t.accessKeyId)];
                case 1:
                    if (o = f.sent(),
                        a = "".concat(n, ":").concat(r, ":").concat(i, ":").concat(Pf(o), ":").concat(t.sessionToken),
                    a in CP)
                        return [2, CP[a]];
                    for (eU.push(a); eU.length > Gzt;)
                        delete CP[eU.shift()];
                    s = "AWS4".concat(t.secretAccessKey),
                        f.label = 2;
                case 2:
                    f.trys.push([2, 7, 8, 9]),
                        l = Au([n, r, i, hFe]),
                        u = l.next(),
                        f.label = 3;
                case 3:
                    return u.done ? [3, 6] : (c = u.value,
                        [4, Xye(e, s, c)]);
                case 4:
                    s = f.sent(),
                        f.label = 5;
                case 5:
                    return u = l.next(),
                        [3, 3];
                case 6:
                    return [3, 9];
                case 7:
                    return d = f.sent(),
                        p = {
                            error: d
                        },
                        [3, 9];
                case 8:
                    try {
                        u && !u.done && (m = l.return) && m.call(l)
                    } finally {
                        if (p)
                            throw p.error
                    }
                    return [7];
                case 9:
                    return [2, CP[a] = s]
            }
        })
    })
}
    , Xye = function (e, t, n) {
    var r = new e(t);
    return r.update(n),
        r.digest()
}
    , Qye = function (e, t, n) {
    var r, i, o = e.headers, a = {};
    try {
        for (var s = Au(Object.keys(o).sort()), l = s.next(); !l.done; l = s.next()) {
            var u = l.value;
            if (o[u] != null) {
                var c = u.toLowerCase();
                (c in qzt || t != null && t.has(c) || Uzt.test(c) || Hzt.test(c)) && (!n || n && !n.has(c)) || (a[c] = o[u].trim().replace(/\s+/g, " "))
            }
        }
    } catch (d) {
        r = {
            error: d
        }
    } finally {
        try {
            l && !l.done && (i = s.return) && i.call(s)
        } finally {
            if (r)
                throw r.error
        }
    }
    return a
}
    , Jzt = function (e) {
    var t, n, r = e.query, i = r === void 0 ? {} : r, o = [], a = {}, s = function (d) {
        if (d.toLowerCase() === Fzt)
            return "continue";
        o.push(d);
        var p = i[d];
        typeof p == "string" ? a[d] = "".concat(h1(d), "=").concat(h1(p)) : Array.isArray(p) && (a[d] = p.slice(0).sort().reduce(function (m, f) {
            return m.concat(["".concat(h1(d), "=").concat(h1(f))])
        }, []).join("&"))
    };
    try {
        for (var l = Au(Object.keys(i).sort()), u = l.next(); !u.done; u = l.next()) {
            var c = u.value;
            s(c)
        }
    } catch (d) {
        t = {
            error: d
        }
    } finally {
        try {
            u && !u.done && (n = l.return) && n.call(l)
        } finally {
            if (t)
                throw t.error
        }
    }
    return o.map(function (d) {
        return a[d]
    }).filter(function (d) {
        return d
    }).join("&")
}
    , Yzt = function (e) {
    return typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]"
}
    , nU = function (e, t) {
    var n = e.headers
        , r = e.body;
    return Pe(void 0, void 0, void 0, function () {
        var i, o, a, s, l, u, c;
        return Re(this, function (d) {
            switch (d.label) {
                case 0:
                    try {
                        for (i = Au(Object.keys(n)),
                                 o = i.next(); !o.done; o = i.next())
                            if (a = o.value,
                            a.toLowerCase() === nZ)
                                return [2, n[a]]
                    } catch (p) {
                        u = {
                            error: p
                        }
                    } finally {
                        try {
                            o && !o.done && (c = i.return) && c.call(i)
                        } finally {
                            if (u)
                                throw u.error
                        }
                    }
                    return r != null ? [3, 1] : [2, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"];
                case 1:
                    return typeof r == "string" || ArrayBuffer.isView(r) || Yzt(r) ? (s = new t,
                        s.update(r),
                        l = Pf,
                        [4, s.digest()]) : [3, 3];
                case 2:
                    return [2, l.apply(void 0, [d.sent()])];
                case 3:
                    return [2, Vzt]
            }
        })
    })
}
    , Zzt = function (e, t) {
    var n, r;
    e = e.toLowerCase();
    try {
        for (var i = Au(Object.keys(t)), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            if (e === a.toLowerCase())
                return !0
        }
    } catch (s) {
        n = {
            error: s
        }
    } finally {
        try {
            o && !o.done && (r = i.return) && r.call(i)
        } finally {
            if (n)
                throw n.error
        }
    }
    return !1
}
    , gFe = function (e) {
    var t = e.headers
        , n = e.query
        , r = Ot(e, ["headers", "query"]);
    return H(H({}, r), {
        headers: H({}, t),
        query: n ? Xzt(n) : void 0
    })
}
    , Xzt = function (e) {
    return Object.keys(e).reduce(function (t, n) {
        var r, i = e[n];
        return H(H({}, t), (r = {},
            r[n] = Array.isArray(i) ? al([], Jr(i), !1) : i,
            r))
    }, {})
}
    , Qzt = function (e, t) {
    var n, r, i;
    t === void 0 && (t = {});
    var o = typeof e.clone == "function" ? e.clone() : gFe(e)
        , a = o.headers
        , s = o.query
        , l = s === void 0 ? {} : s;
    try {
        for (var u = Au(Object.keys(a)), c = u.next(); !c.done; c = u.next()) {
            var d = c.value
                , p = d.toLowerCase();
            p.slice(0, 6) === "x-amz-" && !(!((i = t.unhoistableHeaders) === null || i === void 0) && i.has(p)) && (l[d] = a[d],
                delete a[d])
        }
    } catch (m) {
        n = {
            error: m
        }
    } finally {
        try {
            c && !c.done && (r = u.return) && r.call(u)
        } finally {
            if (n)
                throw n.error
        }
    }
    return H(H({}, e), {
        headers: a,
        query: l
    })
}
    , eve = function (e) {
    var t, n;
    e = typeof e.clone == "function" ? e.clone() : gFe(e);
    try {
        for (var r = Au(Object.keys(e.headers)), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            zzt.indexOf(o.toLowerCase()) > -1 && delete e.headers[o]
        }
    } catch (a) {
        t = {
            error: a
        }
    } finally {
        try {
            i && !i.done && (n = r.return) && n.call(r)
        } finally {
            if (t)
                throw t.error
        }
    }
    return e
}
    , eFt = function (e) {
    return tFt(e).toISOString().replace(/\.\d{3}Z$/, "Z")
}
    , tFt = function (e) {
    return typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? Number(e) ? new Date(Number(e) * 1e3) : new Date(e) : e
}

let EP = function (e) {
    var t = eFt(e).replace(/[\-:]/g, "");
    return {
        longDate: t,
        shortDate: t.slice(0, 8)
    }
}

let createStringToSign = function (t, n, r) {
    return Pe(this, void 0, void 0, function () {
        var i, o;
        return Re(this, function (a) {
            switch (a.label) {
                case 0:
                    return i = new kze.Sha256,
                        i.update(r),
                        [4, i.digest()];
                case 1:
                    return o = a.sent(),
                        [2, "".concat(Q5, `
`).concat(t, `
`).concat(n, `
`).concat(Pf(o))]
            }
        })
    })
}

let kze = new Kze();
let content = JSON.stringify(${content});
const encoder = new TextEncoder();
let contentArray = encoder.encode(content);
let contentLength = contentArray.length;
let creds = JSON.parse('${creds}');
/**
 * 删除headers中的
 * "authorization"
 * "x-amz-date"
 * "date"
 */
let ep = EP(new Date());
// 1、加密body contentSha256
// 2、x-amz-date longDate
// 3、x-amz-security-token sessionToken
let sha256 = new kze.Sha256;
sha256.update(contentArray);
sha256.digest().then(contentSha256 => {
    contentSha256 = Pf(contentSha256)
    Wzt(kze.Sha256, creds, ep.shortDate, "us-east-1", "bedrock").then(res => {
        let getSigningKey = res;
        let headers = `amz-sdk-invocation-id:${r()}
amz-sdk-request:attempt=1; max=3
content-length:${contentLength}
content-type:application/json
host:bedrock-runtime.us-east-1.amazonaws.com
x-amz-content-sha256:${contentSha256}
x-amz-date:${ep.longDate}
x-amz-security-token:${creds.sessionToken}
x-amz-user-agent:aws-sdk-js/1.0.0 os/Windows/NT_10.0 lang/js md/browser/Microsoft_Edge_123.0.0.0 api/bedrock_runtime/1.0.0 Bedrock
x-amzn-bedrock-accept:application/json`;
        createStringToSign(ep.longDate, `${ep.shortDate}/us-east-1/bedrock/aws4_request`, `POST
/model/anthropic.claude-3-sonnet-20240229-v1%253A0/invoke-with-response-stream

${headers}

amz-sdk-invocation-id;amz-sdk-request;content-length;content-type;host;x-amz-content-sha256;x-amz-date;x-amz-security-token;x-amz-user-agent;x-amzn-bedrock-accept
${contentSha256}`).then(res => {
            let _l, _s, _a;
            _l = (_s = kze.Sha256).bind;
            _a = new (_l.apply(_s, [void 0, getSigningKey]))
            _a.update(res);
            _a.digest().then(res => {
                let signedHeaders = 'amz-sdk-invocation-id;' +
                    'amz-sdk-request;' +
                    'content-length;' +
                    'content-type;' +
                    'host;' +
                    'x-amz-content-sha256;' +
                    'x-amz-date;' +
                    'x-amz-security-token;' +
                    'x-amz-user-agent;' +
                    'x-amzn-bedrock-accept'
                let headers_dict = {}
                for (let i of headers.split("\n")) {
                    let val = i.split(":");
                    headers_dict[val[0]] = val[1];
                }
                headers_dict['authorization'] = "".concat(Q5, " ") + "Credential=".concat(creds.accessKeyId, "/").concat(`${ep.shortDate}/us-east-1/bedrock/aws4_request`, ", ") + "SignedHeaders=".concat(signedHeaders, ", ") + "Signature=".concat(Pf(res));
                console.log(content)
                console.log("~split~")
                console.log(JSON.stringify(headers_dict))
            });
        })
    })
})


