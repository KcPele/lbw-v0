"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";

const scheduleData = {
  day1: {
    date: "June 10, 2024 - Crypto 101",
    events: [
      {
        time: "09:00 AM",
        title: "National Anthem & Welcome Note",
        speaker: "Olabisi Majekodun (Moderator)",
        description: "Opening ceremony and welcome address",
        type: "Opening"
      },
      {
        time: "09:30 AM",
        title: "Welcome Address",
        speaker: "Chukwuemeka Enoch Mbaebie",
        description: "Convener & Program Director, Lagos Blockchain Week",
        type: "Keynote"
      },
      {
        time: "10:00 AM",
        title: "Exploring DeFi and Digital Asset opportunities in Nigeria",
        speaker: "Chuta Chimezie - Founder Nigeria Blockchain User group",
        description: "Deep dive into DeFi opportunities in the Nigerian market",
        type: "Presentation"
      },
      {
        time: "11:00 AM",
        title: "Understanding the fundamentals and Regulatory Landscape of Cryptocurrency in Nigeria",
        speaker: "Ifeoma Ben - Secretary, SIBAN",
        description: "Comprehensive overview of crypto regulations",
        type: "Panel"
      },
      {
        time: "02:00 PM",
        title: "Wallet setup and security workshop",
        speaker: "Emmanuel Glory - Intmax Protocol",
        description: "Hands-on workshop on wallet security",
        type: "Workshop"
      }
    ]
  },
  day2: {
    date: "June 11, 2024 - Creators Expo",
    events: [
      {
        time: "09:00 AM",
        title: "Using Blockchain Data to drive marketing strategies",
        speaker: "Ivy Elegbesunu - Felbeth",
        description: "Marketing strategies in the blockchain space",
        type: "Presentation"
      },
      {
        time: "10:30 AM",
        title: "How can AI enhance the onRamp experience in Africa",
        speaker: "Kingsley Peter Usoro - OnRamp",
        description: "AI integration in blockchain onboarding",
        type: "Workshop"
      },
      {
        time: "11:30 AM",
        title: "Driving interoperability through Cross-Chain communications",
        speaker: "Christian Dike - Push Protocol",
        description: "Cross-chain communication protocols",
        type: "Technical"
      }
    ]
  },
  day3: {
    date: "June 12, 2024 - AI in Practice",
    events: [
      {
        time: "09:00 AM",
        title: "Special Presentation",
        speaker: "Purity Ogheneochuko - Web3Ladies",
        description: "Opening presentation on AI and blockchain integration",
        type: "Keynote"
      },
      {
        time: "10:00 AM",
        title: "AI/Machine Learning 101 and AI tools and platforms",
        speaker: "Seyi Akindeinde - Neural AI",
        description: "Comprehensive introduction to AI and ML in blockchain",
        type: "Technical"
      },
      {
        time: "11:30 AM",
        title: "Understanding the role of incentives in growing DeFi protocols",
        speaker: "Kene Eze - StableLab",
        description: "DeFi protocol growth strategies",
        type: "Workshop"
      }
    ]
  },
  day4: {
    date: "June 13, 2024 - DWeb Storage",
    events: [
      {
        time: "09:00 AM",
        title: "DeSci: Understanding science on the Blockchain",
        speaker: "Scott Itepu - ValleyDAO",
        description: "Decentralized Science exploration",
        type: "Presentation"
      },
      {
        time: "10:30 AM",
        title: "Technical Writing in Web3",
        speaker: "Lisa Askelrod - Aztec Protocol",
        description: "Documentation and communication in Web3",
        type: "Workshop"
      },
      {
        time: "02:00 PM",
        title: "EthStorage - Building a modular storage layer",
        speaker: "Qi Zhou - Ethstorage.io",
        description: "Technical deep dive into EIP-4844",
        type: "Technical"
      }
    ]
  },
  day5: {
    date: "June 14, 2024 - Builders Workshop",
    events: [
      {
        time: "09:00 AM",
        title: "The African web3 Landscape",
        speaker: "Jude Ozenigbe - Cyberchain",
        description: "Overview of Web3 in Africa",
        type: "Keynote"
      },
      {
        time: "10:30 AM",
        title: "Orbit - Peer to Peer data storage",
        speaker: "Hayden - Orbit DB",
        description: "Decentralized data storage solutions",
        type: "Technical"
      },
      {
        time: "02:00 PM",
        title: "Running an Ethereum Node in Africa",
        speaker: "David Uzochukwu - Guild Audits",
        description: "Technical workshop on node operation",
        type: "Workshop"
      }
    ]
  },
  day6: {
    date: "June 15, 2024 - Grand Finale",
    events: [
      {
        time: "09:00 AM",
        title: "Special Presentation",
        speaker: "Hari Obi - Solana",
        description: "Opening remarks and special announcement",
        type: "Keynote"
      },
      {
        time: "10:00 AM",
        title: "Introduction To Kleros And Decentralized Justice",
        speaker: "Federico Ast - Founder, Kleros",
        description: "Overview of decentralized justice systems",
        type: "Presentation"
      },
      {
        time: "11:30 AM",
        title: "Empowering Women in Blockchain: Breaking Barriers and Building Bridges",
        speaker: "Panel Discussion",
        description: "Panel featuring leading women in blockchain including Ivy Elebesunu, Monalisa Agbata, Purity Ogheneochuko, and others",
        type: "Panel"
      }
    ]
  }
};

const SchedulePage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Schedule</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for six days of inspiring talks, workshops, and networking opportunities
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>June 10-15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Radisson Hotel, Ikeja Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Hybrid Event</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.entries(scheduleData).map(([day, data]) => (
                <TabsTrigger key={day} value={day} className="px-6">
                  Day {day.slice(-1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(scheduleData).map(([day, data]) => (
              <TabsContent key={day} value={day}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-center mb-8">{data.date}</h2>
                  <div className="space-y-6">
                    {data.events.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-1/6">
                                <span className="text-primary font-semibold">{event.time}</span>
                              </div>
                              <div className="md:w-5/6">
                                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                <p className="text-primary mb-2">{event.speaker}</p>
                                <p className="text-muted-foreground">{event.description}</p>
                                <span className="inline-block mt-2 text-sm bg-accent px-3 py-1 rounded-full">
                                  {event.type}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;