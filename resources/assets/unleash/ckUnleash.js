if (typeof CKEDITOR !== 'undefined') {
    CKEDITOR.stylesSet.add('my_styles', [
        {
            name: 'Image left',
            element: 'img',
            attributes: {
                class: 'left',
            },
        },
        {
            name: 'Image right',
            element: 'img',
            attributes: {
                class: 'right',
            },
        },
        {
            name: 'Align left',
            element: ['div', 'p'],
            attributes: {
                class: 'align-left',
            },
        },
        {
            name: 'Align right',
            element: ['div', 'p'],
            attributes: {
                class: 'align-right',
            },
        },
        {
            name: 'Align center',
            element: ['div', 'p'],
            attributes: {
                class: 'align-center',
            },
        },
        {
            name: 'Clearfix',
            element: ['div', 'p', 'ul'],
            attributes: {
                class: 'clearfix',
            },
        },
    ]);
}
