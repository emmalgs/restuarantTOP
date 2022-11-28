//clears the page to reset to new tab
export function render() {
    const CONTENT = document.querySelector('#content');
    // const MAIN = document.querySelector('#main')
    while (CONENT.children.length > 0){
        CONTENT.children[0].remove();
    }
}