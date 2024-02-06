"use client"
import { useState, useMemo } from "react";
import LoginComponent from '../components/LoginComponent';
export default function Home() {
  return (
    <div>
        <h1>Welcome to Next.js!</h1>
        <LoginComponent />
    </div>
);
}
