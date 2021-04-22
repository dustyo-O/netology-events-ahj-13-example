export default function render(block) {
  if ((block === false) || (block === undefined) || (block === null)) {
    return document.createTextNode('');
  }

  if ((block === true) || (typeof block === 'string') || (typeof block === 'number')) {
    return document.createTextNode(block);
  }

  if (Array.isArray(block)) {
    const fragment = document.createDocumentFragment();

    block.forEach((elem) => {
      fragment.appendChild(render(elem));
    });

    return fragment;
  }

  const htmlElement = document.createElement(block.block);

  [].concat(block.cls).filter(Boolean).forEach((cls) => {
    htmlElement.classList.add(cls);
  });

  if (block.attrs) {
    Object.keys(block.attrs).forEach((key) => {
      const value = block.attrs[key];

      htmlElement.setAttribute(key, value);
    });
  }

  const content = render(block.content);
  htmlElement.appendChild(content);

  return htmlElement;
}
