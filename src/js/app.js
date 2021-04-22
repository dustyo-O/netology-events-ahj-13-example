/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable quote-props */
import json from '../data/users.json';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';
import { containsPhone, containsText, filterBy } from './util';

const filterWidgetEl = document.querySelector('[data-widget=filter-widget]');
// eslint-disable-next-line no-use-before-define
const filterComponent = new Filter(filterWidgetEl, filterHandle);

const contactList = document.querySelector('.contact-list');
const contactComponent = new ContactList(contactList);

contactComponent.render(json);

function filterHandle(search) {
  const filteredJSON = filterBy(json, (item) => {
    return containsPhone(item.phone, search) || containsText(item.name, search);
  });

  contactComponent.render(filteredJSON);
};

let start = performance.now();

document.body.addEventListener('click', () => {
  const timemark = performance.now();

  console.log(timemark - start, ' ms delta');

  start = timemark;
}, true);
