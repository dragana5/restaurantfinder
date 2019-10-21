describe('The Restaurant List', () => {
    beforeEach(() => {
        console.log('before');
    });

    beforeAll(() => {
        console.log('before all');
    });

    it('should display a list of restaurants', () => {
        expect(2 + 2).toEqual(4);
    });

    // skipping this test
    it.only('should display a list of restaurants', () => {
        expect(2 + 3).toEqual(5);
    })
    afterEach(() => {
        console.log('after each');
    });

    afterAll(() => {
        console.log('after all');
    });

});


