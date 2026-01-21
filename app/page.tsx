import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Find clarity in the cosmos
            </h1>
            <p className={styles.heroSubtitle}>
              Your personal sanctuary for spiritual insight, intentional rituals, and mindful reflection.
              <br />
              No fear. No manipulation. Just you, your intentions, and the wisdom within.
            </p>
            <div className={styles.heroActions}>
              <Link href="/signup" className="btn btn-primary">
                Begin Your Journey →
              </Link>
              <Link href="#features" className="btn btn-secondary">
                Explore Features
              </Link>
            </div>
          </div>
        </div>

        {/* Cosmic Background */}
        <div className={styles.cosmicBg}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.values} id="features">
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Clarity Coven?</h2>

          <div className={styles.valueGrid}>
            <div className="card">
              <div className={styles.valueIcon}>🌙</div>
              <h3>Intention Over Prediction</h3>
              <p>
                We don't predict your future — we help you shape it. Every reading, ritual, and insight
                is designed to clarify your intentions and empower your choices.
              </p>
            </div>

            <div className="card">
              <div className={styles.valueIcon}>✨</div>
              <h3>Ethical & Empowering</h3>
              <p>
                No curses. No fear tactics. No manipulation. Just supportive guidance rooted in
                symbolism, reflection, and personal growth.
              </p>
            </div>

            <div className="card">
              <div className={styles.valueIcon}>🔮</div>
              <h3>AI-Enhanced Wisdom</h3>
              <p>
                Our intelligent system learns your energy patterns, remembers your journey, and offers
                increasingly personalized insights — like having a spiritual companion who truly knows you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureRow}>
            <div className={styles.featureImage}>
              <div className={styles.cardPlaceholder}>🃏</div>
            </div>
            <div className={styles.featureContent}>
              <h3>📖 Psychic Readings</h3>
              <p>
                Explore symbolic insights through tarot-inspired cards, runes, and cosmic patterns.
                Each reading invites reflection, not certainty.
              </p>
              <Link href="/readings" className={styles.featureLink}>
                Learn More →
              </Link>
            </div>
          </div>

          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureImage}>
              <div className={styles.candlePlaceholder}>🕯️</div>
            </div>
            <div className={styles.featureContent}>
              <h3>🕯️ Intention Rituals</h3>
              <p>
                Transform your goals into meaningful practices. Our guided rituals help you set intentions,
                release what no longer serves you, and manifest clarity.
              </p>
              <Link href="/rituals" className={styles.featureLink}>
                Explore →
              </Link>
            </div>
          </div>

          <div className={styles.featureRow}>
            <div className={styles.featureImage}>
              <div className={styles.chatPlaceholder}>💬</div>
            </div>
            <div className={styles.featureContent}>
              <h3>💬 AI Psychic Chat</h3>
              <p>
                Have a conversation with your spiritual companion. Ask questions, explore feelings,
                and receive thoughtful, personalized guidance anytime.
              </p>
              <Link href="/chat" className={styles.featureLink}>
                Try It →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to begin your journey?</h2>
          <p>Start with our free tier — no credit card required.</p>
          <Link href="/signup" className="btn btn-primary">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>🔮 Clarity Coven</h3>
              <p>Your intention, illuminated</p>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h4>Product</h4>
                <Link href="/features">Features</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/how-it-works">How It Works</Link>
              </div>
              <div>
                <h4>Company</h4>
                <Link href="/about">About</Link>
                <Link href="/ethics">Our Ethics</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div>
                <h4>Legal</h4>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/disclaimer">Disclaimer</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 Clarity Coven. All rights reserved.</p>
            <p className={styles.disclaimer}>For entertainment and personal reflection purposes.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
