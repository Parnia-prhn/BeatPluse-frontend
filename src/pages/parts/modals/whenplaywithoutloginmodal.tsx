import React from "react";
import { Button } from "antd";
import Link from "next/link";

export default function Whenplaysongwithoutlogin() {
  return (
    <>
      <div className="flex flex-row bg-slate-300 text-slate-900 dark:bg-slate-600 dark:text-slate-300">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/c6/Diamond_Heart_Alan_Walker.jpg"
          className="m-3 flex justify-start rounded-lg w-27 h-27"
        />
        <div className="flex flex-col justify-center m-3  ">
          <p className="text-slate-900 font-bold">
            start listening with a free BEAT+ account
          </p>
          <Link href="/auth/signup">
            <Button shape="round" className="m-3">
              signup free
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button shape="round" className="m-3">
              login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
