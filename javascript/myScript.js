var currentIndex = 0
var items = $('div.slide-container')
var itemAmt = items.length
var animateDuration = 500;
var rollbackItem = function(i) {}
var animateIn = function(i) {}
var animateOutProperty = function(i) {
    return {}
}
var beforeAnimateOut = function(i){

}

function cycleItems() {
    beforeAnimateOut(currentIndex)
    animateOut()
    cycleIndex()
    showCurrentItem()
}

function animateOut() {
    var i = currentIndex
    var item = items.eq(i)
    item.animate(animateOutProperty(i), animateDuration, () => {
        item.css("display", "none")
        rollbackItem(i)
    })
}

function cycleIndex() {
    currentIndex = (currentIndex + 1) % itemAmt
}

function hideAllItems() {
    items.css("display", "none")
}

function showCurrentItem() {
    items.eq(currentIndex).css("display", "inline-block")
    animateIn(currentIndex)
}
$('#slide').click(function() {
    cycleItems()
})
$(document).keydown(function(event) {
    var key = event.which;
    switch (key) {
        case 37:
            // Key left.
            cycleBack()
            break;
        case 38:
            // Key up.
            break;
        case 39:
            // Key right.
            cycleItems()
            break;
        case 40:
            // Key down.
            break;
    }
});
$(document).ready(function() {
    items.attr("onmousedown", "return false") // disable drag drop on slides
    showCurrentItem()
});
