import mongoose from 'mongoose';

export const loadDataFromDB = async (cat) => {
    let articles = [];
    const Model = mongoose.model(cat);
    articles = await Model.find();
    console.log(articles.length);
    return articles;
};