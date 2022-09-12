// import axios from "axios";
// import React from "react";
// import { PayPalButton } from "react-paypal-button-v2";
// import { useDispatch, useSelector } from "react-redux";
// import { loaduser } from "../../actions/userAction";

// export const Payment = () => {
//     const { user } = useSelector((state) => state.user);
//     const dispatch=useDispatch()
//     dispatch(loaduser())
//     if(user.user.paymentstatus){
//       console.log("hi");
//     }
//     // console.log(user);
//   return (
//     <div>
      
//       <div
//     style={{ maxWidth: "750px", minHeight: "200px" }}
//     >
//     <PayPalButton
//       createOrder={async (data, actions) => {
//         return await fetch(
//           "/api/auth/pay",
//           {
//             method: "post",
//             // body: JSON.stringify({
//             //   formData,
//             // }),
//             // use the "body" param to optionally pass additional order information
//             // like product ids or amount
//           }
//         )
//           .then((response) =>response.json(), )
//           .then((order) => order.id)
//           // .then((response) =>console.log(response))
          
//           .catch((err) => {
//             console.log(err);
//         });
//           // console.log(response)
//         }
//       }
//      onApprove={async (data, actions) => {
//         console.log(data)
    
//         return await axios.post(
//           `http://localhost:5000/api/auth/order/${data.orderID}/capture`,{user }
         
//         )
//           . then((response) => response)
//           .then((orderData) => {
//             // Successful capture! For dev/demo purposes:
//             console.log(
//               "Capture result",
//               orderData,
//             //   JSON.stringify(orderData, null, 2)
//             )
//           })
//            .catch((err) => {
//             console.log(err);
//         });
//         // Capture the funds from the transaction
//       }}
//     />
//     </div>
//     </div>
//   );
// };
