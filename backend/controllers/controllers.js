let Product=require('../models/products')

//Affichage

exports.getAllProduct=async(req,res)=>{
    const { page = 1, limit = 2 } = req.query;
    const produits=await Product.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count = await Product.countDocuments();
    res.status(200).json({
        success:true,
        count:produits.length,
        produits,
        totalPages: Math.ceil(count / limit),
        currentPage: page
})}

//Ajouter

exports.addproduct=async(req,res)=>{
    const addproduits=new Product(req.body)
    await addproduits.save()
    res.status(200).json({
            success:true,
            addproduits
        })}

//Modification

exports.updateproduct=async (req,res)=>{
    _id=req.params.idprod
    const updproduits=await Product.updateOne({
        _id:_id
    },{
        $set:req.body
    })
    res.status(200).json({
            success:true,
            updproduits
        })
}

//Suppression

exports.supp_product=async (req,res)=>{
    _id=req.params.idprod
    const suppproduits=await Product.deleteOne({
        _id:_id
    })
    res.status(200).json({
            success:true,
            suppproduits
        })}

//Rechercher

exports.searchproduct=async (req,res)=>{
    _id=req.params.idprod
    const rechproduits=await Product.findOne({
        _id:_id
    })
    res.status(200).json({
            success:true,
            rechproduits
        })
}
