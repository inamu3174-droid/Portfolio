import React from 'react';
import { X, Keyboard } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'M', action: 'Toggle Mute Sound Effects' },
    { key: 'C', action: 'Jump to Contact Section' },
    { key: 'W', action: 'Jump to Selected Work' },
    { key: 'S', action: 'Jump to Services' },
    { key: 'K', action: 'Jump to Kashmir Story' },
    { key: '?', action: 'Toggle Keyboard Shortcuts' },
    { key: 'ESC', action: 'Close Modal Windows' }
  ];

  return (
    <div className="fixed inset-0 z-[9500] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="w-full max-w-md bg-[#09090c] border border-zinc-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3">
          <Keyboard className="text-emerald-400" size={20} />
          <h3 className="text-xl font-bold font-display text-white">KEYBOARD SHORTCUTS</h3>
        </div>

        <div className="space-y-3 font-mono text-xs">
          {shortcuts.map((sc, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-900">
              <span className="text-zinc-400">{sc.action}</span>
              <kbd className="px-2.5 py-1 bg-zinc-900 border border-zinc-700 text-emerald-400 font-bold rounded text-[11px]">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
