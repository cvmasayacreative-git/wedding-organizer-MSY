(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AdminApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AdminApp.tsx [app-client] (ecmascript)");
'use client';
;
;
function AdminPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AdminApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/AdminApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminDashboardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminDashboardSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/weddingData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/supabaseService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function AdminAppContent() {
    _s();
    const [weddingConfig, setWeddingConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_WEDDING_CONFIG"]);
    const [zones, setZones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ZONES"]);
    const [rundown, setRundown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNDOWN_TIMELINE"]);
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_LIST"]);
    const [vendors, setVendors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENDORS_LIST"]);
    const [activeFloor, setActiveFloor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('grand_ballroom');
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (msg)=>{
        setToastMessage(msg);
        setTimeout(()=>setToastMessage(null), 3500);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminAppContent.useEffect": ()=>{
            if (!isLoggedIn || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return;
            const loadFromCloud = {
                "AdminAppContent.useEffect.loadFromCloud": async ()=>{
                    try {
                        const [cloudConfig, cloudZones, cloudRundown, cloudGuests, cloudVendors] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWeddingConfigFromSupabase"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchZonesFromSupabase"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRundownFromSupabase"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGuestsFromSupabase"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVendorsFromSupabase"])()
                        ]);
                        if (cloudConfig) setWeddingConfig(cloudConfig);
                        if (cloudZones && cloudZones.length > 0) setZones(cloudZones);
                        if (cloudRundown && cloudRundown.length > 0) setRundown(cloudRundown);
                        if (cloudGuests && cloudGuests.length > 0) setGuests(cloudGuests);
                        if (cloudVendors && cloudVendors.length > 0) setVendors(cloudVendors);
                    } catch (err) {
                        console.warn('Admin Supabase fetch fallback to local data:', err);
                    }
                }
            }["AdminAppContent.useEffect.loadFromCloud"];
            loadFromCloud();
        }
    }["AdminAppContent.useEffect"], [
        isLoggedIn
    ]);
    const handleLogin = (e)=>{
        e.preventDefault();
        if (password === 'admin123') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Password salah. Silakan coba lagi.');
        }
    };
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#FAF7F2] dark:bg-[#121013] flex items-center justify-center p-4 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white dark:bg-[#1A161D] p-8 rounded-3xl border border-[#E5DACD] dark:border-[#2C242E] shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 text-[#B8860B] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminApp.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/AdminApp.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-serif font-bold text-center text-[#221A18] dark:text-[#FFF7EE] mb-2",
                        children: "Admin Login"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-center text-[#7B6E67] dark:text-[#A79890] mb-8",
                        children: "Silakan masukkan password untuk mengakses dashboard admin. (Password default: admin123)"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleLogin,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    placeholder: "Masukkan Password",
                                    className: "w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-[#2D2422] dark:text-white focus:ring-2 focus:ring-[#B8860B] outline-none",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminApp.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminApp.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-rose-500 text-xs font-semibold",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/AdminApp.tsx",
                                lineNumber: 101,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full py-3 rounded-xl bg-[#B8860B] hover:bg-[#9E7309] text-white font-bold transition-colors",
                                children: "Masuk"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminApp.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#865D36] dark:text-[#D4AF37] hover:underline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminApp.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                " Kembali ke Aplikasi Utama"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminApp.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminApp.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/AdminApp.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    // --- Zone Handlers ---
    const handleAddZone = (newZone)=>{
        const updated = [
            ...zones,
            newZone
        ];
        setZones(updated);
        showToast(`Zona baru "${newZone.name}" ditambahkan!`);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveZonesToSupabase"])(updated);
    };
    const handleUpdateZone = (updatedZone)=>{
        const updated = zones.map((z)=>z.id === updatedZone.id ? updatedZone : z);
        setZones(updated);
        showToast(`Zona "${updatedZone.name}" diperbarui.`);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveZonesToSupabase"])(updated);
    };
    const handleDeleteZone = (zoneId)=>{
        const updated = zones.filter((z)=>z.id !== zoneId);
        setZones(updated);
        showToast('Zona dihapus.');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteZoneFromSupabase"])(zoneId);
    };
    // --- Rundown Handlers ---
    const handleAddRundown = (newEvent)=>{
        const updated = [
            ...rundown,
            newEvent
        ];
        setRundown(updated);
        showToast('Rundown ditambahkan!');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRundownToSupabase"])(updated);
    };
    const handleUpdateRundown = (updatedEvent)=>{
        const updated = rundown.map((r)=>r.id === updatedEvent.id ? updatedEvent : r);
        setRundown(updated);
        showToast('Rundown diperbarui.');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRundownToSupabase"])(updated);
    };
    const handleDeleteRundown = (eventId)=>{
        const updated = rundown.filter((r)=>r.id !== eventId);
        setRundown(updated);
        showToast('Rundown dihapus.');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRundownFromSupabase"])(eventId);
    };
    // --- Guest Handlers ---
    const handleAddGuest = (newGuest)=>{
        const updated = [
            ...guests,
            newGuest
        ];
        setGuests(updated);
        showToast('Tamu ditambahkan!');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveGuestsToSupabase"])(updated);
    };
    const handleUpdateGuest = (updatedGuest)=>{
        const updated = guests.map((g)=>g.id === updatedGuest.id ? updatedGuest : g);
        setGuests(updated);
        showToast('Tamu diperbarui.');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveGuestsToSupabase"])(updated);
    };
    const handleDeleteGuest = (guestId)=>{
        const updated = guests.filter((g)=>g.id !== guestId);
        setGuests(updated);
        showToast('Tamu dihapus.');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteGuestFromSupabase"])(guestId);
    };
    // --- Vendor Handlers ---
    const handleAddVendor = (newVendor)=>{
        const updated = [
            ...vendors,
            newVendor
        ];
        setVendors(updated);
        showToast('Vendor ditambahkan!');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveVendorsToSupabase"])(updated);
    };
    const handleUpdateVendor = (updatedVendor)=>{
        const updated = vendors.map((v)=>v.id === updatedVendor.id ? updatedVendor : v);
        setVendors(updated);
        showToast('Vendor diperbarui.');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveVendorsToSupabase"])(updated);
    };
    const handleDeleteVendor = (vendorId)=>{
        const updated = vendors.filter((v)=>v.id !== vendorId);
        setVendors(updated);
        showToast('Vendor dihapus.');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteVendorFromSupabase"])(vendorId);
    };
    const handleUpdateWeddingConfig = (newCfg)=>{
        setWeddingConfig(newCfg);
        showToast('Informasi Pengantin berhasil disimpan!');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveWeddingConfigToSupabase"])(newCfg);
    };
    const handleResetAllData = ()=>{
        setWeddingConfig(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_WEDDING_CONFIG"]);
        setZones(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ZONES"]);
        setRundown(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNDOWN_TIMELINE"]);
        setGuests(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_LIST"]);
        setVendors(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$weddingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENDORS_LIST"]);
        showToast('Seluruh data di-reset ke default.');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FAF7F2] dark:bg-[#121013] text-[#2D2422] dark:text-[#F8F3ED] transition-colors relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white dark:bg-[#1A161D] border-b border-[#E5DACD] dark:border-[#2C242E] px-6 py-4 flex items-center justify-between sticky top-0 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "p-2 -ml-2 rounded-xl hover:bg-[#FAF7F2] dark:hover:bg-[#251E28] transition-colors text-[#7B6E67] dark:text-[#A79890]",
                                title: "Kembali ke Aplikasi Utama",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminApp.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminApp.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif font-bold text-xl text-[#221A18] dark:text-[#FFF7EE]",
                                        children: "Admin Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminApp.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-[#7B6E67] dark:text-[#A79890]",
                                        children: [
                                            weddingConfig.coupleName,
                                            " Wedding"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminApp.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminApp.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsLoggedIn(false),
                        className: "text-xs font-semibold px-4 py-2 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminApp.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminDashboardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDashboardSection"], {
                    weddingConfig: weddingConfig,
                    onUpdateWeddingConfig: handleUpdateWeddingConfig,
                    zones: zones,
                    onAddZone: handleAddZone,
                    onUpdateZone: handleUpdateZone,
                    onDeleteZone: handleDeleteZone,
                    rundown: rundown,
                    onAddRundown: handleAddRundown,
                    onUpdateRundown: handleUpdateRundown,
                    onDeleteRundown: handleDeleteRundown,
                    guests: guests,
                    onAddGuest: handleAddGuest,
                    onUpdateGuest: handleUpdateGuest,
                    onDeleteGuest: handleDeleteGuest,
                    vendors: vendors,
                    onAddVendor: handleAddVendor,
                    onUpdateVendor: handleUpdateVendor,
                    onDeleteVendor: handleDeleteVendor,
                    onResetAllData: handleResetAllData,
                    onSelectZoneOnMap: ()=>{},
                    activeFloor: activeFloor,
                    onChangeFloor: setActiveFloor
                }, void 0, false, {
                    fileName: "[project]/src/AdminApp.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminApp.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            toastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-black/85 text-white backdrop-blur-md shadow-2xl border border-white/20 text-xs font-medium flex items-center gap-2 animate-bounce",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4 text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toastMessage
                    }, void 0, false, {
                        fileName: "[project]/src/AdminApp.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminApp.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminApp.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s(AdminAppContent, "4iUk5Zc8f3xXLvEJnOIkNScX2KY=");
_c = AdminAppContent;
function AdminApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminAppContent, {}, void 0, false, {
            fileName: "[project]/src/AdminApp.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/AdminApp.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
_c1 = AdminApp;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdminAppContent");
__turbopack_context__.k.register(_c1, "AdminApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AdminDashboardSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDashboardSection",
    ()=>AdminDashboardSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloorPlanDesigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FloorPlanDesigner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/supabaseService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const AdminDashboardSection = ({ weddingConfig, onUpdateWeddingConfig, zones, onAddZone, onUpdateZone, onDeleteZone, rundown, onAddRundown, onUpdateRundown, onDeleteRundown, guests, onAddGuest, onUpdateGuest, onDeleteGuest, vendors, onAddVendor, onUpdateVendor, onDeleteVendor, onResetAllData, onSelectZoneOnMap, activeFloor, onChangeFloor })=>{
    _s();
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('designer');
    // Form states for Editing or Adding Zone
    const [editingZone, setEditingZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddingZone, setIsAddingZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form states for Editing or Adding Rundown Event
    const [editingRundown, setEditingRundown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddingRundown, setIsAddingRundown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form states for Editing or Adding Guest
    const [editingGuest, setEditingGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddingGuest, setIsAddingGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form states for Editing or Adding Vendor
    const [editingVendor, setEditingVendor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddingVendor, setIsAddingVendor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // General Wedding Config Local Draft
    const [configDraft, setConfigDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...weddingConfig
    });
    // Custom In-App Confirmation Modal State (replaces window.confirm which is blocked in iframes)
    const [confirmDialog, setConfirmDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Supabase Sync States
    const [isTestingSupabase, setIsTestingSupabase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [supabaseTestResult, setSupabaseTestResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSeedingSupabase, setIsSeedingSupabase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [supabaseSeedResult, setSupabaseSeedResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copiedEnv, setCopiedEnv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleTestConnection = async ()=>{
        setIsTestingSupabase(true);
        setSupabaseTestResult(null);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testSupabaseConnection"])();
        setSupabaseTestResult(res);
        setIsTestingSupabase(false);
    };
    const handleSeedAllData = async ()=>{
        setIsSeedingSupabase(true);
        setSupabaseSeedResult(null);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedAllDataToSupabase"])(weddingConfig, zones, rundown, guests, vendors);
        setSupabaseSeedResult(res);
        setIsSeedingSupabase(false);
    };
    const handleSaveConfig = (e)=>{
        e.preventDefault();
        onUpdateWeddingConfig(configDraft);
    };
    // Export JSON backup
    const handleExportJson = ()=>{
        const backupData = {
            weddingConfig,
            zones,
            rundown,
            guests,
            vendors,
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([
            JSON.stringify(backupData, null, 2)
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Wedding_Data_${weddingConfig.coupleName.replace(/\s+/g, '_')}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded-3xl bg-gradient-to-r from-[#2A2016] via-[#1E1721] to-[#121013] text-[#FAF7F2] border border-[#B8860B]/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider bg-[#B8860B] text-white flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " MASTER ADMIN CONTROL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-amber-200/80",
                                        children: "Hak akses penuh: Manajemen Pengantin, Denah Zona, Rundown, Tamu, & Vendor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl font-serif font-bold text-white",
                                children: "Pusat Pengaturan & Konfigurasi Acara"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-300 max-w-2xl",
                                children: "Semua perubahan di mode admin ini langsung memperbarui peta denah interaktif, perhitungan rasio katering, daftar meja tamu, dan monitor kru."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExportJson,
                                className: "px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Export Data Backup"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setConfirmDialog({
                                        title: 'Reset Seluruh Data Default',
                                        message: 'Yakin ingin mereset seluruh data kembali ke kondisi default hari-H? Perubahan yang belum di-backup akan dikembalikan ke setelan awal.',
                                        confirmText: 'Ya, Reset Data',
                                        onConfirm: onResetAllData
                                    });
                                },
                                className: "px-4 py-2.5 rounded-2xl bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 border border-rose-500/40 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reset Data Default"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E5DACD] dark:border-[#2C242E]",
                children: [
                    {
                        id: 'designer',
                        label: '📐 Studio Gambar Denah',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
                        badge: 'Visual Editor'
                    },
                    {
                        id: 'config',
                        label: '💍 Informasi Pengantin & Venue',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"]
                    },
                    {
                        id: 'zones',
                        label: `🗺️ Tabel Zona (${zones.length})`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                    },
                    {
                        id: 'rundown',
                        label: `⏱️ Master Rundown (${rundown.length})`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
                    },
                    {
                        id: 'guests',
                        label: `👥 Daftar Tamu & Kursi (${guests.length})`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                    },
                    {
                        id: 'vendors',
                        label: `📻 Vendor & Tim HT (${vendors.length})`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"]
                    },
                    {
                        id: 'supabase',
                        label: '⚡ Supabase & Vercel',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                        badge: 'Cloud DB'
                    }
                ].map((tab)=>{
                    const Icon = tab.icon;
                    const isActive = activeSubTab === tab.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveSubTab(tab.id),
                        className: `px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${isActive ? 'bg-[#B8860B] text-white shadow-md' : 'bg-white dark:bg-[#1E1921] text-[#6C5E56] dark:text-[#A79890] hover:bg-[#F2ECE1] dark:hover:bg-[#322738] border border-[#DFCFC0] dark:border-[#382C3D]'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            tab.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${isActive ? 'bg-white/20 text-white' : 'bg-[#FAF4ED] dark:bg-[#2A222D] text-[#B8860B]'}`,
                                children: tab.badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 222,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubTab === 'designer' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloorPlanDesigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloorPlanDesigner"], {
                zones: zones,
                onAddZone: onAddZone,
                onUpdateZone: onUpdateZone,
                onDeleteZone: onDeleteZone,
                activeFloor: activeFloor,
                onChangeFloor: onChangeFloor
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubTab === 'config' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSaveConfig,
                className: "p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]",
                                        children: "Informasi Pokok Pernikahan & Venue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#7B6E67] dark:text-[#A79890]",
                                        children: "Ubah identitas mempelai, tanggal hari-H, lokasi ballroom, dan fase aktif acara."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-5 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Simpan Perubahan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Nama Panggilan Pengantin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.coupleName,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                coupleName: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "Arya & Nadira",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Tanggal & Hari Acara"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.dateStr,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                dateStr: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "Sabtu, 24 Oktober 2026",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Nama Lengkap Pengantin Pria"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.groomName,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                groomName: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "Raden Arya Wirawan, B.Eng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Nama Lengkap Pengantin Wanita"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.brideName,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                brideName: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "Nadira Anindita, M.Ds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Nama Gedung / Hotel Venue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.venueName,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                venueName: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "The Grand Ballroom & Glasshouse Garden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Hall / Level Lokasi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.ballroomHall,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                ballroomHall: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "Level 2, Grand Hotel Kempinski Jakarta"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Fase Acara Sedang Berlangsung (Live Banner)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.activePhase,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                activePhase: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "Resepsi Sesi 1 (Dinner & Ramah Tamah)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Agenda Spesifik Terkini (Current Cue)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: configDraft.currentEvent,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                currentEvent: e.target.value
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none",
                                        placeholder: "Kirab Pengantin & Grand Toast"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Total Undangan Tersebar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: configDraft.totalGuests,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                totalGuests: Number(e.target.value)
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                        children: "Target Porsi Katering (Pax)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: configDraft.cateringPax,
                                        onChange: (e)=>setConfigDraft({
                                                ...configDraft,
                                                cateringPax: Number(e.target.value)
                                            }),
                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubTab === 'zones' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]",
                                        children: "Daftar & Penataan Zona Denah"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#7B6E67] dark:text-[#A79890]",
                                        children: "Tambah panggung baru, atur koordinat posisi di denah (X, Y, Width, Height), ubah status, serta PIC."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const emptyZone = {
                                        id: `zone-${Date.now()}`,
                                        name: 'Zona Baru Tambahan',
                                        shortCode: `ZN-${zones.length + 1}`,
                                        category: 'dining',
                                        floor: 'grand_ballroom',
                                        status: 'ready',
                                        coordinates: {
                                            x: 50,
                                            y: 50,
                                            width: 14,
                                            height: 12,
                                            shape: 'rect'
                                        },
                                        capacity: '10 Orang',
                                        dimensions: '3.0m x 3.0m',
                                        pic: {
                                            name: 'Kru Lapangan',
                                            role: 'Usher / Floor Team',
                                            phone: '+62 812-0000-1111',
                                            htChannel: 'CH-01'
                                        },
                                        description: 'Deskripsi zona baru yang ditambahkan dari panel admin.',
                                        equipment: [
                                            'Kursi Tiffany',
                                            'Meja Kayu'
                                        ],
                                        checklist: [
                                            {
                                                id: 'chk-1',
                                                text: 'Pemeriksaan kebersihan & posisi',
                                                done: true
                                            }
                                        ],
                                        timeline: [
                                            {
                                                time: '18:00 - 22:00',
                                                activity: 'Standby pelayanan',
                                                status: 'active'
                                            }
                                        ],
                                        notes: 'Ditambahkan via Admin Mode'
                                    };
                                    setEditingZone(emptyZone);
                                    setIsAddingZone(true);
                                },
                                className: "px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tambah Zona Baru ke Denah"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-[#FAF7F2] dark:bg-[#201923] text-[#7B6E67] dark:text-[#A79890] font-semibold border-b border-[#E5DACD] dark:border-[#2C242E]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-5 py-3.5",
                                                    children: "Kode & Nama Zona"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Lantai / Denah"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Kategori"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Koordinat (X, Y)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "PIC & HT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5 text-center",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-5 py-3.5 text-right",
                                                    children: "Aksi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 426,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 425,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-[#EFE7DC] dark:divide-[#2C242E]",
                                        children: zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-[#FBF9F6] dark:hover:bg-[#241C27] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-[#B8860B] bg-[#FAF4ED] dark:bg-[#28212C] px-2 py-0.5 rounded",
                                                                    children: zone.shortCode
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-[#2D2422] dark:text-white",
                                                                            children: zone.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                            lineNumber: 445,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] text-[#7B6E67] dark:text-[#A79890]",
                                                                            children: zone.capacity
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                            lineNumber: 446,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                    lineNumber: 444,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "capitalize",
                                                            children: zone.floor.replace('_', ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-full text-[10px] bg-[#EFE7DC] dark:bg-[#2C242E] capitalize font-medium",
                                                            children: zone.category.replace('_', ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 font-mono text-[11px]",
                                                        children: [
                                                            "X:",
                                                            zone.coordinates.x,
                                                            "%, Y:",
                                                            zone.coordinates.y,
                                                            "% (",
                                                            zone.coordinates.width,
                                                            "x",
                                                            zone.coordinates.height,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-[#2D2422] dark:text-white",
                                                                children: zone.pic.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[#B8860B] font-mono",
                                                                children: zone.pic.htChannel
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${zone.status === 'ready' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : zone.status === 'in_progress' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'}`,
                                                            children: zone.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3.5 text-right space-x-1.5 whitespace-nowrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>onSelectZoneOnMap(zone.id),
                                                                className: "p-1.5 rounded-lg bg-[#FAF4ED] dark:bg-[#2A222D] text-[#865D36] hover:bg-[#F2ECE1]",
                                                                title: "Lihat di Layout",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setEditingZone(zone);
                                                                    setIsAddingZone(false);
                                                                },
                                                                className: "p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 hover:bg-blue-100",
                                                                title: "Edit Zona",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setConfirmDialog({
                                                                        title: 'Hapus Zona dari Denah',
                                                                        message: `Yakin ingin menghapus zona "${zone.name}" (${zone.shortCode}) dari denah layout gedung?`,
                                                                        confirmText: 'Ya, Hapus Zona',
                                                                        onConfirm: ()=>onDeleteZone(zone.id)
                                                                    });
                                                                },
                                                                className: "p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 hover:bg-rose-100 cursor-pointer",
                                                                title: "Hapus Zona",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, zone.id, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 438,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 436,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 424,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubTab === 'rundown' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]",
                                        children: "Manajemen Jadwal Rundown Acara"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#7B6E67] dark:text-[#A79890]",
                                        children: "Tambah jadwal baru, ubah urutan jam, ganti lagu pengiring, atau pindah fase acara."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 526,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const newRd = {
                                        id: `rd-${Date.now()}`,
                                        time: '20:00',
                                        endTime: '20:30',
                                        title: 'Acara Tambahan',
                                        phase: 'resepsi',
                                        zoneId: zones[0]?.id || 'zone-pelaminan',
                                        zoneName: zones[0]?.name || 'Pelaminan Utama',
                                        pic: 'Bagas WO',
                                        htChannel: 'CH-01',
                                        status: 'upcoming',
                                        cues: 'Lampu sorot ke panggung',
                                        musicTrack: 'Pop Romance Acoustic',
                                        details: 'Rincian kegiatan baru yang ditambahkan oleh admin.'
                                    };
                                    setEditingRundown(newRd);
                                    setIsAddingRundown(true);
                                },
                                className: "px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 552,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tambah Jadwal Rundown"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 553,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 521,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: rundown.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-2xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 rounded-xl bg-[#FAF4ED] dark:bg-[#2A222D] font-mono text-xs font-bold text-[#B8860B]",
                                                children: [
                                                    item.time,
                                                    " - ",
                                                    item.endTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 564,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-sm text-[#221A18] dark:text-white",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] px-2 py-0.5 rounded-full capitalize bg-[#EFE7DC] dark:bg-[#2C242E] font-medium",
                                                                children: [
                                                                    "Fase: ",
                                                                    item.phase
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] px-2 py-0.5 rounded font-bold uppercase ${item.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : item.status === 'current' ? 'bg-amber-100 text-amber-800 animate-pulse' : 'bg-gray-100 text-gray-700'}`,
                                                                children: item.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[#7B6E67] dark:text-[#A79890] mt-0.5",
                                                        children: item.details
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[#B8860B] flex items-center gap-2 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Zona: ",
                                                                    item.zoneName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "PIC: ",
                                                                    item.pic,
                                                                    " (",
                                                                    item.htChannel,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 587,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 563,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 self-end md:self-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setEditingRundown(item);
                                                    setIsAddingRundown(false);
                                                },
                                                className: "p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 hover:bg-blue-100",
                                                title: "Edit Item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 593,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setConfirmDialog({
                                                        title: 'Hapus Mata Acara',
                                                        message: `Yakin ingin menghapus mata acara "${item.title}" (${item.time}) dari susunan rundown?`,
                                                        confirmText: 'Ya, Hapus Acara',
                                                        onConfirm: ()=>onDeleteRundown(item.id)
                                                    });
                                                },
                                                className: "p-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 hover:bg-rose-100 cursor-pointer",
                                                title: "Hapus Item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 603,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 592,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 559,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 557,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 520,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubTab === 'guests' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]",
                                        children: "Daftar Tamu & Alokasi Meja"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 629,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#7B6E67] dark:text-[#A79890]",
                                        children: "Tambah tamu undangan baru, ubah nomor kursi, tentukan catatan alergi/diet, atau hapus data."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 628,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const newGuest = {
                                        id: `g-${Date.now()}`,
                                        name: 'Tamu Undangan Baru',
                                        category: 'Sahabat',
                                        assignedZoneId: zones[0]?.id || 'zone-tables-a',
                                        tableName: 'Meja A1',
                                        pax: 2,
                                        status: 'Terkonfirmasi',
                                        dietary: 'Normal',
                                        souvenirGiven: false,
                                        seatNumber: 'Seat-1'
                                    };
                                    setEditingGuest(newGuest);
                                    setIsAddingGuest(true);
                                },
                                className: "px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tambah Tamu Baru"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 627,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-[#FAF7F2] dark:bg-[#201923] text-[#7B6E67] dark:text-[#A79890] font-semibold border-b border-[#E5DACD] dark:border-[#2C242E]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-5 py-3.5",
                                                    children: "Nama Tamu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Kategori"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Meja & Kursi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5 text-center",
                                                    children: "Pax"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Diet / Catatan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5 text-center",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-5 py-3.5 text-right",
                                                    children: "Aksi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 664,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 663,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-[#EFE7DC] dark:divide-[#2C242E]",
                                        children: guests.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-[#FBF9F6] dark:hover:bg-[#241C27] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3.5 font-bold text-[#2D2422] dark:text-white",
                                                        children: g.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded bg-[#FAF4ED] dark:bg-[#28212C] text-[#865D36] dark:text-[#D4AF37]",
                                                            children: g.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                children: g.tableName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            g.seatNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-gray-500 font-mono",
                                                                children: g.seatNumber
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 42
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 text-center font-bold font-mono",
                                                        children: g.pax
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 text-[#6A5A50] dark:text-[#C5B7AE]",
                                                        children: g.dietary
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-0.5 rounded-full text-[10px] font-bold ${g.status === 'Hadir' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`,
                                                            children: g.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                            lineNumber: 696,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3.5 text-right space-x-1.5 whitespace-nowrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setEditingGuest(g);
                                                                    setIsAddingGuest(false);
                                                                },
                                                                className: "p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setConfirmDialog({
                                                                        title: 'Hapus Data Tamu',
                                                                        message: `Yakin ingin menghapus data tamu "${g.name}" (${g.category}) dari daftar undangan?`,
                                                                        confirmText: 'Ya, Hapus Tamu',
                                                                        onConfirm: ()=>onDeleteGuest(g.id)
                                                                    });
                                                                },
                                                                className: "p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer",
                                                                title: "Hapus Tamu",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                    lineNumber: 724,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 712,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, g.id, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 676,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 674,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 661,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 660,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 626,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubTab === 'vendors' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]",
                                        children: "Direktori Vendor & Kru Lapangan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 741,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#7B6E67] dark:text-[#A79890]",
                                        children: "Atur kontak vendor, alokasi channel HT, dan status kesiapan vendor hari-H."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 744,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 740,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const newVendor = {
                                        id: `v-${Date.now()}`,
                                        category: 'Dekorasi',
                                        company: 'Vendor Baru',
                                        picName: 'Nama PIC',
                                        phone: '+62 812-9988-7766',
                                        htChannel: 'CH-01',
                                        assignedZones: [
                                            zones[0]?.id || 'zone-pelaminan'
                                        ],
                                        readinessPercent: 100,
                                        status: 'Ready'
                                    };
                                    setEditingVendor(newVendor);
                                    setIsAddingVendor(true);
                                },
                                className: "px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 766,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tambah Mitra Vendor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 748,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 739,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: vendors.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm flex flex-col justify-between space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#FAF4ED] dark:bg-[#28212C] text-[#B8860B]",
                                                        children: v.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-emerald-600 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 783,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            v.status
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 778,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-base text-[#221A18] dark:text-white",
                                                children: v.company
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 786,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-[#6A5A50] dark:text-[#C5B7AE]",
                                                children: [
                                                    "PIC: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-[#2D2422] dark:text-white",
                                                        children: v.picName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 26
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 787,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-mono text-[#865D36] dark:text-[#D4AF37]",
                                                children: [
                                                    "Telepon: ",
                                                    v.phone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 790,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-mono font-bold text-[#B8860B]",
                                                children: [
                                                    "HT: ",
                                                    v.htChannel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 793,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 777,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 border-t border-[#EFE7DC] dark:border-[#2C242E] flex items-center justify-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setEditingVendor(v);
                                                    setIsAddingVendor(false);
                                                },
                                                className: "p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100",
                                                title: "Edit Vendor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 799,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setConfirmDialog({
                                                        title: 'Hapus Mitra Vendor',
                                                        message: `Yakin ingin menghapus mitra vendor "${v.company}" dari direktori dan alokasi HT?`,
                                                        confirmText: 'Ya, Hapus Vendor',
                                                        onConfirm: ()=>onDeleteVendor(v.id)
                                                    });
                                                },
                                                className: "p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer",
                                                title: "Hapus Vendor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 809,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 798,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, v.id, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 773,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 771,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 738,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubTab === 'supabase' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-3xl bg-gradient-to-r from-[#18231C] via-[#1A2624] to-[#121A15] border border-emerald-600/30 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-600 text-white flex items-center gap-1.5 shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " SUPABASE + NEXT.JS + VERCEL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 837,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs px-2.5 py-0.5 rounded-full font-bold ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() ? '● Terhubung ke Cloud DB' : '○ Mode Lokal (Offline)'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 840,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 836,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl sm:text-2xl font-serif font-bold text-white",
                                        children: "Pusat Sinkronisasi Supabase & Kesiapan Vercel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed",
                                        children: [
                                            "Aplikasi ini telah disesuaikan agar siap dideploy ke ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Vercel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 852,
                                                columnNumber: 70
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " menggunakan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Next.js 15 (App Router)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 852,
                                                columnNumber: 106
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " dan database ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Supabase PostgreSQL Realtime"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 852,
                                                columnNumber: 160
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 851,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 835,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleTestConnection,
                                        disabled: isTestingSupabase,
                                        className: "px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: `w-4 h-4 text-emerald-400 ${isTestingSupabase ? 'animate-spin' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 863,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isTestingSupabase ? 'Menguji...' : 'Uji Koneksi Supabase'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 864,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 857,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSeedAllData,
                                        disabled: isSeedingSupabase || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])(),
                                        className: "px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 873,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isSeedingSupabase ? 'Mengunggah...' : 'Upload & Seed Data ke Cloud'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 874,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 867,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 856,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 834,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    supabaseTestResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-2xl border text-xs flex items-center gap-3 animate-fadeIn ${supabaseTestResult.success ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200'}`,
                        children: [
                            supabaseTestResult.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-5 h-5 text-emerald-600 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 887,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-5 h-5 text-rose-600 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 889,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 font-medium",
                                children: supabaseTestResult.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 891,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSupabaseTestResult(null),
                                className: "text-gray-400 hover:text-gray-600 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 897,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 892,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 881,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    supabaseSeedResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-2xl border text-xs flex items-center gap-3 animate-fadeIn ${supabaseSeedResult.success ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200' : 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200'}`,
                        children: [
                            supabaseSeedResult.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-5 h-5 text-emerald-600 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 909,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-5 h-5 text-amber-600 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 911,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 font-medium",
                                children: supabaseSeedResult.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 913,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSupabaseSeedResult(null),
                                className: "text-gray-400 hover:text-gray-600 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 919,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 914,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 903,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                        className: "w-4 h-4 text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 931,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-[#2D2422] dark:text-white",
                                                        children: "Konfigurasi Environment Supabase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 930,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-mono px-2 py-0.5 rounded font-bold ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-700'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() ? 'TERPASANG' : 'BELUM AKTIF'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 936,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 929,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-semibold text-gray-500 dark:text-gray-400 block mb-1",
                                                        children: "Supabase Project URL:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A25] font-mono text-[11px] text-[#2D2422] dark:text-gray-200 border border-[#DFCFC0] dark:border-[#382C3D] break-all",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPABASE_URL"] || 'Belum diisi (Tambahkan NEXT_PUBLIC_SUPABASE_URL di file .env)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 944,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-semibold text-gray-500 dark:text-gray-400 block mb-1",
                                                        children: "Status Skrip SQL Schema:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs",
                                                        children: [
                                                            "✅ File ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "/supabase/schema.sql"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 958,
                                                                columnNumber: 28
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " telah dibuat otomatis di repositori ini, mencakup tabel:",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-1 list-disc list-inside text-[11px] space-y-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                children: "public.wedding_config"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                                lineNumber: 960,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " (Pengantin & Venue)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 960,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                children: "public.venue_zones"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                                lineNumber: 961,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " (Denah & Meja/Panggung)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 961,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                children: "public.rundown_events"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                                lineNumber: 962,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " (Susunan Acara)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 962,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                children: "public.guest_list"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                                lineNumber: 963,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " (Undangan & Meja)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 963,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                children: "public.vendor_contacts"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                                lineNumber: 964,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " (Direktori Vendor)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 964,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 953,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-xs font-semibold text-[#4B3C35] dark:text-[#DDD0C5] mb-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Contoh File .env.local untuk Next.js / Vercel:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    const envContent = `NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"\nNEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"`;
                                                                    navigator.clipboard?.writeText(envContent);
                                                                    setCopiedEnv(true);
                                                                    setTimeout(()=>setCopiedEnv(false), 2500);
                                                                },
                                                                className: "text-[#B8860B] hover:underline flex items-center gap-1 text-[11px] cursor-pointer",
                                                                children: [
                                                                    copiedEnv ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-3 h-3 text-emerald-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 982,
                                                                        columnNumber: 36
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 982,
                                                                        columnNumber: 85
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: copiedEnv ? 'Tersalin!' : 'Salin Snippet'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 972,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "p-3 rounded-xl bg-[#201A24] text-amber-200 font-mono text-[11px] overflow-x-auto leading-relaxed border border-[#3A2D40]",
                                                        children: `NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJh..."`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 986,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 969,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 943,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 928,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                                        className: "w-4 h-4 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 998,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-[#2D2422] dark:text-white",
                                                        children: "Checklist Sebelum Push ke GitHub & Vercel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 997,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded",
                                                children: "4 LANGKAH"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 996,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3.5 text-xs text-[#554740] dark:text-[#C5B7AE]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1010,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "font-bold text-[#2D2422] dark:text-white",
                                                                children: "Eksekusi SQL di Supabase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1014,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] mt-0.5 text-gray-500 dark:text-gray-400",
                                                                children: [
                                                                    "Buka ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                        children: "Dashboard Supabase > SQL Editor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1016,
                                                                        columnNumber: 28
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    ", lalu salin dan jalankan seluruh isi file ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "supabase/schema.sql"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1016,
                                                                        columnNumber: 114
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " untuk membuat seluruh tabel & RLS."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1015,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1022,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "font-bold text-[#2D2422] dark:text-white",
                                                                children: "Push Kode ke GitHub"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1026,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] mt-0.5 text-gray-500 dark:text-gray-400",
                                                                children: "Jalankan perintah git standar di terminal komputer Anda:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1027,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "block mt-1 font-mono text-[10px] bg-black/80 text-emerald-300 p-2 rounded-lg",
                                                                children: [
                                                                    "git add .",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1031,
                                                                        columnNumber: 32
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    'git commit -m "feat: Next.js + Supabase wedding suite"',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1032,
                                                                        columnNumber: 77
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "git push origin main"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1030,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1039,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "font-bold text-[#2D2422] dark:text-white",
                                                                children: "Import Repository di Vercel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1043,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] mt-0.5 text-gray-500 dark:text-gray-400",
                                                                children: [
                                                                    "Vercel otomatis mendeteksi ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Next.js (App Router)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1045,
                                                                        columnNumber: 50
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " berkat file ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "vercel.json"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1045,
                                                                        columnNumber: 100
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    ", ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "next.config.mjs"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1045,
                                                                        columnNumber: 126
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    ", dan direktori ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "app/"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1045,
                                                                        columnNumber: 170
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1044,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1042,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0",
                                                        children: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "font-bold text-[#2D2422] dark:text-white",
                                                                children: "Set Environment Variables di Vercel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1055,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] mt-0.5 text-gray-500 dark:text-gray-400",
                                                                children: [
                                                                    "Di halaman ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                        children: "Settings > Environment Variables"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1057,
                                                                        columnNumber: 34
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Vercel, tambahkan ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "NEXT_PUBLIC_SUPABASE_URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1057,
                                                                        columnNumber: 97
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " dan ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "NEXT_PUBLIC_SUPABASE_ANON_KEY"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                        lineNumber: 1057,
                                                                        columnNumber: 139
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                                lineNumber: 1056,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                        lineNumber: 1054,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                lineNumber: 995,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                        lineNumber: 925,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 832,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingZone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#1A161D] rounded-3xl border border-[#E5DACD] dark:border-[#2C242E] shadow-2xl p-6 sm:p-8 space-y-5 my-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg text-[#221A18] dark:text-white",
                                    children: isAddingZone ? 'Tambah Zona Baru ke Denah' : `Edit Zona: ${editingZone.name}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1073,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingZone(null),
                                    className: "p-1 rounded-full hover:bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 1077,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1076,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1072,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Kode Zona (Singkat di Denah)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingZone.shortCode,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    shortCode: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Contoh: STAGE-01, VIP-01, BUF-01",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1082,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nama Lengkap Zona"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1095,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingZone.name,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    name: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Pelaminan Utama & Royal Stage",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1094,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Lantai / Denah"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingZone.floor,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    floor: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "grand_ballroom",
                                                    children: "Grand Ballroom (Indoor Reception)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "garden_terrace",
                                                    children: "Glasshouse Garden (Outdoor Akad)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1108,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1106,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Kategori Zona"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingZone.category,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    category: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "stage_vip",
                                                    children: "👑 Pelaminan & VIP"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "catering",
                                                    children: "🍽️ Katering & Gubukan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "dining",
                                                    children: "🪑 Meja Tamu Reguler"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1127,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "entertainment",
                                                    children: "🎶 Musik & Hiburan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "reception_ops",
                                                    children: "📋 Registrasi & Operasional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1129,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "outdoor_ceremony",
                                                    children: "🌿 Akad Outdoor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1130,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1120,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1118,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Posisi Koordinat X (0% - 100%)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "5",
                                            max: "95",
                                            value: editingZone.coordinates.x,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    coordinates: {
                                                        ...editingZone.coordinates,
                                                        x: Number(e.target.value)
                                                    }
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1136,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1134,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Posisi Koordinat Y (0% - 100%)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "5",
                                            max: "95",
                                            value: editingZone.coordinates.y,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    coordinates: {
                                                        ...editingZone.coordinates,
                                                        y: Number(e.target.value)
                                                    }
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Lebar di Denah (Width)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "6",
                                            max: "50",
                                            value: editingZone.coordinates.width,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    coordinates: {
                                                        ...editingZone.coordinates,
                                                        width: Number(e.target.value)
                                                    }
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1166,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1164,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Tinggi di Denah (Height)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1180,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "6",
                                            max: "40",
                                            value: editingZone.coordinates.height,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    coordinates: {
                                                        ...editingZone.coordinates,
                                                        height: Number(e.target.value)
                                                    }
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1181,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1179,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Bentuk Bentang (Shape)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1195,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingZone.coordinates.shape || 'rect',
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    coordinates: {
                                                        ...editingZone.coordinates,
                                                        shape: e.target.value
                                                    }
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "rect",
                                                    children: "Kotak (Rectangular Stage)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "circle",
                                                    children: "Bulat (Round Table / Feature)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1205,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "pill",
                                                    children: "Lonjong (Pill / Island)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1196,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1194,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Status Operasional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingZone.status,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    status: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ready",
                                                    children: "✅ Siap (Ready)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1217,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "in_progress",
                                                    children: "⏳ Sedang Disiapkan (In Progress)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "attention",
                                                    children: "⚠️ Perlu Atensi (Attention)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "standby",
                                                    children: "🟣 Standby"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Kapasitas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1225,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingZone.capacity,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    capacity: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Contoh: 10 Kursi, 800 Porsi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1224,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Dimensi Fisik Asli"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1236,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingZone.dimensions,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    dimensions: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Contoh: 14.0m x 4.5m"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1237,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1235,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nama PIC Penanggung Jawab"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1247,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingZone.pic.name,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    pic: {
                                                        ...editingZone.pic,
                                                        name: e.target.value
                                                    }
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Saluran HT PIC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1260,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingZone.pic.htChannel,
                                            onChange: (e)=>setEditingZone({
                                                    ...editingZone,
                                                    pic: {
                                                        ...editingZone.pic,
                                                        htChannel: e.target.value
                                                    }
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "CH-01 / CH-02 / CH-03"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1259,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1081,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "font-bold",
                                    children: "Deskripsi Zona"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: editingZone.description,
                                    onChange: (e)=>setEditingZone({
                                            ...editingZone,
                                            description: e.target.value
                                        }),
                                    rows: 2,
                                    className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1276,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1274,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]",
                            children: [
                                !isAddingZone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        const zoneToDelete = editingZone;
                                        setConfirmDialog({
                                            title: 'Hapus Zona dari Denah',
                                            message: `Yakin ingin menghapus zona "${zoneToDelete.name}" (${zoneToDelete.shortCode}) dari denah gedung?`,
                                            confirmText: 'Ya, Hapus Zona',
                                            onConfirm: ()=>{
                                                onDeleteZone(zoneToDelete.id);
                                                setEditingZone(null);
                                            }
                                        });
                                    },
                                    className: "px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50 flex items-center gap-1.5 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1302,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Hapus Zona"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1303,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1305,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditingZone(null),
                                            className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer",
                                            children: "Batal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                if (isAddingZone) {
                                                    onAddZone(editingZone);
                                                } else {
                                                    onUpdateZone(editingZone);
                                                }
                                                setEditingZone(null);
                                            },
                                            className: "px-5 py-2 rounded-xl text-xs font-semibold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Simpan Zona"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1327,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1306,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1284,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                    lineNumber: 1071,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 1070,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingRundown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-xl bg-[#FAF7F2] dark:bg-[#1A161D] rounded-3xl border border-[#E5DACD] dark:border-[#2C242E] shadow-2xl p-6 sm:p-8 space-y-5 my-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg text-[#221A18] dark:text-white",
                                    children: isAddingRundown ? 'Tambah Mata Acara Baru' : `Edit Rundown: ${editingRundown.title}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1340,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingRundown(null),
                                    className: "p-1 rounded-full hover:bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 1344,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1343,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1339,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Jam Mulai (WIB)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1350,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingRundown.time,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    time: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "19:00",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1349,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Jam Selesai (WIB)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1362,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingRundown.endTime,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    endTime: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "19:15",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1363,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1361,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Judul Acara"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1374,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingRundown.title,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    title: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Kirab Agung Pengantin & Grand Entrance",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1375,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1373,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Fase Acara"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1386,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingRundown.phase,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    phase: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "persiapan",
                                                    children: "Persiapan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1392,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "akad",
                                                    children: "Akad Nikah"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "kirab",
                                                    children: "Kirab Pengantin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1394,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "resepsi",
                                                    children: "Resepsi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1395,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "closing",
                                                    children: "Penutupan (Closing)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1396,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1387,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1385,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Status Acara"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1401,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingRundown.status,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    status: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "completed",
                                                    children: "Selesai (Completed)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1407,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "current",
                                                    children: "Sedang Berlangsung (Current / LIVE)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "upcoming",
                                                    children: "Akan Datang (Upcoming)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1409,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1402,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1400,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Zona Lokasi Terkait"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1414,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingRundown.zoneId,
                                            onChange: (e)=>{
                                                const z = zones.find((item)=>item.id === e.target.value);
                                                setEditingRundown({
                                                    ...editingRundown,
                                                    zoneId: e.target.value,
                                                    zoneName: z?.name || 'Zona Terpilih'
                                                });
                                            },
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: zones.map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: z.id,
                                                    children: [
                                                        "[",
                                                        z.shortCode,
                                                        "] ",
                                                        z.name
                                                    ]
                                                }, z.id, true, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1428,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1415,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1413,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "PIC Lapangan & HT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1436,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingRundown.pic,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    pic: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Bagas WO / Dimas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1437,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1435,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Soundtrack / Music Track"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1447,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingRundown.musicTrack,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    musicTrack: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "A Thousand Years - Live Orchestra Strings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1448,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1446,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Petunjuk Teknis (Cues Lighting/MC)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1458,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingRundown.cues,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    cues: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Blackout 30%, Follow spot menyala, Cold spark saat suapan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1459,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1457,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Rincian Kegiatan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1469,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: editingRundown.details,
                                            onChange: (e)=>setEditingRundown({
                                                    ...editingRundown,
                                                    details: e.target.value
                                                }),
                                            rows: 2,
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1470,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1468,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1348,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingRundown(null),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1480,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (isAddingRundown) {
                                            onAddRundown(editingRundown);
                                        } else {
                                            onUpdateRundown(editingRundown);
                                        }
                                        setEditingRundown(null);
                                    },
                                    className: "px-5 py-2 rounded-xl text-xs font-semibold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1497,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Simpan Rundown"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1498,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1479,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                    lineNumber: 1338,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 1337,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingGuest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg bg-[#FAF7F2] dark:bg-[#1A161D] rounded-3xl border border-[#E5DACD] dark:border-[#2C242E] shadow-2xl p-6 sm:p-8 space-y-5 my-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg text-[#221A18] dark:text-white",
                                    children: isAddingGuest ? 'Tambah Tamu Baru' : `Edit Tamu: ${editingGuest.name}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1510,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingGuest(null),
                                    className: "p-1 rounded-full hover:bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 1514,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1513,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1509,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nama Tamu & Rombongan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1520,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingGuest.name,
                                            onChange: (e)=>setEditingGuest({
                                                    ...editingGuest,
                                                    name: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1521,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1519,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Kategori Tamu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1531,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingGuest.category,
                                            onChange: (e)=>setEditingGuest({
                                                    ...editingGuest,
                                                    category: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "VIP Keluarga",
                                                    children: "👑 VIP Keluarga"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1537,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "VVIP Pejabat",
                                                    children: "🎖️ VVIP Pejabat"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1538,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Keluarga Pria",
                                                    children: "Keluarga Pria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1539,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Keluarga Wanita",
                                                    children: "Keluarga Wanita"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1540,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Sahabat",
                                                    children: "🥂 Sahabat"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1541,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Rekan Bisnis",
                                                    children: "💼 Rekan Bisnis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1542,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1532,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1530,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Jumlah Tamu (Pax)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1547,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "1",
                                            max: "20",
                                            value: editingGuest.pax,
                                            onChange: (e)=>setEditingGuest({
                                                    ...editingGuest,
                                                    pax: Number(e.target.value)
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1548,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1546,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Alokasi Zona Meja"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1559,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingGuest.assignedZoneId,
                                            onChange: (e)=>{
                                                const z = zones.find((item)=>item.id === e.target.value);
                                                setEditingGuest({
                                                    ...editingGuest,
                                                    assignedZoneId: e.target.value,
                                                    tableName: z?.name || 'Meja'
                                                });
                                            },
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: zones.map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: z.id,
                                                    children: [
                                                        "[",
                                                        z.shortCode,
                                                        "] ",
                                                        z.name
                                                    ]
                                                }, z.id, true, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1573,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1560,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1558,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nomor Meja / Label"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1581,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingGuest.tableName,
                                            onChange: (e)=>setEditingGuest({
                                                    ...editingGuest,
                                                    tableName: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "VIP Table 01 / Meja A1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1582,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1580,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nomor Kursi (Opsional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1592,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingGuest.seatNumber || '',
                                            onChange: (e)=>setEditingGuest({
                                                    ...editingGuest,
                                                    seatNumber: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "Seat A-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1593,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1591,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Status Kehadiran"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1603,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingGuest.status,
                                            onChange: (e)=>setEditingGuest({
                                                    ...editingGuest,
                                                    status: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Hadir",
                                                    children: "Hadir"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1609,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Terkonfirmasi",
                                                    children: "Terkonfirmasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1610,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Menunggu",
                                                    children: "Menunggu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1611,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1604,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1602,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Catatan Makanan / Dietary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1616,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingGuest.dietary,
                                            onChange: (e)=>setEditingGuest({
                                                    ...editingGuest,
                                                    dietary: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "No Seafood / Halal Only / Teh Hangat"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1615,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1518,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingGuest(null),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1628,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (isAddingGuest) {
                                            onAddGuest(editingGuest);
                                        } else {
                                            onUpdateGuest(editingGuest);
                                        }
                                        setEditingGuest(null);
                                    },
                                    className: "px-5 py-2 rounded-xl text-xs font-semibold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1645,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Simpan Tamu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1646,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1634,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1627,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                    lineNumber: 1508,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 1507,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingVendor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg bg-[#FAF7F2] dark:bg-[#1A161D] rounded-3xl border border-[#E5DACD] dark:border-[#2C242E] shadow-2xl p-6 sm:p-8 space-y-5 my-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg text-[#221A18] dark:text-white",
                                    children: isAddingVendor ? 'Tambah Mitra Vendor' : `Edit Vendor: ${editingVendor.company}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1658,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingVendor(null),
                                    className: "p-1 rounded-full hover:bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 1662,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1661,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1657,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nama Perusahaan / Vendor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1668,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingVendor.company,
                                            onChange: (e)=>setEditingVendor({
                                                    ...editingVendor,
                                                    company: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1669,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1667,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Kategori Layanan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1679,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingVendor.category,
                                            onChange: (e)=>setEditingVendor({
                                                    ...editingVendor,
                                                    category: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Dekorasi",
                                                    children: "Dekorasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1685,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Katering",
                                                    children: "Katering"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1686,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "MUA & Busana",
                                                    children: "MUA & Busana"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1687,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Fotografi & Video",
                                                    children: "Fotografi & Video"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1688,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Sound & Lighting",
                                                    children: "Sound & Lighting"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1689,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Entertainment & Band",
                                                    children: "Entertainment & Band"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1690,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "MC & Host",
                                                    children: "MC & Host"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1691,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Venue Manager",
                                                    children: "Venue Manager"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                                    lineNumber: 1692,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1680,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1678,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Saluran HT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1697,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingVendor.htChannel,
                                            onChange: (e)=>setEditingVendor({
                                                    ...editingVendor,
                                                    htChannel: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "CH-01 / CH-02"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1698,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1696,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nama PIC Lapangan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1708,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingVendor.picName,
                                            onChange: (e)=>setEditingVendor({
                                                    ...editingVendor,
                                                    picName: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1709,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1707,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold",
                                            children: "Nomor Handphone / WA"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1719,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingVendor.phone,
                                            onChange: (e)=>setEditingVendor({
                                                    ...editingVendor,
                                                    phone: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                            placeholder: "+62 812-..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1720,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1718,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1666,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingVendor(null),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1731,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (isAddingVendor) {
                                            onAddVendor(editingVendor);
                                        } else {
                                            onUpdateVendor(editingVendor);
                                        }
                                        setEditingVendor(null);
                                    },
                                    className: "px-5 py-2 rounded-xl text-xs font-semibold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1748,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Simpan Vendor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1749,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1737,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1730,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                    lineNumber: 1656,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 1655,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            confirmDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md p-6 rounded-3xl bg-white dark:bg-[#1A161D] border border-rose-300 dark:border-rose-900/60 shadow-2xl space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                        lineNumber: 1761,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1760,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-base font-bold text-[#2D2422] dark:text-white",
                                            children: confirmDialog.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1764,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[#7B6E67] dark:text-[#A79890] mt-1 leading-relaxed",
                                            children: confirmDialog.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1767,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1763,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1759,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2.5 pt-3 border-t border-[#EFE7DC] dark:border-[#2C242E]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setConfirmDialog(null),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1773,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        confirmDialog.onConfirm();
                                        setConfirmDialog(null);
                                    },
                                    className: "px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-md flex items-center gap-1.5 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1788,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: confirmDialog.confirmText || 'Ya, Lanjutkan Hapus'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                            lineNumber: 1789,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                                    lineNumber: 1780,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboardSection.tsx",
                            lineNumber: 1772,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboardSection.tsx",
                    lineNumber: 1758,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboardSection.tsx",
                lineNumber: 1757,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AdminDashboardSection.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminDashboardSection, "q18tBaQdvvs7ukgJEKJtt9gYiTs=");
_c = AdminDashboardSection;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FloorPlanDesigner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloorPlanDesigner",
    ()=>FloorPlanDesigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move.js [app-client] (ecmascript) <export default as Move>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.js [app-client] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stamp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stamp.js [app-client] (ecmascript) <export default as Stamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript) <export default as Eraser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
;
;
const STAMP_PRESETS = [
    {
        id: 'p-pelaminan',
        name: 'Pelaminan & Royal Stage',
        codePrefix: 'STAGE',
        category: 'stage_vip',
        width: 32,
        height: 16,
        shape: 'rect',
        capacity: '12 Pax',
        dimensions: '14.0m x 4.5m',
        picName: 'Stage Master',
        htChannel: 'CH-01'
    },
    {
        id: 'p-vip-table',
        name: 'Meja Bundar VIP (10 Pax)',
        codePrefix: 'VIP',
        category: 'stage_vip',
        width: 14,
        height: 14,
        shape: 'circle',
        capacity: '10 Kursi',
        dimensions: 'Dia. 2.0m',
        picName: 'VIP Usher',
        htChannel: 'CH-03'
    },
    {
        id: 'p-guest-table',
        name: 'Meja Bundar Tamu (8 Pax)',
        codePrefix: 'TBL',
        category: 'dining',
        width: 12,
        height: 12,
        shape: 'circle',
        capacity: '8 Kursi',
        dimensions: 'Dia. 1.8m',
        picName: 'Floor Usher',
        htChannel: 'CH-04'
    },
    {
        id: 'p-buffet-island',
        name: 'Island Prasmanan (Buffet)',
        codePrefix: 'BUF',
        category: 'catering',
        width: 28,
        height: 13,
        shape: 'rect',
        capacity: '800 Pax Rotasi',
        dimensions: '10.0m x 2.4m',
        picName: 'Chef Plataran',
        htChannel: 'CH-02'
    },
    {
        id: 'p-stall-food',
        name: 'Stall Live Cooking Gubukan',
        codePrefix: 'STL',
        category: 'catering',
        width: 14,
        height: 12,
        shape: 'rect',
        capacity: '350 Pax',
        dimensions: '3.5m x 2.0m',
        picName: 'Cook In-Charge',
        htChannel: 'CH-02'
    },
    {
        id: 'p-photo-360',
        name: '360 Video Spinner / Photobooth',
        codePrefix: 'PB',
        category: 'entertainment',
        width: 14,
        height: 12,
        shape: 'rect',
        capacity: '4 Pax Platform',
        dimensions: '4.0m x 4.0m',
        picName: 'Booth Operator',
        htChannel: 'CH-04'
    },
    {
        id: 'p-music-band',
        name: 'Panggung Akustik & Orchestra',
        codePrefix: 'ENT',
        category: 'entertainment',
        width: 16,
        height: 13,
        shape: 'rect',
        capacity: '8 Musisi',
        dimensions: '5.0m x 3.5m',
        picName: 'Band Leader',
        htChannel: 'CH-04'
    },
    {
        id: 'p-dance-cake',
        name: 'Lantai Dansa & Wedding Cake',
        codePrefix: 'ACT',
        category: 'entertainment',
        width: 18,
        height: 14,
        shape: 'pill',
        capacity: 'Center Attraction',
        dimensions: 'Dia. 6.0m',
        picName: 'Show Operator',
        htChannel: 'CH-01'
    },
    {
        id: 'p-reception',
        name: 'Meja Registrasi & Kotak Angpao',
        codePrefix: 'RCP',
        category: 'reception_ops',
        width: 26,
        height: 10,
        shape: 'rect',
        capacity: '6 Antrean',
        dimensions: '9.0m x 1.8m',
        picName: 'Head Usher',
        htChannel: 'CH-05'
    }
];
const FloorPlanDesigner = ({ zones, onAddZone, onUpdateZone, onDeleteZone, activeFloor, onChangeFloor })=>{
    _s();
    const [selectedTool, setSelectedTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('select');
    const [selectedStamp, setSelectedStamp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(STAMP_PRESETS[1]);
    const [selectedZoneId, setSelectedZoneId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmDeleteId, setConfirmDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConfirmingInspectorDelete, setIsConfirmingInspectorDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snapToGrid, setSnapToGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [gridSize, setGridSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2); // 2% grid step
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mouseCoord, setMouseCoord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Drawing state
    const [isDrawing, setIsDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drawStart, setDrawStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drawCurrent, setDrawCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Dragging state
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Resizing state
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resizeHandle, setResizeHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // History state for Undo
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Filter zones by active floor
    const floorZones = zones.filter((z)=>z.floor === activeFloor);
    const selectedZone = zones.find((z)=>z.id === selectedZoneId) || null;
    // Keyboard shortcut listener for Delete/Backspace key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloorPlanDesigner.useEffect": ()=>{
            const handleKeyDown = {
                "FloorPlanDesigner.useEffect.handleKeyDown": (e)=>{
                    const target = e.target;
                    if ([
                        'INPUT',
                        'TEXTAREA',
                        'SELECT'
                    ].includes(target.tagName)) return;
                    if ((e.key === 'Delete' || e.key === 'Backspace') && selectedZoneId) {
                        onDeleteZone(selectedZoneId);
                        setSelectedZoneId(null);
                        setConfirmDeleteId(null);
                        setIsConfirmingInspectorDelete(false);
                    }
                    if (e.key === 'Escape') {
                        setSelectedZoneId(null);
                        setConfirmDeleteId(null);
                        setIsConfirmingInspectorDelete(false);
                        setSelectedTool('select');
                    }
                }
            }["FloorPlanDesigner.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "FloorPlanDesigner.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["FloorPlanDesigner.useEffect"];
        }
    }["FloorPlanDesigner.useEffect"], [
        selectedZoneId,
        onDeleteZone
    ]);
    // Push to history when zones change
    const saveStateToHistory = (newZones)=>{
        setHistory((prev)=>[
                ...prev.slice(0, historyIndex + 1),
                newZones
            ]);
        setHistoryIndex((prev)=>prev + 1);
    };
    const handleUndo = ()=>{
        if (historyIndex > 0) {
            const prevZones = history[historyIndex - 1];
            setHistoryIndex((prev)=>prev - 1);
        // Restore zones
        // You can notify parent or reset
        }
    };
    // Convert client mouse event to SVG percentage coordinates (0 - 100)
    const getSvgCoordinates = (e)=>{
        if (!svgRef.current) return {
            x: 50,
            y: 50
        };
        const rect = svgRef.current.getBoundingClientRect();
        const rawX = (e.clientX - rect.left) / rect.width * 100;
        const rawY = (e.clientY - rect.top) / rect.height * 100;
        const clampedX = Math.max(0, Math.min(100, rawX));
        const clampedY = Math.max(0, Math.min(100, rawY));
        if (snapToGrid) {
            return {
                x: Math.round(clampedX / gridSize) * gridSize,
                y: Math.round(clampedY / gridSize) * gridSize
            };
        }
        return {
            x: Math.round(clampedX * 10) / 10,
            y: Math.round(clampedY * 10) / 10
        };
    };
    // --- MOUSE DOWN ON SVG CANVAS ---
    const handleMouseDown = (e)=>{
        const coords = getSvgCoordinates(e);
        // If Stamp Tool is active: place preset immediately
        if (selectedTool === 'stamp') {
            const stampCount = zones.filter((z)=>z.shortCode.startsWith(selectedStamp.codePrefix)).length + 1;
            const newZone = {
                id: `zone-${Date.now()}`,
                name: `${selectedStamp.name} #${stampCount}`,
                shortCode: `${selectedStamp.codePrefix}-${String(stampCount).padStart(2, '0')}`,
                category: selectedStamp.category,
                floor: activeFloor,
                status: 'ready',
                coordinates: {
                    x: coords.x,
                    y: coords.y,
                    width: selectedStamp.width,
                    height: selectedStamp.height,
                    shape: selectedStamp.shape
                },
                capacity: selectedStamp.capacity,
                dimensions: selectedStamp.dimensions,
                pic: {
                    name: selectedStamp.picName,
                    role: 'Divisi PIC',
                    phone: '+62 812-3344-5566',
                    htChannel: selectedStamp.htChannel
                },
                description: `Zona ${selectedStamp.name} yang ditambahkan via Studio Gambar Denah.`,
                equipment: [
                    'Peralatan Standar Lapangan'
                ],
                checklist: [
                    {
                        id: `c-${Date.now()}-1`,
                        text: 'Pemeriksaan penempatan posisi & jarak lalu lintas tamu',
                        done: true
                    },
                    {
                        id: `c-${Date.now()}-2`,
                        text: 'Briefing kru PIC zona sebelum acara dimulai',
                        done: false
                    }
                ],
                timeline: [
                    {
                        time: '18:00 - 22:00',
                        activity: 'Pelaksanaan operasional hari-H',
                        status: 'active'
                    }
                ],
                notes: 'Dibuat dengan Tool Stempel Denah'
            };
            onAddZone(newZone);
            setSelectedZoneId(newZone.id);
            setSelectedTool('select');
            return;
        }
        // If Draw Tool is active (rect, circle, pill): start drawing
        if ([
            'draw_rect',
            'draw_circle',
            'draw_pill'
        ].includes(selectedTool)) {
            setIsDrawing(true);
            setDrawStart(coords);
            setDrawCurrent(coords);
            return;
        }
        // If Select Tool is active:
        // If clicked on canvas background (not on an element), deselect
        if (e.target.tagName === 'svg' || e.target.id === 'canvas-bg' || e.target.id === 'grid-pattern-rect') {
            setSelectedZoneId(null);
        }
    };
    // --- MOUSE MOVE ON SVG CANVAS ---
    const handleMouseMove = (e)=>{
        const coords = getSvgCoordinates(e);
        setMouseCoord(coords);
        // If drawing new shape
        if (isDrawing && drawStart) {
            setDrawCurrent(coords);
            return;
        }
        // If dragging existing selected zone
        if (isDragging && selectedZone) {
            const newX = Math.max(5, Math.min(95, coords.x - dragOffset.x));
            const newY = Math.max(5, Math.min(95, coords.y - dragOffset.y));
            onUpdateZone({
                ...selectedZone,
                coordinates: {
                    ...selectedZone.coordinates,
                    x: snapToGrid ? Math.round(newX / gridSize) * gridSize : Math.round(newX * 10) / 10,
                    y: snapToGrid ? Math.round(newY / gridSize) * gridSize : Math.round(newY * 10) / 10
                }
            });
            return;
        }
        // If resizing selected zone
        if (isResizing && selectedZone && resizeHandle) {
            const curX = selectedZone.coordinates.x;
            const curY = selectedZone.coordinates.y;
            let newW = selectedZone.coordinates.width;
            let newH = selectedZone.coordinates.height;
            if (resizeHandle.includes('e')) {
                newW = Math.max(6, Math.min(50, Math.abs(coords.x - curX) * 2));
            }
            if (resizeHandle.includes('s')) {
                newH = Math.max(6, Math.min(40, Math.abs(coords.y - curY) * 2));
            }
            onUpdateZone({
                ...selectedZone,
                coordinates: {
                    ...selectedZone.coordinates,
                    width: snapToGrid ? Math.round(newW / gridSize) * gridSize : Math.round(newW),
                    height: snapToGrid ? Math.round(newH / gridSize) * gridSize : Math.round(newH)
                }
            });
        }
    };
    // --- MOUSE UP ON SVG CANVAS ---
    const handleMouseUp = ()=>{
        if (isDrawing && drawStart && drawCurrent) {
            // Calculate drawn dimensions
            const minX = Math.min(drawStart.x, drawCurrent.x);
            const maxX = Math.max(drawStart.x, drawCurrent.x);
            const minY = Math.min(drawStart.y, drawCurrent.y);
            const maxY = Math.max(drawStart.y, drawCurrent.y);
            const width = Math.max(6, Math.round(maxX - minX));
            const height = Math.max(6, Math.round(maxY - minY));
            const centerX = Math.round(minX + width / 2);
            const centerY = Math.round(minY + height / 2);
            const shapeType = selectedTool === 'draw_circle' ? 'circle' : selectedTool === 'draw_pill' ? 'pill' : 'rect';
            const zoneCount = zones.length + 1;
            const defaultCategory = shapeType === 'circle' ? 'dining' : shapeType === 'pill' ? 'entertainment' : 'stage_vip';
            const newZone = {
                id: `zone-${Date.now()}`,
                name: `Zona Gambar #${zoneCount}`,
                shortCode: `ZN-${String(zoneCount).padStart(2, '0')}`,
                category: defaultCategory,
                floor: activeFloor,
                status: 'ready',
                coordinates: {
                    x: centerX,
                    y: centerY,
                    width: shapeType === 'circle' ? Math.max(width, height) : width,
                    height: shapeType === 'circle' ? Math.max(width, height) : height,
                    shape: shapeType
                },
                capacity: shapeType === 'circle' ? '8 Kursi' : '20 Pax',
                dimensions: `${Math.round(width * 0.35 * 10) / 10}m x ${Math.round(height * 0.35 * 10) / 10}m`,
                pic: {
                    name: 'Kru Lapangan',
                    role: 'Floor Coordinator',
                    phone: '+62 812-9988-0000',
                    htChannel: 'CH-01'
                },
                description: 'Zona baru hasil goresan gambar di studio denah.',
                equipment: [
                    'Peralatan Lapangan Standar'
                ],
                checklist: [
                    {
                        id: `chk-${Date.now()}`,
                        text: 'Penataan meja & panggung sesuai hasil gambar',
                        done: true
                    }
                ],
                timeline: [
                    {
                        time: '18:00 - 22:00',
                        activity: 'Operasional aktif',
                        status: 'active'
                    }
                ],
                notes: 'Digambar manual menggunakan Studio Gambar Denah'
            };
            onAddZone(newZone);
            setSelectedZoneId(newZone.id);
            setSelectedTool('select');
        }
        setIsDrawing(false);
        setIsDragging(false);
        setIsResizing(false);
        setDrawStart(null);
        setDrawCurrent(null);
        setResizeHandle(null);
    };
    // Nudge selected zone with keyboard or buttons
    const nudgeSelected = (dx, dy)=>{
        if (!selectedZone) return;
        const newX = Math.max(5, Math.min(95, selectedZone.coordinates.x + dx));
        const newY = Math.max(5, Math.min(95, selectedZone.coordinates.y + dy));
        onUpdateZone({
            ...selectedZone,
            coordinates: {
                ...selectedZone.coordinates,
                x: newX,
                y: newY
            }
        });
    };
    // Duplicate selected zone
    const duplicateSelected = ()=>{
        if (!selectedZone) return;
        const duplicated = {
            ...selectedZone,
            id: `zone-${Date.now()}`,
            name: `${selectedZone.name} (Copy)`,
            shortCode: `${selectedZone.shortCode}-C`,
            coordinates: {
                ...selectedZone.coordinates,
                x: Math.min(90, selectedZone.coordinates.x + 5),
                y: Math.min(90, selectedZone.coordinates.y + 5)
            }
        };
        onAddZone(duplicated);
        setSelectedZoneId(duplicated.id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 rounded-3xl bg-gradient-to-r from-[#241A14] via-[#1E1620] to-[#121013] text-[#FAF7F2] border border-[#B8860B]/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-0.5 rounded text-[11px] font-bold font-mono bg-[#B8860B] text-white flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 476,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " STUDIO GAMBAR DENAH INTERAKTIF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-amber-200",
                                        children: "Drag, Drop, Draw & Resize Elemen Panggung"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl sm:text-2xl font-serif font-bold text-white",
                                children: "Desain Layout & Tata Letak Meja Acara"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-300",
                                children: "Pilih alat gambar atau stempel cepat, lalu klik & geser di atas kanvas gedung untuk menentukan posisi akurat."
                            }, void 0, false, {
                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center p-1 rounded-2xl bg-white/10 border border-white/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChangeFloor('grand_ballroom'),
                                        className: `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFloor === 'grand_ballroom' ? 'bg-[#B8860B] text-white shadow-sm' : 'text-gray-300 hover:text-white'}`,
                                        children: "Ballroom (Indoor)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChangeFloor('garden_terrace'),
                                        className: `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFloor === 'garden_terrace' ? 'bg-[#B8860B] text-white shadow-sm' : 'text-gray-300 hover:text-white'}`,
                                        children: "Garden (Akad)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSnapToGrid(!snapToGrid),
                                className: `px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${snapToGrid ? 'bg-amber-600/40 text-amber-200 border-amber-500' : 'bg-white/10 text-gray-300 border-white/20'}`,
                                title: "Snap to Grid (Kerapian Garis Grid)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Snap Grid: ",
                                            snapToGrid ? 'ON' : 'OFF'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] block",
                                        children: "1. Pilih Alat Gambar (Tool)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedTool('select'),
                                                className: `p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${selectedTool === 'select' ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]' : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__["Move"], {
                                                        className: "w-4 h-4 text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Pilih / Geser"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 541,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedTool('draw_rect'),
                                                className: `p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${selectedTool === 'draw_rect' ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]' : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                        className: "w-4 h-4 text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Gambar Kotak"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 553,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedTool('draw_circle'),
                                                className: `p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${selectedTool === 'draw_circle' ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]' : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                        className: "w-4 h-4 text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Gambar Bulat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 565,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedTool('draw_pill'),
                                                className: `p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${selectedTool === 'draw_pill' ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]' : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
                                                        className: "w-4 h-4 text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Gambar Lonjong"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 577,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedTool('eraser'),
                                                className: `col-span-2 p-2.5 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${selectedTool === 'eraser' ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-900/50'}`,
                                                title: "Penghapus Elemen (Klik objek di kanvas untuk langsung menghapus)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__["Eraser"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Penghapus Zona (Klik Objek untuk Hapus)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedTool === 'eraser' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-[11px] text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 font-medium animate-pulse",
                                        children: [
                                            "🗑️ ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Mode Penghapus Aktif:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 605,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Klik meja atau panggung mana pun pada kanvas denah untuk langsung menghapusnya."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] text-[11px] text-[#7B6E67] dark:text-[#A79890] border border-[#DFCFC0] dark:border-[#382C3D]",
                                        children: [
                                            "💡 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Tips:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 609,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Klik & seret pada kanvas untuk membuat elemen. Tekan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "px-1.5 py-0.5 rounded bg-white dark:bg-black font-mono border",
                                                children: "Del"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 609,
                                                columnNumber: 96
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " untuk hapus objek terpilih."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 608,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37]",
                                                children: "2. Stempel Cepat Elemen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 617,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-400",
                                                children: "Klik lalu tempel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 620,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 max-h-[360px] overflow-y-auto pr-1",
                                        children: STAMP_PRESETS.map((preset)=>{
                                            const isCurrentStamp = selectedTool === 'stamp' && selectedStamp.id === preset.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedTool('stamp');
                                                    setSelectedStamp(preset);
                                                },
                                                className: `w-full p-2.5 rounded-2xl text-left border transition-all flex items-center justify-between text-xs ${isCurrentStamp ? 'bg-[#FEF3C7] dark:bg-[#342738] border-[#B8860B] ring-2 ring-[#B8860B]/50' : 'bg-[#FAF7F2] dark:bg-[#201923] border-[#E5DACD] dark:border-[#382C3D] hover:border-[#B8860B]/40'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "truncate",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-[#221A18] dark:text-white truncate",
                                                                children: preset.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 640,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-[#7B6E67] dark:text-[#A79890]",
                                                                children: [
                                                                    preset.dimensions,
                                                                    " • ",
                                                                    preset.shape
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 643,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stamp$3e$__["Stamp"], {
                                                        className: `w-4 h-4 flex-shrink-0 ${isCurrentStamp ? 'text-[#B8860B]' : 'text-gray-400'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, preset.id, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 627,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-3xl overflow-hidden bg-[#FAF8F5] dark:bg-[#18131B] border border-[#D5C6B5] dark:border-[#3C3042] shadow-xl p-2 select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-2 flex items-center justify-between text-xs border-b border-[#E5DACD] dark:border-[#2C242E] bg-white/70 dark:bg-[#1C181E]/70 backdrop-blur-md rounded-2xl mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-[#865D36] dark:text-[#D4AF37]",
                                                    children: [
                                                        "Denah: ",
                                                        activeFloor === 'grand_ballroom' ? 'Grand Ballroom (100% Skala)' : 'Glasshouse Garden'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-[#7B6E67] dark:text-[#A79890]",
                                                    children: [
                                                        "(",
                                                        floorZones.length,
                                                        " Zona Terpasang)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 661,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        mouseCoord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[11px] text-[#B8860B] bg-[#FAF4ED] dark:bg-[#2A222D] px-2 py-0.5 rounded",
                                            children: [
                                                "X: ",
                                                mouseCoord.x,
                                                "% | Y: ",
                                                mouseCoord.y,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 671,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                    lineNumber: 660,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-white dark:bg-[#1C1720] border border-[#DFCFC0] dark:border-[#2C242E]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        ref: svgRef,
                                        viewBox: "0 0 100 100",
                                        className: `w-full h-full ${selectedTool === 'eraser' ? 'cursor-pointer' : selectedTool === 'stamp' ? 'cursor-cell' : selectedTool.startsWith('draw') ? 'cursor-crosshair' : 'cursor-default'}`,
                                        onMouseDown: handleMouseDown,
                                        onMouseMove: handleMouseMove,
                                        onMouseUp: handleMouseUp,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                        id: "designerGrid",
                                                        width: "4",
                                                        height: "4",
                                                        patternUnits: "userSpaceOnUse",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 4 0 L 0 0 0 4",
                                                            fill: "none",
                                                            stroke: "#E2D4C3",
                                                            strokeWidth: "0.1",
                                                            opacity: "0.4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 693,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "carpetGrad",
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "0",
                                                        y2: "1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#7F1D1D"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#991B1B"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 700,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 691,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                id: "grid-pattern-rect",
                                                x: "0",
                                                y: "0",
                                                width: "100",
                                                height: "100",
                                                fill: "url(#designerGrid)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 705,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "2",
                                                width: "96",
                                                height: "96",
                                                rx: "3",
                                                fill: "none",
                                                stroke: "#B8860B",
                                                strokeWidth: "0.5",
                                                strokeDasharray: "1, 1",
                                                opacity: "0.3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 706,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            activeFloor === 'grand_ballroom' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                id: "ballroom-guidelines",
                                                opacity: "0.5",
                                                pointerEvents: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M 46 95 L 46 22 L 54 22 L 54 95 Z",
                                                        fill: "url(#carpetGrad)",
                                                        opacity: "0.4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "50",
                                                        y1: "20",
                                                        x2: "50",
                                                        y2: "95",
                                                        stroke: "#EAB308",
                                                        strokeWidth: "0.2",
                                                        strokeDasharray: "1, 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "50",
                                                        y: "98",
                                                        fontSize: "1.3",
                                                        textAnchor: "middle",
                                                        fill: "#854D0E",
                                                        fontWeight: "bold",
                                                        children: "GERBANG ENTRANCE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    [
                                                        {
                                                            cx: 8,
                                                            cy: 30
                                                        },
                                                        {
                                                            cx: 8,
                                                            cy: 70
                                                        },
                                                        {
                                                            cx: 92,
                                                            cy: 30
                                                        },
                                                        {
                                                            cx: 92,
                                                            cy: 70
                                                        },
                                                        {
                                                            cx: 38,
                                                            cy: 54
                                                        },
                                                        {
                                                            cx: 62,
                                                            cy: 54
                                                        }
                                                    ].map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: col.cx,
                                                            cy: col.cy,
                                                            r: "1.3",
                                                            fill: "#D9C5B2",
                                                            stroke: "#854D0E",
                                                            strokeWidth: "0.2"
                                                        }, idx, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                id: "garden-guidelines",
                                                opacity: "0.5",
                                                pointerEvents: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "50",
                                                        cy: "12",
                                                        r: "7",
                                                        fill: "#60A5FA",
                                                        opacity: "0.2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M 46 95 L 46 32 L 54 32 L 54 95 Z",
                                                        fill: "#E8DEC8",
                                                        opacity: "0.6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 726,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            floorZones.map((zone)=>{
                                                const isSelected = selectedZoneId === zone.id;
                                                const isEraserMode = selectedTool === 'eraser';
                                                const { x, y, width, height, shape } = zone.coordinates;
                                                const posX = x - width / 2;
                                                const posY = y - height / 2;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    className: isEraserMode ? 'cursor-pointer hover:opacity-60 transition-opacity' : 'cursor-pointer',
                                                    onMouseDown: (e)=>{
                                                        e.stopPropagation();
                                                        if (selectedTool === 'eraser') {
                                                            onDeleteZone(zone.id);
                                                            if (selectedZoneId === zone.id) {
                                                                setSelectedZoneId(null);
                                                                setConfirmDeleteId(null);
                                                                setIsConfirmingInspectorDelete(false);
                                                            }
                                                            return;
                                                        }
                                                        setSelectedZoneId(zone.id);
                                                        setConfirmDeleteId(null);
                                                        setIsConfirmingInspectorDelete(false);
                                                        if (selectedTool === 'select') {
                                                            setIsDragging(true);
                                                            const coords = getSvgCoordinates(e);
                                                            setDragOffset({
                                                                x: coords.x - zone.coordinates.x,
                                                                y: coords.y - zone.coordinates.y
                                                            });
                                                        }
                                                    },
                                                    children: [
                                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: posX - 1.5,
                                                            y: posY - 1.5,
                                                            width: width + 3,
                                                            height: height + 3,
                                                            rx: "3",
                                                            fill: "none",
                                                            stroke: "#B8860B",
                                                            strokeWidth: "0.8",
                                                            strokeDasharray: "2, 1",
                                                            className: "animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        shape === 'circle' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: x,
                                                            cy: y,
                                                            r: width / 2,
                                                            fill: isSelected ? '#FEF3C7' : '#FFFFFF',
                                                            stroke: isSelected ? '#B8860B' : '#78685E',
                                                            strokeWidth: isSelected ? '1' : '0.4',
                                                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 786,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : shape === 'pill' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: posX,
                                                            y: posY,
                                                            width: width,
                                                            height: height,
                                                            rx: height / 2,
                                                            fill: isSelected ? '#FEF3C7' : '#FFFFFF',
                                                            stroke: isSelected ? '#B8860B' : '#78685E',
                                                            strokeWidth: isSelected ? '1' : '0.4',
                                                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 796,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: posX,
                                                            y: posY,
                                                            width: width,
                                                            height: height,
                                                            rx: "2",
                                                            fill: isSelected ? '#FEF3C7' : '#FFFFFF',
                                                            stroke: isSelected ? '#B8860B' : '#78685E',
                                                            strokeWidth: isSelected ? '1' : '0.4',
                                                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 808,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: x,
                                                            y: y - (height > 12 ? 1.5 : 0),
                                                            textAnchor: "middle",
                                                            dominantBaseline: "middle",
                                                            fontSize: width > 20 ? '2.4' : '1.9',
                                                            fontWeight: "bold",
                                                            fill: isSelected ? '#78350F' : '#2D2422',
                                                            fontFamily: "Plus Jakarta Sans, sans-serif",
                                                            children: zone.shortCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 822,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        height >= 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: x,
                                                            y: y + 2.5,
                                                            textAnchor: "middle",
                                                            dominantBaseline: "middle",
                                                            fontSize: "1.3",
                                                            fontWeight: "500",
                                                            fill: "#78685E",
                                                            children: zone.name.length > 20 ? zone.name.substring(0, 18) + '..' : zone.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            onMouseDown: (e)=>{
                                                                e.stopPropagation();
                                                                setIsResizing(true);
                                                                setResizeHandle('se');
                                                            },
                                                            className: "cursor-nwse-resize",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: posX + width,
                                                                cy: posY + height,
                                                                r: "1.6",
                                                                fill: "#B8860B",
                                                                stroke: "#FFFFFF",
                                                                strokeWidth: "0.4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 852,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, zone.id, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }),
                                            isDrawing && drawStart && drawCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: Math.min(drawStart.x, drawCurrent.x),
                                                y: Math.min(drawStart.y, drawCurrent.y),
                                                width: Math.abs(drawCurrent.x - drawStart.x),
                                                height: Math.abs(drawCurrent.y - drawStart.y),
                                                rx: "2",
                                                fill: "rgba(184, 134, 11, 0.25)",
                                                stroke: "#B8860B",
                                                strokeWidth: "0.8",
                                                strokeDasharray: "2, 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 876,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                        lineNumber: 679,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                    lineNumber: 678,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedZone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-2 mt-2 bg-white/70 dark:bg-[#1E1921]/70 backdrop-blur-md rounded-2xl border border-[#DFCFC0] dark:border-[#382C3D] text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Geser Presisi ",
                                                    selectedZone.shortCode,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 895,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 894,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>nudgeSelected(-1, 0),
                                                    className: "p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200",
                                                    title: "Geser Kiri",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>nudgeSelected(0, -1),
                                                    className: "p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200",
                                                    title: "Geser Atas",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>nudgeSelected(0, 1),
                                                    className: "p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200",
                                                    title: "Geser Bawah",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 917,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 912,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>nudgeSelected(1, 0),
                                                    className: "p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200",
                                                    title: "Geser Kanan",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 897,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: duplicateSelected,
                                                    className: "px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold flex items-center gap-1",
                                                    title: "Duplikat Elemen",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Copy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 929,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                confirmDeleteId === selectedZone.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded-lg border border-rose-300 dark:border-rose-800 animate-fadeIn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-rose-700 dark:text-rose-300",
                                                            children: "Yakin hapus?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                onDeleteZone(selectedZone.id);
                                                                setSelectedZoneId(null);
                                                                setConfirmDeleteId(null);
                                                                setIsConfirmingInspectorDelete(false);
                                                            },
                                                            className: "px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] cursor-pointer",
                                                            children: "Ya"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 940,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setConfirmDeleteId(null),
                                                            className: "px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] cursor-pointer",
                                                            children: "Batal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 952,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setConfirmDeleteId(selectedZone.id),
                                                    className: "px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer",
                                                    title: "Hapus Elemen dari Denah",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Hapus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 928,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                    lineNumber: 893,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                            lineNumber: 657,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37]",
                                            children: "3. Properti Zona Terpilih"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 981,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        selectedZone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#B8860B] text-white",
                                            children: selectedZone.shortCode
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 985,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                    lineNumber: 980,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedZone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                    children: "Nama Zona / Panggung"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 994,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: selectedZone.name,
                                                    onChange: (e)=>onUpdateZone({
                                                            ...selectedZone,
                                                            name: e.target.value
                                                        }),
                                                    className: "w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 995,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 993,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: "Kode Singkat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1005,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: selectedZone.shortCode,
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    shortCode: e.target.value
                                                                }),
                                                            className: "w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none font-mono"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1006,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1004,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: "Bentuk Bentang"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedZone.coordinates.shape || 'rect',
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    coordinates: {
                                                                        ...selectedZone.coordinates,
                                                                        shape: e.target.value
                                                                    }
                                                                }),
                                                            className: "w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "rect",
                                                                    children: "Kotak (Rect)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                    lineNumber: 1023,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "circle",
                                                                    children: "Bulat (Circle)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                    lineNumber: 1024,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "pill",
                                                                    children: "Lonjong (Pill)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                    lineNumber: 1025,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1013,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1003,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: [
                                                                "Posisi X: ",
                                                                selectedZone.coordinates.x,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "5",
                                                            max: "95",
                                                            value: selectedZone.coordinates.x,
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    coordinates: {
                                                                        ...selectedZone.coordinates,
                                                                        x: Number(e.target.value)
                                                                    }
                                                                }),
                                                            className: "w-full accent-[#B8860B]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1033,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1031,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: [
                                                                "Posisi Y: ",
                                                                selectedZone.coordinates.y,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1046,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "5",
                                                            max: "95",
                                                            value: selectedZone.coordinates.y,
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    coordinates: {
                                                                        ...selectedZone.coordinates,
                                                                        y: Number(e.target.value)
                                                                    }
                                                                }),
                                                            className: "w-full accent-[#B8860B]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1047,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: [
                                                                "Lebar: ",
                                                                selectedZone.coordinates.width,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1063,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "6",
                                                            max: "40",
                                                            value: selectedZone.coordinates.width,
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    coordinates: {
                                                                        ...selectedZone.coordinates,
                                                                        width: Number(e.target.value)
                                                                    }
                                                                }),
                                                            className: "w-full accent-[#B8860B]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1064,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1062,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: [
                                                                "Tinggi: ",
                                                                selectedZone.coordinates.height,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1077,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "6",
                                                            max: "35",
                                                            value: selectedZone.coordinates.height,
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    coordinates: {
                                                                        ...selectedZone.coordinates,
                                                                        height: Number(e.target.value)
                                                                    }
                                                                }),
                                                            className: "w-full accent-[#B8860B]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1078,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                    children: "Kategori Acara"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1093,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedZone.category,
                                                    onChange: (e)=>onUpdateZone({
                                                            ...selectedZone,
                                                            category: e.target.value
                                                        }),
                                                    className: "w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "stage_vip",
                                                            children: "👑 Pelaminan & VIP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1099,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "catering",
                                                            children: "🍽️ Katering & Gubukan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1100,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "dining",
                                                            children: "🪑 Meja Tamu Reguler"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1101,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "entertainment",
                                                            children: "🎶 Musik & Hiburan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1102,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "reception_ops",
                                                            children: "📋 Registrasi & WO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1103,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "outdoor_ceremony",
                                                            children: "🌿 Akad Outdoor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1104,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1094,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1092,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: "PIC Nama"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1110,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: selectedZone.pic.name,
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    pic: {
                                                                        ...selectedZone.pic,
                                                                        name: e.target.value
                                                                    }
                                                                }),
                                                            className: "w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1111,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                            children: "HT Channel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1122,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: selectedZone.pic.htChannel,
                                                            onChange: (e)=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    pic: {
                                                                        ...selectedZone.pic,
                                                                        htChannel: e.target.value
                                                                    }
                                                                }),
                                                            className: "w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none font-mono"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1123,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1121,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1108,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-[#4B3C35] dark:text-[#DDD0C5]",
                                                    children: "Status Operasional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1136,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-1.5 mt-1",
                                                    children: [
                                                        'ready',
                                                        'in_progress',
                                                        'attention'
                                                    ].map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onUpdateZone({
                                                                    ...selectedZone,
                                                                    status: st
                                                                }),
                                                            className: `py-1.5 rounded-lg text-[11px] font-bold capitalize transition-all ${selectedZone.status === st ? st === 'ready' ? 'bg-emerald-600 text-white' : st === 'in_progress' ? 'bg-amber-600 text-white' : 'bg-rose-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`,
                                                            children: st === 'ready' ? 'Siap' : st === 'in_progress' ? 'Proses' : 'Atensi'
                                                        }, st, false, {
                                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2 border-t border-[#E5DACD] dark:border-[#2C242E] flex justify-between items-center text-[11px] text-[#7B6E67] dark:text-[#A79890]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Perubahan posisi & data langsung tersimpan."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4 text-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1158,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-3 border-t border-[#E5DACD] dark:border-[#2C242E] space-y-2",
                                            children: isConfirmingInspectorDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-900/60 space-y-2 animate-fadeIn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                className: "w-4 h-4 text-rose-600 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 1168,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    'Hapus zona "',
                                                                    selectedZone.name,
                                                                    '"?'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 1169,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 1167,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-rose-600 dark:text-rose-400 leading-relaxed",
                                                        children: [
                                                            "Zona ini akan langsung dihapus dari denah layout ",
                                                            activeFloor === 'grand_ballroom' ? 'Grand Ballroom' : 'Glasshouse Garden',
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 pt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    onDeleteZone(selectedZone.id);
                                                                    setSelectedZoneId(null);
                                                                    setConfirmDeleteId(null);
                                                                    setIsConfirmingInspectorDelete(false);
                                                                },
                                                                className: "flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                        lineNumber: 1185,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Ya, Hapus Sekarang"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                        lineNumber: 1186,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 1175,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setIsConfirmingInspectorDelete(false),
                                                                className: "py-2 px-3 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer",
                                                                children: "Batal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                                lineNumber: 1188,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 1174,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 1166,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsConfirmingInspectorDelete(true),
                                                className: "w-full py-2.5 px-3 rounded-2xl text-xs font-bold bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-4 h-4 text-rose-600 dark:text-rose-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 1203,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Hapus Zona Ini dari Denah Layout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                                lineNumber: 1198,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1164,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                    lineNumber: 992,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-12 text-center text-xs text-[#8A796F] dark:text-[#9A8980] space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-8 h-8 text-[#B8860B] mx-auto opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-sm text-[#2D2422] dark:text-white",
                                            children: "Belum Ada Zona Terpilih"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] max-w-xs mx-auto",
                                            children: "Klik salah satu meja atau panggung pada kanvas untuk mengedit ukuran, posisi, nama, dan kru PIC."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                            lineNumber: 979,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                        lineNumber: 978,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FloorPlanDesigner.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FloorPlanDesigner.tsx",
        lineNumber: 470,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FloorPlanDesigner, "SfpdJ07CPoA1HgyL5NI8ePEsKvg=");
_c = FloorPlanDesigner;
var _c;
__turbopack_context__.k.register(_c, "FloorPlanDesigner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const THEME_STORAGE_KEY = 'urban_hive_theme';
const ThemeProvider = ({ children })=>{
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const root = document.documentElement;
            if (theme === 'dark') {
                root.classList.add('dark');
                root.style.colorScheme = 'dark';
            } else {
                root.classList.remove('dark');
                root.style.colorScheme = 'light';
            }
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        setThemeState((prev)=>prev === 'light' ? 'dark' : 'light');
    };
    const setTheme = (newTheme)=>{
        setThemeState(newTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            isDark: theme === 'dark',
            toggleTheme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThemeContext.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "a/I2Pz4jlASt48yPPSCSl9Hbhqo=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/weddingData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GUEST_LIST",
    ()=>GUEST_LIST,
    "HT_CHANNELS",
    ()=>HT_CHANNELS,
    "INITIAL_WEDDING_CONFIG",
    ()=>INITIAL_WEDDING_CONFIG,
    "INITIAL_ZONES",
    ()=>INITIAL_ZONES,
    "RUNDOWN_TIMELINE",
    ()=>RUNDOWN_TIMELINE,
    "VENDORS_LIST",
    ()=>VENDORS_LIST
]);
const INITIAL_WEDDING_CONFIG = {
    coupleName: '',
    groomName: '',
    brideName: '',
    dateStr: '',
    venueName: '',
    ballroomHall: '',
    totalGuests: 0,
    attendedGuests: 0,
    totalTables: 0,
    cateringPax: 0,
    activePhase: 'Persiapan & Setup',
    currentEvent: 'Belum dimulai'
};
const INITIAL_ZONES = [];
const RUNDOWN_TIMELINE = [];
const GUEST_LIST = [];
const VENDORS_LIST = [];
const HT_CHANNELS = [
    {
        channel: 'CH-01',
        name: 'Main WO & Show Director',
        frequency: '462.5625 MHz',
        user: 'Lead WO, MC, Stage Master, PA Pengantin'
    },
    {
        channel: 'CH-02',
        name: 'Catering & Banquet Service',
        frequency: '462.5875 MHz',
        user: 'Executive Chef, Catering Manager, Butler VIP'
    },
    {
        channel: 'CH-03',
        name: 'VIP Liaison & Family Escort',
        frequency: '462.6125 MHz',
        user: 'LO VVIP, LO Keluarga Pria, LO Wanita'
    },
    {
        channel: 'CH-04',
        name: 'Sound, Lighting & Media Doc',
        frequency: '462.6375 MHz',
        user: 'Audio Engineer, Lighting Director, Tim Dokumentasi'
    },
    {
        channel: 'CH-05',
        name: 'Security, Valet & Protokoler',
        frequency: '462.6625 MHz',
        user: 'Keamanan Gedung, Parkir Valet, Protokoler'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPABASE_ANON_KEY",
    ()=>SUPABASE_ANON_KEY,
    "SUPABASE_URL",
    ()=>SUPABASE_URL,
    "getSupabase",
    ()=>getSupabase,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Supabase Client Configuration for Next.js & Vercel
 * Works safely with or without active Supabase credentials
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://dxmefifactenstnpswle.supabase.co") || '';
const SUPABASE_ANON_KEY = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bWVmaWZhY3RlbnN0bnBzd2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1NzcwOTAsImV4cCI6MjEwNjE1MzA5MH0.8nmwKKjhQU8ijLvyiaLdhFC7EjLecQY7QJ1QWR0KBC4") || '';
const isSupabaseConfigured = ()=>{
    return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.startsWith('https://') && !SUPABASE_URL.includes('your-project'));
};
// Singleton client instance
let clientInstance = null;
const getSupabase = ()=>{
    if (!isSupabaseConfigured()) {
        return null;
    }
    if (!clientInstance) {
        clientInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_ANON_KEY, {
            auth: {
                persistSession: true,
                autoRefreshToken: true
            },
            realtime: {
                params: {
                    eventsPerSecond: 10
                }
            }
        });
    }
    return clientInstance;
};
const supabase = isSupabaseConfigured() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/supabaseService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteGuestFromSupabase",
    ()=>deleteGuestFromSupabase,
    "deleteRundownFromSupabase",
    ()=>deleteRundownFromSupabase,
    "deleteVendorFromSupabase",
    ()=>deleteVendorFromSupabase,
    "deleteZoneFromSupabase",
    ()=>deleteZoneFromSupabase,
    "fetchGuestsFromSupabase",
    ()=>fetchGuestsFromSupabase,
    "fetchRundownFromSupabase",
    ()=>fetchRundownFromSupabase,
    "fetchVendorsFromSupabase",
    ()=>fetchVendorsFromSupabase,
    "fetchWeddingConfigFromSupabase",
    ()=>fetchWeddingConfigFromSupabase,
    "fetchZonesFromSupabase",
    ()=>fetchZonesFromSupabase,
    "saveGuestsToSupabase",
    ()=>saveGuestsToSupabase,
    "saveRundownToSupabase",
    ()=>saveRundownToSupabase,
    "saveVendorsToSupabase",
    ()=>saveVendorsToSupabase,
    "saveWeddingConfigToSupabase",
    ()=>saveWeddingConfigToSupabase,
    "saveZonesToSupabase",
    ()=>saveZonesToSupabase,
    "seedAllDataToSupabase",
    ()=>seedAllDataToSupabase,
    "testSupabaseConnection",
    ()=>testSupabaseConnection
]);
/**
 * Supabase Data Service
 * Provides CRUD and Realtime synchronization for wedding management
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
const testSupabaseConnection = async ()=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        return {
            success: false,
            message: 'Supabase URL atau Anon Key belum dikonfigurasi di file .env'
        };
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) {
        return {
            success: false,
            message: 'Gagal inisialisasi Supabase client'
        };
    }
    try {
        const { error } = await client.from('wedding_config').select('id').limit(1);
        if (error) {
            if (error.code === '42P01') {
                return {
                    success: false,
                    message: 'Terkoneksi ke Supabase, namun tabel belum dibuat. Harap jalankan script schema.sql di Supabase SQL Editor.'
                };
            }
            return {
                success: false,
                message: `Error Supabase: ${error.message}`
            };
        }
        return {
            success: true,
            message: 'Koneksi ke database Supabase berhasil aktif!'
        };
    } catch (err) {
        return {
            success: false,
            message: err?.message || 'Gagal menghubungi server Supabase'
        };
    }
};
const fetchWeddingConfigFromSupabase = async ()=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return null;
    try {
        const { data, error } = await client.from('wedding_config').select('*').limit(1).single();
        if (error || !data) return null;
        return {
            coupleName: data.couple_name,
            groomName: data.groom_name,
            brideName: data.bride_name,
            dateStr: data.date_str || data.wedding_date || 'Sabtu, 24 Oktober 2026',
            venueName: data.venue_name,
            ballroomHall: data.ballroom_hall,
            activePhase: data.active_phase,
            currentEvent: data.current_event,
            totalGuests: data.total_guests,
            attendedGuests: data.attended_guests,
            totalTables: data.total_tables || 48,
            cateringPax: data.catering_pax
        };
    } catch  {
        return null;
    }
};
const saveWeddingConfigToSupabase = async (config)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const payload = {
            id: 'default_wedding',
            couple_name: config.coupleName,
            groom_name: config.groomName,
            bride_name: config.brideName,
            date_str: config.dateStr,
            venue_name: config.venueName,
            ballroom_hall: config.ballroomHall,
            active_phase: config.activePhase,
            current_event: config.currentEvent,
            total_guests: config.totalGuests,
            attended_guests: config.attendedGuests,
            total_tables: config.totalTables,
            catering_pax: config.cateringPax,
            updated_at: new Date().toISOString()
        };
        const { error } = await client.from('wedding_config').upsert(payload);
        return !error;
    } catch  {
        return false;
    }
};
const fetchZonesFromSupabase = async ()=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return null;
    try {
        const { data, error } = await client.from('venue_zones').select('*').order('created_at', {
            ascending: true
        });
        if (error || !data || data.length === 0) return null;
        return data.map((item)=>({
                id: item.id,
                name: item.name,
                shortCode: item.short_code,
                category: item.category,
                floor: item.floor,
                status: item.status,
                coordinates: item.coordinates,
                capacity: item.capacity,
                dimensions: item.dimensions,
                pic: item.pic,
                description: item.description,
                equipment: item.equipment || [],
                checklist: item.checklist || [],
                timeline: item.timeline || [],
                notes: item.notes || '',
                guestCount: item.guest_count,
                assignedGuests: item.assigned_guests,
                fnbDetails: item.fnb_details
            }));
    } catch  {
        return null;
    }
};
const saveZonesToSupabase = async (zones)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const records = zones.map((z)=>({
                id: z.id,
                name: z.name,
                short_code: z.shortCode,
                category: z.category,
                floor: z.floor,
                status: z.status,
                coordinates: z.coordinates,
                capacity: z.capacity,
                dimensions: z.dimensions,
                pic: z.pic,
                description: z.description,
                equipment: z.equipment,
                checklist: z.checklist,
                timeline: z.timeline,
                notes: z.notes,
                guest_count: z.guestCount,
                assigned_guests: z.assignedGuests,
                fnb_details: z.fnbDetails,
                updated_at: new Date().toISOString()
            }));
        const { error } = await client.from('venue_zones').upsert(records);
        return !error;
    } catch  {
        return false;
    }
};
const deleteZoneFromSupabase = async (zoneId)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const { error } = await client.from('venue_zones').delete().eq('id', zoneId);
        return !error;
    } catch  {
        return false;
    }
};
const fetchRundownFromSupabase = async ()=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return null;
    try {
        const { data, error } = await client.from('rundown_events').select('*').order('time', {
            ascending: true
        });
        if (error || !data || data.length === 0) return null;
        return data.map((item)=>({
                id: item.id,
                time: item.time,
                endTime: item.end_time || '',
                title: item.title,
                phase: item.phase,
                zoneId: item.zone_id,
                zoneName: item.zone_name,
                status: item.status,
                pic: item.pic || item.pic_name || '',
                htChannel: item.ht_channel,
                cues: item.cues || '',
                musicTrack: item.music_track || '',
                details: item.details || item.notes || ''
            }));
    } catch  {
        return null;
    }
};
const saveRundownToSupabase = async (events)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const records = events.map((ev)=>({
                id: ev.id,
                time: ev.time,
                end_time: ev.endTime,
                title: ev.title,
                phase: ev.phase,
                zone_id: ev.zoneId,
                zone_name: ev.zoneName,
                status: ev.status,
                pic: ev.pic,
                ht_channel: ev.htChannel,
                cues: ev.cues,
                music_track: ev.musicTrack,
                details: ev.details,
                updated_at: new Date().toISOString()
            }));
        const { error } = await client.from('rundown_events').upsert(records);
        return !error;
    } catch  {
        return false;
    }
};
const deleteRundownFromSupabase = async (eventId)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const { error } = await client.from('rundown_events').delete().eq('id', eventId);
        return !error;
    } catch  {
        return false;
    }
};
const fetchGuestsFromSupabase = async ()=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return null;
    try {
        const { data, error } = await client.from('guest_list').select('*').order('name', {
            ascending: true
        });
        if (error || !data || data.length === 0) return null;
        return data.map((g)=>({
                id: g.id,
                name: g.name,
                category: g.category,
                assignedZoneId: g.assigned_zone_id || g.table_zone_id || '',
                tableName: g.table_name || g.assigned_table || '',
                pax: g.pax,
                status: g.status,
                dietary: g.dietary,
                souvenirGiven: g.souvenir_given,
                seatNumber: g.seat_number
            }));
    } catch  {
        return null;
    }
};
const saveGuestsToSupabase = async (guests)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const records = guests.map((g)=>({
                id: g.id,
                name: g.name,
                category: g.category,
                assigned_zone_id: g.assignedZoneId,
                table_name: g.tableName,
                pax: g.pax,
                status: g.status,
                dietary: g.dietary,
                souvenir_given: g.souvenirGiven,
                seat_number: g.seatNumber,
                updated_at: new Date().toISOString()
            }));
        const { error } = await client.from('guest_list').upsert(records);
        return !error;
    } catch  {
        return false;
    }
};
const deleteGuestFromSupabase = async (guestId)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const { error } = await client.from('guest_list').delete().eq('id', guestId);
        return !error;
    } catch  {
        return false;
    }
};
const fetchVendorsFromSupabase = async ()=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return null;
    try {
        const { data, error } = await client.from('vendor_contacts').select('*');
        if (error || !data || data.length === 0) return null;
        return data.map((v)=>({
                id: v.id,
                category: v.category,
                company: v.company,
                picName: v.pic_name,
                phone: v.phone,
                assignedZones: v.assigned_zones || [],
                htChannel: v.ht_channel,
                readinessPercent: v.readiness_percent,
                status: v.status || 'Ready'
            }));
    } catch  {
        return null;
    }
};
const saveVendorsToSupabase = async (vendors)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const records = vendors.map((v)=>({
                id: v.id,
                category: v.category,
                company: v.company,
                pic_name: v.picName,
                phone: v.phone,
                assigned_zones: v.assignedZones,
                ht_channel: v.htChannel,
                readiness_percent: v.readinessPercent,
                status: v.status,
                updated_at: new Date().toISOString()
            }));
        const { error } = await client.from('vendor_contacts').upsert(records);
        return !error;
    } catch  {
        return false;
    }
};
const deleteVendorFromSupabase = async (vendorId)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!client) return false;
    try {
        const { error } = await client.from('vendor_contacts').delete().eq('id', vendorId);
        return !error;
    } catch  {
        return false;
    }
};
const seedAllDataToSupabase = async (config, zones, rundown, guests, vendors)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        return {
            success: false,
            message: 'Supabase belum dikonfigurasi di .env'
        };
    }
    try {
        await saveWeddingConfigToSupabase(config);
        await saveZonesToSupabase(zones);
        await saveRundownToSupabase(rundown);
        await saveGuestsToSupabase(guests);
        await saveVendorsToSupabase(vendors);
        return {
            success: true,
            message: 'Seluruh data berhasil di-upload dan disinkronkan ke Supabase Cloud!'
        };
    } catch (err) {
        return {
            success: false,
            message: err?.message || 'Gagal melakukan seed data ke Supabase'
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1y7uwsm._.js.map