import firebase from 'firebase';

const app = firebase.initializeApp({
  
})

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)

//no se pushea al repo porque es info privada, se puede crear
//un archivo .em para guardar var de entorno


/*useEffect(()=> {
        const db = getFirestore();
        const items = db.collection("items").where('stock','>=', 2);
      
      items
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(data)
          setLoading(false)
        });
    },[])
 */