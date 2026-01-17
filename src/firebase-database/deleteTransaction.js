
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, getFirestore, query, where } from "firebase/firestore";

// const firebaseConfig = {
//   // Your Firebase configuration
//   apiKey: "AIzaSyByA9Jr_gDNp6OkHuSkMhxjTP_x_5SEyGc",
//   authDomain: "expense-tracker-a8a57.firebaseapp.com",
//   databaseURL: "https://expense-tracker-a8a57-default-rtdb.firebaseio.com",
//   projectId: "expense-tracker-a8a57",
//   storageBucket: "expense-tracker-a8a57.appspot.com",
//   messagingSenderId: "335618173369",
//   appId: "1:335618173369:web:38bb527a5f70ccbb71ae68",
//   measurementId: "G-VR4651YZW7"
// };

//const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


  let userId, userEmail;
  let documentId;
  let results=[];
  let uname;

  auth.onAuthStateChanged(function (user) {
    if (user) {
      userId = user.uid;
      userEmail = user.email;
    }
  });

  const deleteTransaction = async(transaction) => {

    uname = transaction.name;
    console.log(transaction);
    const collectionName = transaction.name+"-"+"transaction";
    // const collectionRef = collection(db,collectionName);
    const deletequery = query(collection(db, collectionName), where("amount","==",transaction.amount), where("date","==",transaction.date),
                        where("category","==",transaction.category),
                        where("reference","==",transaction.reference),
                        where("type","==",transaction.type));

    // await deleteDoc(db, collectionName, transaction.id);
    // return {results};    

    // console.log(deletequery);
    // const collectionRef = await collection(db, collectionName);

  
    console.log("checkpoint 1");
    console.log(deletequery);
    const collectionSnapshot = await getDocs(deletequery);
    console.log("checkpoint 2");
    console.log(collectionSnapshot.docs[0].data());
    if(collectionSnapshot.docs.length > 0)
    {

      console.log(collectionSnapshot.docs[0].id);
      documentId = collectionSnapshot.docs[0].id;
  
    }
    

    // const docRef =  doc(db, collectionName, documentId);
    try {
      deleteDoc(doc(db,collectionName,documentId));
      console.log("Document deleted successfully");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
    
    // await deleteDoc(collectionSnapshot.docs);
    // console.log(deleteSnapshot.docs.length);
    // if(deleteSnapshot.docs.length > 0)
    // {

    //   console.log(deleteSnapshot.length);

    //   console.log(deleteSnapshot.docs.length);
    //     deleteSnapshot.forEach((doc)=>{
    //       documentId = doc.id;
    //     })
    
    //     console.log(documentId);
        
    //     // deleting document
    //     const documentRef = await doc(db, collectionName, documentId);
    //     await deleteDoc(documentRef);
    // }

  };

export default deleteTransaction;
