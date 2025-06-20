import Thundertrails from "../../public/images/thunder.jpg";
import Chuxly from "../../public/images/chuxly.png";
import Honey from "../../public/images/honey.jpg";
import ERREntals from "../../public/images/erRentals.png";
import Thunder from "@/icons/Thunder/Thunder";
import CherylC from "../../public/images/CherylC.jpg";
import JimConnie from "../../public/images/Jim&Connie.jpg";
import Adam from "../../public/images/Adam.jpg";
import Lynn from "../../public/images/lynn.jpg";
import Lady from "../../public/images/lady.jpg";
import Linda from "../../public/images/linda.jpg";
import Sheryl from "../../public/images/sheryl.jpg";
import Jeff from "../../public/images/jeff.jpg";

export const pricing = [
  {
    id: 1,
    title: "Starter Store",
    description: "For new brands or entrepreneurs with a small product line.",
    price: "5,900",
    timeframe: "4–6 weeks",
    features:
      "Custom design on Shopify, WooCommerce, or Wix, mobile‑responsive layout, up to 25 products, basic payments, standard shipping & tax, core SEO, launch support.",
  },
  {
    id: 2,
    title: "Growth Store",
    description:
      "For established shops that need richer features and a larger catalog.",
    price: "7,500",
    timeframe: "8–10 weeks",
    features:
      "Everything in Starter plus advanced UX, up to 100 products, extra payment gateways, complex shipping rules, product filters, wish‑lists, basic CRM and email setup, 30‑day post‑launch support.",
  },
  {
    id: 3,
    title: "Enterprise Solution",
    description: "For high‑volume or highly customised e‑commerce operations.",
    price: "10,000",
    timeframe: "12–16 weeks",
    features:
      "Everything in Growth plus premium UI, unlimited products, custom features, full ERP/CRM integration, multi‑currency, advanced analytics, personalisation, CRO tweaks, 60‑day post‑launch support.",
  },
  // {
  //   id: 4,
  //   title: "Specialized E-commerce Solutions",
  //   description:
  //     "Businesses with specific e-commerce models or unique requirements that need customized solutions.",
  //   price: "Custom",
  //   timeframe: "Varies",
  //   features:
  //     "Tailored solutions for specialized e-commerce models including B2B portals, multi-vendor marketplaces, subscription-based platforms, digital product stores, service booking systems, and rental e-commerce platforms. Each solution includes customized features specifically designed for your unique business model and requirements.",+
  // },
] as const;

export const pricingii = [
  {
    id: 1,
    title: "Booking Launch Plan",
    description:
      "For solo operators or very small teams that need a simple, reliable booking site.",
    price: "350 / month",
    timeframe: "6‑month minimum term",
    features:
      "Custom mobile‑ready booking site, 4 developer hours per month, Stripe deposits, automated reminders, 24‑hour support reply, monthly performance report.",
  },
  {
    id: 2,
    title: "Booking Growth Plan",
    description:
      "For service brands with up to fifteen staff who want richer UX and basic marketing automations.",
    price: "425 / month",
    timeframe: "6‑month minimum term",
    features:
      "All Launch features plus 8 monthly dev hours, multi‑staff calendar sync, gift‑card and package builder, abandoned‑booking emails, same‑day support, quarterly A/B test.",
  },
  {
    id: 3,
    title: "Booking Scale Plan",
    description:
      "For multi‑location salons, luxury fleets, or rental portfolios that need custom integrations.",
    price: "500 / month",
    timeframe: "12‑month term (setup fee waived)",
    features:
      "All Growth features plus 12 monthly dev hours, custom API link to PMS/ERP, dynamic pricing rules, 4‑hour support reply, advanced analytics dashboard.",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Thunder trails",
    slug: "thundertrails",
    src: Thundertrails,
    icon: Thunder,
    video: "/videos/thunder.mp4",
    description:
      "Founded in 2019 by mountain-bike enthusiasts, Thundertrails quickly evolved from a local favorite into a regional hub for high-performance bikes and gear—and now needs a digital presence that matches its in-store experience and growth ambitions.",
    tags: [
      {
        id: 1.98,
        tag: "Ecommerce",
      },
      {
        id: 1.99,
        tag: "Online Shop",
      },
    ],
    h1: "Revolutionizing Thundertrails' online presence with a cutting-edge ecommerce platform",
    year: 2025,
    platform: "Wix E-commerce",
    tech: "Next.js",
    href: "https://thunder-wix.vercel.app/",
    challenge: [
      {
        id: 1.1,
        challengeDetail:
          "Thundertrails' previous website was outdated, with limited functionality and poor performance that failed to showcase their premium bike collection properly. The slow loading times and clunky navigation were frustrating customers and limiting online sales potential. The brand needed a robust digital solution that could handle complex product configurations while delivering an exceptional user experience.",
      },
      {
        id: 1.2,
        challengeDetail:
          "We completely overhauled the website architecture and design to create an immersive digital showroom for their bikes and accessories. The new design incorporates dynamic product visualization, interactive bike customization tools, and seamless integration with their inventory management system. Every aspect of the user interface was crafted to highlight the technical specifications and quality that Thundertrails' products are known for.",
      },
      {
        id: 1.3,
        challengeDetail:
          "Beyond products, Thundertrails has always been deeply connected to the mountain biking community, sponsoring events and producing trail guides. The previous website couldn't effectively feature this content. We developed a content strategy that integrates their blog, event calendar, and trail maps with the shopping experience, strengthening customer engagement and establishing Thundertrails as an authority in the mountain biking world.",
      },
    ],
    results: [
      {
        id: 1.4,
        resultDetail:
          "The new ecommerce platform dramatically improved performance metrics across the board. Page load times decreased by 65% (based on Largest Contentful Paint measurements), while the conversion rate increased by 38%. The enhanced product visualization and customization features contributed to a 42% increase in average order value, and overall sales grew by 92% compared to the previous year.",
      },
      {
        id: 1.5,
        resultDetail:
          "Thundertrails has successfully elevated its brand positioning in the digital space, aligning with its premium in-store experience. The integrated content strategy has boosted organic traffic by 55% and increased newsletter signups by 143%. The platform's scalable architecture now provides Thundertrails with the foundation they need to expand their online presence nationally while maintaining the personalized service their customers expect.",
      },
    ],
    stats: [
      { id: 1, title: "Decrease in page‑load time", desc: "‑65%" },
      { id: 2, title: "Lift in conversion rate", desc: "+38%" },
      { id: 3, title: "Increase in average order value", desc: "+42%" },
      { id: 4, title: "Growth in year‑over‑year sales", desc: "+92%" },
    ],
  },
  {
    id: 2,
    title: "Chuxly",
    slug: "chuxly",
    src: Chuxly,
    icon: Thunder,
    video: "/videos/chuxly.mp4",
    description:
      "Founded in 2021 by audio engineers passionate about exceptional sound, Chuxly crafts premium headphones and portable speakers that blend advanced acoustics with minimalist design—and now needs an online platform to showcase its sensory-rich products while supporting a growing inventory and customer base.",
    tags: [
      {
        id: 2.98,
        tag: "Ecommerce",
      },
      {
        id: 2.99,
        tag: "Audio Equipment",
      },
    ],
    h1: "Elevating the digital experience for Chuxly's premium audio equipment",
    year: 2025,
    platform: "Shopify",
    tech: "Next.js",
    href: "https://www.chuxly.com/",
    challenge: [
      {
        id: 2.1,
        challengeDetail:
          "Chuxly faced the unique challenge of selling high-end audio products online where customers couldn't physically experience the sound quality. Their initial website lacked the immersive elements needed to convey the exceptional audio experience and craftsmanship that justified the premium pricing. The site also struggled with inventory management as their product line expanded, resulting in frustrating out-of-stock situations and missed sales opportunities.",
      },
      {
        id: 2.2,
        challengeDetail:
          "We reimagined the entire customer journey to create a virtual showroom that emphasizes the sensory qualities of Chuxly's products. The redesigned platform features interactive 3D product models, audio demonstrations with comparative sound samples, and detailed acoustic specifications presented through intuitive visualizations. Each product page tells the story of the design philosophy and engineering precision behind the item, helping customers understand the value proposition beyond mere specifications.",
      },
      {
        id: 2.3,
        challengeDetail:
          "To build credibility and foster community engagement, we developed an integrated content hub featuring expert reviews, listening guides, and artist collaborations. The platform now includes a subscription-based exclusive content section where members get early access to limited edition releases and personalized audio profiles. The robust backend system connects seamlessly with their inventory and manufacturing systems, providing real-time stock updates and production timelines for custom orders.",
      },
    ],
    results: [
      {
        id: 2.4,
        resultDetail:
          "The enhanced digital experience has transformed Chuxly's online sales performance. The immersive product presentations and technical demonstrations have reduced return rates by 47% and increased conversion rates by 58% for their highest-priced items. Overall, online revenue has increased by 126% within six months of launch, with the average time spent on product pages increasing from 45 seconds to over 3 minutes.",
      },
      {
        id: 2.5,
        resultDetail:
          "The content strategy has established Chuxly as a thought leader in the audio space, with their listening guides and technical articles generating significant organic traffic and social media engagement. The membership program has exceeded expectations with over 10,000 subscribers in the first quarter, creating a reliable revenue stream and valuable customer insights. With the robust and scalable architecture in place, Chuxly is now expanding into international markets with localized content and payment options.",
      },
    ],
    stats: [
      { id: 1, title: "Reduction in product return rate", desc: "‑47%" },
      { id: 2, title: "Conversion lift on flagship items", desc: "+58%" },
      { id: 3, title: "Increase in online revenue", desc: "+126%" },
      { id: 4, title: "Avg. time on product page", desc: "3 min 05 s" },
    ],
  },
  // {
  //   id: 3,
  //   title: "Golden Drips",
  //   slug: "golden-drips",
  //   src: Honey,
  //   icon: "Bee",
  //   video: "/videos/honey.mp4",
  //   description:
  //     "Founded in 2018 as a family-owned apiary crafting small-batch, unprocessed honey from select floral sources, Golden Drips built a devoted following through sustainable beekeeping and artisanal quality—and now seeks an online platform to extend its reach beyond local markets while preserving its personal touch.",
  //   tags: [
  //     {
  //       id: 3.98,
  //       tag: "Ecommerce",
  //     },
  //     {
  //       id: 3.99,
  //       tag: "Artisanal Food",
  //     },
  //   ],
  //   h1: "Crafting a luxurious digital storefront for Golden Drips' premium honey collection",
  //   year: 2025,
  //   platform: "WooCommerce",
  //   tech: "Next.js",
  //   href: "https://golden-tau-ten.vercel.app/",
  //   challenge: [
  //     {
  //       id: 3.1,
  //       challengeDetail:
  //         "Golden Drips' existing online presence consisted of a basic informational website and third-party marketplace listings that failed to communicate the premium nature of their products or the story behind their sustainable beekeeping practices. The brand struggled to differentiate themselves in the growing artisanal honey market and lacked the digital infrastructure to handle direct-to-consumer sales efficiently, especially for their subscription offerings and gift packages.",
  //     },
  //     {
  //       id: 3.2,
  //       challengeDetail:
  //         "We developed a richly textured digital experience that captures the sensory aspects of Golden Drips' honey varieties through high-definition macro photography, color profiles, and detailed tasting notes. The custom-designed product pages highlight the specific floral sources, harvesting locations, and seasonal characteristics that make each honey variety unique. An interactive flavor wheel helps customers discover products based on their taste preferences, while the sustainable practices section immerses visitors in the brand's environmental commitments through video documentaries and illustrated guides.",
  //     },
  //     {
  //       id: 3.3,
  //       challengeDetail:
  //         "To enhance the gifting experience, we created a custom gift builder that allows customers to create personalized honey collections with custom labels and packaging options. The subscription management system provides flexible delivery schedules and seasonal product rotations based on customer preferences. Behind the scenes, the platform integrates with their inventory and production systems to manage the seasonality of their products and ensure availability aligns with harvesting cycles.",
  //     },
  //   ],
  //   results: [
  //     {
  //       id: 3.4,
  //       resultDetail:
  //         "Golden Drips has successfully transitioned from a primarily wholesale business model to a thriving direct-to-consumer brand. Online sales now account for 65% of total revenue, with a 173% increase in year-over-year growth. The average order value has increased by 89% compared to their previous marketplace listings, and the subscription program now has over 5,000 active members with a remarkable 92% retention rate after six months.",
  //     },
  //     {
  //       id: 3.5,
  //       resultDetail:
  //         "The brand storytelling elements have significantly strengthened Golden Drips' market positioning, with engagement metrics showing that 78% of first-time visitors explore the sustainability content before making a purchase. Their educational content on bee conservation has generated substantial media coverage and partnership opportunities with environmental organizations. The platform's scalability has enabled Golden Drips to expand their product line to include limited edition seasonal releases and collaborations with other artisanal food producers, further cementing their reputation as leaders in the premium honey market.",
  //     },
  //   ],
  //   stats: [
  //     { id: 1, title: "Year‑over‑year online growth", desc: "+173%" },
  //     { id: 2, title: "Revenue now DTC (direct‑to‑consumer)", desc: "65%" },
  //     { id: 3, title: "Increase in average order value", desc: "+89%" },
  //     { id: 4, title: "Subscription program retention", desc: "92%" },
  //   ],
  // },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    slug: "elite-retreat-rentals",
    src: ERREntals,
    icon: Thunder,
    video: "/videos/rentals.mp4",
    description:
      "Founded in 2022 by hospitality veterans in Phoenix, Elite Retreat Rentals manages three luxury properties—each with distinctive design, top-tier amenities, and unwavering service standards—and now needs a direct booking platform to highlight their unique features and deliver a more personalized guest experience.",
    tags: [
      {
        id: 4.98,
        tag: "Hospitality",
      },
      {
        id: 4.99,
        tag: "Booking Platform",
      },
    ],
    h1: "Designing a seamless direct booking experience for Elite Retreat Rentals' luxury properties",
    year: 2025,
    platform: "n/a",
    tech: "Next.js + MongoDB + Node.js",
    href: "https://case-study-one-git-main-christianwares-projects.vercel.app/",
    challenge: [
      {
        id: 4.1,
        challengeDetail:
          "Elite Retreat Rentals was losing substantial revenue to third-party booking fees while struggling with the limitations these platforms imposed on property presentation and guest communication. Their existing website was primarily informational with basic contact forms, requiring manual reservation management and payment processing. Without a proper calendar synchronization system, they frequently encountered double-booking issues and missed opportunities during peak seasons when managing listings across multiple platforms.",
      },
      {
        id: 4.2,
        challengeDetail:
          "We developed a comprehensive direct booking platform that showcases each property through immersive virtual tours, 4K video walkthroughs, and interactive floor plans that allow potential guests to visualize their stay before booking. The intuitive booking engine features real-time availability, dynamic pricing based on seasonality and demand, and a streamlined checkout process with multiple payment options. Each property listing highlights its unique character through neighborhood guides, curated experience recommendations, and comprehensive amenity details.",
      },
      {
        id: 4.3,
        challengeDetail:
          "To enhance the guest experience beyond the booking process, we implemented a secure guest portal where visitors can manage their reservations, access digital guidebooks, arrange additional services, and communicate directly with property managers. The backend system integrates with their property management software, cleaning service schedules, and smart home systems to ensure seamless operations. A sophisticated analytics dashboard provides insights into booking patterns, revenue optimization opportunities, and guest satisfaction metrics.",
      },
    ],
    results: [
      {
        id: 4.4,
        resultDetail:
          "The direct booking platform has fundamentally transformed Elite Retreat Rentals' business model and profitability. Direct bookings now account for 78% of all reservations, representing a 210% increase compared to their previous third-party-dependent approach. The elimination of commission fees has increased profit margins by 32% while allowing for more competitive pricing strategies during off-peak seasons. The average stay duration has increased by 2.4 nights, and the enhanced presentation has contributed to a 45% increase in premium add-on services.",
      },
      {
        id: 4.5,
        resultDetail:
          "The improved guest communication system has resulted in a 98% satisfaction rating and a 67% repeat booking rate within the first year. The detailed analytics have enabled more effective marketing strategies, with targeted promotions increasing occupancy rates during traditionally slower periods by 41%. With the success of their direct booking model, Elite Retreat Rentals is now expanding their portfolio with two additional luxury properties in Scottsdale, all seamlessly integrated into their existing platform. Their reputation as a premier luxury accommodation provider in the Phoenix metropolitan area continues to grow, with features in several travel publications highlighting their innovative approach to the vacation rental experience.",
      },
    ],
    stats: [
      { id: 1, title: "Bookings made directly", desc: "78%" },
      { id: 2, title: "Profit‑margin increase", desc: "+32%" },
      { id: 3, title: "Increase in avg. stay length", desc: "+2.4 nights" },
      { id: 4, title: "Occupancy lift in slow periods", desc: "+41%" },
    ],
  },
] as const;

export const questions = [
  {
    id: 36,
    question: "How long does it take to build an e-commerce website?",
    answer:
      "The timeline for building an e-commerce website depends on the complexity of your project. A basic online store can typically be launched in 4-6 weeks, while more complex sites with custom functionality may take 8-16 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and business goals.",
  },
  {
    id: 36.1,
    question: "Which e-commerce platform do you recommend?",
    answer:
      "We don't believe in one-size-fits-all solutions. The best platform depends on your specific business needs, budget, and long-term goals. We have expertise in Shopify, WooCommerce, Magento, Wix, and custom solutions. During our discovery process, we'll assess your requirements and recommend the platform that offers the best balance of features, flexibility, and scalability for your business.",
  },
  {
    id: 36.2,
    question: "How much does an e-commerce website cost?",
    answer:
      "E-commerce website costs vary widely based on your business requirements. Our starter stores begin at $5,900, growth-focused stores at $7,500, and enterprise solutions at $10,000. We provide transparent, detailed quotes for each project after understanding your specific needs. Factors that affect pricing include design complexity, number of products, custom functionality, and integrations with other business systems.",
  },
  {
    id: 36.3,
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely! We understand that launching your store is just the beginning of your e-commerce journey. We offer flexible maintenance and support plans starting at $495 per month, which include platform updates, security patches, content updates, and technical support. We also provide growth-focused services such as conversion optimization, A/B testing, and performance enhancements for businesses looking to continuously improve their online stores.",
  },
  {
    id: 36.4,
    question:
      "What sets Fonts & Footers apart from other web development agencies?",
    answer:
      "Unlike general web developers, we specialize exclusively in e-commerce, with deep expertise across multiple business models including B2C, B2B, marketplaces, subscription services, and more. Our approach balances beautiful design with data-driven strategy, ensuring your store not only looks great but delivers measurable business results. We take a limited number of clients to provide personalized attention, and our focus on long-term partnerships means we're invested in your success far beyond the initial launch.",
  },
  {
    id: 37,
    question: "How do you handle SEO for e-commerce websites?",
    answer:
      "We build every store with SEO best practices in mind—optimizing site structure, meta titles and descriptions, heading hierarchy, and URL slugs. We also implement schema markup for products, generate XML sitemaps, set up Google Search Console, and ensure fast load times to improve crawlability and ranking.",
  },
  {
    id: 38,
    question: "Can I request design or feature changes after launch?",
    answer:
      "Absolutely. After launch, you can submit change requests through our support portal. Small tweaks are often covered by your maintenance plan, and for larger scope adjustments we’ll provide a transparent quote and timeline before starting work.",
  },
  {
    id: 39,
    question: "Which payment gateways and shipping carriers do you integrate?",
    answer:
      "We support all major payment gateways—Shopify Payments, Stripe, PayPal, Authorize.net—as well as regional options on request. For shipping, we integrate carriers like UPS, FedEx, DHL, USPS, and real-time rate calculators so your customers see accurate shipping costs at checkout.",
  },
  {
    id: 40,
    question: "Do you provide product photography or copywriting services?",
    answer:
      "Yes—we partner with professional photographers and copywriters to deliver high-quality product imagery and persuasive, SEO-driven copy. These services can be bundled into your project or added on afterward to ensure your catalog shines.",
  },
  {
    id: 41,
    question: "How do you ensure my store is secure?",
    answer:
      "Security is paramount. We enforce HTTPS across the entire site, apply regular platform and plugin updates, configure firewalls, and set up daily backups. We also follow PCI DSS guidelines to protect your customers’ payment data.",
  },
  {
    id: 42,
    question: "Will my e-commerce site be fully responsive on mobile devices?",
    answer:
      "Yes. We use a mobile-first approach and rigorously test layouts on a variety of screen sizes. Your store will adapt gracefully from large desktop monitors down to smartphones and tablets, ensuring an optimal shopping experience everywhere.",
  },
  {
    id: 43,
    question: "How do you optimize site performance and loading speed?",
    answer:
      "We optimize images (responsive sizes, WebP), implement code-splitting and lazy loading, configure browser caching, and integrate a CDN. We also run performance audits with Lighthouse or GTmetrix to identify and resolve any remaining bottlenecks.",
  },
  {
    id: 44,
    question: "Can you integrate third-party apps, plugins, or custom APIs?",
    answer:
      "Yes. Whether it’s marketing automation (Klaviyo, Mailchimp), ERP/CRM systems, subscription platforms, or custom-built APIs, we’ll architect and test integrations to work seamlessly within your store’s ecosystem.",
  },
  {
    id: 45,
    question: "What does your project management process look like?",
    answer:
      "We follow an agile workflow with clearly defined milestones. From kickoff and discovery to design, development, and launch, you’ll get weekly progress updates via Trello or Asana, plus regular video calls to review deliverables and provide feedback.",
  },
  {
    id: 46,
    question: "Do you support international stores and multi-currency pricing?",
    answer:
      "Yes. We can configure multi-currency support, local tax settings, and language translations. Using geolocation or manual selectors, customers see pricing, shipping, and content tailored to their region, boosting global conversion rates.",
  },
  {
    id: 47,
    question: "Can you migrate my existing store from another platform?",
    answer:
      "Yes—whether you’re on Magento, BigCommerce, WooCommerce, or a custom solution, we’ll handle data export, product mapping, order history transfer, and SEO redirects to ensure a seamless transition with zero downtime.",
  },
  {
    id: 48,
    question: "Do you support multilingual and multi-region stores?",
    answer:
      "Absolutely. We can implement language translations, locale-based content, currency selectors, and geolocation so customers automatically see your site in their native language and currency, boosting global engagement and sales.",
  },
  {
    id: 49,
    question: "Can you integrate inventory management or ERP systems?",
    answer:
      "Yes—we integrate with leading inventory and ERP platforms like NetSuite, SAP, TradeGecko, and Zoho. Real-time stock syncing and order routing ensure accurate inventory levels and efficient fulfillment across all sales channels.",
  },
  {
    id: 50,
    question: "What analytics and reporting do you provide?",
    answer:
      "We set up Google Analytics, enhanced e-commerce tracking, and platform-specific dashboards. You’ll get custom reports on traffic, conversion funnels, product performance, and customer lifetime value, with monthly review calls to share insights.",
  },
  {
    id: 51,
    question: "Will you provide training and documentation after launch?",
    answer:
      "Yes. We include a comprehensive onboarding session—live video training for you and your team—plus clear written documentation covering store management, order fulfillment, and marketing tasks so you can run your business with confidence.",
  },
] as const;

export const faqs = [
  {
    id: 1,
    title: "Services",
    slug: "thundertrails",
    src: Thundertrails,
    icon: Thunder,
    video: "/videos/thunder.mp4",
  },
  {
    id: 2,
    title: "Pricing & Timeline",
    slug: "chuxly",
    src: Chuxly,
    icon: Thunder,
    video: "/videos/chuxly.mp4",
  },
  {
    id: 3,
    title: "Project Management",
    slug: "golden-drips",
    src: Honey,
    icon: "Bee",
    video: "/videos/honey.mp4",
  },
  {
    id: 4,
    title: "Tenchnology",
    slug: "elite-retreat-rentals",
    src: ERREntals,
    icon: Thunder,
    video: "/videos/rentals.mp4",
  },
] as const;

export const reviews = [
  {
    id: 1,
    review:
      "Fonts & Footers rebuilt our California-style furniture store from the ground up. Page-load times dropped from six seconds to under one, our bounce rate fell 32 %, and revenue doubled the very next quarter. Truly transformative work.",
    reviewer: "Alicia G.",
    company: "Coastal Oak Furnishings",
    person: Lady, // import your client avatar or photo
  },
  {
    id: 2,
    review:
      "Chris delivers reliable, white-glove service in pure tech luxury. We launch one or two promotions every month and he’s always a step ahead—confirming details the day before and pushing updates at 4 a.m. if my schedule changes. It’s priceless having a partner I can trust while I sleep.",
    reviewer: "Sheryl G.",
    company: "Golden Grain Coffee, Scottsdale AZ",
    person: Sheryl,
  },
  {
    id: 3,
    review:
      "I lean on Fonts & Footers weekly for product drops and occasionally for personal side projects. They’re always on time, super friendly, and helpful—all at very reasonable rates. Couldn’t ask for a better dev team.",
    reviewer: "Jeff G.",
    company: "WildPup Gear",
    person: Jeff,
  },
  {
    id: 4,
    review:
      "We’ve hired this team four separate times in the past few months. Booking each sprint is seamless. Chris is professional, friendly, and prompt—as are the rest of his engineers. Pricing is competitive, the codebase is spotless, and the ROI keeps us coming back.",
    reviewer: "Cheryl C.",
    company: "NorthPeak Activewear",
    person: CherylC,
  },
  {
    id: 5,
    review:
      "After one project with Chris we switched to Fonts & Footers exclusively. Their pride, professionalism, and meticulous attention to detail give us total peace of mind. They monitor our Shopify traffic in real time and adjust deployments—no excuses, no surprises.",
    reviewer: "Jim & Connie A.",
    company: "Evergreen Home Décor",
    person: JimConnie,
  },
  {
    id: 6,
    review:
      "We hired Fonts & Footers to launch—and later refresh—our European campaign site. Best decision! The pages feel luxurious, fresh, and built for conversions. Extra thanks for being online at 1 : 30 a.m. the night we went live!",
    reviewer: "Lynn B.",
    company: "Sun Valley Outdoor Living, Tempe AZ",
    person: Lynn,
  },
  {
    id: 7,
    review:
      "We’ve used this service multiple times. The developers are great—always professional and prompt. You can tell they care deeply about code quality and customer experience. Highly recommend.",
    reviewer: "Illeana L.",
    company: "Mesa Organics",
    person: Linda,
  },
  {
    id: 8,
    review:
      "I’d never worked with an outside dev shop before, but Fonts & Footers made it easy. I travel almost weekly; plans change constantly and Chris still comes through—he even hopped in to upload a missing asset while I was in Hawaii. Clean code, fair pricing, top-tier people. Highly recommended.",
    reviewer: "Adam B.",
    company: "Urban Roots Apparel, Phoenix AZ",
    person: Adam,
  },
] as const;

export const pricingData = [
  {
    id: 1,
    service: "E-commerce Shop",
    headline: "Building robust, scalable online stores",
    desc: "Custom built website, with up to 25 live SKUs, single language, single currency, Stripe or Shopify Payments. Timeline: four weeks.",
    price: "$5,900",
    servicesInclude: [
      {
        id: 3.1,
        serviceName: "Custom e-commerce development",
        description:
          "We build tailored e-commerce solutions that address your unique business requirements and customer needs.",
      },
      {
        id: 3.2,
        serviceName: "Platform migration (Shopify, WooCommerce, etc.)",
        description:
          "We seamlessly transition your existing store to a new platform while preserving your data, SEO, and customer experience.",
      },
      {
        id: 3.3,
        serviceName: "Payment gateway integration",
        description:
          "We implement secure, reliable payment processing options that support your customers' preferred payment methods.",
      },
      {
        id: 3.4,
        serviceName: "Shipping and tax configuration",
        description:
          "We set up accurate shipping calculations and tax applications to prevent checkout surprises and abandoned carts.",
      },
    ],
    addonSectionData: [
      {
        id: 1,
        expansionblock: "Catelog Tier",
        details: "Every additional band of 75 SKUs (26-100, 101-175, etc.)",
        price: "$1,200",
      },
      {
        id: 2,
        expansionblock: "Channel Tier",
        details: "Each additional language or currency beyond the first",
        price: "$1,000",
      },
      {
        id: 3,
        expansionblock: "Feature Tier",
        details:
          "Any bespoke module—subscription engine, product customiser, B2B pricing",
        price: "Starting at $1,500 per module",
      },
      {
        id: 4,
        expansionblock: "Integration Tier",
        details:
          "ERP, CRM, or fulfilment API beyond the native Shopify connectors",
        price: "$2,000 per integration",
      },
    ],
  },
  {
    id: 2,
    service: "Booking Platform",
    headline: "Fast, friction‑free scheduling & reservations",
    desc: "Custom-built booking platform with real-time calendar sync, single/multiple locations, and secure Stripe deposit or full-payment checkout. Timeline: four weeks.",
    price: "$4,500",
    servicesInclude: [
      {
        id: 4.1,
        serviceName: "Custom booking‑flow design",
        description:
          "We map and code a user journey that matches your service logic—single appointments, multi‑step rentals, or group sessions—so guests book in under 60 seconds.",
      },
      {
        id: 4.2,
        serviceName: "Real‑time calendar & resource sync",
        description:
          "Your online availability pulls live data from Google Calendar, Microsoft 365, or PMS (Property‑Management System) APIs, eliminating double‑bookings.",
      },
      {
        id: 4.3,
        serviceName: "Integrated payments & deposits",
        description:
          "Stripe and Square gateways handle deposits, full charges, or split payments while keeping you PCI compliant.",
      },
      {
        id: 4.4,
        serviceName: "Automated reminders & no‑show protection",
        description:
          "SMS and email reminders reduce no‑shows by up to 40 %. Optional card‑on‑file or late‑cancel fees protect revenue.",
      },
    ],
    addonSectionData: [
      {
        id: 1,
        expansionblock: "Resource Tier",
        details:
          "Every additional bundle of 5 staff calendars or rental units beyond the first 3 that are included in the core build",
        price: "$600",
      },
      {
        id: 2,
        expansionblock: "Location Tier",
        details:
          "Each extra physical branch, villa, or property added to the same booking backend",
        price: "$800",
      },
      {
        id: 3,
        expansionblock: "Feature Tier",
        details:
          "Custom add-ons such as dynamic pricing, membership programmes, gift-card store, or upsell package builder",
        price: "Starting at $1,200 per module",
      },
      {
        id: 4,
        expansionblock: "Integration Tier",
        details:
          "External Property-Management System (PMS), CRM, or accounting API beyond default Stripe export and Google Calendar sync",
        price: "$1,800 per integration",
      },
    ],
  },
] as const;
