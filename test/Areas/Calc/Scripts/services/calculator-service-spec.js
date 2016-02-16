describe('Calculator ', function() {
    'use strict';
    var calcService;
    beforeEach(function () {
        module('calculatorApp');
        inject(function (_CalculatorService_) {
            calcService = _CalculatorService_;
        });
    });

    // necessary
    it('should add two numbers correctly', function() {
        expect(calcService.add(2, 3)).toBe(5);
    });

    it('should subtract two numbers correctly', function() {
        expect(calcService.subtract(2, 3)).toBe(-1);
    });

    it('should multiply two numbers correctly', function() {
        expect(calcService.multiply(2, 3)).toBe(6);
    });

    it('should divide two numbers correctly', function() {
        expect(calcService.divide(2, 3)).toBe(2/3);
    });

    // helpful but not needed
    /*it('should add negative numbers', function() { });
    it('should reject non numbers', function() { });*/
});
