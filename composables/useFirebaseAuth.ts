import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();
  const user = useState<User | null>("firebase_user", () => null);

  const setUser = (): void => {
    onAuthStateChanged($auth, (user_) => {
      if (user_) {
        user.value = user_;
      }
    });
  };

  const registerUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        return true;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
      return false;
    }
    return false;
  };

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        return true;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
      return false;
    }
    return false;
  };

  const logOut = async (): Promise<boolean> => {
    try {
      await signOut($auth);
      return true;
    } catch (err) {
      console.error(err);
    }
    return false;
  };

  return {
    user,
    setUser,
    registerUser,
    signIn,
    logOut,
  };
}
