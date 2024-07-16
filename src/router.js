let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
    // assign rootEl
    rootEl = el;
};
export const setRoutes = (routes) => {
    // assign ROUTES
    ROUTES = routes;
};
const queryStringToObject = (queryString) => {
    // convert query string to URLSearchParams
    const params = new URLSearchParams(queryString);
    // convert URLSearchParams to an object
    // return the object
    return Object.fromEntries(params.entries());
};
const renderView = (pathname, props={}) => {
    // clear the root element
    rootEl.innerHTML = '';
    // find the correct view in ROUTES for the pathname
    const View = ROUTES[pathname] || ROUTES['/error'];
    // in case not found render the error view
    if (!View) {
        throw new Error('Error view is not defined');
      }
    // render the correct view passing the value of props
    const viewElement = View(props);
    // add the view element to the DOM root element
    rootEl.appendChild(viewElement);
};
export const navigateTo = (pathname, props={}) => {
    // update window history with pushState
    window.history.pushState({}, pathname, window.location.origin + pathname);
    // render the view with the pathname and props
    renderView(pathname, props);
};
export const onURLChange = (location) => {
    // parse the location for the pathname and search params
    const { pathname, search } = location;
    // convert the search params to an object
    const queryParams = queryStringToObject(search);
    // render the view with the pathname and object
    renderView(pathname, queryParams);
};
window.addEventListener('popstate', () => {
    onURLChange(window.location);
});  