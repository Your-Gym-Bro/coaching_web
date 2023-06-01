import { defaultAuth } from "../config";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

interface SignInResult {
    result: UserCredential | null;
    error: any;
}

export default async function signIn(email: string, password: string): Promise<SignInResult> {
    let result: UserCredential | null = null,
        error: any = null;
    try {
        result = await signInWithEmailAndPassword(defaultAuth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
