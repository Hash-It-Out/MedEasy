var mongoose=require("mongoose");
var Users=require("./users");
var InventoryItem=require("./inevntoryItem");

var orderSchema=new mongoose.Schema({
    orderId:{type:String},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    itemId:{type:mongoose.Schema.Types.ObjectId,ref:"InventoryItem"},
    dop:{type:Date},
    status:{type:String}

});

var cartSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref="Users"},
    itemIds:[{type:mongoose.Schema.Types.ObjectId,ref="InventoryItem"}],
    status:{type:String}


    
})


var Order=mongoose.model("Order",orderSchema);
var cart=mongoose.model("Cart",cartSchema);

module.exports=Order;
module.exports=cast;
