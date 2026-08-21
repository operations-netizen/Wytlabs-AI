import AppShell from './AppShell';
import Icon from '../ui/Icon';
import { Row, Status, Thumb } from './bits';

/** Projects / media library — everything the workspace has produced. */
export default function LibraryScreen({ dark = false }) {
  return (
    <AppShell
      dark={dark}
      active="projects"
      crumb="Files & Projects"
      title="Projects"
      url="app.wytlabs.ai/projects"
      label="Wytlabs AI project library — generated content filtered by channel and status, with a recent activity list"
      actions={
        <>
          <span className="k k--soft app__opt">
            <Icon name="search" size={9} strokeWidth={2.2} />
            Search
          </span>
          <span className="b app__opt">
            <Icon name="filter" size={9} strokeWidth={2.2} />
            Filter
          </span>
          <span className="b b--pri">New project</span>
        </>
      }
    >
      <div className="app__pane">
        <div className="prow" style={{ gap: '0.3rem' }}>
          <span className="k k--on">All</span>
          <span className="k app__opt">Social</span>
          <span className="k app__opt">Blog</span>
          <span className="k app__opt">Email</span>
          <span className="k app__opt">Ads</span>
          <span className="k k--soft" style={{ marginLeft: 'auto' }}>
            <Icon name="palette" size={9} strokeWidth={2.2} />
            Northbay Supply
          </span>
        </div>

        <div className="th th--3">
          <Thumb index={0} tag="Instagram" title="Sunrise range carousel" meta="Published · 4 Mar" />
          <Thumb index={2} tag="Blog" title="Choosing an insulated bottle" meta="Draft · 1,200 words" />
          <Thumb index={4} tag="Email" title="Range launch newsletter" meta="Scheduled · Wed" />
        </div>

        <div className="c">
          <div className="c__h">
            <span className="c__t">Recent activity</span>
            <span className="c__m">Sorted by updated</span>
          </div>
          <div className="rows">
            <Row icon="linkedin" title="Field-tested: 36-hour cold retention" sub="Repurposed from blog" right={<Status kind="live">Published</Status>} />
            <Row icon="doc" title="Spring outdoor guide" sub="Blog · 1,850 words" right={<Status kind="warn">Approval</Status>} />
            <Row icon="image" title="Promo tiles — 6 sizes" sub="Creative set · brand palette" right={<Status kind="go">Scheduled</Status>} />
            <Row icon="target" title="Meta launch campaign" sub="Paid ads · 3 ad sets" right={<Status kind="go">Live</Status>} />
            <Row icon="mail" title="Restock announcement" sub="Email · 8,400 recipients" right={<Status kind="live">Sent</Status>} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
