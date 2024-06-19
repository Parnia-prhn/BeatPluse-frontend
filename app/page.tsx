"use client";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Table } from "antd";
import MusicPlayer from "@/src/pages/parts/sidebars/musicPlayer";
import SearchPageWithoutLogin from "@/src/pages/searchPageWithoutLogin";
import SearchPageResultWithoutLogin from "@/src/pages/searchPageResultWithoutLogin";
import HomePageWithoutLogin from "@/src/pages/homePageWithoutLogin";
import HomePageWithLogin from "@/src/pages/homePageWithLogin";
import LoginPage from "@/src/pages/loginpage";
import SignupPage from "@/src/pages/signuppage";
import ArtistPageComplete from "@/src/pages/artistPageComplete";
import NotificationPageComplete from "@/src/pages/notificationPageComplete";
import PlayListPageComplete from "@/src/pages/playListPageComplete";
import ProfilePageComplete from "@/src/pages/profilePageComplete";

export default function Home() {
  return (
    <div>
      <div>
        <HomePageWithoutLogin />
      </div>
    </div>
  );
}
