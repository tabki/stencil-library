/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, docScripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    if (discoverPublicPath) {
        x = docScripts[docScripts.length - 1];
        if (x && x.src) {
            y = x.src.split('/').slice(0, -1);
            publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + (usePolyfills(win, win.location, x, 'import("")') ? appCorePolyfilled : appCore);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=es5') > -1) {
        // force es5 polyfill w/ ?core=es5 querystring
        return true;
    }
    if (location.protocol === 'file:') {
        // file protocol cannot use dynamic module imports
        return true;
    }
    if (!win.customElements) {
        // does not have customElement support
        return true;
    }
    if (!win.fetch) {
        // does not have fetch support
        return true;
    }
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // does not have CSS variables support
        return true;
    }
    if (!('noModule' in scriptElm)) {
        // does not have static ES module support
        return true;
    }
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}


init(win, doc, doc.scripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "trustyle","trustyle","/trustyle/",true,"trustyle.core.js","es5-build-disabled.js","hydrated",[["function-as-prop","function-as-prop",0,[["eventHandler",1]]],["ui-arrow","ui-arrow",1,[["color",1,1,2],["direction",1,1,2],["el",7],["placement",1,1,2]]],["ui-arrow-box","ui-arrow-box",1,[["arrowDirection",5],["color",1,1,2],["el",7],["getArrowElement",6],["padding",1,1,4],["placement",1,1,2]]],["ui-badge","ui-badge",1,[["color",1,1,2],["label",1,1,2],["size",1,1,2]]],["ui-button","ui-arrow-box",1,[["color",1,1,2],["href",1,1,2],["size",1,1,2],["type",1,1,2],["usage",1]]],["ui-card","ui-card",1,[["elevation",1,1,4],["interactive",1,1,3]]],["ui-card-content","ui-card",1,[["padding",1,1,4]]],["ui-divider","ui-divider",1,[["height",1,1,4],["label",1,1,2],["line",1,1,2],["padding",1,1,4]]],["ui-dropdown","ui-dropdown",1,[["el",7],["label",1,1,2],["line",1,1,2],["mdcMenu",5],["padding",1,1,4]]],["ui-dropdown-item","ui-dropdown-item",1,[["el",7],["tabindex",1,1,4]]],["ui-grid","ui-grid",1,[["cols",1,1,4],["el",7],["gutter",1,1,4],["padding",1,1,4],["testing",1,1,3],["wrap",1,1,3]]],["ui-grid-item","ui-grid-item",1,[["gutter",1,1,4],["padding",1,1,4]]],["ui-init","ui-init",1],["ui-input","ui-arrow",1,[["el",7]]],["ui-list","ui-list",1,[["comps",1,1,1],["elevation",1,1,4],["interactive",1,1,3]]],["ui-list-item","ui-list-item",1],["ui-popover","ui-popover",1,[["el",7],["isVisable",5],["placement",1,1,2],["popoverContainerEl",5],["popoverEl",5],["popperInstance",5],["popperPlacement",5],["trigger",1,1,2],["triggerEl",5]]],["ui-text","ui-text",1,[["clickable",1,1,3],["color",1,1,2],["href",1,1,2],["spacing",1,1,2],["transform",1,1,2],["type",1],["weight",1,1,2]],1],["ui-tooltip","ui-tooltip",1,[["el",7],["placement",1,1,1],["popper",5],["popperPlacement",5],["tooltipNode",5]]]]);