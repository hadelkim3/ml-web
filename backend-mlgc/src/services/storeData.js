const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-anastasia-b9c0d24486c0.json')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-anastasia',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    console.log('Storing data to Firestore with id:', id);
    await predictCollection.doc(id).set(data);
    console.log('Data successfully stored');
  } catch (error) {
    console.error('Error storing data:', error);
  }
}
 
module.exports = storeData;
