/* eslint-disable class-methods-use-this */
export default class Filter {
  constructor(filterWidgetEl, filterCb) {
    this.filterBtnEl = filterWidgetEl.querySelector('[data-action=filter]');
    this.filterTextEl = filterWidgetEl.querySelector('[data-id=filter-text]');
    this.filterForm = filterWidgetEl.querySelector('.filter-form');

    this.filterForm.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this.onBtnClick = this.onBtnClick.bind(this);
    this.filterBtnEl.addEventListener('click', this.onBtnClick);
    this.filterTextEl.addEventListener('input', this.onBtnClick);

    this.filterCb = filterCb;
  }

  onBtnClick(event) {
    console.log(event);
    event.stopImmediatePropagation();

    this.filterCb(this.filterTextEl.value);

    console.log(event);
  }
}
