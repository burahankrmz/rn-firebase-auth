import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface UserAuthResult {
  status: "success" | "error";
  userInfo: FirebaseAuthTypes.UserCredential | undefined;
  error: string | undefined;
}

export async function login(
  email: string,
  password: string
): Promise<UserAuthResult> {
  try {
    const result: FirebaseAuthTypes.UserCredential =
      await auth().signInWithEmailAndPassword(email, password);
    console.log(result.user);
    return {
      status: "success",
      userInfo: result,
      error: undefined,
    };
  } catch (error: any) {
    console.log(error);
    return {
      status: "error",
      userInfo: undefined,
      error: error.message,
    };
  }
}

export async function signUp(
  email: string,
  password: string
): Promise<UserAuthResult> {
  try {
    const result: FirebaseAuthTypes.UserCredential =
      await auth().createUserWithEmailAndPassword(email, password);
    return {
      status: "success",
      userInfo: result,
      error: undefined,
    };
  } catch (error: any) {
    console.log(error);
    return {
      status: "error",
      userInfo: undefined,
      error: error.message,
    };
  }
}

export async function forgotPassword(email: string): Promise<UserAuthResult> {
  try {
    const result: void = await auth().sendPasswordResetEmail(email);
    return {
      status: "success",
      userInfo: undefined,
      error: undefined,
    };
  } catch (error: any) {
    console.log(error);
    return {
      status: "error",
      userInfo: undefined,
      error: error.message,
    };
  }
}

export async function signOut(): Promise<UserAuthResult> {
  try {
    const result: void = await auth().signOut();
    return {
      status: "success",
      userInfo: undefined,
      error: undefined,
    };
  } catch (error: any) {
    console.log(error);
    return {
      status: "error",
      userInfo: undefined,
      error: error.message,
    };
  }
}