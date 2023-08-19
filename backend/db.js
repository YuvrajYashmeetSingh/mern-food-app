const mongoose = require('mongoose');
const mongoUrl="mongodb+srv://yuvrajsingh:yuvraj@cluster0.qt1g9yn.mongodb.net/foodapp?retryWrites=true&w=majority";
const mongoDB = async () => {
    try {
      await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("fooditems");
      let foodItemsData=await fetched_data.find({}).toArray() 
      global.food_items=foodItemsData;
      
      let fetched_data_category = mongoose.connection.db.collection("foodcategory");
      let foodCategoryData=await fetched_data_category.find({}).toArray() 
      global.food_category=foodCategoryData;
     
    } catch (error) {
      console.log('err: ', error);
    }
  };
module.exports=mongoDB;
 