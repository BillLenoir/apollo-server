"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var convert = require("xml-js");
var fs = require("fs/promises");
var node_fetch_1 = require("node-fetch");
var bggBaseURL = 'https://boardgamegeek.com/xmlapi/';
// This is the main function. It triggers all of the work needed
// to request, transform, process, and save the collection data.
function fetchAndProcessCollectionData(username) {
    return __awaiter(this, void 0, void 0, function () {
        var collectionData, rawDataFile, message, parsedData, dataFiles, _i, dataFiles_1, _a, file, data, message_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchCollectionDataFromBGG(username)];
                case 1:
                    collectionData = _b.sent();
                    rawDataFile = './data/rawData.json';
                    message = 'Raw Data File';
                    // Write the transformed response from BGG to disk.
                    return [4 /*yield*/, writeDataToFile(rawDataFile, collectionData, message)];
                case 2:
                    // Write the transformed response from BGG to disk.
                    _b.sent();
                    return [4 /*yield*/, parseData(rawDataFile)];
                case 3:
                    parsedData = _b.sent();
                    dataFiles = [
                        { file: './data/haveData.json', data: parsedData.sendHaveData, message: 'Games I HAVE file' },
                        { file: './data/wantData.json', data: parsedData.sendWantData, message: 'Games I WANT File' },
                        { file: './data/hadData.json', data: parsedData.sendHadData, message: 'Games I HAD File' },
                        { file: './data/sellingData.json', data: parsedData.sendSellingData, message: 'Games I am SELLING File' },
                    ];
                    _i = 0, dataFiles_1 = dataFiles;
                    _b.label = 4;
                case 4:
                    if (!(_i < dataFiles_1.length)) return [3 /*break*/, 7];
                    _a = dataFiles_1[_i], file = _a.file, data = _a.data, message_1 = _a.message;
                    return [4 /*yield*/, writeDataToFile(file, data, message_1)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 4];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Requests the data from BGG, which returns XML.
// Transform the XML into JSON and return it.
function fetchCollectionDataFromBGG(username) {
    return __awaiter(this, void 0, void 0, function () {
        var collectionDataURL, response, xmlData, responseData, returnData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collectionDataURL = bggBaseURL + "collection/" + username;
                    return [4 /*yield*/, node_fetch_1["default"](collectionDataURL)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! Status: " + response.status);
                    }
                    return [4 /*yield*/, response.text()];
                case 2:
                    xmlData = _a.sent();
                    responseData = convert.xml2json(xmlData, { compact: true, spaces: 4 });
                    returnData = JSON.parse(responseData);
                    return [2 /*return*/, returnData];
            }
        });
    });
}
// Handles all writing to disk.
function writeDataToFile(file, data, message) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.writeFile(file, JSON.stringify(data))];
                case 1:
                    _a.sent();
                    console.log(message + " successfully written");
                    return [2 /*return*/];
            }
        });
    });
}
// Once the collection request has been returned, transformed and saved to disk,
// open the newly saved file and transform each game's games data and save it
// in the appropriate data file.
function parseData(rawData) {
    return __awaiter(this, void 0, void 0, function () {
        var data, readData, haveData, wantData, hadData, sellingData, _i, _a, game, gameID, gameTitle, gameYearPublished, gameThumbnail, gameData, gameDescription, gamePublisher, publisherArray, _b, _c, publisher, gameJSON, _d, own, wanttobuy, prevowned, fortrade, sendHaveData, sendWantData, sendHadData, sendSellingData;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, fs.readFile(rawData)];
                case 1:
                    data = _e.sent();
                    readData = JSON.parse(data.toString());
                    haveData = [];
                    wantData = [];
                    hadData = [];
                    sellingData = [];
                    _i = 0, _a = readData.items.item;
                    _e.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    game = _a[_i];
                    gameID = game._attributes.objectid;
                    gameTitle = game.name._text;
                    gameYearPublished = '';
                    if (game.yearpublished != null) {
                        gameYearPublished = game.yearpublished._text;
                    }
                    gameThumbnail = '';
                    if (game.thumbnail != null) {
                        gameThumbnail = game.thumbnail._text;
                    }
                    return [4 /*yield*/, fetchGameDataFromBGG(gameID)];
                case 3:
                    gameData = _e.sent();
                    gameDescription = '';
                    if (gameData.boardgames.boardgame.description._text != null) {
                        gameDescription = gameData.boardgames.boardgame.description._text;
                    }
                    gamePublisher = '';
                    if (gameData.boardgames.boardgame.boardgamepublisher[0] != null) {
                        publisherArray = [];
                        for (_b = 0, _c = gameData.boardgames.boardgame.boardgamepublisher; _b < _c.length; _b++) {
                            publisher = _c[_b];
                            publisherArray.push(publisher._text);
                            gamePublisher = publisherArray.join('xxxxx');
                        }
                    }
                    else {
                        gamePublisher = gameData.boardgames.boardgame.boardgamepublisher._text;
                    }
                    // If the collection request didn't return a thumbnail,
                    // maybe the game request did. (maybe)
                    if (gameThumbnail === null && gameData.boardgames.boardgame.thumbnail != null) {
                        gameThumbnail = gameData.boardgames.boardgame.thumbnail;
                    }
                    gameJSON = {
                        id: gameID,
                        title: gameTitle,
                        yearpublished: gameYearPublished,
                        thumbnail: gameThumbnail,
                        publisher: gamePublisher,
                        description: gameDescription
                    };
                    _d = game.status._attributes, own = _d.own, wanttobuy = _d.wanttobuy, prevowned = _d.prevowned, fortrade = _d.fortrade;
                    if (own === '1' || wanttobuy === '1' || prevowned === '1' || fortrade === '1') {
                        if (own === '1')
                            haveData.push(gameJSON);
                        if (wanttobuy === '1')
                            wantData.push(gameJSON);
                        if (prevowned === '1')
                            hadData.push(gameJSON);
                        if (fortrade === '1')
                            sellingData.push(gameJSON);
                    }
                    else {
                        console.log("-- This game doesn't count: " + gameTitle);
                    }
                    _e.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    sendHaveData = JSON.stringify(haveData);
                    sendWantData = JSON.stringify(wantData);
                    sendHadData = JSON.stringify(hadData);
                    sendSellingData = JSON.stringify(sellingData);
                    return [2 /*return*/, { sendHaveData: sendHaveData, sendWantData: sendWantData, sendHadData: sendHadData, sendSellingData: sendSellingData }];
            }
        });
    });
}
// Not all of the data needed for the website is included in the collection request.
// When parsing the data, make a request for each game. (There's a bunch.)
function fetchGameDataFromBGG(gameID) {
    return __awaiter(this, void 0, void 0, function () {
        var gameDataUrl, response, xmlData, responseData, returnData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameDataUrl = bggBaseURL + "boardgame/" + gameID;
                    return [4 /*yield*/, node_fetch_1["default"](gameDataUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! Status: " + response.status);
                    }
                    return [4 /*yield*/, response.text()];
                case 2:
                    xmlData = _a.sent();
                    responseData = convert.xml2json(xmlData, { compact: true, spaces: 4 });
                    returnData = JSON.parse(responseData);
                    return [2 /*return*/, returnData];
            }
        });
    });
}
// The BGG user ID is an optional paramater when running the system.
// If not present, set to my user name.
var user;
if (process.argv[2] != null) {
    user = process.argv[2];
}
else {
    user = 'BillLenoir';
}
void fetchAndProcessCollectionData(user);
