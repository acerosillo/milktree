const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=1000&q=80`;

export type Category = 'jewellery' | 'accessories' | 'home';

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  attributes: string[];
  images: string[];
};

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All Pieces' },
  { id: 'jewellery', label: 'Jewellery' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'home', label: 'Home Decor' },
];

export const IMAGES = {
  hoops: img('1617038220319-276d3cfab638'),
  chain: img('1602173574767-37ac01994b2a'),
  pearlStrand: img('1515562141207-7a88fb7ce338'),
  pearlPendant: img('1611085583191-a3b181a88401'),
  layered: img('1610694955371-d4a3e0ce4b52'),
  hands: img('1596944924616-7b38e7cfac36'),
  crescent: img('1599643478518-a784e5dc4c8f'),
  ring: img('1605100804763-247f67b3557e'),
  hearts: img('1630019852942-f89202989a59'),
  bangle: img('1611591437281-460bfbe1220a'),
  pendants: img('1506630448388-4e683c67ddb0'),
  tealBag: img('1594223274512-ad4803739b7c'),
  blushBag: img('1566150905458-1bf1fc113f0d'),
  crocBag: img('1575032617751-6ddec2089882'),
  wallet: img('1627123424574-724758594e93'),
  candle: img('1603006905003-be475563bc59'),
  candleAlt: img('1602874801007-bd458bb1b8b6'),
  vase: img('1612196808214-b8e1d6145a8c'),
  budVase: img('1581783342308-f792dbdd27c5'),
  ceramics: img('1610701596007-11502861dcfa'),
  bottles: img('1565193566173-7a0ee3dbe261'),
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Twisted Gold Hoops',
    price: 48,
    category: 'jewellery',
    description: 'Sculptural rope-twist hoops with a warm gold finish. Light enough for every day, bold enough to finish an evening look.',
    attributes: ['Gold-plated sterling silver', 'Hinged closure', 'Diameter: 2.5cm'],
    images: [IMAGES.hoops, IMAGES.hands],
  },
  {
    id: '2',
    name: 'Freshwater Pearl Pendant',
    price: 65,
    category: 'jewellery',
    description: 'A single organic freshwater pearl suspended from a fine gold chain. Minimal, luminous and made to be layered.',
    attributes: ['Freshwater pearl', 'Gold-plated chain', 'Adjustable length: 40–45cm'],
    images: [IMAGES.pearlPendant, IMAGES.pearlStrand],
  },
  {
    id: '3',
    name: 'Heirloom Pearl Strand',
    price: 180,
    category: 'jewellery',
    description: 'A classic strand of hand-knotted pearls with an ornate clasp, presented in a keepsake box. A timeless gift.',
    attributes: ['Hand-knotted freshwater pearls', 'Decorative box clasp', 'Length: 45cm'],
    images: [IMAGES.pearlStrand, IMAGES.pearlPendant],
  },
  {
    id: '4',
    name: 'Chunky Chain Bracelet',
    price: 58,
    category: 'jewellery',
    description: 'Generous oval links with a polished gold finish. Wear it alone or stacked with finer pieces.',
    attributes: ['Gold-plated brass', 'Toggle clasp', 'Length: 19cm'],
    images: [IMAGES.chain, IMAGES.hands],
  },
  {
    id: '5',
    name: 'Crescent Layered Necklace',
    price: 72,
    category: 'jewellery',
    description: 'Two delicate chains, a faceted blue stone and a starlit crescent moon, designed to sit perfectly together.',
    attributes: ['Gold-plated chains', 'Faceted glass stone', 'Lengths: 40cm & 50cm'],
    images: [IMAGES.crescent, IMAGES.layered],
  },
  {
    id: '6',
    name: 'Filigree Bangle',
    price: 54,
    category: 'jewellery',
    description: 'An intricate paisley filigree bangle in a soft rose-gold tone, set with tiny sparkling stones.',
    attributes: ['Rose gold-plated brass', 'Crystal accents', 'Inner diameter: 6.2cm'],
    images: [IMAGES.bangle],
  },
  {
    id: '7',
    name: 'Sapphire Heart Drops',
    price: 38,
    category: 'jewellery',
    description: 'Faceted heart-shaped drops in deep sapphire blue on fine gold hooks. A small piece with a lot of joy.',
    attributes: ['Faceted crystal', 'Gold-plated hooks', 'Drop: 2cm'],
    images: [IMAGES.hearts],
  },
  {
    id: '8',
    name: 'Halo Solitaire Ring',
    price: 120,
    category: 'jewellery',
    description: 'A brilliant round stone framed by a halo of pavé, set on a split shank band for an heirloom feel.',
    attributes: ['Sterling silver', 'Cubic zirconia', 'Sizes: J–R'],
    images: [IMAGES.ring],
  },
  {
    id: '9',
    name: 'Pebbled Leather Top-Handle Bag',
    price: 145,
    category: 'accessories',
    description: 'Structured, pebbled leather in a deep teal with a polished push-lock. Holds the essentials with ease.',
    attributes: ['Pebbled leather', 'Gold-tone hardware', 'Detachable shoulder strap'],
    images: [IMAGES.tealBag],
  },
  {
    id: '10',
    name: 'Blush Chain Shoulder Bag',
    price: 95,
    category: 'accessories',
    description: 'A compact blush shoulder bag with a soft chevron inlay and a slim silver chain strap.',
    attributes: ['Smooth leather', 'Magnetic flap closure', 'Chain strap: 110cm'],
    images: [IMAGES.blushBag],
  },
  {
    id: '11',
    name: 'Croc-Effect Mini Bag',
    price: 110,
    category: 'accessories',
    description: 'Glossy burgundy croc-effect leather with a statement gold clasp. Small in size, big on presence.',
    attributes: ['Croc-embossed leather', 'Statement gold-tone clasp', 'Top handle'],
    images: [IMAGES.crocBag],
  },
  {
    id: '12',
    name: 'Vintage Leather Wallet',
    price: 45,
    category: 'accessories',
    description: 'A soft bifold wallet in rich brown leather that only gets better with age.',
    attributes: ['Full-grain leather', '6 card slots', 'Note compartment'],
    images: [IMAGES.wallet],
  },
  {
    id: '13',
    name: 'Amber & Sandalwood Candle',
    price: 32,
    category: 'home',
    description: 'Hand-poured in a smoked glass vessel with warm notes of amber and sandalwood for calm, golden evenings.',
    attributes: ['Soy wax blend', 'Cotton wick', 'Burn time: 50+ hours'],
    images: [IMAGES.candle, IMAGES.candleAlt],
  },
  {
    id: '14',
    name: 'Stoneware Floor Vase',
    price: 68,
    category: 'home',
    description: 'A generous, softly rounded vase in matte ivory stoneware. Beautiful alone or with dried stems.',
    attributes: ['Matte glazed stoneware', 'Height: 35cm', 'Watertight'],
    images: [IMAGES.vase],
  },
  {
    id: '15',
    name: 'Porcelain Bud Vase',
    price: 24,
    category: 'home',
    description: 'A pebble-shaped porcelain bud vase made for a single sprig of eucalyptus or a seasonal bloom.',
    attributes: ['Matte porcelain', 'Height: 12cm', 'Watertight'],
    images: [IMAGES.budVase],
  },
  {
    id: '16',
    name: 'Speckled Ceramic Vessels',
    price: 36,
    category: 'home',
    description: 'A set of speckled stoneware vessels for trinkets, rings or small plants, finished in sand and ivory tones.',
    attributes: ['Set of 5', 'Hand-glazed stoneware', 'Each piece unique'],
    images: [IMAGES.ceramics, IMAGES.bottles],
  },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
