import { Bars3Icon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: sessionData, status } = useSession();

  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <button className="btn-primary btn bg-red-700 hover:bg-red-700">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex gap-12">
        {status === "authenticated" ? (
          <>
            <div className="dropdown-end dropdown">
              <p className="btn-ghost btn text-white">Your courses</p>
            </div>
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img src={sessionData.user?.image || ""} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <button
              className="btn bg-red-700 hover:bg-red-700"
              onClick={() => signIn("google")}
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
};
