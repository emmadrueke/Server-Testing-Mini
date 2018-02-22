const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhose/test', { useMongoClient: true });
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

describe('Dances', () => {

});