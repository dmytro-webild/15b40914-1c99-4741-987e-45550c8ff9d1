"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Zap } from 'lucide-react';

export default function JoelsChickenKiosk() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Joel's Chicken"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "Deals", id: "deals" },
            { name: "About", id: "about" },
            { name: "Help", id: "help" }
          ]}
          button={{ text: "Order Now", href: "#menu" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Order Your Favorite Chicken, Instantly"
          description="Fast, fresh, and delicious chicken meals at your fingertips. Customize your order and skip the line with Joel's Chicken self-ordering kiosk."
          tag="Welcome to Joel's Chicken"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: "Start Ordering", href: "#menu" }]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-waitress-using-digital-tablet_23-2147874473.jpg",              imageAlt: "Joel's Chicken ordering kiosk interface"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/french-fries-fried-chicken_74190-7328.jpg",              imageAlt: "Fresh crispy fried chicken bucket"
            }
          ]}
          mediaAnimation="slide-up"
          rating={5}
          ratingText="Rated 4.9 by Customers"
          background={{ variant: "plain" }}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Menu"
          description="Explore our delicious selection of crispy fried chicken and flavorful combinations"
          tag="Premium Chicken"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              name: "Classic Chicken Sandwich",              price: "$7.99",              imageSrc: "http://img.b2bpic.net/free-photo/caesar-salad-chicken-lettuce-tomato-lemon-parmesan-anchovies-top-view_141793-3705.jpg",              imageAlt: "Classic Chicken Sandwich",              initialQuantity: 1
            },
            {
              id: "2",              name: "Chicken Tenders Basket",              price: "$8.49",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-foods-celebration_140725-113488.jpg",              imageAlt: "Crispy Chicken Tenders",              initialQuantity: 1
            },
            {
              id: "3",              name: "Spicy Buffalo Wings",              price: "$9.99",              imageSrc: "http://img.b2bpic.net/free-photo/roasted-chicken-wings-with-tomato_140725-1278.jpg",              imageAlt: "Spicy Buffalo Wings",              initialQuantity: 1
            },
            {
              id: "4",              name: "Combo Meal Deal",              price: "$12.99",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-fast-food-snacks-table_23-2148262940.jpg",              imageAlt: "Combo Meal Package",              initialQuantity: 1
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
        />
      </div>

      <div id="deals" data-section="deals">
        <PricingCardFive
          title="Special Deals & Combos"
          description="Save more with our exclusive combo packages and daily specials"
          tag="Limited Time Offers"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "family-bucket",              tag: "Family Feast",              price: "$29.99",              period: "for 4",              description: "Perfect for family gatherings and group orders",              button: { text: "Add to Cart", href: "#" },
              featuresTitle: "Includes:",              features: [
                "12 Piece Mixed Chicken",                "3 Sides of Your Choice",                "4 Biscuits",                "Free Large Drink"
              ]
            },
            {
              id: "quick-lunch",              tag: "Quick Lunch",              price: "$14.99",              period: "lunch special",              description: "Fast and filling meal for busy days",              button: { text: "Add to Cart", href: "#" },
              featuresTitle: "Includes:",              features: [
                "6 Piece Chicken Bucket",                "2 Sides",                "2 Biscuits",                "Medium Drink"
              ]
            },
            {
              id: "party-pack",              tag: "Party Pack",              price: "$49.99",              period: "for 8+",              description: "Ideal for parties and events",              button: { text: "Add to Cart", href: "#" },
              featuresTitle: "Includes:",              features: [
                "24 Piece Mixed Chicken",                "6 Sides Assorted",                "12 Biscuits",                "Complimentary Napkins & Sauces"
              ]
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Customers Love"
          description="Real reviews from real customers who enjoy Joel's Chicken daily"
          tag="Customer Feedback"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Fastest Service Ever",              quote: "The self-order kiosk made my experience so quick and convenient. No waiting in line and my order was perfect!",              name: "Marcus Johnson",              role: "Regular Customer",              imageSrc: "http://img.b2bpic.net/free-photo/informal-talk-with-best-friends-restaurant-warm-summer-day_8353-9702.jpg",              imageAlt: "Marcus Johnson"
            },
            {
              id: "2",              title: "Quality Chicken, Great Value",              quote: "Joel's Chicken delivers on freshness and taste. The kiosk interface is intuitive and makes ordering effortless.",              name: "Sarah Williams",              role: "Local Resident",              imageSrc: "http://img.b2bpic.net/free-photo/people-leisure-recreation-time-cheerful-african-american-woman-her-best-friend-spend-free-time-cafe-make-selfie-mobile-phone-drink-smoothie-multiethnic-relationships-concept_273609-2428.jpg",              imageAlt: "Sarah Williams"
            },
            {
              id: "3",              title: "Perfect for Busy Families",              quote: "We come here twice a week. The combination of speed, quality, and affordability keeps us coming back.",              name: "David Martinez",              role: "Family of Four",              imageSrc: "http://img.b2bpic.net/free-photo/family-eating-together-table-medium-shot_23-2148972780.jpg",              imageAlt: "David Martinez"
            },
            {
              id: "4",              title: "Customization Made Easy",              quote: "Love how I can easily customize my meal exactly how I want it through the kiosk. Best chicken spot in town!",              name: "Emily Chen",              role: "Food Enthusiast",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-paint-brush-her-mouth_23-2148740724.jpg",              imageAlt: "Emily Chen"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about ordering at Joel's Chicken"
          tag="Help & Support"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How do I place an order on the kiosk?",              content: "Simply navigate to the Menu section, select your desired items, customize them as needed, choose your quantity, and proceed to checkout. Payment options include credit/debit cards and mobile payments."
            },
            {
              id: "2",              title: "Can I modify my order after placing it?",              content: "You can modify your order while it's in the cart before final payment. Once the order is placed and payment is processed, please speak with a team member for assistance."
            },
            {
              id: "3",              title: "What payment methods are accepted?",              content: "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and contactless mobile payments for your convenience and safety."
            },
            {
              id: "4",              title: "How long does it take to prepare my order?",              content: "Most orders are prepared within 5-10 minutes. You'll receive a notification when your order is ready for pickup at the counter."
            },
            {
              id: "5",              title: "Are there dietary options available?",              content: "Yes! We offer various sides and options. Please use the kiosk filters to view items by dietary preference, or ask our staff for assistance."
            },
            {
              id: "6",              title: "Can I order for delivery or takeout only?",              content: "Our kiosk is designed for quick dine-in or takeout orders. For delivery options, visit our website or call our store directly."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navigate",              items: [
                { label: "Menu", href: "#menu" },
                { label: "Deals", href: "#deals" },
                { label: "About Us", href: "#about" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#help" },
                { label: "Contact Us", href: "#" },
                { label: "Feedback", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Joel's Chicken. All rights reserved."
          bottomRightText="Made for fast, fresh, delicious ordering"
        />
      </div>
    </ThemeProvider>
  );
}
