import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

function Product() {
  const [ref, isInView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-product ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="A product tour" />
      <div className="splitea-section__inner">
        <div className="splitea-product__layout stagger">
          <div className="splitea-product__left">
            <p className="splitea-eyebrow">A glance at home</p>
            <h2 className="splitea-headline">
              Your money,
              <br />
              at a glance.
            </h2>
            <p className="splitea-lede">
              The home screen leads with the only number that actually matters —
              your
              {' '}
              <strong>net balance</strong>
              {' '}
              — and a feed of recent activity. Everything else is one tap away.
            </p>
            <ol className="splitea-feature-list">
              <li>
                <strong>Net balance carousel</strong>
                <span> — owed, owing, by group.</span>
              </li>
              <li>
                <strong>Recent activity</strong>
                <span> — what changed since last open.</span>
              </li>
              <li>
                <strong>The orange button</strong>
                <span> — add expense from anywhere.</span>
              </li>
            </ol>
          </div>
          <div className="splitea-phone" aria-hidden="true">
            <div className="splitea-phone__screen">
              <div className="splitea-phone__statusbar">
                <span>15:57</span>
              </div>
              <div className="splitea-phone__welcome">
                <div>
                  <h4>Welcome back, Enzo</h4>
                  <p>Here is your expense summary</p>
                </div>
              </div>
              <div className="splitea-phone__balance">
                <span className="splitea-phone__balance-label">
                  <span className="splitea-phone__balance-icon" />
                  Net balance
                </span>
                <span className="splitea-phone__balance-value">$83,633.07</span>
                <span className="splitea-phone__balance-sub">You are owed</span>
              </div>
              <div className="splitea-phone__activity-head">
                <h5>Recent activity</h5>
                <a href="#all">See all</a>
              </div>
              <div className="splitea-phone__feed">
                <div className="splitea-phone__row">
                  <div className="splitea-phone__row-top">
                    <span className="splitea-phone__row-title">Adds</span>
                    <span className="splitea-phone__amount">+$22.50</span>
                  </div>
                  <span className="splitea-phone__row-sub">You are owed $4.50</span>
                </div>
                <div className="splitea-phone__row">
                  <div className="splitea-phone__row-top">
                    <span className="splitea-phone__row-title">Bar tab</span>
                    <span className="splitea-phone__amount splitea-phone__amount--neg">-$14.00</span>
                  </div>
                  <span className="splitea-phone__row-sub">You owe $2.80</span>
                </div>
                <div className="splitea-phone__row">
                  <div className="splitea-phone__row-top">
                    <span className="splitea-phone__row-title">Groceries</span>
                    <span className="splitea-phone__amount">+$75.70</span>
                  </div>
                  <span className="splitea-phone__row-sub">You are owed $15.10</span>
                </div>
              </div>
              <div className="splitea-phone__tabbar">
                <span className="splitea-phone__tab_left">Home</span>
                <span className="splitea-phone__tab_left">Groups</span>
                <span className="splitea-phone__plus">+</span>
                <span className="splitea-phone__tab_right">Friends</span>
                <span className="splitea-phone__tab_right">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
