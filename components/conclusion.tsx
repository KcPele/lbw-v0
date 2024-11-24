"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Conclusion = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Conclusion</h2>
          <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
            <p>
              Lagos Blockchain Week was an exciting and comprehensive event designed to bring
              together the dynamic and diverse community focused on blockchain and cryptocurrency
              technologies. Held from June 10th to 15th, 2024, this year's edition took place at
              Radisson Hotels, with the Grand Finale on June 15th at Radisson Blu.
            </p>
            <p>
              More than just a typical conference, this week-long event provided an immersive
              experience for people from all walks of life, including seasoned professionals,
              entrepreneurs, developers, investors, and passionate blockchain enthusiasts.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Event Highlights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 6 days of intensive blockchain education and networking</li>
                  <li>• Over 30 expert speakers from around the world</li>
                  <li>• Hands-on workshops and technical sessions</li>
                  <li>• Hybrid format allowing both in-person and virtual attendance</li>
                  <li>• Special focus on AI integration and blockchain interoperability</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Successful hackathon with 18 innovative project submissions</li>
                  <li>• Strong institutional partnerships established</li>
                  <li>• Enhanced community engagement and knowledge sharing</li>
                  <li>• Platform for showcasing African blockchain talent</li>
                  <li>• Strengthened blockchain ecosystem in Nigeria</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src="/images/team-photo.jpg"
              alt="LBW 2024 Team Photo"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">See You at LBW 2025!</h3>
          <p className="text-lg text-muted-foreground">
            Join us next year for another exciting edition of Lagos Blockchain Week.
            Stay tuned for updates and announcements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;