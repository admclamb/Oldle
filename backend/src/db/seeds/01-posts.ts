import { Knex } from 'knex';
const { SALT = '3' } = process.env;
import POSTS_DATA from './00-users.json';
import * as bcrypt from 'bcryptjs';

exports.seed = function (knex: Knex) {
  return knex
    .raw('TRUNCATE TABLE posts RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('users').insert(POSTS_DATA);
    });
};
