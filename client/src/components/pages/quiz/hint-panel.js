import { divElement } from '../../shared/div.js';

export const createHintPanel = () => {
  const hintPanel = divElement('dropdown', 'hint-panel');

  hintPanel.innerHTML = 'Hi';

  return hintPanel;
};
