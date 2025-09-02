import { SignUpView } from "@/modules/auth/views/sign-up-views";
import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";

const Signup = async () => {
    const session = await caller.auth.session();

    if (session.user) {
        redirect("/");
    }

    return (
        <SignUpView />
    )
}

export default Signup;