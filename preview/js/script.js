
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal from JS',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem dolore non incidunt harum libero minus amet dicta, autem, ex odio nisi iure optio quaerat.'
    },
    btns: {
        count: 3, // count of buttons
        settings: [
            [
                'Close', // name of button
                ['btn-danger', 'mr-10'], // classes for button
                true    // close modal window
            ],
            [
                'Action',
                ['btn-success'],
                false,
                () => { // callback 
                    alert('Some Action');
                }
            ],
            [
                'One More',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Another Action');
                }
            ]
        ]
    }
}));

const carouselSettings = {

    content: 
    [
        [
            'https://static.mk.ru/upload/entities/2020/05/19/17/articles/facebookPicture/ee/37/29/b0/d778546d8aaeb744ba9d647437d2ec2a.jpg',
            'alt text 1'
        ],
        [
            'https://сезоны-года.рф/sites/default/files/images/shkolnikam/more.jpg',
            'alt text 2'
        ],
        [
            'https://img.gazeta.ru/files3/869/7947869/upload-shutterstock_192051191-pic4_zoom-1500x1500-61458.jpg',
            'alt text 3'
        ]
    ]
};
$('#carousel-wrapper').createCarousel(carouselSettings);

$('#out').click(() => {
    $('.fade-preview').eq(0).fadeOut(500);
});
$('#in').click(() => {
    $('.fade-preview').eq(0).fadeIn(500);
});
$('#toggle').click(() => {
    $('.fade-preview').eq(1).fadeToggle(500);
});