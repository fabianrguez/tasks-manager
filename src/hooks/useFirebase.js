import { firestoreDb } from 'firebaseConfig';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export function useFirebase() {
  const [boards, setBoards] = useState([]);
  // const [collection, setCollection] = useState();

  useEffect(() => {
    (async () => {
      const response = await getDocs(collection(firestoreDb, 'boards'));
      response.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        // console.log(doc.data());
        setBoards([...boards, doc.data()]);
      });
    })();
  }, []);

  return { boards };
}
