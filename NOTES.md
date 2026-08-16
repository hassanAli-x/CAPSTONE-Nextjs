# Accessibility Component Notes

## Modal vs shadcn Dialog

### 1. Focus management

My modal manually manages focus using `useRef` and keyboard
event listeners. The shadcn Dialog uses Radix primitives that
provide more comprehensive focus management.

### 2. Dialog structure

My implementation manually manages the dialog, overlay, and
keyboard behavior. The shadcn implementation separates these
responsibilities into reusable primitives such as Dialog,
DialogTrigger, DialogContent, DialogTitle, and DialogDescription.

## Tabs vs shadcn Tabs

### 3. Keyboard behavior

My Tabs implementation manually handles ArrowLeft, ArrowRight,
Home, and End. The shadcn implementation delegates the tab
behavior to Radix's Tabs primitives and provides a more complete
state and focus management system.

### 4. Component API

My Tabs component receives an array of tabs and renders the
entire structure itself. shadcn provides separate primitives
such as Tabs, TabsList, TabsTrigger, and TabsContent, allowing
the structure to be composed more flexibly.