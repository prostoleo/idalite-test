export const state = () => ({
  cards: JSON.parse(localStorage.getItem('cards')) ?? [
    {
      id: 1,
      name: 'Fujifilm X-T4',
      description:
        'Fujifilm X-T4 может по праву считаться лучшей камерой 2020 года. Эта модель APS-C имеет классический дизайн, полное ручное управление и защищённый от атмосферных воздействий корпус.',
      price: 153886,
      imgSrc:
        'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
    },
    {
      id: 2,
      name: 'Nikon Z6',
      description:
        'В Z6 используется 24,5-мегапиксельная полнокадровая матрица. Благодаря скорости непрерывной съёмки 12 fps, модель отлично подходит для съёмки спортивных событий и сцен с большим количеством действий.',
      price: 173000,
      imgSrc: 'https://tehnobzor.ru/wp-content/uploads/2021/02/nikon-z6.jpg',
    },
    {
      id: 3,
      name: 'Sony A7 III',
      description:
        'A7 III оснащена 24,2-мегапиксельной полнокадровой матрицей с обратной засветкой. Диапазон ISO: 50 – 204 800, а скорость непрерывной съёмки достигает 10 fps. Кроме того, есть электронный затвор – поэтому работает аппарат бесшумно, не пугая объекты в кадре.',
      price: 148448,
      imgSrc: 'https://tehnobzor.ru/wp-content/uploads/2021/02/sony-a7-iii.jpg',
    },
    {
      id: 4,
      name: 'Sony A6600',
      description:
        'Sony A6600 – продолжение превосходной беззеркальной модели. Этот лучший фотоаппарат для фотографа начального уровня предлагает высокое качество съёмки фото и видео, а также поддержку объективов E-mount.',
      price: 133450,
      imgSrc: 'https://tehnobzor.ru/wp-content/uploads/2021/02/sony-a6600.jpg',
    },
    {
      id: 5,
      name: 'Nikon D850',
      description:
        'Ключевая особенность аппарата – 45,7-мегапиксельная матрица, благодаря которой D850 на равных конкурирует с Canon 5DS (50,6-МП) и Sony A7R III (42,4-МП). Если такое высокое разрешение вам не нужно, или хотите сэкономить место в памяти, есть режимы 25,6-МП и 11,4-МП.',
      price: 195000,
      imgSrc: 'https://tehnobzor.ru/wp-content/uploads/2021/02/nikon-d850.jpg',
    },
    {
      id: 6,
      name: 'Nikon D3500',
      description:
        'Пусть Nikon D3500 не сильно отличается от D3400, это прекрасная DSLR-камера начального уровня со всеми необходимыми возможностями. ',
      price: 32500,
      imgSrc: 'https://tehnobzor.ru/wp-content/uploads/2021/02/nikon-d3500.jpg',
    },
    {
      id: 7,
      name: 'Panasonic Lumix G100',
      description:
        'Panasonic Lumix G100 – отличный вариант для тех, кто привык снимать на смартфон и решил купить себе первую настоящую камеру. Здесь используется MFT-матрица и сменный объектив, что уже превосходит возможности объективов мобильных телефонов. ',
      price: 59999,
      imgSrc:
        'https://tehnobzor.ru/wp-content/uploads/2021/02/panasonic-lumix-g100.jpg',
    },
    {
      id: 8,
      name: 'Sony ZV-1',
      description:
        'Габариты – всего 10,5×4,4×6 см, она маленькая и портативная. Физических клавиш немного, снизу есть крепление для штатива, сверху – горячий башмак, если встроенного микрофона окажется недостаточно. ',
      price: 54048,
      imgSrc: 'https://tehnobzor.ru/wp-content/uploads/2021/02/sony-zv-1.jpg',
    },
    {
      id: 9,
      name: 'Fujifilm X100V',
      description:
        'Fujifilm X100V – это пятое поколение аппаратов для уличной съёмки у японской компании. Здесь установлен 26,1-мегапиксельный сенсор APS-C X-Trans CMOS и объектив 23 мм (эквивалент 35 мм).',
      price: 112900,
      imgSrc:
        'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x100v.jpg',
    },
    {
      id: 10,
      name: 'Panasonic Lumix G9',
      description:
        'В линейке Lumix G от Panasonic модель G9 находится позади аппаратов премиум-уровня GH5 и GH5S. Хотя Panasonic Lumix G9 предназначена именно для профессиональной съёмки фотографий.',
      price: 99990,
      imgSrc:
        'https://tehnobzor.ru/wp-content/uploads/2021/02/panasonic-lumix-g9.jpg',
    },
  ],
});

export const getters = {
  getCards: (state) => {
    localStorage.setItem('cards', JSON.stringify(state.cards));
    return state.cards;
  },
};

export const actions = {
  addCard(context, cardData) {
    context.commit('addCard', cardData);
  },
  deleteCard(context, id) {
    context.commit('deleteCard', id);
  },
};
export const mutations = {
  addCard(state, cardData) {
    state.cards.unshift(cardData);
  },
  deleteCard(state, id) {
    state.cards = state.cards.slice().filter((card) => card.id !== id);
  },
};
