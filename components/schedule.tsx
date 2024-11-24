"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const scheduleData = {
  day1: [
    {
      time: "09:00 AM",
      title: "Opening Ceremony",
      speaker: "Conference Team",
      description: "Welcome address and introduction to Lagos Blockchain Week 2024",
    },
    {
      time: "10:00 AM",
      title: "The Future of DeFi in Africa",
      speaker: "Dr. Sarah Johnson",
      description: "Exploring the potential of decentralized finance in Africa",
    },
    // Add more sessions
  ],
  day2: [
    {
      time: "09:00 AM",
      title: "Web3 Development Workshop",
      speaker: "Michael Chen",
      description: "Hands-on workshop on building Web3 applications",
    },
    // Add more sessions
  ],
  // Add more days
};

const Schedule = () => {
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
            Event Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your conference experience
          </p>
        </motion.div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto mb-8">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>

          {Object.entries(scheduleData).map(([day, sessions]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-6">
                {sessions.map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="md:w-1/6">
                            <span className="text-primary font-semibold">
                              {session.time}
                            </span>
                          </div>
                          <div className="md:w-5/6">
                            <h3 className="text-xl font-semibold mb-2">
                              {session.title}
                            </h3>
                            <p className="text-primary mb-2">{session.speaker}</p>
                            <p className="text-muted-foreground">
                              {session.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;