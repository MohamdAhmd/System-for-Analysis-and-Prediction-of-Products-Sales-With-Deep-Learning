"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackBox = exports.getBlackBox = void 0;
var tools_1 = require("../../models/tools");
var loger_1 = require("../../servieces/loger");
var express_validator_1 = require("express-validator");
var logger = new loger_1.LoggerService('user.controller');
var info = new tools_1.tools();
var getBlackBox = function (req, res) {
    res.render('blackbox', {
        isUser: res.locals.user
    });
};
exports.getBlackBox = getBlackBox;
var BlackBox = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, errors, BlackBox_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = {
                    min_price: req.body.min_price,
                    max_price: req.body.max_price,
                    review_score: req.body.review_score,
                    product_category_name: req.body.product_category_name
                };
                console.log('userID from BlackBoxTool=>>>>>>>>' + res.locals.user.id);
                errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(200).json({ err: 'Invalid Data Passed!', errors: errors })];
                }
                return [4 /*yield*/, info.BlackBox(product)];
            case 1:
                BlackBox_1 = _a.sent();
                if (!BlackBox_1) {
                    logger.error("can't apply BlackBox Tool for this product", "".concat(product));
                    return [2 /*return*/, res.status(404).json({
                            status: 'error',
                            message: 'can not apply BlackBox Tool for this product'
                        })];
                }
                logger.info('Apply Black Box Tool', BlackBox_1);
                return [2 /*return*/, res.json({
                        status: 'success',
                        message: 'prediction successed',
                        data: __assign({}, BlackBox_1)
                    })];
            case 2:
                err_1 = _a.sent();
                logger.info('Error Applying BlackBox TOol', err_1);
                res.status(500);
                res.json(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.BlackBox = BlackBox;
