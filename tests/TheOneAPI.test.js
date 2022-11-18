const TheOneAPI = require('../src/TheOneAPI');

const testAuth = 'ulfE1b1Kf5m4Rs6Mr3Tu';

test('should get the books', () => {
    return TheOneAPI.findBooks(testAuth).then(res => {
        expect(res).toBe({ "docs": [{ "_id": "5cf5805fb53e011a64671582", "name": "The Fellowship Of The Ring" }, { "_id": "5cf58077b53e011a64671583", "name": "The Two Towers" }, { "_id": "5cf58080b53e011a64671584", "name": "The Return Of The King" }], "limit": 1000, "offset": 0, "page": 1, "pages": 1, "total": 3 });
    }).catch(err => {
        console.log(err);
    });
});