import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({ component: Index });

const products = [
  { name: "Nocturne shell jacket", type: "Jackets", price: "$248", inventory: 7, image: "./assets/loomere/hero.jpg", tone: "Deep graphite" },
  { name: "Cobalt study tee", type: "Clothing", price: "$96", inventory: 18, image: "./assets/loomere/look.jpg", tone: "Electric cobalt" },
  { name: "Signal pendant", type: "Jewelry", price: "$74", inventory: 4, image: "./assets/loomere/detail.png", tone: "Brushed silver" },
  { name: "Heavyweight form hoodie", type: "Clothing", price: "$168", inventory: 11, image: "./assets/loomere/product.png", tone: "Field olive" },
  { name: "Archive six-panel cap", type: "Headwear", price: "$68", inventory: 9, image: "./assets/loomere/detail.png", tone: "Washed black" },
  { name: "After-dark rib socks", type: "Socks", price: "$28", inventory: 24, image: "./assets/loomere/product.png", tone: "Bone / black" },
  { name: "Utility key carabiner", type: "Accessories", price: "$42", inventory: 3, image: "./assets/loomere/hero.jpg", tone: "Gunmetal" },
  { name: "Frame long-sleeve", type: "Clothing", price: "$112", inventory: 0, image: "./assets/loomere/look.jpg", tone: "Chalk white" },
];

const categories = ["All pieces", "Clothing", "Jackets", "Headwear", "Accessories", "Socks", "Jewelry"];

function Index() {
  const [category, setCategory] = useState("All pieces");
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const visible = category === "All pieces" ? products : products.filter((product) => product.type === category);

  return (
    <main className="loomere-page">
      <header className="site-header">
        <button className="menu-trigger" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
          Menu
        </button>
        <a className="wordmark" href="#top" aria-label="AMEN home"><img src="https://d2ol7oe51mr4n.cloudfront.net/user_3IXoGgAxoHkpe2vL56v3YSTTAGF/6f074841-f5a0-41ea-ab1c-27831fac1efc.jpg" alt="AMEN." /></a>
        <button className="bag-trigger" type="button" onClick={() => setBagCount((value) => value + 1)}>
          Bag <span>{bagCount.toString().padStart(2, "0")}</span>
        </button>
      </header>

      {menuOpen ? (
        <nav className="menu-panel" aria-label="Main menu">
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#principle" onClick={() => setMenuOpen(false)}>Principle</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
        </nav>
      ) : null}

      <section className="amen-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="utility-label">AMEN. / New release 01</p>
          <h1 id="hero-title">Quiet forms.<br /><em>Strong presence.</em></h1>
          <p className="hero-description">Everyday pieces with a sharper point of view. The Nocturne shell is cut for the city after dark, with a clean line and room to move.</p>
          <a className="hero-cta" href="#collection">Shop the collection <span>↗</span></a>
        </div>
        <a className="hero-product" href="#collection" aria-label="Shop the Nocturne shell jacket">
          <img src="./assets/loomere/hero.jpg" alt="Nocturne shell jacket in deep graphite" />
          <span className="hero-product-label"><span>Featured / Nocturne shell</span><strong>$248</strong></span>
        </a>
        <div className="hero-foot"><span>Designed in the in-between</span><span>Scroll to enter ↓</span></div>
      </section>

      <section id="top" className="journey-wrap">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
        <div className="journey-caption" aria-hidden="true"><span>01</span><span>AMEN. / 2026</span></div>
      </section>

      <section className="category-rail" aria-label="Shop categories">
        <div className="section-heading"><span>Current collection</span><h2>Objects with presence.</h2></div>
        <div className="category-buttons">
          {categories.map((item) => <button key={item} type="button" className={category === item ? "category-active" : ""} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
      </section>

      <section id="collection" className="collection-grid">
        {visible.map((product, index) => (
          <article className={index === 0 ? "product-card product-card-featured" : "product-card"} key={product.name}>
            <div className="product-image-wrap"><img src={product.image} alt={product.name} loading={index === 0 ? "eager" : "lazy"} /><button type="button" disabled={product.inventory === 0} onClick={() => setBagCount((value) => value + 1)} aria-label={`Add ${product.name} to bag`}>{product.inventory === 0 ? "Sold out" : "Add to bag"}</button></div>
            <div className="product-meta"><div><h3>{product.name}</h3><p>{product.type} / {product.tone}</p><p className={product.inventory > 0 && product.inventory < 5 ? "stock-low" : product.inventory === 0 ? "stock-out" : "stock-ready"}>{product.inventory === 0 ? "Sold out" : product.inventory < 5 ? `${product.inventory} left` : `${product.inventory} in stock`}</p></div><strong>{product.price}</strong></div>
          </article>
        ))}
      </section>

      <section id="principle" className="principle-section">
        <div className="principle-image"><img src="./assets/loomere/look.jpg" alt="Model wearing a cobalt LOOMERE garment in a late-night arcade" loading="lazy" /></div>
        <div className="principle-copy"><p className="utility-label">The LOOMERE principle</p><h2>Comfort is not the opposite of edge.</h2><p>We make clothes for the hours between plans. Soft where they need to be, structured where they count, and never louder than the person wearing them.</p><a className="text-link" href="#collection">Read our story <span>↗</span></a></div>
      </section>

      <section id="journal" className="journal-section"><p className="utility-label">The journal</p><div className="journal-row"><h2>Notes on form, sound, and the city after dark.</h2><a className="quiet-link" href="#newsletter">Read the latest <span>↗</span></a></div></section>

      <footer id="newsletter" className="site-footer">
        <div><a className="footer-wordmark" href="#top"><img src="https://d2ol7oe51mr4n.cloudfront.net/user_3IXoGgAxoHkpe2vL56v3YSTTAGF/6f074841-f5a0-41ea-ab1c-27831fac1efc.jpg" alt="AMEN." /></a><p>Measured silhouettes for unmeasured days.</p></div>
        <div className="newsletter-block"><p className="utility-label">Private list</p><h3>First access to the next release.</h3>{joined ? <p className="form-success">You are on the list.</p> : <form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setJoined(true); }}><label htmlFor="email">Email address</label><div className="email-row"><input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit">Join</button></div></form>}</div>
        <div className="footer-bottom"><span>© 2026 AMEN.</span><span>Shipping worldwide</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
