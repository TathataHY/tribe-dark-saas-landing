"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

import EcosystemIcon from "@/assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const Feature = ({ feature }: { feature: (typeof features)[number] }) => {
  const borderRef = useRef<HTMLDivElement>(null);

  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black,transparent)`;

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (borderRef.current) {
        const { x, y } = borderRef.current.getBoundingClientRect();

        offsetX.set(clientX - x);
        offsetY.set(clientY - y);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      key={feature.title}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{ maskImage }}
      ></motion.div>
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white text-black">
        <EcosystemIcon />
      </div>
      <h3 className="font-bold mt-6">{feature.title}</h3>
      <p className="text-white/70 mt-2">{feature.description}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-white/70 mt-5 text-xl">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature) => (
            <Feature key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
