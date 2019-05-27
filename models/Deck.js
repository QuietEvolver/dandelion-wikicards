const mongoose = require("mongoose"); //guilds a schema for the database for the app.  mongoosedb 
const Schema = mongoose.Schema; //sets a schema for mongoeese.db

const deckSchema = new Schema({
  name: { type: String, trim: true, required: "Deck name required", index: {unique: true} },
//  userId: { type: String, required: true },
  card: [{ 
    type: Schema.Types.ObjectId, 
    ref: "Card", 
    unique: true 
  }],
  // link: { type: String, required: true },
  // description: { type: String, required: true },
  // image: { type: String, required: true },
});
const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;