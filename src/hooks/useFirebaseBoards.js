import { arrayUnion, collection, doc, onSnapshot, query, updateDoc, arrayRemove } from 'firebase/firestore';
import { firestoreDb } from 'firebaseConfig';
import { useEffect, useState } from 'react';

export function useFirebaseBoards() {
  const [boards, setBoards] = useState([]);

  const save = async ({ document, column, collectionId }) => {
    const columnKey = `columns.${column}.items`;
    const documentRef = doc(firestoreDb, 'boards', collectionId);
    await updateDoc(documentRef, {
      [columnKey]: arrayUnion(document),
    });
  };

  const deleteColumnItem = async ({ document, column, collectionId }) => {
    const columnKey = `columns.${column}.items`;
    const documentRef = doc(firestoreDb, 'boards', collectionId);
    await updateDoc(documentRef, {
      [columnKey]: arrayRemove(document),
    });
  };

  useEffect(() => {
    setBoards([]);
    const _query = query(collection(firestoreDb, 'boards'));
    const unsubscribe = onSnapshot(_query, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setBoards([...boards, { ...doc.data(), id: doc.id }]);
      });
    });

    return () => unsubscribe();
  }, []);

  return { boards, save, deleteColumnItem };
}
