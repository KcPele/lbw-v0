"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin } from "lucide-react";

const speakers = [
  {
    name: "Kashifu Inuwa Abdullahi",
    role: "CEO",
    company: "NITDA",
    image: "/speakers/kashifu.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Dr. Falima Olaitan Jimoh",
    role: "Head SouthWest Zonal Office",
    company: "NITDA",
    image: "/speakers/falima.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Tim Beiko",
    role: "Lead",
    company: "Ethereum Foundation",
    image: "/speakers/tim-beiko.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Qi Zhou",
    role: "Founder",
    company: "Eth Storage",
    image: "/speakers/qi-zhou.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Federico Ast",
    role: "Founder",
    company: "Kleros",
    image: "/speakers/federico-ast.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Chuta Chimezie",
    role: "Founder",
    company: "Nigeria Blockchain User Group",
    image: "/speakers/chuta.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Vitalik Buterin",
    role: "Co-Founder",
    company: "Ethereum",
    image: "/speakers/vitalik.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Ian Balina",
    role: "CEO",
    company: "TokenMetrics",
    image: "/speakers/ian-balina.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Karla Obakpolor",
    role: "Lead",
    company: "Borderless",
    image: "/speakers/karla.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Opeyemi Stephen",
    role: "Lead",
    company: "Consensys",
    image: "/speakers/opeyemi.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Devon Krantz",
    role: "Lead",
    company: "Web3 Sanctuary",
    image: "/speakers/devon.jpg",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Jude Ozenigbe",
    role: "Lead",
    company: "Cyberchain",
    image: "/speakers/jude.jpg",
    twitter: "#",
    linkedin: "#"
  }
];

const Speakers = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Speakers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This event brings together industry leaders, policymakers, innovators, and enthusiasts to explore the transformative potential of blockchain technology. This year's lineup of speakers features a diverse array of experts who are at the forefront of blockchain development, regulation, and application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                    <p className="text-primary mb-1">{speaker.role}</p>
                    <p className="text-muted-foreground mb-4">{speaker.company}</p>
                    <div className="flex gap-4">
                      <a
                        href={speaker.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={20} />
                      </a>
                      <a
                        href={speaker.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;