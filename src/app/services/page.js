"use client";
import React from "react";
import {
  FaRocket,
  FaUsers,
  FaMoneyBillWave,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaMobileAlt,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
    <Navbar />
    <main className="space-y-20">
      {/* Header */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] bg-cover bg-center py-32 text-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl uppercase underline decoration-blue-500 decoration-2 hover:underline decoration decoration-green-600 mt-6 font-bold mb-4">Services</h2>
          <p className="text-3xl font-light">
            We help our clients achieve their goals with our start-up and
            corporate experience in design, coding and web development.
          </p>
        </div>
      </section>

      {/* Startup Consulting */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')] bg-cover bg-center py-20 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80" />
        <div className="relative z-10">
          <h3 className="text-4xl underline text-center uppercase font-semibold text-gray-900 dark:text-white mb-10">
            Startup Consulting
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<FaLightbulb className="text-indigo-500 text-4xl mb-4" />}
              title="Startup Advice"
              text="Our Co-Founders have led companies like GateMe and PlanetOS, and
                kickstarted events such as Latitude59. We know the field."
            />
            <Card
              icon={<FaUsers className="text-indigo-500 text-4xl mb-4" />}
              title="Team Building"
              text="We boost your team’s effectiveness through design, tech, and
                marketing — and train your team for long-term success."
            />
            <Card
              icon={<FaMoneyBillWave className="text-indigo-500 text-4xl mb-4" />}
              title="Funding"
              text="We invest in potential startups and connect you with angel &
                venture capital investors across Europe and the US."
            />
          </div>
        </div>
      </section>

      {/* Product Consulting */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center py-20 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80" />
        <div className="relative z-10">
          <h3 className="text-4xl uppercase text-center font-semibold text-gray-900 dark:text-white mb-10">
            Product Consulting
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<FaUsers className="text-indigo-500 text-4xl mb-4" />}
              title="Meeting"
              text="We start with a face-to-face meeting where you describe your ideas
                and vision."
            />
            <Card
              icon={<FaChartLine className="text-indigo-500 text-4xl mb-4" />}
              title="Analysis"
              text="We run a deep analysis to find the best solution for your needs."
            />
            <Card
              icon={<FaCheckCircle className="text-indigo-500 text-4xl mb-4" />}
              title="Solution"
              text="We propose clear next steps — from workshops to design and
                development."
            />
          </div>
        </div>
      </section>

      {/* Lean Requirements */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center py-20 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85" />
        <div className="relative z-10">
          <h3 className="text-4xl uppercase text-center font-semibold text-gray-900 dark:text-white mb-10">
            Lean Requirements Workshop
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<FaRocket className="text-indigo-500 text-4xl mb-4" />}
              title="Lean Requirements"
              text="We create a live prototype to test business hypotheses and customer
                engagement."
            />
            <Card
              icon={<FaCogs className="text-indigo-500 text-4xl mb-4" />}
              title="Product Analysis"
              text="Define minimum features, user-flows, and database architecture for
                clarity."
            />
            <Card
              icon={<FaCheckCircle className="text-indigo-500 text-4xl mb-4" />}
              title="Final Result"
              text="A detailed scope document you can take to any product development
                team."
            />
          </div>
        </div>
      </section>

      {/* Product Design */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] bg-cover bg-center py-20 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80" />
        <div className="relative z-10">
          <h3 className="text-4xl uppercase text-center font-semibold text-gray-900 dark:text-white mb-10">
            Product Design
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<FaUsers className="text-indigo-500 text-4xl mb-4" />}
              title="Mapping Needs"
              text="We define service purpose, end goals, and target audience."
            />
            <Card
              icon={<FaLaptopCode className="text-indigo-500 text-4xl mb-4" />}
              title="Demonstration"
              text="Explore an interactive skeleton of your design before development."
            />
            <Card
              icon={<FaCheckCircle className="text-indigo-500 text-4xl mb-4" />}
              title="Validation"
              text="User-tested designs ensure clarity and comfort before finalizing."
            />
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center py-20 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85" />
        <div className="relative z-10">
          <h3 className="text-4xl uppercase text-center font-semibold text-gray-900 dark:text-white mb-10">
            Web Development
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              icon={<FaCogs className="text-indigo-500 text-4xl mb-4" />}
              title="Development Process"
              text="Using Agile (Scrum), we break work into weekly sprints with clear
                goals and daily updates."
            />
            <Card
              icon={<FaLaptopCode className="text-indigo-500 text-4xl mb-4" />}
              title="Technologies Used"
              text="Python (Django), React.js, and PostgreSQL are our core stack —
                with 10+ years of expertise."
            />
          </div>
        </div>
      </section>

      {/* Mobile Development */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9')] bg-cover bg-center py-20 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80" />
        <div className="relative z-10">
          <h3 className="text-4xl uppercase text-center font-semibold text-gray-900 dark:text-white mb-10">
            Mobile Development
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<FaCogs className="text-indigo-500 text-4xl mb-4" />}
              title="API Development"
              text="We build APIs for smooth communication between apps and databases."
            />
            <Card
              icon={<FaMobileAlt className="text-indigo-500 text-4xl mb-4" />}
              title="Native Apps"
              text="Native iOS and Android apps with high performance and UX."
            />
            <Card
              icon={<FaLaptopCode className="text-indigo-500 text-4xl mb-4" />}
              title="Mobile Web"
              text="Cost-effective mobile web apps accessible across all devices and
                browsers."
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
    </>
  );
}

/* Reusable Card Component */
function Card({ icon, title, text }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition">
      {icon}
      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
};

