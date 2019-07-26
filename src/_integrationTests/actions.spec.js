import moxios from 'moxios';
import { testStore } from './../../utils/index';
import { getCategories,getCategoryImages } from './../actions'

describe('getCategories action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [
          {
            "id": 5,
            "name": "boxes"
          },
          {
            "id": 15,
            "name": "clothes"
          },
          {
            "id": 1,
            "name": "hats"
          },
        ];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getCategories())
        .then(() => {
            const newState = store.getState();
            expect(newState.categories.items).toBe(expectedState);
        })

    });
});

describe('getCategoryImages action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = {
            "1": [
              "https://cdn2.thecatapi.com/images/3gv.jpg",
            ]
          };
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getCategoryImages(5))
        .then(() => {
            const newState = store.getState();
            expect(newState.images.items).toStrictEqual({});
        })

    });
});
