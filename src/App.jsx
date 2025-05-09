import React, { useState, useRef } from "react";

const RegistrationForm = () => {
  const fullNameRef = useRef(null);
  const specializationRef = useRef(null);
  const experienceYearsRef = useRef(null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [validStates, setValidStates] = useState({});

  const validateField = (name, value) => {
    let error = "";
    let valid = false;

    if (name === "username") {
      const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
      valid = usernameRegex.test(value);
      error = valid
        ? ""
        : "Lo username deve essere almeno 6 caratteri alfanumerici senza spazi.";
    }

    if (name === "password") {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      valid = passwordRegex.test(value);
      error = valid
        ? ""
        : "La password deve avere almeno 8 caratteri, includere una lettera, un numero e un simbolo.";
    }

    if (name === "description") {
      valid = value.trim().length >= 100 && value.trim().length <= 1000;
      error = valid
        ? ""
        : "La descrizione deve contenere tra 100 e 1000 caratteri.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setValidStates((prevValid) => ({ ...prevValid, [name]: valid }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      fullName: fullNameRef.current.value,
      specialization: specializationRef.current.value,
      experienceYears: experienceYearsRef.current.value,
      ...formData,
    };
    console.log("Dati inviati:", finalData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registrazione Sviluppatori</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome completo:</label>
          <input type="text" className="form-control" ref={fullNameRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Specializzazione:</label>
          <select className="form-select" ref={specializationRef}>
            <option value="">--Seleziona--</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Anni di esperienza:</label>
          <input
            type="number"
            className="form-control"
            ref={experienceYearsRef}
            min="0"
          />
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
          {validStates.username && (
            <div className="text-success">Username valido!</div>
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
          {validStates.password && (
            <div className="text-success">Password valida!</div>
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
          {validStates.description && (
            <div className="text-success">Descrizione valida!</div>
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
