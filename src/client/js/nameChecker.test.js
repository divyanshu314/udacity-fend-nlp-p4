import { validateUrl } from "../js/validateUrl";

describe('The function "checkForName()" should exist', () => {
    test('It should be defined', () => {
        expect(validateUrl).toBeDefined();
    });

    test('The url should be valid, returns true if it is', () => {
        const urls = [
            "https://example.com",
            "http://example.com",
            "example.com",
            "example.com/path",
            "https://www.example.com"
        ];

        urls.forEach(url => {
            expect(validateUrl(url)).toBeTruthy;
        });
    });

});
