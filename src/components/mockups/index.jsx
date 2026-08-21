import CreateScreen from './CreateScreen';
import BrandKitScreen from './BrandKitScreen';
import CalendarScreen from './CalendarScreen';
import ApprovalsScreen from './ApprovalsScreen';
import InsightsScreen from './InsightsScreen';
import LibraryScreen from './LibraryScreen';

const registry = {
  create: CreateScreen,
  brand: BrandKitScreen,
  calendar: CalendarScreen,
  approvals: ApprovalsScreen,
  insights: InsightsScreen,
  library: LibraryScreen,
};

/** Look a screen up by key, so data files can reference visuals by name. */
export default function Mockup({ name, dark = false, compact = false }) {
  const Screen = registry[name];
  if (!Screen) return null;
  return <Screen dark={dark} compact={compact} />;
}

export {
  CreateScreen,
  BrandKitScreen,
  CalendarScreen,
  ApprovalsScreen,
  InsightsScreen,
  LibraryScreen,
};
