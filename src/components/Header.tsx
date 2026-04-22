export function Header() {
  return (
    <header className="h-20 border-b border-cyan-900/50 flex flex-shrink-0 items-center justify-between px-4 md:px-8 bg-slate-950/20">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cyan-500 flex items-center justify-center bg-[#0d1b1e]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-tech font-bold text-cyan-400 tracking-tighter">
            ECO-ARQUEÓLOGO <span className="text-[10px] md:text-xs text-slate-500 font-normal">v2050</span>
          </h1>
          <p className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">
            Sincronización Cuántica STEAM 4.0
          </p>
        </div>
      </div>
      <div className="flex gap-2 md:gap-4">
        <button className="hidden sm:block px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-[10px] md:text-[11px] font-tech hover:bg-slate-700">HISTORIAL</button>
        <button className="px-3 py-1.5 rounded bg-cyan-600/20 border border-cyan-500/50 text-[10px] md:text-[11px] font-tech text-cyan-400">EXPORTAR PLANOS</button>
      </div>
    </header>
  );
}
