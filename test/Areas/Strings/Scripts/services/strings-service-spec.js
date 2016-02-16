describe('Strings ', function() {
    'use strict';
    var stringService;
    beforeEach(function () {
        module('stringsApp');
        inject(function (_StringService_) {
            stringService = _StringService_;
        });
    });

    // necessary
    it('should join two strings together', function() {
        expect(stringService.join("NaNaNaNaNaNaNaNa", "Batman")).toBe("NaNaNaNaNaNaNaNaBatman");
    });

    it('should repeat a string', function() {
        expect(stringService.repeat("Na", 8)).toBe("NaNaNaNaNaNaNaNa");
    });

    it('should reverse a string', function() {
        expect(stringService.reverse("Batman")).toBe("namtaB");
    });
});
