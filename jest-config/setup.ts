import 'jest-preset-angular';
import './globalMock';

Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });