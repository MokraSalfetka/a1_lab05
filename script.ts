
function changeStyle(styleFile: string): void {
    const linkElement = document.getElementById('theme-stylesheet') as HTMLLinkElement;

    if (linkElement) {
        linkElement.href = `css/${styleFile}`;
        console.log(`Style changed to: css/${styleFile}`);
    } else {
        console.error("Stylesheet link element not found!");
    }
}

(window as any).changeStyle = changeStyle;


export { };

