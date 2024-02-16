
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
import p5 from './p5.jpg';
import p7 from './p7.jpg';
import p9 from './p9.jpg';
import p10 from './p10.jpg';
import p11 from './p11.jpg';
import p12 from './p12.jpg';
import p13 from './p13.jpg';
import p14 from './p14.jpg';
import p15 from './p15.jpg';
import p16 from './p16.jpg';
import p17 from './p17.jpg';
import p19 from './p19.jpg';

let data_product = [
    {
        id: 1,
        name: 'Eco Friendly Paper Pens',
        image: p1,
        new_prices:6.00,
        old_prices:10.00,
        link: 'https://seedballs.in/products/eco-friendly-kraft-paper-pen?currency=INR&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&stkn=2cab5b0b6351&gad_source=1/',

    },
    {
        id: 2,
        name: 'Coconut coil scrub pad',
        image: p2,
        new_prices:39.00,
        old_prices:50.00,
        link: 'https://ecofreaky.com/products/coconut-coir-scrub-pad-dish-wash-scrub-pad/',

    },
    {
        id: 3,
        name: 'Bamboo Toothbrush',
        image: p3,
        new_prices:35.00,
        old_prices:50.00,
        link: 'https://ecofreaky.com/products/bamboo-toothbrush-for-sensitive-teeth-extra-soft-bristles/',
    },
    {
        id: 4,
        name: 'Coriander whole',
        image: p4,
        new_prices:31.50,
        old_prices:35.00,
        link: 'https://organictattva.com/spices-and-masala/organic-coriander-whole.html/',
    },
    {
        id: 5,
        name: 'Jute Pouch',
        image: p5,
        new_prices:225.00,
        old_prices:399.00,
        link: 'https://thechymeracompany.com/product/taffy-pink-everyday-essential-pouch/',

    },
    {
        id: 6,
        name: 'Turmeric Powder',
        image: p17,
        new_prices:35.00,
        old_prices:40.00,
        link: 'https://orikaflavours.com/products/salem-turmeric-powder?variant=43795215057120/',

    },
    {
        id: 7,
        name: 'Wood slice',
        image: p7,
        new_prices:23.00,
        old_prices:24.00,
        link: 'https://justkraft.com/product/unfinished-natural-wood-slice-with-bark-size-6-7-cm-rwp7cm?utm_source=google&utm_medium=oxd_pmax_metro&gad_source=1&gclid=CjwKCAiAlJKuBhAdEiwAnZb7lc15qvJG4MrPKh68_NGXhfVJXKnaudGKANyLVxUlvCNRuc4VRGa0UhoCER0QAvD_BwE/',
    },
    {
        id: 8,
        name: 'LED light bulb',
        image: p19,
        new_prices:33.00,
        old_prices:41.00,
        link: 'https://topsoil.co.in/product/9w-auto-cut-dob-led-bulb-raw-material-with-plain-box-brand-name/?srsltid=AfmBOopsIz0xgSDbIi-pVzTUEjNLBgirsR4hrBlWwypFJw0hLtKpXCgkrE8#/',
    },
    {
        id: 9,
        name: 'Multi floral honey',
        image: p9,
        new_prices:225.00,
        old_prices:300.00,
        link: 'https://organicindia.com/products/multi-floral-honey?variant=47732434108733&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=Google&utm_medium=cpc&utm_campaign=20948955257&utm_adgroup=160815248594&utm_keyword=&utm_device=m&utm_placement=&utm_network=g&gad_source=1&gclid=CjwKCAiAlJKuBhAdEiwAnZb7lYzoOcVd4fofvsu13zqTUl5k241oIdfZ6SQ95am61b7VxUgg4Q30JRoCuGkQAvD_BwE/',

    },
    {
        id: 10,
        name: 'Towels',
        image: p10,
        new_prices:1800.00,
        old_prices:1999.00,
        link: 'https://www.oodaii.com/products/mirage-cotton-terry-limited-edition-1/',

    },
    {
        id: 11,
        name: 'Sandals',
        image: p11,
        new_prices:799.00,
        old_prices:1999.00,
        link: 'https://www.greensole.com/shop/alfa-blue-whale/',
    },
    {
        id: 12,
        name: 'Sneakers',
        image: p12,
        new_prices:2499.00,
        old_prices:4599.00,
        link: 'https://neemans.com/products/the-comfornauts?utm_source=IG&utm_medium=Linktree&utm_campaign=SMP/',
    },
    {
        id: 13,
        name: 'Kalamari shirt',
        image: p13,
        new_prices:1750.00,
        old_prices:1999.00,
        link: 'https://okhai.org/products/copy-of-okhai-aziz-hand-block-printed-kalamkari-shirt?variant=41567733711041/',

    },
    {
        id: 14,
        name: 'Jaggery powder',
        image: p14,
        new_prices:184.00,
        old_prices:194.00,
        link: 'https://organicindia.com/collections/all-products/products/jaggery-powder-500g-pack-of-3/',

    },
    {
        id: 15,
        name: 'Naked lip gloss',
        image: p15,
        new_prices:1125.00,
        old_prices:1225.00,
        link: 'https://tingestore.com/products/naked/',
    },
    {
        id: 16,
        name: 'Spoons(30 pc)',
        image: p16,
        new_prices:179.00,
        old_prices:200.00,
        link: 'https://www.purchasekart.com/products/dr-bio-biodegradable-compostable-spoon-30-pcs?variant=42852612505752&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=2724481986&hsa_cam=20515889478&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAlJKuBhAdEiwAnZb7lVLgDi7yngX1sMMgF6l-G35BH_NvgoOVTC2JVfiZNuKe5vBBGAsjyBoC5-wQAvD_BwE/',
    },
    
];

export default data_product;