// Real product imagery system (prototype).
// Maps each product to its category's product photo. Production swaps in per-SKU photos.
// Path is relative to the page that includes it (app/*.html) -> ../assets/products/

const _PRODUCT_IMG = {
  "Whisky": "whisky",
  "Brandy": "brandy",
  "Brandy/Cognac": "cognac",
  "Rum": "rum",
  "Vodka": "vodka",
  "Gin": "gin",
  "Tequila": "tequila",
  "Liqueur": "liqueur",
  "Red Wine": "redwine",
  "White Wine": "whitewine",
  "Rose'": "rose",
  "Bubbly": "bubbly",
  "Box Wine": "boxwine",
  "Beers": "beer",
  "Cider": "cider",
  "Cordials": "cordial",
  "Drinks & Mixers": "mixer",
  "Premixed/Ready To Drink": "premix",
  "Vapes": "vape",
  "Add-Ons": "addon"
};

function _imgSlug(p){
  let slug = _PRODUCT_IMG[p.cat] || "whisky";
  const n = (p.name||"").toLowerCase();
  // name-based refinements within a category
  if (p.cat === "Add-Ons") {
    // alternate burger / pizza, or pick by name
    if (n.includes("pizza")) slug = "addon2";
    else if (n.includes("burger")) slug = "addon";
    else slug = (p.id && p.id.charCodeAt(p.id.length-1) % 2) ? "addon2" : "addon";
  }
  // rosé sometimes filed oddly — ensure pink
  if (n.includes("ros") || n.includes("rosé")) slug = "rose";
  return slug;
}

function drinkArt(p){
  const slug = _imgSlug(p);
  return `<img class="pimg" src="../assets/products/${slug}.png" alt="${(p.name||'').replace(/"/g,'')}" loading="lazy" />`;
}
