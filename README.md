# QuickFixx24 website: launch guide

## 1. Replace three placeholders
Search the whole folder for these and replace them:
- `https://forms.gle/YOUR-GOOGLE-FORM-LINK`  your Google booking form (also used for partner applications)
- `https://g.page/r/YOUR-GOOGLE-REVIEW-LINK`  your Google Business Profile review link
- Staff list in `assets/data/staff.json` (demo records now)
Optional: `GF_SVC` in the build settings pre-fills the service in your form.
Also add your trade license number on /about/ and real prices on the service pages.

## 2. Upload
Upload everything to the root of quickfixx24.com (cPanel File Manager, Netlify drag and drop, Vercel, or GitHub Pages). Test: https://www.quickfixx24.com/services/home-service/ should open.

## 3. Tell Google, Bing and AI engines (first week)
1. Google Search Console: add the site, submit `https://www.quickfixx24.com/sitemap.xml`, request indexing for the home page.
2. Bing Webmaster Tools: import from Search Console. This also feeds ChatGPT-style search.
3. Google Business Profile: claim it. Name QuickFixx24, categories Home services / Taxi service / Electrician, address CU 1no Gate, phone +880 1805-455811, link https://www.quickfixx24.com/. Keep name, address and phone identical everywhere.
4. Ask every happy customer for a Google review and send them your review link.
5. Facebook, Instagram, YouTube, TikTok: use the same name, phone and website link, and link to individual service pages in posts.

## 4. Grow
- Add real photos of jobs, staff (with consent) and vehicles, with descriptive file names and alt text.
- One new helpful article per month, e.g. "AC servicing cost in Chittagong", "How to choose a CCTV camera". Link each to the matching service page.
- Add a Bangla version (hreflang bn-BD) of the home and service pages. Many local searches are in Bangla.
- Get listed on local directories and ask partner businesses to link to you.
- Add Google Analytics and track clicks on the Book and Call buttons.

## What is already built in
Unique title, description, canonical, Open Graph, Twitter and geo tags on every page; structured data (LocalBusiness, Service, FAQPage, BreadcrumbList, ItemList); sitemap.xml; robots.txt open to Google, Bing and AI crawlers; llms.txt for AI assistants; clean URLs; fast static pages with no external fonts or trackers; mobile call, WhatsApp and book bar.

## Keyword map (one primary target per page)
| Page | Primary keyword idea | Bangla |
|---|---|---|
| / | home service Bangladesh, CNG and car booking | হোম সার্ভিস |
| /services/home-service/ | Home Service in Bangladesh | হোম সার্ভিস |
| /services/tech-support/ | CCTV Installation & IT Support in Bangladesh | টেক সাপোর্ট |
| /services/doorstep-mechatronics/ | Smart Home Automation & Electronics Kits | ডোরস্টেপ মেকাট্রনিক্স |
| /services/virtual-support/ | Online Tech Support & AI Learning in Bangladesh | ভার্চুয়াল সাপোর্ট |
| /services/vehicle-booking/ | CNG & Car Booking in Chittagong and Bangladesh | গাড়ি ও সিএনজি বুকিং |
| /services/transportation-services/ | House & Office Shifting Service in Bangladesh | বাসা ও অফিস শিফটিং |
| /services/logistics/ | Food, Grocery & Laundry Delivery in Bangladesh | লজিস্টিকস: খাবার, গ্রোসারি, লন্ড্রি |
| /services/event-management-security/ | Event Management & Security in Bangladesh | ইভেন্ট ম্যানেজমেন্ট ও সিকিউরিটি |
| /services/web-development-digital-marketing/ | Web Development & SEO Company in Bangladesh | ওয়েব ডেভেলপমেন্ট ও ডিজিটাল মার্কেটিং |
| /services/expert-collaboration/ | Partner With Us: Drivers, Fleet & Service Experts | এক্সপার্ট পার্টনারশিপ |
| /services/hotel-room-booking/ | Hotel Room Booking in Chittagong | হোটেল রুম বুকিং |
| /services/legal-services/ | Legal Advice for Land, Law & Rights in Bangladesh | আইনি সেবা |
| /services/home-healthcare/ | Home Nursing & Healthcare Service in Bangladesh | হোম হেলথকেয়ার ও নার্সিং |

Review rating markup is intentionally not included. Only add it once reviews are real, collectable and visible on a third-party platform.
