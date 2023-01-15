const express=require('express')
const routes=express.Router()
const {getAllProduct,addproduct,searchproduct,updateproduct,supp_product}=require('../controllers/controllers')


routes.route('/products').get(getAllProduct)
routes.route('/add').post(addproduct)
routes.route('/update/:idprod').patch(updateproduct)
routes.route('/supp/:idprod').delete(supp_product)
routes.route('/search/:idprod').get(searchproduct)


module.exports=routes