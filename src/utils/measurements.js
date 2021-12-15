function fullHeight(element) {
    if (element === null) return 0;
    const elementStyle = element.currentStyle || window.getComputedStyle(element);
    const height = element.offsetHeight;
    const margin = parseFloat(elementStyle.marginTop) + parseFloat(elementStyle.marginBottom);
    const padding = parseFloat(elementStyle.paddingTop) + parseFloat(elementStyle.paddingBottom);
    const border = parseFloat(elementStyle.borderTopWidth) + parseFloat(elementStyle.borderBottomWidth);
    return height + margin + padding + border;
}

function fullWidth(element) {
    if (element === null) return 0;
    const elementStyle = element.currentStyle || window.getComputedStyle(element);
    const width = element.offsetWidth;
    const margin = parseFloat(elementStyle.marginRight) + parseFloat(elementStyle.marginLeft);
    const padding = parseFloat(elementStyle.paddingRight) + parseFloat(elementStyle.paddingLeft);
    const border = parseFloat(elementStyle.borderRightWidth) + parseFloat(elementStyle.borderLeftWidth);
    return width + margin + padding + border;
}

export {
    fullHeight,
	fullWidth
}
