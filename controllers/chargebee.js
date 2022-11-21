const catchAsyncerror = require("../middleware/catchAsyncerror");
var chargebee = require("chargebee");

exports.chargebeepay=catchAsyncerror(async(req,res,)=>{
  console.log(req.body.package);
  let packages=req.body.package;
   chargebee.configure({site :"thegoatstips-test",
  api_key : "test_Hne1MTcd5FhtsPwKVD77MFsGIfsYsTCDj"})
chargebee.hosted_page.checkout_new_for_items({
  subscription_items : [
    {
      item_price_id : packages,
    },]
}).request(function(error,result) {
  if(error){
    //handle error
    console.log(error);
  }else{
    console.log(result);
    var hosted_page = result.hosted_page;
    return res
    .status(200)
    .json({hosted_page });
  }
});

})