/* global hexo */
'use strict';

var assign = require('object-assign');
var per_page = typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page;

var defaults = {
  index: {},
};

var config = assign({}, defaults, hexo.config.index_generator);

Object.keys(config).forEach(function (key) {
  config[key] = assign({
    order_by: '-date',
    per_page: per_page,
    layout: ['index', 'archive'],
  }, config[key]);
});

hexo.config.index_generator = config;

hexo.extend.generator.register('index', require('./lib/generator'));
