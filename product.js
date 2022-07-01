const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("Connection Open")
})
.catch(err=>{
    console.log("Error")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
        min:[0,"Price must be positive"]
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:{
        type:[String],
        default:['Cycling']
    },
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum:['S','M','L'],
        
    }
});

// productSchema.methods.greet = function(){
//     console.log("Fuck off");
//     console.log(` - from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function(){
    return this.updateMany({}, {onSale:true,price:Math.floor(Math.random()*100)})
}

const Product = mongoose.model("Product", productSchema);

const findProduct = async ()=>{
  const foundProduct = await Product.findOne({name:'Bike helment'});
  console.log(foundProduct)
  await foundProduct.toggleOnSale();
  console.log(foundProduct)
  await foundProduct.addCategory('Outdoors')
  console.log(foundProduct);
}

// findProduct();

Product.fireSale().then(res => console.log(res))

// const bike = new Product({name:'Cycling Jersey', price:70, categories:["Cycling", "Gear"], size:"S"})
// bike.save()
//     .then(data=>{
//     console.log("Sucess")
//     console.log(data)
//     })
//     .catch(err =>{
//     console.log("Failure")
//     console.log(err)
//     })
// Product.findOneAndUpdate({name:'Cycling Gloves'}, {price:50}, {new:true, runValidators:true})
//     .then(data=>{
//     console.log("Sucess")
//     console.log(data)
//     })
//     .catch(err =>{
//     console.log("Failure")
//     console.log(err)
//     })
