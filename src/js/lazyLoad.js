/**
 * https://github.com/verlok/vanilla-lazyload
 */

import LazyLoad from "vanilla-lazyload";

function lazyLoad(){
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        use_native: true,
    });
}
export default lazyLoad;