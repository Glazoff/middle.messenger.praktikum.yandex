

export function renderDOM(query: string, component: any) { // todo присвоить тип component: класс component 
    const root = document.querySelector(query);

    if(!root) {
        throw Error(`Елемент ${query} не найден`)
    }
  
    root.appendChild(component.getContent());
  
    component.dispatchComponentDidMount();
  
    return root;
}
