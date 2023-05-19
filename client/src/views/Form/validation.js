const validation = (formData, allDogs) => {

  let errors = {};

  // Name
  if(!formData.name) errors.name = "This field is required";

  if (formData.name.length > 25) errors.name = "Must be less than 25 characters";

  if(!/^[a-zA-Z ]*$/.test(formData.name)) errors.name = "Only letters are allowed";

  // Height

  if(!formData.height) errors.height = "This field is required";
  if(!/^\d{1,2}(\.\d)?\s*(y|cm)?\s*-\s*\d{1,2}(\.\d)?\s*(y|cm)?$/.test(formData.height)) errors.height = "The format must be min - max cm";

    // Weight

  if(!formData.weight) errors.weight = "This field is required";
  if(!/^\d{1,2}(\.\d)?\s*(y|kg)?\s*-\s*\d{1,2}(\.\d)?\s*(y|kg)?$/.test(formData.weight)) errors.weight = "The format must be min - max kg";

  // Life Span

  if(!formData.life_span) errors.life_span = "This field is required";
  if(!/^\d{1,2}(\.\d)?\s*(y|años)?\s*-\s*\d{1,2}(\.\d)?\s*(y|years)?$/.test(formData.life_span)) errors.life_span = "The format must be min - max years";

  return errors;

}

export default validation;