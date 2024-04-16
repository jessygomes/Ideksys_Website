const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 3,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      maxlength: 2000,
      minlength: 5,
    },
  },
  { timestamps: true }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

module.exports = Article;
