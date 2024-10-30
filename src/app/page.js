"use client";
import Link from "next/link";
import { Routes } from "./routes";
import { Container, DegreesList } from "@/components";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  return (
    <Container>
      <div className="md:flex justify-between py-12">
        <div className="w-full md:w-3/4 md:pr-10 md:mr-10 md:border-r border-gray-200">
          {/* Banner Section */}
          {isBannerOpen && (
            <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg flex space-x-6 items-center shadow-lg mb-3 transition-all duration-300 ease-in-out transform">
              <Image src="/assets/images/ue_logo.png" alt="University of Education Logo" height={80} width={80} className="w-20 h-20 rounded-full shadow-md border-4 border-white object-cover" />
              <div>
                <h2 className="text-2xl font-bold pb-1">Welcome to ScholarQuill! 👋</h2>
                <p className="text-sm md:text-base leading-relaxed text-blue-100">
                  Your hub for Education University resources: notes, past papers, books, and course outlines.
                  <Link href={Routes.degrees} className="text-yellow-300 underline transition-colors duration-200 hover:text-yellow-400 ml-1">
                    Browse Notes.
                  </Link>
                </p>
              </div>
              <button
                className="text-3xl font-bold absolute right-5 top-3 transform hover:scale-125 hover:text-yellow-300 transition-all duration-200"
                onClick={() => setIsBannerOpen(false)}
              >
                &times;
              </button>
            </div>
          )}


          {/* Degree Section */}
          <DegreesList />
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/4">
          <h3 className="text-base">Product Landscapes</h3>
          <div className="space-y-4 mt-4">
            {/* Sidebar Item */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item}>
                <h4 className="font-semibold mb-2">Security & compliance tools ›</h4>
                <p className="text-sm text-gray-500">Before I founded Vanta in 2018, very few startups had a SOC 2, the most commonly accepted standard for demonstrating...</p>
                <p className="text-xs mt-2">Christina Cacioppo <span className="text-gray-400">CEO & Co-founder, Vanta</span></p>
              </div>
            ))}

          </div>

          <button className="mt-6 w-full text-center bg-blue-600 text-white py-2.5 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out">View more articles</button>
        </div>
      </div>
    </Container>

  );
}