ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([59.97, 30.31], {
        hintContent: 'Лучшие бургеры',
        balloonContent: 'наб. Pеки Карповки, 21'

    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]


    });
    // 59.930908, 30.361817
    var placemark1 = new ymaps.Placemark([59.945, 30.380], {
        hintContent: 'Лучшие бургеры',
        balloonContent: 'Калужский переулок, 9'

    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]


    });

    var placemark2 = new ymaps.Placemark([59.888, 30.316], {
        hintContent: 'Лучшие бургеры',
        balloonContent: 'Заставская улица, 44'

    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]


    });
    var placemark3 = new ymaps.Placemark([59.915, 30.493], {
        hintContent: 'Лучшие бургеры',
        balloonContent: 'улица Подвойского, 33к2'

    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]


    });




    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    
}