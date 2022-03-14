import img1 from "./img/imgProduct/img1.png"

let store = {
    _state: {
        catalogData: {
            nameData: [
                {
                    id: 1,
                    name: 'Омолаживающая пептидная сыворотка',
                    available: 1,
                    price: 1900,
                    img: img1,
                    newCouner: 0,
                    discountCouner: 0
                },
                {
                    id: 2,
                    name: 'кисти',
                    available: 3,
                    price: 2500,
                    img: img1,
                    categoryProduct: 'Наборы',
                    newCouner: 1,
                    discountCouner: 1
                },
                {
                    id: 3,
                    name: 'губка',
                    available: 0,
                    price: 900,
                    img: img1,
                    categoryProduct: 'Тени',
                    newCouner: 0,
                    discountCouner: 1
                },
                {
                    id: 4,
                    name: 'тональник',
                    available: 1,
                    price: 1700,
                    img: img1,
                    categoryProduct: 'Помада',
                    newCouner: 0,
                    discountCouner: 1
                },
                {
                    id: 5,
                    name: 'подушка',
                    available: 2,
                    price: 1000,
                    img: img1,
                    categoryProduct: 'Румяна',
                    newCouner: 1,
                    discountCouner: 1
                },
                {
                    id: 6,
                    name: 'повязка',
                    available: 5,
                    price: 1200,
                    img: img1,
                    categoryProduct: 'Кремы',
                    newCouner: 0,
                    discountCouner: 0
                },
                {
                    id: 7,
                    name: 'тени',
                    available: 2,
                    price: 1100,
                    img: img1,
                    categoryProduct: 'Наборы',
                    newCouner: 1,
                    discountCouner: 0
                },
                {
                    id: 8,
                    name: 'мази',
                    available: 5,
                    price: 3900,
                    img: img1,
                    categoryProduct: 'Наборы',
                    newCouner: 0,
                    discountCouner: 1
                },
            ],
            categoriesData: [
                {id: 1, category: 'Тушь'},
                {id: 2, category: 'Помада'},
                {id: 3, category: 'Тени'},
                {id: 4, category: 'BB-крема'},
                {id: 5, category: 'Пудры'},
                {id: 6, category: 'Румяна'},
                {id: 7, category: 'Тоанльный крем'},
                {id: 8, category: 'Карандаши для глаз'},
                {id: 9, category: 'Кремы'},
                {id: 10, category: 'Кремы'},
                {id: 11, category: 'Патчи'},
                {id: 12, category: 'Наборы'}
            ]
        },
        rewiewsData: [
            {
                id: 1,
                num: 1,
                name: 'asjf asjfgja',
                text: 'ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба'
            },
            {
                id: 2,
                num: 2,
                name: 'dash ashae',
                text: 'ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба'
            },
            {
                id: 3,
                num: 3,
                name: 'asdh ashwe',
                text: 'ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба'
            },
            {
                id: 4,
                num: 4,
                name: 'jrte rwhaw',
                text: 'ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба'
            },
            {
                id: 5,
                num: 5,
                name: 'zxhxf fdjsj',
                text: 'ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба'
            },
            {
                id: 6,
                num: 6,
                name: 'znvck aewy',
                text: 'ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба ТекстРыба'
            },
        ]
    },

    getState() {
        return this._state;
    },

    _rerender() {},

    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-REVIEW') {
            let newReview = {
                id: 7,
                num: action.textNum,
                name: action.textName,
                text: action.textReview
            }
            this._state.rewiewsData.push(newReview);
            this._rerender(this._state);
        }
    }
}

export const AddReviewActionCreator = (textName,textNum, textReview) => {
    return {
        type: 'ADD-REVIEW',
        textName: textName,
        textNum: textNum,
        textReview: textReview
    }
}

window.store = store;
export default store;