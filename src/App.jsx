import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    specialization: "",
    experienceYears: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName)
      newErrors.fullName = "Il nome completo è obbligatorio.";
    if (!formData.username) newErrors.username = "Lo username è obbligatorio.";
    if (!formData.password) newErrors.password = "La password è obbligatoria.";
    if (!formData.specialization)
      newErrors.specialization = "La specializzazione è obbligatoria.";
    if (!formData.experienceYears || formData.experienceYears <= 0)
      newErrors.experienceYears =
        "Gli anni di esperienza devono essere un numero positivo.";
    if (!formData.description)
      newErrors.description = "La descrizione è obbligatoria.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Dati del form:", formData);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registrazione Sviluppatori</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome completo:</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <div className="text-danger">{errors.fullName}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div className="text-danger">{errors.username}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Specializzazione:</label>
          <select
            className="form-select"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
          >
            <option value="">--Seleziona--</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          {errors.specialization && (
            <div className="text-danger">{errors.specialization}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Anni di esperienza:</label>
          <input
            type="number"
            className="form-control"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleChange}
            min="0"
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
          />
          {errors.experienceYears && (
            <div className="text-danger">{errors.experienceYears}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Descrizione:</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <div className="text-danger">{errors.description}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Registrati
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
