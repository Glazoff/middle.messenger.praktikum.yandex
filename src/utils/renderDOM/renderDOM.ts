export default function renderDOM(query: string, component: any) {
  const root = document.querySelector(query);

  if (!root) {
    throw Error(`Елемент ${query} не найден`);
  }

  root.innerHTML = '';

  root.appendChild(component.getContent());

  component.dispatchComponentDidMount();

  return root;
}
