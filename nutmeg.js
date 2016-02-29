/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */

(function(R, W, u) {
    'use strict';

    function S(b) {
        return function() {
            var a = arguments[0],
                c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.20/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent,
                    e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Ta(b) {
        if (null == b || Ua(b)) return !1;
        var a = "length" in Object(b) && b.length;
        return b.nodeType === qa && a ? !0 : x(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function r(b, a, c) {
        var d, e;
        if (b)
            if (z(b))
                for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
            else if (H(b) || Ta(b)) {
                var f = "object" !== typeof b;
                d = 0;
                for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
            } else if (b.forEach && b.forEach !== r) b.forEach(a, c, b);
            else
                for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Ed(b, a, c) {
        for (var d = Object.keys(b).sort(),
                 e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d
    }

    function lc(b) {
        return function(a, c) {
            b(c, a)
        }
    }

    function Fd() {
        return ++rb
    }

    function mc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function w(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e)
                for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                    var l = f[g];
                    b[l] = e[l]
                }
        }
        mc(b, a);
        return b
    }

    function aa(b) {
        return parseInt(b, 10)
    }

    function Ob(b, a) {
        return w(Object.create(b), a)
    }

    function A() {}

    function ra(b) {
        return b
    }

    function ea(b) {
        return function() {
            return b
        }
    }

    function D(b) {
        return "undefined" === typeof b
    }

    function y(b) {
        return "undefined" !== typeof b
    }

    function L(b) {
        return null !== b && "object" === typeof b
    }

    function x(b) {
        return "string" === typeof b
    }

    function Y(b) {
        return "number" === typeof b
    }

    function ha(b) {
        return "[object Date]" === Ca.call(b)
    }

    function z(b) {
        return "function" === typeof b
    }

    function Va(b) {
        return "[object RegExp]" === Ca.call(b)
    }

    function Ua(b) {
        return b && b.window === b
    }

    function Wa(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Xa(b) {
        return "boolean" === typeof b
    }

    function nc(b) {
        return !(!b ||
        !(b.nodeName || b.prop && b.attr && b.find))
    }

    function Gd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++) a[b[c]] = !0;
        return a
    }

    function wa(b) {
        return K(b.nodeName || b[0] && b[0].nodeName)
    }

    function Ya(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Da(b, a, c, d) {
        if (Ua(b) || Wa(b)) throw Ja("cpws");
        if (a) {
            if (b === a) throw Ja("cpi");
            c = c || [];
            d = d || [];
            if (L(b)) {
                var e = c.indexOf(b);
                if (-1 !== e) return d[e];
                c.push(b);
                d.push(a)
            }
            if (H(b))
                for (var f = a.length = 0; f < b.length; f++) e = Da(b[f], null, c, d), L(b[f]) && (c.push(b[f]),
                    d.push(e)), a.push(e);
            else {
                var g = a.$$hashKey;
                H(a) ? a.length = 0 : r(a, function(b, c) {
                    delete a[c]
                });
                for (f in b) b.hasOwnProperty(f) && (e = Da(b[f], null, c, d), L(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                mc(a, g)
            }
        } else if (a = b) H(b) ? a = Da(b, [], c, d) : ha(b) ? a = new Date(b.getTime()) : Va(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : L(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Da(b, e, c, d));
        return a
    }

    function sa(b, a) {
        if (H(b)) {
            a = a || [];
            for (var c = 0, d = b.length; c < d; c++) a[c] = b[c]
        } else if (L(b))
            for (c in a =
                a || {}, b)
                if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = b[c];
        return a || b
    }

    function ia(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b,
            d;
        if (c == typeof a && "object" == c)
            if (H(b)) {
                if (!H(a)) return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!ia(b[d], a[d])) return !1;
                    return !0
                }
            } else {
                if (ha(b)) return ha(a) ? ia(b.getTime(), a.getTime()) : !1;
                if (Va(b)) return Va(a) ? b.toString() == a.toString() : !1;
                if (Wa(b) || Wa(a) || Ua(b) || Ua(a) || H(a) || ha(a) || Va(a)) return !1;
                c = {};
                for (d in b)
                    if ("$" !==
                        d.charAt(0) && !z(b[d])) {
                        if (!ia(b[d], a[d])) return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !z(a[d])) return !1;
                return !0
            }
        return !1
    }

    function Za(b, a, c) {
        return b.concat($a.call(a, c))
    }

    function oc(b, a) {
        var c = 2 < arguments.length ? $a.call(arguments, 2) : [];
        return !z(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, Za(c, arguments, 0)) : a.apply(b, c)
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Hd(b, a) {
        var c = a;
        "string" === typeof b &&
        "$" === b.charAt(0) && "$" === b.charAt(1) ? c = u : Ua(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : Wa(a) && (c = "$SCOPE");
        return c
    }

    function ab(b, a) {
        if ("undefined" === typeof b) return u;
        Y(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Hd, a)
    }

    function pc(b) {
        return x(b) ? JSON.parse(b) : b
    }

    function xa(b) {
        b = B(b).clone();
        try {
            b.empty()
        } catch (a) {}
        var c = B("<div>").append(b).html();
        try {
            return b[0].nodeType === bb ? K(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + K(b)
            })
        } catch (d) {
            return K(c)
        }
    }

    function qc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {}
    }

    function rc(b) {
        var a = {},
            c, d;
        r((b || "").split("&"), function(b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = qc(c[0]), y(d) && (b = y(c[1]) ? qc(c[1]) : !0, sc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Pb(b) {
        var a = [];
        r(b, function(b, d) {
            H(b) ? r(b, function(b) {
                a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)))
            }) : a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function sb(b) {
        return Ea(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Ea(b, a) {
        return encodeURIComponent(b).replace(/%40/gi,
            "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function Id(b, a) {
        var c, d, e = tb.length;
        b = B(b);
        for (d = 0; d < e; ++d)
            if (c = tb[d] + a, x(c = b.attr(c))) return c;
        return null
    }

    function Jd(b, a) {
        var c, d, e = {};
        r(tb, function(a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        r(tb, function(a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== Id(c, "strict-di"),
            a(c, d ? [d] : [], e))
    }

    function tc(b, a, c) {
        L(c) || (c = {});
        c = w({
            strictDi: !1
        }, c);
        var d = function() {
                b = B(b);
                if (b.injector()) {
                    var d = b[0] === W ? "document" : xa(b);
                    throw Ja("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                a = a || [];
                a.unshift(["$provide", function(a) {
                    a.value("$rootElement", b)
                }]);
                c.debugInfoEnabled && a.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]);
                a.unshift("ng");
                d = cb(a, c.strictDi);
                d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector",
                            d);
                        c(b)(a)
                    })
                }]);
                return d
            },
            e = /^NG_ENABLE_DEBUG_INFO!/,
            f = /^NG_DEFER_BOOTSTRAP!/;
        R && e.test(R.name) && (c.debugInfoEnabled = !0, R.name = R.name.replace(e, ""));
        if (R && !f.test(R.name)) return d();
        R.name = R.name.replace(f, "");
        ca.resumeBootstrap = function(b) {
            r(b, function(b) {
                a.push(b)
            });
            return d()
        };
        z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()
    }

    function Kd() {
        R.name = "NG_ENABLE_DEBUG_INFO!" + R.name;
        R.location.reload()
    }

    function Ld(b) {
        b = ca.element(b).injector();
        if (!b) throw Ja("test");
        return b.get("$$testability")
    }

    function uc(b, a) {
        a = a || "_";
        return b.replace(Md, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Nd() {
        var b;
        vc || ((ta = R.jQuery) && ta.fn.on ? (B = ta, w(ta.fn, {
            scope: Ka.scope,
            isolateScope: Ka.isolateScope,
            controller: Ka.controller,
            injector: Ka.injector,
            inheritedData: Ka.inheritedData
        }), b = ta.cleanData, ta.cleanData = function(a) {
            var c;
            if (Qb) Qb = !1;
            else
                for (var d = 0, e; null != (e = a[d]); d++)(c = ta._data(e, "events")) && c.$destroy && ta(e).triggerHandler("$destroy");
            b(a)
        }) : B = T, ca.element = B, vc = !0)
    }

    function Rb(b, a, c) {
        if (!b) throw Ja("areq",
            a || "?", c || "required");
        return b
    }

    function La(b, a, c) {
        c && H(b) && (b = b[b.length - 1]);
        Rb(z(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function Ma(b, a) {
        if ("hasOwnProperty" === b) throw Ja("badname", a);
    }

    function wc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && z(b) ? oc(e, b) : b
    }

    function ub(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a)
        } while (a !== b);
        return B(c)
    }

    function ja() {
        return Object.create(null)
    }

    function Od(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = S("$injector"),
            d = S("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || S;
        return a(b, "module", function() {
            var b = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] = null);
                return a(b, f, function() {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function() {
                            f[e || "push"]([c, d, arguments]);
                            return t
                        }
                    }
                    if (!g) throw c("nomod", f);
                    var b = [],
                        d = [],
                        e = [],
                        q = a("$injector", "invoke", "push", d),
                        t = {
                            _invokeQueue: b,
                            _configBlocks: d,
                            _runBlocks: e,
                            requires: g,
                            name: f,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: q,
                            run: function(a) {
                                e.push(a);
                                return this
                            }
                        };
                    h && q(h);
                    return t
                })
            }
        })
    }

    function Pd(b) {
        w(b, {
            bootstrap: tc,
            copy: Da,
            extend: w,
            equals: ia,
            element: B,
            forEach: r,
            injector: cb,
            noop: A,
            bind: oc,
            toJson: ab,
            fromJson: pc,
            identity: ra,
            isUndefined: D,
            isDefined: y,
            isString: x,
            isFunction: z,
            isObject: L,
            isNumber: Y,
            isElement: nc,
            isArray: H,
            version: Qd,
            isDate: ha,
            lowercase: K,
            uppercase: vb,
            callbacks: {
                counter: 0
            },
            getTestability: Ld,
            $$minErr: S,
            $$csp: db,
            reloadWithDebugInfo: Kd
        });
        eb = Od(R);
        try {
            eb("ngLocale")
        } catch (a) {
            eb("ngLocale", []).provider("$locale", Rd)
        }
        eb("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: Sd
            });
            a.provider("$compile", xc).directive({
                a: Td,
                input: yc,
                textarea: yc,
                form: Ud,
                script: Vd,
                select: Wd,
                style: Xd,
                option: Yd,
                ngBind: Zd,
                ngBindHtml: $d,
                ngBindTemplate: ae,
                ngClass: be,
                ngClassEven: ce,
                ngClassOdd: de,
                ngCloak: ee,
                ngController: fe,
                ngForm: ge,
                ngHide: he,
                ngIf: ie,
                ngInclude: je,
                ngInit: ke,
                ngNonBindable: le,
                ngPluralize: me,
                ngRepeat: ne,
                ngShow: oe,
                ngStyle: pe,
                ngSwitch: qe,
                ngSwitchWhen: re,
                ngSwitchDefault: se,
                ngOptions: te,
                ngTransclude: ue,
                ngModel: ve,
                ngList: we,
                ngChange: xe,
                pattern: zc,
                ngPattern: zc,
                required: Ac,
                ngRequired: Ac,
                minlength: Bc,
                ngMinlength: Bc,
                maxlength: Cc,
                ngMaxlength: Cc,
                ngValue: ye,
                ngModelOptions: ze
            }).directive({
                ngInclude: Ae
            }).directive(wb).directive(Dc);
            a.provider({
                $anchorScroll: Be,
                $animate: Ce,
                $browser: De,
                $cacheFactory: Ee,
                $controller: Fe,
                $document: Ge,
                $exceptionHandler: He,
                $filter: Ec,
                $interpolate: Ie,
                $interval: Je,
                $http: Ke,
                $httpBackend: Le,
                $location: Me,
                $log: Ne,
                $parse: Oe,
                $rootScope: Pe,
                $q: Qe,
                $$q: Re,
                $sce: Se,
                $sceDelegate: Te,
                $sniffer: Ue,
                $templateCache: Ve,
                $templateRequest: We,
                $$testability: Xe,
                $timeout: Ye,
                $window: Ze,
                $$rAF: $e,
                $$asyncCallback: af,
                $$jqLite: bf
            })
        }])
    }

    function fb(b) {
        return b.replace(cf,
            function(a, b, d, e) {
                return e ? d.toUpperCase() : d
            }).replace(df, "Moz$1")
    }

    function Fc(b) {
        b = b.nodeType;
        return b === qa || !b || 9 === b
    }

    function Gc(b, a) {
        var c, d, e = a.createDocumentFragment(),
            f = [];
        if (Sb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (ef.exec(b) || ["", ""])[1].toLowerCase();
            d = ka[d] || ka._default;
            c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
            for (d = d[0]; d--;) c = c.lastChild;
            f = Za(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        r(f, function(a) {
            e.appendChild(a)
        });
        return e
    }

    function T(b) {
        if (b instanceof T) return b;
        var a;
        x(b) && (b = N(b), a = !0);
        if (!(this instanceof T)) {
            if (a && "<" != b.charAt(0)) throw Tb("nosel");
            return new T(b)
        }
        if (a) {
            a = W;
            var c;
            b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Gc(b, a)) ? c.childNodes : []
        }
        Hc(this, b)
    }

    function Ub(b) {
        return b.cloneNode(!0)
    }

    function xb(b, a) {
        a || yb(b);
        if (b.querySelectorAll)
            for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) yb(c[d])
    }

    function Ic(b, a, c, d) {
        if (y(d)) throw Tb("offargs");
        var e = (d = zb(b)) && d.events,
            f = d && d.handle;
        if (f)
            if (a) r(a.split(" "),
                function(a) {
                    if (y(c)) {
                        var d = e[a];
                        Ya(d || [], c);
                        if (d && 0 < d.length) return
                    }
                    b.removeEventListener(a, f, !1);
                    delete e[a]
                });
            else
                for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function yb(b, a) {
        var c = b.ng339,
            d = c && Ab[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Ic(b)), delete Ab[c], b.ng339 = u))
    }

    function zb(b, a) {
        var c = b.ng339,
            c = c && Ab[c];
        a && !c && (b.ng339 = c = ++hf, c = Ab[c] = {
            events: {},
            data: {},
            handle: u
        });
        return c
    }

    function Vb(b, a, c) {
        if (Fc(b)) {
            var d = y(c),
                e = !d && a && !L(a),
                f = !a;
            b = (b = zb(b, !e)) && b.data;
            if (d) b[a] = c;
            else {
                if (f) return b;
                if (e) return b && b[a];
                w(b, a)
            }
        }
    }

    function Bb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function Cb(b, a) {
        a && b.setAttribute && r(a.split(" "), function(a) {
            b.setAttribute("class", N((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + N(a) + " ", " ")))
        })
    }

    function Db(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function(a) {
                a = N(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", N(c))
        }
    }

    function Hc(b, a) {
        if (a)
            if (a.nodeType) b[b.length++] = a;
            else {
                var c = a.length;
                if ("number" === typeof c && a.window !== a) {
                    if (c)
                        for (var d = 0; d < c; d++) b[b.length++] = a[d]
                } else b[b.length++] = a
            }
    }

    function Jc(b, a) {
        return Eb(b, "$" + (a || "ngController") + "Controller")
    }

    function Eb(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = H(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++)
                if ((c = B.data(b, a[d])) !== u) return c;
            b = b.parentNode ||
                11 === b.nodeType && b.host
        }
    }

    function Kc(b) {
        for (xb(b, !0); b.firstChild;) b.removeChild(b.firstChild)
    }

    function Lc(b, a) {
        a || xb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function jf(b, a) {
        a = a || R;
        if ("complete" === a.document.readyState) a.setTimeout(b);
        else B(a).on("load", b)
    }

    function Mc(b, a) {
        var c = Fb[a.toLowerCase()];
        return c && Nc[wa(b)] && c
    }

    function kf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Oc[a]
    }

    function lf(b, a) {
        var c = function(c, e) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var f =
                    a[e || c.type],
                g = f ? f.length : 0;
            if (g) {
                if (D(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped
                };
                1 < g && (f = sa(f));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || f[l].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function bf() {
        this.$get = function() {
            return w(T, {
                hasClass: function(b, a) {
                    b.attr && (b = b[0]);
                    return Bb(b, a)
                },
                addClass: function(b, a) {
                    b.attr && (b = b[0]);
                    return Db(b, a)
                },
                removeClass: function(b, a) {
                    b.attr && (b = b[0]);
                    return Cb(b, a)
                }
            })
        }
    }

    function Na(b, a) {
        var c = b && b.$$hashKey;
        if (c) return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b
    }

    function gb(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        r(b, this.put, this)
    }

    function mf(b) {
        return (b = b.toString().replace(Pc, "").match(Qc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/,
            " ") + ")" : "fn"
    }

    function cb(b, a) {
        function c(a) {
            return function(b, c) {
                if (L(b)) r(b, lc(a));
                else return a(b, c)
            }
        }

        function d(a, b) {
            Ma(a, "service");
            if (z(b) || H(b)) b = q.instantiate(b);
            if (!b.$get) throw Fa("pget", a);
            return p[a + "Provider"] = b
        }

        function e(a, b) {
            return function() {
                var c = s.invoke(b, this);
                if (D(c)) throw Fa("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {
                $get: !1 !== c ? e(a, b) : b
            })
        }

        function g(a) {
            var b = [],
                c;
            r(a, function(a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b],
                            f = q.get(e[0]);
                        f[e[1]].apply(f,
                            e[2])
                    }
                }
                if (!n.get(a)) {
                    n.put(a, !0);
                    try {
                        x(a) ? (c = eb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : La(a, "module")
                    } catch (e) {
                        throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Fa("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l) throw Fa("cdep", a + " <- " + k.join(" <- "));
                    return b[a]
                }
                try {
                    return k.unshift(a),
                        b[a] = l, b[a] = c(a, e)
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift()
                }
            }

            function e(b, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var k = [],
                    l = cb.$$annotate(b, a, g),
                    h, q, p;
                q = 0;
                for (h = l.length; q < h; q++) {
                    p = l[q];
                    if ("string" !== typeof p) throw Fa("itkn", p);
                    k.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g))
                }
                H(b) && (b = b[h]);
                return b.apply(c, k)
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return L(a) || z(a) ? a : d
                },
                get: d,
                annotate: cb.$$annotate,
                has: function(a) {
                    return p.hasOwnProperty(a +
                            "Provider") || b.hasOwnProperty(a)
                }
            }
        }
        a = !0 === a;
        var l = {},
            k = [],
            n = new gb([], !0),
            p = {
                $provide: {
                    provider: c(d),
                    factory: c(f),
                    service: c(function(a, b) {
                        return f(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: c(function(a, b) {
                        return f(a, ea(b), !1)
                    }),
                    constant: c(function(a, b) {
                        Ma(a, "constant");
                        p[a] = b;
                        t[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = q.get(a + "Provider"),
                            d = c.$get;
                        c.$get = function() {
                            var a = s.invoke(d, c);
                            return s.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            q = p.$injector = h(p, function(a, b) {
                ca.isString(b) && k.push(b);
                throw Fa("unpr", k.join(" <- "));
            }),
            t = {},
            s = t.$injector = h(t, function(a, b) {
                var c = q.get(a + "Provider", b);
                return s.invoke(c.$get, c, u, a)
            });
        r(g(b), function(a) {
            s.invoke(a || A)
        });
        return s
    }

    function Be() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function(a) {
                    if ("a" === wa(a)) return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    z(c) ? c = c() : nc(c) ? (c = c[0], c = "fixed" !==
                    a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(),
                    b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }
            var h = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function(a, b) {
                a === b && "" === a || jf(function() {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function af() {
        this.$get = ["$$rAF", "$timeout", function(b, a) {
            return b.supported ? function(a) {
                return b(a)
            } :
                function(b) {
                    return a(b, 0, !1)
                }
        }]
    }

    function nf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, $a.call(arguments, 1))
            } finally {
                if (m--, 0 === m)
                    for (; C.length;) try {
                        C.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function f(a, b) {
            (function da() {
                r($, function(a) {
                    a()
                });
                I = b(da, a)
            })()
        }

        function g() {
            h();
            l()
        }

        function h() {
            a: {
                try {
                    M = t.state;
                    break a
                } catch (a) {}
                M = void 0
            }
            M = D(M) ? null : M;ia(M, P) && (M = P);P = M
        }

        function l() {
            if (G !== n.url() || E !== M) G = n.url(), E = M, r(X, function(a) {
                a(n.url(), M)
            })
        }

        function k(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var n = this,
            p = a[0],
            q = b.location,
            t = b.history,
            s = b.setTimeout,
            F = b.clearTimeout,
            v = {};
        n.isMock = !1;
        var m = 0,
            C = [];
        n.$$completeOutstandingRequest = e;
        n.$$incOutstandingRequestCount = function() {
            m++
        };
        n.notifyWhenNoOutstandingRequests = function(a) {
            r($, function(a) {
                a()
            });
            0 === m ? a() : C.push(a)
        };
        var $ = [],
            I;
        n.addPollFn = function(a) {
            D(I) && f(100, s);
            $.push(a);
            return a
        };
        var M, E, G = q.href,
            O = a.find("base"),
            Q = null;
        h();
        E = M;
        n.url = function(a, c, e) {
            D(e) && (e = null);
            q !== b.location && (q = b.location);
            t !== b.history && (t = b.history);
            if (a) {
                var f =
                    E === e;
                if (G === a && (!d.history || f)) return n;
                var g = G && Ga(G) === Ga(a);
                G = a;
                E = e;
                if (!d.history || g && f) {
                    if (!g || Q) Q = a;
                    c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e), c.hash = a) : q.href = a
                } else t[c ? "replaceState" : "pushState"](e, "", a), h(), E = M;
                return n
            }
            return Q || q.href.replace(/%27/g, "'")
        };
        n.state = function() {
            return M
        };
        var X = [],
            ba = !1,
            P = null;
        n.onUrlChange = function(a) {
            if (!ba) {
                if (d.history) B(b).on("popstate", g);
                B(b).on("hashchange", g);
                ba = !0
            }
            X.push(a);
            return a
        };
        n.$$checkUrlChange = l;
        n.baseHref = function() {
            var a =
                O.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var fa = {},
            y = "",
            la = n.baseHref();
        n.cookies = function(a, b) {
            var d, e, f, g;
            if (a) b === u ? p.cookie = encodeURIComponent(a) + "=;path=" + la + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : x(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + la).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
            else {
                if (p.cookie !== y)
                    for (y = p.cookie, d = y.split("; "), fa = {}, f = 0; f < d.length; f++) e =
                        d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), fa[a] === u && (fa[a] = k(e.substring(g + 1))));
                return fa
            }
        };
        n.defer = function(a, b) {
            var c;
            m++;
            c = s(function() {
                delete v[c];
                e(a)
            }, b || 0);
            v[c] = !0;
            return c
        };
        n.defer.cancel = function(a) {
            return v[a] ? (delete v[a], F(a), e(A), !0) : !1
        }
    }

    function De() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new nf(b, d, a, c)
        }]
    }

    function Ee() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null)
                }

                function f(a,
                           b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (b in a) throw S("$cacheFactory")("iid", b);
                var g = 0,
                    h = w({}, d, {
                        id: b
                    }),
                    l = {},
                    k = d && d.capacity || Number.MAX_VALUE,
                    n = {},
                    p = null,
                    q = null;
                return a[b] = {
                    put: function(a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = n[a] || (n[a] = {
                                    key: a
                                });
                            e(c)
                        }
                        if (!D(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key), b
                    },
                    get: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b) return;
                            e(b)
                        }
                        return l[a]
                    },
                    remove: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b) return;
                            b == p && (p = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete n[a]
                        }
                        delete l[a];
                        g--
                    },
                    removeAll: function() {
                        l = {};
                        g = 0;
                        n = {};
                        p = q = null
                    },
                    destroy: function() {
                        n = h = l = null;
                        delete a[b]
                    },
                    info: function() {
                        return w({}, h, {
                            size: g
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                r(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function(b) {
                return a[b]
            };
            return b
        }
    }

    function Ve() {
        this.$get = ["$cacheFactory", function(b) {
            return b("templates")
        }]
    }

    function xc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                d = {};
            r(a, function(a, e) {
                var f = a.match(c);
                if (!f) throw ma("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0],
                    collection: "*" ===
                    f[2],
                    optional: "?" === f[3],
                    attrName: f[4] || e
                }
            });
            return d
        }
        var d = {},
            e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            g = Gd("ngSrc,ngSrcset,src,srcset"),
            h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(a, e) {
            Ma(a, "directive");
            x(a) ? (Rb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function(b, e) {
                var f = [];
                r(d[a], function(d, g) {
                    try {
                        var h = b.invoke(d);
                        z(h) ? h = {
                            compile: ea(h)
                        } : !h.compile && h.link &&
                        (h.compile = ea(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || a;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        L(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                        f.push(h)
                    } catch (l) {
                        e(l)
                    }
                });
                return f
            }])), d[a].push(e)) : r(a, lc(p));
            return this
        };
        this.aHrefSanitizationWhitelist = function(b) {
            return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function(a) {
            return y(a) ? (k = a, this) : k
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, s, F, v, m, C, $, I, M) {
            function E(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function G(a, b, c, d, e) {
                a instanceof B || (a = B(a));
                r(a, function(b, c) {
                    b.nodeType == bb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0])
                });
                var f = O(a, b, a, c, d, e);
                G.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    Rb(b, "scope");
                    d = d || {};
                    var e = d.parentBoundTranscludeFn,
                        h = d.transcludeControllers;
                    d = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== wa(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? B(Xb(g, B("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;
                    if (h)
                        for (var l in h) d.data("$" + l + "Controller", h[l].instance);
                    G.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, e);
                    return d
                }
            }

            function O(a, b, c, d, e, f) {
                function g(a,
                           c, d, e) {
                    var f, l, k, q, p, s, t;
                    if (m)
                        for (t = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], t[f] = c[f];
                    else t = c;
                    q = 0;
                    for (p = h.length; q < p;) l = t[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), G.$$addScopeInfo(B(l), k)) : k = a, s = c.transcludeOnThisElement ? Q(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? Q(a, b) : null, c(f, k, l, d, s)) : f && f(a, l.childNodes, u, e)
                }
                for (var h = [], l, k, q, p, m, s = 0; s < a.length; s++) {
                    l = new Yb;
                    k = X(a[s], [], l, 0 === s ? d : u, e);
                    (f = k.length ? fa(k, a[s], l, b, c, null, [], [], f) : null) &&
                    f.scope && G.$$addScopeClass(l.$$element);
                    l = f && f.terminal || !(q = a[s].childNodes) || !q.length ? null : O(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || l) h.push(s, f, l), p = !0, m = m || f;
                    f = null
                }
                return p ? g : null
            }

            function Q(a, b, c, d) {
                return function(d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                }
            }

            function X(a, b, c, d, g) {
                var h = c.$attr,
                    l;
                switch (a.nodeType) {
                    case qa:
                        la(b, ya(wa(a)), "E", d, g);
                        for (var k,
                                 q, p, m = a.attributes, s = 0, t = m && m.length; s < t; s++) {
                            var M = !1,
                                I = !1;
                            k = m[s];
                            l = k.name;
                            q = N(k.value);
                            k = ya(l);
                            if (p = U.test(k)) l = l.replace(Rc, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            });
                            var F = k.replace(/(Start|End)$/, "");
                            D(F) && k === F + "Start" && (M = l, I = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            k = ya(l.toLowerCase());
                            h[k] = l;
                            if (p || !c.hasOwnProperty(k)) c[k] = q, Mc(a, k) && (c[k] = !0);
                            Pa(a, b, q, k, p);
                            la(b, k, "A", d, g, M, I)
                        }
                        a = a.className;
                        L(a) && (a = a.animVal);
                        if (x(a) && "" !== a)
                            for (; l = f.exec(a);) k = ya(l[2]),
                            la(b, k, "C", d, g) && (c[k] = N(l[3])), a = a.substr(l.index + l[0].length);
                        break;
                    case bb:
                        za(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (l = e.exec(a.nodeValue)) k = ya(l[1]), la(b, k, "M", d, g) && (c[k] = N(l[2]))
                        } catch (v) {}
                }
                b.sort(da);
                return b
            }

            function ba(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ma("uterdir", b, c);
                        a.nodeType == qa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return B(d)
            }

            function P(a, b, c) {
                return function(d, e, f, g, h) {
                    e = ba(e[0],
                        b, c);
                    return a(d, e, f, g, h)
                }
            }

            function fa(a, d, e, f, g, l, k, p, m) {
                function s(a, b, c, d) {
                    if (a) {
                        c && (a = P(a, c, d));
                        a.require = J.require;
                        a.directiveName = da;
                        if (Q === J || J.$$isolateScope) a = Y(a, {
                            isolateScope: !0
                        });
                        k.push(a)
                    }
                    if (b) {
                        c && (b = P(b, c, d));
                        b.require = J.require;
                        b.directiveName = da;
                        if (Q === J || J.$$isolateScope) b = Y(b, {
                            isolateScope: !0
                        });
                        p.push(b)
                    }
                }

                function M(a, b, c, d) {
                    var e, f = "data",
                        g = !1,
                        l = c,
                        k;
                    if (x(b)) {
                        k = b.match(h);
                        b = b.substring(k[0].length);
                        k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
                        "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData",
                            l = c.parent());
                        "?" === k[2] && (g = !0);
                        e = null;
                        d && "data" === f && (e = d[b]) && (e = e.instance);
                        e = e || l[f]("$" + b + "Controller");
                        if (!e && !g) throw ma("ctreq", b, a);
                        return e || null
                    }
                    H(b) && (e = [], r(b, function(b) {
                        e.push(M(a, b, c, d))
                    }));
                    return e
                }

                function I(a, c, f, g, l) {
                    function h(a, b, c) {
                        var d;
                        Wa(a) || (c = b, b = a, a = u);
                        A && (d = C);
                        c || (c = A ? X.parent() : X);
                        return l(a, b, d, c, Wb)
                    }
                    var m, s, t, E, C, ib, X, P;
                    d === f ? (P = e, X = e.$$element) : (X = B(f), P = new Yb(X, e));
                    Q && (E = c.$new(!0));
                    l && (ib = h, ib.$$boundTransclude = l);
                    O && ($ = {}, C = {}, r(O, function(a) {
                        var b = {
                            $scope: a ===
                            Q || a.$$isolateScope ? E : c,
                            $element: X,
                            $attrs: P,
                            $transclude: ib
                        };
                        t = a.controller;
                        "@" == t && (t = P[a.name]);
                        b = v(t, b, !0, a.controllerAs);
                        C[a.name] = b;
                        A || X.data("$" + a.name + "Controller", b.instance);
                        $[a.name] = b
                    }));
                    if (Q) {
                        G.$$addScopeInfo(X, E, !0, !(na && (na === Q || na === Q.$$originalDirective)));
                        G.$$addScopeClass(X, !0);
                        g = $ && $[Q.name];
                        var ba = E;
                        g && g.identifier && !0 === Q.bindToController && (ba = g.instance);
                        r(E.$$isolateBindings = Q.$$isolateBindings, function(a, d) {
                            var e = a.attrName,
                                f = a.optional,
                                g, l, h, k;
                            switch (a.mode) {
                                case "@":
                                    P.$observe(e,
                                        function(a) {
                                            ba[d] = a
                                        });
                                    P.$$observers[e].$$scope = c;
                                    P[e] && (ba[d] = b(P[e])(c));
                                    break;
                                case "=":
                                    if (f && !P[e]) break;
                                    l = F(P[e]);
                                    k = l.literal ? ia : function(a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    h = l.assign || function() {
                                            g = ba[d] = l(c);
                                            throw ma("nonassign", P[e], Q.name);
                                        };
                                    g = ba[d] = l(c);
                                    f = function(a) {
                                        k(a, ba[d]) || (k(a, g) ? h(c, a = ba[d]) : ba[d] = a);
                                        return g = a
                                    };
                                    f.$stateful = !0;
                                    f = a.collection ? c.$watchCollection(P[e], f) : c.$watch(F(P[e], f), null, l.literal);
                                    E.$on("$destroy", f);
                                    break;
                                case "&":
                                    l = F(P[e]), ba[d] = function(a) {
                                        return l(c, a)
                                    }
                            }
                        })
                    }
                    $ &&
                    (r($, function(a) {
                        a()
                    }), $ = null);
                    g = 0;
                    for (m = k.length; g < m; g++) s = k[g], Z(s, s.isolateScope ? E : c, X, P, s.require && M(s.directiveName, s.require, X, C), ib);
                    var Wb = c;
                    Q && (Q.template || null === Q.templateUrl) && (Wb = E);
                    a && a(Wb, f.childNodes, u, l);
                    for (g = p.length - 1; 0 <= g; g--) s = p[g], Z(s, s.isolateScope ? E : c, X, P, s.require && M(s.directiveName, s.require, X, C), ib)
                }
                m = m || {};
                for (var E = -Number.MAX_VALUE, C, O = m.controllerDirectives, $, Q = m.newIsolateScopeDirective, na = m.templateDirective, fa = m.nonTlbTranscludeDirective, la = !1, D = !1, A = m.hasElementTranscludeDirective,
                         w = e.$$element = B(d), J, da, V, hb = f, za, K = 0, R = a.length; K < R; K++) {
                    J = a[K];
                    var Pa = J.$$start,
                        U = J.$$end;
                    Pa && (w = ba(d, Pa, U));
                    V = u;
                    if (E > J.priority) break;
                    if (V = J.scope) J.templateUrl || (L(V) ? (Oa("new/isolated scope", Q || C, J, w), Q = J) : Oa("new/isolated scope", Q, J, w)), C = C || J;
                    da = J.name;
                    !J.templateUrl && J.controller && (V = J.controller, O = O || {}, Oa("'" + da + "' controller", O[da], J, w), O[da] = J);
                    if (V = J.transclude) la = !0, J.$$tlb || (Oa("transclusion", fa, J, w), fa = J), "element" == V ? (A = !0, E = J.priority, V = w, w = e.$$element = B(W.createComment(" " + da + ": " +
                        e[da] + " ")), d = w[0], T(g, $a.call(V, 0), d), hb = G(V, f, E, l && l.name, {
                        nonTlbTranscludeDirective: fa
                    })) : (V = B(Ub(d)).contents(), w.empty(), hb = G(V, f));
                    if (J.template)
                        if (D = !0, Oa("template", na, J, w), na = J, V = z(J.template) ? J.template(w, e) : J.template, V = Sc(V), J.replace) {
                            l = J;
                            V = Sb.test(V) ? Tc(Xb(J.templateNamespace, N(V))) : [];
                            d = V[0];
                            if (1 != V.length || d.nodeType !== qa) throw ma("tplrt", da, "");
                            T(g, w, d);
                            R = {
                                $attr: {}
                            };
                            V = X(d, [], R);
                            var aa = a.splice(K + 1, a.length - (K + 1));
                            Q && y(V);
                            a = a.concat(V).concat(aa);
                            S(e, R);
                            R = a.length
                        } else w.html(V);
                    if (J.templateUrl) D = !0, Oa("template", na, J, w), na = J, J.replace && (l = J), I = of(a.splice(K, a.length - K), w, e, g, la && hb, k, p, {
                        controllerDirectives: O,
                        newIsolateScopeDirective: Q,
                        templateDirective: na,
                        nonTlbTranscludeDirective: fa
                    }), R = a.length;
                    else if (J.compile) try {
                        za = J.compile(w, e, hb), z(za) ? s(null, za, Pa, U) : za && s(za.pre, za.post, Pa, U)
                    } catch (pf) {
                        c(pf, xa(w))
                    }
                    J.terminal && (I.terminal = !0, E = Math.max(E, J.priority))
                }
                I.scope = C && !0 === C.scope;
                I.transcludeOnThisElement = la;
                I.elementTranscludeOnThisElement = A;
                I.templateOnThisElement = D;
                I.transclude = hb;
                m.hasElementTranscludeDirective = A;
                return I
            }

            function y(a) {
                for (var b = 0, c = a.length; b < c; b++) a[b] = Ob(a[b], {
                    $$isolateScope: !0
                })
            }

            function la(b, e, f, g, l, h, k) {
                if (e === l) return null;
                l = null;
                if (d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var m = 0, s = e.length; m < s; m++) try {
                        q = e[m], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (h && (q = Ob(q, {
                            $$start: h,
                            $$end: k
                        })), b.push(q), l = q)
                    } catch (I) {
                        c(I)
                    }
                }
                return l
            }

            function D(b) {
                if (d.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++)
                        if (b = c[e], b.multiElement) return !0;
                return !1
            }

            function S(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                r(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                r(b, function(b, f) {
                    "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function of(a, b, c, d, e, f, g, l) {
                var h = [],
                    k, q, p = b[0],
                    m = a.shift(),
                    t = Ob(m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    I = z(m.templateUrl) ? m.templateUrl(b, c) : m.templateUrl,
                    M = m.templateNamespace;
                b.empty();
                s(I).then(function(s) {
                    var F, v;
                    s = Sc(s);
                    if (m.replace) {
                        s = Sb.test(s) ? Tc(Xb(M, N(s))) : [];
                        F = s[0];
                        if (1 != s.length || F.nodeType !== qa) throw ma("tplrt", m.name, I);
                        s = {
                            $attr: {}
                        };
                        T(d, b, F);
                        var C = X(F, [], s);
                        L(m.scope) && y(C);
                        a = C.concat(a);
                        S(c, s)
                    } else F = p, b.html(s);
                    a.unshift(t);
                    k = fa(a, F, c, e, b, m, f, g, l);
                    r(d, function(a, c) {
                        a == F && (d[c] = b[0])
                    });
                    for (q = O(b[0].childNodes, e); h.length;) {
                        s = h.shift();
                        v = h.shift();
                        var G = h.shift(),
                            P = h.shift(),
                            C = b[0];
                        if (!s.$$destroyed) {
                            if (v !== p) {
                                var $ = v.className;
                                l.hasElementTranscludeDirective && m.replace || (C = Ub(F));
                                T(G, B(v), C);
                                E(B(C), $)
                            }
                            v = k.transcludeOnThisElement ? Q(s, k.transclude, P) : P;
                            k(q, s, C, d, v)
                        }
                    }
                    h = null
                });
                return function(a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (h ? h.push(b, c, d, a) : (k.transcludeOnThisElement && (a = Q(b, k.transclude, e)), k(q, b, c, d, a)))
                }
            }

            function da(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Oa(a, b, c, d) {
                if (b) throw ma("multidir",
                    b.name, c.name, a, xa(d));
            }

            function za(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && G.$$addBindingClass(a);
                        return function(a, c) {
                            var e = c.parent();
                            b || G.$$addBindingClass(e);
                            G.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function Xb(a, b) {
                a = K(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = W.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function R(a, b) {
                if ("srcdoc" ==
                    b) return $.HTML;
                var c = wa(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return $.RESOURCE_URL
            }

            function Pa(a, c, d, e, f) {
                var h = R(a, e);
                f = g[e] || f;
                var k = b(d, !0, h, f);
                if (k) {
                    if ("multiple" === e && "select" === wa(a)) throw ma("selmulti", xa(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, g) {
                                    c = g.$$observers || (g.$$observers = {});
                                    if (l.test(e)) throw ma("nodomevents");
                                    var p = g[e];
                                    p !== d && (k = p && b(p, !0, h, f), d = p);
                                    k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope ||
                                    a).$watch(k, function(a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function T(a, b, c) {
                var d = b[0],
                    e = b.length,
                    f = d.parentNode,
                    g, l;
                if (a)
                    for (g = 0, l = a.length; g < l; g++)
                        if (a[g] == d) {
                            a[g++] = c;
                            l = g + e - 1;
                            for (var h = a.length; g < h; g++, l++) l < h ? a[g] = a[l] : delete a[g];
                            a.length -= e - 1;
                            a.context === d && (a.context = c);
                            break
                        }
                f && f.replaceChild(c, d);
                a = W.createDocumentFragment();
                a.appendChild(d);
                B(c).data(B(d).data());
                ta ? (Qb = !0, ta.cleanData([d])) : delete B.cache[d[B.expando]];
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], B(f).remove(),
                    a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function Y(a, b) {
                return w(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function Z(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (l) {
                    c(l, xa(d))
                }
            }
            var Yb = function(a, b) {
                if (b) {
                    var c = Object.keys(b),
                        d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            Yb.prototype = {
                $normalize: ya,
                $addClass: function(a) {
                    a && 0 < a.length && I.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && 0 < a.length && I.removeClass(this.$$element, a)
                },
                $updateClass: function(a,
                                       b) {
                    var c = Uc(a, b);
                    c && c.length && I.addClass(this.$$element, c);
                    (c = Uc(b, a)) && c.length && I.removeClass(this.$$element, c)
                },
                $set: function(a, b, d, e) {
                    var f = this.$$element[0],
                        g = Mc(f, a),
                        l = kf(f, a),
                        f = a;
                    g ? (this.$$element.prop(a, b), e = g) : l && (this[l] = b, f = l);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = uc(a, "-"));
                    g = wa(this.$$element);
                    if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = M(b, "src" === a);
                    else if ("img" === g && "srcset" === a) {
                        for (var g = "", l = N(b), h = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(l) ?
                            h : /(,)/, l = l.split(h), h = Math.floor(l.length / 2), k = 0; k < h; k++) var q = 2 * k,
                                 g = g + M(N(l[q]), !0),
                                 g = g + (" " + N(l[q + 1]));
                        l = N(l[2 * k]).split(/\s/);
                        g += M(N(l[0]), !0);
                        2 === l.length && (g += " " + N(l[1]));
                        this[a] = b = g
                    }!1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    (a = this.$$observers) && r(a[f], function(a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = ja()),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    m.$evalAsync(function() {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    });
                    return function() {
                        Ya(e, b)
                    }
                }
            };
            var V = b.startSymbol(),
                na = b.endSymbol(),
                Sc = "{{" == V || "}}" == na ? ra : function(a) {
                    return a.replace(/\{\{/g, V).replace(/}}/g, na)
                },
                U = /^ngAttr[A-Z]/;
            G.$$addBindingInfo = k ? function(a, b) {
                var c = a.data("$binding") || [];
                H(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : A;
            G.$$addBindingClass = k ? function(a) {
                E(a, "ng-binding")
            } : A;
            G.$$addScopeInfo = k ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : A;
            G.$$addScopeClass = k ? function(a, b) {
                E(a, b ? "ng-isolate-scope" :
                    "ng-scope")
            } : A;
            return G
        }]
    }

    function ya(b) {
        return fb(b.replace(Rc, ""))
    }

    function Uc(b, a) {
        var c = "",
            d = b.split(/\s+/),
            e = a.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Tc(b) {
        b = B(b);
        var a = b.length;
        if (1 >= a) return b;
        for (; a--;) 8 === b[a].nodeType && qf.call(b, a, 1);
        return b
    }

    function Fe() {
        var b = {},
            a = !1,
            c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, c) {
            Ma(a, "controller");
            L(a) ? w(b, a) : b[a] = c
        };
        this.allowGlobals = function() {
            a = !0
        };
        this.$get = ["$injector", "$window", function(d, e) {
            function f(a, b, c, d) {
                if (!a || !L(a.$scope)) throw S("$controller")("noscp", d, b);
                a.$scope[b] = c
            }
            return function(g, h, l, k) {
                var n, p, q;
                l = !0 === l;
                k && x(k) && (q = k);
                if (x(g)) {
                    k = g.match(c);
                    if (!k) throw rf("ctrlfmt", g);
                    p = k[1];
                    q = q || k[3];
                    g = b.hasOwnProperty(p) ? b[p] : wc(h.$scope, p, !0) || (a ? wc(e, p, !0) : u);
                    La(g, p, !0)
                }
                if (l) return l = (H(g) ? g[g.length - 1] : g).prototype, n = Object.create(l || null), q && f(h, q, n, p || g.name), w(function() {
                    d.invoke(g, n, h, p);
                    return n
                }, {
                    instance: n,
                    identifier: q
                });
                n = d.instantiate(g, h, p);
                q && f(h, q, n, p || g.name);
                return n
            }
        }]
    }

    function Ge() {
        this.$get = ["$window", function(b) {
            return B(b.document)
        }]
    }

    function He() {
        this.$get = ["$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Zb(b, a) {
        if (x(b)) {
            var c = b.replace(sf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
                d && (b = pc(c))
            }
        }
        return b
    }

    function Wc(b) {
        var a = ja(),
            c, d, e;
        if (!b) return a;
        r(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = K(N(b.substr(0,
                e)));
            d = N(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function Xc(b) {
        var a = L(b) ? b : u;
        return function(c) {
            a || (a = Wc(b));
            return c ? (c = a[K(c)], void 0 === c && (c = null), c) : a
        }
    }

    function Yc(b, a, c, d) {
        if (z(d)) return d(b, a, c);
        r(d, function(d) {
            b = d(b, a, c)
        });
        return b
    }

    function Ke() {
        var b = this.defaults = {
                transformResponse: [Zb],
                transformRequest: [function(a) {
                    return L(a) && "[object File]" !== Ca.call(a) && "[object Blob]" !== Ca.call(a) && "[object FormData]" !== Ca.call(a) ? ab(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: sa($b),
                    put: sa($b),
                    patch: sa($b)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            a = !1;
        this.useApplyAsync = function(b) {
            return y(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(d, e, f, g, h, l) {
            function k(a) {
                function c(a) {
                    var b = w({}, a);
                    b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;
                    a = a.status;
                    return 200 <= a && 300 > a ? b : h.reject(b)
                }

                function d(a) {
                    var b, c = {};
                    r(a, function(a, d) {
                        z(a) ? (b =
                            a(), null != b && (c[d] = b)) : c[d] = a
                    });
                    return c
                }
                if (!ca.isObject(a)) throw S("$http")("badreq", a);
                var e = w({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse
                }, a);
                e.headers = function(a) {
                    var c = b.headers,
                        e = w({}, a.headers),
                        f, g, c = w({}, c.common, c[K(a.method)]);
                    a: for (f in c) {
                        a = K(f);
                        for (g in e)
                            if (K(g) === a) continue a;
                        e[f] = c[f]
                    }
                    return d(e)
                }(a);
                e.method = vb(e.method);
                var f = [function(a) {
                        var d = a.headers,
                            e = Yc(a.data, Xc(d), u, a.transformRequest);
                        D(e) && r(d, function(a, b) {
                            "content-type" === K(b) &&
                            delete d[b]
                        });
                        D(a.withCredentials) && !D(b.withCredentials) && (a.withCredentials = b.withCredentials);
                        return n(a, e).then(c, c)
                    }, u],
                    g = h.when(e);
                for (r(t, function(a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && f.push(a.response, a.responseError)
                }); f.length;) {
                    a = f.shift();
                    var l = f.shift(),
                        g = g.then(a, l)
                }
                g.success = function(a) {
                    La(a, "fn");
                    g.then(function(b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                g.error = function(a) {
                    La(a, "fn");
                    g.then(null, function(b) {
                        a(b.data,
                            b.status, b.headers, e)
                    });
                    return g
                };
                return g
            }

            function n(c, f) {
                function l(b, c, d, e) {
                    function f() {
                        m(c, b, d, e)
                    }
                    E && (200 <= b && 300 > b ? E.put(Q, [b, c, Wc(d), e]) : E.remove(Q));
                    a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                }

                function m(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? I.resolve : I.reject)({
                        data: a,
                        status: b,
                        headers: Xc(d),
                        config: c,
                        statusText: e
                    })
                }

                function n(a) {
                    m(a.data, a.status, sa(a.headers()), a.statusText)
                }

                function t() {
                    var a = k.pendingRequests.indexOf(c); - 1 !== a && k.pendingRequests.splice(a, 1)
                }
                var I = h.defer(),
                    M = I.promise,
                    E, G, O = c.headers,
                    Q = p(c.url, c.params);
                k.pendingRequests.push(c);
                M.then(t, t);
                !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = L(c.cache) ? c.cache : L(b.cache) ? b.cache : q);
                E && (G = E.get(Q), y(G) ? G && z(G.then) ? G.then(n, n) : H(G) ? m(G[1], G[0], sa(G[2]), G[3]) : m(G, 200, {}, "OK") : E.put(Q, M));
                D(G) && ((G = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (O[c.xsrfHeaderName || b.xsrfHeaderName] = G), d(c.method, Q, f, l, O, c.timeout, c.withCredentials, c.responseType));
                return M
            }

            function p(a, b) {
                if (!b) return a;
                var c = [];
                Ed(b, function(a, b) {
                    null === a || D(a) || (H(a) || (a = [a]), r(a, function(a) {
                        L(a) && (a = ha(a) ? a.toISOString() : ab(a));
                        c.push(Ea(b) + "=" + Ea(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }
            var q = f("$http"),
                t = [];
            r(c, function(a) {
                t.unshift(x(a) ? l.get(a) : l.invoke(a))
            });
            k.pendingRequests = [];
            (function(a) {
                r(arguments, function(a) {
                    k[a] = function(b, c) {
                        return k(w(c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function(a) {
                r(arguments, function(a) {
                    k[a] = function(b, c, d) {
                        return k(w(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            })("post", "put", "patch");
            k.defaults = b;
            return k
        }]
    }

    function vf() {
        return new R.XMLHttpRequest
    }

    function Le() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return wf(b, vf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function wf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"),
                n = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            n = function(a) {
                f.removeEventListener("load", n, !1);
                f.removeEventListener("error", n, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1,
                    t = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), t = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, t)
            };
            f.addEventListener("load", n, !1);
            f.addEventListener("error", n, !1);
            e.body.appendChild(f);
            return n
        }
        return function(e, h, l, k, n, p, q, t) {
            function s() {
                m && m();
                C && C.abort()
            }

            function F(a, d, e, f, g) {
                I !== u && c.cancel(I);
                m = C = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(A)
            }
            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == K(e)) {
                var v = "_" + (d.counter++).toString(36);
                d[v] = function(a) {
                    d[v].data = a;
                    d[v].called = !0
                };
                var m = f(h.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function(a, b) {
                    F(k, a, d[v].data, "", b);
                    d[v] = A
                })
            } else {
                var C = a();
                C.open(e, h, !0);
                r(n, function(a, b) {
                    y(a) && C.setRequestHeader(b, a)
                });
                C.onload = function() {
                    var a = C.statusText || "",
                        b = "response" in C ? C.response : C.responseText,
                        c = 1223 === C.status ? 204 : C.status;
                    0 === c && (c = b ? 200 : "file" == Aa(h).protocol ? 404 : 0);
                    F(k, c, b, C.getAllResponseHeaders(), a)
                };
                e = function() {
                    F(k, -1, null, null, "")
                };
                C.onerror = e;
                C.onabort = e;
                q && (C.withCredentials = !0);
                if (t) try {
                    C.responseType = t
                } catch ($) {
                    if ("json" !==
                        t) throw $;
                }
                C.send(l || null)
            }
            if (0 < p) var I = c(s, p);
            else p && z(p.then) && p.then(s)
        }
    }

    function Ie() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(f, g, t, s) {
                function F(c) {
                    return c.replace(k, b).replace(n, a)
                }

                function v(a) {
                    try {
                        var b = a;
                        a = t ? e.getTrusted(t, b) : e.valueOf(b);
                        var c;
                        if (s && !y(a)) c = a;
                        else if (null == a) c = "";
                        else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = ab(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = ac("interr", f, g.toString()), d(c)
                    }
                }
                s = !!s;
                for (var m, C, r = 0, I = [], M = [], E = f.length, G = [], O = []; r < E;)
                    if (-1 != (m = f.indexOf(b, r)) && -1 != (C = f.indexOf(a, m + h))) r !== m && G.push(F(f.substring(r, m))), r = f.substring(m + h, C), I.push(r), M.push(c(r, v)), r = C + l, O.push(G.length), G.push("");
                    else {
                        r !== E && G.push(F(f.substring(r)));
                        break
                    }
                if (t && 1 < G.length) throw ac("noconcat", f);
                if (!g || I.length) {
                    var Q = function(a) {
                        for (var b = 0, c = I.length; b < c; b++) {
                            if (s && D(a[b])) return;
                            G[O[b]] =
                                a[b]
                        }
                        return G.join("")
                    };
                    return w(function(a) {
                        var b = 0,
                            c = I.length,
                            e = Array(c);
                        try {
                            for (; b < c; b++) e[b] = M[b](a);
                            return Q(e)
                        } catch (g) {
                            a = ac("interr", f, g.toString()), d(a)
                        }
                    }, {
                        exp: f,
                        expressions: I,
                        $$watchDelegate: function(a, b, c) {
                            var d;
                            return a.$watchGroup(M, function(c, e) {
                                var f = Q(c);
                                z(b) && b.call(this, f, c !== e ? d : f, a);
                                d = f
                            }, c)
                        }
                    })
                }
            }
            var h = b.length,
                l = a.length,
                k = new RegExp(b.replace(/./g, f), "g"),
                n = new RegExp(a.replace(/./g, f), "g");
            g.startSymbol = function() {
                return b
            };
            g.endSymbol = function() {
                return a
            };
            return g
        }]
    }

    function Je() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
            function e(e, h, l, k) {
                var n = a.setInterval,
                    p = a.clearInterval,
                    q = 0,
                    t = y(k) && !k,
                    s = (t ? d : c).defer(),
                    F = s.promise;
                l = y(l) ? l : 0;
                F.then(null, null, e);
                F.$$intervalId = n(function() {
                    s.notify(q++);
                    0 < l && q >= l && (s.resolve(q), p(F.$$intervalId), delete f[F.$$intervalId]);
                    t || b.$apply()
                }, h);
                f[F.$$intervalId] = s;
                return F
            }
            var f = {};
            e.cancel = function(b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) :
                    !1
            };
            return e
        }]
    }

    function Rd() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function bc(b) {
        b = b.split("/");
        for (var a = b.length; a--;) b[a] = sb(b[a]);
        return b.join("/")
    }

    function $c(b, a) {
        var c = Aa(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = aa(c.port) || xf[c.protocol] || null
    }

    function ad(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Aa(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        a.$$search = rc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function ua(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length)
    }

    function Ga(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function Gb(b) {
        return b.replace(/(#.+)|#$/, "$1")
    }

    function cc(b, a, c) {
        this.$$html5 = !0;
        c = c || "";
        $c(b, this);
        this.$$parse = function(b) {
            var c = ua(a, b);
            if (!x(c)) throw Hb("ipthprfx", b, a);
            ad(c, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function() {
            var b = Pb(this.$$search),
                c = this.$$hash ? "#" + sb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = a + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            (f = ua(b, d)) !== u ? (g = f, g = (f = ua(c, f)) !== u ? a + (ua("/", f) || f) : b + g) : (f = ua(a, d)) !== u ? g = a + f : a == d + "/" && (g = a);
            g && this.$$parse(g);
            return !!g
        }
    }

    function dc(b, a, c) {
        $c(b, this);
        this.$$parse = function(d) {
            var e = ua(b, d) || ua(a, d),
                f;
            D(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", D(e) && (b = d, this.replace())) : (f = ua(c, e), D(f) && (f = e));
            ad(f, this);
            d = this.$$path;
            var e = b,
                g = /^\/[A-Z]:(\/.*)/;
            0 === f.indexOf(e) && (f = f.replace(e, ""));
            g.exec(f) || (d = (f = g.exec(d)) ? f[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function() {
            var a =
                    Pb(this.$$search),
                e = this.$$hash ? "#" + sb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + e;
            this.$$absUrl = b + (this.$$url ? c + this.$$url : "")
        };
        this.$$parseLinkUrl = function(a, c) {
            return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1
        }
    }

    function bd(b, a, c) {
        this.$$html5 = !0;
        dc.apply(this, arguments);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            b == Ga(d) ? f = d : (g = ua(a, d)) ? f = b + c + g : a === d + "/" && (f = a);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function() {
            var a = Pb(this.$$search),
                e = this.$$hash ? "#" + sb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + e;
            this.$$absUrl = b + c + this.$$url
        }
    }

    function Ib(b) {
        return function() {
            return this[b]
        }
    }

    function cd(b, a) {
        return function(c) {
            if (D(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Me() {
        var b = "",
            a = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(a) {
            return y(a) ? (b = a, this) : b
        };
        this.html5Mode = function(b) {
            return Xa(b) ? (a.enabled = b, this) : L(b) ? (Xa(b.enabled) && (a.enabled = b.enabled), Xa(b.requireBase) &&
            (a.requireBase = b.requireBase), Xa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(),
                    f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }

            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
            }
            var k, n;
            n = d.baseHref();
            var p = d.url(),
                q;
            if (a.enabled) {
                if (!n && a.requireBase) throw Hb("nobase");
                q = p.substring(0, p.indexOf("/",
                        p.indexOf("//") + 2)) + (n || "/");
                n = e.history ? cc : bd
            } else q = Ga(p), n = dc;
            var t = q.substr(0, Ga(q).lastIndexOf("/") + 1);
            k = new n(q, t, "#" + b);
            k.$$parseLinkUrl(p, p);
            k.$$state = d.state();
            var s = /^\s*(javascript|mailto):/i;
            f.on("click", function(b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = B(b.target);
                         "a" !== wa(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var l = e.prop("href"),
                        h = e.attr("href") || e.attr("xlink:href");
                    L(l) && "[object SVGAnimatedString]" === l.toString() && (l =
                        Aa(l.animVal).href);
                    s.test(l) || !l || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(l, h) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            Gb(k.absUrl()) != Gb(p) && d.url(k.absUrl(), !0);
            var F = !0;
            d.onUrlChange(function(a, b) {
                D(ua(t, a)) ? g.location.href = a : (c.$evalAsync(function() {
                    var d = k.absUrl(),
                        e = k.$$state,
                        f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (F = !1, l(d, e)))
                }), c.$$phase || c.$digest())
            });
            c.$watch(function() {
                var a = Gb(d.url()),
                    b = Gb(k.absUrl()),
                    f = d.state(),
                    g = k.$$replace,
                    q = a !== b || k.$$html5 && e.history && f !== k.$$state;
                if (F || q) F = !1, c.$evalAsync(function() {
                    var b = k.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Ne() {
        var b = !0,
            a = this;
        this.debugEnabled = function(a) {
            return y(a) ? (b =
                a, this) : b
        };
        this.$get = ["$window", function(c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || A;
                a = !1;
                try {
                    a = !!e.apply
                } catch (l) {}
                return a ? function() {
                    var a = [];
                    r(arguments, function(b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function(a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function va(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw ga("isecfld", a);
        return b
    }

    function dd(b, a) {
        b += "";
        if (!x(b)) throw ga("iseccst", a);
        return b
    }

    function oa(b, a) {
        if (b) {
            if (b.constructor === b) throw ga("isecfn", a);
            if (b.window === b) throw ga("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ga("isecdom", a);
            if (b === Object) throw ga("isecobj",
                a);
        }
        return b
    }

    function ec(b) {
        return b.constant
    }

    function jb(b, a, c, d, e) {
        oa(b, e);
        oa(a, e);
        c = c.split(".");
        for (var f, g = 0; 1 < c.length; g++) {
            f = va(c.shift(), e);
            var h = 0 === g && a && a[f] || b[f];
            h || (h = {}, b[f] = h);
            b = oa(h, e)
        }
        f = va(c.shift(), e);
        oa(b[f], e);
        return b[f] = d
    }

    function Qa(b) {
        return "constructor" == b
    }

    function ed(b, a, c, d, e, f, g) {
        va(b, f);
        va(a, f);
        va(c, f);
        va(d, f);
        va(e, f);
        var h = function(a) {
                return oa(a, f)
            },
            l = g || Qa(b) ? h : ra,
            k = g || Qa(a) ? h : ra,
            n = g || Qa(c) ? h : ra,
            p = g || Qa(d) ? h : ra,
            q = g || Qa(e) ? h : ra;
        return function(f, g) {
            var h = g && g.hasOwnProperty(b) ?
                g : f;
            if (null == h) return h;
            h = l(h[b]);
            if (!a) return h;
            if (null == h) return u;
            h = k(h[a]);
            if (!c) return h;
            if (null == h) return u;
            h = n(h[c]);
            if (!d) return h;
            if (null == h) return u;
            h = p(h[d]);
            return e ? null == h ? u : h = q(h[e]) : h
        }
    }

    function yf(b, a) {
        return function(c, d) {
            return b(c, d, oa, a)
        }
    }

    function zf(b, a, c) {
        var d = a.expensiveChecks,
            e = d ? Af : Bf,
            f = e[b];
        if (f) return f;
        var g = b.split("."),
            h = g.length;
        if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function(a, b) {
            var e = 0,
                f;
            do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = u, a = f; while (e <
            h);
            return f
        };
        else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            r(g, function(a, b) {
                va(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                if (d || Qa(a)) e = "eso(" + e + ", fe)", k = !0;
                l += "if(s == null) return undefined;\ns=" + e + ";\n"
            });
            l += "return s;";
            a = new Function("s", "l", "eso", "fe", l);
            a.toString = ea(l);
            k && (a = yf(a, c));
            f = a
        }
        f.sharedGetter = !0;
        f.assign = function(a, c, d) {
            return jb(a, d, b, c, b)
        };
        return e[b] = f
    }

    function fc(b) {
        return z(b.valueOf) ? b.valueOf() : Cf.call(b)
    }

    function Oe() {
        var b = ja(),
            a = ja();
        this.$get = ["$filter", "$sniffer", function(c, d) {
            function e(a) {
                var b = a;
                a.sharedGetter && (b = function(b, c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
                return b
            }

            function f(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function g(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function h(a, b, c, d) {
                var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
                    l;
                if (1 === e.length) {
                    var h = g,
                        e = e[0];
                    return a.$watch(function(a) {
                        var b = e(a);
                        g(b, h) || (l = d(a), h = b && fc(b));
                        return l
                    }, b, c)
                }
                for (var k = [], q = 0, p = e.length; q < p; q++) k[q] = g;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, f = e.length; c < f; c++) {
                        var h = e[c](a);
                        if (b || (b = !g(h, k[c]))) k[c] = h && fc(h)
                    }
                    b && (l = d(a));
                    return l
                }, b, c)
            }

            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    f = a;
                    z(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function() {
                        y(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    r(a, function(a) {
                        y(a) || (b = !1)
                    });
                    return b
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    g = a;
                    z(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function() {
                        e(g) && f()
                    })
                }, c)
            }

            function n(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    z(b) && b.apply(this, arguments);
                    e()
                }, c)
            }

            function p(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    c = c !== k && c !== l ? function(c, d) {
                        var e = a(c, d);
                        return b(e, c, d)
                    } : function(c, d) {
                        var e = a(c, d),
                            f = b(e, c, d);
                        return y(e) ? f : e
                    };
                a.$$watchDelegate && a.$$watchDelegate !==
                h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
                return c
            }
            var q = {
                    csp: d.csp,
                    expensiveChecks: !1
                },
                t = {
                    csp: d.csp,
                    expensiveChecks: !0
                };
            return function(d, f, g) {
                var m, r, u;
                switch (typeof d) {
                    case "string":
                        u = d = d.trim();
                        var I = g ? a : b;
                        m = I[u];
                        m || (":" === d.charAt(0) && ":" === d.charAt(1) && (r = !0, d = d.substring(2)), g = g ? t : q, m = new gc(g), m = (new kb(m, c, g)).parse(d), m.constant ? m.$$watchDelegate = n : r ? (m = e(m), m.$$watchDelegate = m.literal ? k : l) : m.inputs && (m.$$watchDelegate = h), I[u] = m);
                        return p(m, f);
                    case "function":
                        return p(d, f);
                    default:
                        return p(A, f)
                }
            }
        }]
    }

    function Qe() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Re() {
        this.$get = ["$browser", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.defer(a)
            }, a)
        }]
    }

    function fd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function d() {
            this.$$state = {
                status: 0
            }
        }

        function e(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled &&
            c.pending && (c.processScheduled = !0, b(function() {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = u;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        z(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (l) {
                        d.reject(l), a(l)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }
        var h = S("$q", TypeError);
        d.prototype = {
            then: function(a, b, c) {
                var d = new g;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && f(this.$$state);
                return d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return k(b, !0, a)
                }, function(b) {
                    return k(b, !1, a)
                }, b)
            }
        };
        g.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
            },
            $$resolve: function(b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    if (L(b) || z(b)) d = b && b.then;
                    z(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
                } catch (g) {
                    e[1](g), a(g)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state)
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function() {
                    for (var b, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        b = d[f][3];
                        try {
                            e.notify(z(b) ?
                                b(c) : c)
                        } catch (l) {
                            a(l)
                        }
                    }
                })
            }
        };
        var l = function(a, b) {
                var c = new g;
                b ? c.resolve(a) : c.reject(a);
                return c.promise
            },
            k = function(a, b, c) {
                var d = null;
                try {
                    z(c) && (d = c())
                } catch (e) {
                    return l(e, !1)
                }
                return d && z(d.then) ? d.then(function() {
                    return l(a, b)
                }, function(a) {
                    return l(a, !1)
                }) : l(a, b)
            },
            n = function(a, b, c, d) {
                var e = new g;
                e.resolve(a);
                return e.promise.then(b, c, d)
            },
            p = function t(a) {
                if (!z(a)) throw h("norslvr", a);
                if (!(this instanceof t)) return new t(a);
                var b = new g;
                a(function(a) {
                    b.resolve(a)
                }, function(a) {
                    b.reject(a)
                });
                return b.promise
            };
        p.defer = function() {
            return new g
        };
        p.reject = function(a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        p.when = n;
        p.all = function(a) {
            var b = new g,
                c = 0,
                d = H(a) ? [] : {};
            r(a, function(a, e) {
                c++;
                n(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return p
    }

    function $e() {
        this.$get = ["$window", "$timeout", function(b, a) {
            function c() {
                for (var a = 0; a < n.length; a++) {
                    var b = n[a];
                    b && (n[a] = null, b())
                }
                k = n.length = 0
            }

            function d(a) {
                var b =
                    n.length;
                k++;
                n.push(a);
                0 === b && (l = h(c));
                return function() {
                    0 <= b && (b = n[b] = null, 0 === --k && l && (l(), l = null, n.length = 0))
                }
            }
            var e = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
                f = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
                g = !!e,
                h = g ? function(a) {
                    var b = e(a);
                    return function() {
                        f(b)
                    }
                } : function(b) {
                    var c = a(b, 16.66, !1);
                    return function() {
                        a.cancel(c)
                    }
                };
            d.supported = g;
            var l, k = 0,
                n = [];
            return d
        }]
    }

    function Pe() {
        function b(a) {
            function b() {
                this.$$watchers = this.$$nextSibling =
                    this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$id = ++rb;
                this.$$ChildScope = null
            }
            b.prototype = a;
            return b
        }
        var a = 10,
            c = S("$rootScope"),
            d = null,
            e = null;
        this.digestTtl = function(b) {
            arguments.length && (a = b);
            return a
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(f, g, h, l) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function n() {
                this.$id = ++rb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail =
                    null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = null
            }

            function p(a) {
                if (v.$$phase) throw c("inprog", v.$$phase);
                v.$$phase = a
            }

            function q(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function t() {}

            function s() {
                for (; u.length;) try {
                    u.shift()()
                } catch (a) {
                    g(a)
                }
                e = null
            }

            function F() {
                null === e && (e = l.defer(function() {
                    v.$apply(s)
                }))
            }
            n.prototype = {
                constructor: n,
                $new: function(a, c) {
                    var d;
                    c = c || this;
                    a ?
                        (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (a || c != this) && d.$on("$destroy", k);
                    return d
                },
                $watch: function(a, b, c) {
                    var e = h(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e);
                    var f = this.$$watchers,
                        g = {
                            fn: b,
                            last: t,
                            get: e,
                            exp: a,
                            eq: !!c
                        };
                    d = null;
                    z(b) || (g.fn = A);
                    f || (f = this.$$watchers = []);
                    f.unshift(g);
                    return function() {
                        Ya(f,
                            g);
                        d = null
                    }
                },
                $watchGroup: function(a, b) {
                    function c() {
                        l = !1;
                        h ? (h = !1, b(e, e, g)) : b(e, d, g)
                    }
                    var d = Array(a.length),
                        e = Array(a.length),
                        f = [],
                        g = this,
                        l = !1,
                        h = !0;
                    if (!a.length) {
                        var k = !0;
                        g.$evalAsync(function() {
                            k && b(e, e, g)
                        });
                        return function() {
                            k = !1
                        }
                    }
                    if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    r(a, function(a, b) {
                        var h = g.$watch(a, function(a, f) {
                            e[b] = a;
                            d[b] = f;
                            l || (l = !0, g.$evalAsync(c))
                        });
                        f.push(h)
                    });
                    return function() {
                        for (; f.length;) f.shift()()
                    }
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        e =
                            a;
                        var b, d, g, l;
                        if (!D(e)) {
                            if (L(e))
                                if (Ta(e))
                                    for (f !== p && (f = p, t = f.length = 0, k++), a = e.length, t !== a && (k++, f.length = t = a), b = 0; b < a; b++) l = f[b], g = e[b], d = l !== l && g !== g, d || l === g || (k++, f[b] = g);
                                else {
                                    f !== n && (f = n = {}, t = 0, k++);
                                    a = 0;
                                    for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], l = f[b], b in f ? (d = l !== l && g !== g, d || l === g || (k++, f[b] = g)) : (t++, f[b] = g, k++));
                                    if (t > a)
                                        for (b in k++, f) e.hasOwnProperty(b) || (t--, delete f[b])
                                } else f !== e && (f = e, k++);
                            return k
                        }
                    }
                    c.$stateful = !0;
                    var d = this,
                        e, f, g, l = 1 < b.length,
                        k = 0,
                        q = h(a, c),
                        p = [],
                        n = {},
                        m = !0,
                        t = 0;
                    return this.$watch(q,
                        function() {
                            m ? (m = !1, b(e, e, d)) : b(e, g, d);
                            if (l)
                                if (L(e))
                                    if (Ta(e)) {
                                        g = Array(e.length);
                                        for (var a = 0; a < e.length; a++) g[a] = e[a]
                                    } else
                                        for (a in g = {}, e) sc.call(e, a) && (g[a] = e[a]);
                                else g = e
                        })
                },
                $digest: function() {
                    var b, f, h, k, q, n, r = a,
                        F, P = [],
                        u, y;
                    p("$digest");
                    l.$$checkUrlChange();
                    this === v && null !== e && (l.defer.cancel(e), s());
                    d = null;
                    do {
                        n = !1;
                        for (F = this; m.length;) {
                            try {
                                y = m.shift(), y.scope.$eval(y.expression, y.locals)
                            } catch (w) {
                                g(w)
                            }
                            d = null
                        }
                        a: do {
                            if (k = F.$$watchers)
                                for (q = k.length; q--;) try {
                                    if (b = k[q])
                                        if ((f = b.get(F)) !== (h = b.last) &&
                                            !(b.eq ? ia(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) n = !0, d = b, b.last = b.eq ? Da(f, null) : f, b.fn(f, h === t ? f : h, F), 5 > r && (u = 4 - r, P[u] || (P[u] = []), P[u].push({
                                            msg: z(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
                                            newVal: f,
                                            oldVal: h
                                        }));
                                        else if (b === d) {
                                            n = !1;
                                            break a
                                        }
                                } catch (D) {
                                    g(D)
                                }
                            if (!(k = F.$$childHead || F !== this && F.$$nextSibling))
                                for (; F !== this && !(k = F.$$nextSibling);) F = F.$parent
                        } while (F = k);
                        if ((n || m.length) && !r--) throw v.$$phase = null, c("infdig", a, P);
                    } while (n || m.length);
                    for (v.$$phase = null; C.length;) try {
                        C.shift()()
                    } catch (B) {
                        g(B)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (this !== v) {
                            for (var b in this.$$listenerCount) q(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                            a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync =
                                this.$applyAsync = A;
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return A
                            };
                            this.$$listeners = {};
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                },
                $eval: function(a, b) {
                    return h(a)(this, b)
                },
                $evalAsync: function(a, b) {
                    v.$$phase || m.length || l.defer(function() {
                        m.length && v.$digest()
                    });
                    m.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function(a) {
                    C.push(a)
                },
                $apply: function(a) {
                    try {
                        return p("$apply"), this.$eval(a)
                    } catch (b) {
                        g(b)
                    } finally {
                        v.$$phase =
                            null;
                        try {
                            v.$digest()
                        } catch (c) {
                            throw g(c), c;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && u.push(b);
                    F()
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, q(e, 1, a))
                    }
                },
                $emit: function(a, b) {
                    var c = [],
                        d, e = this,
                        f = !1,
                        l = {
                            name: a,
                            targetScope: e,
                            stopPropagation: function() {
                                f = !0
                            },
                            preventDefault: function() {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        h = Za([l], arguments, 1),
                        k, q;
                    do {
                        d = e.$$listeners[a] || c;
                        l.currentScope = e;
                        k = 0;
                        for (q = d.length; k < q; k++)
                            if (d[k]) try {
                                d[k].apply(null, h)
                            } catch (p) {
                                g(p)
                            } else d.splice(k, 1), k--, q--;
                        if (f) return l.currentScope = null, l;
                        e = e.$parent
                    } while (e);
                    l.currentScope = null;
                    return l
                },
                $broadcast: function(a, b) {
                    var c = this,
                        d = this,
                        e = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                e.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[a]) return e;
                    for (var f = Za([e], arguments, 1), l, h; c = d;) {
                        e.currentScope =
                            c;
                        d = c.$$listeners[a] || [];
                        l = 0;
                        for (h = d.length; l < h; l++)
                            if (d[l]) try {
                                d[l].apply(null, f)
                            } catch (k) {
                                g(k)
                            } else d.splice(l, 1), l--, h--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                            for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var v = new n,
                m = v.$$asyncQueue = [],
                C = v.$$postDigestQueue = [],
                u = v.$$applyAsyncQueue = [];
            return v
        }]
    }

    function Sd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist =
            function(a) {
                return y(a) ? (b = a, this) : b
            };
        this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = function() {
            return function(c, d) {
                var e = d ? a : b,
                    f;
                f = Aa(c).href;
                return "" === f || f.match(e) ? c : "unsafe:" + f
            }
        }
    }

    function Df(b) {
        if ("self" === b) return b;
        if (x(b)) {
            if (-1 < b.indexOf("***")) throw Ba("iwcard", b);
            b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (Va(b)) return new RegExp("^" + b.source + "$");
        throw Ba("imatcher");
    }

    function hd(b) {
        var a = [];
        y(b) && r(b, function(b) {
            a.push(Df(b))
        });
        return a
    }

    function Te() {
        this.SCE_CONTEXTS = pa;
        var b = ["self"],
            a = [];
        this.resourceUrlWhitelist = function(a) {
            arguments.length && (b = hd(a));
            return b
        };
        this.resourceUrlBlacklist = function(b) {
            arguments.length && (a = hd(b));
            return a
        };
        this.$get = ["$injector", function(c) {
            function d(a, b) {
                return "self" === a ? Zc(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }
            var f = function(a) {
                throw Ba("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(),
                h = {};
            h[pa.HTML] = e(g);
            h[pa.CSS] = e(g);
            h[pa.URL] = e(g);
            h[pa.JS] = e(g);
            h[pa.RESOURCE_URL] = e(h[pa.URL]);
            return {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw Ba("icontext", a, b);
                    if (null === b || b === u || "" === b) return b;
                    if ("string" !== typeof b) throw Ba("itype", a);
                    return new c(b)
                },
                getTrusted: function(c, e) {
                    if (null === e || e === u || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === pa.RESOURCE_URL) {
                        var g = Aa(e.toString()),
                            p, q, t = !1;
                        p = 0;
                        for (q = b.length; p < q; p++)
                            if (d(b[p], g)) {
                                t = !0;
                                break
                            }
                        if (t)
                            for (p = 0, q = a.length; p < q; p++)
                                if (d(a[p], g)) {
                                    t = !1;
                                    break
                                }
                        if (t) return e;
                        throw Ba("insecurl", e.toString());
                    }
                    if (c === pa.HTML) return f(e);
                    throw Ba("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Se() {
        var b = !0;
        this.enabled = function(a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function(a, c) {
            if (b &&
                8 > Ra) throw Ba("iequirks");
            var d = sa(pa);
            d.isEnabled = function() {
                return b
            };
            d.trustAs = c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf = c.valueOf;
            b || (d.trustAs = d.getTrusted = function(a, b) {
                return b
            }, d.valueOf = ra);
            d.parseAs = function(b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function(a) {
                    return d.getTrusted(b, a)
                })
            };
            var e = d.parseAs,
                f = d.getTrusted,
                g = d.trustAs;
            r(pa, function(a, b) {
                var c = K(b);
                d[fb("parse_as_" + c)] = function(b) {
                    return e(a, b)
                };
                d[fb("get_trusted_" + c)] = function(b) {
                    return f(a, b)
                };
                d[fb("trust_as_" +
                    c)] = function(b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Ue() {
        this.$get = ["$window", "$document", function(b, a) {
            var c = {},
                d = aa((/android (\d+)/.exec(K((b.navigator || {}).userAgent)) || [])[1]),
                e = /Boxee/i.test((b.navigator || {}).userAgent),
                f = a[0] || {},
                g, h = /^(Moz|webkit|ms)(?=[A-Z])/,
                l = f.body && f.body.style,
                k = !1,
                n = !1;
            if (l) {
                for (var p in l)
                    if (k = h.exec(p)) {
                        g = k[0];
                        g = g.substr(0, 1).toUpperCase() + g.substr(1);
                        break
                    }
                g || (g = "WebkitOpacity" in l && "webkit");
                k = !!("transition" in l || g + "Transition" in l);
                n = !!("animation" in l || g + "Animation" in
                l);
                !d || k && n || (k = x(f.body.style.webkitTransition), n = x(f.body.style.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Ra) return !1;
                    if (D(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                },
                csp: db(),
                vendorPrefix: g,
                transitions: k,
                animations: n,
                android: d
            }
        }]
    }

    function We() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(b, a, c, d) {
            function e(f, g) {
                e.totalPendingRequests++;
                x(f) && b.get(f) || (f = d.getTrustedResourceUrl(f));
                var h =
                    a.defaults && a.defaults.transformResponse;
                H(h) ? h = h.filter(function(a) {
                    return a !== Zb
                }) : h === Zb && (h = null);
                return a.get(f, {
                    cache: b,
                    transformResponse: h
                })["finally"](function() {
                    e.totalPendingRequests--
                }).then(function(a) {
                    return a.data
                }, function(a) {
                    if (!g) throw ma("tpload", f);
                    return c.reject(a)
                })
            }
            e.totalPendingRequests = 0;
            return e
        }]
    }

    function Xe() {
        this.$get = ["$rootScope", "$browser", "$location", function(b, a, c) {
            return {
                findBindings: function(a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    r(a, function(a) {
                        var d =
                            ca.element(a).data("$binding");
                        d && r(d, function(d) {
                            c ? (new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                },
                findModels: function(a, b, c) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length) return l
                    }
                },
                getLocation: function() {
                    return c.url()
                },
                setLocation: function(a) {
                    a !== c.url() && (c.url(a), b.$digest())
                },
                whenStable: function(b) {
                    a.notifyWhenNoOutstandingRequests(b)
                }
            }
        }]
    }

    function Ye() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(b, a, c, d, e) {
            function f(f, l, k) {
                var n = y(k) && !k,
                    p = (n ? d : c).defer(),
                    q = p.promise;
                l = a.defer(function() {
                    try {
                        p.resolve(f())
                    } catch (a) {
                        p.reject(a), e(a)
                    } finally {
                        delete g[q.$$timeoutId]
                    }
                    n || b.$apply()
                }, l);
                q.$$timeoutId = l;
                g[l] = p;
                return q
            }
            var g = {};
            f.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
            };
            return f
        }]
    }

    function Aa(b) {
        Ra && (Z.setAttribute("href", b), b = Z.href);
        Z.setAttribute("href", b);
        return {
            href: Z.href,
            protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "",
            host: Z.host,
            search: Z.search ? Z.search.replace(/^\?/, "") : "",
            hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
            hostname: Z.hostname,
            port: Z.port,
            pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
        }
    }

    function Zc(b) {
        b = x(b) ? Aa(b) : b;
        return b.protocol === id.protocol && b.host === id.host
    }

    function Ze() {
        this.$get = ea(R)
    }

    function Ec(b) {
        function a(c, d) {
            if (L(c)) {
                var e = {};
                r(c, function(b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c +
                "Filter", d)
        }
        this.register = a;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter")
            }
        }];
        a("currency", jd);
        a("date", kd);
        a("filter", Ef);
        a("json", Ff);
        a("limitTo", Gf);
        a("lowercase", Hf);
        a("number", ld);
        a("orderBy", md);
        a("uppercase", If)
    }

    function Ef() {
        return function(b, a, c) {
            if (!H(b)) return b;
            var d;
            switch (null !== a ? typeof a : "null") {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    a = Jf(a, c, d);
                    break;
                default:
                    return b
            }
            return b.filter(a)
        }
    }

    function Jf(b,
                a, c) {
        var d = L(b) && "$" in b;
        !0 === a ? a = ia : z(a) || (a = function(a, b) {
            if (D(a)) return !1;
            if (null === a || null === b) return a === b;
            if (L(a) || L(b)) return !1;
            a = K("" + a);
            b = K("" + b);
            return -1 !== a.indexOf(b)
        });
        return function(e) {
            return d && !L(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c)
        }
    }

    function Ha(b, a, c, d, e) {
        var f = null !== b ? typeof b : "null",
            g = null !== a ? typeof a : "null";
        if ("string" === g && "!" === a.charAt(0)) return !Ha(b, a.substring(1), c, d);
        if (H(b)) return b.some(function(b) {
            return Ha(b, a, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in b)
                        if ("$" !==
                            h.charAt(0) && Ha(b[h], a, c, !0)) return !0;
                    return e ? !1 : Ha(b, a, c, !1)
                }
                if ("object" === g) {
                    for (h in a)
                        if (e = a[h], !z(e) && !D(e) && (f = "$" === h, !Ha(f ? b : b[h], e, c, f, f))) return !1;
                    return !0
                }
                return c(b, a);
            case "function":
                return !1;
            default:
                return c(b, a)
        }
    }

    function jd(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d, e) {
            D(d) && (d = a.CURRENCY_SYM);
            D(e) && (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return null ==
            b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function nd(b, a, c, d, e) {
        if (!isFinite(b) || L(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "",
            h = "",
            l = [],
            k = !1;
        if (-1 !== g.indexOf("e")) {
            var n = g.match(/([\d\.]+)e(-?)(\d+)/);
            n && "-" == n[2] && n[3] > e + 1 ? b = 0 : (h = g, k = !0)
        }
        if (k) 0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
        else {
            g = (g.split(od)[1] || "").length;
            D(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(od),
                k = g[0],
                g = g[1] || "",
                p = 0,
                q = a.lgSize,
                t = a.gSize;
            if (k.length >= q + t)
                for (p = k.length - q, n = 0; n < p; n++) 0 === (p - n) % t && 0 !== n && (h += c), h += k.charAt(n);
            for (n = p; n < k.length; n++) 0 === (k.length - n) % q && 0 !== n && (h += c), h += k.charAt(n);
            for (; g.length < e;) g += "0";
            e && "0" !== e && (h += d + g.substr(0, e))
        }
        0 === b && (f = !1);
        l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return l.join("")
    }

    function Jb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function U(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e +=
                c;
            0 === e && -12 == c && (e = 12);
            return Jb(e, a, d)
        }
    }

    function Kb(b, a) {
        return function(c, d) {
            var e = c["get" + b](),
                f = vb(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function pd(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function qd(b) {
        return function(a) {
            var c = pd(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Jb(a, b)
        }
    }

    function hc(b, a) {
        return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1]
    }

    function kd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a =
                    new Date(0);
                var f = 0,
                    g = 0,
                    h = b[8] ? a.setUTCFullYear : a.setFullYear,
                    l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = aa(b[9] + b[10]), g = aa(b[9] + b[11]));
                h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3]));
                f = aa(b[4] || 0) - f;
                g = aa(b[5] || 0) - g;
                h = aa(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                l.call(a, f, g, h, b)
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e, f) {
            var g = "",
                h = [],
                l, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            x(c) && (c = Kf.test(c) ?
                aa(c) : a(c));
            Y(c) && (c = new Date(c));
            if (!ha(c)) return c;
            for (; e;)(k = Lf.exec(e)) ? (h = Za(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
            r(h, function(a) {
                l = Mf[a];
                g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Ff() {
        return function(b, a) {
            D(a) && (a = 2);
            return ab(b, a)
        }
    }

    function Gf() {
        return function(b, a) {
            Y(b) && (b = b.toString());
            return H(b) || x(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) :
                aa(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : x(b) ? "" : [] : b
        }
    }

    function md(b) {
        return function(a, c, d) {
            function e(a, b) {
                return b ? function(b, c) {
                    return a(c, b)
                } : a
            }

            function f(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function g(a) {
                return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
            }

            function h(a, b) {
                var c = typeof a,
                    d = typeof b;
                c === d && "object" === c && (a = g(a), b = g(b));
                return c === d ? ("string" === c && (a =
                    a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }
            if (!Ta(a)) return a;
            c = H(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = c.map(function(a) {
                var c = !1,
                    d = a || ra;
                if (x(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a) return e(h, c);
                    d = b(a);
                    if (d.constant) {
                        var f = d();
                        return e(function(a, b) {
                            return h(a[f], b[f])
                        }, c)
                    }
                }
                return e(function(a, b) {
                    return h(d(a), d(b))
                }, c)
            });
            return $a.call(a).sort(e(function(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (0 !== e) return e
                    }
                    return 0
                },
                d))
        }
    }

    function Ia(b) {
        z(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return ea(b)
    }

    function rd(b, a, c, d, e) {
        var f = this,
            g = [],
            h = f.$$parentForm = b.parent().controller("form") || Lb;
        f.$error = {};
        f.$$success = {};
        f.$pending = u;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function() {
            r(g, function(a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function() {
            r(g, function(a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function(a) {
            Ma(a.$name,
                "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function(a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(f.$pending, function(b, c) {
                f.$setValidity(c, null, a)
            });
            r(f.$error, function(b, c) {
                f.$setValidity(c, null, a)
            });
            r(f.$$success, function(b, c) {
                f.$setValidity(c, null, a)
            });
            Ya(g, a)
        };
        sd({
            ctrl: this,
            $element: b,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (Ya(d, c), 0 === d.length && delete a[b])
            },
            parentForm: h,
            $animate: d
        });
        f.$setDirty = function() {
            d.removeClass(b, Sa);
            d.addClass(b, Mb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function() {
            d.setClass(b, Sa, Mb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            r(g, function(a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function() {
            r(g, function(a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function() {
            d.addClass(b, "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function ic(b) {
        b.$formatters.push(function(a) {
            return b.$isEmpty(a) ?
                a : a.toString()
        })
    }

    function lb(b, a, c, d, e, f) {
        var g = K(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function(a) {
                h = !0
            });
            a.on("compositionend", function() {
                h = !1;
                l()
            })
        }
        var l = function(b) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = a.val();
                b = b && b.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = N(e));
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
            }
        };
        if (e.hasEvent("input")) a.on("input", l);
        else {
            var k, n = function(a, b, c) {
                k || (k = f.defer(function() {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            a.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a, this, this.value)
            });
            if (e.hasEvent("paste")) a.on("paste cut", n)
        }
        a.on("change", l);
        d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Nb(b, a) {
        return function(c, d) {
            var e, f;
            if (ha(c)) return c;
            if (x(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (Nf.test(c)) return new Date(c);
                b.lastIndex = 0;
                if (e = b.exec(c)) return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1E3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, r(e, function(b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function mb(b, a, c, d) {
        return function(e, f, g, h, l, k, n) {
            function p(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function q(a) {
                return y(a) ? ha(a) ? a : c(a) : u
            }
            td(e, f, g, h);
            lb(e, f, g, h, l, k);
            var t = h && h.$options && h.$options.timezone,
                s;
            h.$$parserName = b;
            h.$parsers.push(function(b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, s), "UTC" === t && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : u
            });
            h.$formatters.push(function(a) {
                if (a && !ha(a)) throw nb("datefmt", a);
                if (p(a)) {
                    if ((s = a) && "UTC" === t) {
                        var b = 6E4 * s.getTimezoneOffset();
                        s = new Date(s.getTime() + b)
                    }
                    return n("date")(a, d, t)
                }
                s = null;
                return ""
            });
            if (y(g.min) || g.ngMin) {
                var r;
                h.$validators.min = function(a) {
                    return !p(a) || D(r) || c(a) >= r
                };
                g.$observe("min", function(a) {
                    r = q(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var v;
                h.$validators.max = function(a) {
                    return !p(a) || D(v) || c(a) <= v
                };
                g.$observe("max", function(a) {
                    v = q(a);
                    h.$validate()
                })
            }
        }
    }

    function td(b, a, c, d) {
        (d.$$hasNativeValidators = L(a[0].validity)) && d.$parsers.push(function(b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? u : b
        })
    }

    function ud(b, a, c, d, e) {
        if (y(d)) {
            b = b(d);
            if (!b.constant) throw nb("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function jc(b, a) {
        b = "ngClass" + b;
        return ["$animate", function(c) {
            function d(a, b) {
                var c = [],
                    d = 0;
                a: for (; d < a.length; d++) {
                    for (var e = a[d],
                             n = 0; n < b.length; n++)
                        if (e == b[n]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (!H(a)) {
                    if (x(a)) return a.split(" ");
                    if (L(a)) {
                        var b = [];
                        r(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")))
                        });
                        return b
                    }
                }
                return a
            }
            return {
                restrict: "AC",
                link: function(f, g, h) {
                    function l(a, b) {
                        var c = g.data("$classCounts") || {},
                            d = [];
                        r(a, function(a) {
                            if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function k(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var k = e(b || []);
                            if (!n) {
                                var t = l(k, 1);
                                h.$addClass(t)
                            } else if (!ia(b,
                                    n)) {
                                var s = e(n),
                                    t = d(k, s),
                                    k = d(s, k),
                                    t = l(t, 1),
                                    k = l(k, -1);
                                t && t.length && c.addClass(g, t);
                                k && k.length && c.removeClass(g, k)
                            }
                        }
                        n = sa(b)
                    }
                    var n;
                    f.$watch(h[b], k, !0);
                    h.$observe("class", function(a) {
                        k(f.$eval(h[b]))
                    });
                    "ngClass" !== b && f.$watch("$index", function(c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var k = e(f.$eval(h[b]));
                            g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }

    function sd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + uc(b, "-") : "";
            a(ob + b, !0 === c);
            a(vd + b, !1 === c)
        }
        var d = b.ctrl,
            e = b.$element,
            f = {},
            g = b.set,
            h = b.unset,
            l = b.parentForm,
            k = b.$animate;
        f[vd] = !(f[ob] = e.hasClass(ob));
        d.$setValidity = function(b, e, f) {
            e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = u));
            Xa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
            d.$pending ? (a(xd, !0), d.$valid = d.$invalid = u, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            l.$setValidity(b, e, d)
        }
    }

    function wd(b) {
        if (b)
            for (var a in b) return !1;
        return !0
    }
    var Of = /^\/(.+)\/([a-z]*)$/,
        K = function(b) {
            return x(b) ? b.toLowerCase() : b
        },
        sc = Object.prototype.hasOwnProperty,
        vb = function(b) {
            return x(b) ? b.toUpperCase() : b
        },
        Ra, B, ta, $a = [].slice,
        qf = [].splice,
        Pf = [].push,
        Ca = Object.prototype.toString,
        Ja = S("ng"),
        ca = R.angular || (R.angular = {}),
        eb, rb = 0;
    Ra = W.documentMode;
    A.$inject = [];
    ra.$inject = [];
    var H =
            Array.isArray,
        N = function(b) {
            return x(b) ? b.trim() : b
        },
        gd = function(b) {
            return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        db = function() {
            if (y(db.isActive_)) return db.isActive_;
            var b = !(!W.querySelector("[ng-csp]") && !W.querySelector("[data-ng-csp]"));
            if (!b) try {
                new Function("")
            } catch (a) {
                b = !0
            }
            return db.isActive_ = b
        },
        tb = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Md = /[A-Z]/g,
        vc = !1,
        Qb, qa = 1,
        bb = 3,
        Qd = {
            full: "1.3.20",
            major: 1,
            minor: 3,
            dot: 20,
            codeName: "shallow-translucence"
        };
    T.expando = "ng339";
    var Ab =
            T.cache = {},
        hf = 1;
    T._data = function(b) {
        return this.cache[b[this.expando]] || {}
    };
    var cf = /([\:\-\_]+(.))/g,
        df = /^moz([A-Z])/,
        Qf = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Tb = S("jqLite"),
        gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Sb = /<|&#?\w+;/,
        ef = /<([\w:]+)/,
        ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ka = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ka.optgroup = ka.option;
    ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;
    ka.th = ka.td;
    var Ka = T.prototype = {
            ready: function(b) {
                function a() {
                    c || (c = !0, b())
                }
                var c = !1;
                "complete" === W.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), T(R).on("load", a))
            },
            toString: function() {
                var b = [];
                r(this, function(a) {
                    b.push("" + a)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function(b) {
                return 0 <= b ? B(this[b]) : B(this[this.length + b])
            },
            length: 0,
            push: Pf,
            sort: [].sort,
            splice: [].splice
        },
        Fb = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        Fb[K(b)] = b
    });
    var Nc = {};
    r("input select option textarea button form details".split(" "), function(b) {
        Nc[b] = !0
    });
    var Oc = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    r({
        data: Vb,
        removeData: yb
    }, function(b, a) {
        T[a] = b
    });
    r({
        data: Vb,
        inheritedData: Eb,
        scope: function(b) {
            return B.data(b, "$scope") || Eb(b.parentNode || b, ["$isolateScope", "$scope"])
        },
        isolateScope: function(b) {
            return B.data(b,
                    "$isolateScope") || B.data(b, "$isolateScopeNoTemplate")
        },
        controller: Jc,
        injector: function(b) {
            return Eb(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Bb,
        css: function(b, a, c) {
            a = fb(a);
            if (y(c)) b.style[a] = c;
            else return b.style[a]
        },
        attr: function(b, a, c) {
            var d = b.nodeType;
            if (d !== bb && 2 !== d && 8 !== d)
                if (d = K(a), Fb[d])
                    if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                    else return b[a] || (b.attributes.getNamedItem(a) || A).specified ? d : u;
                else if (y(c)) b.setAttribute(a, c);
                else if (b.getAttribute) return b =
                    b.getAttribute(a, 2), null === b ? u : b
        },
        prop: function(b, a, c) {
            if (y(c)) b[a] = c;
            else return b[a]
        },
        text: function() {
            function b(a, b) {
                if (D(b)) {
                    var d = a.nodeType;
                    return d === qa || d === bb ? a.textContent : ""
                }
                a.textContent = b
            }
            b.$dv = "";
            return b
        }(),
        val: function(b, a) {
            if (D(a)) {
                if (b.multiple && "select" === wa(b)) {
                    var c = [];
                    r(b.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function(b, a) {
            if (D(a)) return b.innerHTML;
            xb(b, !0);
            b.innerHTML = a
        },
        empty: Kc
    }, function(b, a) {
        T.prototype[a] =
            function(a, d) {
                var e, f, g = this.length;
                if (b !== Kc && (2 == b.length && b !== Bb && b !== Jc ? a : d) === u) {
                    if (L(a)) {
                        for (e = 0; e < g; e++)
                            if (b === Vb) b(this[e], a);
                            else
                                for (f in a) b(this[e], f, a[f]);
                        return this
                    }
                    e = b.$dv;
                    g = e === u ? Math.min(g, 1) : g;
                    for (f = 0; f < g; f++) {
                        var h = b(this[f], a, d);
                        e = e ? e + h : h
                    }
                    return e
                }
                for (e = 0; e < g; e++) b(this[e], a, d);
                return this
            }
    });
    r({
        removeData: yb,
        on: function a(c, d, e, f) {
            if (y(f)) throw Tb("onargs");
            if (Fc(c)) {
                var g = zb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h = g.handle = lf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d],
                         l = g.length; l--;) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function(a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d)
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                    k.push(e)
                }
            }
        },
        off: Ic,
        one: function(a, c, d) {
            a = B(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            xb(a);
            r(new T(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            r(a.childNodes,
                function(a) {
                    a.nodeType === qa && c.push(a)
                });
            return c
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, c) {
            var d = a.nodeType;
            if (d === qa || 11 === d) {
                c = new T(c);
                for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d])
            }
        },
        prepend: function(a, c) {
            if (a.nodeType === qa) {
                var d = a.firstChild;
                r(new T(c), function(c) {
                    a.insertBefore(c, d)
                })
            }
        },
        wrap: function(a, c) {
            c = B(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: Lc,
        detach: function(a) {
            Lc(a, !0)
        },
        after: function(a,
                        c) {
            var d = a,
                e = a.parentNode;
            c = new T(c);
            for (var f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling);
                d = h
            }
        },
        addClass: Db,
        removeClass: Cb,
        toggleClass: function(a, c, d) {
            c && r(c.split(" "), function(c) {
                var f = d;
                D(f) && (f = !Bb(a, c));
                (f ? Db : Cb)(a, c)
            })
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        },
        clone: Ub,
        triggerHandler: function(a, c, d) {
            var e, f, g = c.type || c,
                h =
                    zb(a);
            if (h = (h = h && h.events) && h[g]) e = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: A,
                type: g,
                target: a
            }, c.type && (e = w(e, c)), c = sa(h), f = d ? [e].concat(d) : [e], r(c, function(c) {
                e.isImmediatePropagationStopped() || c.apply(a, f)
            })
        }
    }, function(a, c) {
        T.prototype[c] = function(c,
                                  e, f) {
            for (var g, h = 0, l = this.length; h < l; h++) D(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Hc(g, a(this[h], c, e, f));
            return y(g) ? g : this
        };
        T.prototype.bind = T.prototype.on;
        T.prototype.unbind = T.prototype.off
    });
    gb.prototype = {
        put: function(a, c) {
            this[Na(a, this.nextUid)] = c
        },
        get: function(a) {
            return this[Na(a, this.nextUid)]
        },
        remove: function(a) {
            var c = this[a = Na(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var Qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Rf = /,/,
        Sf = /^\s*(_?)(\S+?)\1\s*$/,
        Pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        Fa = S("$injector");
    cb.$$annotate = function(a, c, d) {
        var e;
        if ("function" === typeof a) {
            if (!(e = a.$inject)) {
                e = [];
                if (a.length) {
                    if (c) throw x(d) && d || (d = a.name || mf(a)), Fa("strictdi", d);
                    c = a.toString().replace(Pc, "");
                    c = c.match(Qc);
                    r(c[1].split(Rf), function(a) {
                        a.replace(Sf, function(a, c, d) {
                            e.push(d)
                        })
                    })
                }
                a.$inject = e
            }
        } else H(a) ? (c = a.length - 1, La(a[c], "fn"), e = a.slice(0, c)) : La(a, "fn", !0);
        return e
    };
    var Tf = S("$animate"),
        Ce = ["$provide", function(a) {
            this.$$selectors = {};
            this.register = function(c, d) {
                var e = c + "-animation";
                if (c && "." != c.charAt(0)) throw Tf("notcsel",
                    c);
                this.$$selectors[c.substr(1)] = e;
                a.factory(e, d)
            };
            this.classNameFilter = function(a) {
                1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
                return this.$$classNameFilter
            };
            this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, d, e) {
                function f(d) {
                    var f, g = a.defer();
                    g.promise.$$cancelFn = function() {
                        f && f()
                    };
                    e.$$postDigest(function() {
                        f = d(function() {
                            g.resolve()
                        })
                    });
                    return g.promise
                }

                function g(a, c) {
                    var d = [],
                        e = [],
                        f = ja();
                    r((a.attr("class") || "").split(/\s+/), function(a) {
                        f[a] = !0
                    });
                    r(c, function(a,
                                  c) {
                        var g = f[c];
                        !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                    });
                    return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
                }

                function h(a, c, d) {
                    for (var e = 0, f = c.length; e < f; ++e) a[c[e]] = d
                }

                function l() {
                    n || (n = a.defer(), d(function() {
                        n.resolve();
                        n = null
                    }));
                    return n.promise
                }

                function k(a, c) {
                    if (ca.isObject(c)) {
                        var d = w(c.from || {}, c.to || {});
                        a.css(d)
                    }
                }
                var n;
                return {
                    animate: function(a, c, d) {
                        k(a, {
                            from: c,
                            to: d
                        });
                        return l()
                    },
                    enter: function(a, c, d, e) {
                        k(a, e);
                        d ? d.after(a) : c.prepend(a);
                        return l()
                    },
                    leave: function(a, c) {
                        k(a, c);
                        a.remove();
                        return l()
                    },
                    move: function(a, c, d, e) {
                        return this.enter(a, c, d, e)
                    },
                    addClass: function(a, c, d) {
                        return this.setClass(a, c, [], d)
                    },
                    $$addClassImmediately: function(a, c, d) {
                        a = B(a);
                        c = x(c) ? c : H(c) ? c.join(" ") : "";
                        r(a, function(a) {
                            Db(a, c)
                        });
                        k(a, d);
                        return l()
                    },
                    removeClass: function(a, c, d) {
                        return this.setClass(a, [], c, d)
                    },
                    $$removeClassImmediately: function(a, c, d) {
                        a = B(a);
                        c = x(c) ? c : H(c) ? c.join(" ") : "";
                        r(a, function(a) {
                            Cb(a, c)
                        });
                        k(a, d);
                        return l()
                    },
                    setClass: function(a, c, d, e) {
                        var k = this,
                            l = !1;
                        a = B(a);
                        var m = a.data("$$animateClasses");
                        m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = {
                            classes: {},
                            options: e
                        }, l = !0);
                        e = m.classes;
                        c = H(c) ? c : c.split(" ");
                        d = H(d) ? d : d.split(" ");
                        h(e, c, !0);
                        h(e, d, !1);
                        l && (m.promise = f(function(c) {
                            var d = a.data("$$animateClasses");
                            a.removeData("$$animateClasses");
                            if (d) {
                                var e = g(a, d.classes);
                                e && k.$$setClassImmediately(a, e[0], e[1], d.options)
                            }
                            c()
                        }), a.data("$$animateClasses", m));
                        return m.promise
                    },
                    $$setClassImmediately: function(a, c, d, e) {
                        c && this.$$addClassImmediately(a, c);
                        d && this.$$removeClassImmediately(a, d);
                        k(a, e);
                        return l()
                    },
                    enabled: A,
                    cancel: A
                }
            }]
        }],
        ma = S("$compile");
    xc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Rc = /^((?:x|data)[\:\-_])/i,
        rf = S("$controller"),
        Vc = "application/json",
        $b = {
            "Content-Type": Vc + ";charset=utf-8"
        },
        tf = /^\[|^\{(?!\{)/,
        uf = {
            "[": /]$/,
            "{": /}$/
        },
        sf = /^\)\]\}',?\n/,
        ac = S("$interpolate"),
        Uf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        xf = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Hb = S("$location"),
        Vf = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Ib("$$absUrl"),
            url: function(a) {
                if (D(a)) return this.$$url;
                var c = Uf.exec(a);
                (c[1] ||
                "" === a) && this.path(decodeURIComponent(c[1]));
                (c[2] || c[1] || "" === a) && this.search(c[3] || "");
                this.hash(c[5] || "");
                return this
            },
            protocol: Ib("$$protocol"),
            host: Ib("$$host"),
            port: Ib("$$port"),
            path: cd("$$path", function(a) {
                a = null !== a ? a.toString() : "";
                return "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, c) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (x(a) || Y(a)) a = a.toString(), this.$$search = rc(a);
                        else if (L(a)) a = Da(a, {}), r(a, function(c, e) {
                            null == c && delete a[e]
                        }), this.$$search = a;
                        else throw Hb("isrcharg");
                        break;
                    default:
                        D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
                }
                this.$$compose();
                return this
            },
            hash: cd("$$hash", function(a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function() {
                this.$$replace = !0;
                return this
            }
        };
    r([bd, dc, cc], function(a) {
        a.prototype = Object.create(Vf);
        a.prototype.state = function(c) {
            if (!arguments.length) return this.$$state;
            if (a !== cc || !this.$$html5) throw Hb("nostate");
            this.$$state = D(c) ? null : c;
            return this
        }
    });
    var ga = S("$parse"),
        Wf = Function.prototype.call,
        Xf = Function.prototype.apply,
        Yf = Function.prototype.bind,
        pb = ja();
    r({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(a, c) {
        a.constant = a.literal = a.sharedGetter = !0;
        pb[c] = a
    });
    pb["this"] = function(a) {
        return a
    };
    pb["this"].sharedGetter = !0;
    var qb = w(ja(), {
            "+": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return y(d) ? y(e) ? d + e : d : y(e) ? e : u
            },
            "-": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return (y(d) ? d : 0) - (y(e) ? e : 0)
            },
            "*": function(a, c, d, e) {
                return d(a, c) * e(a, c)
            },
            "/": function(a, c, d, e) {
                return d(a,
                        c) / e(a, c)
            },
            "%": function(a, c, d, e) {
                return d(a, c) % e(a, c)
            },
            "===": function(a, c, d, e) {
                return d(a, c) === e(a, c)
            },
            "!==": function(a, c, d, e) {
                return d(a, c) !== e(a, c)
            },
            "==": function(a, c, d, e) {
                return d(a, c) == e(a, c)
            },
            "!=": function(a, c, d, e) {
                return d(a, c) != e(a, c)
            },
            "<": function(a, c, d, e) {
                return d(a, c) < e(a, c)
            },
            ">": function(a, c, d, e) {
                return d(a, c) > e(a, c)
            },
            "<=": function(a, c, d, e) {
                return d(a, c) <= e(a, c)
            },
            ">=": function(a, c, d, e) {
                return d(a, c) >= e(a, c)
            },
            "&&": function(a, c, d, e) {
                return d(a, c) && e(a, c)
            },
            "||": function(a, c, d, e) {
                return d(a,
                        c) || e(a, c)
            },
            "!": function(a, c, d) {
                return !d(a, c)
            },
            "=": !0,
            "|": !0
        }),
        Zf = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        gc = function(a) {
            this.options = a
        };
    gc.prototype = {
        constructor: gc,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
                else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(a)) this.readIdent();
                else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: a
                }), this.index++;
                else if (this.isWhitespace(a)) this.index++;
                else {
                    var c = a + this.peek(),
                        d = c + this.peek(2),
                        e = qb[c],
                        f = qb[d];
                    qb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                        index: this.index,
                        text: a,
                        operator: !0
                    }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            return this.tokens
        },
        is: function(a, c) {
            return -1 !== c.indexOf(a)
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a && "string" ===
                typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, c, d) {
            d = d || this.index;
            c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw ga("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = K(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d;
                else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d;
                    else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;
                    else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: c,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length;) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) &&
                    !this.isNumber(c)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index),
                    e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Zf[g] || g, f = !1;
                else if ("\\" === g) f = !0;
                else {
                    if (g ===
                        a) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            constant: !0,
                            value: d
                        });
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var kb = function(a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    kb.ZERO = w(function() {
        return 0
    }, {
        sharedGetter: !0,
        constant: !0
    });
    kb.prototype = {
        constructor: kb,
        parse: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in pb ? a = pb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) :
                "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function(a, c) {
            throw ga("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ga("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(a, c, d, e) {
            return this.peekAhead(0, a, c, d, e)
        },
        peekAhead: function(a, c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a
            }
            return !1
        },
        expect: function(a,
                         c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw ga("ueoe", this.text);
            var c = this.expect(a);
            c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return c
        },
        unaryFn: function(a, c) {
            var d = qb[a];
            return w(function(a, f) {
                return d(a, f, c)
            }, {
                constant: c.constant,
                inputs: [c]
            })
        },
        binaryFn: function(a, c, d, e) {
            var f = qb[c];
            return w(function(c, e) {
                return f(c, e, a, d)
            }, {
                constant: a.constant && d.constant,
                inputs: !e && [a, d]
            })
        },
        identifier: function() {
            for (var a =
                this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
            return zf(a, this.options, this.text)
        },
        constant: function() {
            var a = this.consume().value;
            return w(function() {
                return a
            }, {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
                    for (var e, f = 0, g = a.length; f < g; f++) e = a[f](c, d);
                    return e
                }
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        },
        filter: function(a) {
            var c = this.$filter(this.consume().text),
                d, e;
            if (this.peek(":"))
                for (d = [], e = []; this.expect(":");) d.push(this.expression());
            var f = [a].concat(d || []);
            return w(function(f, h) {
                var l = a(f, h);
                if (e) {
                    e[0] = l;
                    for (l = d.length; l--;) e[l + 1] = d[l](f, h);
                    return c.apply(u, e)
                }
                return c(l)
            }, {
                constant: !c.$stateful && f.every(ec),
                inputs: !c.$stateful && f
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a =
                    this.ternary(),
                c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), w(function(d, f) {
                return a.assign(d, c(d, f), f)
            }, {
                inputs: [a, c]
            })) : a
        },
        ternary: function() {
            var a = this.logicalOR(),
                c;
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return w(function(e, f) {
                    return a(e, f) ? c(e, f) : d(e, f)
                }, {
                    constant: a.constant && c.constant && d.constant
                })
            }
            return a
        },
        logicalOR: function() {
            for (var a =
                this.logicalAND(), c; c = this.expect("||");) a = this.binaryFn(a, c.text, this.logicalAND(), !0);
            return a
        },
        logicalAND: function() {
            for (var a = this.equality(), c; c = this.expect("&&");) a = this.binaryFn(a, c.text, this.equality(), !0);
            return a
        },
        equality: function() {
            for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = this.binaryFn(a, c.text, this.relational());
            return a
        },
        relational: function() {
            for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = this.binaryFn(a, c.text, this.additive());
            return a
        },
        additive: function() {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.text, this.multiplicative());
            return a
        },
        multiplicative: function() {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.text, this.unary());
            return a
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(kb.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        },
        fieldAccess: function(a) {
            var c = this.identifier();
            return w(function(d, e, f) {
                d = f || a(d, e);
                return null == d ? u : c(d)
            }, {
                assign: function(d, e, f) {
                    var g = a(d, f);
                    g || a.assign(d, g = {}, f);
                    return c.assign(g, e)
                }
            })
        },
        objectIndex: function(a) {
            var c = this.text,
                d = this.expression();
            this.consume("]");
            return w(function(e, f) {
                var g = a(e, f),
                    h = dd(d(e, f), c);
                va(h, c);
                return g ? oa(g[h], c) : u
            }, {
                assign: function(e, f, g) {
                    var h = va(dd(d(e, g), c), c),
                        l = oa(a(e, g), c);
                    l || a.assign(e, l = {}, g);
                    return l[h] = f
                }
            })
        },
        functionCall: function(a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression());
                while (this.expect(","))
            }
            this.consume(")");
            var e = this.text,
                f = d.length ? [] : null;
            return function(g, h) {
                var l = c ? c(g, h) : y(c) ? u : g,
                    k = a(g, h, l) || A;
                if (f)
                    for (var n = d.length; n--;) f[n] = oa(d[n](g, h), e);
                oa(l, e);
                if (k) {
                    if (k.constructor === k) throw ga("isecfn", e);
                    if (k === Wf || k === Xf || k === Yf) throw ga("isecff", e);
                }
                l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
                f && (f.length = 0);
                return oa(l, e)
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return w(function(c, d) {
                for (var e = [], f = 0, g = a.length; f < g; f++) e.push(a[f](c, d));
                return e
            }, {
                literal: !0,
                constant: a.every(ec),
                inputs: a
            })
        },
        object: function() {
            var a = [],
                c = [];
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.consume();
                    d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
                    this.consume(":");
                    c.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("}");
            return w(function(d, f) {
                for (var g = {}, h = 0, l = c.length; h < l; h++) g[a[h]] =
                    c[h](d, f);
                return g
            }, {
                literal: !0,
                constant: c.every(ec),
                inputs: c
            })
        }
    };
    var Bf = ja(),
        Af = ja(),
        Cf = Object.prototype.valueOf,
        Ba = S("$sce"),
        pa = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        ma = S("$compile"),
        Z = W.createElement("a"),
        id = Aa(R.location.href);
    Ec.$inject = ["$provide"];
    jd.$inject = ["$locale"];
    ld.$inject = ["$locale"];
    var od = ".",
        Mf = {
            yyyy: U("FullYear", 4),
            yy: U("FullYear", 2, 0, !0),
            y: U("FullYear", 1),
            MMMM: Kb("Month"),
            MMM: Kb("Month", !0),
            MM: U("Month", 2, 1),
            M: U("Month", 1, 1),
            dd: U("Date", 2),
            d: U("Date",
                1),
            HH: U("Hours", 2),
            H: U("Hours", 1),
            hh: U("Hours", 2, -12),
            h: U("Hours", 1, -12),
            mm: U("Minutes", 2),
            m: U("Minutes", 1),
            ss: U("Seconds", 2),
            s: U("Seconds", 1),
            sss: U("Milliseconds", 3),
            EEEE: Kb("Day"),
            EEE: Kb("Day", !0),
            a: function(a, c) {
                return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function(a) {
                a = -1 * a.getTimezoneOffset();
                return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2))
            },
            ww: qd(2),
            w: qd(1),
            G: hc,
            GG: hc,
            GGG: hc,
            GGGG: function(a, c) {
                return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1]
            }
        },
        Lf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Kf = /^\-?\d+$/;
    kd.$inject = ["$locale"];
    var Hf = ea(K),
        If = ea(vb);
    md.$inject = ["$parse"];
    var Td = ea({
            restrict: "E",
            compile: function(a, c) {
                if (!c.href && !c.xlinkHref && !c.name) return function(a, c) {
                    if ("a" === c[0].nodeName.toLowerCase()) {
                        var f = "[object SVGAnimatedString]" === Ca.call(c.prop("href")) ? "xlink:href" : "href";
                        c.on("click", function(a) {
                            c.attr(f) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        wb = {};
    r(Fb, function(a, c) {
        if ("multiple" != a) {
            var d = ya("ng-" + c);
            wb[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(a, f, g) {
                        a.$watch(g[d],
                            function(a) {
                                g.$set(c, !!a)
                            })
                    }
                }
            }
        }
    });
    r(Oc, function(a, c) {
        wb[c] = function() {
            return {
                priority: 100,
                link: function(a, e, f) {
                    if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
                        f.$set("ngPattern", new RegExp(e[1], e[2]));
                        return
                    }
                    a.$watch(f[c], function(a) {
                        f.$set(c, a)
                    })
                }
            }
        }
    });
    r(["src", "srcset", "href"], function(a) {
        var c = ya("ng-" + a);
        wb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a,
                        h = a;
                    "href" === a && "[object SVGAnimatedString]" === Ca.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href",
                        g = null);
                    f.$observe(c, function(c) {
                        c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                    })
                }
            }
        }
    });
    var Lb = {
        $addControl: A,
        $$renameControl: function(a, c) {
            a.$name = c
        },
        $removeControl: A,
        $setValidity: A,
        $setDirty: A,
        $setPristine: A,
        $setSubmitted: A
    };
    rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var yd = function(a) {
            return ["$timeout", function(c) {
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    controller: rd,
                    compile: function(d, e) {
                        d.addClass(Sa).addClass(ob);
                        var f = e.name ? "name" : a && e.ngForm ? "ngForm" :
                            !1;
                        return {
                            pre: function(a, d, e, k) {
                                if (!("action" in e)) {
                                    var n = function(c) {
                                        a.$apply(function() {
                                            k.$commitViewValue();
                                            k.$setSubmitted()
                                        });
                                        c.preventDefault()
                                    };
                                    d[0].addEventListener("submit", n, !1);
                                    d.on("$destroy", function() {
                                        c(function() {
                                            d[0].removeEventListener("submit", n, !1)
                                        }, 0, !1)
                                    })
                                }
                                var p = k.$$parentForm;
                                f && (jb(a, null, k.$name, k, k.$name), e.$observe(f, function(c) {
                                    k.$name !== c && (jb(a, null, k.$name, u, k.$name), p.$$renameControl(k, c), jb(a, null, k.$name, k, k.$name))
                                }));
                                d.on("$destroy", function() {
                                    p.$removeControl(k);
                                    f && jb(a, null, e[f], u, k.$name);
                                    w(k, Lb)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Ud = yd(),
        ge = yd(!0),
        Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        $f = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        ag = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        bg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        zd = /^(\d{4})-(\d{2})-(\d{2})$/,
        Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        kc = /^(\d{4})-W(\d\d)$/,
        Bd = /^(\d{4})-(\d\d)$/,
        Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Dd = {
            text: function(a, c, d, e, f, g) {
                lb(a, c, d, e, f, g);
                ic(e)
            },
            date: mb("date", zd, Nb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": mb("datetimelocal", Ad, Nb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: mb("time", Cd, Nb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: mb("week", kc, function(a, c) {
                if (ha(a)) return a;
                if (x(a)) {
                    kc.lastIndex = 0;
                    var d = kc.exec(a);
                    if (d) {
                        var e = +d[1],
                            f = +d[2],
                            g = d = 0,
                            h = 0,
                            l = 0,
                            k = pd(e),
                            f = 7 * (f - 1);
                        c && (d = c.getHours(), g =
                            c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                        return new Date(e, 0, k.getDate() + f, d, g, h, l)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: mb("month", Bd, Nb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(a, c, d, e, f, g) {
                td(a, c, d, e);
                lb(a, c, d, e, f, g);
                e.$$parserName = "number";
                e.$parsers.push(function(a) {
                    return e.$isEmpty(a) ? null : bg.test(a) ? parseFloat(a) : u
                });
                e.$formatters.push(function(a) {
                    if (!e.$isEmpty(a)) {
                        if (!Y(a)) throw nb("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (y(d.min) || d.ngMin) {
                    var h;
                    e.$validators.min = function(a) {
                        return e.$isEmpty(a) ||
                            D(h) || a >= h
                    };
                    d.$observe("min", function(a) {
                        y(a) && !Y(a) && (a = parseFloat(a, 10));
                        h = Y(a) && !isNaN(a) ? a : u;
                        e.$validate()
                    })
                }
                if (y(d.max) || d.ngMax) {
                    var l;
                    e.$validators.max = function(a) {
                        return e.$isEmpty(a) || D(l) || a <= l
                    };
                    d.$observe("max", function(a) {
                        y(a) && !Y(a) && (a = parseFloat(a, 10));
                        l = Y(a) && !isNaN(a) ? a : u;
                        e.$validate()
                    })
                }
            },
            url: function(a, c, d, e, f, g) {
                lb(a, c, d, e, f, g);
                ic(e);
                e.$$parserName = "url";
                e.$validators.url = function(a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || $f.test(d)
                }
            },
            email: function(a, c, d, e, f, g) {
                lb(a, c, d, e, f, g);
                ic(e);
                e.$$parserName = "email";
                e.$validators.email = function(a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || ag.test(d)
                }
            },
            radio: function(a, c, d, e) {
                D(d.name) && c.attr("name", ++rb);
                c.on("click", function(a) {
                    c[0].checked && e.$setViewValue(d.value, a && a.type)
                });
                e.$render = function() {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function(a, c, d, e, f, g, h, l) {
                var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
                    n = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
                c.on("click", function(a) {
                    e.$setViewValue(c[0].checked, a &&
                        a.type)
                });
                e.$render = function() {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function(a) {
                    return !1 === a
                };
                e.$formatters.push(function(a) {
                    return ia(a, k)
                });
                e.$parsers.push(function(a) {
                    return a ? k : n
                })
            },
            hidden: A,
            button: A,
            submit: A,
            reset: A,
            file: A
        },
        yc = ["$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(f, g, h, l) {
                        l[0] && (Dd[K(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e)
                    }
                }
            }
        }],
        cg = /^(true|false|\d+)$/,
        ye = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a,
                                  c) {
                    return cg.test(c.ngValue) ? function(a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function(a, c, f) {
                        a.$watch(f.ngValue, function(a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        },
        Zd = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(c) {
                    a.$$addBindingClass(c);
                    return function(c, e, f) {
                        a.$$addBindingInfo(e, f.ngBind);
                        e = e[0];
                        c.$watch(f.ngBind, function(a) {
                            e.textContent = a === u ? "" : a
                        })
                    }
                }
            }
        }],
        ae = ["$interpolate", "$compile", function(a, c) {
            return {
                compile: function(d) {
                    c.$$addBindingClass(d);
                    return function(d, f, g) {
                        d = a(f.attr(g.$attr.ngBindTemplate));
                        c.$$addBindingInfo(f, d.expressions);
                        f = f[0];
                        g.$observe("ngBindTemplate", function(a) {
                            f.textContent = a === u ? "" : a
                        })
                    }
                }
            }
        }],
        $d = ["$sce", "$parse", "$compile", function(a, c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f.ngBindHtml),
                        h = c(f.ngBindHtml, function(a) {
                            return (a || "").toString()
                        });
                    d.$$addBindingClass(e);
                    return function(c, e, f) {
                        d.$$addBindingInfo(e, f.ngBindHtml);
                        c.$watch(h, function() {
                            e.html(a.getTrustedHtml(g(c)) || "")
                        })
                    }
                }
            }
        }],
        xe = ea({
            restrict: "A",
            require: "ngModel",
            link: function(a, c, d, e) {
                e.$viewChangeListeners.push(function() {
                    a.$eval(d.ngChange)
                })
            }
        }),
        be = jc("", !0),
        de = jc("Odd", 0),
        ce = jc("Even", 1),
        ee = Ia({
            compile: function(a, c) {
                c.$set("ngCloak", u);
                a.removeClass("ng-cloak")
            }
        }),
        fe = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Dc = {},
        dg = {
            blur: !0,
            focus: !0
        };
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = ya("ng-" + a);
        Dc[c] = ["$parse", "$rootScope", function(d, e) {
            return {
                restrict: "A",
                compile: function(f, g) {
                    var h =
                        d(g[c], null, !0);
                    return function(c, d) {
                        d.on(a, function(d) {
                            var f = function() {
                                h(c, {
                                    $event: d
                                })
                            };
                            dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var ie = ["$animate", function(a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, l, k;
                    c.$watch(e.ngIf, function(c) {
                        c ? l || g(function(c, f) {
                            l = f;
                            c[c.length++] = W.createComment(" end ngIf: " + e.ngIf + " ");
                            h = {
                                clone: c
                            };
                            a.enter(c, d.parent(), d)
                        }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k =
                            ub(h.clone), a.leave(k).then(function() {
                            k = null
                        }), h = null))
                    })
                }
            }
        }],
        je = ["$templateRequest", "$anchorScroll", "$animate", function(a, c, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ca.noop,
                compile: function(e, f) {
                    var g = f.ngInclude || f.src,
                        h = f.onload || "",
                        l = f.autoscroll;
                    return function(e, f, p, q, r) {
                        var s = 0,
                            u, v, m, C = function() {
                                v && (v.remove(), v = null);
                                u && (u.$destroy(), u = null);
                                m && (d.leave(m).then(function() {
                                    v = null
                                }), v = m, m = null)
                            };
                        e.$watch(g, function(g) {
                            var p = function() {
                                    !y(l) || l && !e.$eval(l) ||
                                    c()
                                },
                                M = ++s;
                            g ? (a(g, !0).then(function(a) {
                                if (M === s) {
                                    var c = e.$new();
                                    q.template = a;
                                    a = r(c, function(a) {
                                        C();
                                        d.enter(a, null, f).then(p)
                                    });
                                    u = c;
                                    m = a;
                                    u.$emit("$includeContentLoaded", g);
                                    e.$eval(h)
                                }
                            }, function() {
                                M === s && (C(), e.$emit("$includeContentError", g))
                            }), e.$emit("$includeContentRequested", g)) : (C(), q.template = null)
                        })
                    }
                }
            }
        }],
        Ae = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Gc(f.template, W).childNodes)(c, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }],
        ke = Ia({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        we = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ",
                        g = "false" !== d.ngTrim,
                        h = g ? N(f) : f;
                    e.$parsers.push(function(a) {
                        if (!D(a)) {
                            var c = [];
                            a && r(a.split(h), function(a) {
                                a && c.push(g ? N(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function(a) {
                        return H(a) ? a.join(f) : u
                    });
                    e.$isEmpty = function(a) {
                        return !a ||
                            !a.length
                    }
                }
            }
        },
        ob = "ng-valid",
        vd = "ng-invalid",
        Sa = "ng-pristine",
        Mb = "ng-dirty",
        xd = "ng-pending",
        nb = S("ngModel"),
        eg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, n) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = u;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = u;
            this.$name = n(d.name || "", !1)(a);
            var p = f(d.ngModel),
                q = p.assign,
                t = p,
                s = q,
                F = null,
                v, m = this;
            this.$$setOptions = function(a) {
                if ((m.$options = a) && a.getterSetter) {
                    var c = f(d.ngModel + "()"),
                        g = f(d.ngModel + "($$$p)");
                    t = function(a) {
                        var d = p(a);
                        z(d) && (d = c(a));
                        return d
                    };
                    s = function(a, c) {
                        z(p(a)) ? g(a, {
                            $$$p: m.$modelValue
                        }) : q(a, m.$modelValue)
                    }
                } else if (!p.assign) throw nb("nonassign", d.ngModel, xa(e));
            };
            this.$render = A;
            this.$isEmpty = function(a) {
                return D(a) ||
                    "" === a || null === a || a !== a
            };
            var C = e.inheritedData("$formController") || Lb,
                w = 0;
            sd({
                ctrl: this,
                $element: e,
                set: function(a, c) {
                    a[c] = !0
                },
                unset: function(a, c) {
                    delete a[c]
                },
                parentForm: C,
                $animate: g
            });
            this.$setPristine = function() {
                m.$dirty = !1;
                m.$pristine = !0;
                g.removeClass(e, Mb);
                g.addClass(e, Sa)
            };
            this.$setDirty = function() {
                m.$dirty = !0;
                m.$pristine = !1;
                g.removeClass(e, Sa);
                g.addClass(e, Mb);
                C.$setDirty()
            };
            this.$setUntouched = function() {
                m.$touched = !1;
                m.$untouched = !0;
                g.setClass(e, "ng-untouched", "ng-touched")
            };
            this.$setTouched =
                function() {
                    m.$touched = !0;
                    m.$untouched = !1;
                    g.setClass(e, "ng-touched", "ng-untouched")
                };
            this.$rollbackViewValue = function() {
                h.cancel(F);
                m.$viewValue = m.$$lastCommittedViewValue;
                m.$render()
            };
            this.$validate = function() {
                if (!Y(m.$modelValue) || !isNaN(m.$modelValue)) {
                    var a = m.$$rawModelValue,
                        c = m.$valid,
                        d = m.$modelValue,
                        e = m.$options && m.$options.allowInvalid;
                    m.$$runValidators(a, m.$$lastCommittedViewValue, function(f) {
                        e || c === f || (m.$modelValue = f ? a : u, m.$modelValue !== d && m.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators =
                function(a, c, d) {
                    function e() {
                        var d = !0;
                        r(m.$validators, function(e, f) {
                            var h = e(a, c);
                            d = d && h;
                            g(f, h)
                        });
                        return d ? !0 : (r(m.$asyncValidators, function(a, c) {
                            g(c, null)
                        }), !1)
                    }

                    function f() {
                        var d = [],
                            e = !0;
                        r(m.$asyncValidators, function(f, h) {
                            var l = f(a, c);
                            if (!l || !z(l.then)) throw nb("$asyncValidators", l);
                            g(h, u);
                            d.push(l.then(function() {
                                g(h, !0)
                            }, function(a) {
                                e = !1;
                                g(h, !1)
                            }))
                        });
                        d.length ? k.all(d).then(function() {
                            h(e)
                        }, A) : h(!0)
                    }

                    function g(a, c) {
                        l === w && m.$setValidity(a, c)
                    }

                    function h(a) {
                        l === w && d(a)
                    }
                    w++;
                    var l = w;
                    (function() {
                        var a =
                            m.$$parserName || "parse";
                        if (v === u) g(a, null);
                        else return v || (r(m.$validators, function(a, c) {
                            g(c, null)
                        }), r(m.$asyncValidators, function(a, c) {
                            g(c, null)
                        })), g(a, v), v;
                        return !0
                    })() ? e() ? f() : h(!1): h(!1)
                };
            this.$commitViewValue = function() {
                var a = m.$viewValue;
                h.cancel(F);
                if (m.$$lastCommittedViewValue !== a || "" === a && m.$$hasNativeValidators) m.$$lastCommittedViewValue = a, m.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function() {
                var c = m.$$lastCommittedViewValue;
                if (v = D(c) ? u : !0)
                    for (var d =
                        0; d < m.$parsers.length; d++)
                        if (c = m.$parsers[d](c), D(c)) {
                            v = !1;
                            break
                        }
                Y(m.$modelValue) && isNaN(m.$modelValue) && (m.$modelValue = t(a));
                var e = m.$modelValue,
                    f = m.$options && m.$options.allowInvalid;
                m.$$rawModelValue = c;
                f && (m.$modelValue = c, m.$modelValue !== e && m.$$writeModelToScope());
                m.$$runValidators(c, m.$$lastCommittedViewValue, function(a) {
                    f || (m.$modelValue = a ? c : u, m.$modelValue !== e && m.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function() {
                s(a, m.$modelValue);
                r(m.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
            };
            this.$setViewValue = function(a, c) {
                m.$viewValue = a;
                m.$options && !m.$options.updateOnDefault || m.$$debounceViewValueCommit(c)
            };
            this.$$debounceViewValueCommit = function(c) {
                var d = 0,
                    e = m.$options;
                e && y(e.debounce) && (e = e.debounce, Y(e) ? d = e : Y(e[c]) ? d = e[c] : Y(e["default"]) && (d = e["default"]));
                h.cancel(F);
                d ? F = h(function() {
                    m.$commitViewValue()
                }, d) : l.$$phase ? m.$commitViewValue() : a.$apply(function() {
                    m.$commitViewValue()
                })
            };
            a.$watch(function() {
                var c = t(a);
                if (c !== m.$modelValue && (m.$modelValue === m.$modelValue || c === c)) {
                    m.$modelValue =
                        m.$$rawModelValue = c;
                    v = u;
                    for (var d = m.$formatters, e = d.length, f = c; e--;) f = d[e](f);
                    m.$viewValue !== f && (m.$viewValue = m.$$lastCommittedViewValue = f, m.$render(), m.$$runValidators(c, f, A))
                }
                return c
            })
        }],
        ve = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: eg,
                priority: 1,
                compile: function(c) {
                    c.addClass(Sa).addClass("ng-untouched").addClass(ob);
                    return {
                        pre: function(a, c, f, g) {
                            var h = g[0],
                                l = g[1] || Lb;
                            h.$$setOptions(g[2] && g[2].$options);
                            l.$addControl(h);
                            f.$observe("name",
                                function(a) {
                                    h.$name !== a && l.$$renameControl(h, a)
                                });
                            a.$on("$destroy", function() {
                                l.$removeControl(h)
                            })
                        },
                        post: function(c, e, f, g) {
                            var h = g[0];
                            if (h.$options && h.$options.updateOn) e.on(h.$options.updateOn, function(a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            e.on("blur", function(e) {
                                h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        fg = /(\s+|^)default(\s+|$)/,
        ze = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, c) {
                    var d = this;
                    this.$options = a.$eval(c.ngModelOptions);
                    this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = N(this.$options.updateOn.replace(fg, function() {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        le = Ia({
            terminal: !0,
            priority: 1E3
        }),
        me = ["$locale", "$interpolate", function(a, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA",
                link: function(f, g, h) {
                    function l(a) {
                        g.text(a || "")
                    }
                    var k = h.count,
                        n = h.$attr.when && g.attr(h.$attr.when),
                        p = h.offset || 0,
                        q = f.$eval(n) || {},
                        t = {},
                        n = c.startSymbol(),
                        s =
                            c.endSymbol(),
                        u = n + k + "-" + p + s,
                        v = ca.noop,
                        m;
                    r(h, function(a, c) {
                        var d = e.exec(c);
                        d && (d = (d[1] ? "-" : "") + K(d[2]), q[d] = g.attr(h.$attr[c]))
                    });
                    r(q, function(a, e) {
                        t[e] = c(a.replace(d, u))
                    });
                    f.$watch(k, function(c) {
                        c = parseFloat(c);
                        var d = isNaN(c);
                        d || c in q || (c = a.pluralCat(c - p));
                        c === m || d && isNaN(m) || (v(), v = f.$watch(t[c], l), m = c)
                    })
                }
            }
        }],
        ne = ["$parse", "$animate", function(a, c) {
            var d = S("ngRepeat"),
                e = function(a, c, d, e, k, n, p) {
                    a[d] = e;
                    k && (a[k] = n);
                    a.$index = c;
                    a.$first = 0 === c;
                    a.$last = c === p - 1;
                    a.$middle = !(a.$first || a.$last);
                    a.$odd = !(a.$even =
                        0 === (c & 1))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function(f, g) {
                    var h = g.ngRepeat,
                        l = W.createComment(" end ngRepeat: " + h + " "),
                        k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k) throw d("iexp", h);
                    var n = k[1],
                        p = k[2],
                        q = k[3],
                        t = k[4],
                        k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k) throw d("iidexp", n);
                    var s = k[3] || k[1],
                        F = k[2];
                    if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) ||
                        /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);
                    var v, m, C, y, w = {
                        $id: Na
                    };
                    t ? v = a(t) : (C = function(a, c) {
                        return Na(c)
                    }, y = function(a) {
                        return a
                    });
                    return function(a, f, g, k, n) {
                        v && (m = function(c, d, e) {
                            F && (w[F] = c);
                            w[s] = d;
                            w.$index = e;
                            return v(a, w)
                        });
                        var t = ja();
                        a.$watchCollection(p, function(g) {
                            var k, p, v = f[0],
                                G, w = ja(),
                                D, I, A, z, H, O, x;
                            q && (a[q] = g);
                            if (Ta(g)) H = g, p = m || C;
                            else {
                                p = m || y;
                                H = [];
                                for (x in g) g.hasOwnProperty(x) && "$" != x.charAt(0) && H.push(x);
                                H.sort()
                            }
                            D =
                                H.length;
                            x = Array(D);
                            for (k = 0; k < D; k++)
                                if (I = g === H ? k : H[k], A = g[I], z = p(I, A, k), t[z]) O = t[z], delete t[z], w[z] = O, x[k] = O;
                                else {
                                    if (w[z]) throw r(x, function(a) {
                                        a && a.scope && (t[a.id] = a)
                                    }), d("dupes", h, z, A);
                                    x[k] = {
                                        id: z,
                                        scope: u,
                                        clone: u
                                    };
                                    w[z] = !0
                                }
                            for (G in t) {
                                O = t[G];
                                z = ub(O.clone);
                                c.leave(z);
                                if (z[0].parentNode)
                                    for (k = 0, p = z.length; k < p; k++) z[k].$$NG_REMOVED = !0;
                                O.scope.$destroy()
                            }
                            for (k = 0; k < D; k++)
                                if (I = g === H ? k : H[k], A = g[I], O = x[k], O.scope) {
                                    G = v;
                                    do G = G.nextSibling; while (G && G.$$NG_REMOVED);
                                    O.clone[0] != G && c.move(ub(O.clone), null, B(v));
                                    v = O.clone[O.clone.length - 1];
                                    e(O.scope, k, s, A, F, I, D)
                                } else n(function(a, d) {
                                    O.scope = d;
                                    var f = l.cloneNode(!1);
                                    a[a.length++] = f;
                                    c.enter(a, null, B(v));
                                    v = f;
                                    O.clone = a;
                                    w[O.id] = O;
                                    e(O.scope, k, s, A, F, I, D)
                                });
                            t = w
                        })
                    }
                }
            }
        }],
        oe = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(c, d, e) {
                    c.$watch(e.ngShow, function(c) {
                        a[c ? "removeClass" : "addClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        he = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(c, d, e) {
                    c.$watch(e.ngHide, function(c) {
                        a[c ?
                            "addClass" : "removeClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        pe = Ia(function(a, c, d) {
            a.$watch(d.ngStyle, function(a, d) {
                d && a !== d && r(d, function(a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            }, !0)
        }),
        qe = ["$animate", function(a) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, f) {
                    var g = [],
                        h = [],
                        l = [],
                        k = [],
                        n = function(a, c) {
                            return function() {
                                a.splice(c, 1)
                            }
                        };
                    c.$watch(e.ngSwitch || e.on, function(c) {
                        var d, e;
                        d = 0;
                        for (e = l.length; d < e; ++d) a.cancel(l[d]);
                        d = l.length =
                            0;
                        for (e = k.length; d < e; ++d) {
                            var s = ub(h[d].clone);
                            k[d].$destroy();
                            (l[d] = a.leave(s)).then(n(l, d))
                        }
                        h.length = 0;
                        k.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && r(g, function(c) {
                            c.transclude(function(d, e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = W.createComment(" end ngSwitchWhen: ");
                                h.push({
                                    clone: d
                                });
                                a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        re = Ia({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        se = Ia({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        ue = Ia({
            restrict: "EAC",
            link: function(a, c, d, e, f) {
                if (!f) throw S("ngTransclude")("orphan", xa(c));
                f(function(a) {
                    c.empty();
                    c.append(a)
                })
            }
        }),
        Vd = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(c, d) {
                    "text/ng-template" == d.type && a.put(d.id, c[0].text)
                }
            }
        }],
        gg = S("ngOptions"),
        te = ea({
            restrict: "A",
            terminal: !0
        }),
        Wd = ["$compile", "$parse", function(a, c) {
            var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {
                    $setViewValue: A
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                    var l = this,
                        k = {},
                        n = e,
                        p;
                    l.databound = d.ngModel;
                    l.init = function(a, c, d) {
                        n = a;
                        p = d
                    };
                    l.addOption = function(c, d) {
                        Ma(c, '"option value"');
                        k[c] = !0;
                        n.$viewValue == c && (a.val(c), p.parent() && p.remove());
                        d && d[0].hasAttribute("selected") && (d[0].selected = !0)
                    };
                    l.removeOption = function(a) {
                        this.hasOption(a) && (delete k[a], n.$viewValue === a && this.renderUnknownOption(a))
                    };
                    l.renderUnknownOption = function(c) {
                        c = "? " + Na(c) + " ?";
                        p.val(c);
                        a.prepend(p);
                        a.val(c);
                        p.prop("selected", !0)
                    };
                    l.hasOption = function(a) {
                        return k.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function() {
                        l.renderUnknownOption = A
                    })
                }],
                link: function(e, g, h, l) {
                    function k(a, c, d, e) {
                        d.$render = function() {
                            var a =
                                d.$viewValue;
                            e.hasOption(a) ? (z.parent() && z.remove(), c.val(a), "" === a && v.prop("selected", !0)) : null == a && v ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.on("change", function() {
                            a.$apply(function() {
                                z.parent() && z.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function n(a, c, d) {
                        var e;
                        d.$render = function() {
                            var a = new gb(d.$viewValue);
                            r(c.find("option"), function(c) {
                                c.selected = y(a.get(c.value))
                            })
                        };
                        a.$watch(function() {
                            ia(e, d.$viewValue) || (e = sa(d.$viewValue), d.$render())
                        });
                        c.on("change", function() {
                            a.$apply(function() {
                                var a = [];
                                r(c.find("option"),
                                    function(c) {
                                        c.selected && a.push(c.value)
                                    });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function p(e, f, g) {
                        function h(a, c, d) {
                            T[A] = d;
                            I && (T[I] = c);
                            return a(e, T)
                        }

                        function l(a) {
                            var c;
                            if (t)
                                if (K && H(a)) {
                                    c = new gb([]);
                                    for (var d = 0; d < a.length; d++) c.put(h(K, null, a[d]), !0)
                                } else c = new gb(a);
                            else K && (a = h(K, null, a));
                            return function(d, e) {
                                var f;
                                f = K ? K : x ? x : E;
                                return t ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
                            }
                        }

                        function k() {
                            m || (e.$$postDigest(p), m = !0)
                        }

                        function n(a, c, d) {
                            a[c] = a[c] || 0;
                            a[c] += d ? 1 : -1
                        }

                        function p() {
                            m = !1;
                            var a = {
                                    "": []
                                },
                                c = [""],
                                d, k, s, u, v;
                            s = g.$viewValue;
                            u = L(e) || [];
                            var A = I ? Object.keys(u).sort() : u,
                                x, B, H, E, P = {};
                            v = l(s);
                            var N = !1,
                                U, W;
                            R = {};
                            for (E = 0; H = A.length, E < H; E++) {
                                x = E;
                                if (I && (x = A[E], "$" === x.charAt(0))) continue;
                                B = u[x];
                                d = h(M, x, B) || "";
                                (k = a[d]) || (k = a[d] = [], c.push(d));
                                d = v(x, B);
                                N = N || d;
                                B = h(z, x, B);
                                B = y(B) ? B : "";
                                W = K ? K(e, T) : I ? A[E] : E;
                                K && (R[W] = x);
                                k.push({
                                    id: W,
                                    label: B,
                                    selected: d
                                })
                            }
                            t || (w || null === s ? a[""].unshift({
                                id: "",
                                label: "",
                                selected: !N
                            }) : N || a[""].unshift({
                                id: "?",
                                label: "",
                                selected: !0
                            }));
                            x = 0;
                            for (A = c.length; x < A; x++) {
                                d = c[x];
                                k = a[d];
                                S.length <= x ? (s = {
                                    element: D.clone().attr("label",
                                        d),
                                    label: k.label
                                }, u = [s], S.push(u), f.append(s.element)) : (u = S[x], s = u[0], s.label != d && s.element.attr("label", s.label = d));
                                N = null;
                                E = 0;
                                for (H = k.length; E < H; E++) d = k[E], (v = u[E + 1]) ? (N = v.element, v.label !== d.label && (n(P, v.label, !1), n(P, d.label, !0), N.text(v.label = d.label), N.prop("label", v.label)), v.id !== d.id && N.val(v.id = d.id), N[0].selected !== d.selected && (N.prop("selected", v.selected = d.selected), Ra && N.prop("selected", v.selected))) : ("" === d.id && w ? U = w : (U = C.clone()).val(d.id).prop("selected", d.selected).attr("selected",
                                    d.selected).prop("label", d.label).text(d.label), u.push(v = {
                                    element: U,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), n(P, d.label, !0), N ? N.after(U) : s.element.append(U), N = U);
                                for (E++; u.length > E;) d = u.pop(), n(P, d.label, !1), d.element.remove()
                            }
                            for (; S.length > x;) {
                                k = S.pop();
                                for (E = 1; E < k.length; ++E) n(P, k[E].label, !1);
                                k[0].element.remove()
                            }
                            r(P, function(a, c) {
                                0 < a ? q.addOption(c) : 0 > a && q.removeOption(c)
                            })
                        }
                        var v;
                        if (!(v = s.match(d))) throw gg("iexp", s, xa(f));
                        var z = c(v[2] || v[1]),
                            A = v[4] || v[6],
                            B = / as /.test(v[0]) && v[1],
                            x = B ? c(B) :
                                null,
                            I = v[5],
                            M = c(v[3] || ""),
                            E = c(v[2] ? v[1] : A),
                            L = c(v[7]),
                            K = v[8] ? c(v[8]) : null,
                            R = {},
                            S = [
                                [{
                                    element: f,
                                    label: ""
                                }]
                            ],
                            T = {};
                        w && (a(w)(e), w.removeClass("ng-scope"), w.remove());
                        f.empty();
                        f.on("change", function() {
                            e.$apply(function() {
                                var a = L(e) || [],
                                    c;
                                if (t) c = [], r(f.val(), function(d) {
                                    d = K ? R[d] : d;
                                    c.push("?" === d ? u : "" === d ? null : h(x ? x : E, d, a[d]))
                                });
                                else {
                                    var d = K ? R[f.val()] : f.val();
                                    c = "?" === d ? u : "" === d ? null : h(x ? x : E, d, a[d])
                                }
                                g.$setViewValue(c);
                                p()
                            })
                        });
                        g.$render = p;
                        e.$watchCollection(L, k);
                        e.$watchCollection(function() {
                            var a = L(e),
                                c;
                            if (a && H(a)) {
                                c = Array(a.length);
                                for (var d = 0, f = a.length; d < f; d++) c[d] = h(z, d, a[d])
                            } else if (a)
                                for (d in c = {}, a) a.hasOwnProperty(d) && (c[d] = h(z, d, a[d]));
                            return c
                        }, k);
                        t && e.$watchCollection(function() {
                            return g.$modelValue
                        }, k)
                    }
                    if (l[1]) {
                        var q = l[0];
                        l = l[1];
                        var t = h.multiple,
                            s = h.ngOptions,
                            w = !1,
                            v, m = !1,
                            C = B(W.createElement("option")),
                            D = B(W.createElement("optgroup")),
                            z = C.clone();
                        h = 0;
                        for (var A = g.children(), x = A.length; h < x; h++)
                            if ("" === A[h].value) {
                                v = w = A.eq(h);
                                break
                            }
                        q.init(l, w, z);
                        t && (l.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        });
                        s ? p(e, g, l) : t ? n(e, g, l) : k(e, g, l, q)
                    }
                }
            }
        }],
        Yd = ["$interpolate", function(a) {
            var c = {
                addOption: A,
                removeOption: A
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(d, e) {
                    if (D(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function(a, d, e) {
                        var k = d.parent(),
                            n = k.data("$selectController") || k.parent().data("$selectController");
                        n && n.databound || (n = c);
                        f ? a.$watch(f, function(a, c) {
                            e.$set("value", a);
                            c !== a && n.removeOption(c);
                            n.addOption(a, d)
                        }) : n.addOption(e.value, d);
                        d.on("$destroy", function() {
                            n.removeOption(e.value)
                        })
                    }
                }
            }
        }],
        Xd = ea({
            restrict: "E",
            terminal: !1
        }),
        Ac = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function(a, c) {
                        return !d.required || !e.$isEmpty(c)
                    }, d.$observe("required", function() {
                        e.$validate()
                    }))
                }
            }
        },
        zc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function(a) {
                            x(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test) throw S("ngPattern")("noregexp", g, a, xa(c));
                            f =
                                a || u;
                            e.$validate()
                        });
                        e.$validators.pattern = function(a, c) {
                            return e.$isEmpty(c) || D(f) || f.test(c)
                        }
                    }
                }
            }
        },
        Cc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function(a) {
                            a = aa(a);
                            f = isNaN(a) ? -1 : a;
                            e.$validate()
                        });
                        e.$validators.maxlength = function(a, c) {
                            return 0 > f || e.$isEmpty(c) || c.length <= f
                        }
                    }
                }
            }
        },
        Bc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f = 0;
                        d.$observe("minlength", function(a) {
                            f = aa(a) || 0;
                            e.$validate()
                        });
                        e.$validators.minlength =
                            function(a, c) {
                                return e.$isEmpty(c) || c.length >= f
                            }
                    }
                }
            }
        };
    R.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ca), B(W).ready(function() {
        Jd(W, tc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */

(function(N, f, W) {
    'use strict';
    f.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
        return function(X, C, g) {
            g = g.ngAnimateChildren;
            f.isString(g) && 0 === g.length ? C.data("$$ngAnimateChildren", !0) : X.$watch(g, function(f) {
                C.data("$$ngAnimateChildren", !!f)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function(f, C) {
        return function(g) {
            return f(function() {
                g()
            })
        }
    }]).config(["$provide", "$animateProvider", function(X, C) {
        function g(f) {
            for (var n = 0; n < f.length; n++) {
                var g = f[n];
                if (1 == g.nodeType) return g
            }
        }

        function ba(f, n) {
            return g(f) == g(n)
        }
        var t = f.noop,
            n = f.forEach,
            da = C.$$selectors,
            aa = f.isArray,
            ea = f.isString,
            ga = f.isObject,
            r = {
                running: !0
            },
            u;
        X.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(O, N, M, Y, y, H, P, W, Z, Q) {
            function R(a, c) {
                var b = a.data("$$ngAnimateState") || {};
                c && (b.running = !0, b.structural = !0, a.data("$$ngAnimateState", b));
                return b.disabled || b.running && b.structural
            }

            function D(a) {
                var c, b = N.defer();
                b.promise.$$cancelFn = function() {
                    c && c()
                };
                P.$$postDigest(function() {
                    c = a(function() {
                        b.resolve()
                    })
                });
                return b.promise
            }

            function I(a) {
                if (ga(a)) return a.tempClasses && ea(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a
            }

            function S(a, c, b) {
                b = b || {};
                var d = {};
                n(b, function(e, a) {
                    n(a.split(" "), function(a) {
                        d[a] = e
                    })
                });
                var h = Object.create(null);
                n((a.attr("class") || "").split(/\s+/), function(e) {
                    h[e] = !0
                });
                var f = [],
                    l = [];
                n(c && c.classes || [], function(e, a) {
                    var b = h[a],
                        c = d[a] || {};
                    !1 === e ? (b || "addClass" == c.event) &&
                    l.push(a) : !0 === e && (b && "removeClass" != c.event || f.push(a))
                });
                return 0 < f.length + l.length && [f.join(" "), l.join(" ")]
            }

            function T(a) {
                if (a) {
                    var c = [],
                        b = {};
                    a = a.substr(1).split(".");
                    (Y.transitions || Y.animations) && c.push(M.get(da[""]));
                    for (var d = 0; d < a.length; d++) {
                        var f = a[d],
                            k = da[f];
                        k && !b[f] && (c.push(M.get(k)), b[f] = !0)
                    }
                    return c
                }
            }

            function U(a, c, b, d) {
                function h(e, a) {
                    var b = e[a],
                        c = e["before" + a.charAt(0).toUpperCase() + a.substr(1)];
                    if (b || c) return "leave" == a && (c = b, b = null), u.push({
                        event: a,
                        fn: b
                    }), J.push({
                        event: a,
                        fn: c
                    }), !0
                }

                function k(c, l, w) {
                    var E = [];
                    n(c, function(a) {
                        a.fn && E.push(a)
                    });
                    var m = 0;
                    n(E, function(c, f) {
                        var p = function() {
                            a: {
                                if (l) {
                                    (l[f] || t)();
                                    if (++m < E.length) break a;
                                    l = null
                                }
                                w()
                            }
                        };
                        switch (c.event) {
                            case "setClass":
                                l.push(c.fn(a, e, A, p, d));
                                break;
                            case "animate":
                                l.push(c.fn(a, b, d.from, d.to, p));
                                break;
                            case "addClass":
                                l.push(c.fn(a, e || b, p, d));
                                break;
                            case "removeClass":
                                l.push(c.fn(a, A || b, p, d));
                                break;
                            default:
                                l.push(c.fn(a, p, d))
                        }
                    });
                    l && 0 === l.length && w()
                }
                var l = a[0];
                if (l) {
                    d && (d.to = d.to || {}, d.from = d.from || {});
                    var e, A;
                    aa(b) && (e =
                        b[0], A = b[1], e ? A ? b = e + " " + A : (b = e, c = "addClass") : (b = A, c = "removeClass"));
                    var w = "setClass" == c,
                        E = w || "addClass" == c || "removeClass" == c || "animate" == c,
                        p = a.attr("class") + " " + b;
                    if (x(p)) {
                        var ca = t,
                            m = [],
                            J = [],
                            g = t,
                            s = [],
                            u = [],
                            p = (" " + p).replace(/\s+/g, ".");
                        n(T(p), function(a) {
                            !h(a, c) && w && (h(a, "addClass"), h(a, "removeClass"))
                        });
                        return {
                            node: l,
                            event: c,
                            className: b,
                            isClassBased: E,
                            isSetClassOperation: w,
                            applyStyles: function() {
                                d && a.css(f.extend(d.from || {}, d.to || {}))
                            },
                            before: function(a) {
                                ca = a;
                                k(J, m, function() {
                                    ca = t;
                                    a()
                                })
                            },
                            after: function(a) {
                                g =
                                    a;
                                k(u, s, function() {
                                    g = t;
                                    a()
                                })
                            },
                            cancel: function() {
                                m && (n(m, function(a) {
                                    (a || t)(!0)
                                }), ca(!0));
                                s && (n(s, function(a) {
                                    (a || t)(!0)
                                }), g(!0))
                            }
                        }
                    }
                }
            }

            function G(a, c, b, d, h, k, l, e) {
                function A(e) {
                    var l = "$animate:" + e;
                    J && J[l] && 0 < J[l].length && H(function() {
                        b.triggerHandler(l, {
                            event: a,
                            className: c
                        })
                    })
                }

                function w() {
                    A("before")
                }

                function E() {
                    A("after")
                }

                function p() {
                    p.hasBeenRun || (p.hasBeenRun = !0, k())
                }

                function g() {
                    if (!g.hasBeenRun) {
                        m && m.applyStyles();
                        g.hasBeenRun = !0;
                        l && l.tempClasses && n(l.tempClasses, function(a) {
                            u.removeClass(b,
                                a)
                        });
                        var w = b.data("$$ngAnimateState");
                        w && (m && m.isClassBased ? B(b, c) : (H(function() {
                            var e = b.data("$$ngAnimateState") || {};
                            fa == e.index && B(b, c, a)
                        }), b.data("$$ngAnimateState", w)));
                        A("close");
                        e()
                    }
                }
                var m = U(b, a, c, l);
                if (!m) return p(), w(), E(), g(), t;
                a = m.event;
                c = m.className;
                var J = f.element._data(m.node),
                    J = J && J.events;
                d || (d = h ? h.parent() : b.parent());
                if (z(b, d)) return p(), w(), E(), g(), t;
                d = b.data("$$ngAnimateState") || {};
                var L = d.active || {},
                    s = d.totalActive || 0,
                    q = d.last;
                h = !1;
                if (0 < s) {
                    s = [];
                    if (m.isClassBased) "setClass" == q.event ?
                        (s.push(q), B(b, c)) : L[c] && (v = L[c], v.event == a ? h = !0 : (s.push(v), B(b, c)));
                    else if ("leave" == a && L["ng-leave"]) h = !0;
                    else {
                        for (var v in L) s.push(L[v]);
                        d = {};
                        B(b, !0)
                    }
                    0 < s.length && n(s, function(a) {
                        a.cancel()
                    })
                }!m.isClassBased || m.isSetClassOperation || "animate" == a || h || (h = "addClass" == a == b.hasClass(c));
                if (h) return p(), w(), E(), A("close"), e(), t;
                L = d.active || {};
                s = d.totalActive || 0;
                if ("leave" == a) b.one("$destroy", function(a) {
                    a = f.element(this);
                    var e = a.data("$$ngAnimateState");
                    e && (e = e.active["ng-leave"]) && (e.cancel(), B(a, "ng-leave"))
                });
                u.addClass(b, "ng-animate");
                l && l.tempClasses && n(l.tempClasses, function(a) {
                    u.addClass(b, a)
                });
                var fa = K++;
                s++;
                L[c] = m;
                b.data("$$ngAnimateState", {
                    last: m,
                    active: L,
                    index: fa,
                    totalActive: s
                });
                w();
                m.before(function(e) {
                    var l = b.data("$$ngAnimateState");
                    e = e || !l || !l.active[c] || m.isClassBased && l.active[c].event != a;
                    p();
                    !0 === e ? g() : (E(), m.after(g))
                });
                return m.cancel
            }

            function q(a) {
                if (a = g(a)) a = f.isFunction(a.getElementsByClassName) ? a.getElementsByClassName("ng-animate") : a.querySelectorAll(".ng-animate"), n(a, function(a) {
                    a =
                        f.element(a);
                    (a = a.data("$$ngAnimateState")) && a.active && n(a.active, function(a) {
                        a.cancel()
                    })
                })
            }

            function B(a, c) {
                if (ba(a, y)) r.disabled || (r.running = !1, r.structural = !1);
                else if (c) {
                    var b = a.data("$$ngAnimateState") || {},
                        d = !0 === c;
                    !d && b.active && b.active[c] && (b.totalActive--, delete b.active[c]);
                    if (d || !b.totalActive) u.removeClass(a, "ng-animate"), a.removeData("$$ngAnimateState")
                }
            }

            function z(a, c) {
                if (r.disabled) return !0;
                if (ba(a, y)) return r.running;
                var b, d, g;
                do {
                    if (0 === c.length) break;
                    var k = ba(c, y),
                        l = k ? r : c.data("$$ngAnimateState") || {};
                    if (l.disabled) return !0;
                    k && (g = !0);
                    !1 !== b && (k = c.data("$$ngAnimateChildren"), f.isDefined(k) && (b = k));
                    d = d || l.running || l.last && !l.last.isClassBased
                } while (c = c.parent());
                return !g || !b && d
            }
            u = Q;
            y.data("$$ngAnimateState", r);
            var $ = P.$watch(function() {
                    return Z.totalPendingRequests
                }, function(a, c) {
                    0 === a && ($(), P.$$postDigest(function() {
                        P.$$postDigest(function() {
                            r.running = !1
                        })
                    }))
                }),
                K = 0,
                V = C.classNameFilter(),
                x = V ? function(a) {
                    return V.test(a)
                } : function() {
                    return !0
                };
            return {
                animate: function(a, c, b, d, h) {
                    d = d || "ng-inline-animate";
                    h = I(h) || {};
                    h.from = b ? c : null;
                    h.to = b ? b : c;
                    return D(function(b) {
                        return G("animate", d, f.element(g(a)), null, null, t, h, b)
                    })
                },
                enter: function(a, c, b, d) {
                    d = I(d);
                    a = f.element(a);
                    c = c && f.element(c);
                    b = b && f.element(b);
                    R(a, !0);
                    O.enter(a, c, b);
                    return D(function(h) {
                        return G("enter", "ng-enter", f.element(g(a)), c, b, t, d, h)
                    })
                },
                leave: function(a, c) {
                    c = I(c);
                    a = f.element(a);
                    q(a);
                    R(a, !0);
                    return D(function(b) {
                        return G("leave", "ng-leave", f.element(g(a)), null, null, function() {
                            O.leave(a)
                        }, c, b)
                    })
                },
                move: function(a, c, b, d) {
                    d = I(d);
                    a = f.element(a);
                    c = c && f.element(c);
                    b = b && f.element(b);
                    q(a);
                    R(a, !0);
                    O.move(a, c, b);
                    return D(function(h) {
                        return G("move", "ng-move", f.element(g(a)), c, b, t, d, h)
                    })
                },
                addClass: function(a, c, b) {
                    return this.setClass(a, c, [], b)
                },
                removeClass: function(a, c, b) {
                    return this.setClass(a, [], c, b)
                },
                setClass: function(a, c, b, d) {
                    d = I(d);
                    a = f.element(a);
                    a = f.element(g(a));
                    if (R(a)) return O.$$setClassImmediately(a, c, b, d);
                    var h, k = a.data("$$animateClasses"),
                        l = !!k;
                    k || (k = {
                        classes: {}
                    });
                    h = k.classes;
                    c = aa(c) ? c : c.split(" ");
                    n(c, function(a) {
                        a && a.length && (h[a] = !0)
                    });
                    b = aa(b) ? b : b.split(" ");
                    n(b, function(a) {
                        a && a.length && (h[a] = !1)
                    });
                    if (l) return d && k.options && (k.options = f.extend(k.options || {}, d)), k.promise;
                    a.data("$$animateClasses", k = {
                        classes: h,
                        options: d
                    });
                    return k.promise = D(function(e) {
                        var l = a.parent(),
                            b = g(a),
                            c = b.parentNode;
                        if (!c || c.$$NG_REMOVED || b.$$NG_REMOVED) e();
                        else {
                            b = a.data("$$animateClasses");
                            a.removeData("$$animateClasses");
                            var c = a.data("$$ngAnimateState") || {},
                                d = S(a, b, c.active);
                            return d ? G("setClass", d, a, l, null, function() {
                                d[0] && O.$$addClassImmediately(a,
                                    d[0]);
                                d[1] && O.$$removeClassImmediately(a, d[1])
                            }, b.options, e) : e()
                        }
                    })
                },
                cancel: function(a) {
                    a.$$cancelFn()
                },
                enabled: function(a, c) {
                    switch (arguments.length) {
                        case 2:
                            if (a) B(c);
                            else {
                                var b = c.data("$$ngAnimateState") || {};
                                b.disabled = !0;
                                c.data("$$ngAnimateState", b)
                            }
                            break;
                        case 1:
                            r.disabled = !a;
                            break;
                        default:
                            a = !r.disabled
                    }
                    return !!a
                }
            }
        }]);
        C.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(r, C, M, Y) {
            function y() {
                b || (b = Y(function() {
                    c = [];
                    b = null;
                    x = {}
                }))
            }

            function H(a, e) {
                b && b();
                c.push(e);
                b = Y(function() {
                    n(c,
                        function(a) {
                            a()
                        });
                    c = [];
                    b = null;
                    x = {}
                })
            }

            function P(a, e) {
                var b = g(a);
                a = f.element(b);
                k.push(a);
                b = Date.now() + e;
                b <= h || (M.cancel(d), h = b, d = M(function() {
                    X(k);
                    k = []
                }, e, !1))
            }

            function X(a) {
                n(a, function(a) {
                    (a = a.data("$$ngAnimateCSS3Data")) && n(a.closeAnimationFns, function(a) {
                        a()
                    })
                })
            }

            function Z(a, e) {
                var b = e ? x[e] : null;
                if (!b) {
                    var c = 0,
                        d = 0,
                        f = 0,
                        g = 0;
                    n(a, function(a) {
                        if (1 == a.nodeType) {
                            a = r.getComputedStyle(a) || {};
                            c = Math.max(Q(a[z + "Duration"]), c);
                            d = Math.max(Q(a[z + "Delay"]), d);
                            g = Math.max(Q(a[K + "Delay"]), g);
                            var e = Q(a[K + "Duration"]);
                            0 < e && (e *= parseInt(a[K + "IterationCount"], 10) || 1);
                            f = Math.max(e, f)
                        }
                    });
                    b = {
                        total: 0,
                        transitionDelay: d,
                        transitionDuration: c,
                        animationDelay: g,
                        animationDuration: f
                    };
                    e && (x[e] = b)
                }
                return b
            }

            function Q(a) {
                var e = 0;
                a = ea(a) ? a.split(/\s*,\s*/) : [];
                n(a, function(a) {
                    e = Math.max(parseFloat(a) || 0, e)
                });
                return e
            }

            function R(b, e, c, d) {
                b = 0 <= ["ng-enter", "ng-leave", "ng-move"].indexOf(c);
                var f, p = e.parent(),
                    h = p.data("$$ngAnimateKey");
                h || (p.data("$$ngAnimateKey", ++a), h = a);
                f = h + "-" + g(e).getAttribute("class");
                var p = f + " " + c,
                    h = x[p] ? ++x[p].total :
                        0,
                    m = {};
                if (0 < h) {
                    var n = c + "-stagger",
                        m = f + " " + n;
                    (f = !x[m]) && u.addClass(e, n);
                    m = Z(e, m);
                    f && u.removeClass(e, n)
                }
                u.addClass(e, c);
                var n = e.data("$$ngAnimateCSS3Data") || {},
                    k = Z(e, p);
                f = k.transitionDuration;
                k = k.animationDuration;
                if (b && 0 === f && 0 === k) return u.removeClass(e, c), !1;
                c = d || b && 0 < f;
                b = 0 < k && 0 < m.animationDelay && 0 === m.animationDuration;
                e.data("$$ngAnimateCSS3Data", {
                    stagger: m,
                    cacheKey: p,
                    running: n.running || 0,
                    itemIndex: h,
                    blockTransition: c,
                    closeAnimationFns: n.closeAnimationFns || []
                });
                p = g(e);
                c && (I(p, !0), d && e.css(d));
                b && (p.style[K + "PlayState"] = "paused");
                return !0
            }

            function D(a, e, b, c, d) {
                function f() {
                    e.off(D, h);
                    u.removeClass(e, k);
                    u.removeClass(e, t);
                    z && M.cancel(z);
                    G(e, b);
                    var a = g(e),
                        c;
                    for (c in s) a.style.removeProperty(s[c])
                }

                function h(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a;
                    a = b.$manualTimeStamp || b.timeStamp || Date.now();
                    b = parseFloat(b.elapsedTime.toFixed(3));
                    Math.max(a - H, 0) >= C && b >= x && c()
                }
                var m = g(e);
                a = e.data("$$ngAnimateCSS3Data");
                if (-1 != m.getAttribute("class").indexOf(b) && a) {
                    var k = "",
                        t = "";
                    n(b.split(" "), function(a,
                                             b) {
                        var e = (0 < b ? " " : "") + a;
                        k += e + "-active";
                        t += e + "-pending"
                    });
                    var s = [],
                        q = a.itemIndex,
                        v = a.stagger,
                        r = 0;
                    if (0 < q) {
                        r = 0;
                        0 < v.transitionDelay && 0 === v.transitionDuration && (r = v.transitionDelay * q);
                        var y = 0;
                        0 < v.animationDelay && 0 === v.animationDuration && (y = v.animationDelay * q, s.push(B + "animation-play-state"));
                        r = Math.round(100 * Math.max(r, y)) / 100
                    }
                    r || (u.addClass(e, k), a.blockTransition && I(m, !1));
                    var F = Z(e, a.cacheKey + " " + k),
                        x = Math.max(F.transitionDuration, F.animationDuration);
                    if (0 === x) u.removeClass(e, k), G(e, b), c();
                    else {
                        !r &&
                        d && 0 < Object.keys(d).length && (F.transitionDuration || (e.css("transition", F.animationDuration + "s linear all"), s.push("transition")), e.css(d));
                        var q = Math.max(F.transitionDelay, F.animationDelay),
                            C = 1E3 * q;
                        0 < s.length && (v = m.getAttribute("style") || "", ";" !== v.charAt(v.length - 1) && (v += ";"), m.setAttribute("style", v + " "));
                        var H = Date.now(),
                            D = V + " " + $,
                            q = 1E3 * (r + 1.5 * (q + x)),
                            z;
                        0 < r && (u.addClass(e, t), z = M(function() {
                            z = null;
                            0 < F.transitionDuration && I(m, !1);
                            0 < F.animationDuration && (m.style[K + "PlayState"] = "");
                            u.addClass(e, k);
                            u.removeClass(e, t);
                            d && (0 === F.transitionDuration && e.css("transition", F.animationDuration + "s linear all"), e.css(d), s.push("transition"))
                        }, 1E3 * r, !1));
                        e.on(D, h);
                        a.closeAnimationFns.push(function() {
                            f();
                            c()
                        });
                        a.running++;
                        P(e, q);
                        return f
                    }
                } else c()
            }

            function I(a, b) {
                a.style[z + "Property"] = b ? "none" : ""
            }

            function S(a, b, c, d) {
                if (R(a, b, c, d)) return function(a) {
                    a && G(b, c)
                }
            }

            function T(a, b, c, d, f) {
                if (b.data("$$ngAnimateCSS3Data")) return D(a, b, c, d, f);
                G(b, c);
                d()
            }

            function U(a, b, c, d, f) {
                var g = S(a, b, c, f.from);
                if (g) {
                    var h = g;
                    H(b,
                        function() {
                            h = T(a, b, c, d, f.to)
                        });
                    return function(a) {
                        (h || t)(a)
                    }
                }
                y();
                d()
            }

            function G(a, b) {
                u.removeClass(a, b);
                var c = a.data("$$ngAnimateCSS3Data");
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData("$$ngAnimateCSS3Data"))
            }

            function q(a, b) {
                var c = "";
                a = aa(a) ? a : a.split(/\s+/);
                n(a, function(a, d) {
                    a && 0 < a.length && (c += (0 < d ? " " : "") + a + b)
                });
                return c
            }
            var B = "",
                z, $, K, V;
            N.ontransitionend === W && N.onwebkittransitionend !== W ? (B = "-webkit-", z = "WebkitTransition", $ = "webkitTransitionEnd transitionend") : (z = "transition",
                $ = "transitionend");
            N.onanimationend === W && N.onwebkitanimationend !== W ? (B = "-webkit-", K = "WebkitAnimation", V = "webkitAnimationEnd animationend") : (K = "animation", V = "animationend");
            var x = {},
                a = 0,
                c = [],
                b, d = null,
                h = 0,
                k = [];
            return {
                animate: function(a, b, c, d, f, g) {
                    g = g || {};
                    g.from = c;
                    g.to = d;
                    return U("animate", a, b, f, g)
                },
                enter: function(a, b, c) {
                    c = c || {};
                    return U("enter", a, "ng-enter", b, c)
                },
                leave: function(a, b, c) {
                    c = c || {};
                    return U("leave", a, "ng-leave", b, c)
                },
                move: function(a, b, c) {
                    c = c || {};
                    return U("move", a, "ng-move", b, c)
                },
                beforeSetClass: function(a,
                                         b, c, d, f) {
                    f = f || {};
                    b = q(c, "-remove") + " " + q(b, "-add");
                    if (f = S("setClass", a, b, f.from)) return H(a, d), f;
                    y();
                    d()
                },
                beforeAddClass: function(a, b, c, d) {
                    d = d || {};
                    if (b = S("addClass", a, q(b, "-add"), d.from)) return H(a, c), b;
                    y();
                    c()
                },
                beforeRemoveClass: function(a, b, c, d) {
                    d = d || {};
                    if (b = S("removeClass", a, q(b, "-remove"), d.from)) return H(a, c), b;
                    y();
                    c()
                },
                setClass: function(a, b, c, d, f) {
                    f = f || {};
                    c = q(c, "-remove");
                    b = q(b, "-add");
                    return T("setClass", a, c + " " + b, d, f.to)
                },
                addClass: function(a, b, c, d) {
                    d = d || {};
                    return T("addClass", a, q(b, "-add"),
                        c, d.to)
                },
                removeClass: function(a, b, c, d) {
                    d = d || {};
                    return T("removeClass", a, q(b, "-remove"), c, d.to)
                }
            }
        }])
    }])
})(window, window.angular);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.13.0 - 2015-05-02
 * License: MIT
 */

angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.transition", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-popup.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/tooltip/tooltip-template-popup.html", "template/popover/popover-template.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("collapse", ["$animate", function(a) {
    return {
        link: function(b, c, d) {
            function e() {
                c.removeClass("collapse").addClass("collapsing"), a.addClass(c, "in", {
                    to: {
                        height: c[0].scrollHeight + "px"
                    }
                }).then(f)
            }

            function f() {
                c.removeClass("collapsing"), c.css({
                    height: "auto"
                })
            }

            function g() {
                c.css({
                    height: c[0].scrollHeight + "px"
                }).removeClass("collapse").addClass("collapsing"), a.removeClass(c, "in", {
                    to: {
                        height: "0"
                    }
                }).then(h)
            }

            function h() {
                c.css({
                    height: "0"
                }), c.removeClass("collapsing"), c.addClass("collapse")
            }
            b.$watch(d.collapse, function(a) {
                a ? g() : e()
            })
        }
    }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function(a) {
            a !== d && (a.isOpen = !1)
        })
    }, this.addGroup = function(a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function() {
            b.removeGroup(a)
        })
    }, this.removeGroup = function(a) {
        var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
    }
}]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function() {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a
            }
        },
        link: function(a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function(b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function() {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }
    }
}).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function(a, b, c, d, e) {
            d.setHeading(e(a, angular.noop))
        }
    }
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
    a.closeable = "close" in b, this.close = a.close
}]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    }
}).directive("dismissOnTimeout", ["$timeout", function(a) {
    return {
        require: "alert",
        link: function(b, c, d, e) {
            a(function() {
                e.close()
            }, parseInt(d.dismissOnTimeout, 10))
        }
    }
}]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function(a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function() {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function() {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function() {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0],
                i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", []).controller("CarouselController", ["$scope", "$interval", "$animate", function(a, b, c) {
    function d(a) {
        if (angular.isUndefined(k[a].index)) return k[a]; {
            var b;
            k.length
        }
        for (b = 0; b < k.length; ++b)
            if (k[b].index == a) return k[b]
    }

    function e() {
        f();
        var c = +a.interval;
        !isNaN(c) && c > 0 && (h = b(g, c))
    }

    function f() {
        h && (b.cancel(h), h = null)
    }

    function g() {
        var b = +a.interval;
        i && !isNaN(b) && b > 0 ? a.next() : a.pause()
    }
    var h, i, j = this,
        k = j.slides = a.slides = [],
        l = -1;
    j.currentSlide = null;
    var m = !1;
    j.select = a.select = function(b, d) {
        function f() {
            m || (angular.extend(b, {
                direction: d,
                active: !0
            }), angular.extend(j.currentSlide || {}, {
                direction: d,
                active: !1
            }), c.enabled() && !a.noTransition && b.$element && (a.$currentTransition = !0, b.$element.one("$animate:close", function() {
                a.$currentTransition = null
            })), j.currentSlide = b, l = g, e())
        }
        var g = j.indexOfSlide(b);
        void 0 === d && (d = g > j.getCurrentIndex() ? "next" : "prev"), b && b !== j.currentSlide && f()
    }, a.$on("$destroy", function() {
        m = !0
    }), j.getCurrentIndex = function() {
        return j.currentSlide && angular.isDefined(j.currentSlide.index) ? +j.currentSlide.index : l
    }, j.indexOfSlide = function(a) {
        return angular.isDefined(a.index) ? +a.index : k.indexOf(a)
    }, a.next = function() {
        var b = (j.getCurrentIndex() + 1) % k.length;
        return a.$currentTransition ? void 0 : j.select(d(b), "next")
    }, a.prev = function() {
        var b = j.getCurrentIndex() - 1 < 0 ? k.length - 1 : j.getCurrentIndex() - 1;
        return a.$currentTransition ? void 0 : j.select(d(b), "prev")
    }, a.isActive = function(a) {
        return j.currentSlide === a
    }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
        i || (i = !0, e())
    }, a.pause = function() {
        a.noPause || (i = !1, f())
    }, j.addSlide = function(b, c) {
        b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
    }, j.removeSlide = function(a) {
        angular.isDefined(a.index) && k.sort(function(a, b) {
            return +a.index > +b.index
        });
        var b = k.indexOf(a);
        k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
    }
}]).directive("carousel", [function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        require: "carousel",
        templateUrl: "template/carousel/carousel.html",
        scope: {
            interval: "=",
            noTransition: "=",
            noPause: "="
        }
    }
}]).directive("slide", function() {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?",
            index: "=?"
        },
        link: function(a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function() {
                d.removeSlide(a)
            }), a.$watch("active", function(b) {
                b && d.select(a)
            })
        }
    }
}).animation(".item", ["$animate", function(a) {
    return {
        beforeAddClass: function(b, c, d) {
            if ("active" == c && b.parent() && !b.parent().scope().noTransition) {
                var e = !1,
                    f = b.isolateScope().direction,
                    g = "next" == f ? "left" : "right";
                return b.addClass(f), a.addClass(b, g).then(function() {
                    e || b.removeClass(g + " " + f), d()
                }),
                    function() {
                        e = !0
                    }
            }
            d()
        },
        beforeRemoveClass: function(b, c, d) {
            if ("active" == c && b.parent() && !b.parent().scope().noTransition) {
                var e = !1,
                    f = b.isolateScope().direction,
                    g = "next" == f ? "left" : "right";
                return a.addClass(b, g).then(function() {
                    e || b.removeClass(g), d()
                }),
                    function() {
                        e = !0
                    }
            }
            d()
        }
    }
}]), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
    function c(a) {
        var c = [],
            d = a.split("");
        return angular.forEach(f, function(b, e) {
            var f = a.indexOf(e);
            if (f > -1) {
                a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                a = a.join(""), c.push({
                    index: f,
                    apply: b.apply
                })
            }
        }), {
            regex: new RegExp("^" + d.join("") + "$"),
            map: b(c, "index")
        }
    }

    function d(a, b, c) {
        return 1 > c ? !1 : 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
    }
    var e = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    this.parsers = {};
    var f = {
        yyyy: {
            regex: "\\d{4}",
            apply: function(a) {
                this.year = +a
            }
        },
        yy: {
            regex: "\\d{2}",
            apply: function(a) {
                this.year = +a + 2e3
            }
        },
        y: {
            regex: "\\d{1,4}",
            apply: function(a) {
                this.year = +a
            }
        },
        MMMM: {
            regex: a.DATETIME_FORMATS.MONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
            }
        },
        MMM: {
            regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
            }
        },
        MM: {
            regex: "0[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        M: {
            regex: "[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        dd: {
            regex: "[0-2][0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        d: {
            regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        EEEE: {
            regex: a.DATETIME_FORMATS.DAY.join("|")
        },
        EEE: {
            regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
        },
        HH: {
            regex: "(?:0|1)[0-9]|2[0-3]",
            apply: function(a) {
                this.hours = +a
            }
        },
        H: {
            regex: "1?[0-9]|2[0-3]",
            apply: function(a) {
                this.hours = +a
            }
        },
        mm: {
            regex: "[0-5][0-9]",
            apply: function(a) {
                this.minutes = +a
            }
        },
        m: {
            regex: "[0-9]|[1-5][0-9]",
            apply: function(a) {
                this.minutes = +a
            }
        },
        sss: {
            regex: "[0-9][0-9][0-9]",
            apply: function(a) {
                this.milliseconds = +a
            }
        },
        ss: {
            regex: "[0-5][0-9]",
            apply: function(a) {
                this.seconds = +a
            }
        },
        s: {
            regex: "[0-9]|[1-5][0-9]",
            apply: function(a) {
                this.seconds = +a
            }
        }
    };
    this.parse = function(b, f, g) {
        if (!angular.isString(b) || !f) return b;
        f = a.DATETIME_FORMATS[f] || f, f = f.replace(e, "\\$&"), this.parsers[f] || (this.parsers[f] = c(f));
        var h = this.parsers[f],
            i = h.regex,
            j = h.map,
            k = b.match(i);
        if (k && k.length) {
            var l, m;
            l = g ? {
                year: g.getFullYear(),
                month: g.getMonth(),
                date: g.getDate(),
                hours: g.getHours(),
                minutes: g.getMinutes(),
                seconds: g.getSeconds(),
                milliseconds: g.getMilliseconds()
            } : {
                year: 1900,
                month: 0,
                date: 1,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            };
            for (var n = 1, o = k.length; o > n; n++) {
                var p = j[n - 1];
                p.apply && p.apply.call(l, k[n])
            }
            return d(l.year, l.month, l.date) && (m = new Date(l.year, l.month, l.date, l.hours, l.minutes, l.seconds, l.milliseconds || 0)), m
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
        return "static" === (c(a, "position") || "static")
    }
    var e = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
        return e || c
    };
    return {
        position: function(b) {
            var c = this.offset(b),
                d = {
                    top: 0,
                    left: 0
                },
                f = e(b[0]);
            f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
            var g = b[0].getBoundingClientRect();
            return {
                width: g.width || b.prop("offsetWidth"),
                height: g.height || b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: d.width || c.prop("offsetWidth"),
                height: d.height || c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
            }
        },
        positionElements: function(a, b, c, d) {
            var e, f, g, h, i = c.split("-"),
                j = i[0],
                k = i[1] || "center";
            e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
            var l = {
                    center: function() {
                        return e.left + e.width / 2 - f / 2
                    },
                    left: function() {
                        return e.left
                    },
                    right: function() {
                        return e.left + e.width
                    }
                },
                m = {
                    center: function() {
                        return e.top + e.height / 2 - g / 2
                    },
                    top: function() {
                        return e.top
                    },
                    bottom: function() {
                        return e.top + e.height
                    }
                };
            switch (j) {
                case "right":
                    h = {
                        top: m[k](),
                        left: l[j]()
                    };
                    break;
                case "left":
                    h = {
                        top: m[k](),
                        left: e.left - f
                    };
                    break;
                case "bottom":
                    h = {
                        top: m[j](),
                        left: l[k]()
                    };
                    break;
                default:
                    h = {
                        top: e.top - g,
                        left: l[k]()
                    }
            }
            return h
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null,
    shortcutPropagation: !1
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
    var i = this,
        j = {
            $setViewValue: angular.noop
        };
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function(c, e) {
        i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
    }), angular.forEach(["minDate", "maxDate"], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(a) {
            i[d] = a ? new Date(a) : null, i.refreshView()
        }) : i[d] = h[d] ? new Date(h[d]) : null
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.maxMode = i.maxMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(b.initDate) ? (this.activeDate = a.$parent.$eval(b.initDate) || new Date, a.$parent.$watch(b.initDate, function(a) {
        a && (j.$isEmpty(j.$modelValue) || j.$invalid) && (i.activeDate = a, i.refreshView())
    })) : this.activeDate = new Date, a.isActive = function(b) {
        return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function(a) {
        j = a, j.$render = function() {
            i.render()
        }
    }, this.render = function() {
        if (j.$viewValue) {
            var a = new Date(j.$viewValue),
                b = !isNaN(a);
            b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
        }
        this.refreshView()
    }, this.refreshView = function() {
        if (this.element) {
            this._refreshView();
            var a = j.$viewValue ? new Date(j.$viewValue) : null;
            j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
        }
    }, this.createDateObject = function(a, b) {
        var c = j.$viewValue ? new Date(j.$viewValue) : null;
        return {
            date: a,
            label: g(a, b),
            selected: c && 0 === this.compare(a, c),
            disabled: this.isDisabled(a),
            current: 0 === this.compare(a, new Date),
            customClass: this.customClass(a)
        }
    }, this.isDisabled = function(c) {
        return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
                date: c,
                mode: a.datepickerMode
            })
    }, this.customClass = function(b) {
        return a.customClass({
            date: b,
            mode: a.datepickerMode
        })
    }, this.split = function(a, b) {
        for (var c = []; a.length > 0;) c.push(a.splice(0, b));
        return c
    }, a.select = function(b) {
        if (a.datepickerMode === i.minMode) {
            var c = j.$viewValue ? new Date(j.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
        } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function(a) {
        var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
            c = i.activeDate.getMonth() + a * (i.step.months || 0);
        i.activeDate.setFullYear(b, c, 1), i.refreshView()
    }, a.toggleMode = function(b) {
        b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var k = function() {
        e(function() {
            i.element[0].focus()
        }, 0, !1)
    };
    a.$on("datepicker.focus", k), a.keydown = function(b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey)
            if (b.preventDefault(), i.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
                if (i.isDisabled(i.activeDate)) return;
                a.select(i.activeDate), k()
            } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
    }
}]).directive("datepicker", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&",
            customClass: "&",
            shortcutPropagation: "&?"
        },
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}).directive("daypicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            function f(a, b) {
                return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
            }

            function g(a, b) {
                var c = new Array(b),
                    d = new Date(a),
                    e = 0;
                for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                return c
            }

            function h(a) {
                var b = new Date(a);
                b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                var c = b.getTime();
                return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
            }
            b.showWeeks = e.showWeeks, e.step = {
                months: 1
            }, e.element = c;
            var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            e._refreshView = function() {
                var c = e.activeDate.getFullYear(),
                    d = e.activeDate.getMonth(),
                    f = new Date(c, d, 1),
                    i = e.startingDay - f.getDay(),
                    j = i > 0 ? 7 - i : -i,
                    k = new Date(f);
                j > 0 && k.setDate(-j + 1);
                for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                    secondary: l[m].getMonth() !== d,
                    uid: b.uniqueId + "-" + m
                });
                b.labels = new Array(7);
                for (var n = 0; 7 > n; n++) b.labels[n] = {
                    abbr: a(l[n].date, e.formatDayHeader),
                    full: a(l[n].date, "EEEE")
                };
                if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                    b.weekNumbers = [];
                    for (var o = (11 - e.startingDay) % 7, p = b.rows.length, q = 0; p > q; q++) b.weekNumbers.push(h(b.rows[q][o].date))
                }
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
            }, e.handleKeyDown = function(a) {
                var b = e.activeDate.getDate();
                if ("left" === a) b -= 1;
                else if ("up" === a) b -= 7;
                else if ("right" === a) b += 1;
                else if ("down" === a) b += 7;
                else if ("pageup" === a || "pagedown" === a) {
                    var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                } else "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                e.activeDate.setDate(b)
            }, e.refreshView()
        }
    }
}]).directive("monthpicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            e.step = {
                years: 1
            }, e.element = c, e._refreshView = function() {
                for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                    uid: b.uniqueId + "-" + f
                });
                b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
            }, e.handleKeyDown = function(a) {
                var b = e.activeDate.getMonth();
                if ("left" === a) b -= 1;
                else if ("up" === a) b -= 3;
                else if ("right" === a) b += 1;
                else if ("down" === a) b += 3;
                else if ("pageup" === a || "pagedown" === a) {
                    var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setFullYear(c)
                } else "home" === a ? b = 0 : "end" === a && (b = 11);
                e.activeDate.setMonth(b)
            }, e.refreshView()
        }
    }
}]).directive("yearpicker", ["dateFilter", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: "^datepicker",
        link: function(a, b, c, d) {
            function e(a) {
                return parseInt((a - 1) / f, 10) * f + 1
            }
            var f = d.yearRange;
            d.step = {
                years: f
            }, d.element = b, d._refreshView = function() {
                for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                    uid: a.uniqueId + "-" + c
                });
                a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
            }, d.compare = function(a, b) {
                return a.getFullYear() - b.getFullYear()
            }, d.handleKeyDown = function(a) {
                var b = d.activeDate.getFullYear();
                "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
            }, d.refreshView()
        }
    }
}]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    html5Types: {
        date: "yyyy-MM-dd",
        "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
        month: "yyyy-MM"
    },
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
    return {
        restrict: "EA",
        require: "ngModel",
        scope: {
            isOpen: "=?",
            currentText: "@",
            clearText: "@",
            closeText: "@",
            dateDisabled: "&",
            customClass: "&"
        },
        link: function(h, i, j, k) {
            function l(a) {
                return a.replace(/([A-Z])/g, function(a) {
                    return "-" + a.toLowerCase()
                })
            }

            function m(a) {
                if (angular.isNumber(a) && (a = new Date(a)), a) {
                    if (angular.isDate(a) && !isNaN(a)) return a;
                    if (angular.isString(a)) {
                        var b = f.parse(a, o, h.date) || new Date(a);
                        return isNaN(b) ? void 0 : b
                    }
                    return void 0
                }
                return null
            }

            function n(a, b) {
                var c = a || b;
                if (angular.isNumber(c) && (c = new Date(c)), c) {
                    if (angular.isDate(c) && !isNaN(c)) return !0;
                    if (angular.isString(c)) {
                        var d = f.parse(c, o) || new Date(c);
                        return !isNaN(d)
                    }
                    return !1
                }
                return !0
            }
            var o, p = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                q = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
            h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                return h[a + "Text"] || g[a + "Text"]
            };
            var r = !1;
            if (g.html5Types[j.type] ? (o = g.html5Types[j.type], r = !0) : (o = j.datepickerPopup || g.datepickerPopup, j.$observe("datepickerPopup", function(a) {
                    var b = a || g.datepickerPopup;
                    if (b !== o && (o = b, k.$modelValue = null, !o)) throw new Error("datepickerPopup must have a date format specified.")
                })), !o) throw new Error("datepickerPopup must have a date format specified.");
            if (r && j.datepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
            var s = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
            s.attr({
                "ng-model": "date",
                "ng-change": "dateSelection()"
            });
            var t = angular.element(s.children()[0]);
            if (r && "month" == j.type && (t.attr("datepicker-mode", '"month"'), t.attr("min-mode", "month")), j.datepickerOptions) {
                var u = h.$parent.$eval(j.datepickerOptions);
                u.initDate && (h.initDate = u.initDate, t.attr("init-date", "initDate"), delete u.initDate), angular.forEach(u, function(a, b) {
                    t.attr(l(b), a)
                })
            }
            h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation"], function(a) {
                if (j[a]) {
                    var c = b(j[a]);
                    if (h.$parent.$watch(c, function(b) {
                            h.watchData[a] = b
                        }), t.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                        var d = c.assign;
                        h.$watch("watchData." + a, function(a, b) {
                            a !== b && d(h.$parent, a)
                        })
                    }
                }
            }), j.dateDisabled && t.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), j.showWeeks && t.attr("show-weeks", j.showWeeks), j.customClass && t.attr("custom-class", "customClass({ date: date, mode: mode })"), r ? k.$formatters.push(function(a) {
                return h.date = a, a
            }) : (k.$$parserName = "date", k.$validators.date = n, k.$parsers.unshift(m), k.$formatters.push(function(a) {
                return h.date = a, k.$isEmpty(a) ? a : e(a, o)
            })), h.dateSelection = function(a) {
                angular.isDefined(a) && (h.date = a);
                var b = h.date ? e(h.date, o) : "";
                i.val(b), k.$setViewValue(b), p && (h.isOpen = !1, i[0].focus())
            }, k.$viewChangeListeners.push(function() {
                h.date = f.parse(k.$viewValue, o, h.date) || new Date(k.$viewValue)
            });
            var v = function(a) {
                    h.isOpen && a.target !== i[0] && h.$apply(function() {
                        h.isOpen = !1
                    })
                },
                w = function(a) {
                    h.keydown(a)
                };
            i.bind("keydown", w), h.keydown = function(a) {
                27 === a.which ? (a.preventDefault(), h.isOpen && a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
            }, h.$watch("isOpen", function(a) {
                a ? (h.$broadcast("datepicker.focus"), h.position = q ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", v)) : c.unbind("click", v)
            }), h.select = function(a) {
                if ("today" === a) {
                    var b = new Date;
                    angular.isDate(h.date) ? (a = new Date(h.date), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                }
                h.dateSelection(a)
            }, h.close = function() {
                h.isOpen = !1, i[0].focus()
            };
            var x = a(s)(h);
            s.remove(), q ? c.find("body").append(x) : i.after(x), h.$on("$destroy", function() {
                x.remove(), i.unbind("keydown", w), c.unbind("click", v)
            })
        }
    }
}]).directive("datepickerPopupWrap", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function(a, b) {
            b.bind("click", function(a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", ["$document", "$rootScope", function(a, b) {
    var c = null;
    this.open = function(b) {
        c || (a.bind("click", d), a.bind("keydown", e)), c && c !== b && (c.isOpen = !1), c = b
    }, this.close = function(b) {
        c === b && (c = null, a.unbind("click", d), a.unbind("keydown", e))
    };
    var d = function(a) {
            if (c && (!a || "disabled" !== c.getAutoClose())) {
                var d = c.getToggleElement();
                if (!(a && d && d[0].contains(a.target))) {
                    var e = c.getElement();
                    a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.isOpen = !1, b.$$phase || c.$apply())
                }
            }
        },
        e = function(a) {
            27 === a.which && (c.focusToggleElement(), d())
        }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", "$position", "$document", function(a, b, c, d, e, f, g, h) {
    var i, j = this,
        k = a.$new(),
        l = d.openClass,
        m = angular.noop,
        n = b.onToggle ? c(b.onToggle) : angular.noop,
        o = !1;
    this.init = function(d) {
        j.$element = d, b.isOpen && (i = c(b.isOpen), m = i.assign, a.$watch(i, function(a) {
            k.isOpen = !!a
        })), o = angular.isDefined(b.dropdownAppendToBody), o && j.dropdownMenu && (h.find("body").append(j.dropdownMenu), d.on("$destroy", function() {
            j.dropdownMenu.remove()
        }))
    }, this.toggle = function(a) {
        return k.isOpen = arguments.length ? !!a : !k.isOpen
    }, this.isOpen = function() {
        return k.isOpen
    }, k.getToggleElement = function() {
        return j.toggleElement
    }, k.getAutoClose = function() {
        return b.autoClose || "always"
    }, k.getElement = function() {
        return j.$element
    }, k.focusToggleElement = function() {
        j.toggleElement && j.toggleElement[0].focus()
    }, k.$watch("isOpen", function(b, c) {
        if (o && j.dropdownMenu) {
            var d = g.positionElements(j.$element, j.dropdownMenu, "bottom-left", !0);
            j.dropdownMenu.css({
                top: d.top + "px",
                left: d.left + "px",
                display: b ? "block" : "none"
            })
        }
        f[b ? "addClass" : "removeClass"](j.$element, l), b ? (k.focusToggleElement(), e.open(k)) : e.close(k), m(a, b), angular.isDefined(b) && b !== c && n(a, {
            open: !!b
        })
    }), a.$on("$locationChangeSuccess", function() {
        k.isOpen = !1
    }), a.$on("$destroy", function() {
        k.$destroy()
    })
}]).directive("dropdown", function() {
    return {
        controller: "DropdownController",
        link: function(a, b, c, d) {
            d.init(b)
        }
    }
}).directive("dropdownMenu", function() {
    return {
        restrict: "AC",
        require: "?^dropdown",
        link: function(a, b, c, d) {
            d && (d.dropdownMenu = b)
        }
    }
}).directive("dropdownToggle", function() {
    return {
        require: "?^dropdown",
        link: function(a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function(e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function(a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function() {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", []).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                },
                top: function() {
                    return a[a.length - 1]
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0]
                },
                length: function() {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout", function(a) {
    function b(b) {
        b.animate = !1, a(function() {
            b.animate = !0
        })
    }
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        compile: function(a, c) {
            return a.addClass(c.backdropClass), b
        }
    }
}]).directive("modalWindow", ["$modalStack", "$q", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            index: "@",
            animate: "="
        },
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/modal/window.html"
        },
        link: function(c, d, e) {
            d.addClass(e.windowClass || ""), c.size = e.size, c.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
            }, c.$isRendered = !0;
            var f = b.defer();
            e.$observe("modalRender", function(a) {
                "true" == a && f.resolve()
            }), f.promise.then(function() {
                c.animate = !0;
                var b = d[0].querySelectorAll("[autofocus]");
                b.length ? b[0].focus() : d[0].focus();
                var e = a.getTop();
                e && a.modalRendered(e.key)
            })
        }
    }
}]).directive("modalAnimationClass", [function() {
    return {
        compile: function(a, b) {
            b.modalAnimation && a.addClass(b.modalAnimationClass)
        }
    }
}]).directive("modalTransclude", function() {
    return {
        link: function(a, b, c, d, e) {
            e(a.$parent, function(a) {
                b.empty(), b.append(a)
            })
        }
    }
}).factory("$modalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
    function g() {
        for (var a = -1, b = o.keys(), c = 0; c < b.length; c++) o.get(b[c]).value.backdrop && (a = c);
        return a
    }

    function h(a) {
        var b = c.find("body").eq(0),
            d = o.get(a).value;
        o.remove(a), j(d.modalDomEl, d.modalScope, function() {
            b.toggleClass(n, o.length() > 0), i()
        })
    }

    function i() {
        if (l && -1 == g()) {
            var a = m;
            j(l, m, function() {
                a = null
            }), l = void 0, m = void 0
        }
    }

    function j(c, d, f) {
        function g() {
            g.done || (g.done = !0, c.remove(), d.$destroy(), f && f())
        }
        d.animate = !1, c.attr("modal-animation") && a.enabled() ? c.one("$animate:close", function() {
            e.$evalAsync(g)
        }) : b(g)
    }

    function k(a, b, c) {
        return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented
    }
    var l, m, n = "modal-open",
        o = f.createNew(),
        p = {};
    return e.$watch(g, function(a) {
        m && (m.index = a)
    }), c.bind("keydown", function(a) {
        var b;
        27 === a.which && (b = o.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
            p.dismiss(b.key, "escape key press")
        })))
    }), p.open = function(a, b) {
        var f = c[0].activeElement;
        o.add(a, {
            deferred: b.deferred,
            renderDeferred: b.renderDeferred,
            modalScope: b.scope,
            backdrop: b.backdrop,
            keyboard: b.keyboard
        });
        var h = c.find("body").eq(0),
            i = g();
        if (i >= 0 && !l) {
            m = e.$new(!0), m.index = i;
            var j = angular.element('<div modal-backdrop="modal-backdrop"></div>');
            j.attr("backdrop-class", b.backdropClass), b.animation && j.attr("modal-animation", "true"), l = d(j)(m), h.append(l)
        }
        var k = angular.element('<div modal-window="modal-window"></div>');
        k.attr({
            "template-url": b.windowTemplateUrl,
            "window-class": b.windowClass,
            size: b.size,
            index: o.length() - 1,
            animate: "animate"
        }).html(b.content), b.animation && k.attr("modal-animation", "true");
        var p = d(k)(b.scope);
        o.top().value.modalDomEl = p, o.top().value.modalOpener = f, h.append(p), h.addClass(n)
    }, p.close = function(a, b) {
        var c = o.get(a);
        return c && k(c, b, !0) ? (c.value.deferred.resolve(b), h(a), c.value.modalOpener.focus(), !0) : !c
    }, p.dismiss = function(a, b) {
        var c = o.get(a);
        return c && k(c, b, !1) ? (c.value.deferred.reject(b), h(a), c.value.modalOpener.focus(), !0) : !c
    }, p.dismissAll = function(a) {
        for (var b = this.getTop(); b && this.dismiss(b.key, a);) b = this.getTop()
    }, p.getTop = function() {
        return o.top()
    }, p.modalRendered = function(a) {
        var b = o.get(a);
        b && b.value.renderDeferred.resolve()
    }, p
}]).provider("$modal", function() {
    var a = {
        options: {
            animation: !0,
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$modalStack", function(b, c, d, e, f, g) {
            function h(a) {
                return a.template ? d.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl)
            }

            function i(a) {
                var c = [];
                return angular.forEach(a, function(a) {
                    (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                }), c
            }
            var j = {};
            return j.open = function(b) {
                var e = d.defer(),
                    j = d.defer(),
                    k = d.defer(),
                    l = {
                        result: e.promise,
                        opened: j.promise,
                        rendered: k.promise,
                        close: function(a) {
                            return g.close(l, a)
                        },
                        dismiss: function(a) {
                            return g.dismiss(l, a)
                        }
                    };
                if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var m = d.all([h(b)].concat(i(b.resolve)));
                return m.then(function(a) {
                    var d = (b.scope || c).$new();
                    d.$close = l.close, d.$dismiss = l.dismiss;
                    var h, i = {},
                        j = 1;
                    b.controller && (i.$scope = d, i.$modalInstance = l, angular.forEach(b.resolve, function(b, c) {
                        i[c] = a[j++]
                    }), h = f(b.controller, i), b.controllerAs && (d[b.controllerAs] = h)), g.open(l, {
                        scope: d,
                        deferred: e,
                        renderDeferred: k,
                        content: a[0],
                        animation: b.animation,
                        backdrop: b.backdrop,
                        keyboard: b.keyboard,
                        backdropClass: b.backdropClass,
                        windowClass: b.windowClass,
                        windowTemplateUrl: b.windowTemplateUrl,
                        size: b.size
                    })
                }, function(a) {
                    e.reject(a)
                }), m.then(function() {
                    j.resolve(!0)
                }, function(a) {
                    j.reject(a)
                }), l
            }, j
        }]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
    var d = this,
        e = {
            $setViewValue: angular.noop
        },
        f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(g, h) {
        e = g, this.config = h, e.$render = function() {
            d.render()
        }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
        }) : this.itemsPerPage = h.itemsPerPage, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1)
    }, this.render = function() {
        a.page = parseInt(e.$viewValue, 10) || 1
    }, a.selectPage = function(b, c) {
        a.page !== b && b > 0 && b <= a.totalPages && (c && c.target && c.target.blur(), e.$setViewValue(b), e.$render())
    }, a.getText = function(b) {
        return a[b + "Text"] || d.config[b + "Text"]
    }, a.noPrevious = function() {
        return 1 === a.page
    }, a.noNext = function() {
        return a.page === a.totalPages
    }
}]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            firstText: "@",
            previousText: "@",
            nextText: "@",
            lastText: "@"
        },
        require: ["pagination", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(c, d, e, f) {
            function g(a, b, c) {
                return {
                    number: a,
                    text: b,
                    active: c
                }
            }

            function h(a, b) {
                var c = [],
                    d = 1,
                    e = b,
                    f = angular.isDefined(k) && b > k;
                f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                for (var h = d; e >= h; h++) {
                    var i = g(h, h, h === a);
                    c.push(i)
                }
                if (f && !l) {
                    if (d > 1) {
                        var j = g(d - 1, "...", !1);
                        c.unshift(j)
                    }
                    if (b > e) {
                        var m = g(e + 1, "...", !1);
                        c.push(m)
                    }
                }
                return c
            }
            var i = f[0],
                j = f[1];
            if (j) {
                var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                    l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                    k = parseInt(a, 10), i.render()
                });
                var m = i.render;
                i.render = function() {
                    m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                }
            }
        }
    }
}]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "Â« Previous",
    nextText: "Next Â»",
    align: !0
}).directive("pager", ["pagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            previousText: "@",
            nextText: "@"
        },
        require: ["pager", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(b, c, d, e) {
            var f = e[0],
                g = e[1];
            g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
            placement: "top",
            animation: !0,
            popupDelay: 0,
            useContentExp: !1
        },
        c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        },
        d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
        return function(e, k, l, m) {
            function n(a) {
                var b = a || m.trigger || l,
                    d = c[b] || b;
                return {
                    show: b,
                    hide: d
                }
            }
            m = angular.extend({}, b, d, m);
            var o = a(e),
                p = j.startSymbol(),
                q = j.endSymbol(),
                r = "<div " + o + '-popup title="' + p + "title" + q + '" ' + (m.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + p + "content" + q + '" ') + 'placement="' + p + "placement" + q + '" popup-class="' + p + "popupClass" + q + '" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';
            return {
                restrict: "EA",
                compile: function() {
                    var a = f(r);
                    return function(b, c, d) {
                        function f() {
                            E.isOpen ? l() : j()
                        }

                        function j() {
                            (!D || b.$eval(d[k + "Enable"])) && (s(), E.popupDelay ? A || (A = g(o, E.popupDelay, !1), A.then(function(a) {
                                a()
                            })) : o()())
                        }

                        function l() {
                            b.$apply(function() {
                                p()
                            })
                        }

                        function o() {
                            return A = null, z && (g.cancel(z), z = null), (m.useContentExp ? E.contentExp() : E.content) ? (q(), x.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), E.$digest(), F(), E.isOpen = !0, E.$apply(), F) : angular.noop
                        }

                        function p() {
                            E.isOpen = !1, g.cancel(A), A = null, E.animation ? z || (z = g(r, 500)) : r()
                        }

                        function q() {
                            x && r(), y = E.$new(), x = a(y, function(a) {
                                B ? h.find("body").append(a) : c.after(a)
                            }), y.$watch(function() {
                                g(F, 0, !1)
                            }), m.useContentExp && y.$watch("contentExp()", function(a) {
                                !a && E.isOpen && p()
                            })
                        }

                        function r() {
                            z = null, x && (x.remove(), x = null), y && (y.$destroy(), y = null)
                        }

                        function s() {
                            t(), u(), v()
                        }

                        function t() {
                            E.popupClass = d[k + "Class"]
                        }

                        function u() {
                            var a = d[k + "Placement"];
                            E.placement = angular.isDefined(a) ? a : m.placement
                        }

                        function v() {
                            var a = d[k + "PopupDelay"],
                                b = parseInt(a, 10);
                            E.popupDelay = isNaN(b) ? m.popupDelay : b
                        }

                        function w() {
                            var a = d[k + "Trigger"];
                            G(), C = n(a), C.show === C.hide ? c.bind(C.show, f) : (c.bind(C.show, j), c.bind(C.hide, l))
                        }
                        var x, y, z, A, B = angular.isDefined(m.appendToBody) ? m.appendToBody : !1,
                            C = n(void 0),
                            D = angular.isDefined(d[k + "Enable"]),
                            E = b.$new(!0),
                            F = function() {
                                if (x) {
                                    var a = i.positionElements(c, x, E.placement, B);
                                    a.top += "px", a.left += "px", x.css(a)
                                }
                            };
                        E.origScope = b, E.isOpen = !1, E.contentExp = function() {
                            return b.$eval(d[e])
                        }, m.useContentExp || d.$observe(e, function(a) {
                            E.content = a, !a && E.isOpen && p()
                        }), d.$observe("disabled", function(a) {
                            a && E.isOpen && p()
                        }), d.$observe(k + "Title", function(a) {
                            E.title = a
                        });
                        var G = function() {
                            c.unbind(C.show, j), c.unbind(C.hide, l)
                        };
                        w();
                        var H = b.$eval(d[k + "Animation"]);
                        E.animation = angular.isDefined(H) ? !!H : m.animation;
                        var I = b.$eval(d[k + "AppendToBody"]);
                        B = angular.isDefined(I) ? I : B, B && b.$on("$locationChangeSuccess", function() {
                            E.isOpen && p()
                        }), b.$on("$destroy", function() {
                            g.cancel(z), g.cancel(A), G(), r(), E = null
                        })
                    }
                }
            }
        }
    }]
}).directive("tooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function(a, b, c, d) {
    return {
        link: function(e, f, g) {
            var h, i, j, k = e.$eval(g.tooltipTemplateTranscludeScope),
                l = 0,
                m = function() {
                    i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function() {
                        i = null
                    }), i = j, j = null)
                };
            e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude), function(b) {
                var g = ++l;
                b ? (d(b, !0).then(function(d) {
                    if (g === l) {
                        var e = k.$new(),
                            i = d,
                            n = c(i)(e, function(b) {
                                m(), a.enter(b, f)
                            });
                        h = e, j = n, h.$emit("$includeContentLoaded", b)
                    }
                }, function() {
                    g === l && (m(), e.$emit("$includeContentError", b))
                }), e.$emit("$includeContentRequested", b)) : m()
            }), e.$on("$destroy", m)
        }
    }
}]).directive("tooltipClasses", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            a.placement && b.addClass(a.placement), a.popupClass && b.addClass(a.popupClass), a.animation() && b.addClass(c.tooltipAnimationClass)
        }
    }
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipTemplatePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/tooltip/tooltip-template-popup.html"
    }
}).directive("tooltipTemplate", ["$tooltip", function(a) {
    return a("tooltipTemplate", "tooltip", "mouseenter", {
        useContentExp: !0
    })
}]).directive("tooltipHtmlPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-popup.html"
    }
}).directive("tooltipHtml", ["$tooltip", function(a) {
    return a("tooltipHtml", "tooltip", "mouseenter", {
        useContentExp: !0
    })
}]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).value("tooltipHtmlUnsafeSuppressDeprecated", !1).directive("tooltipHtmlUnsafe", ["$tooltip", "tooltipHtmlUnsafeSuppressDeprecated", "$log", function(a, b, c) {
    return b || c.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."), a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/popover/popover-template.html"
    }
}).directive("popoverTemplate", ["$tooltip", function(a) {
    return a("popoverTemplate", "popover", "click", {
        useContentExp: !0
    })
}]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip", function(a) {
    return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
    var d = this,
        e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(a.max) ? a.max : c.max, this.addBar = function(b, c) {
        e || c.css({
            transition: "none"
        }), this.bars.push(b), b.$watch("value", function(c) {
            b.percent = +(100 * c / a.max).toFixed(2)
        }), b.$on("$destroy", function() {
            c = null, d.removeBar(b)
        })
    }, this.removeBar = function(a) {
        this.bars.splice(this.bars.indexOf(a), 1)
    }
}]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            max: "=?",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            max: "=?",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
    var d = {
        $setViewValue: angular.noop
    };
    this.init = function(e) {
        d = e, d.$render = this.render, d.$formatters.push(function(a) {
            return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a
        }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
        var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
        a.range = this.buildTemplateObjects(f)
    }, this.buildTemplateObjects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
            index: b
        }, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, a[b]);
        return a
    }, a.rate = function(b) {
        !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
    }, a.enter = function(b) {
        a.readonly || (a.value = b), a.onHover({
            value: b
        })
    }, a.reset = function() {
        a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function(b) {
        /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function() {
        a.value = d.$viewValue
    }
}]).directive("rating", function() {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
    var b = this,
        c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(b) {
            b.active && b !== a && (b.active = !1, b.onDeselect())
        }), a.active = !0, a.onSelect()
    }, b.addTab = function(a) {
        c.push(a), 1 === c.length && a.active !== !1 ? a.active = !0 : a.active ? b.select(a) : a.active = !1
    }, b.removeTab = function(a) {
        var e = c.indexOf(a);
        if (a.active && c.length > 1 && !d) {
            var f = e == c.length - 1 ? e - 1 : e + 1;
            b.select(c[f])
        }
        c.splice(e, 1)
    };
    var d;
    a.$on("$destroy", function() {
        d = !0
    })
}]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }
    }
}).directive("tab", ["$parse", "$log", function(a, b) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            active: "=?",
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        compile: function(c, d, e) {
            return function(c, d, f, g) {
                c.$watch("active", function(a) {
                    a && g.select(c)
                }), c.disabled = !1, f.disable && c.$parent.$watch(a(f.disable), function(a) {
                    c.disabled = !!a
                }), f.disabled && (b.warn('Use of "disabled" attribute has been deprecated, please use "disable"'), c.$parent.$watch(a(f.disabled), function(a) {
                    c.disabled = !!a
                })), c.select = function() {
                    c.disabled || (c.active = !0)
                }, g.addTab(c), c.$on("$destroy", function() {
                    g.removeTab(c)
                }), c.$transcludeFn = e
            }
        }
    }
}]).directive("tabHeadingTransclude", [function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(a, b) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
    function g() {
        var b = parseInt(a.hours, 10),
            c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
        return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
    }

    function h() {
        var b = parseInt(a.minutes, 10);
        return b >= 0 && 60 > b ? b : void 0
    }

    function i(a) {
        return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a.toString()
    }

    function j(a) {
        k(), o.$setViewValue(new Date(n)), l(a)
    }

    function k() {
        o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
    }

    function l(b) {
        var c = n.getHours(),
            d = n.getMinutes();
        a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), "m" !== b && (a.minutes = i(d)), a.meridian = n.getHours() < 12 ? p[0] : p[1]
    }

    function m(a) {
        var b = new Date(n.getTime() + 6e4 * a);
        n.setHours(b.getHours(), b.getMinutes()), j()
    }
    var n = new Date,
        o = {
            $setViewValue: angular.noop
        },
        p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function(c, d) {
        o = c, o.$render = this.render, o.$formatters.unshift(function(a) {
            return a ? new Date(a) : null
        });
        var e = d.eq(0),
            g = d.eq(1),
            h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
        h && this.setupMousewheelEvents(e, g);
        var i = angular.isDefined(b.arrowkeys) ? a.$parent.$eval(b.arrowkeys) : f.arrowkeys;
        i && this.setupArrowkeyEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
        q = parseInt(a, 10)
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
        r = parseInt(a, 10)
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
        if (a.showMeridian = !!b, o.$error.time) {
            var c = g(),
                d = h();
            angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
        } else l()
    }), this.setupMousewheelEvents = function(b, c) {
        var d = function(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
            return a.detail || b > 0
        };
        b.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
        }), c.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
        })
    }, this.setupArrowkeyEvents = function(b, c) {
        b.bind("keydown", function(b) {
            38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementHours(), a.$apply())
        }), c.bind("keydown", function(b) {
            38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementMinutes(), a.$apply())
        })
    }, this.setupInputEvents = function(b, c) {
        if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
        var d = function(b, c) {
            o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
        };
        a.updateHours = function() {
            var a = g();
            angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
        }, b.bind("blur", function() {
            !a.invalidHours && a.hours < 10 && a.$apply(function() {
                a.hours = i(a.hours)
            })
        }), a.updateMinutes = function() {
            var a = h();
            angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
        }, c.bind("blur", function() {
            !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                a.minutes = i(a.minutes)
            })
        })
    }, this.render = function() {
        var a = o.$viewValue;
        isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
    }, a.incrementHours = function() {
        m(60 * q)
    }, a.decrementHours = function() {
        m(60 * -q)
    }, a.incrementMinutes = function() {
        m(r)
    }, a.decrementMinutes = function() {
        m(-r)
    }, a.toggleMeridian = function() {
        m(720 * (n.getHours() < 12 ? 1 : -1))
    }
}]).directive("timepicker", function() {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f, b.find("input"))
        }
    }
}), angular.module("ui.bootstrap.transition", []).value("$transitionSuppressDeprecated", !1).factory("$transition", ["$q", "$timeout", "$rootScope", "$log", "$transitionSuppressDeprecated", function(a, b, c, d, e) {
    function f(a) {
        for (var b in a)
            if (void 0 !== h.style[b]) return a[b]
    }
    e || d.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
    var g = function(d, e, f) {
            f = f || {};
            var h = a.defer(),
                i = g[f.animation ? "animationEndEventName" : "transitionEndEventName"],
                j = function() {
                    c.$apply(function() {
                        d.unbind(i, j), h.resolve(d)
                    })
                };
            return i && d.bind(i, j), b(function() {
                angular.isString(e) ? d.addClass(e) : angular.isFunction(e) ? e(d) : angular.isObject(e) && d.css(e), i || h.resolve(d)
            }), h.promise.cancel = function() {
                i && d.unbind(i, j), h.reject("Transition cancelled")
            }, h.promise
        },
        h = document.createElement("trans"),
        i = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
        },
        j = {
            WebkitTransition: "webkitAnimationEnd",
            MozTransition: "animationend",
            OTransition: "oAnimationEnd",
            transition: "animationend"
        };
    return g.transitionEndEventName = f(i), g.animationEndEventName = f(j), g
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            }
        }
    }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return {
        require: "ngModel",
        link: function(i, j, k, l) {
            var m, n = i.$eval(k.typeaheadMinLength) || 1,
                o = i.$eval(k.typeaheadWaitMs) || 0,
                p = i.$eval(k.typeaheadEditable) !== !1,
                q = b(k.typeaheadLoading).assign || angular.noop,
                r = b(k.typeaheadOnSelect),
                s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                u = i.$eval(k.typeaheadFocusFirst) !== !1,
                v = b(k.ngModel).assign,
                w = g.parse(k.typeahead),
                x = i.$new();
            i.$on("$destroy", function() {
                x.$destroy()
            });
            var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
            j.attr({
                "aria-autocomplete": "list",
                "aria-expanded": !1,
                "aria-owns": y
            });
            var z = angular.element("<div typeahead-popup></div>");
            z.attr({
                id: y,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
            var A = function() {
                    x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                },
                B = function(a) {
                    return y + "-option-" + a
                };
            x.$watch("activeIdx", function(a) {
                0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
            });
            var C = function(a) {
                var b = {
                    $viewValue: a
                };
                q(i, !0), c.when(w.source(i, b)).then(function(c) {
                    var d = a === l.$viewValue;
                    if (d && m)
                        if (c && c.length > 0) {
                            x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                            for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                id: B(e),
                                label: w.viewMapper(x, b),
                                model: c[e]
                            });
                            x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                        } else A();
                    d && q(i, !1)
                }, function() {
                    A(), q(i, !1)
                })
            };
            A(), x.query = void 0;
            var D, E = function(a) {
                    D = d(function() {
                        C(a)
                    }, o)
                },
                F = function() {
                    D && d.cancel(D)
                };
            l.$parsers.unshift(function(a) {
                return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
            }), l.$formatters.push(function(a) {
                var b, c, d = {};
                return p || l.$setValidity("editable", !0), s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
            }), x.select = function(a) {
                var b, c, e = {};
                e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), l.$setValidity("parse", !0), r(i, {
                    $item: c,
                    $model: b,
                    $label: w.viewMapper(i, e)
                }), A(), d(function() {
                    j[0].focus()
                }, 0, !1)
            }, j.bind("keydown", function(a) {
                0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                    x.select(x.activeIdx)
                }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
            }), j.bind("blur", function() {
                m = !1
            });
            var G = function(a) {
                j[0] !== a.target && (A(), x.$digest())
            };
            e.bind("click", G), i.$on("$destroy", function() {
                e.unbind("click", G), t && H.remove(), z.remove()
            });
            var H = a(z)(x);
            t ? e.find("body").append(H) : j.after(H)
        }
    }
}]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$templateRequest", "$compile", "$parse", function(a, b, c) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(d, e, f) {
            var g = c(f.templateUrl)(d.$parent) || "template/typeahead/typeahead-match.html";
            a(g).then(function(a) {
                b(a.trim())(d, function(a) {
                    e.replaceWith(a)
                })
            })
        }
    }
}]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href="javascript:void(0)" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:\'index\' track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}" ng-class="dt.customClass">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop"\n     modal-animation-class="fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n	ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1, $event)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages, $event)">{{getText(\'last\')}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-template-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
}]), angular.module("template/popover/popover-template.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover-template.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
}]), angular.module("template/popover/popover-window.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover-window.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen, fade: animation }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" tooltip-template-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>\n')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
! function() {
    var module = angular.module("toggle-switch", ["ng"]);
    module.provider("toggleSwitchConfig", [function() {
        this.onLabel = "On", this.offLabel = "Off", this.knobLabel = " ";
        var self = this;
        this.$get = function() {
            return {
                onLabel: self.onLabel,
                offLabel: self.offLabel,
                knobLabel: self.knobLabel
            }
        }
    }]), module.directive("toggleSwitch", ["toggleSwitchConfig", function(toggleSwitchConfig) {
        return {
            restrict: "EA",
            replace: !0,
            require: "ngModel",
            scope: {
                disabled: "@",
                onLabel: "@",
                offLabel: "@",
                knobLabel: "@"
            },
            template: '<div role="radio" class="toggle-switch" ng-class="{ \'disabled\': disabled }"><div class="toggle-switch-animate" ng-class="{\'switch-off\': !model, \'switch-on\': model}"><span class="switch-left" ng-bind="onLabel"></span><span class="knob" ng-bind="knobLabel"></span><span class="switch-right" ng-bind="offLabel"></span></div></div>',
            compile: function(element, attrs) {
                return attrs.onLabel || (attrs.onLabel = toggleSwitchConfig.onLabel), attrs.offLabel || (attrs.offLabel = toggleSwitchConfig.offLabel), attrs.knobLabel || (attrs.knobLabel = toggleSwitchConfig.knobLabel), this.link
            },
            link: function(scope, element, attrs, ngModelCtrl) {
                var KEY_SPACE = 32;
                element.on("click", function() {
                    scope.$apply(scope.toggle)
                }), element.on("keydown", function(e) {
                    var key = e.which ? e.which : e.keyCode;
                    key === KEY_SPACE && scope.$apply(scope.toggle)
                }), ngModelCtrl.$formatters.push(function(modelValue) {
                    return modelValue
                }), ngModelCtrl.$parsers.push(function(viewValue) {
                    return viewValue
                }), ngModelCtrl.$viewChangeListeners.push(function() {
                    scope.$eval(attrs.ngChange)
                }), ngModelCtrl.$render = function() {
                    scope.model = ngModelCtrl.$viewValue
                }, scope.toggle = function() {
                    scope.disabled || (scope.model = !scope.model, ngModelCtrl.$setViewValue(scope.model))
                }
            }
        }
    }])
}();
require = function e(t, n, r) {
    function i(a, o) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!o && u) return u(a, !0);
                if (s) return s(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function(e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var s = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function(e, t, n) {
        ! function(e, r) {
            "function" == typeof define && define.amd ? define([], r) : "object" == typeof n ? t.exports = r() : e.BrV = r()
        }(this, function() {
            function e(e, t) {
                var n = t.algorithmSteps,
                    r = a.handleStr[n[0]](e),
                    i = a.sum[n[1]](r, t.pesos),
                    s = a.rest[n[2]](i),
                    o = parseInt(r[t.dvpos]),
                    u = a.expectedDV[n[3]](s, r);
                return o === u
            }

            function t(t, n) {
                if (n.match && !n.match.test(t)) return !1;
                for (var r = 0; r < n.dvs.length; r++)
                    if (!e(t, n.dvs[r])) return !1;
                return !0
            }
            var n = {};
            n.validate = function(e) {
                var t = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                e = e.replace(/[^\d]/g, "");
                var n = /^(0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14})$/;
                if (!e || 14 !== e.length || n.test(e)) return !1;
                e = e.split("");
                for (var r = 0, i = 0; 12 > r; r++) i += e[r] * t[r + 1];
                if (i = 11 - i % 11, i = i >= 10 ? 0 : i, parseInt(e[12]) !== i) return !1;
                for (r = 0, i = 0; 12 >= r; r++) i += e[r] * t[r];
                return i = 11 - i % 11, i = i >= 10 ? 0 : i, parseInt(e[13]) !== i ? !1 : !0
            };
            var r = {};
            r.validate = function(e) {
                function t(t) {
                    for (var n = 0, r = t - 9, i = 0; 9 > i; i++) n += parseInt(e.charAt(i + r)) * (i + 1);
                    return n % 11 % 10 === parseInt(e.charAt(t))
                }
                e = e.replace(/[^\d]+/g, "");
                var n = /^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$/;
                return !e || 11 !== e.length || n.test(e) ? !1 : t(9) && t(10)
            };
            var i = function(e) {
                    return this instanceof i ? (this.rules = s[e] || [], this.rule, i.prototype._defineRule = function(e) {
                        this.rule = void 0;
                        for (var t = 0; t < this.rules.length && void 0 === this.rule; t++) {
                            var n = e.replace(/[^\d]/g, ""),
                                r = this.rules[t];
                            n.length !== r.chars || r.match && !r.match.test(e) || (this.rule = r)
                        }
                        return !!this.rule
                    }, void(i.prototype.validate = function(e) {
                        return e && this._defineRule(e) ? this.rule.validate(e) : !1
                    })) : new i(e)
                },
                s = {},
                a = {
                    handleStr: {
                        onlyNumbers: function(e) {
                            return e.replace(/[^\d]/g, "").split("")
                        },
                        mgSpec: function(e) {
                            var t = e.replace(/[^\d]/g, "");
                            return t = t.substr(0, 3) + "0" + t.substr(3, t.length), t.split("")
                        }
                    },
                    sum: {
                        normalSum: function(e, t) {
                            for (var n = e, r = 0, i = 0; i < t.length; i++) r += parseInt(n[i]) * t[i];
                            return r
                        },
                        individualSum: function(e, t) {
                            for (var n = e, r = 0, i = 0; i < t.length; i++) {
                                var s = parseInt(n[i]) * t[i];
                                r += s % 10 + parseInt(s / 10)
                            }
                            return r
                        },
                        apSpec: function(e, t) {
                            var n = this.normalSum(e, t),
                                r = e.join("");
                            return r >= "030000010" && "030170009" >= r ? n + 5 : r >= "030170010" && "030190229" >= r ? n + 9 : n
                        }
                    },
                    rest: {
                        mod11: function(e) {
                            return e % 11
                        },
                        mod10: function(e) {
                            return e % 10
                        },
                        mod9: function(e) {
                            return e % 9
                        }
                    },
                    expectedDV: {
                        minusRestOf11: function(e) {
                            return 2 > e ? 0 : 11 - e
                        },
                        minusRestOf11v2: function(e) {
                            return 2 > e ? 11 - e - 10 : 11 - e
                        },
                        minusRestOf10: function(e) {
                            return 1 > e ? 0 : 10 - e
                        },
                        mod10: function(e) {
                            return e % 10
                        },
                        goSpec: function(e, t) {
                            var n = t.join("");
                            return 1 === e ? n >= "101031050" && "101199979" >= n ? 1 : 0 : 0 === e ? 0 : 11 - e
                        },
                        apSpec: function(e, t) {
                            var n = t.join("");
                            return 0 === e ? n >= "030170010" && "030190229" >= n ? 1 : 0 : 1 === e ? 0 : 11 - e
                        },
                        voidFn: function(e) {
                            return e
                        }
                    }
                };
            return s.PE = [{
                chars: 9,
                dvs: [{
                    dvpos: 7,
                    pesos: [8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }, {
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }, {
                chars: 14,
                pesos: [
                    [1, 2, 3, 4, 5, 9, 8, 7, 6, 5, 4, 3, 2]
                ],
                dvs: [{
                    dvpos: 13,
                    pesos: [5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11v2"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.RS = [{
                chars: 10,
                dvs: [{
                    dvpos: 9,
                    pesos: [2, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.AC = [{
                chars: 13,
                match: /^01/,
                dvs: [{
                    dvpos: 11,
                    pesos: [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }, {
                    dvpos: 12,
                    pesos: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.MG = [{
                chars: 13,
                dvs: [{
                    dvpos: 12,
                    pesos: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    algorithmSteps: ["mgSpec", "individualSum", "mod10", "minusRestOf10"]
                }, {
                    dvpos: 12,
                    pesos: [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.SP = [{
                chars: 12,
                match: /^[0-9]/,
                dvs: [{
                    dvpos: 8,
                    pesos: [1, 3, 4, 5, 6, 7, 8, 10],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "mod10"]
                }, {
                    dvpos: 11,
                    pesos: [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "mod10"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }, {
                chars: 12,
                match: /^P/i,
                dvs: [{
                    dvpos: 8,
                    pesos: [1, 3, 4, 5, 6, 7, 8, 10],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "mod10"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.DF = [{
                chars: 13,
                dvs: [{
                    dvpos: 11,
                    pesos: [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }, {
                    dvpos: 12,
                    pesos: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.ES = [{
                chars: 9,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.BA = [{
                chars: 8,
                match: /^[0123458]/,
                dvs: [{
                    dvpos: 7,
                    pesos: [7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod10", "minusRestOf10"]
                }, {
                    dvpos: 6,
                    pesos: [8, 7, 6, 5, 4, 3, 0, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod10", "minusRestOf10"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }, {
                chars: 8,
                match: /^[679]/,
                dvs: [{
                    dvpos: 7,
                    pesos: [7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }, {
                    dvpos: 6,
                    pesos: [8, 7, 6, 5, 4, 3, 0, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }, {
                chars: 9,
                match: /^[0-9][0123458]/,
                dvs: [{
                    dvpos: 8,
                    pesos: [8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod10", "minusRestOf10"]
                }, {
                    dvpos: 7,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 0, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod10", "minusRestOf10"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }, {
                chars: 9,
                match: /^[0-9][679]/,
                dvs: [{
                    dvpos: 8,
                    pesos: [8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }, {
                    dvpos: 7,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 0, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.AM = [{
                chars: 9,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.RN = [{
                chars: 9,
                match: /^20/,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }, {
                chars: 10,
                match: /^20/,
                dvs: [{
                    dvpos: 8,
                    pesos: [10, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.RO = [{
                chars: 14,
                dvs: [{
                    dvpos: 13,
                    pesos: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.PR = [{
                chars: 10,
                dvs: [{
                    dvpos: 8,
                    pesos: [3, 2, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }, {
                    dvpos: 9,
                    pesos: [4, 3, 2, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.SC = [{
                chars: 9,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.RJ = [{
                chars: 8,
                dvs: [{
                    dvpos: 7,
                    pesos: [2, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.PA = [{
                chars: 9,
                match: /^15/,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.SE = [{
                chars: 9,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.PB = [{
                chars: 9,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.CE = [{
                chars: 9,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.PI = [{
                chars: 9,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.MA = [{
                chars: 9,
                match: /^12/,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.MT = [{
                chars: 11,
                dvs: [{
                    dvpos: 10,
                    pesos: [3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.MS = [{
                chars: 9,
                match: /^28/,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.TO = [{
                chars: 11,
                match: /^[0-9]{2}((0[123])|(99))/,
                dvs: [{
                    dvpos: 10,
                    pesos: [9, 8, 0, 0, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.AL = [{
                chars: 9,
                match: /^24[03578]/,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "minusRestOf11"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.RR = [{
                chars: 9,
                match: /^24/,
                dvs: [{
                    dvpos: 8,
                    pesos: [1, 2, 3, 4, 5, 6, 7, 8],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod9", "voidFn"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.GO = [{
                chars: 9,
                match: /^1[015]/,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "normalSum", "mod11", "goSpec"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], s.AP = [{
                chars: 9,
                match: /^03/,
                dvs: [{
                    dvpos: 8,
                    pesos: [9, 8, 7, 6, 5, 4, 3, 2],
                    algorithmSteps: ["onlyNumbers", "apSpec", "mod11", "apSpec"]
                }],
                validate: function(e) {
                    return t(e, this)
                }
            }], {
                ie: i,
                cpf: r,
                cnpj: n
            }
        })
    }, {}],
    2: [function(e, t, n) {
        ! function(e, r) {
            "object" == typeof n && "undefined" != typeof t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.moment = r()
        }(this, function() {
            "use strict";

            function n() {
                return xn.apply(null, arguments)
            }

            function r(e) {
                xn = e
            }

            function i(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function a(e, t) {
                var n, r = [];
                for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
                return r
            }

            function o(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function u(e, t) {
                for (var n in t) o(t, n) && (e[n] = t[n]);
                return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function l(e, t, n, r) {
                return Oe(e, t, n, r, !0).utc()
            }

            function c() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }

            function f(e) {
                return null == e._pf && (e._pf = c()), e._pf
            }

            function d(e) {
                if (null == e._isValid) {
                    var t = f(e);
                    e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.nullInput && !t.invalidFormat && !t.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
                }
                return e._isValid
            }

            function m(e) {
                var t = l(0 / 0);
                return null != e ? u(f(t), e) : f(t).userInvalidated = !0, t
            }

            function h(e, t) {
                var n, r, i;
                if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = f(t)), "undefined" != typeof t._locale && (e._locale = t._locale), Fn.length > 0)
                    for (n in Fn) r = Fn[n], i = t[r], "undefined" != typeof i && (e[r] = i);
                return e
            }

            function p(e) {
                h(this, e), this._d = new Date(+e._d), Un === !1 && (Un = !0, n.updateOffset(this), Un = !1)
            }

            function v(e) {
                return e instanceof p || null != e && null != e._isAMomentObject
            }

            function y(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
            }

            function g(e, t, n) {
                var r, i = Math.min(e.length, t.length),
                    s = Math.abs(e.length - t.length),
                    a = 0;
                for (r = 0; i > r; r++)(n && e[r] !== t[r] || !n && y(e[r]) !== y(t[r])) && a++;
                return a + s
            }

            function _() {}

            function M(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function k(e) {
                for (var t, n, r, i, s = 0; s < e.length;) {
                    for (i = M(e[s]).split("-"), t = i.length, n = M(e[s + 1]), n = n ? n.split("-") : null; t > 0;) {
                        if (r = S(i.slice(0, t).join("-"))) return r;
                        if (n && n.length >= t && g(i, n, !0) >= t - 1) break;
                        t--
                    }
                    s++
                }
                return null
            }

            function S(n) {
                var r = null;
                if (!An[n] && "undefined" != typeof t && t && t.exports) try {
                    r = Rn._abbr, e("./locale/" + n), w(r)
                } catch (i) {}
                return An[n]
            }

            function w(e, t) {
                var n;
                return e && (n = "undefined" == typeof t ? b(e) : D(e, t), n && (Rn = n)), Rn._abbr
            }

            function D(e, t) {
                return null !== t ? (t.abbr = e, An[e] || (An[e] = new _), An[e].set(t), w(e), An[e]) : (delete An[e], null)
            }

            function b(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Rn;
                if (!i(e)) {
                    if (t = S(e)) return t;
                    e = [e]
                }
                return k(e)
            }

            function Y(e, t) {
                var n = e.toLowerCase();
                En[n] = En[n + "s"] = En[t] = e
            }

            function O(e) {
                return "string" == typeof e ? En[e] || En[e.toLowerCase()] : void 0
            }

            function $(e) {
                var t, n, r = {};
                for (n in e) o(e, n) && (t = O(n), t && (r[t] = e[n]));
                return r
            }

            function N(e, t) {
                return function(r) {
                    return null != r ? (P(this, e, r), n.updateOffset(this, t), this) : T(this, e)
                }
            }

            function T(e, t) {
                return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            }

            function P(e, t, n) {
                return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
            }

            function x(e, t) {
                var n;
                if ("object" == typeof e)
                    for (n in e) this.set(n, e[n]);
                else if (e = O(e), "function" == typeof this[e]) return this[e](t);
                return this
            }

            function R(e, t, n) {
                for (var r = "" + Math.abs(e), i = e >= 0; r.length < t;) r = "0" + r;
                return (i ? n ? "+" : "" : "-") + r
            }

            function F(e, t, n, r) {
                var i = r;
                "string" == typeof r && (i = function() {
                    return this[r]()
                }), e && (In[e] = i), t && (In[t[0]] = function() {
                    return R(i.apply(this, arguments), t[1], t[2])
                }), n && (In[n] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), e)
                })
            }

            function U(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function A(e) {
                var t, n, r = e.match(Cn);
                for (t = 0, n = r.length; n > t; t++) r[t] = In[r[t]] ? In[r[t]] : U(r[t]);
                return function(i) {
                    var s = "";
                    for (t = 0; n > t; t++) s += r[t] instanceof Function ? r[t].call(i, e) : r[t];
                    return s
                }
            }

            function E(e, t) {
                return e.isValid() ? (t = C(t, e.localeData()), Gn[t] || (Gn[t] = A(t)), Gn[t](e)) : e.localeData().invalidDate()
            }

            function C(e, t) {
                function n(e) {
                    return t.longDateFormat(e) || e
                }
                var r = 5;
                for (Vn.lastIndex = 0; r >= 0 && Vn.test(e);) e = e.replace(Vn, n), Vn.lastIndex = 0, r -= 1;
                return e
            }

            function V(e, t, n) {
                nr[e] = "function" == typeof t ? t : function(e) {
                    return e && n ? n : t
                }
            }

            function G(e, t) {
                return o(nr, e) ? nr[e](t._strict, t._locale) : new RegExp(I(e))
            }

            function I(e) {
                return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                    return t || n || r || i
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function L(e, t) {
                var n, r = t;
                for ("string" == typeof e && (e = [e]), "number" == typeof t && (r = function(e, n) {
                    n[t] = y(e)
                }), n = 0; n < e.length; n++) rr[e[n]] = r
            }

            function W(e, t) {
                L(e, function(e, n, r, i) {
                    r._w = r._w || {}, t(e, r._w, r, i)
                })
            }

            function j(e, t, n) {
                null != t && o(rr, e) && rr[e](t, n._a, n, e)
            }

            function H(e, t) {
                return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
            }

            function B(e) {
                return this._months[e.month()]
            }

            function Z(e) {
                return this._monthsShort[e.month()]
            }

            function z(e, t, n) {
                var r, i, s;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
                    if (i = l([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                    if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                    if (!n && this._monthsParse[r].test(e)) return r
                }
            }

            function q(e, t) {
                var n;
                return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), H(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
            }

            function J(e) {
                return null != e ? (q(this, e), n.updateOffset(this, !0), this) : T(this, "Month")
            }

            function Q() {
                return H(this.year(), this.month())
            }

            function X(e) {
                var t, n = e._a;
                return n && -2 === f(e).overflow && (t = n[sr] < 0 || n[sr] > 11 ? sr : n[ar] < 1 || n[ar] > H(n[ir], n[sr]) ? ar : n[or] < 0 || n[or] > 24 || 24 === n[or] && (0 !== n[ur] || 0 !== n[lr] || 0 !== n[cr]) ? or : n[ur] < 0 || n[ur] > 59 ? ur : n[lr] < 0 || n[lr] > 59 ? lr : n[cr] < 0 || n[cr] > 999 ? cr : -1, f(e)._overflowDayOfYear && (ir > t || t > ar) && (t = ar), f(e).overflow = t), e
            }

            function K(e) {
                n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function ee(e, t) {
                var n = !0,
                    r = e + "\n" + (new Error).stack;
                return u(function() {
                    return n && (K(r), n = !1), t.apply(this, arguments)
                }, t)
            }

            function te(e, t) {
                mr[e] || (K(t), mr[e] = !0)
            }

            function ne(e) {
                var t, n, r = e._i,
                    i = hr.exec(r);
                if (i) {
                    for (f(e).iso = !0, t = 0, n = pr.length; n > t; t++)
                        if (pr[t][1].exec(r)) {
                            e._f = pr[t][0] + (i[6] || " ");
                            break
                        }
                    for (t = 0, n = vr.length; n > t; t++)
                        if (vr[t][1].exec(r)) {
                            e._f += vr[t][0];
                            break
                        }
                    r.match(Kn) && (e._f += "Z"), ke(e)
                } else e._isValid = !1
            }

            function re(e) {
                var t = yr.exec(e._i);
                return null !== t ? void(e._d = new Date(+t[1])) : (ne(e), void(e._isValid === !1 && (delete e._isValid, n.createFromInputFallback(e))))
            }

            function ie(e, t, n, r, i, s, a) {
                var o = new Date(e, t, n, r, i, s, a);
                return 1970 > e && o.setFullYear(e), o
            }

            function se(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return 1970 > e && t.setUTCFullYear(e), t
            }

            function ae(e) {
                return oe(e) ? 366 : 365
            }

            function oe(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            }

            function ue() {
                return oe(this.year())
            }

            function le(e, t, n) {
                var r, i = n - t,
                    s = n - e.day();
                return s > i && (s -= 7), i - 7 > s && (s += 7), r = $e(e).add(s, "d"), {
                    week: Math.ceil(r.dayOfYear() / 7),
                    year: r.year()
                }
            }

            function ce(e) {
                return le(e, this._week.dow, this._week.doy).week
            }

            function fe() {
                return this._week.dow
            }

            function de() {
                return this._week.doy
            }

            function me(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function he(e) {
                var t = le(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function pe(e, t, n, r, i) {
                var s, a, o = se(e, 0, 1).getUTCDay();
                return o = 0 === o ? 7 : o, n = null != n ? n : i, s = i - o + (o > r ? 7 : 0) - (i > o ? 7 : 0), a = 7 * (t - 1) + (n - i) + s + 1, {
                    year: a > 0 ? e : e - 1,
                    dayOfYear: a > 0 ? a : ae(e - 1) + a
                }
            }

            function ve(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }

            function ye(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function ge(e) {
                var t = new Date;
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function _e(e) {
                var t, n, r, i, s = [];
                if (!e._d) {
                    for (r = ge(e), e._w && null == e._a[ar] && null == e._a[sr] && Me(e), e._dayOfYear && (i = ye(e._a[ir], r[ir]), e._dayOfYear > ae(i) && (f(e)._overflowDayOfYear = !0), n = se(i, 0, e._dayOfYear), e._a[sr] = n.getUTCMonth(), e._a[ar] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
                    for (; 7 > t; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[or] && 0 === e._a[ur] && 0 === e._a[lr] && 0 === e._a[cr] && (e._nextDay = !0, e._a[or] = 0), e._d = (e._useUTC ? se : ie).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[or] = 24)
                }
            }

            function Me(e) {
                var t, n, r, i, s, a, o;
                t = e._w, null != t.GG || null != t.W || null != t.E ? (s = 1, a = 4, n = ye(t.GG, e._a[ir], le($e(), 1, 4).year), r = ye(t.W, 1), i = ye(t.E, 1)) : (s = e._locale._week.dow, a = e._locale._week.doy, n = ye(t.gg, e._a[ir], le($e(), s, a).year), r = ye(t.w, 1), null != t.d ? (i = t.d, s > i && ++r) : i = null != t.e ? t.e + s : s), o = pe(n, r, i, a, s), e._a[ir] = o.year, e._dayOfYear = o.dayOfYear
            }

            function ke(e) {
                if (e._f === n.ISO_8601) return void ne(e);
                e._a = [], f(e).empty = !0;
                var t, r, i, s, a, o = "" + e._i,
                    u = o.length,
                    l = 0;
                for (i = C(e._f, e._locale).match(Cn) || [], t = 0; t < i.length; t++) s = i[t], r = (o.match(G(s, e)) || [])[0], r && (a = o.substr(0, o.indexOf(r)), a.length > 0 && f(e).unusedInput.push(a), o = o.slice(o.indexOf(r) + r.length), l += r.length), In[s] ? (r ? f(e).empty = !1 : f(e).unusedTokens.push(s), j(s, r, e)) : e._strict && !r && f(e).unusedTokens.push(s);
                f(e).charsLeftOver = u - l, o.length > 0 && f(e).unusedInput.push(o), f(e).bigHour === !0 && e._a[or] <= 12 && e._a[or] > 0 && (f(e).bigHour = void 0), e._a[or] = Se(e._locale, e._a[or], e._meridiem), _e(e), X(e)
            }

            function Se(e, t, n) {
                var r;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
            }

            function we(e) {
                var t, n, r, i, s;
                if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(0 / 0));
                for (i = 0; i < e._f.length; i++) s = 0, t = h({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ke(t), d(t) && (s += f(t).charsLeftOver, s += 10 * f(t).unusedTokens.length, f(t).score = s, (null == r || r > s) && (r = s, n = t));
                u(e, n || t)
            }

            function De(e) {
                if (!e._d) {
                    var t = $(e._i);
                    e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], _e(e)
                }
            }

            function be(e) {
                var t, n = e._i,
                    r = e._f;
                return e._locale = e._locale || b(e._l), null === n || void 0 === r && "" === n ? m({
                    nullInput: !0
                }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), v(n) ? new p(X(n)) : (i(r) ? we(e) : r ? ke(e) : s(n) ? e._d = n : Ye(e), t = new p(X(e)), t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t))
            }

            function Ye(e) {
                var t = e._i;
                void 0 === t ? e._d = new Date : s(t) ? e._d = new Date(+t) : "string" == typeof t ? re(e) : i(t) ? (e._a = a(t.slice(0), function(e) {
                    return parseInt(e, 10)
                }), _e(e)) : "object" == typeof t ? De(e) : "number" == typeof t ? e._d = new Date(t) : n.createFromInputFallback(e)
            }

            function Oe(e, t, n, r, i) {
                var s = {};
                return "boolean" == typeof n && (r = n, n = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = i, s._l = n, s._i = e, s._f = t, s._strict = r, be(s)
            }

            function $e(e, t, n, r) {
                return Oe(e, t, n, r, !1)
            }

            function Ne(e, t) {
                var n, r;
                if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return $e();
                for (n = t[0], r = 1; r < t.length; ++r) t[r][e](n) && (n = t[r]);
                return n
            }

            function Te() {
                var e = [].slice.call(arguments, 0);
                return Ne("isBefore", e)
            }

            function Pe() {
                var e = [].slice.call(arguments, 0);
                return Ne("isAfter", e)
            }

            function xe(e) {
                var t = $(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    i = t.month || 0,
                    s = t.week || 0,
                    a = t.day || 0,
                    o = t.hour || 0,
                    u = t.minute || 0,
                    l = t.second || 0,
                    c = t.millisecond || 0;
                this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * o, this._days = +a + 7 * s, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = b(), this._bubble()
            }

            function Re(e) {
                return e instanceof xe
            }

            function Fe(e, t) {
                F(e, 0, 0, function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return 0 > e && (e = -e, n = "-"), n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
                })
            }

            function Ue(e) {
                var t = (e || "").match(Kn) || [],
                    n = t[t.length - 1] || [],
                    r = (n + "").match(Sr) || ["-", 0, 0],
                    i = +(60 * r[1]) + y(r[2]);
                return "+" === r[0] ? i : -i
            }

            function Ae(e, t) {
                var r, i;
                return t._isUTC ? (r = t.clone(), i = (v(e) || s(e) ? +e : +$e(e)) - +r, r._d.setTime(+r._d + i), n.updateOffset(r, !1), r) : $e(e).local()
            }

            function Ee(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function Ce(e, t) {
                var r, i = this._offset || 0;
                return null != e ? ("string" == typeof e && (e = Ue(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (r = Ee(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!t || this._changeInProgress ? et(this, qe(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : Ee(this)
            }

            function Ve(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }

            function Ge(e) {
                return this.utcOffset(0, e)
            }

            function Ie(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ee(this), "m")), this
            }

            function Le() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ue(this._i)), this
            }

            function We(e) {
                return e = e ? $e(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
            }

            function je() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function He() {
                if (this._a) {
                    var e = this._isUTC ? l(this._a) : $e(this._a);
                    return this.isValid() && g(this._a, e.toArray()) > 0
                }
                return !1
            }

            function Be() {
                return !this._isUTC
            }

            function Ze() {
                return this._isUTC
            }

            function ze() {
                return this._isUTC && 0 === this._offset
            }

            function qe(e, t) {
                var n, r, i, s = e,
                    a = null;
                return Re(e) ? s = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (a = wr.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
                    y: 0,
                    d: y(a[ar]) * n,
                    h: y(a[or]) * n,
                    m: y(a[ur]) * n,
                    s: y(a[lr]) * n,
                    ms: y(a[cr]) * n
                }) : (a = Dr.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
                    y: Je(a[2], n),
                    M: Je(a[3], n),
                    d: Je(a[4], n),
                    h: Je(a[5], n),
                    m: Je(a[6], n),
                    s: Je(a[7], n),
                    w: Je(a[8], n)
                }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (i = Xe($e(s.from), $e(s.to)), s = {}, s.ms = i.milliseconds, s.M = i.months), r = new xe(s), Re(e) && o(e, "_locale") && (r._locale = e._locale), r
            }

            function Je(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Qe(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Xe(e, t) {
                var n;
                return t = Ae(t, e), e.isBefore(t) ? n = Qe(e, t) : (n = Qe(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
            }

            function Ke(e, t) {
                return function(n, r) {
                    var i, s;
                    return null === r || isNaN(+r) || (te(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), s = n, n = r, r = s), n = "string" == typeof n ? +n : n, i = qe(n, r), et(this, i, e), this
                }
            }

            function et(e, t, r, i) {
                var s = t._milliseconds,
                    a = t._days,
                    o = t._months;
                i = null == i ? !0 : i, s && e._d.setTime(+e._d + s * r), a && P(e, "Date", T(e, "Date") + a * r), o && q(e, T(e, "Month") + o * r), i && n.updateOffset(e, a || o)
            }

            function tt(e) {
                var t = e || $e(),
                    n = Ae(t, this).startOf("day"),
                    r = this.diff(n, "days", !0),
                    i = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(i, this, $e(t)))
            }

            function nt() {
                return new p(this)
            }

            function rt(e, t) {
                var n;
                return t = O("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = v(e) ? e : $e(e), +this > +e) : (n = v(e) ? +e : +$e(e), n < +this.clone().startOf(t))
            }

            function it(e, t) {
                var n;
                return t = O("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = v(e) ? e : $e(e), +e > +this) : (n = v(e) ? +e : +$e(e), +this.clone().endOf(t) < n)
            }

            function st(e, t, n) {
                return this.isAfter(e, n) && this.isBefore(t, n)
            }

            function at(e, t) {
                var n;
                return t = O(t || "millisecond"), "millisecond" === t ? (e = v(e) ? e : $e(e), +this === +e) : (n = +$e(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
            }

            function ot(e) {
                return 0 > e ? Math.ceil(e) : Math.floor(e)
            }

            function ut(e, t, n) {
                var r, i, s = Ae(e, this),
                    a = 6e4 * (s.utcOffset() - this.utcOffset());
                return t = O(t), "year" === t || "month" === t || "quarter" === t ? (i = lt(this, s), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (r = this - s, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - a) / 864e5 : "week" === t ? (r - a) / 6048e5 : r), n ? i : ot(i)
            }

            function lt(e, t) {
                var n, r, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    s = e.clone().add(i, "months");
                return 0 > t - s ? (n = e.clone().add(i - 1, "months"), r = (t - s) / (s - n)) : (n = e.clone().add(i + 1, "months"), r = (t - s) / (n - s)), -(i + r)
            }

            function ct() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function ft() {
                var e = this.clone().utc();
                return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : E(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : E(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function dt(e) {
                var t = E(this, e || n.defaultFormat);
                return this.localeData().postformat(t)
            }

            function mt(e, t) {
                return this.isValid() ? qe({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function ht(e) {
                return this.from($e(), e)
            }

            function pt(e, t) {
                return this.isValid() ? qe({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function vt(e) {
                return this.to($e(), e)
            }

            function yt(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (t = b(e), null != t && (this._locale = t), this)
            }

            function gt() {
                return this._locale
            }

            function _t(e) {
                switch (e = O(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function Mt(e) {
                return e = O(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
            }

            function kt() {
                return +this._d - 6e4 * (this._offset || 0)
            }

            function St() {
                return Math.floor(+this / 1e3)
            }

            function wt() {
                return this._offset ? new Date(+this) : this._d
            }

            function Dt() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }

            function bt() {
                return d(this)
            }

            function Yt() {
                return u({}, f(this))
            }

            function Ot() {
                return f(this).overflow
            }

            function $t(e, t) {
                F(0, [e, e.length], 0, t)
            }

            function Nt(e, t, n) {
                return le($e([e, 11, 31 + t - n]), t, n).week
            }

            function Tt(e) {
                var t = le(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == e ? t : this.add(e - t, "y")
            }

            function Pt(e) {
                var t = le(this, 1, 4).year;
                return null == e ? t : this.add(e - t, "y")
            }

            function xt() {
                return Nt(this.year(), 1, 4)
            }

            function Rt() {
                var e = this.localeData()._week;
                return Nt(this.year(), e.dow, e.doy)
            }

            function Ft(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }

            function Ut(e, t) {
                if ("string" == typeof e)
                    if (isNaN(e)) {
                        if (e = t.weekdaysParse(e), "number" != typeof e) return null
                    } else e = parseInt(e, 10);
                return e
            }

            function At(e) {
                return this._weekdays[e.day()]
            }

            function Et(e) {
                return this._weekdaysShort[e.day()]
            }

            function Ct(e) {
                return this._weekdaysMin[e.day()]
            }

            function Vt(e) {
                var t, n, r;
                for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                    if (this._weekdaysParse[t] || (n = $e([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
            }

            function Gt(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = Ut(e, this.localeData()), this.add(e - t, "d")) : t
            }

            function It(e) {
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }

            function Lt(e) {
                return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            }

            function Wt(e, t) {
                F(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function jt(e, t) {
                return t._meridiemParse
            }

            function Ht(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }

            function Bt(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function Zt(e) {
                F(0, [e, 3], 0, "millisecond")
            }

            function zt() {
                return this._isUTC ? "UTC" : ""
            }

            function qt() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Jt(e) {
                return $e(1e3 * e)
            }

            function Qt() {
                return $e.apply(null, arguments).parseZone()
            }

            function Xt(e, t, n) {
                var r = this._calendar[e];
                return "function" == typeof r ? r.call(t, n) : r
            }

            function Kt(e) {
                var t = this._longDateFormat[e];
                return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e] = t), t
            }

            function en() {
                return this._invalidDate
            }

            function tn(e) {
                return this._ordinal.replace("%d", e)
            }

            function nn(e) {
                return e
            }

            function rn(e, t, n, r) {
                var i = this._relativeTime[n];
                return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
            }

            function sn(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
            }

            function an(e) {
                var t, n;
                for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function on(e, t, n, r) {
                var i = b(),
                    s = l().set(r, t);
                return i[n](s, e)
            }

            function un(e, t, n, r, i) {
                if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return on(e, t, n, i);
                var s, a = [];
                for (s = 0; r > s; s++) a[s] = on(e, s, n, i);
                return a
            }

            function ln(e, t) {
                return un(e, t, "months", 12, "month")
            }

            function cn(e, t) {
                return un(e, t, "monthsShort", 12, "month")
            }

            function fn(e, t) {
                return un(e, t, "weekdays", 7, "day")
            }

            function dn(e, t) {
                return un(e, t, "weekdaysShort", 7, "day")
            }

            function mn(e, t) {
                return un(e, t, "weekdaysMin", 7, "day")
            }

            function hn() {
                var e = this._data;
                return this._milliseconds = Br(this._milliseconds), this._days = Br(this._days), this._months = Br(this._months), e.milliseconds = Br(e.milliseconds), e.seconds = Br(e.seconds), e.minutes = Br(e.minutes), e.hours = Br(e.hours), e.months = Br(e.months), e.years = Br(e.years), this
            }

            function pn(e, t, n, r) {
                var i = qe(t, n);
                return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
            }

            function vn(e, t) {
                return pn(this, e, t, 1)
            }

            function yn(e, t) {
                return pn(this, e, t, -1)
            }

            function gn() {
                var e, t, n, r = this._milliseconds,
                    i = this._days,
                    s = this._months,
                    a = this._data,
                    o = 0;
                return a.milliseconds = r % 1e3, e = ot(r / 1e3), a.seconds = e % 60, t = ot(e / 60), a.minutes = t % 60, n = ot(t / 60), a.hours = n % 24, i += ot(n / 24), o = ot(_n(i)), i -= ot(Mn(o)), s += ot(i / 30), i %= 30, o += ot(s / 12), s %= 12, a.days = i, a.months = s,
                    a.years = o, this
            }

            function _n(e) {
                return 400 * e / 146097
            }

            function Mn(e) {
                return 146097 * e / 400
            }

            function kn(e) {
                var t, n, r = this._milliseconds;
                if (e = O(e), "month" === e || "year" === e) return t = this._days + r / 864e5, n = this._months + 12 * _n(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(Mn(this._months / 12)), e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return 24 * t + r / 36e5;
                    case "minute":
                        return 1440 * t + r / 6e4;
                    case "second":
                        return 86400 * t + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }

            function Sn() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
            }

            function wn(e) {
                return function() {
                    return this.as(e)
                }
            }

            function Dn(e) {
                return e = O(e), this[e + "s"]()
            }

            function bn(e) {
                return function() {
                    return this._data[e]
                }
            }

            function Yn() {
                return ot(this.days() / 7)
            }

            function On(e, t, n, r, i) {
                return i.relativeTime(t || 1, !!n, e, r)
            }

            function $n(e, t, n) {
                var r = qe(e).abs(),
                    i = ui(r.as("s")),
                    s = ui(r.as("m")),
                    a = ui(r.as("h")),
                    o = ui(r.as("d")),
                    u = ui(r.as("M")),
                    l = ui(r.as("y")),
                    c = i < li.s && ["s", i] || 1 === s && ["m"] || s < li.m && ["mm", s] || 1 === a && ["h"] || a < li.h && ["hh", a] || 1 === o && ["d"] || o < li.d && ["dd", o] || 1 === u && ["M"] || u < li.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
                return c[2] = t, c[3] = +e > 0, c[4] = n, On.apply(null, c)
            }

            function Nn(e, t) {
                return void 0 === li[e] ? !1 : void 0 === t ? li[e] : (li[e] = t, !0)
            }

            function Tn(e) {
                var t = this.localeData(),
                    n = $n(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }

            function Pn() {
                var e = ci(this.years()),
                    t = ci(this.months()),
                    n = ci(this.days()),
                    r = ci(this.hours()),
                    i = ci(this.minutes()),
                    s = ci(this.seconds() + this.milliseconds() / 1e3),
                    a = this.asSeconds();
                return a ? (0 > a ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
            }
            var xn, Rn, Fn = n.momentProperties = [],
                Un = !1,
                An = {},
                En = {},
                Cn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
                Vn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Gn = {},
                In = {},
                Ln = /\d/,
                Wn = /\d\d/,
                jn = /\d{3}/,
                Hn = /\d{4}/,
                Bn = /[+-]?\d{6}/,
                Zn = /\d\d?/,
                zn = /\d{1,3}/,
                qn = /\d{1,4}/,
                Jn = /[+-]?\d{1,6}/,
                Qn = /\d+/,
                Xn = /[+-]?\d+/,
                Kn = /Z|[+-]\d\d:?\d\d/gi,
                er = /[+-]?\d+(\.\d{1,3})?/,
                tr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                nr = {},
                rr = {},
                ir = 0,
                sr = 1,
                ar = 2,
                or = 3,
                ur = 4,
                lr = 5,
                cr = 6;
            F("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), F("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }), F("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }), Y("month", "M"), V("M", Zn), V("MM", Zn, Wn), V("MMM", tr), V("MMMM", tr), L(["M", "MM"], function(e, t) {
                t[sr] = y(e) - 1
            }), L(["MMM", "MMMM"], function(e, t, n, r) {
                var i = n._locale.monthsParse(e, r, n._strict);
                null != i ? t[sr] = i : f(n).invalidMonth = e
            });
            var fr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                dr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                mr = {};
            n.suppressDeprecationWarnings = !1;
            var hr = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                pr = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                    ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                    ["YYYY-DDD", /\d{4}-\d{3}/]
                ],
                vr = [
                    ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                    ["HH:mm", /(T| )\d\d:\d\d/],
                    ["HH", /(T| )\d\d/]
                ],
                yr = /^\/?Date\((\-?\d+)/i;
            n.createFromInputFallback = ee("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), F(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), F(0, ["YYYY", 4], 0, "year"), F(0, ["YYYYY", 5], 0, "year"), F(0, ["YYYYYY", 6, !0], 0, "year"), Y("year", "y"), V("Y", Xn), V("YY", Zn, Wn), V("YYYY", qn, Hn), V("YYYYY", Jn, Bn), V("YYYYYY", Jn, Bn), L(["YYYY", "YYYYY", "YYYYYY"], ir), L("YY", function(e, t) {
                t[ir] = n.parseTwoDigitYear(e)
            }), n.parseTwoDigitYear = function(e) {
                return y(e) + (y(e) > 68 ? 1900 : 2e3)
            };
            var gr = N("FullYear", !1);
            F("w", ["ww", 2], "wo", "week"), F("W", ["WW", 2], "Wo", "isoWeek"), Y("week", "w"), Y("isoWeek", "W"), V("w", Zn), V("ww", Zn, Wn), V("W", Zn), V("WW", Zn, Wn), W(["w", "ww", "W", "WW"], function(e, t, n, r) {
                t[r.substr(0, 1)] = y(e)
            });
            var _r = {
                dow: 0,
                doy: 6
            };
            F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Y("dayOfYear", "DDD"), V("DDD", zn), V("DDDD", jn), L(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = y(e)
            }), n.ISO_8601 = function() {};
            var Mr = ee("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                    var e = $e.apply(null, arguments);
                    return this > e ? this : e
                }),
                kr = ee("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                    var e = $e.apply(null, arguments);
                    return e > this ? this : e
                });
            Fe("Z", ":"), Fe("ZZ", ""), V("Z", Kn), V("ZZ", Kn), L(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0, n._tzm = Ue(e)
            });
            var Sr = /([\+\-]|\d\d)/gi;
            n.updateOffset = function() {};
            var wr = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
                Dr = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
            qe.fn = xe.prototype;
            var br = Ke(1, "add"),
                Yr = Ke(-1, "subtract");
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            var Or = ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            F(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), F(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), $t("gggg", "weekYear"), $t("ggggg", "weekYear"), $t("GGGG", "isoWeekYear"), $t("GGGGG", "isoWeekYear"), Y("weekYear", "gg"), Y("isoWeekYear", "GG"), V("G", Xn), V("g", Xn), V("GG", Zn, Wn), V("gg", Zn, Wn), V("GGGG", qn, Hn), V("gggg", qn, Hn), V("GGGGG", Jn, Bn), V("ggggg", Jn, Bn), W(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
                t[r.substr(0, 2)] = y(e)
            }), W(["gg", "GG"], function(e, t, r, i) {
                t[i] = n.parseTwoDigitYear(e)
            }), F("Q", 0, 0, "quarter"), Y("quarter", "Q"), V("Q", Ln), L("Q", function(e, t) {
                t[sr] = 3 * (y(e) - 1)
            }), F("D", ["DD", 2], "Do", "date"), Y("date", "D"), V("D", Zn), V("DD", Zn, Wn), V("Do", function(e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient
            }), L(["D", "DD"], ar), L("Do", function(e, t) {
                t[ar] = y(e.match(Zn)[0], 10)
            });
            var $r = N("Date", !0);
            F("d", 0, "do", "day"), F("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }), F("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }), F("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }), F("e", 0, 0, "weekday"), F("E", 0, 0, "isoWeekday"), Y("day", "d"), Y("weekday", "e"), Y("isoWeekday", "E"), V("d", Zn), V("e", Zn), V("E", Zn), V("dd", tr), V("ddd", tr), V("dddd", tr), W(["dd", "ddd", "dddd"], function(e, t, n) {
                var r = n._locale.weekdaysParse(e);
                null != r ? t.d = r : f(n).invalidWeekday = e
            }), W(["d", "e", "E"], function(e, t, n, r) {
                t[r] = y(e)
            });
            var Nr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Tr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Pr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            F("H", ["HH", 2], 0, "hour"), F("h", ["hh", 2], 0, function() {
                return this.hours() % 12 || 12
            }), Wt("a", !0), Wt("A", !1), Y("hour", "h"), V("a", jt), V("A", jt), V("H", Zn), V("h", Zn), V("HH", Zn, Wn), V("hh", Zn, Wn), L(["H", "HH"], or), L(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), L(["h", "hh"], function(e, t, n) {
                t[or] = y(e), f(n).bigHour = !0
            });
            var xr = /[ap]\.?m?\.?/i,
                Rr = N("Hours", !0);
            F("m", ["mm", 2], 0, "minute"), Y("minute", "m"), V("m", Zn), V("mm", Zn, Wn), L(["m", "mm"], ur);
            var Fr = N("Minutes", !1);
            F("s", ["ss", 2], 0, "second"), Y("second", "s"), V("s", Zn), V("ss", Zn, Wn), L(["s", "ss"], lr);
            var Ur = N("Seconds", !1);
            F("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), F(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), Zt("SSS"), Zt("SSSS"), Y("millisecond", "ms"), V("S", zn, Ln), V("SS", zn, Wn), V("SSS", zn, jn), V("SSSS", Qn), L(["S", "SS", "SSS", "SSSS"], function(e, t) {
                t[cr] = y(1e3 * ("0." + e))
            });
            var Ar = N("Milliseconds", !1);
            F("z", 0, 0, "zoneAbbr"), F("zz", 0, 0, "zoneName");
            var Er = p.prototype;
            Er.add = br, Er.calendar = tt, Er.clone = nt, Er.diff = ut, Er.endOf = Mt, Er.format = dt, Er.from = mt, Er.fromNow = ht, Er.to = pt, Er.toNow = vt, Er.get = x, Er.invalidAt = Ot, Er.isAfter = rt, Er.isBefore = it, Er.isBetween = st, Er.isSame = at, Er.isValid = bt, Er.lang = Or, Er.locale = yt, Er.localeData = gt, Er.max = kr, Er.min = Mr, Er.parsingFlags = Yt, Er.set = x, Er.startOf = _t, Er.subtract = Yr, Er.toArray = Dt, Er.toDate = wt, Er.toISOString = ft, Er.toJSON = ft, Er.toString = ct, Er.unix = St, Er.valueOf = kt, Er.year = gr, Er.isLeapYear = ue, Er.weekYear = Tt, Er.isoWeekYear = Pt, Er.quarter = Er.quarters = Ft, Er.month = J, Er.daysInMonth = Q, Er.week = Er.weeks = me, Er.isoWeek = Er.isoWeeks = he, Er.weeksInYear = Rt, Er.isoWeeksInYear = xt, Er.date = $r, Er.day = Er.days = Gt, Er.weekday = It, Er.isoWeekday = Lt, Er.dayOfYear = ve, Er.hour = Er.hours = Rr, Er.minute = Er.minutes = Fr, Er.second = Er.seconds = Ur, Er.millisecond = Er.milliseconds = Ar, Er.utcOffset = Ce, Er.utc = Ge, Er.local = Ie, Er.parseZone = Le, Er.hasAlignedHourOffset = We, Er.isDST = je, Er.isDSTShifted = He, Er.isLocal = Be, Er.isUtcOffset = Ze, Er.isUtc = ze, Er.isUTC = ze, Er.zoneAbbr = zt, Er.zoneName = qt, Er.dates = ee("dates accessor is deprecated. Use date instead.", $r), Er.months = ee("months accessor is deprecated. Use month instead", J), Er.years = ee("years accessor is deprecated. Use year instead", gr), Er.zone = ee("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ve);
            var Cr = Er,
                Vr = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                Gr = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY LT",
                    LLLL: "dddd, MMMM D, YYYY LT"
                },
                Ir = "Invalid date",
                Lr = "%d",
                Wr = /\d{1,2}/,
                jr = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Hr = _.prototype;
            Hr._calendar = Vr, Hr.calendar = Xt, Hr._longDateFormat = Gr, Hr.longDateFormat = Kt, Hr._invalidDate = Ir, Hr.invalidDate = en, Hr._ordinal = Lr, Hr.ordinal = tn, Hr._ordinalParse = Wr, Hr.preparse = nn, Hr.postformat = nn, Hr._relativeTime = jr, Hr.relativeTime = rn, Hr.pastFuture = sn, Hr.set = an, Hr.months = B, Hr._months = fr, Hr.monthsShort = Z, Hr._monthsShort = dr, Hr.monthsParse = z, Hr.week = ce, Hr._week = _r, Hr.firstDayOfYear = de, Hr.firstDayOfWeek = fe, Hr.weekdays = At, Hr._weekdays = Nr, Hr.weekdaysMin = Ct, Hr._weekdaysMin = Pr, Hr.weekdaysShort = Et, Hr._weekdaysShort = Tr, Hr.weekdaysParse = Vt, Hr.isPM = Ht, Hr._meridiemParse = xr, Hr.meridiem = Bt, w("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }), n.lang = ee("moment.lang is deprecated. Use moment.locale instead.", w), n.langData = ee("moment.langData is deprecated. Use moment.localeData instead.", b);
            var Br = Math.abs,
                Zr = wn("ms"),
                zr = wn("s"),
                qr = wn("m"),
                Jr = wn("h"),
                Qr = wn("d"),
                Xr = wn("w"),
                Kr = wn("M"),
                ei = wn("y"),
                ti = bn("milliseconds"),
                ni = bn("seconds"),
                ri = bn("minutes"),
                ii = bn("hours"),
                si = bn("days"),
                ai = bn("months"),
                oi = bn("years"),
                ui = Math.round,
                li = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                ci = Math.abs,
                fi = xe.prototype;
            fi.abs = hn, fi.add = vn, fi.subtract = yn, fi.as = kn, fi.asMilliseconds = Zr, fi.asSeconds = zr, fi.asMinutes = qr, fi.asHours = Jr, fi.asDays = Qr, fi.asWeeks = Xr, fi.asMonths = Kr, fi.asYears = ei, fi.valueOf = Sn, fi._bubble = gn, fi.get = Dn, fi.milliseconds = ti, fi.seconds = ni, fi.minutes = ri, fi.hours = ii, fi.days = si, fi.weeks = Yn, fi.months = ai, fi.years = oi, fi.humanize = Tn, fi.toISOString = Pn, fi.toString = Pn, fi.toJSON = Pn, fi.locale = yt, fi.localeData = gt, fi.toIsoString = ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Pn), fi.lang = Or, F("X", 0, 0, "unix"), F("x", 0, 0, "valueOf"), V("x", Xn), V("X", er), L("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), L("x", function(e, t, n) {
                n._d = new Date(y(e))
            }), n.version = "2.10.3", r($e), n.fn = Cr, n.min = Te, n.max = Pe, n.utc = l, n.unix = Jt, n.months = ln, n.isDate = s, n.locale = w, n.invalid = m, n.duration = qe, n.isMoment = v, n.weekdays = fn, n.parseZone = Qt, n.localeData = b, n.isDuration = Re, n.monthsShort = cn, n.weekdaysMin = mn, n.defineLocale = D, n.weekdaysShort = dn, n.normalizeUnits = O, n.relativeTimeThreshold = Nn;
            var di = n;
            return di
        })
    }, {}],
    3: [function(e, t, n) {
        ! function(e, r) {
            "function" == typeof define && define.amd ? define([], r) : "object" == typeof n ? t.exports = r() : e.StringMask = r()
        }(this, function() {
            function e(e, t) {
                for (var n = 0, r = t - 1, i = {
                    escape: !0
                }; r >= 0 && i && i.escape;) i = a[e.charAt(r)], n += i && i.escape ? 1 : 0, r--;
                return n > 0 && n % 2 === 1
            }

            function t(e, t) {
                var n = e.replace(/[^0]/g, "").length,
                    r = t.replace(/[^\d]/g, "").length;
                return r - n
            }

            function n(e, t, n, r) {
                return r && "function" == typeof r.transform && (t = r.transform(t)), n.reverse ? t + e : e + t
            }

            function r(e, t, n) {
                var i = e.charAt(t),
                    s = a[i];
                return "" === i ? !1 : s && !s.escape ? !0 : r(e, t + n, n)
            }

            function i(e, t, n) {
                var r = e.split("");
                return r.splice(n >= 0 ? n : 0, 0, t), r.join("")
            }

            function s(e, t) {
                this.options = t || {}, this.options = {
                    reverse: this.options.reverse || !1,
                    usedefaults: this.options.usedefaults || this.options.reverse
                }, this.pattern = e
            }
            var a = {
                0: {
                    pattern: /\d/,
                    _default: "0"
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    optional: !0,
                    recursive: !0
                },
                S: {
                    pattern: /[a-zA-Z]/
                },
                U: {
                    pattern: /[a-zA-Z]/,
                    transform: function(e) {
                        return e.toLocaleUpperCase()
                    }
                },
                L: {
                    pattern: /[a-zA-Z]/,
                    transform: function(e) {
                        return e.toLocaleLowerCase()
                    }
                },
                $: {
                    escape: !0
                }
            };
            return s.prototype.process = function(s) {
                function o(e) {
                    if (!p && r(u, y, v.inc)) return !0;
                    if (p || (p = h.length > 0), p) {
                        var t = h.shift();
                        if (h.push(t), e.reverse && f >= 0) return y++, u = i(u, t, y), !0;
                        if (!e.reverse && f < s.length) return u = i(u, t, y), !0
                    }
                    return y < u.length && y >= 0
                }
                if (!s) return "";
                s += "";
                for (var u = this.pattern, l = !0, c = "", f = this.options.reverse ? s.length - 1 : 0, d = t(u, s), m = !1, h = [], p = !1, v = {
                    start: this.options.reverse ? u.length - 1 : 0,
                    end: this.options.reverse ? -1 : u.length,
                    inc: this.options.reverse ? -1 : 1
                }, y = v.start; o(this.options); y += v.inc) {
                    var g = u.charAt(y),
                        _ = s.charAt(f),
                        M = a[g];
                    if (!p || _) {
                        if (this.options.reverse && e(u, y)) {
                            c = n(c, g, this.options, M), y += v.inc;
                            continue
                        }
                        if (!this.options.reverse && m) {
                            c = n(c, g, this.options, M), m = !1;
                            continue
                        }
                        if (!this.options.reverse && M && M.escape) {
                            m = !0;
                            continue
                        }
                    }
                    if (!p && M && M.recursive) h.push(g);
                    else {
                        if (p && !_) {
                            M && M.recursive || (c = n(c, g, this.options, M));
                            continue
                        }
                        if (h.length > 0 && M && !M.recursive) {
                            l = !1;
                            continue
                        }
                        if (!p && h.length > 0 && !_) continue
                    }
                    if (M)
                        if (M.optional) {
                            if (M.pattern.test(_) && d) c = n(c, _, this.options, M), f += v.inc, d--;
                            else if (h.length > 0 && _) {
                                l = !1;
                                break
                            }
                        } else if (M.pattern.test(_)) c = n(c, _, this.options, M), f += v.inc;
                        else {
                            if (_ || !M._default || !this.options.usedefaults) {
                                l = !1;
                                break
                            }
                            c = n(c, M._default, this.options, M)
                        } else c = n(c, g, this.options, M), !p && h.length && h.push(g)
                }
                return {
                    result: c,
                    valid: l
                }
            }, s.prototype.apply = function(e) {
                return this.process(e).result
            }, s.prototype.validate = function(e) {
                return this.process(e).valid
            }, s.process = function(e, t, n) {
                return new s(t, n).process(e)
            }, s.apply = function(e, t, n) {
                return new s(t, n).apply(e)
            }, s.validate = function(e, t, n) {
                return new s(t, n).validate(e)
            }, s
        })
    }, {}],
    4: [function(e, t, n) {
        t.exports = angular.module("ui.utils.masks", [e("./global/global-masks"), e("./br/br-masks"), e("./us/us-masks")]).name
    }, {
        "./br/br-masks": 6,
        "./global/global-masks": 15,
        "./us/us-masks": 23
    }],
    5: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("mask-factory"),
            s = new r("00000.00000 00000.000000 00000.000000 0 00000000000000");
        t.exports = i({
            clearValue: function(e) {
                return e.replace(/[^0-9]/g, "").slice(0, 47)
            },
            format: function(e) {
                return 0 === e.length ? e : s.apply(e).replace(/[^0-9]$/, "")
            },
            validations: {
                brBoletoBancario: function(e) {
                    return 47 === e.length
                }
            }
        })
    }, {
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    6: [function(e, t, n) {
        var r = angular.module("ui.utils.masks.br", [e("../helpers")]).directive("uiBrBoletoBancarioMask", e("./boleto-bancario/boleto-bancario")).directive("uiBrCepMask", e("./cep/cep")).directive("uiBrCnpjMask", e("./cnpj/cnpj")).directive("uiBrCpfMask", e("./cpf/cpf")).directive("uiBrCpfcnpjMask", e("./cpf-cnpj/cpf-cnpj")).directive("uiBrIeMask", e("./inscricao-estadual/ie")).directive("uiNfeAccessKeyMask", e("./nfe/nfe")).directive("uiBrPhoneNumber", e("./phone/br-phone"));
        t.exports = r.name
    }, {
        "../helpers": 21,
        "./boleto-bancario/boleto-bancario": 5,
        "./cep/cep": 7,
        "./cnpj/cnpj": 8,
        "./cpf-cnpj/cpf-cnpj": 9,
        "./cpf/cpf": 10,
        "./inscricao-estadual/ie": 11,
        "./nfe/nfe": 12,
        "./phone/br-phone": 13
    }],
    7: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("mask-factory"),
            s = new r("00000-000");
        t.exports = i({
            clearValue: function(e) {
                return e.replace(/[^0-9]/g, "").slice(0, 8)
            },
            format: function(e) {
                return (s.apply(e) || "").replace(/[^0-9]$/, "")
            },
            validations: {
                cep: function(e) {
                    return 8 === e.length
                }
            }
        })
    }, {
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    8: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("br-validations"),
            s = e("mask-factory"),
            a = new r("00.000.000/0000-00");
        t.exports = s({
            clearValue: function(e) {
                return e.replace(/[^\d]/g, "").slice(0, 14)
            },
            format: function(e) {
                return (a.apply(e) || "").trim().replace(/[^0-9]$/, "")
            },
            validations: {
                cnpj: function(e) {
                    return i.cnpj.validate(e)
                }
            }
        })
    }, {
        "br-validations": 1,
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    9: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("br-validations"),
            s = e("mask-factory"),
            a = new r("00.000.000/0000-00"),
            o = new r("000.000.000-00");
        t.exports = s({
            clearValue: function(e) {
                return e.replace(/[^\d]/g, "").slice(0, 14)
            },
            format: function(e) {
                var t;
                return t = e.length > 11 ? a.apply(e) : o.apply(e) || "", t.trim().replace(/[^0-9]$/, "")
            },
            validations: {
                cpf: function(e) {
                    return e.length > 11 || i.cpf.validate(e)
                },
                cnpj: function(e) {
                    return e.length <= 11 || i.cnpj.validate(e)
                }
            }
        })
    }, {
        "br-validations": 1,
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    10: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("br-validations"),
            s = e("mask-factory"),
            a = new r("000.000.000-00");
        t.exports = s({
            clearValue: function(e) {
                return e.replace(/[^\d]/g, "").slice(0, 11)
            },
            format: function(e) {
                return (a.apply(e) || "").trim().replace(/[^0-9]$/, "")
            },
            validations: {
                cpf: function(e) {
                    return i.cpf.validate(e)
                }
            }
        })
    }, {
        "br-validations": 1,
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    11: [function(e, t, n) {
        function r(e) {
            function t(e) {
                return e ? e.replace(/[^0-9]/g, "") : e
            }

            function n(e, n) {
                if (!e || !a[e]) return void 0;
                if ("SP" === e && /^P/i.test(n)) return a.SP[1].mask;
                for (var r = a[e], i = 0; r[i].chars && r[i].chars < t(n).length && i < r.length - 1;) i++;
                return r[i].mask
            }

            function r(e, r) {
                var i = n(r, e);
                if (!i) return e;
                var s = i.process(t(e)),
                    a = s.result || "";
                return a = a.trim().replace(/[^0-9]$/, ""), "SP" === r && /^p/i.test(e) ? "P" + a : a
            }
            var a = {
                AC: [{
                    mask: new i("00.000.000/000-00")
                }],
                AL: [{
                    mask: new i("000000000")
                }],
                AM: [{
                    mask: new i("00.000.000-0")
                }],
                AP: [{
                    mask: new i("000000000")
                }],
                BA: [{
                    chars: 8,
                    mask: new i("000000-00")
                }, {
                    mask: new i("0000000-00")
                }],
                CE: [{
                    mask: new i("00000000-0")
                }],
                DF: [{
                    mask: new i("00000000000-00")
                }],
                ES: [{
                    mask: new i("00000000-0")
                }],
                GO: [{
                    mask: new i("00.000.000-0")
                }],
                MA: [{
                    mask: new i("000000000")
                }],
                MG: [{
                    mask: new i("000.000.000/0000")
                }],
                MS: [{
                    mask: new i("000000000")
                }],
                MT: [{
                    mask: new i("0000000000-0")
                }],
                PA: [{
                    mask: new i("00-000000-0")
                }],
                PB: [{
                    mask: new i("00000000-0")
                }],
                PE: [{
                    chars: 9,
                    mask: new i("0000000-00")
                }, {
                    mask: new i("00.0.000.0000000-0")
                }],
                PI: [{
                    mask: new i("000000000")
                }],
                PR: [{
                    mask: new i("000.00000-00")
                }],
                RJ: [{
                    mask: new i("00.000.00-0")
                }],
                RN: [{
                    chars: 9,
                    mask: new i("00.000.000-0")
                }, {
                    mask: new i("00.0.000.000-0")
                }],
                RO: [{
                    mask: new i("0000000000000-0")
                }],
                RR: [{
                    mask: new i("00000000-0")
                }],
                RS: [{
                    mask: new i("000/0000000")
                }],
                SC: [{
                    mask: new i("000.000.000")
                }],
                SE: [{
                    mask: new i("00000000-0")
                }],
                SP: [{
                    mask: new i("000.000.000.000")
                }, {
                    mask: new i("-00000000.0/000")
                }],
                TO: [{
                    mask: new i("00000000000")
                }]
            };
            return {
                restrict: "A",
                require: "ngModel",
                link: function(n, i, a, o) {
                    function u(e) {
                        return o.$isEmpty(e) ? e : r(e, c)
                    }

                    function l(e) {
                        if (o.$isEmpty(e)) return e;
                        var n = r(e, c),
                            i = t(n);
                        return o.$viewValue !== n && (o.$setViewValue(n), o.$render()), c && "SP" === c.toUpperCase() && /^p/i.test(e) ? "P" + i : i
                    }
                    var c = (e(a.uiBrIeMask)(n) || "").toUpperCase();
                    o.$formatters.push(u), o.$parsers.push(l), o.$validators.ie = function(e) {
                        return o.$isEmpty(e) || s.ie(c).validate(e)
                    }, n.$watch(a.uiBrIeMask, function(e) {
                        c = (e || "").toUpperCase(), l(o.$viewValue), o.$validate()
                    })
                }
            }
        }
        var i = e("string-mask"),
            s = e("br-validations");
        r.$inject = ["$parse"], t.exports = r
    }, {
        "br-validations": 1,
        "string-mask": 3
    }],
    12: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("mask-factory"),
            s = new r("0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000");
        t.exports = i({
            clearValue: function(e) {
                return e.replace(/[^0-9]/g, "").slice(0, 44)
            },
            format: function(e) {
                return (s.apply(e) || "").replace(/[^0-9]$/, "")
            },
            validations: {
                nfeAccessKey: function(e) {
                    return 44 === e.length
                }
            }
        })
    }, {
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    13: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("mask-factory"),
            s = new r("(00) 0000-0000"),
            a = new r("(00) 00000-0000");
        t.exports = i({
            clearValue: function(e) {
                return e.toString().replace(/[^0-9]/g, "").slice(0, 11)
            },
            format: function(e) {
                var t;
                return t = e.length < 11 ? s.apply(e) || "" : a.apply(e), t.trim().replace(/[^0-9]$/, "")
            },
            getModelValue: function(e, t) {
                var n = this.clearValue(e);
                return "number" === t ? parseInt(n) : n
            },
            validations: {
                brPhoneNumber: function(e) {
                    var t = e && e.toString().length;
                    return 10 === t || 11 === t
                }
            }
        })
    }, {
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    14: [function(e, t, n) {
        function r(e) {
            var t = {
                    "pt-br": "DD/MM/YYYY"
                },
                n = t[e.id] || "YYYY-MM-DD";
            return {
                restrict: "A",
                require: "ngModel",
                link: function(e, t, r, a) {
                    function o(e) {
                        if (a.$isEmpty(e)) return e;
                        var t = e;
                        "object" == typeof e && (t = i(e).format(n)), t = t.replace(/[^0-9]/g, "");
                        var r = u.apply(t) || "";
                        return r.trim().replace(/[^0-9]$/, "")
                    }
                    var u = new s(n.replace(/[YMD]/g, "0"));
                    a.$formatters.push(o), a.$parsers.push(function(e) {
                        if (a.$isEmpty(e)) return e;
                        var t = o(e);
                        return a.$viewValue !== t && (a.$setViewValue(t), a.$render()), i(t, n).toDate()
                    }), a.$validators.date = function(e, t) {
                        return a.$isEmpty(e) ? !0 : i(t, n).isValid() && t.length === n.length
                    }
                }
            }
        }
        var i = e("moment"),
            s = e("string-mask");
        r.$inject = ["$locale"], t.exports = r
    }, {
        moment: 2,
        "string-mask": 3
    }],
    15: [function(e, t, n) {
        var r = angular.module("ui.utils.masks.global", [e("../helpers")]).directive("uiDateMask", e("./date/date")).directive("uiMoneyMask", e("./money/money")).directive("uiNumberMask", e("./number/number")).directive("uiPercentageMask", e("./percentage/percentage")).directive("uiScientificNotationMask", e("./scientific-notation/scientific-notation")).directive("uiTimeMask", e("./time/time"));
        t.exports = r.name
    }, {
        "../helpers": 21,
        "./date/date": 14,
        "./money/money": 16,
        "./number/number": 17,
        "./percentage/percentage": 18,
        "./scientific-notation/scientific-notation": 19,
        "./time/time": 20
    }],
    16: [function(e, t, n) {
        function r(e, t, n) {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(r, a, o, u) {
                    function l(e) {
                        var t = e > 0 ? d + new Array(e + 1).join("0") : "",
                            n = h + " #" + m + "##0" + t;
                        return new i(n, {
                            reverse: !0
                        })
                    }

                    function c(e) {
                        if (u.$isEmpty(e)) return e;
                        var t = n.prepareNumberToFormatter(e, p);
                        return v.apply(t)
                    }

                    function f(e) {
                        if (u.$isEmpty(e)) return e;
                        var t = e.replace(/[^\d]+/g, "");
                        t = t.replace(/^[0]+([1-9])/, "$1");
                        var n = v.apply(t);
                        return e !== n && (u.$setViewValue(n), u.$render()), n ? parseInt(n.replace(/[^\d]+/g, "")) / Math.pow(10, p) : null
                    }
                    var d = e.NUMBER_FORMATS.DECIMAL_SEP,
                        m = e.NUMBER_FORMATS.GROUP_SEP,
                        h = '£',
                        p = t(o.uiMoneyMask)(r);
                    angular.isDefined(o.uiHideGroupSep) && (m = ""), isNaN(p) && (p = 2);
                    var v = l(p);
                    if (u.$formatters.push(c), u.$parsers.push(f), o.uiMoneyMask && r.$watch(o.uiMoneyMask, function(e) {
                            p = isNaN(e) ? 2 : e, v = l(p), f(u.$viewValue)
                        }), o.min) {
                        var y;
                        u.$validators.min = function(e) {
                            return s.minNumber(u, e, y)
                        }, r.$watch(o.min, function(e) {
                            y = e, u.$validate()
                        })
                    }
                    if (o.max) {
                        var g;
                        u.$validators.max = function(e) {
                            return s.maxNumber(u, e, g)
                        }, r.$watch(o.max, function(e) {
                            g = e, u.$validate()
                        })
                    }
                }
            }
        }
        var i = e("string-mask"),
            s = e("validators");
        r.$inject = ["$locale", "$parse", "PreFormatters"], t.exports = r
    }, {
        "string-mask": 3,
        validators: "validators"
    }],
    17: [function(e, t, n) {
        function r(e, t, n, r) {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(s, a, o, u) {
                    function l(e) {
                        if (u.$isEmpty(e)) return e;
                        var t = n.clearDelimitersAndLeadingZeros(e) || "0",
                            r = h.apply(t),
                            i = parseFloat(p.apply(t));
                        if (angular.isDefined(o.uiNegativeNumber)) {
                            var s = "-" === e[0],
                                a = "-" === e.slice(-1);
                            a ^ s && i && (i *= -1, r = "-" + r)
                        }
                        return u.$viewValue !== r && (u.$setViewValue(r), u.$render()), i
                    }

                    function c(e) {
                        if (u.$isEmpty(e)) return e;
                        var t = angular.isDefined(o.uiNegativeNumber) && 0 > e ? "-" : "",
                            r = n.prepareNumberToFormatter(e, m);
                        return t + h.apply(r)
                    }
                    var f = e.NUMBER_FORMATS.DECIMAL_SEP,
                        d = e.NUMBER_FORMATS.GROUP_SEP,
                        m = t(o.uiNumberMask)(s);
                    angular.isDefined(o.uiHideGroupSep) && (d = ""), isNaN(m) && (m = 2);
                    var h = r.viewMask(m, f, d),
                        p = r.modelMask(m);
                    if (u.$formatters.push(c), u.$parsers.push(l), o.uiNumberMask && s.$watch(o.uiNumberMask, function(e) {
                            m = isNaN(e) ? 2 : e, h = r.viewMask(m, f, d), p = r.modelMask(m), l(u.$viewValue)
                        }), o.min) {
                        var v;
                        u.$validators.min = function(e) {
                            return i.minNumber(u, e, v)
                        }, s.$watch(o.min, function(e) {
                            v = e, u.$validate()
                        })
                    }
                    if (o.max) {
                        var y;
                        u.$validators.max = function(e) {
                            return i.maxNumber(u, e, y)
                        }, s.$watch(o.max, function(e) {
                            y = e, u.$validate()
                        })
                    }
                }
            }
        }
        var i = e("validators");
        r.$inject = ["$locale", "$parse", "PreFormatters", "NumberMasks"], t.exports = r
    }, {
        validators: "validators"
    }],
    18: [function(e, t, n) {
        function r(e, t, n, r) {
            function s(e, t, r) {
                return n.clearDelimitersAndLeadingZeros((parseFloat(e) * r).toFixed(t))
            }
            return {
                restrict: "A",
                require: "ngModel",
                link: function(t, a, o, u) {
                    function l(e) {
                        if (u.$isEmpty(e)) return e;
                        var t = s(e, m, h.multiplier);
                        return v.apply(t) + " %"
                    }

                    function c(e) {
                        if (u.$isEmpty(e)) return e;
                        var t = n.clearDelimitersAndLeadingZeros(e) || "0";
                        e.length > 1 && -1 === e.indexOf("%") && (t = t.slice(0, t.length - 1));
                        var r = v.apply(t) + " %",
                            i = parseFloat(y.apply(t));
                        return u.$viewValue !== r && (u.$setViewValue(r), u.$render()), i
                    }
                    var f = e.NUMBER_FORMATS.DECIMAL_SEP,
                        d = e.NUMBER_FORMATS.GROUP_SEP,
                        m = parseInt(o.uiPercentageMask),
                        h = {
                            multiplier: 100,
                            decimalMask: 2
                        };
                    angular.isDefined(o.uiHideGroupSep) && (d = ""), angular.isDefined(o.uiPercentageValue) && (h.multiplier = 1, h.decimalMask = 0), isNaN(m) && (m = 2);
                    var p = m + h.decimalMask,
                        v = r.viewMask(m, f, d),
                        y = r.modelMask(p);
                    if (u.$formatters.push(l), u.$parsers.push(c), o.uiPercentageMask && t.$watch(o.uiPercentageMask, function(e) {
                            m = isNaN(e) ? 2 : e, angular.isDefined(o.uiPercentageValue) && (h.multiplier = 1, h.decimalMask = 0), p = m + h.decimalMask, v = r.viewMask(m, f, d), y = r.modelMask(p), c(u.$viewValue)
                        }), o.min) {
                        var g;
                        u.$validators.min = function(e) {
                            return i.minNumber(u, e, g)
                        }, t.$watch(o.min, function(e) {
                            g = e, u.$validate()
                        })
                    }
                    if (o.max) {
                        var _;
                        u.$validators.max = function(e) {
                            return i.maxNumber(u, e, _)
                        }, t.$watch(o.max, function(e) {
                            _ = e, u.$validate()
                        })
                    }
                }
            }
        }
        var i = e("validators");
        r.$inject = ["$locale", "$parse", "PreFormatters", "NumberMasks"], t.exports = r
    }, {
        validators: "validators"
    }],
    19: [function(e, t, n) {
        function r(e, t) {
            function n(e) {
                var t = "0";
                if (e > 0) {
                    t += r;
                    for (var n = 0; e > n; n++) t += "0"
                }
                return new i(t, {
                    reverse: !0
                })
            }
            var r = e.NUMBER_FORMATS.DECIMAL_SEP,
                s = 2;
            return {
                restrict: "A",
                require: "ngModel",
                link: function(e, i, a, o) {
                    function u(e) {
                        var t = e.toString(),
                            n = t.match(/(-?[0-9]*)[\.]?([0-9]*)?[Ee]?([\+-]?[0-9]*)?/);
                        return {
                            integerPartOfSignificand: n[1],
                            decimalPartOfSignificand: n[2],
                            exponent: 0 | n[3]
                        }
                    }

                    function l(e) {
                        if (o.$isEmpty(e)) return e;
                        "string" == typeof e ? e = e.replace(r, ".") : "number" == typeof e && (e = e.toExponential(f));
                        var t, n, i = u(e),
                            s = i.integerPartOfSignificand || 0,
                            a = s.toString();
                        angular.isDefined(i.decimalPartOfSignificand) && (a += i.decimalPartOfSignificand);
                        var l = (s >= 1 || -1 >= s) && (angular.isDefined(i.decimalPartOfSignificand) && i.decimalPartOfSignificand.length > f || 0 === f && a.length >= 2);
                        return l && (n = a.slice(f + 1, a.length), a = a.slice(0, f + 1)), t = d.apply(a), 0 !== i.exponent && (n = i.exponent), angular.isDefined(n) && (t += "e" + n), t
                    }

                    function c(e) {
                        if (o.$isEmpty(e)) return e;
                        var t = l(e),
                            n = parseFloat(t.replace(r, "."));
                        return o.$viewValue !== t && (o.$setViewValue(t), o.$render()), n
                    }
                    var f = t(a.uiScientificNotationMask)(e);
                    isNaN(f) && (f = s);
                    var d = n(f);
                    o.$formatters.push(l), o.$parsers.push(c), o.$validators.max = function(e) {
                        return o.$isEmpty(e) || e < Number.MAX_VALUE
                    }
                }
            }
        }
        var i = e("string-mask");
        r.$inject = ["$locale", "$parse"], t.exports = r
    }, {
        "string-mask": 3
    }],
    20: [function(e, t, n) {
        var r = e("string-mask");
        t.exports = function() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(e, t, n, i) {
                    function s(e) {
                        if (i.$isEmpty(e)) return e;
                        var t = e.replace(/[^0-9]/g, "").slice(0, u) || "";
                        return (l.apply(t) || "").replace(/[^0-9]$/, "")
                    }
                    var a = "00:00:00";
                    angular.isDefined(n.uiTimeMask) && "short" === n.uiTimeMask && (a = "00:00");
                    var o = a.length,
                        u = a.replace(":", "").length,
                        l = new r(a);
                    i.$formatters.push(s), i.$parsers.push(function(e) {
                        if (i.$isEmpty(e)) return e;
                        var t = s(e),
                            n = t;
                        return i.$viewValue !== t && (i.$setViewValue(t), i.$render()), n
                    }), i.$validators.time = function(e) {
                        if (i.$isEmpty(e)) return !0;
                        var t = e.toString().split(/:/).filter(function(e) {
                                return !!e
                            }),
                            n = parseInt(t[0]),
                            r = parseInt(t[1]),
                            s = parseInt(t[2] || 0);
                        return e.toString().length === o && 24 > n && 60 > r && 60 > s
                    }
                }
            }
        }
    }, {
        "string-mask": 3
    }],
    21: [function(e, t, n) {
        var r = e("string-mask"),
            i = angular.module("ui.utils.masks.helpers", []);
        t.exports = i.name, i.factory("PreFormatters", [function() {
            function e(e) {
                var t = e.replace(/^-/, "").replace(/^0*/, "");
                return t = t.replace(/[^0-9]/g, "")
            }

            function t(t, n) {
                return e(parseFloat(t).toFixed(n))
            }
            return {
                clearDelimitersAndLeadingZeros: e,
                prepareNumberToFormatter: t
            }
        }]).factory("NumberValidators", [function() {
            return {
                maxNumber: function(e, t, n) {
                    var r = parseFloat(n),
                        i = e.$isEmpty(t) || isNaN(r) || r >= t;
                    return e.$setValidity("max", i), t
                },
                minNumber: function(e, t, n) {
                    var r = parseFloat(n),
                        i = e.$isEmpty(t) || isNaN(r) || t >= r;
                    return e.$setValidity("min", i), t
                }
            }
        }]).factory("NumberMasks", [function() {
            return {
                viewMask: function(e, t, n) {
                    var i = "#" + n + "##0";
                    if (e > 0) {
                        i += t;
                        for (var s = 0; e > s; s++) i += "0"
                    }
                    return new r(i, {
                        reverse: !0
                    })
                },
                modelMask: function(e) {
                    var t = "###0";
                    if (e > 0) {
                        t += ".";
                        for (var n = 0; e > n; n++) t += "0"
                    }
                    return new r(t, {
                        reverse: !0
                    })
                }
            }
        }])
    }, {
        "string-mask": 3
    }],
    22: [function(e, t, n) {
        var r = e("string-mask"),
            i = e("mask-factory"),
            s = new r("(000) 000-0000"),
            a = new r("+00-00-000-000000");
        t.exports = i({
            clearValue: function(e) {
                return e.toString().replace(/[^0-9]/g, "")
            },
            format: function(e) {
                var t;
                return t = e.length < 11 ? s.apply(e) || "" : a.apply(e), t.trim().replace(/[^0-9]$/, "")
            },
            validations: {
                usPhoneNumber: function(e) {
                    return e.length > 9
                }
            }
        })
    }, {
        "mask-factory": "mask-factory",
        "string-mask": 3
    }],
    23: [function(e, t, n) {
        var r = angular.module("ui.utils.masks.us", [e("../helpers")]).directive("uiUsPhoneNumber", e("./phone/us-phone"));
        t.exports = r.name
    }, {
        "../helpers": 21,
        "./phone/us-phone": 22
    }],
    "mask-factory": [function(e, t, n) {
        t.exports = function(e) {
            return function() {
                return {
                    restrict: "A",
                    require: "ngModel",
                    link: function(t, n, r, i) {
                        i.$formatters.push(function(t) {
                            if (i.$isEmpty(t)) return t;
                            var n = e.clearValue(t);
                            return e.format(n)
                        }), i.$parsers.push(function(t) {
                            if (i.$isEmpty(t)) return t;
                            var n = e.clearValue(t),
                                r = e.format(n);
                            if (i.$viewValue !== r && (i.$setViewValue(r), i.$render()), angular.isUndefined(e.getModelValue)) return n;
                            var s = typeof i.$modelValue;
                            return e.getModelValue(r, s)
                        }), angular.forEach(e.validations, function(e, t) {
                            i.$validators[t] = function(t, n) {
                                return i.$isEmpty(t) || e(t, n)
                            }
                        })
                    }
                }
            }
        }
    }, {}],
    validators: [function(e, t, n) {
        t.exports = {
            maxNumber: function(e, t, n) {
                var r = parseFloat(n, 10);
                return e.$isEmpty(t) || isNaN(r) || r >= t
            },
            minNumber: function(e, t, n) {
                var r = parseFloat(n, 10);
                return e.$isEmpty(t) || isNaN(r) || t >= r
            }
        }
    }, {}]
}, {}, [4]);
"use strict";
angular.module("unsavedChanges", ["resettable"]).provider("unsavedWarningsConfig", function() {
    var f = this;
    var e = false;
    var b = true;
    var d = ["$locationChangeStart", "$stateChangeStart"];
    var c = "You will lose unsaved changes if you leave this page";
    var a = "You will lose unsaved changes if you reload this page";
    Object.defineProperty(f, "navigateMessage", {
        get: function() {
            return c
        },
        set: function(g) {
            c = g
        }
    });
    Object.defineProperty(f, "reloadMessage", {
        get: function() {
            return a
        },
        set: function(g) {
            a = g
        }
    });
    Object.defineProperty(f, "useTranslateService", {
        get: function() {
            return b
        },
        set: function(g) {
            b = !!(g)
        }
    });
    Object.defineProperty(f, "routeEvent", {
        get: function() {
            return d
        },
        set: function(g) {
            if (typeof g === "string") {
                g = [g]
            }
            d = g
        }
    });
    Object.defineProperty(f, "logEnabled", {
        get: function() {
            return e
        },
        set: function(g) {
            e = !!(g)
        }
    });
    this.$get = ["$injector", function(h) {
        function i(j) {
            if (h.has("$translate") && b) {
                return h.get("$translate").instant(j)
            } else {
                return false
            }
        }
        var g = {
            log: function() {
                if (console.log && e && arguments.length) {
                    var j = [].slice.call(arguments);
                    if (typeof console.log === "object") {
                        log.apply.call(console.log, console, j)
                    } else {
                        console.log.apply(console, j)
                    }
                }
            }
        };
        Object.defineProperty(g, "useTranslateService", {
            get: function() {
                return b
            }
        });
        Object.defineProperty(g, "reloadMessage", {
            get: function() {
                return i(a) || a
            }
        });
        Object.defineProperty(g, "navigateMessage", {
            get: function() {
                return i(c) || c
            }
        });
        Object.defineProperty(g, "routeEvent", {
            get: function() {
                return d
            }
        });
        Object.defineProperty(g, "logEnabled", {
            get: function() {
                return e
            }
        });
        return g
    }]
}).service("unsavedWarningSharedService", ["$rootScope", "unsavedWarningsConfig", "$injector", "$window", function(j, c, k, d) {
    var i = this;
    var a = [];
    var g = true;
    var e = [];
    this.allForms = function() {
        return a
    };

    function h() {
        g = true;
        angular.forEach(a, function(m, l) {
            c.log("Form : " + m.$name + " dirty : " + m.$dirty);
            if (m.$dirty) {
                g = false
            }
        });
        return g
    }
    this.init = function(l) {
        if (a.length === 0) {
            f()
        }
        c.log("Registering form", l);
        a.push(l)
    };
    this.removeForm = function(m) {
        var l = a.indexOf(m);
        if (l === -1) {
            return
        }
        a.splice(l, 1);
        c.log("Removing form from watch list", m);
        if (a.length === 0) {
            b()
        }
    };

    function b() {
        c.log("No more forms, tearing down");
        angular.forEach(e, function(l) {
            l()
        });
        e = [];
        d.onbeforeunload = null
    }
    this.confirmExit = function() {
        if (!h()) {
            return c.reloadMessage
        }
        j.$broadcast("resetResettables");
        b()
    };

    function f() {
        c.log("Setting up");
        d.onbeforeunload = i.confirmExit;
        var l = c.routeEvent;
        angular.forEach(l, function(m) {
            var n = j.$on(m, function(p, o, q) {
                c.log("user is moving with " + m);
                if (!h()) {
                    c.log("a form is dirty");
                    if (!confirm(c.navigateMessage)) {
                        c.log("user wants to cancel leaving");
                        p.preventDefault()
                    } else {
                        c.log("user doesn't care about loosing stuff");
                        j.$broadcast("resetResettables")
                    }
                } else {
                    c.log("all forms are clean")
                }
            });
            e.push(n)
        })
    }
}]).directive("unsavedWarningClear", ["unsavedWarningSharedService", function(a) {
    return {
        scope: {},
        require: "^form",
        priority: 10,
        link: function(d, c, b, e) {
            c.bind("click", function(f) {
                e.$setPristine()
            })
        }
    }
}]).directive("unsavedWarningForm", ["unsavedWarningSharedService", "$rootScope", function(b, a) {
    return {
        scope: {},
        require: "^form",
        link: function(e, d, c, g) {
            var f = 0;
            while (d[0].tagName !== "FORM" && f < 3) {
                f++;
                d = d.parent()
            }
            if (f >= 3) {
                throw ("unsavedWarningForm must be inside a form element")
            }
            b.init(g);
            d.bind("submit", function(h) {
                if (g.$valid) {
                    g.$setPristine()
                }
            });
            d.bind("reset", function(h) {
                h.preventDefault();
                var i = angular.element(d[0].querySelector("[resettable]"));
                if (i.length) {
                    e.$apply(i.triggerHandler("resetResettables"))
                }
                g.$setPristine()
            });
            e.$on("$destroy", function() {
                b.removeForm(g)
            })
        }
    }
}]);
angular.module("resettable", []).directive("resettable", ["$parse", "$compile", "$rootScope", function(d, c, b) {
    return {
        restrict: "A",
        link: function a(m, g, j, e) {
            var h, k, l;
            j.$observe("ngModel", function(n) {
                k = d(j.ngModel);
                h = k.assign;
                l = k(m)
            });
            var i = function() {
                h(m, l)
            };
            g.on("resetResettables", i);
            var f = m.$on("resetResettables", i);
            m.$on("$destroy", f)
        }
    }
}]);
/*! angular-pageslide-directive 2015-06-29 */

angular.module("pageslide-directive", []).directive("pageslide", [function() {
    return {
        restrict: "EAC",
        transclude: !1,
        scope: {
            psOpen: "=?",
            psAutoClose: "=?",
            psSide: "@",
            psSpeed: "@",
            psClass: "@",
            psSize: "@",
            psSqueeze: "@",
            psCloak: "@",
            psPush: "@",
            psContainer: "@"
        },
        link: function(a, b, c) {
            function d(b, c) {
                if (b && 0 !== b.style.width && 0 !== b.style.width) switch (c.cloak && g.css("display", "none"), c.side) {
                    case "right":
                        b.style.width = "0px", c.squeeze && (i.style.right = "0px"), c.push && (i.style.right = "0px", i.style.left = "0px");
                        break;
                    case "left":
                        b.style.width = "0px", c.squeeze && (i.style.left = "0px"), c.push && (i.style.left = "0px", i.style.right = "0px");
                        break;
                    case "top":
                        b.style.height = "0px", c.squeeze && (i.style.top = "0px"), c.push && (i.style.top = "0px", i.style.bottom = "0px");
                        break;
                    case "bottom":
                        b.style.height = "0px", c.squeeze && (i.style.bottom = "0px"), c.push && (i.style.bottom = "0px", i.style.top = "0px")
                }
                a.psOpen = !1
            }

            function e(a, b) {
                if (0 !== a.style.width && 0 !== a.style.width) {
                    switch (b.side) {
                        case "right":
                            a.style.width = b.size, b.squeeze && (i.style.right = b.size), b.push && (i.style.right = b.size, i.style.left = "-" + b.size);
                            break;
                        case "left":
                            a.style.width = b.size, b.squeeze && (i.style.left = b.size), b.push && (i.style.left = b.size, i.style.right = "-" + b.size);
                            break;
                        case "top":
                            a.style.height = b.size, b.squeeze && (i.style.top = b.size), b.push && (i.style.top = b.size, i.style.bottom = "-" + b.size);
                            break;
                        case "bottom":
                            a.style.height = b.size, b.squeeze && (i.style.bottom = b.size), b.push && (i.style.bottom = b.size, i.style.top = "-" + b.size)
                    }
                    setTimeout(function() {
                        b.cloak && g.css("display", "block")
                    }, 1e3 * b.speed)
                }
            }
            var f = {};
            f.side = a.psSide || "right", f.speed = a.psSpeed || "0.5", f.size = a.psSize || "300px", f.zindex = 1e3, f.className = a.psClass || "ng-pageslide", f.cloak = a.psCloak && "false" == a.psCloak.toLowerCase() ? !1 : !0, f.squeeze = Boolean(a.psSqueeze) || !1, f.push = Boolean(a.psPush) || !1, f.container = a.psContainer || !1, b.addClass(f.className);
            var g = null,
                h = null,
                i = f.container ? document.getElementById(f.container) : document.body;
            if (h = b[0], "div" !== h.tagName.toLowerCase() && "pageslide" !== h.tagName.toLowerCase()) throw new Error("Pageslide can only be applied to <div> or <pageslide> elements");
            if (0 === h.children.length) throw new Error("You have to content inside the <pageslide>");
            switch (g = angular.element(h.children), i.appendChild(h), h.style.zIndex = f.zindex, h.style.position = f.container !== !1 ? "absolute" : "fixed", h.style.width = 0, h.style.height = 0, h.style.overflow = "hidden", h.style.transitionDuration = f.speed + "s", h.style.webkitTransitionDuration = f.speed + "s", h.style.transitionProperty = "width, height", f.squeeze && (i.style.position = "absolute", i.style.transitionDuration = f.speed + "s", i.style.webkitTransitionDuration = f.speed + "s", i.style.transitionProperty = "top, bottom, left, right"), f.side) {
                case "right":
                    h.style.height = c.psCustomHeight || "100%", h.style.top = c.psCustomTop || "0px", h.style.bottom = c.psCustomBottom || "0px", h.style.right = c.psCustomRight || "0px";
                    break;
                case "left":
                    h.style.height = c.psCustomHeight || "100%", h.style.top = c.psCustomTop || "0px", h.style.bottom = c.psCustomBottom || "0px", h.style.left = c.psCustomLeft || "0px";
                    break;
                case "top":
                    h.style.width = c.psCustomWidth || "100%", h.style.left = c.psCustomLeft || "0px", h.style.top = c.psCustomTop || "0px", h.style.right = c.psCustomRight || "0px";
                    break;
                case "bottom":
                    h.style.width = c.psCustomWidth || "100%", h.style.bottom = c.psCustomBottom || "0px", h.style.left = c.psCustomLeft || "0px", h.style.right = c.psCustomRight || "0px"
            }
            a.$watch("psOpen", function(a) {
                a ? e(h, f) : d(h, f)
            }), a.$on("$destroy", function() {
                i.removeChild(h)
            }), a.psAutoClose && (a.$on("$locationChangeStart", function() {
                d(h, f)
            }), a.$on("$stateChangeStart", function() {
                d(h, f)
            }))
        }
    }
}]);
/**
 * angular-elastic-input
 * A directive for AngularJS which automatically resizes the width of input field according to the content, while typing.
 * @version: 2.2.0
 * @author: Jacek Pulit <jacek.pulit@gmail.com>
 * @license: MIT License
 * @build: Wednesday, September 9th, 2015, 10:55:43 PM GMT+0200
 */

(function() {
    "use strict";
    angular.module("puElasticInput", []).directive("puElasticInput", ["$document", "$window", function(a, b) {
        function c(a, c, d) {
            var e = b.getComputedStyle(c[0]),
                f = "none" === e.maxWidth ? c.parent().prop("clientWidth") : e.maxWidth;
            c.css("minWidth", d.puElasticInputMinwidth || e.minWidth), c.css("maxWidth", d.puElasticInputMaxwidth || f), angular.forEach(["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing"], function(b) {
                a.css(b, e[b])
            }), a.css("paddingLeft", e.textIndent), "border-box" === e.boxSizing ? angular.forEach(["paddingLeft", "paddingRight", "borderLeftStyle", "borderLeftWidth", "borderRightStyle", "borderRightWidth"], function(b) {
                a.css(b, e[b])
            }) : "padding-box" === e.boxSizing && angular.forEach(["paddingLeft", "paddingRight"], function(b) {
                a.css(b, e[b])
            })
        }
        var d = angular.element('<div style="position:fixed; top:-999px; left:0;"></div>');
        return angular.element(a[0].body).append(d), {
            restrict: "A",
            link: function(a, b, e) {
                function f() {
                    g.text(b.val() || e.placeholder || "");
                    var a = parseInt(e.puElasticInputWidthDelta) || 1;
                    b.css("width", g.prop("offsetWidth") + a + "px")
                }
                e.$set("ngTrim", "true" === e.ngTrim ? "true" : "false");
                var g = angular.element('<span style="white-space:pre;"></span>');
                c(g, b, e), d.append(g), f(), e.ngModel ? a.$watch(e.ngModel, f) : b.on("keydown keyup focus input propertychange change", f), a.$on("$destroy", function() {
                    g.remove()
                })
            }
        }
    }]);
})();
/*
 AngularJS v1.4.5
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
 */

(function(x, s, y) {
    'use strict';

    function t(f, k, p) {
        n.directive(f, ["$parse", "$swipe", function(c, e) {
            return function(l, m, g) {
                function h(a) {
                    if (!b) return !1;
                    var d = Math.abs(a.y - b.y);
                    a = (a.x - b.x) * k;
                    return r && 75 > d && 0 < a && 30 < a && .3 > d / a
                }
                var d = c(g[f]),
                    b, r, a = ["touch"];
                s.isDefined(g.ngSwipeDisableMouse) || a.push("mouse");
                e.bind(m, {
                    start: function(a, d) {
                        b = a;
                        r = !0
                    },
                    cancel: function(a) {
                        r = !1
                    },
                    end: function(a, b) {
                        h(a) && l.$apply(function() {
                            m.triggerHandler(p);
                            d(l, {
                                $event: b
                            })
                        })
                    }
                }, a)
            }
        }])
    }
    var n = s.module("ngTouch", []);
    n.factory("$swipe", [function() {
        function f(c) {
            c = c.originalEvent || c;
            var e = c.touches && c.touches.length ? c.touches : [c];
            c = c.changedTouches && c.changedTouches[0] || e[0];
            return {
                x: c.clientX,
                y: c.clientY
            }
        }

        function k(c, e) {
            var l = [];
            s.forEach(c, function(c) {
                (c = p[c][e]) && l.push(c)
            });
            return l.join(" ")
        }
        var p = {
            mouse: {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            touch: {
                start: "touchstart",
                move: "touchmove",
                end: "touchend",
                cancel: "touchcancel"
            }
        };
        return {
            bind: function(c, e, l) {
                var m, g, h, d, b = !1;
                l = l || ["mouse", "touch"];
                c.on(k(l, "start"), function(a) {
                    h =
                        f(a);
                    b = !0;
                    g = m = 0;
                    d = h;
                    e.start && e.start(h, a)
                });
                var r = k(l, "cancel");
                if (r) c.on(r, function(a) {
                    b = !1;
                    e.cancel && e.cancel(a)
                });
                c.on(k(l, "move"), function(a) {
                    if (b && h) {
                        var c = f(a);
                        m += Math.abs(c.x - d.x);
                        g += Math.abs(c.y - d.y);
                        d = c;
                        10 > m && 10 > g || (g > m ? (b = !1, e.cancel && e.cancel(a)) : (a.preventDefault(), e.move && e.move(c, a)))
                    }
                });
                c.on(k(l, "end"), function(a) {
                    b && (b = !1, e.end && e.end(f(a), a))
                })
            }
        }
    }]);
    n.config(["$provide", function(f) {
        f.decorator("ngClickDirective", ["$delegate", function(k) {
            k.shift();
            return k
        }])
    }]);
    n.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(f, k, p) {
        function c(d, b, c) {
            for (var a = 0; a < d.length; a += 2) {
                var e = d[a + 1],
                    g = c;
                if (25 > Math.abs(d[a] - b) && 25 > Math.abs(e - g)) return d.splice(a, a + 2), !0
            }
            return !1
        }

        function e(d) {
            if (!(2500 < Date.now() - m)) {
                var b = d.touches && d.touches.length ? d.touches : [d],
                    e = b[0].clientX,
                    b = b[0].clientY;
                if (!(1 > e && 1 > b || h && h[0] === e && h[1] === b)) {
                    h && (h = null);
                    var a = d.target;
                    "label" === s.lowercase(a.nodeName || a[0] && a[0].nodeName) && (h = [e, b]);
                    c(g, e, b) || (d.stopPropagation(), d.preventDefault(), d.target &&
                    d.target.blur && d.target.blur())
                }
            }
        }

        function l(d) {
            d = d.touches && d.touches.length ? d.touches : [d];
            var b = d[0].clientX,
                c = d[0].clientY;
            g.push(b, c);
            k(function() {
                for (var a = 0; a < g.length; a += 2)
                    if (g[a] == b && g[a + 1] == c) {
                        g.splice(a, a + 2);
                        break
                    }
            }, 2500, !1)
        }
        var m, g, h;
        return function(d, b, h) {
            var a = f(h.ngClick),
                k = !1,
                q, n, t, v;
            b.on("touchstart", function(a) {
                k = !0;
                q = a.target ? a.target : a.srcElement;
                3 == q.nodeType && (q = q.parentNode);
                b.addClass("ng-click-active");
                n = Date.now();
                a = a.originalEvent || a;
                a = (a.touches && a.touches.length ? a.touches : [a])[0];
                t = a.clientX;
                v = a.clientY
            });
            b.on("touchcancel", function(a) {
                k = !1;
                b.removeClass("ng-click-active")
            });
            b.on("touchend", function(a) {
                var d = Date.now() - n,
                    f = a.originalEvent || a,
                    u = (f.changedTouches && f.changedTouches.length ? f.changedTouches : f.touches && f.touches.length ? f.touches : [f])[0],
                    f = u.clientX,
                    u = u.clientY,
                    w = Math.sqrt(Math.pow(f - t, 2) + Math.pow(u - v, 2));
                k && 750 > d && 12 > w && (g || (p[0].addEventListener("click", e, !0), p[0].addEventListener("touchstart", l, !0), g = []), m = Date.now(), c(g, f, u), q && q.blur(), s.isDefined(h.disabled) &&
                !1 !== h.disabled || b.triggerHandler("click", [a]));
                k = !1;
                b.removeClass("ng-click-active")
            });
            b.onclick = function(a) {};
            b.on("click", function(b, c) {
                d.$apply(function() {
                    a(d, {
                        $event: c || b
                    })
                })
            });
            b.on("mousedown", function(a) {
                b.addClass("ng-click-active")
            });
            b.on("mousemove mouseup", function(a) {
                b.removeClass("ng-click-active")
            })
        }
    }]);
    t("ngSwipeLeft", -1, "swipeleft");
    t("ngSwipeRight", 1, "swiperight")
})(window, window.angular);
// Chosen, a Select Box Enhancer for jQuery and Prototype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 1.0.0
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `grunt build`, do not edit it by hand.
(function() {
    var $, AbstractChosen, Chosen, SelectParser, _ref,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };

    SelectParser = (function() {
        function SelectParser() {
            this.options_index = 0;
            this.parsed = [];
        }

        SelectParser.prototype.add_node = function(child) {
            if (child.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(child);
            } else {
                return this.add_option(child);
            }
        };

        SelectParser.prototype.add_group = function(group) {
            var group_position, option, _i, _len, _ref, _results;

            group_position = this.parsed.length;
            this.parsed.push({
                array_index: group_position,
                group: true,
                label: this.escapeExpression(group.label),
                children: 0,
                disabled: group.disabled
            });
            _ref = group.childNodes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                _results.push(this.add_option(option, group_position, group.disabled));
            }
            return _results;
        };

        SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
            if (option.nodeName.toUpperCase() === "OPTION") {
                if (option.text !== "") {
                    if (group_position != null) {
                        this.parsed[group_position].children += 1;
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: option.value,
                        text: option.text,
                        html: option.innerHTML,
                        selected: option.selected,
                        disabled: group_disabled === true ? group_disabled : option.disabled,
                        group_array_index: group_position,
                        classes: option.className,
                        style: option.style.cssText
                    });
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    });
                }
                return this.options_index += 1;
            }
        };

        SelectParser.prototype.escapeExpression = function(text) {
            var map, unsafe_chars;

            if ((text == null) || text === false) {
                return "";
            }
            if (!/[\&\<\>\"\'\`]/.test(text)) {
                return text;
            }
            map = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
            return text.replace(unsafe_chars, function(chr) {
                return map[chr] || "&amp;";
            });
        };

        return SelectParser;

    })();

    SelectParser.select_to_array = function(select) {
        var child, parser, _i, _len, _ref;

        parser = new SelectParser();
        _ref = select.childNodes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            parser.add_node(child);
        }
        return parser.parsed;
    };

    AbstractChosen = (function() {
        function AbstractChosen(form_field, options) {
            this.form_field = form_field;
            this.options = options != null ? options : {};
            if (!AbstractChosen.browser_is_supported()) {
                return;
            }
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
        }

        AbstractChosen.prototype.set_default_values = function() {
            var _this = this;

            this.click_test_action = function(evt) {
                return _this.test_active_click(evt);
            };
            this.activate_action = function(evt) {
                return _this.activate_field(evt);
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.result_single_selected = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.group_search = this.options.group_search != null ? this.options.group_search : true;
            this.search_contains = this.options.search_contains || false;
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            this.inherit_select_classes = this.options.inherit_select_classes || false;
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
            return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
        };

        AbstractChosen.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder");
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
        };

        AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = true;
        };

        AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = false;
        };

        AbstractChosen.prototype.input_focus = function(evt) {
            var _this = this;

            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout((function() {
                        return _this.container_mousedown();
                    }), 50);
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field();
                }
            }
        };

        AbstractChosen.prototype.input_blur = function(evt) {
            var _this = this;

            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function() {
                    return _this.blur_test();
                }), 100);
            }
        };

        AbstractChosen.prototype.results_option_build = function(options) {
            var content, data, _i, _len, _ref;

            content = '';
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                data = _ref[_i];
                if (data.group) {
                    content += this.result_add_group(data);
                } else {
                    content += this.result_add_option(data);
                }
                if (options != null ? options.first : void 0) {
                    if (data.selected && this.is_multiple) {
                        this.choice_build(data);
                    } else if (data.selected && !this.is_multiple) {
                        this.single_set_selected_text(data.text);
                    }
                }
            }
            return content;
        };

        AbstractChosen.prototype.result_add_option = function(option) {
            var classes, style;

            if (!option.search_match) {
                return '';
            }
            if (!this.include_option_in_results(option)) {
                return '';
            }
            classes = [];
            if (!option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("active-result");
            }
            if (option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("disabled-result");
            }
            if (option.selected) {
                classes.push("result-selected");
            }
            if (option.group_array_index != null) {
                classes.push("group-option");
            }
            if (option.classes !== "") {
                classes.push(option.classes);
            }
            style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
            return "<li class=\"" + (classes.join(' ')) + "\"" + style + " data-option-array-index=\"" + option.array_index + "\">" + option.search_text + "</li>";
        };

        AbstractChosen.prototype.result_add_group = function(group) {
            if (!(group.search_match || group.group_match)) {
                return '';
            }
            if (!(group.active_options > 0)) {
                return '';
            }
            return "<li class=\"group-result\">" + group.search_text + "</li>";
        };

        AbstractChosen.prototype.results_update_field = function() {
            this.set_default_text();
            if (!this.is_multiple) {
                this.results_reset_cleanup();
            }
            this.result_clear_highlight();
            this.result_single_selected = null;
            this.results_build();
            if (this.results_showing) {
                return this.winnow_results();
            }
        };

        AbstractChosen.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.results_search = function(evt) {
            if (this.results_showing) {
                return this.winnow_results();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.winnow_results = function() {
            var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;

            this.no_results_clear();
            results = 0;
            searchText = this.get_search_text();
            escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            regexAnchor = this.search_contains ? "" : "^";
            regex = new RegExp(regexAnchor + escapedSearchText, 'i');
            zregex = new RegExp(escapedSearchText, 'i');
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                option.search_match = false;
                results_group = null;
                if (this.include_option_in_results(option)) {
                    if (option.group) {
                        option.group_match = false;
                        option.active_options = 0;
                    }
                    if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
                        results_group = this.results_data[option.group_array_index];
                        if (results_group.active_options === 0 && results_group.search_match) {
                            results += 1;
                        }
                        results_group.active_options += 1;
                    }
                    if (!(option.group && !this.group_search)) {
                        option.search_text = option.group ? option.label : option.html;
                        option.search_match = this.search_string_match(option.search_text, regex);
                        if (option.search_match && !option.group) {
                            results += 1;
                        }
                        if (option.search_match) {
                            if (searchText.length) {
                                startpos = option.search_text.search(zregex);
                                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
                            }
                            if (results_group != null) {
                                results_group.group_match = true;
                            }
                        } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
                            option.search_match = true;
                        }
                    }
                }
            }
            this.result_clear_highlight();
            if (results < 1 && searchText.length) {
                this.update_results_content("");
                return this.no_results(searchText);
            } else {
                this.update_results_content(this.results_option_build());
                return this.winnow_results_set_highlight();
            }
        };

        AbstractChosen.prototype.search_string_match = function(search_string, regex) {
            var part, parts, _i, _len;

            if (regex.test(search_string)) {
                return true;
            } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
                parts = search_string.replace(/\[|\]/g, "").split(" ");
                if (parts.length) {
                    for (_i = 0, _len = parts.length; _i < _len; _i++) {
                        part = parts[_i];
                        if (regex.test(part)) {
                            return true;
                        }
                    }
                }
            }
        };

        AbstractChosen.prototype.choices_count = function() {
            var option, _i, _len, _ref;

            if (this.selected_option_count != null) {
                return this.selected_option_count;
            }
            this.selected_option_count = 0;
            _ref = this.form_field.options;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                if (option.selected) {
                    this.selected_option_count += 1;
                }
            }
            return this.selected_option_count;
        };

        AbstractChosen.prototype.choices_click = function(evt) {
            evt.preventDefault();
            if (!(this.results_showing || this.is_disabled)) {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.keyup_checker = function(evt) {
            var stroke, _ref;

            stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            this.search_field_scale();
            switch (stroke) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                        return this.keydown_backstroke();
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search();
                    }
                    break;
                case 13:
                    evt.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(evt);
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide();
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search();
            }
        };

        AbstractChosen.prototype.container_width = function() {
            if (this.options.width != null) {
                return this.options.width;
            } else {
                return "" + this.form_field.offsetWidth + "px";
            }
        };

        AbstractChosen.prototype.include_option_in_results = function(option) {
            if (this.is_multiple && (!this.display_selected_options && option.selected)) {
                return false;
            }
            if (!this.display_disabled_options && option.disabled) {
                return false;
            }
            if (option.empty) {
                return false;
            }
            return true;
        };

        AbstractChosen.browser_is_supported = function() {
            if (window.navigator.appName === "Microsoft Internet Explorer") {
                return document.documentMode >= 8;
            }
            if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
                return false;
            }
            if (/Android/i.test(window.navigator.userAgent)) {
                if (/Mobile/i.test(window.navigator.userAgent)) {
                    return false;
                }
            }
            return true;
        };

        AbstractChosen.default_multiple_text = "Select Some Options";

        AbstractChosen.default_single_text = "Select an Option";

        AbstractChosen.default_no_result_text = "No results match";

        return AbstractChosen;

    })();

    $ = jQuery;

    $.fn.extend({
        chosen: function(options) {
            if (!AbstractChosen.browser_is_supported()) {
                return this;
            }
            return this.each(function(input_field) {
                var $this, chosen;

                $this = $(this);
                chosen = $this.data('chosen');
                if (options === 'destroy' && chosen) {
                    chosen.destroy();
                } else if (!chosen) {
                    $this.data('chosen', new Chosen(this, options));
                }
            });
        }
    });

    Chosen = (function(_super) {
        __extends(Chosen, _super);

        function Chosen() {
            _ref = Chosen.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        Chosen.prototype.setup = function() {
            this.form_field_jq = $(this.form_field);
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
        };

        Chosen.prototype.set_up_html = function() {
            var container_classes, container_props;

            container_classes = ["chosen-container"];
            container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                container_classes.push(this.form_field.className);
            }
            if (this.is_rtl) {
                container_classes.push("chosen-rtl");
            }
            container_props = {
                'class': container_classes.join(' '),
                'style': "width: " + (this.container_width()) + ";",
                'title': this.form_field.title
            };
            if (this.form_field.id.length) {
                container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
            }
            this.container = $("<div />", container_props);
            if (this.is_multiple) {
                this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
            } else {
                this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
            }
            this.form_field_jq.hide().after(this.container);
            this.dropdown = this.container.find('div.chosen-drop').first();
            this.search_field = this.container.find('input').first();
            this.search_results = this.container.find('ul.chosen-results').first();
            this.search_field_scale();
            this.search_no_results = this.container.find('li.no-results').first();
            if (this.is_multiple) {
                this.search_choices = this.container.find('ul.chosen-choices').first();
                this.search_container = this.container.find('li.search-field').first();
            } else {
                this.search_container = this.container.find('div.chosen-search').first();
                this.selected_item = this.container.find('.chosen-single').first();
            }
            this.results_build();
            this.set_tab_index();
            this.set_label_behavior();
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            });
        };

        Chosen.prototype.register_observers = function() {
            var _this = this;

            this.container.bind('mousedown.chosen', function(evt) {
                _this.container_mousedown(evt);
            });
            this.container.bind('mouseup.chosen', function(evt) {
                _this.container_mouseup(evt);
            });
            this.container.bind('mouseenter.chosen', function(evt) {
                _this.mouse_enter(evt);
            });
            this.container.bind('mouseleave.chosen', function(evt) {
                _this.mouse_leave(evt);
            });
            this.search_results.bind('mouseup.chosen', function(evt) {
                _this.search_results_mouseup(evt);
            });
            this.search_results.bind('mouseover.chosen', function(evt) {
                _this.search_results_mouseover(evt);
            });
            this.search_results.bind('mouseout.chosen', function(evt) {
                _this.search_results_mouseout(evt);
            });
            this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
                _this.search_results_mousewheel(evt);
            });
            this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
                _this.results_update_field(evt);
            });
            this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
                _this.activate_field(evt);
            });
            this.form_field_jq.bind("chosen:open.chosen", function(evt) {
                _this.container_mousedown(evt);
            });
            this.search_field.bind('blur.chosen', function(evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('keyup.chosen', function(evt) {
                _this.keyup_checker(evt);
            });
            this.search_field.bind('keydown.chosen', function(evt) {
                _this.keydown_checker(evt);
            });
            this.search_field.bind('focus.chosen', function(evt) {
                _this.input_focus(evt);
            });
            if (this.is_multiple) {
                return this.search_choices.bind('click.chosen', function(evt) {
                    _this.choices_click(evt);
                });
            } else {
                return this.container.bind('click.chosen', function(evt) {
                    evt.preventDefault();
                });
            }
        };

        Chosen.prototype.destroy = function() {
            $(document).unbind("click.chosen", this.click_test_action);
            if (this.search_field[0].tabIndex) {
                this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
            }
            this.container.remove();
            this.form_field_jq.removeData('chosen');
            return this.form_field_jq.show();
        };

        Chosen.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass('chosen-disabled');
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus.chosen", this.activate_action);
                }
                return this.close_field();
            } else {
                this.container.removeClass('chosen-disabled');
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus.chosen", this.activate_action);
                }
            }
        };

        Chosen.prototype.container_mousedown = function(evt) {
            if (!this.is_disabled) {
                if (evt && evt.type === "mousedown" && !this.results_showing) {
                    evt.preventDefault();
                }
                if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("");
                        }
                        $(document).bind('click.chosen', this.click_test_action);
                        this.results_show();
                    } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
                        evt.preventDefault();
                        this.results_toggle();
                    }
                    return this.activate_field();
                }
            }
        };

        Chosen.prototype.container_mouseup = function(evt) {
            if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(evt);
            }
        };

        Chosen.prototype.search_results_mousewheel = function(evt) {
            var delta, _ref1, _ref2;

            delta = -((_ref1 = evt.originalEvent) != null ? _ref1.wheelDelta : void 0) || ((_ref2 = evt.originialEvent) != null ? _ref2.detail : void 0);
            if (delta != null) {
                evt.preventDefault();
                if (evt.type === 'DOMMouseScroll') {
                    delta = delta * 40;
                }
                return this.search_results.scrollTop(delta + this.search_results.scrollTop());
            }
        };

        Chosen.prototype.blur_test = function(evt) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field();
            }
        };

        Chosen.prototype.close_field = function() {
            $(document).unbind("click.chosen", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chosen-container-active");
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale();
        };

        Chosen.prototype.activate_field = function() {
            this.container.addClass("chosen-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus();
        };

        Chosen.prototype.test_active_click = function(evt) {
            if (this.container.is($(evt.target).closest('.chosen-container'))) {
                return this.active_field = true;
            } else {
                return this.close_field();
            }
        };

        Chosen.prototype.results_build = function() {
            this.parsing = true;
            this.selected_option_count = null;
            this.results_data = SelectParser.select_to_array(this.form_field);
            if (this.is_multiple) {
                this.search_choices.find("li.search-choice").remove();
            } else if (!this.is_multiple) {
                this.single_set_selected_text();
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.search_field[0].readOnly = true;
                    this.container.addClass("chosen-container-single-nosearch");
                } else {
                    this.search_field[0].readOnly = false;
                    this.container.removeClass("chosen-container-single-nosearch");
                }
            }
            this.update_results_content(this.results_option_build({
                first: true
            }));
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            return this.parsing = false;
        };

        Chosen.prototype.result_do_highlight = function(el) {
            var high_bottom, high_top, maxHeight, visible_bottom, visible_top;

            if (el.length) {
                this.result_clear_highlight();
                this.result_highlight = el;
                this.result_highlight.addClass("highlighted");
                maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
                visible_top = this.search_results.scrollTop();
                visible_bottom = maxHeight + visible_top;
                high_top = this.result_highlight.position().top + this.search_results.scrollTop();
                high_bottom = high_top + this.result_highlight.outerHeight();
                if (high_bottom >= visible_bottom) {
                    return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
                } else if (high_top < visible_top) {
                    return this.search_results.scrollTop(high_top);
                }
            }
        };

        Chosen.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted");
            }
            return this.result_highlight = null;
        };

        Chosen.prototype.results_show = function() {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                });
                return false;
            }
            this.container.addClass("chosen-with-drop");
            this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            });
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            return this.winnow_results();
        };

        Chosen.prototype.update_results_content = function(content) {
            return this.search_results.html(content);
        };

        Chosen.prototype.results_hide = function() {
            if (this.results_showing) {
                this.result_clear_highlight();
                this.container.removeClass("chosen-with-drop");
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                });
            }
            return this.results_showing = false;
        };

        Chosen.prototype.set_tab_index = function(el) {
            var ti;

            if (this.form_field.tabIndex) {
                ti = this.form_field.tabIndex;
                this.form_field.tabIndex = -1;
                return this.search_field[0].tabIndex = ti;
            }
        };

        Chosen.prototype.set_label_behavior = function() {
            var _this = this;

            this.form_field_label = this.form_field_jq.parents("label");
            if (!this.form_field_label.length && this.form_field.id.length) {
                this.form_field_label = $("label[for='" + this.form_field.id + "']");
            }
            if (this.form_field_label.length > 0) {
                return this.form_field_label.bind('click.chosen', function(evt) {
                    if (_this.is_multiple) {
                        return _this.container_mousedown(evt);
                    } else {
                        return _this.activate_field();
                    }
                });
            }
        };

        Chosen.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default");
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default");
            }
        };

        Chosen.prototype.search_results_mouseup = function(evt) {
            var target;

            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target.length) {
                this.result_highlight = target;
                this.result_select(evt);
                return this.search_field.focus();
            }
        };

        Chosen.prototype.search_results_mouseover = function(evt) {
            var target;

            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target) {
                return this.result_do_highlight(target);
            }
        };

        Chosen.prototype.search_results_mouseout = function(evt) {
            if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
                return this.result_clear_highlight();
            }
        };

        Chosen.prototype.choice_build = function(item) {
            var choice, close_link,
                _this = this;

            choice = $('<li />', {
                "class": "search-choice"
            }).html("<span>" + item.html + "</span>");
            if (item.disabled) {
                choice.addClass('search-choice-disabled');
            } else {
                close_link = $('<a />', {
                    "class": 'search-choice-close',
                    'data-option-array-index': item.array_index
                });
                close_link.bind('click.chosen', function(evt) {
                    return _this.choice_destroy_link_click(evt);
                });
                choice.append(close_link);
            }
            return this.search_container.before(choice);
        };

        Chosen.prototype.choice_destroy_link_click = function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (!this.is_disabled) {
                return this.choice_destroy($(evt.target));
            }
        };

        Chosen.prototype.choice_destroy = function(link) {
            if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
                this.show_search_field_default();
                if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
                    this.results_hide();
                }
                link.parents('li').first().remove();
                return this.search_field_scale();
            }
        };

        Chosen.prototype.results_reset = function() {
            this.form_field.options[0].selected = true;
            this.selected_option_count = null;
            this.single_set_selected_text();
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide();
            }
        };

        Chosen.prototype.results_reset_cleanup = function() {
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.selected_item.find("abbr").remove();
        };

        Chosen.prototype.result_select = function(evt) {
            var high, item, selected_index;

            if (this.result_highlight) {
                high = this.result_highlight;
                this.result_clear_highlight();
                if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                    this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    });
                    return false;
                }
                if (this.is_multiple) {
                    high.removeClass("active-result");
                } else {
                    if (this.result_single_selected) {
                        this.result_single_selected.removeClass("result-selected");
                        selected_index = this.result_single_selected[0].getAttribute('data-option-array-index');
                        this.results_data[selected_index].selected = false;
                    }
                    this.result_single_selected = high;
                }
                high.addClass("result-selected");
                item = this.results_data[high[0].getAttribute("data-option-array-index")];
                item.selected = true;
                this.form_field.options[item.options_index].selected = true;
                this.selected_option_count = null;
                if (this.is_multiple) {
                    this.choice_build(item);
                } else {
                    this.single_set_selected_text(item.text);
                }
                if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
                    this.results_hide();
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
                    this.form_field_jq.trigger("change", {
                        'selected': this.form_field.options[item.options_index].value
                    });
                }
                this.current_selectedIndex = this.form_field.selectedIndex;
                return this.search_field_scale();
            }
        };

        Chosen.prototype.single_set_selected_text = function(text) {
            if (text == null) {
                text = this.default_text;
            }
            if (text === this.default_text) {
                this.selected_item.addClass("chosen-default");
            } else {
                this.single_deselect_control_build();
                this.selected_item.removeClass("chosen-default");
            }
            return this.selected_item.find("span").text(text);
        };

        Chosen.prototype.result_deselect = function(pos) {
            var result_data;

            result_data = this.results_data[pos];
            if (!this.form_field.options[result_data.options_index].disabled) {
                result_data.selected = false;
                this.form_field.options[result_data.options_index].selected = false;
                this.selected_option_count = null;
                this.result_clear_highlight();
                if (this.results_showing) {
                    this.winnow_results();
                }
                this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[result_data.options_index].value
                });
                this.search_field_scale();
                return true;
            } else {
                return false;
            }
        };

        Chosen.prototype.single_deselect_control_build = function() {
            if (!this.allow_single_deselect) {
                return;
            }
            if (!this.selected_item.find("abbr").length) {
                this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
            }
            return this.selected_item.addClass("chosen-single-with-deselect");
        };

        Chosen.prototype.get_search_text = function() {
            if (this.search_field.val() === this.default_text) {
                return "";
            } else {
                return $('<div/>').text($.trim(this.search_field.val())).html();
            }
        };

        Chosen.prototype.winnow_results_set_highlight = function() {
            var do_high, selected_results;

            selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
            do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
            if (do_high != null) {
                return this.result_do_highlight(do_high);
            }
        };

        Chosen.prototype.no_results = function(terms) {
            var no_results_html;

            no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            no_results_html.find("span").first().html(terms);
            return this.search_results.append(no_results_html);
        };

        Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove();
        };

        Chosen.prototype.keydown_arrow = function() {
            var next_sib;

            if (this.results_showing && this.result_highlight) {
                next_sib = this.result_highlight.nextAll("li.active-result").first();
                if (next_sib) {
                    return this.result_do_highlight(next_sib);
                }
            } else {
                return this.results_show();
            }
        };

        Chosen.prototype.keyup_arrow = function() {
            var prev_sibs;

            if (!this.results_showing && !this.is_multiple) {
                return this.results_show();
            } else if (this.result_highlight) {
                prev_sibs = this.result_highlight.prevAll("li.active-result");
                if (prev_sibs.length) {
                    return this.result_do_highlight(prev_sibs.first());
                } else {
                    if (this.choices_count() > 0) {
                        this.results_hide();
                    }
                    return this.result_clear_highlight();
                }
            }
        };

        Chosen.prototype.keydown_backstroke = function() {
            var next_available_destroy;

            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke();
            } else {
                next_available_destroy = this.search_container.siblings("li.search-choice").last();
                if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = next_available_destroy;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke();
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus");
                    }
                }
            }
        };

        Chosen.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus");
            }
            return this.pending_backstroke = null;
        };

        Chosen.prototype.keydown_checker = function(evt) {
            var stroke, _ref1;

            stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
            this.search_field_scale();
            if (stroke !== 8 && this.pending_backstroke) {
                this.clear_backstroke();
            }
            switch (stroke) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(evt);
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    evt.preventDefault();
                    break;
                case 38:
                    evt.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    evt.preventDefault();
                    this.keydown_arrow();
                    break;
            }
        };

        Chosen.prototype.search_field_scale = function() {
            var div, f_width, h, style, style_block, styles, w, _i, _len;

            if (this.is_multiple) {
                h = 0;
                w = 0;
                style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
                styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
                for (_i = 0, _len = styles.length; _i < _len; _i++) {
                    style = styles[_i];
                    style_block += style + ":" + this.search_field.css(style) + ";";
                }
                div = $('<div />', {
                    'style': style_block
                });
                div.text(this.search_field.val());
                $('body').append(div);
                w = div.width() + 25;
                div.remove();
                f_width = this.container.outerWidth();
                if (w > f_width - 10) {
                    w = f_width - 10;
                }
                return this.search_field.css({
                    'width': w + 'px'
                });
            }
        };

        return Chosen;

    })(AbstractChosen);

}).call(this);
// Generated by CoffeeScript 1.8.0
(function() {
    var __indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        };

    angular.module('localytics.directives', []);

    angular.module('localytics.directives').directive('chosen', [
        '$timeout',
        function($timeout) {
            var CHOSEN_OPTION_WHITELIST, NG_OPTIONS_REGEXP, isEmpty, snakeCase;
            NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;
            CHOSEN_OPTION_WHITELIST = ['noResultsText', 'allowSingleDeselect', 'disableSearchThreshold', 'disableSearch', 'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'placeholderTextMultiple', 'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'displayDisabledOptions', 'displaySelectedOptions', 'width'];
            snakeCase = function(input) {
                return input.replace(/[A-Z]/g, function($1) {
                    return "_" + ($1.toLowerCase());
                });
            };
            isEmpty = function(value) {
                var key;
                if (angular.isArray(value)) {
                    return value.length === 0;
                } else if (angular.isObject(value)) {
                    for (key in value) {
                        if (value.hasOwnProperty(key)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            return {
                restrict: 'A',
                require: '?ngModel',
                terminal: true,
                link: function(scope, element, attr, ngModel) {
                    var chosen, defaultText, disableWithMessage, empty, initOrUpdate, match, options, origRender, removeEmptyMessage, startLoading, stopLoading, valuesExpr, viewWatch;
                    element.addClass('localytics-chosen');
                    options = scope.$eval(attr.chosen) || {};
                    angular.forEach(attr, function(value, key) {
                        if (__indexOf.call(CHOSEN_OPTION_WHITELIST, key) >= 0) {
                            return options[snakeCase(key)] = scope.$eval(value);
                        }
                    });
                    startLoading = function() {
                        return element.addClass('loading').attr('disabled', true).trigger('chosen:updated');
                    };
                    stopLoading = function() {
                        return element.removeClass('loading').attr('disabled', false).trigger('chosen:updated');
                    };
                    chosen = null;
                    defaultText = null;
                    empty = false;
                    initOrUpdate = function() {
                        if (chosen) {
                            return element.trigger('chosen:updated');
                        } else {
                            chosen = element.chosen(options).data('chosen');
                            return defaultText = chosen.default_text;
                        }
                    };
                    removeEmptyMessage = function() {
                        empty = false;
                        return element.attr('data-placeholder', defaultText);
                    };
                    disableWithMessage = function() {
                        empty = true;
                        return element.attr('data-placeholder', chosen.results_none_found).attr('disabled', true).trigger('chosen:updated');
                    };
                    if (ngModel) {
                        origRender = ngModel.$render;
                        ngModel.$render = function() {
                            origRender();
                            return initOrUpdate();
                        };
                        if (attr.multiple) {
                            viewWatch = function() {
                                return ngModel.$viewValue;
                            };
                            scope.$watch(viewWatch, ngModel.$render, true);
                        }
                    } else {
                        initOrUpdate();
                    }
                    attr.$observe('disabled', function() {
                        return element.trigger('chosen:updated');
                    });
                    if (attr.ngOptions && ngModel) {
                        match = attr.ngOptions.match(NG_OPTIONS_REGEXP);
                        valuesExpr = match[7];
                        scope.$watchCollection(valuesExpr, function(newVal, oldVal) {
                            var timer;
                            return timer = $timeout(function() {
                                if (angular.isUndefined(newVal)) {
                                    return startLoading();
                                } else {
                                    if (empty) {
                                        removeEmptyMessage();
                                    }
                                    stopLoading();
                                    if (isEmpty(newVal)) {
                                        return disableWithMessage();
                                    }
                                }
                            });
                        });
                        return scope.$on('$destroy', function(event) {
                            if (typeof timer !== "undefined" && timer !== null) {
                                return $timeout.cancel(timer);
                            }
                        });
                    }
                }
            };
        }
    ]);

}).call(this);
/**
 * Angular JS slider directive
 *
 * (c) Rafal Zajac <rzajac@gmail.com>
 * http://github.com/rzajac/angularjs-slider
 *
 * Version: v1.0.0
 *
 * Licensed under the MIT license
 */

/*jslint unparam: true */
/*global angular: false, console: false, define, module */

(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        // to support bundler like browserify
        module.exports = factory(require('angular'));
    } else {
        // Browser globals (root is window)
        factory(root.angular);
    }

}(this, function(angular) {
    'use strict';
    var module = angular.module('rzModule', [])

        .value('throttle',
            /**
             * throttle
             *
             * Taken from underscore project
             *
             * @param {Function} func
             * @param {number} wait
             * @param {ThrottleOptions} options
             * @returns {Function}
             */
            function throttle(func, wait, options) {
                'use strict';
                var getTime = (Date.now || function() {
                    return new Date().getTime();
                });
                var context, args, result;
                var timeout = null;
                var previous = 0;
                options = options || {};
                var later = function() {
                    previous = options.leading === false ? 0 : getTime();
                    timeout = null;
                    result = func.apply(context, args);
                    context = args = null;
                };
                return function() {
                    var now = getTime();
                    if (!previous && options.leading === false) {
                        previous = now;
                    }
                    var remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                        context = args = null;
                    } else if (!timeout && options.trailing !== false) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            })

        .factory('RzSlider', ['$timeout', '$document', '$window', 'throttle', function($timeout, $document, $window, throttle) {
            'use strict';

            /**
             * Slider
             *
             * @param {ngScope} scope            The AngularJS scope
             * @param {Element} sliderElem The slider directive element wrapped in jqLite
             * @param {*} attributes       The slider directive attributes
             * @constructor
             */
            var Slider = function(scope, sliderElem, attributes) {
                /**
                 * The slider's scope
                 *
                 * @type {ngScope}
                 */
                this.scope = scope;

                /**
                 * The slider attributes
                 *
                 * @type {Object}
                 */
                this.attributes = attributes;

                /**
                 * Slider element wrapped in jqLite
                 *
                 * @type {jqLite}
                 */
                this.sliderElem = sliderElem;

                /**
                 * Slider type
                 *
                 * @type {boolean} Set to true for range slider
                 */
                this.range = attributes.rzSliderHigh !== undefined && attributes.rzSliderModel !== undefined;

                /**
                 * Whether to allow draggable range
                 *
                 * @type {boolean} Set to true for draggable range slider
                 */
                this.dragRange = this.range && attributes.rzSliderDraggableRange === 'true';

                /**
                 * Values recorded when first dragging the bar
                 *
                 * @type {Object}
                 */
                this.dragging = {
                    active: false,
                    value: 0,
                    difference: 0,
                    offset: 0,
                    lowDist: 0,
                    highDist: 0
                };

                /**
                 * Half of the width of the slider handles
                 *
                 * @type {number}
                 */
                this.handleHalfWidth = 0;

                /**
                 * Always show selection bar
                 *
                 * @type {boolean}
                 */
                this.alwaysShowBar = !!attributes.rzSliderAlwaysShowBar;

                /**
                 * Maximum left the slider handle can have
                 *
                 * @type {number}
                 */
                this.maxLeft = 0;

                /**
                 * Precision
                 *
                 * @type {number}
                 */
                this.precision = 0;

                /**
                 * Step
                 *
                 * @type {number}
                 */
                this.step = 0;

                /**
                 * The name of the handle we are currently tracking
                 *
                 * @type {string}
                 */
                this.tracking = '';

                /**
                 * Minimum value (floor) of the model
                 *
                 * @type {number}
                 */
                this.minValue = 0;

                /**
                 * Maximum value (ceiling) of the model
                 *
                 * @type {number}
                 */
                this.maxValue = 0;

                /**
                 * Hide limit labels
                 *
                 * @type {boolean}
                 */
                this.hideLimitLabels = !!attributes.rzSliderHideLimitLabels;

                /**
                 * Only present model values
                 *
                 * Do not allow to change values
                 *
                 * @type {boolean}
                 */
                this.presentOnly = attributes.rzSliderPresentOnly === 'true';

                /**
                 * Display ticks on each possible value.
                 *
                 * @type {boolean}
                 */
                this.showTicks = attributes.rzSliderShowTicks || attributes.rzSliderShowTicksValue;

                /**
                 * Display the value on each tick.
                 *
                 * @type {boolean}
                 */
                this.showTicksValue = attributes.rzSliderShowTicksValue;

                /**
                 * Disable the slider
                 *
                 * @type {boolean}
                 */
                this.disabled = this.scope.rzSliderDisabled;

                /**
                 * The interval at which the slider updates when the model/high values
                 * are altered from outside the slider
                 *
                 * @type {number}
                 */
                this.interval = this.scope.rzSliderInterval !== null ? this.scope.rzSliderInterval : 350;

                /**
                 * The delta between min and max value
                 *
                 * @type {number}
                 */
                this.valueRange = 0;

                /**
                 * Set to true if init method already executed
                 *
                 * @type {boolean}
                 */
                this.initHasRun = false;

                /**
                 * Custom translate function
                 *
                 * @type {function}
                 */
                this.customTrFn = this.scope.rzSliderTranslate() || function(value) {
                        return String(value);
                    };

                /**
                 * Array of de-registration functions to call on $destroy
                 *
                 * @type {Array.<Function>}
                 */
                this.deRegFuncs = [];

                // Slider DOM elements wrapped in jqLite
                this.fullBar = null; // The whole slider bar
                this.selBar = null; // Highlight between two handles
                this.minH = null; // Left slider handle
                this.maxH = null; // Right slider handle
                this.flrLab = null; // Floor label
                this.ceilLab = null; // Ceiling label
                this.minLab = null; // Label above the low value
                this.maxLab = null; // Label above the high value
                this.cmbLab = null; // Combined label
                this.ticks = null; // The ticks

                // Initialize slider
                this.init();
            };

            // Add instance methods
            Slider.prototype = {

                /**
                 * Initialize slider
                 *
                 * @returns {undefined}
                 */
                init: function() {
                    var thrLow, thrHigh, unRegFn,
                        calcDimFn = angular.bind(this, this.calcViewDimensions),
                        self = this;

                    this.initElemHandles();
                    this.addAccessibility();
                    this.setDisabledState();
                    this.calcViewDimensions();
                    this.setMinAndMax();

                    this.precision = this.scope.rzSliderPrecision === undefined ? 0 : +this.scope.rzSliderPrecision;
                    this.step = this.scope.rzSliderStep === undefined ? 1 : +this.scope.rzSliderStep;

                    $timeout(function() {
                        self.updateCeilLab();
                        self.updateFloorLab();
                        self.initHandles();
                        self.bindEvents();
                    });

                    // Recalculate slider view dimensions
                    unRegFn = this.scope.$on('reCalcViewDimensions', calcDimFn);
                    this.deRegFuncs.push(unRegFn);

                    // Recalculate stuff if view port dimensions have changed
                    angular.element($window).on('resize', calcDimFn);

                    this.initHasRun = true;

                    // Watch for changes to the model

                    thrLow = throttle(function() {
                        self.setMinAndMax();
                        self.updateLowHandle(self.valueToOffset(self.scope.rzSliderModel));
                        self.updateSelectionBar();
                        self.updateTicksScale();

                        if (self.range) {
                            self.updateCmbLabel();
                        }

                    }, self.interval);

                    thrHigh = throttle(function() {
                        self.setMinAndMax();
                        self.updateHighHandle(self.valueToOffset(self.scope.rzSliderHigh));
                        self.updateSelectionBar();
                        self.updateTicksScale();
                        self.updateCmbLabel();
                    }, self.interval);

                    this.scope.$on('rzSliderForceRender', function() {
                        self.resetLabelsValue();
                        thrLow();
                        if (self.range) {
                            thrHigh();
                        }
                        self.resetSlider();
                    });

                    // Watchers

                    unRegFn = this.scope.$watch('rzSliderModel', function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        thrLow();
                    });
                    this.deRegFuncs.push(unRegFn);

                    unRegFn = this.scope.$watch('rzSliderHigh', function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        thrHigh();
                    });
                    this.deRegFuncs.push(unRegFn);

                    this.scope.$watch('rzSliderFloor', function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        self.resetSlider();
                    });
                    this.deRegFuncs.push(unRegFn);

                    unRegFn = this.scope.$watch('rzSliderCeil', function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        self.resetSlider();
                    });
                    this.deRegFuncs.push(unRegFn);

                    unRegFn = this.scope.$watch('rzSliderShowTicks', function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        self.resetSlider();
                    });
                    this.deRegFuncs.push(unRegFn);

                    unRegFn = this.scope.$watch('rzSliderShowTicksValue', function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        self.resetSlider();
                    });
                    this.deRegFuncs.push(unRegFn);

                    unRegFn = this.scope.$watch('rzSliderDisabled', function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        self.resetSlider();
                        if (self.disabled)
                            self.unbindEvents();
                        else
                            self.bindEvents();
                    });
                    this.deRegFuncs.push(unRegFn);

                    this.scope.$on('$destroy', function() {
                        self.unbindEvents();
                        angular.element($window).off('resize', calcDimFn);
                        self.deRegFuncs.map(function(unbind) {
                            unbind();
                        });
                    });
                },

                /**
                 * Resets slider
                 *
                 * @returns {undefined}
                 */
                resetSlider: function() {
                    this.setMinAndMax();
                    this.updateCeilLab();
                    this.updateFloorLab();
                    this.setDisabledState();
                    this.calcViewDimensions();
                },

                /**
                 * Set the disabled state based on rzSliderDisabled
                 *
                 * @returns {undefined}
                 */
                setDisabledState: function() {
                    this.disabled = this.scope.rzSliderDisabled;
                    if (this.disabled) {
                        this.sliderElem.attr('disabled', 'disabled');
                    } else {
                        this.sliderElem.attr('disabled', null);
                    }

                },

                /**
                 * Reset label values
                 *
                 * @return {undefined}
                 */
                resetLabelsValue: function() {
                    this.minLab.rzsv = undefined;
                    this.maxLab.rzsv = undefined;
                },

                /**
                 * Initialize slider handles positions and labels
                 *
                 * Run only once during initialization and every time view port changes size
                 *
                 * @returns {undefined}
                 */
                initHandles: function() {
                    this.updateLowHandle(this.valueToOffset(this.scope.rzSliderModel));

                    /*
                     the order here is important since the selection bar should be
                     updated after the high handle but before the combined label
                     */
                    if (this.range)
                        this.updateHighHandle(this.valueToOffset(this.scope.rzSliderHigh));
                    this.updateSelectionBar();
                    if (this.range)
                        this.updateCmbLabel();

                    this.updateTicksScale();
                },

                /**
                 * Translate value to human readable format
                 *
                 * @param {number|string} value
                 * @param {jqLite} label
                 * @param {boolean} [useCustomTr]
                 * @returns {undefined}
                 */
                translateFn: function(value, label, useCustomTr) {
                    useCustomTr = useCustomTr === undefined ? true : useCustomTr;

                    var valStr = (useCustomTr ? this.customTrFn(value) : value).toString(),
                        getWidth = false;

                    if (label.rzsv === undefined || label.rzsv.length !== valStr.length || (label.rzsv.length > 0 && label.rzsw === 0)) {
                        getWidth = true;
                        label.rzsv = valStr;
                    }

                    label.text(valStr);

                    // Update width only when length of the label have changed
                    if (getWidth) {
                        this.getWidth(label);
                    }
                },

                /**
                 * Set maximum and minimum values for the slider
                 *
                 * @returns {undefined}
                 */
                setMinAndMax: function() {
                    if (this.scope.rzSliderFloor) {
                        this.minValue = +this.scope.rzSliderFloor;
                    } else {
                        this.minValue = this.scope.rzSliderFloor = 0;
                    }

                    if (this.scope.rzSliderCeil) {
                        this.maxValue = +this.scope.rzSliderCeil;
                    } else {
                        this.maxValue = this.scope.rzSliderCeil = this.range ? this.scope.rzSliderHigh : this.scope.rzSliderModel;
                    }

                    if (this.scope.rzSliderStep) {
                        this.step = +this.scope.rzSliderStep;
                    }

                    this.valueRange = this.maxValue - this.minValue;
                },

                /**
                 * Set the slider children to variables for easy access
                 *
                 * Run only once during initialization
                 *
                 * @returns {undefined}
                 */
                initElemHandles: function() {
                    // Assign all slider elements to object properties for easy access
                    angular.forEach(this.sliderElem.children(), function(elem, index) {
                        var jElem = angular.element(elem);

                        switch (index) {
                            case 0:
                                this.fullBar = jElem;
                                break;
                            case 1:
                                this.selBar = jElem;
                                break;
                            case 2:
                                this.minH = jElem;
                                break;
                            case 3:
                                this.maxH = jElem;
                                break;
                            case 4:
                                this.flrLab = jElem;
                                break;
                            case 5:
                                this.ceilLab = jElem;
                                break;
                            case 6:
                                this.minLab = jElem;
                                break;
                            case 7:
                                this.maxLab = jElem;
                                break;
                            case 8:
                                this.cmbLab = jElem;
                                break;
                            case 9:
                                this.ticks = jElem;
                                break;
                        }

                    }, this);

                    // Initialize offset cache properties
                    this.selBar.rzsl = 0;
                    this.minH.rzsl = 0;
                    this.maxH.rzsl = 0;
                    this.flrLab.rzsl = 0;
                    this.ceilLab.rzsl = 0;
                    this.minLab.rzsl = 0;
                    this.maxLab.rzsl = 0;
                    this.cmbLab.rzsl = 0;

                    // Hide limit labels
                    if (this.hideLimitLabels) {
                        this.flrLab.rzAlwaysHide = true;
                        this.ceilLab.rzAlwaysHide = true;
                        this.hideEl(this.flrLab);
                        this.hideEl(this.ceilLab);
                    }

                    if (this.showTicksValue) {
                        this.flrLab.rzAlwaysHide = true;
                        this.ceilLab.rzAlwaysHide = true;
                        this.minLab.rzAlwaysHide = true;
                        this.maxLab.rzAlwaysHide = true;
                        this.cmbLab.rzAlwaysHide = true;
                        this.hideEl(this.flrLab);
                        this.hideEl(this.ceilLab);
                        this.hideEl(this.minLab);
                        this.hideEl(this.maxLab);
                        this.hideEl(this.cmbLab);
                    }

                    // Remove stuff not needed in single slider
                    if (this.range === false) {
                        this.cmbLab.remove();
                        this.maxLab.remove();

                        // Hide max handle
                        this.maxH.rzAlwaysHide = true;
                        this.maxH[0].style.zIndex = '-1000';
                        this.hideEl(this.maxH);
                    }

                    // Show selection bar for single slider or not
                    if (this.range === false && this.alwaysShowBar === false) {
                        this.maxH.remove();
                        this.selBar.remove();
                    }

                    // If using draggable range, use appropriate cursor for this.selBar.
                    if (this.dragRange) {
                        this.selBar.css('cursor', 'move');
                        this.selBar.addClass('rz-draggable');
                    }
                },

                /**
                 * Adds accessibility atributes
                 *
                 * Run only once during initialization
                 *
                 * @returns {undefined}
                 */
                addAccessibility: function() {
                    this.sliderElem.attr("role", "slider");
                },

                /**
                 * Calculate dimensions that are dependent on view port size
                 *
                 * Run once during initialization and every time view port changes size.
                 *
                 * @returns {undefined}
                 */
                calcViewDimensions: function() {
                    var handleWidth = this.getWidth(this.minH);

                    this.handleHalfWidth = handleWidth / 2;
                    this.barWidth = this.getWidth(this.fullBar);

                    this.maxLeft = this.barWidth - handleWidth;

                    this.getWidth(this.sliderElem);
                    this.sliderElem.rzsl = this.sliderElem[0].getBoundingClientRect().left;

                    if (this.initHasRun) {
                        this.updateFloorLab();
                        this.updateCeilLab();
                        this.initHandles();
                    }
                },

                /**
                 * Update the ticks position
                 *
                 * @returns {undefined}
                 */
                updateTicksScale: function() {
                    if (!this.showTicks) return;
                    if (!this.step) return; //if step is 0, the following loop will be endless.

                    var positions = '',
                        ticksCount = Math.round((this.maxValue - this.minValue) / this.step) + 1;
                    for (var i = 0; i < ticksCount; i++) {
                        var value = this.roundStep(this.minValue + i * this.step);
                        var selectedClass = this.isTickSelected(value) ? 'selected' : '';
                        positions += '<li class="tick ' + selectedClass + '">';
                        if (this.showTicksValue)
                            positions += '<span class="tick-value">' + this.getDisplayValue(value) + '</span>';
                        positions += '</li>';
                    }
                    this.ticks.html(positions);
                },

                isTickSelected: function(value) {
                    var tickLeft = this.valueToOffset(value);
                    if (!this.range && this.alwaysShowBar && value <= this.scope.rzSliderModel)
                        return true;
                    if (this.range && value >= this.scope.rzSliderModel && value <= this.scope.rzSliderHigh)
                        return true;
                    return false;
                },

                /**
                 * Update position of the ceiling label
                 *
                 * @returns {undefined}
                 */
                updateCeilLab: function() {
                    this.translateFn(this.scope.rzSliderCeil, this.ceilLab);
                    this.setLeft(this.ceilLab, this.barWidth - this.ceilLab.rzsw);
                    this.getWidth(this.ceilLab);
                },

                /**
                 * Update position of the floor label
                 *
                 * @returns {undefined}
                 */
                updateFloorLab: function() {
                    this.translateFn(this.scope.rzSliderFloor, this.flrLab);
                    this.getWidth(this.flrLab);
                },

                /**
                 * Call the onStart callback if defined
                 *
                 * @returns {undefined}
                 */
                callOnStart: function() {
                    if (this.scope.rzSliderOnStart) {
                        var self = this;
                        $timeout(function() {
                            self.scope.rzSliderOnStart();
                        });
                    }
                },

                /**
                 * Call the onChange callback if defined
                 *
                 * @returns {undefined}
                 */
                callOnChange: function() {
                    if (this.scope.rzSliderOnChange) {
                        var self = this;
                        $timeout(function() {
                            self.scope.rzSliderOnChange();
                        });
                    }
                },

                /**
                 * Call the onEnd callback if defined
                 *
                 * @returns {undefined}
                 */
                callOnEnd: function() {
                    if (this.scope.rzSliderOnEnd) {
                        var self = this;
                        $timeout(function() {
                            self.scope.rzSliderOnEnd();
                        });
                    }
                },

                /**
                 * Update slider handles and label positions
                 *
                 * @param {string} which
                 * @param {number} newOffset
                 */
                updateHandles: function(which, newOffset) {
                    if (which === 'rzSliderModel') {
                        this.updateLowHandle(newOffset);
                        this.updateSelectionBar();
                        this.updateTicksScale();

                        if (this.range) {
                            this.updateCmbLabel();
                        }
                        return;
                    }

                    if (which === 'rzSliderHigh') {
                        this.updateHighHandle(newOffset);
                        this.updateSelectionBar();
                        this.updateTicksScale();

                        if (this.range) {
                            this.updateCmbLabel();
                        }
                        return;
                    }

                    // Update both
                    this.updateLowHandle(newOffset);
                    this.updateHighHandle(newOffset);
                    this.updateSelectionBar();
                    this.updateTicksScale();
                    this.updateCmbLabel();
                },

                /**
                 * Update low slider handle position and label
                 *
                 * @param {number} newOffset
                 * @returns {undefined}
                 */
                updateLowHandle: function(newOffset) {
                    this.setLeft(this.minH, newOffset);
                    this.translateFn(this.scope.rzSliderModel, this.minLab);
                    this.setLeft(this.minLab, newOffset - this.minLab.rzsw / 2 + this.handleHalfWidth);

                    this.shFloorCeil();
                },

                /**
                 * Update high slider handle position and label
                 *
                 * @param {number} newOffset
                 * @returns {undefined}
                 */
                updateHighHandle: function(newOffset) {
                    this.setLeft(this.maxH, newOffset);
                    this.translateFn(this.scope.rzSliderHigh, this.maxLab);
                    this.setLeft(this.maxLab, newOffset - this.maxLab.rzsw / 2 + this.handleHalfWidth);

                    this.shFloorCeil();
                },

                /**
                 * Show / hide floor / ceiling label
                 *
                 * @returns {undefined}
                 */
                shFloorCeil: function() {
                    var flHidden = false,
                        clHidden = false;

                    if (this.minLab.rzsl <= this.flrLab.rzsl + this.flrLab.rzsw + 5) {
                        flHidden = true;
                        this.hideEl(this.flrLab);
                    } else {
                        flHidden = false;
                        this.showEl(this.flrLab);
                    }

                    if (this.minLab.rzsl + this.minLab.rzsw >= this.ceilLab.rzsl - this.handleHalfWidth - 10) {
                        clHidden = true;
                        this.hideEl(this.ceilLab);
                    } else {
                        clHidden = false;
                        this.showEl(this.ceilLab);
                    }

                    if (this.range) {
                        if (this.maxLab.rzsl + this.maxLab.rzsw >= this.ceilLab.rzsl - 10) {
                            this.hideEl(this.ceilLab);
                        } else if (!clHidden) {
                            this.showEl(this.ceilLab);
                        }

                        // Hide or show floor label
                        if (this.maxLab.rzsl <= this.flrLab.rzsl + this.flrLab.rzsw + this.handleHalfWidth) {
                            this.hideEl(this.flrLab);
                        } else if (!flHidden) {
                            this.showEl(this.flrLab);
                        }
                    }
                },

                /**
                 * Update slider selection bar, combined label and range label
                 *
                 * @returns {undefined}
                 */
                updateSelectionBar: function() {
                    this.setWidth(this.selBar, Math.abs(this.maxH.rzsl - this.minH.rzsl) + this.handleHalfWidth);
                    this.setLeft(this.selBar, this.range ? this.minH.rzsl + this.handleHalfWidth : 0);
                },

                /**
                 * Update combined label position and value
                 *
                 * @returns {undefined}
                 */
                updateCmbLabel: function() {
                    var lowTr, highTr;

                    if (this.minLab.rzsl + this.minLab.rzsw + 10 >= this.maxLab.rzsl) {
                        lowTr = this.getDisplayValue(this.scope.rzSliderModel);
                        highTr = this.getDisplayValue(this.scope.rzSliderHigh);

                        this.translateFn(lowTr + ' - ' + highTr, this.cmbLab, false);
                        this.setLeft(this.cmbLab, this.selBar.rzsl + this.selBar.rzsw / 2 - this.cmbLab.rzsw / 2);
                        this.hideEl(this.minLab);
                        this.hideEl(this.maxLab);
                        this.showEl(this.cmbLab);
                    } else {
                        this.showEl(this.maxLab);
                        this.showEl(this.minLab);
                        this.hideEl(this.cmbLab);
                    }
                },

                /**
                 * Return the translated value if a translate function is provided else the original value
                 * @param value
                 * @returns {*}
                 */
                getDisplayValue: function(value) {
                    return this.customTrFn ? this.customTrFn(value) : value;
                },

                /**
                 * Round value to step and precision
                 *
                 * @param {number} value
                 * @returns {number}
                 */
                roundStep: function(value) {
                    var step = this.step,
                        remainder = +((value - this.minValue) % step).toFixed(3),
                        steppedValue = remainder > (step / 2) ? value + step - remainder : value - remainder;

                    steppedValue = steppedValue.toFixed(this.precision);
                    return +steppedValue;
                },

                /**
                 * Hide element
                 *
                 * @param element
                 * @returns {jqLite} The jqLite wrapped DOM element
                 */
                hideEl: function(element) {
                    return element.css({
                        opacity: 0
                    });
                },

                /**
                 * Show element
                 *
                 * @param element The jqLite wrapped DOM element
                 * @returns {jqLite} The jqLite
                 */
                showEl: function(element) {
                    if (!!element.rzAlwaysHide) {
                        return element;
                    }

                    return element.css({
                        opacity: 1
                    });
                },

                /**
                 * Set element left offset
                 *
                 * @param {jqLite} elem The jqLite wrapped DOM element
                 * @param {number} left
                 * @returns {number}
                 */
                setLeft: function(elem, left) {
                    elem.rzsl = left;
                    elem.css({
                        left: left + 'px'
                    });
                    return left;
                },

                /**
                 * Get element width
                 *
                 * @param {jqLite} elem The jqLite wrapped DOM element
                 * @returns {number}
                 */
                getWidth: function(elem) {
                    var val = elem[0].getBoundingClientRect();
                    elem.rzsw = val.right - val.left;
                    return elem.rzsw;
                },

                /**
                 * Set element width
                 *
                 * @param {jqLite} elem  The jqLite wrapped DOM element
                 * @param {number} width
                 * @returns {number}
                 */
                setWidth: function(elem, width) {
                    elem.rzsw = width;
                    elem.css({
                        width: width + 'px'
                    });
                    return width;
                },

                /**
                 * Translate value to pixel offset
                 *
                 * @param {number} val
                 * @returns {number}
                 */
                valueToOffset: function(val) {
                    return (val - this.minValue) * this.maxLeft / this.valueRange || 0;
                },

                /**
                 * Translate offset to model value
                 *
                 * @param {number} offset
                 * @returns {number}
                 */
                offsetToValue: function(offset) {
                    return (offset / this.maxLeft) * this.valueRange + this.minValue;
                },

                // Events

                /**
                 * Get the X-coordinate of an event
                 *
                 * @param {Object} event  The event
                 * @returns {number}
                 */
                getEventX: function(event) {
                    /* http://stackoverflow.com/a/12336075/282882 */
                    //noinspection JSLint
                    if ('clientX' in event) {
                        return event.clientX;
                    }

                    return event.originalEvent === undefined ?
                        event.touches[0].clientX : event.originalEvent.touches[0].clientX;
                },

                /**
                 * Get the handle closest to an event.
                 *
                 * @param event {Event} The event
                 * @returns {jqLite} The handle closest to the event.
                 */
                getNearestHandle: function(event) {
                    if (!this.range) {
                        return this.minH;
                    }
                    var offset = this.getEventX(event) - this.sliderElem.rzsl - this.handleHalfWidth;
                    return Math.abs(offset - this.minH.rzsl) < Math.abs(offset - this.maxH.rzsl) ? this.minH : this.maxH;
                },

                /**
                 * Bind mouse and touch events to slider handles
                 *
                 * @returns {undefined}
                 */
                bindEvents: function() {
                    if (this.presentOnly || this.disabled) return;
                    var barTracking, barStart, barMove;

                    if (this.dragRange) {
                        barTracking = 'rzSliderDrag';
                        barStart = this.onDragStart;
                        barMove = this.onDragMove;
                    } else {
                        barTracking = 'rzSliderModel';
                        barStart = this.onStart;
                        barMove = this.onMove;
                    }

                    this.minH.on('mousedown', angular.bind(this, this.onStart, this.minH, 'rzSliderModel'));
                    if (this.range) {
                        this.maxH.on('mousedown', angular.bind(this, this.onStart, this.maxH, 'rzSliderHigh'));
                    }
                    this.fullBar.on('mousedown', angular.bind(this, this.onStart, null, null));
                    this.fullBar.on('mousedown', angular.bind(this, this.onMove, this.fullBar));
                    this.selBar.on('mousedown', angular.bind(this, barStart, null, barTracking));
                    this.selBar.on('mousedown', angular.bind(this, barMove, this.selBar));
                    this.ticks.on('mousedown', angular.bind(this, this.onStart, null, null));
                    this.ticks.on('mousedown', angular.bind(this, this.onMove, this.ticks));

                    this.minH.on('touchstart', angular.bind(this, this.onStart, this.minH, 'rzSliderModel'));
                    if (this.range) {
                        this.maxH.on('touchstart', angular.bind(this, this.onStart, this.maxH, 'rzSliderHigh'));
                    }
                    this.fullBar.on('touchstart', angular.bind(this, this.onStart, null, null));
                    this.fullBar.on('touchstart', angular.bind(this, this.onMove, this.fullBar));
                    this.selBar.on('touchstart', angular.bind(this, barStart, null, barTracking));
                    this.selBar.on('touchstart', angular.bind(this, barMove, this.selBar));
                    this.ticks.on('touchstart', angular.bind(this, this.onStart, null, null));
                    this.ticks.on('touchstart', angular.bind(this, this.onMove, this.ticks));
                },

                /**
                 * Unbind mouse and touch events to slider handles
                 *
                 * @returns {undefined}
                 */
                unbindEvents: function() {
                    this.minH.off();
                    this.maxH.off();
                    this.fullBar.off();
                    this.selBar.off();
                    this.ticks.off();
                },

                /**
                 * onStart event handler
                 *
                 * @param {?Object} pointer The jqLite wrapped DOM element; if null, the closest handle is used
                 * @param {?string} ref     The name of the handle being changed; if null, the closest handle's value is modified
                 * @param {Event}   event   The event
                 * @returns {undefined}
                 */
                onStart: function(pointer, ref, event) {
                    var ehMove, ehEnd,
                        eventNames = this.getEventNames(event);

                    event.stopPropagation();
                    event.preventDefault();

                    if (this.tracking !== '') {
                        return;
                    }

                    // We have to do this in case the HTML where the sliders are on
                    // have been animated into view.
                    this.calcViewDimensions();

                    if (pointer) {
                        this.tracking = ref;
                    } else {
                        pointer = this.getNearestHandle(event);
                        this.tracking = pointer === this.minH ? 'rzSliderModel' : 'rzSliderHigh';
                    }

                    pointer.addClass('rz-active');

                    ehMove = angular.bind(this, this.dragging.active ? this.onDragMove : this.onMove, pointer);
                    ehEnd = angular.bind(this, this.onEnd, ehMove);

                    $document.on(eventNames.moveEvent, ehMove);
                    $document.one(eventNames.endEvent, ehEnd);
                    this.callOnStart();
                },

                /**
                 * onMove event handler
                 *
                 * @param {jqLite} pointer
                 * @param {Event}  event The event
                 * @returns {undefined}
                 */
                onMove: function(pointer, event) {
                    var eventX = this.getEventX(event),
                        sliderLO, newOffset, newValue;

                    sliderLO = this.sliderElem.rzsl;
                    newOffset = eventX - sliderLO - this.handleHalfWidth;

                    if (newOffset <= 0) {
                        if (pointer.rzsl === 0)
                            return;
                        newValue = this.minValue;
                        newOffset = 0;
                    } else if (newOffset >= this.maxLeft) {
                        if (pointer.rzsl === this.maxLeft)
                            return;
                        newValue = this.maxValue;
                        newOffset = this.maxLeft;
                    } else {
                        newValue = this.offsetToValue(newOffset);
                        newValue = this.roundStep(newValue);
                        newOffset = this.valueToOffset(newValue);
                    }
                    this.positionTrackingHandle(newValue, newOffset);
                },

                /**
                 * onDragStart event handler
                 *
                 * Handles dragging of the middle bar.
                 *
                 * @param {Object} pointer The jqLite wrapped DOM element
                 * @param {string} ref     One of the refLow, refHigh values
                 * @param {Event}  event   The event
                 * @returns {undefined}
                 */
                onDragStart: function(pointer, ref, event) {
                    var offset = this.getEventX(event) - this.sliderElem.rzsl - this.handleHalfWidth;
                    this.dragging = {
                        active: true,
                        value: this.offsetToValue(offset),
                        difference: this.scope.rzSliderHigh - this.scope.rzSliderModel,
                        offset: offset,
                        lowDist: offset - this.minH.rzsl,
                        highDist: this.maxH.rzsl - offset
                    };
                    this.minH.addClass('rz-active');
                    this.maxH.addClass('rz-active');

                    this.onStart(pointer, ref, event);
                },

                /**
                 * onDragMove event handler
                 *
                 * Handles dragging of the middle bar.
                 *
                 * @param {jqLite} pointer
                 * @param {Event}  event The event
                 * @returns {undefined}
                 */
                onDragMove: function(pointer, event) {
                    var newOffset = this.getEventX(event) - this.sliderElem.rzsl - this.handleHalfWidth,
                        newMinOffset, newMaxOffset,
                        newMinValue, newMaxValue;

                    if (newOffset <= this.dragging.lowDist) {
                        if (pointer.rzsl === this.dragging.lowDist) {
                            return;
                        }
                        newMinValue = this.minValue;
                        newMinOffset = 0;
                        newMaxValue = this.dragging.difference;
                        newMaxOffset = this.valueToOffset(newMaxValue);
                    } else if (newOffset >= this.maxLeft - this.dragging.highDist) {
                        if (pointer.rzsl === this.dragging.highDist) {
                            return;
                        }
                        newMaxValue = this.maxValue;
                        newMaxOffset = this.maxLeft;
                        newMinValue = this.maxValue - this.dragging.difference;
                        newMinOffset = this.valueToOffset(newMinValue);
                    } else {
                        newMinValue = this.offsetToValue(newOffset - this.dragging.lowDist);
                        newMinValue = this.roundStep(newMinValue);
                        newMinOffset = this.valueToOffset(newMinValue);
                        newMaxValue = newMinValue + this.dragging.difference;
                        newMaxOffset = this.valueToOffset(newMaxValue);
                    }

                    this.positionTrackingBar(newMinValue, newMaxValue, newMinOffset, newMaxOffset);
                },

                /**
                 * Set the new value and offset for the entire bar
                 *
                 * @param {number} newMinValue   the new minimum value
                 * @param {number} newMaxValue   the new maximum value
                 * @param {number} newMinOffset  the new minimum offset
                 * @param {number} newMaxOffset  the new maximum offset
                 */
                positionTrackingBar: function(newMinValue, newMaxValue, newMinOffset, newMaxOffset) {
                    this.scope.rzSliderModel = newMinValue;
                    this.scope.rzSliderHigh = newMaxValue;
                    this.updateHandles('rzSliderModel', newMinOffset);
                    this.updateHandles('rzSliderHigh', newMaxOffset);
                    this.scope.$apply();
                    this.callOnChange();
                },

                /**
                 * Set the new value and offset to the current tracking handle
                 *
                 * @param {number} newValue new model value
                 * @param {number} newOffset new offset value
                 */
                positionTrackingHandle: function(newValue, newOffset) {
                    if (this.range) {
                        /* This is to check if we need to switch the min and max handles*/
                        if (this.tracking === 'rzSliderModel' && newValue >= this.scope.rzSliderHigh) {
                            this.scope[this.tracking] = this.scope.rzSliderHigh;
                            this.updateHandles(this.tracking, this.maxH.rzsl);
                            this.tracking = 'rzSliderHigh';
                            this.minH.removeClass('rz-active');
                            this.maxH.addClass('rz-active');
                            /* We need to apply here because we are not sure that we will enter the next block */
                            this.scope.$apply();
                            this.callOnChange();
                        } else if (this.tracking === 'rzSliderHigh' && newValue <= this.scope.rzSliderModel) {
                            this.scope[this.tracking] = this.scope.rzSliderModel;
                            this.updateHandles(this.tracking, this.minH.rzsl);
                            this.tracking = 'rzSliderModel';
                            this.maxH.removeClass('rz-active');
                            this.minH.addClass('rz-active');
                            /* We need to apply here because we are not sure that we will enter the next block */
                            this.scope.$apply();
                            this.callOnChange();
                        }
                    }

                    if (this.scope[this.tracking] !== newValue) {
                        this.scope[this.tracking] = newValue;
                        this.updateHandles(this.tracking, newOffset);
                        this.scope.$apply();
                        this.callOnChange();
                    }
                },

                /**
                 * onEnd event handler
                 *
                 * @param {Event}    event    The event
                 * @param {Function} ehMove   The the bound move event handler
                 * @returns {undefined}
                 */
                onEnd: function(ehMove, event) {
                    var moveEventName = this.getEventNames(event).moveEvent;

                    this.minH.removeClass('rz-active');
                    this.maxH.removeClass('rz-active');

                    $document.off(moveEventName, ehMove);

                    this.scope.$emit('slideEnded');
                    this.tracking = '';

                    this.dragging.active = false;
                    this.callOnEnd();
                },

                /**
                 * Get event names for move and event end
                 *
                 * @param {Event}    event    The event
                 *
                 * @return {{moveEvent: string, endEvent: string}}
                 */
                getEventNames: function(event) {
                    var eventNames = {
                        moveEvent: '',
                        endEvent: ''
                    };

                    if (event.touches || (event.originalEvent !== undefined && event.originalEvent.touches)) {
                        eventNames.moveEvent = 'touchmove';
                        eventNames.endEvent = 'touchend';
                    } else {
                        eventNames.moveEvent = 'mousemove';
                        eventNames.endEvent = 'mouseup';
                    }

                    return eventNames;
                }
            };

            return Slider;
        }])

        .directive('rzslider', ['RzSlider', function(RzSlider) {
            'use strict';

            return {
                restrict: 'E',
                scope: {
                    rzSliderFloor: '=?',
                    rzSliderCeil: '=?',
                    rzSliderStep: '@',
                    rzSliderPrecision: '@',
                    rzSliderModel: '=?',
                    rzSliderHigh: '=?',
                    rzSliderDraggable: '@',
                    rzSliderTranslate: '&',
                    rzSliderHideLimitLabels: '=?',
                    rzSliderAlwaysShowBar: '=?',
                    rzSliderPresentOnly: '@',
                    rzSliderOnStart: '&',
                    rzSliderOnChange: '&',
                    rzSliderOnEnd: '&',
                    rzSliderShowTicks: '=?',
                    rzSliderShowTicksValue: '=?',
                    rzSliderDisabled: '=?',
                    rzSliderInterval: '=?',
                },

                /**
                 * Return template URL
                 *
                 * @param {jqLite} elem
                 * @param {Object} attrs
                 * @return {string}
                 */
                templateUrl: function(elem, attrs) {
                    //noinspection JSUnresolvedVariable
                    return attrs.rzSliderTplUrl || 'rzSliderTpl.html';
                },

                link: function(scope, elem, attr) {
                    return new RzSlider(scope, elem, attr);
                }
            };
        }]);

    // IDE assist

    /**
     * @name ngScope
     *
     * @property {number} rzSliderModel
     * @property {number} rzSliderHigh
     * @property {number} rzSliderCeil
     */

    /**
     * @name jqLite
     *
     * @property {number|undefined} rzsl rzslider label left offset
     * @property {number|undefined} rzsw rzslider element width
     * @property {string|undefined} rzsv rzslider label value/text
     * @property {Function} css
     * @property {Function} text
     */

    /**
     * @name Event
     * @property {Array} touches
     * @property {Event} originalEvent
     */

    /**
     * @name ThrottleOptions
     *
     * @property {boolean} leading
     * @property {boolean} trailing
     */

    module.run(['$templateCache', function($templateCache) {
        'use strict';

        $templateCache.put('rzSliderTpl.html',
            "<span class=rz-bar-wrapper><span class=rz-bar></span></span> <span class=rz-bar-wrapper><span class=\"rz-bar rz-selection\"></span></span> <span class=rz-pointer></span> <span class=rz-pointer></span> <span class=\"rz-bubble rz-limit\"></span> <span class=\"rz-bubble rz-limit\"></span> <span class=rz-bubble></span> <span class=rz-bubble></span> <span class=rz-bubble></span><ul class=rz-ticks></ul>"
        );

    }]);

    return module
}));
! function() {
    "use strict";
    angular.module("ngMask", [])
}(),
    function() {
        "use strict";
        angular.module("ngMask").directive("mask", ["$log", "$timeout", "MaskService", function(a, b, c) {
            return {
                restrict: "A",
                require: "ngModel",
                compile: function(d, e) {
                    function f(a) {
                        "number" == typeof a && (b.cancel(g), g = b(function() {
                            var b = a + 1,
                                c = d[0];
                            if (c.setSelectionRange) c.focus(), c.setSelectionRange(a, b);
                            else if (c.createTextRange) {
                                var e = c.createTextRange();
                                e.collapse(!0), e.moveEnd("character", b), e.moveStart("character", a), e.select()
                            }
                        }))
                    }
                    if (!e.mask || !e.ngModel) return void a.info("Mask and ng-model attributes are required!");
                    var g, h, i = c.create();
                    return {
                        pre: function(a, b, c) {
                            h = i.generateRegex({
                                mask: c.mask,
                                repeat: c.repeat || c.maskRepeat,
                                clean: "true" === (c.clean || c.maskClean),
                                limit: "true" === (c.limit || c.maskLimit || "true"),
                                restrict: c.restrict || c.maskRestrict || "select",
                                validate: "true" === (c.validate || c.maskValidate || "true"),
                                model: c.ngModel,
                                value: c.ngValue
                            })
                        },
                        post: function(c, d, e, g) {
                            h.then(function() {
                                function h(b) {
                                    b = b || "";
                                    var c = i.getViewValue(b),
                                        d = k.maskWithoutOptionals || "",
                                        e = c.withDivisors(!0),
                                        h = c.withoutDivisors(!0);
                                    try {
                                        var j = i.getRegex(e.length - 1),
                                            l = i.getRegex(d.length - 1),
                                            m = j.test(e) || l.test(e),
                                            n = b.length - e.length === 1,
                                            o = d.length - e.length > 0;
                                        if ("accept" !== k.restrict)
                                            if ("select" !== k.restrict || m && !n) "reject" !== k.restrict || m || (c = i.removeWrongPositions(e), e = c.withDivisors(!0), h = c.withoutDivisors(!0));
                                            else {
                                                var p = b[b.length - 1],
                                                    q = e[e.length - 1];
                                                p !== q && o && (e += p);
                                                var r = i.getFirstWrongPosition(e);
                                                angular.isDefined(r) && f(r)
                                            }
                                        k.limit || (e = c.withDivisors(!1), h = c.withoutDivisors(!1)), k.validate && g.$dirty && (l.test(e) || g.$isEmpty(g.$modelValue) ? g.$setValidity("mask", !0) : g.$setValidity("mask", !1)), b !== e && (g.$setViewValue(angular.copy(e), "input"), g.$render())
                                    } catch (s) {
                                        throw a.error("[mask - parseViewValue]"), s
                                    }
                                    return k.clean ? h : e
                                }
                                var j, k = i.getOptions();
                                g.$parsers.push(h), d.on("click input paste keyup", function() {
                                    j = b(function() {
                                        b.cancel(j), h(d.val()), c.$apply()
                                    }, 100)
                                });
                                var l = c.$watch(e.ngModel, function(a) {
                                    angular.isDefined(a) && (h(a), l())
                                });
                                k.value && c.$evalAsync(function() {
                                    g.$setViewValue(angular.copy(k.value), "input"), g.$render()
                                })
                            })
                        }
                    }
                }
            }
        }])
    }(),
    function() {
        "use strict";
        angular.module("ngMask").factory("MaskService", ["$q", "OptionalService", "UtilService", function(a, b, c) {
            function d() {
                function d(a, b) {
                    var c;
                    try {
                        var d = t[a],
                            e = C[d],
                            f = h(a);
                        e ? c = "(" + e.source + ")" : (i(a) || (z.push(a), A[a] = d), c = "(\\" + d + ")")
                    } catch (g) {
                        throw g
                    }
                    return (f || b) && (c += "?"), new RegExp(c)
                }

                function e(a, b) {
                    var c, f;
                    try {
                        var g = d(a, b);
                        c = g;
                        var i = h(a),
                            j = g.source;
                        if (i && u > a + 1) {
                            var k = e(a + 1, !0).elementOptionalRegex();
                            j += k.source
                        }
                        f = new RegExp(j)
                    } catch (l) {
                        throw l
                    }
                    return {
                        elementRegex: function() {
                            return c
                        },
                        elementOptionalRegex: function() {
                            return f
                        }
                    }
                }

                function f(c) {
                    var d = a.defer();
                    s = c;
                    try {
                        var f = c.mask,
                            g = c.repeat;
                        g && (f = Array(parseInt(g) + 1).join(f)), w = b.getOptionals(f).fromMaskWithoutOptionals(), s.maskWithoutOptionals = t = b.removeOptionals(f), u = t.length;
                        for (var h, i = 0; u > i; i++) {
                            var l = e(i),
                                m = l.elementRegex(),
                                n = l.elementOptionalRegex(),
                                o = h ? h.source + n.source : n.source;
                            o = new RegExp(o), h = h ? h.source + m.source : m.source, h = new RegExp(h), B.push(o)
                        }
                        j(), v = k(t).length, d.resolve({
                            options: s,
                            divisors: z,
                            divisorElements: A,
                            optionalIndexes: w,
                            optionalDivisors: x,
                            optionalDivisorsCombinations: y
                        })
                    } catch (p) {
                        throw d.reject(p), p
                    }
                    return d.promise
                }

                function g(a) {
                    var b;
                    try {
                        b = B[a] ? B[a].source : ""
                    } catch (c) {
                        throw c
                    }
                    return new RegExp("^" + b + "$")
                }

                function h(a) {
                    return c.inArray(a, w)
                }

                function i(a) {
                    return c.inArray(a, z)
                }

                function j() {
                    function a(a, b) {
                        return a - b
                    }
                    for (var b = z.sort(a), c = w.sort(a), d = 0; d < b.length; d++)
                        for (var e = b[d], f = 1; f <= c.length; f++) {
                            var g = c[f - 1];
                            if (g >= e) break;
                            x[e] = x[e] ? x[e].concat(e - f) : [e - f], A[e - f] = A[e]
                        }
                }

                function k(a) {
                    try {
                        if (z.length > 0 && a) {
                            for (var b = Object.keys(A), d = [], e = b.length - 1; e >= 0; e--) {
                                var f = A[b[e]];
                                f && d.push(f)
                            }
                            d = c.uniqueArray(d);
                            var g = new RegExp("[\\" + d.join("\\") + "]", "g");
                            return a.replace(g, "")
                        }
                        return a
                    } catch (h) {
                        throw h
                    }
                }

                function l(a, b) {
                    function d(a, b) {
                        for (var c = b, d = 0; d < a.length; d++) {
                            var e = a[d];
                            e < c.length && c.splice(e, 0, A[e])
                        }
                        return c
                    }
                    var e = a,
                        f = z.filter(function(a) {
                            var d = Object.keys(x).map(function(a) {
                                return parseInt(a)
                            });
                            return !c.inArray(a, b) && !c.inArray(a, d)
                        });
                    return angular.isArray(a) && angular.isArray(b) ? (e = d(f, e), e = d(b, e)) : e
                }

                function m(a) {
                    var b = a.split(""),
                        d = !0;
                    if (w.length > 0) {
                        for (var e = [], f = Object.keys(x), h = 0; h < f.length; h++) {
                            var i = x[f[h]];
                            e.push(i)
                        }
                        0 === y.length && c.lazyProduct(e, function() {
                            y.push(Array.prototype.slice.call(arguments))
                        });
                        for (var h = y.length - 1; h >= 0; h--) {
                            var j = angular.copy(b);
                            j = l(j, y[h]);
                            var k = j.join(""),
                                m = g(t.length - 1);
                            if (m.test(k)) {
                                d = !1, b = j;
                                break
                            }
                        }
                    }
                    return d && (b = l(b, z)), b.join("")
                }

                function n() {
                    return s
                }

                function o(a) {
                    try {
                        var b = k(a),
                            c = m(b);
                        return {
                            withDivisors: function(a) {
                                return a ? c.substr(0, u) : c
                            },
                            withoutDivisors: function(a) {
                                return a ? b.substr(0, v) : b
                            }
                        }
                    } catch (d) {
                        throw d
                    }
                }

                function p(a, b) {
                    var c = [];
                    if (!a) return 0;
                    for (var d = 0; d < a.length; d++) {
                        var e = g(d),
                            f = a.substr(0, d + 1);
                        if (e && !e.test(f) && (c.push(d), b)) break
                    }
                    return c
                }

                function q(a) {
                    return p(a, !0)[0]
                }

                function r(a) {
                    var b = p(a, !1),
                        c = a;
                    for (var d in b) {
                        var e = b[d],
                            f = a.split("");
                        f.splice(e, 1), c = f.join("")
                    }
                    return o(c)
                }
                var s, t, u = 0,
                    v = 0,
                    w = [],
                    x = {},
                    y = [],
                    z = [],
                    A = {},
                    B = [],
                    C = {
                        9: /[0-9]/,
                        8: /[0-8]/,
                        7: /[0-7]/,
                        6: /[0-6]/,
                        5: /[0-5]/,
                        4: /[0-4]/,
                        3: /[0-3]/,
                        2: /[0-2]/,
                        1: /[0-1]/,
                        0: /[0]/,
                        "*": /./,
                        w: /\w/,
                        W: /\W/,
                        d: /\d/,
                        D: /\D/,
                        s: /\s/,
                        S: /\S/,
                        b: /\b/,
                        A: /[A-Z]/,
                        a: /[a-z]/,
                        Z: /[A-ZÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
                        z: /[a-zçáàãâéèêẽíìĩîóòôõúùũüû]/,
                        "@": /[a-zA-Z]/,
                        "#": /[a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
                        "%": /[0-9a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/
                    };
                return {
                    getViewValue: o,
                    generateRegex: f,
                    getRegex: g,
                    getOptions: n,
                    removeDivisors: k,
                    getFirstWrongPosition: q,
                    removeWrongPositions: r
                }
            }
            return {
                create: d
            }
        }])
    }(),
    function() {
        "use strict";
        angular.module("ngMask").factory("OptionalService", [function() {
            function a(a) {
                var c = [];
                try {
                    for (var d = /\?/g, e = []; null != (e = d.exec(a));) c.push(e.index - 1)
                } catch (f) {
                    throw f
                }
                return {
                    fromMask: function() {
                        return c
                    },
                    fromMaskWithoutOptionals: function() {
                        return b(c)
                    }
                }
            }

            function b(a) {
                for (var b = [], c = 0; c < a.length; c++) b.push(a[c] - c);
                return b
            }

            function c(a) {
                var b;
                try {
                    b = a.replace(/\?/g, "")
                } catch (c) {
                    throw c
                }
                return b
            }
            return {
                removeOptionals: c,
                getOptionals: a
            }
        }])
    }(),
    function() {
        "use strict";
        angular.module("ngMask").factory("UtilService", [function() {
            function a(a, b, c) {
                function d(h) {
                    var i = a[h],
                        j = g[h];
                    if (h === f)
                        for (var k = 0; j > k; ++k) e[h] = i[k], b.apply(c, e);
                    else
                        for (var k = 0; j > k; ++k) e[h] = i[k], d(h + 1);
                    e.pop()
                }
                c || (c = this);
                for (var e = [], f = a.length - 1, g = [], h = a.length; h--;) g[h] = a[h].length;
                d(0)
            }

            function b(a, b) {
                var c;
                try {
                    c = b.indexOf(a) > -1
                } catch (d) {
                    throw d
                }
                return c
            }

            function c(a) {
                for (var b = {}, c = [], d = 0, e = a.length; e > d; ++d) b.hasOwnProperty(a[d]) || (c.push(a[d]), b[a[d]] = 1);
                return c
            }
            return {
                lazyProduct: a,
                inArray: b,
                uniqueArray: c
            }
        }])
    }();
/*
 AngularJS v1.2.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */

(function(p, h, q) {
    'use strict';

    function E(a) {
        var d = [];
        s(d, h.noop).chars(a);
        return d.join("")
    }

    function k(a) {
        var d = {};
        a = a.split(",");
        var b;
        for (b = 0; b < a.length; b++) d[a[b]] = !0;
        return d
    }

    function F(a, d) {
        function b(a, c, b, g) {
            c = h.lowercase(c);
            if (t[c])
                for (; f.last() && u[f.last()];) e("", f.last());
            v[c] && f.last() == c && e("", c);
            (g = w[c] || !!g) || f.push(c);
            var l = {};
            b.replace(G, function(a, c, d, b, e) {
                l[c] = r(d || b || e || "")
            });
            d.start && d.start(c, l, g)
        }

        function e(a, c) {
            var b = 0,
                e;
            if (c = h.lowercase(c))
                for (b = f.length - 1; 0 <= b && f[b] != c; b--);
            if (0 <= b) {
                for (e = f.length - 1; e >= b; e--) d.end && d.end(f[e]);
                f.length = b
            }
        }
        var c, g, f = [],
            l = a;
        for (f.last = function() {
            return f[f.length - 1]
        }; a;) {
            g = !0;
            if (f.last() && x[f.last()]) a = a.replace(RegExp("(.*)<\\s*\\/\\s*" + f.last() + "[^>]*>", "i"), function(c, a) {
                a = a.replace(H, "$1").replace(I, "$1");
                d.chars && d.chars(r(a));
                return ""
            }), e("", f.last());
            else {
                if (0 === a.indexOf("\x3c!--")) c = a.indexOf("--", 4), 0 <= c && a.lastIndexOf("--\x3e", c) === c && (d.comment && d.comment(a.substring(4, c)), a = a.substring(c + 3), g = !1);
                else if (y.test(a)) {
                    if (c = a.match(y)) a =
                        a.replace(c[0], ""), g = !1
                } else if (J.test(a)) {
                    if (c = a.match(z)) a = a.substring(c[0].length), c[0].replace(z, e), g = !1
                } else K.test(a) && (c = a.match(A)) && (a = a.substring(c[0].length), c[0].replace(A, b), g = !1);
                g && (c = a.indexOf("<"), g = 0 > c ? a : a.substring(0, c), a = 0 > c ? "" : a.substring(c), d.chars && d.chars(r(g)))
            }
            if (a == l) throw L("badparse", a);
            l = a
        }
        e()
    }

    function r(a) {
        if (!a) return "";
        var d = M.exec(a);
        a = d[1];
        var b = d[3];
        if (d = d[2]) n.innerHTML = d.replace(/</g, "&lt;"), d = "textContent" in n ? n.textContent : n.innerText;
        return a + d + b
    }

    function B(a) {
        return a.replace(/&/g,
            "&amp;").replace(N, function(a) {
            var b = a.charCodeAt(0);
            a = a.charCodeAt(1);
            return "&#" + (1024 * (b - 55296) + (a - 56320) + 65536) + ";"
        }).replace(O, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function s(a, d) {
        var b = !1,
            e = h.bind(a, a.push);
        return {
            start: function(a, g, f) {
                a = h.lowercase(a);
                !b && x[a] && (b = a);
                b || !0 !== C[a] || (e("<"), e(a), h.forEach(g, function(b, f) {
                    var g = h.lowercase(f),
                        k = "img" === a && "src" === g || "background" === g;
                    !0 !== P[g] || !0 === D[g] && !d(b, k) || (e(" "), e(f), e('="'), e(B(b)), e('"'))
                }),
                    e(f ? "/>" : ">"))
            },
            end: function(a) {
                a = h.lowercase(a);
                b || !0 !== C[a] || (e("</"), e(a), e(">"));
                a == b && (b = !1)
            },
            chars: function(a) {
                b || e(B(a))
            }
        }
    }
    var L = h.$$minErr("$sanitize"),
        A = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
        z = /^<\s*\/\s*([\w:-]+)[^>]*>/,
        G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        K = /^</,
        J = /^<\s*\//,
        H = /\x3c!--(.*?)--\x3e/g,
        y = /<!DOCTYPE([^>]*?)>/i,
        I = /<!\[CDATA\[(.*?)]]\x3e/g,
        N = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        O = /([^\#-~| |!])/g,
        w = k("area,br,col,hr,img,wbr");
    p = k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
    q = k("rp,rt");
    var v = h.extend({}, q, p),
        t = h.extend({}, p, k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        u = h.extend({}, q, k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        x = k("script,style"),
        C = h.extend({}, w, t, u, v),
        D = k("background,cite,href,longdesc,src,usemap"),
        P = h.extend({}, D, k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
        n = document.createElement("pre"),
        M = /^(\s*)([\s\S]*?)(\s*)$/;
    h.module("ngSanitize", []).provider("$sanitize", function() {
        this.$get = ["$$sanitizeUri", function(a) {
            return function(d) {
                var b = [];
                F(d, s(b, function(b, c) {
                    return !/^unsafe/.test(a(b, c))
                }));
                return b.join("")
            }
        }]
    });
    h.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
        var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
            b = /^mailto:/;
        return function(e, c) {
            function g(a) {
                a && m.push(E(a))
            }

            function f(a, b) {
                m.push("<a ");
                h.isDefined(c) && (m.push('target="'), m.push(c), m.push('" '));
                m.push('href="');
                m.push(a);
                m.push('">');
                g(b);
                m.push("</a>")
            }
            if (!e) return e;
            for (var l, k = e, m = [], n, p; l = k.match(d);) n = l[0], l[2] == l[3] && (n = "mailto:" + n), p = l.index, g(k.substr(0, p)), f(n, l[0].replace(b, "")), k = k.substring(p + l[0].length);
            g(k);
            return a(m.join(""))
        }
    }])
})(window, window.angular);
/*!
 angular-xeditable - 0.1.9
 Edit-in-place for angular.js
 Build date: 2015-03-26
 */
/**
 * Angular-xeditable module
 *
 */

angular.module('xeditable', [])

    /**
     * Default options.
     *
     * @namespace editable-options
     */
    //todo: maybe better have editableDefaults, not options...
    .value('editableOptions', {
        /**
         * Theme. Possible values `bs3`, `bs2`, `default`.
         *
         * @var {string} theme
         * @memberOf editable-options
         */
        theme: 'default',
        /**
         * Icon Set. Possible values `font-awesome`, `default`.
         *
         * @var {string} icon set
         * @memberOf editable-options
         */
        icon_set: 'default',
        /**
         * Whether to show buttons for single editalbe element.
         * Possible values `right` (default), `no`.
         *
         * @var {string} buttons
         * @memberOf editable-options
         */
        buttons: 'right',
        /**
         * Default value for `blur` attribute of single editable element.
         * Can be `cancel|submit|ignore`.
         *
         * @var {string} blurElem
         * @memberOf editable-options
         */
        blurElem: 'cancel',
        /**
         * Default value for `blur` attribute of editable form.
         * Can be `cancel|submit|ignore`.
         *
         * @var {string} blurForm
         * @memberOf editable-options
         */
        blurForm: 'ignore',
        /**
         * How input elements get activated. Possible values: `focus|select|none`.
         *
         * @var {string} activate
         * @memberOf editable-options
         */
        activate: 'focus',
        /**
         * Whether to disable x-editable. Can be overloaded on each element.
         *
         * @var {boolean} isDisabled
         * @memberOf editable-options
         */
        isDisabled: false,

        /**
         * Event, on which the edit mode gets activated.
         * Can be any event.
         *
         * @var {string} activationEvent
         * @memberOf editable-options
         */
        activationEvent: 'click'

    });

/*
 Angular-ui bootstrap datepicker
 http://angular-ui.github.io/bootstrap/#/datepicker
 */
angular.module('xeditable').directive('editableBsdate', ['editableDirectiveFactory',
    function(editableDirectiveFactory) {
        return editableDirectiveFactory({
            directiveName: 'editableBsdate',
            inputTpl: '<div></div>',
            render: function() {
                /** This basically renders a datepicker as in the example shown in
                 **  http://angular-ui.github.io/bootstrap/#/datepicker
                 **  The attributes are all the same as in the bootstrap-ui datepicker with e- as prefix
                 **/
                this.parent.render.call(this);

                var inputDatePicker = angular.element('<input type="text" class="form-control" ng-model="$data"/>');
                var buttonDatePicker = angular.element('<button type="button" class="btn btn-default"><i class="glyphicon glyphicon-calendar"></i></button>');
                var buttonWrapper = angular.element('<span class="input-group-btn"></span>');

                inputDatePicker.attr('datepicker-popup', this.attrs.eDatepickerPopupXEditable || 'yyyy/MM/dd');
                inputDatePicker.attr('is-open', this.attrs.eIsOpen);
                inputDatePicker.attr('date-disabled', this.attrs.eDateDisabled);
                inputDatePicker.attr('datepicker-popup', this.attrs.eDatepickerPopup);
                inputDatePicker.attr('datepicker-mode', this.attrs.eDatepickerMode || 'day');
                inputDatePicker.attr('min-date', this.attrs.eMinDate);
                inputDatePicker.attr('max-date', this.attrs.eMaxDate);
                inputDatePicker.attr('show-weeks', this.attrs.eShowWeeks || true);
                inputDatePicker.attr('starting-day', this.attrs.eStartingDay || 0);
                inputDatePicker.attr('init-date', this.attrs.eInitDate || new Date());
                inputDatePicker.attr('min-mode', this.attrs.eMinMode || 'day');
                inputDatePicker.attr('max-mode', this.attrs.eMaxMode || 'year');
                inputDatePicker.attr('format-day', this.attrs.eFormatDay || 'dd');
                inputDatePicker.attr('format-month', this.attrs.eFormatMonth || 'MMMM');
                inputDatePicker.attr('format-year', this.attrs.eFormatYear || 'yyyy');
                inputDatePicker.attr('format-day-header', this.attrs.eFormatDayHeader || 'EEE');
                inputDatePicker.attr('format-day-title', this.attrs.eFormatDayTitle || 'MMMM yyyy');
                inputDatePicker.attr('format-month-title', this.attrs.eFormatMonthTitle || 'yyyy');
                inputDatePicker.attr('year-range', this.attrs.eYearRange || 20);
                inputDatePicker.attr('show-button-bar', this.attrs.eShowButtonBar || true);
                inputDatePicker.attr('current-text', this.attrs.eCurrentText || 'Today');
                inputDatePicker.attr('clear-text', this.attrs.eClearText || 'Clear');
                inputDatePicker.attr('close-text', this.attrs.eCloseText || 'Done');
                inputDatePicker.attr('close-on-date-selection', this.attrs.eCloseOnDateSelection || true);
                inputDatePicker.attr('date-picker-append-to-body', this.attrs.eDatePickerAppendToBody || false);
                inputDatePicker.attr('date-disabled', this.attrs.eDateDisabled);

                buttonDatePicker.attr('ng-click', this.attrs.eNgClick);

                buttonWrapper.append(buttonDatePicker);
                this.inputEl.prepend(inputDatePicker);
                this.inputEl.append(buttonWrapper);

                this.inputEl.removeAttr('class');
                this.inputEl.attr('class', 'input-group');

            }
        });
    }
]);
/*
 Angular-ui bootstrap editable timepicker
 http://angular-ui.github.io/bootstrap/#/timepicker
 */
angular.module('xeditable').directive('editableBstime', ['editableDirectiveFactory',
    function(editableDirectiveFactory) {
        return editableDirectiveFactory({
            directiveName: 'editableBstime',
            inputTpl: '<timepicker></timepicker>',
            render: function() {
                this.parent.render.call(this);

                // timepicker can't update model when ng-model set directly to it
                // see: https://github.com/angular-ui/bootstrap/issues/1141
                // so we wrap it into DIV
                var div = angular.element('<div class="well well-small" style="display:inline-block;"></div>');

                // move ng-model to wrapping div
                div.attr('ng-model', this.inputEl.attr('ng-model'));
                this.inputEl.removeAttr('ng-model');

                // move ng-change to wrapping div
                if (this.attrs.eNgChange) {
                    div.attr('ng-change', this.inputEl.attr('ng-change'));
                    this.inputEl.removeAttr('ng-change');
                }

                // wrap
                this.inputEl.wrap(div);
            }
        });
    }
]);
//checkbox
angular.module('xeditable').directive('editableCheckbox', ['editableDirectiveFactory',
    function(editableDirectiveFactory) {
        return editableDirectiveFactory({
            directiveName: 'editableCheckbox',
            inputTpl: '<input type="checkbox">',
            render: function() {
                this.parent.render.call(this);
                if (this.attrs.eTitle) {
                    this.inputEl.wrap('<label></label>');
                    this.inputEl.parent().append(this.attrs.eTitle);
                }
            },
            autosubmit: function() {
                var self = this;
                self.inputEl.bind('change', function() {
                    setTimeout(function() {
                        self.scope.$apply(function() {
                            self.scope.$form.$submit();
                        });
                    }, 500);
                });
            }
        });
    }
]);

// checklist
angular.module('xeditable').directive('editableChecklist', [
    'editableDirectiveFactory',
    'editableNgOptionsParser',
    function(editableDirectiveFactory, editableNgOptionsParser) {
        return editableDirectiveFactory({
            directiveName: 'editableChecklist',
            inputTpl: '<span></span>',
            useCopy: true,
            render: function() {
                this.parent.render.call(this);
                var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
                var html = '<label ng-repeat="' + parsed.ngRepeat + '">' +
                    '<input type="checkbox" checklist-model="$parent.$data" checklist-value="' + parsed.locals.valueFn + '">' +
                    '<span ng-bind="' + parsed.locals.displayFn + '"></span></label>';

                this.inputEl.removeAttr('ng-model');
                this.inputEl.removeAttr('ng-options');
                this.inputEl.html(html);
            }
        });
    }
]);

angular.module('xeditable').directive('editableCombodate', ['editableDirectiveFactory', 'editableCombodate',
    function(editableDirectiveFactory, editableCombodate) {
        return editableDirectiveFactory({
            directiveName: 'editableCombodate',
            inputTpl: '<input type="text">',
            render: function() {
                this.parent.render.call(this);
                var combodate = editableCombodate.getInstance(this.inputEl, {
                    value: new Date(this.scope.$data)
                });

                var self = this;
                combodate.$widget.find('select').bind('change', function(e) {
                    self.scope.$data = (new Date(combodate.getValue())).toISOString();
                });
            }
        });
    }
]);
/*
 Input types: text|email|tel|number|url|search|color|date|datetime|time|month|week
 */

(function() {

    var types = 'text|password|email|tel|number|url|search|color|date|datetime|time|month|week|file'.split('|');

    //todo: datalist

    // generate directives
    angular.forEach(types, function(type) {
        var directiveName = 'editable' + type.charAt(0).toUpperCase() + type.slice(1);
        angular.module('xeditable').directive(directiveName, ['editableDirectiveFactory',
            function(editableDirectiveFactory) {
                return editableDirectiveFactory({
                    directiveName: directiveName,
                    inputTpl: '<input type="' + type + '">'
                });
            }
        ]);
    });

    //`range` is bit specific
    angular.module('xeditable').directive('editableRange', ['editableDirectiveFactory',
        function(editableDirectiveFactory) {
            return editableDirectiveFactory({
                directiveName: 'editableRange',
                inputTpl: '<input type="range" id="range" name="range">',
                render: function() {
                    this.parent.render.call(this);
                    this.inputEl.after('<output>{{$data}}</output>');
                }
            });
        }
    ]);

}());

// radiolist
angular.module('xeditable').directive('editableRadiolist', [
    'editableDirectiveFactory',
    'editableNgOptionsParser',
    function(editableDirectiveFactory, editableNgOptionsParser) {
        return editableDirectiveFactory({
            directiveName: 'editableRadiolist',
            inputTpl: '<span></span>',
            render: function() {
                this.parent.render.call(this);
                var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
                var html = '<label ng-repeat="' + parsed.ngRepeat + '">' +
                    '<input type="radio" ng-disabled="' + this.attrs.eNgDisabled + '" ng-model="$parent.$data" value="{{' + parsed.locals.valueFn + '}}">' +
                    '<span ng-bind="' + parsed.locals.displayFn + '"></span></label>';

                this.inputEl.removeAttr('ng-model');
                this.inputEl.removeAttr('ng-options');
                this.inputEl.html(html);
            },
            autosubmit: function() {
                var self = this;
                self.inputEl.bind('change', function() {
                    setTimeout(function() {
                        self.scope.$apply(function() {
                            self.scope.$form.$submit();
                        });
                    }, 500);
                });
            }
        });
    }
]);

//select
angular.module('xeditable').directive('editableSelect', ['editableDirectiveFactory',
    function(editableDirectiveFactory) {
        return editableDirectiveFactory({
            directiveName: 'editableSelect',
            inputTpl: '<select></select>',
            autosubmit: function() {
                var self = this;
                self.inputEl.bind('change', function() {
                    self.scope.$apply(function() {
                        self.scope.$form.$submit();
                    });
                });
            }
        });
    }
]);
//textarea
angular.module('xeditable').directive('editableTextarea', ['editableDirectiveFactory',
    function(editableDirectiveFactory) {
        return editableDirectiveFactory({
            directiveName: 'editableTextarea',
            inputTpl: '<textarea></textarea>',
            addListeners: function() {
                var self = this;
                self.parent.addListeners.call(self);
                // submit textarea by ctrl+enter even with buttons
                if (self.single && self.buttons !== 'no') {
                    self.autosubmit();
                }
            },
            autosubmit: function() {
                var self = this;
                self.inputEl.bind('keydown', function(e) {
                    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13)) {
                        self.scope.$apply(function() {
                            self.scope.$form.$submit();
                        });
                    }
                });
            }
        });
    }
]);

/**
 * EditableController class.
 * Attached to element with `editable-xxx` directive.
 *
 * @namespace editable-element
 */
/*
 TODO: this file should be refactored to work more clear without closures!
 */
angular.module('xeditable').factory('editableController', ['$q', 'editableUtils',
    function($q, editableUtils) {

        //EditableController function
        EditableController.$inject = ['$scope', '$attrs', '$element', '$parse', 'editableThemes', 'editableIcons', 'editableOptions', '$rootScope', '$compile', '$q'];

        function EditableController($scope, $attrs, $element, $parse, editableThemes, editableIcons, editableOptions, $rootScope, $compile, $q) {
            var valueGetter;

            //if control is disabled - it does not participate in waiting process
            var inWaiting;

            var self = this;

            self.scope = $scope;
            self.elem = $element;
            self.attrs = $attrs;
            self.inputEl = null;
            self.editorEl = null;
            self.single = true;
            self.error = '';
            self.theme = editableThemes[editableOptions.theme] || editableThemes['default'];
            self.parent = {};

            //will be undefined if icon_set is default and theme is default
            self.icon_set = editableOptions.icon_set === 'default' ? editableIcons.default[editableOptions.theme] : editableIcons.external[editableOptions.icon_set];

            //to be overwritten by directive
            self.inputTpl = '';
            self.directiveName = '';

            // with majority of controls copy is not needed, but..
            // copy MUST NOT be used for `select-multiple` with objects as items
            // copy MUST be used for `checklist`
            self.useCopy = false;

            //runtime (defaults)
            self.single = null;

            /**
             * Attributes defined with `e-*` prefix automatically transfered from original element to
             * control.
             * For example, if you set `<span editable-text="user.name" e-style="width: 100px"`>
             * then input will appear as `<input style="width: 100px">`.
             * See [demo](#text-customize).
             *
             * @var {any|attribute} e-*
             * @memberOf editable-element
             */

            /**
             * Whether to show ok/cancel buttons. Values: `right|no`.
             * If set to `no` control automatically submitted when value changed.
             * If control is part of form buttons will never be shown.
             *
             * @var {string|attribute} buttons
             * @memberOf editable-element
             */
            self.buttons = 'right';
            /**
             * Action when control losses focus. Values: `cancel|submit|ignore`.
             * Has sense only for single editable element.
             * Otherwise, if control is part of form - you should set `blur` of form, not of individual element.
             *
             * @var {string|attribute} blur
             * @memberOf editable-element
             */
                // no real `blur` property as it is transfered to editable form

                //init
            self.init = function(single) {
                self.single = single;

                self.name = $attrs.eName || $attrs[self.directiveName];
                /*
                 if(!$attrs[directiveName] && !$attrs.eNgModel && ($attrs.eValue === undefined)) {
                 throw 'You should provide value for `'+directiveName+'` or `e-value` in editable element!';
                 }
                 */
                if ($attrs[self.directiveName]) {
                    valueGetter = $parse($attrs[self.directiveName]);
                } else {
                    throw 'You should provide value for `' + self.directiveName + '` in editable element!';
                }

                // settings for single and non-single
                if (!self.single) {
                    // hide buttons for non-single
                    self.buttons = 'no';
                } else {
                    self.buttons = self.attrs.buttons || editableOptions.buttons;
                }

                //if name defined --> watch changes and update $data in form
                if ($attrs.eName) {
                    self.scope.$watch('$data', function(newVal) {
                        self.scope.$form.$data[$attrs.eName] = newVal;
                    });
                }

                /**
                 * Called when control is shown.
                 * See [demo](#select-remote).
                 *
                 * @var {method|attribute} onshow
                 * @memberOf editable-element
                 */
                if ($attrs.onshow) {
                    self.onshow = function() {
                        return self.catchError($parse($attrs.onshow)($scope));
                    };
                }

                /**
                 * Called when control is hidden after both save or cancel.
                 *
                 * @var {method|attribute} onhide
                 * @memberOf editable-element
                 */
                if ($attrs.onhide) {
                    self.onhide = function() {
                        return $parse($attrs.onhide)($scope);
                    };
                }

                /**
                 * Called when control is cancelled.
                 *
                 * @var {method|attribute} oncancel
                 * @memberOf editable-element
                 */
                if ($attrs.oncancel) {
                    self.oncancel = function() {
                        return $parse($attrs.oncancel)($scope);
                    };
                }

                /**
                 * Called during submit before value is saved to model.
                 * See [demo](#onbeforesave).
                 *
                 * @var {method|attribute} onbeforesave
                 * @memberOf editable-element
                 */
                if ($attrs.onbeforesave) {
                    self.onbeforesave = function() {
                        return self.catchError($parse($attrs.onbeforesave)($scope));
                    };
                }

                /**
                 * Called during submit after value is saved to model.
                 * See [demo](#onaftersave).
                 *
                 * @var {method|attribute} onaftersave
                 * @memberOf editable-element
                 */
                if ($attrs.onaftersave) {
                    self.onaftersave = function() {
                        return self.catchError($parse($attrs.onaftersave)($scope));
                    };
                }

                // watch change of model to update editable element
                // now only add/remove `editable-empty` class.
                // Initially this method called with newVal = undefined, oldVal = undefined
                // so no need initially call handleEmpty() explicitly
                $scope.$parent.$watch($attrs[self.directiveName], function(newVal, oldVal) {
                    self.setLocalValue();
                    self.handleEmpty();
                });
            };

            self.render = function() {
                var theme = self.theme;

                //build input
                self.inputEl = angular.element(self.inputTpl);

                //build controls
                self.controlsEl = angular.element(theme.controlsTpl);
                self.controlsEl.append(self.inputEl);

                //build buttons
                if (self.buttons !== 'no') {
                    self.buttonsEl = angular.element(theme.buttonsTpl);
                    self.submitEl = angular.element(theme.submitTpl);
                    self.cancelEl = angular.element(theme.cancelTpl);
                    if (self.icon_set) {
                        self.submitEl.find('span').addClass(self.icon_set.ok);
                        self.cancelEl.find('span').addClass(self.icon_set.cancel);
                    }
                    self.buttonsEl.append(self.submitEl).append(self.cancelEl);
                    self.controlsEl.append(self.buttonsEl);

                    self.inputEl.addClass('editable-has-buttons');
                }

                //build error
                self.errorEl = angular.element(theme.errorTpl);
                self.controlsEl.append(self.errorEl);

                //build editor
                self.editorEl = angular.element(self.single ? theme.formTpl : theme.noformTpl);
                self.editorEl.append(self.controlsEl);

                // transfer `e-*|data-e-*|x-e-*` attributes
                for (var k in $attrs.$attr) {
                    if (k.length <= 1) {
                        continue;
                    }
                    var transferAttr = false;
                    var nextLetter = k.substring(1, 2);

                    // if starts with `e` + uppercase letter
                    if (k.substring(0, 1) === 'e' && nextLetter === nextLetter.toUpperCase()) {
                        transferAttr = k.substring(1); // cut `e`
                    } else {
                        continue;
                    }

                    // exclude `form` and `ng-submit`,
                    if (transferAttr === 'Form' || transferAttr === 'NgSubmit') {
                        continue;
                    }

                    // convert back to lowercase style
                    transferAttr = transferAttr.substring(0, 1).toLowerCase() + editableUtils.camelToDash(transferAttr.substring(1));

                    // workaround for attributes without value (e.g. `multiple = "multiple"`)
                    // except for 'e-value'
                    var attrValue = (transferAttr !== 'value' && $attrs[k] === '') ? transferAttr : $attrs[k];

                    // set attributes to input
                    self.inputEl.attr(transferAttr, attrValue);
                }

                self.inputEl.addClass('editable-input');
                self.inputEl.attr('ng-model', '$data');

                // add directiveName class to editor, e.g. `editable-text`
                self.editorEl.addClass(editableUtils.camelToDash(self.directiveName));

                if (self.single) {
                    self.editorEl.attr('editable-form', '$form');
                    // transfer `blur` to form
                    self.editorEl.attr('blur', self.attrs.blur || (self.buttons === 'no' ? 'cancel' : editableOptions.blurElem));
                }

                //apply `postrender` method of theme
                if (angular.isFunction(theme.postrender)) {
                    theme.postrender.call(self);
                }

            };

            // with majority of controls copy is not needed, but..
            // copy MUST NOT be used for `select-multiple` with objects as items
            // copy MUST be used for `checklist`
            self.setLocalValue = function() {
                self.scope.$data = self.useCopy ?
                    angular.copy(valueGetter($scope.$parent)) :
                    valueGetter($scope.$parent);
            };

            //show
            self.show = function() {
                // set value of scope.$data
                self.setLocalValue();

                /*
                 Originally render() was inside init() method, but some directives polluting editorEl,
                 so it is broken on second openning.
                 Cloning is not a solution as jqLite can not clone with event handler's.
                 */
                self.render();

                // insert into DOM
                $element.after(self.editorEl);

                // compile (needed to attach ng-* events from markup)
                $compile(self.editorEl)($scope);

                // attach listeners (`escape`, autosubmit, etc)
                self.addListeners();

                // hide element
                $element.addClass('editable-hide');

                // onshow
                return self.onshow();
            };

            //hide
            self.hide = function() {

                self.editorEl.remove();
                $element.removeClass('editable-hide');

                // onhide
                return self.onhide();
            };

            // cancel
            self.cancel = function() {
                // oncancel
                self.oncancel();
                // don't call hide() here as it called in form's code
            };

            /*
             Called after show to attach listeners
             */
            self.addListeners = function() {
                // bind keyup for `escape`
                self.inputEl.bind('keyup', function(e) {
                    if (!self.single) {
                        return;
                    }

                    // todo: move this to editable-form!
                    switch (e.keyCode) {
                        // hide on `escape` press
                        case 27:
                            self.scope.$apply(function() {
                                self.scope.$form.$cancel();
                            });
                            break;
                    }
                });

                // autosubmit when `no buttons`
                if (self.single && self.buttons === 'no') {
                    self.autosubmit();
                }

                // click - mark element as clicked to exclude in document click handler
                self.editorEl.bind('click', function(e) {
                    // ignore right/middle button click
                    if (e.which && e.which !== 1) {
                        return;
                    }

                    if (self.scope.$form.$visible) {
                        self.scope.$form._clicked = true;
                    }
                });
            };

            // setWaiting
            self.setWaiting = function(value) {
                if (value) {
                    // participate in waiting only if not disabled
                    inWaiting = !self.inputEl.attr('disabled') &&
                        !self.inputEl.attr('ng-disabled') &&
                        !self.inputEl.attr('ng-enabled');
                    if (inWaiting) {
                        self.inputEl.attr('disabled', 'disabled');
                        if (self.buttonsEl) {
                            self.buttonsEl.find('button').attr('disabled', 'disabled');
                        }
                    }
                } else {
                    if (inWaiting) {
                        self.inputEl.removeAttr('disabled');
                        if (self.buttonsEl) {
                            self.buttonsEl.find('button').removeAttr('disabled');
                        }
                    }
                }
            };

            self.activate = function(start, end) {
                setTimeout(function() {
                    var el = self.inputEl[0];
                    if (editableOptions.activate === 'focus' && el.focus) {
                        if (start) {
                            end = end || start;
                            el.onfocus = function() {
                                var that = this;
                                setTimeout(function() {
                                    that.setSelectionRange(start, end);
                                });
                            };
                        }
                        el.focus();
                    }
                    if (editableOptions.activate === 'select' && el.select) {
                        el.select();
                    }
                }, 0);
            };

            self.setError = function(msg) {
                if (!angular.isObject(msg)) {
                    $scope.$error = msg;
                    self.error = msg;
                }
            };

            /*
             Checks that result is string or promise returned string and shows it as error message
             Applied to onshow, onbeforesave, onaftersave
             */
            self.catchError = function(result, noPromise) {
                if (angular.isObject(result) && noPromise !== true) {
                    $q.when(result).then(
                        //success and fail handlers are equal
                        angular.bind(this, function(r) {
                            this.catchError(r, true);
                        }),
                        angular.bind(this, function(r) {
                            this.catchError(r, true);
                        })
                    );
                    //check $http error
                } else if (noPromise && angular.isObject(result) && result.status &&
                    (result.status !== 200) && result.data && angular.isString(result.data)) {
                    this.setError(result.data);
                    //set result to string: to let form know that there was error
                    result = result.data;
                } else if (angular.isString(result)) {
                    this.setError(result);
                }
                return result;
            };

            self.save = function() {
                valueGetter.assign($scope.$parent,
                    self.useCopy ? angular.copy(self.scope.$data) : self.scope.$data);

                // no need to call handleEmpty here as we are watching change of model value
                // self.handleEmpty();
            };

            /*
             attach/detach `editable-empty` class to element
             */
            self.handleEmpty = function() {
                var val = valueGetter($scope.$parent);
                var isEmpty = val === null || val === undefined || val === "" || (angular.isArray(val) && val.length === 0);
                $element.toggleClass('editable-empty', isEmpty);
            };

            /*
             Called when `buttons = "no"` to submit automatically
             */
            self.autosubmit = angular.noop;

            self.onshow = angular.noop;
            self.onhide = angular.noop;
            self.oncancel = angular.noop;
            self.onbeforesave = angular.noop;
            self.onaftersave = angular.noop;
        }

        return EditableController;
    }
]);

/*
 editableFactory is used to generate editable directives (see `/directives` folder)
 Inside it does several things:
 - detect form for editable element. Form may be one of three types:
 1. autogenerated form (for single editable elements)
 2. wrapper form (element wrapped by <form> tag)
 3. linked form (element has `e-form` attribute pointing to existing form)

 - attach editableController to element

 Depends on: editableController, editableFormFactory
 */
angular.module('xeditable').factory('editableDirectiveFactory', ['$parse', '$compile', 'editableThemes', '$rootScope', '$document', 'editableController', 'editableFormController', 'editableOptions',
    function($parse, $compile, editableThemes, $rootScope, $document, editableController, editableFormController, editableOptions) {

        //directive object
        return function(overwrites) {
            return {
                restrict: 'A',
                scope: true,
                require: [overwrites.directiveName, '?^form'],
                controller: editableController,
                link: function(scope, elem, attrs, ctrl) {
                    // editable controller
                    var eCtrl = ctrl[0];

                    // form controller
                    var eFormCtrl;

                    // this variable indicates is element is bound to some existing form,
                    // or it's single element who's form will be generated automatically
                    // By default consider single element without any linked form.ß
                    var hasForm = false;

                    // element wrapped by form
                    if (ctrl[1]) {
                        eFormCtrl = ctrl[1];
                        hasForm = true;
                    } else if (attrs.eForm) { // element not wrapped by <form>, but we hane `e-form` attr
                        var getter = $parse(attrs.eForm)(scope);
                        if (getter) { // form exists in scope (above), e.g. editable column
                            eFormCtrl = getter;
                            hasForm = true;
                        } else { // form exists below or not exist at all: check document.forms
                            for (var i = 0; i < $document[0].forms.length; i++) {
                                if ($document[0].forms[i].name === attrs.eForm) {
                                    // form is below and not processed yet
                                    eFormCtrl = null;
                                    hasForm = true;
                                    break;
                                }
                            }
                        }
                    }

                    /*
                     if(hasForm && !attrs.eName) {
                     throw 'You should provide `e-name` for editable element inside form!';
                     }
                     */

                    //check for `editable-form` attr in form
                    /*
                     if(eFormCtrl && ) {
                     throw 'You should provide `e-name` for editable element inside form!';
                     }
                     */

                    // store original props to `parent` before merge
                    angular.forEach(overwrites, function(v, k) {
                        if (eCtrl[k] !== undefined) {
                            eCtrl.parent[k] = eCtrl[k];
                        }
                    });

                    // merge overwrites to base editable controller
                    angular.extend(eCtrl, overwrites);

                    // x-editable can be disabled using editableOption or edit-disabled attribute
                    var disabled = angular.isDefined(attrs.editDisabled) ?
                        scope.$eval(attrs.editDisabled) :
                        editableOptions.isDisabled;

                    if (disabled) {
                        return;
                    }

                    // init editable ctrl
                    eCtrl.init(!hasForm);

                    // publich editable controller as `$editable` to be referenced in html
                    scope.$editable = eCtrl;

                    // add `editable` class to element
                    elem.addClass('editable');

                    // hasForm
                    if (hasForm) {
                        if (eFormCtrl) {
                            scope.$form = eFormCtrl;
                            if (!scope.$form.$addEditable) {
                                throw 'Form with editable elements should have `editable-form` attribute.';
                            }
                            scope.$form.$addEditable(eCtrl);
                        } else {
                            // future form (below): add editable controller to buffer and add to form later
                            $rootScope.$$editableBuffer = $rootScope.$$editableBuffer || {};
                            $rootScope.$$editableBuffer[attrs.eForm] = $rootScope.$$editableBuffer[attrs.eForm] || [];
                            $rootScope.$$editableBuffer[attrs.eForm].push(eCtrl);
                            scope.$form = null; //will be re-assigned later
                        }
                        // !hasForm
                    } else {
                        // create editableform controller
                        scope.$form = editableFormController();
                        // add self to editable controller
                        scope.$form.$addEditable(eCtrl);

                        // if `e-form` provided, publish local $form in scope
                        if (attrs.eForm) {
                            scope.$parent[attrs.eForm] = scope.$form;
                        }

                        // bind click - if no external form defined
                        if (!attrs.eForm || attrs.eClickable) {
                            elem.addClass('editable-click');
                            elem.bind(editableOptions.activationEvent, function(e) {
                                e.preventDefault();
                                e.editable = eCtrl;
                                scope.$apply(function() {
                                    scope.$form.$show();
                                });
                            });
                        }
                    }

                }
            };
        };
    }
]);

/*
 Returns editableForm controller
 */
angular.module('xeditable').factory('editableFormController', ['$parse', '$document', '$rootScope', 'editablePromiseCollection', 'editableUtils',
    function($parse, $document, $rootScope, editablePromiseCollection, editableUtils) {

        // array of opened editable forms
        var shown = [];

        //Check if the child element correspond or is a descendant of the parent element
        var isSelfOrDescendant = function(parent, child) {
            if (child == parent) {
                return true;
            }

            var node = child.parentNode;
            while (node !== null) {
                if (node == parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        };

        //Check if it is a real blur : if the click event appear on a shown editable elem, this is not a blur.
        var isBlur = function(shown, event) {
            var isBlur = true;

            var editables = shown.$editables;
            angular.forEach(editables, function(v) {
                var element = v.editorEl[0];
                if (isSelfOrDescendant(element, event.target))
                    isBlur = false;

            });
            return isBlur;
        };

        // bind click to body: cancel|submit|ignore forms
        $document.bind('click', function(e) {
            // ignore right/middle button click
            if ((e.which && e.which !== 1) || e.isDefaultPrevented()) {
                return;
            }

            var toCancel = [];
            var toSubmit = [];
            for (var i = 0; i < shown.length; i++) {

                // exclude clicked
                if (shown[i]._clicked) {
                    shown[i]._clicked = false;
                    continue;
                }

                // exclude waiting
                if (shown[i].$waiting) {
                    continue;
                }

                if (shown[i]._blur === 'cancel' && isBlur(shown[i], e)) {
                    toCancel.push(shown[i]);
                }

                if (shown[i]._blur === 'submit' && isBlur(shown[i], e)) {
                    toSubmit.push(shown[i]);
                }
            }

            if (toCancel.length || toSubmit.length) {
                $rootScope.$apply(function() {
                    angular.forEach(toCancel, function(v) {
                        v.$cancel();
                    });
                    angular.forEach(toSubmit, function(v) {
                        v.$submit();
                    });
                });
            }
        });

        var base = {
            $addEditable: function(editable) {
                //console.log('add editable', editable.elem, editable.elem.bind);
                this.$editables.push(editable);

                //'on' is not supported in angular 1.0.8
                editable.elem.bind('$destroy', angular.bind(this, this.$removeEditable, editable));

                //bind editable's local $form to self (if not bound yet, below form)
                if (!editable.scope.$form) {
                    editable.scope.$form = this;
                }

                //if form already shown - call show() of new editable
                if (this.$visible) {
                    editable.catchError(editable.show());
                }
            },

            $removeEditable: function(editable) {
                //arrayRemove
                for (var i = 0; i < this.$editables.length; i++) {
                    if (this.$editables[i] === editable) {
                        this.$editables.splice(i, 1);
                        return;
                    }
                }
            },

            /**
             * Shows form with editable controls.
             *
             * @method $show()
             * @memberOf editable-form
             */
            $show: function() {
                if (this.$visible) {
                    return;
                }

                this.$visible = true;

                var pc = editablePromiseCollection();

                //own show
                pc.when(this.$onshow());

                //clear errors
                this.$setError(null, '');

                //children show
                angular.forEach(this.$editables, function(editable) {
                    pc.when(editable.show());
                });

                //wait promises and activate
                pc.then({
                    onWait: angular.bind(this, this.$setWaiting),
                    onTrue: angular.bind(this, this.$activate),
                    onFalse: angular.bind(this, this.$activate),
                    onString: angular.bind(this, this.$activate)
                });

                // add to internal list of shown forms
                // setTimeout needed to prevent closing right after opening (e.g. when trigger by button)
                setTimeout(angular.bind(this, function() {
                    // clear `clicked` to get ready for clicks on visible form
                    this._clicked = false;
                    if (editableUtils.indexOf(shown, this) === -1) {
                        shown.push(this);
                    }
                }), 0);
            },

            /**
             * Sets focus on form field specified by `name`.
             *
             * @method $activate(name)
             * @param {string} name name of field
             * @memberOf editable-form
             */
            $activate: function(name) {
                var i;
                if (this.$editables.length) {
                    //activate by name
                    if (angular.isString(name)) {
                        for (i = 0; i < this.$editables.length; i++) {
                            if (this.$editables[i].name === name) {
                                this.$editables[i].activate();
                                return;
                            }
                        }
                    }

                    //try activate error field
                    for (i = 0; i < this.$editables.length; i++) {
                        if (this.$editables[i].error) {
                            this.$editables[i].activate();
                            return;
                        }
                    }

                    //by default activate first field
                    this.$editables[0].activate(this.$editables[0].elem[0].selectionStart, this.$editables[0].elem[0].selectionEnd);
                }
            },

            /**
             * Hides form with editable controls without saving.
             *
             * @method $hide()
             * @memberOf editable-form
             */
            $hide: function() {
                if (!this.$visible) {
                    return;
                }
                this.$visible = false;
                // self hide
                this.$onhide();
                // children's hide
                angular.forEach(this.$editables, function(editable) {
                    editable.hide();
                });

                // remove from internal list of shown forms
                editableUtils.arrayRemove(shown, this);
            },

            /**
             * Triggers `oncancel` event and calls `$hide()`.
             *
             * @method $cancel()
             * @memberOf editable-form
             */
            $cancel: function() {
                if (!this.$visible) {
                    return;
                }
                // self cancel
                this.$oncancel();
                // children's cancel
                angular.forEach(this.$editables, function(editable) {
                    editable.cancel();
                });
                // self hide
                this.$hide();
            },

            $setWaiting: function(value) {
                this.$waiting = !!value;
                // we can't just set $waiting variable and use it via ng-disabled in children
                // because in editable-row form is not accessible
                angular.forEach(this.$editables, function(editable) {
                    editable.setWaiting(!!value);
                });
            },

            /**
             * Shows error message for particular field.
             *
             * @method $setError(name, msg)
             * @param {string} name name of field
             * @param {string} msg error message
             * @memberOf editable-form
             */
            $setError: function(name, msg) {
                angular.forEach(this.$editables, function(editable) {
                    if (!name || editable.name === name) {
                        editable.setError(msg);
                    }
                });
            },

            $submit: function() {
                if (this.$waiting) {
                    return;
                }

                //clear errors
                this.$setError(null, '');

                //children onbeforesave
                var pc = editablePromiseCollection();
                angular.forEach(this.$editables, function(editable) {
                    pc.when(editable.onbeforesave());
                });

                /*
                 onbeforesave result:
                 - true/undefined: save data and close form
                 - false: close form without saving
                 - string: keep form open and show error
                 */
                pc.then({
                    onWait: angular.bind(this, this.$setWaiting),
                    onTrue: angular.bind(this, checkSelf, true),
                    onFalse: angular.bind(this, checkSelf, false),
                    onString: angular.bind(this, this.$activate)
                });

                //save
                function checkSelf(childrenTrue) {
                    var pc = editablePromiseCollection();
                    pc.when(this.$onbeforesave());
                    pc.then({
                        onWait: angular.bind(this, this.$setWaiting),
                        onTrue: childrenTrue ? angular.bind(this, this.$save) : angular.bind(this, this.$hide),
                        onFalse: angular.bind(this, this.$hide),
                        onString: angular.bind(this, this.$activate)
                    });
                }
            },

            $save: function() {
                // write model for each editable
                angular.forEach(this.$editables, function(editable) {
                    editable.save();
                });

                //call onaftersave of self and children
                var pc = editablePromiseCollection();
                pc.when(this.$onaftersave());
                angular.forEach(this.$editables, function(editable) {
                    pc.when(editable.onaftersave());
                });

                /*
                 onaftersave result:
                 - true/undefined/false: just close form
                 - string: keep form open and show error
                 */
                pc.then({
                    onWait: angular.bind(this, this.$setWaiting),
                    onTrue: angular.bind(this, this.$hide),
                    onFalse: angular.bind(this, this.$hide),
                    onString: angular.bind(this, this.$activate)
                });
            },

            $onshow: angular.noop,
            $oncancel: angular.noop,
            $onhide: angular.noop,
            $onbeforesave: angular.noop,
            $onaftersave: angular.noop
        };

        return function() {
            return angular.extend({
                $editables: [],
                /**
                 * Form visibility flag.
                 *
                 * @var {bool} $visible
                 * @memberOf editable-form
                 */
                $visible: false,
                /**
                 * Form waiting flag. It becomes `true` when form is loading or saving data.
                 *
                 * @var {bool} $waiting
                 * @memberOf editable-form
                 */
                $waiting: false,
                $data: {},
                _clicked: false,
                _blur: null
            }, base);
        };
    }
]);

/**
 * EditableForm directive. Should be defined in <form> containing editable controls.
 * It add some usefull methods to form variable exposed to scope by `name="myform"` attribute.
 *
 * @namespace editable-form
 */
angular.module('xeditable').directive('editableForm', ['$rootScope', '$parse', 'editableFormController', 'editableOptions',
    function($rootScope, $parse, editableFormController, editableOptions) {
        return {
            restrict: 'A',
            require: ['form'],
            //require: ['form', 'editableForm'],
            //controller: EditableFormController,
            compile: function() {
                return {
                    pre: function(scope, elem, attrs, ctrl) {
                        var form = ctrl[0];
                        var eForm;

                        //if `editableForm` has value - publish smartly under this value
                        //this is required only for single editor form that is created and removed
                        if (attrs.editableForm) {
                            if (scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
                                eForm = scope[attrs.editableForm];
                                angular.extend(form, eForm);
                            } else {
                                eForm = editableFormController();
                                scope[attrs.editableForm] = eForm;
                                angular.extend(eForm, form);
                            }
                        } else { //just merge to form and publish if form has name
                            eForm = editableFormController();
                            angular.extend(form, eForm);
                        }

                        //read editables from buffer (that appeared before FORM tag)
                        var buf = $rootScope.$$editableBuffer;
                        var name = form.$name;
                        if (name && buf && buf[name]) {
                            angular.forEach(buf[name], function(editable) {
                                eForm.$addEditable(editable);
                            });
                            delete buf[name];
                        }
                    },
                    post: function(scope, elem, attrs, ctrl) {
                        var eForm;

                        if (attrs.editableForm && scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
                            eForm = scope[attrs.editableForm];
                        } else {
                            eForm = ctrl[0];
                        }

                        /**
                         * Called when form is shown.
                         *
                         * @var {method|attribute} onshow
                         * @memberOf editable-form
                         */
                        if (attrs.onshow) {
                            eForm.$onshow = angular.bind(eForm, $parse(attrs.onshow), scope);
                        }

                        /**
                         * Called when form hides after both save or cancel.
                         *
                         * @var {method|attribute} onhide
                         * @memberOf editable-form
                         */
                        if (attrs.onhide) {
                            eForm.$onhide = angular.bind(eForm, $parse(attrs.onhide), scope);
                        }

                        /**
                         * Called when form is cancelled.
                         *
                         * @var {method|attribute} oncancel
                         * @memberOf editable-form
                         */
                        if (attrs.oncancel) {
                            eForm.$oncancel = angular.bind(eForm, $parse(attrs.oncancel), scope);
                        }

                        /**
                         * Whether form initially rendered in shown state.
                         *
                         * @var {bool|attribute} shown
                         * @memberOf editable-form
                         */
                        if (attrs.shown && $parse(attrs.shown)(scope)) {
                            eForm.$show();
                        }

                        /**
                         * Action when form losses focus. Values: `cancel|submit|ignore`.
                         * Default is `ignore`.
                         *
                         * @var {string|attribute} blur
                         * @memberOf editable-form
                         */
                        eForm._blur = attrs.blur || editableOptions.blurForm;

                        // onbeforesave, onaftersave
                        if (!attrs.ngSubmit && !attrs.submit) {
                            /**
                             * Called after all children `onbeforesave` callbacks but before saving form values
                             * to model.
                             * If at least one children callback returns `non-string` - it will not not be called.
                             * See [editable-form demo](#editable-form) for details.
                             *
                             * @var {method|attribute} onbeforesave
                             * @memberOf editable-form
                             *
                             */
                            if (attrs.onbeforesave) {
                                eForm.$onbeforesave = function() {
                                    return $parse(attrs.onbeforesave)(scope, {
                                        $data: eForm.$data
                                    });
                                };
                            }

                            /**
                             * Called when form values are saved to model.
                             * See [editable-form demo](#editable-form) for details.
                             *
                             * @var {method|attribute} onaftersave
                             * @memberOf editable-form
                             *
                             */
                            if (attrs.onaftersave) {
                                eForm.$onaftersave = function() {
                                    return $parse(attrs.onaftersave)(scope, {
                                        $data: eForm.$data
                                    });
                                };
                            }

                            elem.bind('submit', function(event) {
                                event.preventDefault();
                                scope.$apply(function() {
                                    eForm.$submit();
                                });
                            });
                        }

                        // click - mark form as clicked to exclude in document click handler
                        elem.bind('click', function(e) {
                            // ignore right/middle button click
                            if (e.which && e.which !== 1) {
                                return;
                            }

                            if (eForm.$visible) {
                                eForm._clicked = true;
                            }
                        });

                    }
                };
            }
        };
    }
]);
/**
 * editablePromiseCollection
 *
 * Collect results of function calls. Shows waiting if there are promises.
 * Finally, applies callbacks if:
 * - onTrue(): all results are true and all promises resolved to true
 * - onFalse(): at least one result is false or promise resolved to false
 * - onString(): at least one result is string or promise rejected or promise resolved to string
 */

angular.module('xeditable').factory('editablePromiseCollection', ['$q', function($q) {

    function promiseCollection() {
        return {
            promises: [],
            hasFalse: false,
            hasString: false,
            when: function(result, noPromise) {
                if (result === false) {
                    this.hasFalse = true;
                } else if (!noPromise && angular.isObject(result)) {
                    this.promises.push($q.when(result));
                } else if (angular.isString(result)) {
                    this.hasString = true;
                } else { //result === true || result === undefined || result === null
                    return;
                }
            },
            //callbacks: onTrue, onFalse, onString
            then: function(callbacks) {
                callbacks = callbacks || {};
                var onTrue = callbacks.onTrue || angular.noop;
                var onFalse = callbacks.onFalse || angular.noop;
                var onString = callbacks.onString || angular.noop;
                var onWait = callbacks.onWait || angular.noop;

                var self = this;

                if (this.promises.length) {
                    onWait(true);
                    $q.all(this.promises).then(
                        //all resolved
                        function(results) {
                            onWait(false);
                            //check all results via same `when` method (without checking promises)
                            angular.forEach(results, function(result) {
                                self.when(result, true);
                            });
                            applyCallback();
                        },
                        //some rejected
                        function(error) {
                            onWait(false);
                            onString();
                        }
                    );
                } else {
                    applyCallback();
                }

                function applyCallback() {
                    if (!self.hasString && !self.hasFalse) {
                        onTrue();
                    } else if (!self.hasString && self.hasFalse) {
                        onFalse();
                    } else {
                        onString();
                    }
                }

            }
        };
    }

    return promiseCollection;

}]);

/**
 * editableUtils
 */
angular.module('xeditable').factory('editableUtils', [function() {
    return {
        indexOf: function(array, obj) {
            if (array.indexOf) return array.indexOf(obj);

            for (var i = 0; i < array.length; i++) {
                if (obj === array[i]) return i;
            }
            return -1;
        },

        arrayRemove: function(array, value) {
            var index = this.indexOf(array, value);
            if (index >= 0) {
                array.splice(index, 1);
            }
            return value;
        },

        // copy from https://github.com/angular/angular.js/blob/master/src/Angular.js
        camelToDash: function(str) {
            var SNAKE_CASE_REGEXP = /[A-Z]/g;
            return str.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
                return (pos ? '-' : '') + letter.toLowerCase();
            });
        },

        dashToCamel: function(str) {
            var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
            var MOZ_HACK_REGEXP = /^moz([A-Z])/;
            return str.
            replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
                return offset ? letter.toUpperCase() : letter;
            }).
            replace(MOZ_HACK_REGEXP, 'Moz$1');
        }
    };
}]);

/**
 * editableNgOptionsParser
 *
 * see: https://github.com/angular/angular.js/blob/master/src/ng/directive/select.js#L131
 */
angular.module('xeditable').factory('editableNgOptionsParser', [function() {
    //0000111110000000000022220000000000000000000000333300000000000000444444444444444000000000555555555555555000000066666666666666600000000000000007777000000000000000000088888
    var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;

    function parser(optionsExp) {
        var match;

        if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) {
            throw 'ng-options parse error';
        }

        var
            displayFn = match[2] || match[1],
            valueName = match[4] || match[6],
            keyName = match[5],
            groupByFn = match[3] || '',
            valueFn = match[2] ? match[1] : valueName,
            valuesFn = match[7],
            track = match[8],
            trackFn = track ? match[8] : null;

        var ngRepeat;
        if (keyName === undefined) { // array
            ngRepeat = valueName + ' in ' + valuesFn;
            if (track !== undefined) {
                ngRepeat += ' track by ' + trackFn;
            }
        } else { // object
            ngRepeat = '(' + keyName + ', ' + valueName + ') in ' + valuesFn;
        }

        // group not supported yet
        return {
            ngRepeat: ngRepeat,
            locals: {
                valueName: valueName,
                keyName: keyName,
                valueFn: valueFn,
                displayFn: displayFn
            }
        };
    }

    return parser;
}]);

/**
 * editableCombodate
 *
 * angular version of https://github.com/vitalets/combodate
 */
angular.module('xeditable').factory('editableCombodate', [function() {
    function Combodate(element, options) {
        this.$element = angular.element(element);

        if (this.$element[0].nodeName != 'INPUT') {
            throw 'Combodate should be applied to INPUT element';
        }

        this.defaults = {
            //in this format value stored in original input
            format: 'YYYY-MM-DD HH:mm',
            //in this format items in dropdowns are displayed
            template: 'D / MMM / YYYY   H : mm',
            //initial value, can be `new Date()`
            value: null,
            minYear: 1970,
            maxYear: 2015,
            yearDescending: true,
            minuteStep: 5,
            secondStep: 1,
            firstItem: 'empty', //'name', 'empty', 'none'
            errorClass: null,
            customClass: '',
            roundTime: true, // whether to round minutes and seconds if step > 1
            smartDays: true // whether days in combo depend on selected month: 31, 30, 28
        };

        this.options = angular.extend({}, this.defaults, options);
        this.init();
    }

    Combodate.prototype = {
        constructor: Combodate,
        init: function() {
            this.map = {
                //key   regexp    moment.method
                day: ['D', 'date'],
                month: ['M', 'month'],
                year: ['Y', 'year'],
                hour: ['[Hh]', 'hours'],
                minute: ['m', 'minutes'],
                second: ['s', 'seconds'],
                ampm: ['[Aa]', '']
            };

            this.$widget = angular.element('<span class="combodate"></span>').html(this.getTemplate());

            this.initCombos();

            if (this.options.smartDays) {
                var combo = this;
                this.$widget.find('select').bind('change', function(e) {
                    // update days count if month or year changes
                    if (angular.element(e.target).hasClass('month') || angular.element(e.target).hasClass('year')) {
                        combo.fillCombo('day');
                    }
                });
            }

            this.$widget.find('select').css('width', 'auto');

            // hide original input and insert widget
            this.$element.css('display', 'none').after(this.$widget);

            // set initial value
            this.setValue(this.$element.val() || this.options.value);
        },

        /*
         Replace tokens in template with <select> elements
         */
        getTemplate: function() {
            var tpl = this.options.template;
            var customClass = this.options.customClass;

            //first pass
            angular.forEach(this.map, function(v, k) {
                v = v[0];
                var r = new RegExp(v + '+');
                var token = v.length > 1 ? v.substring(1, 2) : v;

                tpl = tpl.replace(r, '{' + token + '}');
            });

            //replace spaces with &nbsp;
            tpl = tpl.replace(/ /g, '&nbsp;');

            //second pass
            angular.forEach(this.map, function(v, k) {
                v = v[0];
                var token = v.length > 1 ? v.substring(1, 2) : v;

                tpl = tpl.replace('{' + token + '}', '<select class="' + k + ' ' + customClass + '"></select>');
            });

            return tpl;
        },

        /*
         Initialize combos that presents in template
         */
        initCombos: function() {
            for (var k in this.map) {
                var c = this.$widget[0].querySelectorAll('.' + k);
                // set properties like this.$day, this.$month etc.
                this['$' + k] = c.length ? angular.element(c) : null;
                // fill with items
                this.fillCombo(k);
            }
        },

        /*
         Fill combo with items
         */
        fillCombo: function(k) {
            var $combo = this['$' + k];
            if (!$combo) {
                return;
            }

            // define method name to fill items, e.g `fillDays`
            var f = 'fill' + k.charAt(0).toUpperCase() + k.slice(1);
            var items = this[f]();
            var value = $combo.val();

            $combo.html('');
            for (var i = 0; i < items.length; i++) {
                $combo.append('<option value="' + items[i][0] + '">' + items[i][1] + '</option>');
            }

            $combo.val(value);
        },

        /*
         Initialize items of combos. Handles `firstItem` option
         */
        fillCommon: function(key) {
            var values = [],
                relTime;

            if (this.options.firstItem === 'name') {
                //need both to support moment ver < 2 and  >= 2
                relTime = moment.relativeTime || moment.langData()._relativeTime;
                var header = typeof relTime[key] === 'function' ? relTime[key](1, true, key, false) : relTime[key];
                //take last entry (see momentjs lang files structure)
                header = header.split(' ').reverse()[0];
                values.push(['', header]);
            } else if (this.options.firstItem === 'empty') {
                values.push(['', '']);
            }
            return values;
        },

        /*
         fill day
         */
        fillDay: function() {
            var items = this.fillCommon('d'),
                name, i,
                twoDigit = this.options.template.indexOf('DD') !== -1,
                daysCount = 31;

            // detect days count (depends on month and year)
            // originally https://github.com/vitalets/combodate/pull/7
            if (this.options.smartDays && this.$month && this.$year) {
                var month = parseInt(this.$month.val(), 10);
                var year = parseInt(this.$year.val(), 10);

                if (!isNaN(month) && !isNaN(year)) {
                    daysCount = moment([year, month]).daysInMonth();
                }
            }

            for (i = 1; i <= daysCount; i++) {
                name = twoDigit ? this.leadZero(i) : i;
                items.push([i, name]);
            }
            return items;
        },

        /*
         fill month
         */
        fillMonth: function() {
            var items = this.fillCommon('M'),
                name, i,
                longNames = this.options.template.indexOf('MMMM') !== -1,
                shortNames = this.options.template.indexOf('MMM') !== -1,
                twoDigit = this.options.template.indexOf('MM') !== -1;

            for (i = 0; i <= 11; i++) {
                if (longNames) {
                    //see https://github.com/timrwood/momentjs.com/pull/36
                    name = moment().date(1).month(i).format('MMMM');
                } else if (shortNames) {
                    name = moment().date(1).month(i).format('MMM');
                } else if (twoDigit) {
                    name = this.leadZero(i + 1);
                } else {
                    name = i + 1;
                }
                items.push([i, name]);
            }
            return items;
        },

        /*
         fill year
         */
        fillYear: function() {
            var items = [],
                name, i,
                longNames = this.options.template.indexOf('YYYY') !== -1;

            for (i = this.options.maxYear; i >= this.options.minYear; i--) {
                name = longNames ? i : (i + '').substring(2);
                items[this.options.yearDescending ? 'push' : 'unshift']([i, name]);
            }

            items = this.fillCommon('y').concat(items);

            return items;
        },

        /*
         fill hour
         */
        fillHour: function() {
            var items = this.fillCommon('h'),
                name, i,
                h12 = this.options.template.indexOf('h') !== -1,
                h24 = this.options.template.indexOf('H') !== -1,
                twoDigit = this.options.template.toLowerCase().indexOf('hh') !== -1,
                min = h12 ? 1 : 0,
                max = h12 ? 12 : 23;

            for (i = min; i <= max; i++) {
                name = twoDigit ? this.leadZero(i) : i;
                items.push([i, name]);
            }
            return items;
        },

        /*
         fill minute
         */
        fillMinute: function() {
            var items = this.fillCommon('m'),
                name, i,
                twoDigit = this.options.template.indexOf('mm') !== -1;

            for (i = 0; i <= 59; i += this.options.minuteStep) {
                name = twoDigit ? this.leadZero(i) : i;
                items.push([i, name]);
            }
            return items;
        },

        /*
         fill second
         */
        fillSecond: function() {
            var items = this.fillCommon('s'),
                name, i,
                twoDigit = this.options.template.indexOf('ss') !== -1;

            for (i = 0; i <= 59; i += this.options.secondStep) {
                name = twoDigit ? this.leadZero(i) : i;
                items.push([i, name]);
            }
            return items;
        },

        /*
         fill ampm
         */
        fillAmpm: function() {
            var ampmL = this.options.template.indexOf('a') !== -1,
                ampmU = this.options.template.indexOf('A') !== -1,
                items = [
                    ['am', ampmL ? 'am' : 'AM'],
                    ['pm', ampmL ? 'pm' : 'PM']
                ];
            return items;
        },

        /*
         Returns current date value from combos.
         If format not specified - `options.format` used.
         If format = `null` - Moment object returned.
         */
        getValue: function(format) {
            var dt, values = {},
                that = this,
                notSelected = false;

            //getting selected values
            angular.forEach(this.map, function(v, k) {
                if (k === 'ampm') {
                    return;
                }
                var def = k === 'day' ? 1 : 0;

                values[k] = that['$' + k] ? parseInt(that['$' + k].val(), 10) : def;

                if (isNaN(values[k])) {
                    notSelected = true;
                    return false;
                }
            });

            //if at least one visible combo not selected - return empty string
            if (notSelected) {
                return '';
            }

            //convert hours 12h --> 24h
            if (this.$ampm) {
                //12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
                if (values.hour === 12) {
                    values.hour = this.$ampm.val() === 'am' ? 0 : 12;
                } else {
                    values.hour = this.$ampm.val() === 'am' ? values.hour : values.hour + 12;
                }
            }

            dt = moment([values.year, values.month, values.day, values.hour, values.minute, values.second]);

            //highlight invalid date
            this.highlight(dt);

            format = format === undefined ? this.options.format : format;
            if (format === null) {
                return dt.isValid() ? dt : null;
            } else {
                return dt.isValid() ? dt.format(format) : '';
            }
        },

        setValue: function(value) {
            if (!value) {
                return;
            }

            // parse in strict mode (third param `true`)
            var dt = typeof value === 'string' ? moment(value, this.options.format, true) : moment(value),
                that = this,
                values = {};

            //function to find nearest value in select options
            function getNearest($select, value) {
                var delta = {};
                angular.forEach($select.children('option'), function(opt, i) {
                    var optValue = angular.element(opt).attr('value');

                    if (optValue === '') return;
                    var distance = Math.abs(optValue - value);
                    if (typeof delta.distance === 'undefined' || distance < delta.distance) {
                        delta = {
                            value: optValue,
                            distance: distance
                        };
                    }
                });
                return delta.value;
            }

            if (dt.isValid()) {
                //read values from date object
                angular.forEach(this.map, function(v, k) {
                    if (k === 'ampm') {
                        return;
                    }
                    values[k] = dt[v[1]]();
                });

                if (this.$ampm) {
                    //12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
                    if (values.hour >= 12) {
                        values.ampm = 'pm';
                        if (values.hour > 12) {
                            values.hour -= 12;
                        }
                    } else {
                        values.ampm = 'am';
                        if (values.hour === 0) {
                            values.hour = 12;
                        }
                    }
                }

                angular.forEach(values, function(v, k) {
                    //call val() for each existing combo, e.g. this.$hour.val()
                    if (that['$' + k]) {

                        if (k === 'minute' && that.options.minuteStep > 1 && that.options.roundTime) {
                            v = getNearest(that['$' + k], v);
                        }

                        if (k === 'second' && that.options.secondStep > 1 && that.options.roundTime) {
                            v = getNearest(that['$' + k], v);
                        }

                        that['$' + k].val(v);
                    }
                });

                // update days count
                if (this.options.smartDays) {
                    this.fillCombo('day');
                }

                this.$element.val(dt.format(this.options.format)).triggerHandler('change');
            }
        },

        /*
         highlight combos if date is invalid
         */
        highlight: function(dt) {
            if (!dt.isValid()) {
                if (this.options.errorClass) {
                    this.$widget.addClass(this.options.errorClass);
                } else {
                    //store original border color
                    if (!this.borderColor) {
                        this.borderColor = this.$widget.find('select').css('border-color');
                    }
                    this.$widget.find('select').css('border-color', 'red');
                }
            } else {
                if (this.options.errorClass) {
                    this.$widget.removeClass(this.options.errorClass);
                } else {
                    this.$widget.find('select').css('border-color', this.borderColor);
                }
            }
        },

        leadZero: function(v) {
            return v <= 9 ? '0' + v : v;
        },

        destroy: function() {
            this.$widget.remove();
            this.$element.removeData('combodate').show();
        }

    };

    return {
        getInstance: function(element, options) {
            return new Combodate(element, options);
        }
    };
}]);

/*
 Editable icons:
 - default
 - font-awesome

 */
angular.module('xeditable').factory('editableIcons', function() {

    var icons = {
        //Icon-set to use, defaults to bootstrap icons
        default: {
            'bs2': {
                ok: 'fa fa-check',
                cancel: 'fa fa-times'
            },
            'bs3': {
                ok: 'fa fa-check',
                cancel: 'fa fa-times'
            }
        },
        external: {
            'font-awesome': {
                ok: 'fa fa-check',
                cancel: 'fa fa-times'
            }
        }
    };

    return icons;
});

/*
 Editable themes:
 - default
 - bootstrap 2
 - bootstrap 3

 Note: in postrender() `this` is instance of editableController
 */
angular.module('xeditable').factory('editableThemes', function() {
    var themes = {
        //default
        'default': {
            formTpl: '<form class="editable-wrap"></form>',
            noformTpl: '<span class="editable-wrap"></span>',
            controlsTpl: '<span class="editable-controls"></span>',
            inputTpl: '',
            errorTpl: '<div class="editable-error" ng-show="$error" ng-bind="$error"></div>',
            buttonsTpl: '<span class="editable-buttons"></span>',
            submitTpl: '<button type="submit">save</button>',
            cancelTpl: '<button type="button" ng-click="$form.$cancel()">cancel</button>'
        },

        //bs2
        'bs2': {
            formTpl: '<form class="form-inline editable-wrap" role="form"></form>',
            noformTpl: '<span class="editable-wrap"></span>',
            controlsTpl: '<div class="editable-controls controls control-group" ng-class="{\'error\': $error}"></div>',
            inputTpl: '',
            errorTpl: '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"></div>',
            buttonsTpl: '<span class="editable-buttons"></span>',
            submitTpl: '<button type="submit" class="tick-pos editor-confirm"><span></span></button>',
            cancelTpl: '<button type="button" class="x-neg editor-confirm" ng-click="$form.$cancel()">' +
            '<span></span>' +
            '</button>'

        },

        //bs3
        'bs3': {
            formTpl: '<form class="form-inline editable-wrap" role="form"></form>',
            noformTpl: '<span class="editable-wrap"></span>',
            controlsTpl: '<div class="editable-controls form-group" ng-class="{\'has-error\': $error}"></div>',
            inputTpl: '',
            errorTpl: '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"></div>',
            buttonsTpl: '<span class="editable-buttons"></span>',
            submitTpl: '<button type="submit" class="tick-pos editor-confirm"><span></span></button>',
            cancelTpl: '<button type="button" class="x-neg editor-confirm" ng-click="$form.$cancel()">' +
            '<span></span>' +
            '</button>',

            //bs3 specific prop to change buttons class: btn-sm, btn-lg
            buttonsClass: '',
            //bs3 specific prop to change standard inputs class: input-sm, input-lg
            inputClass: '',
            postrender: function() {
                //apply `form-control` class to std inputs
                switch (this.directiveName) {
                    case 'editableText':
                    case 'editableSelect':
                    case 'editableTextarea':
                    case 'editableEmail':
                    case 'editableTel':
                    case 'editableNumber':
                    case 'editableUrl':
                    case 'editableSearch':
                    case 'editableDate':
                    case 'editableDatetime':
                    case 'editableBsdate':
                    case 'editableTime':
                    case 'editableMonth':
                    case 'editableWeek':
                        this.inputEl.addClass('form-control');
                        if (this.theme.inputClass) {
                            // don`t apply `input-sm` and `input-lg` to select multiple
                            // should be fixed in bs itself!
                            if (this.inputEl.attr('multiple') &&
                                (this.theme.inputClass === 'input-sm' || this.theme.inputClass === 'input-lg')) {
                                break;
                            }
                            this.inputEl.addClass(this.theme.inputClass);
                        }
                        break;
                    case 'editableCheckbox':
                        this.editorEl.addClass('checkbox');
                }

                //apply buttonsClass (bs3 specific!)
                if (this.buttonsEl && this.theme.buttonsClass) {
                    this.buttonsEl.find('button').addClass(this.theme.buttonsClass);
                }
            }
        }
    };

    return themes;
});
(function() {
    this.ProjectionChart = (function() {
        var PROJECTIONS;

        ProjectionChart.prototype.CHART_BG_COLOR = '#fbfbfb';

        ProjectionChart.prototype.AXIS_COLOR = '#999999';

        ProjectionChart.prototype.PLOT_LINE_COLOR = 'rgb(229, 229, 229)';

        ProjectionChart.prototype.TARGET_CIRCLE_COLOR = 'rgba(145, 220, 255, 0.5)';

        ProjectionChart.prototype.PLOT_BAND_COLOR = 'rgba(229, 229, 229, 0.3)';

        ProjectionChart.prototype.TARGET_CIRCLE_LINE_COLOR = '#044677';

        ProjectionChart.prototype.DASH_LINE_COLOR = '#044677';

        ProjectionChart.prototype.MIN_RANGE = 0;

        PROJECTIONS = ['er95', 'er5', 'er50', 'er80', 'er20'];

        function ProjectionChart(container, data, timeframe, max_timeframe, timeframe_string, max_value_y, target, timeframe_disabled) {
            this.chart = new Highcharts.Chart(this.chart_config(container));
            this.create_series(data, timeframe, max_timeframe, timeframe_string, max_value_y, target, timeframe_disabled);
        }

        ProjectionChart.prototype.create_series = function(data, timeframe, max_timeframe, timeframe_string, max_value_y, target, timeframe_disabled) {
            var circle_data, end_date, latest_target_value, latest_timeframe, maximum_y, s1, s2, s3, s4, s5, s6, ser, timeframe_value, x, y;
            latest_timeframe = parseInt(timeframe);
            latest_target_value = parseInt(target);
            end_date = parseInt(max_timeframe);
            maximum_y = parseInt(max_value_y);
            if (latest_target_value) {
                if (latest_target_value > maximum_y) {
                    this.MIN_RANGE = latest_target_value * 1.1;
                } else {
                    this.MIN_RANGE = maximum_y;
                }
            } else {
                this.MIN_RANGE = maximum_y;
            }
            y = this.chart.yAxis[0];
            y.setExtremes(0, this.MIN_RANGE, false);
            y.addPlotLine({
                id: 1,
                color: this.DASH_LINE_COLOR,
                width: 1,
                dashStyle: "LongDash",
                value: latest_target_value,
                zIndex: 11,
                label: {
                    text: "<strong>" + (number_to_currency(latest_target_value)) + "</strong> <br /> Target Value",
                    style: {
                        fontWeight: 'normal',
                        color: this.DASH_LINE_COLOR,
                        textShadow: '1px 1px 1px #fff'
                    }
                }
            });
            if (!timeframe_disabled) {
                timeframe_value = latest_timeframe;
            }
            x = this.chart.xAxis[0];
            x.addPlotLine({
                id: 1,
                color: this.DASH_LINE_COLOR,
                width: 1,
                dashStyle: "LongDash",
                value: timeframe_value,
                zIndex: 11,
                label: {
                    text: "<strong>" + timeframe_string + "</strong><br>Target Date",
                    style: {
                        fontWeight: 'normal',
                        color: this.DASH_LINE_COLOR,
                        textShadow: '1px 1px 1px #FFF'
                    }
                }
            });
            x.addPlotBand({
                id: 2,
                from: timeframe_value,
                to: end_date,
                color: this.PLOT_BAND_COLOR,
                zIndex: 5
            });
            if (timeframe_value && latest_target_value) {
                circle_data = [
                    [timeframe_value, latest_target_value]
                ];
                ser = this.chart.get('target_zone_circle');
                ser.setData(circle_data, true);
            }
            s1 = this.chart.get('er5');
            s1.setData(eval(data[0].values), true);
            s2 = this.chart.get('er20');
            s2.setData(eval(data[1].values), true);
            s3 = this.chart.get('er50');
            s3.setData(eval(data[2].values), true);
            s4 = this.chart.get('er80');
            s4.setData(eval(data[3].values), true);
            s5 = this.chart.get('er95');
            s5.setData(eval(data[4].values), true);
            s6 = this.chart.get('contributions');
            return s6.setData(eval(data[5].values), true);
        };

        ProjectionChart.prototype.chart_config = function(container_id) {
            return {
                chart: {
                    renderTo: container_id,
                    type: 'area',
                    alignTicks: false,
                    height: 300,
                    backgroundColor: this.CHART_BG_COLOR,
                    margin: [5, 75, 35, 0],
                    spacing: [0, 0, 0, 0]
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    title: {
                        text: 'Timeframe',
                        offset: 20,
                        style: {
                            color: this.AXIS_COLOR,
                            fontWeight: 'normal'
                        }
                    },
                    type: 'datetime',
                    lineColor: this.AXIS_COLOR,
                    gridLineColor: this.AXIS_COLOR,
                    maxPadding: 0,
                    labels: {
                        style: {
                            color: this.AXIS_COLOR
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'Projected value',
                        offset: 60,
                        style: {
                            color: this.AXIS_COLOR,
                            fontWeight: 'normal'
                        }
                    },
                    showFirstLabel: false,
                    min: 0,
                    minRange: this.MIN_RANGE,
                    lineWidth: 1,
                    lineColor: this.AXIS_COLOR,
                    gridLineColor: this.AXIS_COLOR,
                    gridLineWidth: 0,
                    opposite: true,
                    labels: {
                        style: {
                            color: this.AXIS_COLOR
                        },
                        formatter: function() {
                            return '£' + this.value / 1000 + 'k';
                        }
                    }
                },
                tooltip: {
                    crosshairs: [{
                        zIndex: 500,
                        zIndex: 5
                    }],
                    shared: true,
                    formatter: function() {
                        return '<strong>' + Highcharts.dateFormat('%b %Y', this.points[0].x) + '</strong><br>' + this.points[0].series.name + '<strong>' + number_to_currency(parseFloat(this.points[0].y.toFixed(3))) + '</strong><br>' + this.points[1].series.name + '<strong>' + number_to_currency(parseFloat(this.points[1].y.toFixed(3))) + '</strong> or less';
                    }
                },
                plotOptions: {
                    area: {
                        stacking: null,
                        lineWidth: 0,
                        fillOpacity: 1,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 3,
                            fillColor: '#fff',
                            lineWidth: 1
                        }
                    },
                    scatter: {
                        zIndex: 60,
                        enableMouseTracking: false,
                        marker: {
                            symbol: 'circle',
                            radius: 23,
                            lineWidth: 3,
                            lineColor: this.TARGET_CIRCLE_LINE_COLOR,
                            states: {
                                hover: {
                                    enabled: true,
                                    radius: 18,
                                    lineWidth: 2
                                }
                            }
                        }
                    },
                    spline: {
                        zIndex: 60,
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        }
                    }
                },
                loading: {
                    style: {
                        backgroundColor: 'none',
                        opacity: 0.7
                    }
                },
                series: [{
                    id: 'contributions',
                    color: this.TARGET_CIRCLE_LINE_COLOR,
                    lineWidth: 3,
                    name: "Contributions of<br>",
                    type: "spline",
                    shadow: false,
                    enableMouseTracking: false,
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    data: []
                }, {
                    id: 'target_zone_circle',
                    color: this.TARGET_CIRCLE_COLOR,
                    name: "circle",
                    type: "scatter",
                    data: []
                }, {
                    id: 'er95',
                    name: '<strong>5%</strong> likelihood of having<br>at least ',
                    color: '#82d097',
                    fillColor: '#82d097',
                    enableMouseTracking: false,
                    data: []
                }, {
                    id: 'er80',
                    name: '<strong>20%</strong> likelihood of having<br>at least ',
                    color: '#2fb153',
                    fillColor: '#2fb153',
                    enableMouseTracking: false,
                    data: []
                }, {
                    id: 'er50',
                    name: 'Median outcome of ',
                    color: '#2fb153',
                    lineWidth: 0,
                    fillColor: '#2fb153',
                    enableMouseTracking: true,
                    data: []
                }, {
                    id: 'er20',
                    name: '<strong>80%</strong> likelihood of having<br>at least ',
                    color: '#cccccc',
                    fillColor: '#cccccc',
                    enableMouseTracking: false,
                    data: []
                }, {
                    id: 'er5',
                    name: '<strong>5%</strong> chance of ',
                    color: '#e62f49',
                    lineWidth: 2,
                    fillColor: this.CHART_BG_COLOR,
                    enableMouseTracking: true,
                    data: []
                }]
            };
        };

        return ProjectionChart;

    })();

    this.LineChart = (function() {
        LineChart.prototype.colors = ['#f26b33', '#fdbe37', '#4bc613', '#3c94f1', '#333333'];

        function LineChart(container, data, yTitle) {
            this.chart = new Highcharts.Chart(this.config(container, data, yTitle));
        }

        LineChart.prototype.redraw = function() {
            var err;
            try {
                return this.chart.redraw();
            } catch (_error) {
                err = _error;
            }
        };

        LineChart.prototype.config = function(container, data, yTitle) {
            return {
                rangeSelectorZoom: '',
                chart: {
                    renderTo: container,
                    type: 'line',
                    height: 250,
                    backgroundColor: 'transparent',
                    style: {
                        fontFamily: "'Gotham SSm A', 'Gotham SSm B', sans-serif"
                    }
                },
                credits: {
                    enabled: false
                },
                title: '',
                yAxis: {
                    title: {
                        text: yTitle
                    }
                },
                colors: this.colors,
                plotOptions: {
                    line: {
                        dashStyle: 'ShortDot'
                    }
                },
                series: data
            };
        };

        return LineChart;

    })();

    this.PieChart = (function() {
        PieChart.prototype.colors = ['#00d7b4', '#384686', '#1d80a2', '#fcb11f', '#66e7d2', '#8791b7', '#77b3c7', '#fdd179', '#ccf7f0', '#d6dae7', '#d2e6ec', '#ffefd2'];

        function PieChart(container, data, allocation) {
            if (allocation == null) {
                allocation = "allocation";
            }
            this.render_chart(container, data, allocation);
        }

        PieChart.prototype.render_chart = function(container, data, allocation) {
            var parsed_data, selected_allocation, series;
            allocation = $("#" + allocation);
            selected_allocation = allocation.val();
            parsed_data = this.set_allocation(data, selected_allocation);
            this.chart = new Highcharts.Chart(this.config(container, parsed_data));
            series = this.chart.get('allocation_series');
            return allocation.on("change", (function(_this) {
                return function() {
                    var return_data;
                    return_data = _this.set_allocation(data, allocation.val());
                    return new Highcharts.Chart(_this.config(container, return_data));
                };
            })(this));
        };

        PieChart.prototype.set_allocation = function(data, selected) {
            var extracted_data;
            extracted_data = false;
            $.each(data, function(i, v) {
                if (v.category === selected) {
                    return extracted_data = v.data;
                }
            });
            $.each(extracted_data, function(i, v) {
                return v.y = parseInt(v.y);
            });
            return extracted_data;
        };

        PieChart.prototype.redraw = function() {
            var err;
            try {
                return this.chart.redraw();
            } catch (_error) {
                err = _error;
            }
        };

        PieChart.prototype.config = function(container, data) {
            return {
                chart: {
                    renderTo: container,
                    type: 'pie',
                    height: 200,
                    backgroundColor: 'transparent',
                    style: {
                        fontFamily: "'Gotham SSm A', 'Gotham SSm B', sans-serif"
                    }
                },
                credits: {
                    enabled: false
                },
                title: '',
                colors: this.colors,
                plotOptions: {
                    pie: {
                        innerSize: '42%',
                        size: '100%',
                        allowPointSelect: true,
                        dataLabels: {
                            enabled: false
                        },
                        center: [70, null],
                        borderWidth: 0,
                        point: {
                            events: {
                                legendItemClick: function() {
                                    return false;
                                }
                            }
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    borderRadius: 0,
                    borderWidth: 0,
                    padding: 0,
                    align: 'center',
                    verticalAlign: 'middle',
                    x: 110,
                    itemStyle: {
                        paddingBottom: '10px',
                        fontSize: '12px',
                        fontWeight: 'normal'
                    },
                    labelFormatter: function() {
                        return ((Math.round(this.percentage)) + "% - ").concat((function() {
                            switch (this.name) {
                                case 'Government Bonds, Developed Markets':
                                    return 'Government Bonds,<br>Developed Markets';
                                case 'Government Bonds Developed Markets':
                                    return 'Government Bonds,<br>Developed Markets';
                                case 'Government Bonds, Developed Countries':
                                    return 'Government Bonds,<br>Developed Markets';
                                case 'Government Bonds Developed Countries':
                                    return 'Government Bonds,<br>Developed Markets';
                                case 'Government Bonds, Index linked':
                                    return 'Government Bonds,<br>Index Linked';
                                case 'Government Bonds Index linked':
                                    return 'Government Bonds,<br>Index Linked';
                                case 'Government Bonds, Inflation-Linked':
                                    return 'Government Bonds,<br>Inflation-Linked';
                                case 'Government Bonds Inflation-Linked':
                                    return 'Government Bonds,<br>Inflation-Linked';
                                case 'Government Bonds, Emerging Markets':
                                    return 'Government Bonds,<br>Emerging Markets';
                                case 'Government Bonds Emerging Markets':
                                    return 'Government Bonds,<br>Emerging Markets';
                                case 'Emerging Market Equities':
                                    return 'Emerging Markets Equities';
                                case 'Commodities & Natural Resources':
                                    return 'Commodities &<br>Natural Resources';
                                default:
                                    return this.name;
                            }
                        }).call(this)).concat('</text>');
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, .95)',
                    useHTML: true,
                    formatter: function() {
                        var description, name;
                        switch (this.point.name) {
                            case 'Corporate Bonds':
                                name = this.point.name;
                                description = "Corporate bonds are classified either as 'investment grade' - those issued by companies with good agency ratings - or 'high yield' - those with a higher risk of default. The return on high yield bonds is potentially greater, albeit with more volatility than with investment grade bonds.";
                                break;
                            case 'Developed Equities':
                                name = this.point.name;
                                description = "Shares in companies listed on the stock exchanges of developed markets, ranging from the United States to New Zealand.";
                                break;
                            case 'Developed Markets Equities':
                                name = this.point.name;
                                description = "Shares in companies listed on the stock exchanges of developed markets, ranging from the United States to New Zealand.";
                                break;
                            case 'Government Bonds, Developed Markets':
                                name = 'Government Bonds,</b><br/><b>Developed Markets</b>';
                                description = "Government bonds which pay regular interest based on their face value. They are generally regarded as a very safe investment, unless the government becomes unable (or unwilling) to pay its debtors.";
                                break;
                            case 'Government Bonds Developed Markets':
                                name = 'Government Bonds,</b><br/><b>Developed Markets</b>';
                                description = "Government bonds which pay regular interest based on their face value. They are generally regarded as a very safe investment, unless the government becomes unable (or unwilling) to pay its debtors.";
                                break;
                            case 'Government Bonds, Developed Countries':
                                name = 'Government Bonds,</b><br/><b>Developed Markets</b>';
                                description = '';
                                break;
                            case 'Government Bonds Developed Countries':
                                name = 'Government Bonds,</b><br/><b>Developed Markets</b>';
                                description = '';
                                break;
                            case 'Government Bonds, Index linked':
                                name = 'Government Bonds,</b><br/><b>Index Linked</b>';
                                description = "Different to normal government bonds in that they pay regular interest based on the recent rate of consumer price inflation.";
                                break;
                            case 'Government Bonds Index linked':
                                name = 'Government Bonds,</b><br/><b>Index Linked</b>';
                                description = "Different to normal government bonds in that they pay regular interest based on the recent rate of consumer price inflation.";
                                break;
                            case 'Government Bonds, Inflation-Linked':
                                name = 'Government Bonds,</b><br/><b>Inflation-Linked</b>';
                                description = "Different to normal government bonds in that they pay regular interest based on the recent rate of consumer price inflation.";
                                break;
                            case 'Government Bonds Inflation-Linked':
                                name = 'Government Bonds,</b><br/><b>Inflation-Linked</b>';
                                description = "Different to normal government bonds in that they pay regular interest based on the recent rate of consumer price inflation.";
                                break;
                            case 'Government Bonds, Emerging Markets':
                                name = 'Government Bonds,</b><br/><b>Emerging Markets</b>';
                                description = "Although these bonds are backed by governments, they are regarded as high-risk investments in comparison to government bonds in developed markets. They can be issued in US dollars or in local currencies.";
                                break;
                            case 'Government Bonds Emerging Markets':
                                name = 'Government Bonds,</b><br/><b>Emerging Markets</b>';
                                description = "Although these bonds are backed by governments, they are regarded as high-risk investments in comparison to government bonds in developed markets. They can be issued in US dollars or in local currencies.";
                                break;
                            case 'Emerging Markets Equities':
                                name = 'Emerging Markets</b><br/><b>Equities</b>';
                                description = "Shares in companies from developing economies, including China, South Korea and Brazil. These shares carry significantly more risk than companies in developed markets.";
                                break;
                            case 'Emerging Market Equities':
                                name = 'Emerging Markets</b><br/><b>Equities</b>';
                                description = "Shares in companies from developing economies, including China, South Korea and Brazil. These shares carry significantly more risk than companies in developed markets.";
                                break;
                            case 'Money Markets':
                                name = this.point.name;
                                description = "A money market fund aims to earn income while preserving capital. It invests in monetary instruments and highly liquid, short-term (typically less than one year) securities.";
                                break;
                            case 'Money Market':
                                name = this.point.name;
                                description = "A money market fund aims to earn income while preserving capital. It invests in monetary instruments and highly liquid, short-term (typically less than one year) securities.";
                                break;
                            case 'Cash':
                                name = this.point.name;
                                description = "Cash plays a role in a diversified portfolio. You receive a rate of interest on cash in your portfolio that depends on the base rate set by the Bank of England. Nutmeg does not take any portion of the interest that you receive.";
                                break;
                            case 'CASH':
                                name = this.point.name;
                                description = "Cash plays a role in a diversified portfolio. You receive a rate of interest on cash in your portfolio that depends on the base rate set by the Bank of England. Nutmeg does not take any portion of the interest that you receive.";
                                break;
                            case 'Government Bonds':
                                name = this.point.name;
                                description = "Government bonds which pay regular interest based on their face value. They are generally regarded as a very safe investment, unless the government becomes unable (or unwilling) to pay its debtors.";
                                break;
                            case 'Global Equities':
                                name = this.point.name;
                                description = "Shares in companies whose activities are global such as infrastructure or agriculture.";
                                break;
                            case 'Real Estate':
                                name = this.point.name;
                                description = "Exposure to the property market in developed countries.";
                                break;
                            case 'Natural Resources':
                                name = this.point.name;
                                description = "Shares in companies specialising in activities related to natural resources, such as mining, forestry or water.";
                                break;
                            case 'Commodities':
                                name = this.point.name;
                                description = "Physical commodities such as precious metals.";
                                break;
                            case 'Property & Infrastructure':
                                name = 'Property &</b><br/><b>Infrastructure</b>';
                                description = "Shares in companies which invest primarily in property, such as real estate investment trusts, or infrastructure, such as electricity distribution or water supply.";
                                break;
                            case 'Commodities & Natural Resources':
                                name = 'Commodities &</b><br/><b>Natural Resources</b>';
                                description = "Physical commodities such as precious metals and shares in companies specialising in activities related to natural resources, such as mining.";
                                break;
                            default:
                                name = this.point.name;
                                description = '';
                        }
                        return "<div class='pie-chart-tooltip'><strong>" + name + "</strong>: " + (Math.round(this.percentage)) + "% <br/><br/> " + description + "</div>";
                    }
                },
                series: [{
                    id: 'allocation_series',
                    data: data,
                    showInLegend: true
                }]
            };
        };

        return PieChart;

    })();

}).call(this);
(function() {
    this.PensionProjectionChart = (function() {
        var PROJECTIONS;

        PensionProjectionChart.prototype.CHART_BG_COLOR = '#fbfbfb';

        PensionProjectionChart.prototype.AXIS_COLOR = '#999999';

        PensionProjectionChart.prototype.PLOT_LINE_COLOR = 'rgb(229, 229, 229)';

        PensionProjectionChart.prototype.TARGET_CIRCLE_COLOR = 'rgba(145, 220, 255, 0.5)';

        PensionProjectionChart.prototype.PLOT_BAND_COLOR = 'rgba(229, 229, 229, 0.3)';

        PensionProjectionChart.prototype.TRANSPARENT_LINE_COLOR = 'rgba(132, 171, 170, 0)';

        PensionProjectionChart.prototype.TARGET_CIRCLE_LINE_COLOR = '#044677';

        PensionProjectionChart.prototype.DASH_LINE_COLOR = '#044677';

        PensionProjectionChart.prototype.MIN_RANGE = 0;

        PensionProjectionChart.prototype.LOW_LINE_Y = 0;

        PensionProjectionChart.prototype.MEDIUM_LINE_Y = 0;

        PensionProjectionChart.prototype.HIGH_LINE_Y = 0;

        PensionProjectionChart.prototype.JOINING_LINE = 0;

        PROJECTIONS = ['er95', 'er5', 'er50', 'er80', 'er20'];

        function PensionProjectionChart(container, data, timeframe, max_timeframe, timeframe_string, max_value_y, target, timeframe_disabled, high_val, medium_val, low_val) {
            var end_point;
            this.LOW_LINE_Y = parseInt(low_val);
            this.MEDIUM_LINE_Y = parseInt(medium_val);
            this.HIGH_LINE_Y = parseInt(high_val);
            this.LOW_LABEL = number_to_currency(low_val);
            this.MED_LABEL = number_to_currency(medium_val);
            this.HIGH_LABEL = number_to_currency(high_val);
            if (timeframe < 1827737200000) {
                end_point = 3000000000;
            } else {
                end_point = 30000000000;
            }
            this.chart = new Highcharts.Chart(this.chart_config(container, data, end_point));
            this.create_series(data, timeframe, max_timeframe, timeframe_string, max_value_y, target, timeframe_disabled, end_point);
        }

        PensionProjectionChart.prototype.create_series = function(data, timeframe, max_timeframe, timeframe_string, max_value_y, target, timeframe_disabled, end_point) {
            var _this, circle_data, end_date, latest_target_value, latest_timeframe, maximum_y, s1, s2, s3, s4, s5, s6, s7, ser, timeframe_value, x, y;
            _this = this;
            latest_timeframe = parseInt(timeframe);
            latest_target_value = parseInt(target);
            end_date = parseInt(max_timeframe);
            maximum_y = parseInt(max_value_y);
            circle_data = [
                [latest_timeframe, this.LOW_LINE_Y]
            ];
            ser = this.chart.get('target_zone_low');
            ser.setData(circle_data, true);
            circle_data = [
                [latest_timeframe, this.MEDIUM_LINE_Y]
            ];
            ser = this.chart.get('target_zone_medium');
            ser.setData(circle_data, true);
            circle_data = [
                [latest_timeframe, this.HIGH_LINE_Y]
            ];
            ser = this.chart.get('target_zone_high');
            ser.setData(circle_data, true);
            if (latest_target_value) {
                if (latest_target_value > maximum_y) {
                    this.MIN_RANGE = latest_target_value * 1.1;
                } else {
                    this.MIN_RANGE = maximum_y;
                }
            } else {
                this.MIN_RANGE = maximum_y;
            }
            y = this.chart.yAxis[0];
            y.setExtremes(0, this.MIN_RANGE, false);
            if (!timeframe_disabled) {
                timeframe_value = latest_timeframe;
            }
            x = this.chart.xAxis[0];
            x.addPlotLine({
                id: 1,
                color: this.DASH_LINE_COLOR,
                width: 1,
                dashStyle: "LongDash",
                value: latest_timeframe,
                zIndex: 11,
                label: {
                    text: "<strong>" + timeframe_string + "</strong><br>Target Date",
                    style: {
                        fontWeight: 'normal',
                        color: this.DASH_LINE_COLOR,
                        textShadow: '1px 1px 1px #FFF'
                    }
                }
            });
            this.JOINING_LINE = eval(data[0].values)[0][0] - end_point;
            if (timeframe_value && latest_target_value) {
                circle_data = [
                    [timeframe_value, latest_target_value]
                ];
                ser = this.chart.get('target_zone_circle');
                ser.setData(circle_data, true);
            }
            s1 = this.chart.get('er5');
            s1.setData(eval(data[0].values), true);
            s2 = this.chart.get('er20');
            s2.setData(eval(data[1].values), true);
            s3 = this.chart.get('er50');
            s3.setData(eval(data[2].values), true);
            s4 = this.chart.get('er80');
            s4.setData(eval(data[3].values), true);
            s5 = this.chart.get('er95');
            s5.setData(eval(data[4].values), true);
            s6 = this.chart.get('contributions');
            s6.setData(eval(data[5].values), true);
            s7 = this.chart.get('linex');
            return s7.setData([
                [this.JOINING_LINE, 0],
                [this.JOINING_LINE, this.MEDIUM_LINE_Y - 800]
            ], true);
        };

        PensionProjectionChart.prototype.chart_config = function(container_id, data, end_point) {
            return {
                chart: {
                    renderTo: container_id,
                    type: 'area',
                    alignTicks: false,
                    height: 300,
                    backgroundColor: this.CHART_BG_COLOR,
                    margin: [5, 75, 35, 0],
                    spacing: [0, 0, 0, 0],
                    style: {
                        fontFamily: "'Gotham SSm A', 'Gotham SSm B', sans-serif"
                    }
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    title: {
                        text: 'Timeframe',
                        offset: 20,
                        style: {
                            color: this.AXIS_COLOR,
                            fontWeight: 'normal'
                        }
                    },
                    type: 'datetime',
                    lineColor: this.AXIS_COLOR,
                    gridLineColor: this.AXIS_COLOR,
                    maxPadding: 0,
                    labels: {
                        style: {
                            color: this.AXIS_COLOR
                        }
                    },
                    min: eval(data[0].values)[0][0] - end_point
                },
                yAxis: {
                    title: {
                        text: 'Projected value',
                        offset: 60,
                        style: {
                            color: this.AXIS_COLOR,
                            fontWeight: 'normal'
                        }
                    },
                    showFirstLabel: false,
                    min: 0,
                    minRange: this.MIN_RANGE,
                    lineWidth: 1,
                    lineColor: this.AXIS_COLOR,
                    gridLineColor: this.AXIS_COLOR,
                    gridLineWidth: 0,
                    opposite: true,
                    plotLines: [{
                        value: this.LOW_LINE_Y,
                        width: 1,
                        color: this.TRANSPARENT_LINE_COLOR,
                        dashStyle: "dash",
                        zIndex: 3,
                        label: {
                            useHTML: true,
                            text: "<div class='gov-label'><div style='float:left;'>Low</div><div style='float:right;z-index:10'>" + this.LOW_LABEL + "</div></div>",
                            align: 'center',
                            y: 4,
                            zIndex: 3
                        }
                    }, {
                        value: this.HIGH_LINE_Y,
                        width: 1,
                        color: this.TRANSPARENT_LINE_COLOR,
                        dashStyle: "dash",
                        zIndex: 3,
                        label: {
                            useHTML: true,
                            text: "<div class='gov-label'><div style='float:left;'>High</div><div style='float:right;'>" + this.HIGH_LABEL + "</div></div>",
                            align: 'center',
                            y: 4,
                            zIndex: 3
                        }
                    }, {
                        value: this.MEDIUM_LINE_Y,
                        width: 2,
                        color: '#0e7970',
                        shadow: true,
                        zIndex: 19,
                        label: {
                            useHTML: true,
                            text: "<div class='gov-label medium'><div style='float:left;'>Medium</div><div style='float:right;'>" + this.MED_LABEL + "</div></div>",
                            align: 'center',
                            y: 4,
                            zIndex: 19
                        }
                    }]
                },
                plotOptions: {
                    area: {
                        stacking: null,
                        lineWidth: 0,
                        fillOpacity: 1,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 3,
                            fillColor: '#fff',
                            lineWidth: 1
                        }
                    },
                    scatter: {
                        enableMouseTracking: false,
                        shadow: true,
                        marker: {
                            symbol: 'circle',
                            radius: 10,
                            lineWidth: 1,
                            lineColor: '#FFFFFF',
                            states: {
                                hover: {
                                    enabled: true,
                                    radius: 18,
                                    lineWidth: 2
                                }
                            }
                        }
                    },
                    line: {
                        enableMouseTracking: false,
                        linewidth: 2
                    },
                    spline: {
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        }
                    }
                },
                loading: {
                    style: {
                        backgroundColor: 'none',
                        opacity: 0.7
                    }
                },
                series: [{
                    id: 'contributions',
                    color: this.TARGET_CIRCLE_LINE_COLOR,
                    lineWidth: 3,
                    name: "Contributions of<br>",
                    type: "spline",
                    shadow: false,
                    enableMouseTracking: false,
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    data: [],
                    zIndex: 31
                }, {
                    id: 'target_zone_circle',
                    color: this.TARGET_CIRCLE_COLOR,
                    name: "circle",
                    type: "scatter",
                    data: []
                }, {
                    id: 'er95',
                    name: '<strong>5%</strong> likelihood of having<br>at least ',
                    color: '#82d097',
                    fillColor: '#82d097',
                    enableMouseTracking: false,
                    data: [],
                    zIndex: 26
                }, {
                    id: 'er80',
                    name: '<strong>20%</strong> likelihood of having<br>at least ',
                    color: '#2fb153',
                    fillColor: '#2fb153',
                    enableMouseTracking: false,
                    data: [],
                    zIndex: 27
                }, {
                    id: 'er50',
                    name: 'Median outcome of ',
                    color: '#2fb153',
                    lineWidth: 0,
                    fillColor: '#2fb153',
                    enableMouseTracking: false,
                    data: [],
                    zIndex: 28
                }, {
                    id: 'er20',
                    name: '<strong>80%</strong> likelihood of having<br>at least ',
                    color: '#cccccc',
                    fillColor: '#cccccc',
                    enableMouseTracking: false,
                    data: [],
                    zIndex: 29
                }, {
                    id: 'er5',
                    name: '<strong>5%</strong> chance of ',
                    color: '#e62f49',
                    lineWidth: 2,
                    fillColor: this.CHART_BG_COLOR,
                    enableMouseTracking: false,
                    data: [],
                    zIndex: 30
                }, {
                    id: 'target_zone_low',
                    color: '#3d948e',
                    zIndex: 222,
                    name: "circle",
                    type: "scatter",
                    data: []
                }, {
                    id: 'target_zone_medium',
                    color: '#0e7970',
                    zIndex: 225,
                    name: "circle",
                    type: "scatter",
                    data: []
                }, {
                    id: 'target_zone_high',
                    color: '#3d948e',
                    zIndex: 222,
                    name: "circle",
                    type: "scatter",
                    data: []
                }, {
                    id: 'linex',
                    name: 'testname',
                    color: '#0e7970',
                    lineWidth: 4,
                    zIndex: 1000,
                    shadow: false,
                    enableMouseTracking: false,
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    data: []
                }]
            };
        };

        return PensionProjectionChart;

    })();

    this.RenderPensionProjectionChart = (function() {
        function RenderPensionProjectionChart(data, uuid) {
            var target_obj;
            if (uuid == null) {
                uuid = false;
            }
            $('#pensions-projection-review').show();
            $('#pensions-projection-review-error').hide();
            target_obj = uuid ? "projections_chart_" + uuid : "projections_chart";
            new PensionProjectionChart(target_obj, data.projections, data.target_date, data.max_chart_date, data.target_date_string, data.max_chart_value, 0, false, data.high_value, data.medium_value, data.low_value);
            $('#hmrc_value').text(number_to_currency(data.contributed_amount));
            $('#medium_pension_pot').text(number_to_currency(data.medium_pension_pot));
            $('#tax_free_lump_sum').text(number_to_currency(data.tax_free_lump_sum));
            $('#annuity').text(number_to_currency(data.annuity_value));
            $('#percent_risk_level').text(data.percent_risk_level);
            $('#fund_read_chart').show();
        }

        return RenderPensionProjectionChart;

    })();

}).call(this);
(function() {
    angular.module('app.SharedFilters', []).filter('maskedSortCode', function() {
        return function(input) {
            if (input) {
                return "**-**-" + (input.slice(-2));
            }
        };
    }).filter('maskedAccountNumber', function() {
        return function(input) {
            if (input) {
                return "******" + (input.slice(-2));
            }
        };
    }).filter('cardBrandClass', function() {
        return function(input) {
            if (input) {
                return input.split(" ")[0].toLowerCase();
            }
        };
    }).filter('capitalize', function() {
        return function(input, scope) {
            if (typeof input !== 'undefined') {
                input = input.toLowerCase();
                return input.substring(0, 1).toUpperCase() + input.substring(1);
            }
        };
    }).filter('unsafe', [
        '$sce',
        function($sce) {
            return function(input) {
                if (input) {
                    return $sce.trustAsHtml(input);
                }
            };
        }
    ]);

}).call(this);
(function() {
    angular.module('app.SharedHelpers', []).directive('numericOnly', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {
                    var transformedInput;
                    transformedInput = inputValue ? inputValue.replace(/[^\d-]/g, '') : null;
                    if (transformedInput !== inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }
                    return transformedInput;
                });
            }
        };
    }).directive('capitalize', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                var capitalize;
                capitalize = function(inputValue) {
                    var capitalized;
                    if (inputValue === void 0) {
                        inputValue = '';
                    }
                    capitalized = inputValue.toUpperCase();
                    if (capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                };
                modelCtrl.$parsers.push(capitalize);
                capitalize(scope[attrs.ngModel]);
            }
        };
    });

}).call(this);
(function() {
    angular.module("app.shared", ["pageslide-directive"]).factory("daysGenerator", [
        "$filter",
        function($filter) {
            return function(min, max) {
                var i, j, list, ref, ref1;
                min = parseInt(min);
                max = parseInt(max);
                list = [];
                for (i = j = ref = min, ref1 = max; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
                    list.push({
                        label: $filter('dateSuffix')(i),
                        value: i
                    });
                }
                return list;
            };
        }
    ]).filter('dateSuffix', [
        '$filter',
        function($filter) {
            var suffixes;
            suffixes = ['th', 'st', 'nd', 'rd'];
            return function(input) {
                var day, relevantDigits, suffix;
                day = parseInt(input);
                relevantDigits = day < 30 ? day % 20 : day % 30;
                suffix = relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
                return day + suffix;
            };
        }
    ]).filter('longDateFormat', [
        '$filter',
        function($filter) {
            return function(input) {
                return moment(input).format('Do of MMMM YYYY');
            };
        }
    ]).filter('dayOfWeekDateFormat', [
        '$filter',
        function($filter) {
            return function(input) {
                return moment(input).format('dddd Do MMMM YYYY');
            };
        }
    ]).service("BankDetailsUpdateManager", function() {
        this.hasChanged = function() {
            return !_.isEqual(this.accountData, this.originalAccountData);
        };
        this.apply = function(data) {
            _.merge(this.accountData, data);
            return this.hasChanged();
        };
        this.reset = function() {
            return this.accountData = _.clone(this.originalAccountData);
        };
        this.toPayload = function() {
            if (this.hasChanged()) {
                return {
                    account_nickname: this.accountData.accountNickname,
                    sort_code: this.accountData.accountSortCode,
                    account_number: this.accountData.accountNumber
                };
            } else {
                return null;
            }
        };
        this.debug = function() {
            console.log("------\ncurrent account data:");
            console.log(this.accountData);
            console.log("original account data:");
            return console.log(this.originalAccountData);
        };
        this.build = (function(_this) {
            return function(accNumber, sortCode, accName, accNickName) {
                _this.accountData = {
                    accountNumber: accNumber,
                    accountSortCode: sortCode,
                    accountName: accName,
                    accountNickname: accNickName
                };
                _this.originalAccountData = _.clone(_this.accountData);
                return _this;
            };
        })(this);
        return this.build;
    }).service("UpcomingDirectDebits", function() {
        this.nextDdPayment = function() {
            return this.payments[0];
        };
        this.secondDdPayment = function() {
            return this.payments[1];
        };
        this.any = function() {
            return !_.isEmpty(this.payments);
        };
        this.build = (function(_this) {
            return function(nextDdList) {
                _this.payments = _.chain(nextDdList).map(function(obj) {
                    obj.chargeDate = new Date(obj.chargeDate);
                    return obj;
                }).sortBy(function(obj) {
                    return obj.chargeDate;
                }).value();
                return _this;
            };
        })(this);
        return this.build;
    });

    angular.module("Services", []).factory("paymentsData", function() {
        var extractPaymentsOfType, getPaymentsData, publicFunctions;
        getPaymentsData = function() {
            return monthlyPayments || [];
        };
        extractPaymentsOfType = function(paymentType) {
            return _.chain(getPaymentsData()).filter(function(payment) {
                return payment.type === paymentType;
            }).sortBy(function(payment) {
                return -payment.amount;
            }).value();
        };
        return publicFunctions = {
            directDebits: function() {
                return extractPaymentsOfType("DIRECT_DEBIT");
            },
            cardPayments: function() {
                return extractPaymentsOfType("CARD");
            },
            standingOrders: function() {
                return extractPaymentsOfType("STANDING_ORDER");
            },
            employeeContributions: function() {
                return extractPaymentsOfType("EMPLOYEE_CONTRIBUTION");
            }
        };
    }).factory("getDirectDebitTotal", [
        "paymentsData",
        function(paymentsData) {
            var i, payments, total;
            payments = paymentsData.directDebits() || [];
            total = 0;
            i = 0;
            while (i < payments.length) {
                total += parseInt(payments[i].amount);
                i++;
            }
            return total;
        }
    ]).factory("findPayment", [
        "$filter", "paymentsData",
        function($filter, paymentsData) {
            var payment;
            monthlyPayments || [];
            payment = _.findLast(monthlyPayments, function(payment) {
                return payment.fundData.uuid === fundUuid;
            });
            return payment || {};
        }
    ]).factory("allowChangingBankAccount", function() {
        return !userHasPension;
    });

}).call(this);
(function() {
    angular.module("app.shared.Funds", []).service("SignupTypes", function() {
        if (domVariables.abTests['f1']) {
            this.selected = function() {
                if (this.list[0].selected) {
                    return 'standard';
                } else if (this.list[2].selected) {
                    return 'pension';
                } else {
                    return 'isa';
                }
            };
            this.showFundOptions = function() {
                return this.selected() === 'isa' || this.selected() === 'standard';
            };
            this.showPensionOptions = function() {
                return this.selected() === 'pension';
            };
            this.select = (function(_this) {
                return function(signupType) {
                    var option;
                    _.each(_this.list, function(option) {
                        option.selected = false;
                        return true;
                    });
                    option = signupType === 'standard' ? _this.list[0] : signupType === 'pension' ? _this.list[2] : _this.list[1];
                    option.selected = true;
                    return setCookie('AVST', option.cookie, 60);
                };
            })(this);
            this.build = (function(_this) {
                return function() {
                    _this.list = [{
                        name: 'standard',
                        label: 'General',
                        cookie: 'GAVST'
                    }, {
                        name: 'isa',
                        label: 'ISA',
                        cookie: 'IAVST'
                    }, {
                        name: 'pension',
                        label: 'Pension',
                        cookie: 'PAVST'
                    }];
                    return _this;
                };
            })(this);
            return this.build;
        }
        this.selected = function() {
            if (this.list[2] && this.list[2].selected) {
                return 'pension';
            } else if (this.list[1].selected) {
                return 'isa';
            } else {
                return 'standard';
            }
        };
        this.showFundOptions = function() {
            return this.selected() === 'isa' || this.selected() === 'standard';
        };
        this.showPensionOptions = function() {
            return this.selected() === 'pension';
        };
        this.select = (function(_this) {
            return function(signupType) {
                var option;
                _.each(_this.list, function(option) {
                    option.selected = false;
                    return true;
                });
                option = signupType === 'pension' ? _this.list[2] : signupType === 'isa' ? _this.list[1] : _this.list[0];
                option.selected = true;
                return setCookie('AVST', option.cookie, 60);
            };
        })(this);
        this.build = (function(_this) {
            return function(allowPension) {
                if (allowPension == null) {
                    allowPension = true;
                }
                _this.list = [{
                    name: 'standard',
                    label: 'General',
                    cookie: 'GAVST'
                }, {
                    name: 'isa',
                    label: 'ISA',
                    cookie: 'IAVST'
                }];
                if (allowPension) {
                    _this.list.push({
                        name: 'pension',
                        label: 'Pension',
                        cookie: 'PAVST'
                    });
                }
                return _this;
            };
        })(this);
        return this.build;
    }).factory("riskLevel", function() {
        return {
            getDetails: function(level) {
                var getRiskLevel;
                getRiskLevel = _.findLast(domVariables.riskLevelsDetails, function(risk) {
                    return parseIntegerValue(risk.level) === parseIntegerValue(level);
                });
                return getRiskLevel || {};
            }
        };
    });

}).call(this);
(function() {
    angular.module("app.validation", []).service("validationPatterns", function() {
        return {
            nationalInsurance: /^[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z]?([0-9]{2}?){3}?[ABCD]$/i,
            password: /^.*(?=.*[a-zA-Z])(?=.*[\d]).*$/
        };
    }).directive('accessibleForm', function() {
        return {
            restrict: 'A',
            link: function(scope, elem) {
                return elem.on('submit', function() {
                    var $firstInvalid, firstInvalid;
                    firstInvalid = elem[0].querySelector('.ng-invalid');
                    if (firstInvalid) {
                        $firstInvalid = $(firstInvalid);
                        if ($firstInvalid.is(':hidden')) {
                            $firstInvalid = $firstInvalid.next();
                        }
                        return $('body').animate({
                            scrollTop: $firstInvalid.offset().top - 66
                        }, {
                            duration: 1000,
                            queue: false,
                            complete: function() {
                                return $firstInvalid.focus();
                            }
                        });
                    }
                });
            }
        };
    });

}).call(this);
(function() {
    angular.module('app.EditBankDetails', ['ui.bootstrap', 'ngMask', 'app.SharedHelpers']).controller('EditBankAccountModalCtrl', [
        "$scope", "$modalInstance", "$http", "bankDetailsUpdateManager",
        function($scope, $modalInstance, $http, bankDetailsUpdateManager) {
            $scope.init = function() {
                return $scope.bankDetailsUpdateManager = bankDetailsUpdateManager;
            };
            $scope.canSubmitBankDetails = function() {
                return $scope.accountSortCode && $scope.accountNumber && $scope.accountNickname;
            };
            $scope.modalClose = function() {
                $scope.bankDetailsUpdateManager.reset();
                return $modalInstance.close();
            };
            $scope.submit = function() {
                return $http({
                    method: 'POST',
                    dataType: 'json',
                    url: '/client/account/validate_bank_details_without_saving',
                    headers: {
                        'X-CSRF-Token': formToken,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        bank_details: {
                            sort_code: $scope.accountSortCode,
                            account_number: $scope.accountNumber,
                            account_nickname: $scope.accountNickname
                        }
                    }
                }).success(function(data, status, headers, config) {
                    $scope.bankDetailsUpdateManager.apply({
                        accountNickname: $scope.accountNickname,
                        accountSortCode: $scope.accountSortCode,
                        accountNumber: $scope.accountNumber
                    });
                    return $modalInstance.close();
                }).error(function(data, status, headers, config) {
                    return $scope.invalidBankAccount = true;
                });
            };
            return $scope.init();
        }
    ]);

}).call(this);
(function() {
    angular.module('app.emailCapture', ['ui.bootstrap']).controller('EmailCaptureController', [
        '$scope', '$rootScope', '$modal',
        function($scope, $rootScope, $modal) {
            $scope.init = function() {
                return $rootScope.$on('show-email-capture', function(event) {
                    return $scope.openIntroModal();
                });
            };
            $scope.openIntroModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: 'fade',
                    backdrop: 'static',
                    backdropClass: 'green',
                    windowClass: 'green',
                    templateUrl: 'signup_email_capture_modal.html',
                    controller: 'EmailCaptureModalController',
                    resolve: {
                        signup: function() {
                            return domVariables.prospect;
                        }
                    }
                });
            };
            return $scope.init();
        }
    ]).controller('EmailCaptureModalController', [
        '$scope', '$rootScope', '$http', '$modalInstance', 'signup',
        function($scope, $rootScope, $http, $modalInstance, signup) {
            $scope.init = function() {
                $scope.signup = signup;
                $scope.submitted = false;
                return $scope.isButtonDisabled = false;
            };
            $scope.showEmailError = function() {
                return $scope.submitted && $scope.introForm.email.$invalid;
            };
            $scope.saveUser = function() {
                $scope.isButtonDisabled = true;
                return $http({
                    method: 'POST',
                    url: '/client/sign-up',
                    headers: {
                        'X-CSRF-Token': domVariables.formToken,
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: {
                        email: $scope.signup.email,
                        marketing: $scope.signup.marketing,
                        type: domVariables.signupType
                    }
                }).success(function(data, status, headers, config) {
                    $scope.closeEmailModal();
                    return $rootScope.$emit('email-capture-complete');
                }).error(function(data, status, headers, config) {
                    $scope.signup.existingUser = true;
                    return $scope.isButtonDisabled = false;
                });
            };
            $scope.validateEmail = function() {
                $scope.submitted = true;
                $scope.signup.existingUser = false;
                if ($scope.introForm.email.$valid) {
                    return $scope.saveUser();
                }
            };
            $scope.closeEmailModal = function() {
                return $modalInstance.close();
            };
            return $scope.init();
        }
    ]);

}).call(this);
(function() {
    angular.module("app.fundPayments", ["ui.bootstrap", "app.shared", "app.SharedFilters"]).factory("paymentsData", function() {
        var unallocated, unallocated_value;
        unallocated = domVariables.unallocated;
        unallocated_value = parseIntegerValue(unallocated.currentValue) + parseIntegerValue(unallocated.pendingValue);
        return {
            fund: domVariables.fund,
            signupType: domVariables.signupType,
            unallocated: unallocated_value,
            lumpSum: {
                fund_name: domVariables.fund.name,
                amount: domVariables.fund.lumpSum,
                showDrawer: false,
                fullyFunded: false,
                minimum: (domVariables.affiliateUser ? 0 : 1000),
                maxCardAmount: 50000
            },
            monthly: {
                fundData: domVariables.fund,
                amount: domVariables.fund.monthlyContributions,
                dayOfMonth: domVariables.defaultMandate.dayOfMonth,
                confirmAuthorisation: domVariables.defaultMandate.confirmAuthorisation,
                showDrawer: false,
                fullyFunded: false
            },
            employee: {
                fundData: domVariables.fund,
                amount: domVariables.fund.monthlyContributions,
                showDrawer: false,
                minimum: 50
            },
            otherDirectDebitTotal: domVariables.otherDirectDebitTotal,
            bankDetails: domVariables.bankDetails,
            currentBoxContent: 'card',
            selectedExistingCard: null,
            stripeCardToken: null,
            cardData: {
                brand: "",
                funding: null,
                last4: ""
            }
        };
    }).controller("FundPaymentsController", [
        "$scope", "$http", "$modal", "$filter", "paymentsData",
        function($scope, $http, $modal, $filter, paymentsData) {
            var autoSelectIsaTransfer, bypassCardFundingCheck, deselectCard, emptyCardNumberFakeInput, fillCardNumberFakeInput, selectCard, stripeHandler, updateCardData;
            $scope.init = function() {
                $scope.paymentsData = paymentsData;
                $scope.accountName = paymentsData.bankDetails.accountName;
                $scope.accountNickname = paymentsData.bankDetails.accountNickname;
                $scope.accountSortCode = paymentsData.bankDetails.sortCode;
                $scope.accountNumber = paymentsData.bankDetails.accountNumber;
                $scope.affiliateUser = domVariables.affiliateUser;
                $scope.calculateInitialLumpSum();
                $scope.existingCard = domVariables.existingCard;
                if ($scope.existingCard != null) {
                    $scope.switchCardUiToList();
                } else {
                    $scope.switchCardUiToInput();
                }
                emptyCardNumberFakeInput();
                return autoSelectIsaTransfer();
            };
            autoSelectIsaTransfer = function() {
                if ($scope.paymentsData.signupType === 'isa_transfer') {
                    return $scope.paymentsData.currentBoxContent = 'isa_transfer';
                }
            };
            $scope.cardIsNotDebitCard = function() {
                return ($scope.paymentsData.cardData.funding != null) && $scope.paymentsData.cardData.funding !== "debit";
            };
            bypassCardFundingCheck = function() {
                return false;
            };
            $scope.isCardFundingAllowed = function() {
                return !$scope.cardIsNotDebitCard() || bypassCardFundingCheck();
            };
            fillCardNumberFakeInput = function() {
                var number;
                number = $scope.paymentsData.cardData.last4 || '****';
                return $scope.obfuscatedCardNumber = "**** **** **** " + number;
            };
            emptyCardNumberFakeInput = function() {
                return $scope.obfuscatedCardNumber = "";
            };
            updateCardData = function(token) {
                $scope.paymentsData.cardData = token.card;
                $scope.cardData = token.card;
                if ($scope.isCardFundingAllowed()) {
                    $scope.paymentsData.stripeCardToken = token.id;
                    return fillCardNumberFakeInput();
                } else {
                    $scope.paymentsData.stripeCardToken = null;
                    return emptyCardNumberFakeInput();
                }
            };
            $scope.openStripeCheckout = function() {
                return stripeHandler.open();
            };
            stripeHandler = StripeCheckout.configure({
                key: domVariables.stripePublicKey,
                name: "Nutmeg",
                description: "Enter debit card and postcode",
                panelLabel: "Use this card",
                email: domVariables.userEmail,
                allowRememberMe: false,
                image: domVariables.imageUrl,
                zipCode: true,
                token: function(token) {
                    return $scope.$apply(function() {
                        return updateCardData(token);
                    });
                }
            });
            $scope.switchCardUiToInput = function() {
                deselectCard();
                return $scope.currentCardSelectionMethod = 'card_input';
            };
            $scope.switchCardUiToList = function() {
                selectCard();
                return $scope.currentCardSelectionMethod = 'card_list';
            };
            $scope.isCardUiShowing = function(type) {
                return $scope.currentCardSelectionMethod === type;
            };
            deselectCard = function() {
                return $scope.paymentsData.selectedExistingCard = null;
            };
            selectCard = function() {
                $scope.paymentsData.selectedExistingCard = $scope.existingCard;
                return $scope.paymentsData.cardData.last4 = $scope.existingCard.last4;
            };
            $scope.isValid = function() {
                return $scope.isValidLumpSum() && ($scope.isValidMonthly() || $scope.isValidMonthlyEmployee());
            };
            $scope.isValidLumpSum = function() {
                var current, payment, total_amount, valid_details;
                current = $scope.paymentsData.currentBoxContent;
                payment = $scope.paymentsData.lumpSum;
                total_amount = parseIntegerValue(payment.amount);
                valid_details = (current !== 'card' || ($scope.affiliateUser && total_amount === 0) ? true : $scope.isCardUiShowing('card_input') ? $scope.paymentsData.stripeCardToken : ($scope.paymentsData.selectedExistingCard != null) && ($scope.paymentsData.selectedExistingCard.uuid != null));
                if (current === 'card' && (total_amount > $scope.paymentsData.lumpSum.maxCardAmount)) {
                    return false;
                }
                if (!payment.fullyFunded) {
                    total_amount = total_amount + $scope.paymentsData.unallocated;
                }
                return (total_amount >= payment.minimum) && valid_details;
            };
            $scope.isValidMonthly = function() {
                var amount, payment, valid_dd;
                payment = $scope.paymentsData.monthly;
                amount = parseIntegerValue(payment.amount);
                valid_dd = domVariables.currentMandate || (payment.dayOfMonth && payment.confirmAuthorisation);
                return amount === 0 || valid_dd;
            };
            $scope.isValidMonthlyEmployee = function() {
                var amount, payment;
                if (!$scope.affiliateUser) {
                    return false;
                } else {
                    payment = $scope.paymentsData.employee;
                    amount = parseIntegerValue(payment.amount);
                    return amount > 0 && amount >= payment.minimum;
                }
            };
            $scope.showConfirmation = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'payment_confirmation_modal.html',
                    controller: 'ModalInstanceCtrl',
                    backdrop: 'static',
                    size: 'dialog-payment'
                });
            };
            $scope.calculateInitialLumpSum = function() {
                var payment, requested_amount;
                payment = $scope.paymentsData.lumpSum;
                requested_amount = parseIntegerValue(payment.amount);
                if (requested_amount > $scope.paymentsData.unallocated) {
                    return payment.amount = requested_amount - $scope.paymentsData.unallocated;
                } else {
                    if (!$scope.affiliateUser) {
                        $scope.paymentsData.currentBoxContent = null;
                        return payment.fullyFunded = true;
                    }
                }
            };
            return $scope.init();
        }
    ]).controller("FundLumpSumSection", [
        "$scope", "$http", "$modal", "$filter", "paymentsData",
        function($scope, $http, $modal, $filter, paymentsData) {
            $scope.init = (function() {
                $scope.cardAmountLimit = paymentsData.lumpSum.maxCardAmount;
                $scope.cardAmountLimitK = $scope.cardAmountLimit / 1000;
                $scope.paymentsData = paymentsData;
                $scope.payment = paymentsData.lumpSum;
                $scope.fund = paymentsData.fund;
                $scope.unallocated = paymentsData.unallocated;
                $scope.isaTransferAllowed = true;
                $scope.affiliateUser = domVariables.affiliateUser;
                return $scope.$watch((function() {
                    return $scope.payment.amount;
                }), function() {
                    if ($scope.cardNotAllowed() && $scope.isShowingCard()) {
                        return $scope.switchToBankTransfer();
                    }
                });
            });
            $scope.amountToPayNow = function() {
                return parseIntegerValue($scope.payment.amount);
            };
            $scope.isPayingLumpSum = function() {
                return $scope.amountToPayNow() > 0;
            };
            $scope.partlyFundedTotal = function() {
                return $scope.unallocated + $scope.amountToPayNow();
            };
            $scope.minimumContributionNotMet = function() {
                if ($scope.affiliateUser) {
                    return false;
                } else {
                    if ($scope.payment.fullyFunded) {
                        return $scope.unallocated < $scope.payment.minimum;
                    } else {
                        return $scope.partlyFundedTotal() < $scope.payment.minimum;
                    }
                }
            };
            $scope.totalLumpSum = function() {
                if ($scope.payment.fullyFunded) {
                    return $scope.amountToPayNow();
                } else {
                    return $scope.partlyFundedTotal();
                }
            };
            $scope.lumpSumType = function() {
                return $scope.paymentsData.currentBoxContent || 'bank_transfer';
            };
            $scope.openDrawer = function() {
                return $scope.payment.showDrawer = true;
            };
            $scope.closeDrawer = function() {
                return $scope.payment.showDrawer = false;
            };
            $scope.isShowingCard = function() {
                return $scope.paymentsData.currentBoxContent === 'card';
            };
            $scope.isShowingBankTransfer = function() {
                return $scope.paymentsData.currentBoxContent === 'bank_transfer';
            };
            $scope.isShowingIsaTransfer = function() {
                return $scope.paymentsData.currentBoxContent === 'isa_transfer';
            };
            $scope.switchToCard = function() {
                return $scope.paymentsData.currentBoxContent = 'card';
            };
            $scope.switchToBankTransfer = function() {
                return $scope.paymentsData.currentBoxContent = 'bank_transfer';
            };
            $scope.switchToIsaTransfer = function() {
                return $scope.paymentsData.currentBoxContent = 'isa_transfer';
            };
            $scope.cardNotAllowed = function() {
                return $scope.amountToPayNow() > $scope.cardAmountLimit;
            };
            return $scope.init();
        }
    ]).controller("FundMonthlySection", [
        "$scope", "daysGenerator", "$http", "$modal", "$filter", "paymentsData",
        function($scope, daysGenerator, $http, $modal, $filter, paymentsData) {
            $scope.paymentsData = paymentsData;
            $scope.payment = paymentsData.monthly;
            $scope.fund = paymentsData.fund;
            $scope.ddDays = daysGenerator(1, 28);
            $scope.totalDD = paymentsData.otherDirectDebitTotal + parseIntegerValue($scope.payment.amount);
            $scope.canMakeEmployeeContribution = domVariables.canMakeEmployeeContribution;
            $scope.amountToPayMonthly = function() {
                return parseIntegerValue($scope.payment.amount);
            };
            $scope.isShowingDirectDebit = function() {
                return $scope.amountToPayMonthly() > 0 && !$scope.canMakeEmployeeContribution;
            };
            $scope.openDrawer = function() {
                return $scope.payment.showDrawer = true;
            };
            $scope.closeDrawer = function() {
                return $scope.payment.showDrawer = false;
            };
            return $scope.canShowMonthlyPayments = function() {
                return !domVariables.canMakeEmployeeContribution;
            };
        }
    ]).controller("FundMonthlyEmployeeSection", [
        "$scope", "$http", "$modal", "$filter", "paymentsData",
        function($scope, $http, $modal, $filter, paymentsData) {
            $scope.paymentsData = paymentsData;
            $scope.payment = paymentsData.employee;
            $scope.fund = paymentsData.fund;
            $scope.canMakeEmployeeContribution = domVariables.canMakeEmployeeContribution;
            $scope.employeeContributionNotMet = function() {
                return $scope.payment.amount < $scope.payment.minimum;
            };
            $scope.amountToPayMonthly = function() {
                return parseIntegerValue($scope.payment.amount);
            };
            $scope.isShowingEmployeeContribution = function() {
                return $scope.amountToPayMonthly() > 0 && $scope.canMakeEmployeeContribution;
            };
            $scope.shouldShowEmployeePayment = function() {
                return $scope.canMakeEmployeeContribution;
            };
            $scope.openDrawer = function() {
                return $scope.payment.showDrawer = true;
            };
            return $scope.closeDrawer = function() {
                return $scope.payment.showDrawer = false;
            };
        }
    ]).controller('ModalInstanceCtrl', [
        "$scope", "$modalInstance", "$http", "paymentsData",
        function($scope, $modalInstance, $http, paymentsData) {
            $scope.paymentsData = paymentsData;
            $scope.accountName = paymentsData.bankDetails.accountName;
            $scope.accountNickname = paymentsData.bankDetails.accountNickname;
            $scope.accountSortCode = paymentsData.bankDetails.sortCode;
            $scope.accountNumber = paymentsData.bankDetails.accountNumber;
            $scope.canMakeEmployeeContribution = domVariables.canMakeEmployeeContribution;
            $scope.isMandateHidden = parseIntegerValue(paymentsData.monthly.amount) <= 0 || $scope.canMakeEmployeeContribution;
            $scope.cardNumber = "**** **** **** " + paymentsData.cardData.last4;
            $scope.shouldShowNewDirectDebitInfo = function() {
                return !(domVariables.currentMandate || $scope.isMandateHidden) && !$scope.canMakeEmployeeContribution;
            };
            $scope.modalClose = function() {
                return $modalInstance.close();
            };
            return $scope.confirm = function() {
                $scope.isConfirmDisabled = true;
                return document.getElementById('create_fund_payment_form').submit();
            };
        }
    ]);

}).call(this);
(function() {
    angular.module("app.Funds", ["ui.bootstrap", "rzModule", "ui.utils.masks", "Services", "app.shared.Funds", "app.SharedFilters", "app.Guide", "xeditable"]).run([
        'editableOptions',
        function(editableOptions) {
            return editableOptions.theme = 'bs3';
        }
    ]).run([
        'RzSlider',
        function(RzSlider) {
            var originalSetLeft;
            if (domVariables.abTests['f1']) {
                originalSetLeft = RzSlider.prototype.setLeft;
                return RzSlider.prototype.setLeft = function(elem, left) {
                    var self;
                    self = this;
                    if (elem.closest('rzslider').attr('id') === 'fundRiskLevelSlider') {
                        elem.scope().$parent.pointerLeftPos = self.valueToOffset(self.scope.rzSliderModel);
                    }
                    return originalSetLeft(elem, left);
                };
            }
        }
    ]).service("ValidateRules", [
        "$rootScope", "APIChart", "$http",
        function($rootScope, APIChart, $http) {
            $rootScope.allModulesAreValid = function() {
                return $rootScope.timeframeAndPaymentsRulesMet() && $rootScope.fundRiskLevel > 0;
            };
            $rootScope.httpIsRequesting = function() {
                return $http.pendingRequests.length !== 0;
            };
            $rootScope.allowChartRequest = function() {
                if ($rootScope.fund.selectedGoalType === 'pension') {
                    $rootScope.requestData = {
                        risk_level: $rootScope.fundRiskLevel,
                        timeframe: $rootScope.fund.fundTimeframe || 0,
                        employer_contributions: $rootScope.pension.employerContribution,
                        monthly_contributions: $rootScope.monthlyPayment,
                        value_one_off: $rootScope.lumpSum,
                        value_transferred: $rootScope.pension.pensionTransfer,
                        one_off_tax_relief: $rootScope.pension.oneOffTaxRelief,
                        monthly_tax_relief: $rootScope.pension.monthlyTaxRelief,
                        age: $rootScope.pension.currentAge,
                        gender: $rootScope.pension.gender,
                        type: 'pensions'
                    };
                } else {
                    $rootScope.requestData = {
                        target_amount: $rootScope.fund.fundTarget || 0,
                        lump_sum: $rootScope.lumpSum,
                        monthly: $rootScope.monthlyPayment,
                        risk_level: $rootScope.fundRiskLevel,
                        type: "fund"
                    };
                }
                if (!$rootScope.fund.noTimeframe) {
                    $rootScope.requestData['timeframe'] = $rootScope.fund.fundTimeframe;
                }
                return (!_.isEqual($rootScope.requestData, $rootScope.originalRequestData) || !$rootScope.originalRequestData) && $rootScope.allModulesAreValid() && !$rootScope.httpIsRequesting();
            };
            return $rootScope.$watch((function() {
                if ($rootScope.allowChartRequest()) {
                    $rootScope.originalRequestData = _.clone($rootScope.requestData);
                    return new APIChart.request($rootScope.requestData);
                }
            }));
        }
    ]).service("DisplayProjectionsData", [
        "$rootScope", "$timeout", "SignupTypes",
        function($rootScope, $timeout, SignupTypes) {
            var handleRiskPreference, highlightRiskBoundaries;
            $rootScope.fund = {};
            $rootScope.pension = {};
            $rootScope.signupTypes = $rootScope.signupTypes || new SignupTypes();
            $rootScope.isSignupPage = domVariables.isSignupPage;
            $rootScope.isNewFundPage = domVariables.isNewFundPage;
            $rootScope.isEditFundPage = domVariables.isEditFundPage;
            highlightRiskBoundaries = function(lowerBoundary, upperBoundary) {
                var boundariesLeftPos, boundariesWidth, rangeBetweenBoundaries, sliderWrapper;
                rangeBetweenBoundaries = upperBoundary - lowerBoundary;
                rangeBetweenBoundaries = rangeBetweenBoundaries - 2;
                boundariesWidth = rangeBetweenBoundaries * 10;
                boundariesLeftPos = (lowerBoundary * 10) + 5;
                sliderWrapper = angular.element("#fundRiskLevelSlider .rz-bar-wrapper");
                return sliderWrapper.append("<span class='rz-bar highlight_prefered_risk_level' style='width: " + boundariesWidth + "%; left: " + boundariesLeftPos + "%;'></span>");
            };
            handleRiskPreference = function(riskPreference) {
                var sliderWidth;
                if (riskPreference) {
                    $rootScope.preferredRiskLevel = riskPreference.suggested_risk_level;
                    sliderWidth = angular.element('#fundRiskLevelSlider')[0].offsetWidth;
                    $rootScope.arrowUpLeftPos = ((sliderWidth / 11) * $rootScope.preferredRiskLevel) + 4;
                    return $timeout((function() {
                        return highlightRiskBoundaries(parseIntegerValue(riskPreference.lower_risk_boundary), parseIntegerValue(riskPreference.upper_risk_boundary));
                    }));
                }
            };
            return {
                build: function(data) {
                    if ($rootScope.fund.selectedGoalType === 'pension') {
                        new PensionProjectionChart('projections_chart', data.projections, data.target_date, data.max_chart_date, data.target_date_string, data.max_chart_value, 0, false, data.high_value, data.medium_value, data.low_value);
                    } else {
                        new ProjectionChart('projections_chart', data.projections, data.target_date, data.max_chart_date, data.target_date_string, data.max_chart_value, $rootScope.fund.fundTarget || 0, $rootScope.fund.noTimeframe);
                    }
                    new PieChart('pie_chart', data.pie_charts);
                    $timeout(function() {
                        $(window).resize();
                    });
                    if ($rootScope.isNewFundPage || $rootScope.isEditFundPage) {
                        handleRiskPreference(data.risk_preference);
                    }
                    return $rootScope.portfolioExplanation = data.portfolio_explanation;
                }
            };
        }
    ]).service("FundIsOnTrack", [
        "$rootScope",
        function($rootScope) {
            return {
                check: function(onTrack, suggestions) {
                    $rootScope.backOnTrack = {};
                    $rootScope.fundIsOnTrack = onTrack;
                    $rootScope.getOnTrackCollapsed = true;
                    if (!$rootScope.fundIsOnTrack && suggestions) {
                        $rootScope.backOnTrack = {
                            extendTimeframe: suggestions.timeframe_date_string,
                            increaseContributions: suggestions.monthly_contribution
                        };
                        $rootScope.extendTimeframe = function() {
                            return $rootScope.fund.fundTimeframe = suggestions.timeframe;
                        };
                        return $rootScope.increaseContributions = function() {
                            return $rootScope.monthlyPayment = suggestions.monthly_contribution;
                        };
                    }
                }
            };
        }
    ]).factory("APIChart", [
        "$rootScope", "$http", "DisplayProjectionsData", "FundIsOnTrack",
        function($rootScope, $http, DisplayProjectionsData, FundIsOnTrack) {
            return {
                request: function(data) {
                    return $http({
                        method: 'GET',
                        url: '/client/funds/chart/request',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        params: {
                            chart: data
                        }
                    }).success(function(response, status, headers, config) {
                        $rootScope.data = $.parseJSON(response.data);
                        $rootScope.APIRequestDone = true;
                        $rootScope.investmentsData = $rootScope.data.investments;
                        DisplayProjectionsData.build($rootScope.data);
                        return FundIsOnTrack.check($rootScope.data.goal_on_track, $rootScope.data.suggestions);
                    }).error(function(data, status, headers, config) {
                        return console.log("error");
                    });
                }
            };
        }
    ]).controller("CreateFundMainCtrl", [
        "$scope", "$modal", "$rootScope",
        function($scope, $modal, $rootScope) {
            $rootScope.openFundOptionsModal = function() {
                var modalInstance, modalTpl;
                modalTpl = domVariables.abTests['f1'] ? 'fund_options_modal_fun_1.html' : 'fund_options_modal.html';
                return modalInstance = $modal.open({
                    animation: true,
                    templateUrl: modalTpl,
                    controller: 'FundOptionsModalCtrl',
                    backdrop: 'static',
                    size: 'fund-options'
                });
            };
            if (!$rootScope.isSignupPage) {
                $rootScope.openFundOptionsModal();
            }
            return $rootScope.$on('show-fund-options', function(event) {
                return $rootScope.openFundOptionsModal();
            });
        }
    ]).controller("FundOptionsModalCtrl", [
        "$scope", "$rootScope", "$modalInstance", "$modal", "ValidateRules",
        function($scope, $rootScope, $modalInstance, $modal, ValidateRules) {
            var defaultPotName, setFundName, setFundTimeFrame;
            if (domVariables.abTests['f1']) {
                defaultPotName = 'My Nutmeg pot';
            }
            $scope.init = (function(_this) {
                return function() {
                    $scope.enableTooltips = !isMobileOrTablet();
                    return $scope.changeSignupType($scope.selectedSignupType);
                };
            })(this);
            if (domVariables.abTests['f1']) {
                $scope.fundGoalTypes = [{
                    name: 'home',
                    label: 'Home',
                    potName: 'My home pot'
                }, {
                    name: 'rainy',
                    label: 'Rainy day',
                    potName: 'My rainy day pot'
                }, {
                    name: 'big_purchase',
                    label: 'Big spend',
                    potName: 'My big spend pot'
                }, {
                    name: 'child',
                    label: 'Child',
                    potName: 'My child pot'
                }, {
                    name: 'retirement',
                    label: 'Retirement',
                    potName: 'My retirement pot'
                }, {
                    name: 'other',
                    label: 'Other',
                    potName: defaultPotName
                }];
            } else {
                $scope.fundGoalTypes = [{
                    name: 'just_invest',
                    label: 'Just invest',
                    tooltip: 'No goal in mind? No problem.',
                    timeframe: false,
                    roughlyHelper: false
                }, {
                    name: 'retirement',
                    label: 'Retirement',
                    tooltip: 'Put something away for later in life. Note: this is not a pension.',
                    timeframe: true,
                    roughlyHelper: true
                }, {
                    name: 'home',
                    label: 'Home',
                    tooltip: 'Save for a home of your own.',
                    timeframe: true,
                    roughlyHelper: true
                }, {
                    name: 'child',
                    label: 'Child',
                    tooltip: 'Set something aside for the next generation.',
                    timeframe: true,
                    roughlyHelper: true
                }, {
                    name: 'rainy',
                    label: 'Rainy day',
                    tooltip: 'For those "just in case" times.',
                    timeframe: false,
                    roughlyHelper: false
                }, {
                    name: 'big_purchase',
                    label: 'Big spend',
                    tooltip: 'Save for a wedding, a car, a holiday, or anything else.',
                    timeframe: true,
                    roughlyHelper: true
                }, {
                    name: 'other',
                    label: 'Other',
                    tooltip: "A fund for any reason - it's up to you.",
                    timeframe: true,
                    roughlyHelper: true
                }];
            }
            setFundName = function(change) {
                var base, potName, selPot;
                if (change == null) {
                    change = false;
                }
                if ($rootScope.signupTypes.selected() === 'pension') {
                    potName = 'My Nutmeg pension';
                } else {
                    selPot = _.find($scope.fundGoalTypes, function(el) {
                        return el.name === $scope.fund.selectedGoalType;
                    });
                    potName = selPot ? selPot.potName : defaultPotName;
                }
                if (change) {
                    return $scope.fund.fundName = potName;
                } else {
                    return (base = $scope.fund).fundName || (base.fundName = potName);
                }
            };
            setFundTimeFrame = function(change) {
                if (change == null) {
                    change = false;
                }
                switch ($scope.fund.selectedGoalType) {
                    case 'home':
                    case 'big_purchase':
                    case 'other':
                        $scope.fund.fundTimeframe = 5;
                        return $scope.fund.noTimeframe = false;
                    case 'child':
                        $scope.fund.fundTimeframe = 10;
                        return $scope.fund.noTimeframe = false;
                    default:
                        if ($rootScope.signupTypes.selected() === 'pension') {
                            return $scope.fund.noTimeframe = false;
                        } else {
                            return $scope.fund.noTimeframe = true;
                        }
                }
            };
            $scope.$watch('fund.selectedGenGoalType', function(newValue, oldValue) {
                setFundName(newValue !== oldValue);
                return setFundTimeFrame(newValue !== oldValue);
            });
            $scope.$watch('fund.selectedGoalType', function(newValue, oldValue) {
                setFundName(newValue !== oldValue);
                return setFundTimeFrame(newValue !== oldValue);
            });
            $scope.selectGenGoal = function(goal) {
                $rootScope.selectedGenGoalType = goal || $rootScope.selectedGenGoalType || 'gen_just_invest';
                if ($rootScope.selectedGenGoalType === 'gen_just_invest') {
                    $scope.selectGoalType('just_invest');
                } else {
                    if ($scope.fund.selectedGoalType === 'just_invest') {
                        $scope.selectGoalType($scope.fundGoalTypes[0].name);
                    }
                }
            };
            $scope.selectGoalType = function(goalType) {
                $scope.fund.selectedGoalType = goalType || $scope.fund.selectedGoalType || 'just_invest';
            };
            $scope.changeSignupType = function(signupType) {
                var changeFromPension, changeToPension, changingSignup, goalType, oldSelectedSignupType;
                if (!domVariables.abTests['f1']) {
                    if (signupType) {
                        $scope.signupTypes.select(signupType);
                    }
                } else {
                    if (signupType) {
                        oldSelectedSignupType = $rootScope.signupTypes.selected();
                        $scope.signupTypes.select(signupType);
                        changingSignup = signupType !== oldSelectedSignupType;
                        changeFromPension = changingSignup && oldSelectedSignupType === 'pension';
                        changeToPension = changingSignup && signupType === 'pension';
                    }
                    if (changeFromPension) {
                        $scope.selectGenGoal('gen_just_invest');
                        $scope.selectGoalType('just_invest');
                    } else {
                        $scope.selectGenGoal();
                        if (oldSelectedSignupType) {
                            goalType = changeFromPension ? 'just_invest' : null;
                            $scope.selectGoalType(goalType);
                        }
                    }
                }
                if ($scope.signupTypes.showPensionOptions()) {
                    $scope.applyPensionDefaults();
                    $scope.updatePensionTimeframe();
                    $scope.openPensionIntroModal();
                    return $scope.showPensionGuide();
                } else {
                    $scope.getGoalTypeData();
                    return $scope.showFundGuide();
                }
            };
            $scope.applyPensionDefaults = function() {
                if (!$scope.pension.gender) {
                    $scope.pension.gender = 'Male';
                }
                if (!$scope.pension.retirementAge) {
                    $scope.pension.retirementAge = 65;
                }
                if (!domVariables.abTests['f1']) {
                    if (!$scope.fund.fundName) {
                        $scope.fund.fundName = 'My Nutmeg pension';
                    }
                }
                return $scope.fund.selectedGoalType = 'pension';
            };
            $scope.openPensionIntroModal = function() {
                var modalInstance;
                if (!$scope.pension.pensionModalShown) {
                    $scope.pension.pensionModalShown = true;
                    return modalInstance = $modal.open({
                        animation: true,
                        templateUrl: 'pension_intro_modal.html',
                        controller: 'PensionIntroModalCtrl',
                        backdrop: 'static',
                        size: 'lg'
                    });
                }
            };
            $scope.showPensionGuide = function() {
                return $rootScope.guideContent = domVariables.pensionGuideContent;
            };
            $scope.showFundGuide = function() {
                return $rootScope.guideContent = domVariables.guideContent;
            };
            $scope.displayRetirementGoalWarning = function() {
                return $scope.fund.selectedGoalType === 'retirement';
            };
            $scope.getGoalTypeData = function() {
                var goalType;
                goalType = _.findLast($scope.fundGoalTypes, function(goal) {
                    return goal.name === $scope.fund.selectedGoalType;
                });
                $scope.handleGoalTypeDependencies(goalType);
                return goalType;
            };
            $scope.handleGoalTypeDependencies = function(goal) {
                $scope.timeframeHelper = {};
                if (goal) {
                    if (goal.roughlyHelper) {
                        $scope.timeframeHelper.displayWhenRoughly = true;
                        return $scope.fund.noTimeframe = false;
                    } else {
                        $scope.timeframeHelper.displayAssumption = true;
                        return $scope.fund.noTimeframe = true;
                    }
                }
            };
            $scope.hasGIAISAErrors = function() {
                return $scope.giaisaErrorMessage().length;
            };
            $scope.giaisaErrorMessage = function() {
                var timeframe;
                timeframe = $scope.fund.fundTimeframe;
                if (!$scope.fund.fundTimeframe && $scope.timeframeHelper.displayWhenRoughly) {
                    return 'Please enter a timeframe greater than 3 years.';
                }
                if (!$scope.fund.selectedGoalType) {
                    return 'Please choose a goal type.';
                }
                if (!$scope.fund.fundName) {
                    return 'Please name this fund.';
                }
                $scope.showGIAISAErrors = false;
                return '';
            };
            $scope.hasPensionErrors = function() {
                return $scope.pensionErrorMessage().length;
            };
            $scope.updatePensionTimeframe = function() {
                var current_age, retirement_age;
                current_age = $scope.pension.currentAge;
                retirement_age = $scope.pension.retirementAge;
                if (current_age > 0 && retirement_age > 0 && retirement_age > current_age) {
                    $scope.fund.fundTimeframe = retirement_age - current_age;
                } else {
                    $scope.fund.fundTimeframe = 0;
                }
                return $scope.fund.noTimeframe = false;
            };
            $scope.pensionErrorMessage = function() {
                var current_age, retirement_age, timeframe;
                current_age = $scope.pension.currentAge;
                retirement_age = $scope.pension.retirementAge;
                timeframe = $scope.fund.fundTimeframe;
                if (!current_age) {
                    return 'Tell us your current age and when you plan to retire.';
                }
                if (!retirement_age || retirement_age < 55) {
                    return 'You must be at least 55 to start drawing money from your pension.';
                }
                if (retirement_age < current_age) {
                    return 'Woah! Though retiring yesterday sounds nice, you can’t actually retire in the past.';
                }
                if (current_age > 75) {
                    return 'Currently we can only set up pensions if you are under 75. Contact us at <a href="mailto:support@nutmeg.com">support@nutmeg.com</a> if you’d like to be notified when we open it more widely.';
                }
                if (current_age > 0 && timeframe < 3) {
                    return 'While you can withdraw anytime, note that investing works best over longer time periods. The minimum is 3 years — below that, you should think about a risk-free option.';
                }
                if (current_age < 18) {
                    return 'You must be at least 18 years old to have a pension.';
                }
                $scope.showPensionErrors = false;
                return '';
            };
            $scope.displayTimeframeHelper = function() {
                return $scope.timeframeHelper && ($scope.timeframeHelper.displayWhenRoughly || $scope.timeframeHelper.displayAssumption);
            };
            $scope.displayTimeframeError = function() {
                return $scope.getGoalTypeData() && $scope.getGoalTypeData().roughlyHelper && ($scope.fund.fundTimeframe < 3 || $scope.fund.fundTimeframe > 50);
            };
            $scope.showMsgIfErrors = function() {
                if ($scope.signupTypes.showPensionOptions() && $scope.hasPensionErrors()) {
                    return $scope.showPensionErrors = true;
                } else if ($scope.hasGIAISAErrors()) {
                    return $scope.showGIAISAErrors = true;
                } else {
                    return $scope.closeOptionsModal();
                }
            };
            $scope.closeOptionsModal = function() {
                return $modalInstance.close();
            };
            return $scope.init();
        }
    ]).controller("PensionIntroModalCtrl", [
        "$scope", "$modalInstance",
        function($scope, $modalInstance) {
            return $scope.closeIntroModal = function() {
                return $modalInstance.close();
            };
        }
    ]).controller("FundTimeframeCtrl", [
        "$scope", "$rootScope", "ValidateRules",
        function($scope, $rootScope, ValidateRules) {
            $scope.initYearsFromNow = moment();
            $scope.sliderOpts = {
                floor: 3,
                ceil: 50,
                alwaysShowBar: false,
                hideLimitLabels: false,
                showTicksValue: false
            };
            return $scope.$watch('fund.fundTimeframe', function() {
                if ($scope.fund.fundTimeframe > $scope.sliderOpts.ceil) {
                    $scope.fund.fundTimeframe = $scope.sliderOpts.ceil;
                }
                return $scope.fund.yearsFromNow = $scope.initYearsFromNow.clone().add({
                    years: $scope.fund.fundTimeframe
                }).valueOf();
            });
        }
    ]).controller("FundPaymentsCtrl", [
        "$scope", "$rootScope", "$modal", "ValidateRules",
        function($scope, $rootScope, $modal, ValidateRules) {
            $scope.lumpSum = 10000;
            $scope.monthlyPayment = 500;
            $scope.unallocatedValue = domVariables.unallocatedValue;
            $scope.unallocatedCashLeft = $scope.unallocatedValue;
            $scope.affiliateUser = domVariables.affiliateUser;
            $scope.pension.pensionTransfer = 0;
            $scope.pension.employerContribution = 0;
            $scope.pension.oneOffTaxRelief = true;
            $scope.pension.monthlyTaxRelief = true;
            $scope.pension.employerContributions = false;
            $scope.enableTooltips = !isMobileOrTablet();
            $scope.setLumpSumFloorValue = function() {
                if ($scope.affiliateUser) {
                    return 0;
                } else {
                    return 1000;
                }
            };
            $scope.lumpSumSlider = {
                floor: $scope.setLumpSumFloorValue(),
                ceil: 100000,
                alwaysShowBar: false,
                hideLimitLabels: false,
                showTicksValue: false,
                showSelectionBar: true
            };
            $scope.pensionTransferSlider = {
                floor: 1000,
                ceil: 250000,
                alwaysShowBar: false,
                hideLimitLabels: false,
                showTicksValue: false
            };
            $scope.monthlyPaymentSlider = {
                floor: 50,
                ceil: 5000,
                alwaysShowBar: false,
                hideLimitLabels: false,
                showTicksValue: false,
                showSelectionBar: true
            };
            $scope.employerContributionSlider = {
                floor: 50,
                ceil: 5000,
                alwaysShowBar: false,
                hideLimitLabels: false,
                showTicksValue: false
            };
            $scope.monthlyRules = {
                min: 50,
                belowLumpSum: 5000
            };
            $scope.restoreSavedFund = function() {
                var saved;
                if (saved = domVariables.saved) {
                    if (saved.f) {
                        $rootScope.fund = saved.f;
                    }
                    if (saved.p) {
                        $rootScope.pension = saved.p;
                    }
                    $rootScope.fundRiskLevel = saved.frl;
                    $scope.monthlyPayment = saved.mp;
                    $scope.lumpSum = saved.ls;
                    if ($rootScope.fund.selectedGoalType === 'pension') {
                        return $rootScope.guideContent = domVariables.pensionGuideContent;
                    } else {
                        return $rootScope.guideContent = domVariables.guideContent;
                    }
                }
            };
            $scope.displayLumpSumWarning = function() {
                if ($scope.signupTypes.showFundOptions()) {
                    if ($scope.affiliateUser) {
                        return false;
                    } else {
                        return $scope.lumpSum < $scope.lumpSumSlider.floor;
                    }
                } else {
                    return $scope.lumpSum + $scope.pension.pensionTransfer < 5000;
                }
            };
            $scope.userHasUnallocatedCash = function() {
                if (parseIntegerValue($scope.unallocatedValue) > 0 && $scope.isNewFundPage) {
                    return true;
                }
            };
            $scope.willBeFundedFromUnallocated = function() {
                if ($scope.lumpSum > 0 && $scope.lumpSum <= $scope.unallocatedValue) {
                    $scope.unallocatedCashLeft = $scope.unallocatedValue - $scope.lumpSum;
                    return true;
                }
            };
            $scope.fundNeedMoreThanUnallocated = function() {
                if ($scope.lumpSum > 0 && $scope.lumpSum > $scope.unallocatedValue) {
                    $scope.fundNeedMoreCash = $scope.lumpSum - $scope.unallocatedValue;
                    return true;
                }
            };
            $scope.ruleMetBetweenLumpAndMonthly = function() {
                if ($scope.affiliateUser) {
                    return true;
                } else {
                    return $scope.lumpSum < $scope.monthlyRules.belowLumpSum;
                }
            };
            $scope.isNotBellowLumpSum = function() {
                if ($scope.affiliateUser) {
                    return false;
                } else {
                    return $scope.lumpSum >= $scope.monthlyRules.belowLumpSum;
                }
            };
            $scope.fundMonthlyRulesMet = function() {
                if ($scope.signupTypes.showFundOptions()) {
                    return $rootScope.fundPaymentsRulesMet = ($scope.lumpSum >= $scope.lumpSumSlider.floor && $scope.ruleMetBetweenLumpAndMonthly() && $scope.monthlyPayment >= $scope.monthlyRules.min) || $scope.isNotBellowLumpSum();
                } else {
                    return $rootScope.fundPaymentsRulesMet = !$scope.displayLumpSumWarning();
                }
            };
            $scope.fundTimeframeRulesMet = function() {
                var ref;
                return ((2 < (ref = $rootScope.fund.fundTimeframe) && ref < 51)) || $rootScope.fund.noTimeframe;
            };
            $rootScope.timeframeAndPaymentsRulesMet = function() {
                return $scope.fundTimeframeRulesMet() && $scope.fundMonthlyRulesMet();
            };
            $scope.syncLumpSumValue = function() {
                return $scope.lumpSum = $scope.lumpSumHelper;
            };
            $scope.syncPensionTransferValue = function() {
                return $scope.pension.pensionTransfer = $scope.pensionTransferHelper;
            };
            $scope.syncMonthlyPaymentValue = function() {
                return $scope.monthlyPayment = $scope.monthlyPaymentHelper;
            };
            $scope.syncEmployerContributionValue = function() {
                return $scope.pension.employerContribution = $scope.employerContributionHelper;
            };
            $scope.openPensionTaxReliefModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'pension_tax_relief_modal.html',
                    controller: 'PensionTaxReliefModalCtrl',
                    backdrop: 'static',
                    size: 'lg'
                });
            };
            $scope.showEmployerContributions = function() {
                return $scope.pension.employerContributions = true;
            };
            $scope.hideEmployerContributions = function() {
                $scope.pension.employerContribution = 0;
                return $scope.pension.employerContributions = false;
            };
            $scope.lumpSumTaxReliefValue = function() {
                if ($scope.pension.oneOffTaxRelief) {
                    return $scope.lumpSum / 4;
                } else {
                    return 0;
                }
            };
            $scope.monthlyTaxReliefValue = function() {
                if ($scope.pension.monthlyTaxRelief) {
                    return $scope.monthlyPayment / 4;
                } else {
                    return 0;
                }
            };
            $scope.$watch('lumpSum', function() {
                $rootScope.lumpSum = $scope.lumpSum;
                if ($scope.lumpSum > $scope.lumpSumSlider.ceil) {
                    return $scope.lumpSumHelper = $scope.lumpSumSlider.ceil;
                } else {
                    return $scope.lumpSumHelper = $scope.lumpSum;
                }
            });
            $scope.$watch('pension.pensionTransfer', function() {
                if ($scope.pension.pensionTransfer > $scope.pensionTransferSlider.ceil) {
                    return $scope.pensionTransferHelper = $scope.pensionTransferSlider.ceil;
                } else {
                    return $scope.pensionTransferHelper = $scope.pension.pensionTransfer;
                }
            });
            $scope.$watch('monthlyPayment', function() {
                $rootScope.monthlyPayment = $scope.monthlyPayment;
                if ($scope.monthlyPayment > $scope.monthlyPaymentSlider.ceil) {
                    return $scope.monthlyPaymentHelper = $scope.monthlyPaymentSlider.ceil;
                } else {
                    return $scope.monthlyPaymentHelper = $scope.monthlyPayment;
                }
            });
            $scope.$watch('pension.employerContribution', function() {
                if ($scope.pension.employerContribution > $scope.employerContributionSlider.ceil) {
                    return $scope.employerContributionHelper = $scope.employerContributionSlider.ceil;
                } else {
                    return $scope.employerContributionHelper = $scope.pension.employerContribution;
                }
            });
            return $scope.restoreSavedFund();
        }
    ]).controller("PensionTaxReliefModalCtrl", [
        "$scope", "$modalInstance",
        function($scope, $modalInstance) {
            return $scope.closeTaxReliefModal = function() {
                return $modalInstance.close();
            };
        }
    ]).controller("FundRiskLevelCtrl", [
        "$scope", "$rootScope", "$timeout", "$http", "riskLevel", "ValidateRules",
        function($scope, $rootScope, $timeout, $http, riskLevel, ValidateRules) {
            $scope.riskLevelSliderOpts = {
                floor: 0,
                ceil: 10,
                alwaysShowBar: false,
                hideLimitLabels: false,
                showTicks: true
            };
            $scope.timeframeAndPaymentsRulesMet = function() {
                return $rootScope.timeframeAndPaymentsRulesMet();
            };
            $scope.applyRiskLevelData = function() {
                $scope.riskLevelSliderOpts.floor = 1;
                if (!domVariables.abTests['f1']) {
                    $timeout(function() {
                        var pointerLeftPos;
                        pointerLeftPos = angular.element('#fundRiskLevelSlider .rz-pointer')[0].offsetLeft;
                        $scope.pointerLeftPos = pointerLeftPos;
                    });
                    $rootScope.riskLevelData = {};
                }
                $rootScope.riskLevelData = riskLevel.getDetails($scope.fundRiskLevel);
                $rootScope.fundRiskLevel = $scope.fundRiskLevel;
            };
            $scope.displayPreferredRisk = function() {
                return ($scope.isNewFundPage || $scope.isEditFundPage) && $rootScope.preferredRiskLevel;
            };
            $scope.$watch('fundRiskLevel', function() {
                return $rootScope.fundRiskLevel = $scope.fundRiskLevel;
            });
            if (domVariables.abTests['f1']) {
                $rootScope.fundRiskLevel = 5;
                return $scope.applyRiskLevelData();
            }
        }
    ]).controller("FundProjectionsCtrl", [
        "$scope", "$rootScope", "$modal", "ValidateRules",
        function($scope, $rootScope, $modal, ValidateRules) {
            $scope.investmentsList = domVariables.investmentsList;
            $scope.displayChartKeyContainer = true;
            $scope.requestIsCompleted = function() {
                return $rootScope.APIRequestDone;
            };
            $scope.toggleChartKeyContainer = function() {
                return $scope.displayChartKeyContainer = !$scope.displayChartKeyContainer;
            };
            $scope.openHowProjectionIsCalculatedModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'how_projection_is_calculated_modal.html',
                    controller: 'HowProjectionIsCalculatedModalCtrl',
                    backdrop: 'static',
                    size: 'fund-options'
                });
            };
            return $scope.openPensionProjectionAssumptionsModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'pension_assumptions_modal.html',
                    controller: 'PensionProjectionAssumptionsModalCtrl',
                    backdrop: 'static',
                    size: 'lg'
                });
            };
        }
    ]).controller("PensionProjectionAssumptionsModalCtrl", [
        "$scope", "$modalInstance",
        function($scope, $modalInstance) {
            return $scope.closeAssumptionsModal = function() {
                return $modalInstance.close();
            };
        }
    ]).controller("HowProjectionIsCalculatedModalCtrl", [
        "$scope", "$modalInstance",
        function($scope, $modalInstance) {
            return $scope.closeModal = function() {
                return $modalInstance.close();
            };
        }
    ]).service("ProjectionsModal", [
        "$modal",
        function($modal) {
            return {
                buildData: function(data) {
                    var modalInstance;
                    return modalInstance = $modal.open({
                        animation: true,
                        templateUrl: 'projections_modal.html',
                        controller: 'ProjectionsModalCtrl',
                        backdrop: 'static',
                        size: 'fund-projections',
                        resolve: {
                            projectionsData: function() {
                                return data;
                            }
                        }
                    });
                }
            };
        }
    ]).controller("ProjectionsModalCtrl", [
        "$scope", "$rootScope", "$modal", "$modalInstance", "projectionsData",
        function($scope, $rootScope, $modal, $modalInstance, projectionsData) {
            $scope.potentialPerformance = projectionsData.potentialPerformance;
            $scope.totalMonthlyPayments = projectionsData.monthlyContributionsMinusNewlyAdded;
            $scope.fundIsActive = domVariables.fundIsActive;
            $scope.fundPaymentsUrl = "/client/funds/" + projectionsData.uuid + "/payments";
            $scope.fixRemainingTimeframe = function() {
                var timeframe;
                timeframe = $scope.potentialPerformance.timeRemainingInYears;
                if (timeframe <= 0) {
                    return 10;
                } else {
                    return timeframe;
                }
            };
            $scope.expectedPerformanceTenYears = function() {
                if (!($scope.potentialPerformance.timeRemainingInYears <= 0)) {
                    return $scope.potentialPerformance.expectedPerformanceRemainingYears;
                } else {
                    return $scope.potentialPerformance.expectedPerformanceTenYears;
                }
            };
            $scope.worstPerformanceTenYears = function() {
                if (!($scope.potentialPerformance.timeRemainingInYears <= 0)) {
                    return $scope.potentialPerformance.worstPerformanceRemainingYears;
                } else {
                    return $scope.potentialPerformance.worstPerformanceTenYears;
                }
            };
            $scope.totalContributionsTenYears = function() {
                if (!($scope.potentialPerformance.timeRemainingInYears <= 0)) {
                    return $scope.potentialPerformance.totalContributionsRemainingYears;
                } else {
                    return $scope.potentialPerformance.totalContributionsTenYears;
                }
            };
            $scope.displayRemainingYearsModule = function() {
                var timeframe;
                if ($scope.potentialPerformance) {
                    timeframe = parseIntegerValue($scope.potentialPerformance.timeRemainingInYears);
                    return timeframe > 3 && timeframe !== 0;
                } else {
                    return false;
                }
            };
            $scope.closeProjectionsModal = function() {
                return $modalInstance.close();
            };
            return $scope.openAffordabilityCalculatorModal = function() {
                var modalInstance;
                $scope.closeProjectionsModal();
                return modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'affordability_calculator_modal.html',
                    controller: 'AffordabilityCalculatorCtrl',
                    backdrop: 'static',
                    size: 'fund-options',
                    resolve: {
                        lumpSum: function() {
                            return $rootScope.lumpSum;
                        },
                        monthlyPayment: function() {
                            return $rootScope.monthlyPayment;
                        },
                        projectionsModal: function() {
                            return $modalInstance;
                        }
                    }
                });
            };
        }
    ]).controller("AffordabilityCalculatorCtrl", [
        "$scope", "$modalInstance", "$filter", "lumpSum", "monthlyPayment", "projectionsModal",
        function($scope, $modalInstance, $filter, lumpSum, monthlyPayment, projectionsModal) {
            $scope.lumpSum = lumpSum;
            $scope.monthlyPayment = monthlyPayment;
            $scope.modelObj = {};
            $scope.slider = {
                current: 0
            };
            $scope.affordabilitySteps = [{
                title: "What is the approximate value of all your liquid assets?",
                content: "This should include the total value of all your cash and current accounts, investment accounts, pensions, ISAs, trusts, and property that you own outright. Be sure to also include the value of any shares and bonds, including all of your existing Nutmeg investments.",
                modelName: "liquidAssets"
            }, {
                title: "What is the approximate total value of any outstanding debts?",
                content: "This should include any credit card debt or outstanding loans. However, do not include student loans, or the portion of any mortgage still owed (you'll include that as part of your monthly expenses on the last step).",
                modelName: "totalDebts"
            }, {
                title: "What is your approximate total monthly take-home pay, after tax?",
                content: "Include income from all sources, such as salary, interest, and dividends, after tax.",
                modelName: "monthlyIncome"
            }, {
                title: "What are your approximate total monthly expenses?",
                content: "Estimate everything you can think of: mortgage/rent, utilities, council tax, food, insurance premiums, transport costs, etc. Just a ballpark figure is necessary.",
                modelName: "monthlyExpenses"
            }];
            $scope.finalStep = function() {
                return $scope.slider.current === $scope.affordabilitySteps.length;
            };
            $scope.goToNextStep = function() {
                $scope.slider.current = $scope.slider.current + 1;
                if ($scope.finalStep()) {
                    return $scope.calculate();
                }
            };
            $scope.isCurrent = function(step) {
                return $scope.slider.current === step;
            };
            $scope.calculate = function() {
                $scope.lumpSumDeterminant = ($scope.modelObj.liquidAssets - $scope.modelObj.totalDebts - $scope.lumpSum) >= ($scope.modelObj.monthlyExpenses * 3);
                $scope.lumpSumRecommended = $scope.modelObj.liquidAssets - $scope.modelObj.totalDebts - ($scope.modelObj.monthlyExpenses * 3);
                $scope.monthlyPaymentDeterminant = ($scope.modelObj.monthlyIncome - $scope.modelObj.monthlyExpenses - $scope.monthlyPayment) >= 0;
                $scope.monthlyPaymentRecommented = $scope.modelObj.monthlyIncome - $scope.modelObj.monthlyExpenses;
                return $scope.debtAssetRatio = $scope.modelObj.totalDebts / $scope.modelObj.liquidAssets;
            };
            return $scope.closeModal = function() {
                return $modalInstance.close();
            };
        }
    ]).service("RiskAcceptance", [
        "$rootScope", "$modal",
        function($rootScope, $modal) {
            return {
                check: function(data, projectionsData) {
                    var modalInstance, riskIs, templateUrl;
                    templateUrl = false;
                    if (data) {
                        if ($rootScope.fundRiskLevel <= parseIntegerValue(data.lower_risk_boundary)) {
                            templateUrl = 'lower_risk_modal.html';
                            riskIs = 'lower';
                        } else if ($rootScope.fundRiskLevel >= parseIntegerValue(data.upper_risk_boundary)) {
                            templateUrl = 'upper_risk_modal.html';
                            riskIs = 'upper';
                        }
                    }
                    if (templateUrl) {
                        return modalInstance = $modal.open({


                    : true,
                            templateUrl: templateUrl,
                            controller: 'RiskAcceptanceModalCtrl',
                            backdrop: 'static',
                            size: 'fund-options',
                            resolve: {
                                projectionsData: function() {
                                    return projectionsData;
                                },
                                riskIs: function() {
                                    return riskIs;
                                }
                            }
                        });
                    }
                }
            };
        }
    ]).controller("RiskAcceptanceModalCtrl", [
        "$scope", "$rootScope", "$modalInstance", "$http", "ProjectionsModal", "projectionsData", "riskIs",
        function($scope, $rootScope, $modalInstance, $http, ProjectionsModal, projectionsData, riskIs) {
            $scope.displayRiskAcceptanceOptions = false;
            $scope.acceptRisk = function() {
                return $scope.displayRiskAcceptanceOptions = true;
            };
            $scope.canSubmitRiskAcceptance = function() {
                return (($scope.lessRisk || $scope.tryingNutmeg || $scope.lessRiskOther) || ($scope.smallWealth || $scope.higherReturns || $scope.shorterTimeframe || $scope.upperRiskOther)) && !$rootScope.httpIsRequesting();
            };
            $scope.closeModal = function() {
                return $modalInstance.close();
            };
            return $scope.submitRiskAcceptanceForm = function($event) {
                var requestData, riskAcceptanceData;
                $event.preventDefault();
                if (riskIs === 'lower') {
                    riskAcceptanceData = {
                        reason: [$scope.lessRisk, $scope.tryingNutmeg, $scope.lessRiskOtherDescription],
                        accept_lower_risk: true,
                        accept_higher_risk: null
                    };
                } else {
                    riskAcceptanceData = {
                        reason: [$scope.smallWealth, $scope.higherReturns, $scope.shorterTimeframe, $scope.upperRiskOtherDescription],
                        accept_higher_risk: true,
                        accept_lower_risk: null
                    };
                }
                requestData = {
                    risk_acceptance: riskAcceptanceData,
                    fund_uuid: $rootScope.fundUuid
                };
                return $http({
                    method: 'POST',
                    type: 'json',
                    url: '/client/funds/risk_acceptance',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: requestData
                }).success(function() {
                    $modalInstance.close();
                    return ProjectionsModal.buildData(projectionsData);
                });
            };
        }
    ]).service("ProcessingAccount", [
        "$rootScope", "$modal",
        function($rootScope, $modal) {
            return {
                check: function() {
                    var custodianAccountNumber, isProcessingAccount, modalInstance;
                    custodianAccountNumber = domVariables.custodianAccountNumber;
                    isProcessingAccount = domVariables.isProcessingAccount;
                    if (!custodianAccountNumber) {
                        return modalInstance = $modal.open({
                            animation: true,
                            templateUrl: 'processing_account_modal.html',
                            controller: 'ProcessingAccountModalCtrl',
                            backdrop: 'static',
                            size: 'fund-options',
                            resolve: {
                                isProcessingAccount: function() {
                                    return isProcessingAccount;
                                }
                            }
                        });
                    } else {
                        return false;
                    }
                }
            };
        }
    ]).controller("ProcessingAccountModalCtrl", [
        "$scope", "$modalInstance", "isProcessingAccount",
        function($scope, $modalInstance, isProcessingAccount) {
            $scope.isProcessingAccount = isProcessingAccount;
            return $scope.closeModal = function() {
                return $modalInstance.close();
            };
        }
    ]).controller("FundStepsCtrl", [
        "$scope", "$rootScope", "$http", "ProjectionsModal", "RiskAcceptance", "ProcessingAccount",
        function($scope, $rootScope, $http, ProjectionsModal, RiskAcceptance, ProcessingAccount) {
            $scope.canSubmitForm = function() {
                return $rootScope.APIRequestDone && $rootScope.allModulesAreValid() && !$rootScope.httpIsRequesting();
            };
            $scope.setFundStatus = function() {
                var status;
                $scope.custodianAccountNumber = domVariables.custodianAccountNumber;
                $scope.isCurrentFlow = domVariables.isCurrentFlow;
                status = !$scope.custodianAccountNumber && !$scope.isCurrentFlow ? 'SAVED' : 'ACTIVE';
                return status;
            };
            $scope.createRegistration = function() {
                return $rootScope.$emit('fund-illustration-complete');
            };
            $scope.saveFund = function() {
                return $rootScope.$emit('show-save-fund');
            };
            return $scope.createFund = function() {
                var fundData;
                if ($scope.canSubmitForm()) {
                    fundData = {
                        goal_type: $rootScope.fund.selectedGoalType,
                        name: $rootScope.fund.fundName,
                        target: $rootScope.fund.fundTarget || 0,
                        timeframe: $rootScope.fund.fundTimeframe || 0,
                        lump_sum: $rootScope.lumpSum,
                        monthly_contributions: $rootScope.monthlyPayment,
                        risk_level: $rootScope.fundRiskLevel,
                        status: $scope.setFundStatus()
                    };
                    return $http({
                        method: 'POST',
                        url: '/client/funds/create',
                        headers: {
                            'X-CSRF-Token': domVariables.formToken,
                            'Content-Type': 'application/json'
                        },
                        data: {
                            fund: fundData
                        }
                    }).success(function(data, status, headers, config) {
                        $rootScope.fundUuid = data.uuid;
                        if (!ProcessingAccount.check()) {
                            if (!RiskAcceptance.check($rootScope.data.risk_preference, data)) {
                                return ProjectionsModal.buildData(data);
                            }
                        }
                    }).error(function(data, status, headers, config) {
                        return console.log("error");
                    });
                }
            };
        }
    ]);

}).call(this);
(function() {
    angular.module("app.Guide", ["ui.bootstrap", "ngSanitize", "pageslide-directive"]).controller("MainGuideCtrl", [
        "$scope", "$rootScope",
        function($scope, $rootScope) {
            $rootScope.guideContentOpened = false;
            return $rootScope.toggleGuideContent = function() {
                return $rootScope.guideContentOpened = !$rootScope.guideContentOpened;
            };
        }
    ]).controller("BoilerplateCtrl", [
        "$scope",
        function($scope) {
            return $scope.trademarkCollapsed = true;
        }
    ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document.getElementsByClassName("angular-guide-content"), ["app.Guide"]);
    });

}).call(this);
(function() {
    angular.module('app.isaSettingsPage', ['app.Guide', 'ui.bootstrap', 'toggle-switch', 'ui.utils.masks', 'unsavedChanges']).run([
        '$rootScope',
        function($rootScope) {
            $rootScope.canSubmit = false;
            $rootScope.$watch(function() {
                if ($rootScope.isa_settings_form.$dirty) {
                    return $rootScope.canSubmit = true;
                }
            });
            return $rootScope.submit = function() {
                return $rootScope.disableButton = true;
            };
        }
    ]).service('FullAllowance', function() {
        return {
            state: domVariables.fullIsaAllowance
        };
    }).service('RemainingAllowance', function() {
        var allocation_limit;
        allocation_limit = domVariables.allocationLimit;
        return {
            setValue: function(value) {
                return allocation_limit = value;
            },
            getValue: function() {
                return allocation_limit;
            }
        };
    }).controller('FullIsaAllowanceCtrl', [
        '$scope', '$rootScope', 'FullAllowance', 'RemainingAllowance',
        function($scope, $rootScope, FullAllowance, RemainingAllowance) {
            $scope.fullAllowanceSwitch = FullAllowance.state;
            $scope.showCashLimitWarning = false;
            $scope.totalIsaContributed = domVariables.totalIsaContributed;
            $scope.cashLimit = domVariables.cashLimit;
            $scope.$watch('fullAllowanceSwitch', function() {
                return FullAllowance.state = $scope.fullAllowanceSwitch;
            });
            $scope.allocationLimit = domVariables.allocationLimit;
            $scope.remainingAllowance = $scope.allocationLimit - ($scope.cashLimit || 0);
            return $scope.$watch('cashLimit', function(value) {
                var isaLimitAllowed;
                if (value > $scope.allocationLimit) {
                    $scope.cashLimit = $scope.allocationLimit;
                }
                isaLimitAllowed = $scope.allocationLimit - $scope.totalIsaContributed;
                if (value > isaLimitAllowed) {
                    $scope.showCashLimitWarning = true;
                    $scope.cashLimit = isaLimitAllowed;
                } else {
                    $scope.showCashLimitWarning = false;
                }
                $scope.remainingAllowance = $scope.allocationLimit - (value || 0);
                return RemainingAllowance.setValue($scope.remainingAllowance);
            });
        }
    ]).controller('AutomaticIsaRolloverCtrl', [
        '$scope', 'FullAllowance', 'RemainingAllowance',
        function($scope, FullAllowance, RemainingAllowance) {
            $scope.$watch(function() {
                return $scope.fullAllowanceSwitch = FullAllowance.state;
            });
            $scope.isaRolloverSwitch = domVariables.autoRollIsa;
            $scope.futureIsaLimit = false;
            $scope.allocationLimit = domVariables.allocationLimit;
            $scope.useFullAllowance = domVariables.useFullAllowance;
            $scope.nextYearAllocationLimit = domVariables.nextYearAllocationLimit;
            $scope.remainingAllowanceValue = RemainingAllowance;
            $scope.$watch('remainingAllowanceValue.getValue()', function(value) {
                $scope.autoRollUserLimit = domVariables.autoRollUserLimit || value;
                return $scope.useFullAllowance = domVariables.useFullAllowance;
            });
            $scope.$watch('autoRollUserLimit', function(value) {
                if (parseInt(value) > parseInt($scope.nextYearAllocationLimit)) {
                    return $scope.autoRollUserLimit = $scope.nextYearAllocationLimit;
                }
            });
            $scope.shouldDisplayFullMessage = function() {
                return $scope.useFullAllowance;
            };
            $scope.shouldDisplayPartialMessage = function() {
                return !$scope.useFullAllowance;
            };
            $scope.displayFutureIsaOptions = function() {
                return $scope.futureIsaLimit = true;
            };
            return $scope.shouldDisplayFutureIsaLimits = function() {
                return $scope.futureIsaLimit && $scope.isaRolloverSwitch;
            };
        }
    ]).controller('MaximiseIsaCtrl', [
        '$scope', '$modal',
        function($scope, $modal) {
            $scope.maximiseIsaSwitch = domVariables.maximiseIsa;
            return $scope.openTaxImplicationsModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: 'fade',
                    templateUrl: 'potential_tax_implications.html',
                    controller: 'PotentialTaxImplicationsCtrl'
                });
            };
        }
    ]).controller('PotentialTaxImplicationsCtrl', [
        '$scope', '$modalInstance',
        function($scope, $modalInstance) {
            return $scope.closeModal = function() {
                return $modalInstance.dismiss('cancel');
            };
        }
    ]);

}).call(this);
(function() {
    angular.module('app.isaTransfer', ['app.SharedHelpers', 'app.validation', 'ui.bootstrap', 'ui.utils.masks', 'localytics.directives', 'ngMask']).controller('isaTransferController', [
        '$scope', '$http', 'validationPatterns',
        function($scope, $http, validationPatterns) {
            var buildTransferPayload, init, saveTransfer;
            init = function() {
                $scope.transfer = {
                    existingNI: domVariables.existingNI,
                    amount: 'full'
                };
                $scope.otherProvider = {
                    name: 'Other',
                    other: true
                };
                $scope.providers = domVariables.providers;
                $scope.providers.push($scope.otherProvider);
                return $scope.validationPatterns = validationPatterns;
            };
            $scope.showAllOptions = function() {
                return $scope.transfer.provider && !$scope.transfer.provider.other;
            };
            $scope.showAutomatedOptions = function() {
                return $scope.transfer.provider && $scope.transfer.provider.automated;
            };
            $scope.showOtherOptions = function() {
                return $scope.transfer.provider && $scope.transfer.provider.other;
            };
            $scope.showOtherPrompt = function() {
                return !$scope.transfer.provider;
            };
            $scope.hasExistingNI = function() {
                return !!$scope.transfer.existingNI;
            };
            $scope.noExistingNI = function() {
                return !$scope.hasExistingNI();
            };
            $scope.chooseOther = function() {
                return $scope.transfer.provider = $scope.otherProvider;
            };
            $scope.submitTransfer = function() {
                $scope.transferError = false;
                if ($scope.isaTransferForm.$valid) {
                    return saveTransfer();
                }
            };
            saveTransfer = function() {
                $scope.isButtonDisabled = true;
                return $http({
                    method: 'POST',
                    url: domVariables.saveTransferPath,
                    headers: {
                        'X-CSRF-Token': domVariables.formToken,
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: buildTransferPayload()
                }).success(function(data, status, headers, config) {
                    return window.location = data.url;
                }).error(function(data, status, headers, config) {
                    $scope.isButtonDisabled = false;
                    return $scope.transferError = true;
                });
            };
            buildTransferPayload = function() {
                return {
                    provider: $scope.transfer.provider,
                    transfer: {
                        provider_id: $scope.transfer.provider.id,
                        value_of_transfer: $scope.transfer.value,
                        current_year_subscriptions: $scope.transfer.subscriptions,
                        national_insurance_number: $scope.transfer.newNI || $scope.transfer.existingNI,
                        terms_and_conditions_accepted: $scope.transfer.termsAgreed,
                        isa_account: {
                            account_id: $scope.transfer.reference,
                            sort_code: $scope.transfer.sortcode
                        }
                    }
                };
            };
            return init();
        }
    ]).controller('isaTransferConfirmationController', [
        '$scope',
        function($scope) {
            var init;
            init = function() {
                $scope.transfer = domVariables.transfer;
                return $scope.provider = domVariables.provider;
            };
            return init();
        }
    ]);

}).call(this);
(function() {
    angular.module("app.shared").controller('MobileNavigationMenuCtrl', [
        '$rootScope',
        function($rootScope) {
            $rootScope.displayPaymentsOptions = false;
            return $rootScope.togglePaymentsOptions = function() {
                return $rootScope.displayPaymentsOptions = !$rootScope.displayPaymentsOptions;
            };
        }
    ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document.getElementsByClassName('mobile-navigation-menu'), ['app.shared']);
    });

}).call(this);
(function() {
    angular.module("MonthlyPaymentsPage", ["ui.bootstrap", "app.shared", "Services", "app.EditBankDetails", "app.SharedFilters"]).controller("FlashMessagesCtrl", [
        "$scope", "findPayment",
        function($scope, findPayment) {
            $scope.payment = findPayment;
            $scope.newValue = newValue;
            $scope.fromType = fromType;
            if (!_.isEmpty($scope.payment)) {
                $scope.currentPaymentAmount = function() {
                    return parseIntegerValue($scope.newValue);
                };
                $scope.displayDontForgetFlash = function() {
                    return $scope.fromType === 'STANDING_ORDER' && $scope.currentPaymentAmount() <= 0;
                };
                $scope.displayFindAndConvertFlash = function() {
                    return $scope.fromType === 'STANDING_ORDER' && $scope.currentPaymentAmount() > 0;
                };
                $scope.displayFindAndChangeFlash = function() {
                    return $scope.fromType !== 'STANDING_ORDER' && $scope.currentPaymentAmount() > 0;
                };
                return $scope.displayCancelPaymentFlash = function() {
                    return $scope.fromType !== 'STANDING_ORDER' && $scope.currentPaymentAmount() <= 0;
                };
            }
        }
    ]).controller("DirectDebitsController", [
        "$scope", "$rootScope", "paymentsData", "allowChangingBankAccount", "getDirectDebitTotal", "daysGenerator", "BankDetailsUpdateManager", "UpcomingDirectDebits", "$http", "$modal", "$filter",
        function($scope, $rootScope, paymentsData, allowChangingBankAccount, getDirectDebitTotal, daysGenerator, BankDetailsUpdateManager, UpcomingDirectDebits, $http, $modal, $filter) {
            var closeOtherDrawers, resetPaymentAmountIfNeeded, setupBankDetailsData;
            $scope.init = (function() {
                $scope.ddDays = daysGenerator(1, 28);
                $scope.currentlyOpen = null;
                $scope.upcomingDirectDebits = new UpcomingDirectDebits(upcomingDirectDebitPayments);
                $scope.nextChargeDateAfter = nextChargeDateAfter;
                $scope.nextChargeDateEquals = nextChargeDateEquals;
                $scope.nextChargeDateUndetermined = nextChargeDateUndetermined;
                setupBankDetailsData(accountNumber, accountSortCode, accountName, accountNickname);
                $scope.ddPaymentDay = _.chain(paymentsData.directDebits()).pluck('dayOfMonth').filter(function(day) {
                    return day != null;
                }).uniq().first().value();
                $scope.totalDirectDebits = _.sum(paymentsData.directDebits(), function(payment) {
                    return payment.amount;
                });
                $scope.payments = _.map(paymentsData.directDebits(), function(payment) {
                    var thisPayment;
                    thisPayment = payment;
                    if (thisPayment.amount === 0) {
                        thisPayment.disabled = 'disabled';
                        thisPayment.confirmAuthorisation = false;
                    }
                    if ($scope.totalDirectDebits > 0 && thisPayment.amount === 0) {
                        thisPayment.confirmAuthorisation = true;
                        thisPayment.dayOfMonth = $scope.ddPaymentDay;
                    }
                    return thisPayment;
                });
                $scope.mostRecentDD = _.chain($scope.payments).filter(function(payment) {
                    return payment.createdAt != null;
                }).sortBy(function(payment) {
                    return payment.createdAt;
                }).last().value();
                $scope.totalValue = _.chain($scope.payments).filter(function(payment) {
                    return payment.amount != null;
                }).reduce(function(accumulator, payment) {
                    return accumulator + parseInt(payment.amount);
                }, 0).value();
                if (showNewDirectDebitCompletionModal) {
                    return $scope.displayNewDirectDebitCompletion();
                }
            });
            setupBankDetailsData = function(accountNumber, accountSortCode, accountName, accountNickname) {
                $scope.allowChangingBankAccount = allowChangingBankAccount;
                $scope.bankDetailsUpdateManager = new BankDetailsUpdateManager(accountNumber, accountSortCode, accountName, accountNickname);
                return $scope.$watch((function() {
                    return $scope.bankDetailsUpdateManager.hasChanged();
                }), (function() {
                    $rootScope.accountName = $scope.bankDetailsUpdateManager.accountData.accountName;
                    $rootScope.accountNickname = $scope.bankDetailsUpdateManager.accountData.accountNickname;
                    $rootScope.accountSortCode = $scope.bankDetailsUpdateManager.accountData.accountSortCode;
                    return $rootScope.accountNumber = $scope.bankDetailsUpdateManager.accountData.accountNumber;
                }));
            };
            $scope.noPaymentsYet = function() {
                return _.filter($scope.payments, function(payment) {
                        return !payment.disabled;
                    }).length === 0;
            };
            $scope.directDebitsPresent = function() {
                return paymentsData.directDebits().length > 0;
            };
            $scope.standingOrdersPresent = function() {
                return paymentsData.standingOrders().length > 0;
            };
            $scope.cardPaymentsPresent = function() {
                return paymentsData.cardPayments().length > 0;
            };
            $scope.displayNoDDYetSentence = function() {
                return $scope.noPaymentsYet() && $scope.directDebitsPresent();
            };
            $scope.displayStartDirectDebitSentence = function() {
                return ($scope.standingOrdersPresent() || $scope.cardPaymentsPresent()) && !$scope.directDebitsPresent();
            };
            $scope.previousAmount = function(payment) {
                $scope.copy = angular.copy(payment);
                return $scope.copy.amount;
            };
            closeOtherDrawers = function() {
                var theOpenOne;
                if ($scope.currentlyOpen != null) {
                    theOpenOne = $scope.currentlyOpen;
                    $scope.closeNewDdDrawer(theOpenOne);
                    return $scope.closeEditDdDrawer(theOpenOne);
                }
            };
            resetPaymentAmountIfNeeded = function(payment) {
                if (($scope.currentAmount != null) && (parseInt(payment.amount) !== parseInt($scope.currentAmount))) {
                    return payment.amount = parseInt($scope.currentAmount);
                }
            };
            $scope.isShowingADrawer = function(payment) {
                return payment.showNewDdDrawer || payment.showEditDdDrawer;
            };
            $scope.closeNewDdDrawer = function(payment) {
                $scope.bankDetailsUpdateManager.reset();
                payment.showNewDdDrawer = '';
                payment.amount = 0;
                return $scope.currentlyOpen = null;
            };
            $scope.openNewDdDrawer = function(payment) {
                if (payment !== $scope.currentlyOpen) {
                    closeOtherDrawers();
                    payment.showNewDdDrawer = 'open';
                    $scope.currentlyOpen = payment;
                    return $scope.previousAmountValue = $scope.previousAmount(payment);
                }
            };
            $scope.closeEditDdDrawer = function(payment) {
                resetPaymentAmountIfNeeded(payment);
                $scope.currentAmount = null;
                payment.showEditDdDrawer = false;
                return $scope.currentlyOpen = null;
            };
            $scope.openEditDdDrawer = function(payment) {
                if (payment !== $scope.currentlyOpen) {
                    closeOtherDrawers();
                    $scope.currentAmount = payment.amount;
                    payment.showEditDdDrawer = 'open';
                    return $scope.currentlyOpen = payment;
                }
            };
            $scope.displayCancelConfirmation = function(payment) {
                var modalInstance;
                resetPaymentAmountIfNeeded(payment);
                return modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'cancel_payment_confirmation_modal.html',
                    controller: 'CancelDirectDebitConfirmationModalCtrl',
                    backdrop: 'static',
                    size: 'dialog-payment',
                    resolve: {
                        thisPayment: function() {
                            return payment;
                        },
                        upcomingDirectDebits: function() {
                            return $scope.upcomingDirectDebits;
                        },
                        nextChargeDateAfter: function() {
                            return $scope.nextChargeDateAfter;
                        },
                        nextChargeDateEquals: function() {
                            return $scope.nextChargeDateEquals;
                        },
                        nextChargeDateUndetermined: function() {
                            return $scope.nextChargeDateUndetermined;
                        }
                    }
                });
            };
            $scope.displayNewDirectDebitCompletion = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'direct_debit_completion_modal.html',
                    controller: 'NewDirectDebitCompletionModalCtrl',
                    backdrop: 'static',
                    size: 'dialog-payment',
                    resolve: {
                        upcomingDirectDebits: function() {
                            return $scope.upcomingDirectDebits;
                        }
                    }
                });
            };
            $scope.canSubmit = function(payment) {
                return (payment.dayOfMonth != null) && payment.confirmAuthorisation && payment.amount > 0;
            };
            $scope.submit = function(payment) {
                var modalInstance;
                if ($scope.canSubmit(payment)) {
                    return modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'dd_form_submitted_modal.html',
                        controller: 'DirectDebitSubmitModalController',
                        backdrop: 'static',
                        size: 'dialog-payment',
                        resolve: {
                            thisPayment: function() {
                                return payment;
                            },
                            getDirectDebitTotal: function() {
                                return getDirectDebitTotal;
                            },
                            previousAmount: function() {
                                return $scope.previousAmountValue;
                            },
                            isDdUpdate: function() {
                                return false;
                            },
                            bankDetailsUpdateManager: function() {
                                return $scope.bankDetailsUpdateManager;
                            },
                            upcomingDirectDebits: function() {
                                return $scope.upcomingDirectDebits;
                            },
                            nextChargeDateAfter: function() {
                                return $scope.nextChargeDateAfter;
                            },
                            nextChargeDateEquals: function() {
                                return $scope.nextChargeDateEquals;
                            },
                            nextChargeDateUndetermined: function() {
                                return $scope.nextChargeDateUndetermined;
                            }
                        }
                    });
                }
            };
            $scope.openEditBankAccount = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'edit_bank_account_modal.html',
                    controller: 'EditBankAccountModalCtrl',
                    backdrop: 'static',
                    size: 'md',
                    resolve: {
                        bankDetailsUpdateManager: function() {
                            return $scope.bankDetailsUpdateManager;
                        }
                    }
                });
            };
            $scope.canSubmitUpdatedAmount = function(payment) {
                return (payment.amount != null) && payment.amount > 0 && parseInt(payment.amount) !== parseInt($scope.currentAmount);
            };
            $scope.submitUpdatedAmount = function(payment) {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'dd_form_submitted_modal.html',
                    controller: 'DirectDebitSubmitModalController',
                    backdrop: 'static',
                    size: 'dialog-payment',
                    resolve: {
                        thisPayment: function() {
                            return payment;
                        },
                        getDirectDebitTotal: function() {
                            return getDirectDebitTotal;
                        },
                        previousAmount: function() {
                            return $scope.currentAmount;
                        },
                        isDdUpdate: function() {
                            return true;
                        },
                        bankDetailsUpdateManager: function() {
                            return $scope.bankDetailsUpdateManager;
                        },
                        upcomingDirectDebits: function() {
                            return $scope.upcomingDirectDebits;
                        },
                        nextChargeDateAfter: function() {
                            return $scope.nextChargeDateAfter;
                        },
                        nextChargeDateEquals: function() {
                            return $scope.nextChargeDateEquals;
                        },
                        nextChargeDateUndetermined: function() {
                            return $scope.nextChargeDateUndetermined;
                        }
                    }
                });
            };
            return $scope.init();
        }
    ]).controller('CancelDirectDebitConfirmationModalCtrl', [
        "$scope", "$modalInstance", "$http", "thisPayment", "upcomingDirectDebits", "nextChargeDateAfter", "nextChargeDateEquals", "nextChargeDateUndetermined",
        function($scope, $modalInstance, $http, thisPayment, upcomingDirectDebits, nextChargeDateAfter, nextChargeDateEquals, nextChargeDateUndetermined) {
            $scope.init = (function() {
                $scope.payment = thisPayment;
                $scope.paymentTypeLabel = "your Direct Debit";
                $scope.upcomingDirectDebits = upcomingDirectDebits;
                $scope.nextChargeDateAfter = nextChargeDateAfter;
                $scope.nextChargeDateEquals = nextChargeDateEquals;
                return $scope.nextChargeDateUndetermined = nextChargeDateUndetermined;
            });
            $scope.modalClose = function() {
                return $modalInstance.close();
            };
            $scope.shouldShowDdCancelWarnings = function() {
                return $scope.nextChargeDateAfter || $scope.nextChargeDateEquals || $scope.nextChargeDateUndetermined;
            };
            $scope.confirmCancellation = function() {
                return $http({
                    method: 'POST',
                    dataType: 'json',
                    url: '/client/monthly-payments/cancel',
                    headers: {
                        'X-CSRF-Token': formToken,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        dd_uuid: $scope.payment.uuid
                    }
                }).success(function(data, status, headers, config) {
                    return window.location = "/client/monthly-payments?dd_cancelled_result=success&fund_name=" + $scope.payment.fundData.name;
                }).error(function(data, status, headers, config) {
                    return window.location = '/client/monthly-payments?dd_cancelled_result=failure';
                });
            };
            return $scope.init();
        }
    ]).controller("EmployeeContributionsController", [
        "$scope", "$rootScope", "paymentsData", "$modal", "$filter",
        function($scope, $rootScope, paymentsData, $http, $modal, $filter) {
            $scope.init = (function() {
                return $scope.payments = _.map(paymentsData.employeeContributions(), function(payment) {
                    return payment;
                });
            });
            $scope.shouldShow = function() {
                return $scope.payments.length > 0;
            };
            return $scope.init();
        }
    ]).controller("StandingOrdersController", [
        "$scope", "$rootScope", "paymentsData", "allowChangingBankAccount", "daysGenerator", "BankDetailsUpdateManager", "UpcomingDirectDebits", "$http", "$modal", "$filter",
        function($scope, $rootScope, paymentsData, allowChangingBankAccount, daysGenerator, BankDetailsUpdateManager, UpcomingDirectDebits, $http, $modal, $filter) {
            var setupBankDetailsData;
            $scope.init = (function() {
                $scope.ddDays = daysGenerator(1, 28);
                $scope.currentlyOpen = null;
                $scope.upcomingDirectDebits = new UpcomingDirectDebits(upcomingDirectDebitPayments);
                $scope.nextChargeDateAfter = nextChargeDateAfter;
                $scope.nextChargeDateEquals = nextChargeDateEquals;
                $scope.nextChargeDateUndetermined = nextChargeDateUndetermined;
                setupBankDetailsData(accountNumber, accountSortCode, accountName, accountNickname);
                $scope.directDebits = _.sum(paymentsData.directDebits(), function(payment) {
                    return payment.amount;
                });
                $scope.ddPaymentDay = _.chain(paymentsData.directDebits()).pluck('dayOfMonth').filter(function(day) {
                    return day != null;
                }).uniq().first().value();
                $scope.payments = _.map(paymentsData.standingOrders(), function(payment) {
                    var thisPayment;
                    thisPayment = payment;
                    if ($scope.directDebits > 0) {
                        thisPayment.confirmAuthorisation = true;
                        thisPayment.dayOfMonth = $scope.ddPaymentDay;
                    }
                    return thisPayment;
                });
                return $scope.totalValue = _.chain($scope.payments).filter(function(payment) {
                    return payment.amount != null;
                }).reduce(function(accumulator, payment) {
                    return accumulator + parseInt(payment.amount);
                }, 0).value();
            });
            setupBankDetailsData = function(accountNumber, accountSortCode, accountName, accountNickname) {
                $scope.allowChangingBankAccount = allowChangingBankAccount;
                $scope.bankDetailsUpdateManager = new BankDetailsUpdateManager(accountNumber, accountSortCode, accountName, accountNickname);
                return $scope.$watch((function() {
                    return $scope.bankDetailsUpdateManager.hasChanged();
                }), (function() {
                    $rootScope.accountName = $scope.bankDetailsUpdateManager.accountData.accountName;
                    $rootScope.accountNickname = $scope.bankDetailsUpdateManager.accountData.accountNickname;
                    $rootScope.accountSortCode = $scope.bankDetailsUpdateManager.accountData.accountSortCode;
                    return $rootScope.accountNumber = $scope.bankDetailsUpdateManager.accountData.accountNumber;
                }));
            };
            $scope.shouldShow = function() {
                return $scope.payments.length > 0;
            };
            $scope.openDrawer = function(payment) {
                if (payment !== $scope.currentlyOpen) {
                    if ($scope.currentlyOpen != null) {
                        $scope.closeDrawer($scope.currentlyOpen, false);
                    }
                    $scope.editing = true;
                    $scope.copy = angular.copy($scope.payments);
                    payment.showDrawer = 'open';
                    return $scope.currentlyOpen = payment;
                }
            };
            $scope.closeDrawer = function(payment, withCopy) {
                if (withCopy == null) {
                    withCopy = true;
                }
                $scope.bankDetailsUpdateManager.reset();
                $scope.editing = false;
                if (withCopy) {
                    $scope.payments = $scope.copy;
                }
                payment.showDrawer = '';
                return $scope.currentlyOpen = null;
            };
            $scope.showTotal = function() {
                return $scope.payments.length > 1;
            };
            $scope.canSubmit = function(payment, mandate) {
                if (mandate === 'withMandate') {
                    return payment.amount > 0;
                } else {
                    return (payment.dayOfMonth != null) && payment.confirmAuthorisation && payment.amount > 0;
                }
            };
            $scope.submit = function(payment) {
                var modalInstance;
                if ($scope.canSubmit(payment)) {
                    return modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'dd_form_submitted_modal.html',
                        controller: 'DirectDebitSubmitModalController',
                        backdrop: 'static',
                        size: 'dialog-payment',
                        resolve: {
                            thisPayment: function() {
                                return payment;
                            },
                            previousAmount: function() {
                                return 0;
                            },
                            isDdUpdate: function() {
                                return false;
                            },
                            bankDetailsUpdateManager: function() {
                                return $scope.bankDetailsUpdateManager;
                            },
                            upcomingDirectDebits: function() {
                                return $scope.upcomingDirectDebits;
                            },
                            nextChargeDateAfter: function() {
                                return $scope.nextChargeDateAfter;
                            },
                            nextChargeDateEquals: function() {
                                return $scope.nextChargeDateEquals;
                            },
                            nextChargeDateUndetermined: function() {
                                return $scope.nextChargeDateUndetermined;
                            }
                        }
                    });
                }
            };
            $scope.openEditBankAccount = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'edit_bank_account_modal.html',
                    controller: 'EditBankAccountModalCtrl',
                    backdrop: 'static',
                    size: 'md',
                    resolve: {
                        bankDetailsUpdateManager: function() {
                            return $scope.bankDetailsUpdateManager;
                        }
                    }
                });
            };
            return $scope.init();
        }
    ]).controller('DirectDebitSubmitModalController', [
        "$scope", "$modalInstance", "thisPayment", "getDirectDebitTotal", "previousAmount", "$http", "isDdUpdate", "bankDetailsUpdateManager", "upcomingDirectDebits", "nextChargeDateAfter", "nextChargeDateEquals", "nextChargeDateUndetermined",
        function($scope, $modalInstance, thisPayment, getDirectDebitTotal, previousAmount, $http, isDdUpdate, bankDetailsUpdateManager, upcomingDirectDebits, nextChargeDateAfter, nextChargeDateEquals, nextChargeDateUndetermined) {
            var buildApiEndpointInfo, calculateTotal, pageReload;
            $scope.init = function() {
                $scope.isDdUpdate = isDdUpdate;
                $scope.payment = thisPayment;
                $scope.previousAmount = previousAmount;
                $scope.totalDD = calculateTotal();
                $scope.isConfirmDisabled = false;
                $scope.paymentUuid = thisPayment.uuid;
                $scope.apiEndpoint = buildApiEndpointInfo();
                $scope.bankDetailsUpdateManager = bankDetailsUpdateManager;
                $scope.upcomingDirectDebits = upcomingDirectDebits;
                $scope.nextChargeDateAfter = nextChargeDateAfter;
                $scope.nextChargeDateEquals = nextChargeDateEquals;
                return $scope.nextChargeDateUndetermined = nextChargeDateUndetermined;
            };
            calculateTotal = function() {
                var total;
                total = getDirectDebitTotal + parseInt($scope.payment.amount);
                if ($scope.isDdUpdate) {
                    total -= parseInt($scope.previousAmount);
                }
                return total;
            };
            pageReload = function(show_new_direct_debit_completion_modal) {
                if (show_new_direct_debit_completion_modal) {
                    return window.location = '/client/monthly-payments?new-direct-debit=success';
                } else {
                    return window.location = '/client/monthly-payments';
                }
            };
            buildApiEndpointInfo = function() {
                if ($scope.isDdUpdate && ($scope.paymentUuid != null)) {
                    return {
                        method: 'PATCH',
                        path: "/client/direct_debits/" + $scope.paymentUuid
                    };
                } else {
                    return {
                        method: 'POST',
                        path: '/client/monthly-payments'
                    };
                }
            };
            $scope.modalClose = function() {
                return $modalInstance.close();
            };
            $scope.shouldShowUpdateWarnings = function() {
                return $scope.isDdUpdate && ($scope.nextChargeDateAfter || $scope.nextChargeDateEquals || $scope.nextChargeDateUndetermined);
            };
            $scope.shouldShowNewDirectDebitInfo = function() {
                return !$scope.isDdUpdate;
            };
            $scope.ddMandatePdfCustomizationParams = function() {
                var data;
                if ($scope.bankDetailsUpdateManager.hasChanged()) {
                    data = $scope.bankDetailsUpdateManager.accountData;
                    return "?accountNumber=" + data.accountNumber + "&sortCode=" + data.accountSortCode;
                } else {
                    return null;
                }
            };
            $scope.confirm = function() {
                $scope.isConfirmDisabled = true;
                return $http({
                    method: $scope.apiEndpoint.method,
                    url: $scope.apiEndpoint.path,
                    headers: {
                        'X-CSRF-Token': formToken,
                        'Content-Type': 'application/json',
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    data: {
                        fund_uuid: $scope.payment.fundData.uuid,
                        amount: $scope.payment.amount,
                        day_of_month: $scope.payment.dayOfMonth || $scope.ddPaymentDay,
                        confirm_authorisation: $scope.payment.confirmAuthorisation,
                        bank_detail_request: $scope.bankDetailsUpdateManager.toPayload()
                    }
                }).success(function(data, status, headers, config) {
                    return pageReload($scope.shouldShowNewDirectDebitInfo());
                }).error(function(data, status, headers, config) {
                    return pageReload(false);
                });
            };
            return $scope.init();
        }
    ]).controller('NewDirectDebitCompletionModalCtrl', [
        "$scope", "$modalInstance", "upcomingDirectDebits",
        function($scope, $modalInstance, upcomingDirectDebits) {
            $scope.init = function() {
                return $scope.upcomingDirectDebits = upcomingDirectDebits;
            };
            $scope.shouldShowFirstPaymentDate = function() {
                return $scope.upcomingDirectDebits && $scope.upcomingDirectDebits.any();
            };
            $scope.modalClose = function() {
                return $modalInstance.close();
            };
            return $scope.init();
        }
    ]);

}).call(this);
(function() {
    angular.module("app.oneOffPaymentsPage", ["ui.bootstrap", "puElasticInput", "ngTouch", "app.SharedFilters", "app.SharedHelpers"]).controller("PaymentsController", [
        "$scope", "$http", "$modal", "$filter",
        function($scope, $http, $modal, $filter) {
            var buildModalPayload, bypassCardFundingCheck, deselectCard, emptyCardNumberFakeInput, fillCardNumberFakeInput, getFundGoalType, getFundName, paymentAmount, selectCard, stripeHandler, switchTo, updateCardData;
            $scope.init = (function() {
                var ref;
                $scope.cardAmountLimitK = 50;
                $scope.cardAmountLimit = $scope.cardAmountLimitK * 1000;
                $scope.isMobileDevice = domVariables.isMobileDevice;
                $scope.isaTransferAllowed = !domVariables.onlineIsaTransfer;
                $scope.funds = domVariables.activeFunds;
                $scope.noFundsAvailable = _.isEmpty($scope.funds);
                $scope.payment = {
                    fund_uuid: (ref = $scope.funds[0]) != null ? ref.uuid : void 0,
                    amount: null
                };
                $scope.stripeCardToken = null;
                $scope.cardData = {
                    brand: "",
                    funding: null,
                    last4: ""
                };
                $scope.currentBoxContent = 'card';
                $scope.existingCard = domVariables.existingCard;
                if ($scope.existingCard != null) {
                    $scope.switchCardUiToList();
                } else {
                    $scope.switchCardUiToInput();
                }
                emptyCardNumberFakeInput();
                return $scope.$watch((function() {
                    return $scope.payment.amount;
                }), function() {
                    if ($scope.cardNotAllowed()) {
                        if (!$scope.isMobileDevice) {
                            return $scope.switchToBankTransfer();
                        } else {
                            return $scope.payment.amount = 50000;
                        }
                    }
                });
            });
            fillCardNumberFakeInput = function() {
                var number;
                number = $scope.cardData.last4 || '****';
                return $scope.obfuscatedCardNumber = "**** **** **** " + number;
            };
            emptyCardNumberFakeInput = function() {
                return $scope.obfuscatedCardNumber = "";
            };
            updateCardData = function(cardData) {
                $scope.cardData.funding = cardData.funding;
                if ($scope.isCardFundingAllowed()) {
                    $scope.cardData.brand = cardData.brand;
                    $scope.cardData.last4 = cardData.last4;
                    return fillCardNumberFakeInput();
                } else {
                    return emptyCardNumberFakeInput();
                }
            };
            getFundName = function(uuid) {
                return _.find($scope.funds, function(fund) {
                    return fund.uuid === uuid;
                }).name;
            };
            getFundGoalType = function(uuid) {
                return _.find($scope.funds, function(fund) {
                    return fund.uuid === uuid;
                }).goal_type;
            };
            paymentAmount = function() {
                return parseIntegerValue($scope.payment.amount);
            };
            stripeHandler = StripeCheckout.configure({
                key: domVariables.stripePublicKey,
                name: "Nutmeg",
                description: "Enter debit card and postcode",
                panelLabel: "Use this card",
                email: domVariables.userEmail,
                allowRememberMe: false,
                image: domVariables.imageUrl,
                zipCode: true,
                token: function(token) {
                    return $scope.$apply(function() {
                        updateCardData(token.card);
                        return $scope.stripeCardToken = token.id;
                    });
                }
            });
            $scope.switchCardUiToInput = function() {
                deselectCard();
                return $scope.currentCardSelectionMethod = 'card_input';
            };
            $scope.switchCardUiToList = function() {
                selectCard();
                return $scope.currentCardSelectionMethod = 'card_list';
            };
            $scope.isCardUiShowing = function(type) {
                return $scope.currentCardSelectionMethod === type;
            };
            deselectCard = function() {
                return $scope.selectedExistingCard = null;
            };
            selectCard = function() {
                return $scope.selectedExistingCard = $scope.existingCard;
            };
            $scope.isShowingCard = function() {
                return $scope.currentBoxContent === 'card';
            };
            $scope.isShowingBankTransfer = function() {
                return $scope.currentBoxContent === 'bank_transfer';
            };
            $scope.isShowingIsaTransfer = function() {
                return $scope.currentBoxContent === 'isa_transfer';
            };
            switchTo = function(payment_type) {
                return $scope.currentBoxContent = payment_type;
            };
            $scope.switchToCard = function() {
                return switchTo('card');
            };
            $scope.switchToBankTransfer = function() {
                return switchTo('bank_transfer');
            };
            $scope.switchToIsaTransfer = function() {
                return switchTo('isa_transfer');
            };
            $scope.cardNotAllowed = function() {
                return paymentAmount() > $scope.cardAmountLimit;
            };
            $scope.selectedFundName = function() {
                return getFundName($scope.payment.fund_uuid);
            };
            $scope.selectedFundGoalType = function() {
                return getFundGoalType($scope.payment.fund_uuid);
            };
            $scope.cardIsNotDebitCard = function() {
                return ($scope.cardData.funding != null) && $scope.cardData.funding !== "debit";
            };
            bypassCardFundingCheck = function() {
                return false;
            };
            $scope.isCardFundingAllowed = function() {
                return !$scope.cardIsNotDebitCard() || bypassCardFundingCheck();
            };
            $scope.openStripeCheckout = function() {
                return stripeHandler.open();
            };
            $scope.canSubmit = function() {
                var isCardValid, isPaymentValid;
                isPaymentValid = $scope.payment.fund_uuid && ($scope.payment.amount != null) && $scope.payment.amount > 0;
                isCardValid = ($scope.isCardUiShowing('card_input') ? ($scope.stripeCardToken != null) && $scope.isCardFundingAllowed() : ($scope.selectedExistingCard != null) && ($scope.selectedExistingCard.uuid != null));
                return isPaymentValid && isCardValid && !$scope.cardNotAllowed();
            };
            $scope.resetForm = function() {
                emptyCardNumberFakeInput();
                $scope.payment.amount = null;
                $scope.stripeCardToken = null;
                return deselectCard();
            };
            buildModalPayload = function() {
                var payload, paymentData;
                paymentData = $scope.payment;
                paymentData.fund_name = getFundName(paymentData.fund_uuid);
                payload = {
                    paymentData: function() {
                        return paymentData;
                    },
                    stripeCardToken: function() {
                        return null;
                    },
                    existingCardUuid: function() {
                        return null;
                    },
                    cardNumberLast4: function() {
                        return null;
                    }
                };
                if ($scope.isCardUiShowing('card_input')) {
                    payload.stripeCardToken = function() {
                        return $scope.stripeCardToken;
                    };
                    payload.cardNumberLast4 = function() {
                        return $scope.cardData.last4;
                    };
                } else {
                    payload.existingCardUuid = function() {
                        return $scope.selectedExistingCard.uuid;
                    };
                    payload.cardNumberLast4 = function() {
                        return $scope.selectedExistingCard.last4;
                    };
                }
                return payload;
            };
            $scope.submit = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'stripe_new_card_payment_confirm_modal.html',
                    controller: 'StripeNewCardPaymentConfirmModalController',
                    backdrop: 'static',
                    size: 'dialog-payment',
                    resolve: buildModalPayload()
                });
            };
            return $scope.init();
        }
    ]).controller("StripeNewCardPaymentConfirmModalController", [
        "$scope", "$http", "$modalInstance", "paymentData", "stripeCardToken", "existingCardUuid", "cardNumberLast4",
        function($scope, $http, $modalInstance, paymentData, stripeCardToken, existingCardUuid, cardNumberLast4) {
            $scope.isConfirmDisabled = false;
            $scope.payment = paymentData;
            $scope.stripeCardToken = stripeCardToken;
            $scope.existingCardUuid = existingCardUuid;
            $scope.cardNumber = "**** **** **** " + cardNumberLast4;
            $scope.modalClose = function() {
                return $modalInstance.close();
            };
            return $scope.confirm = function() {
                var payload;
                $scope.isConfirmDisabled = true;
                payload = {
                    fund_uuid: $scope.payment.fund_uuid,
                    amount: $scope.payment.amount,
                    stripe_token: $scope.stripeCardToken,
                    card_uuid: $scope.existingCardUuid
                };
                return $http({
                    method: 'POST',
                    dataType: 'json',
                    url: '/client/cards/create_payment',
                    headers: {
                        'X-CSRF-Token': domVariables.formToken,
                        'Content-Type': 'application/json'
                    },
                    data: payload
                }).success(function(data, status, headers, config) {
                    return window.location = "/client/portfolio?stripe_payment_result=success&amount=" + payload['amount'];
                }).error(function(data, status, headers, config) {
                    return window.location = "/client/pay-in-now";
                });
            };
        }
    ]);

}).call(this);
(function() {
    angular.module("app.shared").controller('ListRecentActivitiesCtrl', [
        '$rootScope',
        function($rootScope) {
            $rootScope.activityPanelOpened = false;
            return $rootScope.toggleActivityPanel = function() {
                return $rootScope.activityPanelOpened = !$rootScope.activityPanelOpened;
            };
        }
    ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document.getElementsByClassName('recent-activities'), ['app.shared']);
    });

}).call(this);
(function() {
    angular.module('app.saveFund', ['ui.bootstrap']).controller('SaveFundController', [
        '$scope', '$rootScope', '$modal',
        function($scope, $rootScope, $modal) {
            $scope.init = function() {
                return $rootScope.$on('show-save-fund', function(event) {
                    return $scope.openSaveFundModal();
                });
            };
            $scope.openSaveFundModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: 'fade',
                    backdrop: 'static',
                    templateUrl: 'signup_save_fund_modal.html',
                    controller: 'SaveFundModalController',
                    resolve: {
                        signup: function() {
                            return domVariables.prospect;
                        }
                    }
                });
            };
            return $scope.init();
        }
    ]).controller('SaveFundModalController', [
        '$scope', '$rootScope', '$http', '$modalInstance', 'signup',
        function($scope, $rootScope, $http, $modalInstance, signup) {
            $scope.init = function() {
                $scope.signup = signup;
                $scope.submitted = false;
                $scope.isButtonDisabled = false;
                return $scope.isSaved = false;
            };
            $scope.showEmailError = function() {
                return $scope.submitted && $scope.saveFundForm.email.$invalid;
            };
            $scope.saveDetails = function() {
                var saveData;
                $scope.isButtonDisabled = true;
                saveData = {
                    f: $rootScope.fund,
                    frl: $rootScope.fundRiskLevel,
                    mp: $rootScope.monthlyPayment,
                    ls: $rootScope.lumpSum
                };
                if ($rootScope.fund.selectedGoalType === 'pension') {
                    saveData.p = $rootScope.pension;
                }
                return $http({
                    method: 'POST',
                    url: '/client/sign-up',
                    headers: {
                        'X-CSRF-Token': domVariables.formToken,
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: {
                        email: $scope.signup.email,
                        marketing: $scope.signup.marketing,
                        type: $scope.signupTypes.selected(),
                        s: saveData
                    }
                }).success(function(data, status, headers, config) {
                    return $scope.isSaved = true;
                }).error(function(data, status, headers, config) {
                    $scope.signup.existingUser = true;
                    return $scope.isButtonDisabled = false;
                });
            };
            $scope.validateEmail = function() {
                $scope.submitted = true;
                $scope.signup.existingUser = false;
                if ($scope.saveFundForm.email.$valid) {
                    return $scope.saveDetails();
                }
            };
            $scope.closeSaveFundModal = function() {
                return $modalInstance.close();
            };
            return $scope.init();
        }
    ]);

}).call(this);
(function() {
    angular.module('app.signupPage', ['app.Funds', 'app.emailCapture', 'app.userRegistration', 'app.saveFund', 'app.WelcomePresentation']).controller('SignupProcessController', [
        '$scope', '$rootScope', 'SignupTypes',
        function($scope, $rootScope, SignupTypes) {
            $scope.init = function() {
                $rootScope.signupTypes = new SignupTypes(domVariables.allowPension);
                $rootScope.signupTypes.select(domVariables.signupType);
                $scope.signup = domVariables.prospect;
                $scope.saved = domVariables.saved;
                $scope.showPresentationModal = domVariables.showPresentationModal;
                if ($scope.showPresentationModal) {
                    $rootScope.$emit('show-presentation-modal');
                } else if ($scope.signup.valid) {
                    if (!$scope.saved) {
                        $rootScope.$emit('show-fund-options');
                    }
                } else {
                    $rootScope.$emit('show-email-capture');
                }
                $rootScope.$on('email-capture-complete', function(event) {
                    return $rootScope.$emit('show-fund-options');
                });
                $rootScope.$on('fund-illustration-complete', function(event) {
                    return $rootScope.$emit('show-registration-details');
                });
                $rootScope.$on('user-registration-complete', function(event, url) {
                    return window.location = url;
                });
                return $rootScope.$on('presentation-modal-complete', function(event) {
                    return $rootScope.$emit('show-fund-options');
                });
            };
            return $scope.init();
        }
    ]);

}).call(this);
(function() {
    angular.module('app.userRegistration', ['ui.bootstrap', 'app.validation']).controller('UserRegistrationController', [
        '$scope', '$rootScope', '$modal',
        function($scope, $rootScope, $modal) {
            $scope.init = function() {
                return $rootScope.$on('show-registration-details', function(event) {
                    return $scope.openRegistrationModal();
                });
            };
            $scope.openRegistrationModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: 'fade',
                    backdrop: 'static',
                    size: 'lg',
                    templateUrl: 'signup_user_registration_modal.html',
                    controller: 'RegistrationDetailsModalController',
                    resolve: {
                        signup: function() {
                            return domVariables.prospect;
                        }
                    }
                });
            };
            return $scope.init();
        }
    ]).controller('RegistrationDetailsModalController', [
        '$scope', '$rootScope', '$http', '$modalInstance', 'signup', 'validationPatterns',
        function($scope, $rootScope, $http, $modalInstance, signup, validationPatterns) {
            var buildRequestData;
            $scope.init = function() {
                $scope.signup = signup;
                $scope.submitted = false;
                $scope.isButtonDisabled = false;
                $scope.validationPatterns = validationPatterns;
                return $scope.canSubmitForm = true;
            };
            $scope.showEmailError = function() {
                return $scope.submitted && $scope.signupForm.email.$invalid;
            };
            $scope.showPasswordError = function() {
                return $scope.submitted && $scope.signupForm.password.$invalid;
            };
            $scope.saveRegistration = function() {
                $scope.isButtonDisabled = true;
                return $http({
                    method: 'POST',
                    url: '/auth/users/register',
                    headers: {
                        'X-CSRF-Token': domVariables.formToken,
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: buildRequestData()
                }).success(function(data, status, headers, config) {
                    $scope.closeRegistrationDetailsModal();
                    return $rootScope.$emit('user-registration-complete', data.url);
                }).error(function(data, status, headers, config) {
                    $scope.signup.existingUser = true;
                    return $scope.isButtonDisabled = false;
                });
            };
            $scope.userNotUsingWorkEmail = function() {
                return $scope.canSubmitForm = $scope.signup.email.toLowerCase() !== domVariables.usersWorkEmail.toLowerCase();
            };
            $scope.validateDetails = function() {
                $scope.submitted = true;
                $scope.signup.existingUser = false;
                if ($scope.signupForm.$valid && $scope.userNotUsingWorkEmail()) {
                    return $scope.saveRegistration();
                }
            };
            $scope.closeRegistrationDetailsModal = function() {
                return $modalInstance.close();
            };
            buildRequestData = function() {
                var requestData;
                requestData = {
                    user: {
                        email: $scope.signup.email,
                        password: $scope.signup.password
                    }
                };
                if ($rootScope.fund.selectedGoalType === 'pension') {
                    requestData.pension = {
                        timeframe: $rootScope.fund.fundTimeframe,
                        value_one_off: $rootScope.lumpSum,
                        one_off_tax_relief: $rootScope.pension.oneOffTaxRelief,
                        monthly_contributions: $rootScope.monthlyPayment,
                        monthly_tax_relief: $rootScope.pension.monthlyTaxRelief,
                        employer_contributions: $rootScope.pension.employerContribution,
                        risk_level: $rootScope.fundRiskLevel,
                        name: $rootScope.fund.fundName
                    };
                } else {
                    requestData.fund = {
                        goal_type: $rootScope.fund.selectedGoalType,
                        name: $rootScope.fund.fundName,
                        target: $rootScope.fund.fundTarget || 0,
                        timeframe: $rootScope.fund.fundTimeframe || 0,
                        lump_sum: $rootScope.lumpSum,
                        monthly_contributions: $rootScope.monthlyPayment,
                        risk_level: $rootScope.fundRiskLevel,
                        status: 'SAVED'
                    };
                }
                return requestData;
            };
            return $scope.init();
        }
    ]);

}).call(this);
(function() {
    angular.module("app.WelcomePresentation", []).controller("WelcomePresentationCtrl", [
        "$scope", "$rootScope", "$modal",
        function($scope, $rootScope, $modal) {
            $rootScope.openWelcomePresentationModal = function() {
                var modalInstance;
                return modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'welcome_presentation_modal.html',
                    controller: 'WelcomePresentationModalCtrl',
                    backdrop: 'static',
                    size: 'welcome-presentation'
                });
            };
            return $rootScope.$on('show-presentation-modal', function(event) {
                return $rootScope.openWelcomePresentationModal();
            });
        }
    ]).controller("WelcomePresentationModalCtrl", [
        "$scope", "$rootScope", "$modalInstance", "$modal",
        function($scope, $rootScope, $modalInstance, $modal) {
            $scope.slide = 1;
            $scope.totalSlides = 6;
            $scope.nextSlide = function() {
                return $scope.slide++;
            };
            $scope.prevSlide = function() {
                return $scope.slide--;
            };
            $scope.currentSlide = function(current) {
                return $scope.slide === current;
            };
            $scope.isFirstSlide = function() {
                return $scope.slide === 1;
            };
            $scope.isLastSlide = function() {
                return $scope.slide === $scope.totalSlides;
            };
            return $scope.closePresentationModal = function() {
                $modalInstance.close();
                return $rootScope.$emit('presentation-modal-complete');
            };
        }
    ]);

}).call(this);
(function() {
    angular.module("Withdrawals", ["ui.bootstrap", "ui.utils.masks", "localytics.directives", "app.SharedFilters"]).controller("NewWithdrawalCtrl", [
        "$scope", "$http",
        function($scope, $http) {
            $scope.currentStep = 1;
            $scope.userHasAnIsa = domVariables.userHasAnIsa;
            $scope.availableFunds = domVariables.availableFunds;
            $scope.allFunds = domVariables.allFunds;
            $scope.generalFunds = domVariables.generalFunds;
            $scope.withdrawAll = false;
            $scope.remainingAllowed = 1000;
            $scope.standardSpeedAmt = 0;
            $scope.expressSpeedAmt = 10;
            $scope.balanceToFund = false;
            $scope.transferBalance = false;
            $scope.paramsFundUuid = domVariables.paramsFundUuid;
            $scope.withdrawFromFund = {
                uuid: $scope.paramsFundUuid
            };
            $scope.$watch('withdrawFromFund', function() {
                $scope.withdrawalAmount = 0;
                return $scope.withdrawAll = false;
            });
            $scope.isCurrentStep = function(step) {
                return $scope.currentStep === step;
            };
            $scope.selectedFund = function() {
                var fund;
                fund = _.findLast($scope.availableFunds, function(fund) {
                    return fund.uuid === $scope.withdrawFromFund.uuid;
                });
                return fund;
            };
            $scope.selectedFundFrom = function() {
                var fund;
                fund = _.findLast($scope.generalFunds, function(fund) {
                    return fund.uuid === $scope.balanceToFund;
                });
                return fund;
            };
            $scope.availableValueBefore = function() {
                if ($scope.selectedFund()) {
                    return $scope.selectedFund().currentValue;
                } else {
                    return 0;
                }
            };
            $scope.availableValueAfter = function() {
                if ($scope.selectedFund()) {
                    return $scope.availableValueBefore() - ($scope.withdrawalAmount || 0);
                } else {
                    return 0;
                }
            };
            $scope.enableWithdrawAmountInput = function() {
                return $scope.selectedFund() && !$scope.withdrawAll;
            };
            $scope.$watch('withdrawAll', function() {
                if ($scope.withdrawAll && $scope.selectedFund()) {
                    return $scope.withdrawalAmount = $scope.selectedFund().currentValue;
                } else {
                    return $scope.withdrawalAmount = 0;
                }
            });
            $scope.$watch('withdrawalAmount', function() {
                if ($scope.withdrawalAmount && parseIntegerValue($scope.withdrawalAmount) >= parseIntegerValue($scope.availableValueBefore())) {
                    return $scope.withdrawAll = true;
                }
            });
            $scope.displayMinimumAmountOptions = function() {
                var ref;
                return (0 < (ref = $scope.availableValueAfter()) && ref < $scope.remainingAllowed);
            };
            $scope.leaveMinimumAmount = function() {
                if ($scope.selectedFund()) {
                    return $scope.selectedFund().currentValue - $scope.remainingAllowed;
                }
            };
            $scope.transferToAnotherFund = function() {
                return $scope.transferBalance = true;
            };
            $scope.withdrawFullAmount = function() {
                $scope.transferBalance = false;
                return $scope.withdrawAll = true;
            };
            $scope.adjustWithdrawAmount = function() {
                $scope.transferBalance = false;
                $scope.displaySuccessMsg = true;
                return $scope.withdrawalAmount = $scope.leaveMinimumAmount();
            };
            $scope.setWithdrawalSpeed = function(speed) {
                return $scope.withdrawSpeed = speed;
            };
            $scope.withdrawSpeedIs = function(speed) {
                return $scope.withdrawSpeed === speed;
            };
            $scope.withdrawalChargeAmount = function() {
                if ($scope.withdrawSpeedIs('standard')) {
                    return $scope.standardSpeedAmt;
                } else if ($scope.withdrawSpeedIs('express')) {
                    return $scope.expressSpeedAmt;
                }
            };
            $scope.expectedAmount = function() {
                return $scope.withdrawalAmount - $scope.withdrawalChargeAmount();
            };
            $scope.withdrawMoneyArrivingIn = function() {
                if ($scope.withdrawSpeedIs('standard')) {
                    return "Within 2 weeks";
                } else if ($scope.withdrawSpeedIs('express')) {
                    return "Around 1 week";
                }
            };
            $scope.lookForFundPayments = function() {
                return $http({
                    method: 'GET',
                    url: "/client/payments/" + ($scope.selectedFund().uuid) + "/payment",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function(data, status, headers, config) {
                    $scope.directDebit = data.direct_debit;
                    return $scope.hasInProgressPayment = data.has_in_progress_payment;
                }).error(function(data, status, headers, config) {
                    return false;
                });
            };
            $scope.goToNextStep = function() {
                $scope.currentStep++;
                if ($scope.isCurrentStep(3)) {
                    return $scope.lookForFundPayments();
                }
            };
            $scope.goToPrevStep = function() {
                return $scope.currentStep--;
            };
            return $scope.canSubmitStep = function() {
                if ($scope.isCurrentStep(1)) {
                    return $scope.selectedFund() && $scope.withdrawAll || ($scope.withdrawalAmount > 0 && $scope.availableValueAfter() >= $scope.remainingAllowed) || ($scope.transferBalance && $scope.balanceToFund);
                }
                if ($scope.isCurrentStep(2)) {
                    return $scope.withdrawSpeed;
                }
            };
        }
    ]);

}).call(this);
/**
 * no_asset_compression
 */

;