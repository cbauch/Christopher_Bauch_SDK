const TheOneAPI = require('../src/TheOneAPI');

const testAuth = 'ulfE1b1Kf5m4Rs6Mr3Tu';

test('Should get all three books', () => {
    return TheOneAPI.searchBooks(testAuth).then(res => {
        expect(res).toStrictEqual({ "docs": [{ "_id": "5cf5805fb53e011a64671582", "name": "The Fellowship Of The Ring" }, { "_id": "5cf58077b53e011a64671583", "name": "The Two Towers" }, { "_id": "5cf58080b53e011a64671584", "name": "The Return Of The King" }], "limit": 1000, "offset": 0, "page": 1, "pages": 1, "total": 3 });
    });
});


test('Should get a specific chapter: The Old Forest', () => {
    var filters = [];
    filters.push(TheOneAPI.createFilter('_id', TheOneAPI.FilterOperation.MatchIncludeOrRegex, "6091b6d6d58360f988133b90"))
    return TheOneAPI.searchChapters(testAuth, filters).then(res => {
        expect(res).toStrictEqual({ "docs": [{ "_id": "6091b6d6d58360f988133b90", "chapterName": "The Old Forest", "book": "5cf5805fb53e011a64671582" }], "total": 1, "limit": 1000, "offset": 0, "page": 1, "pages": 1 })
    });
});

test('Should get movies over 200 minutes long', () => {
    var filters = [];
    filters.push(TheOneAPI.createFilter('runtimeInMinutes', TheOneAPI.FilterOperation.GreaterThan, "200"))
    return TheOneAPI.searchMovies(testAuth, filters).then(res => {
        expect(res).toStrictEqual({ "docs": [{ "_id": "5cd95395de30eff6ebccde56", "name": "The Lord of the Rings Series", "runtimeInMinutes": 558, "budgetInMillions": 281, "boxOfficeRevenueInMillions": 2917, "academyAwardNominations": 30, "academyAwardWins": 17, "rottenTomatoesScore": 94 }, { "_id": "5cd95395de30eff6ebccde57", "name": "The Hobbit Series", "runtimeInMinutes": 462, "budgetInMillions": 675, "boxOfficeRevenueInMillions": 2932, "academyAwardNominations": 7, "academyAwardWins": 1, "rottenTomatoesScore": 66.33333333 }, { "_id": "5cd95395de30eff6ebccde5d", "name": "The Return of the King", "runtimeInMinutes": 201, "budgetInMillions": 94, "boxOfficeRevenueInMillions": 1120, "academyAwardNominations": 11, "academyAwardWins": 11, "rottenTomatoesScore": 95 }], "total": 3, "limit": 1000, "offset": 0, "page": 1, "pages": 1 })
    });
});

test('Should get the second set of 10 quotes', () => {
    var pagination = TheOneAPI.createPaginationWithPage(10, 2);
    return TheOneAPI.searchQuotes(testAuth, "", pagination).then(res => {
        expect(res).toStrictEqual({ "docs": [{ "_id": "5cd96e05de30eff6ebcce7f3", "dialog": "Pull it in! Go on, go on, go on, pull it in!", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfe9e", "id": "5cd96e05de30eff6ebcce7f3" }, { "_id": "5cd96e05de30eff6ebcce7f4", "dialog": "Oh Smeagol Ive got one! Ive got a fish Smeagol, Smeagol!", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfca7", "id": "5cd96e05de30eff6ebcce7f4" }, { "_id": "5cd96e05de30eff6ebcce7f5", "dialog": "My precious.", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfe9e", "id": "5cd96e05de30eff6ebcce7f5" }, { "_id": "5cd96e05de30eff6ebcce7f6", "dialog": "Gandalf?", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfc15", "id": "5cd96e05de30eff6ebcce7f6" }, { "_id": "5cd96e05de30eff6ebcce7f7", "dialog": "Oooohhh!", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfc15", "id": "5cd96e05de30eff6ebcce7f7" }, { "_id": "5cd96e05de30eff6ebcce7f8", "dialog": "Frodo!", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfc7c", "id": "5cd96e05de30eff6ebcce7f8" }, { "_id": "5cd96e05de30eff6ebcce7f9", "dialog": "Aaaahh!", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfd23", "id": "5cd96e05de30eff6ebcce7f9" }, { "_id": "5cd96e05de30eff6ebcce7fa", "dialog": "and cool, so nice for feet' and we only wish to catch a fish, so juicy sweet.", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfe9e", "id": "5cd96e05de30eff6ebcce7fa" }, { "_id": "5cd96e05de30eff6ebcce7fb", "dialog": "Gimli!", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfc15", "id": "5cd96e05de30eff6ebcce7fb" }, { "_id": "5cd96e05de30eff6ebcce7fc", "dialog": "My precious!", "movie": "5cd95395de30eff6ebccde5d", "character": "5cd99d4bde30eff6ebccfe9e", "id": "5cd96e05de30eff6ebcce7fc" }], "total": 2390, "limit": 10, "page": 2, "pages": 239 })
    });
});

test('Should get 10 characters sorted by name, descending', () => {
    var sorting = TheOneAPI.createSorting("name", TheOneAPI.SortDirection.Desc);
    var pagination = TheOneAPI.createPaginationWithPage(10);
    return TheOneAPI.searchCharacters(testAuth, "", pagination, sorting).then(res => {
        expect(res).toStrictEqual({ "docs": [{ "_id": "5cdbdecb6dc0baeae48cfa71", "death": "TA 2488", "birth": "TA 2238", "hair": "NaN", "realm": "Grey Mountains", "height": "NaN", "spouse": "Unnamed wife", "gender": "Male", "name": "Óin (King of Durin's Folk)", "race": "Men" }, { "_id": "5cd99d4bde30eff6ebccfe5f", "height": "", "race": "Dwarf", "gender": "", "birth": "", "spouse": "", "death": "", "realm": "", "hair": "", "name": "Óin (King of Durin's Folk)", "wikiUrl": "http://lotr.wikia.com//wiki/%C3%93in_(King_of_Durin%27s_Folk)" }, { "_id": "5cdbdecb6dc0baeae48cfa72", "death": "TA 2994", "birth": "TA 2774", "hair": "NaN", "realm": "NaN", "height": "NaN", "spouse": "NaN", "gender": "Male", "name": "Óin", "race": "Dwarves" }, { "_id": "5cd99d4bde30eff6ebccfe55", "height": "", "race": "Dwarf", "gender": "", "birth": "", "spouse": "", "death": "", "realm": "", "hair": "", "name": "Óin", "wikiUrl": "http://lotr.wikia.com//wiki/%C3%93in" }, { "_id": "5cdbdecb6dc0baeae48cfa75", "death": "NaN", "birth": "YT", "hair": "NaN", "realm": "NaN", "height": "NaN", "spouse": "NaN", "gender": "Female", "name": "Írimë", "race": "Elves" }, { "_id": "5cd99d4bde30eff6ebccfe53", "height": "", "race": "Elf", "gender": "", "birth": "", "spouse": "", "death": "", "realm": "", "hair": "", "name": "Írimë", "wikiUrl": "http://lotr.wikia.com//wiki/%C3%8Drim%C3%AB" }, { "_id": "5cdbdecb6dc0baeae48cfa76", "death": "NaN", "birth": "SA 700", "hair": "NaN", "realm": "NaN", "height": "NaN", "spouse": "NaN", "gender": "Female", "name": "Írildë", "race": "Men", "wikiUrl": "http://lotr.wikia.com//wiki/%C3%8Drild%C3%AB" }, { "_id": "5cdbdecb6dc0baeae48cfa59", "death": "FO", "birth": "TA 2995", "hair": "Pale gold", "realm": "NaN", "height": "Tall", "spouse": "Faramir", "gender": "Female", "name": "Éowyn", "race": "Men", "wikiUrl": "http://lotr.wikia.com//wiki/%C3%89owyn" }, { "_id": "5cdbe73516d496d2c2940848", "birth": "", "death": "", "hair": "", "gender": "Male", "height": "", "realm": "Rohan", "spouse": "", "name": "Éothain", "race": "Human", "wikiUrl": "http://lotr.wikia.com//wiki/Éothain_(film_character)t" }, { "_id": "5cdbdecb6dc0baeae48cfa77", "death": "NaN", "birth": "Late ,Third Age", "hair": "NaN", "realm": "NaN", "height": "NaN", "spouse": "NaN", "gender": "Male", "name": "Éothain", "race": "Men", "wikiUrl": "http://lotr.wikia.com//wiki/%C3%89othain" }], "total": 933, "limit": 10, "page": 1, "pages": 94 })
    });
});

test('Should get the second set of 10 quotes by Eowen sorted by movie id', () => {
    var filters = [];
    filters.push(TheOneAPI.createFilter('character', TheOneAPI.FilterOperation.MatchIncludeOrRegex, '5cdbdecb6dc0baeae48cfa59'));
    var pagination = TheOneAPI.createPaginationStringWithOffset(10, 10);
    var sorting = TheOneAPI.createSorting('movie', TheOneAPI.SortDirection.Asc);
    return TheOneAPI.searchQuotes(testAuth, filters, pagination, sorting).then(res => {
        expect(res).toStrictEqual({ "docs": [{ "_id": "5cd96e05de30eff6ebccec24", "dialog": "I'm sorry. Please, eat.", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebccec24" }, { "_id": "5cd96e05de30eff6ebcceb9d", "dialog": "Women of this country learned long ago:Those without swordscan still die upon them.I fear neither death nor pain.", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebcceb9d" }, { "_id": "5cd96e05de30eff6ebccec2a", "dialog": "You are one of the Dunedain.A descendant of Numenorblessed with long life.It was said that your racehad passed into legend.", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebccec2a" }, { "_id": "5cd96e05de30eff6ebccec20", "dialog": "My uncle told me a strange thing.He said that you rode to warwith Thengel, my grandfather.But he must be mistaken.", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebccec20" }, { "_id": "5cd96e05de30eff6ebccec4a", "dialog": "His name is Brego. He was my cousin's horse.", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebccec4a" }, { "_id": "5cd96e05de30eff6ebcceddc", "dialog": "Your son is badly wounded, my lord.", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebcceddc" }, { "_id": "5cd96e05de30eff6ebccedbc", "dialog": "My lord, your son......he is dead. My lord? Uncle? Will you not go to him? Will you do nothing?", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebccedbc" }, { "_id": "5cd96e05de30eff6ebccebf4", "dialog": "Lord Aragorn......where is he?", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebccebf4" }, { "_id": "5cd96e05de30eff6ebcceb9e", "dialog": "A cage.To stay behind bars until useand old age accept them.And all chance of valor has gonebeyond recall or desire.", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebcceb9e" }, { "_id": "5cd96e05de30eff6ebcceb84", "dialog": "My lord?", "movie": "5cd95395de30eff6ebccde5b", "character": "5cdbdecb6dc0baeae48cfa59", "id": "5cd96e05de30eff6ebcceb84" }], "total": 48, "limit": 10, "offset": 10 })
    });
})