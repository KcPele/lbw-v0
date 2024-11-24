"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const sponsorData = {
  officialSponsors: [
    { name: "Kleros", logo: "/sponsors/kleros.png" },
    { name: "Chainup", logo: "/sponsors/chainup.png" },
    { name: "StreamETH", logo: "/sponsors/streameth.png" },
    { name: "Nodo", logo: "/sponsors/nodo.png" },
    { name: "INTMAX", logo: "/sponsors/intmax.png" },
    { name: "Manta Network", logo: "/sponsors/manta.png" },
    { name: "Filecoin Africa", logo: "/sponsors/filecoin.png" },
    { name: "Cyberscope", logo: "/sponsors/cyberscope.png" },
    { name: "ICP Hub Sahara", logo: "/sponsors/icp.png" }
  ],
  communityPartners: [
    { name: "BNUG", logo: "/partners/bnug.png" },
    { name: "Filecoin Orbit", logo: "/partners/filecoin-orbit.png" },
    { name: "Cyberchain", logo: "/partners/cyberchain.png" },
    { name: "Web3bridge", logo: "/partners/web3bridge.png" },
    { name: "Nithub", logo: "/partners/nithub.png" },
    { name: "ETHNigeria", logo: "/partners/ethnigeria.png" },
    { name: "ETH Accra Web3 Afrika", logo: "/partners/eth-accra.png" },
    { name: "Web3Ladies", logo: "/partners/web3ladies.png" },
    { name: "Web3Unilag", logo: "/partners/web3unilag.png" },
    { name: "Blockchain Unilag", logo: "/partners/blockchain-unilag.png" },
    { name: "Memoi Africa", logo: "/partners/memoi.png" },
    { name: "Women In Defi", logo: "/partners/women-in-defi.png" },
    { name: "BBO Solicitor", logo: "/partners/bbo.png" },
    { name: "Teenagers in Blockchain Africa", logo: "/partners/tiba.png" },
    { name: "Pengage", logo: "/partners/pengage.png" },
    { name: "Borderless", logo: "/partners/borderless.png" },
    { name: "Bchain Africa", logo: "/partners/bchain.png" },
    { name: "Guild Audits", logo: "/partners/guild.png" },
    { name: "Blockverse", logo: "/partners/blockverse.png" },
    { name: "Felbeth", logo: "/partners/felbeth.png" }
  ],
  mediaPartners: [
    { name: "TVC", logo: "/media/tvc.png" },
    { name: "Techpression", logo: "/media/techpression.png" },
    { name: "Crypto Asset Buyer", logo: "/media/cab.png" },
    { name: "TechBuild Africa", logo: "/media/techbuild.png" }
  ],
  institutionalPartners: [
    { name: "NITDA", logo: "/institutions/nitda.png" },
    { name: "NCAIR", logo: "/institutions/ncair.png" },
    { name: "BICCoN", logo: "/institutions/biccon.png" },
    { name: "SIBAN", logo: "/institutions/siban.png" },
    { name: "CDIN", logo: "/institutions/cdin.png" },
    { name: "University of Lagos", logo: "/institutions/unilag.png" },
    { name: "Infusion Lawyers", logo: "/institutions/infusion.png" }
  ],
  hackathonSponsors: [
    { name: "Base", logo: "/hackathon/base.png" },
    { name: "ICP", logo: "/hackathon/icp.png" },
    { name: "Cyberscope", logo: "/hackathon/cyberscope.png" }
  ]
};

const SponsorSection = ({ title, items }: { title: string; items: { name: string; logo: string }[] }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-semibold mb-8 text-center">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {items.map((sponsor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex items-center justify-center min-h-[120px]">
              <div className="relative w-full h-16">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

const Sponsors = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Sponsors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supported by leading organizations in the blockchain ecosystem
          </p>
        </motion.div>

        <SponsorSection title="Official Sponsors" items={sponsorData.officialSponsors} />
        <SponsorSection title="Institutional Partners" items={sponsorData.institutionalPartners} />
        <SponsorSection title="Community Partners" items={sponsorData.communityPartners} />
        <SponsorSection title="Media Partners" items={sponsorData.mediaPartners} />
        <SponsorSection title="Hackathon Sponsors" items={sponsorData.hackathonSponsors} />
      </div>
    </section>
  );
};

export default Sponsors;