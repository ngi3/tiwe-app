import { google } from "googleapis"; 

export default async function handler(req, res) { 
  if (req.method !== "POST") { 
    return res.status(405).json({ message: "Seules les requêtes POST sont autorisées" }); 
  } 

  const { name, email, message } = req.body; // Ajustez selon les champs de votre formulaire 

  try { 
    // Authentification avec Google Sheets 
    const auth = new google.auth.GoogleAuth({ 
      credentials: { 
        client_email: process.env.GOOGLE_CLIENT_EMAIL, 
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), 
      }, 
      scopes: [ 
        "https://www.googleapis.com/auth/drive", 
        "https://www.googleapis.com/auth/drive.file", 
        "https://www.googleapis.com/auth/spreadsheets", 
      ], 
    }); 

    const sheets = google.sheets({ version: "v4", auth }); 

    // Ajouter les données au Google Sheet 
    await sheets.spreadsheets.values.append({ 
      spreadsheetId: process.env.GOOGLE_SHEET_ID, 
      range: "Sheet1!A1:C1", // Ajustez selon vos colonnes 
      valueInputOption: "USER_ENTERED", 
      requestBody: { 
        values: [[name, email, message]], // Ajustez selon vos champs 
      }, 
    }); 

    return res.status(201).json({ message: "Données enregistrées avec succès" }); 
  } catch (error) { 
    console.error("Erreur:", error); 
    return res.status(500).json({ message: "Erreur lors de l'enregistrement des données" }); 
  } 
} 