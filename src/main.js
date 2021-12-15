import { fullHeight, fullWidth } from './utils';

function betterScrollIntoView(parent, child) {
    if (parent === undefined || child === undefined) return;
    const scrollOptions = getScrollOptions(parent, child);
    parent.scrollTo(scrollOptions);
}

function getScrollOptions(parent, child) {
    const overflowDirection = getOverflowDirection(parent);
    let top = 0, left = 0;
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    if (overflowDirection === 'horizontal') {
        left = parent.scrollLeft + childRect.left - parentRect.left - (parent.offsetWidth / 2) + fullWidth(child) / 2;
    } else {
        top = parent.scrollTop + childRect.top - parentRect.top - (parent.offsetHeight / 2) + fullHeight(child) / 2;;
    }
    return {
        top: top,
        left: left,
        behavior: 'smooth'
    }
}

function getOverflowDirection(element) {
    if (element === undefined) return;
    const { clientWidth, scrollWidth } = element;
    if (scrollWidth > clientWidth) {
        return 'horizontal';
    } else {
        return 'vertical';
    }
}

export {
    betterScrollIntoView
}
