"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Button_1 = require("../Button");
describe("Button", () => {
    it("Renders a Button Component", () => {
        (0, react_2.render)(react_1.default.createElement(Button_1.Button, null));
        const buttonText = react_2.screen.getByText('This is a Button');
        expect(buttonText).toBeInTheDocument;
    });
});
