export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.length === 11;
  };
  
  export const validateCarModel = (carModel) => {
    return carModel.length >= 3;
  };
  