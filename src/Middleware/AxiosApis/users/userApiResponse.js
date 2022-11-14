import { Delete, Get, Patch, Post, Put } from "../apiAction";

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

const getUserById = async (id) => {
    try {
      let response = await Get(`admin/user/get/${id}`);
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

 const deleteUser = async (id) => {
    try {
      let response = await Delete(`admin/user/delete-user/${id}`);
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

 const updateUser = async (id ,data) => {
    try {
      let response = await Patch(`admin/user/update-user/${id}`,data);
      console.log(response, "responseapiresponse");
      if (response.code == "200") {
        return { data: response.data.users };
      }
    } catch (err) {
      console.log(err, "error apiresponse");
        return { message: err.message };
    }
  };
  
  const addUser = async (data) => {
    try {
      let response = await Post(`admin/user/create`,data);
      console.log(response, "responseapiresponse");
      if (response.code == "200") {
        return { data: response.data.users };
      }
    } catch (err) {
      console.log(err, "error apiresponse");
        return { message: err.message };
    }
};

 const getUserProfile = async (data) => {
  try {
    let response = await Get(`users/fetch/profile`);
    console.log(response, "responseapiresponse");
    if (response.code == "200") {
      return { data: response.data.users };
    }
  } catch (err) {
    console.log(err, "error apiresponse");
      return { message: err.message };
  }  
};

const resetPassword  = async (id ,data) => {
  try {
    let response = await Put(`admin/user/resetpassword/${id}`,data);
    console.log(response, "responseapiresponse");
    if (response.code == "200") {
      return { data: response.data.users };
    }
  } catch (err) {
    console.log(err, "error apiresponse");
      return { message: err.message };
  } 
};

  

  export {
    resetPassword,
    getUserProfile,
    addUser,
    getUserAllData,
    getUserById,
    deleteUser,
    updateUser,

  }