const catchAsyncerror = require("../middleware/catchAsyncerror");
var chargebee = require("chargebee");

// chargebee.configure({
//   site: "thegoatstips",
//   api_key: "live_fUgOvzGowuWIbcOiyr3uEncdrUAPVaZYM"
// })
exports.chargebeepay = catchAsyncerror(async (req, res,) => {
  chargebee.configure({
    site: "thegoatstips",
    api_key: "live_fUgOvzGowuWIbcOiyr3uEncdrUAPVaZYM"
  });
  //console.log(chargebee);
  //console.log(req.params);
  let packages = req.params.packages;

  chargebee.hosted_page.checkout_new_for_items({
    subscription_items: [
      {
        item_price_id:  req.body.plan_id,
      },]
  }).request(function (error, result) {
    if (error) {
      //handle error
      console.log(error);
    } else {
      console.log(result);
      var hosted_page = result.hosted_page;
      res.send(result.hosted_page);
      return res
        .status(200)
        .json({ result });
    }
  });

})