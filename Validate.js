"use strict";

const fs = require("fs");

let validator = require('tiny-json-validator');

const data = require("./sample.json");

let book_schema = {
    type: 'object',
    required: true,
    properties: {
        title: {
            type: 'string',
            required: true
        },
        author: {
            type: 'object',
            required: true,
            properties: {
                name: {
                    type: 'string',
                    required: true
                },
                age: {
                    type: 'integer',
                    required: true
                },
                city: {
                    type: 'string'
                }
            }
        },
        related_titles: {
            type: 'array',
            required: true,
            items: {
                type: 'string'
            }
        }
    }
};

let res = validator(book_schema, data);

console.log(res.isValid)
// false

console.log(res.errors)
// {author.age: "is required", related_titles.0: 'type must be string', related_titles.1: 'type must be string'}
