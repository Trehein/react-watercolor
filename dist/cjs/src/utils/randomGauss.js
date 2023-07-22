"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomGauss = void 0;
const randomGauss = () => {
    const theta = 2 * Math.PI * Math.random();
    const rho = Math.sqrt(-2 * Math.log(1 - Math.random()));
    return (rho * Math.cos(theta)) / 10.0 + 0.5;
};
exports.randomGauss = randomGauss;
