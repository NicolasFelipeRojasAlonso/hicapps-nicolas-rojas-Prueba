import { functions } from 'firebase-functions';
import database from './configFirebase';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.database();

// Crear un nuevo paciente
exports.crearPaciente = funciones.https.onRequest((req, res) => {

  const nuevoPaciente = req.body;

  if (!nuevoPaciente) {
    return res.status().json({ error: 'Datos no proporcionados' });
  }

  const refPacientes = db.ref('pacientes');
  const refNuevoPaciente = refPacientes.push();
  refNuevoPaciente.set(nuevoPaciente)
    .then(() => {
      return res.status().json({ message: 'Paciente creado exitosamente' });
    })
    .catch((error) => {
      return res.status().json({ error: error.message });
    });
});

  // Función para obtener todos los paciente
exports.obtenerTodosLosPacientes = functions.https.onRequest((req, res) => {

    const refPacientes = db.ref('pacientes');
  
    refPacientes.once('value', (snapshot) => {
      const pacientes = snapshot.val();
      return res.status().json(pacientes);
    }).catch((error) => {
      return res.status().json({ error: error.message });
    });
  });