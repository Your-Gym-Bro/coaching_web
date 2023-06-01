import { signOut } from "firebase/auth";
import { defaultAuth } from "../config";

export async function logout(): Promise<void> {
    try {
        await signOut(defaultAuth);
    } catch (e) {
        console.error('Sign out error', e);
    }
}
