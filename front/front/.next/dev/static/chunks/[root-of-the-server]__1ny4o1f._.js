(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/users/me.jsx\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/users/me.jsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/users/me.jsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/users/me";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/users/me.jsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[project]/components/FieldRenderer/FieldRenderer.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRenderer",
    ()=>FieldRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$json$2d$data$2d$files$2f$countryList$2e$json$2e5b$json$5d2e$cjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/json-data-files/countryList.json.[json].cjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.jsx [client] (ecmascript)");
;
;
;
;
;
;
const FieldRenderer = ({ fieldName, value, setFieldVal, options, island })=>{
    const inputType = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["inputMatcher"][fieldName] || "";
    const setValue = (val)=>setFieldVal({
            target: {
                name: fieldName,
                value: val
            }
        });
    switch(inputType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["inputTypes"].file:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "file",
                name: fieldName,
                onChange: setFieldVal
            }, void 0, false, {
                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["inputTypes"].textarea:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Textarea"], {
                value: value || "",
                name: fieldName,
                onChange: setFieldVal
            }, void 0, false, {
                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["inputTypes"].select:
            {
                if (fieldName === "dimotiki_enotita") {
                    const municipalities = island ? Object.values(options.attributes.toponimia[island] || {}) : [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: value || "",
                        onValueChange: setValue,
                        disabled: !island,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: municipalities.map((municipality)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: municipality,
                                        children: municipality
                                    }, municipality, false, {
                                        fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (fieldName === "island" || fieldName === "birth_place") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: value || "",
                        onValueChange: setValue,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: Object.keys(options.attributes.toponimia).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: key,
                                        children: key
                                    }, key, false, {
                                        fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (fieldName === "current_country") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: value || "",
                        onValueChange: setValue,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$json$2d$data$2d$files$2f$countryList$2e$json$2e5b$json$5d2e$cjs__$5b$client$5d$__$28$ecmascript$29$__["default"].map(({ label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: label,
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["inputTypes"].number:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "number",
                value: value || "",
                name: fieldName,
                onChange: setFieldVal
            }, void 0, false, {
                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                lineNumber: 92,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["inputTypes"].email:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "email",
                value: value || "",
                name: fieldName,
                onChange: setFieldVal
            }, void 0, false, {
                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["inputTypes"].date:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "date",
                value: value || "",
                name: fieldName,
                onChange: setFieldVal
            }, void 0, false, {
                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "text",
                value: value || "",
                name: fieldName,
                onChange: setFieldVal
            }, void 0, false, {
                fileName: "[project]/components/FieldRenderer/FieldRenderer.jsx",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_c = FieldRenderer;
var _c;
__turbopack_context__.k.register(_c, "FieldRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Profile/Profile.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTranslations.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Field({ label, value }) {
    if (!value) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Profile/Profile.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Profile/Profile.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Profile/Profile.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Field;
function Profile({ profile_data }) {
    _s();
    const { email, birth_place, birthdate, current_country, father_name, father_surname, island, mother_name, mother_surname, name, surname, current_city, postal_code, current_street, occupation, phone_number, other_groups } = profile_data;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-6 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex flex-col gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: t.meEmail,
                            value: email
                        }, void 0, false, {
                            fileName: "[project]/components/Profile/Profile.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: t.meName,
                            value: name
                        }, void 0, false, {
                            fileName: "[project]/components/Profile/Profile.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: t.meSurname,
                            value: surname
                        }, void 0, false, {
                            fileName: "[project]/components/Profile/Profile.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: t.meIslandOfOrigin,
                            value: island
                        }, void 0, false, {
                            fileName: "[project]/components/Profile/Profile.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: t.meCurrLocation,
                            value: current_country
                        }, void 0, false, {
                            fileName: "[project]/components/Profile/Profile.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: t.meBirthdate,
                            value: birthdate
                        }, void 0, false, {
                            fileName: "[project]/components/Profile/Profile.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Profile/Profile.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Profile/Profile.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: t.meFamilyData
                                }, void 0, false, {
                                    fileName: "[project]/components/Profile/Profile.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/Profile.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meBirthPlace,
                                        value: birth_place
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meFathersName,
                                        value: father_name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meFathersSurname,
                                        value: father_surname
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meMothersName,
                                        value: mother_name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meMothersSurname,
                                        value: mother_surname
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Profile/Profile.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Profile/Profile.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: t.mePersonalData
                                }, void 0, false, {
                                    fileName: "[project]/components/Profile/Profile.jsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/Profile.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meCurrCity,
                                        value: current_city
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.mePostalCode,
                                        value: postal_code
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meStreet,
                                        value: current_street
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.meOccupation,
                                        value: occupation
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: t.mePhone,
                                        value: phone_number
                                    }, void 0, false, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    other_groups && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: t.meOtherCommunities
                                            }, void 0, false, {
                                                fileName: "[project]/components/Profile/Profile.jsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: other_groups
                                            }, void 0, false, {
                                                fileName: "[project]/components/Profile/Profile.jsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Profile/Profile.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Profile/Profile.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Profile/Profile.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Profile/Profile.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Profile/Profile.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Profile, "snLx4uAi5BNr5g1l3xWlZJ4vJV4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c1 = Profile;
const __TURBOPACK__default__export__ = Profile;
var _c, _c1;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Profile/ProfileEdit.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formatters.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$profileEdit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/profileEdit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/helpers.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FieldRenderer$2f$FieldRenderer$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FieldRenderer/FieldRenderer.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nookies/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTranslations.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/radio-group.jsx [client] (ecmascript)");
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
;
;
function PermissionRadioGroup({ name, value, onChange, labels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        value: value,
        onValueChange: (val)=>onChange({
                target: {
                    name,
                    value: val
                }
            }),
        className: "flex w-auto shrink-0 flex-row gap-4",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].private,
            __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].authed,
            __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].public
        ].map((level, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-24 items-center justify-center gap-1.5 sm:justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                        value: level,
                        id: `${name}-${level}`,
                        "aria-label": labels[index]
                    }, void 0, false, {
                        fileName: "[project]/components/Profile/ProfileEdit.jsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `${name}-${level}`,
                        className: "text-xs text-muted-foreground sm:hidden",
                        children: labels[index]
                    }, void 0, false, {
                        fileName: "[project]/components/Profile/ProfileEdit.jsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                ]
            }, level, true, {
                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                lineNumber: 21,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Profile/ProfileEdit.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = PermissionRadioGroup;
function ProfileEdit({ profile_data, toggleEditOff }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { permissions, ...rest } = profile_data;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslations"])();
    const [permSettings, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$client$5d$__$28$ecmascript$29$__["flattenPermissions"])(permissions));
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        ...rest
    });
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleChange = (e)=>{
        const { name, value } = e.target;
        setPermissions({
            ...permSettings,
            [name]: value
        });
    };
    const updateField = (e)=>{
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };
    const setAllPermissions = (val)=>{
        const newPermissions = {};
        Object.keys(permSettings).forEach((key)=>{
            newPermissions[key] = val;
        });
        setPermissions(newPermissions);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formattedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$profileEdit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createUserData"])(userData, permSettings);
        const jwt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["parseCookies"])().jwt;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].put(("TURBOPACK compile-time value", "http://127.0.0.1:1337") + "/api/users/me?populate=*", formattedData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            }
        }).then(()=>{
            router.push("/users/me");
            toggleEditOff();
        }).catch((error)=>{
            console.error("An error occurred:", error);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileEdit.useEffect": ()=>{
            const fetchOptions = {
                "ProfileEdit.useEffect.fetchOptions": async ()=>{
                    const res = await fetch(("TURBOPACK compile-time value", "http://127.0.0.1:1337") + "/api/toponimia");
                    const { data } = await res.json();
                    setOptions(data);
                }
            }["ProfileEdit.useEffect.fetchOptions"];
            fetchOptions();
        }
    }["ProfileEdit.useEffect"], []);
    if (!options) {
        return null;
    }
    const permissionLabels = [
        t[__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].private],
        t[__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].authed],
        t[__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].public]
    ];
    const fields = Object.entries(permSettings).filter(([key])=>![
            "profile_img",
            "username"
        ].includes(key));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden items-center justify-end gap-4 pr-1 sm:flex",
                children: permissionLabels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-24 text-center text-xs font-medium whitespace-nowrap",
                        children: label
                    }, label, false, {
                        fileName: "[project]/components/Profile/ProfileEdit.jsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between rounded-md border p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "text-sm font-medium",
                        children: t.meSetAll
                    }, void 0, false, {
                        fileName: "[project]/components/Profile/ProfileEdit.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>setAllPermissions(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].private),
                                children: t.private
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>setAllPermissions(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].authed),
                                children: t.authenticated
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>setAllPermissions(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["permissionModel"].public),
                                children: t.public
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Profile/ProfileEdit.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: fields.map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 rounded-md border p-3 sm:flex-row sm:items-center sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium sm:w-40 sm:shrink-0",
                                children: t[`me${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["capitalize"])(key)}`]
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FieldRenderer$2f$FieldRenderer$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["FieldRenderer"], {
                                    value: userData[key],
                                    fieldName: key,
                                    setFieldVal: updateField,
                                    options: options,
                                    island: userData.island
                                }, void 0, false, {
                                    fileName: "[project]/components/Profile/ProfileEdit.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PermissionRadioGroup, {
                                name: key,
                                value: value,
                                onChange: toggleChange,
                                labels: permissionLabels
                            }, void 0, false, {
                                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/components/Profile/ProfileEdit.jsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "self-end",
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/components/Profile/ProfileEdit.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Profile/ProfileEdit.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(ProfileEdit, "umx+vo8HFyLYWyYWkxKxGKbSs1Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c1 = ProfileEdit;
const __TURBOPACK__default__export__ = ProfileEdit;
var _c, _c1;
__turbopack_context__.k.register(_c, "PermissionRadioGroup");
__turbopack_context__.k.register(_c1, "ProfileEdit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [client] (ecmascript) <export * as Slot>");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
            lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-9",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [client] (ecmascript) <locals>");
;
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10 [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("font-heading text-base leading-normal font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col gap-3 px-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex items-center rounded-b-xl px-(--card-spacing) [.border-t]:pt-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [client] (ecmascript) <locals>");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/radio-group.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__RadioGroup$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-radio-group/dist/index.mjs [client] (ecmascript) <export * as RadioGroup>");
;
;
;
;
function RadioGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__RadioGroup$3e$__["RadioGroup"].Root, {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("grid w-full gap-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/radio-group.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = RadioGroup;
function RadioGroupItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__RadioGroup$3e$__["RadioGroup"].Item, {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__RadioGroup$3e$__["RadioGroup"].Indicator, {
            "data-slot": "radio-group-indicator",
            className: "flex size-4 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground"
            }, void 0, false, {
                fileName: "[project]/components/ui/radio-group.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/radio-group.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/radio-group.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c1 = RadioGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "RadioGroup");
__turbopack_context__.k.register(_c1, "RadioGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [client] (ecmascript) <export * as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [client] (ecmascript) <export default as ChevronUpIcon>");
"use client";
;
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Root, {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Group, {
        "data-slot": "select-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("scroll-my-1 p-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Value, {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Trigger, {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex w-fit items-center justify-between gap-1.5 rounded-md border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "pointer-events-none size-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Content, {
            "data-slot": "select-content",
            "data-align-trigger": position === "item-aligned",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Viewport, {
                    "data-position": position,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)", position === "popper" && ""),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.jsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Label, {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("px-2 py-1.5 text-xs text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Item, {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemText, {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Separator, {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("pointer-events-none -mx-1 my-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollUpButton, {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/select.jsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollDownButton, {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/select.jsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/textarea.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [client] (ecmascript) <locals>");
;
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inputMatcher",
    ()=>inputMatcher,
    "inputTypes",
    ()=>inputTypes,
    "permissionModel",
    ()=>permissionModel,
    "privatePaths",
    ()=>privatePaths
]);
const permissionModel = {
    private: "private",
    public: "public",
    authed: "authenticated"
};
const inputTypes = {
    text: "text",
    textarea: "textarea",
    select: "select",
    number: "number",
    email: "email",
    date: "date",
    image: "file"
};
const inputMatcher = {
    birth_place: inputTypes.select,
    birthdate: inputTypes.date,
    current_city: inputTypes.text,
    current_country: inputTypes.select,
    current_street: inputTypes.text,
    email: inputTypes.email,
    father_name: inputTypes.text,
    father_surname: inputTypes.text,
    island: inputTypes.select,
    mother_name: inputTypes.text,
    mother_surname: inputTypes.text,
    name: inputTypes.text,
    occupation: inputTypes.text,
    other_groups: inputTypes.textarea,
    phone_number: inputTypes.number,
    postal_code: inputTypes.text,
    surname: inputTypes.text,
    dimotiki_enotita: inputTypes.select
};
const privatePaths = [
    "/users/me",
    "/radio",
    "/advisor",
    "/classes",
    "/services",
    "/communities"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useTranslations.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslations",
    ()=>useTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2f$en$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/translations/en.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2f$el$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/translations/el.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useTranslations = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { locale } = router;
    const t = locale === "en" ? __TURBOPACK__imported__module__$5b$project$5d2f$translations$2f$en$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$translations$2f$el$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
    return {
        t
    };
};
_s(useTranslations, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/json-data-files/countryList.json.[json].cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "value": "AF",
        "label": "Afghanistan"
    },
    {
        "value": "AX",
        "label": "Åland Islands"
    },
    {
        "value": "AL",
        "label": "Albania"
    },
    {
        "value": "DZ",
        "label": "Algeria"
    },
    {
        "value": "AS",
        "label": "American Samoa"
    },
    {
        "value": "AD",
        "label": "Andorra"
    },
    {
        "value": "AO",
        "label": "Angola"
    },
    {
        "value": "AI",
        "label": "Anguilla"
    },
    {
        "value": "AQ",
        "label": "Antarctica"
    },
    {
        "value": "AG",
        "label": "Antigua and Barbuda"
    },
    {
        "value": "AR",
        "label": "Argentina"
    },
    {
        "value": "AM",
        "label": "Armenia"
    },
    {
        "value": "AW",
        "label": "Aruba"
    },
    {
        "value": "AU",
        "label": "Australia"
    },
    {
        "value": "AT",
        "label": "Austria"
    },
    {
        "value": "AZ",
        "label": "Azerbaijan"
    },
    {
        "value": "BS",
        "label": "Bahamas"
    },
    {
        "value": "BH",
        "label": "Bahrain"
    },
    {
        "value": "BD",
        "label": "Bangladesh"
    },
    {
        "value": "BB",
        "label": "Barbados"
    },
    {
        "value": "BY",
        "label": "Belarus"
    },
    {
        "value": "BE",
        "label": "Belgium"
    },
    {
        "value": "BZ",
        "label": "Belize"
    },
    {
        "value": "BJ",
        "label": "Benin"
    },
    {
        "value": "BM",
        "label": "Bermuda"
    },
    {
        "value": "BT",
        "label": "Bhutan"
    },
    {
        "value": "BO",
        "label": "Bolivia, Plurinational State of"
    },
    {
        "value": "BQ",
        "label": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "value": "BA",
        "label": "Bosnia and Herzegovina"
    },
    {
        "value": "BW",
        "label": "Botswana"
    },
    {
        "value": "BV",
        "label": "Bouvet Island"
    },
    {
        "value": "BR",
        "label": "Brazil"
    },
    {
        "value": "IO",
        "label": "British Indian Ocean Territory"
    },
    {
        "value": "BN",
        "label": "Brunei Darussalam"
    },
    {
        "value": "BG",
        "label": "Bulgaria"
    },
    {
        "value": "BF",
        "label": "Burkina Faso"
    },
    {
        "value": "BI",
        "label": "Burundi"
    },
    {
        "value": "CV",
        "label": "Cabo Verde"
    },
    {
        "value": "KH",
        "label": "Cambodia"
    },
    {
        "value": "CM",
        "label": "Cameroon"
    },
    {
        "value": "CA",
        "label": "Canada"
    },
    {
        "value": "KY",
        "label": "Cayman Islands"
    },
    {
        "value": "CF",
        "label": "Central African Republic"
    },
    {
        "value": "TD",
        "label": "Chad"
    },
    {
        "value": "CL",
        "label": "Chile"
    },
    {
        "value": "CN",
        "label": "China"
    },
    {
        "value": "CX",
        "label": "Christmas Island"
    },
    {
        "value": "CC",
        "label": "Cocos (Keeling) Islands"
    },
    {
        "value": "CO",
        "label": "Colombia"
    },
    {
        "value": "KM",
        "label": "Comoros"
    },
    {
        "value": "CG",
        "label": "Congo"
    },
    {
        "value": "CD",
        "label": "Congo, Democratic Republic of the"
    },
    {
        "value": "CK",
        "label": "Cook Islands"
    },
    {
        "value": "CR",
        "label": "Costa Rica"
    },
    {
        "value": "HR",
        "label": "Croatia"
    },
    {
        "value": "CU",
        "label": "Cuba"
    },
    {
        "value": "CW",
        "label": "Curaçao"
    },
    {
        "value": "CY",
        "label": "Cyprus"
    },
    {
        "value": "CZ",
        "label": "Czechia"
    },
    {
        "value": "CI",
        "label": "Côte d'Ivoire"
    },
    {
        "value": "DK",
        "label": "Denmark"
    },
    {
        "value": "DJ",
        "label": "Djibouti"
    },
    {
        "value": "DM",
        "label": "Dominica"
    },
    {
        "value": "DO",
        "label": "Dominican Republic"
    },
    {
        "value": "EC",
        "label": "Ecuador"
    },
    {
        "value": "EG",
        "label": "Egypt"
    },
    {
        "value": "SV",
        "label": "El Salvador"
    },
    {
        "value": "GQ",
        "label": "Equatorial Guinea"
    },
    {
        "value": "ER",
        "label": "Eritrea"
    },
    {
        "value": "EE",
        "label": "Estonia"
    },
    {
        "value": "SZ",
        "label": "Eswatini"
    },
    {
        "value": "ET",
        "label": "Ethiopia"
    },
    {
        "value": "FK",
        "label": "Falkland Islands (Malvinas)"
    },
    {
        "value": "FO",
        "label": "Faroe Islands"
    },
    {
        "value": "FJ",
        "label": "Fiji"
    },
    {
        "value": "FI",
        "label": "Finland"
    },
    {
        "value": "FR",
        "label": "France"
    },
    {
        "value": "GF",
        "label": "French Guiana"
    },
    {
        "value": "PF",
        "label": "French Polynesia"
    },
    {
        "value": "TF",
        "label": "French Southern Territories"
    },
    {
        "value": "GA",
        "label": "Gabon"
    },
    {
        "value": "GM",
        "label": "Gambia"
    },
    {
        "value": "GE",
        "label": "Georgia"
    },
    {
        "value": "DE",
        "label": "Germany"
    },
    {
        "value": "GH",
        "label": "Ghana"
    },
    {
        "value": "GI",
        "label": "Gibraltar"
    },
    {
        "value": "GR",
        "label": "Greece"
    },
    {
        "value": "GL",
        "label": "Greenland"
    },
    {
        "value": "GD",
        "label": "Grenada"
    },
    {
        "value": "GP",
        "label": "Guadeloupe"
    },
    {
        "value": "GU",
        "label": "Guam"
    },
    {
        "value": "GT",
        "label": "Guatemala"
    },
    {
        "value": "GG",
        "label": "Guernsey"
    },
    {
        "value": "GN",
        "label": "Guinea"
    },
    {
        "value": "GW",
        "label": "Guinea-Bissau"
    },
    {
        "value": "GY",
        "label": "Guyana"
    },
    {
        "value": "HT",
        "label": "Haiti"
    },
    {
        "value": "HM",
        "label": "Heard Island and McDonald Islands"
    },
    {
        "value": "VA",
        "label": "Holy See"
    },
    {
        "value": "HN",
        "label": "Honduras"
    },
    {
        "value": "HK",
        "label": "Hong Kong"
    },
    {
        "value": "HU",
        "label": "Hungary"
    },
    {
        "value": "IS",
        "label": "Iceland"
    },
    {
        "value": "IN",
        "label": "India"
    },
    {
        "value": "ID",
        "label": "Indonesia"
    },
    {
        "value": "IR",
        "label": "Iran, Islamic Republic of"
    },
    {
        "value": "IQ",
        "label": "Iraq"
    },
    {
        "value": "IE",
        "label": "Ireland"
    },
    {
        "value": "IM",
        "label": "Isle of Man"
    },
    {
        "value": "IL",
        "label": "Israel"
    },
    {
        "value": "IT",
        "label": "Italy"
    },
    {
        "value": "JM",
        "label": "Jamaica"
    },
    {
        "value": "JP",
        "label": "Japan"
    },
    {
        "value": "JE",
        "label": "Jersey"
    },
    {
        "value": "JO",
        "label": "Jordan"
    },
    {
        "value": "KZ",
        "label": "Kazakhstan"
    },
    {
        "value": "KE",
        "label": "Kenya"
    },
    {
        "value": "KI",
        "label": "Kiribati"
    },
    {
        "value": "KP",
        "label": "Korea, Democratic People's Republic of"
    },
    {
        "value": "KR",
        "label": "Korea, Republic of"
    },
    {
        "value": "KW",
        "label": "Kuwait"
    },
    {
        "value": "KG",
        "label": "Kyrgyzstan"
    },
    {
        "value": "LA",
        "label": "Lao People's Democratic Republic"
    },
    {
        "value": "LV",
        "label": "Latvia"
    },
    {
        "value": "LB",
        "label": "Lebanon"
    },
    {
        "value": "LS",
        "label": "Lesotho"
    },
    {
        "value": "LR",
        "label": "Liberia"
    },
    {
        "value": "LY",
        "label": "Libya"
    },
    {
        "value": "LI",
        "label": "Liechtenstein"
    },
    {
        "value": "LT",
        "label": "Lithuania"
    },
    {
        "value": "LU",
        "label": "Luxembourg"
    },
    {
        "value": "MO",
        "label": "Macao"
    },
    {
        "value": "MG",
        "label": "Madagascar"
    },
    {
        "value": "MW",
        "label": "Malawi"
    },
    {
        "value": "MY",
        "label": "Malaysia"
    },
    {
        "value": "MV",
        "label": "Maldives"
    },
    {
        "value": "ML",
        "label": "Mali"
    },
    {
        "value": "MT",
        "label": "Malta"
    },
    {
        "value": "MH",
        "label": "Marshall Islands"
    },
    {
        "value": "MQ",
        "label": "Martinique"
    },
    {
        "value": "MR",
        "label": "Mauritania"
    },
    {
        "value": "MU",
        "label": "Mauritius"
    },
    {
        "value": "YT",
        "label": "Mayotte"
    },
    {
        "value": "MX",
        "label": "Mexico"
    },
    {
        "value": "FM",
        "label": "Micronesia, Federated States of"
    },
    {
        "value": "MD",
        "label": "Moldova, Republic of"
    },
    {
        "value": "MC",
        "label": "Monaco"
    },
    {
        "value": "MN",
        "label": "Mongolia"
    },
    {
        "value": "ME",
        "label": "Montenegro"
    },
    {
        "value": "MS",
        "label": "Montserrat"
    },
    {
        "value": "MA",
        "label": "Morocco"
    },
    {
        "value": "MZ",
        "label": "Mozambique"
    },
    {
        "value": "MM",
        "label": "Myanmar"
    },
    {
        "value": "NA",
        "label": "Namibia"
    },
    {
        "value": "NR",
        "label": "Nauru"
    },
    {
        "value": "NP",
        "label": "Nepal"
    },
    {
        "value": "NL",
        "label": "Netherlands"
    },
    {
        "value": "NC",
        "label": "New Caledonia"
    },
    {
        "value": "NZ",
        "label": "New Zealand"
    },
    {
        "value": "NI",
        "label": "Nicaragua"
    },
    {
        "value": "NE",
        "label": "Niger"
    },
    {
        "value": "NG",
        "label": "Nigeria"
    },
    {
        "value": "NU",
        "label": "Niue"
    },
    {
        "value": "NF",
        "label": "Norfolk Island"
    },
    {
        "value": "MK",
        "label": "North Macedonia"
    },
    {
        "value": "MP",
        "label": "Northern Mariana Islands"
    },
    {
        "value": "NO",
        "label": "Norway"
    },
    {
        "value": "OM",
        "label": "Oman"
    },
    {
        "value": "PK",
        "label": "Pakistan"
    },
    {
        "value": "PW",
        "label": "Palau"
    },
    {
        "value": "PS",
        "label": "Palestine, State of"
    },
    {
        "value": "PA",
        "label": "Panama"
    },
    {
        "value": "PG",
        "label": "Papua New Guinea"
    },
    {
        "value": "PY",
        "label": "Paraguay"
    },
    {
        "value": "PE",
        "label": "Peru"
    },
    {
        "value": "PH",
        "label": "Philippines"
    },
    {
        "value": "PN",
        "label": "Pitcairn"
    },
    {
        "value": "PL",
        "label": "Poland"
    },
    {
        "value": "PT",
        "label": "Portugal"
    },
    {
        "value": "PR",
        "label": "Puerto Rico"
    },
    {
        "value": "QA",
        "label": "Qatar"
    },
    {
        "value": "RO",
        "label": "Romania"
    },
    {
        "value": "RU",
        "label": "Russian Federation"
    },
    {
        "value": "RW",
        "label": "Rwanda"
    },
    {
        "value": "RE",
        "label": "Réunion"
    },
    {
        "value": "BL",
        "label": "Saint Barthélemy"
    },
    {
        "value": "SH",
        "label": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "value": "KN",
        "label": "Saint Kitts and Nevis"
    },
    {
        "value": "LC",
        "label": "Saint Lucia"
    },
    {
        "value": "MF",
        "label": "Saint Martin (French part)"
    },
    {
        "value": "PM",
        "label": "Saint Pierre and Miquelon"
    },
    {
        "value": "VC",
        "label": "Saint Vincent and the Grenadines"
    },
    {
        "value": "WS",
        "label": "Samoa"
    },
    {
        "value": "SM",
        "label": "San Marino"
    },
    {
        "value": "ST",
        "label": "Sao Tome and Principe"
    },
    {
        "value": "SA",
        "label": "Saudi Arabia"
    },
    {
        "value": "SN",
        "label": "Senegal"
    },
    {
        "value": "RS",
        "label": "Serbia"
    },
    {
        "value": "SC",
        "label": "Seychelles"
    },
    {
        "value": "SL",
        "label": "Sierra Leone"
    },
    {
        "value": "SG",
        "label": "Singapore"
    },
    {
        "value": "SX",
        "label": "Sint Maarten (Dutch part)"
    },
    {
        "value": "SK",
        "label": "Slovakia"
    },
    {
        "value": "SI",
        "label": "Slovenia"
    },
    {
        "value": "SB",
        "label": "Solomon Islands"
    },
    {
        "value": "SO",
        "label": "Somalia"
    },
    {
        "value": "ZA",
        "label": "South Africa"
    },
    {
        "value": "GS",
        "label": "South Georgia and the South Sandwich Islands"
    },
    {
        "value": "SS",
        "label": "South Sudan"
    },
    {
        "value": "ES",
        "label": "Spain"
    },
    {
        "value": "LK",
        "label": "Sri Lanka"
    },
    {
        "value": "SD",
        "label": "Sudan"
    },
    {
        "value": "SR",
        "label": "Suriname"
    },
    {
        "value": "SJ",
        "label": "Svalbard and Jan Mayen"
    },
    {
        "value": "SE",
        "label": "Sweden"
    },
    {
        "value": "CH",
        "label": "Switzerland"
    },
    {
        "value": "SY",
        "label": "Syrian Arab Republic"
    },
    {
        "value": "TW",
        "label": "Taiwan, Province of China"
    },
    {
        "value": "TJ",
        "label": "Tajikistan"
    },
    {
        "value": "TZ",
        "label": "Tanzania, United Republic of"
    },
    {
        "value": "TH",
        "label": "Thailand"
    },
    {
        "value": "TL",
        "label": "Timor-Leste"
    },
    {
        "value": "TG",
        "label": "Togo"
    },
    {
        "value": "TK",
        "label": "Tokelau"
    },
    {
        "value": "TO",
        "label": "Tonga"
    },
    {
        "value": "TT",
        "label": "Trinidad and Tobago"
    },
    {
        "value": "TN",
        "label": "Tunisia"
    },
    {
        "value": "TR",
        "label": "Turkey"
    },
    {
        "value": "TM",
        "label": "Turkmenistan"
    },
    {
        "value": "TC",
        "label": "Turks and Caicos Islands"
    },
    {
        "value": "TV",
        "label": "Tuvalu"
    },
    {
        "value": "UG",
        "label": "Uganda"
    },
    {
        "value": "UA",
        "label": "Ukraine"
    },
    {
        "value": "AE",
        "label": "United Arab Emirates"
    },
    {
        "value": "GB",
        "label": "United Kingdom"
    },
    {
        "value": "UM",
        "label": "United States Minor Outlying Islands"
    },
    {
        "value": "US",
        "label": "United States"
    },
    {
        "value": "UY",
        "label": "Uruguay"
    },
    {
        "value": "UZ",
        "label": "Uzbekistan"
    },
    {
        "value": "VU",
        "label": "Vanuatu"
    },
    {
        "value": "VE",
        "label": "Venezuela, Bolivarian Republic of"
    },
    {
        "value": "VN",
        "label": "Viet Nam"
    },
    {
        "value": "VG",
        "label": "Virgin Islands, British"
    },
    {
        "value": "VI",
        "label": "Virgin Islands, U.S."
    },
    {
        "value": "WF",
        "label": "Wallis and Futuna"
    },
    {
        "value": "EH",
        "label": "Western Sahara"
    },
    {
        "value": "YE",
        "label": "Yemen"
    },
    {
        "value": "ZM",
        "label": "Zambia"
    },
    {
        "value": "ZW",
        "label": "Zimbabwe"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/users/me.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__N_SSP",
    ()=>__N_SSP,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTranslations.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profile$2f$Profile$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Profile/Profile.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profile$2f$ProfileEdit$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Profile/ProfileEdit.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Me = ({ data })=>{
    _s();
    const { email, profile_data } = data;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslations"])();
    const [isEdit, setEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleEdit = ()=>setEdit(!isEdit);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex max-w-4xl flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: t.meTitle
                    }, void 0, false, {
                        fileName: "[project]/pages/users/me.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: isEdit ? "outline" : "default",
                        onClick: toggleEdit,
                        children: isEdit ? t.meCancel : t.meEdit
                    }, void 0, false, {
                        fileName: "[project]/pages/users/me.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/users/me.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profile$2f$ProfileEdit$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                profile_data: {
                    ...profile_data,
                    email
                },
                toggleEditOff: ()=>setEdit(false)
            }, void 0, false, {
                fileName: "[project]/pages/users/me.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profile$2f$Profile$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                profile_data: {
                    ...profile_data,
                    email
                }
            }, void 0, false, {
                fileName: "[project]/pages/users/me.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/users/me.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Me, "VIcZBK27LxXcbDLymFtDkOQK3+8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranslations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = Me;
var __N_SSP = true;
const __TURBOPACK__default__export__ = Me;
var _c;
__turbopack_context__.k.register(_c, "Me");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/translations/el.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    home: "Απόδημοι Αιγαίου",
    newsTitle: "Νέα",
    aboutTitle: "Σχετικά",
    userTitle: "Χρήστες",
    contactTitle: "Επικοινωνήστε μαζί μας",
    contactCTA: "Συμπληρώστε την φόρμα",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "Το email σας ",
    contactNameLabel: "Όνομα",
    contactNamePlaceholder: "Το όνομα σας",
    contactMessageLabel: "Μήνυμα",
    contactMessagePlaceholder: "Γράψτε το μήνυμα σας εδώ",
    contactSuccessMessage: "Το μήνυμά σας στάλθηκε, ευχαριστούμε!",
    radioTitle: "Ραδιοφωνικοί σταθμοί",
    advisorTitle: "Σύμβουλοι & Χρήσιμα στοιχεία επικοινωνίας",
    classesTitle: "Μαθηματα",
    classesKidsBubbleLabel: "ΠΑΙΔΙΚΑ",
    servicesTitle: "Υπηρεσίες",
    communitiesTitle: "Κοινώτητες",
    communitiesCommunityLabel: "Όνομα",
    communitiesEmailLabel: "Email",
    communitiesPhoneLabel: "Τηλέφωνο",
    communitiesAddressLabel: "Διεύθυνση",
    meTitle: "Το προφίλ μου",
    meCancel: "Ακύρωση",
    meEdit: "Επεξεργασία",
    meEmail: "Email",
    meName: "Όνομα",
    meSurname: "Επίθετο",
    meIslandOfOrigin: "Νησι καταγωγής",
    meCurrLocation: "Χώρα διαμονής",
    meBirthDate: "Ημερομηνία γέννησης",
    meFamiltyData: "Οικογενειακά στοιχεία",
    meBirthPlace: "Τόπος γέννησης",
    meFathersName: "Όνομα πατέρα",
    meFathersSurname: "Επίθετο Πατέρα",
    meFamilyData: "Οικογενειακά Δεδομένα",
    meMothersName: "Όνομα μητέρας",
    meMothersSurname: "Επίθετο Μητέρας",
    mePersonalData: "Προσωπικά Στοιχεία",
    meCurrCity: "Πόλη διαμονής",
    mePostalCode: "ΤΚ",
    meStreet: "Διεύθυνση",
    meOccupation: "Επάγγελμα",
    mePhone: "Τηλέφωνο",
    meOtherCommunities: "Άλλες Κοιν´λωτητες",
    meField: "Ονομα Πεδίου",
    private: "Κρυφό",
    authenticated: "Χρήστες",
    public: "Δημόσιο",
    meIsland: "Νησι",
    meBirthdate: "Ημερομηνία γέννησης",
    meFatherName: "Όνομα πατέρα",
    meMotherName: "Όνομα μητέρας",
    mePostalCode: "ΤΚ",
    meCurrentCity: "Τρέχουσα Πόλη",
    meOtherGroups: "Άλλες Κοινότητες",
    mePhoneNumber: "Τηλέφωνο",
    meCurrentStreet: "Τρέχουσα Διεύθυνση",
    meFatherSurname: "Επίθετο πατέρα",
    meMotherSurname: "Επίθετο μητέρας",
    meCurrentCountry: "Τρέχουσα Χώρα",
    meDimotikiEnotita: "Δημοτική Ενότητα",
    loginTitle: "Σύνδεση",
    loginEmail: "Email",
    loginEmailPlaceholder: "Συμπλήρωσε το email σου",
    loginPassword: "Password",
    loginPasswordPlaceholder: "Συμπλήρωσε τον κωδικό σου",
    loginBtnLogin: "Σύνδεση",
    navbarProfile: "Προφίλ",
    navbarLogout: "Αποσύνδεση",
    registerTitle: "Εγγραφή",
    registerEmail: "Email",
    registerEmailPlaceholder: "Συμπλήρωσε το email σου",
    registerPassword: "Password",
    registerPasswordPlaceholder: "Συμπλήρωσε τον κωδικό σου",
    registerName: "Όνομα",
    registerNamePlaceholder: "Συμπλήρωσε το ονομα σου",
    registerSurname: "Επίθετο",
    registerSurnamenPlaceholder: "Συμπλήρωσε το επίθετο σου",
    registerIsland: "Νήσι",
    registerMunicipality: "Δημοτική Κοινότητα",
    registerCountry: "Χώρα",
    registerBtn: "Εγγραφή",
    burgerMenuLabel: "Μενού",
    chartUserCountryLabel: "Αριθμός Χρηστών ανά Χώρα",
    chartUserIslandLabel: "Αριθμός Χρηστών ανά νησί",
    chartUserDimotikiEnotitaLabel: "Αριθμός Χρηστών ανά Δήμο/Δημοτικη Ενότητα"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/translations/en.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    homeTitle: "Expatriates of the Aegean",
    newsTitle: "News",
    aboutTitle: "About",
    userTitle: "Users",
    contactTitle: "Contact Us",
    contactCTA: "Fill the form below",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "Fill in your email",
    contactNameLabel: "Name",
    contactNamePlaceholder: "Your name",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "Write your message here",
    contactSuccessMessage: "Your message has been sent, thank you!",
    radioTitle: "Radio Stations",
    advisorTitle: "Useful Information & Contacts",
    classesTitle: "Classes",
    classesKidsBubbleLabel: "KIDS",
    servicesTitle: "Services",
    communitiesTitle: "Communities",
    communitiesCommunityLabel: "Name",
    communitiesEmailLabel: "Email",
    communitiesPhoneLabel: "Phone",
    communitiesAddressLabel: "Address",
    meTitle: " My Profile",
    meCancel: "Cancel",
    meEdit: "Edit",
    meEmail: "Email",
    meName: "Name",
    meSurname: "Surname",
    meIslandOfOrigin: "Island of Origin",
    meCurrLocation: "Current Country",
    meBirthDate: "Birth Date",
    meFamiltyData: "Family Data",
    meBirthPlace: "Birth Place",
    meFathersName: "Father's Name",
    meFathersSurname: "Father's Surname",
    meFamilyData: "Family Data",
    meMothersName: "Mother's Name",
    meMothersSurname: "Mother's Surname",
    mePersonalData: "Personal Data",
    meCurrCity: "Current City",
    mePostalCode: "Postal Code",
    meStreet: "Street Address",
    meOccupation: "Occupation",
    mePhone: "Phone",
    meOtherCommunities: "Other Communities",
    meField: "Field Name",
    private: "Private",
    authenticated: "Authenticated",
    public: "Public",
    meIsland: "Island",
    meBirthdate: "Birth Date",
    meFatherName: "Father's Name",
    meMotherName: "Mother's Name",
    mePostalCode: "Postal Code",
    meCurrentCity: "Current City",
    meOtherGroups: "Other Groups",
    mePhoneNumber: "Phone Number",
    meCurrentStreet: "Current Street",
    meFatherSurname: "Father's Surname",
    meMotherSurname: "Mother's Surname",
    meCurrentCountry: "Current Country",
    meDimotikiEnotita: "Municipality Group",
    loginTitle: "Login",
    loginEmail: "Email",
    loginEmailPlaceholder: "Fill in your email",
    loginPassword: "Password",
    loginPasswordPlaceholder: "Fill in your password",
    loginBtnLogin: "Login",
    navbarProfile: "Profile",
    navbarLogout: "Logout",
    registerTitle: "Register",
    registerEmail: "Email",
    registerEmailPlaceholder: "Fill in your email",
    registerPassword: "Password",
    registerPasswordPlaceholder: "Fill in your password",
    registerName: "Name",
    registerNamePlaceholder: "Fill in your name",
    registerSurname: "Surname",
    registerSurnamenPlaceholder: "Fill in your surname",
    registerIsland: "Island",
    registerMunicipality: "Municipality",
    registerCountry: "Country",
    registerBtn: "Register",
    burgerMenuLabel: "Menu",
    chartUserCountryLabel: "Users per Country",
    chartUserIslandLabel: "Users per Island",
    chartUserDimotikiEnotitaLabel: "Users per Municipality"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/dataFormatters.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatImage",
    ()=>formatImage,
    "getImageUrl",
    ()=>getImageUrl,
    "getSingleImageUrl",
    ()=>getSingleImageUrl,
    "parseDataFromRequestSingleType",
    ()=>parseDataFromRequestSingleType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formatters.js [client] (ecmascript)");
;
const formatImage = (imgArray)=>{
    if (!imgArray) return [];
    const images = imgArray.map((img)=>{
        return {
            original: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addLocalhostToUri"])(img?.attributes?.formats?.large?.url),
            thumbnail: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addLocalhostToUri"])(img?.attributes?.formats?.thumbnail?.url)
        };
    });
    return images;
};
const getImageUrl = (imgObj, size = "large")=>{
    if (imgObj?.data[0]?.attributes?.formats[size].url) {
        return `${imgObj.data[0].attributes.formats[size].url}`;
    }
    return null;
};
const getSingleImageUrl = (imgObj, size = "large")=>{
    if (imgObj?.data?.attributes?.formats?.[size]?.url) {
        return `${imgObj.data.attributes.formats?.[size].url}`;
    }
    if (imgObj?.data?.attributes?.url) {
        return `${imgObj.data.attributes.url}`;
    }
    return null;
};
const parseDataFromRequestSingleType = ({ data })=>{
    if (data?.attributes) return data.attributes;
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/formatters.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLocalhostToUri",
    ()=>addLocalhostToUri,
    "flattenPermissions",
    ()=>flattenPermissions,
    "parse250Chars",
    ()=>parse250Chars,
    "replaceSpacesToDash",
    ()=>replaceSpacesToDash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const replaceSpacesToDash = (str)=>{
    return str.replace(/\s+/g, "_");
};
const parse250Chars = (str)=>{
    return str.substring(0, 250);
};
const addLocalhostToUri = (uri)=>{
    return ("TURBOPACK compile-time value", "http://127.0.0.1:1337") + uri;
};
const flattenPermissions = (permissions)=>{
    const newPermissions = {};
    Object.keys(permissions).forEach((key)=>{
        const fieldKey = permissions[key];
        // skip iteration for everything key
        if (key === "everything") {
            return;
        }
        // if is profile_data object
        if (key === "profile_data") {
            Object.keys(permissions.profile_data).forEach((key)=>{
                const keyPermission = permissions.profile_data[key];
                newPermissions[key] = keyPermission;
            });
        } else {
            newPermissions[key] = fieldKey;
        }
    });
    return newPermissions;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/helpers.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalize",
    ()=>capitalize,
    "getRandomColors",
    ()=>getRandomColors,
    "localeUrl",
    ()=>localeUrl
]);
const colorPalette = [
    "#12B0E8",
    "#38CC77",
    "#EDBF69",
    "#E07C24",
    "#6A1B4D",
    "#8D3DAF",
    "#B4161B",
    "#A77B06"
];
const getRandomColors = (length)=>{
    const colors = [];
    for(let i = 0; i < length; i++){
        colors.push(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
    }
    return colors;
};
const localeUrl = (url, locale)=>{
    if (!locale || locale === "en") return url;
    if (url.includes("?")) {
        return `${url}&locale=${locale}`;
    } else {
        return `${url}?locale=${locale}`;
    }
};
const capitalize = (str)=>{
    return str.split("_").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join("");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formatters.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataFormatters$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/dataFormatters.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$profileEdit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/profileEdit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/helpers.js [client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/profileEdit.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// formater data for put request
__turbopack_context__.s([
    "createUserData",
    ()=>createUserData
]);
const createUserData = (data, permissions)=>{
    return {
        email: data.email,
        username: data.email,
        profile_data: {
            name: data.name,
            island: data.island,
            surname: data.surname,
            birthdate: data.birthdate,
            occupation: data.occupation,
            birth_place: data.birth_place,
            father_name: data.father_name,
            mother_name: data.mother_name,
            postal_code: data.postal_code,
            current_city: data.current_city,
            other_groups: data.other_groups,
            phone_number: data.phone_number,
            current_street: data.current_street,
            father_surname: data.father_surname,
            mother_surname: data.mother_surname,
            current_country: data.current_country,
            dimotiki_enotita: data.dimotiki_enotita,
            permissions: {
                email: permissions.email,
                username: permissions.username,
                profile_data: {
                    name: permissions.name,
                    island: permissions.island,
                    surname: permissions.surname,
                    birthdate: permissions.birthdate,
                    occupation: permissions.occupation,
                    birth_place: permissions.birth_place,
                    father_name: permissions.father_name,
                    mother_name: permissions.mother_name,
                    postal_code: permissions.postal_code,
                    current_city: permissions.current_city,
                    other_groups: permissions.other_groups,
                    phone_number: permissions.phone_number,
                    current_street: permissions.current_street,
                    father_surname: permissions.father_surname,
                    mother_surname: permissions.mother_surname,
                    current_country: permissions.current_country,
                    dimotiki_enotita: permissions.dimotiki_enotita
                }
            }
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1ny4o1f._.js.map