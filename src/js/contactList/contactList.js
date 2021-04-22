import render from '../render/render';
import contactTemplate from '../templates/contactTemplate';

/* eslint-disable class-methods-use-this */
export default class ContactList {
  constructor(contactListElement) {
    this.contactList = contactListElement;

    this.empty = this.empty.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);

    this.contactList.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    this.contactList.addEventListener('click', this.toggleDetails);
  }

  empty() {
    let child = this.contactList.firstElementChild;

    while (child) {
      const next = child.nextElementSibling;

      child.remove();

      child = next;
    }
  }

  toggleDetails(event) {
    const { target } = event;

    const li = target.closest('.contact-list-item');

    if (!li) {
      return;
    }

    const details = li.querySelector('.contact-details');

    details.classList.toggle('hidden');
  }

  render(data) {
    this.empty();

    this.contactList.appendChild(render(
      data.map(contactTemplate),
    ));
  }
}
