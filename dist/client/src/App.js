"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useScrap_1 = require("./useScrap");
const react_bootstrap_1 = require("react-bootstrap");
const constants_1 = require("./constants");
const App = () => {
    const { data, isLoading, scrap, title } = (0, useScrap_1.useScrap)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container h-100 py-4" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Web Scrap" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h4", { children: "COEL" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "d-flex justify-content-between" }, { children: constants_1.COEL_BUTTONS.map(({ label, url }, idx) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, Object.assign({ className: "shadow-sm", disabled: isLoading, onClick: () => scrap("coel", label, url), variant: "warning" }, { children: label }), idx))) }))] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("section", { children: [isLoading && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-center" }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Spinner, { animation: "border" }) }))), !isLoading && data.length ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "mb-4" }, { children: title.toUpperCase() })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Table, Object.assign({ striped: true, bordered: true, hover: true, className: "shadow" }, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Nombre" }), (0, jsx_runtime_1.jsx)("th", { children: "Precio" }), (0, jsx_runtime_1.jsx)("th", {})] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map(({ link, name, price, }, idx) => {
                                            if (!name && !price)
                                                return null;
                                            return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: name }), (0, jsx_runtime_1.jsx)("td", { children: price }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ target: "_blank", rel: "noreferrer", href: link }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-link text-warning" }) })) })] }, idx));
                                        }) })] }))] })) : null] }), (0, jsx_runtime_1.jsx)("br", {})] })));
};
exports.default = App;
