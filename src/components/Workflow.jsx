import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Head from './ui/Head';
import { ApprovalsScreen } from './mockups';
import { workflow } from '../data/content';
import { ctas } from '../data/site';
import './Workflow.css';

/**
 * Five-step workflow on the soft blue band. A horizontal rail on desktop with
 * a real interface anchoring it, a vertical timeline on mobile.
 */
export default function Workflow() {
  return (
    <section className="sec sec--lg flow" id="how">
      <div className="wrap wrap--wide">
        <Head
          eyebrow="How it works"
          title="Set your brand up once. Then it is five steps, every time."
          lede="No prompt engineering, no blank pages, and nothing published without a person approving it."
          variant="split"
        />

        <ol className="flow__rail">
          {workflow.map((s, i) => (
            <Reveal as="li" className="flow__step" key={s.n} delay={i * 90}>
              <span className="flow__bar" aria-hidden="true" />
              <span className="flow__n">{s.n}</span>
              <span className="flow__icon">
                <Icon name={s.icon} size={18} strokeWidth={1.85} />
              </span>
              <h3 className="flow__t">{s.title}</h3>
              <p className="flow__b">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="flow__proof">
          <Reveal className="flow__pcopy">
            <p className="eyebrow">
              <span className="eyebrow__bar" />
              Step 04 in the product
            </p>
            <h3 className="flow__pt">Approvals keep you in control</h3>
            <p className="flow__pb">
              Everything Wytlabs AI generates waits in a review queue with the copy, the visual
              and your team’s comments side by side. Approve it and it moves into the calendar.
            </p>
            <a className="tlink" href={ctas.primary.href}>
              Get started
              <Icon name="arrow-up-right" size={13} strokeWidth={2.4} />
            </a>
          </Reveal>
          <Reveal className="frame flow__pframe" delay={110}>
            <ApprovalsScreen />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
