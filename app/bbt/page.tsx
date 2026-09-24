"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./bbt.module.css";

type Flag = "sleep" | "illness" | "alcohol" | "travel" | "medication" | "other";
type Entry = { date: string; temp: number; period: boolean; flags: Flag[]; notes: string };
type Cycle = { id: string; startDate: string; entries: Record<string, Entry> };
type Store = { current: Cycle | null; history: Cycle[] };

const KEY = "springwell-bbt-v1";
const factorOptions: Array<[Flag, string]> = [
  ["sleep", "Poor / interrupted sleep"],
  ["illness", "Illness / fever"],
  ["alcohol", "Alcohol"],
  ["travel", "Travel / time change"],
  ["medication", "Medication change"],
  ["other", "Other"],
];

function today() {
  const d = new Date();
  return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, "0"), String(d.getDate()).padStart(2, "0")].join("-");
}

function cycleDay(start: string, date: string) {
  const a = start.split("-").map(Number);
  const b = date.split("-").map(Number);
  return Math.floor((Date.UTC(b[0], b[1] - 1, b[2]) - Date.UTC(a[0], a[1] - 1, a[2])) / 86400000) + 1;
}

function niceDate(s: string) {
  const a = s.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(a[0], a[1] - 1, a[2]));
}

function trend(entries: Entry[]) {
  if (entries.length < 9) return "Record at least 9 mornings to compare recent and earlier readings.";
  const s = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const mean = (x: number[]) => x.reduce((a, b) => a + b, 0) / x.length;
  const recent = mean(s.slice(-3).map(x => x.temp));
  const prior = mean(s.slice(-9, -3).map(x => x.temp));
  const diff = recent - prior;
  if (diff >= 0.3) {
    return `Recent 3-day average is ${diff.toFixed(2)}°F higher than the preceding 6-day average. This is a trend summary, not an ovulation determination.`;
  }
  return "No sustained higher-reading pattern is detected by this simple trend summary yet.";
}

function Chart({ cycle }: { cycle: Cycle }) {
  const entries = Object.values(cycle.entries).sort((a, b) => a.date.localeCompare(b.date));
  const maxDay = Math.max(35, ...entries.map(e => cycleDay(cycle.startDate, e.date)));
  const width = 920;
  const height = 320;
  const padL = 54, padR = 18, padT = 22, padB = 42;
  const minT = 96, maxT = 100;
  const x = (d: number) => padL + ((d - 1) / Math.max(1, maxDay - 1)) * (width - padL - padR);
  const y = (t: number) => padT + ((maxT - t) / (maxT - minT)) * (height - padT - padB);
  const points = entries.filter(e => e.temp >= minT && e.temp <= maxT).map(e => `${x(cycleDay(cycle.startDate, e.date))},${y(e.temp)}`).join(" ");
  const yTicks = Array.from({ length: 9 }, (_, i) => 96 + i * 0.5);
  const xTicks = Array.from({ length: maxDay }, (_, i) => i + 1);

  return <div className={styles.chartWrap}>
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Basal body temperature chart">
      {yTicks.map(t => <g key={t}>
        <line x1={padL} x2={width - padR} y1={y(t)} y2={y(t)} className={styles.gridLine} />
        <text x={padL - 10} y={y(t) + 4} textAnchor="end" className={styles.axisText}>{t.toFixed(1)}</text>
      </g>)}
      {xTicks.map(d => <g key={d}>
        <line x1={x(d)} x2={x(d)} y1={padT} y2={height - padB} className={d % 5 === 0 || d === 1 ? styles.gridLine : styles.gridLight} />
        {(d === 1 || d % 2 === 0 || d === maxDay) && <text x={x(d)} y={height - 17} textAnchor="middle" className={styles.axisText}>{d}</text>}
      </g>)}
      {points && <polyline points={points} fill="none" className={styles.tempLine} />}
      {entries.map(e => {
        const d = cycleDay(cycle.startDate, e.date);
        return <g key={e.date}>
          {e.period && <circle cx={x(d)} cy={height - padB + 11} r="4" className={styles.periodDot} />}
          <circle cx={x(d)} cy={y(e.temp)} r="5" className={styles.tempDot} />
        </g>;
      })}
      <text x={12} y={18} className={styles.axisLabel}>°F</text>
      <text x={width / 2} y={height - 2} textAnchor="middle" className={styles.axisLabel}>Cycle Day</text>
    </svg>
  </div>;
}

export default function BBTPage() {
  const [store, setStore] = useState<Store>({ current: null, history: [] });
  const [ready, setReady] = useState(false);
  const [start, setStart] = useState(today());
  const [date, setDate] = useState(today());
  const [temp, setTemp] = useState("");
  const [period, setPeriod] = useState(false);
  const [selectedFlags, setSelectedFlags] = useState<Flag[]>([]);
  const [notes, setNotes] = useState("");
  const [msg, setMsg] = useState("");
  const [viewId, setViewId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setStore(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(store));
  }, [store, ready]);

  const viewed = viewId ? store.history.find(c => c.id === viewId) || store.current : store.current;
  const entries = useMemo(() => viewed ? Object.values(viewed.entries).sort((a, b) => a.date.localeCompare(b.date)) : [], [viewed]);

  useEffect(() => {
    const e = store.current?.entries[date];
    setTemp(e ? e.temp.toFixed(2) : "");
    setPeriod(e?.period || false);
    setSelectedFlags(e?.flags || []);
    setNotes(e?.notes || "");
    setMsg("");
  }, [date, store.current?.id, store.current?.entries]);

  function startCycle() {
    setStore(s => ({ ...s, current: { id: start + "-" + Date.now(), startDate: start, entries: {} } }));
    setDate(start > today() ? start : today());
    setViewId(null);
  }

  function newCycle() {
    setStore(s => {
      if (!s.current) return s;
      const history = Object.keys(s.current.entries).length ? [s.current, ...s.history].slice(0, 24) : s.history;
      return { current: null, history };
    });
    setStart(today());
    setViewId(null);
  }

  function toggle(f: Flag) {
    setSelectedFlags(x => x.includes(f) ? x.filter(y => y !== f) : [...x, f]);
  }

  function save() {
    if (!store.current) return;
    const t = Number(temp);
    const day = cycleDay(store.current.startDate, date);
    if (!Number.isFinite(t) || t < 95 || t > 102) {
      setMsg("Enter a temperature between 95.00°F and 102.00°F.");
      return;
    }
    if (day < 1) {
      setMsg("Measurement date cannot be before Cycle Day 1.");
      return;
    }
    const entry: Entry = {
      date,
      temp: Math.round(t * 100) / 100,
      period,
      flags: selectedFlags,
      notes: notes.trim(),
    };
    setStore(s => s.current ? ({
      ...s,
      current: { ...s.current, entries: { ...s.current.entries, [date]: entry } }
    }) : s);
    setMsg(`Saved ${entry.temp.toFixed(2)}°F for Cycle Day ${day}.`);
  }

  function remove() {
    setStore(s => {
      if (!s.current) return s;
      const next = { ...s.current.entries };
      delete next[date];
      return { ...s, current: { ...s.current, entries: next } };
    });
    setTemp("");
    setPeriod(false);
    setSelectedFlags([]);
    setNotes("");
    setMsg("Entry deleted.");
  }

  function exportCsv() {
    if (!viewed || !entries.length) return;
    const q = (v: unknown) => '"' + String(v).replaceAll('"', '""') + '"';
    const rows = [
      ["Cycle Day", "Date", "Temperature (F)", "Period", "Factors", "Notes"],
      ...entries.map(e => [
        cycleDay(viewed.startDate, e.date),
        e.date,
        e.temp.toFixed(2),
        e.period ? "Yes" : "No",
        e.flags.map(f => factorOptions.find(x => x[0] === f)?.[1] || f).join("; "),
        e.notes,
      ]),
    ];
    const blob = new Blob([rows.map(r => r.map(q).join(",")).join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "springwell-bbt-" + viewed.startDate + ".csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!ready) return <main className={styles.page}><div className={styles.loading}>Loading tracker…</div></main>;

  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <b>SW</b>
        <span><strong>SpringWell Acupuncture</strong><small>Herndon, Virginia</small></span>
      </Link>
      <Link href="/">Back to website</Link>
    </header>

    <section className={styles.hero}>
      <p className={styles.eyebrow}>Patient cycle-tracking tool</p>
      <h1>Basal Body Temperature Tracker</h1>
      <p>Record one Fahrenheit temperature each morning, note factors that may affect the reading, and view the pattern across your cycle.</p>
      <aside><strong>Privacy:</strong> BBT entries are stored in this browser on this device. They are not saved to a SpringWell patient account or clinical record.</aside>
    </section>

    <section className={styles.shell}>
      {!store.current ? <div className={styles.panel}>
        <p className={styles.eyebrow}>Begin a chart</p>
        <h2>What was Cycle Day 1?</h2>
        <p>Use the first day of menstrual bleeding.</p>
        <div className={styles.startRow}>
          <label>Cycle start date<input type="date" value={start} max={today()} onChange={e => setStart(e.target.value)} /></label>
          <button onClick={startCycle}>Start this cycle</button>
        </div>
      </div> : <>
        <div className={styles.topGrid}>
          <section className={styles.panel}>
            <div className={styles.panelHead}>
              <div><p className={styles.eyebrow}>Daily entry</p><h2>Record today’s BBT</h2></div>
              <span className={styles.dayBadge}>Cycle Day {Math.max(1, cycleDay(store.current.startDate, date))}</span>
            </div>

            <div className={styles.formGrid}>
              <label>Date<input type="date" value={date} min={store.current.startDate} onChange={e => setDate(e.target.value)} /></label>
              <label>Basal temperature (°F)<input inputMode="decimal" placeholder="97.42" value={temp} onChange={e => setTemp(e.target.value)} /></label>
            </div>

            <label className={styles.checkRow}><input type="checkbox" checked={period} onChange={e => setPeriod(e.target.checked)} /> Menstrual bleeding today</label>

            <fieldset>
              <legend>Factors that may affect the reading</legend>
              <div className={styles.factorGrid}>
                {factorOptions.map(([key, label]) =>
                  <label key={key} className={selectedFlags.includes(key) ? styles.factorActive : styles.factor}>
                    <input type="checkbox" checked={selectedFlags.includes(key)} onChange={() => toggle(key)} />
                    {label}
                  </label>
                )}
              </div>
            </fieldset>

            <label className={styles.notesLabel}>
              Notes
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Optional: sleep quality, symptoms, cervical mucus, cramps, medications, stress, treatment notes, or anything else you want to remember."
                rows={4}
                maxLength={800}
              />
              <small>{notes.length}/800 characters</small>
            </label>

            <div className={styles.actions}>
              <button onClick={save}>Save entry</button>
              {store.current.entries[date] && <button className={styles.secondary} onClick={remove}>Delete this entry</button>}
            </div>
            {msg && <p className={styles.message}>{msg}</p>}
          </section>

          <aside className={styles.panel}>
            <p className={styles.eyebrow}>Current cycle</p>
            <h2>{niceDate(store.current.startDate)}</h2>
            <div className={styles.stats}>
              <div><strong>{Object.keys(store.current.entries).length}</strong><span>days recorded</span></div>
              <div><strong>{entries.length ? Math.min(...entries.map(e => e.temp)).toFixed(2) : "—"}</strong><span>lowest °F</span></div>
              <div><strong>{entries.length ? Math.max(...entries.map(e => e.temp)).toFixed(2) : "—"}</strong><span>highest °F</span></div>
            </div>
            <p className={styles.trend}>{trend(Object.values(store.current.entries))}</p>
            <button className={styles.secondary} onClick={newCycle}>Start a new cycle</button>
          </aside>
        </div>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <div><p className={styles.eyebrow}>Temperature pattern</p><h2>BBT chart</h2></div>
            <div className={styles.chartActions}>
              <button className={styles.secondary} onClick={() => window.print()}>Print / Save PDF</button>
              <button className={styles.secondary} onClick={exportCsv}>Export CSV</button>
            </div>
          </div>
          <Chart cycle={store.current} />
          <p className={styles.legend}><span>● Temperature</span><span>● Period day marker</span></p>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <div><p className={styles.eyebrow}>Daily log</p><h2>Recorded temperatures & notes</h2></div>
          </div>
          {entries.length ? <div className={styles.tableWrap}>
            <table>
              <thead><tr><th>Day</th><th>Date</th><th>BBT °F</th><th>Period</th><th>Factors</th><th className={styles.notesColumn}>Notes</th></tr></thead>
              <tbody>{entries.map(e => <tr key={e.date}>
                <td>{cycleDay(store.current!.startDate, e.date)}</td>
                <td>{niceDate(e.date)}</td>
                <td><strong>{e.temp.toFixed(2)}</strong></td>
                <td>{e.period ? "Yes" : "—"}</td>
                <td>{e.flags.length ? e.flags.map(f => factorOptions.find(x => x[0] === f)?.[1] || f).join(", ") : "—"}</td>
                <td className={styles.notesCell}>{e.notes || "—"}</td>
              </tr>)}</tbody>
            </table>
          </div> : <p>No temperatures recorded yet.</p>}
        </section>
      </>}

      {store.history.length > 0 && <section className={styles.panel}>
        <p className={styles.eyebrow}>Previous cycles</p>
        <div className={styles.history}>
          {store.history.map(c => <button key={c.id} className={styles.historyItem} onClick={() => setViewId(c.id)}>
            <strong>{niceDate(c.startDate)}</strong><span>{Object.keys(c.entries).length} readings</span>
          </button>)}
        </div>
        {viewId && viewed && <div className={styles.historyPreview}>
          <h3>Cycle beginning {niceDate(viewed.startDate)}</h3>
          <Chart cycle={viewed} />
          <button className={styles.secondary} onClick={() => setViewId(null)}>Close history view</button>
        </div>}
      </section>}

      <section className={styles.guide}>
        <p className={styles.eyebrow}>Standard measurement guide</p>
        <h2>For more consistent BBT readings</h2>
        <div className={styles.guideGrid}>
          <div><strong>1</strong><p>Measure immediately after waking, before getting out of bed, eating, drinking, exercising, or other activity.</p></div>
          <div><strong>2</strong><p>Measure at about the same time each morning, ideally after at least 3 hours of uninterrupted sleep.</p></div>
          <div><strong>3</strong><p>Use the same basal thermometer and the same measurement method throughout the cycle.</p></div>
          <div><strong>4</strong><p>Record illness, fever, poor sleep, alcohol, travel, shift work, or medication changes because they can affect a reading.</p></div>
        </div>
        <p className={styles.disclaimer}>BBT usually rises slightly after ovulation and is most useful for recognizing a pattern retrospectively. This tracker does not diagnose ovulation, infertility, pregnancy, or any medical condition and should not be used as the sole method of contraception.</p>
      </section>
    </section>
  </main>;
}
