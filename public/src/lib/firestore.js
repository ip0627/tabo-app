import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

// Firestore にユーザー情報を保存
export const saveUserData = async (user) => {
  try {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
    });
    console.log('User data saved to Firestore');
  } catch (error) {
    console.error('Error saving user data to Firestore:', error);
  }
};
