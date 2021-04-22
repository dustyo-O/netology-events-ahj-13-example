import i18n from '../i18n/i18n';

export default function contactTemplate(params) {
  return {
    block: 'li',
    cls: 'contact-list-item',
    attrs: { 'data-contact': true, 'data-contact-id': 1 },
    content: [
      {
        block: 'div',
        cls: 'contact-main',
        attrs: { 'data-section': 'main', 'data-contact-id': 1 },
        content: [
          {
            block: 'img',
            cls: 'contact-list-item-img',
            attrs: { src: params.avatar, alt: '' },
          },
          {
            block: 'span',
            cls: 'contact-list-item-name',
            content: params.name,
          },
          {
            block: 'span',
            cls: 'contact-list-item-phone',
            content: params.phone,
          },
          {
            block: 'a',
            attrs: {
              'data-action': 'call',
              'data-phone': params.phone,
              href: `tel:+${params.phone}`,
            },
            cls: 'contact-list-item-action',
            content: i18n('Звонить'),
          },
        ],
      },
      {
        block: 'div',
        cls: ['contact-details', 'hidden'],
        attrs: {
          'data-section': 'details',
        },
        content: i18n('Подробная информация о клиенте'),
      },
    ],
  };
}
