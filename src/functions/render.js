//clears the page to reset to new tab
export function render() {
    const CONTENT = document.querySelector('#content');
    while (CONTENT.children.length > 1){
        CONTENT.children[1].remove();
    }
}