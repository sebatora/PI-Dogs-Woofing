const validation = (formData) => {

  let errors = {};
  let regexH = /^\d{1,2} ?- ?\d{1,2}$/
  let regexW = /^\d{1,2} ?- ?\d{1,2}$/
  let regexLS = /^\d{1,2} ?- ?\d{1,2}$/

  // Name
  if(!formData.name) errors.name = "This field is required";

  if (formData.name.length > 25) errors.name = "Must be less than 25 characters";

  if(!/^[a-zA-Z ]*$/.test(formData.name)) errors.name = "Only letters are allowed";

  // Height

  if(!formData.height) errors.height = "This field is required";
  if(!regexH.test(formData.height)) errors.height = "The format must be min - max";

    // Weight

  if(!formData.weight) errors.weight = "This field is required";
  if(!regexW.test(formData.weight)) errors.weight = "The format must be min - max";

  // Life Span

  if(!formData.life_span) errors.life_span = "This field is required";
  if(!regexLS.test(formData.life_span)) errors.life_span = "The format must be min - max";

  // Image

  // if(!formData.image) errors.image = "This field is required";

  // Temperaments

  // if(formData.temperaments.length === 0) errors.temperaments = "This field is required";
  // if(formData.temperaments.length > 0) errors.temperaments = "";

  return errors;

}

export default validation;