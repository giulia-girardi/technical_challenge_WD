const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String, 
    screen: String, 
    processor: String,
    ram: Number,  
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
