import { defaultAuth } from "../config";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

interface SignUpResult {
    result: UserCredential | null;
    error: any;
}

export default async function signUp(email: string, password: string): Promise<SignUpResult> {
    let result: UserCredential | null = null,
        error: any = null;
    try {
        result = await createUserWithEmailAndPassword(defaultAuth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
