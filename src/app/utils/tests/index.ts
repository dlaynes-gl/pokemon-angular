export function formatTestId(str: string) {
    return `[data-test="${str}"]`;
}

export function findByTestId(component: HTMLElement, str: string){
    return component.querySelector(formatTestId(str));
}