export function render() {
    const CONTENT = document.querySelector('#content');
    CONTENT.style='';
    while(CONTENT.children.length > 1){
        CONTENT.children[1].remove();
    }
}