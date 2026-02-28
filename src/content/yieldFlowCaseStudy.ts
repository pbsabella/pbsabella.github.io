export const YIELD_FLOW_SECTIONS = [
  { id: 'itch', label: 'Empathize' },
  { id: 'problem', label: 'Define' },
  { id: 'decisions', label: 'Ideate' },
  { id: 'pivot', label: 'Iterate' },
  { id: 'build', label: 'Prototype' },
  { id: 'status', label: 'Test' },
  { id: 'takeaway', label: 'Learnings' },
];

export const YIELD_FLOW_META = [
  { label: 'Project', value: 'Personal' },
  { label: 'Stack', value: 'Next.js, Radix UI, shadcn/ui, Tailwind CSS' },
  { label: 'Focus', value: 'UX Design' },
];

export const YIELD_FLOW_DECISIONS = [
  {
    title: 'Net-of-tax by default.',
    description: 'The app calculates and displays interest after withholding tax. Showing gross figures is technically accurate and practically misleading: you can\'t spend the gross number. This one wasn\'t a debate.',
  },
  {
    title: 'Matured deposits stay visible.',
    description: 'A matured deposit is an idle asset. I kept them in the active view on purpose, flagged visually, until the user explicitly marks them settled. The friction is intentional.',
  },
  {
    title: 'No tooltips.',
    description: 'Tooltips are invisible to screen readers and difficult on mobile. I replaced them with permanent, inline helper text. Visible is accessible.',
    sub: 'No tooltips were harmed in the making of this app.',
  },
  {
    title: 'shadcn/ui as foundation.',
    description: 'I chose shadcn/ui because it gives me full control over styling while the accessibility heavy-lifting (ARIA, keyboard navigation) is handled correctly by default.',
  },
];

export const YIELD_FLOW_CONTENT = {
  itch: {
    paragraphs: [
      "Every few weeks I'd sit down with a messy multi-tab spreadsheet and try to answer three questions:",
      "I had 5+ different banks, overlapping tenures, and rates that change without warning. The spreadsheet technically had all the data. But turning it into a decision took way too long; and one missed maturity window means your cash sits idle while the market moves.",
      "I'd been fighting the ritual for months. Then I started the Google UX Design course and found myself studying user empathy while living the exact problem they were describing. That was enough. I stopped patching the spreadsheet and started building a replacement."
    ],
    list: [
      "How much interest am I actually getting this month, after tax?",
      "When does each deposit mature, and do I need to act on it?",
      "Where should the money go next?"
    ]
  },
  problem: {
    paragraphs: [
      "The core issue wasn't missing data. It was scattered data with no single view of what I could actually spend or move.",
      "Most banking dashboards show you balances: the total pile. But when you're rotating money across multiple time deposits, what you need to know is:"
    ],
    items: [
      { id: '01', title: "What's liquid now?", description: "(or becoming liquid soon)" },
      { id: '02', title: "What's the net interest hitting my account this month?", description: "(not gross: what I actually keep)" },
      { id: '03', title: "What's sitting idle and costing me yield?", description: "" }
    ],
    story: "As someone actively rotating across banks, I need to see my real take-home interest per month, know exactly when my deposits mature, and have a clear signal for when to act: all in one place."
  },
  pivot: {
    paragraphs: [
      "My first instinct was to reduce entry friction to zero. The concept: a smart setup wizard that already knows each bank's products. You pick your bank, pick the product, and the form pre-fills the rate, tenure, and tax logic automatically.",
      "It looked great. Then I thought it through.",
      "Digital banks change their rates constantly; sometimes weekly. Maintaining a live database of every product from every bank would be a full-time job I wasn't signing up for.",
      "If the wizard confidently pre-filled a rate that expired last Tuesday, I'd be giving users false numbers on their financial planning. That's worse than no tool at all.",
      "I pivoted to a single, well-designed entry form where the user provides the data directly. It's a small amount of extra friction: worth it to make the app's output trustworthy."
    ],
    highlight: "So I killed it.",
    note: "This is a decision-support tool, not an automation."
  },
  build: {
    paragraphs: [
      "I skipped Figma and went straight to code. I know, I was breaking the process. But as someone playing both designer and engineer, I was eager to get into the browser. For a solo project, iterating on a Figma file felt like an unnecessary middle step; I wanted the immediate feedback that only the actual medium provides.",
      "My process was closer to described prototyping: I'd define the structure and logic in plain language, use AI to generate the implementation quickly, then review and refine.",
      "The hierarchy makes the budgeting question and the rotation question answerable at a glance. I solved it by nesting the principal return as subdued subtext under each maturity payout: visually present but clearly secondary."
    ],
    insight: {
      title: "The insight that came out of building fast:",
      content: "The cash flow projection needed to show two very different things in the same view: interest earned (what I budget) and principal returned (what I can move). These look like the same number in a spreadsheet. They're completely different decisions."
    },
    quote: "Wearing the hats of product designer, engineer, and user simultaneously; and how AI made that workable without making it brainless; is a story for another post.",
  },
  status: {
    paragraphs: [
      "YieldFlow is a living prototype. I'm using it for my own finances, which means it's getting tested every time a deposit matures or a rate changes. Real-use testing catches things that designed scenarios don't: edge cases in the math, labeling that's clear when you're focused but confusing on a Sunday night, flows that feel fine in isolation but break down under actual data.",
      "It's not a product. It's a hypothesis I'm testing one maturity date at a time."
    ]
  },
  takeaway: {
    quote: "The Design Thinking Framework taught me to stop thinking about features and start thinking about tasks. YieldFlow isn't a calculator: it's a decision-support tool.",
    paragraphs: [
      "That reframe changed every choice in this project. The wizard died because it optimized for setup speed instead of the actual task (trusting the math). The tooltip ban happened because the task is decision-making under mild stress, not a tutorial. The net-of-tax default exists because the task is budgeting real cash, not reading a statement.",
      "I've shipped a lot of products over the past decade. The best ones always had a designer nearby who could say \"but what is the user actually trying to do right now?\" This project was the first time I internalized that question well enough to ask it myself; and let it override my first instinct."
    ],
    closing: "That's the intersection I was after."
  }
};
