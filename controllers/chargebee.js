const catchAsyncerror = require("../middleware/catchAsyncerror");
var chargebee = require("chargebee");

exports.chargebeepay=catchAsyncerror(async(req,res,)=>{
  console.log(req.params);
  let packages=req.params.packages;
   chargebee.configure({site :"https://thegoatstips.chargebee.com/",
  api_key : "live_fUgOvzGowuWIbcOiyr3uEncdrUAPVaZYM"})

chargebee.hosted_page.checkout_new_for_items({
  subscription_items : [
    {
      item_price_id : req.body.plan_id,
    },]
}).request(function(error,result) {
  if(error){
    //handle error
    console.log(error);
  }else{
    console.log(result);
    var hosted_page = result.hosted_page;
    res.send(result.hosted_page);
    // return res
    // .status(200)
    // .json({result });
  }
});

})