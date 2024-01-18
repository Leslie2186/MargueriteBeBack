import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/formulaire.jpg";
import "./Inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    region: "",
    adresseSalon: "",
    email: "",
    password: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    // const form = new FormData();
    // form.append("image", formData.photo);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/candidats`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.info(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <img className="concept_img" src={logo} alt="L'Oréal" />
      <div className="Inscription">
        <form onSubmit={handleUpload} className="Inscriptionform">
          <input
            className="classinput"
            type="text"
            name="nom"
            placeholder="NOM"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="prenom"
            placeholder="PRENOM"
            value={formData.prenom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="age"
            placeholder="AGE"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="region"
            placeholder="REGION"
            value={formData.region}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="adresseSalon"
            placeholder="ADRESSE SALON"
            value={formData.adresseSalon}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="email"
            placeholder="MAIL"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <input
            className="classinput"
            type="text"
            name="password"
            placeholder="MOT DE PASSE"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            className="classtextarea"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            name="image"
            placeholder="TA PHOTOGRAPHIE"
            required
          />
          <div className="containbutsubmit">
            <button type="submit" className="classbut">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
