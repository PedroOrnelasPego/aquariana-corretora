export const formatPhoneNumber = (phoneNumber) => {
    const numericValue = phoneNumber.replace(/\D/g, "");
  
    if (numericValue) {
      let formattedValue = "(" + numericValue.substring(0, 2);
      if (numericValue.length > 2) {
        formattedValue += ") " + numericValue.substring(2, 7);
      }
      if (numericValue.length > 7) {
        formattedValue += "-" + numericValue.substring(7, 11);
      }
  
      return formattedValue;
    } else {
      return "";
    }
  };
  