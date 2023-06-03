import React, { useState } from 'react';

function Crear({ActualizarArt }) {
  
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [readingTime, setReadingTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto de tipo FileReader
    const reader = new FileReader();

    // Función de callback cuando se cargue la imagen
    reader.onloadend = () => {
      // Obtener la imagen en formato de cadena base64
      const imageBase64 = reader.result;

      // Crear un nuevo objeto con los valores del formulario
      const newObject = {
        id: 20,
        image: imageBase64,
        title: title,
        category: category,
        description: description,
        date: date,
        readingTime: readingTime,
      };
      ActualizarArt(newObject)
      // Agregar el nuevo objeto al arreglo 'data'
      //data.push(newObject);

      // Mostrar el arreglo 'data' en la consola para verificar
      console.log(data);

      // Reiniciar los campos del formulario
      setImage('');
      setTitle('');
      setCategory('');
      setDescription('');
      setDate('');
      setReadingTime('');
    };

    // Leer la imagen como una cadena base64
    reader.readAsDataURL(image);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">Imagen:</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleImageChange}
        required
      /><br />

      <label htmlFor="title">Título:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br />

      <label htmlFor="category">Categoría:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      /><br />

      <label htmlFor="description">Descripción:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea><br />

      <label htmlFor="date">Fecha:</label>
      <input
        type="text"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      /><br />

      <label htmlFor="readingTime">Tiempo de lectura:</label>
      <input
        type="text"
        id="readingTime"
        value={readingTime}
        onChange={(e) => setReadingTime(e.target.value)}
        required
      /><br />

      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Crear;