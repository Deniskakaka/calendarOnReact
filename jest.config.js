module.exports = {
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    'setupFiles': ["./jest.setup.js"],
    "moduleNameMapper": {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
    }
}