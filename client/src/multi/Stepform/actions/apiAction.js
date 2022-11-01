import { API_FAIL, API_REQUEST, API_SUCCESS } from "../constants/apiConstants";
import axios from "axios";

export const apidata = async(dispatch)=> {
  try {
    dispatch({ type: API_REQUEST });
    const { data } = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=JxTR_CmO6LOwDEY7gYj8mh-6N5klsFTfRxZBd1zAUaSlLfloCVG1VYeAl4mKdepsjisvchrhrId-zj_OKuJ8Ztfr9h0fILoXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM5Ekl7EwoTMsxbGD7Mk6JPN3Ls7Oyxjmrsr3ZQwRD52M_vMAqczDkXfnrBBGFFHff8VMKaSWAE-WxUrUSiQwyHxctBCURm4-9z9Jw9Md8uu&lib=MBii240CyOZU5TRkVZr_iMkwZJcFcrlZl");

    dispatch({ type: API_SUCCESS, payload: data.data});
    // console.log(data.data);
  } catch (error) {
    dispatch({ type: API_FAIL });

    // console.log(error.response);
  }
};

export const weatherapi = async(location,dispatch)=>{

  

}


