
"use client";
import { Brain, Cog, Code } from "lucide-react"; // icons

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-10 h-10 text-blue-500" />,
      title: "Artificial Intelligence",
      desc: "Leverage AI to unlock smarter insights, enhance decision-making, and drive innovation.",
    },
    {
      icon: <Cog className="w-10 h-10 text-green-500" />,
      title: "Automation & Integrations",
      desc: "Streamline workflows, reduce manual effort, and connect systems seamlessly for peak efficiency.",
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Custom Software Development",
      desc: "Build tailored solutions designed to meet your unique business needs and scale with growth.",
    },
  ];

  return (
    <section className="bg-gray-200 rounded-lg mb-5 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Outperform Competition with Digital Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
