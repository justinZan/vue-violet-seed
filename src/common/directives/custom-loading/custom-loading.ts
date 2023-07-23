import './custom-loading.scss';
import { DirectiveOptions } from 'vue';

export const customLoading: DirectiveOptions = {
  update(el, value) {
    if (value.value) {
      const canPush = el.getElementsByClassName('customLoading');
      if (canPush.length !== 0) {
        return;
      }
      el.style.position = 'relative';
      const para = document.createElement('div');
      const box = document.createElement('ul');

      para.setAttribute('class', 'customLoading');
      for (let index = 0; index < 6; index++) {
        const son = document.createElement('li');
        son.setAttribute('class', 'child');
        box.appendChild(son);
      }

      para.appendChild(box);
      el.appendChild(para);
    } else {
      el.childNodes.forEach((element: any) => {
        if (element.className === 'customLoading') {
          const childNodes = el.getElementsByClassName('customLoading')[0];
          el.removeChild(childNodes);
          return;
        }
      });
    }
  }
};
