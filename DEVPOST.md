# LessonBox — Devpost submission copy

## Tagline

Turn one teacher PDF into a source-grounded, multilingual lesson pack that works offline.

## Inspiration

Many teachers already have trusted curriculum PDFs, but converting those documents into clear, engaging lessons takes hours. The challenge is harder in multilingual classrooms and in schools where internet access is slow, expensive, or unreliable. We wanted to make the teacher's existing source material more useful without asking them to change how they teach.

## What it does

LessonBox gives a teacher one focused workflow: add a lesson PDF, select the grade and language, review a generated lesson with visible source references, edit the explanation, try an interactive activity, and download the result for offline use. The prototype demonstrates a Grade 6 photosynthesis lesson in Bangla and produces a self-contained HTML lesson that can be opened without internet access.

## How we built it

The prototype uses React, Vite, Phosphor Icons, responsive CSS, and browser-native file export. Codex supported the product design and implementation loop: translating the product brief into a teacher workspace, building interactions, testing desktop and mobile layouts, and validating the production build. The current demo uses structured sample content to make the complete experience reliable; the next integration step is PDF extraction plus the OpenAI Responses API for dynamic, source-verified lesson generation.

## Challenges we ran into

The hardest product decision was balancing trust with simplicity. Teachers need to see where content came from, but citations cannot overwhelm the lesson. Offline delivery also forced us to avoid a cloud-only demo: the exported lesson had to be a real standalone artifact. Supporting Bangla text, responsive layout, and a dense teacher workspace in one coherent interface required several visual QA passes.

## Accomplishments that we're proud of

- A focused end-to-end teacher journey instead of a generic chatbot.
- Visible page-level grounding throughout the lesson.
- A real offline download that remains interactive.
- A polished Bangla-first education demo designed for low-connectivity classrooms.
- A responsive interface built and tested by a solo founder in a short build window.

## What we learned

Offline-first is more than a technical constraint: it changes the product's value proposition. We also learned that source visibility should be part of the interface from the beginning, not added as a disclaimer. For education, confidence comes from making the teacher the reviewer and editor rather than presenting AI output as final.

## What's next for LessonBox

Next we will connect PDF parsing and the OpenAI API, generate citation-linked lesson blocks, add claim verification, and export printable worksheets and answer keys. We also plan to expand beyond Bangla, test with teachers, and measure lesson preparation time saved and offline lesson reuse.

## Built with

React, Vite, JavaScript, CSS, Phosphor Icons, Codex

