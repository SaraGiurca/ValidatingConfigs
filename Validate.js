"use strict";
let validator = require("tiny-json-validator");

const fs = require("fs");

var filesPath = "Files/";

let book_schema = {
  type: "object",
  required: true,
  properties: {
    title: {
      type: "string",
      required: true,
    },
    author: {
      type: "object",
      required: true,
      properties: {
        name: {
          type: "string",
          required: true,
        },
        age: {
          type: "integer",
          required: true,
        },
        city: {
          type: "string",
        },
      },
    },
    related_titles: {
      type: "array",
      required: true,
      items: {
        type: "string",
      },
    },
  },
};

fs.readdir(filesPath, (err, files) => {
  if (err) {
    console.log(err);
    return "";
  }

  files.forEach((file) => {
    if (file.split(".").pop() == "json") {
      const data = require("./" + filesPath + file);
      const res = validator(book_schema, data);

      console.log("File name: " + file);
      console.log("File valid: " + res.isValid);

      if (Object.keys(res.errors) != 0) {
          console.log(res.errors);
      }
      
      console.log("\n");
    }
  });
});
