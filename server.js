import  express from 'express';
import CategoryService from './services/categoryService.js';
var app = express()
app.get('/', 
async function (req, res) {
  var categoryList = await CategoryService.getCategoryList('en');
  res.send('hello world'+ categoryList)
})
app.listen(3033)