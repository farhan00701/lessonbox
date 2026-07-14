import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowSquareOut,
  Atom,
  BookOpenText,
  CaretDown,
  Check,
  CheckCircle,
  ClipboardText,
  CloudCheck,
  Cube,
  DownloadSimple,
  Drop,
  FilePdf,
  FileText,
  GlobeHemisphereWest,
  GraduationCap,
  HandTap,
  Leaf,
  ListNumbers,
  MagicWand,
  PencilSimple,
  Plant,
  ShieldCheck,
  Sun,
  Tag,
  Target,
  UserCircle,
  X,
} from "@phosphor-icons/react";

const outline = [
  "What is photosynthesis?",
  "Raw materials: sunlight, water, carbon dioxide",
  "Where it happens: leaves (chloroplasts)",
  "Process: making food",
  "Word equation",
  "Importance in nature",
];

const sequenceItems = [
  { id: "sun", label: "সূর্যের আলো", Icon: Sun },
  { id: "water", label: "পানি শোষণ", Icon: Drop },
  { id: "carbon", label: "কার্বন ডাই-অক্সাইড গ্রহণ", Icon: Atom },
  { id: "food", label: "খাদ্য (গ্লুকোজ) তৈরি", Icon: Leaf },
];

const banglaExplanation =
  "উদ্ভিদ সূর্যের আলো, পানি ও কার্বন ডাই-অক্সাইড ব্যবহার করে নিজের খাবার তৈরি করে। পাতার সবুজ রঞ্জক ক্লোরোফিল সূর্যের আলো শোষণ করে এবং এই প্রক্রিয়ায় গ্লুকোজ ও অক্সিজেন তৈরি হয়।";

function IconCircle({ children, green = false }) {
  return <span className={`icon-circle ${green ? "green" : ""}`}>{children}</span>;
}

function offlineLessonHtml() {
  return `<!doctype html>
<html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>LessonBox — আলোকসংশ্লেষণ</title><style>
body{font-family:"Noto Sans Bengali",system-ui,sans-serif;margin:0;background:#f6faf7;color:#152044}main{max-width:760px;margin:auto;padding:32px}header{background:#173a91;color:white;padding:24px;border-radius:18px}section{background:white;margin-top:18px;padding:24px;border:1px solid #dce7df;border-radius:16px}h1,h2{margin-top:0}.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.step{padding:16px 8px;text-align:center;border:1px solid #9bc9a7;border-radius:12px;background:#f7fcf8}.quiz button{display:block;width:100%;text-align:left;padding:12px;margin:8px 0;border:1px solid #cbd7ee;background:white;border-radius:10px;font:inherit}.quiz button:hover{border-color:#258642}.note{color:#287b3e;font-weight:700}@media(max-width:600px){main{padding:14px}.steps{grid-template-columns:1fr 1fr}}
</style></head><body><main><header><small>LessonBox · Grade 6 · Bangla</small><h1>আলোকসংশ্লেষণ কী?</h1><p>ইন্টারনেট ছাড়াই শেখার পাঠ</p></header><section><h2>সংক্ষিপ্ত ব্যাখ্যা</h2><p>${banglaExplanation}</p></section><section><h2>ধাপগুলো</h2><div class="steps"><div class="step"><strong>১</strong><br>সূর্যের আলো</div><div class="step"><strong>২</strong><br>পানি শোষণ</div><div class="step"><strong>৩</strong><br>কার্বন ডাই-অক্সাইড</div><div class="step"><strong>৪</strong><br>গ্লুকোজ তৈরি</div></div></section><section class="quiz"><h2>দ্রুত যাচাই</h2><p>আলোকসংশ্লেষণের জন্য কোনটি প্রয়োজন নয়?</p><button onclick="this.parentElement.querySelector('.note').textContent='আবার চেষ্টা করো'">সূর্যের আলো</button><button onclick="this.parentElement.querySelector('.note').textContent='আবার চেষ্টা করো'">পানি</button><button onclick="this.parentElement.querySelector('.note').textContent='আবার চেষ্টা করো'">কার্বন ডাই-অক্সাইড</button><button onclick="this.parentElement.querySelector('.note').textContent='সঠিক! মাটি সরাসরি আলোকসংশ্লেষণের উপাদান নয়।'">মাটি</button><p class="note"></p></section><p>Source: Science_Grade6_Photosynthesis.pdf, pages 2–4</p></main></body></html>`;
}

export function App() {
  const fileInput = useRef(null);
  const [filename, setFilename] = useState("Science_Grade6_Photosynthesis.pdf");
  const [grade, setGrade] = useState("Grade 6");
  const [language, setLanguage] = useState("Bangla");
  const [editing, setEditing] = useState(false);
  const [explanation, setExplanation] = useState(banglaExplanation);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [sequence, setSequence] = useState(sequenceItems);
  const [sequenceMessage, setSequenceMessage] = useState("ধাপগুলো সঠিক ক্রমে আছে");
  const [toast, setToast] = useState("");

  const replaceFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFilename(file.name);
    setGenerated(false);
    setToast("Source lesson replaced. Create the lesson again.");
  };

  const createLesson = () => {
    setGenerating(true);
    setToast("");
    window.setTimeout(() => {
      setGenerated(true);
      setGenerating(false);
      setExplanation(banglaExplanation);
      setToast("Bangla lesson created and grounded to pages 2–4.");
    }, 1150);
  };

  const shuffleSequence = () => {
    setSequence([sequenceItems[2], sequenceItems[0], sequenceItems[3], sequenceItems[1]]);
    setSequenceMessage("ধাপগুলো ঠিক করতে কার্ডে ক্লিক করো");
  };

  const fixSequence = () => {
    setSequence(sequenceItems);
    setSequenceMessage("দারুণ! সঠিক ক্রম হয়েছে");
  };

  const downloadLesson = () => {
    const blob = new Blob([offlineLessonHtml()], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lessonbox-photosynthesis-bangla.html";
    link.click();
    URL.revokeObjectURL(url);
    setToast("Offline lesson downloaded. Open it without internet.");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark"><Cube weight="fill" /></span><span>LessonBox</span></div>
        <div className="top-divider" />
        <button className="top-file" onClick={() => fileInput.current?.click()}><FilePdf /><span>{filename.replace("Science_Grade6_", "")}</span></button>
        <label className="top-select"><GraduationCap /><select value={grade} onChange={(e) => setGrade(e.target.value)}><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option></select><CaretDown /></label>
        <label className="top-select"><GlobeHemisphereWest /><select value={language} onChange={(e) => setLanguage(e.target.value)}><option>Bangla</option><option>English</option><option>Hindi</option></select><CaretDown /></label>
        <div className="top-spacer" />
        <span className="status"><CheckCircle weight="bold" />Source grounded</span>
        <span className="status"><CloudCheck weight="bold" />Works offline</span>
        <button className="profile"><span>AF</span><span className="profile-copy">Afsana Fatema<small>Teacher</small></span><CaretDown /></button>
      </header>

      <main className="workspace">
        <aside className="source-panel">
          <section>
            <h2><span>1.</span> Your source lesson</h2>
            <button className="source-card" onClick={() => fileInput.current?.click()}>
              <span className="file-icon"><FilePdf weight="fill" /></span>
              <span className="file-copy"><strong>{filename}</strong><small>6 pages&nbsp; • &nbsp;PDF</small><em><Check weight="bold" /> Uploaded</em></span>
              <span className="source-card-footer">Source: pages 2–4 <span>Edit <PencilSimple /></span></span>
            </button>
            <input ref={fileInput} hidden type="file" accept="application/pdf" onChange={replaceFile} />
          </section>

          <div className="rule" />

          <section className="outline-card">
            <h3>Outline</h3>
            <ol>{outline.map((item) => <li key={item}>{item}</li>)}</ol>
            <button onClick={() => setSourceOpen(true)}><FileText /> Source: pages 2–4 <span>View source <ArrowSquareOut /></span></button>
          </section>

          <section className="create-block">
            <h2><span>3.</span> Create your lesson</h2>
            <p>We'll generate a source-grounded, Bangla interactive lesson pack.</p>
            <button className="create-button" onClick={createLesson} disabled={generating}><MagicWand weight="fill" />{generating ? "Creating lesson…" : "Create lesson"}</button>
            <small><ShieldCheck /> No student data. Works offline.</small>
          </section>
        </aside>

        <section className={`lesson-panel ${generated ? "" : "muted"}`}>
          <div className="lesson-scroll">
            <div className="lesson-title-row">
              <span className="lesson-mark"><Plant weight="fill" /></span>
              <div><h1>Photosynthesis: Food Making in Plants</h1><p>Generated lesson ({language}) <b>•</b> {grade}</p></div>
            </div>

            <div className="lesson-rule" />

            <div className="content-row">
              <IconCircle><Target /></IconCircle>
              <div><h3>Learning Objective</h3><p>Students will be able to explain how plants make food using sunlight, water, and carbon dioxide.</p></div>
            </div>

            <div className="content-row bangla-row">
              <IconCircle green><BookOpenText /></IconCircle>
              <div><div className="section-heading"><h3>সংক্ষিপ্ত ব্যাখ্যা (Bangla)</h3><button onClick={() => setEditing(!editing)}>{editing ? <Check /> : <PencilSimple />}{editing ? "Save" : "Edit"}</button></div>
                {editing ? <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} /> : <p lang="bn">{explanation}</p>}
              </div>
            </div>

            <div className="content-row concepts-row">
              <IconCircle><Tag /></IconCircle>
              <div className="concept-line"><h3>Key Concepts</h3><div>{["Sunlight", "Chlorophyll", "Carbon Dioxide", "Water", "Glucose", "Oxygen"].map((item) => <span key={item}>{item}</span>)}</div></div>
            </div>

            <div className="content-row activity-row">
              <IconCircle><ClipboardText /></IconCircle>
              <div className="activity-card">
                <div className="activity-heading"><span><HandTap weight="fill" /></span><div><h3>ধাপগুলো সাজাও</h3><p>আলোকসংশ্লেষণের সঠিক ধাপগুলো সঠিক ক্রমে সাজাও।</p></div><button onClick={shuffleSequence}><ListNumbers /> Try</button></div>
                <div className="sequence">
                  {sequence.map(({ id, label, Icon }, index) => (
                    <div className="sequence-group" key={id}>
                      <button className={`sequence-card ${id}`} onClick={sequenceMessage.includes("ঠিক করতে") ? fixSequence : undefined}><Icon weight="fill" /><span>{label}</span></button>
                      {index < sequence.length - 1 && <ArrowRight className="sequence-arrow" weight="bold" />}
                    </div>
                  ))}
                </div>
                <button className="drop-zone" onClick={fixSequence}><MagicWand /> {sequenceMessage}</button>
              </div>
            </div>

            <div className="content-row references-row">
              <IconCircle><BookOpenText /></IconCircle>
              <div><h3>Source References</h3><p>This content is grounded in your source.</p><ul><li>Page 2 – What is Photosynthesis?</li><li>Page 3 – Ingredients Plants Need</li><li>Page 4 – The Photosynthesis Process</li></ul></div>
            </div>
          </div>

          <footer className="lesson-footer">
            <div><FileText /><span>Includes: lesson guide, activities,<br />worksheets, and answer key</span></div>
            <button onClick={downloadLesson}><DownloadSimple weight="bold" /> Download offline lesson</button>
          </footer>
        </section>
      </main>

      {toast && <button className="toast" onClick={() => setToast("")}><CheckCircle weight="fill" />{toast}<X /></button>}

      {sourceOpen && <div className="modal-backdrop" onMouseDown={() => setSourceOpen(false)}><div className="modal" onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSourceOpen(false)}><X /></button><FilePdf className="modal-icon" weight="fill" /><small>Source pages 2–4</small><h2>Photosynthesis</h2><p>Green plants use sunlight, water, and carbon dioxide to make glucose. The process occurs mainly in leaves, where chlorophyll captures light energy. Oxygen is released as a result.</p><div className="source-highlight">Sunlight + water + carbon dioxide → glucose + oxygen</div><button className="modal-done" onClick={() => setSourceOpen(false)}>Done</button></div></div>}
    </div>
  );
}
