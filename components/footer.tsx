"use client";

import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lagos Blockchain Week</h3>
            <p className="text-muted-foreground mb-4">
              Africa's premier blockchain conference bringing together innovators,
              developers, and industry leaders.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/lagosblockchainweek" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/lagosblockchainweek" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com/lagosblockchainweek" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/lagosblockchainweek" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary" />
                <span className="text-muted-foreground">
                  4th Floor, Polystar Building, 2nd Roundabout, Lekki phase 1, Lagos Nigeria.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <a href="mailto:info@lagosblockchainweek.io" className="text-muted-foreground hover:text-foreground">
                  info@lagosblockchainweek.io
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary" />
                <div className="text-muted-foreground">
                  08032972057<br />
                  07032305366<br />
                  09024073542
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Watch LBW</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://live.lagosblockchainweek.io/lbwtv" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LBW TV
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@lagosblockchainweek" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a 
                  href="bit.ly/LBW2024Gallery" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lagos Blockchain Week. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;