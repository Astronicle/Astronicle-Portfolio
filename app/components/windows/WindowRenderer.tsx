'use client';
import { useWindowStore } from '@/store/windowStore';
import { Window } from './Window';
import { ProjectsExplorer } from '../explorer/ProjectsExplorer';
import { ProjectDetail } from '../explorer/ProjectDetail';
import { SkillsExplorer } from '../explorer/SkillsExplorer';
import { ExperienceExplorer, CertificationsExplorer, ContactExplorer, RecycleBinExplorer } from '../explorer/OtherExplorers';
import { Terminal } from '../terminal/Terminal';
import { SettingsWindow } from '../settings/SettingsWindow';
import { AboutWindow } from './AboutWindow';
import { ResumeViewer } from './ResumeViewer';

function WindowContent({ component, props }: { component: string; props?: Record<string, unknown> }) {
  switch (component) {
    case 'ProjectsExplorer': return <ProjectsExplorer />;
    case 'ProjectDetail': return <ProjectDetail projectId={props?.projectId as string} />;
    case 'SkillsExplorer': return <SkillsExplorer />;
    case 'ExperienceExplorer': return <ExperienceExplorer />;
    case 'CertificationsExplorer': return <CertificationsExplorer />;
    case 'ContactExplorer': return <ContactExplorer />;
    case 'RecycleBinExplorer': return <RecycleBinExplorer />;
    case 'Terminal': return <Terminal />;
    case 'SettingsWindow': return <SettingsWindow />;
    case 'AboutWindow': return <AboutWindow />;
    case 'ResumeViewer': return <ResumeViewer />;
    default: return <div className="p-6 text-white/40">Unknown component: {component}</div>;
  }
}

export function WindowRenderer() {
  const windows = useWindowStore((s) => s.windows);

  return (
    <>
      {windows.map((win) => (
        <Window key={win.id} window={win}>
          <WindowContent component={win.component} props={win.props} />
        </Window>
      ))}
    </>
  );
}
