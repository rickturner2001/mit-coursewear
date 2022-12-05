import { signIn } from "next-auth/react";

export const WelcomeHero = () => {
  return (
    <div className="hero h-full bg-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello Student</h1>
          <p className="py-6">
            Keep track of your journey to become a better developer with{" "}
            <a
              className="link-warning link"
              href="https://ocw.mit.edu/"
              target={"_blank"}
            >
              MITOPENCOURSEWARE
            </a>
            's material. Create an account and start leanring right now!
          </p>
          <button className="btn-primary btn" onClick={() => signIn("google")}>
            Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};
