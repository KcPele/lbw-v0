"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Globe } from "lucide-react";

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Blockchain Researcher",
    company: "MIT",
    bio: "Leading researcher in blockchain scalability and sustainability",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    twitter: "#",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "BlockTech Solutions",
    bio: "Pioneer in blockchain enterprise solutions with 15+ years experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    twitter: "#",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Aisha Patel",
    role: "DeFi Strategist",
    company: "CryptoFin",
    bio: "Expert in decentralized finance and crypto economics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    twitter: "#",
    linkedin: "#",
    website: "#",
  },
  {
    name: "David Kim",
    role: "Blockchain Developer",
    company: "Web3 Labs",
    bio: "Full-stack blockchain developer specializing in smart contracts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    twitter: "#",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Elena Rodriguez",
    role: "Policy Advisor",
    company: "Digital Africa Initiative",
    bio: "Blockchain policy expert focusing on regulatory frameworks",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    twitter: "#",
    linkedin: "#",
    website: "#",
  },
  {
    name: "John Doe",
    role: "NFT Artist",
    company: "CryptoArt Studio",
    bio: "Digital artist exploring the intersection of art and blockchain",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    twitter: "#",
    linkedin: "#",
    website: "#",
  },
];

const SpeakersPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Speakers</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the industry leaders and innovators who will be sharing their insights
              and expertise at Lagos Blockchain Week 2024.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative h-72 w-full">
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
                      <p className="text-muted-foreground mb-6">{speaker.bio}</p>
                      <div className="flex gap-4">
                        <a
                          href={speaker.twitter}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${speaker.name}'s Twitter`}
                        >
                          <Twitter size={20} />
                        </a>
                        <a
                          href={speaker.linkedin}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${speaker.name}'s LinkedIn`}
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href={speaker.website}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${speaker.name}'s Website`}
                        >
                          <Globe size={20} />
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

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Want to Speak at LBW 2024?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              We're always looking for passionate speakers to share their knowledge
              and experience with our community.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#"
                className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                Apply to Speak
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersPage;