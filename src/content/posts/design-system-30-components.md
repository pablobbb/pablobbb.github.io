---
title: "What I learned building a 30-component design system from scratch"
date: 2025-01-15
description: "The decisions, mistakes, and hard-won lessons from building a production design system used across three products."
tags: [design-systems, vue, frontend]
---

Building a design system from scratch sounds exciting. And it is — for about the first three weeks. Then reality sets in: the edge cases multiply, the stakeholders disagree, and the component you thought was simple turns out to have fourteen variants nobody told you about.

This is what I actually learned doing it at QubicaAMF.

## Start with the boring components

Everyone wants to build the fancy ones first — the data tables, the charts, the drag-and-drop lists. Resist this. Start with buttons, inputs, typography, spacing. These are the components everything else depends on, and getting them wrong means rebuilding half your system later.

We spent two weeks arguing about button variants before writing a line of code. That was not wasted time. Those conversations surfaced assumptions that would have caused bugs.

## Tokens before components

Design tokens — the named values for colors, spacing, type scales — should exist before any component does. They're the language your system speaks. Without them, every component becomes a negotiation.

We used CSS custom properties. Simple, effective, no build step. When the brand team wanted to update the primary color, it was one variable change, not a file-by-file search.

## The API is the product

A component's implementation is an internal detail. Its API — the props, the slots, the events — is what developers will deal with every day. Design the API first. Write the usage example before you write the component.

If the usage looks awkward, the design is wrong.

## Document every decision, not just the outcome

We used a simple decision log in Notion. Not for posterity — for the next engineer who asks "why does this work this way?" Six months later, that engineer was me.

## What I'd do differently

Ship earlier. We waited until the system felt "complete" before letting other teams use it. There is no complete. Ship at 60%, gather feedback, iterate. The real design system is the components we built along the way.
