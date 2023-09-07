import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    // Load the service account credentials
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Authorize and authenticate the client
    const client = await auth.getClient();

    // Retrieve the data from the Google Sheet
    const sheets = google.sheets({ version: 'v4', auth: client });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1DIpBfP5kqWox6OE7O-ApvQbnMRNmLF6W-Ij0tSVapMw',
      range: 'Sheet1!B2:B3',
    });

    // Process the data
    const data = response.data.values;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}