"use client";
import React, {ReactNode} from 'react';
import Head from 'next/head';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface AuthLayoutProps {
    children: ReactNode;
}

const PartnersLayout = ({children}: AuthLayoutProps) => {
    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f2f2] dark:bg-[#121212]">
            <Head>
                <title>Music</title>
                <meta name="description" content="music page"/>
            </Head>
            <header className="w-full">
                <NavBar/>
            </header>
            <main className="w-full mx-auto bg-[#f2f2f2] min-h-screen">
                {children}
            </main>
       
            {/* <Footer/> */}
        </div>
    );
};

export default PartnersLayout;
