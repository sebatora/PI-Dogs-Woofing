const validation = (formData) => {

  let errors = {};

  // Name
  if(!formData.name) errors.name = "Por favor completa este campo";

  if (formData.name.length > 25) errors.name = "Debe tener menos de 25 caracteres";

  if(!/^[a-zA-Z0-9 ]*$/.test(formData.name)) errors.name = "Solo se admiten letras o numeros";

  // Height

  if(!formData.height) errors.height = "Por favor completa este campo";
  if(!/^\d{1,2}(\.\d)?\s*(y|cm)?\s*-\s*\d{1,2}(\.\d)?\s*(y|cm)?$/.test(formData.height)) errors.height = "El formato debe ser min - max cm";

    // Weight

  if(!formData.weight) errors.weight = "Por favor completa este campo";
  if(!/^\d{1,2}(\.\d)?\s*(y|kg)?\s*-\s*\d{1,2}(\.\d)?\s*(y|kg)?$/.test(formData.weight)) errors.weight = "El formato debe ser min - max kg";

  // Life Span

  if(!formData.life_span) errors.life_span = "Por favor completa este campo";
  if(!/^\d{1,2}(\.\d)?\s*(y|años)?\s*-\s*\d{1,2}(\.\d)?\s*(y|años)?$/.test(formData.life_span)) errors.life_span = "El formato debe ser min - max años";

  return errors;

}

export default validation;