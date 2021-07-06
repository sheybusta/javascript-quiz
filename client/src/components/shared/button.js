export const button = (
  type = 'button',
  innerHtml = '',
  classList = '',
  id = ''
) => {
  const button = document.createElement('button');

  button.type = type;
  button.innerHTML = innerHtml;
  button.classList = classList;
  button.id = id;

  return button;
};
