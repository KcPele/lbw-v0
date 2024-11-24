"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Lightbulb, Users2 } from "lucide-react";

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-primary" />,
    title: "Blockchain Interoperability",
    description:
      "Exploring advanced technologies that power Africa's digital transformation through blockchain integration.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovation Hub",
    description:
      "Showcasing cutting-edge protocols and solutions from leading blockchain projects and developers.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-primary" />,
    title: "Community Focus",
    description:
      "Bringing together industry leaders, developers, investors, and enthusiasts from across Nigeria and beyond.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About The Conference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The goal of Lagos Blockchain Week is to create a prominent annual event
            dedicated to the exploration and advancement of blockchain technology in Nigeria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The week-long event delves into the latest trends, innovations, and opportunities
            within the blockchain and cryptocurrency sectors, featuring workshops,
            hackathons, and expert-led sessions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;