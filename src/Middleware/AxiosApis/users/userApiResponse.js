import { Post } from "../apiAction";

const getUserAllData = async (value) => {
    try {
      let response = await Post(`admin/user/get-all`,value);
      console.log(response, "responseapiresponse");
      if (response.code == "200") {
        return { data: response.data.users };
      }
    } catch (err) {
      console.log(err, "error apiresponse");
      if (err.code == "400") {
        return { message: err.message };
      } else {
        return { message: err.message };
      }
    }
  };

  export {
    getUserAllData
  }